---
title: AI Provider Setup — OpenAI, Claude, and Gemini for JetBrains
description: Configure OpenAI, Anthropic Claude, or Google Gemini as your AI provider for Project Dashboard AI. Bring your own API key, switch providers anytime. Model lists update automatically.
---

# AI Providers

Project Dashboard AI doesn't run its own AI backend — you bring your own API key for the provider you prefer, and requests go directly to that provider. Nothing routes through a third-party server in between.

## Supported providers and models

| Provider | Models |
|---|---|
| OpenAI | GPT-5.5, GPT-5.4 (Mini, Nano), GPT-5.3-Codex, o3 (Pro, Standard, Mini), o4-mini, GPT-4.1 |
| Anthropic Claude | Claude Fable 5, Claude Opus 4.8, Claude Sonnet 5, Claude Haiku 4.5 |
| Google Gemini | Gemini 3.5 Flash, Gemini 3.1 Pro (Preview), Gemini 3.1 Flash-Lite, Gemini 2.5 (Pro, Flash) |

This table reflects what's current as of this writing. In practice, the exact list you see in the plugin depends on your account and the provider's live API — see below.

## Keeping the model list current

Providers add and retire models often — sometimes every few weeks. Instead of shipping a fixed list that goes stale, Project Dashboard AI checks each provider's own API for what's actually available to your key:

- When you open **Settings → Tools → Project Dashboard AI** and a key is already entered, the plugin checks for a live model list in the background.
- Results are cached for 24 hours per provider, so it isn't re-checking on every keystroke.
- A **↻ Refresh** button next to the model dropdown forces an immediate check if you want the latest list right away.
- A small status label next to the dropdown shows where the list came from — a live fetch (with the count of models found) or the plugin's built-in fallback list, e.g. if the provider's API is temporarily unreachable.
- If a live check fails for any reason, the plugin falls back to its built-in list automatically — you're never left with an empty dropdown.

This means a model a provider ships after this plugin's last update can still show up in the dropdown without waiting for a plugin update — and a model a provider retires won't linger as a broken option.

## Setting up a provider

1. Get an API key from your chosen provider's developer console.
2. In the IDE, go to **Settings → Tools → Project Dashboard AI**.
3. Select the provider, paste the key, and choose a default model.
4. The key is stored using the IDE's built-in credential system.

## Switching providers

Change providers anytime from the same settings panel — nothing else in your checklist, notebooks, or GitHub sync depends on which provider is active. This is useful if you want a cheaper/faster model for routine commit messages and a stronger one for deeper code analysis.

## Which model for which task

- **Commit messages** — smaller/faster models (GPT-5.4 Nano, Gemini 3.1 Flash-Lite, Claude Haiku 4.5) are usually enough since the diff itself carries most of the information.
- **Code analysis / AI Code Assistant conversations** — stronger models (GPT-5.5, Claude Opus 4.8 or Sonnet 5, Gemini 3.1 Pro) give more reliable reasoning on multi-file context.

## Related

- [AI Commit Generation](/docs/ai-commit-generation)
- [Privacy](/privacy)
- [FAQ](/docs/faq)