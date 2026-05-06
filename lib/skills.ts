export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "XML", "CSS"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Node.js", "GraphQL"],
  },
  {
    label: "Cloud",
    skills: ["AWS"],
  },
  {
    label: "Testing",
    skills: ["Playwright", "Cypress", "Selenium", "TDD", "A/B Testing"],
  },
  {
    label: "DevOps",
    skills: ["CI/CD", "GitHub", "GitLab", "Git"],
  },
  {
    label: "Monitoring",
    skills: ["Grafana", "Datadog", "Google Web Vitals", "Splunk", "RUM", "SEO"],
  },
  {
    label: "Accessibility",
    skills: ["WCAG"],
  },
  {
    label: "Methodologies",
    skills: ["Agile", "Scrum", "Kanban"],
  },
  {
    label: "AI Tools",
    skills: ["ChatGPT", "Codeium", "Windsurf", "Cursor", "Claude"],
  },
];
