---
sidebar_label: Partner API
sidebar_position: 5
description: White-label partners provision and manage customer organizations across their book of business with a reseller API key — including read-only entitlement and activity summaries.
---

<!-- Canonical: https://help.docjacket.com/docs/api/reseller -->
<!-- Source: docs/api/reseller.mdx -->

# Partner API

White-label partners get a separate **reseller key** (`rsk_…`) that spans every organization in their book of business — for provisioning new tenants and reading their state. It's distinct from the per-organization `mcp_at_` key.

Ask us to set you up as a partner to get a reseller key.

## Authentication

```
Authorization: Bearer rsk_YOUR_RESELLER_KEY
```

Reseller keys carry their own scopes: `read` (list/read your organizations), `provision` (create organizations), and `manage` (seats). Every `/orgs/{orgId}` route is checked for ownership — an organization that isn't yours returns `404`.

## Provisioning

```bash
# List your customer organizations
curl https://api.docjacket.com/api/v1/orgs \
  -H "Authorization: Bearer rsk_YOUR_RESELLER_KEY"

# Provision a new organization (requires the `provision` scope)
curl -X POST https://api.docjacket.com/api/v1/orgs \
  -H "Authorization: Bearer rsk_YOUR_RESELLER_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "name": "Summit Property Advisors",
        "owner": { "email": "owner@example.com", "first_name": "Dana", "last_name": "Reyes" } }'
```

| Method | Path | Scope | Purpose |
|---|---|---|---|
| GET | `/api/v1/orgs` | `read` | List your organizations |
| GET | `/api/v1/orgs/{orgId}` | `read` | Get one organization |
| POST | `/api/v1/orgs` | `provision` | Provision a new organization |
| POST | `/api/v1/orgs/{orgId}/users` | `manage` | Invite a seat (returns a join link) |
| DELETE | `/api/v1/orgs/{orgId}/users/{userId}` | `manage` | Remove a seat |

## Read entitlements & activity

Build a book-of-business dashboard from read-only projections — no billing writes.

```bash
# Plan, seats, and AI fair-use pool for one organization
curl https://api.docjacket.com/api/v1/orgs/ORG_ID/entitlements \
  -H "Authorization: Bearer rsk_YOUR_RESELLER_KEY"

# Activity summary — active deals, tasks due, last activity
curl https://api.docjacket.com/api/v1/orgs/ORG_ID/summary \
  -H "Authorization: Bearer rsk_YOUR_RESELLER_KEY"
```

- **`/entitlements`** — the organization's plan, tier, and limits, plus partner-level seat counts (including `includedSeats`) and AI fair-use pool usage.
- **`/summary`** — active transaction count, tasks overdue / due today / due this week, and the last-activity timestamp.

:::note Read-only
The Partner API never changes billing. Plan changes, rebilling toggles, and refunds are not exposed — those stay in your partner agreement and are applied manually.
:::

See the [reference](https://api.docjacket.com/reference) for full request/response schemas.
