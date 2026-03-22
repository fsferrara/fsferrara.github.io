# Spec: Consolidate Skills

## Overview
> Consolidate skills across the resume website to align with LinkedIn vocabulary, reducing specific old technologies in favor of generic ones while maintaining consistency with the 100-skill LinkedIn limit.

**Status:** `ready`

---

## Context & Background

Skills are currently defined in the front matter of resume entries:
- `_resume/experience/*.md` (13 files across 5 companies)
- `_resume/education/*.md` (3 files)

The website contains specific/dated technologies not on LinkedIn (e.g., `Zope`, `JBoss Seam`, `Smart GWT`, `Google Web Toolkit (GWT)`, `Tape Backup`). LinkedIn has a 100-skill hard limit and has been reviewed to remove obsolete specifics.

Reference file: `_data/skills.yml` contains the canonical skill vocabulary organized into:
- industry_knowledge (41 skills)
- tools_and_technologies (32 skills)
- interpersonal_skills (4 skills)

---

## User Story

As a job seeker maintaining my online presence
I want consistent skills across my website and LinkedIn
So that recruiters see a coherent professional profile and I stay within LinkedIn's 100-skill limit

---

## Scope

### In Scope
- Update all `_resume/experience/*.md` files to use LinkedIn vocabulary
- Update all `_resume/education/*.md` files to use LinkedIn vocabulary
- Produce a skill mapping report (`skill-mapping.md`) documenting old → new transformations
- Use `_data/skills.yml` as canonical reference

### Out of Scope
- Updating LinkedIn profile directly (human task)
- Adding new skills to LinkedIn
- Modifying highlights or other front matter fields
- Changes to `resume.md` rendering logic

---

## Acceptance Criteria

- **GIVEN** a resume experience entry
  **WHEN** I view its skills list
  **THEN** it contains 6-7 skills (4 technical, 2-3 soft/management) using LinkedIn vocabulary

- **GIVEN** a resume education entry
  **WHEN** I view its skills list
  **THEN** it contains 6-7 skills (technical) using LinkedIn vocabulary

- **GIVEN** a specific old technology (e.g., `Zope`, `JBoss Seam`)
  **WHEN** it was not the "star" of that project/experience
  **THEN** it is replaced with a generic equivalent from LinkedIn vocabulary

- **GIVEN** a technology that was central to a project (e.g., thesis on SADAS Engine)
  **WHEN** reviewing that entry
  **THEN** the specific technology MAY be preserved if it adds unique value

- **GIVEN** the skill-mapping.md file
  **WHEN** the human reviews it
  **THEN** they can use it to manually update LinkedIn skill assignments

---

## Verification

**Method:** `manual steps`

Commands:
```bash
# Check all resume entries for skill count
grep -h "^skills:" _resume/**/*.md -A 10 | head -100

# Verify site builds correctly
make serve
```

Expected output:
- Each entry has 6-7 skills in front matter
- All skills match LinkedIn vocabulary (with documented exceptions)
- Site builds and renders without errors

---

## Technical Constraints

- MUST use skills from `_data/skills.yml` vocabulary
- MUST preserve 6-7 skills per entry (4 technical, 2-3 soft/management)
- SHOULD prefer generic skills over specific old technologies
- SHOULD preserve specific technologies only when they are the "star" of the project
- MUST NOT modify highlights or other front matter fields
- MUST NOT change the rendering logic in `resume.md`
