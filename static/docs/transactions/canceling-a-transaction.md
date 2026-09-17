---
sidebar_label: Cancelling a Transaction
sidebar_position: 8
description: How to cancel or close a transaction in DocJacket, what happens to its tasks and deadlines, why cancelling a purchase never affects a separate listing, and what to do when a deal falls through and you want to put the listing back on the market.
---

<!-- Canonical: https://help.docjacket.com/docs/transactions/canceling-a-transaction -->
<!-- Source: docs/transactions/canceling-a-transaction.mdx -->

# Cancelling or Closing a Transaction

When a deal falls through — or closes successfully — you move the transaction into a **terminal status** so it stops appearing as active work and its automation winds down cleanly.

## How to cancel a transaction

Cancelling is a status change. Move the transaction into any status whose type is **Cancelled** (the seeded **Cancelled** status, or a custom one you created with the Cancelled type). You can change the status:

1. **From the transaction header** — click the status chip and pick a Cancelled status
2. **From the Pipeline** — drag the card into a Cancelled column
3. **From the Transactions list** — use the inline status control
4. **From the transaction's Edit form** — change the **Status** field and save

All four do the same thing. Closing a completed deal works the same way, using a **Closed**-type status. See [Transaction Statuses](./transaction-statuses.mdx) for how status types work and how to add your own.

## What happens when you cancel or close

Moving a transaction from an open status into a **Closed** or **Cancelled** status is a *terminal* transition. DocJacket automatically winds down the deal's pending work — **only for that transaction**:

- Incomplete **key dates** are marked **Not Applicable** (completed and waived dates are left as-is)
- Open **tasks** are marked **Skipped**, noted "Transaction cancelled" or "Transaction closed" to match the status you chose
- Pending **scheduled messages** are cancelled
- Unsent **reminders** are deleted
- Pending **scheduled emails** are deleted (already-sent emails are kept, so your send history stays intact)
- **Calendar events** for the transaction are removed

**Closed vs. Cancelled:** both wind down pending work the same way. The difference is that a **Closed** status also fires your "closed" automation and pushes the closed stage to connected CRMs (like Follow Up Boss). A **Cancelled** status does not trigger closed-stage automation.

:::note Terminal cleanup only touches this transaction
Every one of these changes is scoped to the single transaction you're cancelling. Nothing cascades to any other deal.
:::

## Cancelling a purchase but keeping the listing

A **listing** and a **purchase** are independent transaction records — different deals, each with its own status, tasks, and dates. There is no automatic link between them, so **cancelling a purchase has no effect on a listing**.

If you have a separate listing and a separate purchase:

1. Open the **purchase** transaction and move it to a **Cancelled** status
2. Your **listing** stays exactly as it was — still open and in your queue

To find the listing afterward, open **Transactions** and filter the type to **Listing** (see [Listings](./listings.md)).

:::caution If you turned a listing into a sale or purchase
[Turning a listing into a sale or purchase](./listings.md#turning-a-listing-into-a-sale-or-purchase) doesn't create a second record — it changes the *same* record's type. In that case there is no separate listing to keep, and cancelling the transaction cancels that single record. If you want it to go back to being an active listing, change its **type and status** back rather than cancelling — cancel will not restore or re-create a listing.
:::

## A deal fell through — putting a listing back on the market

Often the "purchase" and the "listing" are the **same record**: you took a listing, it went under contract, and now the buyer has backed out. You want it to go back to being an active listing — still in your pipeline, without the buyer's information cluttering it up.

In that case, **don't cancel the transaction.** Cancelling is a terminal status, so it winds the deal down — open tasks become **Skipped**, key dates become **Not Applicable**, and reminders and scheduled emails are **deleted**. Moving the transaction back to an open status afterward does **not** automatically restore any of that, so you'd end up rebuilding your listing Playbook by hand.

Instead, move the deal **back to an active listing status** — and let DocJacket clear the buyer out for you:

1. Open the listing and click the **status chip** (or drag its card in the Pipeline)
2. Change the status from **Under Contract** back to an open listing status — **Active**, **MLS Active**, or whichever your office uses
3. DocJacket recognises that a listing is leaving its under-contract status and asks **"Buyer fell through?"**. The dialog lists exactly what it is about to do — how many buyer-side contacts it will remove, which contract fields it will clear, how many contract key dates and tasks it will retire, and how many pending emails and reminders it will cancel — then offers two buttons:
   - **Put back on market** — removes the buyer, the buyer's agent and any other buyer-side contacts from this deal (their contact records are kept), clears the contract fields (buyer names, purchase price, earnest money, financing and loan details, contract and under-contract dates), retires the key dates and closing-checklist tasks that came with the contract (marked *not applicable* and *skipped*, never deleted), cancels the contract's pending emails and unsent reminders, marks the accepted offer **withdrawn**, and moves the deal to the status you picked. **Kept:** every document, your listing-side contacts, and the listing's own key dates and tasks.
   - **Just change the status** — the plain status change: the deal moves to the status you picked and nothing else is touched.
4. **Cancel** keeps the deal exactly as it was.

If your office has an automation that runs when a deal enters the status you picked (a "back to Active" email, say), the dialog tells you so — it will run either way, the same as any other status change.

The dialog only appears on **listing-side** deals moving out of an under-contract status. A buyer-side deal, or a listing moving between two active statuses, gets the ordinary status change with no prompt.

:::tip Cancel vs. change status
Cancel when the deal is truly dead and you want its pending work to stop. If the property is simply going back on the market, **change the status** instead — and choose **Put back on market** if you want the buyer's data gone, or **Just change the status** if you'd rather tidy it up yourself.
:::

## Reopening a transaction

If you cancelled a deal by mistake, move it back into an **open** status to reactivate it. Because the terminal transition marked pending items as Skipped or Not Applicable, review the transaction's **tasks** and **[key dates](./key-dates-and-financials.mdx)** afterward and restore anything that should be active again.
