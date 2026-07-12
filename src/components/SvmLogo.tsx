/**
 * Nagemaakt SVMNIVO-woordmerk in de huisstijl-kleur (oranje swoosh + "svm|nivo").
 * Bewust een eigen tekening — niet het officiële logobestand — puur om de
 * look-and-feel van de proeftoets te benaderen.
 */
export function SvmLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="34" height="26" viewBox="0 0 34 26" aria-hidden="true" className="shrink-0">
        <path
          d="M4 15 C 8 4, 20 2, 30 6 C 22 6, 14 9, 11 18 C 10 21, 7 22, 4 20 Z"
          fill="#d9622b"
        />
        <path
          d="M30 11 C 26 22, 14 24, 4 20 C 12 20, 20 17, 23 8 C 24 5, 27 4, 30 6 Z"
          fill="#e8863f"
        />
      </svg>
      <span className="font-semibold tracking-[0.18em] text-[15px] sm:text-[17px] text-slate-800 lowercase">
        svm<span className="text-svm-500">|</span>nivo
      </span>
    </div>
  )
}
