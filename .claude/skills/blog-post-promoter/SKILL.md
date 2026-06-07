---
name: blog-post-promoter
description: >
  Atomize a live blog post from _posts/ into a parked share-pack for multi-channel
  distribution. Use when the user says "promote this post", "make a teaser",
  "make a standalone post", "drip series for this post", "repurpose this for
  LinkedIn", "turn this into share posts", "atomize this post", or "give me
  snippets to share". Generates text artifacts only — no platform APIs. Writes
  to _share/<slug>/ which is kept out of the Jekyll build.
---

# Blog Post Promoter

Turns one live blog post into a parked share-pack: teaser, standalone, drip series, and cross-post. Text generation only — posting is manual paste.

## When to use

- "Promote this post"
- "Make a teaser / standalone / drip series for `<slug>`"
- "Repurpose this for LinkedIn"
- "Turn this into share posts"
- "Atomize this post"
- "Give me snippets to share"
- "Cross-post this to Dev.to / Medium"

## Do not use when

- The post is still in `_drafts/` — promote it first with `blog-post-reviewer`, then run this skill
- The user wants to draft new content → use `blog-post-writer`
- The user wants to review a draft → use `blog-post-reviewer`

## Share-pack layout

```
_share/<slug>/
  teaser.md         # hook + link → blog (LinkedIn link-out; drives traffic)
  standalone.md     # short, value in-feed, no click needed (LinkedIn in-feed; max reach)
  drip/
    01.md           # one micro-post per ## section
    02.md
    NN.md
  cross-post.md     # FULL body, Liquid resolved to absolute URLs, canonical_url header
```

`_share/` is prefixed with `_` so Jekyll ignores it in normal builds. It is not a declared collection, so it never leaks into `_site/`. Confirm with `make serve` if needed.

## Workflow

### 1. Locate the live post

Accept:
- A slug (e.g., `six-agents-for-the-sdlc`) — search `_posts/**/<slug>.md` or `_posts/**/*<slug>*.md`
- A relative path (e.g., `_posts/2026/2026-06-07-six-agents-for-the-sdlc.md`)
- "the latest post" — pick the most recently dated file under `_posts/`

Refuse if the file is in `_drafts/` — tell the user to promote the draft first.

Read the full post content. Extract:
- `title`, `date`, `canonical_url` from front matter (derive permalink if `canonical_url` is absent: `https://fsferrara.github.io/<year>/<month>/<day>/<slug>/`)
- All `##` headings (split points for drip series)
- The intro (content before the first `##` or before `<!-- truncate -->`, whichever comes first)
- The full body

### 2. Resolve Liquid expressions

The raw post body may contain Jekyll/Liquid tags. Replace them with absolute URLs before writing any share artifact:

- `{% post_url <year>/<filename> %}` → `https://fsferrara.github.io/<year>/<slug>/` (derive from `_posts/<year>/<filename>.md`; strip the date prefix for the URL path using Jekyll's `pretty` permalink pattern)
- `{{ site.data.links.<key> }}` or `site.data.links.<key>.page` → look up `_data/links.yml` and substitute the `page` value if it exists, else use the raw key as-is and flag
- `{{ site.url }}`, `{{ site.baseurl }}` → `https://fsferrara.github.io`
- Any remaining unresolved `{% %}` or `{{ }}` tags → flag for manual review

### 3. Split into drip sections

Split the body by `##` headings (excluding `### ` and deeper). Each `##` section (heading + its paragraphs) becomes one drip post. The intro (pre-first-`##`) becomes the base for `teaser.md` and `standalone.md`.

Count the sections: if fewer than 2, still produce `drip/01.md` from the body; if more than 8, group shorter sections together.

### 4. Generate the share-pack artifacts

**Voice:** the teaser, standalone, and drip copy should sound like Saverio, not like generic LinkedIn growth-hacking. Follow **`VOICE.md`** for the hook style and warmth — open with context or a real "What is X?" question rather than a slogan, hedge where it's honest, let a `...` or genuine `!` through. Keep this *within* the platform constraints below (character limits, ≤3 hashtags, no "I wrote a post about X" throat-clearing) — `VOICE.md` shapes the tone; the limits still bound the length.

#### teaser.md — LinkedIn link-out (drives traffic)

Format:
```markdown
[Hook sentence that makes the reader curious — 1 line]

[1–2 sentence bridge: what problem this post solves or what insight it gives]

Read the full post → [Title](https://fsferrara.github.io/<year>/<month>/<day>/<slug>/)

#hashtag1 #hashtag2 #hashtag3
```

Rules:
- Hook must earn attention — no "I wrote a post about X"
- Maximum 3 hashtags; pick from post tags prefixed with `#`
- Link is always the canonical blog URL
- Total length: ≤ 300 characters for hook + bridge (before the link line)

#### standalone.md — LinkedIn in-feed (max reach, no click needed)

Format:
```markdown
[Strong opening line — assertion, contrarian take, or surprising fact]

[3–5 bullet points or a short paragraph — the core value of the post, self-contained]

[Optional: "Full post in comments" or similar soft CTA — do NOT include the link inline if the platform penalises links in first post; user can add]

#hashtag1 #hashtag2 #hashtag3
```

Rules:
- Reader should get real value without clicking
- No "in my latest post" throat-clearing
- ≤ 1300 characters (LinkedIn in-feed sweet spot)
- Maximum 3 hashtags

#### drip/NN.md — one per ## section

Each file:
```markdown
<!-- Source: ## [Section Heading] from [post title] -->
<!-- Post: https://fsferrara.github.io/<permalink>/ -->

[Distilled insight from this section — 2–5 sentences or 3–5 bullets]

[Optional: soft link-back on last drip — "Full thread: [link]"]

#hashtag1 #hashtag2
```

Rules:
- Standalone value — reader doesn't need to have read the post
- Numbered sequentially: `01.md`, `02.md`, etc.
- Keep under 280 characters for X/Twitter compatibility (LinkedIn and X both work)
- The last drip (`NN.md`) can include a link back to the full post

#### cross-post.md — full article for Dev.to / Medium

Format:
```markdown
---
canonical_url: https://fsferrara.github.io/<year>/<month>/<day>/<slug>/
title: "[Same title as the post]"
---

[Full body with Liquid expressions resolved to absolute URLs]
```

Rules:
- `canonical_url` front matter tells Dev.to to set `rel=canonical` pointing to the blog — SEO credit stays home
- All `{% post_url %}` and `{{ site.data.links.* }}` resolved to absolute HTTPS URLs
- Body is otherwise identical to the published post
- For Medium: the user can either paste `cross-post.md` or use Medium's "Import a story" feature with the blog URL (Medium auto-sets canonical from the source URL) — note this in the file header comment
- Preserve all `##` headings, code blocks, and lists exactly

### 5. PREVIEW before writing

Show the user a summary before creating any files:

```
## Share-pack preview for: <slug>

**Canonical URL:** https://fsferrara.github.io/<permalink>/
**Drip sections:** N (from ## headings: "Section 1", "Section 2", …)
**Files to create:**
  _share/<slug>/teaser.md
  _share/<slug>/standalone.md
  _share/<slug>/drip/01.md … NN.md
  _share/<slug>/cross-post.md

--- TEASER PREVIEW ---
[full teaser text]

--- STANDALONE PREVIEW ---
[full standalone text]
---
```

Ask: "Ready to write the share-pack to `_share/<slug>/`?" Wait for confirmation or edits before writing.

### 6. Write the files

Create `_share/<slug>/` and write all artifacts. Create `_share/<slug>/drip/` as needed.

If `_share/<slug>/` already exists, inform the user and ask whether to overwrite.

### 7. Stamp canonical URL into the source post

After writing the share-pack, run the bundled script to replace the placeholder `canonical_url` (with `YYYY/MM/DD` tokens) in the source post with the real URL derived from `_site/`. This is a no-op if the post already has a real URL.

```sh
bash .claude/skills/blog-post-promoter/scripts/stamp-canonical-url.sh <post-file>
```

The script requires `_site/` to exist (run `make` first if it doesn't). It is idempotent: skips the post if a non-placeholder `canonical_url` is already present.

### 8. Report

```
Share-pack parked at _share/<slug>/

  teaser.md       → paste on LinkedIn (link-out; drives traffic to blog)
  standalone.md   → paste on LinkedIn (in-feed; no link needed)
  drip/01-NN.md   → N micro-posts, one per section; post over coming weeks
  cross-post.md   → paste into Dev.to; for Medium use "Import a story" from:
                    https://fsferrara.github.io/<permalink>/

To track distribution, flip the syndicate: booleans in the post's front matter
after each platform is actually posted:
  syndicate:
    devto: false  → true after Dev.to paste
    medium: false → true after Medium import
    linkedin: false → true after LinkedIn posts
```

## Failure handling

- **Post in `_drafts/`:** refuse — tell the user to run `blog-post-reviewer` and promote first.
- **No `##` sections found:** produce a single `drip/01.md` from the full body; note that the drip series can't be split further.
- **Unresolved Liquid tags remaining:** flag them in the report; write `<!-- UNRESOLVED: <tag> -->` inline in `cross-post.md` so the user can fix manually.
- **`canonical_url` missing from post front matter:** derive it from `date` + slug using Jekyll's `pretty` permalink pattern; note the derivation in the report.
- **`_share/` leaks into `_site/`:** unlikely since `_` prefix dirs are ignored by Jekyll unless declared as collections — but if the user runs `make serve` and sees `_share/` in `_site/`, they should add `_share` to `exclude:` in `_config.yml`.

## References

- `VOICE.md` — **source of truth for Saverio's voice** (teaser/standalone/drip copy follows it)
- `AGENTS.md` — site conventions, permalink pattern, `site.data.links`
- `_data/links.yml` — internal link registry for Liquid resolution
- `_config.yml` — permalink style (verify `pretty`), `exclude:` list
- `HOWTOAI.md` — human-oversight principle (user reviews all share text before posting)
- `scripts/stamp-canonical-url.sh` — stamps real `canonical_url` into a single post's front matter (replaces placeholder; requires built `_site/`)
