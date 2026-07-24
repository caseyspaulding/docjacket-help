---
sidebar_label: Permissions & scopes
sidebar_position: 10
description: How DocJacket's MCP scopes work — the read, draft, and action tiers, what each allows, per-tool consent, and activity logging.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/permissions -->
<!-- Source: docs/ai-access/permissions.mdx -->

# Permissions & scopes

DocJacket's MCP server exposes **67 tools** across three **scope tiers**, and supports **per-tool toggles** inside the AI client. All three tiers are live. You choose one when you consent, and it is enforced at the token — a read-only connection cannot call a write tool even if the assistant tries.

## The three scopes

| Scope | What it covers | Approval flow |
|---|---|---|
| **`read`** (40 tools) | Search, lookup, list — e.g. `search_transactions`, `get_upcoming_key_dates`, `get_next_required_actions`, `mcp_health_check`. Nothing here changes a record or contacts anyone. | Auto-approved per conversation in most clients |
| **`draft`** (7 tools) | Low-risk writes to your own records — `create_tasks`, `complete_task`, `update_key_date`, `add_key_dates_batch`, `apply_checklist`, `log_activity`, `save_status_summary`. **Nothing in this tier sends anything to anyone.** | Confirm in chat before each call |
| **`actions`** (20 tools) | Side-effecting work — sending email (`send_client_update`, `send_document_request`, `send_agent_followup`, `send_email_to_agent`), creating and deleting records, and disclosure packages that expose documents outside the org. | Confirm in chat before each call |

The draft tier is the useful middle setting: an assistant can keep your tasks and deadlines current without ever being able to email a client. **[Browse all 67 tools →](/docs/ai-access/tool-catalog)** to see exactly what sits in each tier.

## The conversation is the approval gate

For both write tiers, supported MCP clients use a **confirm-then-execute** UX:

1. You ask the assistant to do something.
2. The assistant proposes the action in chat — what tool, what arguments, against what data.
3. You confirm or redirect.
4. The assistant fires the tool only after you say yes.

For external AI Access writes, DocJacket's server does not run a second approval queue after chat confirmation. We retired the old sidebar "Pending Review" page in May 2026 — the AI client chat already gates those writes, so a second approval inside DocJacket was duplicate work. This is separate from the in-app **Review queue**, which still handles DocJacket automation drafts, scheduled sends, recent activity, and pending uploads.

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
