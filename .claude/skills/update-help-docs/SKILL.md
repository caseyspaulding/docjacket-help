---
name: update-help-docs
description: >
  Capture deterministic, repeatable screenshots for the DocJacket help site from
  the live app, and (later) detect which help pages went stale when app code
  changed. Use when refreshing help-site screenshots, syncing help docs with the
  product, or adding the screenshots/source front-matter contract to a page.
  Opens a PR; never commits to main.
---

# Update Help Docs from Code

Adaptation of the generic `update-docs` skill for **this** repo. Full design +
rationale: `docjacket-v3/docs/specs/DOCS-FROM-CODE-DRIFT-AND-DETERMINISTIC-SCREENSHOTS-2026-06-26.md`.

Two halves, built in order:

- **Half A — deterministic screenshots (`shot.ts`).** ✅ wired (this spike).
  Same route + viewport ⇒ the same PNG every run. Replaces the manual capture
  loop (the throwaway `/tmp/docjacket-help-*-screenshots` worktrees).
- **Half B — drift detection.** ⏳ not wired. Cross-repo: `source:` globs point
  at the sibling `../docjacket-v3` checkout; a `.docs-sync.json` would watermark
  the **docjacket-v3 SHA** docs were last reconciled against, and `git -C
  ../docjacket-v3 diff --name-only <sha>..HEAD` would flag matching pages.

## Front-matter contract (additive — Docusaurus ignores unknown keys)

```yaml
screenshots:
  - route: /templates/timelines                 # appended to --base-url
    out: static/img/templates/checklists-list.png
    selector: "[data-testid=checklist-grid]"    # omit ⇒ full-page
    waitFor: "text=Checklists"                   # optional readiness gate
    auth: true
source:                                          # Half B (not wired yet)
  - ../docjacket-v3/Features/Checklists/**
  - ../docjacket-v3/ClientApp/src/app/features/templates/**
```

## Capture (Half A)

Most app screens need login, and Google blocks OAuth inside a Playwright-launched
browser. So you log into a **normal** Chrome once and `shot.ts` **attaches** to it
over CDP — no automation flag, no bot-detection evasion.

```bash
# 1. one-time: launch a normal Chrome with the debug port + a dedicated profile,
#    then sign in as your capture org (Casey Realty).
open -na "Google Chrome" --args \
  --remote-debugging-port=9222 \
  --user-data-dir="$HOME/.dj-shot-chrome" \
  "https://app.docjacket.com"

# 2. install deps (once)
npm i -D playwright tsx gray-matter fast-glob

# 3. capture (one page, or all pages with a screenshots: block)
npx tsx .claude/skills/update-help-docs/shot.ts --only docs/templates/timeline-templates.md
npx tsx .claude/skills/update-help-docs/shot.ts
```

`shot.ts` writes each PNG to its `out:` path and exits non-zero if any capture
fails — surface failures, don't paper over them.

## Determinism notes

- Capture against a **stable org** (Casey Realty) with **parked** named templates
  + one demo-state transaction as fixed screenshot fodder — it's a live org, so
  shoot the parked artifacts, not whatever happens to be top-of-list.
- `shot.ts` forces a 1280×800 @2 viewport via CDP `Emulation.setDeviceMetricsOverride`
  so window size doesn't change the pixels.
- Prefer `data-testid` selectors over `dj-*` CSS so cosmetic restyles don't break
  captures. (Most panels don't have testids yet — add them as you go.)

## PR, never main

Branch, commit doc + image changes, open a PR. Never push to `main` (it
auto-deploys to help.docjacket.com via Cloudflare).
