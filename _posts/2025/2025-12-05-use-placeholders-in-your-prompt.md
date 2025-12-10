---
title: "Use placeholders in your prompts"
date: 2025-12-05
tags:
  - prompt-engineering
  - ai
  - productivity
  - writing
categories:
  - productivity
---

Placeholders make your prompts reusable and adaptable. Instead of rewriting prompts for every variation, use variables to swap in different content—saving time and maintaining consistency.

## The Problem

Without placeholders, you rewrite the same prompt repeatedly:

```
Write feedback for Sarah about her work as a Senior Developer.

Write feedback for Marcus about his work as a Product Manager.

Write feedback for Alex about their work as a Design Lead.
```

Each version requires full rewriting, introducing inconsistency and wasting effort.

## The Solution

Replace variable content with placeholders using `[BRACKETS]`:

```
Write feedback for [NAME] about [HIS/HER] work as a [ROLE].
```

Now reuse it by filling in the brackets:

- `[NAME]` = `"Sarah" | "Marcus" | "Alex"`
- `[HIS/HER]` = `"her" | "his" | "their"`
- `[ROLE]` = `"Senior Developer" | "Product Manager" | "Design Lead"`

## How to Apply This

1. **Identify variables**: What changes between similar tasks? (people, dates, topics, quantities, tones)
2. **Replace with placeholders**: Use `[DESCRIPTIVE_NAME]` for each variable
3. **Document the template**: Save it for reuse
4. **Fill and regenerate**: Substitute values and run the prompt as many times as needed

## Example in Practice

Once you master basic placeholders, combine them with structured prompting (Role, Task, Instructions, Context) for even more powerful templates.

**Structured Template with Placeholders:**
```
Role: You are a professional feedback writer preparing performance evaluations.

Task: Write concise feedback for [NAME] about [HIS/HER] performance as a [ROLE].

Instructions:
- Write in third person (intended for the manager to read)
- Keep the feedback under 150 words
- Balance achievements with growth opportunities
- Use specific examples, not generalizations

Context:
Key contributions:
- [CONTRIBUTION_1]
- [CONTRIBUTION_2]

Areas for development:
- [SUGGESTION_1]
- [SUGGESTION_2]
```

This template uses placeholders that maintain quality while adapting to different people and situations.

**Instance Example:**
```
Role: You are a professional feedback writer preparing performance evaluations.

Task: Write concise feedback for Sarah about her performance as a Senior Developer.

Instructions:
- Write in third person (intended for the manager to read)
- Keep the feedback under 150 words
- Balance achievements with growth opportunities
- Use specific examples, not generalizations

Context:
Key contributions:
- Led the backend refactoring that improved API response time by 40%
- Mentored two junior developers through their first major feature
- Consistently delivered code reviews with actionable feedback

Areas for development:
- Document architectural decisions more thoroughly for team reference
- Take on cross-team collaboration on the data pipeline project
```

## Variants

Some systems are formalizing placeholder syntax further:
- **Double curly braces**: `{{PLACEHOLDER}}`
- **Percent signs**: `%PLACEHOLDER%`
- **Angle brackets**: `<PLACEHOLDER>`
- etc...

An alternative definition for a prompt with placeholders is **dynamic prompt**.

## Conclusion

Placeholders transform ad-hoc prompting into a systematic, scalable workflow. Start simple with a few variables, then evolve your templates as you identify patterns in your work. The time invested in building reusable templates pays dividends every time you skip rewriting the same prompt from scratch.
