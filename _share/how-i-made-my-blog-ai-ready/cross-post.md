---
canonical_url: https://fsferrara.github.io/productivity/2026/06/06/how-i-made-my-blog-ai-ready/
title: "How I Made My Blog AI-Ready"
---
<!-- Dev.to: paste as-is; canonical_url sets rel=canonical back to the blog. -->
<!-- Medium: use "Import a story" from the canonical URL above. -->

AI coding assistants are everywhere now, and they genuinely help, but only when they understand the codebase they are working in. Without context, they guess at your conventions, invent paths that do not exist, and propose patterns that clash with what you already have. The quality of their output is almost entirely a function of the quality of the context you give them.

I recently went through this exercise on this very blog. It is a Jekyll site, small and well-organised, but I had never made it explicit to an AI assistant. No explanation of the folder layout, no build commands, no conventions. The tools had to infer everything. Once I fixed that, the suggestions improved immediately. I want to share the steps, because the approach generalises to any repo.

My goal was a single source of truth: one file that captures what a developer, human or AI, needs to orient themselves and start contributing. Lightweight, no duplication, easy to maintain. Update one file and every tool stays in sync.

## One source of truth

The core idea is simple. AI coding tools each have their own instruction file: Claude Code reads `.claude/CLAUDE.md`, GitHub Copilot reads `.github/copilot-instructions.md`, Cursor reads rules from `.cursor/rules/`. If you write the actual content separately for each of them, you end up maintaining three copies of the same information, and they drift.

The better approach is to write one canonical file, `AGENTS.md` at the root of the repo, and have every tool's config delegate to it with a single line. The tools still get their instructions; you only have one file to keep current.

`AGENTS.md` is becoming a recognised open convention for exactly this purpose. It is human-readable, lives in the repo root, and is easy to spot.

## Step 1: Write an AGENTS.md

This is the file that does the real work. It should tell any reader, AI or human, what the project is, how to build and run it, how it is structured, and what conventions to follow.

The sections I found most useful:

```
# AGENTS.md

## About
## Repository Structure
## Build & Serve
## Architecture
## Conventions
```

The **Repository Structure** section deserves extra attention. I use an annotated directory tree: every significant folder and file listed with a short comment. This is the first thing an AI assistant reaches for when asked to create or edit a file, and it prevents a lot of wrong-path errors.

```
├── _posts/                  # Blog posts, by year (2006–2026)
├── _resume/                 # Collection: resume entries
│   ├── education/
│   └── experience/
├── _work/                   # Collection: portfolio entries
│   ├── projects/
│   ├── certifications/
│   └── courses/
└── _site/                   # Generated output — never edit by hand
```

The **Build & Serve** section should be a short command reference, not prose. List the make targets or npm scripts; include the one-time setup command; note any gotchas (like restarting the server after a config change). The **Conventions** section captures the things that are easy to get wrong: naming patterns, permalink style, required front matter fields, how cross-references work.

Write it as if you are onboarding a new colleague who is smart but has never seen the repo.

## Step 2: Point your tools at it

Once `AGENTS.md` exists, each tool's config becomes a thin stub. For Claude Code, create `.claude/CLAUDE.md` with a single line:

```
@../AGENTS.md
```

That directive tells Claude Code to read `AGENTS.md` as part of its project instructions. The tool gets everything; you wrote it once.

Copilot follows the same pattern. Create `.github/copilot-instructions.md` and start it with:

```markdown
See [AGENTS.md](../AGENTS.md) for full project context, conventions, and build instructions.
```

Cursor uses `.cursor/rules/`, add a rule file there that references `AGENTS.md` in the same way.

The stub files can hold tool-specific overrides if you ever need them, but for most repos a pointer is all they need.

## Step 3: Add a HOWTOAI.md

`AGENTS.md` is written for the machines. `HOWTOAI.md` is written for the people.

It answers a different question: *how should contributors use AI in this repo?* That covers things like which tasks AI handles well versus where you want a human in the loop, what to do when a suggestion clashes with conventions, and how to phrase prompts that get better results for this specific project.

For a personal blog the file is short, a few paragraphs. For a team repo it becomes a more detailed agreement about AI usage expectations. Either way, having it written down means the answer does not live only in someone's head.

## Step 4: Cover the contributor basics

AI tools are not the only readers of your repo. Round out the setup with the files that humans and tools both rely on to orient themselves.

- **`README.md`**: A concise entry point: what the project is, how to get started, and where to find more. If you already have `AGENTS.md`, the README can be brief and link to it for depth.
- **`CONTRIBUTING.md`**: How to open issues, submit changes, and what the review process looks like. Even for a personal project it is useful to write down the conventions you want followed.
- **`CODEOWNERS`**: Declares who is responsible for what. On a personal blog this is trivially just you, but it is still a signal to tools and collaborators that the file structure is intentional and reviewed.

These are the files that make a repo feel professional and well-managed, and they cost very little to write once you have `AGENTS.md` as your starting point.

## The result

After the exercise, my blog has five new files:

- `AGENTS.md`: the single source of truth for project context
- `.claude/CLAUDE.md`: Claude Code stub, one line: `@../AGENTS.md`
- `HOWTOAI.md`: how people should use AI in this repo
- `CONTRIBUTING.md`: contribution guidelines
- `CODEOWNERS`: ownership declaration

The AI suggestions improved right away. This very blog post has been 90% written by AI: the coding agent it picked the right folder, used the correct front matter fields, and followed the existing naming pattern, without me explaining any of it. That is the payoff. The remaining 10% is this sentence and some other typo I probably added here an there during the review.

## Is your repo AI-ready?

The whole approach takes a few hours the first time, mostly to write a good `AGENTS.md`. After that, maintenance is just keeping one file current instead of zero, because the alternative, no documentation at all, means the AI is guessing and you are correcting.

If you are interested in the broader documentation side of this, I wrote a [Technical Documentation Mini-Guide](https://fsferrara.github.io/productivity/2026/04/27/technical-documentation-mini-guide/) earlier this year that covers structure and writing quality in detail. The prompt-engineering angle has more depth in an [earlier post on prompting](https://fsferrara.github.io/productivity/2025/12/05/prompt-engineering-crash-course/) in this series.

Start with `AGENTS.md`. Customise it to your project's actual shape. The tools will follow.

The next step for me is going further: building custom agents and skills tailored to this site's specific workflows, one to assist during the writing phase (drafting posts, checking voice consistency, suggesting tags and categories) and one for the review phase (catching broken links, validating front matter, checking that new entries follow the conventions). Context is the foundation; custom agents are what you build on top of it.

Happy building!
