---
sidebar_label: REST API
sidebar_position: 6
description: Get started with the DocJacket REST API — mint an API key, make your first call, and explore the live reference at api.docjacket.com/reference.
---

<!-- Canonical: https://help.docjacket.com/docs/integrations/rest-api -->
<!-- Source: docs/integrations/rest-api.mdx -->

# DocJacket REST API

The DocJacket API lets you read and act on your transactions, contacts, tasks, and key dates from your own systems — CRMs, dashboards, back-office tools, or custom automations.

**Live API reference:** [api.docjacket.com/reference](https://api.docjacket.com/reference) — generated from the deployed API, so it never drifts. The machine-readable spec is at [api.docjacket.com/openapi.json](https://api.docjacket.com/openapi.json).

## Get an API key

1. In DocJacket, go to **Settings → AI & API Access** (Owner or Admin role required)
2. Click **Mint Token**, name it (e.g. "Back-office sync"), and pick scopes
3. Copy the key — **it's shown exactly once**. DocJacket stores only a hash.

Your key looks like `mcp_at_…` and is tied to your organization. The same key works for both the REST API and [AI assistants via MCP](/docs/ai-access) — one credential, two doorways.

### Scopes

| Scope | Grants |
|---|---|
| `read` | All GET endpoints — transactions, contacts, tasks, key dates |
| `draft` | Low-risk writes — complete a task, log activity, apply a checklist, add key dates |
| `actions` | Side-effect writes — create contacts, create email templates, delete tasks |

Start with `read` only and re-mint with more scopes when you need them. You can revoke a key at any time from the same settings page.

## Your first call

Verify the key and see what it can do:

```bash
# Does my key work?
curl https://api.docjacket.com/api/v1/health \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# What operations can this key call?
curl https://api.docjacket.com/api/v1/catalog \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"
```

`/catalog` returns every operation on the API with a `callable` flag per your key's scopes — it's the quickest way to see the current surface.

## Common recipes

```bash
# List active transactions
curl "https://api.docjacket.com/api/v1/transactions?status=Active" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# Key dates coming up in the next 14 days, across all deals
curl "https://api.docjacket.com/api/v1/key-dates/upcoming?days=14" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# Pull one transaction with parties, prices, and key dates
curl "https://api.docjacket.com/api/v1/transactions/TRANSACTION_ID" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# Complete a task (requires draft scope)
curl -X POST "https://api.docjacket.com/api/v1/tasks/TASK_ID/complete" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"
```

## Conventions

- **Errors** use one envelope: `{ "error": { "code", "message", "fields"? } }`
- **Not yours = not found**: a resource ID from another organization returns `404`, never `403`
- **Rate limit**: 300 requests/min per key — a `429` includes how long to wait
- **Additive by default**: responses may gain fields over time; ignore unknown fields
- **Timestamps** are ISO 8601 UTC

## Push instead of poll

Pair the API with [webhooks](/docs/integrations/webhooks) to get notified when transactions, documents, or tasks change, instead of polling.

## Resellers

White-label partners get a separate reseller key (`rsk_…`) that provisions organizations and users across their book of business. See the **DocJacket API** section of the [reference](https://api.docjacket.com/reference) for the provisioning endpoints, or contact us to get set up as a partner.
