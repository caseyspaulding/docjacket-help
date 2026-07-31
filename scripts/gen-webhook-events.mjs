#!/usr/bin/env node
// Regenerates the "Event catalog" table in docs/api/webhooks.mdx from the OpenAPI
// document's top-level `webhooks` block.
//
// WHY: that table used to be hand-maintained. The event vocabulary lives in C#
// (WebhookSubscriptionEndpoints.AvailableEventTypes) and is what both
// GET /api/v1/webhook-events and the spec's `webhooks` block are generated from — so a new
// event type reached the API and the specification automatically, and this page silently
// did not. The table had already fallen a row behind.
//
// Only the marked region is rewritten. Everything around it — the subscribe walkthrough,
// signature verification, payload shape, retry semantics — is hand-written prose and is
// left exactly as it is. That split is deliberate: the LIST is derived data, the
// EXPLANATION is editorial.
//
// Regenerate after any public API change:
//
//   npm run fetch-spec && npm run gen-webhook-events
//
// Usage: node scripts/gen-webhook-events.mjs [--check]
//   --check  exit 1 if the file would change, without writing (used by CI)

import {readFile, writeFile} from 'node:fs/promises';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const SPEC_FILE = join(REPO_ROOT, 'spec', 'dj-api.json');
const OUT_FILE = join(REPO_ROOT, 'docs', 'api', 'webhooks.mdx');

const BEGIN = '{/* BEGIN GENERATED: webhook-events */}';
const END = '{/* END GENERATED: webhook-events */}';

const checkOnly = process.argv.includes('--check');

/** Table cells are pipe-delimited; a literal pipe would split the row. */
const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();

const spec = JSON.parse(await readFile(SPEC_FILE, 'utf8'));
const webhooks = spec.webhooks ?? {};

const events = Object.entries(webhooks)
  .map(([type, item]) => {
    // One operation per webhook entry; its summary is the human description, which
    // originates from AvailableEventTypes in the API.
    const op = Object.values(item).find((v) => v && typeof v === 'object' && 'summary' in v);
    return {type, summary: op?.summary ?? ''};
  })
  // Stable, spec-order-independent output so the file does not churn between runs.
  .sort((a, b) => a.type.localeCompare(b.type));

if (events.length === 0) {
  console.error(
    '✗ spec/dj-api.json has no `webhooks` block. Refresh it with `npm run fetch-spec` — ' +
      'an older specification predates webhook documentation.',
  );
  process.exit(1);
}

const rows = events.map((e) => `| \`${e.type}\` | ${cell(e.summary)} |`).join('\n');

const generated = `${BEGIN}
{/* Generated from spec/dj-api.json — do not edit this table by hand.
    Regenerate: npm run fetch-spec && npm run gen-webhook-events
    Generator: scripts/gen-webhook-events.mjs */}

| Event | Fires when |
|---|---|
${rows}

${END}`;

const current = await readFile(OUT_FILE, 'utf8');

const beginAt = current.indexOf(BEGIN);
const endAt = current.indexOf(END);
if (beginAt === -1 || endAt === -1) {
  console.error(
    `✗ ${OUT_FILE} is missing the generated-region markers.\n` +
      `  Expected a block delimited by:\n    ${BEGIN}\n    ${END}\n` +
      '  Add them around the event-catalog table and re-run.',
  );
  process.exit(1);
}

const next = current.slice(0, beginAt) + generated + current.slice(endAt + END.length);

if (next === current) {
  console.log(`[gen-webhook-events] up to date — ${events.length} event types`);
  process.exit(0);
}

if (checkOnly) {
  console.error(
    `✗ docs/api/webhooks.mdx is out of date (${events.length} event types in the spec).\n` +
      '  Run: npm run gen-webhook-events — and commit the result.',
  );
  process.exit(1);
}

await writeFile(OUT_FILE, next);
console.log(`[gen-webhook-events] wrote ${events.length} event types to docs/api/webhooks.mdx`);
