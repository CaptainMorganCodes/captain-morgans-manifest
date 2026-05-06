import { projects, type ProjectStatus } from "@/lib/projects";

const VALID_STATUSES: ProjectStatus[] = ["complete", "in-progress", "wip"];

describe("projects data", () => {
  test("all projects have required fields", () => {
    for (const project of projects) {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.writeup).toBeTruthy();
      expect(project.status).toBeTruthy();
    }
  });

  test("all project IDs are unique", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test("all project statuses are valid", () => {
    for (const project of projects) {
      expect(VALID_STATUSES).toContain(project.status);
    }
  });

  test("each project has at least one tech stack category", () => {
    for (const project of projects) {
      const { frontend, backend, other } = project.techStack;
      const hasAtLeastOne =
        (frontend && frontend.length > 0) ||
        (backend && backend.length > 0) ||
        (other && other.length > 0);
      expect(hasAtLeastOne).toBeTruthy();
    }
  });

  test("repoUrl is a valid URL when present", () => {
    for (const project of projects) {
      if (project.repoUrl) {
        expect(() => new URL(project.repoUrl!)).not.toThrow();
      }
    }
  });

  test("liveUrl is a valid URL when present", () => {
    for (const project of projects) {
      if (project.liveUrl) {
        expect(() => new URL(project.liveUrl!)).not.toThrow();
      }
    }
  });
});
