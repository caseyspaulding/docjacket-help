---
sidebar_label: AI Data Extraction
sidebar_position: 3
description: Use Extract Data on an existing transaction to upload documents, run extraction, review results, and save transaction updates.
---

<!-- Canonical: https://help.docjacket.com/docs/documents/ai-data-extraction -->
<!-- Source: docs/documents/ai-data-extraction.mdx -->

# AI Data Extraction

Use **Extract Data** when you already have a transaction and want DocJacket to read new documents for that deal.

This is different from the **Upload Documents** flow you use when creating a new transaction, listing, or existing-transaction extraction run. This page covers the transaction **Documents > Files > Extract Data** shortcut for an existing transaction.

## How to use it

1. Open a transaction and go to the **Documents** tab
2. On the **Files** subtab, click **Extract Data**
3. Upload the documents you want DocJacket to read
4. Click **Extract Data**
5. Open the progress page while extraction runs
6. Review the extracted fields, citations, confidence, warnings, and changed-field comparison
7. Select which changes to apply
8. Click **Update Transaction** when the extracted data is correct

Nothing changes on the transaction until you finish the review-and-save step.

![Transaction Documents tab with the Files subtab selected, document requirements, Documents Received, and the Extract Data action](/img/ai-extraction/transaction-documents-extract-data.png)

Use the transaction-level **Extract Data** shortcut when the deal already exists and you want new documents to update that deal instead of creating a new transaction.

If extraction finishes but you leave before clicking **Update Transaction**, return from **AI Extractions**, **Pending Uploads**, or the topbar **Review queue** to finish saving.

## What happens to uploaded files

Files uploaded through transaction **Extract Data** are linked to that transaction and appear in the **Documents Received** table. The upload accepts PDFs, JPGs, JPEGs, and PNGs up to 25MB each. Multiple files are supported.

If you upload multiple files, DocJacket runs grouped extraction and then opens a merged review. If only one document succeeds, DocJacket can send you straight to the single-document review screen.

Smart Split is part of the broader **Upload Documents** extraction wizard. From an existing transaction's **Extract Data** page, uploaded files go directly into extraction.

![Existing transaction Extract Data page with a drag-and-drop upload area for amendments, addendums, or other contract documents](/img/ai-extraction/transaction-extract-upload.png)

## What it extracts

AI looks through all your uploaded documents and pulls out:

- Buyer and seller names
- Property details
- Financial terms (price, earnest money, loan amount)
- Key dates (contract, closing, inspection, financing deadlines)
- Contingency periods
- Agent and lender information

If a field is already filled in, review the suggested value before saving the update.

## Warnings on the review screen

The review screens can show warnings about the document you uploaded. These are the ones you may see:

- **Address mismatch notice.** When the document's address doesn't match this deal, the review screen says: "This document's address (...) doesn't match this deal (...). The deal's address will be kept." A checkbox, **Use the document's address instead**, is unticked by default, so the deal's address stays unless you tick it.
- **Key-field citations.** A line reads "N of M key fields link back to a page in the document". Click **Check the other N** to filter the list to the fields that don't link back to a page, so you can verify them yourself.
- **Smart Split.** When you upload a multi-document file, Smart Split shows "N document(s) flagged for review" and puts a red **Review** badge on page boundaries it is unsure about.

None of these warnings saves a note to the deal or contacts anyone, and there is no "flag" button on the upload screens that does. To record that a document is wrong (for example a wrong address or missing signatures) and request a corrected copy, see Documents Needed, [When a received document is wrong](./audit-mode.mdx#when-a-received-document-is-wrong).

## Review and apply changes

For existing transactions, DocJacket compares extracted values with the current transaction data. The review screen shows:

- Current value
- New extracted value
- A checkbox for each changed field
- **Select All** and **None** controls

Only selected differences are sent when you update the transaction. If no differences are found, there is nothing to apply.

Extracted dates can update transaction fields, but timeline key dates are opt-in from the review screen. Toggle on only the extracted dates you want tracked as key dates on the transaction timeline.

![Extraction review screen showing extraction notes, confidence, review-required status, destination, apply options, and final save action](/img/ai-extraction/extraction-review-controls.png)

## When to use this

- **You added documents after creating the transaction** — New documents might contain details that weren't in the original contract
- **You created the transaction manually** — Run extraction to auto-fill fields instead of typing them in
- **An amendment changed key terms** — Upload the amendment and re-run extraction to catch updated dates or prices

Use [Extraction Review](../operations/extraction-review.md) if an extraction finished scanning but still shows as awaiting save.
