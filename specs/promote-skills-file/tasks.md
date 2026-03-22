# Tasks: Promote LinkedIn Skills to Official Skill File

## Dependencies

- [x] `specs/consolidate-skills/LinkedIn_Skills.md` exists with the canonical skill vocabulary
- [x] `_data/` directory exists (contains `links.yml`)

---

## Task Breakdown

1. Create `_data/skills.yml` by converting all skills from `specs/consolidate-skills/LinkedIn_Skills.md` into YAML format with category keys
2. Validate YAML parses correctly: `ruby -ryaml -e "YAML.load_file('_data/skills.yml')"`
3. Update `AGENTS.md` to add a reference to `_data/skills.yml` as the canonical skill vocabulary
4. Update `specs/consolidate-skills/spec.md` references from `LinkedIn_Skills.md` to `_data/skills.yml`
5. Update `specs/consolidate-skills/design.md` references from `LinkedIn_Skills.md` to `_data/skills.yml`
6. Update `specs/consolidate-skills/skill-mapping.md` references from `LinkedIn_Skills.md` to `_data/skills.yml`
7. Delete `specs/consolidate-skills/LinkedIn_Skills.md`

---

## Notes for the Agent

- The original file has a formatting inconsistency: `TOOLS & TECHNOLOGIES` is missing the `##` markdown prefix. Ignore this when converting -- just use the content.
- Use snake_case for YAML keys: `industry_knowledge`, `tools_and_technologies`, `interpersonal_skills`
- Keep skills as simple string arrays under each category key
- Preserve the exact skill strings (e.g., `Python (Programming Language)`, `Amazon Web Services (AWS)`) -- do not rename or reformat them
