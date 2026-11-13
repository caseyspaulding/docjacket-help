---
sidebar_label: Email Templates
sidebar_position: 5
description: Build reusable DocJacket email templates with smart fields and link them to tasks for automated sending across every transaction.
---

# Email Templates

Create reusable email templates with smart fields that auto-populate with transaction data. Write your common emails once, organize them by transaction stage and audience, and reuse them from messages, tasks, and automations.

Email templates can include subject lines, rich email bodies, smart fields, recipient rules, and document categories to auto-attach when the email sends.

![Email Templates page with My Email Templates, DocJacket Email Templates, filters, grouped cards, and available variables](/img/email-templates/email-template-list.png)

## My Email Templates and DocJacket Email Templates

The Email Templates page has two tabs:

- **My Email Templates** - Templates your organization owns and can edit
- **DocJacket Email Templates** - Ready-made templates DocJacket provides, which you can copy into your organization

DocJacket templates are read-only. Use **Copy to My Email Templates** before changing the subject, body, attachments, recipients, or smart fields. Your copy shows a **Copied from** line naming the template it started from.

The list groups templates by stage and shows each template's active/draft status, category, version, and smart-field count. Use the filters for side, category, status, audience, stage, tone, and search when your library grows.

## Creating an email template

![New Email Template builder with template settings, recipients, AI generator, rich editor, smart fields, and auto-attach documents](/img/email-templates/email-template-editor.png)

1. Go to **Templates > Email Templates** in the sidebar
2. Click **New Template**
3. Enter the template name and category. Pick from the default categories (Welcome, Reminder, Request, Confirmation, Update, Notification), listed in [Email and Automation Settings](../settings/email-and-automation.md#email-settings), or add your own category in **Settings > Email**
4. Choose the side, audience, stage, and tone if helpful
5. Choose whether the template is internal only
6. Set default recipient roles or recipient rules
7. Write the subject line
8. Write the email body with formatting and smart fields
9. Select document categories to auto-attach if needed
10. Preview or send a test email
11. Save the template

Templates can be **Active** or **Draft**. A new template is saved as **Active**. After the first save, an Active/Draft switch appears at the top of the editor: switch it to Draft while you are still testing the template, then back to Active when it is ready for your team. A template sends nothing by itself; it only goes out when someone picks it, or when a task or an automation rule uses it.

The builder is split into three working areas:

- **Template Settings and recipients** - Name, category, side, audience, stage, tone, internal-only status, recipients by role, and conditional recipient rules.
- **Content editor** - AI Email Generator, subject, rich body editor, HTML mode, conditional snippets, and the Edit/Preview tabs.
- **Smart fields and attachments** - Quick smart-field buttons, the full smart-field picker, and auto-attach document categories.

## Images and links

The template body editor supports links and images.

- **Add a link:** select the text, click the link button in the editor toolbar, and paste the address. Web, email (`mailto:`) and phone (`tel:`) links all work. An email address or a `www.` address typed without `mailto:` or `https://` gets one added. Paste any other web address with its `https://`.
- **Add an image:** click the image button next to the link button and pick a JPG, PNG, GIF, WebP or TIFF file under 20 MB. DocJacket resizes it, hosts it, and puts it in the body at 600 px wide.
- **Resize or link an image:** click the image to choose Small, Medium, Large or Full size, or click **Link…** to make the image a link.
- **Images must be hosted on https.** An image from an `http://` address is removed when the template is saved and again when it is sent. In the Visual editor, an image you paste or drag in is uploaded and hosted for you; if the upload fails, it is taken out and the editor tells you. In HTML mode, an embedded (`data:`) image is removed when you save, so upload it in the Visual editor first.
- **HTML mode:** switch the editor from **Visual** to **HTML** to write `<a>` and `<img>` tags yourself. The same rules apply: images need an `https://` source.
- **Files are attachments, not part of the body.** To send documents with a template, use [Auto-attach documents](#auto-attach-documents).

For images in your email signature, see [Email Signatures](email-signatures.md).

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
- `{{brokerage_name}}`

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

:::warning "Audience" does not set recipients
The **Audience** field is for **search and filtering** — it helps you find templates on this page. It has no effect on who receives the email. Set actual recipients with **Recipients by Role** or **Recipient rules** above.
:::

### How this works with task emails and scheduled emails

When a template is attached to a task, the recipients you set here act as the **fallback**: the task's own recipients win if it has any, and otherwise the email uses this template's **Recipients by Role**.

That means setting recipients once here covers every task using the template — you only need to set recipients on an individual task when that one task should reach someone different. See [Email Automation](../tasks/email-automation.mdx#where-recipients-come-from).

Scheduled emails follow the same rule. When a scheduled email in a Playbook names no **To** recipient of its own, it uses this template's To, Cc, and Bcc roles, filled with the contacts on the deal who hold those roles. A scheduled email that names its own **To** keeps its own To, and also takes the template's Cc and Bcc for whichever of those it left empty. If the scheduled email has its own Cc or Bcc, its own wins.

A template's To roles also count when you save a scheduled email: if the template names a To, the scheduled email can be saved without one of its own.

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

:::tip Test before you automate
A new template is Active as soon as you save it, so switch it to **Draft** (the switch appears after the first save) while you are still building it, and send yourself a test send once conditions or auto-attached documents are involved. A template linked to a task sends on its own when the task comes due — so it's worth confirming it renders correctly before it goes out unattended.
:::

If a smart field is valid but the transaction does not have the data yet, the preview can show a missing-variable warning. If a field name is not recognized, fix the placeholder in the template.

## AI email generator

When creating or editing an organization-owned template, you can use the AI email generator to draft a starting point. Enter the email you need, choose a tone, generate a result, then apply it to the form and edit before saving.

## Have Ask AI write a template

Ask the assistant to write an email template and it opens the **New Email Template** page with the name, category, subject and body filled in. Nothing is saved until you press **Save**.

The setup assistant can also write or change a template, or install DocJacket's starter email packs, and save it from a card you approve. The card previews the email on one of your deals, the next automatic email from a template it wrote or rewrote waits once in your Review Queue, and the change can be undone for 7 days. See [Email templates with Ask AI](../ai-features/ask-ai-assistant.mdx#email-templates).

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

To use a template while composing in a transaction, click the **Template** button in the compose toolbar, choose the saved template, and review the filled subject, body, recipients, attachments, and missing-field warnings before sending.

## Tips

- Keep subject lines short and specific.
- After the first save, switch the template to Draft while testing smart fields, conditions, and attachments.
- Copy shared templates before customizing them.
- Use recipient roles for normal routing and recipient rules for conditional routing.
- Send yourself a test email after changing conditions or auto-attached document categories.
