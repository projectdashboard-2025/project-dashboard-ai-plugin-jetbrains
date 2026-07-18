---
title: AI Commit Message Generator for IntelliJ — GPT-5.5, Claude Sonnet 5, Gemini 3.5
description: Generate descriptive Git commit messages automatically from staged changes in JetBrains IDEs, using GPT-5.5, Claude Sonnet 5, or Gemini 3.5 Flash. Customizable prompts included.
---

# AI Commit Generation

Writing a good commit message from memory, after you've already moved on mentally to the next task, is a common source of vague messages like "fix stuff" or "updates". Project Dashboard AI generates the message from your actual staged diff instead — the description reflects what changed, not what you remember changing.

{/* SCREENSHOT PLACEHOLDER: ai-commit-before-after.png — staged diff next to generated message */}

## How it works

1. Stage your changes as usual (`git add` or via the IDE's Commit tool).
2. Click **AI Commit** in the Project Dashboard AI panel.
3. The plugin sends the staged diff to your selected AI provider (OpenAI, Claude, or Gemini) along with a master prompt.
4. A commit message is generated and inserted into the commit message field — edit before committing if you want.

## Choosing a model

Any provider you've configured under **Settings → Tools → Project Dashboard AI** is available. The exact list shown in the dropdown is fetched live from your provider (see [how model discovery works](/docs/ai-providers#keeping-the-model-list-current)) — as of this writing that includes:

- **OpenAI** — GPT-5.5, GPT-5.4 (Mini, Nano), GPT-5.3-Codex, o3 (Pro, Standard, Mini), o4-mini, GPT-4.1
- **Anthropic Claude** — Claude Fable 5, Claude Opus 4.8, Claude Sonnet 5, Claude Haiku 4.5
- **Google Gemini** — Gemini 3.5 Flash, Gemini 3.1 Pro (Preview), Gemini 3.1 Flash-Lite, Gemini 2.5 (Pro, Flash)

Faster/cheaper models (GPT-5.4 Nano, Gemini 3.1 Flash-Lite, Claude Haiku 4.5) work fine for routine commits; reach for a stronger model (GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro) on complex, multi-file changes where the diff alone doesn't tell the full story.

## Customizing the master prompt

Master prompts let you set conventions once instead of correcting the AI's output every time — for example, enforcing [Conventional Commits](https://www.conventionalcommits.org/) format, a specific tone, or a required ticket-reference format. Set this under **Settings → Tools → Project Dashboard AI → Prompts**.

{/* SCREENSHOT PLACEHOLDER: master-prompt-settings.png */}

## Linking a commit to a task

If you're using the Checklist, you can append `(#N)` to reference the active task from the commit row, right-click context menu, or via **AI Commit → Append active issue to commit**. This links the commit to the issue without auto-closing it — no `Fixes`/`Closes` keyword is added automatically, so you stay in control of when an issue actually closes.

## Related

- [Getting started](/docs/getting-started)
- [GitHub Issues Integration](/docs/github-issues-integration)
- [AI Providers setup](/docs/ai-providers)