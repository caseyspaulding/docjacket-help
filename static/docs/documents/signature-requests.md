---
sidebar_label: Signature Requests
sidebar_position: 7
description: Send DocJacket documents for e-signature and track each request's status — sent, viewed, and signed — right from the transaction.
---

<!-- Canonical: https://help.docjacket.com/docs/documents/signature-requests -->
<!-- Source: docs/documents/signature-requests.mdx -->

# Signature Requests

Signature Requests let you send transaction documents for e-signature directly from DocJacket. This is how you send a document for electronic signature (esignature / esign) — request a signature, and the sent request stays tied to the transaction, so your team can track who has signed and which signed PDF came back.

This page covers sending an existing uploaded document. To send reusable office-approved forms, use the transaction **Forms & signatures** subtab and see [Form Packets](./esignature-form-packets.md).

## Sending a document for signature

1. Open a transaction
2. Go to the **Documents** tab
3. Find the document that needs signatures
4. On the document's row, click the pen icon (hover text: **Send for Signature**). It only shows on a document that has no signature request yet.
5. The **Send for Signature** drawer opens
6. Add signer name, email, and role
7. Add more signers if needed
8. Turn on ordered signing if signers must sign one at a time
9. Click **Send for Signature**

When a document has transaction contacts available, DocJacket can suggest signers so you do not have to retype every recipient.

For a document-level request, signer roles are simple labels. They do not need to match approved-form template roles.

## Can I send a signature request for a contact instead of a deal?

Yes. You can send a PDF for signature from a contact's record, with no deal involved. A common use is a transaction coordinator sending an agent's MSA or onboarding agreement.

1. Open the contact
2. Go to the **Files** tab
3. **Upload** the PDF
4. On the file's row, click the pen icon (hover text: **Send for Signature**)
5. The drawer opens with the contact's name and email already filled in as a signer
6. Click **Add Signer** to add anyone else, for example yourself to countersign
7. Tick **Require signers to sign in order** if signers must go one at a time. Later signers are emailed only after the previous one signs.
8. Click **Send for Signature**

The file's row then shows **Out for signature · 0 of N signed**. When everyone has signed, a copy is saved on the contact's **Files** tab, labelled **Signed copy**, and each signer is emailed a copy. A file that has been sent for signature can't be deleted.

### Send a PDF from your File Library

If you send the same PDF to many contacts, upload it once to **Settings › File Library** and send it from there. For example, upload your agent agreement or MSA once, then send it to each new agent from their contact.

1. Open the contact and go to the **Files** tab
2. Click **Send from File Library** (next to **Upload**)
3. In the **Send from File Library** dialog, click a PDF. Only PDFs are listed.
4. The PDF is copied onto the contact's **Files** tab as a new file, and the **Send for Signature** drawer opens with the contact already filled in as a signer
5. From here it works the same as an uploaded file: add signers, tick **Require signers to sign in order** if needed, and click **Send for Signature**

Your File Library original is not changed. Each send uses the contact's own copy.

To send a document that belongs to a deal, use its **Documents** tab as described above.

## Tracking status

After a Signature Request is sent, the Documents tab shows signature status on the related document. Open the status view to see signer progress, viewed dates, signed dates, declined dates, and pending recipients.

From the status view, you can resend a reminder or cancel a pending signer request when allowed.

## What happens when a signer signs

For a request sent from a document row, when a signer finishes DocJacket emails the person who sent the request. If that person is no longer an active user, the email goes to the deal's assigned user, then an Owner, then the oldest active user in your organization. There is one email each time a signer completes and one more when everyone has signed.

When the last signer finishes:

- The document's row on the **Documents** tab changes from an `N/M signed` chip to a **Signed** chip.
- A **Download Signed PDF** button (a green check icon) appears on that row.
- The signed PDF replaces the file on the same row, saved as a new version labelled **Signed copy**. The unsigned original stays in the document's version history.

Signing does not check anything off by itself. It does not mark a **Documents Needed** row as received and it does not set **Fully executed**. If the document is already linked to a Documents Needed row, it stays linked and that row now holds the signed copy. If it was not linked, link it yourself from the row, or click **Mark received**.

## Tips

- Make sure contacts are added to the transaction before sending a request.
- Use approved form templates when your office requires standardized signature packets.
- Sent requests are treated as locked records so in-flight signing is not changed accidentally.
- If a completed signed PDF appears in Documents, use the signed-status chip to open the related signature status.
