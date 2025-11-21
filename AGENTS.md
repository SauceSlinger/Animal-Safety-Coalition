**Purpose**

`AGENTS.md` documents the automated and human roles (agents) involved in building, testing, and deploying the site to GitHub Pages. It contains an actionable CI/CD plan, environment and secrets guidance, and recommended automated tasks so the deployment is repeatable and auditable.

**Agents & Responsibilities**
- **Developer (human)**: Review design, edit content, confirm accessibility, and approve PRs.
- **Build Agent (CI)**: Runs linters, optional build steps (e.g., image optimization scripts), and produces publishable artifacts.
- **Deployment Agent (GitHub Actions)**: Publishes the artifacts to GitHub Pages using `GITHUB_TOKEN` or a `PERSONAL_ACCESS_TOKEN` if needed.
- **QA Agent (human / tools)**: Runs Lighthouse, accessibility audits, and performs manual cross-device checks.

**Recommended GitHub Actions Workflow (high-level)**

Name: `pages-deploy.yml`

Triggers:
- `push` to `main` (or PR merge to `main`)

Jobs:
- `lint-and-test` — run `prettier`/`stylelint` and any JS checks.
- `build` — (optional) run any image optimization and copy final files to an `output/` folder.
- `deploy` — use `peaceiris/actions-gh-pages@v3` or the official `actions/configure-pages` + `actions/deploy-pages` action to publish `output/` (or repo root) to Pages.

Secrets & Permissions:
- `GITHUB_TOKEN` (provided by Actions) — can be used to push to `gh-pages` or trigger Pages deployment.
- `PERSONAL_ACCESS_TOKEN` (optional) — only needed if you need a token with broader permissions across repos/organizations.

Example `deploy` step (summary):

```
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./output
```

Notes on method selection:
- If you prefer a single-branch `docs/` approach, the workflow only needs to place files into `docs/` and skip the `gh-pages` push.
- The `actions/configure-pages` + `actions/deploy-pages` pattern is the official approach and recommended for long-term reliability.

**Suggested File/Build Layout for CI**
- Repository source: `./` (editable files)
- CI build output: `./output` or `./docs` (files copied or generated here get published)

**Image & Asset Optimization Agent**
- Add a small Node script or use `imagemin` in CI to convert heavy PNGs to `webp`, compress JPEGs, and produce appropriately-sized versions for the responsive `<picture>` element.

**Accessibility & Lighthouse Agent**
- Run Lighthouse CI in GitHub Actions or locally and fail the build if scores for accessibility/performance fall below an agreed threshold (optional).

**Manual Steps That Require Human Approval**
- Content copy changes, large layout tweaks, or changes to deployment settings (Pages branch or domain) should be handled via PR with at least one reviewer.

**Rollout & Rollback**
- Rollout: Merge to `main` triggers CI → deploy to Pages.
- Rollback: Use Git to revert the commit(s) on `main` or re-deploy a previous commit to `gh-pages`.

**Security & Secrets**
- Do not store secrets or sensitive data in the repo.
- Use `secrets` in GitHub repository settings, and restrict token scopes to least-privilege.

**Housekeeping & Maintenance**
- Periodically run audits (Lighthouse) and refresh asset compression settings.
- Keep dependencies used only for dev (lint/build) up to date.

If you approve this agent plan I'll scaffold a starter GitHub Actions workflow and begin mapping `Resources/` assets into `assets/` and the page sections.
