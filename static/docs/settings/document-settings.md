---
sidebar_label: Document Settings
sidebar_position: 9
description: Configure document types, document statuses, and automatic file naming rules.
---

<!-- Canonical: https://help.docjacket.com/docs/settings/document-settings -->
<!-- Source: docs/settings/document-settings.md -->

# Document Settings

Use **Settings > Documents** to control how transaction files are categorized, reviewed, and named.

## Document types

Document types organize files in transactions.

From the **Document Types** tab, you can:

- Add document types
- Add optional descriptions
- Mark a document type as required for all transactions
- Hide inactive document types
- Edit existing types
- Delete unused types

Document types with existing usage cannot be deleted until those files are moved or removed.

## Document statuses

Document statuses track the review state of uploaded files.

Use the **Document Statuses** tab to create statuses such as Under Review, Approved, Rejected, or Needs Signature. You can choose a color for each status and hide statuses that should no longer appear.

## Naming rules

Naming rules automatically name files when they are uploaded or split from a PDF packet.

Rule types include:

- **Upload** — Names documents uploaded without an explicit custom name
- **Split** — Names pages created when a multi-page PDF is split

Naming rules use tokens that are replaced with transaction data. Common tokens include:

- `{PropertyAddress}`
- `{ClientName}`
- `{AgentName}`
- `{Side}`
- `{DocType}`
- `{PlaceholderName}`
- `{Date}`
- `{OriginalName}`
- `{TransactionType}`

Set one default rule per rule type so newly uploaded or split documents use the naming pattern your team expects.
