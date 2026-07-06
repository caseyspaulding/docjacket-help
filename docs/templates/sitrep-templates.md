---
sidebar_label: SitRep Templates
sidebar_position: 9
description: Configure reusable SitRep report templates in DocJacket so transaction status updates go out consistently formatted every time.
---

# SitRep Templates

SitRep templates control the structure of transaction status reports. They decide which live transaction sections are included when you generate, send, or schedule a SitRep.

Use SitRep templates when different audiences need different report formats. For example, a client-facing weekly update may include key dates, tasks, and documents needed, while an internal update may include team-only notes.

## Custom and system templates

The SitRep Templates page has two tabs:

- **Custom** — Templates your organization can create, edit, duplicate, and delete
- **System** — Pre-built DocJacket templates that can be viewed or duplicated

System templates are read-only. Duplicate a system template to create an editable custom version.

## Creating a SitRep template

1. Go to **Templates > SitRep Templates**
2. Click **New Template**
3. Enter the template name
4. Choose a category
5. Add an optional description
6. Add the sections you want included
7. Drag sections into the order they should appear
8. Click **Create Template**

Categories include:

- Custom
- Weekly
- Monthly
- Closing

Use categories to keep report templates organized and to make scheduling choices easier.

## Available sections

SitRep templates can include these sections:

- **Property Details** — Address, county, MLS number, transaction type, and side
- **Key Dates** — Key date status indicators and closing timeline context
- **Parties & Contacts** — Buyers, sellers, agents, title, lender, and related contacts
- **Tasks** — Progress, upcoming tasks, and recently completed tasks
- **Documents** — Document progress by type and pending documents
- **Documents Needed** — Outstanding required documents with due dates and blocking flags
- **HOA Information** — HOA contact information and dues
- **Utilities Information** — Utility provider details
- **Internal Notes** — Team-only notes from the transaction
- **Custom Notes** — Notes typed at generation or send time
- **Commission Details** — Sales price, commission breakdown, credits, referral fee, and cooperating commission

Each section pulls live data from the transaction when the report is generated.

## Internal notes vs custom notes

Be careful with note sections:

- **Internal Notes** pulls from the transaction's internal Notes field. Leave it off client-facing templates unless those notes are meant to be shared.
- **Custom Notes** is text typed when generating or sending the report. Use it for a one-time cover message or explanation.

:::warning Keep Internal Notes off client reports
The **Internal Notes** section pulls your team-only notes straight into the report. Leave it off any template you send to clients — keep a separate client-safe template and an internal one. Use **Custom Notes** when you want a one-off message on a client report.
:::

## Using a SitRep template

Open a transaction and go to the **Reports** section. From there, you can:

1. Choose a SitRep template
2. Review the selected report sections
3. Override sections for that specific send or PDF
4. Add custom notes if needed
5. Generate a PDF
6. Send the SitRep to selected recipients

If the transaction has a SitRep delivery schedule, changing section toggles from the Reports page can update the scheduled SitRep.

## Scheduling SitReps

From a transaction's **Reports** section, use **Schedule Delivery** to create or edit a recurring SitRep schedule.

A schedule can include:

- Frequency
- Day of week
- Send time
- Recipients
- Template
- Section choices

You can pause, resume, edit, or delete the schedule from the Reports page.

## Editing templates

Editing a custom template changes the reusable template. It does not rewrite a report that was already sent.

On the template list, you can also duplicate templates. Duplicating is useful when you need a client-safe version, an internal version, and a closing-week version that are mostly the same.

## Tips

- Keep client-facing templates focused on useful status: key dates, tasks, documents, and next steps.
- Leave **Internal Notes** off public or client-facing templates.
- Include **Documents Needed** when your team wants missing-document status visible in reports.
- Use **Custom Notes** for one-off context instead of editing the reusable template.
- Duplicate system templates before customizing them.
