#!/usr/bin/env node
// Emits static/help-corpus.json — an array of { path, url, title, markdown } for
// every published docs page. Consumed by the DocJacket app's Help Chat assistant:
// SyncHelpDocsJob fetches https://help.docjacket.com/help-corpus.json, cleans each
// page, and answers from the whole corpus (the help library is small enough to
// load in full rather than retrieve). Mirrors the walk/slug/strip conventions of
// mirror-docs-md.mjs and regen-llms-full.mjs.
//
// Usage: node scripts/build-help-corpus.mjs

import {readdir, readFile, writeFile, stat} from 'node:fs/promises';
import {join, dirname, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const DOCS_DIR = join(REPO_ROOT, 'docs');
const OUT_FILE = join(REPO_ROOT, 'static', 'help-corpus.json');
const SITE = 'https://help.docjacket.com';

function splitFrontmatter(raw) {
  if (!raw.startsWith('---\n')) return {data: {}, body: raw};
  const end = raw.indexOf('\n---', 4);
  if (end === -1) return {data: {}, body: raw};
  const fmText = raw.slice(4, end);
  const body = raw.slice(end + 4).replace(/^\n+/, '');
  const data = {};
  for (const line of fmText.split('\n')) {
    const m = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*):\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
    data[m[1]] = val;
  }
  return {data, body};
}

// Strip MDX-specific syntax so the corpus is plain markdown. (DocJacket also
// cleans defensively, but emitting clean keeps the bundle human-readable.)
function stripMdx(body) {
  let out = body;
  out = out.replace(/<head>[\s\S]*?<\/head>/gi, '');
  out = out.replace(/^import\s.+?;?\s*$/gm, '');
  out = out.replace(/^export\s.+?;?\s*$/gm, '');
  out = out.replace(/<([A-Z][A-Za-z0-9]*)([^>]*)\/>/g, '');
  out = out.replace(/<([A-Z][A-Za-z0-9]*)([^>]*)>([\s\S]*?)<\/\1>/g, (_m, _t, _a, inner) => inner);
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}

function firstH1(body) {
  const m = body.match(/^#\s+(.+?)\s*$/m);
  return m ? m[1].trim() : null;
}

async function isDir(p) {
  try { return (await stat(p)).isDirectory(); } catch { return false; }
}

async function* walk(dir) {
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    if (await isDir(path)) {
      yield* walk(path);
    } else if (/\.(md|mdx)$/.test(name) && name !== '_category_.json') {
      yield path;
    }
  }
}

// docs/foo/bar/index.(md|mdx) -> slug "foo/bar"; docs/foo/baz.(md|mdx) -> "foo/baz"
function slugFor(srcPath) {
  const rel = relative(DOCS_DIR, srcPath).replace(/\\/g, '/');
  const noExt = rel.replace(/\.(md|mdx)$/, '');
  return noExt.endsWith('/index') ? noExt.slice(0, -'/index'.length) : noExt;
}

async function main() {
  const entries = [];
  for await (const src of walk(DOCS_DIR)) {
    const raw = await readFile(src, 'utf8');
    const {data, body} = splitFrontmatter(raw);
    const markdown = stripMdx(body);
    if (!markdown) continue;

    const slug = slugFor(src);
    const title = firstH1(body) || data.sidebar_label || data.title || slug.split('/').pop();

    entries.push({
      path: slug,
      url: `${SITE}/docs/${slug}`,
      title,
      markdown,
    });
  }

  entries.sort((a, b) => a.path.localeCompare(b.path));
  await writeFile(OUT_FILE, JSON.stringify(entries), 'utf8');

  const tokens = Math.round(entries.reduce((n, e) => n + e.markdown.length, 0) / 4);
  console.log(`[build-help-corpus] wrote ${entries.length} pages (~${tokens} tokens) to ${relative(REPO_ROOT, OUT_FILE)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
