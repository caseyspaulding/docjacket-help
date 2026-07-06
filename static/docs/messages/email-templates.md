---
sidebar_label: Email Templates
sidebar_position: 4
description: Create reusable DocJacket email templates with smart fields that auto-fill from transaction data, so common messages send in seconds.
---

<!-- Canonical: https://help.docjacket.com/docs/messages/email-templates -->
<!-- Source: docs/messages/email-templates.md -->

# Email Templates

Email templates let you reuse common email content while composing transaction messages. Templates can fill the subject, body, recipients, smart fields, and configured document attachments.

![Transaction Email composer with the Template action in the toolbar](/img/messages/email-compose-new-message.png)

## Using a template

When composing an email in a transaction:

1. Open the transaction
2. Go to **Email > Inbox**
3. Click **Compose**
4. Click **Template**
5. Search for and select the template you want
6. Review the filled subject, body, recipients, and attachments
7. Fix any missing values or unresolved smart fields
8. Send, schedule, or save the email as a draft

Smart fields are replaced with the transaction's current data when the template renders.

## Creating a template

1. Go to **Templates > Email Templates**
2. Open **My Templates**
3. Click **New Template**
4. Add template settings such as category, side, audience, stage, and tone
5. Write the subject and body
6. Insert smart fields or smart-field groups
7. Configure recipient roles or recipient rules if needed
8. Select document categories to auto-attach if needed
9. Preview, send a test email, and save

Shared templates are read-only. Copy a shared template into **My Templates** before customizing it.

## Generate or import a template with AI

The template editor includes an **AI Generator** with two modes, so you don't have to write a template from scratch:

- **Generate** — describe the email you want (for example, "Welcome email for new buyers"), pick a tone, and DocJacket writes a draft subject and body for you, inserting smart fields where they fit.
- **Import** — paste an existing email from another tool, or upload a draft as a PDF, `.txt`, or `.md` file. DocJacket converts it into a template, mapping the merge tags in your original (like `[Buyer Name]`) to DocJacket smart fields.

:::warning Always review AI output
Check anything the AI produced before you save — confirm the smart fields mapped to the right data, and send a test email before using the template with clients.
:::

## Smart fields

Smart fields use double-brace syntax:

- `{{buyer_name}}`
- `{{seller_name}}`
- `{{property_address}}`
- `{{closing_date}}`
- `{{agent_name}}`

Smart fields work in both the subject and body. See [Smart Fields](../templates/smart-fields.md) for the full library, groups, and conditional content.

### Contact blocks

A **contact block** is a special smart field that drops in a formatted contact card — name, email, phone, and company — for one party on the deal. It only shows the fields that are filled in, so you never get blank lines. Insert one from the smart-field picker rather than typing it by hand.

Contact blocks are available for the common parties on a transaction, including:

- **Buyer** and **Seller**
- **Listing Agent**, **Buyer Agent**, **Deal Agent**, and **Co-Agent**
- **Lender**, **Loan Officer**, and **Loan Processor**
- **Title Company**, **Title Processor**, **Escrow Officer**, and **Escrow Assistant**
- **Buyer's Attorney** and **Seller's Attorney**
- **Home Inspector**, **HOA Contact**, **Co-op TC**, and others

:::note Safe to reuse
If a party isn't on the deal yet, its contact block simply renders nothing — so it's safe to include in a reusable template without leaving blank labels behind.
:::

## Missing values

If a valid smart field does not have data on the transaction, DocJacket can show a missing-variable warning. Update the transaction data or edit the email before sending.

If a placeholder is not recognized, fix the template syntax before using it with clients.

## Tips

- Create templates for common emails: introduction to title company, inspection scheduling, closing reminders, status updates
- Link email templates to [tasks](../tasks/email-automation.mdx) for automated sending
- Use Draft status while testing a new template
- Send a test email before activating templates with conditions or auto-attached documents
