---
sidebar_label: Document Settings
sidebar_position: 10
description: Configure document types, document statuses, and automatic file naming rules.
---

# Document Settings

Use **Settings > Documents** to control how transaction files are categorized, reviewed, and named.

The page has three tabs:

- **Document Types** — Categories used to organize transaction files
- **Document Statuses** — Review states used on uploaded documents
- **Naming Rules** — Automatic filename patterns for supported upload, split, and rename flows

If your organization does not have document settings yet, DocJacket creates the default document types, statuses, and naming rules the first time the settings page loads.

## Document Types

Document types organize files in transactions. Active document types appear in the upload category picker and can be used on transaction documents.

From the **Document Types** tab, you can:

- Add document types
- Add optional descriptions
- Mark a document type as required for all transactions
- Make a document type active or inactive
- Edit existing types
- Delete unused types

Each type card shows the name, description, required/inactive badges, and how many documents currently use that type. Some system defaults also include matching keywords that help DocJacket recognize common document names.

Inactive document types no longer appear for new selections, but existing documents keep their current value. Use this when a type should be retired without changing historical files.

Document types with existing usage cannot be deleted. Recategorize or remove the documents that use the type first, then delete the type.

## Document Statuses

Document statuses track the review state of uploaded files.

Use the **Document Statuses** tab to create statuses such as Pending, Reviewed, Approved, Rejected, or Revision Requested. You can choose a color for each status, make statuses active or inactive, edit existing statuses, and delete statuses that are not in use.

Each status card shows the status color, active/inactive state, and usage count. Inactive statuses no longer appear for new selection, but existing documents keep the status they already had.

Document statuses with existing usage cannot be deleted. Change the affected documents to another status first, then delete the unused status.

## Naming Rules

Naming rules define automatic filename patterns for supported document flows. Each rule has a rule type, a pattern, and an optional default flag.

Rule types include:

- **Upload** — Names documents in upload flows that save without an explicit filename
- **Split** — Names pages created when a multi-page PDF is split
- **Default** — A general naming pattern available for fallback naming behavior

Rule cards show the rule type, pattern, preview, and default state. You can set one default rule per rule type. When you make a rule the default, DocJacket clears the previous default for that same rule type.

Default rules cannot be deleted. Set another rule as the default first, then delete the old rule.

### Filename Tokens

Naming rules use tokens that are replaced with transaction and document data. Common tokens include:

- `{PropertyAddress}`
- `{ClientName}`
- `{AgentName}`
- `{Side}`
- `{DocType}`
- `{PlaceholderName}`
- `{Date}`
- `{OriginalName}`
- `{TransactionType}`

Additional supported tokens include `{OriginalFileName}`, `{RequiredDocKey}`, `{StartPage}`, `{EndPage}`, `{PageRange}`, `{TransactionId}`, `{Counter}`, and formatted dates such as `{Date:MM-dd-yyyy}`.

DocJacket automatically removes empty token fragments, cleans invalid filename characters, and adds `.pdf` when the generated name does not include it.

### Upload Naming

Upload naming rules apply only when an upload flow saves a document without an explicit filename. Some manual upload paths keep the selected file's original name because the file already has a name.

Required-document uploads can use `{PlaceholderName}` when the file is uploaded from a required document placeholder. For example, a pattern like `{PropertyAddress} - {PlaceholderName}.pdf` can produce a name based on the transaction address and the required document being satisfied.

### Split Naming

Split naming rules apply to documents created when DocJacket splits a multi-page PDF into separate files. Split rules can use transaction data, the detected document type, and page-range tokens such as `{StartPage}`, `{EndPage}`, and `{PageRange}`.

### Troubleshooting

If a file did not receive the name you expected, check:

- The rule type matches the flow you used
- The rule you expect is marked as the default for that type
- The upload flow did not already provide an explicit filename
- The tokens in the pattern are available for that document
- Empty token values are not being cleaned from the final filename

If you cannot delete a document type or status, it is still used by one or more documents. Move those documents to another type or status first.
