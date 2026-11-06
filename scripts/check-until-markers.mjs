#!/usr/bin/env node
// Fails when a help sentence carries `<!-- until: docjacket-v3#N -->` and that
// docjacket-v3 issue has closed: the "can't do X yet" claim has expired.
// docjacket-v3 is private, so reading it needs DOCJACKET_V3_ISSUES_TOKEN.
import {readdir, readFile} from 'node:fs/promises';
import path from 'node:path';

const DOCS = 'docs';
const MARKER = /<!--\s*until:\s*docjacket-v3#(\d+)\s*-->/g;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, {withFileTypes: true})) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.mdx?$/.test(e.name)) out.push(p);
  }
  return out;
}

function sentenceBefore(line, index) {
  const before = line.slice(0, index).trim();
  const parts = before.split(/(?<=[.!?])\s+(?=[A-Z*"_])/);
  return (parts[parts.length - 1] || before).trim();
}

const found = [];
for (const file of (await walk(DOCS)).sort()) {
  const lines = (await readFile(file, 'utf8')).split('\n');
  lines.forEach((line, i) => {
    for (const m of line.matchAll(MARKER)) {
      found.push({file, line: i + 1, issue: m[1], sentence: sentenceBefore(line, m.index)});
    }
  });
}

if (found.length === 0) {
  console.log('until-marker check: no markers found.');
  process.exit(0);
}

const token = process.env.DOCJACKET_V3_ISSUES_TOKEN;
if (!token) {
  console.warn(`until-marker check skipped: DOCJACKET_V3_ISSUES_TOKEN not set (${found.length} marker(s) not verified)`);
  process.exit(0);
}

const state = new Map();
for (const issue of new Set(found.map((f) => f.issue))) {
  const res = await fetch(`https://api.github.com/repos/caseyspaulding/docjacket-v3/issues/${issue}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'docjacket-help-until-markers',
    },
  });
  if (res.status === 404) {
    console.error(`docjacket-v3#${issue}: issue not found — wrong number?`);
    state.set(issue, {error: true});
    continue;
  }
  if (!res.ok) {
    console.error(`docjacket-v3#${issue}: GitHub API returned ${res.status} ${res.statusText}`);
    state.set(issue, {error: true});
    continue;
  }
  state.set(issue, await res.json());
}

let failed = false;
let closedCount = 0;
for (const f of found) {
  const s = state.get(f.issue);
  if (s.error) {
    failed = true;
    console.error(`${f.file}:${f.line}  docjacket-v3#${f.issue} could not be checked`);
  } else if (s.state === 'closed') {
    failed = true;
    closedCount++;
    console.error(`${f.file}:${f.line}  docjacket-v3#${f.issue} closed ${(s.closed_at || '').slice(0, 10)}  "${f.sentence}"`);
  }
}
if (closedCount > 0) {
  console.error("\nThe feature this sentence says doesn't exist has shipped — rewrite the sentence with the real click path and remove the marker.");
}
if (!failed) console.log(`until-marker check: ${found.length} marker(s), all referenced issues open.`);
process.exit(failed ? 1 : 0);
