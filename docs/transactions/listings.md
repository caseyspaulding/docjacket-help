---
sidebar_label: Listings
sidebar_position: 6
description: Manage listing workflows in DocJacket through the Transactions workspace — track listing-type records from prep to active to closing.
---

# Listings

Listings are managed through **Transactions**. The old standalone Listings route now sends you to the Transactions page filtered for listing-type records.

## Finding listings

1. Open **Transactions**
2. Filter the transaction type to **Listing**
3. Open the listing record you want to work on

Creating a new listing also starts from the transaction creation flow with the listing transaction type selected.

## Working a listing

A listing record uses the same transaction workspace: overview, contacts, documents, tasks, messages, notes, and reports. Listing-specific details appear inside the transaction when the record is a listing.

## When a listing goes under contract

When your listing gets an accepted offer — the listing went under contract — keep working on **the same file**. You don't need to start a new deal for the sale: DocJacket turns the listing into a Purchase on the same record, so every document, contact, key date, note, and bit of history carries over.

There are two ways to do it.

### Upload the accepted purchase contract into the listing

This is the quickest way when you have the signed contract in hand.

1. Open the listing and go to its **Documents** tab.
2. Upload the accepted purchase contract (**Upload**), then click **Extract data** on that document (the ⋯ menu on the row, or the extract icon).
3. On the review screen, check that **Destination** is **Add to Existing Transaction** with this listing selected.
4. Because the document is a contract with a contract or acceptance date and the deal is still a Listing, the review screen shows a **Mark under contract** checkbox — already ticked — with the status it will move to (for example **Mark under contract → Under Contract**). Its note reads: *"Converts this listing to a Purchase, moves it to your under-contract status and switches to the closing checklist."*
5. Review the extracted dates and fields, then click **Update Transaction**.

With **Mark under contract** ticked, applying the contract also:

- Changes the deal's type from **Listing** to **Purchase** on the same file (the seller side is kept)
- Moves it to your under-contract status
- Applies your organization's default closing checklist for that state and side, dated from the contract, if you have one set up. If the listing was created from a Playbook, no checklist is added automatically — apply your contract-to-close Playbook from the deal yourself
- Fills in the contract-received date if it was empty
- Records "Type changed from Listing to Purchase (under contract)" in the activity log

The confirmation reads **Transaction updated and marked under contract**. Untick **Mark under contract** if you only want the contract's data applied and want the deal to stay a Listing for now.

The checkbox doesn't appear for listing-side paperwork (listing agreements, MLS sheets, seller intake forms, addenda, disclosures, buyer representation agreements), or when no contract date was found.

### Use Convert to Purchase on the listing

If you'd rather convert first and upload the contract afterward:

1. Open the listing and go to its **Listing** tab.
2. Click **Convert to Purchase** at the top of the tab.
3. Confirm. The dialog explains that the listing becomes a Purchase deal on the seller side, moves to your under-contract status, gets your closing checklist, and stays the same file — documents, contacts, dates and notes all carry over.

You'll see **Converted — This is now a Purchase deal**. The same closing-checklist rule applies: your default closing checklist is added only when one exists for that state and side and the listing wasn't created from a Playbook. Then upload the signed contract and review/apply its extracted dates as usual.

**Convert to Purchase** only appears on a listing that is in an open status and has both a property address and a seller filled in.

### Changing the type by hand

You can also change the deal's **Type** from the transaction's **Edit** form. That only changes the label: it doesn't move the status or apply a closing checklist, so the two options above are usually better when a listing goes under contract.

Because it's one record and not two, there's no separate listing left behind. If the deal falls through and the property goes back on the market, change its **status** back to an active listing status — DocJacket offers **Put back on market** to clear the buyer out. See [Cancelling or Closing a Transaction](./canceling-a-transaction.mdx#a-deal-fell-through--putting-a-listing-back-on-the-market) for the full "deal fell through" flow.

## Tips

- Use transaction filters instead of looking for a separate Listings page.
- Use Playbooks and required document lists that are built for listing workflows.
- Keep listing documents and disclosure packages in the same Documents tab as the rest of the transaction files.
