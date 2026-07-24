#!/usr/bin/env node
// Generates docs/ai-access/tool-catalog.mdx — a single, statically rendered
// inventory of every tool on the DocJacket MCP server, grouped by scope tier.
//
// WHY THIS EXISTS: the tool inventory was previously readable only by calling
// mcp_catalog, i.e. only through the door it advertises. Anyone evaluating
// DocJacket — a person comparing platforms, or an agent answering "what can it
// do?" — could not see it without connecting first. Every hand-maintained list
// of these tools has drifted (the marketing /mcp page was 21 tools stale and had
// the send_* family in the wrong scope tier). So: generate, never hand-maintain.
//
// The page is GENERATED — never hand-edit it. Regenerate with:
//
//   npm run fetch-mcp-catalog && npm run gen-tool-catalog
//
// Same shape as scripts/gen-api-reference.mjs: plain markdown, rendered to HTML
// at build time, no client-side JavaScript required to read it.
//
// Usage: node scripts/gen-tool-catalog.mjs

import {readFile, writeFile} from 'node:fs/promises';
import {join, dirname, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const SPEC_FILE = join(REPO_ROOT, 'spec', 'mcp-catalog.json');
const OUT_FILE = join(REPO_ROOT, 'docs', 'ai-access', 'tool-catalog.mdx');

const TIERS = [
  {
    scope: 'read',
    label: 'Read',
    blurb:
      'Look things up. Nothing in this tier changes a record or contacts anyone. A read-only connection is limited to exactly these tools.',
  },
  {
    scope: 'draft',
    label: 'Draft',
    blurb:
      'Low-risk writes to your own records — tasks, key dates, checklists, activity notes. **Nothing in this tier sends anything to anyone.**',
  },
  {
    scope: 'actions',
    label: 'Actions',
    blurb:
      'Side-effecting work: sending email to a real person, creating and deleting records, and exposing documents outside the organization.',
  },
];

/** MDX parses {braces} as JSX. Inline code spans do not, so anything with an
 *  identifier-shaped brace goes in backticks. */
const code = (s) => `\`${s}\``;

/** Escape MDX-significant characters in prose that came from the server. */
const prose = (s) =>
  String(s ?? '')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/</g, '\\<')
    .trim();

const anchor = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const snapshot = JSON.parse(await readFile(SPEC_FILE, 'utf8'));
const tools = snapshot.tools ?? [];
const total = tools.length;

if (total === 0) {
  console.error('✗ spec/mcp-catalog.json contains no tools. Refusing to generate an empty page.');
  process.exit(1);
}

const byScope = (scope) =>
  tools.filter((t) => t.requiredScope === scope).sort((a, b) => a.name.localeCompare(b.name));

// Every name on the page, so pairsWith can link only to anchors that exist.
const present = new Set(tools.map((t) => t.name));

const counts = Object.fromEntries(TIERS.map((t) => [t.scope, byScope(t.scope).length]));
const countLine = TIERS.map((t) => `**${counts[t.scope]}** ${t.scope}`).join(' · ');

// ItemList genuinely maps here — the page IS a list of named things with
// descriptions. No HowTo (nothing is a procedure) and no FAQPage (no Q&A).
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `DocJacket MCP tool catalog`,
  description: `All ${total} tools on the DocJacket MCP server, grouped by permission scope.`,
  numberOfItems: total,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: tools.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    description: String(t.description ?? '').slice(0, 300),
  })),
};

let out = `---
sidebar_label: Tool Catalog (all ${total} tools)
sidebar_position: 8
description: Every tool on the DocJacket MCP server — all ${total}, grouped by scope tier, with descriptions, gotchas, pairings, and example calls. Generated from the live catalog.
---

{/* GENERATED FILE — do not edit by hand.
     Source: spec/mcp-catalog.json (${total} tools)
     Regenerate: npm run fetch-mcp-catalog && npm run gen-tool-catalog
     Generator: scripts/gen-tool-catalog.mjs */}

<head>
<script type="application/ld+json">
{JSON.stringify(${JSON.stringify(itemListSchema)})}
</script>
</head>

# MCP tool catalog — all ${total} tools

This is the complete inventory of what an AI assistant can do with DocJacket over the [Model Context Protocol](./index.mdx): **${total} tools** — ${countLine}.

You do not need to connect anything to read this page. It is generated from the live catalog and rendered as static HTML, so a person comparing platforms — or an agent answering *"what can DocJacket actually do?"* — can see the whole surface first.

## The three scope tiers

You pick a permission level when you connect, and it is enforced at the token, not by convention. A read-only connection **cannot** call a draft or actions tool even if the assistant tries.

| Tier | Tools | What it allows |
|---|---|---|
${TIERS.map(
  (t) => `| ${code(t.scope)} | ${counts[t.scope]} | ${t.blurb.replace(/\*\*/g, '')} |`,
).join('\n')}

Every write, in either write tier, is confirmed by you in chat before it runs — the conversation itself is the approval step. Every call is recorded in your [activity log](https://app.docjacket.com/settings/ai-access/activity). See [Permissions & scopes](./permissions.mdx) for how to choose.

## Reading this page

- ${code('Requires')} shows the scope tier, plus a granular scope where the tool carries one.
- **Gotchas** are non-obvious behaviors — idempotency, limits, failure modes — that the tool reports about itself.
- **Pairs with** links tools that are typically called together.
- **Example call** is a realistic argument shape, not an exhaustive schema.

Calling ${code('mcp_catalog')} from a connected assistant returns this same inventory, filtered to the scopes *your* token holds.

`;

for (const tier of TIERS) {
  const rows = byScope(tier.scope);
  if (rows.length === 0) continue;

  out += `## ${tier.label} — ${rows.length} tools\n\n${tier.blurb}\n\n`;

  for (const t of rows) {
    out += `### ${code(t.name)}\n\n`;
    out += `${prose(t.description)}\n\n`;

    const granular = t.requiredGranularScope
      ? ` · granular scope ${code(t.requiredGranularScope)}`
      : '';
    out += `*Requires ${code(tier.scope)}${granular}.*\n\n`;

    if (t.gotchas?.length) {
      out += `**Gotchas**\n\n`;
      for (const g of t.gotchas) out += `- ${prose(g)}\n`;
      out += '\n';
    }

    const pairs = (t.pairsWith ?? []).filter((p) => present.has(p));
    if (pairs.length) {
      out += `**Pairs with** ${pairs.map((p) => `[${code(p)}](#${anchor(p)})`).join(' · ')}\n\n`;
    }

    if (t.exampleCall) {
      const example =
        typeof t.exampleCall === 'string' ? t.exampleCall : JSON.stringify(t.exampleCall, null, 2);
      out += `**Example call**\n\n\`\`\`json\n${example}\n\`\`\`\n\n`;
    }
  }
}

out += `## Where to go next

- **[Connect Claude](./claude.mdx)** · **[Connect Codex / ChatGPT](./codex.mdx)** · **[Connect Cowork](./cowork.mdx)** · **[Connect Gemini](./gemini.mdx)** — two-minute setup for each client.
- **[Permissions & scopes](./permissions.mdx)** — what each tier allows, and how to change it later.
- **[REST API reference](../api/reference.mdx)** — the same capabilities as HTTP endpoints, for your own systems.
`;

await writeFile(OUT_FILE, out, 'utf8');

const withMeta = {
  gotchas: tools.filter((t) => t.gotchas?.length).length,
  pairsWith: tools.filter((t) => t.pairsWith?.length).length,
  exampleCall: tools.filter((t) => t.exampleCall).length,
};

console.log(
  `[gen-tool-catalog] wrote ${total} tools ` +
    `(${TIERS.map((t) => `${t.scope}=${counts[t.scope]}`).join(', ')}) ` +
    `to ${relative(REPO_ROOT, OUT_FILE)}`,
);
console.log(
  `  metadata coverage: gotchas ${withMeta.gotchas}/${total}, ` +
    `pairsWith ${withMeta.pairsWith}/${total}, exampleCall ${withMeta.exampleCall}/${total}`,
);
