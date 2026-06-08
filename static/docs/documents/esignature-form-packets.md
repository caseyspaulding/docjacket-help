---
sidebar_label: Form Packets
sidebar_position: 9
description: Send one or more approved form templates for e-signature, review autofill values, assign signers, and track packet progress.
---

<!-- Canonical: https://help.docjacket.com/docs/documents/esignature-form-packets -->
<!-- Source: docs/documents/esignature-form-packets.md -->

# E-Signature Form Packets

Form packets let you send one or more office-approved form templates for e-signature from a transaction.

Use packets when you want DocJacket to prepare reusable approved forms, fill known transaction data, collect any remaining agent-entered fields, and then route the forms to signers.

## Start a packet

1. Open a transaction
2. Go to the **Documents** tab
3. Open the **Forms & signatures** subtab
4. Click **Send for e-signature**
5. Choose the approved form templates to include

Only published templates for the transaction's office are available.

If the transaction does not have an office assigned yet, the **Forms & signatures** subtab shows an office-assignment banner first. Choose the brokerage office so DocJacket knows which approved form library and broker footer to use.

## Prepare

The send flow opens as a dedicated full-page wizard so the PDF review step has room to scroll. In the prepare step, choose the templates for the packet and review the autofill preview.

DocJacket shows:

- Which fields were filled automatically
- Which fields are missing values
- Links to fix missing transaction or office data when available
- Whether the office has the required designated broker setup

If required office data is missing, sending can be blocked until the office setup is corrected. For example, a missing designated broker blocks sending until that office setting is fixed.

## Fill out fields

Some templates include flexible fields that the agent or TC completes before sending.

These can include:

- Text fields
- Checkboxes

Values entered during this step are locked into the PDF when the packet is sent.

## Assign signers

The signer step lets you:

- Match signers from transaction contacts
- Enter signer names and emails manually
- Assign each signer to a template role
- Choose parallel signing or sequential signing
- Reorder signers when sequential signing is enabled

Sequential signing sends to the next signer only after the previous signer completes.

## Review and send

Before sending, review:

- Included forms
- Signers
- Subject and message
- CC recipients, if used
- Signing order

After sending, the Signature Request is immutable. Sent packets cannot be edited or added to because the audit trail and signed PDF must remain stable. If required fields are still missing at send time, DocJacket warns you before allowing a send-anyway decision.

## Track packets

The transaction Documents tab includes a **Forms & signatures** panel that lists packets for the transaction.

Open a packet to see:

- Packet status
- Signer timeline
- Per-document state
- Signing order
- Last activity
- Completion progress

In-flight packets refresh automatically about every 15 seconds while a packet is awaiting signatures. You can also refresh manually or cancel a packet while cancellation is still allowed. After sending, DocJacket returns you to the transaction and opens packet tracking so you can confirm signer progress.
