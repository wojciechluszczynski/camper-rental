// Illustrated hand-drawn style SVG icons for camper category filters
// viewBox="0 0 48 48", stroke=currentColor, fill=none, strokeWidth≈1.5

export function IconCatAll({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Camper body */}
      <rect x="4" y="22" width="28" height="14" rx="3"/>
      {/* Cab */}
      <path d="M32 22 L40 28 L40 36 L32 36"/>
      {/* Windshield */}
      <path d="M32 22 L38 27 L38 30 L32 30"/>
      {/* Windows in body */}
      <rect x="8" y="25" width="8" height="6" rx="1.5"/>
      <rect x="18" y="25" width="7" height="6" rx="1.5"/>
      {/* Wheels */}
      <circle cx="11" cy="36" r="4"/>
      <circle cx="29" cy="36" r="4"/>
      {/* Road line */}
      <path d="M2 40 L46 40"/>
      <path d="M20 40 L28 40" strokeWidth="1" strokeDasharray="3 3"/>
    </svg>
  )
}

export function IconCatWeekend({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Compact camper */}
      <rect x="6" y="24" width="24" height="12" rx="3"/>
      <path d="M30 24 L37 29 L37 36 L30 36"/>
      {/* Small window */}
      <rect x="10" y="27" width="7" height="5" rx="1"/>
      {/* Wheels */}
      <circle cx="13" cy="36" r="3.5"/>
      <circle cx="28" cy="36" r="3.5"/>
      {/* Moon */}
      <path d="M36 8 a7 7 0 1 0 7 7 a5 5 0 1 1 -7 -7" strokeWidth="1.5"/>
      {/* Stars */}
      <circle cx="30" cy="10" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="26" cy="6" r="0.8" fill="currentColor" stroke="none"/>
      <circle cx="35" cy="5" r="0.9" fill="currentColor" stroke="none"/>
    </svg>
  )
}

export function IconCatFamily({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Larger camper */}
      <rect x="2" y="26" width="32" height="13" rx="3"/>
      <path d="M34 26 L42 31 L42 39 L34 39"/>
      <rect x="36" y="27" width="5" height="7" rx="1"/>
      {/* Windows */}
      <rect x="6" y="29" width="7" height="5" rx="1"/>
      <rect x="16" y="29" width="7" height="5" rx="1"/>
      {/* Wheels */}
      <circle cx="10" cy="39" r="4"/>
      <circle cx="30" cy="39" r="4"/>
      {/* 3 stick figures above */}
      {/* Adult 1 */}
      <circle cx="14" cy="13" r="3"/>
      <path d="M14 16 L14 22 M11 18 L17 18 M14 22 L11 26 M14 22 L17 26"/>
      {/* Adult 2 */}
      <circle cx="24" cy="13" r="3"/>
      <path d="M24 16 L24 22 M21 18 L27 18 M24 22 L21 26 M24 22 L27 26"/>
      {/* Child */}
      <circle cx="34" cy="15" r="2.5"/>
      <path d="M34 17.5 L34 22 M31.5 19 L36.5 19 M34 22 L32 26 M34 22 L36 26"/>
    </svg>
  )
}

export function IconCatCouple({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Camper */}
      <rect x="6" y="28" width="26" height="12" rx="3"/>
      <path d="M32 28 L39 33 L39 40 L32 40"/>
      <rect x="10" y="31" width="7" height="5" rx="1"/>
      <rect x="34" y="29" width="4" height="6" rx="1"/>
      {/* Wheels */}
      <circle cx="13" cy="40" r="3.5"/>
      <circle cx="29" cy="40" r="3.5"/>
      {/* Double heart above */}
      <path d="M20 20 C20 17.5 17 15 14.5 17.5 C12 15 9 17.5 9 20 C9 23 14.5 27 14.5 27 C14.5 27 20 23 20 20Z"/>
      <path d="M33 18 C33 16 30.5 14 28.5 16 C26.5 14 24 16 24 18 C24 20.5 28.5 24 28.5 24 C28.5 24 33 20.5 33 18Z"/>
    </svg>
  )
}

export function IconCatSolar({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Camper body (top view / side view) */}
      <rect x="4" y="26" width="30" height="13" rx="3"/>
      <path d="M34 26 L42 31 L42 39 L34 39"/>
      <rect x="36" y="27" width="5" height="7" rx="1"/>
      <rect x="8" y="29" width="7" height="5" rx="1"/>
      <rect x="18" y="29" width="7" height="5" rx="1"/>
      {/* Wheels */}
      <circle cx="11" cy="39" r="4"/>
      <circle cx="29" cy="39" r="4"/>
      {/* Solar panel on roof */}
      <rect x="8" y="20" width="22" height="6" rx="1"/>
      <line x1="14" y1="20" x2="14" y2="26"/>
      <line x1="20" y1="20" x2="20" y2="26"/>
      <line x1="26" y1="20" x2="26" y2="26"/>
      <line x1="8" y1="23" x2="30" y2="23"/>
      {/* Sun */}
      <circle cx="40" cy="10" r="4"/>
      <line x1="40" y1="3" x2="40" y2="5"/>
      <line x1="40" y1="15" x2="40" y2="17"/>
      <line x1="33" y1="10" x2="35" y2="10"/>
      <line x1="45" y1="10" x2="47" y2="10"/>
      <line x1="35" y1="5" x2="36.5" y2="6.5"/>
      <line x1="43.5" y1="13.5" x2="45" y2="15"/>
      <line x1="45" y1="5" x2="43.5" y2="6.5"/>
      <line x1="36.5" y1="13.5" x2="35" y2="15"/>
    </svg>
  )
}

export function IconCatAuto({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Camper small */}
      <rect x="6" y="30" width="22" height="11" rx="3"/>
      <path d="M28 30 L34 34 L34 41 L28 41"/>
      <rect x="9" y="33" width="6" height="4" rx="1"/>
      <circle cx="11" cy="41" r="3"/>
      <circle cx="26" cy="41" r="3"/>
      {/* Gear selector: P R N D */}
      <rect x="14" y="6" width="20" height="18" rx="3"/>
      {/* Gear shift knob */}
      <circle cx="24" cy="24" r="2.5"/>
      {/* P R N D labels */}
      <text x="17" y="15" fontFamily="inherit" fontSize="4" fontWeight="700" fill="currentColor" stroke="none">P R N</text>
      <text x="27" y="15" fontFamily="inherit" fontSize="5" fontWeight="900" fill="currentColor" stroke="none">D</text>
      {/* Indicator arrow pointing at D */}
      <path d="M26 19 L28 22 L30 19" strokeWidth="1.2"/>
    </svg>
  )
}

export function IconCatNew({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Camper */}
      <rect x="4" y="26" width="28" height="13" rx="3"/>
      <path d="M32 26 L40 31 L40 39 L32 39"/>
      <rect x="8" y="29" width="7" height="5" rx="1"/>
      <rect x="18" y="29" width="7" height="5" rx="1"/>
      <rect x="34" y="27" width="5" height="7" rx="1"/>
      <circle cx="11" cy="39" r="4"/>
      <circle cx="29" cy="39" r="4"/>
      {/* Sparkle 4-point star */}
      <path d="M36 8 L37.5 12 L42 13.5 L37.5 15 L36 19 L34.5 15 L30 13.5 L34.5 12 Z"/>
      {/* Small star */}
      <path d="M26 5 L26.8 7.2 L29 8 L26.8 8.8 L26 11 L25.2 8.8 L23 8 L25.2 7.2 Z"/>
      {/* 2025 badge implied by stars */}
    </svg>
  )
}
