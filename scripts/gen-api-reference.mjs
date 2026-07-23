#!/usr/bin/env node
// Generates docs/api/reference.mdx — a single, statically rendered index of every
// operation in the DocJacket public API, grouped by the OpenAPI tags.
//
// WHY THIS AND NOT docusaurus-plugin-openapi-docs: the plugin was evaluated first
// (2026-07-23). It generates fine, but its theme cannot server-side render — the
// build dies with "Cannot destructure property 'store' of 'i' as it is null" in
// @theme/ApiExplorer/MethodEndpoint on every one of the 115 pages. Since a
// STATICALLY rendered page is the entire point (crawlers and agents that do not
// execute JavaScript), a renderer that only works client-side fails the
// requirement even when it builds. Newer plugin (5.x) needs Docusaurus >=3.10,
// which pulled in a further @docusaurus/faster dependency chain on this site.
// Plain markdown has no such failure mode: it renders to HTML at build time,
// always. See docs/specs/API-DOCS-TAGGING-AUTH-DISCOVERABILITY-2026-07-23.md
// (docjacket-v3) §6 for the full evaluation.
//
// The page is GENERATED — never hand-edit it. Regenerate after any public API
// change with:
//
//   npm run fetch-spec && npm run gen-api-reference
//
// Usage: node scripts/gen-api-reference.mjs

import {readFile, writeFile} from 'node:fs/promises';
import {join, dirname, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const SPEC_FILE = join(REPO_ROOT, 'spec', 'dj-api.json');
const OUT_FILE = join(REPO_ROOT, 'docs', 'api', 'reference.mdx');

const METHOD_ORDER = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

/** Table cells are pipe-delimited; a literal pipe would split the row. */
const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();

/**
 * Paths contain {braces}, which MDX parses as JSX expressions — `{transactionId}`
 * would blow up the build as an undefined identifier. Inline code spans are not
 * parsed as JSX, so every path is emitted inside backticks.
 */
const code = (s) => `\`${s}\``;

/** "**Requires the `read` scope.**" -> "read" */
function scopeOf(op) {
  const m = (op.description ?? '').match(/Requires the `(\w+)` scope/);
  return m ? m[1] : null;
}

const spec = JSON.parse(await readFile(SPEC_FILE, 'utf8'));

const operations = [];
for (const [path, item] of Object.entries(spec.paths ?? {})) {
  for (const [method, op] of Object.entries(item)) {
    if (!METHOD_ORDER.includes(method.toUpperCase())) continue;
    operations.push({
      method: method.toUpperCase(),
      path,
      summary: op.summary ?? '',
      scope: scopeOf(op),
      tag: (op.tags ?? [])[0] ?? 'Other',
    });
  }
}

// Tag order comes from the document's own tags array — the API decides the
// ordering (PublicApiTags.Ordered), this script does not re-invent it.
const tags = (spec.tags ?? []).map((t) => ({name: t.name, description: t.description ?? ''}));
for (const op of operations) {
  if (!tags.some((t) => t.name === op.tag)) tags.push({name: op.tag, description: ''});
}

const anchor = (name) =>
  name.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const total = operations.length;

let out = `---
title: API reference — all operations
sidebar_label: All operations
sidebar_position: 6
description: Every operation in the DocJacket REST API — ${total} endpoints grouped by resource, with method, path, and required scope. Generated from the OpenAPI specification.
---

{/* GENERATED FILE — do not edit by hand.
     Source: spec/dj-api.json (OpenAPI ${spec.openapi})
     Regenerate: npm run fetch-spec && npm run gen-api-reference
     Generator: scripts/gen-api-reference.mjs */}

# API reference — all operations

The DocJacket REST API lets your own systems read and act on transactions, contacts, tasks, key dates, documents, extractions, disclosures, and templates. This page lists **all ${total} operations** in one place, grouped by resource, so the whole surface is readable without running JavaScript or parsing the raw specification.

- **Base URL:** ${code('https://api.docjacket.com')}
- **Interactive reference** (try-it console, client snippets): [api.docjacket.com/reference](https://api.docjacket.com/reference)
- **Raw OpenAPI ${spec.openapi} specification:** [api.docjacket.com/openapi.json](https://api.docjacket.com/openapi.json)
- **MCP server** (same capabilities, for AI assistants): ${code('https://mcp.docjacket.com/mcp')}

For request and response schemas, read the [raw specification](https://api.docjacket.com/openapi.json) or the [interactive reference](https://api.docjacket.com/reference) — this page is the index, not the full contract.

## Authentication

Every request carries an API key as a bearer token:

\`\`\`
Authorization: Bearer mcp_at_YOUR_KEY
\`\`\`

Two credential types:

| Key | Prefix | Use |
|---|---|---|
| **Organization key** | ${code('mcp_at_…')} | Acts within a single organization. Mint one under **Settings → AI & API Access**. Covers every section except Organizations (Partner). |
| **Partner key** | ${code('rsk_…')} | Cross-tenant provisioning and read for white-label partners. Accepted only on the ${code('/api/v1/orgs/*')} operations. |

Organization keys carry one or more **scopes**, listed per operation in the tables below:

| Scope | Grants |
|---|---|
| ${code('read')} | Read operations (GET). |
| ${code('draft')} | Low-risk writes — completing a task, logging activity, applying a checklist. |
| ${code('actions')} | Side-effecting writes — sending email, creating and deleting records, provisioning. |

See [Authentication & API keys](./authentication.mdx) for creating, scoping, rotating, and revoking keys.

## Your first three calls

The documented starting sequence — each answers a question you need before writing real integration code:

\`\`\`bash
# 1. Does my key work? Echoes your organization and granted scopes.
curl https://api.docjacket.com/api/v1/health \\
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# 2. What can this key call? Every operation, with a per-key "callable" flag.
curl https://api.docjacket.com/api/v1/catalog \\
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# 3. What have I been calling? Volume, top operations, and error rate.
curl https://api.docjacket.com/api/v1/usage \\
  -H "Authorization: Bearer mcp_at_YOUR_KEY"
\`\`\`

## Conventions

- **Errors** use one envelope: ${code('{ "error": { "code", "message", "fields"? } }')}. Cross-tenant lookups return ${code('404')} rather than ${code('403')}, so the existence of another organization's data is never disclosed.
- **Rate limits** are per key, per minute, in a fixed window: **300 reads** (GET) and **60 writes** (POST/PUT/PATCH/DELETE). Exceeding a bucket returns ${code('429')} with ${code('Retry-After: 60')} and ${code('code: "rate_limited"')}.
- **Idempotency:** send an ${code('Idempotency-Key')} header on side-effecting writes so retries are safe.
- **Versioning is additive by default.** New fields and operations can appear at any time, so **ignore unknown response fields** and do not depend on property order. Breaking changes ship as a new major version at a new path (${code('/api/v2')}) — ${code('/api/v1')} is never broken in place. A deprecated version stays available for at least **6 months** after its successor ships.

See [Making requests](./making-requests.mdx) for the full conventions and [Versioning & changes](./versioning.mdx) for the deprecation policy.

## Operations

${total} operations across ${tags.length} sections.

`;

for (const tag of tags) {
  const rows = operations
    .filter((o) => o.tag === tag.name)
    .sort((a, b) =>
      a.path.localeCompare(b.path) ||
      METHOD_ORDER.indexOf(a.method) - METHOD_ORDER.indexOf(b.method));
  if (rows.length === 0) continue;

  out += `### ${tag.name}\n\n`;
  if (tag.description) out += `${tag.description}\n\n`;
  out += `| Method | Path | Description | Scope |\n|---|---|---|---|\n`;
  for (const r of rows) {
    out += `| ${r.method} | ${code(r.path)} | ${cell(r.summary)} | ${r.scope ? code(r.scope) : '—'} |\n`;
  }
  out += '\n';
}

out += `## Where to go next

- **[Authentication & API keys](./authentication.mdx)** — create, scope, rotate, and revoke keys.
- **[Making requests](./making-requests.mdx)** — conventions, errors, rate limits, and recipes.
- **[Webhooks](./webhooks.mdx)** — subscribe to events instead of polling, and verify signatures.
- **[Partner API](./reseller.mdx)** — provisioning and read access for white-label resellers.
- **[Versioning & changes](./versioning.mdx)** — how the API evolves without breaking you.
`;

await writeFile(OUT_FILE, out, 'utf8');

const byTag = tags
  .map((t) => `${t.name}=${operations.filter((o) => o.tag === t.name).length}`)
  .filter((s) => !s.endsWith('=0'));
console.log(`[gen-api-reference] wrote ${total} operations in ${byTag.length} sections to ${relative(REPO_ROOT, OUT_FILE)}`);
console.log(`  ${byTag.join(', ')}`);
