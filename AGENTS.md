# AGENTS.md

This file provides guidance to coding agents when working in this repository.

## Project Overview

DocJacket Help Center is a Docusaurus 3.8 static documentation site (TypeScript, React 19, MDX) for DocJacket, an AI-powered real estate transaction coordination platform. Production is hosted on Cloudflare at `https://help.docjacket.com`.

## Related Repos

- Help site: `/Users/casey/RiderProjects/docjacket-help`
- Product app, API, dashboard, and sign-in: `/Users/casey/RiderProjects/docjacket-v3`
- Marketing site: `/Users/casey/RiderProjects/docjacket-marketing`

When help docs describe product behavior, audit against the current `docjacket-v3` UI/source before editing. Treat `docjacket-v3` as the product source of truth when the docs and app disagree.

## Commands

- `npm start` - dev server with hot reload
- `npm run prebuild` - regenerate `static/llms-full.txt` and mirrored markdown docs
- `npm run build` - production Docusaurus build; npm lifecycle also runs `prebuild` and `postbuild`
- `npm run typecheck` - TypeScript type checking
- `npm run clear` - clear Docusaurus cache
- `npm run serve` - serve the production build locally
- `npm run deploy` - production build and `wrangler deploy`

## Required Validation

Run these before merging docs changes:

```bash
npm run prebuild
git diff --exit-code -- static/llms-full.txt static/docs
npm run typecheck
git diff --check
npm exec docusaurus build
```

For product-facing docs, also run a focused stale-terminology scan over the changed files.

## Deployment

Production hosting is Cloudflare Workers/static assets configured by `wrangler.jsonc`.

GitHub Actions validate the site; they do not deploy unless a workflow explicitly runs `wrangler deploy`.

After merge, verify production with:

```bash
curl -fsSL https://help.docjacket.com/build-info.json
curl -I -L https://help.docjacket.com/<changed-path>
curl -fsSL https://help.docjacket.com/<changed-path>.md
```

See `DEPLOYMENT.md` for the full deployment contract, production verification steps, and Cloudflare token guidance.

## Architecture

- `docusaurus.config.ts` - site config
- `sidebars.ts` - auto-generated `helpSidebar` from `docs/`
- `docs/` - authored help articles grouped by category
- `static/docs/` - generated markdown mirrors for LLMs and answer engines
- `static/llms-full.txt` - generated full-docs text bundle
- `scripts/write-build-info.mjs` - writes `build/build-info.json` after production build
- `src/pages/index.tsx` - help center homepage
- `src/components/HelpCategories/` - homepage category cards
- `src/css/custom.css` - DocJacket app color palette and theme overrides

## Conventions

- `onBrokenLinks: 'throw'` means broken doc links fail the build.
- Sidebar ordering is controlled by `_category_.json` and frontmatter positions.
- Blog is disabled; this is a help center, not a content site.
- Colors should match the DocJacket app design system, not the marketing site.
- Do not commit Cloudflare credentials or user-specific local config.
