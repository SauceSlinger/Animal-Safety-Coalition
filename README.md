**Project Overview**

Animal Safety Coalition — a single-page, responsive fundraising and informational site built from the design assets in the `Resources/` folder.

**Design Goal**: Recreate the attached reference PNG exactly in layout, typographic style, and asset usage while ensuring the final site is responsive, accessible, and deployable to GitHub Pages.

**What this repo contains (planned)**
- `index.html`: Single-entry page matching the reference image.
- `styles/`: CSS files (base, layout, components, responsive).
- `scripts/`: Minimal JS for interactivity (like donate widget, progress bar animation, small accessibility helpers).
- `assets/`: Optimized images and SVGs exported from `Resources/`.
- `README.md`: This file — project overview and dev instructions.
- `AGENTS.md`: Deployment & CI plan (detailed GitHub Actions guidance).

**Assumptions**
- The `Resources/` folder contains all images, logo/silhouettes, and any custom fonts needed.
- No heavy frontend framework required — project will use vanilla HTML/CSS/JS for simplicity and stability on GitHub Pages.

**Quick Start (Local)**

1. Clone the repository:

```
git clone <your-repo-url>
cd <repo-name>
```

2. Open locally:

```
# Use a simple static server, e.g. Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

3. Editing

- Edit `index.html`, `styles/` and `scripts/` as needed. Commit changes and push to GitHub.

**Development Guidelines**
- Keep semantic HTML and a clear heading hierarchy (`<h1>` → `<h2>` → ...).
- All images must have descriptive `alt` attributes.
- Use CSS variables for color palette and typography to make theme tuning simple.
- Keep JS minimal and feature-detect gracefully.

**Performance & Accessibility**
- Optimize images (export next-gen `webp` where appropriate, provide PNG fallback).
- Lazy-load large images below the fold.
- Ensure 4.5:1 contrast for body text vs background; use larger sizes for decorative fonts if contrast is low.
- Provide keyboard-accessible interactive elements and ARIA labels for complex widgets.

**Build & Lint**
- This project will be lightweight; optional dev dependencies:
  - `prettier` for formatting
  - `stylelint` for CSS style checks

Install node tools (optional):

```
npm init -y
npm install --save-dev prettier stylelint
```

**Deployment - GitHub Pages (recommended options)**

Two supported approaches — choose one based on your repo workflow:

- Option A: `docs/` folder on `main`
  - Place final built files in `docs/` on `main` branch and enable Pages from the `main/docs` folder.

- Option B: `gh-pages` branch (preferred for simpler automation)
  - Use `gh-pages` branch to host the compiled site. A GitHub Action can push build artifacts to `gh-pages`.

CI/CD: We recommend a lightweight GitHub Actions workflow to run linters and deploy automatically on `main` merges. See `AGENTS.md` for a suggested workflow YAML and secrets to set (`PERSONAL_ACCESS_TOKEN` if needed, although Actions can use `GITHUB_TOKEN` for Pages publishing).

**File Naming & Asset Strategy**
- Keep original assets in `Resources/originals/` and optimized assets in `assets/`.
- Use descriptive file names (e.g., `hero-forest.webp`, `logo-white.svg`, `silhouette-dog.svg`).

**Testing & QA**
- Run Lighthouse audits and record scores.
- Manual QA checklist: responsive breakpoints, keyboard nav, screen reader checks for donate controls.

**Branch Strategy**
- `main`: source/master content (PRs merged here trigger CI and deployment).
- `gh-pages`: published site (if using gh-pages approach).

**Next Steps (after your confirmation)**
1. Inventory `Resources/` and map assets to page sections.
2. Scaffold files (`index.html`, `styles/`, `scripts/`, `assets/`).
3. Implement responsive layout matching the PNG; iterate for accessibility.
4. Add CI workflow to deploy to GitHub Pages.

If that plan looks good, confirm and I will begin the asset audit and scaffolding.
