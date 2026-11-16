---
sidebar_label: Connect Gemini
sidebar_position: 6
description: Where Gemini stands with DocJacket. The Gemini app steps are being verified; developers can connect the Gemini CLI with a personal token today.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/gemini -->
<!-- Source: docs/ai-access/gemini.mdx -->

# Connect Gemini

:::caution Being verified: steps coming soon
We are testing the DocJacket connection in the Gemini app now. We'll add step-by-step instructions here once it is confirmed to work.
:::

Where Gemini stands today depends on which Gemini you use:

- **The Gemini app (personal Google accounts).** Since mid-2026, the Gemini app accepts custom connectors. Steps for DocJacket are being verified.
- **Gemini inside Google Workspace** (a work or school Google account). You can't add your own connector here yet. Gemini only offers connectors from Google's partner list.
- **Gemini Enterprise.** Admins can add custom MCP servers for their organization. Ask your Gemini admin.

If you try the Gemini app before the steps are ready, use the DocJacket address:

```
https://mcp.docjacket.com/mcp
```

Want something that works today? [Claude, ChatGPT and Codex](/docs/ai-access/use-from-your-assistant#which-ai-should-i-use) connect now.

## For developers: Gemini CLI

The Gemini CLI is a command-line tool for developers. It connects to DocJacket with a personal token.

1. **Create a token.** An Owner or Admin opens [app.docjacket.com/settings/api-access](https://app.docjacket.com/settings/api-access) (**Settings**, then **API & AI Access**). Create a new token, label it `Gemini`, and pick the access it needs. Start with `read`.
2. **Copy the token right away.** It is shown only once.
3. **Add DocJacket to the Gemini CLI.** In the Gemini CLI's settings file, add a DocJacket server entry like this:

   ```json
   {
     "mcpServers": {
       "docjacket": {
         "httpUrl": "https://mcp.docjacket.com/mcp",
         "headers": {
           "Authorization": "Bearer YOUR_TOKEN_HERE"
         }
       }
     }
   }
   ```

   Replace `YOUR_TOKEN_HERE` with your token. Check the Gemini CLI's own documentation for where its settings file lives on your computer.

4. **Restart the Gemini CLI** and ask:

   > "Use DocJacket to show me what needs my attention today."

To see what your token can reach, ask it to use DocJacket's `mcp_catalog` tool. The full list is in the [Tool Catalog](/docs/ai-access/tool-catalog).

On DocJacket's Free plan, your organization gets 50 AI tool calls a month, and Gemini CLI calls count. Paid plans have no monthly limit. Details: [Free plan limit](/docs/ai-access/use-from-your-assistant#free-plan-limit).

### Revoke the token

An Owner or Admin can revoke the token under **Settings**, then **API & AI Access**. The next call from the Gemini CLI fails.

### Troubleshooting

**"Authorization failed".** The token is wrong or was revoked. Create a new one and update the Gemini CLI settings.

**DocJacket tools don't appear.** Check the settings file for a missing comma or extra brace. A broken file makes the Gemini CLI skip the server.

## Read more

- [Connect your AI](/docs/ai-access/use-from-your-assistant): which AI to pick and how connecting works
- [Permissions & Scopes](/docs/ai-access/permissions): what read, draft and actions allow
- [How the OAuth flow works](/docs/ai-access/oauth)
