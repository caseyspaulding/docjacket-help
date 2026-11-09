---
sidebar_label: Documents Needed
sidebar_position: 4
description: Track required transaction documents, link received uploads, apply document templates, and spot overdue or blocking items.
---

<!-- Canonical: https://help.docjacket.com/docs/documents/audit-mode -->
<!-- Source: docs/documents/audit-mode.mdx -->

# Documents Needed

The **Documents Needed** checklist shows which files are required for a transaction and whether each one has been received.

You will find it on the transaction's **Documents** tab, above **Documents Received**. The header can be collapsed or expanded, and it shows summary chips when required documents exist.

![Documents Needed checklist above Documents Received](/img/documents/transaction-documents-tab.png)

## What the checklist shows

The checklist can show:

- Required document name
- Received checkbox
- Due date
- Blocking status
- Received count
- Overdue count
- Blocking-missing count
- Linked uploaded file, when one exists

Use the **A-Z** and drag-handle controls to switch between alphabetical sorting and custom order. Custom order is saved, while alphabetical mode is best when you just need to scan by name.

## Add or apply requirements

You can build the list in two ways:

- **Apply template** - choose a reusable document template from **Templates > Documents**
- **Add required document** - add one required document directly on the transaction

Required documents also appear in Transaction Summaries, so keeping this checklist current improves status reporting.

## Link or upload received files

For each required document, you can:

- Check it off as received
- Link it to an existing upload
- Upload a file directly into that required-document row
- Review linked upload history when more than one file has been attached, with the newest file marked as the latest version
- Remove the requirement if it no longer applies

Uploading from the checklist is best when a file satisfies a specific placeholder, because DocJacket links the new file to that requirement immediately. If the transaction has a linked Google Drive folder, linked uploads can also show an **Open in Drive** shortcut.

## Row details

Click the chevron at the end of a required-document row (its tooltip reads "Details - received file, request, due date, note") to open the row's details panel. It has these parts:

- **Received file** - the linked file, with **Change...** to link a different one. When no file is linked it shows **Upload** and **Mark received**.
- **Request from party** - shows **Not yet requested**, or **Last requested** with a date once you have recorded one (see below).
- **Due date & side** - when the document is due and which side it belongs to.
- **Fully executed** - whether the received copy has been confirmed as fully signed.
- **Internal note** - a note for your team that is never shown to clients. For example: "Sent to escrow 6/28 - waiting on buyer signature".

## Request a document so it tracks

DocJacket tracks a request by the date you record, not by the email itself. To request a document from the other side and have it show on the checklist:

1. Send the request. Email it from the deal's **Email** tab or use an email template.
2. On the requirement's row, click **+ sent** and pick the date you sent it.
3. The row now reads **Sent** with that date. Click it any time to change the date.
4. Open the row's details panel. **Request from party** now shows **Last requested** with the same date.

Sending an email does not fill this in on its own. **Request from party** stays at **Not yet requested** until you record the date with **+ sent**.

Two more tracking tools sit on the same row and header:

- A revision counter (shown as `#` and a number, with minus and plus buttons) for documents that get amended, such as an addendum or counter offer. Use the minus button at #1 to stop tracking revisions.
- A copy button in the checklist header that copies a "still waiting on" list, with the dates sent, so you can paste it into a message to the other side.

## When a received document is wrong

A document can arrive with missing signatures, a wrong address, or the wrong version. To record the problem and ask for a corrected copy:

1. On **Documents Received**, set the file's status to **Rejected** or **Revision Requested**. See [Document Settings](../settings/document-settings.md#set-a-status-on-a-document).
2. On the requirement's row in Documents Needed, untick **Received**. This unlinks the file and moves the requirement back to Not Started. The file itself stays in Documents Received.
3. Write what is wrong in the requirement's **Internal note**, for example "Lead-based paint disclosure missing buyer signatures".
4. Email the other side to request a corrected copy, then click **+ sent** and record the date.
5. When the corrected copy arrives, upload it into the same row. Linked upload history keeps the earlier versions.

DocJacket does not have a "flag" button that writes a note to the deal. Setting a status to Rejected does not note the deal, email the other party, or reopen the requirement either, so the **Internal note** is where you record what is wrong. The review screens that show warnings about an uploaded document are described in [AI Data Extraction](./ai-data-extraction.mdx#warnings-on-the-review-screen).

## Does uploading check items off automatically?

A required document counts as received when a file is uploaded into its row, when a file is linked to it, or when you click **Mark received**.

A file you add with the general upload button is not linked to a row automatically. When DocJacket classifies the uploads and some look like they belong to open checklist rows, a banner appears above the checklist: it says how many uploaded documents look like they belong to this checklist, with **Review & file** and **Skip for now** buttons. Nothing is filed until you confirm in the dialog.

There is no setting that marks a document check or a task complete when a file is uploaded. To complete a task, complete it on the task.

## Why this matters

For TCs managing dozens of files per transaction, it's easy to lose track of what's been collected and what's still outstanding. Documents Needed gives you a clear picture so you can:

- Follow up on missing documents before they hold up closing
- Verify everything is in order before the closing date
- Generate a document status report for your team or clients
