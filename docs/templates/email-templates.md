---
sidebar_label: Email Templates
sidebar_position: 4
---

# Email Templates

Create reusable email templates with smart fields that auto-populate with transaction data. Write your common emails once and reuse them across every deal.

## Creating an email template

1. Go to **Templates > Email Templates** in the sidebar
2. Click **New Template**
3. Set the subject line (can include smart fields)
4. Write the email body with formatting and smart fields
5. Save the template

## Smart fields

Smart fields are placeholders that get replaced with real transaction data:

- `{BuyerName}`, `{SellerName}` — Party names
- `{PropertyAddress}` — Full property address
- `{ClosingDate}`, `{ContractDate}` — Key dates
- `{AgentName}` — Agent's name
- `{TitleCompany}` — Title company name

When you use the template in a transaction, these fields fill in automatically.

## Common templates to create

Here are some templates most TCs find useful:

- **Welcome email** — Introduction to the transaction process for new clients
- **Title company introduction** — Connect the title company with all parties
- **Inspection scheduling** — Coordinate inspection appointments
- **Status update** — Weekly or milestone-based progress update
- **Closing reminder** — Sent a few days before closing with final instructions
- **Post-closing thank you** — A nice touch after the deal closes

## Using templates with tasks

Email templates become even more powerful when linked to [tasks](../tasks/email-automation.md). Set up a task like "Send closing reminder" with a linked template, and the email is ready to go when the task comes due.
