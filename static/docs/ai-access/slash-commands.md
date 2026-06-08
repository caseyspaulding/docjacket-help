---
sidebar_label: Slash Commands
sidebar_position: 7
description: Nine pre-built slash commands for Cowork and Claude Code — morning-briefing, whats-next, email-triage, contract intake, and more.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/slash-commands -->
<!-- Source: docs/ai-access/slash-commands.mdx -->

# Slash Commands

The DocJacket plugin ships nine pre-built slash commands. Each one is a pre-written workflow that chains the right DocJacket MCP tools. Current read-first commands work with a read token; commands that send messages, create transactions, or update records require draft or action scopes to be enabled for your account.

The commands work in:

- **Cowork** — Anthropic's collaboration surface. Slash commands appear in the `/` menu.
- **Claude Code** — Anthropic's CLI. Run `/docjacket:` and tab-complete.

In **Claude.ai** and **Claude Desktop**, slash commands aren't a plugin surface (yet), but the same workflows run via plain-English prompts ("do a morning briefing", "what's due this week"). The assistant follows the same recipes.

## Quick reference

| Command | What it does |
|---|---|
| **`/docjacket:morning-briefing`** | Brief across every active deal — today's calendar, this week's deadlines, overdue items, unread mail from parties, missing docs |
| **`/docjacket:whats-next`** | Tier-ranked feed of tasks + key dates that need attention (overdue → due-72h → due-2w → due-4w) |
| **`/docjacket:email-triage`** | Match Gmail / Outlook inbox to active transactions, classify attachments, surface deadline-proximate threads |
| **`/docjacket:doc-check`** | Document-completeness audit — for one transaction, or org-wide with urgency flags on closings within 14 days |
| **`/docjacket:weekly-report`** | Closing-this-week, closed-this-week, new-files, stuck-deals, upcoming-closings, and stats — for the broker, the team, or your own records |
| **`/docjacket:share-portal`** | Get the portal URL + calendar feed for a transaction; email delivery requires draft/action scopes |
| **`/docjacket:check-submissions`** | Review new intake-form submissions, see what each contains, decide next move per submission |
| **`/docjacket:send-template`** | Pick a saved email template and render with merge fields; sending requires draft/action scopes |
| **`/docjacket:intake-contract`** | Review extraction from a contract PDF; creating the transaction requires action-tool access |

## Triage commands

### `/docjacket:morning-briefing`

> *"Brief me on what needs attention across all my active deals."*

Walks every active transaction, surfaces what's on the calendar today + this week, flags overdue items, checks the connected mailbox for unread mail from parties, and lists missing docs across deals.

**Chains:** `list_active_transactions` → `get_next_required_actions` → `get_missing_documents` + `get_checklist_status` per closing-soon deal, plus Gmail/Outlook reads if connected.

**Best as your first interaction of the day.** Leads with the most urgent items, skips deals with nothing demanding attention, and ends with a "want me to act on any of this?" offer.

### `/docjacket:whats-next`

> *"Show the ranked list of tasks and key dates that need attention next."*

Tighter than morning-briefing — just the prioritized action feed. Calls `get_next_required_actions` (the flagship judgment tool) and presents the result grouped by urgency tier: overdue → due in 72h → due in 2 weeks → due in 4 weeks.

**Chains:** `get_next_required_actions` (org-wide, or scoped to one transaction if you mention it).

**Best when you have 5 minutes and want to know what to do next.** Lighter than morning-briefing; doesn't check email or calendar.

### `/docjacket:email-triage`

> *"Match my inbox to my active deals and surface what needs action."*

Reads recent unread mail from the connected Gmail/Outlook, matches each sender to a DocJacket contact, groups threads by transaction, classifies any attachments, and flags emails that touch a key date in the next 7 days. Unmatched mail lands in a final group with a "should this be on a deal?" prompt.

**Chains:** `list_active_transactions` (cached) → email connector reads → `find_contact_by_email` per sender → `search_transactions` fallback → `classify_document` per attachment → `get_missing_documents` for gap-filling attachments.

**Requires the Gmail or Outlook connector active in Cowork.** Best after coming back from a half-day off, or any time the inbox feels out of control.

### `/docjacket:doc-check`

> *"Run a document completeness audit."*

Two modes:

- **With a transaction in context** — runs `get_missing_documents` for that one deal, names which recipient role typically provides each missing item, and can suggest a chase message. Sending that chase requires draft/action scopes.
- **No transaction in context** — org-wide audit across active deals, flagging anything closing within 14 days that still has gaps.

**Best 24-48 hours before a closing**, or when a broker asks "what's the state of doc completeness across the team?"

### `/docjacket:weekly-report`

> *"Summarize the week's activity across all transactions."*

A weekly recap formatted for forwarding to a broker, team meeting, or your own records. Sections: closing this week, closed this week, new files, stuck deals, upcoming closings, plus aggregate stats (active count, closings this month, volume).

**Chains:** `list_active_transactions` (cached) → `get_next_required_actions` (org-wide) → optional `get_open_tasks` per deal for activity rollup.

**Best Friday afternoon.** Caveats called out inline — "closed this week" is a heuristic from closing-date proximity, not an actual-close signal.

## Workflow commands

### `/docjacket:intake-contract`

> *"Intake a contract PDF and build the full transaction in one conversation."*

The PDF-to-transaction workflow when action tools are enabled. In the standard read-first setup, use the in-app Upload Documents wizard for transaction creation. See the full reference at **[Contract Intake](/docs/ai-access/contract-intake)**.

**Read-first version:** summarize extraction status and review available results.

**Action-scope version:** upload or locate a PDF, run extraction, review fields, and call `apply_extraction` only after you confirm in chat.

### `/docjacket:send-template`

> *"Send the buyer intro email on the Smith deal."*

Pick a saved email template, render it with the transaction's merge fields resolved, and show the rendered email inline for review. Sending through Gmail or Outlook requires draft/action scopes.

**Read-first version:** resolve the deal, find contacts, and prepare the rendered template for review.

**Draft/action-scope version:** send the reviewed message through the connected mailbox.

### `/docjacket:share-portal`

> *"Share the portal with Sarah on the 412 Oak deal."*

Pulls the portal URL + calendar feed URL for a transaction. If draft/action scopes are enabled, the assistant can also help prepare a share email to a party on the deal.

**Chains:** `search_transactions` (if needed) → `get_portal_link` → `get_contacts`.

### `/docjacket:check-submissions`

> *"What's new in my intake forms?"*

Surveys recent intake-form submissions across your active forms, summarizes what each one contains, and offers obvious next moves per submission. Creating a transaction, sending a reply, or logging a dismissal requires draft/action scopes.

**Chains:** `list_form_links` → `list_form_submissions` per form → `get_form_submission` for interesting ones → `get_form_definition` if you want to see the form schema → next-action handoff.

## Customizing or writing your own

The commands are markdown playbooks in the public [`docjacket-inc/claude-plugin`](https://github.com/docjacket-inc/claude-plugin) repository — `commands/<name>.md` files with a frontmatter `description` and a numbered playbook body. Customize:

1. **Fork** [`docjacket-inc/claude-plugin`](https://github.com/docjacket-inc/claude-plugin) on GitHub.
2. **Edit** any `commands/*.md` file — change wording, adjust the recipe, add brokerage-specific steps, add new commands.
3. **Install your fork** instead of the upstream plugin (`/plugin marketplace add <your-org>/claude-plugin` in Claude Code, or the Cowork install URL pointed at your fork).

The DocJacket MCP server doesn't care which plugin produced a tool call. Auth and the tool surface are the same regardless of which plugin invoked them, so customizations stay client-side without any DocJacket-side changes.

If you write a command worth sharing back, open a PR against the upstream repo — happy to land community recipes.

## Read more

- **[Contract Intake](/docs/ai-access/contract-intake)** — full reference for the `/docjacket:intake-contract` workflow
- **[Connect Claude](/docs/ai-access/claude)** / **[Connect Codex / ChatGPT](/docs/ai-access/codex)** — install the connector if you haven't
- **[AI Access overview](/docs/ai-access)** — section index
