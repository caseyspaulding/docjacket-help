---
sidebar_label: Making requests
sidebar_position: 3
description: DocJacket API conventions — base URL, authentication, the error envelope, rate limits, pagination, and common curl recipes.
---

<!-- Canonical: https://help.docjacket.com/docs/api/making-requests -->
<!-- Source: docs/api/making-requests.mdx -->

# Making requests

## Basics

- **Base URL:** `https://api.docjacket.com`, everything under `/api/v1`.
- **Auth:** `Authorization: Bearer mcp_at_YOUR_KEY` on every request.
- **Content type:** send `Content-Type: application/json` on requests with a body.
- **Timestamps:** ISO 8601, UTC.

## Discover the surface

`GET /api/v1/catalog` lists every operation with its method, path, required scope, and a `callable` flag for your key. It's the machine-readable index of what's available — and the [live reference](https://api.docjacket.com/reference) documents each one in detail.

## Common recipes

```bash
# List active transactions
curl "https://api.docjacket.com/api/v1/transactions?status=Active" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# Pull one transaction with parties, prices, and key dates
curl "https://api.docjacket.com/api/v1/transactions/TRANSACTION_ID" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# Key dates coming up in the next 14 days, across all deals
curl "https://api.docjacket.com/api/v1/key-dates/upcoming?days=14" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# Find a deal by property address
curl "https://api.docjacket.com/api/v1/transactions/resolve?property=123%20Main%20St" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# Complete a task (requires the `draft` scope)
curl -X POST "https://api.docjacket.com/api/v1/tasks/TASK_ID/complete" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"
```

## Errors

Every error uses one envelope:

```json
{ "error": { "code": "not_found", "message": "Transaction not found." } }
```

Validation errors add a `fields` object. Common codes:

| Status | `code` | Meaning |
|---|---|---|
| 401 | `unauthorized` | Missing, malformed, or revoked key |
| 403 | `insufficient_scope` | Your key lacks the scope this operation needs |
| 404 | `not_found` | Missing **or** belongs to another organization (see below) |
| 409 | `conflict` | State conflict — e.g. completing an already-resolved task |
| 422 | `validation_error` | Bad input; see `message` and `fields` |
| 429 | `rate_limited` | Too many requests — see [Rate limits](#rate-limits) |

**Not yours = not found.** A resource ID from another organization returns `404`, never `403`, so the API never discloses whether an ID exists outside your org.

## Rate limits

Limits are per key, per minute, in a fixed window:

- **300 reads** (GET)
- **60 writes** (POST / PUT / PATCH / DELETE)

Exceeding a bucket returns `429` with a `Retry-After: 60` header and the standard error envelope (`code: "rate_limited"`). Wait for the window to reset, then retry. Reads and writes are limited separately, so heavy reads won't throttle your writes.

## Idempotency

Side-effecting writes (email sends, disclosure invites, document uploads) accept an `Idempotency-Key` header. Send the same key on a retry and DocJacket returns the original result instead of performing the action twice — safe against network retries.

## Pagination

List endpoints accept `page` and `pageSize` and return `page`, `pageSize`, `totalCount`, and `totalPages` alongside `data`. Default `pageSize` is 25; the max is 100.

## Push instead of poll

For change notifications, don't poll — subscribe to [webhooks](./webhooks.mdx) and let DocJacket push events to you.
