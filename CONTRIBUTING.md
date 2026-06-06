# Contributing

This is the source for [fsferrara.github.io](https://fsferrara.github.io), Saverio Ferrara's personal resume, portfolio, and blog. It's a personal site, so contributions are mostly the owner's own — but issues, corrections, and suggestions are welcome.

## Reporting issues & suggestions

Found a typo, broken link, rendering glitch, or have an idea? Open a GitHub issue or pull request. For anything else, reach out via the [contact page](https://fsferrara.github.io/contact) or [LinkedIn](https://www.linkedin.com/in/fsferrara).

## Local development

The site is built with Jekyll (via the `github-pages` gem) and uses the `minima` theme. Ruby is pinned to `3.1.0` (see `.ruby-version`).

```sh
make tools      # one-time: install bundler
make            # install dependencies + serve at http://localhost:4000
make serve      # re-serve (incremental) once dependencies are installed
make clean      # remove _site and caches
make update     # bundle update github-pages
```

After editing `_config.yml`, **restart** the server — incremental serve does not pick up config changes.

A dev container is also available (`.devcontainer/devcontainer.json`, based on `mcr.microsoft.com/devcontainers/jekyll:2-bullseye`) if you prefer a preconfigured environment.

## Project layout & conventions

See **`AGENTS.md`** for the full repository structure, the `_resume/`, `_work/`, and `_posts/` collection conventions, the canonical skill vocabulary in `_data/skills.yml`, and the site's permalink and showcase-image patterns. Please follow those conventions when adding content.

## Working with AI assistants

This repo is set up for AI coding assistants. See **`HOWTOAI.md`** for how to use them effectively here, and `AGENTS.md` for the canonical instructions every tool reads.

## Before opening a pull request

- [ ] The site builds and serves cleanly (`make serve`, no Liquid or build errors).
- [ ] The page(s) you changed render correctly at `http://localhost:4000`.
- [ ] New content follows the folder and front-matter conventions in `AGENTS.md`.
- [ ] Any `skills` entries use the canonical vocabulary in `_data/skills.yml`.
- [ ] You did **not** commit generated output (`_site/`) or vendored gems (`vendor/`).

## License

By contributing, you agree your contributions are licensed under the MIT License (see `LICENSE`).
