# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DocJacket Help Center — a Docusaurus 3.8 static documentation site (TypeScript, React 19, MDX) for DocJacket, an AI-powered real estate transaction coordination platform. Hosted on Cloudflare at help.docjacket.com.

## Commands

- `npm start` — dev server with hot reload
- `npm run build` — production build to `build/`
- `npm run serve` — serve production build locally
- `npm run typecheck` — TypeScript type checking (runs `tsc`)
- `npm run clear` — clear Docusaurus cache (`.docusaurus/`)
- `npm run deploy` — production build and `wrangler deploy`

## Architecture

- **docusaurus.config.ts** — site config (title, navbar, footer, presets, theme)
- **sidebars.ts** — auto-generated `helpSidebar` from `docs/` folder structure
- **docs/** — help articles organized into 15 category folders, each with `_category_.json` for ordering
- **src/pages/index.tsx** — help center homepage with hero banner and category card grid
- **src/components/HelpCategories/** — category card grid component for the homepage
- **src/css/custom.css** — Infima theme overrides using DocJacket app color palette (#078DEE primary)
- **static/img/** — DocJacket logo SVGs (light + dark), favicon

## Docs Categories

Getting Started, Transactions, Documents, Contacts, Calendar & Deadlines, Tasks, Messages & Email, Templates, Workflows, AI Features, Client Portal, Integrations, Reports, Settings & Account, Billing & Plans

## Key Conventions

- `onBrokenLinks: 'throw'` — broken doc links fail the build
- Sidebar is auto-generated from filesystem; use `_category_.json` to control ordering
- Blog is disabled; this is a help center, not a content site
- Colors match the DocJacket app design system, not the marketing site
- Production hosting is Cloudflare Workers/static assets via `wrangler.jsonc`
- GitHub Actions validate the site; they do not deploy unless a workflow explicitly runs `wrangler deploy`
- See `DEPLOYMENT.md` before answering whether a docs change is deployed

## Related Repos

- App/API/dashboard/sign-in: `/Users/casey/RiderProjects/docjacket-v3`
- Marketing site: `/Users/casey/RiderProjects/docjacket-marketing`
