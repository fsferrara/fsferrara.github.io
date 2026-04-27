---
title: "Technical Documentation Mini-Guide"
date: 2026-04-27
tags:
  - documentation
  - productivity
  - writing
categories:
  - productivity
---

Technical documentation exists to give people accurate information fast.

That is the whole job. If a document is hard to find, hard to scan, out of date, duplicated, vague, or padded with unnecessary words, it fails the job no matter how smart the content is.

Good documentation does more than answer questions:

- It reduces repeated interruptions and chat messages.
- It increases team efficiency.
- It clarifies thinking by forcing ideas into clear language.
- It gives teams training and onboarding material for free.
- It stabilizes and standardizes knowledge across time, people, and systems.

Think of a document as a script for a human. Code succeeds when instructions are clear, correctly placed, and consistently named. Documentation works the same way.

Writing also exposes weak understanding. If you cannot explain a system simply and accurately, you probably do not understand it well enough yet.

## Write for the actual reader

Write with the reader's behavior in mind, not the behavior you wish they had.

- Readers do not read linearly. They scan and satisfice.
- They are trying to complete a task, not enjoy a reading experience.
- The document is a means to an end, so every extra second feels expensive.
- If they have to think too hard, they leave.
- If the document is wrong once, they may stop trusting it entirely.
- Nobody wants to read documentation longer than necessary.
- Nobody wants to come back later to update it either, so write with maintenance in mind.

This is why speed matters so much. A document that is technically correct but slow to use still fails.

## Make documentation part of the work

Treat documentation the way you treat tests: part of the change, not an optional follow-up.

Whenever behavior changes, ask:

1. What document needs to change?
2. Does that document already exist?
3. If not, should it exist?

Add or update documentation when:

- People will need the information again.
- The information is easy to forget.
- Teammates ask the same question repeatedly.
- The knowledge matters beyond one person or one moment.

Do not create a new page just because you can. Add content only when it will help future readers. Budget time for documentation when estimating work. That is how documentation stays current.

Old documentation is worse than no documentation. Missing information creates friction. Wrong information destroys trust.

## Put documentation in the right place

Before you write, decide where the content belongs. Documentation quality depends on information architecture as much as writing quality.

### Choose the right home

Different kinds of information belong in different places.

| Content type | Best home | Typical lifespan |
|---|---|---|
| Quick conversation, status, ad hoc questions | Chat or comments | Minutes to days |
| Research notes or decision-making in progress | Issue tracker, design doc, project workspace | Days to weeks |
| Repo-specific setup, behavior, or operations | Repository docs | Months to years |
| Cross-team concepts, policies, workflows, or shared systems | Central documentation hub or knowledge base | Months to years |

Use conversations for conversation. Use durable documentation for durable knowledge.

Do not leave important answers buried in:

- Chat threads
- Page comments
- Code review discussions
- Tickets
- Email chains

If a conversation produces knowledge someone will need again, move that knowledge into the document itself.

### Build one hierarchy

It does not matter how good the content is if no one can find it.

- Build a clear hierarchy for your documentation.
- Maintain it once it exists.
- Honor it instead of creating exceptions.
- Do not rely on search as the primary navigation model.
- Do not make readers guess which tool, space, repo, or page to trust.

One hierarchy works. Multiple competing hierarchies create hesitation, duplication, and drift.

### Group related content

Keep related topics together so the reader can predict where something belongs.

- Put setup near setup.
- Put troubleshooting near troubleshooting.
- Put architecture near architecture.
- Put shared policies in one shared location instead of scattering them across teams.

If a topic could reasonably live in more than one place, choose one canonical home and link to it from elsewhere.

### Choose an ordering system

Navigation communicates meaning even before a reader opens a page. Choose an order on purpose.

Useful ordering patterns include:

- Most important first
- Most frequently used first
- Chronological order
- Dependency order, where one thing must exist before the next

Do not leave ordering accidental. Accidental order makes navigation feel arbitrary.

### Limit depth or limit breadth

Hierarchies usually work best in one of two shapes:

- Flat: fewer levels, more options per level
- Deep: more levels, fewer options per level

Pick one bias and keep it usable.

- Flat hierarchies work well when the domain is simple and the top-level choices are obvious.
- Deep hierarchies work well when the domain is complex but each click remains a clear, unambiguous choice.

Do not create a hierarchy that is both too broad and too deep. That gives readers too many choices at every step and slows them down.

### Make the structure scalable

A useful hierarchy works today and still works after the content grows.

When you design navigation, ask:

- Where will future topics go?
- Will this category still make sense when it has ten times as much content?
- Are there top-level buckets that can absorb related pages over time?

Scalability matters because documentation is a living system, not a one-time artifact.

## Remove anything that is not helping

Anything that is not contributing is in the way.

Remove:

- Outdated content
- Duplicate content
- Empty sections
- Stub pages
- Dead links
- Misleading page titles
- Navigation paths that lead nowhere
- Long introductions that delay the answer
- Sections that exist only because a template created them

This is not cleanup for its own sake. It is performance work.

When documentation becomes noisy, readers learn that searching it is a waste of time. Once that happens, they ask people directly instead of using the docs.

### Remove outdated content first

Outdated content is the highest-cost failure mode because it teaches readers not to trust anything.

When you find stale content:

- Fix it immediately if you can.
- Remove it if it cannot be validated quickly.
- Redirect to the correct source if another page has replaced it.

Never leave known-bad instructions in place just because removing them feels inconvenient.

### Remove duplication

Keep documentation DRY.

Say something once in one canonical place, then link to it.

Duplicate content causes at least one of these failures:

- Readers waste time deciding which version is correct.
- Writers update one copy and forget the others.
- Search results show multiple similar answers with different levels of freshness.

Single-sourcing is a documentation quality feature, not just a maintenance preference.

### Link the answer instead of retyping it

When someone asks a question that is already documented, send the link to the document.

Do not re-answer the question in chat unless the document is wrong. If the document is wrong or unclear, fix it first, then send the link.

This reinforces the habit you want:

- Read the docs first.
- Ask people second.

## Structure pages for scan speed

A page should reveal its answer quickly, even to someone who only reads the headings and list items.

Use this structure whenever it fits:

1. Start with the answer or outcome.
2. Put prerequisites near the top.
3. Break the content into clear sections.
4. Use lists for parallel information.
5. Put exact commands, paths, names, and versions where readers need them.
6. End with validation steps, troubleshooting, or next actions if they help.

For procedural pages, a strong default shape is:

1. Purpose
2. Prerequisites
3. Steps
4. Verification
5. Troubleshooting
6. Related links

Do not force every page into the same template, but do give readers a predictable pattern.

## Write sentences that move quickly

The best documentation style reduces mental processing time.

### Say it once

Do not repeat the same explanation across multiple pages or multiple sections of the same page.

- Write the primary explanation once.
- Link back to it when needed.
- Avoid near-duplicate summaries that will drift over time.

### Cut extra words

Be concise. Extra words slow the reader down.

| Weak | Better |
|---|---|
| The application is using a feature flag service in order to run an A/B test. | The application uses a feature flag service to run an A/B test. |
| You will simply need to provide the end string. | Provide the end string. |
| This is to ensure the application remains in a good and, more importantly, functional state. | This keeps the application functional. |

Common filler to remove:

- `please`
- `simply`
- `just`
- `in order to`
- `you can`
- `this document will explain`

### Be specific

Specific writing is faster than vague writing.

Prefer:

- Exact file paths over "the config file"
- Exact versions over "recently"
- Exact team names over "the team"
- Exact commands over paraphrases
- Exact page names over "the other doc"

Every vague phrase creates work for the reader.

### Use one term for one thing

Be consistent.

If a component is called `event processor`, do not also call it `worker`, `task runner`, and `background job` in the same guide unless those names mean different things.

The same rule applies to links and headings:

- Link text should match the destination heading.
- Section names should stay stable unless the meaning changes.

Consistency reduces hesitation.

### Prefer lists over paragraphs

Lists are easier to scan than dense prose.

Use a list when:

- Items are parallel
- Steps must be completed in order
- You are naming options, requirements, causes, or outcomes

Use paragraphs when the reader actually needs connected explanation. Do not turn everything into prose by default.

### Chunk content under useful headings

Every distinct idea deserves its own heading or subheading.

Good headings help the reader:

- Skip irrelevant content
- Build a mental map of the page
- Return later and find the same section again

Long unbroken text blocks are hard to scan, hard to maintain, and easy to abandon.

### Start headings and list items with verbs

Verb-led phrasing is easier to process because it tells the reader what action or concept matters.

Prefer:

- `Use and Contribute` over `Using and Contributing`
- `Format a change request` over `Change request format`
- `Set up the component` over `Component setup`
- `Include the component on your page` over `Including the component on your page`

This also helps you avoid nominalizations: turning verbs into nouns when direct action would be clearer.

### Use active voice

Active voice is usually shorter and clearer.

Prefer:

- `Use the package manager to install packages.` over `The package manager is used to install packages.`
- `We configured the build to...` over `The build has been configured to...`

Passive voice hides who does what and usually adds words.

### Use simple language

Write the way engineers actually talk when they are being clear.

Prefer:

- `must` over `one must`
- `use` over `utilize`
- `before` over `prior to`
- `if` over `in the event that`

Simple language is not less technical. It is faster.

### Drop politeness padding

Instructional writing does not need conversational padding.

Prefer:

- `Install the version manager and use it to install the runtime.` over `Please install the version manager and then you can use it to install the runtime.`
- `Use the sidebar to navigate the documentation.` over `For navigating the documentation better please use the sidebar.`
- `Choose one of these options.` over `You can choose one of these options.`

Clarity matters more than courtesy formulas in a procedural document.

### Avoid noun strings

Long stacks of nouns force the reader to unpack the sentence.

Prefer:

- `the process for restoring a failed cache after deployment`

instead of:

- `post-deployment cache restoration failure response process`

If a phrase sounds compressed or bureaucratic, rewrite it.

### Avoid unnecessary formality

Formal language often adds distance without adding precision.

Write as if you were explaining the work clearly to another engineer at a desk. Keep the tone direct, plain, and factual.

## Follow a repeatable writing workflow

Use a consistent process so documentation quality does not depend on inspiration.

1. Define the audience.
2. State the question the document answers.
3. Choose the canonical home for the content.
4. Check whether a page already exists and extend it if it should.
5. Sketch the headings before writing paragraphs.
6. Draft the content quickly.
7. Revise for accuracy, hierarchy, scan speed, and concision.
8. Remove duplication and move durable answers out of conversations.
9. Validate commands, links, versions, and names.
10. Publish it where readers already expect to find it.

The earlier you make the structural decisions, the less rewriting you need later.

## Check the document before you publish it

Use this checklist before you ship a new page or update an existing one.

### Confirm purpose and audience

- Can you state the one question this document answers?
- Is the intended reader obvious?
- Does the page lead with the answer, outcome, or purpose?

### Confirm placement and hierarchy

- Is this the correct home for the content?
- Does an existing page already cover this topic?
- Is there one canonical source instead of several competing pages?
- Can a reader find it through navigation without relying on search?
- Is the navigation order clear and intentional?
- Will the hierarchy still work as more content is added?

### Confirm content quality

- Is every instruction still accurate today?
- Did you remove outdated, duplicated, or empty content?
- Did you move important knowledge out of comments, chat, or tickets?
- Are page titles and headings truthful and specific?
- Are links current and useful?
- Did you avoid examples tied to a specific vendor, product, or organization unless the page requires them?

### Confirm writing quality

- Did you remove filler such as `please`, `simply`, `just`, `in order to`, and `you can`?
- Did you replace vague wording with exact names, paths, versions, and commands?
- Did you use one term consistently for each concept?
- Did you convert long paragraphs into lists where appropriate?
- Do headings and list items start with strong verbs where possible?
- Did you prefer active voice, simple language, and direct phrasing?
- Did you avoid noun strings and unnecessary formality?

## Use this standard for every document

The same principles apply whether you are writing:

- A README
- A setup guide
- An architecture overview
- A runbook
- A troubleshooting page
- An onboarding guide
- A policy page
- A design document

In every case, the standard is the same:

- Put the content in the right place.
- Keep one trusted source of truth.
- Make it easy to scan.
- Keep it accurate.
- Remove anything that gets in the way.

If people reliably use the documentation before asking someone for help, the documentation is doing its job.

## Resources

- [Don't Make Me Think, Revisited](https://www.google.it/books/edition/Don_t_Make_Me_Think_Revisited/qahpAgAAQBAJ) by Steve Krug
