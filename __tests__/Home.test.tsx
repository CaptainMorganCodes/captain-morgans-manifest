import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("@/lib/projects", () => ({
  projects: [
    {
      id: "public-project",
      title: "Public Project",
      description: "A public project description.",
      writeup: "Public project writeup with more detail.",
      status: "complete",
      techStack: {
        frontend: ["React", "TypeScript"],
        backend: ["Django"],
      },
      repoUrl: "https://github.com/CaptainMorganCodes/public-project",
    },
    {
      id: "private-project",
      title: "Private Project",
      description: "A private project description.",
      writeup: "Private project writeup with more detail.",
      status: "in-progress",
      techStack: {
        backend: ["Python"],
      },
    },
  ],
}));

describe("Home", () => {
  it("renders the portfolio heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent("Morgan");
  });

  it("renders all project titles", () => {
    render(<Home />);
    expect(screen.getByText("Public Project")).toBeInTheDocument();
    expect(screen.getByText("Private Project")).toBeInTheDocument();
  });

  it("renders project descriptions", () => {
    render(<Home />);
    expect(
      screen.getByText("A public project description.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("A private project description.")
    ).toBeInTheDocument();
  });

  it("shows a GitHub link for projects with a repoUrl", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /view on github/i });
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/CaptainMorganCodes/public-project"
    );
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("shows a Private label for projects without a repoUrl", () => {
    render(<Home />);
    expect(screen.getByText("Private")).toBeInTheDocument();
  });

  it("renders the correct status badges", () => {
    render(<Home />);
    expect(screen.getByText("Complete")).toBeInTheDocument();
    expect(screen.getByText("In Progress")).toBeInTheDocument();
  });

  it("renders tech stack tags", () => {
    render(<Home />);
    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
    expect(screen.getByText("Django")).toBeInTheDocument();
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
  });

  it("renders the GitHub profile link in the footer", () => {
    render(<Home />);
    const footerLink = screen.getByRole("link", {
      name: /github\.com\/captainmorgancodes/i,
    });
    expect(footerLink).toHaveAttribute(
      "href",
      "https://github.com/CaptainMorganCodes"
    );
  });

  it("does not show a Live Demo link when liveUrl is absent", () => {
    render(<Home />);
    expect(
      screen.queryByRole("link", { name: /live demo/i })
    ).not.toBeInTheDocument();
  });

  it("shows a Live Demo link when liveUrl is present", () => {
    jest.resetModules();
    jest.mock("@/lib/projects", () => ({
      projects: [
        {
          id: "live-project",
          title: "Live Project",
          description: "Has a live URL.",
          writeup: "Writeup.",
          status: "complete",
          techStack: { frontend: ["React"] },
          repoUrl: "https://github.com/CaptainMorganCodes/live-project",
          liveUrl: "https://live-project.example.com",
        },
      ],
    }));
    const { default: HomeFresh } = require("@/app/page");
    render(<HomeFresh />);
    expect(
      screen.getByRole("link", { name: /live demo/i })
    ).toBeInTheDocument();
  });
});
