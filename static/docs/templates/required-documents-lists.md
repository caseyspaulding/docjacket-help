---
sidebar_label: Required Documents Lists
sidebar_position: 10
description: Create reusable required document lists for each transaction type, side, state, financing type, and workflow.
---

<!-- Canonical: https://help.docjacket.com/docs/templates/required-documents-lists -->
<!-- Source: docs/templates/required-documents-lists.md -->

# Required Documents Lists

Required Documents Lists define which documents should be collected for a transaction. They power the **Documents Needed** panel on a transaction, help the team see what is still missing, and appear in SitRep reporting.

Use them when your team repeatedly needs the same document checklist for a buyer, seller, listing, lease, referral, or state-specific workflow.

## Creating a list

1. Go to **Templates > Required Documents Lists**
2. Click **New Document Set**
3. Name the list for the workflow it supports
4. Add an optional description
5. Choose the transaction type and transaction side if the list is specific
6. Add each required document name
7. Add optional applicability filters
8. Set the list as default if it should be used automatically
9. Click **Create List** or **Save Changes**

Document names are simple placeholders, such as:

- Executed Purchase Agreement
- Seller Disclosure
- Lead-Based Paint Disclosure
- Inspection Report
- Appraisal
- Closing Disclosure

Keep names close to what your team already calls the files. That makes the transaction Playbook easier to scan and makes linked uploads easier to recognize.

## Applicability filters

Use applicability filters when a list should only apply to specific transaction situations.

Available filters include:

- Transaction type
- Transaction side
- Financing type
- Property type
- State
- Special circumstances

Examples:

- A Florida buyer purchase list
- A VA-financed buyer list
- A listing-side residential sale list
- A cash transaction list that does not require lender documents
- A new-construction list with builder-specific requirements

If a list applies broadly, leave filters blank.

## Conditional documents — will it prompt me for the HOA addendum?

A common question: *if there is an HOA mentioned in the contract, will DocJacket prompt
me to upload the HOA addendum, or flag that the addendum is needed?* Yes — that's what
conditional documents do, provided your list includes an HOA addendum marked as
conditional.

Applicability filters above decide whether a **whole list** applies. You can also mark
an **individual document** as conditional, so it only shows up on deals where it's
actually needed — an HOA addendum on HOA properties, a septic inspection where there's
a septic system, a lead-paint disclosure on older homes.

When you add a document to a list, mark it **If Applicable** and pick the condition
that decides when it's needed. The conditions you can choose from are:

| Category | Conditions |
|---|---|
| Property features | Property has an HOA · has solar · has septic · has a well · has a pool · radon contingency present · lead-paint concern |
| Property | Built before a year (you set the year) |
| Representation | Representing the buyer · representing the seller |
| Financing | Buyer is financing (loan) · cash deal (no loan) |
| Occupancy | Tenant occupied |
| Location | County is… (you set the county) |
| Other | Home warranty included |

### What happens when the list is applied

DocJacket checks each condition against what it knows about the deal — including
details read off the contract during extraction — and does one of three things:

- **Condition is true** → the document is added as a normal required item, the same as
  any unconditional one. So yes: if the deal has an HOA, an HOA-conditional document
  appears in the required list and shows as missing until you upload it.
- **Condition is false** → the document is left off that deal entirely, so your required
  list isn't cluttered with paperwork that doesn't apply.
- **DocJacket can't tell yet** → the document is added but **flagged**, showing the
  condition in plain language (for example, "the HOA contingency") so you can confirm it
  applies or remove it. This is the safe default: an unanswered question never silently
  drops a document you might need.

That last case is the common one early in a deal, before the contract has been read or
the contingency fields are filled in. It's why you may see a document flagged for
confirmation rather than simply appearing or not.

:::note
Conditions are evaluated **when the list is applied** to a transaction. If you later
learn the property has an HOA, update the deal and re-apply the list — or add the
document by hand — rather than expecting an already-applied list to change on its own.
:::

## Default, active, and inactive lists

Only active lists are available when applying a template on a transaction.

Use the list menu to:

- Edit a list
- Duplicate a list
- Set a list as default
- Deactivate or reactivate a list
- Delete a list

Set a default list for the workflow your team uses most often. Duplicating a list is the fastest way to create state, side, or financing variations without rebuilding every document name.

## Where lists appear

Required document lists are used from the transaction document workflow. In a transaction's documents area, the **Documents Needed** panel shows:

- Required documents
- Received and missing counts
- Overdue or blocking items
- Linked uploaded files
- Unlinked uploads that can be matched to a requirement

From the panel, users can:

- Apply an active Required Documents List
- Add a one-off required document
- Add a due date to a one-off requirement
- Mark a requirement as received
- Link an uploaded file to a requirement
- Upload a file directly to a requirement
- Switch between alphabetical and custom order
- Drag documents into a custom order
- Remove a requirement from that transaction

Applying a list to a transaction adds missing requirements and skips documents that already exist.

:::tip Apply early, and reuse by duplicating
Apply a list near the start of a transaction so missing documents are visible long before closing week. When you need a state, side, or financing variation, **duplicate** an existing list rather than rebuilding every document name from scratch.
:::

## Relationship to uploaded documents

A required document is the placeholder for what the team expects.

An uploaded document is the actual file.

For example:

- Required document: Seller Disclosure
- Uploaded file: 123-main-st-seller-disclosure-signed.pdf

Link the uploaded file to the required document so DocJacket can count it as received and show the transaction's document status accurately.

## Relationship to SitRep reports

The required-document checklist appears in SitRep reporting, so the list you apply to a transaction affects what the team can report as missing, received, overdue, or blocking.

## Tips

- Create separate lists for buyer, seller, listing, land, and new-build workflows when the requirements differ.
- Keep document names close to what your team and brokerage already use.
- Use a default list for the most common workflow, then duplicate it for variations.
- Use inactive lists for retired workflows instead of deleting them immediately.
- Apply a list early in the transaction so missing documents are visible before closing gets busy.
