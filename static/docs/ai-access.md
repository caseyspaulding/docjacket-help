---
title: AI Access
sidebar_label: Overview
sidebar_position: 1
description: Connect your DocJacket transactions, deadlines, contingencies, and contacts to Claude, ChatGPT, Codex, and other AI assistants — paste-URL-and-go via OAuth 2.1.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access -->
<!-- Source: docs/ai-access/index.mdx -->

# AI Access

AI Access lets you bring DocJacket into Claude, ChatGPT, Codex, Gemini, and any other AI assistant that speaks the Model Context Protocol (MCP). Instead of switching tabs to triage your pipeline, you ask the assistant directly:

> "What needs my attention today?"
> "Which deals are missing inspection reports?"
> "What's closing this week on the buy side?"
> "Show me the listing agent on 1234 Main."

The assistant calls into DocJacket, gets a grounded answer from your real book of business, and writes the response in the same chat where the rest of your work already happens.

## How it's different from "just another integration"

- **Paste-URL-and-go.** No API keys, no per-user credentials to manage. You paste `https://mcp.docjacket.com/mcp` into the assistant's connector settings, complete a one-time consent screen, and you're done.
- **Per-user consent.** Each user on your DocJacket account authorizes their own assistant. There's no shared admin token that exposes everyone's data.
- **Revocable from settings.** **DocJacket → Settings → API & AI Access** lists every assistant you've connected. Revoke any of them with one click — the next request from that client returns "unauthorized."
- **Audited.** Every tool call goes through DocJacket's audit log: which user, which assistant, which tool, what arguments, what result. You can see exactly what an assistant has been doing on your behalf.
- **You set the approval gate for writes.** Both write tiers are live. DocJacket marks every write tool so the assistant knows it changes data; whether the assistant asks before running one is controlled by its per-tool approval settings.

## What's connected today

DocJacket's tools come in three permission tiers. You choose a tier when you consent, and it is enforced at the token — a read-only connection cannot write, whatever the assistant tries.

| Tier | What it allows | For example |
|---|---|---|
| `read` | Look things up. Changes nothing. | `search_transactions`, `get_upcoming_key_dates`, `get_next_required_actions` |
| `draft` | Change tasks, key dates, Playbooks and status inside DocJacket. Sends no email. | `create_tasks`, `update_key_date`, `apply_checklist` |
| `actions` | Send emails you approve, and make other changes | `send_client_update`, `apply_extraction`, `create_reminder` |

**[Browse every tool →](/docs/ai-access/tool-catalog)** — the complete catalog with descriptions, gotchas, and example calls, readable without connecting anything.

**Free plan:** your organization gets 50 AI tool calls a month. Paid plans have no monthly limit. See [Free plan limit](/docs/ai-access/use-from-your-assistant#free-plan-limit).

## Get started

Start with **[Connect your AI](/docs/ai-access/use-from-your-assistant)**: which AI to pick, how to connect in three steps, and how to disconnect. Then the longer guides:

- [Connect Claude](/docs/ai-access/claude) — Claude on the web, Claude Desktop, Claude Code
- [Connect Codex / ChatGPT](/docs/ai-access/codex) — Codex and ChatGPT connectors
- [Connect Cowork](/docs/ai-access/cowork) — Claude's workspace for longer tasks, plus the optional DocJacket plugin
- [Connect Gemini](/docs/ai-access/gemini) — Gemini app being verified; Gemini CLI for developers
- [Connect Grok](/docs/ai-access/grok) — being verified

Each guide walks you through the connector setup and the OAuth consent flow.

## Featured workflow

- **[Contract Intake](/docs/ai-access/contract-intake)** — with the actions tier, drop a contract PDF in chat, review extracted parties, addresses, key dates, and financials, then confirm before creating the transaction. In the standard read-first setup, use the in-app Upload Documents wizard.

## Learn more

- [Slash Commands](/docs/ai-access/slash-commands) — the pre-built `/docjacket:` commands the plugin adds to Cowork + Claude Code
- [Tool Catalog](/docs/ai-access/tool-catalog) — the live `mcp_catalog` inventory of every tool with description, scope, and example call
- [Permissions & Scopes](/docs/ai-access/permissions) — what `read`, `draft`, and `actions` cover
- [How the OAuth flow works](/docs/ai-access/oauth) — Discovery, Dynamic Client Registration, consent, scopes, token rotation, revocation
- DocJacket's [AI Features](/docs/ai-features) (the assistant *inside* DocJacket) is a separate thing — AI Access is for assistants *outside* DocJacket reaching in.

## Need help?

If a connection fails, the most common cause is your AI assistant having stale state from a previous failed attempt. Disconnect and reconnect to clear it. If the problem persists, contact <a href="mailto:support@docjacket.com">support@docjacket.com</a> with the reference ID your assistant shows on the error screen — we can correlate it with our diagnostic logs.
