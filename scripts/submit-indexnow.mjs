#!/usr/bin/env node
// IndexNow build-time submission for help.docjacket.com.
//
// Reads the freshly built sitemap.xml and POSTs every URL to
// api.indexnow.org so Bing, Yandex, Naver, Seznam, and Yep learn about
// changes within seconds of deploy. Google does not consume IndexNow.
//
// Reuses the IndexNow key already in use on docjacket.com — the key file
// is mirrored at static/<key>.txt so this host can claim ownership.
//
// Gated to CI production builds only (Cloudflare Workers Builds sets
// CI=true and WORKERS_CI_BRANCH). Local `npm run build` skips silently
// unless you pass --force.

import {readFile, stat} from 'node:fs/promises';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const SITEMAP_PATH = join(REPO_ROOT, 'build', 'sitemap.xml');

const KEY = process.env.INDEXNOW_KEY ?? 'ebbc0815b79d406396b26c6f0c8f08b2';
const HOST = 'help.docjacket.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const force = process.argv.includes('--force');
const isCI = process.env.CI === 'true' || process.env.CI === '1';
const branch =
  process.env.WORKERS_CI_BRANCH ?? process.env.CF_PAGES_BRANCH ?? '';
const isProdBuild = isCI && (branch === '' || branch === 'main');

function log(msg) {
  console.log(`[indexnow] ${msg}`);
}

async function fileExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function readSitemapUrls() {
  if (!(await fileExists(SITEMAP_PATH))) {
    log(`no sitemap at ${SITEMAP_PATH} — skipping`);
    return [];
  }
  const xml = await readFile(SITEMAP_PATH, 'utf8');
  const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
  return Array.from(matches, (m) => m[1]);
}

async function submit(urls) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json; charset=utf-8'},
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`IndexNow ${res.status} ${res.statusText}: ${body}`);
  }
  log(`submitted ${urls.length} URLs (${res.status} ${res.statusText})`);
}

async function main() {
  if (!isProdBuild && !force) {
    log('not a production CI build — skipping (use --force to override)');
    return;
  }

  const urls = await readSitemapUrls();
  if (urls.length === 0) {
    log('no URLs to submit');
    return;
  }

  // Sanity: only submit URLs that match the configured host. Defends
  // against IndexNow's 422 "host mismatch" if the sitemap ever leaks an
  // external URL.
  const ours = urls.filter((u) => u.startsWith(`https://${HOST}/`));
  if (ours.length !== urls.length) {
    log(`filtered ${urls.length - ours.length} non-${HOST} URLs`);
  }
  if (ours.length === 0) return;

  try {
    await submit(ours);
  } catch (err) {
    // Never fail the build over IndexNow — Bing tolerance, not Google.
    log(`error: ${err.message}`);
  }
}

main();
