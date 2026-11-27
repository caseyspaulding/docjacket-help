#!/usr/bin/env node
// Refreshes spec/mcp-catalog.json — the committed copy of the DocJacket MCP tool
// inventory that docs/ai-access/tool-catalog.mdx is generated from.
//
// WHY A COMMITTED COPY: same three reasons as scripts/fetch-openapi-spec.mjs —
// the docs build must not depend on an API being reachable mid-deploy, builds
// stay reproducible, and a change to the public tool surface shows up as a
// reviewable diff in the PR that causes it. The scope guard below also keeps a
// truncated response from ever replacing a good snapshot.
//
// SOURCE: the default is an anonymous GET of the public catalog,
// https://mcp.docjacket.com/mcp/catalog.json. It is not scope-filtered, so no
// token is needed. The old authenticated JSON-RPC call to mcp_catalog is kept
// as a fallback, used only when a token is given.
//
// Usage:
//   node scripts/fetch-mcp-catalog.mjs                      # public GET, no token
//   node scripts/fetch-mcp-catalog.mjs --url http://localhost:5000/mcp/catalog.json
//   node scripts/fetch-mcp-catalog.mjs --from /path/to/catalog.json
//   DJ_MCP_TOKEN=mcp_at_… node scripts/fetch-mcp-catalog.mjs   # JSON-RPC fallback
//
// With a token, --url must point at the JSON-RPC endpoint (default
// https://mcp.docjacket.com/mcp), and the token must carry ALL THREE scopes
// (read, draft, actions): a narrower token returns only its own slice and the
// guard below refuses to write it.
//
// Then: npm run gen-tool-catalog

import {writeFile, mkdir, readFile} from 'node:fs/promises';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const OUT_FILE = join(REPO_ROOT, 'spec', 'mcp-catalog.json');

const DEFAULT_PUBLIC_URL = 'https://mcp.docjacket.com/mcp/catalog.json';
const DEFAULT_RPC_URL = 'https://mcp.docjacket.com/mcp';
const REQUIRED_SCOPES = ['read', 'draft', 'actions'];

// A floor, not the real count — it only has to be high enough that a truncated
// or single-scope response cannot pass. The real count is asserted by the diff.
const MIN_TOOLS = 40;

const arg = (flag) => {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : undefined;
};

const fromFile = arg('--from');
const token = arg('--token') ?? process.env.DJ_MCP_TOKEN;
const url = arg('--url') ?? (token ? DEFAULT_RPC_URL : DEFAULT_PUBLIC_URL);

/** Pulls the catalog payload out of whatever shape it arrives in. */
function unwrap(raw) {
  // Already the catalog object.
  if (Array.isArray(raw?.tools)) return raw;
  // JSON-RPC envelope: result.content[].text carries the JSON as a string.
  const text = raw?.result?.content?.find((c) => c.type === 'text')?.text;
  if (text) return JSON.parse(text);
  if (raw?.result?.structuredContent) return raw.result.structuredContent;
  throw new Error('Could not find a tools array in the response.');
}

let catalog;

if (fromFile) {
  catalog = unwrap(JSON.parse(await readFile(fromFile, 'utf8')));
  console.log(`✓ read ${fromFile}`);
} else if (!token) {
  // Default path: anonymous GET of the public catalog.
  const res = await fetch(url, {headers: {Accept: 'application/json'}});
  if (!res.ok) {
    console.error(`✗ ${url} returned ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  catalog = unwrap(await res.json());
  console.log(`✓ GET ${url}`);
} else {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      // Streamable-HTTP transport may answer as SSE; accept both.
      Accept: 'application/json, text/event-stream',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'tools/call',
      params: {name: 'mcp_catalog', arguments: {}},
    }),
  });

  if (!res.ok) {
    console.error(`✗ ${url} returned ${res.status} ${res.statusText}`);
    process.exit(1);
  }

  const body = await res.text();
  // SSE frames arrive as "data: {...}" lines; a plain JSON body parses directly.
  const payload = body.trimStart().startsWith('{')
    ? JSON.parse(body)
    : JSON.parse(
        body
          .split('\n')
          .filter((l) => l.startsWith('data:'))
          .map((l) => l.slice(5).trim())
          .join(''),
      );

  if (payload.error) {
    console.error(`✗ JSON-RPC error ${payload.error.code}: ${payload.error.message}`);
    process.exit(1);
  }

  catalog = unwrap(payload);
  console.log(`✓ POST ${url} (authenticated JSON-RPC)`);
}

// ---- Guards. A bad response must never quietly replace a good snapshot. ----

const tools = catalog.tools ?? [];

if (tools.length === 0) {
  console.error('✗ Response contains no tools. Not written.');
  process.exit(1);
}

if (tools.length < MIN_TOOLS) {
  console.error(
    `✗ Only ${tools.length} tools (floor is ${MIN_TOOLS}). This looks like a ` +
      'truncated or narrowly-scoped response. Not written.',
  );
  process.exit(1);
}

const scopes = new Set(tools.map((t) => t.requiredScope).filter(Boolean));
const missing = REQUIRED_SCOPES.filter((s) => !scopes.has(s));
if (missing.length > 0) {
  console.error(
    `✗ No tools in scope tier(s): ${missing.join(', ')}. mcp_catalog is ` +
      'scope-filtered when called with a token, so this one cannot see the whole ' +
      'surface. Use the public endpoint, or a token carrying read + draft + actions. Not written.',
  );
  process.exit(1);
}

if (tools.some((t) => !t.name || !t.description)) {
  console.error('✗ At least one tool is missing a name or description. Not written.');
  process.exit(1);
}

// Sort at write time so the committed file has a stable order and the diff shows
// real surface changes rather than server-side ordering noise.
tools.sort((a, b) => a.name.localeCompare(b.name));

const snapshot = {
  fetchedFrom: fromFile ?? url,
  totalCount: tools.length,
  tools,
};

await mkdir(dirname(OUT_FILE), {recursive: true});
await writeFile(OUT_FILE, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');

const byScope = REQUIRED_SCOPES.map(
  (s) => `${s}=${tools.filter((t) => t.requiredScope === s).length}`,
).join(', ');

console.log(`  ${tools.length} tools — ${byScope}`);
console.log(`  → spec/mcp-catalog.json`);
console.log('\nNext: npm run gen-tool-catalog');
