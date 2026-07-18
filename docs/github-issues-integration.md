---
title: GitHub Issues Sync for JetBrains IDEs — Bidirectional Integration
description: Sync GitHub Issues directly into your JetBrains IDE checklist — labels, assignees, comments, and status update in real time, in both directions.
---

# GitHub Issues Integration

Switching to a browser tab to check or update a GitHub Issue breaks flow. Project Dashboard AI syncs Issues directly into the IDE checklist — bidirectionally, so changes made in either place stay consistent.

{/* SCREENSHOT PLACEHOLDER: github-issues-checklist-view.png */}

## What syncs

- **Issue state** — Open, Closed, Not Planned, tracked and updated instantly in both directions.
- **Labels** — synced automatically, including GitHub's label colors, shown as pills on the checklist. Filter your local checklist by label the same way you would on GitHub.
- **Assignees** — multi-assignee support, changes reflected on both ends.
- **Comments** — bidirectional sync between the local checklist and GitHub Issue comments, with badge counters for new comments so you don't miss activity.

## Setting it up

Add a GitHub personal access token under **Settings → Tools → Project Dashboard AI**. The token needs `repo` scope (or `public_repo` for public repositories only) to read and write Issues.

## Creating and updating issues from the IDE

Add a task on the Checklist tab and sync it to create a matching GitHub Issue — or load existing Issues into your checklist to start tracking them locally. Updates to title, labels, assignees, or status push back to GitHub without needing the browser.

## Pull requests and Actions, alongside Issues

The same GitHub connection powers two adjacent tabs:

- **Pull requests** — list and manage PRs: open in browser, view checks, copy links, checkout the head branch, edit assignees/labels/reviewers, comment, and merge (merge commit, squash, or rebase) or close/reopen.
- **GitHub Actions** — browse workflow runs with branch filtering, and jump from a PR straight to the runs for that branch.

## Related

- [AI Commit Generation](/docs/ai-commit-generation) — link commits to issues without auto-closing them
- [Getting started](/docs/getting-started)