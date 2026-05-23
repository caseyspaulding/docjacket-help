# MCP Registry Submissions

Tracking where the DocJacket MCP server (`https://mcp.docjacket.com/mcp`) is
listed across the public MCP ecosystem. Each registry is a one-time submission
that surfaces DocJacket to a different slice of the AI-agent user base.

Server discovery file lives at:

- `https://help.docjacket.com/.well-known/mcp.json` (SEP-1960)
- `https://help.docjacket.com/.well-known/mcp/server-card.json` (SEP-1649)
- `https://help.docjacket.com/.well-known/mcp/manifest.json` (legacy)
- `https://help.docjacket.com/.well-known/mcp-server` (IETF draft)
- `https://help.docjacket.com/openapi.json` (OpenAPI mirror)
- `https://help.docjacket.com/.well-known/ai-plugin.json` (ChatGPT plugin format)

## 1. Official MCP Registry — Anthropic / community

- **Registry:** https://registry.modelcontextprotocol.io
- **Repo:** https://github.com/modelcontextprotocol/registry
- **CLI:** `mcp-publisher`
- **Auth for our case:** DNS verification on `docjacket.com` (Ed25519 TXT record),
  which grants the `com.docjacket/*` and `com.docjacket.*/*` namespaces. GitHub
  OAuth via `docjacket-inc/*` is the alternative if we prefer the GitHub path
  and use the `io.github.docjacket-inc/help` namespace.
- **Submission file:** `registry/server.json` (see template below).
- **Status:** [ ] not submitted.

### server.json template

```json
{
  "$schema": "https://static.modelcontextprotocol.io/schemas/2025-09-29/server.schema.json",
  "name": "com.docjacket/mcp",
  "description": "DocJacket — transaction coordination for real estate. Search transactions, key dates, contingencies, missing documents, next required actions, contract intake.",
  "version": "1.0.0",
  "websiteUrl": "https://help.docjacket.com/docs/ai-access",
  "repository": {
    "url": "https://github.com/docjacket-inc/help",
    "source": "github"
  },
  "remotes": [
    {
      "type": "streamable-http",
      "url": "https://mcp.docjacket.com/mcp"
    }
  ]
}
```

### Submission steps

```bash
# 1. Install the publisher CLI
brew install mcp-publisher

# 2. Initialize the server.json (run from this repo root once)
mcp-publisher init

# 3. Generate Ed25519 keypair and set the public key as a TXT record on
#    docjacket.com (record name: mcp-publisher.docjacket.com)
#    Then authenticate:
mcp-publisher login dns --domain docjacket.com --private-key <key>

# 4. Publish
mcp-publisher publish
```

## 2. Smithery.ai

- **Registry:** https://smithery.ai
- **Submission:** web dashboard at smithery.ai → "Add server" → enter
  `https://mcp.docjacket.com/mcp`. Or CLI:
  `smithery mcp publish "https://mcp.docjacket.com/mcp" -n docjacket/docjacket`.
- **Required metadata:** name, description, homepage, transport, auth type,
  tool list. Smithery scrapes the `tools/list` response so the server must be
  reachable.
- **Status:** [ ] not submitted.

## 3. Glama.ai

- **Registry:** https://glama.ai/mcp/servers
- **Submission:** click **Add Server** on https://glama.ai/mcp/servers and
  paste the MCP URL. Glama auto-scans the server, scores it, and inspects
  tools/schemas. Listings include an in-browser inspector so users can
  exercise tools without local install.
- **Status:** [ ] not submitted.

## 4. mcp.so

- **Registry:** https://mcp.so
- **Submission:** GitHub PR or web form on mcp.so. Includes a screenshot,
  description, repo link.
- **Status:** [ ] not submitted.

## 5. awesome-mcp-servers (punkpeye)

- **Registry:** https://github.com/punkpeye/awesome-mcp-servers
- **Pre-req:** must be listed on Glama first (PRs without a Glama link are
  auto-closed after 7 days).
- **PR entry format (under the appropriate category — likely "Productivity"
  or "Customer Data"):**

  ```
  - [docjacket-inc/help](https://github.com/docjacket-inc/help) ([Glama](https://glama.ai/mcp/servers/<id>)) — DocJacket MCP server. Real estate transaction coordination — transactions, key dates, contingencies, contract intake.
  ```

- **Status:** [ ] not submitted.

## 6. mcpservers.org

- **Registry:** https://mcpservers.org
- **Submission:** GitHub-based per their contributing guide.
- **Status:** [ ] not submitted.

## 7. GitHub MCP Registry

- **Registry:** https://github.com/mcp (announced 2025)
- **Submission:** filed via the official MCP Registry (#1 above) — GitHub
  surfaces listings that already exist in the official registry.
- **Status:** ties to #1.

## 8. Cursor "Add to Cursor" deep link

- **Registry:** https://cursor.com/install-mcp (one-click install)
- **Submission:** generate a deep-link URL of the form
  `cursor://anysphere.cursor-deeplink/mcp/install?name=docjacket&config=<base64-json>`
  and document it on `/docs/mcp/cursor` (does not exist yet — TODO).
- **Status:** [ ] deep link not generated yet.

## 9. Claude Desktop / Claude Code plugin marketplace

- **Registry:** `docjacket-inc/claude-plugin` already lives at
  https://github.com/docjacket-inc/claude-plugin — install with
  `/plugin marketplace add docjacket-inc/claude-plugin`.
- **Status:** [x] shipped.

## 10. Codex plugin marketplace

- **Registry:** `docjacket-inc/codex-plugin` already lives at
  https://github.com/docjacket-inc/codex-plugin — install with
  `codex plugin marketplace add docjacket-inc/codex-plugin`.
- **Status:** [x] shipped.

---

## Notes

- Every registry except #1 (official) is a one-time submission. The official
  registry republishes on every `mcp-publisher publish`, so wire that into a
  GitHub Action triggered on tagged releases of this docs repo (or the v3
  MCP server repo, whichever is canonical for versioning).
- When tool count or scope changes materially, update:
  1. `static/.well-known/mcp/server-card.json` (tool list)
  2. `static/openapi.json` (x-mcp-tools array)
  3. `static/.well-known/mcp/manifest.json` (capabilities, supported clients)
  4. Republish to the official registry (#1).
- Tool descriptions appear in every registry's listing. Treat them like ad
  copy: clear, specific, problem-solution. Source of truth lives in the v3
  MCP server (`Features/Mcp/Tools/*.cs` — `[Description]` attributes).
