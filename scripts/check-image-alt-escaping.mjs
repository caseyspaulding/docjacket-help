// Fails if any <img> alt/title in build/**/*.html is escaped twice
// (e.g. `&amp;#39;` instead of `&#x27;`). See src/remark/unescape-image-alt.mjs.
import {readdirSync, readFileSync} from 'node:fs';
import {join} from 'node:path';

const BUILD_DIR = 'build';
const DOUBLE = /&amp;(#\d+;|#x[0-9a-fA-F]+;|amp;|quot;|lt;|gt;|apos;)/;

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

let checked = 0;
const failures = [];
for (const file of htmlFiles(BUILD_DIR)) {
  const html = readFileSync(file, 'utf8');
  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    for (const m of tag.matchAll(/\b(alt|title)="([^"]*)"/g)) {
      if (m[1] === 'alt') checked++;
      if (DOUBLE.test(m[2])) failures.push(`${file}: ${m[1]}="${m[2]}"`);
    }
  }
}

console.log(`Checked ${checked} img alt attributes in ${BUILD_DIR}/**/*.html`);
if (failures.length) {
  console.error(`\n${failures.length} double-escaped img attribute(s):`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}
console.log('OK: no double-escaped img alt/title.');
