import type { CSSProperties } from "react";

/**
 * The mTs monogram — engraved-stamp style.
 *
 * - T is the umbrella, real font glyph from IM Fell English SC.
 * - M and S sit optically centered inside the T.
 * - S is rendered slightly larger and nudged outward so the silhouette
 *   reads symmetric despite S being a narrower letter than M.
 *
 * Color is driven by `currentColor` — set it via a Tailwind color class
 * (`text-ink`, `text-rust`, `text-parchment`) on the component or any parent.
 *
 * @example
 *   <Monogram size={140} className="text-ink" />
 *   <Monogram size={50} withRing={false} className="text-parchment" />
 */
interface MonogramProps {
  /** Width & height in px. Default 140. */
  size?: number;
  /** Show the outer ring + tick marks. Default true. */
  withRing?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Accessible label. */
  title?: string;
}

export function Monogram({
  size = 140,
  withRing = true,
  className,
  style,
  title = "Captain Morgan's monogram",
}: MonogramProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      style={style}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>

      {withRing && (
        <>
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="100"
            cy="100"
            r="86"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 16;
            return (
              <line
                key={i}
                x1={100 + 92 * Math.cos(a)}
                y1={100 + 92 * Math.sin(a)}
                x2={100 + 86 * Math.cos(a)}
                y2={100 + 86 * Math.sin(a)}
                stroke="currentColor"
                strokeWidth="1"
              />
            );
          })}
        </>
      )}

      {/* T — vertically centered in the ring */}
      <text
        x="100"
        y="150"
        textAnchor="middle"
        fontFamily="var(--font-display), 'IM Fell English SC', serif"
        fontSize="150"
        fill="currentColor"
      >
        T
      </text>

      {/* M — right-aligned at x=86; baseline y=122 keeps it optically centered */}
      <text
        x="86"
        y="122"
        textAnchor="end"
        fontFamily="var(--font-display), 'IM Fell English SC', serif"
        fontSize="50"
        fill="currentColor"
      >
        M
      </text>

      {/* S — slightly larger (56) and nudged outward (x=148) so it visually
         balances the wider M on the left */}
      <text
        x="148"
        y="125"
        textAnchor="end"
        fontFamily="var(--font-display), 'IM Fell English SC', serif"
        fontSize="56"
        fill="currentColor"
      >
        S
      </text>
    </svg>
  );
}
