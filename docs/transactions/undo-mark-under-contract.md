---
sidebar_label: Undo "Mark under contract"
sidebar_position: 7
description: How to turn a deal back into a listing after Mark under contract converted it to a Purchase, step by step, and how to avoid it next time.
---

# Undo "Mark under contract" — turn a deal back into a listing

Accidentally marked a listing under contract and it turned into a purchase? Did your listing change to a purchase deal, or disappear from your listings, after you uploaded or applied an offer or contract? This page shows how to turn it back into a listing.

You applied an extracted contract or offer to your listing with **Mark under contract** ticked, and the deal is now a Purchase when it should still be a listing. There is no one-click undo, but you can put the deal back by hand. It stays the same file, so documents, contacts, notes and history are untouched.

## What Mark under contract changed

When **Mark under contract** is ticked, DocJacket converts the deal on the same record. It:

- changes the **Type** from **Listing** to **Purchase**, so the deal leaves the Listings view;
- moves the **Status** to your under-contract status (the one your organization uses when an offer is accepted, usually **Under Contract**);
- applies your organization's default closing checklist for that state and side, dated from the contract, unless the deal came from a Playbook (a deal from a Playbook gets no closing checklist);
- keeps the **Side** if it was **Seller** or **Dual**, and sets it to **Seller** if it was anything else (blank or **Buyer**);
- fills in the contract-received date if it was empty.

Undo each of these in the order below.

## Step 1: Change the Type back to Listing

1. Open the deal.
2. In the header, next to the property address, click the **Type** chip (it shows **Purchase**; hover text: *Click to change type*).
3. Pick **Listing**.

You'll see **Type updated to Listing**. This changes only the type. It does not touch the status or the checklist, so keep going.

## Step 2: Set the Status back to your listing status

1. Click the **Status** chip in the header (hover text: *Click to change status*).
2. Pick the status you were using for the active listing, for example **Active** or **MLS Active**.

Because the deal is a listing again and you are moving it from an under-contract status back to an active-listing status, DocJacket may open a **Buyer fell through?** dialog. Read it before you click:

- **Just change the status** moves only the status. Choose this to keep the contract data that was applied (price, buyer, dates) while you decide what to keep.
- **Put back on market** goes further: it clears the contract fields and buyer contacts listed in the dialog, and withdraws the accepted offer. Use it when the buyer really is gone. See [Cancelling or Closing a Transaction](./canceling-a-transaction.mdx#a-deal-fell-through--putting-a-listing-back-on-the-market) for everything it clears and keeps.

If no dialog appears, the status changes straight away and you'll see **Status updated to …**.

## Step 3: Remove the closing checklist from the Tasks tab

Skip this step if the deal came from a Playbook; no closing checklist was added.

1. Open the deal's **Tasks** tab.
2. Make sure the list is set to **Group by Playbook** (not **Group by stage**). Each checklist shows as a group with its name and a count such as `3 / 24`.
3. On the closing checklist's group header, click the trash-can icon (hover text: *Remove this Playbook from the transaction*).
4. A confirmation titled **Remove "[checklist name]"?** appears. It reads: *"This deletes its N tasks from this transaction. Key dates stay — clear those from the Overview tab if you need to. You can re-apply the Playbook afterwards. If any of those tasks had an email draft parked for review, it stays in your Review queue until you act on it or it expires."*
5. Click **Remove Playbook**.

Before you click, write down any work you want to keep. **Remove Playbook** deletes every task in that checklist, including tasks you already completed. You can re-apply the checklist afterwards, but the deleted tasks and their completion history don't come back. Tasks in the **Other tasks** group (ones you added yourself) have no remove button and are not affected.

## Step 4: Delete the key dates the closing checklist added

**Remove Playbook** leaves key dates in place, so clear the ones that don't belong on a listing yourself.

1. Open the deal's **Overview** tab and find the key dates at the top.
2. Hover over a date you don't want. Dates tied to a standard key date type show an icon with the hover text *Remove from this deal* (and a confirmation titled **Remove Key Date**; click **Remove**). Dates you added by hand show a trash-can icon with the hover text *Delete key date* (confirmation titled **Delete Key Date**; click **Delete**).

Only remove dates that no longer apply. Dates that came from the contract itself, such as the contract date or closing date, are your data. Keep them if you still want them on the file.

## Step 5: Check the Side

1. Look at the **Side** chip in the header (it reads, for example, **Seller Side**).
2. If it is wrong, click **Edit** at the top of the deal, change **Side** under **Basic Information**, and click **Save Changes**.

A listing is seller-side, so if the deal was blank or **Buyer** before the conversion, it was switched to **Seller**. If it was **Seller** or **Dual**, it was left alone.

## Avoid it next time

On the review screen, when the document is a contract and the deal is still a listing, you'll see a **Mark under contract** line with a checkbox, showing the status it will move to. Check whether it is ticked before you click **Update Transaction**.

If the offer was accepted but the listing should stay active, for example a contingent offer, leave **Mark under contract** unticked and keep the listing. The contract's data is still applied to the deal.

For how the conversion works when you do want it, see [When a listing goes under contract](./listings.md#when-a-listing-goes-under-contract).
