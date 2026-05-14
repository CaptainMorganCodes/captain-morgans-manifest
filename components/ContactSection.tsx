import { WaxSeal } from "./WaxSeal";

export function ContactSection({
  linkedIn = "https://www.linkedin.com/in/mtatums/",
  initials = "CM",
}: {
  linkedIn?: string;
  initials?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
      <WaxSeal initials={initials} />
      <div className="font-body text-ink">
        <p className="mb-2">
          The captain answers all letters delivered in good faith. Send word to:
        </p>
        <div className="font-display-italic italic text-lg">
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="pirate-link"
          >
            connect on LinkedIn ↗
          </a>
        </div>
        <p className="font-old text-[10px] tracking-[0.15em] text-ink-soft mt-3">
          EXPECTED REPLY · WITHIN A FORTNIGHT
        </p>
      </div>
    </div>
  );
}
