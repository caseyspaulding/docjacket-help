---
sidebar_label: Key Dates & Financials
sidebar_position: 4
description: Track contract date, closing date, inspection deadlines, earnest money, purchase price, and commission on every DocJacket transaction.
---

<!-- Canonical: https://help.docjacket.com/docs/transactions/key-dates-and-financials -->
<!-- Source: docs/transactions/key-dates-and-financials.mdx -->

# Key Dates & Financials

Every transaction has dates and dollar amounts that need to be tracked carefully. DocJacket keeps the closing timeline and financial summary organized on the transaction Overview.

## Key dates

The closing timeline on the Overview shows your most important transaction dates and deadlines:

- **Contract date** — When the contract was executed
- **Closing date** — The target closing date
- **Inspection deadline** — When inspections must be completed
- **Appraisal deadline** — When the appraisal is due
- **Financing deadline** — When the buyer's financing must be secured
- **Possession date** — When possession transfers
- **Final walkthrough** — When the final walkthrough is scheduled
- **Other key dates** — Any additional dates relevant to the deal

Some dates are governed transaction dates, also called canonical key dates. A governed key date has a standard **Key Date Type**, such as Closing Date, Effective Date, Inspection Deadline, Financing Deadline, Final Walkthrough, or Possession Date. These standard types make tasks, reminders, calendar sync, reporting, smart fields, and checklist rules use the same anchor date.

Custom key dates are one-off dates for a specific deal. They can still appear on the timeline, link to tasks, and use reminders, but they do not replace governed transaction date fields.

### Editing dates

Use the transaction edit page for governed transaction dates. On the timeline, a governed row may show **Edit on Transaction Details** instead of Delete. That means the date belongs to the transaction's canonical date fields; edit or clear it from the transaction details so DocJacket keeps the transaction record and timeline row aligned.

Use the key-date drawer for custom or checklist-generated timeline dates. You can update the due date, status, notes, reminders, linked tasks, and portal note visibility. If a key date is missing its anchor, it appears as **Needs date** until the upstream transaction date is filled in.

When you move a key date, DocJacket may show a cascade preview before saving. Review the affected tasks, downstream key dates, manually overridden dates, completed dates, and missing-rule items before applying the change. For why some dates recalculate automatically and others don't, see [Recalculating Deadlines](./recalculating-deadlines.mdx).

If a date came from extraction, review it before saving so downstream tasks, reminders, scheduled emails, and calendar events use the correct anchor. In extraction review, extracted dates only become timeline key dates when you opt them into **Add to timeline?**.

## Financial summary

The financials section gives you a quick snapshot of the money side:

- **Purchase price** — The agreed sale price
- **List price** — For listings or listing-side reporting
- **Earnest money** — The deposit amount and who's holding it
- **Additional deposit** — A second earnest-money or deposit amount when applicable
- **Loan amount** — If the buyer is financing
- **Down payment** — Calculated from price minus loan amount
- **Seller concession** — Seller-paid credits or concessions
- **Appraisal gap** — Any appraisal-gap amount tracked on the deal
- **Home warranty amounts** — Buyer-paid or seller-paid home warranty amounts
- **Financing type** — Cash, financed, or other financing category

### Editing financials

Use the transaction edit page to update financial fields. If you used AI extraction to create the transaction, these fields may be pre-populated from the contract — just verify they're correct before saving.

:::tip
If you're tracking commission splits or detailed closing costs, you can add custom fields in **Settings > Custom Fields**.
:::
