/**
 * Section divider — a single ornament flanked by long dashes.
 * Default symbol is ✦ (used between About/Trades and Trades/Manifest).
 * Pass `symbol="✦ ✦ ✦"` for the closing flourish under The Manifest.
 */
export function Flourish({ symbol = "✦" }: { symbol?: string }) {
  return (
    <div
      className="flourish text-center text-sm mb-10"
      aria-hidden="true"
    >
      <span>{symbol}</span>
    </div>
  );
}
