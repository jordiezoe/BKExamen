import { useEffect, useMemo, useRef, useState } from 'react'
import { Home } from './screens/Home'
import { ExamScreen } from './screens/Exam'
import { Result } from './screens/Result'
import { buildExam, type Answer, type ExamBlock, type ExamItem, type ExamLength, type ExamMode } from './lib/exam'

export type Phase = 'home' | 'exam' | 'result'

export interface Config {
  mode: ExamMode
  length: ExamLength
  candidate: string
}

export interface Session {
  config: Config
  blocks: ExamBlock[]
  answers: Record<string, Answer>
  flagged: Record<string, boolean>
  index: number
  startedAt: number
  finishedAt: number | null
}

export interface FlatItem {
  item: ExamItem
  block: ExamBlock
  number: number // 1-based positie in het examen
  blockStart: boolean
}

export function flatten(blocks: ExamBlock[]): FlatItem[] {
  const flat: FlatItem[] = []
  let n = 0
  for (const b of blocks) {
    b.items.forEach((item, i) => {
      n += 1
      flat.push({ item, block: b, number: n, blockStart: i === 0 })
    })
  }
  return flat
}

const SESSION_KEY = 'bkexamen-session-v1'
const NAME_KEY = 'bkexamen-candidate'

function loadSession(): Session | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const s = JSON.parse(raw) as Session
    if (s && s.blocks && s.config) return s
  } catch {
    /* ignore */
  }
  return null
}

export function App() {
  const [session, setSession] = useState<Session | null>(() => loadSession())
  const [phase, setPhase] = useState<Phase>(() => {
    const s = loadSession()
    if (!s) return 'home'
    return s.finishedAt ? 'result' : 'exam'
  })
  const [now, setNow] = useState(() => Date.now())
  const tick = useRef<number | null>(null)

  // Timer loopt alleen tijdens het examen.
  useEffect(() => {
    if (phase === 'exam') {
      tick.current = window.setInterval(() => setNow(Date.now()), 1000)
      return () => {
        if (tick.current) window.clearInterval(tick.current)
      }
    }
  }, [phase])

  // Persisteer de actieve sessie (zodat verversen op mobiel niets verliest).
  useEffect(() => {
    try {
      if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session))
      else localStorage.removeItem(SESSION_KEY)
    } catch {
      /* private mode / vol */
    }
  }, [session])

  const flat = useMemo(() => (session ? flatten(session.blocks) : []), [session])

  function startExam(config: Config) {
    const blocks = buildExam(config.mode, config.length)
    try {
      localStorage.setItem(NAME_KEY, config.candidate)
    } catch {
      /* ignore */
    }
    setSession({
      config,
      blocks,
      answers: {},
      flagged: {},
      index: 0,
      startedAt: Date.now(),
      finishedAt: null,
    })
    setNow(Date.now())
    setPhase('exam')
  }

  function update(patch: Partial<Session>) {
    setSession((s) => (s ? { ...s, ...patch } : s))
  }

  function setAnswer(id: string, answer: Answer) {
    setSession((s) => (s ? { ...s, answers: { ...s.answers, [id]: answer } } : s))
  }

  function toggleFlag(id: string) {
    setSession((s) =>
      s ? { ...s, flagged: { ...s.flagged, [id]: !s.flagged[id] } } : s,
    )
  }

  function finish() {
    update({ finishedAt: Date.now() })
    setPhase('result')
    window.scrollTo(0, 0)
  }

  function exitToHome() {
    setSession(null)
    setPhase('home')
  }

  if (phase === 'home' || !session) {
    return <Home defaultName={localStorage.getItem(NAME_KEY) ?? ''} onStart={startExam} />
  }

  if (phase === 'result') {
    return <Result session={session} flat={flat} onHome={exitToHome} onRestart={startExam} />
  }

  return (
    <ExamScreen
      session={session}
      flat={flat}
      now={now}
      onNavigate={(i) => update({ index: i })}
      onAnswer={setAnswer}
      onToggleFlag={toggleFlag}
      onFinish={finish}
      onExit={exitToHome}
    />
  )
}
