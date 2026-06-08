---
sidebar_label: Checklists & Key Dates
sidebar_position: 2
description: Apply checklist templates to a DocJacket transaction. Set up key dates, tasks, and automations automatically by transaction type.
---

<!-- Canonical: https://help.docjacket.com/docs/calendar/timeline-templates -->
<!-- Source: docs/calendar/timeline-templates.mdx -->

# Checklists & Key Dates

Checklist templates are pre-built workflows for different transaction types. Use one on a transaction and DocJacket can create the key dates, tasks, due-date rules, and automations that belong to that deal.

The **Key Date Library** holds reusable date rules. **Checklists** consume those key dates and add the tasks, due-date offsets, phases, assignments, and automation that use them.

## Generating a closing timeline from Overview

1. Open a transaction
2. Go to the **Overview** tab
3. Find the closing timeline near the top of the Overview
4. Click **Generate Timeline**
5. Choose a checklist template that matches the transaction type, side, and state
6. Review the anchor dates, key dates, task counts, owner assignments, phases, and replacement option
7. Apply the template

This flow applies one checklist template at a time. It is the best path when you want DocJacket to create or replace the transaction's key-date timeline and linked task workflow from the transaction's anchor dates.

When the template is applied, DocJacket creates the calculated key dates and any linked tasks for that transaction. If the transaction already has checklist-generated items, the replacement option removes previously-applied template items while preserving manually added items and dates extracted from the contract.

## Adding checklist tasks from the Tasks tab

The transaction **Tasks** tab also has **Add checklist**. That picker is task-focused:

- You can select one or more checklists.
- The created tasks stay grouped under the checklist name.
- Due dates calculate from the transaction's existing key dates when the checklist has due-date rules.
- Mismatched or milestone-only templates may still appear, but DocJacket creates only what the template contains.

Use **Generate Timeline** from Overview for key-date-and-task timeline setup. Use **Add checklist** from Tasks when you mainly want to add saved task workflows to an existing transaction.

## What's in a template

Each template includes:

- **Key Dates** — Important dates like inspection period, appraisal, financing, final walkthrough, possession, and closing
- **Date rules** — Each key date can calculate relative to another date, such as "10 days after Effective Date" or "1 business day before Closing"
- **Tasks** — Work items tied to those key dates
- **Automations** — Prepared emails or rules tied to tasks and dates

## Viewing your closing timeline

DocJacket offers two views:

- **Pipeline view** — A horizontal visual overview of key dates. Complete, upcoming, overdue, and needs-date items are easy to spot.
- **Vertical checklist view** — A vertical list of key dates with statuses, phases, governed Key Date Type chips, linked tasks, reminders, and visual ordering.

Toggle between them with the view switch at the top.

## Adding custom key dates

Templates are a starting point. You can always add custom key dates for dates the template doesn't cover:

1. Click **Add** on the closing timeline
2. Enter the key date name, Key Date Type if applicable, category, date, position, and description
3. Open the key-date drawer to link tasks, add reminders, or adjust notes

For reusable date logic, manage the rule in **Templates > Key Date Library** so future checklists can use the same definition.

## When dates change

When a transaction date changes, review the affected key dates and tasks in the Overview timeline. Template-generated items keep their anchor-date relationship so the transaction timeline can stay tied to the same source dates.

If a moved key date affects linked tasks or downstream key dates, DocJacket shows a cascade preview before applying the change. Completed dates, manually overridden dates, and missing-rule items may be locked until you reopen, reset, or edit the underlying rule.

## Creating your own templates

Go to **Templates > Checklists** to create custom checklist templates for your workflow. Use **Templates > Key Date Library** to manage reusable key date types and rules that checklists can consume.
