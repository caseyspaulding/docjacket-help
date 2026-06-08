---
sidebar_label: Pipeline View
sidebar_position: 3
description: Use the DocJacket Pipeline page to manage transaction status, task due dates, pending intakes, and buyer offers from visual boards.
---

<!-- Canonical: https://help.docjacket.com/docs/reports/pipeline-view -->
<!-- Source: docs/reports/pipeline-view.mdx -->

# Pipeline View

The **Pipeline** page is a visual board for active work. It has three views:

- **Transactions** — transactions grouped by status
- **Tasks** — tasks grouped by due-date bucket across active deals
- **Buyer Offers** — offer-stage transactions that can be promoted when they become active deals

Use the tabs at the top of the Pipeline page to switch views.

## Transactions view

The Transactions view is a Kanban board. Each column represents a transaction status configured for your organization. Transaction cards appear in the column that matches their current status.

### Transaction cards

Each card shows:

- **Property address** — Click to jump into the transaction
- **Type and side** — Buyer, seller, dual, lease, and related labels
- **Primary image** — When a property image is available
- **Parties** — Buyer or seller names when available
- **Closing date** — When it's expected to close
- **Unread message badge** — When that transaction has unread messages

### Drag and drop

Move a card between status columns to update the transaction's status. DocJacket saves the change in the background and rolls the card back if the update fails.

## Inbox intakes

When unprocessed intakes exist, the Transactions view shows an **Inbox** column before the status columns. Click an intake card to review it, confirm the transaction details, and convert it into a transaction.

The Inbox column is for new inbound leads or front-door submissions that have not been processed yet.

## Tasks view

The Tasks view shows tasks across active transactions in due-date buckets such as past due, today, tomorrow, the next several days, later, and undated.

Use this view when you want to work by deadline instead of by transaction.

You can:

- Search tasks
- Filter by priority, assigned-to-me, active transactions only, past-due tasks, and undated tasks
- Sort by due date, name, or priority
- Mark tasks complete or incomplete
- Click into the related transaction task
- Edit a task due date inline
- Drag task cards to supported date buckets to reschedule them
- Use task color/status dots when configured

## Buyer Offers view

The Buyer Offers view shows offer-stage transactions separately from the active transaction pipeline. When an offer becomes an active transaction, use the promote action to move it into the main Transactions view.

## When to use Pipeline vs. Transactions list

- **Pipeline** is great for a visual overview of where all your deals stand — especially helpful in team meetings or for quick status checks
- **Transactions list** is better for searching, filtering, inline editing fields, and working with many transactions at once

Both surfaces work with the same transaction records; they are different ways to manage the same work.
