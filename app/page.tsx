import { projects, type Project, type ProjectStatus } from "@/lib/projects";

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  complete: {
    label: "Complete",
    className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  wip: {
    label: "WIP",
    className: "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
  },
};

function TechGroup({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-zinc-400 w-16 shrink-0">{label}</span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  const { frontend, backend, other } = project.techStack;

  return (
    <article>
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full shrink-0 mt-0.5 ${status.className}`}
        >
          {status.label}
        </span>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
        {project.description}
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-5 leading-relaxed">
        {project.writeup}
      </p>
      <div className="flex flex-col gap-2 mb-6">
        {frontend && <TechGroup label="Frontend" tags={frontend} />}
        {backend && <TechGroup label="Backend" tags={backend} />}
        {other && <TechGroup label="Other" tags={other} />}
      </div>
      <div className="flex items-center gap-4">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
          >
            View on GitHub
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10M7 17 17 7" />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Private
          </span>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            Live Demo
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10M7 17 17 7" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-2xl mx-auto px-6 py-20">
        <header className="mb-20">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Morgan</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Software Developer
          </p>
        </header>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-10">
            Projects
          </h2>
          <div className="flex flex-col">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={
                  i > 0
                    ? "pt-10 mt-10 border-t border-zinc-100 dark:border-zinc-800"
                    : ""
                }
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-2xl mx-auto px-6 py-10 mt-12 border-t border-zinc-100 dark:border-zinc-800">
        <a
          href="https://github.com/CaptainMorganCodes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 hover:text-foreground transition-colors"
        >
          github.com/CaptainMorganCodes
        </a>
      </footer>
    </div>
  );
}
