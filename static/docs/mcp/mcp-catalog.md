---
sidebar_label: Tool Catalog (mcp_catalog)
sidebar_position: 5
description: Live tool inventory for DocJacket's MCP server — every tool, scope tier, gotcha, and example argument, kept fresh by the catalog itself.
---

<!-- Canonical: https://help.docjacket.com/docs/mcp/mcp-catalog -->
<!-- Source: docs/mcp/mcp-catalog.mdx -->

# Tool Catalog (`mcp_catalog`)

`mcp_catalog` is DocJacket's self-discovery tool. One call returns the live inventory of every tool the connected assistant can use right now — with descriptions, scope tiers, non-obvious gotchas, suggested pairings, and example argument shapes. Help docs that hard-code tool names will drift; `mcp_catalog` always reflects what's actually deployed.

It's the right answer to *"what can my AI assistant actually do with DocJacket?"* because:

- **It's scoped to your token.** If you granted read-only access at consent, the catalog returns only read tools — no surprises about what writes might fire.
- **It carries metadata that `tools/list` doesn't.** The MCP protocol's standard `tools/list` returns name + description + input schema. The catalog adds gotchas, pairing hints, example call shapes, and deprecation status — the stuff that helps an assistant *plan a workflow*, not just *find a tool*.
- **It's identical regardless of arguments.** No parameters, no state. Safe to cache for a conversation; safe to call at the start of any planning step.

## How to invoke

Ask your AI assistant in plain English:

> "Use DocJacket's `mcp_catalog` and group the tools by category."
> "Show me every DocJacket tool I have access to with this token."
> "Run `mcp_catalog` and summarize the write tools."

The assistant calls the tool, gets back the JSON below, and formats it for you. You don't write the call yourself.

## A worked example

A single `mcp_catalog` response (truncated to 4 representative entries — actual response has 47 entries today):

```jsonc
{
  "tools": [
    {
      "name": "list_active_transactions",
      "description": "List every active transaction in the current organization (statuses tagged 'open' — Active, Pending, Under Contract). Returns address, status, closing date, completion %. Pass include_parties=true to also get every party on each deal with their email and role...",
      "requiredScope": "read",
      "hasOutputSchema": false,
      "gotchas": [
        "Capped at 200 transactions; orgs with more should chain search_transactions for the long tail.",
        "statusType='open' covers Active/Pending/Under Contract but excludes Closed — historical context needs search_transactions.",
        "include_parties + include_key_dates each add a per-transaction round-trip; default both off when you only need the address/status list."
      ],
      "pairsWith": [
        "get_next_required_actions",
        "get_transaction",
        "get_missing_documents"
      ],
      "exampleCall": "{\"include_parties\": true, \"limit\": 30}"
    },
    {
      "name": "get_transaction",
      "description": "Full detail on one transaction — parties, key dates, contingencies, tasks, milestones, financial terms. Pass the transactionId returned by search_transactions or list_active_transactions.",
      "requiredScope": "read",
      "hasOutputSchema": false,
      "gotchas": [],
      "pairsWith": []
    },
    {
      "name": "send_agent_followup",
      "description": "Send a follow-up email to a contact on a transaction — listing agent, lender, title rep, inspector. Routes through the user's connected Gmail / Outlook. Use after the user confirms a drafted message in chat...",
      "requiredScope": "draft",
      "requiredGranularScope": "messaging:send",
      "hasOutputSchema": false,
      "gotchas": [],
      "pairsWith": []
    },
    {
      "name": "apply_extraction",
      "description": "Apply a completed extraction to create the matching transaction — parties added, key dates set, default checklist applied. Requires extractionJobId from get_extraction_results with status 'complete'.",
      "requiredScope": "actions",
      "requiredGranularScope": "transactions:create",
      "hasOutputSchema": true,
      "gotchas": [],
      "pairsWith": []
    }
  ],
  "totalCount": 47
}
```

## What each field means

| Field | What it is |
|---|---|
| **`name`** | Tool name as you'd pass to `tools/call`. snake_case, verb-first. |
| **`description`** | Human-readable purpose + when to use it. Same text MCP's standard `tools/list` returns. |
| **`requiredScope`** | Tier scope the caller needs: `read` (lookups), `draft` (send / create / update), `actions` (higher-impact writes like `apply_extraction`). The token you got at consent grants one or more tiers. |
| **`requiredGranularScope`** | Optional fine-grained scope on top of the tier (e.g. `messaging:send`, `transactions:create`). Empty when the tier alone is enough. |
| **`hasOutputSchema`** | Whether the tool declares a structured output schema. `true` means the response shape is documented and validated; `false` is text/JSON without a contract. |
| **`gotchas[]`** | Non-obvious behaviors worth knowing before calling — caps, scope nuances, side-effects. Empty when nothing surprising. |
| **`pairsWith[]`** | Tools that naturally chain with this one. Empty when the tool stands alone. |
| **`exampleCall`** | A realistic argument shape, as a JSON string. Useful when figuring out an unfamiliar tool. Absent when the tool has no required arguments. |
| **`deprecatedBy`** | If set, the tool is in soft-kill mode; this names the replacement tool to use instead. Absent on live tools. |
| **`removalEta`** | If set (ISO 8601 date), the date after which the deprecated tool stops working. Absent on live tools. |

## Why this matters

Two reasons it's load-bearing for getting good results out of an AI assistant connected to DocJacket:

1. **The assistant plans better when it knows the surface.** With `gotchas`, `pairsWith`, and `exampleCall`, the assistant can chain tools intelligently — "I'll call `list_active_transactions` first with `include_parties: true`, then `get_missing_documents` for the deals closing this week" — without you having to spell out the recipe.
2. **You stay in control without memorizing names.** You don't need to remember whether the tool is `search_transactions` or `transaction_search`. You ask "show me deals at 1234 Main" — the assistant calls `mcp_catalog` to figure out the right tool, then calls it.

Every customer-facing doc page on this site references tool names; `mcp_catalog` is the source of truth all of them point at. If anything ever drifts, the catalog wins.

## Read more

- **[Connect Claude](/docs/mcp/claude)** / **[Connect Codex / ChatGPT](/docs/mcp/codex)** — install the connector if you haven't
- **[Slash Commands](/docs/mcp/slash-commands)** — pre-built workflows that wrap the most-used tool chains
- **[Contract Intake](/docs/mcp/contract-intake)** — the headline workflow, using 6 tools you'll see in the catalog
- **[AI Access overview](/docs/ai-access)** — the umbrella feature, OAuth model, scope tiers, audit
