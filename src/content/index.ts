import type { Topic } from '../types/content'
import { sectionTopics as A } from './section_A'
import { sectionTopics as B } from './section_B'
import { sectionTopics as C } from './section_C'
import { sectionTopics as D } from './section_D'
import { aanvullendeVragen } from './aanvullend'
import { examenoefeningVragen } from './examenoefening'
import { examenoefening2Vragen } from './examenoefening2'
import { beeldVragen } from './beeldvragen'
import { beeldVragen2 } from './beeldvragen2'

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
  [aanvullendeVragen, examenoefeningVragen, examenoefening2Vragen, beeldVragen, beeldVragen2].flatMap((rec) =>
    Object.values(rec).flatMap((qs) => qs.map((q) => q.id)),
  ),
)

const byCode = new Map(topics.map((t) => [t.code, t]))
export function getTopic(code: string): Topic | undefined {
  return byCode.get(code)
}
