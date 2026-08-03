---
sidebar_label: Approved Form Templates
sidebar_position: 8
description: Upload blank PDF forms, map signature and autofill fields, publish approved versions, and manage office-specific form templates.
---

# Approved Form Templates

Approved form templates are blank PDF forms your office can reuse for e-signature packets.

They live inside an office, not the main Templates page. Open **Offices**, choose an office, then use the **Approved forms** tab. Visiting `/form-templates` directly redirects back to **Offices**; the editor itself remains deep-linkable after you open or upload a template.

## What form templates are for

Use approved form templates when your team repeatedly sends the same blank forms, such as office disclosures, brokerage forms, or state-specific packets.

Each template can include:

- Signer signature, initials, and date fields
- Autofill fields populated from transaction data
- Flexible text fields completed during send prep
- Flexible checkboxes completed during send prep
- Signer roles, such as Buyer, Seller, Agent, or Broker

## Where to store blank contracts and association forms

If you're looking for where to **store blank contracts** — the empty purchase agreement,
listing agreement, disclosures, and addenda you reuse on every deal — this is the place.
Approved form templates are DocJacket's library of blank contracts and forms.

This includes the standard forms you get from your state or local association, however
you obtained them:

- **CAR forms** (California Association of REALTORS)
- **TREC** forms (Texas), **FAR/BAR** (Florida), and other state association packets
- Blank contracts exported or downloaded from zipForm, your MLS, or your brokerage intranet
- Your own brokerage disclosures and office-specific paperwork

To get a CAR form — or any blank contract — into DocJacket, **download the blank PDF from
your association or forms provider first, then upload that PDF here.** DocJacket keeps
your uploaded copy, so you don't have to download the contract again each time you use
it. Once a form is uploaded and published, you reuse it from inside DocJacket.

:::note These are blank forms, not client intake forms
Approved form templates are **blank contract PDFs you send for signature**. They are
different from [Online Forms](../templates/online-forms.md), which are web forms you send
clients and agents to *collect information* — an intake questionnaire, not a contract PDF.
If you want somewhere to keep blank contracts, you want this page.
:::

## Upload a template

1. Open **Offices**
2. Choose the office that owns the form
3. Open **Approved forms**
4. Click **Upload Template**
5. Enter the template name and optional description
6. Upload the blank PDF

After upload, DocJacket opens the template editor for the new draft. The upload dialog accepts a blank PDF and keeps the template scoped to the selected office.

## Map fields

In the template editor, place fields on the PDF:

- **Signer fields** - Signature, initials, and date fields completed by the signer
- **Smart fields** - Transaction values filled by DocJacket, such as address, party names, dates, or price
- **Flexible fields** - Text inputs or checkboxes completed before sending

Click a field to edit its role, label, binding, requirement status, or placement. Use zoom and page controls when working with long forms.

When DocJacket can read the blank PDF, it may propose field mappings automatically. Large or multi-page forms can take a minute or two before proposed fields appear. You can still place or adjust fields manually.

## Review draft fields

Draft templates include tools for checking field readiness before publishing:

- **Review mode** walks page by page through mapped fields.
- **All fields** shows the full canvas without the page-review gate.
- **Quick fix** can assign nearby signer roles or remove unused roles when available.
- **Save Draft** stores field and role changes without making the template sendable.

Autofill fields need a smart-field binding, and signer fields need a signer role. Published templates are the only versions available when sending form packets from a transaction.

## Save and publish

Click **Save Draft** while mapping fields. Drafts do not send.

Click **Publish** when the template is ready. The draft must be saved before publishing. In Review mode, every page with fields must be reviewed or skipped before publishing.

Published versions are locked so Signature Requests already in flight continue to render against a stable form layout.

To change a published template, create a new draft, edit it, and publish the next version.

## Archive and duplicate

From the Approved forms tab, you can:

- Duplicate a template to start a similar form quickly
- Archive a template when it should no longer be used for new Signature Requests
- Show archived templates when reviewing older forms

Template cards show draft and published version badges, page count, publish date, and last-used date when available.

Duplicating a template opens the new draft in the editor. Archiving a template removes it from new packet selection, but it does not break in-flight Signature Requests.
