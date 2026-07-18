---
title: FAQ — Project Dashboard AI
description: Common questions about Project Dashboard AI — data privacy, AI provider costs, supported IDEs, GitHub sync, and how the model list stays current.
---

# Frequently asked questions

### Does Project Dashboard AI send my code anywhere?

AI requests (commit generation, code analysis) go directly to the AI provider you've configured — OpenAI, Anthropic, or Google — using your own API key. There's no intermediate server run by the plugin. See the [Privacy page](/privacy) for full detail.

### Do I need a GitHub token?

Only if you want Issues, pull request, or Actions sync. The checklist, AI commit generation, and notebooks all work without connecting GitHub.

### Which JetBrains IDEs are supported?

Any IDE built on the IntelliJ Platform — IntelliJ IDEA, WebStorm, PyCharm, GoLand, RustRover, CLion, PhpStorm, and others.

### Does it cost anything beyond the AI provider's API costs?

The plugin itself doesn't charge — you pay your chosen AI provider directly for API usage, at their standard rates.

### Can I use it without any AI provider configured?

Yes — the checklist, Markdown notebooks, file bookmarks, and progress tracking work independently of AI features. AI commit generation and the AI Code Assistant require a configured provider.

### How does the plugin decide which models to show?

It checks your configured provider's API directly for the models currently available to your key, caches that for 24 hours, and falls back to a built-in list if the check fails. See [how model discovery works](/docs/ai-providers#keeping-the-model-list-current) for detail.

### Is usage analytics collected?

Anonymous usage analytics are optional and off by default — you opt in explicitly if you want to. See the [Privacy page](/privacy) for exactly what's collected if enabled.

### How do I report a bug or request a feature?

Use the Bugreport link on the [Marketplace page](https://plugins.jetbrains.com/plugin/27986-project-dashboard-ai), or the project's GitHub Issues page.

