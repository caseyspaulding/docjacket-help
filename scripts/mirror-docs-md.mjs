#!/usr/bin/env node
// Mirrors every docs/*.mdx page into static/docs/<same-slug>.md so LLMs
// and answer engines can fetch a plain-markdown version of any help page
// at a predictable URL. Example:
//
//   docs/getting-started/index.mdx       -> static/docs/getting-started.md
//   docs/getting-started/account.mdx     -> static/docs/getting-started/account.md
//   docs/mcp/claude.mdx                  -> static/docs/mcp/claude.md
//
// The output keeps the original frontmatter (title/description/keywords/
// sidebar_position) so an LLM that fetches one of these gets the same
// metadata the rendered page had. MDX-specific syntax (ESM imports/
// exports, JSX components, inline <head> blocks) is stripped.
//
// Usage: node scripts/mirror-docs-md.mjs

import {readdir, readFile, writeFile, mkdir, stat, unlink, rmdir} from 'node:fs/promises';
import {join, dirname, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const DOCS_DIR = join(REPO_ROOT, 'docs');
const OUT_DIR = join(REPO_ROOT, 'static', 'docs');

const SITE = 'https://help.docjacket.com';

// Stamped into every mirror, and the sole thing prune() will delete on. Keep it
// in sync with the sourceHint below — a mismatch makes prune a silent no-op.
const SOURCE_MARKER = '<!-- Source: docs/';

function stripMdx(body) {
  let out = body;
  out = out.replace(/<head>[\s\S]*?<\/head>/gi, '');
  out = out.replace(/^import\s.+?;?\s*$/gm, '');
  out = out.replace(/^export\s.+?;?\s*$/gm, '');
  out = out.replace(/<([A-Z][A-Za-z0-9]*)([^>]*)\/>/g, '');
  out = out.replace(
    /<([A-Z][A-Za-z0-9]*)([^>]*)>([\s\S]*?)<\/\1>/g,
    (_m, _tag, _attrs, inner) => inner,
  );
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}

function splitFrontmatter(raw) {
  if (!raw.startsWith('---\n')) return {fm: '', body: raw};
  const end = raw.indexOf('\n---', 4);
  if (end === -1) return {fm: '', body: raw};
  const fm = raw.slice(0, end + 4);
  const body = raw.slice(end + 4).replace(/^\n+/, '');
  return {fm, body};
}

async function isDir(p) {
  try {
    return (await stat(p)).isDirectory();
  } catch {
    return false;
  }
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

// Map docs/<…>/<file>.(md|mdx) to the same URL Docusaurus emits:
//   foo/bar/index.(md|mdx) -> /docs/foo/bar    (-> static/docs/foo/bar.md)
//   foo/bar/baz.(md|mdx)   -> /docs/foo/bar/baz (-> static/docs/foo/bar/baz.md)
function outputPath(srcPath) {
  const rel = relative(DOCS_DIR, srcPath).replace(/\\/g, '/');
  const noExt = rel.replace(/\.(md|mdx)$/, '');
  const slug = noExt.endsWith('/index') ? noExt.slice(0, -'/index'.length) : noExt;
  return join(OUT_DIR, `${slug}.md`);
}

function canonicalUrl(srcPath) {
  const rel = relative(DOCS_DIR, srcPath).replace(/\\/g, '/');
  const noExt = rel.replace(/\.(md|mdx)$/, '');
  const slug = noExt.endsWith('/index') ? noExt.slice(0, -'/index'.length) : noExt;
  return `${SITE}/docs/${slug}`;
}

// Delete mirrors whose source page no longer exists.
//
// This script only ever wrote, so deleting a docs page left its .md mirror
// serving forever. Docusaurus redirects the HTML route, but the mirror is a
// static file — nothing redirects it, and it keeps answering with whatever the
// page said the day it was removed. When docs/integrations/{rest-api,webhooks}
// moved into the Developer API section (#72), both mirrors stayed behind, and
// the rest-api one went on telling readers to mint keys under a menu that had
// been renamed away. That surfaced as a partner support thread on 2026-08-07.
//
// Deletes only files this script provably wrote — the SOURCE_MARKER it stamps
// into every mirror. Anything hand-placed under static/docs/ has no marker and
// is reported rather than removed, so a future non-generated file here cannot
// be silently eaten by a prebuild.
async function prune(written) {
  let pruned = 0;
  const foreign = [];

  for await (const path of walk(OUT_DIR)) {
    if (written.has(path)) continue;
    const raw = await readFile(path, 'utf8').catch(() => '');
    if (!raw.includes(SOURCE_MARKER)) {
      foreign.push(relative(REPO_ROOT, path));
      continue;
    }
    await unlink(path);
    pruned++;
  }

  // Drop directories the prune emptied, innermost first, so a removed section
  // does not leave a bare folder behind. rmdir on a non-empty directory throws
  // and is swallowed, which is the intent — only genuinely empty ones go.
  const dirs = [];
  for await (const path of walk(OUT_DIR)) dirs.push(dirname(path));
  for (const dir of [...new Set(dirs)].sort((a, b) => b.length - a.length)) {
    if (dir !== OUT_DIR) await rmdir(dir).catch(() => {});
  }

  if (foreign.length)
    console.warn(`[mirror-docs-md] left ${foreign.length} unrecognized file(s) in place: ${foreign.join(', ')}`);
  return pruned;
}

async function main() {
  let count = 0;
  const written = new Set();
  for await (const src of walk(DOCS_DIR)) {
    const raw = await readFile(src, 'utf8');
    const {fm, body} = splitFrontmatter(raw);
    const cleaned = stripMdx(body);
    if (!cleaned) continue;

    const url = canonicalUrl(src);
    const sourceHint = `<!-- Canonical: ${url} -->\n${SOURCE_MARKER}${relative(DOCS_DIR, src).replace(/\\/g, '/')} -->\n\n`;

    const out = (fm ? fm + '\n\n' : '') + sourceHint + cleaned + '\n';
    const dst = outputPath(src);
    await mkdir(dirname(dst), {recursive: true});
    await writeFile(dst, out, 'utf8');
    written.add(dst);
    count++;
  }

  const pruned = await prune(written);
  console.log(
    `[mirror-docs-md] wrote ${count} .md files under ${relative(REPO_ROOT, OUT_DIR)}/` +
    (pruned ? `, pruned ${pruned} orphaned mirror(s)` : ''),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
