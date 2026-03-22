# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## About

Personal website for **Saverio Ferrara** — a Software Engineer & Technology Lead based in Rome, Italy. The site serves as a resume, portfolio, and mini blog. Its primary goal is to stay relevant in the community and support employability. Built with Jekyll and hosted on GitHub Pages.

## Build & Serve

```sh
make tools      # one-time: install bundler
make            # install deps + serve locally (http://localhost:4000)
make install    # bundle install only
make serve      # jekyll serve --incremental
make clean      # remove _site, caches
make nuke       # clean + remove vendor/bundle
make update     # bundle update github-pages
```

After editing `_config.yml`, restart the server (incremental serve won't pick up config changes).

## Architecture

Jekyll site using the **minima** theme with the `github-pages` gem. No custom layouts or includes — relies entirely on minima's defaults.

### Collections

Two custom collections alongside standard `_posts/`:

- **`_resume/`** — Education and work experience entries. Each `.md` has front matter with `title`, `org`, `start-date`, `end-date`, `employment-type`, `location`, `location-type`, `highlights` (list), `skills` (list), and `categories` (either `experience` or `education`). Rendered by `resume.md` using Liquid loops sorted by `start-date` descending. Skills MUST use the canonical vocabulary defined in `_data/skills.yml`.

- **`_work/`** — Projects, certifications, courses, books, and talks. Each `.md` has `title`, `date`, and `categories` (one of: `projects`, `certifications`, `courses`, `books`, `talks`). Items with category `projects` are listed under "Featured" in `work.md`; all others appear under "Learnings". Binary assets (images, PDFs) sit alongside their `.md` files.

### Key Files

- `_config.yml` — Collections, permalinks (`pretty`), header pages, plugin list
- `_data/links.yml` — Canonical internal links used across pages via `site.data.links`
- `about.md`, `resume.md`, `work.md`, `contact.md` — Top-level pages (also the nav order via `header_pages`)
- `archive.md`, `tags.md`, `categories.md` — Blog index pages
- `assets/css/` — Small custom CSS files (headshot, CTA button); main styling from minima
- `_resume/experience/prompt.txt` — Reusable AI prompt for generating highlights/skills from job descriptions

### Conventions

- Permalinks use `pretty` style: `/collection/path/` (trailing slash, no `.html`)
- Work items reference showcase images using a Liquid snippet that derives the image filename from the page's own filename: `{%- assign showcase = page.relative_path | split: '/' | last | split: '.md' | first | append: '.jpg' | prepend: '../' -%}`
- Internal cross-references between pages use `site.data.links` rather than hardcoded paths
- `_posts/` exists but is empty — blog posts live in `_work/` under the "Learnings" section of `work.md`
- The `work.md` "Playgrounds" section auto-lists the owner's public GitHub repos via `site.github.public_repositories`

## Development Environment

- Dev container available (`.devcontainer/devcontainer.json`) based on `mcr.microsoft.com/devcontainers/jekyll:2-bullseye`
- VS Code spell-checking configured for English (`.vscode/settings.json`)
- Ruby deps vendored to `vendor/bundle/` (gitignored)
