---
title: "Multi-phase Process Prompt"
date: 2025-12-05
tags:
  - prompt-engineering
  - ai
  - productivity
  - writing
categories:
  - productivity
---

Complex tasks often overwhelm AI models. When you ask for a multi-step workflow in a single prompt, the model often rushes to the end, skipping crucial intermediate steps or hallucinating details.

## The Problem

Without a structured process, the model tries to do everything at once:

```
Analyze this data, write a summary, create a marketing plan based on it, and then write three email drafts.
```

The model might write a weak summary, a generic plan, and forget the emails entirely because its context window or attention span gets diluted.

## The Solution

The **Multi-phase Process** technique forces the model to work sequentially. You explicitly define phases and steps, instructing the model to complete one phase before moving to the next.

This mimics how humans handle complex projects: we don't write the code, the tests, and the documentation simultaneously. We do them in phases.

## How to Apply This

1. **Define the Goal**: State the ultimate objective clearly.
2. **Break it Down**: Split the workflow into high-level **PHASES**.
3. **Detail the Steps**: Within each phase, list specific **STEPS**.
4. **Enforce Sequence**: Add a "Gatekeeper" instruction (e.g., "Only proceed to Phase 2 once Phase 1 is executed").

## Example in Practice

Here is how you can structure a prompt to guide an AI through creating a technical tutorial.

**Multi-phase Prompt Template:**

```markdown
# Goal
Write a high-quality technical tutorial based on a user-provided topic.

Follow these PHASES IN SEQUENCE.

# PHASE 1: Outline & Audience
Step 1. Ask the user for the topic and target audience level (Beginner, Intermediate, Advanced).
Step 2. Generate a detailed outline with main headings.
Step 3. WAIT for user approval or feedback on the outline.

# PHASE 2: Drafting Content
Once the outline is approved:
Step 1. Write the Introduction (Hook + Prerequisites).
Step 2. Write the Body paragraphs step-by-step.
Step 3. Write the Conclusion and "Next Steps".

# PHASE 3: Review & Refine
Step 1. Review the draft for clarity and tone.
Step 2. Check that all code snippets (if any) are properly formatted.
Step 3. Output the final tutorial in Markdown format.
```

By using this structure, the model stops after Phase 1, allowing you to correct the course before it wastes tokens generating the wrong content.

## Advanced Patterns

To make your process even more robust, borrow concepts from programming:

### 1. Conditional Logic
Use **IF/THEN** statements to handle variables.
> "IF the user provides a topic, proceed to Phase 2. IF NOT, ask for a topic."

### 2. Loops
Instruct the model to **LOOP** through items.
> "For EACH section in the outline, generate a summary."

### 3. Templates
Provide a **Template** for the model to fill out.
> "Populate the response using this JSON structure..."

## Conclusion

The Multi-phase Process technique transforms the AI from a simple text generator into a workflow agent. It ensures accuracy, allows for human-in-the-loop feedback, and handles complexity that would otherwise break a single-shot prompt. Use this for any task that requires planning, execution, and review.
