# DocJacket Help Deployment

This file is the source of truth for agents and humans checking whether help-site changes are built, deployed, and live.

## Project Relationship

- `docjacket-help` is the public Help Center at `https://help.docjacket.com`.
- `docjacket-v3` is the product application, API, dashboard, and sign-in experience.
- Help docs should be audited against the current `docjacket-v3` UI and source before changing product-facing behavior descriptions.
- When the app and docs disagree, treat `docjacket-v3` as the product source of truth and update this repo to match it.

## Hosting

The help site is deployed on Cloudflare using the Worker/static-assets configuration in `wrangler.jsonc`.

Production URL:

```text
https://help.docjacket.com
```

This repo may have GitHub Actions for validation, but GitHub Actions are not the production deploy source unless a workflow explicitly runs `wrangler deploy`.

## Build Artifacts

`npm run build` runs the normal npm lifecycle:

1. `prebuild` regenerates `static/llms-full.txt` and mirrored markdown files under `static/docs/`.
2. `build` runs the Docusaurus production build.
3. `postbuild` writes `build/build-info.json` and submits IndexNow updates.

`build/build-info.json` is intentionally generated at build time so production can be checked without scraping rendered HTML. It includes the repo name, site URL, hosting provider, source commit, branch, and build timestamp.

## Required Validation

Run these checks before merging docs changes:

```bash
npm run prebuild
git diff --exit-code -- static/llms-full.txt static/docs
npm run typecheck
git diff --check
npm exec docusaurus build
```

For docs that mirror the live product, also do a focused stale-terminology scan against the changed pages.

## Production Verification

After a merge to `main`, verify production from the public site:

```bash
curl -fsSL https://help.docjacket.com/build-info.json
curl -I -L https://help.docjacket.com/docs/transactions/transaction-overview
curl -fsSL https://help.docjacket.com/docs/transactions/transaction-overview.md
```

Use the edited page URLs for the actual change. Confirm:

- The page returns `200`.
- Headers show Cloudflare serving the response.
- `build-info.json` contains the expected commit or merge commit.
- The live HTML or mirrored markdown includes the new wording.

If `build-info.json` is missing but the edited pages are live, production is deployed but the deployed build predates this deployment metadata addition.

## Cloudflare Token

Do not commit Cloudflare credentials.

For GitHub Actions or local non-interactive Wrangler checks, add a secret named:

```text
CLOUDFLARE_API_TOKEN
```

Use a Cloudflare API token scoped to this account/project for Workers operations. Wrangler reads the token from the `CLOUDFLARE_API_TOKEN` environment variable.

Cloudflare's [Workers GitHub Actions guidance](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/) recommends restricting the token to the account being deployed and not storing the token in the repository.

Useful checks when the token is available:

```bash
npm exec wrangler -- deployments list
npm exec wrangler -- deploy --dry-run
```

If CI should deploy instead of only validate, add a dedicated deployment workflow that runs `wrangler deploy` on `main` with `CLOUDFLARE_API_TOKEN` supplied from GitHub Secrets.
