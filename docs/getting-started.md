---
title: Getting Started — Install and Configure Project Dashboard AI
description: Install Project Dashboard AI in your JetBrains IDE, connect an AI provider, and generate your first AI commit message in under five minutes.
---

# Getting started

## 1. Install the plugin

Open **Settings → Plugins → Marketplace**, search for "Project Dashboard AI", and click Install. Or install directly from the [JetBrains Marketplace page](https://plugins.jetbrains.com/plugin/27986-project-dashboard-ai).

Restart the IDE if prompted.

## 2. Open the tool window

Look for the Project Dashboard AI icon in the tool window bar (usually docked on the side). Click to open it — you'll see the Checklist tab by default.

{/* SCREENSHOT PLACEHOLDER: tool-window-location.png */}

## 3. Connect an AI provider

Go to **Settings → Tools → Project Dashboard AI**. Choose a provider — OpenAI, Anthropic Claude, or Google Gemini — and paste your API key. Keys are stored in the IDE's built-in credential system, not in plain text project files.

The model dropdown checks your provider's API for what's currently available once a key is entered — see [how model discovery works](/docs/ai-providers#keeping-the-model-list-current) if you want the detail. You can switch providers at any time; nothing else in your setup depends on which one you pick.

## 4. (Optional) Connect GitHub

If you want Issues, PR, and Actions sync, add a GitHub personal access token in the same settings panel. Skip this step if you only want the AI commit and checklist features — everything else works without it.

## 5. Generate your first AI commit message

Stage some changes as usual. In the Project Dashboard AI panel, click **AI Commit** — the plugin reads your staged diff and drafts a commit message using your selected provider. Edit if needed, then commit normally.

## 6. Add your first task

On the Checklist tab, click **Add Task**. Tasks sync automatically with a `project-checklist.md` file at your repository root, so your task list is version-controlled alongside your code.

## What's next

- [AI Commit Generation in depth](/docs/ai-commit-generation) — customizing prompts to match your commit style
- [GitHub Issues Integration](/docs/github-issues-integration) — bidirectional sync setup
- [AI Providers](/docs/ai-providers) — model discovery, switching providers, and which model to use for what
- [FAQ](/docs/faq)