---
sidebar_label: Transaction Configuration
sidebar_position: 9
description: Configure transaction roles, statuses, fields, custom fields, contingencies, and key date statuses.
---

# Transaction Configuration

The transaction configuration pages in Settings control the labels, dropdowns, statuses, and custom fields users see while managing transactions.

## Transaction Roles

Use **Settings > Transaction Roles** to configure contact roles used on transactions.

Transaction roles determine how contacts appear in assignment dropdowns, transaction sections, smart fields, reports, and templates. Keep these role names aligned with how your team talks about buyers, sellers, agents, title, lenders, inspectors, and other deal participants.

From the Transaction Roles page, you can:

- Filter roles by category
- Add custom roles
- Set the role category
- Assign a party group, such as Buyer side, Listing side, Title, Lender, Inspection, Services, or Transaction
- Choose the default phone type
- Allow multiple contacts for a role and set the maximum number per transaction
- Make custom roles active or inactive
- Edit or delete custom roles

System roles are protected. You can use them, but you cannot edit or delete them. Custom roles that are already used on transactions cannot be deleted until those assignments are moved or removed.

## Transaction Statuses

Use **Settings > Transaction Statuses** to customize transaction statuses.

From this page, you can:

- Add custom statuses
- Choose an **Open**, **Closed**, or **Cancelled** status type
- Pick a display color
- Drag statuses into the order your team uses
- Set the default status for new transactions
- Hide statuses that should no longer appear
- Delete eligible custom statuses

Active non-offer statuses appear as columns on the Pipeline page's **Transactions** tab and as options in transaction status filters. Closed and cancelled status types are terminal; moving a transaction from an open status into one of those types closes out related pending workflow.

System statuses are protected. You can hide or reorder them, but you cannot rename, edit, or delete system statuses. The default status cannot be hidden until another status is set as the default. Non-system statuses can be edited or deleted when allowed by the current data; statuses currently used by transactions must be reassigned before deletion.

## Transaction Fields

Use **Settings > Transaction Fields** to manage dropdown options for common transaction fields.

The current field groups are:

- **Transaction Types** — Deal types like Purchase, Sale, or Lease
- **Transaction Sides** — Party sides like Buyer, Seller, or Dual
- **Financing Types** — Loan or payment types like Conventional, FHA, VA, or Cash
- **Property Types** — Property categories like Single Family, Condo, or Townhouse

Each option can have a stored value and an optional display label. You can add custom options, reorder them, hide options, set the default option for a field, and delete eligible non-system options.

System options are protected. You can hide or reorder them, but you cannot rename, edit, or delete them. A default option cannot be hidden until another option is set as the default.

## Custom Fields

Use **Settings > Custom Fields** to capture transaction-specific data that is not part of the standard transaction form.

The page has three tabs:

- **Smart Fields** — Custom fields you can fill on transactions and reference in templates with merge codes like `{{final_walkthrough_date}}`
- **AI Extraction** — Custom fields the AI should try to extract from uploaded contracts
- **Field Display** — Profiles that control which built-in transaction fields appear in transaction views and what order they use

Smart Fields support text, text area, number, currency, date, date and time, dropdown, email, phone, and URL field types. A custom field can be required, inactive, shown as a column in the transactions list, and configured with help text, placeholder text, a default value, or dropdown options.

Merge codes are created when the field is created and cannot be changed later. Use lowercase letters, numbers, and underscores, starting with a letter. DocJacket blocks merge codes that collide with built-in smart fields or another custom field in your organization.

AI Extraction fields use the same custom field system, but they also require an extraction hint. You can scope an extractable field to specific states and document types so the AI only looks for it when it applies. Each organization can have up to **15** AI-extractable custom fields enabled at once.

## Contingencies

Use **Settings > Contingencies** to manage the contingency options available on transactions.

From this page, you can:

- Add custom contingencies with a stable internal key
- Rename contingency labels
- Choose whether a contingency applies to purchase transactions, listing transactions, or both
- Reorder contingencies
- Hide contingencies from transaction views
- Restore missing built-in defaults
- Delete contingencies that are not in use

If a contingency is already used on transactions, deleting it marks it inactive instead of removing it. Existing transaction history stays intact, and the contingency is hidden from new transaction work.

## Key Date Statuses

Use **Settings > Key Date Statuses** to control status options in the Key Date drawer.

You can:

- Add organization-owned statuses
- Rename existing labels
- Drag statuses into a preferred order
- Mark statuses as terminal or in progress
- Archive statuses you no longer use
- Show archived statuses and restore them

Terminal statuses close out a key date and can cancel related scheduled emails. In-progress statuses keep the key date open.

DocJacket starts with a shared system status list. The first time your organization changes key date statuses, DocJacket creates an organization-owned copy so your changes do not affect other organizations.

Archived statuses are hidden from the Key Date status dropdown, but existing key dates keep their saved status. If you archive your only **Completed** system status, the green Complete shortcut on Key Date drawers can disappear; add or keep another terminal status if you still need that shortcut.
