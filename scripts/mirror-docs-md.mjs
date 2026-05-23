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

import {readdir, readFile, writeFile, mkdir, stat} from 'node:fs/promises';
import {join, dirname, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const DOCS_DIR = join(REPO_ROOT, 'docs');
const OUT_DIR = join(REPO_ROOT, 'static', 'docs');

const SITE = 'https://help.docjacket.com';

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

async function main() {
  let count = 0;
  for await (const src of walk(DOCS_DIR)) {
    const raw = await readFile(src, 'utf8');
    const {fm, body} = splitFrontmatter(raw);
    const cleaned = stripMdx(body);
    if (!cleaned) continue;

    const url = canonicalUrl(src);
    const sourceHint = `<!-- Canonical: ${url} -->\n<!-- Source: docs/${relative(DOCS_DIR, src).replace(/\\/g, '/')} -->\n\n`;

    const out = (fm ? fm + '\n\n' : '') + sourceHint + cleaned + '\n';
    const dst = outputPath(src);
    await mkdir(dirname(dst), {recursive: true});
    await writeFile(dst, out, 'utf8');
    count++;
  }
  console.log(`[mirror-docs-md] wrote ${count} .md files under ${relative(REPO_ROOT, OUT_DIR)}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
