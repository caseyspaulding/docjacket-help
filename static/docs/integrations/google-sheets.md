---
sidebar_label: Google Sheets
sidebar_position: 4.5
description: Export a row for each deal to a Google Sheet commission tracker when the deal reaches a status you choose. What gets sent, when, and what you can change.
---

<!-- Canonical: https://help.docjacket.com/docs/integrations/google-sheets -->
<!-- Source: docs/integrations/google-sheets.md -->

# Google Sheets: export deals to a spreadsheet

The Google Sheets export sends one row per deal to a Google Sheet you own, for example a commission tracker. You pick the sheet, the tab, and the deal statuses that trigger the export. DocJacket fills in the row.

## Where to find it

Go to **Settings > Advanced > Google Sheets**. It is not a card on **Settings > Integrations**; it has its own page.

Owners and admins can save the settings. The page also shows for members who have been given access to advanced settings.

## Set it up

1. Share your Google Sheet with the service-account email shown at the top of the page, and give it **Editor** access. Use the copy button next to the email.
2. Paste the **Google Sheet URL**. When you click out of the field, the page checks access and shows "Sheet is accessible" or an error.
3. Enter the **Tab name**. It must match the tab in your sheet exactly, including capital letters.
4. Set the **Trigger statuses**. These are the deal statuses that send a row. Type each status exactly as it is named in your account. Capital letters don't matter, but spelling, spaces and renamed statuses do. At least one is required. The defaults are Under Contract, Under Contract Buyer and Under Contract Seller.
5. Check **Enable automatic export**.
6. Click **Save settings**.
7. Click **Test export** to check the connection. It adds a sample row with the address "TEST — 123 Sample Street" and a note saying it is safe to delete. Delete that row from your sheet afterward.

A status card on the page shows when the last export ran and whether the connection is **Active** or **Degraded**.

## When a row is sent

A row is sent when a deal's status changes to one of your trigger statuses. That includes changing the status from the status chip at the top of the deal, from the deal's **Edit** form, and moving a listing to under contract.

- Creating a deal does not send a row by itself.
- The first time a deal reaches a trigger status, DocJacket adds a new row to the bottom of the tab.
- If the same deal reaches a trigger status again later, DocJacket updates that deal's existing row with the current values and a new timestamp. It does not add a second row.
- There is no button to send a single deal on demand.

## What each row contains

The export sends much more than the address. Each row has 25 columns, A through Y, in this order:

| Column | What it holds |
|---|---|
| A | Export date and time, in UTC |
| B | Property address |
| C | Agent: the listing agent on a seller-side deal, the buyer's agent otherwise |
| D | Contract date |
| E | Due diligence / inspection deadline |
| F | Closing date |
| G | The deal's status at the time of the export |
| H | Contract price |
| I | Gross commission for the deal's side: the commission dollar amount on the deal if one is entered, otherwise the contract price times the commission rate, rounded to the cent. Blank if the deal has neither an amount nor both a price and a rate |
| J | Team split. Blank unless DocJacket has set up commission splits for your account. Splits are not self-serve yet |
| K | Admin / TC fee: the deal's TC fee, or the total of its TC fee entries. Shows `TC fee missing` if the deal has neither |
| L | Lead source: the deal's Listing Source if it has one, otherwise its Lead Source |
| M | Always blank |
| N | Lender |
| O | Referral: the computed referral amount when a commission was computed, otherwise the deal's referral fee |
| P, Q | Always blank (two expense-cap columns) |
| R | Commission percentage for the deal's side, such as `3%`. Shows `rate missing` if the deal has none |
| S | Contingent: `Yes` if an inspection, appraisal or financing contingency is Active, otherwise `N` |
| T | Client name: the seller on a seller-side deal, the buyer otherwise |
| U | City |
| V | Property type |
| W | Buy/Sell: `Buy`, `Sell` or `Dual` |
| X | Always blank |
| Y | The deal's **Additional Notes** field |

Dates are written as text, so Google Sheets won't reformat them.

## What you can and can't change

You can change the sheet, the tab, the trigger statuses, and turn the export on or off.

You can't choose, remove or reorder the columns. The layout above is fixed. The export writes data rows only and never writes column headings, so type your own headings into row 1 of the tab to match the columns.

## Troubleshooting

- **Status shows Degraded.** The card shows the last error. DocJacket marks the export Degraded after 5 failed attempts in a row.
- **"Sheet is accessible" doesn't appear, or exports fail.** Check that the sheet is shared with the service-account email as **Editor**, and that the Tab name matches your tab exactly.
- **No row appears when a deal changes status.** Check that **Enable automatic export** is on, that the new status is spelled exactly like one of your Trigger statuses, and that the sheet is saved in the settings.
- **A row updated in the wrong place.** DocJacket remembers the row it wrote for each deal and updates that same spot later. If you sort the tab or delete rows above exported rows, a later update can land on a different row than you expect. Avoid sorting or deleting rows above exported rows.
- **Column I is empty.** The deal has no commission dollar amount, and is missing its contract price or its commission rate. Add either one on the deal and the next export fills it.
- **Column J is empty.** That is expected unless commission splits have been set up for your account.
