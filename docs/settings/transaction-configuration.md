---
sidebar_label: Transaction Configuration
sidebar_position: 10
description: Configure DocJacket transaction roles, default TC fees, statuses, fields, custom fields, contingencies, and key-date statuses to match how your team works.
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

## Default Fees (your default TC fee)

To set your default TC fee, go to **Settings > Default Fees** (it's in the **Transactions** group of the Settings menu, at `/settings/fees`). It isn't under Billing or Organization. Billing is your DocJacket subscription, not the fee you charge on deals.

The default fee is a standing transaction coordination fee that DocJacket posts automatically as a fee line on every new deal's **Fees & Payments** ledger (on the deal's **Payments** tab), so your expected TC income is already there instead of being typed in on each file.

- **Base fee:** the **Amount** and an optional **Description** (for example, *TC Fee*).
- **Per-side overrides:** a different amount for **Buyer**, **Seller**, or **Dual** deals. Leave a side's amount blank to use the base fee. Enter **0** to charge no fee on that side.

Click **Save**. The default applies only to deals created from then on. Existing deals are never changed, and deleting the fee from one deal doesn't add it back.

Anyone can view the default fee. Changing it takes a workspace owner or admin, unless an owner has turned on **Allow team members to edit Playbooks and settings** under **Settings > Organization**.

To bill the fee to an agent and collect it online, see [Invoices & Payment Requests](../transactions/invoices-and-payment-requests.mdx).

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

### Organizing custom fields into sections

By default, custom fields show together in one block. You can group them into labeled sections instead — so all your date fields sit together, all your client-info fields together, and so on — and that grouping shows up both when you edit a transaction and on the transaction Overview.

The available sections are **Client Information**, **Dates**, **Financial Summary**, **Title Company**, **Lender**, **Agents**, and **Additional Details**. Any field you haven't sorted stays in a **Custom Fields** group at the bottom.

To assign a field's section, you have two options:

- **One at a time** — Edit the field and pick a section from the **Overview section** dropdown.
- **In bulk** — On the **Smart Fields** tab, check the boxes next to the fields you want to group, choose a section from the bar that appears, and click **Assign section**. A badge on each field shows which section it's in.

:::tip Sort once, stay organized
New custom fields start out unsorted. Assign their sections once — the bulk tool makes quick work of it — and every transaction form stays organized from then on.
:::

### Custom fields are for transactions, not contacts

Custom fields belong to **transactions** only. Each value is saved on a deal, so there's no way to add a custom field to a **contact** (a client, agent, or vendor). A smart field used as a contact detail would have to be re-entered on every deal.

**Tracking a client's birthday?** You don't need a custom field for that. Contacts have a built-in **Birthday** field (and a **Home Anniversary** field) on the **New Contact** form, and **Birthday** is a column you can include when you import contacts. Upcoming birthdays and home anniversaries show on the **Contacts > Follow-ups** tab, soonest first.

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
