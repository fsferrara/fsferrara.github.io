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

I have been running AI coding agents at work for a while now, and the thing that changes the game is not giving the AI a smarter prompt. It is giving it a clear role.

A single all-purpose agent that does everything — plans, codes, reviews, documents, deploys — produces mediocre output across the board. Split the work into six distinct roles, one per phase of the software development lifecycle, and the output sharpens immediately. Each agent knows exactly what it owns, where it stops, and which agent picks up from there.

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

The Documenter is the cross-cutting exception: it operates across every phase rather than owning a single handoff. Everything else follows the sequence.

## Specifier — what and why

The Specifier owns the requirements phase. Its job is to turn a vague request into a precise, bounded spec that a Builder can act on without needing to guess.

Good Specifier output includes:
- A clear problem statement and user story
- An explicit in-scope / out-of-scope boundary
- Acceptance criteria in GIVEN/WHEN/THEN form
- Verification commands (what to run to confirm the requirement is met)

The Specifier stops at design. It does not decide *how* to solve the problem — that is the Architect's territory. If a Specifier starts making implementation choices, it has drifted out of its lane.

## Architect — how

The Architect picks up a finished spec and designs the solution: system boundaries, data models, API contracts, threat model, and key trade-offs. It produces a design document and optionally a prototype to validate assumptions before full implementation begins.

The Architect does not write production code. It does not wire up the CI pipeline. Its scope ends at "here is the design, here are the trade-offs, here is why this approach over the alternatives."

What makes an Architect agent effective is that it is also a *sounding board*. It evaluates multiple approaches and explains the reasoning — which is exactly what you want before committing to an implementation direction.

## Builder — make it work

The Builder is the implementing agent. It takes the spec and design as inputs and writes the code.

Its success condition is simple: the code meets the acceptance criteria in the spec. It does not decide whether the spec is the right one (Specifier) or whether the architecture makes sense (Architect). It does not decide whether the code is good enough to ship (Verifier).

Keeping the Builder narrowly focused on implementation is one of the highest-leverage moves in multi-agent design. When the Builder also tries to self-review, it is running in a mode where it cannot easily spot its own blind spots. Separation of concerns applies to agents as much as it does to code.

## Verifier — does it work correctly

The Verifier reviews what the Builder produced. This includes code review for correctness and regressions, security analysis, test coverage assessment, and in some setups a fresh regression run.

The key property of a Verifier is *independence*. It should not be the same agent instance that wrote the code — it should be a fresh context with no attachment to the implementation decisions already made. This is the same reason human code review works: a second set of eyes catches what the author could not see.

The Verifier does not rewrite the code. It reports findings and hands back to the Builder for fixes, or escalates to the Architect if a design-level problem surfaces.

## Deployer — get it to users

The Deployer owns the release. Its job starts where the Verifier signs off and ends when the change is live and stable in production.

A Deployer agent drafts the release plan: which environments, in which order, with what gates and rollback conditions. It coordinates the staged rollout, monitors early production behavior, and closes the loop when the release is confirmed healthy.

What it does *not* do is write new code or decide whether the change is ready — that came from the Verifier. The Deployer is the operational half of the handoff.

## Documenter — all phases

The Documenter runs in parallel with all phases. It captures decisions as they are made, keeps READMEs and changelogs current, and ensures that what was built is understandable to the next person who reads the code.

Treating documentation as an afterthought — something the Builder does at the end — produces documentation that reflects what the code does rather than why it was built that way. A Documenter agent that runs alongside the other phases can capture design rationale while it is fresh, update API docs as the interface stabilises, and generate release notes from the actual diff rather than from memory.

## Why role clarity matters more than model power

The instinct when AI outputs fall short is to reach for a smarter model. Sometimes that helps. More often, the problem is not model capability — it is role ambiguity.

When one agent is asked to simultaneously plan, implement, review, and document, it has to context-switch between modes that have genuinely conflicting incentives. A planning mindset asks "is this the right thing to build?" A reviewing mindset asks "what is wrong with what was built?" Running both in the same context produces mediocre answers to both questions.

Separate roles produce tighter scope, cleaner prompts, and outputs that are easier to evaluate. A Specifier output that is obviously incomplete is easier to catch than a muddled combined output where planning and implementation are tangled together.

## Skills as the unit of reuse

In my own setup, I represent each agent role as a *skill* — a `.md` file with a description (what triggers this skill), a workflow (the numbered steps the agent follows), and clear boundaries (what the agent does *not* do). Skills are reusable across projects; agents are the roles that hold them.

A Verifier agent might carry two skills: one for local code review and one for PR-level review. A Documenter might carry three: one for READMEs, one for changelogs, one for API docs. The agent defines the role; the skills define the behaviours.

This matters because it makes the system composable. You can swap a skill without changing the agent's role, or assign an existing skill to a new agent without rewriting anything.

## Conclusion

Six agents, one per SDLC phase, each with a clear scope and an explicit handoff. Specifier owns *what and why*. Architect owns *how*. Builder owns *make it work*. Verifier owns *does it work correctly*. Deployer owns *get it to users*. Documenter runs across all of them.

The payoff is not that any one agent gets smarter. It is that the whole system gets more predictable, easier to debug, and easier to extend — because every agent knows exactly where its job ends and the next one begins.

If you are building with AI coding agents and finding the outputs inconsistent, the first question to ask is not "which model?" but "which role, and is the scope tight enough?"
