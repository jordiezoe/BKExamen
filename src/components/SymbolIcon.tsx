/**
 * Zelfgetekende symbolen zoals gangbaar op Nederlandse bouwtekeningen
 * (renvooi-achtige notatie). Dit zijn generieke, gestandaardiseerde
 * tekenconventies — geen overname van een specifieke bron.
 */
const ICONS: Record<string, JSX.Element> = {
  'deur-enkel': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="10" y1="52" x2="10" y2="12" strokeWidth="3" />
      <line x1="10" y1="52" x2="46" y2="52" />
      <path d="M10 12 A40 40 0 0 1 50 52" strokeDasharray="3 3" />
    </g>
  ),
  'deur-dubbel': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="6" y1="52" x2="6" y2="16" strokeWidth="3" />
      <line x1="58" y1="52" x2="58" y2="16" strokeWidth="3" />
      <line x1="6" y1="52" x2="32" y2="52" />
      <line x1="58" y1="52" x2="32" y2="52" />
      <path d="M6 16 A36 36 0 0 1 32 52" strokeDasharray="3 3" />
      <path d="M58 16 A36 36 0 0 0 32 52" strokeDasharray="3 3" />
    </g>
  ),
  'deur-schuif': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="6" y1="52" x2="58" y2="52" />
      <rect x="14" y="42" width="26" height="10" strokeWidth="2" />
      <line x1="44" y1="47" x2="56" y2="47" markerEnd="url(#arrow)" />
      <polygon points="56,44 62,47 56,50" fill="currentColor" stroke="none" />
    </g>
  ),
  'deur-vouw': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="6" y1="54" x2="6" y2="14" strokeWidth="3" />
      <polyline points="6,14 26,34 6,54" />
      <line x1="58" y1="54" x2="58" y2="14" strokeWidth="3" />
      <polyline points="58,14 38,34 58,54" />
    </g>
  ),
  'raam-vast': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="24" width="48" height="16" />
      <line x1="8" y1="32" x2="56" y2="32" />
    </g>
  ),
  'raam-draai': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="8" width="48" height="48" />
      <line x1="8" y1="8" x2="32" y2="32" />
      <line x1="8" y1="56" x2="32" y2="32" />
    </g>
  ),
  'raam-draaikiep': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="8" width="48" height="48" />
      <line x1="8" y1="8" x2="32" y2="32" />
      <line x1="8" y1="56" x2="32" y2="32" />
      <line x1="8" y1="8" x2="56" y2="8" strokeDasharray="3 3" />
      <line x1="32" y1="32" x2="56" y2="8" strokeDasharray="3 3" />
    </g>
  ),
  'raam-schuif': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="20" width="48" height="24" />
      <line x1="32" y1="20" x2="32" y2="44" />
      <line x1="14" y1="32" x2="26" y2="32" />
      <polygon points="10,32 16,28 16,36" fill="currentColor" stroke="none" />
    </g>
  ),
  metselwerk: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="6" width="52" height="52" strokeWidth="2" />
      {[14, 26, 38, 50].map((y, row) => (
        <g key={y}>
          {(row % 2 === 0 ? [6, 20, 34, 48] : [-4, 10, 24, 38, 52]).map((x) => (
            <line key={x} x1={x} y1={y} x2={x + 14} y2={y} />
          ))}
          <line x1="6" y1={y} x2="58" y2={y} />
        </g>
      ))}
      {[6, 20, 34, 48].map((x) => (
        <line key={'v' + x} x1={x} y1="6" x2={x} y2="18" />
      ))}
    </g>
  ),
  'beton-gewapend': (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="6" width="52" height="52" strokeWidth="2" />
      <line x1="6" y1="58" x2="58" y2="6" />
      <line x1="6" y1="42" x2="42" y2="6" />
      <line x1="22" y1="58" x2="58" y2="22" />
      <polyline points="14,50 22,42 22,34 30,26" strokeWidth="2.5" />
    </g>
  ),
  'beton-ongewapend': (
    <g fill="currentColor" stroke="currentColor" strokeWidth="2">
      <rect x="6" y="6" width="52" height="52" fill="none" strokeWidth="2" />
      {[16, 28, 40, 52].map((y) =>
        [16, 28, 40, 52].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />),
      )}
    </g>
  ),
  kalkzandsteen: (
    <g fill="currentColor" stroke="currentColor">
      <rect x="6" y="6" width="52" height="52" fill="none" strokeWidth="2" />
      {[12, 18, 24, 30, 36, 42, 48, 54].map((y) =>
        [12, 18, 24, 30, 36, 42, 48, 54].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1" />),
      )}
    </g>
  ),
  isolatie: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="6" width="52" height="52" strokeWidth="2" />
      {[10, 20, 30, 40, 50].map((y) => (
        <polyline key={y} points={`6,${y} 12,${y + 5} 18,${y} 24,${y + 5} 30,${y} 36,${y + 5} 42,${y} 48,${y + 5} 54,${y} 58,${y + 3}`} />
      ))}
    </g>
  ),
  'lichte-scheidingswand': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="10" y1="6" x2="10" y2="58" />
      <line x1="54" y1="6" x2="54" y2="58" />
      {[10, 18, 26, 34, 42, 50, 58].map((y) => (
        <line key={y} x1="10" y1={y} x2="54" y2={y} strokeWidth="1" strokeDasharray="2 3" />
      ))}
    </g>
  ),
  'elektra-schakelaar': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="26" cy="38" r="8" />
      <line x1="32" y1="32" x2="46" y2="18" />
      <line x1="34" y1="38" x2="52" y2="38" strokeDasharray="2 3" />
    </g>
  ),
  'elektra-wcd': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="32" r="14" />
      <line x1="22" y1="26" x2="28" y2="32" />
      <line x1="22" y1="38" x2="28" y2="32" />
    </g>
  ),
  'elektra-lichtpunt-plafond': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="32" r="16" />
      <line x1="21" y1="21" x2="43" y2="43" />
      <line x1="43" y1="21" x2="21" y2="43" />
    </g>
  ),
  'elektra-meterkast': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="10" y="8" width="44" height="48" />
      <polyline points="34,14 22,34 32,34 26,50 44,26 34,26" fill="currentColor" stroke="none" />
    </g>
  ),
  'sanitair-wc': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="16" y="8" width="32" height="12" rx="2" />
      <path d="M18 22 Q16 46 32 50 Q48 46 46 22 Z" />
    </g>
  ),
  'sanitair-wastafel': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="8" y1="10" x2="56" y2="10" strokeWidth="3" />
      <path d="M10 10 Q10 46 32 46 Q54 46 54 10" />
      <circle cx="32" cy="20" r="2" fill="currentColor" />
    </g>
  ),
  'sanitair-douche': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="10" y="10" width="44" height="44" />
      <line x1="10" y1="10" x2="54" y2="54" strokeDasharray="2 3" />
      <circle cx="32" cy="32" r="3" />
    </g>
  ),
  'sanitair-bad': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="6" y="16" width="52" height="32" rx="12" />
      <rect x="12" y="22" width="40" height="20" rx="8" />
    </g>
  ),
  'verwarming-radiator': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="10" y="14" width="44" height="36" />
      {[19, 27, 35, 43, 51].map((x) => (
        <line key={x} x1={x} y1="14" x2={x} y2="50" strokeWidth="1.4" />
      ))}
    </g>
  ),
  'verwarming-cv-ketel': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="10" y="8" width="44" height="48" />
      <path d="M32 20 C24 30 24 38 32 46 C40 38 38 32 34 28 C34 34 30 34 30 30 C30 26 32 22 32 20 Z" fill="currentColor" stroke="none" />
    </g>
  ),
  'verwarming-vloerverwarming': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="6" y="6" width="52" height="52" strokeWidth="2" />
      <path d="M10 16 H50 V26 H18 V36 H50 V46 H10" />
    </g>
  ),
  'ventilatie-afzuigpunt': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="28" cy="32" r="14" />
      <line x1="19" y1="23" x2="37" y2="41" />
      <line x1="37" y1="23" x2="19" y2="41" />
      <line x1="42" y1="32" x2="58" y2="32" />
      <polygon points="58,28 64,32 58,36" fill="currentColor" stroke="none" />
    </g>
  ),
  'ventilatie-toevoerpunt': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="36" cy="32" r="14" />
      <line x1="27" y1="23" x2="45" y2="41" />
      <line x1="45" y1="23" x2="27" y2="41" />
      <line x1="6" y1="32" x2="22" y2="32" />
      <polygon points="22,28 28,32 22,36" fill="currentColor" stroke="none" />
    </g>
  ),
  'trap-pijl': (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={10 + i * 8} y1={54 - i * 8} x2={18 + i * 8} y2={54 - i * 8} />
      ))}
      <line x1="14" y1="50" x2="50" y2="14" strokeDasharray="1 4" />
      <polygon points="50,8 58,12 50,22" fill="currentColor" stroke="none" />
    </g>
  ),
  noordpijl: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="34" r="20" />
      <polygon points="32,10 38,34 32,30 26,34" fill="currentColor" stroke="none" />
      <text x="32" y="8" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontWeight="bold">N</text>
    </g>
  ),
  peil: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="8" y1="46" x2="56" y2="46" strokeWidth="2.5" />
      <polygon points="32,46 24,30 40,30" fill="currentColor" stroke="none" />
      <text x="46" y="26" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" fontWeight="bold">P</text>
    </g>
  ),
  hwa: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="24" r="12" />
      <line x1="32" y1="36" x2="32" y2="52" />
      <polygon points="26,46 32,56 38,46" fill="currentColor" stroke="none" />
      <text x="32" y="60" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontWeight="bold">hwa</text>
    </g>
  ),
}

export function SymbolIcon({ name, size = 84 }: { name: string; size?: number }) {
  const el = ICONS[name]
  if (!el) return null
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className="text-slate-700">
      {el}
    </svg>
  )
}
