import type { Topic } from '../types/content'
import { sectionTopics as A } from './section_A'
import { sectionTopics as B } from './section_B'
import { sectionTopics as C } from './section_C'
import { sectionTopics as D } from './section_D'
import { aanvullendeVragen } from './aanvullend'
import { examenoefeningVragen } from './examenoefening'
import { examenoefening2Vragen } from './examenoefening2'
import { examenoefening3Vragen } from './examenoefening3'
import { examenoefening4Vragen } from './examenoefening4'
import { examenoefening5Vragen } from './examenoefening5'
import { examenoefening6Vragen } from './examenoefening6'
import { beeldVragen } from './beeldvragen'
import { beeldVragen2 } from './beeldvragen2'
import { bloomExamenA } from './bloomexamenA'
import { bloomExamenB } from './bloomexamenB'
import { bloomExamenC } from './bloomexamenC'
import { bloomExamenD } from './bloomexamenD'
import { bloomExamenA2 } from './bloomexamenA2'
import { bloomExamenB2 } from './bloomexamenB2'
import { bloomExamenC2 } from './bloomexamenC2'
import { bloomExamenD2 } from './bloomexamenD2'
import { bestekExamTopics as bestekTekeningLezenTopics } from './bestekTekeningLezen'
import { symbolenExamTopics } from './symbolenBouwtekeningen'

export { topicMetas } from './topicMetas'
export type { TopicMeta } from './topicMetas'

/**
 * Alle examen-relevante onderwerpen (secties A/B/C/D uit het
 * kwalificatiedossier). Besteklezen (BL) telt niet mee in het examen en is
 * hier bewust weggelaten.
 *
 * De aanvullende vragen (SVMNIVO-stijl, geschreven voor dun bezette
 * toetstermen) worden per onderwerp achter de bestaande vragen geplakt, zodat
 * de examen-engine ze automatisch meeneemt.
 */
export const topics: Topic[] = [...A, ...B, ...C, ...D].map((t) => {
  const extra = [
    ...(aanvullendeVragen[t.code] ?? []),
    ...(examenoefeningVragen[t.code] ?? []),
    ...(examenoefening2Vragen[t.code] ?? []),
    ...(examenoefening3Vragen[t.code] ?? []),
    ...(examenoefening4Vragen[t.code] ?? []),
    ...(examenoefening5Vragen[t.code] ?? []),
    ...(examenoefening6Vragen[t.code] ?? []),
    ...(beeldVragen[t.code] ?? []),
    ...(beeldVragen2[t.code] ?? []),
  ]
  return extra.length ? { ...t, questions: [...t.questions, ...extra] } : t
})

/**
 * Id's van de nieuw geschreven vragen (aanvullend + examen-oefening +
 * beeldvragen). De aparte modus "Examen-oefening" put uitsluitend hieruit.
 */
export const nieuweVraagIds: Set<string> = new Set(
  [
    aanvullendeVragen,
    examenoefeningVragen,
    examenoefening2Vragen,
    examenoefening3Vragen,
    examenoefening4Vragen,
    examenoefening5Vragen,
    examenoefening6Vragen,
    beeldVragen,
    beeldVragen2,
  ].flatMap((rec) =>
    Object.values(rec).flatMap((qs) => qs.map((q) => q.id)),
  ),
)

const byCode = new Map(topics.map((t) => [t.code, t]))
export function getTopic(code: string): Topic | undefined {
  return byCode.get(code)
}

/**
 * Bloom-examen — een losse, volledige vragenbank (niet gemengd met de
 * gewone oefentoetsen) die per onderwerp vijf vraagsoorten bevat (mc, multi,
 * match, invul, open), elk getagd met het Bloom-niveau uit het
 * kwalificatiedossier. Wordt uitsluitend gebruikt door de modus "Bloom
 * examen", die alle onderwerpen zonder uitzondering afneemt.
 */
export const bloomExamTopics: Record<string, import('../types/content').Question[]> = [
  bloomExamenA,
  bloomExamenB,
  bloomExamenC,
  bloomExamenD,
  bloomExamenA2,
  bloomExamenB2,
  bloomExamenC2,
  bloomExamenD2,
].reduce<Record<string, import('../types/content').Question[]>>((acc, rec) => {
  for (const [code, qs] of Object.entries(rec)) {
    acc[code] = [...(acc[code] ?? []), ...qs]
  }
  return acc
}, {})

/** Totaal aantal Bloom-examenvragen, voor weergave in de lengte-keuze. */
export const bloomExamTotalCount = Object.values(bloomExamTopics).reduce(
  (n, qs) => n + qs.length,
  0,
)

/**
 * Bestek en tekening lezen (BL) — losse praktijktoets op het echte
 * examenbestek en de bijbehorende tekeningen. Telt niet mee in de gewone
 * BT1/BT2/BLOOM-examens; wordt uitsluitend gebruikt door de modus "BESTEK".
 */
export const bestekExamTopics: Record<string, import('../types/content').Question[]> = [
  bestekTekeningLezenTopics,
  symbolenExamTopics,
].reduce<Record<string, import('../types/content').Question[]>>((acc, rec) => {
  for (const [code, qs] of Object.entries(rec)) {
    acc[code] = [...(acc[code] ?? []), ...qs]
  }
  return acc
}, {})

export const bestekExamTotalCount = Object.values(bestekExamTopics).reduce(
  (n, qs) => n + qs.length,
  0,
)
