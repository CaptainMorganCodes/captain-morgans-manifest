export type ProjectStatus = "complete" | "in-progress" | "wip";

export interface Project {
  id: string;
  title: string;
  description: string;
  writeup: string;
  status: ProjectStatus;
  techStack: {
    frontend?: string[];
    backend?: string[];
    other?: string[];
  };
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "trip-signup-portal",
    title: "Trip Sign-Up Portal",
    description:
      "A full-stack web app for parents to browse and register their children for trips, with payments processed through a mock legacy API.",
    writeup:
      "Originally built as a technical interview challenge, this project is being polished into a production-quality portfolio piece. The frontend is a React and TypeScript SPA that communicates with a Django REST API. A key aspect of the implementation is the payment integration with a mock legacy API, requiring careful abstraction to simulate real-world constraints common in enterprise environments.",
    status: "in-progress",
    techStack: {
      frontend: ["React", "TypeScript"],
      backend: ["Django", "Python", "REST Framework"],
    },
  },
];
