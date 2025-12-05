---
title: "Prompt Engineering Crash Course"
date: 2025-12-05
tags:
  - prompt-engineering
  - ai
  - productivity
  - writing
categories:
  - productivity
---
The quality of AI-generated output directly mirrors the quality of your input. When you submit an imprecise or unclear prompt, expect generic or irrelevant responses in return. Conversely, a thoughtfully constructed prompt can generate remarkably accurate, actionable results that surface valuable insights or spark creativity.

This crash course introduces you to the essential concepts and techniques for effective prompt engineering with generative AI.

## Prompt Structure

Effective prompts follow a deliberate structure. Understanding the difference between naive and structured approaches will transform your results.

A beginner usually writes naive prompts, which is the most straightforward approach.

- **Naive Prompt**: You provide the model with a task description and nothing more.
  - Example: "Write a children's fable."

Naive prompts may work but they have limitations: they may produce imprecise, potentially biased, or even incorrect outputs.  
To enhance prompt effectiveness, consider adopting a more structured approach.

**Structured Prompt**: Break down your prompt into clear components:
  - **Role**: The persona or expertise you'd like the AI to embody
    - Example: children's author
  - **Task**: The specific action or deliverable you need
    - Example: write a children's fable with a moral lesson
  - **Instructions**: The specific approach or constraints for execution
    - Example: Use simple vocabulary, include animal characters, convey a clear lesson, keep under 300 words
  - **Context**: Relevant background or situational information
    - Example: target audience age group, desired moral theme, preferred narrative style

The resulting structured prompt would be:

> "As a children's author, write a fable that includes animal characters and conveys a clear moral lesson. Use simple vocabulary suitable for ages 5-8, and keep the story under 300 words."

Try it yourself and observe the difference in output quality!

## Prompt Principles

Once you've mastered structure, these five principles will help you fine-tune your prompts for even better results.

Beyond structure, mastering these five principles will elevate your prompt engineering. We'll demonstrate each using the "Write a children's fable" task.

### 1. Give Direction

Start by describing the desired style or tone in detail. Adding direction helps the model understand not just *what* you want, but *how* you want it.

**Naive prompt:**
```
Write a children's fable.
```

**Directed prompt:**
```
Write a children's fable in the style of Aesop. Focus on animals as characters and include a clear moral lesson at the end. The tone should be warm and slightly humorous.
```

By specifying the style reference, character types, and tone, you steer the model toward more targeted output.

---

### 2. Specify Format

Define the exact structure you expect in the response. Format specifications eliminate ambiguity and make outputs more predictable.

**Directed prompt:**
```
Write a children's fable in the style of Aesop. Focus on animals as characters and include a clear moral lesson at the end. The tone should be warm and slightly humorous.
```

**Format-specified prompt:**
```
Write a children's fable in the style of Aesop with this structure:
- Title: [One-line fable title]
- Characters: [List of animal characters with brief descriptions]
- Story: [150-200 words]
- Moral: [One clear takeaway lesson in a single sentence]
```

Specifying format produces consistent, well-organized results that are easier to use and iterate on.

---

### 3. Provide Examples

Include one or two examples of excellent fables to establish the quality and style baseline you're targeting.

**Format-specified prompt + examples:**
```
Write a children's fable in the style of Aesop with this structure:
- Title: [One-line fable title]
- Characters: [List of animal characters with brief descriptions]
- Story: [150-200 words]
- Moral: [One clear takeaway lesson in a single sentence]

Example:
- Title: The Tortoise and the Hare
- Characters: Tortoise (slow but determined), Hare (fast but overconfident)
- Story: [Example story about a race and its lesson]
- Moral: Steady effort beats natural talent without discipline.
```

Examples anchor the model's output to your quality expectations far better than words alone.

---

### 4. Evaluate Quality

Once you receive output, assess it against specific criteria to identify what works and what doesn't.

**Evaluation criteria for fables:**
- Does the moral feel authentic and age-appropriate?
- Are the animal characters distinct and memorable?
- Is the story concise without sacrificing clarity?
- Would a child find this engaging?

After generating a fable, rate it on these criteria. This process reveals which prompt elements drive better quality and helps you refine future prompts.

---

### 5. Divide Labor

For complex tasks, break them into sequential steps. Generate components separately, then combine them.

**Multi-step approach:**
```
Step 1: Generate a list of 3 animal character pairs with contrasting traits (e.g., fast vs. slow, honest vs. cunning).

Step 2: For each pair, outline a short conflict or challenge that could teach a valuable lesson.

Step 3: Choose the most compelling scenario and write the full fable using the format from Principle 2.

Step 4: Have the model rate the moral for clarity and age-appropriateness (1-5 scale).
```

Breaking work into smaller, focused tasks reduces errors and gives you control over each component.

## Conclusion

This is only the beginning of your prompt engineering journey. There are other advanced techniques to explore, and all of them must be re-evaluated as AI models evolve. To tell the truth, I think prompt engineering is not an exact science but rather an art form that improves with practice and creativity.
