---
sidebar_label: Connect Cowork
sidebar_position: 3
description: Install the DocJacket plugin in Claude Cowork — org-wide MCP plugin with nine skills, slash commands, and a Status Reporter sub-agent.
---

<!-- Canonical: https://help.docjacket.com/docs/mcp/cowork -->
<!-- Source: docs/mcp/cowork.mdx -->

# Connect Cowork

2-minute walkthrough — install the plugin, paste the token, ask "what needs attention today"

[Cowork](https://www.anthropic.com/cowork) is Anthropic's collaboration surface for teams. The DocJacket plugin installs **org-wide** — every member of your Cowork workspace gets the same skills, slash commands, and sub-agent without configuring anything themselves.

## What you get

- **9 workflow skills** the assistant picks from automatically
- **9 slash commands** for explicit invocation (`/docjacket:morning-briefing` etc.)
- **`@docjacket-status-reporter` sub-agent** for structured weekly briefings
- **47 MCP tools** — the same surface available on Claude.ai or ChatGPT

## Install (org admin role required)

1. In Cowork, open **Organization settings → Plugins**.
2. **+ Add plugin → GitHub** as the source.
3. Enter `docjacket-inc/claude-plugin` (owner/repo format) and approve.
4. Cowork validates the manifest and auto-syncs from the repo. Trigger a manual sync any time via the **Update** button.

Cowork → Organization settings → Plugins, showing DocJacket installed

## Wire up the token

Cowork uses a personal access token (not paste-URL OAuth) because the plugin is installed once for the whole workspace.

1. Open [app.docjacket.com/settings/ai-access](https://app.docjacket.com/settings/ai-access).
2. Click **New token**, pick the **Cowork Plugin** preset for the label, scope `read`.
3. **Copy the plaintext token immediately** — it's shown exactly once.
4. In Cowork, open **Settings → Connectors → DocJacket** and paste it.

That's it. Every Cowork member now has DocJacket tools, skills, and slash commands.

## Verify

Open any Cowork conversation and type:

> "What needs my attention today?"

Cowork's Daily Triage skill fires, calls `get_next_required_actions`, and comes back with a ranked overdue-first list per transaction.

Or summon the sub-agent:

> "@docjacket-status-reporter brief me on this week"

## Skills (auto-selected)

The assistant picks the right skill based on your question — you rarely need to invoke them by name:

| Skill | When it fires |
|---|---|
| `daily-triage` | "What needs attention today?" |
| `email-triage` | "Match these threads against active deals" |
| `contract-intake` | "Spin up a transaction from this PDF" |
| `document-filing` | "Where does this doc belong?" |
| `closing-prep` | "Audit the closing checklist for [property]" |
| `follow-up-drafting` | "Draft a chase email to the listing agent on [property]" |
| `execution-workflow` | The confirm-then-execute pattern wrapping every write tool |
| `contact-management` | "Add Jane Doe as a buyer on [property]" |
| `tc-context` | Loads vocabulary + safety rules into every conversation |

## Slash commands (explicit)

Drop `/docjacket:` to see the menu:

```
/docjacket:morning-briefing      /docjacket:whats-next
/docjacket:email-triage          /docjacket:send-template
/docjacket:intake-contract       /docjacket:doc-check
/docjacket:share-portal          /docjacket:weekly-report
/docjacket:check-submissions
```

Full reference: [Slash Commands](/docs/mcp/slash-commands).

## Status Reporter sub-agent

`@docjacket-status-reporter` produces a structured weekly briefing grouped by deal state — typical Friday-afternoon use:

> "@docjacket-status-reporter give me this week's report on every active deal"

It's read-only. It doesn't send emails, modify deals, or write to DocJacket — it summarizes.

## Permissions, audit, revocation

Same as every other AI Access connection:

- **Settings → AI Access** lists the Cowork token alongside any per-user OAuth connections.
- **Activity log** shows every tool call: who, what, when, what arguments, what result.
- **Revoke** the Cowork token with one click. The plugin stops working instantly for every Cowork member; the install record stays so you can re-paste a fresh token without re-installing.

The single token is per-org. To revoke just one Cowork member without affecting the rest, you'd remove them from your Cowork workspace — Cowork enforces that, not DocJacket.

## Update the plugin

Cowork auto-syncs from `docjacket-inc/claude-plugin` whenever we ship to that repo's `main` branch. To trigger a manual sync, hit **Update** on the plugin row in your Cowork plugin list.

We publish release notes in the [plugin repo](https://github.com/docjacket-inc/claude-plugin) — version-bumped whenever a new tool, skill, or slash command lands.

## Troubleshooting

**Plugin shows but tools aren't loading** — Check that the token is actually pasted in **Cowork → Settings → Connectors → DocJacket**. The plugin install is one step; the connector token is a separate step.

**"Authorization failed" on tool calls** — The token may have been revoked from DocJacket. Mint a fresh one at [settings/ai-access](https://app.docjacket.com/settings/ai-access) and update the Cowork connector.

**Skill or slash command not appearing** — Hit **Update** in the Cowork plugin list to pull the latest manifest. If still missing, [file an issue](https://github.com/docjacket-inc/claude-plugin/issues) on the plugin repo.

**Pro plan required** — Installing is free, but actually loading tools requires a DocJacket Pro plan on the org the token belongs to. Upgrade at [docjacket.com/pricing](https://docjacket.com/pricing).

## Read more

- [Connect Claude](/docs/mcp/claude) — Claude.ai, Desktop, and Claude Code (paste-URL OAuth)
- [Slash Commands](/docs/mcp/slash-commands) — full reference for `/docjacket:*`
- [Tool Catalog](/docs/mcp/mcp-catalog) — the self-discovery tool that lists DocJacket's live inventory
- [AI Access overview](/docs/ai-access) — the umbrella feature
- [Cowork plugin source](https://github.com/docjacket-inc/claude-plugin) — canonical install repo
