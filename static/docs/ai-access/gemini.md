---
sidebar_label: Connect Gemini
sidebar_position: 5
description: Connect DocJacket to Google Gemini via the Gemini CLI's MCP support. Bearer-token today, paste-URL OAuth coming.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/gemini -->
<!-- Source: docs/ai-access/gemini.mdx -->

# Connect Gemini

DocJacket works with the **Gemini CLI** today via personal access token. Paste-URL OAuth (the easier flow you'll see on the Claude and ChatGPT pages) will land here as soon as the Gemini CLI's MCP client adds [Dynamic Client Registration](https://datatracker.ietf.org/doc/html/rfc7591) support.

## Quick start (Gemini CLI, bearer token)

1. **Mint a token:**
   - Open [app.docjacket.com/settings/ai-access](https://app.docjacket.com/settings/ai-access).
   - Click **New token**, label it `Gemini`, scope `read`.
   - **Copy the plaintext token immediately** — it's shown exactly once.

2. **Configure Gemini CLI:**

   Open your Gemini CLI configuration (`~/.gemini/mcp.json` on Mac / Linux) and add a DocJacket entry:

   ```json
   {
     "servers": {
       "docjacket": {
         "url": "https://mcp.docjacket.com/mcp",
         "transport": "http",
         "headers": {
           "Authorization": "Bearer YOUR_TOKEN_HERE"
         }
       }
     }
   }
   ```

   Replace `YOUR_TOKEN_HERE` with the plaintext token from step 1.

3. **Restart the Gemini CLI.** Run `gemini tools list` — you should see DocJacket's tools in the inventory.

## Try it

Ask Gemini:

> "Use DocJacket to show me what needs my attention today."

Gemini will call `get_next_required_actions` and return a ranked overdue-first list of transactions with rationales.

Other good prompts:

- "Use DocJacket to search for deals at 123 Main."
- "Use DocJacket to list deadlines this week."
- "Use DocJacket to show open tasks on the [property] deal."
- "Use DocJacket to look up the listing agent on [property]."

## What Gemini can do

DocJacket exposes **67 tools** over MCP, in three permission tiers:

| Tier | Tools | For example |
|---|---|---|
| `read` | 40 | `search_transactions`, `get_upcoming_key_dates`, `get_next_required_actions` |
| `draft` | 7 | `create_tasks`, `update_key_date`, `apply_checklist` |
| `actions` | 20 | `send_client_update`, `apply_extraction`, `create_reminder` |

**[Browse all 67 tools →](/docs/ai-access/tool-catalog)** — the complete catalog with descriptions, gotchas, and example calls.

To see the inventory *your* token can reach:

> "Use DocJacket's `mcp_catalog` to list the tools by category."

## When paste-URL OAuth lands

Once the Gemini CLI supports RFC 7591 Dynamic Client Registration, this page will be updated to lead with the paste-URL flow:

1. Add `https://mcp.docjacket.com/mcp` as an MCP server in Gemini.
2. Sign in to DocJacket and click **Allow** on the consent screen.
3. Done.

No tokens to copy, no `mcp.json` to edit, per-user revocation. Until then, the token path above is the supported flow.

## Permissions, audit, revocation

- **Settings → AI Access** lists your Gemini token alongside other connected clients.
- **Activity log** shows every tool call: who, what, when, what arguments, what result.
- **Revoke** the Gemini token with one click. The next CLI tool call returns HTTP 401.

## Troubleshooting

**"Authorization failed"** — The token is invalid, expired, or revoked. Mint a fresh one at [settings/ai-access](https://app.docjacket.com/settings/ai-access) and update `~/.gemini/mcp.json`.

**Tools don't appear after restart** — Check the JSON syntax in `mcp.json`. A missing comma or extra brace will make the Gemini CLI skip the server entry. Validate with `cat ~/.gemini/mcp.json | jq`.

**Pro plan required** — Connecting is free, but actually loading tools requires a DocJacket Pro plan on the connecting user's account. Upgrade at [docjacket.com/pricing](https://www.docjacket.com/pricing).

## Read more

- [Connect Claude](/docs/ai-access/claude) — uses paste-URL OAuth today
- [Connect Codex / ChatGPT](/docs/ai-access/codex) — also paste-URL OAuth
- [How OAuth works](/docs/ai-access/oauth) — the underlying protocol Gemini will use once it adds DCR
- [Permissions](/docs/ai-access/permissions) — read / draft / actions scope tiers
- [AI Access overview](/docs/ai-access) — section index
