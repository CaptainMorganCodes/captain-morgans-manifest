import type { Project, ProjectStatus } from "@/lib/projects";

/**
 * Maps your existing ProjectStatus values to the nautical labels shown in the UI.
 *
 * - complete    → MOORED  (shipped and docked)
 * - in-progress → SAILING (currently being built)
 * - wip         → CHARTED (idea / planned)
 */
const STATUS_DISPLAY: Record<
  ProjectStatus,
  { label: string; pipClass: string }
> = {
  complete: { label: "MOORED", pipClass: "status-moored" },
  "in-progress": { label: "SAILING", pipClass: "status-sailing" },
  wip: { label: "CHARTED", pipClass: "status-charted" },
};

export function ProjectEntry({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const status = STATUS_DISPLAY[project.status];
  const { frontend, backend, other } = project.techStack;
  const stack = [...(frontend ?? []), ...(backend ?? []), ...(other ?? [])]
    .join(" · ")
    .toUpperCase();

  // Lowercase roman numeral for the entry index — "i.", "ii.", "iii." ...
  const romanLower = toRomanLower(index + 1);

  return (
    <article aria-labelledby={`project-${project.id}-title`}>
      <div className="flex items-baseline justify-between gap-4 mb-1.5 flex-wrap">
        <h3
          id={`project-${project.id}-title`}
          className="font-display text-xl md:text-[1.4rem] font-bold text-ink"
        >
          <span className="font-old text-rust text-[13px] mr-2">
            {romanLower}.
          </span>
          {project.title}
        </h3>
        <div className="font-old text-[10px] tracking-[0.15em] text-ink-soft whitespace-nowrap">
          <span className={`status-pip ${status.pipClass}`} aria-hidden="true" />
          {status.label}
          {project.year ? ` · ${project.year}` : ""}
        </div>
      </div>

      <p className="font-body text-ink mb-2 leading-relaxed">
        {project.description}
      </p>

      {project.writeup && (
        <p className="font-body text-ink-soft mb-2 leading-relaxed text-[15px]">
          {project.writeup}
        </p>
      )}

      {stack && (
        <div className="font-old text-[10px] tracking-[0.15em] text-ink-soft mb-2">
          {stack}
        </div>
      )}

      <div className="font-display-italic italic text-sm flex gap-4">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pirate-link"
          >
            view the charts ↗
          </a>
        ) : (
          <span
            className="pirate-link disabled"
            aria-label="Repository is private — charts sealed"
          >
            charts sealed
          </span>
        )}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pirate-link"
          >
            board the ship ↗
          </a>
        ) : (
          <span
            className="pirate-link disabled"
            aria-label="No live demo available"
          >
            board the ship ↗
          </span>
        )}
      </div>
    </article>
  );
}

/** Convert a positive integer to a lowercase roman numeral. */
function toRomanLower(n: number): string {
  const map: [number, string][] = [
    [1000, "m"],
    [900, "cm"],
    [500, "d"],
    [400, "cd"],
    [100, "c"],
    [90, "xc"],
    [50, "l"],
    [40, "xl"],
    [10, "x"],
    [9, "ix"],
    [5, "v"],
    [4, "iv"],
    [1, "i"],
  ];
  let result = "";
  for (const [value, sym] of map) {
    while (n >= value) {
      result += sym;
      n -= value;
    }
  }
  return result;
}
