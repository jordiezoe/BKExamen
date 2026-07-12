import { useState } from 'react'
import type { ExamSection } from '../types/content'

/** Oranje blokbalk met de bloktitel en een Blokintroductie-knop (popover). */
export function BlockBar({
  section,
  label,
  intro,
}: {
  section: ExamSection
  label: string
  intro: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <div className="svm-blockbar rounded-t-sm px-3 py-2 flex items-center justify-between">
        <span className="font-bold text-slate-800 text-sm sm:text-base">
          {section}. {label}
        </span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-xs bg-white/85 hover:bg-white border border-svm-600/40 rounded px-2 py-1 font-medium text-slate-700 shrink-0"
        >
          Blokintroductie
        </button>
      </div>
      {open && (
        <div className="absolute right-2 top-full z-20 mt-1 w-[min(92vw,26rem)] bg-white border border-slate-300 shadow-lg rounded-md p-3 text-sm text-slate-700">
          <div className="font-semibold text-slate-800 mb-1">
            {section}. {label}
          </div>
          {intro}
          <div className="mt-2 text-right">
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-svm-600 hover:underline"
            >
              Sluiten
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
