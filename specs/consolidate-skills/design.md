# Design: Consolidate Skills

## File & Folder Scope

| Action   | Path                                              |
|----------|---------------------------------------------------|
| modify   | `_resume/experience/advanced-systems/research-intern.md` |
| modify   | `_resume/experience/advanced-systems/web-developer.md` |
| modify   | `_resume/experience/agora-med/system-administrator.md` |
| modify   | `_resume/experience/expedia-group/associate-software-dev-engineer.md` |
| modify   | `_resume/experience/expedia-group/senior-software-development-engineer.md` |
| modify   | `_resume/experience/expedia-group/software-dev-engineer-1.md` |
| modify   | `_resume/experience/expedia-group/software-dev-engineer-2.md` |
| modify   | `_resume/experience/expedia-group/technology-lead.md` |
| modify   | `_resume/experience/meetweb/system-administrator.md` |
| modify   | `_resume/experience/reply/consultant.md` |
| modify   | `_resume/education/bachelor-degree/bd-computer-science.md` |
| modify   | `_resume/education/high-school/high-school-diploma.md` |
| modify   | `_resume/education/master-degree/md-computer-science.md` |
| create   | `specs/consolidate-skills/skill-mapping.md` |
| read     | `_data/skills.yml` (canonical reference) |

---

## API / Interface Contract

Front matter `skills` field format (unchanged):
```yaml
skills:
  - Skill Name 1
  - Skill Name 2
  - Skill Name 3
  - Skill Name 4
  - Soft Skill 1
  - Soft Skill 2
```

---

## Edge Cases

- **GIVEN** an entry with fewer than 6 skills currently
  **WHEN** consolidating
  **THEN** add appropriate skills from LinkedIn vocabulary to reach 6-7

- **GIVEN** an entry with more than 7 skills currently
  **WHEN** consolidating
  **THEN** reduce to 6-7 most relevant skills

- **GIVEN** a skill that maps to multiple LinkedIn equivalents (e.g., `PostgreSQL Cluster` → `Databases` or `SQL`)
  **WHEN** choosing the replacement
  **THEN** prefer the more general term unless specificity adds value

- **GIVEN** a "star" technology not in LinkedIn vocabulary
  **WHEN** it is central to the project
  **THEN** document in skill-mapping.md as "preserved (star)" and keep it

---

## Design References

- Canonical skills: `_data/skills.yml`
- Mapping report: `./skill-mapping.md`
