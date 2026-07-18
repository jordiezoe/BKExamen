import { useState } from 'react'
import type { FlatItem, Session } from '../App'
import { SvmLogo } from '../components/SvmLogo'
import { QuestionView } from '../components/QuestionView'
import { Overzicht } from '../components/Overzicht'
import { MODE_TITLES, type Answer } from '../lib/exam'

function fmtTime(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000))
  const hh = Math.floor(s / 3600)
  const mm = Math.floor((s % 3600) / 60)
  const ss = s % 60
  const p = (n: number) => String(n).padStart(2, '0')
  return hh > 0 ? `${p(hh)}:${p(mm)}:${p(ss)}` : `${p(mm)}:${p(ss)}`
}

/** Stabiel 7-cijferig "kandidaatnummer" afgeleid van de starttijd. */
function candidateNumber(startedAt: number): string {
  return String(1000000 + (Math.floor(startedAt / 1000) % 9000000))
}

export function ExamScreen({
  session,
  flat,
  now,
  onNavigate,
  onAnswer,
  onToggleFlag,
  onFinish,
  onExit,
}: {
  session: Session
  flat: FlatItem[]
  now: number
  onNavigate: (i: number) => void
  onAnswer: (id: string, a: Answer) => void
  onToggleFlag: (id: string) => void
  onFinish: () => void
  onExit: () => void
}) {
  const [showOverzicht, setShowOverzicht] = useState(false)
  const [confirmEnd, setConfirmEnd] = useState(false)

  const current = flat[session.index]
  const q = current.item.question
  const total = flat.length
  const flagged = !!session.flagged[q.id]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Kop */}
      <header className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-5 py-3 flex items-start justify-between gap-3">
          <h1 className="font-bold text-base sm:text-xl text-slate-800 leading-tight">
            {MODE_TITLES[session.config.mode]}
          </h1>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right text-[11px] sm:text-xs text-slate-600 leading-tight">
              <div>{candidateNumber(session.startedAt)}</div>
              <div>{session.config.candidate}</div>
            </div>
            <SvmLogo className="hidden sm:flex" />
          </div>
        </div>
      </header>
      <div className="svm-metal h-2" />

      {/* Vraaginhoud */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-3 sm:px-5 py-4 sm:py-6 pb-28">
          <QuestionView
            flat={current}
            answer={session.answers[q.id]}
            onAnswer={(a) => onAnswer(q.id, a)}
          />
        </div>
      </main>

      {/* Voortgangsstrip */}
      <div className="fixed bottom-[52px] left-0 right-0">
        <div className="max-w-3xl mx-auto px-3 sm:px-5">
          <div className="flex gap-[2px] h-1.5">
            {flat.map((f, i) => {
              const a = session.answers[f.item.question.id]
              const answered = !!(
                a &&
                (a.mc !== undefined ||
                  (a.multi?.length ?? 0) > 0 ||
                  (a.invul?.trim().length ?? 0) > 0 ||
                  (a.match && Object.keys(a.match).length > 0) ||
                  a.openSelf !== undefined)
              )
              return (
                <div
                  key={f.item.question.id}
                  className={`flex-1 rounded-sm ${
                    i === session.index ? 'bg-svm-500' : answered ? 'bg-svm-300' : 'bg-slate-300'
                  }`}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Onderbalk */}
      <div className="svm-toolbar fixed bottom-0 left-0 right-0 h-[52px]">
        <div className="max-w-3xl mx-auto h-full px-2 sm:px-4 flex items-center gap-1.5 sm:gap-2 text-sm">
          {/* Links: tijd + hulpknoppen */}
          <span className="flex items-center gap-1 tabular-nums shrink-0">
            <span aria-hidden>⏱</span>
            <span className="hidden sm:inline">Tijd</span>
            {fmtTime(now - session.startedAt)}
          </span>

          <button
            onClick={() => setShowOverzicht(true)}
            className="svm-btn rounded px-2 py-1.5 text-xs shrink-0"
            title="Vraagoverzicht en toets beëindigen"
            aria-label="Vraagoverzicht"
          >
            ▦
          </button>
          <button
            onClick={() => onToggleFlag(q.id)}
            className={`rounded px-2 py-1.5 text-xs border shrink-0 ${
              flagged ? 'bg-svm-500 border-svm-600' : 'svm-btn'
            }`}
            title="Markeer deze vraag"
            aria-label="Markeer deze vraag"
          >
            🚩
          </button>

          {/* Teller — vult de resterende ruimte en mag krimpen */}
          <span className="flex-1 min-w-0 text-center tabular-nums whitespace-nowrap overflow-hidden text-ellipsis text-xs sm:text-sm">
            <span className="hidden sm:inline">Vraag </span>
            {current.number}/{total}
          </span>

          {/* Rechts: navigatie — altijd zichtbaar en aanklikbaar */}
          <button
            onClick={() => setConfirmEnd(true)}
            className="svm-btn rounded px-3 py-1.5 text-xs whitespace-nowrap shrink-0 hidden sm:inline-flex"
          >
            Toets beëindigen
          </button>
          <button
            onClick={() => onNavigate(Math.max(0, session.index - 1))}
            disabled={session.index === 0}
            className="svm-btn rounded px-2.5 sm:px-3 py-1.5 text-xs shrink-0"
          >
            Vorige
          </button>
          <button
            onClick={() => onNavigate(Math.min(total - 1, session.index + 1))}
            disabled={session.index === total - 1}
            className="svm-btn rounded px-2.5 sm:px-3 py-1.5 text-xs shrink-0 font-semibold"
          >
            Volgende
          </button>
        </div>
      </div>

      {showOverzicht && (
        <Overzicht
          flat={flat}
          session={session}
          onGoto={(i) => {
            onNavigate(i)
            setShowOverzicht(false)
          }}
          onClose={() => setShowOverzicht(false)}
          onFinish={() => {
            setShowOverzicht(false)
            onFinish()
          }}
        />
      )}

      {confirmEnd && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-5">
            <h3 className="font-semibold text-slate-800 text-lg">Toets beëindigen?</h3>
            <p className="text-sm text-slate-600 mt-2">
              Je examen wordt nagekeken en je krijgt direct je uitslag en foutenoverzicht. Je kunt
              daarna niets meer wijzigen.
            </p>
            <div className="mt-5 flex gap-2 justify-end">
              <button
                onClick={() => setConfirmEnd(false)}
                className="px-3 py-2 rounded-md border border-slate-300 text-slate-700 text-sm hover:bg-slate-50"
              >
                Terug naar de toets
              </button>
              <button
                onClick={() => {
                  setConfirmEnd(false)
                  onFinish()
                }}
                className="px-3 py-2 rounded-md bg-svm-600 hover:bg-svm-700 text-white text-sm font-semibold"
              >
                Beëindigen &amp; nakijken
              </button>
            </div>
            <button
              onClick={() => {
                setConfirmEnd(false)
                onExit()
              }}
              className="mt-4 text-xs text-slate-400 hover:text-slate-600 underline"
            >
              Stoppen zonder nakijken (terug naar start)
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
