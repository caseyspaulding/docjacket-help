---
sidebar_label: Playbooks
sidebar_position: 2
description: Create Playbook templates with key dates, tasks, and automations — organized by transaction type, state, category, and side of the deal.
---

<!-- Canonical: https://help.docjacket.com/docs/templates/timeline-templates -->
<!-- Source: docs/templates/timeline-templates.md -->

# Playbooks

Playbooks define the reusable workflow for a transaction type. A Playbook can include **Key Dates**, **Tasks**, and **Automations** so a new transaction starts with the right deadlines, task list, and prepared emails.

:::info Playbooks were previously called Checklists
If you set your workflow up before August 2026, or you're following older notes, this
is the same feature under a new name. **Templates → Playbooks** is where your
checklists live — nothing was moved or lost, and your existing ones are all under the
**My Playbooks** tab.
:::

The key idea:

- **Key Date Library** defines reusable date rules
- **Playbooks** bundle those key dates with tasks and automations
- **Transactions** apply a Playbook to create real key dates and real tasks

This is the same product category as a reusable date-template workflow: set the date logic once, then apply it to future transactions. In DocJacket, that logic lives in the **Key Date Library**, and the Playbook adds the work that depends on those dates.

## Playbook list page

Go to **Templates → Playbooks** to manage Playbook templates.

![Playbooks list page with My Playbooks, DocJacket Playbooks, filters, default Playbook guidance, and Playbook cards](/img/templates/checklists-list.png)

The page has two tabs:

- **My Playbooks** — Playbooks your organization owns and can edit
- **DocJacket Playbooks** — ready-made Playbooks DocJacket provides, available to every organization

DocJacket Playbooks are read-only. Use **Copy to My Playbooks** or **Duplicate** before customizing key dates, tasks, or automations. Your copy shows a **Copied from** line so you can always tell where it started.

Use the filters to narrow the list by:

- **Transaction Type** — Sale, Listing, or both
- **Property Category** — Residential, Commercial, Land, Lease, New Build, and other categories
- **Status** — Active or Inactive
- **Complexity** — Lite or Standard
- **Search** — Playbook name or description

On **My Playbooks**, you can mark an active Playbook as the default. Default Playbooks can auto-apply when creating transactions for the matching state and type.

## Creating a Playbook template

1. Go to **Templates → Playbooks**
2. Click **New Playbook**
3. Add a name, transaction type, property category, state, side, and description
4. Save the template to open the Playbook builder
5. Add key dates from the **Key Date Library**, or create new key dates while building
6. Add tasks and tie them to the key dates they belong to
7. Add task timing rules, priorities, phases, and sections
8. Add automations, such as scheduled emails or completion rules
9. Use **Test template** to preview the Playbook against a sample effective date
10. Save the template

The builder title may say **Create Playbook** or **Edit Playbook**. The Templates hub and list page label this area **Playbooks**.

## Template settings

The builder shows a **Template Summary** card with the Playbook name, category, state, side, key-date count, task count, and automation count.

![Playbook builder with Template Summary, task tabs, AI Task Generator, Import CSV, and task rows grouped by key date](/img/templates/checklist-builder.png)

Use **Edit template settings** to change:

- Name
- Transaction Type
- Property Category
- State
- Side
- Description

DocJacket Playbooks are read-only. Copy one into **My Playbooks** before editing settings, key dates, tasks, or automations.

## Adding key dates

Key dates organize the Playbook. For each key date you can define:

- Name
- Description
- Key Date Type
- Side
- Category
- Priority
- Date rule type
- Anchor date field
- Offset direction
- Offset days
- Calendar-day or business-day calculation
- Whether the date is required

Use **Add Key Date** in the builder. The drawer has two modes:

- **Create New** — define a new key date rule directly inside the Playbook
- **From Library** — pick an existing reusable key date from the Key Date Library

If a shared key date needs customization, duplicate it first and use the copy in your Playbook.

## Adding tasks

Playbook tasks are the work your team completes during the transaction. Tasks can include:

- Name and description
- Phase and section
- Priority
- Assigned owner
- Due-date anchor
- Offset days and direction
- Calendar-day or business-day calculation
- Linked key dates
- Document category
- Subtasks
- Scheduled emails
- On-completion email actions
- **Conditional Task** — only create this task when the deal matches a condition (see [Conditional tasks](#conditional-tasks))

Tasks should reference the key date they depend on. For example, a task can be due 3 days before **Final Walkthrough** instead of hardcoding the same rule from **Closing Date**.

![Playbook task editor showing task details, priority, phase, due-date context, and an automation count on the selected task](/img/templates/checklist-task-automation.png)

## Conditional tasks

Some tasks only apply to certain deals — a septic inspection, an HOA document review,
a task that only matters on a cash deal. **You do not need a separate Playbook for
each combination.** Build one Playbook with every task in it, and mark the
situational ones conditional. A conditional task whose condition isn't met is simply
**not created** when you apply the Playbook, so the deal only gets the work that
actually applies.

To make a task conditional, open the task in the Playbook builder and, under
**Options**, tick **Conditional Task**. A **Transaction field** dropdown appears —
pick the field that decides whether the task applies.

### Which fields you can gate on

The **Transaction field** dropdown is a fixed list. It contains:

| Field | Behaves as |
|---|---|
| Cash deal | Yes/no flag |
| Sellers only | Yes/no flag |
| HOA contingency | Contingency |
| Radon contingency | Contingency |
| Septic contingency | Contingency |
| Well contingency | Contingency |
| Pool contingency | Contingency |
| Solar contingency | Contingency |
| Lead paint contingency | Contingency |
| Inspection contingency | Contingency |
| Smart-home contingency | Contingency |
| Home-warranty contingency | Contingency |

The two kinds behave differently, and the difference matters:

- **Yes/no flags** (Cash deal, Sellers only) — the task is created **only when the flag
  is on**. If the flag is off, or nothing has been filled in yet, the task is skipped.
- **Contingencies** — the task is created **unless** the contingency is explicitly set
  to **N/A** on the deal. If it's Active, or nobody has set it yet, you still get the
  task. This is deliberate: an unanswered contingency shouldn't quietly drop work.

### Gating on financed vs. cash deals

There is a **Cash deal** field, but there is **no "financed" field**. Because a yes/no
flag only creates the task when the flag is on, gating a financing task on **Cash
deal** would attach it to cash deals only — the opposite of what you want.

The way to handle financing work is to put it in the Playbook **normally**, with no
condition, and instead mark the *cash-specific* tasks conditional on **Cash deal**.
Financed deals are the common case, so let them be the default and gate the exception.

### The "If label" box is cosmetic

Under the field dropdown there's an **If label** box (for example, `If HOA`). This is
**text only — it does not gate anything.** It just prints on the task row so your team
can see at a glance when a task applies. If you type a label but don't pick a
**Transaction field**, the task is created on every deal.

### Conditions that aren't available yet

The dropdown above is the complete list. Common conditions that are **not** currently
supported include a buyer's **home sale contingency**, a **suitable housing**
contingency, and financing type beyond the cash flag. For those, either leave the task
unconditional and delete it on deals where it doesn't apply, or remove whole task
groups during apply — the apply dialog lets you deselect individual tasks and skip
entire groups before anything is created.

:::note Conditional in the Playbook builder vs. on a task
The **Conditional Task** checkbox in the *Playbook builder* controls whether a task
gets created at all. There is also a conditional marker on an individual task inside a
transaction ([Task Options](../tasks/task-options.md)) — that one is a **label** on
work that already exists, and it doesn't create or remove anything.
:::

## Automations

Automations can be attached to key dates or tasks. In practice, most automations live on tasks.

Common automation uses include:

- Prepare an email when a task is due
- Send a linked email template
- Include selected document categories
- Trigger follow-up work when a task is completed

Use **Review automations** to see every automation rule in the Playbook, grouped by key date and task. From there, use **Edit** to jump back to the rule in the builder. Bulk editing across automation rules is not currently part of this drawer.

## AI and bulk tools

The Playbook builder includes tools for faster setup:

- **AI Key Date Generator** — Describe the transaction workflow and review proposed key dates before applying them.
- **AI Task Generator** — Generate proposed tasks linked to the key dates in the Playbook.
- **Import Tasks from CSV** — Bulk-import tasks from a spreadsheet.
- **CSV export** — Download the Playbook structure for review or offline editing.
- **Suggested tasks** — Add common tasks for known key date types.

:::warning Review AI and imported items
Generated and CSV-imported key dates and tasks are a starting point, not a finished Playbook — review them before relying on the Playbook with clients.
:::

## Testing a Playbook

Use **Test template** to preview the Playbook against a sample effective date. The preview shows key dates, linked tasks, computed sample dates when available, and tasks not linked to any key date.

The preview is for template review. It is computed client-side and does not include configured holidays. Real transactions also use the transaction's actual contract dates, holidays, and any dates already extracted or entered.

## Applying a Playbook to a transaction

From the transaction Overview's closing timeline, click **Generate Timeline** and pick a Playbook.

DocJacket can:

- Scope available Playbooks by the transaction's state, side, and type
- Show existing applied Playbooks so users do not accidentally stack duplicates
- Preview how many key dates and tasks will be created
- Show anchor dates used for calculation
- Assign tasks by owner or label
- Apply only selected phases
- Replace previously-applied template items when needed
- Preserve manually added items and contract-extracted dates when replacing template-generated items

After applying, the transaction has real key dates and real tasks. Moving key dates can update linked task due dates according to their rules.

### Applying a second Playbook to the same transaction

You can apply more than one Playbook to the same deal, and by default the second one
**adds to** what's already there — it does not wipe the first. This is what makes the
listing-then-contract workflow work on a single record:

1. Create the deal as a listing and apply your **listing** Playbook — order photos,
   sign the listing agreement, get it on the MLS.
2. Work the listing. When it goes under contract, **don't start a new deal** — change
   the existing one's status (and type, if you use Listing/Purchase/Sale). See
   [Turning a listing into a sale or purchase](../transactions/listings.md#turning-a-listing-into-a-sale-or-purchase).
3. Apply your **contract-to-close** Playbook to that same transaction.

Both sets of tasks and key dates now live on one file, with one address, one contact
list, and one document set — and the listing history stays attached.

The apply dialog shows any Playbooks already applied, so you can see what's there
before adding another. If you *do* want the new Playbook to take over, tick **Replace
existing key dates and tasks** — that removes the previously applied *template-generated*
items on both the key-date and task side. Items you added by hand, and dates extracted
from the contract, are preserved either way.

:::tip
Leave **Replace** unticked when you're layering a second workflow onto a deal. Tick it
only when you're correcting a Playbook you applied by mistake.
:::

## Saving a transaction as a Playbook

If you customize a transaction's key dates, tasks, and automations, you can save that work as a new Playbook template. This is useful when a live deal becomes the model for a better workflow.

After saving, open the new Playbook in the builder to clean up names, sections, assignments, and automations.

## Playbooks vs. key date rules

The **Key Date Library** stores individual reusable date rules. A Playbook bundles those rules with tasks and automations.

Example:

- **Key Date rule:** Final Walkthrough = Closing Date - 1 business day
- **Playbook task:** Schedule walkthrough = Final Walkthrough - 3 days
- **Automation:** Prepare walkthrough reminder email when the task is due

## Tips

- Start with the built-in templates and customize them for your specific workflow
- Create state-specific variations — a Texas residential close has different deadlines than a Florida one
- Include the most common tasks in your template so they are created when the Playbook is applied
- Keep date calculation logic in the Key Date Library when the same rule will be reused
- Use task phases so users can apply only the work they need
- Test the Playbook before applying it to a live transaction
- Review and update templates periodically as regulations or your workflow change
