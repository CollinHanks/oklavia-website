/* OttomanMotifs.tsx — Clean, gold, clearly visible key decorative elements */

// Ottoman Divider: Clear gold horizontal divider with 8-pointed star center
export function OttomanDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-6 ${className}`}>
      <svg width="320" height="24" viewBox="0 0 320 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left line with diamond end */}
        <line x1="20" y1="12" x2="130" y2="12" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5" />
        <path d="M130 12 L138 8 L146 12 L138 16 Z" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="0.5" />

        {/* Center 8-pointed star */}
        <g transform="translate(160,12)">
          <rect x="-8" y="-8" width="16" height="16" rx="1" stroke="#D4AF37" strokeWidth="0.7" fill="none" transform="rotate(45)" opacity="0.6" />
          <rect x="-8" y="-8" width="16" height="16" rx="1" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.4" />
          <circle r="3" fill="#D4AF37" opacity="0.3" />
          <circle r="1.2" fill="#D4AF37" opacity="0.6" />
        </g>

        {/* Right line with diamond end */}
        <path d="M174 12 L182 8 L190 12 L182 16 Z" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="0.5" />
        <line x1="190" y1="12" x2="300" y2="12" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5" />
      </svg>
    </div>
  )
}

// Ottoman Border: Clear gold chain pattern for footer and section dividers
export function OttomanBorder({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg width="100%" height="16" viewBox="0 0 800 16" preserveAspectRatio="none">
        <defs>
          <pattern id="gold-chain" x="0" y="0" width="60" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 8 L15 2 L30 8 L15 14 Z" stroke="#D4AF37" strokeWidth="0.6" fill="#D4AF37" fillOpacity="0.06" opacity="0.5" />
            <path d="M30 8 L45 2 L60 8 L45 14 Z" stroke="#D4AF37" strokeWidth="0.6" fill="#D4AF37" fillOpacity="0.06" opacity="0.5" />
            <circle cx="0" cy="8" r="1.5" fill="#D4AF37" opacity="0.5" />
            <circle cx="30" cy="8" r="1.5" fill="#D4AF37" opacity="0.5" />
            <circle cx="60" cy="8" r="1.5" fill="#D4AF37" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="16" fill="url(#gold-chain)" />
      </svg>
    </div>
  )
}

// Ottoman Corner: Clear gold corner ornament for cards
export function OttomanCorner({ position, className = '' }: {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
}) {
  const rotations = {
    'top-left': '',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)',
  }

  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <g transform={`translate(20, 20) ${rotations[position]} translate(-20, -20)`}>
        <path d="M3 3 L3 18" stroke="#D4AF37" strokeWidth="0.7" opacity="0.4" />
        <path d="M3 3 L18 3" stroke="#D4AF37" strokeWidth="0.7" opacity="0.4" />
        <path d="M7 7 Q7 13, 13 13 Q13 7, 7 7" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.3" />
        <circle cx="3" cy="3" r="2" fill="#D4AF37" opacity="0.35" />
      </g>
    </svg>
  )
}

// Ottoman Tulip: Elegant lale motif accent
export function OttomanTulip({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 24 30" fill="none" className={className}>
      <path d="M12 3 C8 3, 4 10, 4 16 C4 20, 8 22, 12 19 C16 22, 20 20, 20 16 C20 10, 16 3, 12 3 Z"
        fill="#D4AF37" opacity="0.15" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity={0.5} />
      <path d="M12 6 C10 8, 9 12, 9 16 C9 18, 10.5 19, 12 17.5 C13.5 19, 15 18, 15 16 C15 12, 14 8, 12 6 Z"
        fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.3" strokeOpacity={0.4} />
      <line x1="12" y1="19" x2="12" y2="28" stroke="#D4AF37" strokeWidth="0.7" opacity="0.4" />
      <path d="M12 23 Q9 22, 8 25" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.35" />
      <path d="M12 25 Q15 24, 16 27" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.35" />
    </svg>
  )
}

// Section Ornament: Large decorative medallion
export function OttomanMedallion({ className = '', size = 80 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={className}>
      {/* Outer rings */}
      <circle cx="40" cy="40" r="38" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25" />
      <circle cx="40" cy="40" r="32" stroke="#C9A84C" strokeWidth="0.3" opacity="0.15" strokeDasharray="3 2" />
      <circle cx="40" cy="40" r="26" stroke="#D4AF37" strokeWidth="0.5" opacity="0.25" />
      {/* 8-pointed star */}
      <rect x="20" y="20" width="40" height="40" rx="2" stroke="#D4AF37" strokeWidth="0.4" fill="none" transform="rotate(45 40 40)" opacity="0.2" />
      <rect x="20" y="20" width="40" height="40" rx="2" stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.15" />
      {/* 6-petal flower */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse key={angle} cx="40" cy="26" rx="4" ry="10" fill="#D4AF37" opacity="0.08" stroke="#D4AF37" strokeWidth="0.3" strokeOpacity={0.2} transform={`rotate(${angle} 40 40)`} />
      ))}
      {/* Center */}
      <circle cx="40" cy="40" r="5" fill="#D4AF37" opacity="0.1" stroke="#D4AF37" strokeWidth="0.4" strokeOpacity={0.3} />
      <circle cx="40" cy="40" r="2" fill="#D4AF37" opacity="0.3" />
    </svg>
  )
}

// Footer Ornament: Wide decorative gold band for footer top
export function FooterOrnament() {
  return (
    <div className="w-full relative">
      {/* Gold gradient line */}
      <div className="h-px bg-linear-to-r from-transparent via-gold-400/50 to-transparent" />

      {/* Ornamental center piece */}
      <div className="flex justify-center -mt-5">
        <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
          {/* Horizontal lines */}
          <line x1="0" y1="20" x2="70" y2="20" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
          <line x1="130" y1="20" x2="200" y2="20" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />

          {/* Left small diamonds */}
          <path d="M65 20 L70 17 L75 20 L70 23 Z" fill="#D4AF37" opacity="0.2" />
          <path d="M125 20 L130 17 L135 20 L130 23 Z" fill="#D4AF37" opacity="0.2" />

          {/* Center medallion */}
          <g transform="translate(100,20)">
            <circle r="14" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.4" />
            <circle r="10" stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.3" strokeDasharray="2 2" />
            {/* 4-petal flower */}
            <ellipse cx="0" cy="-6" rx="2" ry="5" fill="#D4AF37" opacity="0.15" />
            <ellipse cx="0" cy="-6" rx="2" ry="5" fill="#D4AF37" opacity="0.15" transform="rotate(90)" />
            <ellipse cx="0" cy="-6" rx="2" ry="5" fill="#D4AF37" opacity="0.15" transform="rotate(180)" />
            <ellipse cx="0" cy="-6" rx="2" ry="5" fill="#D4AF37" opacity="0.15" transform="rotate(270)" />
            <circle r="3" fill="#D4AF37" opacity="0.2" />
            <circle r="1.2" fill="#D4AF37" opacity="0.5" />
          </g>

          {/* Subtle outer dots */}
          <circle cx="30" cy="20" r="1" fill="#D4AF37" opacity="0.25" />
          <circle cx="170" cy="20" r="1" fill="#D4AF37" opacity="0.25" />
        </svg>
      </div>
    </div>
  )
}

// Rumi Spiral: Classic Ottoman rumi/arabesque spiral motif
export function OttomanRumi({ className = '', size = 60 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={className}>
      {/* Main spiral */}
      <path d="M30 10 C45 10, 50 25, 42 35 C36 42, 25 42, 20 35 C16 29, 20 22, 27 22 C32 22, 34 26, 32 30" 
        stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.35" strokeLinecap="round" />
      {/* Inner leaf */}
      <path d="M32 30 Q38 25, 36 18 Q34 22, 30 24" 
        stroke="#D4AF37" strokeWidth="0.5" fill="#D4AF37" fillOpacity="0.08" opacity="0.3" />
      {/* Outer leaf */}
      <path d="M20 35 Q12 40, 15 50 Q18 44, 24 40" 
        stroke="#D4AF37" strokeWidth="0.5" fill="#D4AF37" fillOpacity="0.08" opacity="0.3" />
      {/* Dot accents */}
      <circle cx="30" cy="10" r="1.5" fill="#D4AF37" opacity="0.4" />
      <circle cx="27" cy="22" r="1" fill="#D4AF37" opacity="0.3" />
    </svg>
  )
}

// Geometric Star: 6-pointed Islamic geometric star
export function OttomanStar({ className = '', size = 50 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={className}>
      {/* Outer hexagon */}
      <polygon points="25,3 44,14 44,36 25,47 6,36 6,14" 
        stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.25" />
      {/* Star of David / 6-pointed star */}
      <polygon points="25,8 33,20 47,20 37,30 41,43 25,35 9,43 13,30 3,20 17,20" 
        stroke="#D4AF37" strokeWidth="0.6" fill="#D4AF37" fillOpacity="0.04" opacity="0.35" />
      {/* Inner hexagon */}
      <polygon points="25,15 33,20 33,30 25,35 17,30 17,20" 
        stroke="#D4AF37" strokeWidth="0.4" fill="#D4AF37" fillOpacity="0.06" opacity="0.3" />
      {/* Center */}
      <circle cx="25" cy="25" r="3" fill="#D4AF37" opacity="0.15" />
      <circle cx="25" cy="25" r="1.2" fill="#D4AF37" opacity="0.4" />
    </svg>
  )
}

// Çini Floral: İznik-style floral spray motif
export function OttomanFloral({ className = '', size = 70 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none" className={className}>
      {/* Central flower */}
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse key={angle} cx="35" cy="22" rx="3.5" ry="9" 
          fill="#D4AF37" opacity="0.1" stroke="#D4AF37" strokeWidth="0.4" strokeOpacity={0.3}
          transform={`rotate(${angle} 35 35)`} />
      ))}
      {/* Center stamen */}
      <circle cx="35" cy="35" r="4" fill="#D4AF37" opacity="0.12" stroke="#D4AF37" strokeWidth="0.4" strokeOpacity={0.35} />
      <circle cx="35" cy="35" r="1.5" fill="#D4AF37" opacity="0.4" />
      {/* Outer ring of dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const cx = 35 + 28 * Math.cos(rad)
        const cy = 35 + 28 * Math.sin(rad)
        return <circle key={angle} cx={cx} cy={cy} r="1" fill="#D4AF37" opacity="0.2" />
      })}
      {/* Curved stems */}
      <path d="M35 44 Q28 55, 20 58" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.25" />
      <path d="M35 44 Q42 55, 50 58" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.25" />
      {/* Small leaf buds */}
      <path d="M20 58 Q17 55, 15 58 Q18 60, 20 58" fill="#D4AF37" opacity="0.15" />
      <path d="M50 58 Q53 55, 55 58 Q52 60, 50 58" fill="#D4AF37" opacity="0.15" />
    </svg>
  )
}
