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
- **Status** — set the transaction to a specific status
- **Custom fields** — any custom field your organization has defined

For capturing contact details specifically, see [Collecting Contacts on Forms](./collecting-contacts-on-forms.md).

## Capturing dates and deadlines

A couple of things are worth knowing so your contingency dates land correctly.

**Forms don't do date math.** A form can't turn a *number of days* into a deadline — there's no "Effective Date + 10 days" calculation on the form side. If you put a number field like "Inspection period: 10 days" on a form, it stays the number 10; it never becomes a date. To get an actual deadline, **capture the calendar date on the form** with a **Date** field (one per deadline: Inspection, Financing, Appraisal, Closing).

**Mapped date fields become the transaction's key dates.** Add a **Date** field to the form for each deadline (Inspection, Financing, Appraisal, Closing, Contract, and so on), then map it to that deadline:

- **On an existing transaction** — map the Date field on the **Forms** tab and apply the submission; DocJacket writes the value to the deal's [Key Dates](../transactions/key-dates-and-financials.mdx).
- **When the form creates the transaction** (an intake / Create Transaction form) — mapped date fields populate the matching key dates automatically as the deal is created.

Either way the value has to be an actual calendar date, so use a **Date** field — a free-text "10 days" won't apply as a deadline.

:::tip Two ways to handle contingency deadlines
If the contract gives **actual dates**, capture them as **Date fields** on an intake form (or type them into Key Dates). If the contract gives **day counts** that vary per deal, build a [checklist](./timeline-templates.md) with anchor-date rules (e.g. *Inspection Deadline = Effective Date + 10 calendar days*) and apply it — DocJacket does the date math from the anchor date on the transaction. See [Contingencies & Repairs](../transactions/contingencies-and-repairs.mdx).
:::

## Tips

- Map **contacts, financials, and deadlines** on the Forms tab of an existing deal — they apply immediately.
- If the contract gives **day counts** instead of dates, use a [checklist](./timeline-templates.md) with anchor-date rules rather than trying to capture the count on the form.
- A form field's *type* isn't enforced against its target — point a **Date** field at a date target so the value is read as a real date.
