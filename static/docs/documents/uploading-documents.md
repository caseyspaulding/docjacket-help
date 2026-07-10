---
sidebar_label: Uploading Documents
sidebar_position: 2
description: Upload files to a DocJacket transaction, choose categories, link required documents, and understand other document intake paths.
---

<!-- Canonical: https://help.docjacket.com/docs/documents/uploading-documents -->
<!-- Source: docs/documents/uploading-documents.mdx -->

# Uploading Documents

Getting documents into DocJacket is quick and easy. Here's how.

## Drag and drop

The fastest way. Open a transaction's **Documents** tab, stay on **Files**, and:

1. Click **Upload**
2. Choose a category
3. Drop a file into the upload drawer or click to browse
4. Click **Upload**

The upload drawer shows progress and closes when the file is saved.

## Supported file types

The transaction upload drawer accepts:

- **PDF** — The most common format for contracts and disclosures
- **Images** — JPG, JPEG, PNG
- **Word files** — DOC, DOCX

The file size limit is **50MB**.

## Categories and statuses

Pick the document category before uploading. The category picker uses the active document types from **Settings > Documents**. You can change the document type or status later from the Documents table.

Admins can manage document types, document statuses, and naming rules in **Settings > Documents**.

## Required-document uploads

If the file satisfies a required document, upload it from the **Documents Needed** checklist instead. That path links the uploaded file directly to the placeholder, updates the received count, and keeps the requirement history together.

Required-document uploads can also provide the placeholder name to document naming rules. This is what lets a naming pattern use `{PlaceholderName}` for files uploaded from a specific requirement.

## Other ways documents get into DocJacket

Documents don't only come from manual uploads:

- **AI Extraction** — When you create a transaction via Upload Documents, the contract is automatically saved to the Documents tab
- **DocDrop** — Contacts can email documents directly into the transaction (see [DocDrop](./docdrop.mdx))
- **Google Drive** — Import files from Drive or export transaction files back to Drive (see [Google Drive Integration](./google-drive-integration.mdx))
- **E-sign packets** — Completed DocJacket e-sign packets save the signed PDF back to the transaction

## Deleting a document

To remove a file from a transaction:

1. Open the transaction and go to the **Documents** tab
2. Find the document's row and click the **trash-can icon** (hover over the row if you don't see it)
3. Confirm in the **Delete document?** dialog

Deleting is **permanent** — there's no trash or undo to restore from, so double-check before you confirm. Every deletion is recorded in the transaction's activity log, so you can always see who deleted what and when.

To remove several files at once, tick the checkboxes on the left of each row and click **Delete All**.

:::caution Before you delete
- **Signed documents can be deleted too.** DocJacket won't stop you from deleting a completed e-signed PDF — take extra care with signed files.
- **Audit Mode protects documents.** On a transaction in [Audit Mode](./audit-mode.mdx), documents are locked and can't be deleted.
- If the file satisfied a **required-document** item, that item may still show as collected — re-check your required-documents list and re-upload if it still needs the file.
:::
