# Design: Promote LinkedIn Skills to Official Skill File

## File & Folder Scope

| Action | Path |
|--------|------|
| create | `_data/skills.yml` |
| modify | `AGENTS.md` |
| delete | `specs/consolidate-skills/LinkedIn_Skills.md` |
| modify | `specs/consolidate-skills/spec.md` |
| modify | `specs/consolidate-skills/design.md` |
| modify | `specs/consolidate-skills/skill-mapping.md` |

---

## API / Interface Contract

`_data/skills.yml` structure:

```yaml
# Canonical skill vocabulary for resume entries.
# Source of truth aligned with LinkedIn profile skills.

industry_knowledge:
  - Spec-Driven Development
  - Software Observability
  # ...

tools_and_technologies:
  - Datadog
  - Jira
  # ...

interpersonal_skills:
  - Facilitation
  - Communication
  # ...
```

Accessible in Jekyll templates via:
- `site.data.skills.industry_knowledge`
- `site.data.skills.tools_and_technologies`
- `site.data.skills.interpersonal_skills`

---

## Edge Cases

- **GIVEN** the `TOOLS & TECHNOLOGIES` heading in the original file was missing its `##` prefix
  **WHEN** converting to YAML
  **THEN** normalize it to `tools_and_technologies` like the other categories

---

## Design References

- Original source: `specs/consolidate-skills/LinkedIn_Skills.md` (to be deleted)
- Existing data pattern: `_data/links.yml`
