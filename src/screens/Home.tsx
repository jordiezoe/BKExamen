import { useState } from 'react'
import type { Config } from '../App'
import { SvmLogo } from '../components/SvmLogo'
import { bloomExamTotalCount } from '../content'
import { type ExamLength, type ExamMode } from '../lib/exam'

const MODES: ExamMode[] = ['BT1', 'BT2', 'BT1-2', 'OEFEN', 'BLOOM']

const NORMAL_LENGTHS: { key: ExamLength; title: string; sub: string }[] = [
  { key: 'vol', title: 'Volledig examen', sub: '± 50 vragen' },
  { key: 'kort', title: 'Korte toets', sub: '± 25 vragen' },
]

const MODE_TILE: Record<ExamMode, { title: string; sub: string }> = {
  BT1: { title: 'BT1', sub: 'kennen en herkennen' },
  BT2: { title: 'BT2', sub: 'toepassen en analyseren' },
  'BT1-2': { title: 'BT1-2', sub: 'eindsimulatie' },
  OEFEN: { title: 'Oefening', sub: 'alleen nieuwe vragen' },
  BLOOM: { title: 'Bloom examen', sub: 'alle onderwerpen, alle vraagvormen' },
  // HERKANSING is niet los te kiezen op het startscherm; je komt er via de
  // "Herkansing"-knop op de resultaatpagina. Alleen hier voor het Record-type.
  HERKANSING: { title: 'Herkansing', sub: 'oefen je foute vragen opnieuw' },
}

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

  const bloomLengths: { key: ExamLength; title: string; sub: string }[] = [
    { key: '30', title: '30 vragen', sub: 'korte selectie' },
    { key: '50', title: '50 vragen', sub: 'gemiddelde toets' },
    { key: 'vol', title: 'Volledig examen', sub: `alle ${bloomExamTotalCount} vragen` },
  ]
  const lengthOptions = mode === 'BLOOM' ? bloomLengths : NORMAL_LENGTHS

  function selectMode(m: ExamMode) {
    setMode(m)
    setLength('vol')
  }

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
            <div className="grid gap-2 grid-cols-2 sm:grid-cols-5">
              {MODES.map((m) => (
                <button
                  key={m}
                  onClick={() => selectMode(m)}
                  className={`text-left rounded-md border px-3 py-3 transition ${
                    mode === m
                      ? 'border-svm-500 bg-svm-50 ring-1 ring-svm-400'
                      : 'border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold text-slate-800">{MODE_TILE[m].title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{MODE_TILE[m].sub}</div>
                </button>
              ))}
            </div>
            {mode === 'OEFEN' && (
              <p className="mt-3 text-xs text-slate-500">
                In deze modus komen alleen de nieuw toegevoegde examen-stijl vragen langs, inclusief
                de beeldvragen (dakvormen, metselverbanden, bouwstijlen, ventilatie).
              </p>
            )}
            {mode === 'BLOOM' && (
              <p className="mt-3 text-xs text-slate-500">
                Het Bloom-examen dekt <b>elk onderwerp</b> uit het kwalificatiedossier, met vijf
                vraagsoorten (meerkeuze, meerantwoord, match, invul en open vragen) op het
                Bloom-niveau (kennis t/m evalueren) dat bij dat onderdeel hoort. Kies hieronder een
                lengte — bij 30 of 50 vragen wordt een willekeurige, evenredig over de blokken
                verdeelde selectie getrokken.
              </p>
            )}
          </section>

          {/* Lengte */}
          <section className="bg-white rounded-lg border border-slate-300 p-5">
            <h2 className="font-semibold text-slate-800 mb-3">2 · Lengte</h2>
            <div className={`grid gap-2 ${mode === 'BLOOM' ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
              {lengthOptions.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLength(l.key)}
                  className={`text-left rounded-md border px-3 py-3 transition ${
                    length === l.key
                      ? 'border-svm-500 bg-svm-50 ring-1 ring-svm-400'
                      : 'border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold text-slate-800">{l.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{l.sub}</div>
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
