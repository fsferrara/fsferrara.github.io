# Skill Mapping

## Normalization Rules

1. Use exact strings from `_data/skills.yml` unless a non-canonical technology is clearly the defining "star" of the entry.
2. Keep each edited entry at 6-7 skills. For most professional roles, order 4 technical items first and 2-3 soft/management items after.
3. Treat tools/technologies plus engineering disciplines such as `API Development`, `Back-End Development`, `Database Management System (DBMS)`, `Performance Engineering`, `Software Architecture`, `System Administration`, and `Web Applications` as technical.
4. Treat interpersonal skills plus leadership/process terms such as `Communication`, `Continuous Process Improvement`, `Facilitation`, `Kanban`, `Mentoring`, `Remote Teamwork`, `Scrum`, `Talent Development`, `Team Leadership`, and `Technical Leadership` as the soft/management bucket.
5. Collapse dated or vendor-specific technologies into the nearest canonical anchor when the broader skill still explains the work:
   - `JBoss`, `JBoss Seam`, `Java EE` -> `Java`
   - `Google Web Toolkit (GWT)`, `Smart GWT` -> `Front-End Development`
   - `PostgreSQL Cluster` -> `Databases`
   - `Red Hat` -> `Linux`
   - `Spring Framework` -> `Spring`
   - `Zope` -> `Python (Programming Language)`
   - `Tape Backup` -> removed
6. When a mid/senior professional entry does not already contain enough soft/management labels, add the least-stretched canonical collaboration or delivery skills supported by the role context. In this pass that usually means `Communication`, plus a process term such as `Continuous Process Improvement`, `Scrum`, or `Kanban` when the entry describes maintenance, facilitation, or delivery improvements.
7. For `_resume/education/` and the earlier-career entries in `Meetweb`, `Agorà Med`, `Reply`, and `Advanced Systems`, prefer additional technical foundations over generic collaboration labels when that better matches the content.
8. Preserved-star exceptions were reviewed for thesis-specific systems and internal frameworks, but none were required in this pass because every target entry could be represented with canonical skills without losing the core story.

## Shared Mappings

| Old skill | New skill | Notes |
| --- | --- | --- |
| `DBMS` | `Database Management System (DBMS)` | Normalize to the canonical LinkedIn string. |
| `Java EE` | `Java` | Keep the main language, drop framework-era branding. |
| `Spring Framework` | `Spring` | Normalize to the canonical LinkedIn string. |
| `Google Web Toolkit (GWT)` | `Front-End Development` | Treat as dated UI tooling rather than a standalone skill. |
| `Smart GWT` | `Front-End Development` | Same normalization as `GWT`. |
| `JBoss` | `Java` | Covered by the main language anchor. |
| `JBoss Seam` | `Java` | Covered by the main language anchor. |
| `PostgreSQL Cluster` | `Databases` | Prefer the more general data-store term. |
| `Red Hat` | `Linux` | Normalize distro-specific Linux experience. |
| `Zope` | `Python (Programming Language)` | Collapse framework-specific experience into the language anchor. |
| `Windows Server Administration` | `System Administration` + `Operating Systems` | Split the role into broad admin and systems anchors. |
| `Linux System Administration` | `System Administration` + `Linux` | Preserve both the discipline and the operating-system anchor. |
| `Tape Backup` | removed | Operational detail is too narrow for the canonical vocabulary. |

## Per-Entry Decisions

### `_resume/experience/meetweb/system-administrator.md`

- Old skills: `Windows Server Administration`, `Tape Backup`
- New skills: `System Administration`, `IT Operations`, `Operating Systems`, `Shell Scripting`, `Programming`, `DevOps`
- Mapping notes:
  - `Windows Server Administration` -> `System Administration` + `Operating Systems`
  - `Tape Backup` -> removed
  - Added `IT Operations` to reflect maintenance work as the main discipline
  - Added `Shell Scripting` and `Programming` to represent backup automation in canonical technical terms
  - Added `DevOps` as the broadest canonical infrastructure/automation label instead of padding the entry with generic soft skills
- Preserved (star): none

### `_resume/experience/agora-med/system-administrator.md`

- Old skills: `Linux System Administration`, `Windows Server Administration`, `Email System Management (qmail, postfix, courier, Sophos)`, `VoIP PBX Deployment (TrixBox/Asterisk)`, `Web Development (PHP, JSP, ASPX)`
- New skills: `System Administration`, `Linux`, `IT Operations`, `Operating Systems`, `Web Applications`, `PHP`
- Mapping notes:
  - `Linux System Administration` -> `System Administration` + `Linux`
  - `Windows Server Administration` -> covered by `System Administration` + `Operating Systems`
  - `Email System Management (qmail, postfix, courier, Sophos)` -> `IT Operations`
  - `VoIP PBX Deployment (TrixBox/Asterisk)` -> `IT Operations`
  - `Web Development (PHP, JSP, ASPX)` -> `Web Applications` + `PHP`
  - Added `Operating Systems` to reflect the mixed Windows/Debian environment instead of using generic soft-skill fillers
- Preserved (star): none

### `_resume/experience/reply/consultant.md`

- Old skills: `Java`, `JBoss`, `JBoss Seam`, `PostgreSQL Cluster`, `Python`, `Red Hat`, `Zope`
- New skills: `Java`, `Python (Programming Language)`, `Linux`, `Databases`, `SQL`, `Web Applications`, `Back-End Development`
- Mapping notes:
  - `Java` -> `Java`
  - `JBoss` -> `Java`
  - `JBoss Seam` -> `Java`
  - `PostgreSQL Cluster` -> `Databases` + `SQL`
  - `Python` -> `Python (Programming Language)`
  - `Red Hat` -> `Linux`
  - `Zope` -> `Python (Programming Language)`
  - Added `Web Applications` and `Back-End Development` to keep the entry technical rather than padded with generic collaboration labels
- Preserved (star): none

### `_resume/experience/advanced-systems/research-intern.md`

- Old skills: `C++`, `DBMS`
- New skills: `C++`, `Database Management System (DBMS)`, `Algorithms`, `SQL`, `Data Structures`, `Performance Engineering`
- Mapping notes:
  - `C++` -> `C++`
  - `DBMS` -> `Database Management System (DBMS)`
  - Added `Algorithms` and `Data Structures` to reflect query rewriting and data-warehousing foundations
  - Added `SQL` to anchor the database-query domain in canonical vocabulary
  - Added `Performance Engineering` to capture the focus on improving query response time through materialized views
- Preserved (star): none

### `_resume/experience/advanced-systems/web-developer.md`

- Old skills: `Java`, `Java EE`, `Google Web Toolkit (GWT)`, `Smart GWT`, `JPA`, `MySQL`
- New skills: `Java`, `Front-End Development`, `Back-End Development`, `MySQL`, `Web Applications`, `Full-Stack Development`
- Mapping notes:
  - `Java` -> `Java`
  - `Java EE` -> `Java`
  - `Google Web Toolkit (GWT)` -> `Front-End Development`
  - `Smart GWT` -> `Front-End Development`
  - `JPA` -> covered by the combined `Java` + `Back-End Development` profile
  - `MySQL` -> `MySQL`
  - Added `Web Applications` and `Full-Stack Development` to capture the end-to-end product scope without adding generic soft-skill fillers
- Preserved (star): none

### `_resume/experience/expedia-group/associate-software-dev-engineer.md`

- Old skills: `Spring Framework`, `JavaScript`, `MySQL`, `Node.js`, `PHP`, `Technical communication`, `Business awareness`
- New skills: `Java`, `Spring`, `Back-End Development`, `Front-End Development`, `Communication`, `Continuous Process Improvement`
- Mapping notes:
  - `Spring Framework` -> `Spring`
  - `JavaScript`, `Node.js`, `PHP` -> folded into `Front-End Development`
  - Added `Java` because the role description centers on Java/Spring back-end systems
  - Added `Back-End Development` to capture the primary system-design focus
  - `Technical communication` -> `Communication`
  - `Business awareness` -> covered indirectly by `Continuous Process Improvement` as the closest canonical delivery skill
  - Removed `MySQL` to keep the entry within the 4 technical + 2 soft structure
- Preserved (star): none

### `_resume/experience/expedia-group/software-dev-engineer-1.md`

- Old skills: `Java`, `Spring Framework`, `Apache Cordova`, `Android`, `Agile Methodologies`, `Team Facilitation`, `Cross-functional Collaboration`
- New skills: `Java`, `Spring`, `REST`, `Mobile Application Development`, `Scrum`, `Facilitation`, `Communication`
- Mapping notes:
  - `Java` -> `Java`
  - `Spring Framework` -> `Spring`
  - `Apache Cordova` -> `Mobile Application Development`
  - `Android` -> covered by `Mobile Application Development`
  - Added `REST` because the highlights explicitly center on RESTful backend services
  - `Agile Methodologies` -> narrowed to `Scrum` because the entry names Scrum specifically
  - `Team Facilitation` -> `Facilitation`
  - `Cross-functional Collaboration` -> `Communication`
- Preserved (star): none

### `_resume/experience/expedia-group/software-dev-engineer-2.md`

- Old skills: `REST API development`, `Java & Spring Framework`, `Docker & Maven`, `DevOps tooling (Vagrant, Hbox)`, `Mentorship & onboarding`, `Cross-functional collaboration`, `Process improvement & adaptability`
- New skills: `Java`, `Spring`, `API Development`, `Open Source`, `Kanban`, `Mentoring`, `Continuous Process Improvement`
- Mapping notes:
  - `REST API development` -> `API Development`
  - `Java & Spring Framework` -> `Java` + `Spring`
  - `Docker & Maven` -> covered by the broader engineering profile; dropped to preserve room for more explanatory anchors
  - `DevOps tooling (Vagrant, Hbox)` -> covered by the broader engineering profile; dropped for the same reason
  - Added `Open Source` because releasing Heat is one of the strongest role-specific differentiators
  - Added `Kanban` because the entry explicitly says the team used Kanban
  - `Mentorship & onboarding` -> `Mentoring`
  - `Process improvement & adaptability` -> `Continuous Process Improvement`
  - `Cross-functional collaboration` -> folded into the overall delivery story rather than kept as a separate skill
- Preserved (star): none

### `_resume/experience/expedia-group/technology-lead.md`

- Old skills: `GraphQL & API Design`, `Cloud Infrastructure (AWS)`, `Framework Development (HREST Kernel)`, `Open Source Contribution`, `Team Leadership`, `Stakeholder Communication`, `Mentorship & Talent Development`
- New skills: `GraphQL`, `Amazon Web Services (AWS)`, `API Development`, `Software Architecture`, `Technical Leadership`, `Team Leadership`, `Talent Development`
- Mapping notes:
  - `GraphQL & API Design` -> `GraphQL` + `API Development`
  - `Cloud Infrastructure (AWS)` -> `Amazon Web Services (AWS)`
  - `Framework Development (HREST Kernel)` -> `Software Architecture`
  - `Open Source Contribution` -> covered by the architecture and platform-lead story; dropped to preserve the 4+3 structure
  - Added `Technical Leadership` to match the role title and delivery scope
  - `Stakeholder Communication` -> covered by the leadership trio; dropped as a separate label
  - `Mentorship & Talent Development` -> `Talent Development`
- Preserved (star): none

### `_resume/experience/expedia-group/senior-software-development-engineer.md`

- Old skills: `Performance monitoring (RUM, TTIL, SLI/SLO)`, `Native app development (Swift, SwiftUI, iOS architecture)`, `API & microservices (GraphQL, REST)`, `Global team collaboration`, `Technical leadership & mentoring`, `Incident response & on-call operations`
- New skills: `RUM`, `Datadog`, `Swift (Programming Language)`, `GraphQL`, `Technical Leadership`, `Mentoring`, `Remote Teamwork`
- Mapping notes:
  - `Performance monitoring (RUM, TTIL, SLI/SLO)` -> `RUM`
  - Added `Datadog` because the role highlights make the Datadog integration a central anchor
  - `Native app development (Swift, SwiftUI, iOS architecture)` -> `Swift (Programming Language)`
  - `API & microservices (GraphQL, REST)` -> `GraphQL`
  - `Global team collaboration` -> `Remote Teamwork`
  - `Technical leadership & mentoring` -> `Technical Leadership` + `Mentoring`
  - `Incident response & on-call operations` -> folded into the overall senior platform/responsibility story rather than kept as a separate skill
- Preserved (star): none

### `_resume/education/high-school/high-school-diploma.md`

- Old skills: `Computer Programming`, `Information Technology`, `Databases`, `Accounting`, `QBasic`, `Fortran`
- New skills: `Programming`, `Software Development`, `Databases`, `Database Management System (DBMS)`, `Operating Systems`, `Algorithms`
- Mapping notes:
  - `Computer Programming` -> `Programming`
  - `Information Technology` -> `Operating Systems`
  - `Databases` -> `Databases`
  - Added `Database Management System (DBMS)` to keep the database foundation explicit in canonical vocabulary
  - `Accounting` -> removed because it is outside the canonical engineering vocabulary
  - `QBasic`, `Fortran` -> folded into `Programming`
  - Added `Software Development` and `Algorithms` to keep the academic profile technical instead of padded with soft skills
- Preserved (star): none

### `_resume/education/bachelor-degree/bd-computer-science.md`

- Old skills: `Software Development`, `Operating Systems`, `Algorithms`, `Data Structures`, `Web Technologies`, `Turbo Pascal`, `C`, `PHP/MySql (LAMP platform)`, `Matlab`, `Shell Scripting`
- New skills: `Programming`, `C`, `Operating Systems`, `Algorithms`, `Data Structures`, `Database Management System (DBMS)`, `Shell Scripting`
- Mapping notes:
  - `Software Development` -> `Programming`
  - `C` -> `C`
  - `Operating Systems` -> `Operating Systems`
  - `Algorithms` -> `Algorithms`
  - `Data Structures` -> `Data Structures`
  - `Shell Scripting` -> `Shell Scripting`
  - Added `Database Management System (DBMS)` because the course list explicitly includes databases and information systems
  - `Web Technologies`, `Turbo Pascal`, `PHP/MySql (LAMP platform)`, `Matlab` -> dropped to keep the entry concise and thesis-aligned
- Preserved (star): none

### `_resume/education/master-degree/md-computer-science.md`

- Old skills: `Software Engineering`, `Object-Oriented Design`, `Software Architecture`, `Information Security`, `Database Management System (DBMS)`, `C++`, `Java`, `Lisp`
- New skills: `Software Engineering`, `Software Architecture`, `Database Management System (DBMS)`, `Object Oriented Design`, `Algorithms`, `SQL`, `C++`
- Mapping notes:
  - `Software Engineering` -> `Software Engineering`
  - `Object-Oriented Design` -> `Object Oriented Design`
  - `Software Architecture` -> `Software Architecture`
  - `Database Management System (DBMS)` -> `Database Management System (DBMS)`
  - `C++` -> `C++`
  - Added `Algorithms` and `SQL` to align the entry with the query-rewriting thesis and database focus
  - `Information Security`, `Java`, `Lisp` -> removed to keep the entry focused on the graduate architecture/database profile rather than breadth
- Preserved (star): none
