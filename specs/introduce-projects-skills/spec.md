# Spec: Introduce Projects Skills

## Overview
> Introduce a structured `skills` front matter field for all project pages under `_work/projects/`, using the canonical vocabulary in `_data/skills.yml` and a rendering pattern aligned with the resume entries.

**Status:** `ready`

---

## Context & Background

Project pages in `_work/projects/*.md` currently expose skills as free-form Markdown bullets inside the page body. These lists are inconsistent in structure and quality: some are nested by category, some contain outdated or overly specific technologies, some contain duplicates, and some are placeholders such as `n/a`.

The resume and education entries already use a structured front matter `skills` array backed by the canonical vocabulary in `_data/skills.yml`, and render it through a Liquid loop. `_resume/education/high-school/high-school-diploma.md` also demonstrates the desired exception pattern for rare or historically relevant non-canonical skills: render the canonical `page.skills` list first, then append additional plain Markdown bullets afterward.

The `_work/projects/` collection feeds the "Featured" section in `work.md`, but the listing page itself MUST remain unchanged. This effort is limited to the individual project pages and their skill representation.

---

## User Story

As the maintainer of my personal website
I want project pages to use structured, canonical skills
So that project skills are more consistent, easier to maintain, and displayed with the same pattern already used in the resume section

---

## Scope

### In Scope
- Add a front matter `skills` array to every file in `_work/projects/*.md`
- Normalize each project's primary skills to 6-7 items using `_data/skills.yml`
- Prefer predominantly technical skills for each project
- Replace the current free-form project skills sections with a Liquid loop over `page.skills`
- Preserve rare or historically valuable non-canonical skills only as manual Markdown bullets after the `page.skills` loop, following the pattern used in `_resume/education/high-school/high-school-diploma.md`
- Clean up placeholders, nested skill group labels, duplicates, and legacy wording in project skill sections

### Out of Scope
- Modifying `work.md` or the "Featured" listing behavior
- Adding new canonical skills to `_data/skills.yml`
- Changing project descriptions, dates, links, showcase assets, or other unrelated metadata
- Refactoring collection layouts or introducing shared includes/layouts for project skills rendering

### Pre-development Checks
- [ ] Inventory all current `### Skills` sections in `_work/projects/*.md` and identify nested lists, duplicates, placeholders, and rare skills worth preserving
- [ ] Confirm the exact 6-7 canonical skills for each project using `_data/skills.yml` as the only allowed vocabulary for front matter
- [ ] Verify that the rendering pattern for rare skills matches `_resume/education/high-school/high-school-diploma.md`
- [ ] Verify that no change to `work.md` is required to complete this task

---

## Acceptance Criteria

- **GIVEN** a project file in `_work/projects/*.md`
  **WHEN** I inspect its front matter
  **THEN** it contains a `skills` array with 6-7 items and every item exists in `_data/skills.yml`

- **GIVEN** a project page with a `### Skills` section
  **WHEN** the page is rendered
  **THEN** the canonical skills are displayed via a Liquid loop over `page.skills`

- **GIVEN** a project with rare or historically relevant skills not present in `_data/skills.yml`
  **WHEN** those skills should still be shown
  **THEN** they are rendered only as plain Markdown bullets after the `page.skills` loop, following the pattern in `_resume/education/high-school/high-school-diploma.md`

- **GIVEN** a project page whose current skills are nested, duplicated, overly specific, or set to `n/a`
  **WHEN** the migration is completed
  **THEN** the structured `skills` array contains only canonical vocabulary and the page no longer relies on the old free-form list structure

- **GIVEN** the `work.md` page
  **WHEN** this task is completed
  **THEN** its content and behavior remain unchanged

---

## Verification

**Method:** `manual steps`

Commands:
```bash
# Inspect structured skills and rendering pattern across all project files
rg -n "^skills:|^### Skills|page\\.skills|^- " _work/projects

# Verify the site builds after the migration
bundle exec jekyll build
```

Expected output:
```text
- Every file in _work/projects/ contains a front matter skills array with 6-7 canonical skills
- Every project page renders canonical skills through page.skills in the Skills section
- Rare non-canonical skills, when present, appear only as manual bullets after the loop
- Jekyll build completes successfully
- work.md remains unchanged
```

---

## Technical Constraints

- MUST use exact skills from `_data/skills.yml` for the front matter `skills` array
- MUST add 6-7 skills per project
- SHOULD keep the structured `skills` array predominantly technical
- MUST render structured project skills via `page.skills`
- MUST preserve rare non-canonical skills only as manual bullets after the `page.skills` loop when they add historical or explanatory value
- MUST NOT modify `work.md`
- MUST NOT add or rename canonical skills in `_data/skills.yml`
- SHOULD remove placeholders such as `n/a`, nested group headings, duplicates, and outdated free-form wording from the structured skills representation
