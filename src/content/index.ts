import type { Topic } from '../types/content'
import { sectionTopics as A } from './section_A'
import { sectionTopics as B } from './section_B'
import { sectionTopics as C } from './section_C'
import { sectionTopics as D } from './section_D'
import { aanvullendeVragen } from './aanvullend'

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
  const extra = aanvullendeVragen[t.code]
  return extra && extra.length ? { ...t, questions: [...t.questions, ...extra] } : t
})

const byCode = new Map(topics.map((t) => [t.code, t]))
export function getTopic(code: string): Topic | undefined {
  return byCode.get(code)
}
