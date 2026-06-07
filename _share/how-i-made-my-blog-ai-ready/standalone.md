For the longest time my AI assistant kept guessing at my blog's conventions, because I had never actually written them down anywhere it could read.

A few hours fixed it. The setup, if you want to copy it:

- One canonical AGENTS.md at the repo root: what the project is, how to build it, how it is structured, the conventions. Write it like you are onboarding a smart colleague who has never seen the repo.
- Point every tool at it with a one-line stub. Claude Code's file is literally `@../AGENTS.md`. Copilot and Cursor get the same pointer, so you maintain one file, not three.
- Add a HOWTOAI.md for the humans: how contributors should use AI here, and where you still want a person in the loop.
- Round it out with the basics: README, CONTRIBUTING, CODEOWNERS.

The suggestions improved right away... and honestly the repo just feels better cared for now.

Full write-up in the comments.

#AI #documentation #productivity
