#!/usr/bin/env node
// Writes build/build-info.json after the Docusaurus build so production
// deployment checks can verify the live commit without scraping HTML.

import {mkdir, writeFile} from 'node:fs/promises';
import {execSync} from 'node:child_process';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const OUT_FILE = join(REPO_ROOT, 'build', 'build-info.json');

function fromGit(command) {
  try {
    return execSync(command, {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
}

const commit =
  process.env.WORKERS_CI_COMMIT_SHA ||
  process.env.CF_PAGES_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  fromGit('git rev-parse HEAD');

const branch =
  process.env.WORKERS_CI_BRANCH ||
  process.env.CF_PAGES_BRANCH ||
  process.env.GITHUB_REF_NAME ||
  fromGit('git branch --show-current');

const info = {
  repo: 'docjacket-help',
  site: 'https://help.docjacket.com',
  hosting: 'cloudflare-workers-assets',
  deploymentProvider: 'cloudflare',
  sourceOfTruthRepo: 'docjacket-v3',
  commit,
  shortCommit: commit ? commit.slice(0, 12) : null,
  branch,
  buildId: process.env.WORKERS_CI_BUILD_UUID || null,
  builtAt: new Date().toISOString(),
};

await mkdir(dirname(OUT_FILE), {recursive: true});
await writeFile(OUT_FILE, `${JSON.stringify(info, null, 2)}\n`, 'utf8');
console.log(`[write-build-info] wrote ${OUT_FILE}`);
