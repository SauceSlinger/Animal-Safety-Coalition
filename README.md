
 # Wildlife Conservation Donation Page

A clean, responsive React + Vite single-page site for collecting donations and showcasing endangered species — exported from a Figma design and integrated into this repository.

Live demo: https://SauceSlinger.github.io/Animal-Safety-Coalition/

Design reference: https://www.figma.com/design/oCQI46nPL2pIT2drCNoY7c/Wildlife-Conservation-Donation-Page

## Contents

- `src/` — React components, styles, and assets.
- `index.html` — Vite entry file.
- `vite.config.ts` — Vite configuration (set to use relative `base` for GitHub Pages).
- `package.json` — scripts for dev, build, and deploy (gh-pages).

## Quickstart (development)

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Open http://localhost:3000 to view locally.

## Build & Deploy

Production build (outputs to `build/`):

```bash
npm run build
```

One-shot deploy (uses `gh-pages`):

```bash
npm run deploy
```

This publishes the `build/` folder to GitHub Pages. The repository is already configured to deploy automatically on pushes to `main` using the workflow at `.github/workflows/gh-pages.yml`.

### Notes about GitHub Pages

- Vite's `base` is set to `./` in `vite.config.ts` to make the app work when served from a project subpath.
- The Actions workflow builds and deploys the `build/` directory to GitHub Pages on pushes to `main`.

## Development notes

- The project uses Tailwind-like compiled CSS in `src/index.css` and additional global styles in `src/styles/globals.css`.
- The site uses remote images (Unsplash) and optimized components under `src/components/`.

## Suggested workflow

1. Create a branch for changes: `git checkout -b feat/your-change`.
2. Make edits to components (for copy changes, `src/App.tsx` and `src/components/donation-form.tsx` are good starting points).
3. Run `npm run dev` to preview locally.
4. Commit and push, open a PR into `main`. On merge, Actions will publish the new site.

## Screenshots

Below are three snapshots of the site (click to view full size):

![Hero section](docs/Screenshot from 2025-11-26 03-07-35.png)

![Donation form](docs/Screenshot from 2025-11-26 03-08-01.png)

![Species grid](docs/Screenshot from 2025-11-26 03-08-44.png)

These images live in `docs/`. Replace them by adding new files to that folder and updating the links.

## Troubleshooting

- If the site does not load after deploy, wait a minute for GitHub Pages to propagate.
- If you see 404s for routes, ensure `base` is correct in `vite.config.ts` or use relative links.
- To fix the reported dependency vulnerability, run:

```bash
npm audit fix
# or, with force (careful):
npm audit fix --force
```

## Contributing

Open issues or PRs for content updates, copy changes, or feature requests. For copy edits, start with `src/App.tsx` (hero & mission text) and `src/components/donation-form.tsx` (form text and placeholders).

## Contact

Repository owner / maintainer: SauceSlinger (https://github.com/SauceSlinger)

---

If you'd like, I can add a status badge for the GitHub Actions deploy workflow.
