---
name: blog-post-writer
description: >
  Draft, outline, or expand a blog post for fsferrara.github.io. Use when the
  user says "draft a post about X", "blog about X", "turn these notes into a
  post", "park a post idea", "write up what I learned about Y", "outline a
  post", or any phrasing asking to create or expand blog content. Produces a
  parked draft in _drafts/ — never publishes. Source material MUST be public
  only (coding-agents/, blog/_posts/, public docs) — never vault/brain content.
---

# Blog Post Writer

Turns a learning, idea, or public source into a parked draft at `_drafts/<slug>.md`, ready for the review phase.

## When to use

- "Draft a blog post about X"
- "Blog about what I learned about Y"
- "Turn these notes / this file into a post"
- "Park a post idea: [one-liner]"
- "Outline a post on X"
- "Write up the six-agents framing"

## Do not use when

- The user wants to review or validate a draft → use `blog-post-reviewer`
- The user wants to promote/atomize a live post → use `blog-post-promoter`
- The source material is under `brain/` or any private vault → **refuse, explain public-only rule**

## Workflow

### 1. Resolve the source and enforce public-only

Accept any of:
- A file path (must be under `coding-agents/`, `fsferrara.github.io/`, or other public repos)
- Inline text the user provides
- A brief description of a topic from public knowledge

**If the user references anything under `brain/`, a private vault, or internal/work notes: stop and refuse.** Explain that the pipeline draws exclusively from public sources. Suggest they restate the idea without private context.

### 2. Read conventions

Read these files (all in the blog repo) before drafting:
- `AGENTS.md` — folder layout, collections, permalink style, front-matter fields
- `_data/skills.yml` — canonical skill vocabulary (only reference, not used in post front matter)
- `categories.md` — the **closed** category list; pick only from this list
- `VOICE.md` — **the source of truth for Saverio's voice.** Read it first, then read 1–2 of the ground-truth samples it lists (the 2017/2019/2020 posts) to feel the cadence. **Do not** use `_posts/2026/` as a voice source — those were written by this same AI pipeline, so they only teach the register we're trying to avoid. Treat 2026 posts as contrast-only.

### 3. Draft the body

Write in **Saverio's voice as defined in `VOICE.md`** — read it before drafting, not after. At a glance, the loudest markers to get right:

- **Open with context, a memory, or a "What is X? ... More simply, X is..." self-question** — never an aphoristic thesis or slogan.
- **`...` as connective tissue, almost never em dashes;** prefer commas and "(i.e. ...)".
- **Hedge out loud** — "I believe", "I tend to", "honestly", "for now" — and let enthusiasm show with the occasional `!`, `:-)`, or "Thank you!".
- **Discourse asides** — "Anyway,", "Actually,", "Personally," — and **bold** tool names, *italic* for named concepts (not single-word rhetorical punches).
- **End with a personal, forward-looking `## Conclusion`** that restates a real preference and often closes on an open question — not a tidy recap or arrow-notation payoff.

Avoid the AI tics listed in `VOICE.md` (em-dash triads, relentless parallelism/antithesis, single-word italic punches, "writer → reviewer → live" payoffs, hedge-free corporate prose). Structure:

```
## [Section heading]          ← H2 for main sections
### [Optional sub-heading]    ← H3 only when needed

[intro paragraph]
<!-- truncate -->              ← place after the intro paragraph (feed excerpt boundary)

## [Next section]
...

## Conclusion
```

Rules:
- Open with a hook that earns the reader's attention; do not open with "In this post I will…"
- `<!-- truncate -->` goes after the first paragraph (the hook / intro) — never at the end
- Use `##` for sections, `###` only for genuine sub-topics
- End with a `## Conclusion` or `## Takeaway` that closes the loop
- No biographical invention — only facts from the source material
- No placeholder text; write real prose

### 4. Choose categories

Pick from the **closed list** in `categories.md`. For AI/agentic content use `productivity`. Map once; do not invent new categories.

Common mappings for this series:
- AI agents, prompt engineering, coding agents → `productivity`
- SDLC, agile, lean → `management/processes`
- Documentation, writing → `productivity`
- Tools, CLIs → `tools`

### 5. Choose tags

Ground tags in the existing series vocabulary and `_data/skills.yml` where applicable:

Core series tags: `ai`, `coding-agents`, `agent-skills`, `prompt-engineering`, `spec-driven-development`

Add specific tags as relevant: `sdlc`, `agile`, `documentation`, `writing`, `jekyll`, `productivity`

Flag any tag that is genuinely new (not already used in `_posts/`) so the user can decide whether to adopt it.

### 6. Build the front matter

```yaml
---
title: "[Title in Title Case]"
date: YYYY-MM-DD          # use today's date as a placeholder; reviewer will stamp the real date on promote
tags:
  - tag1
  - tag2
categories:
  - category
canonical_url: https://fsferrara.github.io/YYYY/MM/DD/slug/    # self-canonical; leave year/month/day as YYYY/MM/DD until promoted
syndicate:
  devto: false
  medium: false
  linkedin: false
---
```

Notes:
- `canonical_url` uses the blog's permalink pattern (`pretty` style). Use placeholder `YYYY/MM/DD` until the post is promoted and the real date is stamped.
- `syndicate:` booleans start `false`; the promoter flips them after actual posting.
- Jekyll ignores unknown front-matter keys — this block is safe.

### 7. Write the file

Place the draft at `_drafts/<slug>.md`:
- `<slug>` is kebab-case, derived from the title, **no date prefix** (Jekyll only builds `_drafts/` with `--drafts`; no date = stays unbuilt in the normal build).
- Overwrite if the slug already exists and the user is revising.

### 8. PREVIEW before writing

Before writing the file, show the user:

```
## Draft preview

**File:** _drafts/<slug>.md
**Title:** [title]
**Categories:** [category]
**Tags:** [tag1, tag2, ...]
**Source:** [brief description of what was used]

--- BODY EXCERPT (first ~200 words) ---
[first 200 words of body]
...
---
```

Ask: "Does this look right? I'll park the full draft at `_drafts/<slug>.md`." Wait for confirmation or corrections before writing.

### 9. Report

After writing, output:
```
Parked: _drafts/<slug>.md
[2-sentence rationale for category/tag choices]
[Note any new tags that aren't yet in _posts/]

Next: run blog-post-reviewer to validate, then promote when ready.
```

## Failure handling

- **Source not found / unreadable:** tell the user which file wasn't found, ask them to provide the content or an alternative path.
- **Category not in closed list:** pick the closest match and flag it — do not invent a new category.
- **Private source referenced:** refuse with a clear explanation of the public-only rule; offer to proceed once the user rephrases without private context.
- **Slug collision:** if `_drafts/<slug>.md` already exists, inform the user and ask whether to overwrite or choose a different slug.

## References

- `VOICE.md` — **source of truth for Saverio's voice** (read before drafting)
- `AGENTS.md` — site conventions, folder layout, front-matter fields
- `HOWTOAI.md` — "Before You Commit" checklist; human-oversight principle
- `_data/skills.yml` — canonical skill vocabulary
- `categories.md` — closed category list
- Ground-truth voice samples (the canon to emulate — see `VOICE.md`):
  - `_work/talks/2019/remote-work/working-together-in-a-global-company.md`
  - `_posts/2020/2020-08-02-sending-and-receiving-packets-using-netcat.md`
  - `_posts/2017/2017-12-10-getting-started-with-graphql.md`
  - `_posts/2007/2007-09-08-relation-intelligence-without-representation.md` (Italian — cadence only)
- `_posts/2026/` — **contrast-only** reference (AI-written by this pipeline; do not emulate)
- Blog series context: `coding-agents/drafts/`, `coding-agents/agents/README.md`, `coding-agents/skills/*/SKILL.md`
