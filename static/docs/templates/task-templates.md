---
sidebar_label: Key Date Library
sidebar_position: 3
description: Build reusable key date rules with anchor dates, offsets, business-day handling, and governed key date types.
---

<!-- Canonical: https://help.docjacket.com/docs/templates/task-templates -->
<!-- Source: docs/templates/task-templates.md -->

# Key Date Library

The Key Date Library stores individual reusable date rules. These are the building blocks that checklist templates use to create a transaction timeline.

Examples:

- Final Walkthrough Date = Closing Date - 1 business day
- Possession Date = Closing Date + 1 business day
- Inspection Deadline = Effective Date + 10 calendar days

## Creating a key date rule

1. Go to **Templates > Key Date Library**
2. Click **New Key Date**
3. Enter a name, such as "Final Walkthrough Date"
4. Choose a **Key Date Type** when the date maps to a governed DocJacket concept
5. Set the date calculation rule:
   - **Anchor Date** — the date this one depends on, such as Closing Date
   - **Offset Direction** — before or after the anchor
   - **Days Offset** — how many days
   - **Day Calculation** — calendar days or business days
6. Save the key date

## How checklists use key dates

Checklist templates consume key dates. Tasks should reference the key date they depend on instead of recreating the same date logic.

Good:

- Task due = Final Walkthrough Date - 3 days

Avoid:

- Task due = Closing Date - 4 days because that happens to equal the walkthrough date

Keeping the date rule in the Key Date Library prevents drift when the rule changes later.

## Custom key dates

Leave **Key Date Type** blank for organization-specific dates that do not map to a standard DocJacket concept. Custom key dates can still be used in checklists and transactions, but governed types make automation, reporting, calendar sync, and smart fields more reliable.
