import { Monogram } from "./Monogram";

/**
 * Mobile sticky header. Visible below md only.
 *
 * - Sticks to the top of the viewport with a translucent parchment blur.
 * - Compact monogram + name + role + horizontal section nav.
 * - Compass rose is intentionally omitted on mobile to save vertical space.
 */
export function MobileHeader() {
  return (
    <header
      className="md:hidden sticky top-0 z-20 sticky-header border-b border-ink/20 px-5 pt-4 pb-2 shadow-[0_4px_12px_rgba(60,40,15,0.06)]"
      aria-label="Captain's quarters"
    >
      <div className="text-center">
        <div className="font-old text-[10px] tracking-[0.3em] text-ink-soft">
          ⎯ MMXXVI ⎯
        </div>
        <div className="flex items-center justify-center gap-3 mt-1">
          <Monogram size={52} className="text-ink shrink-0" />
          <div className="text-left">
            <div className="font-display-italic italic text-[15px] text-ink leading-none">
              Captain Morgan
            </div>
            <div className="font-old text-[8.5px] tracking-[0.2em] text-ink-soft mt-0.5">
              SOFTWARE ENGINEER
            </div>
          </div>
        </div>
      </div>

      <nav
        className="flex gap-4 justify-center pt-2 mt-2 border-t border-dotted border-ink-soft font-display-italic italic text-[13px]"
        aria-label="Sections"
      >
        <a href="#about" className="text-rust border-b border-rust pb-0.5">
          About
        </a>
        <a href="#trades" className="text-ink">
          Trades
        </a>
        <a href="#manifest" className="text-ink">
          Manifest
        </a>
        <a href="#contact" className="text-ink">
          Send Word
        </a>
      </nav>
    </header>
  );
}
