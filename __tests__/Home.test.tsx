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
      year: "MMXXIV",
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
  it("renders the masthead heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Captain Morgan.+Manifest/i
    );
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

  it("shows a 'view the charts' link for projects with a repoUrl", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /view the charts/i });
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/CaptainMorganCodes/public-project"
    );
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("shows 'charts sealed' for projects without a repoUrl", () => {
    render(<Home />);
    expect(screen.getByText(/charts sealed/i)).toBeInTheDocument();
  });

  it("renders the correct nautical status labels", () => {
    render(<Home />);
    expect(screen.getByText(/MOORED/)).toBeInTheDocument();
    expect(screen.getByText(/SAILING/)).toBeInTheDocument();
  });

  it("renders tech stack", () => {
    render(<Home />);
    // Stack is rendered as a single uppercase joined line per project.
    expect(screen.getByText(/REACT.*TYPESCRIPT.*DJANGO/)).toBeInTheDocument();
    expect(screen.getByText(/PYTHON/)).toBeInTheDocument();
  });

  it("renders the GitHub profile link in the sidebar", () => {
    render(<Home />);
    const link = screen.getByRole("link", {
      name: /github.*CaptainMorganCodes/i,
    });
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/CaptainMorganCodes"
    );
  });

  it("does not show an active 'board the ship' link when liveUrl is absent", () => {
    render(<Home />);
    // Both test projects lack liveUrl, so no anchor element should match.
    expect(
      screen.queryByRole("link", { name: /board the ship/i })
    ).not.toBeInTheDocument();
  });

  it("shows a 'board the ship' link when liveUrl is present", () => {
    jest.resetModules();
    jest.doMock("@/lib/projects", () => ({
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
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { default: HomeFresh } = require("@/app/page");
    render(<HomeFresh />);
    expect(
      screen.getByRole("link", { name: /board the ship/i })
    ).toBeInTheDocument();
  });

  it("renders the masthead 'being the' framing", () => {
    render(<Home />);
    expect(screen.getByText(/BEING THE/i)).toBeInTheDocument();
  });

  it("renders all four section headings", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /About/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /The Trades/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /The Manifest/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Send Word/i })
    ).toBeInTheDocument();
  });
});
