import { skillCategories } from "@/lib/skills";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
      {children}
    </span>
  );
}

export function SkillsDividers() {
  return (
    <div className="flex flex-col">
      {skillCategories.map((category) => (
        <div
          key={category.label}
          className="flex items-start gap-4 py-4 border-t border-zinc-200 dark:border-zinc-800 first:border-t-0"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300 w-28 shrink-0 pt-0.5">
            {category.label}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {category.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

