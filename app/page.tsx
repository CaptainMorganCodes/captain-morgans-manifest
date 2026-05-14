import { projects } from "@/lib/projects";
import { Sidebar } from "@/components/Sidebar";
import { MobileHeader } from "@/components/MobileHeader";
import { Masthead } from "@/components/Masthead";
import { SectionHeading } from "@/components/SectionHeading";
import { Flourish } from "@/components/Flourish";
import { SkillsLedger } from "@/components/SkillsLedger";
import { ProjectEntry } from "@/components/ProjectEntry";
import { ContactSection } from "@/components/ContactSection";

// Bio paragraphs — replace with your own copy.
// Written in a lightly nautical voice; soften to taste.
const bioParagraphs = [
  "Captain Morgan first set sail from humble waters, with naught but a Bachelor's in English and a Code Fellows berth to chart by. In 2017 the Captain signed aboard a great trading house of the property charts as the lowliest of swabbies, and there began a long apprenticeship to the engineering trade.",
  "The climb went deck by deck. Swabbie to able-bodied engineer. Able-bodied engineer to Software Development Engineer III. Every rank earned in salt and weather, until the Captain could read the sky and steer by it.",
  "These days Captain Morgan commands meaningful stretches of the voyage outright. The great performance epic of the flagship Showcase was charted by the Captain's own hand, hauled up out of the doldrums into fair and following winds. The Captain took the helm of the Contact Form, a treasure galleon laden with $450 million in yearly gold, and there, where lesser eyes saw only open water, spotted the hidden reef that would have spilled ten million in cargo to the deep.",
  "As Metrics and Observability Champion, Captain Morgan kept the crow's nest watch, rigging the warning bells that cry the storm before it breaks. Many a long night was stood on call, and every squall was met and weathered. Yet there was always time to gather the crew by lamplight and teach them the new charts, for it was the Captain who led the whole ship into the uncharted waters of AI tooling.",
  "The creed has never wavered: a well-run vessel, code kept clean below decks, every hatch accessible to every soul aboard. The horizon ahead is open water, and Captain Morgan stands ready at the bow to weigh anchor and chase it.",
];

export default function Home() {
  return (
    <div className="min-h-screen md:flex md:gap-0 md:items-start">
      <MobileHeader />
      <Sidebar />

      <main
        className="parchment parchment-edge flex-1 px-5 md:px-12 lg:px-16 pt-6 md:pt-12 pb-16 md:max-w-[760px] md:mx-auto"
        aria-label="Manifest"
      >
        <Masthead />

        {/* § I — About */}
        <section id="about" className="mb-12">
          <SectionHeading numeral="§ I" title="About" />
          <p data-dropcap className="font-body text-ink leading-relaxed">
            {bioParagraphs[0]}
          </p>
          {bioParagraphs.slice(1).map((paragraph, i) => (
            <p key={i} className="font-body text-ink mt-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        <Flourish />

        {/* § II — The Trades */}
        <section id="trades" className="mb-12">
          <SectionHeading
            numeral="§ II"
            title="The Trades"
            subtitle="tools, tongues & methods of the trade"
          />
          <SkillsLedger />
        </section>

        <Flourish />

        {/* § III — The Manifest (projects) */}
        <section id="manifest" className="mb-12">
          <SectionHeading
            numeral="§ III"
            title="The Manifest"
            subtitle="cargo, voyages & works in progress"
          />
          <div className="space-y-9">
            {projects.map((project, i) => (
              <ProjectEntry key={project.id} project={project} index={i} />
            ))}
          </div>
          <div className="mt-10">
            <Flourish symbol="✦ ✦ ✦" />
          </div>
        </section>

        {/* § IV — Send Word (contact) */}
        <section id="contact" className="pt-2">
          <SectionHeading
            numeral="§ IV"
            title="Send Word"
            subtitle="letters of inquiry, opportunity & correspondence"
          />
          <ContactSection />
        </section>

        <footer className="mt-16 pt-6 border-t border-dotted border-ink-soft text-center font-old text-[10px] tracking-[0.2em] text-ink-soft">
          ⎯ SET DOWN IN GOOD FAITH · MMXXVI ⎯
        </footer>
      </main>
    </div>
  );
}
