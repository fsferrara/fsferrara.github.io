---
title: "Keep VS Code's Terminal Dark While the Rest of the IDE Switches Themes"
date: 2026-07-03
tags:
  - vscode
  - terminal
  - productivity
  - customization
categories:
  - productivity
syndicate:
  devto: false
  medium: false
  linkedin: false
---

I like coding in a light theme. Bright editor, dark text, easy on the eyes in a
sunny room. But a light terminal? No thanks. A pale background behind colored
ANSI output washes everything out, and years of muscle memory tell me that a
terminal is supposed to be dark.

For a long time I assumed this was an either/or choice: pick a light theme and
live with a light terminal, or go full dark. It turns out VS Code lets you have
both — a light IDE with a permanently dark integrated terminal — and the setting
even survives when you switch the rest of the IDE between light and dark.

Here is how it works and why.

## The key idea: `workbench.colorCustomizations` overrides the active theme

A VS Code color theme sets hundreds of colors. The
`workbench.colorCustomizations` setting lets you override any of those colors
from your own `settings.json`. The important part for us:

> Overrides in `workbench.colorCustomizations` apply **on top of whatever theme
> is currently active**, regardless of which theme that is.

So if you pin the terminal's colors there, they stay put. Switch the IDE from
light to dark and back — the editor, sidebar, and tabs all change, but the
terminal keeps the colors you nailed down. That is exactly the behavior we want.

This matters if, like me, you use automatic theme switching:

```jsonc
"window.autoDetectColorScheme": true
```

With that on, VS Code follows the OS between a light and a dark theme throughout
the day. The terminal override rides along unchanged through every switch.

## What most people get wrong

The first version I tried only set `terminal.foreground`, `terminal.background`,
and the 16 ANSI colors. It looked mostly right — but a few surfaces still leaked
the light theme through:

- **The cursor stayed black.** The cursor is *not* controlled by
  `terminal.foreground`. It has its own keys: `terminalCursor.foreground` and
  `terminalCursor.background`. Miss those and you get an invisible-ish black
  cursor on a dark background.
- **The panel border and selection** kept their light-theme colors, leaving
  bright edges around an otherwise dark terminal.

The lesson: to fully theme the terminal you have to cover the cursor, selection,
and border keys too — not just foreground/background/ANSI.

## The complete configuration

Drop this into your user `settings.json`. Every key is grouped and commented so
you can tweak individual colors without hunting.

<!-- GIST: vscode-dark-terminal-light-ide.jsonc -->
```jsonc
{
  // Optional: follow the OS between a light and dark theme automatically.
  // The terminal override below persists across every switch.
  "window.autoDetectColorScheme": true,

  "workbench.colorCustomizations": {
    // --- Core surfaces ---
    "terminal.foreground": "#e6e6e6",
    "terminal.background": "#1e1e1e",
    "terminal.border": "#3a3a3a",
    "panel.border": "#3a3a3a",

    // --- Cursor (the part everyone forgets) ---
    "terminalCursor.foreground": "#ffffff",
    "terminalCursor.background": "#1e1e1e",
    "terminalOverviewRuler.cursorForeground": "#ffffff",

    // --- Selection & search ---
    "terminal.selectionBackground": "#ffffff33",
    "terminal.inactiveSelectionBackground": "#ffffff1a",
    "terminal.findMatchBackground": "#d1a11e66",
    "terminal.findMatchHighlightBackground": "#d1a11e33",

    // --- ANSI palette (readable on a dark background) ---
    "terminal.ansiBlack": "#3a3a3a",
    "terminal.ansiBrightBlack": "#6e6e6e",
    "terminal.ansiRed": "#e06c75",
    "terminal.ansiBrightRed": "#ff7b86",
    "terminal.ansiGreen": "#98c379",
    "terminal.ansiBrightGreen": "#b5e890",
    "terminal.ansiYellow": "#e5c07b",
    "terminal.ansiBrightYellow": "#f5d896",
    "terminal.ansiBlue": "#61afef",
    "terminal.ansiBrightBlue": "#82c4ff",
    "terminal.ansiMagenta": "#c678dd",
    "terminal.ansiBrightMagenta": "#e29bf5",
    "terminal.ansiCyan": "#56b6c2",
    "terminal.ansiBrightCyan": "#7fd4df",
    "terminal.ansiWhite": "#d0d0d0",
    "terminal.ansiBrightWhite": "#ffffff"
  }
}
```

If you already have a `workbench.colorCustomizations` block, merge the inner keys
into it rather than adding a second one — the last duplicate key wins and you will
lose your other overrides.

No reload required. Terminal colors update live as soon as you save.

## Why these specific ANSI colors

My first attempt hand-picked very saturated, near-black colors like
`#10037d` for blue and `#6a0202` for red. On a dark background they were almost
invisible. The palette above is a One Dark–style set chosen for contrast against
`#1e1e1e`, so `ls`, `git status`, and colored logs stay legible. Swap in your
favorite palette — the structure is what matters.

## Optional: scope it to a single theme

The config above is global: the terminal stays dark under *every* theme. If you
ever want the terminal to follow the theme in some cases and not others, you can
scope overrides to a named theme instead:

```jsonc
"workbench.colorCustomizations": {
  "[Default Light+]": {
    "terminal.background": "#1e1e1e",
    "terminal.foreground": "#e6e6e6",
    "terminalCursor.foreground": "#ffffff"
    // ...only applied while "Default Light+" is active
  }
}
```

Only the keys inside `"[Theme Name]"` apply while that theme is active. Leave the
overrides unscoped (as in the full snippet) when you want the dark terminal
everywhere — which is the whole point of this setup.

## Recap

- `workbench.colorCustomizations` overrides colors on top of any active theme, so
  a pinned terminal palette survives light↔dark switches.
- Don't forget the **cursor**, **selection**, and **border** keys — foreground,
  background, and ANSI alone leave light-theme bits showing.
- Pick ANSI colors with enough contrast against your terminal background.

Now I get a bright, readable editor and a proper dark terminal at the same time —
and the OS can flip my IDE theme all day without ever touching the terminal.
