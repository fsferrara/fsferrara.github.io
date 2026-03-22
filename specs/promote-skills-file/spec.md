# Spec: Promote LinkedIn Skills to Official Skill File

## Overview
> Move `specs/consolidate-skills/LinkedIn_Skills.md` to `_data/skills.yml` as the project's canonical skill vocabulary, update `AGENTS.md` to reference it, and clean up the old location.

**Status:** `ready`

---

## Context & Background

The `consolidate-skills` spec (now done) normalized all resume skills against `specs/consolidate-skills/LinkedIn_Skills.md`. That file is the single source of truth for allowed skills, but it currently lives inside a spec folder -- an ephemeral location that future agents and contributors may not find.

The project already uses `_data/links.yml` for canonical cross-references. Placing the skills list in `_data/skills.yml` makes it accessible via `site.data.skills` in Jekyll templates and gives it a permanent, discoverable home.

---

## User Story

As a site maintainer
I want the canonical skill vocabulary in `_data/skills.yml`
So that it is discoverable by agents and contributors, and available to Jekyll templates if needed in the future

---

## Scope

### In Scope
- Convert `specs/consolidate-skills/LinkedIn_Skills.md` content to YAML format in `_data/skills.yml`
- Update `AGENTS.md` to reference `_data/skills.yml` as the canonical skills vocabulary
- Delete `specs/consolidate-skills/LinkedIn_Skills.md`
- Update references in `specs/consolidate-skills/spec.md`, `design.md`, and `skill-mapping.md` to point to the new location

### Out of Scope
- Changing any resume entry skills (already done in consolidate-skills)
- Building Jekyll templates that consume `site.data.skills`
- Adding automated validation of skills against the canonical list
- Modifying LinkedIn profile

---

## Acceptance Criteria

- **GIVEN** the file `_data/skills.yml`
  **WHEN** I read it
  **THEN** it contains all skills from the original `LinkedIn_Skills.md` organized by category (industry_knowledge, tools_and_technologies, interpersonal_skills)

- **GIVEN** the file `_data/skills.yml`
  **WHEN** parsed as YAML
  **THEN** it is valid YAML without errors

- **GIVEN** the file `AGENTS.md`
  **WHEN** I read it
  **THEN** it references `_data/skills.yml` as the canonical skill vocabulary for resume entries

- **GIVEN** the file `specs/consolidate-skills/LinkedIn_Skills.md`
  **WHEN** I look for it after migration
  **THEN** it no longer exists

- **GIVEN** references in `specs/consolidate-skills/` files
  **WHEN** they mention the skill vocabulary
  **THEN** they point to `_data/skills.yml`

---

## Verification

**Method:** `manual steps`

Commands:
```bash
# Confirm skills.yml exists and is valid YAML
ruby -ryaml -e "YAML.load_file('_data/skills.yml')"

# Confirm old file is gone
test ! -f specs/consolidate-skills/LinkedIn_Skills.md && echo "PASS: old file removed"

# Confirm AGENTS.md references the new file
grep '_data/skills.yml' AGENTS.md
```

Expected output:
- YAML parses without errors
- Old file does not exist
- AGENTS.md contains `_data/skills.yml` reference

---

## Technical Constraints

- MUST preserve all skills from the original LinkedIn_Skills.md without additions or removals
- MUST use a YAML structure with category keys (`industry_knowledge`, `tools_and_technologies`, `interpersonal_skills`) containing arrays of skill strings
- SHOULD keep the YAML file human-readable with comments for each section
