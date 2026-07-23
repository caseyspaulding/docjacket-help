---
title: Developer API
sidebar_label: Overview
sidebar_position: 1
description: Build on DocJacket with the public REST API — read and act on transactions, contacts, tasks, key dates, and more from your own systems. Live reference at api.docjacket.com/reference.
---

<!-- Canonical: https://help.docjacket.com/docs/api -->
<!-- Source: docs/api/index.mdx -->

# Developer API

The DocJacket API lets your own systems — CRMs, dashboards, back-office tools, scripts, and custom automations — read and act on your transactions, contacts, tasks, key dates, documents, and disclosures.

Everything lives under one base URL and one credential:

- **Base URL:** `https://api.docjacket.com`
- **Auth:** an API key sent as a bearer token — `Authorization: Bearer mcp_at_…`

**Live reference:** [api.docjacket.com/reference](https://api.docjacket.com/reference) — generated from the deployed API, so it never drifts. The machine-readable spec is at [api.docjacket.com/openapi.json](https://api.docjacket.com/openapi.json) (point Postman, an SDK generator, or an AI agent at it).

## One credential, two doorways

The same `mcp_at_` key powers both the REST API (this section) and [AI Access](/docs/ai-access) — connecting AI assistants like Claude and ChatGPT over MCP. Use the **API** when *your code* calls DocJacket; use **AI Access** when *an AI assistant* does. Same permissions model, same audit trail.

## Your first call

Create a key (see [Authentication & API keys](./authentication.mdx)), then verify it and discover what it can do:

```bash
# Does my key work? Echoes your org + granted scopes.
curl https://api.docjacket.com/api/v1/health \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# What can this key call? Every operation with a `callable` flag per your scopes.
curl https://api.docjacket.com/api/v1/catalog \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"
```

`/catalog` is the quickest way to see the current surface — it lists every operation, its method and path, the scope it needs, and whether *your* key can call it. Once your key is working, `GET /api/v1/usage` reports your call volume, top operations, and error rate.

Prefer to read the whole surface at once? **[All operations](./reference.mdx)** lists every endpoint grouped by resource, with method, path, and required scope.

## What you can do

- **Read** transactions, contacts, tasks, key dates, documents, checklists, contingencies, forms, disclosures, and email templates.
- **Act** — complete tasks, apply checklists, update key dates, create contacts, upload & extract documents, send client updates and document requests, manage disclosure packages.
- **Get notified** — subscribe to [webhooks](./webhooks.mdx) so DocJacket pushes events to you instead of you polling.
- **See your usage** — `GET /api/v1/usage` returns your key's call volume, daily breakdown, top operations, and error rate.
- **Provision at scale** — white-label partners use a [reseller key](./reseller.mdx) to manage organizations across their book of business.

## In this section

- **[Authentication & API keys](./authentication.mdx)** — create, scope, rotate, and revoke keys.
- **[Making requests](./making-requests.mdx)** — conventions, errors, rate limits, and recipes.
- **[All operations](./reference.mdx)** — every endpoint, grouped by resource, with method, path, and required scope.
- **[Webhooks](./webhooks.mdx)** — subscribe to events and verify signatures.
- **[Partner API](./reseller.mdx)** — provisioning and read access for resellers.
- **[Versioning & changes](./versioning.mdx)** — how the API evolves without breaking you.
