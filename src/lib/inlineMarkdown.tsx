import type { ReactNode } from 'react'

/**
 * Lichte inline-markdown: **vet**, *cursief* en `code`. De vragenbank gebruikt
 * deze markering in prompts en antwoordopties; zonder rendering zou je de
 * sterretjes letterlijk zien staan.
 */
export function Inline({ text }: { text: string }) {
  return <>{parseInline(text)}</>
}

export function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const re = /\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*/g
  let last = 0
  let key = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      nodes.push(<strong key={key++}>{m[1]}</strong>)
    } else if (m[2] !== undefined) {
      nodes.push(
        <code key={key++} className="px-1 py-0.5 rounded bg-slate-100 text-[0.9em]">
          {m[2]}
        </code>,
      )
    } else if (m[3] !== undefined) {
      nodes.push(<em key={key++}>{m[3]}</em>)
    }
    last = re.lastIndex
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

/** Zelfde markering strippen (voor plekken waar alleen platte tekst past). */
export function stripInline(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1').replace(/\*([^*]+)\*/g, '$1')
}
