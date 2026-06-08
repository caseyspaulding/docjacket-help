---
sidebar_label: Permissions & scopes
sidebar_position: 10
description: How DocJacket's MCP scopes work — read-first access today, draft and action tiers, per-tool consent, and activity logging.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/permissions -->
<!-- Source: docs/ai-access/permissions.mdx -->

# Permissions & scopes

DocJacket's MCP server exposes three **scope tiers** and supports **per-tool toggles** inside the AI client. The current customer-facing surface is read-first; draft and action tools are enabled only for accounts with those rollout scopes.

## The three scopes

| Scope | What it covers | Approval flow |
|---|---|---|
| **`read`** | Search, lookup, list — `search_transactions`, `get_transaction`, `get_key_dates`, `get_open_tasks`, `get_contacts`, `list_open_contingencies`, `get_upcoming_key_dates`, `get_next_required_actions`, `mcp_catalog`, `mcp_health_check` | Auto-approved per conversation in most clients |
| **`draft`** | Permission-gated rollout tools for preparing messages, suggestions, or summaries | Confirm in chat before each enabled draft call |
| **`actions`** | Permission-gated rollout tools for sending communications or creating/updating records | Confirm in chat before each enabled action call |

When you connect an assistant, the available scopes depend on the current rollout state for your account. Most users should start with `read`.

## The conversation is the approval gate

When draft or action tools are enabled, supported MCP clients use a **confirm-then-execute** UX for write tools:

1. You ask the assistant to do something.
2. The assistant proposes the action in chat — what tool, what arguments, against what data.
3. You confirm or redirect.
4. The assistant fires the tool only after you say yes.

DocJacket's server does not run a separate approval queue. We retired the "Pending Review" tray in May 2026 — the chat already gates every write, so a second approval inside DocJacket was just duplicate work.

Read the [retirement spec](https://github.com/caseyspaulding/docjacket-v3/blob/main/docs/specs/REMOVE-PREPARED-WORK.md) for the full rationale.

## Per-tool toggles (client-side)

Beyond the three scopes, every AI client lets you toggle individual tools off:

- **Claude.ai / Claude Desktop:** Settings → Connectors → DocJacket → click any tool to toggle. Tools default to **Needs approval** for the first call; you can switch to auto-allow per-tool.
- **ChatGPT:** Settings → Connectors → DocJacket → toggle individual tools. Same approval-first default.
- **Codex CLI:** Configure per-tool overrides in `~/.codex/connectors.json` or use `codex policy` to set defaults.

DocJacket enforces the scope tier at the server. The per-tool toggle is enforced by the AI client. Both have to allow a tool for it to run.

## Read-only by default

The safest pattern — and what we recommend for first-time users — is to consent to `read` only at the DocJacket consent screen. Your assistant can search, look up, and summarize without ever being able to send an email or create a task.

If your account has draft or action scopes enabled later, you can re-consent or mint a new token with those scopes. You can revoke access any time.

## Audit log

Every MCP tool call lands in your Activity Log within seconds:

- **DocJacket → Settings → AI Access → Activity Log**

Each row shows:

- The connected client (Claude / ChatGPT / Codex / Cowork / Gemini)
- The user who triggered it (you, or any other user in your org)
- The tool name (`search_transactions`, `get_transaction`, etc.)
- The arguments passed
- The outcome (success / error)
- Latency in milliseconds
- A timestamp

Filter by client to see what one AI surface has been doing. Filter by tool to spot unusual activity. The log is per-organization and immutable.

## Revoking

**Settings → AI Access → Connected Clients** (for OAuth) **or** Personal Access Tokens (for bearer).

Click **Revoke** on any row. The next tool call from that client returns HTTP 401. The user will either fall back to re-consent (if they want to reconnect) or fail gracefully.

There's no propagation delay. Revocation lands on the next request.

## What an assistant cannot do

Even with `actions` scope granted and a tool toggled on, an assistant cannot:

- See data from a different organization than the one you consented for
- Change your DocJacket account settings, billing plan, or user permissions
- Read other Connectors you've enabled on the assistant (e.g., your Gmail content)
- Bypass DocJacket's role-based access (e.g., if you're an org member without Admin rights, the AI inherits your access — not your owner's)

Tenant isolation is enforced at the SQL layer. Every MCP tool call adds `WHERE OrganizationId = @TokenOrg` to the underlying query. The AI cannot supply the org ID — it comes from the token.

## Read more

- [How OAuth works](/docs/ai-access/oauth) — the underlying protocol and token model
- [Tool Catalog](/docs/ai-access/tool-catalog) — the live tool inventory grouped by category
- [AI Access overview](/docs/ai-access) — section index
