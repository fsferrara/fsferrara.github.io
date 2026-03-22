# Design: Introduce Projects Skills

## File & Folder Scope

| Action   | Path |
|----------|------|
| modify   | `_work/projects/goku-script.md` |
| modify   | `_work/projects/mpv955-device-driver-for-lynxos.md` |
| modify   | `_work/projects/e-matching.md` |
| modify   | `_work/projects/query-rewriting-module-for-sadas-engine.md` |
| modify   | `_work/projects/grafportal.md` |
| modify   | `_work/projects/sl-aftersale.md` |
| modify   | `_work/projects/tradurreantico.md` |
| modify   | `_work/projects/venere-website.md` |
| modify   | `_work/projects/venere-mobile-native-apps.md` |
| modify   | `_work/projects/hotels-mobile-native-apps-backend.md` |
| modify   | `_work/projects/website-4-all-kids-red-cross.md` |
| modify   | `_work/projects/expedia-group-ios-mobile-native-apps.md` |
| read     | `_data/skills.yml` |
| read     | `_resume/education/high-school/high-school-diploma.md` |
| read     | `work.md` |

---

## API / Interface Contract

Project front matter format after migration:

```yaml
---
title: "Project Title"
date: 2011-06-01
skills:
  - Java
  - Spring
  - REST
  - MySQL
  - Linux
  - Web Applications
categories:
  - projects
---
```

Project page rendering contract for the `### Skills` section:

```liquid
### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}

- Rare Skill 1
- Rare Skill 2
```

The canonical `skills` array is the structured source of truth. Any rare skill that is not part of `_data/skills.yml` MUST remain outside front matter and be rendered only as a plain Markdown bullet after the loop.

---

## Edge Cases

- **GIVEN** a project page whose current skills section contains `n/a`
  **WHEN** the migration is performed
  **THEN** the placeholder is removed and replaced with 6-7 canonical skills inferred from the project context and related experience entry

- **GIVEN** a project page with nested categories such as `Front-end`, `Native Apps`, or `Back-end`
  **WHEN** the migration is performed
  **THEN** the nested structure is flattened into a single 6-7 item canonical `skills` array

- **GIVEN** a project page with repeated or synonymous legacy technologies
  **WHEN** the canonical mapping is chosen
  **THEN** duplicates are removed and the most relevant canonical skill terms are retained

- **GIVEN** a project page with historically relevant skills not present in `_data/skills.yml`
  **WHEN** those details are still useful to a reader
  **THEN** they are preserved as manual bullets after the `page.skills` loop instead of being added to front matter

---

## Design References

- Canonical vocabulary: `_data/skills.yml`
- Rare-skill rendering pattern: `_resume/education/high-school/high-school-diploma.md`
- Reference spec: `specs/consolidate-skills/spec.md`
