---
name: blog-post-reviewer
description: >
  Review, validate, or lint a blog post draft or live post for fsferrara.github.io.
  Use when the user says "review the draft", "validate the post", "lint the front
  matter", "is this post ready", "any broken links", "validate front matter",
  "check the draft", or "promote this draft". Read-only review + build probe;
  reports a checklist but does not silently rewrite. Optionally hands back the
  promote command for user confirmation.
---

# Blog Post Reviewer

Read-only review of a draft or post. Produces a checklist report with file/line pointers. Does not rewrite; does not push.

## When to use

- "Review / validate / lint the draft `<slug>`"
- "Is the post ready?"
- "Any broken links in `<file>`?"
- "Validate front matter"
- "Check the draft before I promote it"
- "Promote this draft" (reviewer hands back the exact mv command; user confirms)

## Do not use when

- The user wants to draft new content → use `blog-post-writer`
- The user wants to repurpose / share a live post → use `blog-post-promoter`

## Workflow

### 1. Locate the target file

Accept:
- A slug (e.g., `six-agents-for-the-sdlc`) — look for `_drafts/<slug>.md` first, then `_posts/**/<slug>.md`
- A relative path (e.g., `_drafts/foo.md`, `_posts/2026/2026-06-07-foo.md`)
- "the draft" or "the latest draft" — pick the most recently modified file under `_drafts/`

Read `AGENTS.md` for conventions before starting checks.

### 2. Front-matter validation

Check every required key:

| Key | Rule |
|-----|------|
| `title` | present, non-empty, Title Case |
| `date` | present; format `YYYY-MM-DD`; if in `_posts/`, must match `YYYY-MM-DD` in filename |
| `categories` | present; every value must appear in the closed list in `categories.md` |
| `tags` | present; flag any tag not yet used in `_posts/` |
| `canonical_url` | if present, must be `https://fsferrara.github.io/…` and must not contain placeholder tokens (`YYYY`, `MM`, `DD`) if in `_posts/` |
| `syndicate` | if present, must have `devto`, `medium`, `linkedin` boolean keys |

Report each issue as: `front-matter: <key> — <problem> (line N)`.

### 3. Broken-link check

Scan the body for:

- `{% post_url <year>/<filename> %}` — verify `_posts/<year>/<filename>.md` exists
- `site.data.links.<key>` references — check `_data/links.yml` for the key
- `site.data.skills` references — check `_data/skills.yml`

Report each missing target as: `broken-link: {% post_url <ref> %} — target not found`.

### 4. Convention check

- **Slug format:** filename must be kebab-case; no uppercase, no spaces, no special chars except `-`
- **Draft path:** `_drafts/<slug>.md` (no date prefix — correct for parked drafts)
- **Post path:** `_posts/<year>/YYYY-MM-DD-<slug>.md` (date prefix required, year folder matches `date:` year)
- **`date:` ↔ filename:** if in `_posts/`, `date: YYYY-MM-DD` must match `YYYY-MM-DD` in the filename
- **`<!-- truncate -->`:** must be present; should appear after the first paragraph (not at end of file)
- **`## Conclusion` or `## Takeaway`:** the last `##` section should be a conclusion

### 5. Voice / style heuristic

Compare against **`VOICE.md`** and the ground-truth samples it lists (the 2017/2019/2020 posts) — **not** against `_posts/2026/`, which were written by this same AI pipeline and only model the register we're trying to avoid. Voice is subjective, so everything here is **non-blocking**: flag with a file/line pointer, let the user decide. Flag (do not rewrite):

- Opens with "In this post I will…", an aphoristic thesis, or a slogan (✗ "X is the foundation. The payoff is…") instead of context / a memory / a "What is X?" self-question → suggest rewriting the hook (`VOICE.md` rule 1)
- Missing first-person voice in a first-person series post
- **AI tics from `VOICE.md`** — flag each occurrence:
  - em-dash triads or em-dash appositives (✗ "Context — an `AGENTS.md`, a clear folder structure — tells…") → suggest commas / `(i.e. …)` / `...`
  - the "the part I had not is X" / "I just have not Y" cadence
  - relentless parallelism / antithesis (✗ "Where the writer drafts, the reviewer validates")
  - single-word italic rhetorical punches (✗ "what to *do*")
  - arrow-notation meta payoff (✗ "writer → reviewer → live")
- **No personality markers at all** — a whole post with zero `...`, zero `!`, zero hedges ("I believe", "honestly", "for now"), zero asides ("Anyway,", "Actually,", "Personally,") → flag as "reads hedge-free / LLM-flat; add Saverio's voice markers per `VOICE.md`"
- Unusually long paragraphs (>150 words) without a list or heading break
- Placeholder text (`[TODO]`, `[INSERT]`, `YYYY/MM/DD` tokens in the body)

### 6. Build probe

Run `make serve` from the blog repo root:
```sh
cd /Users/fferrara/github/fsferrara/fsferrara.github.io && make serve
```
Wait for the server to start (look for `Server address:` in output) or a Liquid/build error. Kill the process after confirmation.

Report:
- `build: OK — no Liquid errors detected` if clean
- `build: ERROR — <error message> (file, line)` if broken

Note: drafts under `_drafts/` are **not** built by the normal `make serve` (they require `--drafts`). The build probe validates that the rest of the site still builds — it does not validate the draft itself renders. To proof-read the draft's render, the user should run `make serve` with `--drafts` manually.

### 7. Produce the checklist report

Output a structured report:

```
## Review: _drafts/<slug>.md   (or _posts/…)

### Front matter
- [x] title — present, Title Case ✓
- [x] date — 2026-06-07 ✓
- [ ] canonical_url — contains placeholder tokens (YYYY/MM/DD) — update on promote (line 7)
- [x] categories — productivity ✓
- [x] tags — all known ✓
- [x] syndicate block — present ✓

### Links
- [x] No broken {% post_url %} references
- [x] No missing site.data.links keys

### Conventions
- [x] Slug is kebab-case ✓
- [x] <!-- truncate --> present ✓
- [ ] Missing ## Conclusion or ## Takeaway section

### Voice / Style
- [x] Hook does not open with throat-clearing ✓
- [x] First-person voice consistent ✓

### Build
- [x] make serve — OK, no Liquid errors ✓

---
Issues found: N
```

If `--promote` flag was requested or the user said "promote": provide the promote commands only if all blocking issues are resolved:

```
## Promote commands (confirm before running)

mv _drafts/<slug>.md _posts/2026/2026-MM-DD-<slug>.md

Then update front matter:
  date: 2026-MM-DD
  canonical_url: https://fsferrara.github.io/2026/MM/DD/<slug>/

Then:
  make serve   # verify build and render
  git checkout -b post/<slug>
  git add _posts/2026/2026-MM-DD-<slug>.md
  git commit
  git push
```

If blocking issues remain, list them and refuse to provide the promote commands until resolved.

## Blocking vs. non-blocking issues

**Blocking** (must fix before promote):
- Missing required front-matter key
- `categories` value not in closed list
- `date:` / filename mismatch (in `_posts/`)
- `{% post_url %}` target does not exist
- Build error from `make serve`
- Placeholder tokens in `canonical_url` or body

**Non-blocking** (flag, user decides):
- New tags not yet in `_posts/`
- Style / voice heuristic findings
- **AI-tic detections** (em-dash triads, "the part I had not is X" / "I just have not Y", aphoristic thesis opening, relentless parallelism/antithesis, single-word italic punches, arrow-notation meta payoff) — voice is subjective, so flag and let the user decide
- **No personality markers at all** (hedge-free / LLM-flat prose) — flag, suggest adding `VOICE.md` markers
- Missing `## Conclusion` (desirable, not required)
- `<!-- truncate -->` placement suboptimal

## Failure handling

- **File not found:** list `_drafts/` contents and ask the user to pick a slug.
- **`make serve` hangs or times out:** report "build probe timed out — run manually to confirm".
- **Categories not determinable (categories.md missing):** skip category check, flag as manual.

## References

- `VOICE.md` — **source of truth for Saverio's voice** (the voice/style heuristic compares against this)
- `AGENTS.md` — site conventions
- `HOWTOAI.md` — "Before You Commit" checklist (this skill mirrors it)
- `categories.md` — closed category list
- `_data/links.yml` — internal link registry
- `_posts/2026/` — **contrast-only** reference (AI-written by this pipeline; do not treat as a positive voice source)
