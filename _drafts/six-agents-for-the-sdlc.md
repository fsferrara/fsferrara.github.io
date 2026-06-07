---
title: "Six Agents for the Software Lifecycle"
date: 2026-06-07
tags:
  - ai
  - coding-agents
  - agent-skills
  - sdlc
  - prompt-engineering
categories:
  - productivity
canonical_url: https://fsferrara.github.io/YYYY/MM/DD/six-agents-for-the-sdlc/
syndicate:
  devto: false
  medium: false
  linkedin: false
---

I have been running AI coding agents at work for a while now, and honestly the thing that surprised me most was not how much the model matters... it was how much the *role definition* matters. Give an agent a clear, bounded job and it performs noticeably better. Leave the scope fuzzy and you get fuzzy output, regardless of which model is underneath.

The shift that helped me most was splitting the work into six distinct roles, one per phase of the software development lifecycle. A single all-purpose agent that plans, codes, reviews, documents, and deploys produces mediocre output across all of those concerns. Separate the roles and each agent knows exactly what it owns, where it stops, and which agent picks up from there.

<!-- truncate -->

This is the framing I use: six agents, one per SDLC phase, each with a tight scope.

## The six agents

| Agent | SDLC Phase | Owns |
|-------|-----------|------|
| Specifier | Planning, Analysis | "what and why" |
| Architect | Design | "how" |
| Builder | Development | "make it work" |
| Verifier | Testing, Review | "does it work correctly" |
| Deployer | Deployment | "get it to users" |
| Documenter | All phases | "capture and communicate" |

Here is how the handoffs flow:

```
Specifier → Architect → Builder → Verifier → Deployer
                ↑           ↑          ↑          ↑
                └───────────┴──────────┴──────────┘
                         Documenter
```

The **Documenter** is the cross-cutting exception: it operates across every phase rather than owning a single handoff. Everything else follows the sequence.

## Specifier: what and why

The **Specifier** owns the requirements phase. Its job is to turn a vague request into a precise, bounded spec that a **Builder** can act on without needing to guess.

Good **Specifier** output includes:
- A clear problem statement and user story
- An explicit in-scope / out-of-scope boundary
- Acceptance criteria in GIVEN/WHEN/THEN form
- Verification commands (what to run to confirm the requirement is met)

The **Specifier** stops at design. It does not decide *how* to solve the problem, that is the **Architect**'s territory. If a **Specifier** starts making implementation choices, it has drifted out of its lane.

## Architect: how

The **Architect** picks up a finished spec and designs the solution: system boundaries, data models, API contracts, threat model, and key trade-offs. It produces a design document and optionally a prototype to validate assumptions before full implementation begins.

The **Architect** does not write production code. It does not wire up the CI pipeline. Its scope ends at "here is the design, here are the trade-offs, here is why this approach over the alternatives."

What makes an **Architect** agent effective, I think, is that it also acts as a *sounding board*. It evaluates multiple approaches and explains the reasoning... which is exactly what you want before committing to an implementation direction.

## Builder: make it work

The **Builder** is the implementing agent. It takes the spec and design as inputs and writes the code.

Its success condition is simple: the code meets the acceptance criteria in the spec. It does not decide whether the spec is the right one (**Specifier**) or whether the architecture makes sense (**Architect**). It does not decide whether the code is good enough to ship (**Verifier**).

Keeping the **Builder** narrowly focused on implementation is one of the highest-leverage moves in multi-agent design. When the **Builder** also tries to self-review, it is running in a mode where it cannot easily spot its own blind spots. Personally, I think separation of concerns applies to agents just as much as it does to code, though I will admit it takes some discipline to actually enforce those boundaries in practice.

## Verifier: does it work correctly

The **Verifier** reviews what the **Builder** produced. This includes code review for correctness and regressions, security analysis, test coverage assessment, and in some setups a fresh regression run.

The key property of a **Verifier** is *independence*. It should not be the same agent instance that wrote the code, it should be a fresh context with no attachment to the implementation decisions already made. This is the same reason human code review works: a second set of eyes catches what the author could not see.

The **Verifier** does not rewrite the code. It reports findings and hands back to the **Builder** for fixes, or escalates to the **Architect** if a design-level problem surfaces.

## Deployer: get it to users

The **Deployer** owns the release. Its job starts where the **Verifier** signs off and ends when the change is live and stable in production.

A **Deployer** agent drafts the release plan: which environments, in which order, with what gates and rollback conditions. It coordinates the staged rollout, monitors early production behavior, and closes the loop when the release is confirmed healthy.

What it does not do is write new code or decide whether the change is ready, that judgment came from the **Verifier**. The **Deployer** is the operational half of the handoff.

## Documenter: all phases

The **Documenter** runs in parallel with all phases. It captures decisions as they are made, keeps READMEs and changelogs current, and ensures that what was built is understandable to the next person who reads the code.

Treating documentation as an afterthought, something the **Builder** does at the end, produces documentation that reflects what the code does rather than why it was built that way. A **Documenter** agent that runs alongside the other phases can capture design rationale while it is fresh, update API docs as the interface stabilizes, and generate release notes from the actual diff rather than from memory.

## Why role clarity matters more than model power

The instinct when AI outputs fall short is to reach for a smarter model. Sometimes that helps! More often, I believe the problem is not model capability, it is role ambiguity.

When one agent is asked to simultaneously plan, implement, review, and document, it has to context-switch between modes that have genuinely conflicting incentives. A planning mindset asks "is this the right thing to build?" A reviewing mindset asks "what is wrong with what was built?" Running both in the same context tends to produce mediocre answers to both questions... I have seen this enough times now to be fairly convinced of it.

Separate roles produce tighter scope, cleaner prompts, and outputs that are easier to evaluate. A **Specifier** output that is obviously incomplete is easier to catch than a muddled combined output where planning and implementation are tangled together.

## Skills as the unit of reuse

In my own setup, I represent each agent role as a *skill*, a `.md` file with a description (what triggers this skill), a workflow (the numbered steps the agent follows), and clear boundaries (what the agent does not do). Skills are reusable across projects; agents are the roles that hold them.

A **Verifier** agent might carry two skills: one for local code review and one for PR-level review. A **Documenter** might carry three: one for READMEs, one for changelogs, one for API docs. I tend to think of it this way: the agent defines the role, and the skills define the behaviors. Though honestly this is just the model that works for me, and I can imagine organizing it differently.

This matters because it makes the system composable. You can swap a skill without changing the agent's role, or assign an existing skill to a new agent without rewriting anything.

## Conclusion

Anyway, the six-agent framing has genuinely changed how I approach AI-assisted development. It is not that any one agent gets smarter... it is that the whole system becomes more predictable, easier to debug, and easier to extend. When outputs are inconsistent, I now reach first for the role definition rather than the model settings, and that has been the right instinct more often than not.

I am still refining how the handoffs work in practice, particularly around the **Documenter** running across all phases. There is more to figure out there. But if you are experimenting with multi-agent setups, I think the role-clarity question is worth exploring before anything else. It has been the most useful lens for me so far.
