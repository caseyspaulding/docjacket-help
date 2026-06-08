---
sidebar_label: Connect Claude
sidebar_position: 2
description: Connect DocJacket to Claude.ai, Claude Desktop, Claude Code, or Cowork using the official Claude plugin. Paste-URL-and-go via OAuth 2.1.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/claude -->
<!-- Source: docs/ai-access/claude.mdx -->

# Connect Claude

<div style={{position: 'relative', paddingBottom: '62.5%', height: 0, margin: '1.5rem 0', borderRadius: '8px', overflow: 'hidden'}}>
  <iframe
    src="https://www.loom.com/embed/5731759ff555447c9b627b4a9c31dae4?hideEmbedTopBar=true"
    title="Connect Claude to DocJacket — 30-second walkthrough"
    frameBorder="0"
    allowFullScreen
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
  />
</div>

DocJacket works with every Claude surface:

- **Claude.ai** — the web app sidebar
- **Claude Desktop** — the Mac / Windows native app
- **Claude Code** — Anthropic's CLI for developers
- **Cowork** — Anthropic's collaboration surface for teams

You connect each surface once. The same DocJacket MCP server backs all four.

## Quick start (Claude.ai sidebar)

1. Open **Claude.ai** in a browser, sign in.
2. Bottom-left → your name → **Settings**.
3. **Connectors** in the left nav → **+ Add custom connector**.
4. Paste `https://mcp.docjacket.com/mcp` as the URL.
5. Click **Continue**. Claude will redirect you to DocJacket's consent screen.
6. **Allow** the connection. Current customer-facing access is read-first for lookups. Draft and action scopes only appear when they are enabled for your account, and every tier is enforced server-side.
7. You're back in Claude with **DocJacket** showing as a custom connector and the tools available to your scopes loaded. Read tools run inline; any enabled write tools pause for your confirmation in chat.

## Try it

Start a new conversation and ask:

> "What needs my attention today across DocJacket?"

Claude will call `get_next_required_actions` and come back with a ranked list of transactions sorted overdue-first, with rationales like "inspection deadline passed 2 days ago, listing agent hasn't been emailed in 5 days."

Other good prompts:

- "Search DocJacket for any deals at 123 Main."
- "What deadlines are coming up this week?"
- "Show me open tasks across all transactions, sorted by due date."
- "Which deals are missing inspection reports?"
- "Look up the listing agent on [property]."

## Current tool surface

Current AI Access is read-first. Claude can use these DocJacket tools today:

- `search_transactions`
- `get_transaction`
- `get_key_dates`
- `get_upcoming_key_dates`
- `get_open_tasks`
- `get_contacts`
- `list_open_contingencies`
- `get_next_required_actions`

Drafting and write tools are rolling out behind per-tool consent. If your account has access to additional tools, use the catalog to see the live inventory:

> "Call `mcp_catalog` and group the tools by what they're for."

## Cowork — skills, slash commands, sub-agent

[Cowork](https://www.anthropic.com/cowork) is Anthropic's collaboration surface. The DocJacket plugin for Cowork ships nine workflow skills, nine slash commands, and a sub-agent.

**Skills** (the assistant picks the right one automatically based on what you ask):

- `daily-triage` — what needs attention today, overdue-first
- `email-triage` — match Gmail / Outlook threads against active deals
- `contract-intake` — PDF extraction review; transaction creation requires action tools
- `document-filing` — classify uploaded docs, file them to the right deal
- `closing-prep` — pre-closing checklist audit
- `follow-up-drafting` — compose a chase email with the right context already loaded
- `execution-workflow` — the confirm-then-execute pattern for write tools
- `tc-context` — vocabulary + matching priority + safety rules

**Slash commands** (typed explicitly):

```
/docjacket:morning-briefing      /docjacket:whats-next
/docjacket:email-triage          /docjacket:send-template
/docjacket:intake-contract       /docjacket:doc-check
/docjacket:share-portal          /docjacket:weekly-report
/docjacket:check-submissions
```

**Sub-agent:** mention `@docjacket-status-reporter` for a structured weekly briefing grouped by deal state.

To install the plugin in Cowork, see [docjacket-inc/claude-plugin](https://github.com/docjacket-inc/claude-plugin) on GitHub.

## Claude Code — slash commands

In Claude Code (the CLI), the DocJacket plugin registers the same nine slash commands listed above. Drop in `/docjacket:` to see the menu, then pick one — most TCs start with `/docjacket:morning-briefing` or `/docjacket:whats-next`.

Install per the instructions at [docjacket-inc/claude-plugin](https://github.com/docjacket-inc/claude-plugin).

## Claude Desktop

Claude Desktop (Mac / Windows native app) uses the same custom-connector flow as Claude.ai:

1. **Settings** → **Connectors** → **+ Add custom connector**.
2. Paste `https://mcp.docjacket.com/mcp`.
3. Complete the OAuth consent.

Once connected, Claude Desktop has access to the same DocJacket tools available to that connector's granted scopes.

## Permissions, audit, and revocation

Every connector gets its own `client_id`. Inside Claude, you can:

- **Toggle individual tools** off if you don't want Claude to be able to call them.
- **Set "Needs approval"** (the default) to require manual confirmation on every call.

Inside DocJacket:

- **Settings → AI Access** lists every connected client with last-used timestamp.
- **Activity log** shows every tool call: who, what, when, what arguments, what result.
- **Revoke** any client with one click. The next request from that client returns HTTP 401 — Claude will fall back to re-consent if you want to reconnect.

## Troubleshooting

**"Authorization with the MCP server failed"** — Disconnect the connector and re-add it. This clears any stale state on Claude's side. If it still fails, send the reference ID Claude shows on the error screen to <a href="mailto:support@docjacket.com">support@docjacket.com</a>.

**Tools don't appear after connecting** — Refresh the Claude page or restart Claude Desktop. The tool list is cached client-side and sometimes needs a manual refresh.

**"Token is invalid, expired, or revoked"** — Your token has been revoked (from DocJacket → Settings → AI Access) or your assistant has been disconnected for more than 30 days. Re-consent to reconnect.

**Pro plan required** — Connecting is free, but actually loading tools requires a DocJacket Pro plan on the connecting user's account. If you're on Free, upgrade at [docjacket.com/pricing](https://docjacket.com/pricing).

## Read more

- [Contract Intake](/docs/ai-access/contract-intake) — external PDF intake when action tools are enabled; otherwise use the in-app Upload Documents wizard
- [Slash Commands](/docs/ai-access/slash-commands) — full reference for the 9 `/docjacket:` commands the plugin adds to Cowork + Claude Code
- [Tool Catalog (`mcp_catalog`)](/docs/ai-access/tool-catalog) — the self-discovery tool that returns DocJacket's live inventory
- [How the OAuth flow works](/docs/ai-access/oauth) — the underlying protocol
- [AI Access overview](/docs/ai-access) — section index
- [Connect Codex / ChatGPT](/docs/ai-access/codex) — sister guide for the OpenAI surfaces
