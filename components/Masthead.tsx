/**
 * Masthead — the page's big top banner.
 *
 * "Being The" is a contraction of "being a true and faithful account of",
 * a convention from 17th/18th-century title pages. It frames the whole page
 * as a document, not a website.
 */
export function Masthead() {
  return (
    <header className="text-center pb-5 mb-10 border-b-2 border-ink">
      <div className="font-old text-[10px] md:text-[11px] tracking-[0.3em] text-ink-soft">
        ⎯⎯ BEING THE ⎯⎯
      </div>
      <h1 className="font-display text-3xl md:text-5xl font-bold text-ink mt-2 mb-2 tracking-wide leading-tight">
        Captain Morgan&rsquo;s Manifest
      </h1>
      <div className="font-display-italic italic text-sm md:text-base text-ink-soft">
        an honest record of works, voyages &amp; skills
      </div>
    </header>
  );
}
