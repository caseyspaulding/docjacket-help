---
sidebar_label: Email Templates
sidebar_position: 4
description: Use reusable email templates with smart fields that auto-fill with DocJacket transaction data.
---

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

## Smart fields

Smart fields use double-brace syntax:

- `{{buyer_name}}`
- `{{seller_name}}`
- `{{property_address}}`
- `{{closing_date}}`
- `{{agent_name}}`

Smart fields work in both the subject and body. See [Smart Fields](../templates/smart-fields.md) for the full library, groups, and conditional content.

## Missing values

If a valid smart field does not have data on the transaction, DocJacket can show a missing-variable warning. Update the transaction data or edit the email before sending.

If a placeholder is not recognized, fix the template syntax before using it with clients.

## Tips

- Create templates for common emails: introduction to title company, inspection scheduling, closing reminders, status updates
- Link email templates to [tasks](../tasks/email-automation.mdx) for automated sending
- Use Draft status while testing a new template
- Send a test email before activating templates with conditions or auto-attached documents
