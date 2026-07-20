---
sidebar_label: Invoices & Payment Requests
sidebar_position: 11
description: Send an invoice or payment request to collect your transaction coordination fee from an agent, broker, or team — created on a transaction's Payments tab and paid online by card or bank.
---

<!-- Canonical: https://help.docjacket.com/docs/transactions/invoices-and-payment-requests -->
<!-- Source: docs/transactions/invoices-and-payment-requests.mdx -->

# Invoices & Payment Requests

DocJacket lets a transaction coordinator (or org admin) bill their **transaction coordination fee** to the agent, broker, or team on a deal, and collect it online by card or bank transfer. Each invoice is a **payment request** — you create it, DocJacket emails a branded PDF with a **Pay Invoice** button, and the invoice flips to **Paid** automatically once the payer checks out.

## Can I send an invoice without a transaction?

**No.** Every invoice in DocJacket lives on a transaction. You create invoices from a deal's **Payments tab**, so there's no standalone invoice or "invoice a contact" that isn't attached to a transaction. If you want to bill for a file, open (or create) the transaction first, then add the invoice there.

This keeps the property, agent, and deal details on the invoice automatically, and lets you see who has paid right on the deal.

## What invoices are — and aren't

Invoices are only for a coordinator's **own service fee** — for example a **Transaction Coordination Fee** billed to the agent, broker, or team you're working the file for.

Invoices are **not** for earnest money, escrow, commissions, closing funds, or any buyer/seller money. It's one payer (the agent) paying one payee (your own business) for your coordination service.

## Before you can get paid

The first time you send an invoice, DocJacket asks you to **connect a payout account** (powered by Stripe) in **Settings**. This is where the money lands. Until a payout account is connected, the **Send** button is blocked so you never email a payer a link they can't pay.

You only have to do this once. After that, sending an invoice is a two-click flow.

## Create an invoice

1. Open the transaction you want to bill against
2. Go to the **Payments** tab
3. Click **Create Invoice**
4. Fill in the invoice:
   - **Fee name** — defaults to *Transaction Coordination Fee*; rename it if you like (or add multiple fee lines)
   - **Amount** — the fee you're collecting
   - **Payer name and email** — who's paying. DocJacket pre-fills this from the agent on the transaction, so you can usually leave it as-is
   - **Due date** — optional
5. Save it. The invoice starts as a **Draft** so you can review it before it goes out.

## Send the invoice

Click **Send**. DocJacket:

- Generates a branded invoice **PDF** (with your logo and business name)
- **Emails the payer** the invoice with the PDF attached and a **Pay Invoice** button
- Moves the invoice to **Sent**

The payer clicks **Pay Invoice**, pays by card or bank on a secure checkout page, and the invoice automatically updates to **Paid** — no manual reconciling. You'll see the **Paid** status right on the Payments tab.

:::tip Copy a pay link instead of emailing
If you'd rather send the pay link yourself (over text, in your own email, etc.), you can generate a payment link for the invoice instead of having DocJacket email it.
:::

## Invoice statuses

| Status | Meaning |
|---|---|
| **Draft** | Created but not sent yet — safe to edit or delete |
| **Sent** | Emailed to the payer, awaiting payment |
| **Paid** | The payer completed checkout |
| **Overdue** | Past the due date and still unpaid |
| **Failed** | A payment attempt didn't go through |
| **Canceled** | You canceled the request |
| **Refunded** | The payment was refunded |

## Canceling or deleting an invoice

From the **Payments** tab you can **cancel** an invoice that's no longer valid, or **delete** one. Deleting is limited to invoices that are still **Draft**, **Canceled**, or **Failed** — a paid invoice stays on the record so your payment history is accurate.
