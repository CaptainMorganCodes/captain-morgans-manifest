/**
 * Compass rose — pure SVG, no JS. Gentle hover rotation via the `.compass`
 * class in globals.css.
 */
export function CompassRose({ size = 120 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className="compass"
      aria-hidden="true"
    >
      {/* outer rings */}
      <circle
        cx="60"
        cy="60"
        r="55"
        fill="none"
        stroke="#3A2410"
        strokeWidth="0.8"
        opacity="0.7"
      />
      <circle
        cx="60"
        cy="60"
        r="46"
        fill="none"
        stroke="#3A2410"
        strokeWidth="0.4"
        opacity="0.5"
        strokeDasharray="2 3"
      />
      {/* N-S arm */}
      <path d="M60 8 L 64 60 L 60 112 L 56 60 Z" fill="#3A2410" opacity="0.85" />
      {/* E-W arm */}
      <path d="M8 60 L 60 56 L 112 60 L 60 64 Z" fill="#3A2410" opacity="0.6" />
      {/* diagonals */}
      <path
        d="M22 22 L 62 58 L 98 98 L 58 62 Z"
        fill="#3A2410"
        opacity="0.35"
      />
      <path
        d="M98 22 L 62 62 L 22 98 L 58 58 Z"
        fill="#3A2410"
        opacity="0.35"
      />
      {/* center pin */}
      <circle cx="60" cy="60" r="4" fill="#A0522D" />
      <circle cx="60" cy="60" r="1.5" fill="#3A2410" />
      {/* north marker */}
      <text
        x="60"
        y="6"
        textAnchor="middle"
        fontFamily="var(--font-display), serif"
        fontSize="6"
        fill="#3A2410"
      >
        N
      </text>
    </svg>
  );
}
