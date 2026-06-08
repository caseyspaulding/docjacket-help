---
sidebar_label: Extraction Review
sidebar_position: 5
description: Review AI extraction jobs, finish saving completed uploads, monitor progress, and understand save states.
---

<!-- Canonical: https://help.docjacket.com/docs/operations/extraction-review -->
<!-- Source: docs/operations/extraction-review.md -->

# Extraction Review

The **AI Extractions** page lists extraction jobs created from uploaded documents.

Use it when a document was scanned but the transaction, listing, or update has not been saved yet, or when you need to inspect extraction history.

## Save states

The extraction list focuses on the question that matters most: did this become a transaction?

Common save states are:

- **Saved** - The extraction has been applied to a transaction, listing, or existing-transaction update
- **Awaiting save** - The extraction completed, but no transaction, listing, or update has been saved yet
- **Pending** or **Processing** - The extraction is still running
- **Failed** or **Cancelled** - The extraction did not complete

When there are completed extractions awaiting save, the page shows a banner. Use **Show only awaiting save** to focus on unfinished work.

## Finish saving

Click **Finish saving** for a completed extraction that is awaiting save.

Review the extracted fields, correct anything that is wrong, then choose the final save action:

- Create a new transaction
- Create a new listing
- Update an existing transaction

Nothing is final until you complete the review and save step.

Pending uploads can also appear in the Review queue drawer and on the dashboard. Those cards take you back to the same review-and-save workflow. Use **Discard** only when the upload should stop appearing as unfinished work; it soft-dismisses the pending-upload card without deleting extraction history.

## Progress pages

For pending or processing jobs, open **Progress** to see where the extraction is in the workflow.

For multi-document uploads, group progress shows each document and the overall extraction progress. When the group is complete, review the merged results before applying them.

Smart Split uploads may create a group from one original packet. Review the merged results before creating or updating the transaction.

## Review history

Saved extractions can still be opened with **Review**. Use review history when you need to confirm what the AI extracted, inspect confidence, or understand what was applied.

## Best practice

After uploading a contract, check the dashboard's **Pending Uploads** section or the **AI Extractions** page. If an extraction is awaiting save, open it and finish the review so the deal appears in the right transaction workflow.
