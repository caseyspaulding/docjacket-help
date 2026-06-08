---
sidebar_label: Smart Fields
sidebar_position: 8
description: Manage reusable DocJacket smart fields for document data, templates, and transaction-specific values.
---

# Smart Fields

Smart Fields are reusable data placeholders. They let DocJacket pull transaction information into templates, task emails, document text, reports, and messages without retyping the same values.

Smart fields use double-brace syntax, such as `{{buyer_name}}` or `{{property_address}}`. When a message or template is rendered, DocJacket replaces the placeholder with the matching transaction data.

## What smart fields are for

Use smart fields for repeatable information such as:

- Buyer, seller, agent, and vendor names
- Property address and transaction details
- Closing date, contract date, and other key dates
- Office or brokerage information
- Custom transaction fields your team tracks

## Browsing smart fields

1. Go to **Templates > Smart Fields**
2. Search for the field you need
3. Filter by category if needed
4. Copy the field syntax
5. Paste it into an email template or supported editor

Smart fields are grouped by category:

- Transaction
- Contact
- Agent
- Organization
- Dates
- Financial
- Custom

Each field card shows the label, syntax, description, and example when available.

## Smart Field Groups

Click **View Groups** to see pre-built field groups. Groups copy several related fields at once as a formatted block.

Use groups when you need a common pattern, such as a transaction summary, contact block, or financial details section. You can copy the whole block, paste it into a template, and then edit the wording around it.

## Using smart fields

Smart fields are most useful when combined with other templates:

- [Email templates](./email-templates.md) can insert transaction values into subject lines and message bodies.
- Task email sends can render smart fields before the message goes out.
- [SitRep templates](./sitrep-templates.md) can include transaction details in reports.
- Required document and form workflows can rely on consistent field names.

In the email template editor, you can insert smart fields from the side panel or open the smart-field picker. The picker has two tabs:

- **Fields** - Insert one smart field
- **Groups** - Insert a pre-built block of related fields

The Email Template builder also shows a quick smart-field panel beside the rich editor. Click a field to insert it at the cursor, or use the launch icon to browse the full smart-field picker.

Smart fields work in email subjects too. For example:

```text
EMD Receipt - {{property_address}}
```

## Conditional content

Email templates can also use conditional blocks. Conditional content only renders when the condition is true.

Example:

```text
Hi {{buyer_first_name}},

{{ if role == "Buyer" }}
Your earnest money is due {{em_due_date}}.
{{ end }}
```

Supported conditions include:

- `role == "Buyer"`
- `role == "Seller"`
- `role == "Dual"`
- `em_location == "Alt"`
- `agent_has_assistant`

Use lowercase `if` and `end`, use `==` for comparisons, and keep comparison values in double quotes.

## Validation and unresolved fields

DocJacket validates smart fields in templates. If a placeholder does not match a known field, the editor can warn you before saving or sending.

There are two different issues:

- **Missing value** - The smart field is valid, but the transaction does not have that data filled in yet.
- **Unrecognized placeholder** - The placeholder does not match a known smart field, usually because of a typo or removed field.

Fix unrecognized placeholders in the template. Fix missing values by updating the transaction data.

## Tips

- Reuse existing fields before creating a new one.
- Give custom fields clear names that match how your team talks about the data.
- Keep governed transaction dates in the [Key Date Library](./task-templates.md) instead of creating duplicate custom date fields.
- Use groups for longer templates so you do not miss related fields.
- Preview or test-send templates that use conditions before relying on them in automation.
