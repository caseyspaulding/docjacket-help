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

## Approve a document or set its review status

To approve a document, set its status to **Approved** on the file's row. This is the review status of an uploaded file on the **Documents** tab, **Files** subtab. It is separate from checking a requirement off the **Documents Needed** checklist (see [Required-document uploads](#required-document-uploads) below).

The statuses are the ones your organization has active in **Settings > Documents > Document Statuses**. A new organization starts with **Pending**, **Reviewed**, **Approved**, **Rejected**, and **Revision Requested**; an admin can add, rename, or turn off statuses (see [Document Settings](../settings/document-settings.md#document-statuses)).

### Set a status on one file

1. Open the transaction and click the **Documents** tab, then stay on the **Files** subtab.
2. Find the file's row. In the **Document Status** column, click the status badge (its tooltip reads **Click to change status**) and pick the new status.

If you can't see the **Document Status** column, you have two other ways to set a status from the row itself:

- Click the **...** button at the right end of the row (hover text **More actions**, or right-click the row) and choose **Set status**. The status picker for that row opens, and you choose the status there.
- Tick the row's checkbox and click **Set status** in the bar above the list.

On a laptop-sized window the file table is wider than the space it has, so the **Document Type**, **Section**, and **Document Status** columns can sit under the **Actions** column or past the right edge of the table. Scroll the table sideways, or zoom the browser out, to bring the **Document Status** column into view. The **...** button stays visible in the **Actions** column.

### Set a status on several files at once

Tick the checkbox on each row, then click **Set status** in the bar above the list and pick a status. Rejecting several files asks one question for all of them.

### What each status does

| Status | What happens |
| --- | --- |
| **Approved** | Saves the status and writes "Document approved" to the activity log. The person who uploaded the file gets a **Document Approved** notification in the bell, plus an email if their **Document activity** notification preference is on. Nobody is notified about their own approval, so if you uploaded the file and approve it yourself, you get neither. An uploader who is limited to their own deals and is no longer on this deal is not notified either. |
| **Rejected** | DocJacket asks **What's wrong with this document? (optional)** before it saves. The status is saved, "Document rejected" is written to the activity log, and the uploader is notified with the reason you typed (same rules as Approved). The row shows a **Rejected** chip with the reason on hover. |
| **Revision Requested** | Saves the status and shows a **Revision requested** chip on the row. It does not send a notification. |
| **Reviewed** | Saves the status. It does not send a notification. |
| **Pending** | Saves the status. It does not send a notification. |

None of these statuses emails the other party in the deal or checks anything off **Documents Needed**. To request a corrected copy from someone, see [When a received document is wrong](./audit-mode.mdx#when-a-received-document-is-wrong).

Team members on a read-only seat cannot change a status.

## Required-document uploads

If the file satisfies a required document, upload it from the **Documents Needed** checklist instead. That path links the uploaded file directly to the placeholder, updates the received count, and keeps the requirement history together.

Required-document uploads can also provide the placeholder name to document naming rules. This is what lets a naming pattern use `{PlaceholderName}` for files uploaded from a specific requirement.

## Does uploading a document check off Documents Needed?

No. There is no setting that marks a Documents Needed row complete just because a file was uploaded. What happens depends on where you upload:

- **Upload from the row itself** (in **Documents Needed**): the file is linked to that row immediately and counted as received.
- **Upload from the Documents tab's general upload button**: the file is not linked to a row. When DocJacket thinks it matches open rows, a banner above the checklist offers **Review & file** and **Skip for now**. These are suggested matches. Nothing is filed until you confirm.

One thing does file without a click: a document emailed in from certain transactional platforms (e-signature, title and escrow, and transaction-management senders) can be filed onto the matching deal automatically. When that happens, the document's row on the Documents tab shows an undo button (hover text: **Auto-filed from an email — not this deal? Remove & unfile**). There is no setting in the app to turn this off yet.<!-- until: docjacket-v3#6871 --> See [Documents Needed](./audit-mode.mdx#does-uploading-check-items-off-automatically) for the checklist side.

## Other ways documents get into DocJacket

Documents don't only come from manual uploads:

- **AI Extraction** — When you create a transaction via Upload Documents, the contract is automatically saved to the Documents tab
- **DocDrop** — Contacts can email documents directly into the transaction (see [DocDrop](./docdrop.mdx))
- **Google Drive** — Import files from Drive or export transaction files back to Drive (see [Google Drive Integration](./google-drive-integration.mdx))
- **E-sign packets** — Completed DocJacket e-sign packets save the signed PDF back to the transaction

## Renaming a document

To rename one file on a deal:

1. Open the transaction and go to the **Documents** tab
2. Click the **pencil icon** next to the document's name (tooltip **Rename**). You can also open the row's **⋯** menu (**More actions**) — or right-click the row — and choose **Rename**
3. Type the new name and press **Enter** (or click the checkmark). Press **Esc** to cancel

You can also rename from the document preview: click the document's name to open the preview, click **Rename** at the bottom, type the new name, and click **Save**.

Renaming changes only the name shown in DocJacket and on downloads; the file itself, its category, and where it's linked stay the same. Team members with the **Viewer** role can't rename documents.

### Renaming all documents at once (Batch Rename)

To rename every document on a deal to a consistent pattern — for example `123 Main St - Purchase Agreement.pdf`:

1. Open the transaction's **Documents** tab
2. Click the **⋯** menu (**More document actions**) in the toolbar, then **Batch Rename**. It appears when the deal has a property address
3. In the **Batch Rename Documents** panel, check the **Property Address** used in the names
4. Click **Rename All**

The panel then lists each document as **old name → new name**, plus any that were skipped (for example **Name unchanged**). Click **Close** when you're done.

Batch Rename always applies to **all** documents on the deal — there's no option to rename only the ones you've ticked, and no preview before **Rename All**. New names come from your organization's naming rule (your default **Split** rule) in **Settings > Documents > Naming Rules**, using tokens like `{PropertyAddress}`, `{DocType}`, and `{Date}`. If you haven't set up a rule, each file is named after its document type (for example `Purchase Agreement.pdf`). Admins can edit naming rules; see [Document Settings](../settings/document-settings.md).

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
