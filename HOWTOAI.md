# How to Use AI with this Repository

_A practical guide for working on **fsferrara.github.io** (Saverio Ferrara's personal site) with AI coding assistants._

This repository is a Jekyll content site, not an application. Most AI-assisted work here is **content authoring and curation** — adding resume entries, portfolio/work items, and blog posts — plus the occasional layout or config tweak. The guidance below is tailored to that reality.

## Core Principles

- **Human oversight.** Saverio is accountable for everything published here. This is a personal brand and resume — accuracy of dates, roles, skills, and claims matters more than anywhere. Never let an agent invent biographical facts, employers, certifications, or skills.
- **Ground content in fact.** Every resume/work entry must reflect real experience. AI is a drafting and formatting aid, not a source of truth about Saverio's career.
- **One vocabulary for skills.** Resume and project `skills` front matter must use only the canonical terms in `_data/skills.yml`. Do not introduce new skill strings without updating that file deliberately.
- **Read `AGENTS.md` first.** It is the canonical description of the architecture, collections, and conventions. This guide assumes you've read it.

## Repository at a Glance

- **Stack:** Jekyll + the `minima` theme via the `github-pages` gem, hosted on GitHub Pages. Ruby pinned to `3.1.0`.
- **Content lives in collections:** `_posts/` (blog, year folders), `_resume/` (education + experience), `_work/` (projects, certifications, courses, books, talks).
- **No custom layouts/includes:** there is no `_layouts/` or `_includes/`; rendering comes from minima plus per-type defaults in `_config.yml`.
- See the full tree and conventions in **`AGENTS.md` → Repository Structure**.

## Build & Verify Locally

Always build before committing — GitHub Pages will reject a site that doesn't build, and a broken Liquid tag can silently drop a page.

```sh
make tools      # one-time: install bundler
make            # install deps + serve at http://localhost:4000
make serve      # re-serve (incremental) once deps are installed
make clean      # remove _site and caches if a build looks stale
```

Checklist after any content or layout change:

1. `make serve` and open `http://localhost:4000`.
2. Confirm the page you touched renders, and that `resume.md` / `work.md` still list entries correctly.
3. If you edited `_config.yml`, **restart** the server — incremental serve ignores config changes.
4. Never edit `_site/` by hand; it is generated output and gitignored.

## Working with Content (the common case)

### Adding or editing resume entries (`_resume/`)

- Place education entries under `_resume/education/<slug>/` and experience under `_resume/experience/<slug>/`, mirroring the existing folders.
- Front matter fields: `title`, `org`, `start-date`, `end-date`, `employment-type`, `location`, `location-type`, `highlights` (list), `skills` (list), `categories` (`experience` or `education`).
- The `skills` list must draw from `_data/skills.yml`. Rare, historically relevant skills not in the vocabulary go **after** the canonical list as plain Markdown bullets — see `_resume/education/high-school/` for the established exception pattern.
- `_templates/template-education.md` is a starting scaffold.

### Adding or editing work items (`_work/`)

- Choose the right subfolder: `projects/`, `certifications/`, `courses/`, `books/`, or `talks/`. Only `projects` appear under "Featured" in `work.md`; everything else lands under "Learnings".
- Front matter: `title`, `date`, `categories` (one of the five above), and for projects a `skills` list (canonical vocabulary).
- Showcase images sit **alongside** the `.md` file and share its basename. The Liquid snippet derives the filename automatically (see `_templates/template-project.md`); existing assets are a mix of `.png` and `.jpg`, so make sure the asset that actually exists matches what the page expects.

### Adding blog posts (`_posts/`)

- Use the `_posts/<year>/YYYY-MM-DD-title.md` convention (year subfolders already exist through 2026).
- Posts surface through `archive.md`, `categories.md`, and `tags.md` — set `categories`/`tags` thoughtfully.

### Cross-references and links

- Use `site.data.links` (backed by `_data/links.yml`) for internal links instead of hardcoding paths. Add new canonical links there rather than inline.

## Planning Larger Changes with Specs

For non-trivial changes, consider drafting a spec first — see the existing `specs/<slug>/` directories for the `spec.md` / `design.md` / `tasks.md` pattern. Making the intent and acceptance criteria explicit before an agent starts editing saves a lot of back-and-forth.

## Using Claude Code Here

1. **Start a session** in the repo root: `cd` to the project and run `claude`.
2. **Instruction file:** `.claude/CLAUDE.md` is a thin stub that delegates to `AGENTS.md`. Keep all real guidance in `AGENTS.md` so every tool (Claude Code, Codex, future agents) reads one source.
3. **Good tasks to delegate:** drafting a resume highlight bullet from a job description, normalizing a project's skills to the canonical vocabulary, generating a new work-item file from a template, tidying Liquid/Markdown, refreshing the README.
4. **Always review the rendered result** with `make serve` before committing — agents can produce valid-looking front matter that still breaks a Liquid loop.

## What Needs Extra Care

- **Biographical accuracy** — dates, employers, titles, certifications, and skills. Verify against reality, never against an agent's guess.
- **`_data/skills.yml`** — changing the canonical vocabulary ripples across every resume and project page. Treat edits here deliberately.
- **`_config.yml`** — collections, permalinks, and plugins. A wrong permalink or collection setting can break URLs that are already linked from elsewhere.
- **Permalinks** — the site uses `pretty` permalinks (`/collection/path/`). Renaming a file changes its URL; avoid breaking existing links.

## Before You Commit — Checklist

- [ ] Site builds and serves cleanly (`make serve`, no Liquid/build errors).
- [ ] The edited page renders correctly at `http://localhost:4000`.
- [ ] Any new `skills` entries exist in `_data/skills.yml` (or are intentional post-loop exceptions).
- [ ] New content files follow the folder + front-matter conventions in `AGENTS.md`.
- [ ] Showcase images exist alongside their page and match the expected basename/extension.
- [ ] Biographical facts are accurate and real.
- [ ] You understand and stand behind every change.

## Questions?

- Architecture, collections, and conventions: see **`AGENTS.md`**.
- Ownership: see `CODEOWNERS`.
- Contributing workflow: see `CONTRIBUTING.md`.
- Contact: the [contact page](https://fsferrara.github.io/contact) or [LinkedIn](https://www.linkedin.com/in/fsferrara).
