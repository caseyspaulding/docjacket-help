---
sidebar_label: Email Templates
sidebar_position: 4
description: Build reusable DocJacket email templates with smart fields and link them to tasks for automated sending across every transaction.
---

# Email Templates

Create reusable email templates with smart fields that auto-populate with transaction data. Write your common emails once, organize them by transaction stage and audience, and reuse them from messages, tasks, and automations.

Email templates can include subject lines, rich email bodies, smart fields, recipient rules, and document categories to auto-attach when the email sends.

![Email Templates page with My Templates, Shared templates, filters, grouped cards, and available variables](/img/email-templates/email-template-list.png)

## My Templates and Shared templates

The Email Templates page has two tabs:

- **My Templates** - Templates your organization owns and can edit
- **Shared** - DocJacket-provided templates you can copy into your organization

Shared templates are read-only. Use **Copy to My Templates** before changing the subject, body, attachments, recipients, or smart fields.

The list groups templates by stage and shows each template's active/draft status, category, version, and smart-field count. Use the filters for side, category, status, audience, stage, tone, and search when your library grows.

## Creating an email template

![New Email Template builder with template settings, recipients, AI generator, rich editor, smart fields, and auto-attach documents](/img/email-templates/email-template-editor.png)

1. Go to **Templates > Email Templates** in the sidebar
2. Click **New Template**
3. Enter the template name and category
4. Choose the side, audience, stage, and tone if helpful
5. Choose whether the template is internal only
6. Set default recipient roles or recipient rules
7. Write the subject line
8. Write the email body with formatting and smart fields
9. Select document categories to auto-attach if needed
10. Preview or send a test email
11. Save the template

Templates can be **Active** or **Draft**. Keep a template in draft while you are testing it, then activate it when it is ready for your team.

The builder is split into three working areas:

- **Template Settings and recipients** - Name, category, side, audience, stage, tone, internal-only status, recipients by role, and conditional recipient rules.
- **Content editor** - AI Email Generator, subject, rich body editor, HTML mode, conditional snippets, and the Edit/Preview tabs.
- **Smart fields and attachments** - Quick smart-field buttons, the full smart-field picker, and auto-attach document categories.

## Organizing templates

Use the filters on the Email Templates page to find the right template quickly:

- Side: Buyer Side, Seller Side, or Both
- Category
- Active or Draft status
- Audience
- Stage
- Tone
- Search by name or description

Templates are grouped by stage, such as listing, under contract, inspection, appraisal, financing, pre-closing, closing, and post-closing.

## Smart fields

Smart fields are placeholders that get replaced with real transaction data. They use double-brace syntax:

- `{{buyer_name}}`
- `{{seller_name}}`
- `{{property_address}}`
- `{{closing_date}}`
- `{{purchase_price}}`
- `{{agent_name}}`
- `{{company_name}}`

Smart fields work in the subject and body. For example:

```text
EMD Receipt - {{property_address}}
```

Use the smart-field side panel or picker to insert fields at the cursor. See [Smart Fields](./smart-fields.md) for the full field library and conditional syntax.

## Recipient targeting

Email templates can pre-fill recipients from contacts assigned to roles on the transaction.

Use **Recipients by Role** for common cases:

- To: Buyer
- Cc: Agent
- Cc: Transaction Coordinator

Use **Recipient rules** when recipients need conditions. A rule can target To, Cc, or Bcc, use a merge-field source or quoted email address, and optionally include a condition such as `role == "Dual"`.

Leave recipient rules blank if the role checkboxes are enough.

## Auto-attach documents

Use **Auto-Attach Documents** when a template should always include files from specific document categories.

For example:

- A disclosure email can auto-attach disclosure documents
- An inspection email can auto-attach inspection documents
- A closing package email can auto-attach closing documents

DocJacket attaches matching documents from the transaction when the email is sent.

## Preview and testing

![Email Template Preview tab showing rendered subject, body, missing-variable warning, and Send Test controls](/img/email-templates/email-template-preview.png)

Use the **Preview** tab to render the template before sending. You can preview with sample data or select a transaction for a more realistic preview.

If the template uses conditional content, the preview tools let you test sample values such as buyer/seller side, earnest-money location, or whether an assistant is on the transaction.

Use **Send Test** to send a test email before activating a new or heavily edited template.

If a smart field is valid but the transaction does not have the data yet, the preview can show a missing-variable warning. If a field name is not recognized, fix the placeholder in the template.

## AI email generator

When creating or editing an organization-owned template, you can use the AI email generator to draft a starting point. Enter the email you need, choose a tone, generate a result, then apply it to the form and edit before saving.

## Common templates to create

Here are some templates most TCs find useful:

- **Welcome email** — Introduction to the transaction process for new clients
- **Title company introduction** — Connect the title company with all parties
- **Inspection scheduling** — Coordinate inspection appointments
- **Status update** — Weekly or key-date-based progress update
- **Closing reminder** — Sent a few days before closing with final instructions
- **Post-closing thank you** — A nice touch after the deal closes

## Using templates with tasks

Email templates become even more powerful when linked to [tasks](../tasks/email-automation.mdx). Set up a task like "Send closing reminder" with a linked template, and the email is ready to go when the task comes due.

Task-linked templates can render smart fields, show unresolved-field warnings, include the default email signature, and send with attached documents when configured.

When a template is used from a transaction email composer, open **Insert > From Template**, choose the saved template, and review the filled subject, body, recipients, attachments, and missing-field warnings before sending.

## Tips

- Keep subject lines short and specific.
- Use Draft status while testing smart fields, conditions, and attachments.
- Copy shared templates before customizing them.
- Use recipient roles for normal routing and recipient rules for conditional routing.
- Send yourself a test email after changing conditions or auto-attached document categories.
