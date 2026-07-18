---
title: Privacy — Project Dashboard AI
description: A plain-language explanation of what data Project Dashboard AI accesses, where it goes, and what's optional.
---

# Privacy, in plain terms

This page explains exactly what data moves where when you use Project Dashboard AI — no legal boilerplate, just the actual mechanics.

## API keys and tokens

Your AI provider API key and GitHub token are stored using your IDE's built-in credential system (the same secure storage the IDE uses for other credentials) — not in plain text project files, not synced anywhere by the plugin.

## AI requests

When you use AI commit generation, the AI Code Assistant, Smart Code Actions, the relevant content (a diff, a code selection, a chat message, checklist context) is sent **directly to the AI provider you've selected** — OpenAI, Anthropic, or Google — using your own API key. This traffic doesn't pass through any server operated by the plugin. What each provider does with that data is governed by that provider's own terms, not ours — check their respective privacy policies if that matters for your use case.

## GitHub sync

If you've added a GitHub token, Issues, labels, assignees, comments, PRs, and Actions data sync between your local checklist and GitHub over GitHub's own API, using your token's permissions.

## Usage analytics

Anonymous usage analytics are **optional and off by default**. If you opt in, the plugin sends anonymized event data (which features are used, how often) to help prioritize development — no code content, no file contents, no API keys, and no personally identifying information are included in this data. You can opt out again at any time from the same settings panel.

## Your checklist data

Your checklist syncs to a `project-checklist.md` file at your repository root — it lives in your repository like any other file, under your existing access controls and version history.


