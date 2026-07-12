import { useState } from 'react'
import type { Config } from '../App'
import { SvmLogo } from '../components/SvmLogo'
import { MODE_LABELS, type ExamLength, type ExamMode } from '../lib/exam'

const MODES: ExamMode[] = ['BT1', 'BT2', 'BT1-2']

export function Home({
  defaultName,
  onStart,
}: {
  defaultName: string
  onStart: (config: Config) => void
}) {
  const [mode, setMode] = useState<ExamMode>('BT1-2')
  const [length, setLength] = useState<ExamLength>('vol')
  const [candidate, setCandidate] = useState(defaultName)

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Kop in proeftoets-stijl */}
      <header className="bg-white">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between gap-3">
          <div className="font-bold text-lg sm:text-xl text-slate-800">BKExamen</div>
          <SvmLogo />
        </div>
      </header>
      <div className="svm-metal h-2" />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-5 py-8 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Bouwkunde BT1/BT2 — oefenexamen
            </h1>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Oefen in de stijl van de echte SVMNIVO-proeftoets (Makelaar Wonen). De vragen zijn
              gegroepeerd in vier blokken — <b>A. Algemeen</b>, <b>B. Constructieve Opbouw</b>,{' '}
              <b>C. Afwerking en Installaties</b> en <b>D. Kwaliteitsbeoordeling</b> — en dekken het
              hele kwalificatiedossier. Elke sessie is een nieuwe trekking. Na afloop zie je je
              score per blok én welke onderwerpen meer aandacht nodig hebben.
            </p>
          </div>

          {/* Modus */}
          <section className="bg-white rounded-lg border border-slate-300 p-5">
            <h2 className="font-semibold text-slate-800 mb-3">1 · Kies je toets</h2>
            <div className="grid gap-2 sm:grid-cols-3">
              {MODES.map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`text-left rounded-md border px-3 py-3 transition ${
                    mode === m
                      ? 'border-svm-500 bg-svm-50 ring-1 ring-svm-400'
                      : 'border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold text-slate-800">{m}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {MODE_LABELS[m].split('—')[1]?.trim()}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Lengte */}
          <section className="bg-white rounded-lg border border-slate-300 p-5">
            <h2 className="font-semibold text-slate-800 mb-3">2 · Lengte</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {(['vol', 'kort'] as ExamLength[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLength(l)}
                  className={`text-left rounded-md border px-3 py-3 transition ${
                    length === l
                      ? 'border-svm-500 bg-svm-50 ring-1 ring-svm-400'
                      : 'border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold text-slate-800">
                    {l === 'vol' ? 'Volledig examen' : 'Korte toets'}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {l === 'vol' ? '± 50 vragen' : '± 25 vragen'}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Naam */}
          <section className="bg-white rounded-lg border border-slate-300 p-5">
            <h2 className="font-semibold text-slate-800 mb-3">3 · Je naam (op de examenkop)</h2>
            <input
              type="text"
              value={candidate}
              onChange={(e) => setCandidate(e.target.value)}
              placeholder="bv. J. van de Beek"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-svm-400"
            />
          </section>

          <button
            onClick={() => onStart({ mode, length, candidate: candidate.trim() || 'Kandidaat' })}
            className="w-full svm-blockbar rounded-md py-3 font-bold text-slate-800 shadow hover:brightness-105"
          >
            Start examen
          </button>

          <p className="text-xs text-slate-400 text-center">
            Oefenmateriaal · geen officiële SVMNIVO-toets · voortgang blijft in deze browser
          </p>
        </div>
      </main>
    </div>
  )
}
