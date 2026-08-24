---
sidebar_label: Playbooks
sidebar_position: 3
description: Reusable DocJacket Playbooks — apply key dates, tasks, due-date offsets, and email automation to a transaction in one step.
---

<!-- Canonical: https://help.docjacket.com/docs/tasks/task-templates -->
<!-- Source: docs/tasks/task-templates.mdx -->

# Playbooks

Playbooks are reusable transaction workflows. A Playbook can add the key dates, task list, due-date offsets, assignee roles, and email automation you use for a transaction type.

A Playbook is different from the **Key Date Library**. The Key Date Library defines reusable date rules. The Playbook consumes those dates and creates the tasks, due-date offsets, phases, assignments, and automation that depend on them.

## Applying a Playbook

1. Open a transaction
2. Go to the key-date timeline on the **Overview** tab
3. Click **Generate Timeline**
4. Pick the Playbook you want
5. Review the preview
6. Assign task owners if needed
7. Choose which phases to include if the Playbook has phases
8. Apply the Playbook

The Playbook's key dates and tasks are added to the transaction with priorities, due-date offsets, assignments, phases, and any configured email automation.

Email automation follows the Playbook settings: scheduled emails are created against their configured due-date anchors, and on-completion emails either auto-send or wait in the Review queue's **Ready for Review** tab when review is required.

If a transaction already has an applied Playbook, DocJacket warns you before stacking another one. You can add the new Playbook alongside existing work, or replace previously-applied template items when appropriate.

Manually added items and contract-extracted dates are preserved when replacing template-generated items.

## Creating a Playbook

1. Go to **Templates → Playbooks**
2. Click **New Playbook**
3. Add a name, transaction type, property category, state, side, and description
4. Save the template to open the Playbook builder
5. Add key dates from the **Key Date Library**, or create new key dates in the builder
6. Add tasks with names, phases, priorities, assignments, and due-date rules
7. Link tasks to the key dates they depend on
8. Add scheduled emails or on-completion actions if needed
9. Test the Playbook against a sample effective date
10. Save the Playbook

See [Playbooks](../templates/timeline-templates.md) for the full builder guide.

## How Playbooks use key dates

Playbook tasks should point to key dates instead of duplicating date math.

| Good | Avoid |
|------|-------|
| Due 2 days before Inspection Deadline | Due 8 days after Effective Date because that happens to match inspection timing |
| Due 1 business day before Closing Date | Due on a manually typed calendar date |

That keeps date rules in the **Key Date Library** and task workflows in **Playbooks**.

## Conditional tasks

A Playbook task can carry a condition — cash deal, sellers only, or any contingency (home warranty, septic, lead paint, and more). When the Playbook is applied, the deal's own details decide whether the task is created, so one Playbook covers every variation — you don't have to build a separate checklist for each scenario. See [Task Options](./task-options.md) for the full list of condition fields.

## Task phases and assignments

Playbook tasks can be grouped by phase. When applying a Playbook, phases let you apply only the portion of the workflow you need.

The apply flow can also assign tasks by owner or label. If you use the same assignments often, save them as defaults for future applies.

## Email automation

Playbook tasks can include email automation:

- Emails dated from the task due date or a Key Date
- Emails prepared when the task is completed
- **When this fires** — draft the email for review, or just notify you in-app
- Review-before-send email actions
- Auto-send actions
- Recipients and attached documents

Setting these on the Playbook is the efficient way to work: **every deal created from the Playbook inherits them**, so you don't have to configure the same email deal by deal. Changing a setting on a live deal only affects that deal — the next one starts from the Playbook again.

See [Email Automation](./email-automation.mdx) for the task-email behavior, and [Delivery mode](./email-automation.mdx#delivery-mode) for what **When this fires** does.

## Saving a transaction as a Playbook

If a transaction has a useful set of key dates, tasks, and automation rules, save it as a new Playbook template. Then open the new Playbook in the builder to clean it up before using it as a standard workflow.

## Tips

- Create Playbooks for each transaction type you handle, such as residential purchase, listing, land, or new build.
- Include due-date offsets relative to key dates so DocJacket calculates actual dates when the Playbook is applied.
- Use phases to apply only part of a Playbook.
- You can apply multiple Playbooks to the same transaction when needed.
- After applying a Playbook, you can still add, remove, or modify individual key dates and tasks.
- Keep reusable date rules in the **Key Date Library** and keep work steps in **Playbooks**.
