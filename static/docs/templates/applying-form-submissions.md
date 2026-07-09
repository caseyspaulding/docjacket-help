---
sidebar_label: Applying Form Submissions
sidebar_position: 8
description: Review an online form submission and map its answers onto a transaction — contacts, property details, financials, custom fields, status, and dates.
---

<!-- Canonical: https://help.docjacket.com/docs/templates/applying-form-submissions -->
<!-- Source: docs/templates/applying-form-submissions.md -->

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

**Where the date lands depends on how the form is used:**

- **When the form creates the transaction** (an intake / Create Transaction form): mapped **date fields populate the matching key dates automatically** as the deal is created — Contract, Closing, Inspection Deadline, Appraisal Deadline, Financing Deadline, and so on.
- **On an existing transaction:** set contingency **deadlines directly on the deal's [Key Dates](../transactions/key-dates-and-financials.mdx)**, or apply a [checklist](./timeline-templates.md) that calculates them from an anchor date. This is the reliable way to get deadlines onto a deal that already exists.

:::tip Two ways to handle contingency deadlines
If the contract gives **actual dates**, capture them as **Date fields** on an intake form (or type them into Key Dates). If the contract gives **day counts** that vary per deal, build a [checklist](./timeline-templates.md) with anchor-date rules (e.g. *Inspection Deadline = Effective Date + 10 calendar days*) and apply it — DocJacket does the date math from the anchor date on the transaction. See [Contingencies & Repairs](../transactions/contingencies-and-repairs.mdx).
:::

## Tips

- Map **contacts and financials** on the Forms tab of an existing deal; they apply immediately.
- For **deadlines**, prefer capturing exact dates on an intake form, or use a checklist for day-count rules.
- A form field's *type* isn't enforced against its target — point a **Date** field at a date target so the value is read as a real date.
