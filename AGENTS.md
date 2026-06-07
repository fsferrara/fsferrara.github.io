# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## About

Personal website for **Saverio Ferrara** — a Software Engineer & Technology Lead based in Rome, Italy. The site serves as a resume, portfolio, and blog. Its primary goal is to stay relevant in the community and support employability. Built with Jekyll and hosted on GitHub Pages.

## Repository Structure

```
.
├── _config.yml              # Jekyll config: collections, theme, plugins, permalinks
├── Gemfile                  # Ruby deps (github-pages gem, minima theme, jekyll plugins)
├── Makefile                 # Build/serve targets (see Build & Serve)
├── index.md                 # Home page
├── about.md                 # ┐
├── resume.md                # ├ Top-level pages (also the nav order via header_pages)
├── work.md                  # │
├── contact.md               # ┘
├── archive.md               # ┐
├── categories.md            # ├ Blog index pages
├── tags.md                  # ┘
├── _data/
│   ├── links.yml            # Canonical internal links (site.data.links)
│   └── skills.yml           # Canonical skill vocabulary (site.data.skills)
├── _posts/                  # Blog posts, organized into year folders (2006–2026, 46 posts)
├── _drafts/                 # Unpublished drafts + reusable content templates
├── _resume/                 # Collection: resume entries
│   ├── education/           #   one folder per qualification
│   └── experience/          #   one folder per role
├── _work/                   # Collection: portfolio entries
│   ├── projects/            #   featured under "Featured" in work.md
│   ├── certifications/      # ┐
│   ├── courses/             # ├ shown under "Learnings" in work.md
│   ├── books/               # │
│   └── talks/               # ┘
├── pages/                   # Static pages (404.html, legal/)
├── assets/
│   ├── css/                 # Small custom CSS files (headshot, CTA button, style)
│   ├── img/                 # Images
│   ├── downloads/           # Downloadable files (resume PDFs, etc.)
│   ├── logo/                # Logo assets
│   └── main.scss            # SCSS entry point
├── specs/                   # Task specs (spec-manager) for site changes
├── .devcontainer/           # Dev container definition
└── _site/                   # Generated output (gitignored — never edit by hand)
```

## Build & Serve

```sh
make tools      # one-time: install bundler
make            # install deps + serve locally (http://localhost:4000)
make install    # bundle install (vendors gems to vendor/bundle/)
make serve      # jekyll serve --incremental --baseurl=""
make clean      # remove _site, .jekyll-cache, .sass-cache, .jekyll-metadata
make nuke       # clean + remove vendor/bundle
make update     # bundle update github-pages
```

After editing `_config.yml`, restart the server (incremental serve won't pick up config changes).

Ruby version is pinned to `3.1.0` (`.ruby-version`).

## Architecture

Jekyll site using the **minima** theme (`~> 2.5`) via the `github-pages` gem (`~> 232`). Active plugins: `jekyll-feed`, `jekyll-seo-tag`, `jekyll-sitemap`. There are no `_layouts/` or `_includes/` directories — the site relies entirely on minima's defaults plus per-type layout `defaults` declared in `_config.yml` (`page`, `post`, `default`).

### Collections

Two custom collections (declared in `_config.yml`) alongside the standard `_posts/`:

- **`_resume/`** — Education and work experience entries. Each `.md` has front matter with `title`, `org`, `start-date`, `end-date`, `employment-type`, `location`, `location-type`, `highlights` (list), `skills` (list), and `categories` (either `experience` or `education`). Rendered by `resume.md` using Liquid loops. Skills MUST use the canonical vocabulary defined in `_data/skills.yml`.

- **`_work/`** — Projects, certifications, courses, books, and talks. Each `.md` has `title`, `date`, and `categories` (one of: `projects`, `certifications`, `courses`, `books`, `talks`). Items with category `projects` are listed under "Featured" in `work.md`; all others appear under "Learnings". Binary assets (images, PDFs) sit alongside their `.md` files.

- **`_posts/`** — Standard Jekyll blog, organized into year subfolders (`_posts/2006/` … `_posts/2026/`), 46 posts at time of writing. Surfaced through `archive.md`, `categories.md`, and `tags.md`.

### Key Files

- `_config.yml` — Collections, permalinks (`pretty`), `header_pages` nav order, plugin list, per-type layout defaults
- `_data/links.yml` — Canonical internal links used across pages via `site.data.links`
- `_data/skills.yml` — Canonical skill vocabulary, exposed as `site.data.skills`; the only allowed source for resume/project `skills` front matter
- `about.md`, `resume.md`, `work.md`, `contact.md` — Top-level pages (also the nav order via `header_pages`)
- `archive.md`, `tags.md`, `categories.md` — Blog index pages
- `assets/css/` — Small custom CSS files (headshot, CTA button); main styling from minima
- `_drafts/` — Unpublished drafts plus reusable entry templates (`template-project.md`, `template-certification.md`, `template-education.md`)

### Conventions

- Permalinks use `pretty` style: `/collection/path/` (trailing slash, no `.html`)
- Work items reference showcase images using a Liquid snippet that derives the image filename from the page's own filename, e.g. `{%- assign showcase = page.relative_path | split: '/' | last | split: '.md' | first | append: '.png' | prepend: '../' -%}` (see `_drafts/template-project.md`). Project showcase assets are a mix of `.png` and `.jpg`; match the asset that exists alongside the page.
- Internal cross-references between pages use `site.data.links` rather than hardcoded paths
- The `work.md` "Playgrounds" section auto-lists the owner's public GitHub repos via `site.github.public_repositories` (populated by GitHub Pages metadata at build time)

## AI Skills (`.claude/skills/`)

Three project skills automate the blog authoring and distribution pipeline. They live in `.claude/skills/` and are discovered automatically when running `claude` from the repo root.

| Skill | Trigger | What it does |
|-------|---------|--------------|
| `blog-post-writer` | "draft a post about X", "blog about X", "turn these notes into a post", "park a post idea" | Expands a one-liner or public source into a parked draft at `_drafts/<slug>.md`. Never publishes. Source must be public only — never vault/private content. |
| `blog-post-reviewer` | "review the draft", "validate the post", "is this ready", "any broken links", "promote this draft" | Read-only review: front-matter validation, broken-link check, convention check, voice heuristic, `make serve` build probe. Returns a checklist report. Provides promote commands only after all blocking issues clear. |
| `blog-post-promoter` | "promote this post", "make a teaser", "drip series", "repurpose for LinkedIn", "atomize this post" | Atomizes one live `_posts/` file into a parked share-pack at `_share/<slug>/`: `teaser.md` (LinkedIn link-out), `standalone.md` (LinkedIn in-feed), `drip/NN.md` (one per `##` section), `cross-post.md` (full body, Liquid resolved, canonical header). Text only — posting is manual paste. |

### Distribution front-matter block

Posts may include this optional block. Jekyll ignores unknown keys; it is safe to add to any post.

```yaml
canonical_url: https://fsferrara.github.io/<year>/<month>/<day>/<slug>/   # self-canonical; jekyll-seo-tag emits <link rel=canonical>
syndicate:
  devto: false      # flip to true after Dev.to paste
  medium: false     # flip to true after Medium import
  linkedin: false   # flip to true after posting teaser/standalone
```

`canonical_url` ensures SEO credit stays with the blog regardless of where copies live. `syndicate:` is a greppable distribution ledger — `grep -r "devto: false" _posts/` shows what is still unsynced.

### `_share/` directory

`_share/<slug>/` holds share-packs generated by `blog-post-promoter`. It starts with `_` so Jekyll ignores it and it never leaks into `_site/`. Post any snippet from `_share/` whenever a spare moment appears — the pack is generated once and drips over weeks.

## Development Environment

- Dev container available (`.devcontainer/devcontainer.json`) based on `mcr.microsoft.com/devcontainers/jekyll:2-bullseye`
- VS Code spell-checking configured for English (`.vscode/settings.json`)
- Ruby deps vendored to `vendor/bundle/` (gitignored); `Gemfile.lock` is also gitignored because GitHub Pages builds with its own pinned gem versions
