import type { FlatItem, Session } from '../App'

/** Vraagnavigatie-raster (zoals de "Overzicht"-knop in de proeftoets). */
export function Overzicht({
  flat,
  session,
  onGoto,
  onClose,
  onFinish,
}: {
  flat: FlatItem[]
  session: Session
  onGoto: (i: number) => void
  onClose: () => void
  onFinish: () => void
}) {
  const answeredCount = flat.filter((f) => isAnswered(session, f)).length

  return (
    <div className="fixed inset-0 z-40 bg-black/50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full sm:max-w-lg sm:rounded-lg shadow-xl max-h-[85vh] flex flex-col">
        <div className="svm-blockbar px-4 py-2 flex items-center justify-between sm:rounded-t-lg">
          <span className="font-bold text-slate-800">Overzicht</span>
          <button onClick={onClose} className="text-slate-700 text-xl leading-none px-2">
            ×
          </button>
        </div>

        <div className="p-4 overflow-y-auto">
          <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5">
            {flat.map((f, i) => {
              const answered = isAnswered(session, f)
              const flagged = session.flagged[f.item.question.id]
              const current = session.index === i
              return (
                <button
                  key={f.item.question.id}
                  onClick={() => onGoto(i)}
                  className={`relative h-9 rounded text-sm font-medium border ${
                    current
                      ? 'bg-svm-500 text-white border-svm-600'
                      : answered
                        ? 'bg-svm-100 text-slate-800 border-svm-300'
                        : 'bg-slate-100 text-slate-500 border-slate-300'
                  }`}
                  title={`Vraag ${f.number} · ${f.block.section}`}
                >
                  {f.number}
                  {flagged && (
                    <span className="absolute -top-1 -right-1 text-[10px]">🚩</span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="mt-4 flex items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-svm-100 border border-svm-300 inline-block" />
              beantwoord
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300 inline-block" />
              open
            </span>
            <span>🚩 gemarkeerd</span>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            {answeredCount} van {flat.length} vragen beantwoord.
          </p>

          <button
            onClick={onFinish}
            className="mt-4 w-full bg-svm-600 hover:bg-svm-700 text-white rounded-md py-2.5 font-semibold"
          >
            Toets beëindigen &amp; nakijken
          </button>
        </div>
      </div>
    </div>
  )
}

function isAnswered(session: Session, f: FlatItem): boolean {
  const a = session.answers[f.item.question.id]
  if (!a) return false
  return (
    a.mc !== undefined ||
    (a.multi !== undefined && a.multi.length > 0) ||
    (a.invul !== undefined && a.invul.trim().length > 0) ||
    (a.match !== undefined && Object.keys(a.match).length > 0) ||
    a.openSelf !== undefined
  )
}
