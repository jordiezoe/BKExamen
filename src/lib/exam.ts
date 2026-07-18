import { topics, nieuweVraagIds, bloomExamTopics, topicMetas } from '../content'
import type { ExamSection, Niveau, Question } from '../types/content'
import { shuffleQuestionOptions } from './shuffleOptions'

/**
 * Examen-engine voor BKExamen — nagebouwd op de echte SVMNIVO/TestVision
 * "Bouwkunde BT1-2 Proeftoets":
 *  - vragen zijn gegroepeerd in vier BLOKKEN op dossiercategorie (A/B/C/D),
 *    elk met een korte blokintroductie en een eigen deelscore;
 *  - per sessie wordt maximaal één vraag per toetsterm getrokken uit een
 *    gerandomiseerde pool, zodat elke sessie anders is;
 *  - BT1 toetst kennen/herkennen, BT2 toepassen/analyseren; BT1-2 combineert
 *    beide (net als de echte eindtoets);
 *  - meerkeuze (mc) én meervoudige keuze (multi, met partiële punten).
 */

export type ExamMode = 'BT1' | 'BT2' | 'BT1-2' | 'OEFEN' | 'BLOOM' | 'HERKANSING'
export type ExamLength = 'kort' | 'vol'

/** De vijf vraagsoorten die de examen-engine kan afnemen en nakijken. */
export type ExamQuestion = Extract<Question, { type: 'mc' | 'multi' | 'invul' | 'match' | 'open' }>

export interface ExamItem {
  question: ExamQuestion
  topicCode: string
  topicTitle: string
  section: ExamSection
}

export interface ExamBlock {
  section: ExamSection
  label: string
  intro: string
  items: ExamItem[]
}

export const SECTION_LABELS: Record<ExamSection, string> = {
  A: 'Algemeen',
  B: 'Constructieve Opbouw',
  C: 'Afwerking en Installaties',
  D: 'Kwaliteitsbeoordeling',
}

/** Korte blokintroductie zoals in de echte proeftoets vóór elk blok verschijnt. */
export const SECTION_INTROS: Record<ExamSection, string> = {
  A: 'Dit blok gaat over het bouwproces, bouwkundige tekeningen en bestekken, woningtypen, architectuurstromingen en de regelgeving (Bbl en Omgevingswet).',
  B: 'Dit blok gaat over de constructieve opbouw: sterkteleer, funderingen, steen, beton, staal, hout, kozijnen, vloeren, daken, trappen, kunststoffen en isolatie.',
  C: 'Dit blok gaat over afwerking en installaties: riolering, water, gas, elektra, verwarming, ventilatie, brand, glas, afwerkingen en natuursteen.',
  D: 'Dit blok gaat over kwaliteitsbeoordeling, onderhoud, bouwfysica en duurzaamheid — vaak in de vorm van een casus.',
}

/** Volledige toets (~50 vragen), zelfde verhouding als de echte proeftoets. */
const BLOCK_TARGETS_VOL: Record<ExamSection, number> = { A: 5, B: 18, C: 14, D: 13 }
/** Korte toets (~25 vragen). */
const BLOCK_TARGETS_KORT: Record<ExamSection, number> = { A: 3, B: 9, C: 7, D: 6 }

const SECTION_ORDER: ExamSection[] = ['A', 'B', 'C', 'D']

/** SVMNIVO-cesuur: geslaagd vanaf dit percentage. */
export const CESUUR = 0.68

/** code → niveau, opgebouwd uit de toetstermen van alle onderwerpen. */
function buildNiveauMap(): Map<string, Niveau> {
  const m = new Map<string, Niveau>()
  for (const t of topics) for (const tt of t.toetstermen ?? []) m.set(tt.code, tt.niveau)
  return m
}

/** Zoek het niveau van een vraag via haar toetstermcode (met prefix-fallback). */
function niveauOf(code: string, map: Map<string, Niveau>): Niveau | undefined {
  if (map.has(code)) return map.get(code)
  let best: { code: string; niveau: Niveau } | undefined
  for (const [c, n] of map) {
    if (code.startsWith(c) && (!best || c.length > best.code.length)) best = { code: c, niveau: n }
  }
  return best?.niveau
}

function isExamQuestion(q: Question): q is ExamQuestion {
  return q.type === 'mc' || q.type === 'multi'
}

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr]
  const out: T[] = []
  while (out.length < n && copy.length > 0) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0])
  }
  return out
}

function shuffle<T>(arr: T[]): T[] {
  return arr
    .map((v) => ({ v, s: Math.random() }))
    .sort((a, b) => a.s - b.s)
    .map((x) => x.v)
}

/**
 * Bouw een examen voor de gekozen modus en lengte.
 * Per blok: groepeer op toetstermcode, kies willekeurig één vraag per code,
 * trek daaruit het streefaantal en hussel.
 */
export function buildExam(mode: ExamMode, length: ExamLength = 'vol'): ExamBlock[] {
  if (mode === 'BLOOM') return buildBloomExam()

  const niveauMap = buildNiveauMap()
  const targets = length === 'kort' ? BLOCK_TARGETS_KORT : BLOCK_TARGETS_VOL

  const wantsNiveau = (q: Question): boolean => {
    if (mode === 'BT1-2' || mode === 'OEFEN') return true
    const n = niveauOf(q.toetstermCode, niveauMap)
    return n === undefined || n === mode
  }

  const blocks: ExamBlock[] = []
  for (const section of SECTION_ORDER) {
    const sectionTopics = topics.filter((t) => t.section === section)

    const byCode = new Map<string, ExamItem[]>()
    for (const t of sectionTopics) {
      for (const q of t.questions) {
        if (!isExamQuestion(q) || !wantsNiveau(q)) continue
        if (mode === 'OEFEN' && !nieuweVraagIds.has(q.id)) continue
        const item: ExamItem = { question: q, topicCode: t.code, topicTitle: t.title, section }
        const arr = byCode.get(q.toetstermCode)
        if (arr) arr.push(item)
        else byCode.set(q.toetstermCode, [item])
      }
    }

    const onePerCode = [...byCode.values()].map(
      (items) => items[Math.floor(Math.random() * items.length)],
    )
    const target = Math.min(targets[section], onePerCode.length)
    const picked = pickRandom(onePerCode, target).map((it) => ({
      ...it,
      question: shuffleQuestionOptions(it.question) as ExamQuestion,
    }))

    blocks.push({
      section,
      label: SECTION_LABELS[section],
      intro: SECTION_INTROS[section],
      items: shuffle(picked),
    })
  }

  return blocks
}

/**
 * Bouw het Bloom-examen: een vaste, volledige toets die ALLE onderwerpen
 * zonder uitzondering bevat (geen steekproef), met per onderwerp de vijf
 * vraagsoorten (mc, multi, match, invul, open) op het Bloom-niveau dat het
 * kwalificatiedossier voor dat onderdeel aangeeft. Alleen de vraagvolgorde
 * binnen elk blok wordt gehusseld.
 */
function buildBloomExam(): ExamBlock[] {
  const blocks: ExamBlock[] = []
  for (const section of SECTION_ORDER) {
    const items: ExamItem[] = []
    for (const meta of topicMetas) {
      if (meta.section !== section) continue
      const qs = bloomExamTopics[meta.code] ?? []
      for (const q of qs) {
        items.push({
          question: shuffleQuestionOptions(q as ExamQuestion) as ExamQuestion,
          topicCode: meta.code,
          topicTitle: meta.title,
          section,
        })
      }
    }
    blocks.push({
      section,
      label: SECTION_LABELS[section],
      intro: SECTION_INTROS[section],
      items: shuffle(items),
    })
  }
  return blocks
}

/**
 * Husselt mc/multi-opties opnieuw met een ECHTE (niet-geseede) willekeur,
 * los van de stabiele per-vraag-shuffle van shuffleQuestionOptions. Gebruikt
 * bij herkansingen, zodat de juiste optie niet steeds op dezelfde plek staat
 * en je niet op positie kunt gokken.
 */
function reshuffleForRetry<Q extends Question>(q: Q): Q {
  if (q.type !== 'mc' && q.type !== 'multi') return q
  const order = shuffle(q.options.map((_, i) => i))
  const options = order.map((i) => q.options[i])
  if (q.type === 'multi') {
    const correctIndices = q.correctIndices.map((c) => order.indexOf(c)).sort((a, b) => a - b)
    return { ...q, options, correctIndices } as Q
  }
  const correctIndex = order.indexOf(q.correctIndex)
  return { ...q, options, correctIndex } as Q
}

/**
 * Bouw een herkansingsronde uit een lijst vragen die de vorige keer niet
 * (volledig) goed werden beantwoord. Groepeert per blok (A/B/C/D), laat lege
 * blokken weg, en hersshuffelt mc/multi-opties zodat de juiste positie niet
 * simpelweg te onthouden is.
 */
export function buildRetryBlocks(items: ExamItem[]): ExamBlock[] {
  const bySection = new Map<ExamSection, ExamItem[]>()
  for (const it of items) {
    const reshuffled: ExamItem = { ...it, question: reshuffleForRetry(it.question) }
    const arr = bySection.get(it.section)
    if (arr) arr.push(reshuffled)
    else bySection.set(it.section, [reshuffled])
  }
  const blocks: ExamBlock[] = []
  for (const section of SECTION_ORDER) {
    const secItems = bySection.get(section)
    if (!secItems || secItems.length === 0) continue
    blocks.push({
      section,
      label: SECTION_LABELS[section],
      intro: SECTION_INTROS[section],
      items: shuffle(secItems),
    })
  }
  return blocks
}

// ---------- Nakijken ----------

export type Verdict = 'goed' | 'deels' | 'fout' | 'leeg'

export interface Answer {
  /** mc: gekozen index. multi: gekozen indices. */
  mc?: number
  multi?: number[]
  /** invul: getypte tekst. */
  invul?: string
  /** match: paar-index → gekozen rechterlabel. */
  match?: Record<number, string>
  /** open: eigen aantekening (niet automatisch nagekeken) + zelfbeoordeling. */
  openText?: string
  openSelf?: 'goed' | 'deels' | 'fout'
}

function normalizeAnswer(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ')
}

/** Score-fractie (0..1) en oordeel voor één vraag — dekt alle vijf vraagsoorten. */
export function gradeItem(
  q: ExamQuestion,
  answer: Answer | undefined,
): { fraction: number; verdict: Verdict } {
  if (q.type === 'mc') {
    if (!answer || answer.mc === undefined) return { fraction: 0, verdict: 'leeg' }
    const ok = answer.mc === q.correctIndex
    return { fraction: ok ? 1 : 0, verdict: ok ? 'goed' : 'fout' }
  }

  if (q.type === 'multi') {
    if (!answer || !answer.multi || answer.multi.length === 0) return { fraction: 0, verdict: 'leeg' }
    const correct = new Set(q.correctIndices)
    let good = 0
    let bad = 0
    for (const i of answer.multi) correct.has(i) ? good++ : bad++
    const fraction = Math.max(0, (good - bad) / q.correctIndices.length)
    const verdict: Verdict = fraction >= 1 ? 'goed' : fraction <= 0 ? 'fout' : 'deels'
    return { fraction: Math.min(1, fraction), verdict }
  }

  if (q.type === 'invul') {
    if (!answer || !answer.invul || !answer.invul.trim()) return { fraction: 0, verdict: 'leeg' }
    const typed = normalizeAnswer(answer.invul)
    const ok = q.acceptableAnswers.some((a) => normalizeAnswer(a) === typed)
    return { fraction: ok ? 1 : 0, verdict: ok ? 'goed' : 'fout' }
  }

  if (q.type === 'match') {
    if (!answer || !answer.match || Object.keys(answer.match).length === 0) {
      return { fraction: 0, verdict: 'leeg' }
    }
    let good = 0
    q.pairs.forEach((p, i) => {
      if (answer.match?.[i] === p.right) good++
    })
    const fraction = good / q.pairs.length
    const verdict: Verdict = fraction >= 1 ? 'goed' : fraction <= 0 ? 'fout' : 'deels'
    return { fraction, verdict }
  }

  // 'open' — de kandidaat beoordeelt zichzelf tegen het modelantwoord.
  if (!answer || !answer.openSelf) return { fraction: 0, verdict: 'leeg' }
  const openFraction: Record<'goed' | 'deels' | 'fout', number> = { goed: 1, deels: 0.5, fout: 0 }
  return { fraction: openFraction[answer.openSelf], verdict: answer.openSelf }
}

export const MODE_LABELS: Record<ExamMode, string> = {
  BT1: 'BT1 — kennen en herkennen',
  BT2: 'BT2 — toepassen en analyseren',
  'BT1-2': 'BT1-2 eindsimulatie',
  OEFEN: 'Examen-oefening — nieuwe vragen',
  BLOOM: 'Bloom-examen — alle onderwerpen, alle vraagvormen',
  HERKANSING: 'Herkansing — oefen je foute vragen opnieuw',
}

export const MODE_TITLES: Record<ExamMode, string> = {
  BT1: 'Bouwkunde BT1 Proeftoets',
  BT2: 'Bouwkunde BT2 Proeftoets',
  'BT1-2': 'Bouwkunde BT1-2 Proeftoets',
  OEFEN: 'Bouwkunde Examen-oefening',
  BLOOM: 'Bouwkunde Bloom-examen',
  HERKANSING: 'Bouwkunde Herkansing',
}
