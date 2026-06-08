# DocJacket Help Center

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. Production is served from Cloudflare at `https://help.docjacket.com`.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command regenerates LLM/static markdown artifacts, generates the Docusaurus production build into `build/`, writes `build/build-info.json`, and submits IndexNow updates.

## Deployment

The site deploys to Cloudflare through Wrangler:

```bash
npm run deploy
```

See `DEPLOYMENT.md` for the full deploy contract, production verification steps, and Cloudflare token guidance.
