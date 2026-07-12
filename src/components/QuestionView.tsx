import { asset } from '../lib/asset'
import { Inline } from '../lib/inlineMarkdown'
import { BlockBar } from './BlockBar'
import type { FlatItem } from '../App'
import type { Answer, ExamQuestion } from '../lib/exam'
import type { LessonImage } from '../types/content'

const IMG_W: Record<NonNullable<LessonImage['width']>, string> = {
  sm: 'max-w-[220px]',
  md: 'max-w-[360px]',
  lg: 'max-w-[520px]',
  full: 'max-w-full',
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
          <p className="text-slate-800 leading-relaxed whitespace-pre-line">
            <Inline text={q.prompt} />
          </p>

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
        <div className="border border-slate-300 border-t-0 bg-white mt-4 sm:mt-6">
          {q.type === 'mc'
            ? q.options.map((opt, i) => {
                const selected = answer?.mc === i
                return (
                  <label
                    key={i}
                    className={`flex items-start gap-3 px-4 py-4 cursor-pointer border-b border-slate-200 last:border-b-0 ${
                      selected ? 'bg-svm-50' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid place-items-center w-4 h-4 rounded-full border ${
                        selected ? 'border-svm-600' : 'border-slate-400'
                      }`}
                    >
                      {selected && <span className="w-2 h-2 rounded-full bg-svm-600" />}
                    </span>
                    <input
                      type="radio"
                      className="sr-only"
                      name={q.id}
                      checked={selected}
                      onChange={() => onAnswer({ mc: i })}
                    />
                    <span className="text-slate-800"><Inline text={opt} /></span>
                  </label>
                )
              })
            : q.options.map((opt, i) => {
                const chosen = answer?.multi ?? []
                const selected = chosen.includes(i)
                return (
                  <label
                    key={i}
                    className={`flex items-start gap-3 px-4 py-4 cursor-pointer border-b border-slate-200 last:border-b-0 ${
                      selected ? 'bg-svm-50' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid place-items-center w-4 h-4 border ${
                        selected ? 'border-svm-600 bg-white' : 'border-slate-400 bg-white'
                      }`}
                    >
                      {selected && <span className="w-2.5 h-2.5 bg-svm-600" />}
                    </span>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selected}
                      onChange={() => {
                        const next = selected
                          ? chosen.filter((x) => x !== i)
                          : [...chosen, i].sort((a, b) => a - b)
                        onAnswer({ multi: next })
                      }}
                    />
                    <span className="text-slate-800"><Inline text={opt} /></span>
                  </label>
                )
              })}
        </div>

        {q.type === 'multi' && (
          <p className="text-xs text-slate-500 mt-2 px-1">Meerdere antwoorden kunnen juist zijn.</p>
        )}
      </div>
    </div>
  )
}
