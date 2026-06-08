---
sidebar_label: Checklists
sidebar_position: 3
description: Reusable DocJacket checklists — apply key dates, tasks, due-date offsets, and email automation to a transaction in one step.
---

<!-- Canonical: https://help.docjacket.com/docs/tasks/task-templates -->
<!-- Source: docs/tasks/task-templates.mdx -->

# Checklists

Checklists are reusable transaction workflows. A checklist can add the key dates, task list, due-date offsets, assignee roles, and email automation you use for a transaction type.

A checklist is different from the **Key Date Library**. The Key Date Library defines reusable date rules. The checklist consumes those dates and creates the tasks, due-date offsets, phases, assignments, and automation that depend on them.

## Applying a checklist

1. Open a transaction
2. Go to the key-date timeline on the **Overview** tab
3. Click **Generate Timeline**
4. Pick the checklist you want
5. Review the preview
6. Assign task owners if needed
7. Choose which phases to include if the checklist has phases
8. Apply the checklist

The checklist's key dates and tasks are added to the transaction with priorities, due-date offsets, assignments, phases, and any configured email automation.

Email automation follows the checklist settings: scheduled emails are created against their configured due-date anchors, and on-completion emails either auto-send or wait in the Review queue's **Ready for Review** tab when review is required.

If a transaction already has an applied checklist, DocJacket warns you before stacking another one. You can add the new checklist alongside existing work, or replace previously-applied template items when appropriate.

Manually added items and contract-extracted dates are preserved when replacing template-generated items.

## Creating a checklist

1. Go to **Templates > Checklists**
2. Click **New Checklist**
3. Add a name, transaction type, property category, state, side, and description
4. Save the template to open the checklist builder
5. Add key dates from the **Key Date Library**, or create new key dates in the builder
6. Add tasks with names, phases, priorities, assignments, and due-date rules
7. Link tasks to the key dates they depend on
8. Add scheduled emails or on-completion actions if needed
9. Test the checklist against a sample effective date
10. Save the checklist

See [Checklists](../templates/timeline-templates.md) for the full builder guide.

## How checklists use key dates

Checklist tasks should point to key dates instead of duplicating date math.

| Good | Avoid |
|------|-------|
| Due 2 days before Inspection Deadline | Due 8 days after Effective Date because that happens to match inspection timing |
| Due 1 business day before Closing Date | Due on a manually typed calendar date |

That keeps date rules in the **Key Date Library** and task workflows in **Checklists**.

## Task phases and assignments

Checklist tasks can be grouped by phase. When applying a checklist, phases let you apply only the portion of the workflow you need.

The apply flow can also assign tasks by owner or label. If you use the same assignments often, save them as defaults for future applies.

## Email automation

Checklist tasks can include email automation:

- Scheduled emails based on the task due date
- On-completion actions
- Review-before-send email actions
- Auto-send actions
- Recipients and attached documents

See [Email Automation](./email-automation.mdx) for the task-email behavior.

## Saving a transaction as a checklist

If a transaction has a useful set of key dates, tasks, and automation rules, save it as a new checklist template. Then open the new checklist in the builder to clean it up before using it as a standard workflow.

## Tips

- Create checklists for each transaction type you handle, such as residential purchase, listing, land, or new build.
- Include due-date offsets relative to key dates so DocJacket calculates actual dates when the checklist is applied.
- Use phases to apply only part of a checklist.
- You can apply multiple checklists to the same transaction when needed.
- After applying a checklist, you can still add, remove, or modify individual key dates and tasks.
- Keep reusable date rules in the **Key Date Library** and keep work steps in **Checklists**.
