import { useMemo, useState } from 'react'
import { asset } from '../lib/asset'
import { Inline } from '../lib/inlineMarkdown'
import { BlockBar } from './BlockBar'
import { SymbolIcon } from './SymbolIcon'
import type { FlatItem } from '../App'
import type { Answer, ExamQuestion } from '../lib/exam'
import type { LessonImage } from '../types/content'

const IMG_W: Record<NonNullable<LessonImage['width']>, string> = {
  sm: 'max-w-[220px]',
  md: 'max-w-[360px]',
  lg: 'max-w-[520px]',
  full: 'max-w-full',
}

const BLOOM_LABEL: Record<string, string> = {
  Kennis: 'Kennis (K)',
  Begrip: 'Begrip (B)',
  Toepassen: 'Toepassen (T)',
  Analyseren: 'Analyseren (A)',
  Evalueren: 'Evalueren (E)',
  Synthese: 'Synthese (S)',
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function QuestionView({
  flat,
  answer,
  onAnswer,
}: {
  flat: FlatItem
  answer: Answer | undefined
  onAnswer: (a: Answer) => void
}) {
  const q = flat.item.question as ExamQuestion
  const { block } = flat

  return (
    <div className="svm-watermark">
      <div className="relative z-10">
        <BlockBar section={block.section} label={block.label} intro={block.intro} />

        {/* Vraagtekst */}
        <div className="border border-slate-300 border-t-0 bg-slate-50/70 px-4 py-3">
          {q.bloom && (
            <span className="inline-block mb-2 text-[11px] font-medium text-svm-700 bg-svm-100 border border-svm-300 rounded px-1.5 py-0.5">
              {BLOOM_LABEL[q.bloom] ?? q.bloom}
            </span>
          )}
          <p className="text-slate-800 leading-relaxed whitespace-pre-line">
            <Inline text={q.prompt} />
          </p>

          {q.symbol && (
            <div className="mt-3 inline-flex flex-col items-center gap-1 bg-white border border-slate-300 rounded p-3">
              <SymbolIcon name={q.symbol} />
              <span className="text-[11px] text-slate-400">Symbool uit de renvooi</span>
            </div>
          )}

          {q.image && (
            <figure className="mt-3">
              <img
                src={asset(q.image.src)}
                alt={q.image.caption}
                className={`w-full ${IMG_W[q.image.width ?? 'md']} rounded border border-slate-300 bg-white`}
              />
              {q.image.caption && (
                <figcaption className="text-xs text-slate-500 mt-1">{q.image.caption}</figcaption>
              )}
            </figure>
          )}

          {q.attachments && q.attachments.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {q.attachments.map((a) => (
                <a
                  key={a.href}
                  href={asset(a.href)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-white border border-slate-300 rounded px-2 py-1 text-svm-700 hover:bg-svm-50"
                >
                  📎 {a.label}
                  {a.blad ? ` · ${a.blad}` : ''}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Antwoorden */}
        {q.type === 'mc' && <ChoiceAnswers q={q} answer={answer} onAnswer={onAnswer} multiple={false} />}
        {q.type === 'multi' && <ChoiceAnswers q={q} answer={answer} onAnswer={onAnswer} multiple />}
        {q.type === 'invul' && <InvulAnswer answer={answer} onAnswer={onAnswer} />}
        {q.type === 'match' && <MatchAnswer q={q} answer={answer} onAnswer={onAnswer} />}
        {q.type === 'open' && <OpenAnswer q={q} answer={answer} onAnswer={onAnswer} />}

        {q.type === 'multi' && (
          <p className="text-xs text-slate-500 mt-2 px-1">Meerdere antwoorden kunnen juist zijn.</p>
        )}
        {q.type === 'invul' && (
          <p className="text-xs text-slate-500 mt-2 px-1">Typ het ontbrekende woord, getal of de code in.</p>
        )}
        {q.type === 'match' && (
          <p className="text-xs text-slate-500 mt-2 px-1">Koppel elk linkeritem aan het juiste rechteritem.</p>
        )}
      </div>
    </div>
  )
}

function ChoiceAnswers({
  q,
  answer,
  onAnswer,
  multiple,
}: {
  q: Extract<ExamQuestion, { type: 'mc' | 'multi' }>
  answer: Answer | undefined
  onAnswer: (a: Answer) => void
  multiple: boolean
}) {
  return (
    <div className="border border-slate-300 border-t-0 bg-white mt-4 sm:mt-6">
      {q.options.map((opt, i) => {
        const chosen = multiple ? (answer?.multi ?? []) : []
        const selected = multiple ? chosen.includes(i) : answer?.mc === i
        return (
          <label
            key={i}
            className={`flex items-start gap-3 px-4 py-4 cursor-pointer border-b border-slate-200 last:border-b-0 ${
              selected ? 'bg-svm-50' : 'hover:bg-slate-50'
            }`}
          >
            <span
              className={`mt-0.5 grid place-items-center w-4 h-4 border ${
                multiple ? '' : 'rounded-full'
              } ${selected ? 'border-svm-600 bg-white' : 'border-slate-400 bg-white'}`}
            >
              {selected && (
                <span className={`bg-svm-600 ${multiple ? 'w-2.5 h-2.5' : 'w-2 h-2 rounded-full'}`} />
              )}
            </span>
            <input
              type={multiple ? 'checkbox' : 'radio'}
              className="sr-only"
              name={multiple ? undefined : q.id}
              checked={selected}
              onChange={() => {
                if (multiple) {
                  const next = selected ? chosen.filter((x) => x !== i) : [...chosen, i].sort((a, b) => a - b)
                  onAnswer({ multi: next })
                } else {
                  onAnswer({ mc: i })
                }
              }}
            />
            <span className="text-slate-800">
              <Inline text={opt} />
            </span>
          </label>
        )
      })}
    </div>
  )
}

function InvulAnswer({
  answer,
  onAnswer,
}: {
  answer: Answer | undefined
  onAnswer: (a: Answer) => void
}) {
  return (
    <div className="border border-slate-300 border-t-0 bg-white mt-4 sm:mt-6 p-4">
      <input
        type="text"
        value={answer?.invul ?? ''}
        onChange={(e) => onAnswer({ invul: e.target.value })}
        placeholder="Typ hier je antwoord…"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-svm-400"
      />
    </div>
  )
}

function MatchAnswer({
  q,
  answer,
  onAnswer,
}: {
  q: Extract<ExamQuestion, { type: 'match' }>
  answer: Answer | undefined
  onAnswer: (a: Answer) => void
}) {
  const rightOptions = useMemo(() => shuffleArray(q.pairs.map((p) => p.right)), [q.id])

  return (
    <div className="border border-slate-300 border-t-0 bg-white mt-4 sm:mt-6 divide-y divide-slate-200">
      {q.pairs.map((pair, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 px-4 py-3">
          <span className="flex-1 text-slate-800 text-sm sm:text-base">
            <Inline text={pair.left} />
          </span>
          <select
            value={answer?.match?.[i] ?? ''}
            onChange={(e) =>
              onAnswer({ match: { ...(answer?.match ?? {}), [i]: e.target.value } })
            }
            className="w-full sm:w-auto sm:min-w-[240px] rounded-md border border-slate-300 px-2 py-2 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-svm-400"
          >
            <option value="">— kies —</option>
            {rightOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}

const SELF_OPTIONS: { key: 'goed' | 'deels' | 'fout'; label: string; color: string }[] = [
  { key: 'goed', label: 'Goed', color: 'bg-green-600 hover:bg-green-700' },
  { key: 'deels', label: 'Deels goed', color: 'bg-amber-500 hover:bg-amber-600' },
  { key: 'fout', label: 'Fout', color: 'bg-red-600 hover:bg-red-700' },
]

function OpenAnswer({
  q,
  answer,
  onAnswer,
}: {
  q: Extract<ExamQuestion, { type: 'open' }>
  answer: Answer | undefined
  onAnswer: (a: Answer) => void
}) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="border border-slate-300 border-t-0 bg-white mt-4 sm:mt-6 p-4 space-y-3">
      <textarea
        value={answer?.openText ?? ''}
        onChange={(e) => onAnswer({ ...answer, openText: e.target.value })}
        placeholder="Typ hier je eigen antwoord (voor jezelf, wordt niet automatisch nagekeken)…"
        rows={4}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-svm-400 resize-y"
      />

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="text-sm font-medium text-svm-700 hover:underline"
        >
          Toon modelantwoord →
        </button>
      ) : (
        <div className="space-y-3">
          <div className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded p-3">
            <div className="font-semibold text-slate-800 mb-1">Modelantwoord</div>
            <Inline text={q.acceptableAnswers[0]} />
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1.5">Hoe goed had jij het?</p>
            <div className="flex gap-2">
              {SELF_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => onAnswer({ ...answer, openSelf: opt.key })}
                  className={`px-3 py-1.5 rounded-md text-white text-sm font-medium ${opt.color} ${
                    answer?.openSelf === opt.key ? 'ring-2 ring-offset-1 ring-slate-700' : ''
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
