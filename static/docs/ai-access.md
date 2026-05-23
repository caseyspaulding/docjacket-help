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
- **Revocable from settings.** **DocJacket → Settings → AI Access** lists every assistant you've connected. Revoke any of them with one click — the next request from that client returns "unauthorized."
- **Audited.** Every tool call goes through DocJacket's audit log: which user, which assistant, which tool, what arguments, what result. You can see exactly what an assistant has been doing on your behalf.
- **Chat is the approval gate.** Read tools run immediately. Write tools (send, create, update, apply) execute only after you confirm in the assistant's chat — there is no separate DocJacket "draft queue" or "pending approvals" tray. The conversation already gates it; DocJacket trusts that and executes when called.

## What's connected today

DocJacket's MCP server exposes **47 tools** to every connected assistant across these workflow categories:

- **Find** — `search_transactions`, `find_transaction_by_property`, `find_contact_by_email`, `search_contacts`, `list_active_transactions`
- **Read deal state** — `get_transaction`, `get_key_dates`, `get_upcoming_key_dates`, `get_missing_documents`, `list_open_contingencies`, `get_open_tasks`, `get_contacts`, `get_checklist_status`
- **Triage with judgment** — `get_next_required_actions` (the flagship — bundled overdue-first ranking with rationales)
- **Send** — `send_agent_followup`, `send_client_update`, `send_document_request`, `send_email_to_agent` (all execute via your connected Gmail / Outlook)
- **Create / update** — `create_contact`, `create_tasks`, `create_reminder`, `update_key_date`, `add_key_dates_batch`, `add_contact_to_transaction`, `apply_checklist`, `complete_task`, `log_activity`, `save_status_summary`
- **Contract intake** — `upload_document_for_extraction`, `get_extraction_results`, `apply_extraction`, `classify_document`, `get_intake_status`
- **Forms** — `list_form_links`, `list_form_submissions`, `get_form_definition`, `get_form_submission`
- **Templates** — `list_email_templates`, `get_email_template`, `render_email_template`, `get_merge_fields`, `list_checklist_templates`
- **Diagnostics** — `mcp_catalog` (live tool inventory), `mcp_health_check`, `get_portal_link`

Tool count grows over time. **Ask the assistant to call `mcp_catalog`** to see the live inventory at any time — it returns every tool with description, scope, and example call. See the **[Tool Catalog reference](/docs/ai-access/tool-catalog)** for the exact response shape and what each field means.

AI Access settings page showing connected clients + tool inventory

## Get started

Pick the assistant you want to connect:

- [Connect Claude](/docs/ai-access/claude) — Claude.ai, Claude Desktop, Claude Code
- [Connect Codex / ChatGPT](/docs/ai-access/codex) — Codex CLI, Codex for Work, ChatGPT connectors
- [Connect Cowork](/docs/ai-access/cowork) — Anthropic's team workspace
- [Connect Gemini](/docs/ai-access/gemini) — Google Gemini CLI

Each guide walks you through the connector setup and the OAuth consent flow.

## Featured workflow

- **[Contract Intake](/docs/ai-access/contract-intake)** — drop a contract PDF in chat, the assistant extracts the parties, addresses, key dates, and financials, presents them for your review, and creates the transaction on your confirmation. End-to-end PDF → live deal in one conversation.

## Learn more

- [Slash Commands](/docs/ai-access/slash-commands) — the 9 pre-built `/docjacket:` commands the plugin adds to Cowork + Claude Code
- [Tool Catalog](/docs/ai-access/tool-catalog) — the live `mcp_catalog` inventory of every tool with description, scope, and example call
- [Permissions & Scopes](/docs/ai-access/permissions) — what `read`, `draft`, and `actions` cover
- [How the OAuth flow works](/docs/ai-access/oauth) — Discovery, Dynamic Client Registration, consent, scopes, token rotation, revocation
- DocJacket's [AI Features](/docs/ai-features) (the assistant *inside* DocJacket) is a separate thing — AI Access is for assistants *outside* DocJacket reaching in.

## Need help?

If a connection fails, the most common cause is your AI assistant having stale state from a previous failed attempt. Disconnect and reconnect to clear it. If the problem persists, contact <a href="mailto:support@docjacket.com">support@docjacket.com</a> with the reference ID your assistant shows on the error screen — we can correlate it with our diagnostic logs.
