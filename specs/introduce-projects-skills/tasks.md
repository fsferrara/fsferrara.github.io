# Tasks: Introduce Projects Skills

## Dependencies

- [x] `_data/skills.yml` exists as the canonical skill vocabulary
- [x] `_work/projects/` entries exist and are readable
- [x] `_resume/education/high-school/high-school-diploma.md` provides the rare-skill rendering pattern

---

## Task Breakdown

1. Inventory the current `### Skills` sections across `_work/projects/*.md` and note placeholders, nested groups, duplicates, and rare non-canonical skills
2. Map each project to 6-7 canonical skills from `_data/skills.yml`, favoring technical skills
3. Update `_work/projects/goku-script.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
4. Update `_work/projects/mpv955-device-driver-for-lynxos.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
5. Update `_work/projects/e-matching.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
6. Update `_work/projects/query-rewriting-module-for-sadas-engine.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
7. Update `_work/projects/grafportal.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
8. Update `_work/projects/sl-aftersale.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
9. Update `_work/projects/tradurreantico.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
10. Update `_work/projects/venere-website.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
11. Update `_work/projects/venere-mobile-native-apps.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
12. Update `_work/projects/hotels-mobile-native-apps-backend.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
13. Update `_work/projects/website-4-all-kids-red-cross.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
14. Update `_work/projects/expedia-group-ios-mobile-native-apps.md` to add front matter `skills` and convert its skills section to the structured rendering pattern
15. Review each migrated file to ensure rare non-canonical skills, if any, are rendered only after the `page.skills` loop
16. Verify that `work.md` was not modified as part of the migration
17. Build the site with `bundle exec jekyll build`

---

## Notes for the Agent

- Use exact vocabulary from `_data/skills.yml` for front matter `skills` entries
- Keep 6-7 front matter skills per project and make them predominantly technical
- Follow the rendering pattern used in `_resume/education/high-school/high-school-diploma.md`: canonical skills first via `page.skills`, then any rare extra skills as plain bullets
- Do not modify `work.md`
- Remove placeholders such as `n/a`, nested group labels such as `Front-end` or `Back-end`, and duplicate legacy technologies from the structured skill list
- When project content is thin, use the project description and linked resume entry to infer the most defensible canonical skills
