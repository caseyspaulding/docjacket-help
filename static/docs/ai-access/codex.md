---
sidebar_label: Connect Codex / ChatGPT
sidebar_position: 3
description: Connect DocJacket to OpenAI Codex (CLI, Codex for Work) and ChatGPT using the official Codex plugin. Paste-URL-and-go via OAuth 2.1.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/codex -->
<!-- Source: docs/ai-access/codex.mdx -->

# Connect Codex / ChatGPT

30-second walkthrough — paste the URL, click Allow, ask "what needs attention today"

DocJacket works with every OpenAI surface that speaks MCP:

- **Codex CLI** — the open-source command-line tool for developers
- **Codex for Work** — OpenAI's hosted Codex for teams
- **ChatGPT** — with MCP connectors enabled in your account settings

The same DocJacket MCP server backs all three. Connect once per surface.

## Quick start (Codex CLI)

1. Open your Codex configuration directory (`~/.codex/` on Mac/Linux).
2. Open or create `connectors.json`.
3. Add a DocJacket entry:

```json
{
  "connectors": {
    "docjacket": {
      "url": "https://mcp.docjacket.com/mcp",
      "transport": "http"
    }
  }
}
```

4. Restart Codex. On first call, Codex opens a browser window with DocJacket's OAuth consent screen.
5. **Allow** the connection. Codex stores the access + refresh tokens in your local keychain.
6. Run `codex tools list` — you should see the full DocJacket tool inventory (47 today).

For the full plugin (with the skill set and `.codex-plugin` package), see [docjacket-inc/codex-plugin](https://github.com/docjacket-inc/codex-plugin) on GitHub.

Codex CLI after connecting — DocJacket tools listed

## Quick start (ChatGPT)

1. Open **ChatGPT** in a browser, sign in.
2. **Settings** → **Connectors** → **+ Add MCP server**. (Available on Plus / Team / Enterprise.)
3. Paste `https://mcp.docjacket.com/mcp`.
4. Click **Continue**. ChatGPT redirects you to DocJacket's consent screen.
5. **Allow** the connection.
6. Start a new chat — DocJacket's full tool surface is now available.

## Try it

Ask Codex or ChatGPT:

> "Use DocJacket to summarize what needs my attention today."

The assistant will call `get_next_required_actions` and come back with a ranked list of transactions, overdue-first, with rationales explaining why each one matters.

Other good prompts:

- "Use DocJacket to search for any deals at 123 Main."
- "Use DocJacket to list deadlines this week."
- "Use DocJacket to show open tasks on the [property] deal."
- "Use DocJacket to look up the listing agent on [property]."
- "Use DocJacket to check what documents are missing for [property]."

The "Use DocJacket to…" prefix is the convention OpenAI's surfaces follow when invoking a specific MCP connector. You can drop it once the assistant gets used to your patterns.

## The tool surface

47 tools today, grouped by workflow:

- **Find** — search transactions / contacts, fuzzy-match by address, list active deals.
- **Read deal state** — `get_transaction`, key dates, missing docs, contingencies, open tasks, contacts, checklist status.
- **Triage** — `get_next_required_actions` (flagship — overdue-first ranking with rationales).
- **Send** — `send_agent_followup`, `send_client_update`, `send_document_request`, `send_email_to_agent`. All route through your connected Gmail / Outlook.
- **Create / update** — contacts, tasks, reminders, key-date changes, checklist apply, task completion, activity log.
- **Contract intake** — upload a PDF, run extraction, create the transaction.
- **Forms** — list intake-form links and submissions.
- **Templates** — list / render saved email templates with merge fields resolved.
- **Diagnostics** — `mcp_catalog` returns the live, categorized inventory; `mcp_health_check` confirms the server is up.

You don't need to remember the names — Codex / ChatGPT pick the right tool based on your question. To see the current full inventory at any time, ask:

> "Use DocJacket's `mcp_catalog` to list the tools by category."

## Skills shipped with the plugin

The Codex plugin ships nine pre-built workflow skills the assistant picks from automatically:

`daily-triage` · `email-triage` · `contract-intake` · `document-filing` · `closing-prep` · `follow-up-drafting` · `execution-workflow` · `contact-management` · `tc-context`

Each is a recipe the assistant follows when you ask the corresponding question. Example invocations:

In Codex CLI:

```
$docjacket-daily-triage
```

In ChatGPT, just ask in plain English:

> "Use DocJacket to do a daily triage of my pipeline."
> "Use DocJacket to draft a follow-up to the listing agent on 1234 Main."
> "Use DocJacket to extract this PDF I'm dropping in and spin up the transaction."

Either way you get a ranked, structured response — the skill carries the formatting and the recipe.

## Permissions, audit, and revocation

Same as the Claude side. Each Codex or ChatGPT install gets its own `client_id`.

Inside DocJacket:

- **Settings → AI Access** lists every connected client with last-used timestamp.
- **Activity log** shows every tool call: who, what, when, what arguments, what result.
- **Revoke** any client with one click. The next request returns HTTP 401 — the assistant will fall back to re-consent if you want to reconnect.

## Troubleshooting

**"Authorization with the MCP server failed"** — Remove the connector from Codex / ChatGPT settings and re-add it to clear stale state. If the problem persists, send the reference ID the assistant shows to <a href="mailto:support@docjacket.com">support@docjacket.com</a>.

**Codex CLI auth keeps re-prompting** — Your refresh token may have been invalidated (single-use rotation — concurrent processes can race). Delete the entry from `~/.codex/credentials` and re-consent.

**ChatGPT doesn't show MCP Connectors** — Custom MCP connectors require Plus, Team, or Enterprise. Free-tier ChatGPT can't add custom servers yet.

**"Token is invalid, expired, or revoked"** — Either you revoked the client in DocJacket → Settings → AI Access, or the refresh token expired after 30 days of inactivity. Re-consent to reconnect.

**Pro plan required** — Connecting is free, but actually loading tools requires a DocJacket Pro plan on the connecting user's account. If you're on Free, upgrade at [docjacket.com/pricing](https://docjacket.com/pricing).

## Read more

- [Contract Intake](/docs/ai-access/contract-intake) — drop a PDF in chat, get a fully-set-up transaction back
- [Tool Catalog (`mcp_catalog`)](/docs/ai-access/tool-catalog) — the self-discovery tool that returns DocJacket's live inventory
- [How the OAuth flow works](/docs/ai-access/oauth) — the underlying protocol
- [AI Access overview](/docs/ai-access) — section index
- [Connect Claude](/docs/ai-access/claude) — sister guide for Anthropic surfaces
