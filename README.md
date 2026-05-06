# captain-morgans-manifest

Personal portfolio site for [CaptainMorganCodes](https://github.com/CaptainMorganCodes), built with Next.js and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/captain-morgans-manifest](http://localhost:3000/captain-morgans-manifest) in your browser.

> Note: the `/captain-morgans-manifest` path prefix is required locally due to the `basePath` config for GitHub Pages.

## Adding a Project

Edit [`lib/projects.ts`](lib/projects.ts) and add an entry to the `projects` array:

```ts
{
  id: "your-project-id",
  title: "Project Title",
  description: "One or two sentence summary.",
  writeup: "Longer paragraph with context and technical detail.",
  status: "complete" | "in-progress" | "wip",
  techStack: {
    frontend: ["React", "TypeScript"],
    backend: ["Django", "Python"],
    other: ["Docker"],
  },
  repoUrl: "https://github.com/CaptainMorganCodes/your-repo", // optional — omit for private repos
  liveUrl: "https://your-live-site.com",                      // optional
}
```

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To enable it on a new repo: go to **Settings → Pages → Source** and select **GitHub Actions**.

## Tech

- [Next.js 16](https://nextjs.org) — static export (`output: "export"`)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
