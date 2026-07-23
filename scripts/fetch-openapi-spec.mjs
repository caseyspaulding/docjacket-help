#!/usr/bin/env node
// Refreshes spec/dj-api.json — the committed copy of the DocJacket OpenAPI document
// that docusaurus-plugin-openapi-docs generates the API reference from.
//
// WHY A COMMITTED COPY rather than fetching at build time:
//   1. The Cloudflare Git-connected build would otherwise depend on api.docjacket.com
//      being reachable mid-deploy — an API outage would start failing DOCS builds.
//   2. Builds stay reproducible: the same commit always produces the same reference.
//   3. Public-contract changes show up as a reviewable diff in the PR that makes them,
//      which is exactly the signal you want when the API surface moves.
//
// The trade-off is staleness, so this is a deliberate, visible step:
//
//   npm run fetch-spec          # refresh from production
//   npm run gen-api-docs        # regenerate docs/api/reference/ from it
//
// Run both after any change to the public API surface, and commit the results.
//
// Usage: node scripts/fetch-openapi-spec.mjs [--url <url>]

import {writeFile, mkdir} from 'node:fs/promises';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const OUT_FILE = join(REPO_ROOT, 'spec', 'dj-api.json');

// The stable public alias. It 301s to /reference/dj-api.json, which is the live
// document MapOpenApi serves; the alias is the documented contract.
const DEFAULT_URL = 'https://api.docjacket.com/openapi.json';

const urlFlag = process.argv.indexOf('--url');
const url = urlFlag !== -1 ? process.argv[urlFlag + 1] : DEFAULT_URL;

const res = await fetch(url, {redirect: 'follow'});
if (!res.ok) {
  console.error(`✗ ${url} returned ${res.status} ${res.statusText}`);
  process.exit(1);
}

const spec = await res.json();

// Sanity-check before overwriting: a truncated or error-shaped response must not
// silently replace a good spec and quietly empty the published reference.
const pathCount = Object.keys(spec.paths ?? {}).length;
const opCount = Object.values(spec.paths ?? {}).reduce(
  (n, item) => n + Object.keys(item).length,
  0,
);
const tagCount = (spec.tags ?? []).length;

if (!spec.openapi || pathCount === 0 || opCount === 0) {
  console.error('✗ Response does not look like a populated OpenAPI document. Not written.');
  process.exit(1);
}

await mkdir(dirname(OUT_FILE), {recursive: true});
await writeFile(OUT_FILE, `${JSON.stringify(spec, null, 2)}\n`, 'utf8');

console.log(`✓ ${url}`);
console.log(`  OpenAPI ${spec.openapi} — ${opCount} operations, ${pathCount} paths, ${tagCount} tags`);
console.log(`  → spec/dj-api.json`);
console.log('\nNext: npm run gen-api-docs');
