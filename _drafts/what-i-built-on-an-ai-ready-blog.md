---
title: "What I Built on an AI-Ready Blog"
date: 2026-06-07
tags:
  - ai
  - agent-skills
  - coding-agents
  - jekyll
  - productivity
categories:
  - productivity
canonical_url: https://fsferrara.github.io/YYYY/MM/DD/what-i-built-on-an-ai-ready-blog/
syndicate:
  devto: false
  medium: false
  linkedin: false
---

Making a repo AI-ready is the foundation. The payoff is what you build on top of it.

Last time I [made this blog AI-ready]({% post_url 2026/2026-06-06-how-i-made-my-blog-ai-ready %}), and I ended that post with a promise: the next step was building custom skills tailored to this site's specific workflows — one for the writing phase, one for the review phase. This is that step. The skills exist now, and this very post is the first one that went through them.

<!-- truncate -->

A skill, in the Claude Code sense, is a small Markdown file that teaches the assistant a repeatable workflow: when to trigger, the steps to follow, and the boundaries it must not cross. Context — an `AGENTS.md`, a clear folder structure — tells the assistant what the project *is*. A skill tells it what to *do*. The two compose: the skills I built lean entirely on the conventions the AI-ready exercise made explicit.

Here is how each one works.

## A writer that drafts, never publishes

The first skill is `blog-post-writer`. It triggers on phrasings like "draft a post about X" or "turn these notes into a post," and its only job is to turn an idea into a parked draft under `_drafts/`.

What makes it useful is not that it writes prose — any model does that. It is that it writes prose *in the shape this blog expects*. Before drafting a word, it reads my `AGENTS.md` for conventions, the closed list of categories, and one or two recent posts to lock onto the voice. Then it produces a draft with the right front matter, a truncate marker after the intro, sensible tags drawn from the ones I already use, and a category from the allowed set.

Two boundaries matter. It never publishes — the output always lands in `_drafts/`, unbuilt, parked until I decide it is ready. And it never invents biographical facts; accuracy on a personal site that doubles as a resume is not negotiable. Human oversight is the rule here, and the skill is written to respect it.

It also refuses one thing outright: pulling from anything private. The source material is public only. That constraint is baked into the skill, not left to my memory.

## A reviewer that reports, never rewrites

The second skill is `blog-post-reviewer`. Where the writer drafts, the reviewer validates. It triggers on "review the draft," "is this ready," "any broken links," and it runs a fixed checklist:

- **Front matter** — are all the required keys present, is the category in the allowed list, is the date format right?
- **Links** — does every internal `{% raw %}{% post_url %}{% endraw %}` reference point at a file that actually exists?
- **Conventions** — is the slug kebab-case, does the post path match the date, is the truncate marker in place?
- **Voice** — does the opening earn attention, or does it start with throat-clearing?
- **Build** — it runs the local build and confirms the site compiles with no Liquid errors.

The crucial design choice: the reviewer *reports*, it does not silently rewrite. It hands me a checklist with file and line pointers, separates blocking issues from suggestions, and only when everything passes does it offer the promote command for me to confirm. I stay the one who decides. That mirrors the "Before You Commit" checklist I already keep for this repo — the skill just runs it for me, every time, without me having to remember.

This is the half of the workflow I would skip if it were manual. Validation is boring, which is exactly why handing it to a skill is worth it.

## The anatomy that makes a skill work

Both skills follow the same structure, and after building a few I am convinced the structure is most of the value:

```
When to use      — the trigger phrases, in my own words
Do not use when  — the cases that belong to another skill
Workflow         — numbered steps, with a PREVIEW step before any write
Failure handling — what to do when a file is missing or a check fails
References       — the exact files the skill depends on
```

The **PREVIEW step** is the one I would recommend to anyone. Before the writer creates a file or the reviewer hands back a promote command, it shows me what it is about to do and waits. That single pause is what makes me comfortable letting a skill touch the repo at all.

If this sounds like a [multi-phase process prompt]({% post_url 2025/2025-12-30-multi-phase-process-prompt %}), that is because it is one — a skill is a multi-phase workflow the assistant loads on its own when the trigger matches, instead of me pasting the same instructions every time. The [prompt-engineering habits]({% post_url 2025/2025-12-05-prompt-engineering-crash-course %}) I have written about before do not go away; they get encoded once and reused.

## What is next: distribution

Writing and reviewing solve the part of the problem I had already half-solved. The part I had not is distribution — getting a finished post in front of people instead of letting it sit on a feed nobody reads.

So there is a third skill, `blog-post-promoter`. It is already written — I just have not run it on a real post yet. It takes one published post and atomizes it into a set of share-ready pieces: a teaser, a standalone version, a run of short snippets, and a clean cross-post for other platforms with the canonical URL pointing back here. One post, many artifacts, posted whenever I have a spare minute. That is the next write-up, once I have run it on a few real posts.

The pattern is the same throughout: the skill generates, I approve, nothing brittle runs on its own.

## Conclusion

The AI-ready exercise was about context — making the project legible to an assistant. This was about workflow — teaching the assistant the specific jobs I do here, so it can do the boring 80% and leave me the 20% that needs judgment.

If you have already written an `AGENTS.md`, skills are the natural next move, and they are cheaper to build than they look: a trigger, a numbered workflow, a preview step, and a clear line they will not cross. Start with the task you would most like to stop doing by hand. For me that was validation. Write the skill, keep yourself in the loop, and let the repo start doing some of its own chores.

This post went writer → reviewer → live. The system working on the thing that describes it feels like the right test.
