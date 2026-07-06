#!/usr/bin/env node
// Regenerates static/llms-full.txt by walking docs/ in sidebar order,
// stripping frontmatter and MDX-specific syntax, and concatenating the
// markdown content into a single file consumable by LLMs / answer engines.
//
// Usage: node scripts/regen-llms-full.mjs

import {readdir, readFile, writeFile, stat} from 'node:fs/promises';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const DOCS_DIR = join(REPO_ROOT, 'docs');
const OUT_FILE = join(REPO_ROOT, 'static', 'llms-full.txt');

const HEADER = `# DocJacket Help Center — Full Documentation

> Complete help documentation for DocJacket, the AI-powered transaction coordination platform.
> URL: https://help.docjacket.com
> Product URL: https://www.docjacket.com

`;

function parseFrontMatter(raw) {
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
    if (/^-?\d+$/.test(val)) val = Number(val);
    data[m[1]] = val;
  }
  return {data, body};
}

// Strip MDX-specific syntax so the output is plain markdown.
function stripMdx(body) {
  let out = body;
  // Remove <head>...</head> blocks (used for inline JSON-LD)
  out = out.replace(/<head>[\s\S]*?<\/head>/gi, '');
  // Remove ESM imports at the top
  out = out.replace(/^import\s.+?;?\s*$/gm, '');
  // Remove ESM exports
  out = out.replace(/^export\s.+?;?\s*$/gm, '');
  // Remove self-closing JSX components like <Component ... />
  out = out.replace(/<([A-Z][A-Za-z0-9]*)([^>]*)\/>/g, '');
  // Remove paired JSX component blocks (best effort — non-nested)
  out = out.replace(
    /<([A-Z][A-Za-z0-9]*)([^>]*)>([\s\S]*?)<\/\1>/g,
    (_m, _tag, _attrs, inner) => inner,
  );
  // Collapse 3+ blank lines into 2
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}

async function readJsonOptional(path) {
  try {
    const raw = await readFile(path, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function isDir(path) {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}

async function listCategories() {
  const entries = await readdir(DOCS_DIR);
  const cats = [];
  for (const name of entries) {
    const path = join(DOCS_DIR, name);
    if (!(await isDir(path))) continue;
    const meta = await readJsonOptional(join(path, '_category_.json'));
    cats.push({
      name,
      path,
      label: meta?.label ?? name,
      position: meta?.position ?? 999,
    });
  }
  cats.sort((a, b) => a.position - b.position || a.name.localeCompare(b.name));
  return cats;
}

async function listDocs(catPath) {
  const entries = await readdir(catPath);
  const docs = [];
  for (const name of entries) {
    if (!/\.(md|mdx)$/.test(name)) continue;
    const path = join(catPath, name);
    const raw = await readFile(path, 'utf8');
    const {data, body} = parseFrontMatter(raw);
    const isIndex = /^index\.(md|mdx)$/.test(name);
    docs.push({
      name,
      path,
      data,
      body,
      isIndex,
      position:
        typeof data.sidebar_position === 'number'
          ? data.sidebar_position
          : isIndex
            ? 0
            : 999,
    });
  }
  docs.sort(
    (a, b) => a.position - b.position || a.name.localeCompare(b.name),
  );
  return docs;
}

async function main() {
  const cats = await listCategories();
  const parts = [HEADER];

  for (const cat of cats) {
    parts.push(`---\n\n## ${cat.label}\n\n`);
    const docs = await listDocs(cat.path);
    const sections = [];
    for (const doc of docs) {
      const cleaned = stripMdx(doc.body);
      if (!cleaned) continue;
      sections.push(cleaned);
    }
    parts.push(sections.join('\n\n---\n\n'));
    parts.push('\n\n');
  }

  const out = parts.join('').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
  await writeFile(OUT_FILE, out, 'utf8');
  console.log(`Wrote ${OUT_FILE} (${out.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
