---
sidebar_label: Checklists
sidebar_position: 2
description: Create checklist templates with key dates, tasks, and automations — organized by transaction type, state, category, and side of the deal.
---

# Checklists

Checklist templates define the reusable workflow for a transaction type. A checklist can include **Key Dates**, **Tasks**, and **Automations** so a new transaction starts with the right deadlines, task list, and prepared emails.

The key idea:

- **Key Date Library** defines reusable date rules
- **Checklists** bundle those key dates with tasks and automations
- **Transactions** apply a checklist to create real key dates and real tasks

## Creating a checklist template

1. Go to **Templates > Checklists**
2. Click **New Checklist**
3. Give it a name (e.g., "Texas Residential Purchase - 30 Day Close")
4. Choose the property category, state, and side if applicable
5. Add key dates from the **Key Date Library**, or create new key dates while building
6. Add tasks and tie them to the key dates they belong to
7. Add task timing rules, priorities, phases, and sections
8. Add automations, such as scheduled emails or completion rules
9. Preview the checklist against a sample effective date
10. Save the template

The mental model is:

| Layer | What it means |
| --- | --- |
| **Key Dates** | Important transaction dates and deadlines |
| **Tasks** | Work tied to those dates |
| **Automations** | Emails or actions triggered by tasks or dates |

## My Templates and shared checklists

Checklist templates can be organization-owned or shared system templates.

- **My Templates** are editable by your organization.
- **Shared system checklists** are read-only starters maintained by DocJacket.

Copy a shared checklist into your organization before customizing key dates, tasks, or automations.

## Organizing templates

Templates can be filtered by:

- **State** — Texas, Oklahoma, Florida, etc. (since deadlines vary by state)
- **Category** — Residential, Commercial, Land, Lease
- **Side** — Buyer side, seller side, or both

This makes it easy to find the right template when you're setting up a new transaction.

## Adding key dates

Key dates organize the checklist. For each key date you can define:

- Name
- Side
- Category
- Priority
- Date rule
- Anchor date
- Offset direction
- Offset days
- Calendar-day or business-day calculation
- Whether the date is required

Use **Add Key Date** to create one directly, or pick from the **Key Date Library** to reuse an existing date rule.

If a shared key date needs customization, duplicate it first and use the copy in your checklist.

## Adding tasks

Checklist tasks are the work your team completes during the transaction. Tasks can include:

- Name and description
- Phase
- Priority
- Assigned owner
- Due-date rule
- Linked key dates
- Document category
- Subtasks
- Email templates
- Completion rules

Tasks should reference the key date they depend on. For example, a task can be due 3 days before **Final Walkthrough** instead of hardcoding the same rule from **Closing Date**.

## Automations

Automations can be attached to key dates or tasks. In practice, most automations live on tasks.

Common automation uses include:

- Prepare an email when a task is due
- Send a linked email template
- Include selected document categories
- Trigger follow-up work when a task is completed

Use **Review automations** to see all automation rules in the checklist, grouped by key date and task.

## AI and bulk tools

The checklist builder includes tools for faster setup:

- **AI Key Date Generator** - Describe the transaction workflow and review proposed key dates before applying them.
- **AI Task Generator** - Generate proposed tasks linked to the key dates in the checklist.
- **CSV import** - Bulk-import tasks from a spreadsheet.
- **CSV export** - Download the checklist structure for review or offline editing.
- **Suggested tasks** - Add common tasks for known key date types.

Always review generated or imported items before relying on the checklist with clients.

## Testing a checklist

Use **Test template** to preview the checklist against a sample effective date. This shows how key dates and linked tasks would lay out before you apply the checklist to a real transaction.

The preview is for template review. Real transactions also use the transaction's actual contract dates, holidays, and any dates already extracted or entered.

## Applying a checklist to a transaction

From the transaction overview's key-date timeline, click **Generate Timeline** and pick a checklist.

DocJacket can:

- Scope available checklists by the transaction's state, side, and type
- Show existing applied checklists so users do not accidentally stack duplicates
- Preview how many key dates and tasks will be created
- Show anchor dates used for calculation
- Assign tasks by owner or label
- Apply only selected phases
- Replace previously-applied template items when needed
- Preserve manually added items and contract-extracted dates when replacing template-generated items

After applying, the transaction has real key dates and real tasks. Moving key dates can update linked task due dates according to their rules.

## Saving a transaction as a checklist

If you customize a transaction's key dates, tasks, and automations, you can save that work as a new checklist template. This is useful when a live deal becomes the model for a better workflow.

After saving, open the new checklist in the builder to clean up names, sections, assignments, and automations.

## Checklists vs. key date rules

The **Key Date Library** stores individual reusable date rules. A checklist bundles those rules with tasks and automations.

Example:

- **Key Date rule:** Final Walkthrough = Closing Date - 1 business day
- **Checklist task:** Schedule walkthrough = Final Walkthrough - 3 days
- **Automation:** Prepare walkthrough reminder email when the task is due

## Tips

- Start with the built-in templates and customize them for your specific workflow
- Create state-specific variations — a Texas residential close has different deadlines than a Florida one
- Include the most common tasks in your template so they are created when the checklist is applied
- Keep date calculation logic in the Key Date Library when the same rule will be reused
- Use task phases so users can apply only the work they need
- Test the checklist before applying it to a live transaction
- Review and update templates periodically as regulations or your workflow change
