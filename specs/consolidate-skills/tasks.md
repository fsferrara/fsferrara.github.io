# Tasks: Consolidate Skills

## Dependencies

- [x] LinkedIn_Skills.md exists with canonical skill vocabulary
- [x] All resume entries are accessible in `_resume/`

---

## Task Breakdown

1. Analyze all current skills across resume entries and create inventory
2. Create `skill-mapping.md` with old → new skill transformations
3. Update `_resume/experience/meetweb/system-administrator.md` skills
4. Update `_resume/experience/reply/consultant.md` skills
5. Update `_resume/experience/agora-med/system-administrator.md` skills
6. Update `_resume/experience/advanced-systems/research-intern.md` skills
7. Update `_resume/experience/advanced-systems/web-developer.md` skills
8. Update `_resume/experience/expedia-group/associate-software-dev-engineer.md` skills
9. Update `_resume/experience/expedia-group/software-dev-engineer-1.md` skills
10. Update `_resume/experience/expedia-group/software-dev-engineer-2.md` skills
11. Update `_resume/experience/expedia-group/technology-lead.md` skills
12. Update `_resume/experience/expedia-group/senior-software-development-engineer.md` skills
13. Update `_resume/education/high-school/high-school-diploma.md` skills
14. Update `_resume/education/bachelor-degree/bd-computer-science.md` skills
15. Update `_resume/education/master-degree/md-computer-science.md` skills
16. Verify site builds correctly with `make serve`
17. [HUMAN] Review skill-mapping.md and update LinkedIn skill assignments manually

---

## Notes for the Agent

- Skill format: 6-7 skills per entry (4 technical first, then 2-3 soft/management)
- Use exact LinkedIn vocabulary from `LinkedIn_Skills.md`
- When a specific technology was the "star" of the project (mentioned in highlights, thesis topic, etc.), it MAY be preserved even if not on LinkedIn — document these in skill-mapping.md
- Consolidation examples:
  - `Zope` → remove (covered by `Python (Programming Language)`)
  - `JBoss`, `JBoss Seam` → `Java`
  - `Google Web Toolkit (GWT)`, `Smart GWT` → `Java` + `Front-End Development`
  - `PostgreSQL Cluster` → `Databases` or `SQL`
  - `Tape Backup` → remove entirely
- Entries are sorted chronologically in tasks (oldest first) for consistent progression
- After all updates, run `make serve` to verify the site renders correctly
