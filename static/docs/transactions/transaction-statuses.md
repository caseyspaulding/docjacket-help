---
sidebar_label: Transaction Statuses
sidebar_position: 7
description: How DocJacket transaction statuses work — filter transactions, organize Pipeline columns, and customize statuses to match your workflow.
---

<!-- Canonical: https://help.docjacket.com/docs/transactions/transaction-statuses -->
<!-- Source: docs/transactions/transaction-statuses.mdx -->

# Transaction Statuses

Every transaction in DocJacket has a status that tells you where it is in the process. Statuses help you filter the Transactions list, organize Pipeline columns, trigger automation, and decide whether a transaction is still open work or terminal history.

## Default status set

New organizations start with a broader status set than just Active and Closed. Common seeded statuses include:

| Status | What it means |
|--------|--------------|
| **Active** | The default open status for new transactions |
| **Pending** | Open work that is waiting on something before it moves forward |
| **Under Contract** | Contract work is underway |
| **New Lead**, **Pre Market Listing**, **Listing Set Up**, **MLS Active** | Listing and lead stages your team may use before or during active listing work |
| **Obtaining Pre Approval**, **Submitting Offer** | Buyer-side stages before a full transaction is underway |
| **Transaction In Process**, **CTC Received**, **Closing Care** | Open transaction stages as the deal moves toward closing |
| **Impediment**, **Communication Stopped**, **On Hold** | Open statuses for blocked or paused work |
| **Closed** | A terminal status for transactions that closed successfully |
| **Cancelled** | A terminal status for transactions that fell through or should stop active workflow |

Your organization may hide, reorder, or supplement these statuses.

## Status types

Each status has a type:

- **Open** — active work that appears in the normal Transactions Pipeline.
- **Closed** — terminal work that is complete.
- **Cancelled** — terminal work that stopped before closing.

Closed and cancelled statuses are terminal. When you move a transaction from an open status into a closed or cancelled status, DocJacket closes out related pending work behind the scenes. Incomplete key dates are cancelled, open tasks are skipped, pending scheduled messages and scheduled emails are cancelled or removed, and unsent reminders are cleared.

Buyer-offer stages are handled separately from the Settings status editor. Offer-stage transactions appear on the Pipeline page's **Buyer Offers** tab and can be promoted into the regular transaction pipeline.

## Using statuses

### Filtering your transactions

On the **Transactions** page, use the status filter to see only the deals in a specific state. For example, filter to **Active** to see current workload, or **Closed** to review completed deals.

### Pipeline view

The **Pipeline** page shows transactions as a Kanban board. Each column represents an active non-offer status. Drag and drop transaction cards between columns to update their status. If the save fails, DocJacket rolls the card back.

The Pipeline page also has **Tasks** and **Buyer Offers** tabs. Tasks are grouped by due date. Buyer Offers keeps offer-stage work separate until you promote an offer into the main transaction pipeline.

### Changing a transaction's status

You can change a transaction's status in a few ways:

1. **From the transaction header** — Open the transaction and click the status chip
2. **From the pipeline** — Drag the card to a different column
3. **From the list** — Use inline status controls when available

## Custom statuses

If the default statuses don't match your workflow, create custom statuses in **Settings > Transaction Statuses**. For example, some TCs add statuses like:

- **Under Review** — Contract received but not yet fully executed
- **Clear to Close** — All conditions met, just waiting for the closing date
- **Post-Closing** — Deal is closed but still has outstanding items

In settings, you can add statuses, choose an Open/Closed/Cancelled type, set a custom color, reorder statuses, set the default for new transactions, hide statuses you no longer use, and delete eligible non-system statuses. The default status cannot be hidden until another status is set as the default. A non-system status cannot be deleted while transactions still use it.

Active non-offer statuses appear as columns in the main Pipeline view and as options in transaction status filters. Hidden statuses stop appearing in new status pickers, but historical transactions keep their saved status.
