---
sidebar_label: AI Data Extraction
sidebar_position: 3
description: Use Extract Data on an existing transaction to upload documents, run extraction, review results, and save transaction updates.
---

<!-- Canonical: https://help.docjacket.com/docs/documents/ai-data-extraction -->
<!-- Source: docs/documents/ai-data-extraction.mdx -->

# AI Data Extraction

Use **Extract Data** when you already have a transaction and want DocJacket to read new documents for that deal.

This is different from the "Upload & Extract" flow you use when creating a new transaction. This feature works on **existing transactions** where you want AI to read through documents and fill in missing data.

## How to use it

1. Open a transaction and go to the **Documents** tab
2. On the **Files** subtab, click **Extract Data**
3. Upload the documents you want DocJacket to read
4. If you upload a single multi-page PDF, review the **Smart Split** step when it appears
5. Open the progress page while extraction runs
6. Review the extracted fields, citations, confidence, and warnings
7. Save the update when the extracted data is correct

Nothing changes on the transaction until you finish the review-and-save step.

## What it extracts

AI looks through all your uploaded documents and pulls out:

- Buyer and seller names
- Property details
- Financial terms (price, earnest money, loan amount)
- Key dates (contract, closing, inspection, financing deadlines)
- Contingency periods
- Agent and lender information

If a field is already filled in, review the suggested value before saving the update.

## When to use this

- **You added documents after creating the transaction** — New documents might contain details that weren't in the original contract
- **You created the transaction manually** — Run extraction to auto-fill fields instead of typing them in
- **An amendment changed key terms** — Upload the amendment and re-run extraction to catch updated dates or prices

Use [Extraction Review](../operations/extraction-review.md) if an extraction finished scanning but still shows as awaiting save.
