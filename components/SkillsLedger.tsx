import { skillCategories } from "../lib/skills";

/**
 * Skills ledger — double-ruled, dotted dividers between rows.
 * Replaces the old `<SkillsDividers />` from components/skills-layouts.tsx.
 *
 * Reads from `lib/skills.ts` so changing the data updates the ledger.
 */
export function SkillsLedger() {
  return (
    <div className="border-2 border-double border-ink-soft/60 bg-parchment-faint/40 px-5 py-4 md:px-6 md:py-5">
      {skillCategories.map((category) => (
        <div
          key={category.label}
          className="ledger-row py-2.5 flex flex-col md:flex-row md:items-baseline md:gap-4"
        >
          <div className="font-display-italic italic text-rust text-[15px] md:w-[180px] md:shrink-0">
            {category.label} ·
          </div>
          <div className="font-body text-ink text-[15px]">
            {category.skills.join(" · ")}
          </div>
        </div>
      ))}
    </div>
  );
}
