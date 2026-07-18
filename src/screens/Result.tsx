import { useMemo, useState } from 'react'
import type { Config, FlatItem, Session } from '../App'
import { SvmLogo } from '../components/SvmLogo'
import { Inline } from '../lib/inlineMarkdown'
import { CESUUR, MODE_TITLES, gradeItem, type Answer, type ExamItem, type ExamQuestion, type Verdict } from '../lib/exam'

function nl(n: number, decimals = 2): string {
  return n.toLocaleString('nl-NL', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}

function fmtDateTime(ms: number): string {
  return new Date(ms).toLocaleString('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const VERDICT_LABEL: Record<Verdict, string> = {
  goed: 'Goed',
  deels: 'Deels goed',
  fout: 'Fout',
  leeg: 'Niet beantwoord',
}
const VERDICT_COLOR: Record<Verdict, string> = {
  goed: 'text-green-700',
  deels: 'text-amber-600',
  fout: 'text-red-600',
  leeg: 'text-slate-400',
}

interface Graded {
  flat: FlatItem
  fraction: number
  verdict: Verdict
}

export function Result({
  session,
  flat,
  onHome,
  onRestart,
  onRetry,
}: {
  session: Session
  flat: FlatItem[]
  onHome: () => void
  onRestart: (config: Config) => void
  onRetry: (items: ExamItem[]) => void
}) {
  const [openId, setOpenId] = useState<string | null>(null)

  const graded: Graded[] = useMemo(
    () =>
      flat.map((f) => {
        const q = f.item.question as ExamQuestion
        const { fraction, verdict } = gradeItem(q, session.answers[q.id])
        return { flat: f, fraction, verdict }
      }),
    [flat, session.answers],
  )

  const total = graded.length
  const score = graded.reduce((s, g) => s + g.fraction, 0)
  const pct = total ? (score / total) * 100 : 0
  const passed = pct >= CESUUR * 100
  const counts = {
    goed: graded.filter((g) => g.verdict === 'goed').length,
    deels: graded.filter((g) => g.verdict === 'deels').length,
    fout: graded.filter((g) => g.verdict === 'fout').length,
    leeg: graded.filter((g) => g.verdict === 'leeg').length,
  }

  // Per blok
  const blocks = session.blocks.map((b) => {
    const items = graded.filter((g) => g.flat.block === b)
    const bScore = items.reduce((s, g) => s + g.fraction, 0)
    const bPct = items.length ? (bScore / items.length) * 100 : 0
    return { block: b, items, bScore, bPct }
  })

  // Per onderwerp — foutenanalyse
  const perTopic = useMemo(() => {
    const map = new Map<
      string,
      { code: string; title: string; correct: number; total: number }
    >()
    for (const g of graded) {
      const key = g.flat.item.topicCode
      const cur = map.get(key) ?? {
        code: key,
        title: g.flat.item.topicTitle,
        correct: 0,
        total: 0,
      }
      cur.total += 1
      cur.correct += g.fraction
      map.set(key, cur)
    }
    return [...map.values()]
      .map((t) => ({ ...t, pct: t.total ? (t.correct / t.total) * 100 : 0 }))
      .sort((a, b) => a.pct - b.pct)
  }, [graded])

  const aandacht = perTopic.filter((t) => t.pct < CESUUR * 100)

  // Vragen die niet (volledig) goed waren — basis voor de herkansing.
  const notMastered = graded.filter((g) => g.verdict !== 'goed')
  const isHerkansing = session.config.mode === 'HERKANSING'
  const round = session.retryRound ?? 0

  const duurMin = session.finishedAt
    ? Math.max(1, Math.round((session.finishedAt - session.startedAt) / 60000))
    : 0

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-5 py-3 flex items-start justify-between gap-3">
          <h1 className="font-bold text-base sm:text-xl text-slate-800 leading-tight">
            Resultaat {MODE_TITLES[session.config.mode]}
            {isHerkansing && round > 0 && <span className="font-normal text-slate-500"> — ronde {round}</span>}
          </h1>
          <SvmLogo className="hidden sm:flex" />
        </div>
      </header>
      <div className="svm-metal h-2" />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-3 sm:px-5 py-5 space-y-5">
          {/* ── Overzicht ── */}
          <section className="bg-white border border-slate-300 rounded-sm overflow-hidden">
            <div className="svm-blockbar px-3 py-2 font-bold text-slate-800">Overzicht</div>
            <div className="p-4 grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
              <Row label="Kandidaat" value={session.config.candidate} />
              <Row label="Aantal vragen" value={String(total)} />
              <Row label="Toets beëindigd" value={session.finishedAt ? fmtDateTime(session.finishedAt) : '—'} />
              <Row label="Aantal goed" value={String(counts.goed)} />
              <Row label="Bestede tijd" value={`${duurMin} minuten`} />
              <Row label="Aantal gedeeltelijk goed" value={String(counts.deels)} />
              <Row label="Score" value={`${nl(score)} (${nl(pct)}%)`} strong />
              <Row label="Aantal fout" value={String(counts.fout)} />
              <Row
                label="Resultaat"
                value={passed ? 'Geslaagd' : 'Gezakt'}
                valueClass={`font-bold ${passed ? 'text-svm-600' : 'text-red-600'}`}
              />
              <Row label="Aantal niet beantwoord" value={String(counts.leeg)} />
            </div>
            <div className="px-4 pb-4 text-sm text-slate-700">
              {passed ? (
                <p>
                  <b>Van harte gefeliciteerd!</b> Met {nl(pct)}% zit je boven de cesuur van{' '}
                  {Math.round(CESUUR * 100)}% — dit zou een voldoende zijn.
                </p>
              ) : (
                <p>
                  Nog niet gehaald: met {nl(pct)}% zit je onder de cesuur van{' '}
                  {Math.round(CESUUR * 100)}%. Bekijk hieronder welke onderwerpen meer aandacht nodig
                  hebben en probeer het opnieuw.
                </p>
              )}
            </div>
          </section>

          {/* ── Onderwerpen die meer aandacht nodig hebben ── */}
          <section className="bg-white border border-slate-300 rounded-sm overflow-hidden">
            <div className="svm-blockbar px-3 py-2 font-bold text-slate-800">
              Onderwerpen die meer aandacht nodig hebben
            </div>
            <div className="p-4">
              {aandacht.length === 0 ? (
                <p className="text-sm text-slate-600">
                  Sterk! Geen enkel onderwerp scoorde onder de cesuur. 🎉
                </p>
              ) : (
                <ul className="space-y-2">
                  {aandacht.map((t) => (
                    <li key={t.code} className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400 w-10 shrink-0">{t.code}</span>
                      <span className="flex-1 text-sm text-slate-800">{t.title}</span>
                      <span className="text-xs text-slate-500 tabular-nums w-24 text-right">
                        {nl(t.correct, 0)}/{t.total} goed
                      </span>
                      <div className="w-24 h-2 bg-slate-200 rounded overflow-hidden shrink-0">
                        <div
                          className={`h-full ${t.pct < 50 ? 'bg-red-500' : 'bg-amber-500'}`}
                          style={{ width: `${Math.max(4, t.pct)}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ── Herkansing ── */}
          <section className="bg-white border border-slate-300 rounded-sm overflow-hidden">
            <div className="svm-blockbar px-3 py-2 font-bold text-slate-800">Herkansing</div>
            <div className="p-4">
              {notMastered.length === 0 ? (
                <p className="text-sm text-slate-700">
                  {isHerkansing ? (
                    <>
                      🎉 <b>Foutloos!</b> Je hebt nu alle vragen uit deze herkansing goed. Niets meer om
                      te herkansen.
                    </>
                  ) : (
                    'Alle vragen waren goed — niets om te herkansen. 🎉'
                  )}
                </p>
              ) : (
                <>
                  <p className="text-sm text-slate-700 mb-3">
                    {notMastered.length} van de {total} vragen waren niet (volledig) goed. Oefen ze
                    apart opnieuw — je kunt dit net zo vaak herhalen tot je ze allemaal foutloos hebt.
                  </p>
                  <button
                    onClick={() => onRetry(notMastered.map((g) => g.flat.item))}
                    className="w-full svm-blockbar rounded-md py-3 font-bold text-slate-800 hover:brightness-105"
                  >
                    Herkansing: oefen deze {notMastered.length} vragen opnieuw
                  </button>
                </>
              )}
            </div>
          </section>

          {/* ── Vraagoverzicht per blok ── */}
          <section className="bg-white border border-slate-300 rounded-sm overflow-hidden">
            <div className="svm-blockbar px-3 py-2 font-bold text-slate-800">Vraagoverzicht</div>
            <div className="p-4 space-y-5">
              {blocks.map(({ block, items, bScore, bPct }) => (
                <div key={block.section}>
                  <div className="flex items-baseline justify-between border-b border-slate-200 pb-1">
                    <span className="font-bold text-slate-800 text-sm">
                      {block.section}. {block.label}
                    </span>
                    <span className="text-sm text-slate-600 tabular-nums">
                      {nl(bScore)} ({nl(bPct, 1)}%)
                    </span>
                  </div>
                  <ul className="mt-1">
                    {items.map((g) => {
                      const q = g.flat.item.question as ExamQuestion
                      const open = openId === q.id
                      return (
                        <li key={q.id} className="border-b border-slate-100 last:border-b-0">
                          <button
                            onClick={() => setOpenId(open ? null : q.id)}
                            className="w-full flex items-center gap-3 py-2 text-left"
                          >
                            <span className="text-slate-400 text-xs w-5">{open ? '▾' : '▸'}</span>
                            <span className="w-6 text-sm text-slate-500 tabular-nums">
                              {g.flat.number}
                            </span>
                            <span className="flex-1 text-sm text-slate-700 truncate">
                              <Inline text={q.prompt} />
                            </span>
                            <span className={`text-sm font-medium shrink-0 ${VERDICT_COLOR[g.verdict]}`}>
                              {VERDICT_LABEL[g.verdict]}
                            </span>
                          </button>
                          {open && <Feedback q={q} answer={session.answers[q.id]} />}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => onRestart(session.config)}
              className="flex-1 svm-blockbar rounded-md py-3 font-bold text-slate-800 hover:brightness-105"
            >
              Nieuw examen (zelfde instelling)
            </button>
            <button
              onClick={onHome}
              className="flex-1 bg-white border border-slate-300 rounded-md py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Terug naar start
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

function Row({
  label,
  value,
  strong,
  valueClass = '',
}: {
  label: string
  value: string
  strong?: boolean
  valueClass?: string
}) {
  return (
    <div className="flex justify-between gap-3 border-b border-slate-100 py-0.5">
      <span className="text-slate-500">{label}:</span>
      <span className={`text-slate-800 text-right ${strong ? 'font-semibold' : ''} ${valueClass}`}>
        {value}
      </span>
    </div>
  )
}

function Feedback({ q, answer }: { q: ExamQuestion; answer: Answer | undefined }) {
  return (
    <div className="pb-3 pl-14 pr-2 text-sm">
      {(q.type === 'mc' || q.type === 'multi') && <ChoiceFeedback q={q} answer={answer} />}
      {q.type === 'invul' && <InvulFeedback q={q} answer={answer} />}
      {q.type === 'match' && <MatchFeedback q={q} answer={answer} />}
      {q.type === 'open' && <OpenFeedback q={q} answer={answer} />}
      {q.explanation && (
        <p className="mt-2 text-slate-600 bg-slate-50 border border-slate-200 rounded p-2">
          <Inline text={q.explanation} />
        </p>
      )}
    </div>
  )
}

function ChoiceFeedback({
  q,
  answer,
}: {
  q: Extract<ExamQuestion, { type: 'mc' | 'multi' }>
  answer: Answer | undefined
}) {
  const chosen = q.type === 'mc' ? (answer?.mc !== undefined ? [answer.mc] : []) : (answer?.multi ?? [])
  const correct = q.type === 'mc' ? [q.correctIndex] : q.correctIndices
  return (
    <ul className="space-y-1">
      {q.options.map((opt, i) => {
        const isCorrect = correct.includes(i)
        const isChosen = chosen.includes(i)
        return (
          <li
            key={i}
            className={`flex items-start gap-2 ${
              isCorrect ? 'text-green-700 font-medium' : isChosen ? 'text-red-600' : 'text-slate-600'
            }`}
          >
            <span className="w-4 shrink-0">{isCorrect ? '✓' : isChosen ? '✗' : ''}</span>
            <span>
              <Inline text={opt} />
            </span>
          </li>
        )
      })}
    </ul>
  )
}

function InvulFeedback({
  q,
  answer,
}: {
  q: Extract<ExamQuestion, { type: 'invul' }>
  answer: Answer | undefined
}) {
  const typed = answer?.invul?.trim()
  const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ')
  const ok = !!typed && q.acceptableAnswers.some((a) => norm(a) === norm(typed))
  return (
    <div className="space-y-1">
      <p className={ok ? 'text-green-700 font-medium' : 'text-red-600'}>
        Jouw antwoord: {typed ? typed : <em className="text-slate-400">(niet ingevuld)</em>}
      </p>
      <p className="text-slate-600">Juiste antwoord: {q.acceptableAnswers[0]}</p>
    </div>
  )
}

function MatchFeedback({
  q,
  answer,
}: {
  q: Extract<ExamQuestion, { type: 'match' }>
  answer: Answer | undefined
}) {
  return (
    <ul className="space-y-1">
      {q.pairs.map((p, i) => {
        const chosen = answer?.match?.[i]
        const ok = chosen === p.right
        return (
          <li key={i} className={ok ? 'text-green-700' : 'text-red-600'}>
            <span className="font-medium">
              <Inline text={p.left} />
            </span>{' '}
            → {chosen ?? <em className="text-slate-400">niet gekozen</em>}
            {!ok && <span className="text-slate-500"> (juist: {p.right})</span>}
          </li>
        )
      })}
    </ul>
  )
}

function OpenFeedback({
  q,
  answer,
}: {
  q: Extract<ExamQuestion, { type: 'open' }>
  answer: Answer | undefined
}) {
  const label: Record<'goed' | 'deels' | 'fout', string> = {
    goed: 'Goed (zelf beoordeeld)',
    deels: 'Deels goed (zelf beoordeeld)',
    fout: 'Fout (zelf beoordeeld)',
  }
  return (
    <div className="space-y-2">
      {answer?.openText && (
        <p className="text-slate-700">
          <span className="font-medium">Jouw antwoord: </span>
          {answer.openText}
        </p>
      )}
      <p className="text-slate-600">
        <span className="font-medium">Modelantwoord: </span>
        <Inline text={q.acceptableAnswers[0]} />
      </p>
      {answer?.openSelf && <p className="text-slate-500 italic">{label[answer.openSelf]}</p>}
    </div>
  )
}
