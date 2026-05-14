/**
 * Section heading — used for "§ I · About", "§ II · The Trades", etc.
 *
 * Composes a roman numeral + bold display title + italic subtitle row.
 */
export function SectionHeading({
  numeral,
  title,
  subtitle,
}: {
  numeral: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-1">
        <span className="text-rust font-old mr-2">{numeral}</span>
        {title}
      </h2>
      {subtitle && (
        <div className="font-display-italic italic text-ink-soft text-sm mb-5">
          {subtitle}
        </div>
      )}
    </>
  );
}
