---
sidebar_label: Authentication & API keys
sidebar_position: 2
description: Create, scope, rotate, and revoke DocJacket API keys. Choose read/draft/actions scopes, and optionally restrict a key to specific tools with granular scopes and an allow-list.
---

<!-- Canonical: https://help.docjacket.com/docs/api/authentication -->
<!-- Source: docs/api/authentication.mdx -->

# Authentication & API keys

Every request carries a bearer token — but *which* token depends on who is calling. There are three credentials, and they are not interchangeable:

- **Workspace API key** (`mcp_at_…`) — your own code acting in one workspace you administer. Minted in the app; this page is mostly about these.
- **OAuth token** — an app *other people* sign in to. Each user authorizes their own account; your app never holds a key. See [Apps that connect many accounts](#apps-that-connect-many-accounts) below.
- **Partner key** (`rsk_…`) — white-label partners provisioning workspaces and seats. It **cannot read deal data** — see [Partners](#partners).

:::tip Building an app your customers sign in to?
Stop before you mint anything. A workspace key per customer doesn't scale and makes you the custodian of their credentials — jump straight to [Apps that connect many accounts](#apps-that-connect-many-accounts).
:::

A workspace key is sent as:

```
Authorization: Bearer mcp_at_YOUR_KEY
```

It's tied to a single workspace, and the same key works for both the REST API and [AI Access](/docs/ai-access).

## Create a key

1. In DocJacket, go to **Settings → Advanced → API & AI Access** and open the **API keys** tab (Owner or Admin role required).
2. Click **New API key**, give it a name (e.g. "Back-office sync"), and choose its scopes.
3. Copy the key — **it's shown exactly once.** DocJacket stores only a one-way hash, so it can't be shown again. If you lose it, create a new one.

<div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', margin: '1.5rem 0' }}>
  <iframe
    src="https://app.supademo.com/embed/cms3vb8j600jczh0jfn0wwj4w"
    title="Creating a DocJacket API key — step-by-step walkthrough"
    allow="fullscreen"
    allowFullScreen
    loading="lazy"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, borderRadius: 8 }}
  />
</div>

## Scopes

Scopes are tiers — each includes progressively more power. Grant the minimum a key needs.

| Scope | Grants |
|---|---|
| `read` | All GET endpoints — transactions, contacts, tasks, key dates, documents, and more |
| `draft` | Low-risk writes — complete a task, log activity, apply a checklist, add key dates |
| `actions` | Side-effect writes — create contacts, upload & extract documents, send emails, manage disclosure packages |

You can change a key's scopes at any time from **Settings → API & AI Access → Edit scopes** — the key keeps working with the new grant, and the change is recorded in the [activity log](/docs/ai-access/permissions). Every change is auditable.

## Advanced restrictions (optional)

Under **Advanced restrictions** when creating or editing a key, you can narrow it further. Both are *opt-in* — leave them empty to keep the full grant from the scopes above.

- **Granular scopes** — restrict a key to specific capabilities (e.g. `key_dates:propose`, `reminders:create`) instead of the whole tier.
- **Tool allow-list** — restrict a key to an explicit list of operations. The key can call *only* those, and nothing else the scopes would otherwise permit.

The available granular scopes and the full tool list come from the tool catalog:

```bash
curl https://api.docjacket.com/api/v1/catalog \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"
```

This is how you build a least-privilege key — e.g. a read key limited to just `get_transaction` and `get_upcoming_key_dates`.

## Rotate & revoke

- **Rotate:** create a new key, update your integration, then revoke the old one.
- **Revoke:** **Settings → API & AI Access → Revoke.** Access stops immediately and can't be undone.

## See a key's usage

Check what a key has been doing — call volume, a daily breakdown, top operations, and error rate over the last N days (default 30):

```bash
curl "https://api.docjacket.com/api/v1/usage?days=30" \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"
```

For a full audit trail of every call (across all keys), see **Settings → API & AI Access → Activity log**.

## Apps that connect many accounts

Everything above assumes you hold the key for an account you control. If you're building an app that connects *your customers'* DocJacket accounts — a mobile app, a portal, a CRM integration you sell — minting a key per customer by hand doesn't scale, and it puts you in the business of storing their credentials.

Use OAuth instead. Your app registers once; each user signs in and authorizes their own account; you receive an access token scoped to that account. Same operations, same `read` / `draft` / `actions` scopes, and the user can disconnect you at any time without anyone rotating a key.

The tokens work on the REST API exactly as an `mcp_at_` key does — put them in the same `Authorization: Bearer …` header. Your developer's starting list:

1. **Discover, don't hardcode:** endpoints come from `https://app.docjacket.com/.well-known/oauth-authorization-server`.
2. **Register once** at `/oauth/register` (standard dynamic client registration; authorization code + PKCE, public client — no secret).
3. **Request scopes** `read draft actions` at sign-in; access tokens last 1 hour, refresh tokens 90 days.
4. **Revoke on logout** at `/oauth/revoke`, and key your storage on the token's `org_id` claim — that's which workspace the user belongs to.

The full flow, including registration, PKCE, refresh rotation, and revocation, is documented in [How OAuth works](/docs/ai-access/oauth).

Two things worth knowing before you build:

- **Refresh tokens rotate.** Every refresh returns a new one and retires the old. Presenting a spent refresh token is treated as a stolen-credential replay and disconnects that user, so store the new token before you use it and never retry a failed refresh with the old one.
- **A token can stop working before it expires.** We re-check the user's membership on every call, so if they're removed from the organization access ends immediately. Treat a `401` as "this account needs reconnecting", not as a transient error to retry.

## Partners

White-label partners authenticate with a separate reseller key (`rsk_…`) that spans every organization in their book of business — see the [Partner API](./reseller.mdx).

Mint one yourself in the partner console under **API keys**. It's shown once and stored as a hash, so give each system its own key and revoke them independently. A partner key never reads deal data — to act inside a customer's account, use an organization key or an OAuth token for that account.
