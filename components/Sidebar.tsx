import { CompassRose } from "./CompassRose";
import { Monogram } from "./Monogram";

/**
 * Desktop sidebar. Hidden below md.
 *
 * - Sticky to viewport so the captain's identity stays in view as you scroll.
 * - Monogram + name + role + compass rose + section nav + contact anchors.
 */
export function Sidebar() {
  return (
    <aside
      className="hidden md:flex md:flex-col md:w-[280px] lg:w-[320px] md:h-screen md:sticky md:top-0 parchment parchment-edge border-r border-ink/15 px-7 py-10"
      aria-label="Captain's quarters"
    >
      <div className="font-old text-[11px] tracking-[0.3em] text-ink-soft text-center">
        ⎯ MMXXVI ⎯
      </div>

      <div className="text-center mt-3 flex flex-col items-center">
        <Monogram size={140} className="text-ink" />
        <div className="font-display-italic italic text-[19px] text-ink mt-3">
          Captain Morgan
        </div>
        <div className="font-old text-[10px] tracking-[0.2em] text-ink-soft mt-1.5">
          SOFTWARE ENGINEER
        </div>
      </div>

      <div className="flex justify-center my-7">
        <CompassRose size={120} />
      </div>

      <nav
        className="flex flex-col gap-3 font-display-italic italic text-[17px]"
        aria-label="Sections"
      >
        <SidebarNavLink href="#about" numeral="§ I" label="About" active />
        <SidebarNavLink href="#trades" numeral="§ II" label="The Trades" />
        <SidebarNavLink href="#manifest" numeral="§ III" label="The Manifest" />
        <SidebarNavLink href="#contact" numeral="§ IV" label="Send Word" />
      </nav>

      <div className="mt-auto pt-6 border-t border-dotted border-ink-soft font-old text-[10px] tracking-[0.15em] text-ink-soft leading-loose">
        <SidebarContactLink
          href="https://github.com/CaptainMorganCodes"
          label="github · CaptainMorganCodes"
        />
        {/* Add more anchors here as you grow them (linkedin, cv.pdf, etc.) */}
      </div>
    </aside>
  );
}

function SidebarNavLink({
  href,
  numeral,
  label,
  active = false,
}: {
  href: string;
  numeral: string;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex items-baseline gap-2 pt-3 border-t border-dotted border-ink-soft transition-colors hover:text-rust ${
        active ? "text-rust" : "text-ink"
      }`}
    >
      <span className="font-old text-[11px] not-italic text-rust">{numeral}</span>
      <span>{label}</span>
    </a>
  );
}

function SidebarContactLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-rust transition-colors"
    >
      <span className="text-rust">⚑</span>
      <span>{label}</span>
    </a>
  );
}
