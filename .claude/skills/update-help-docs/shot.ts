#!/usr/bin/env -S npx tsx
/**
 * Deterministic help-site screenshot capture (CDP-attach variant).
 *
 * Reads `screenshots:` blocks from doc front-matter and captures each one to its
 * declared `out:` path. Same route + viewport => the same PNG every run, so the
 * output is diffable — unlike hand-captured or computer-use screenshots.
 *
 * AUTH: most app screens require login. Google blocks OAuth inside a
 * Playwright-LAUNCHED browser (it sets navigator.webdriver). So instead we
 * attach over CDP to a NORMAL Chrome that YOU logged into — no automation flag,
 * no bot-detection evasion. One-time setup:
 *
 *   open -na "Google Chrome" --args \
 *     --remote-debugging-port=9222 \
 *     --user-data-dir="$HOME/.dj-shot-chrome" \
 *     "https://app.docjacket.com"
 *   # → sign in once as your capture org (e.g. Casey Realty). The profile and
 *   #   session persist in ~/.dj-shot-chrome, so later runs need no re-login.
 *
 * Then capture:
 *   npx tsx .claude/skills/update-help-docs/shot.ts
 *   npx tsx .claude/skills/update-help-docs/shot.ts --only docs/templates/timeline-templates.md
 *   npx tsx .claude/skills/update-help-docs/shot.ts --base-url https://app.docjacket.com --cdp http://localhost:9222
 *
 * Deps (devDependencies): playwright tsx gray-matter fast-glob
 *
 * Front-matter contract (per page):
 *   screenshots:
 *     - route: /templates/timelines      # appended to --base-url
 *       out: static/img/templates/checklists-list.png
 *       selector: "[data-testid=checklist-grid]"   # omit for full page
 *       waitFor: "text=Checklists"                  # optional readiness gate
 *       auth: true                                  # informational
 */
import { chromium, type Page } from "playwright";
import matter from "gray-matter";
import fg from "fast-glob";
import { readFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { parseArgs } from "node:util";

interface Shot {
  route: string;
  out: string;
  selector?: string;
  waitFor?: string;
  auth?: boolean;
}

const { values } = parseArgs({
  options: {
    "base-url": { type: "string", default: "https://app.docjacket.com" },
    cdp: { type: "string", default: "http://localhost:9222" },
    docs: { type: "string", default: "docs/**/*.{md,mdx}" },
    only: { type: "string" },
    timeout: { type: "string", default: "20000" },
  },
});

const baseUrl = values["base-url"]!.replace(/\/+$/, "");
const timeout = Number(values.timeout);
const files = values.only ? [values.only] : await fg(values.docs!, { absolute: false });

const jobs: { file: string; shot: Shot }[] = [];
for (const file of files) {
  const data = matter(readFileSync(file, "utf8")).data as { screenshots?: Shot[] };
  for (const shot of data.screenshots ?? []) {
    if (!shot.route || !shot.out) {
      console.warn(`! ${file}: skipping malformed screenshot entry (need route + out)`);
      continue;
    }
    jobs.push({ file, shot });
  }
}

if (jobs.length === 0) {
  console.log("No screenshots declared in matched pages. Nothing to do.");
  process.exit(0);
}

// Attach to the Chrome YOU launched + logged into (see header). We reuse one of
// its tabs and drive it; we never close your browser.
const browser = await chromium.connectOverCDP(values.cdp!);
const ctx = browser.contexts()[0];
if (!ctx) {
  console.error(`No browser context at ${values.cdp}. Launch Chrome with --remote-debugging-port first (see header).`);
  process.exit(1);
}

async function deterministicViewport(page: Page) {
  // CDP-attached real windows don't honor setViewportSize; force metrics directly.
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 1280, height: 800, deviceScaleFactor: 2, mobile: false,
  });
  return cdp;
}

let failures = 0;
const page = ctx.pages()[0] ?? (await ctx.newPage());
for (const { file, shot } of jobs) {
  const url = `${baseUrl}${shot.route}`;
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout });
    const cdp = await deterministicViewport(page);
    if (shot.waitFor) await page.waitForSelector(shot.waitFor, { timeout });
    await page.waitForLoadState("networkidle", { timeout }).catch(() => {});

    const outPath = resolve(shot.out);
    mkdirSync(dirname(outPath), { recursive: true });
    if (shot.selector) {
      const el = await page.waitForSelector(shot.selector, { timeout });
      await el.screenshot({ path: outPath });
    } else {
      await page.screenshot({ path: outPath });
    }
    await cdp.detach().catch(() => {});
    console.log(`✓ ${shot.out}  ←  ${shot.route}  (${file})`);
  } catch (err) {
    failures++;
    console.error(`✗ ${shot.route}  (${file}) — ${(err as Error).message}`);
  }
}

await browser.close(); // detaches CDP; your Chrome stays open
console.log(`\nDone: ${jobs.length - failures}/${jobs.length} captured.`);
process.exit(failures ? 1 : 0);
