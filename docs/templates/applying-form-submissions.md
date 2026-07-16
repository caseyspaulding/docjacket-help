---
sidebar_label: Applying Form Submissions
sidebar_position: 8
description: Review an online form submission and map its answers onto a transaction — contacts, property details, financials, custom fields, status, and dates.
---

# Applying Form Submissions to a Transaction

Online Forms collect structured answers. Once someone submits a form, you **review** the submission and **map** its values onto a transaction, so you don't re-key anything by hand.

## Where submissions show up

- **Forms sent from a deal** (Update Transaction / Additive forms) — submissions appear on that transaction's **Forms** tab.
- **Intake forms** (Create Transaction purpose) — submissions enter the intake flow, where you review them and **create a new transaction** from the answers.

See [Online Forms](./online-forms.md) for the difference between form purposes and how to share each kind.

## Reviewing a submission

On the transaction's **Forms** tab, expand a submission to see every submitted field. As you review, you can mark each field as **clear**, **needs documents**, **needs internal review**, **needs attorney review**, or **resolved** — so the rest of the team knows what's been checked.

## Mapping fields onto the transaction

For each submitted field, choose the transaction field it should fill, then apply. You can map to:

- **Property** — address, city, state, ZIP
- **Contacts** — Buyer, Second Buyer, Seller, Second Seller (plus email and phone for each)
- **Agents** — Listing Agent and Buyer's Agent (name, email, phone, brokerage)
- **Financials** — purchase price, loan amount, earnest money, down payment, financing type
- **Periods (days)** — day counts like Inspection Period, Financing Period, Earnest Money, and Title Review, which DocJacket turns into calculated deadlines (see [Capturing dates and deadlines](#capturing-dates-and-deadlines))
- **Status** — set the transaction to a specific status
- **Custom fields** — any custom field your organization has defined

For capturing contact details specifically, see [Collecting Contacts on Forms](./collecting-contacts-on-forms.md).

## Capturing dates and deadlines

There are two ways to get contingency deadlines onto a transaction from a form — as a **number of days** or as an **actual date** — and DocJacket handles both. This is especially useful on an **intake form when the contract isn't uploaded yet**: enter what the contract says and the deadlines are filled in as the deal is created.

**Enter a number of days and DocJacket calculates the deadline.** If the contract gives day counts (e.g. "inspection within 10 days"), put a number field on the form and map it to one of the **Periods (days)** targets. On apply, DocJacket computes the actual deadline from the transaction's anchor date — honoring your business-day calendar, holidays, and state conventions — and stores it as a *rule*, so the deadline **recalculates automatically if the anchor date later moves**. The recognized period targets are:

- **Inspection Period (days)** → Inspection Deadline
- **Financing Period (days)** → Financing Deadline
- **Earnest Money (days)** → Earnest Money Due
- **Title Review (days)** → Title Deadline
- **Repair Negotiation / Repair Resolution (days after inspection)** and **Final Walkthrough (days before closing)**

**Or capture an actual calendar date.** If the contract gives fixed dates, add a **Date** field for each deadline (Inspection, Financing, Appraisal, Closing, Contract, and so on) and map it to that key date. DocJacket writes the value straight to the deal's [Key Dates](../transactions/key-dates-and-financials.mdx) — on an existing transaction (map on the **Forms** tab and apply) or as the deal is created from an intake form.

:::tip Use the right target for day counts
Day-count auto-calculation happens when you map the number field to a **Periods (days)** target above — a number mapped to a plain custom field just stays a number. If you need a day-count deadline that isn't in that list, use a [checklist / timeline template](./timeline-templates.md) with an anchor + offset rule (e.g. *Inspection Deadline = Effective Date + 10 calendar days*). See [Contingencies & Repairs](../transactions/contingencies-and-repairs.mdx).
:::

## Tips

- Map **contacts, financials, and deadlines** on the Forms tab of an existing deal — they apply immediately.
- The contract gives **day counts**? Map a number field to a **Periods (days)** target and DocJacket calculates the deadline. Only need a day-count that isn't a recognized period? Use a [checklist](./timeline-templates.md) with anchor-date rules instead.
- A form field's *type* isn't enforced against its target — point a **Date** field at a date target (or a number field at a Periods target) so the value is read correctly.
