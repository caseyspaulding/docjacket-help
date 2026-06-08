---
sidebar_label: Online Forms
sidebar_position: 6
description: Build reusable online forms for collecting structured information, creating transactions, updating transactions, and routing Front Door submissions.
---

# Online Forms

Online Forms collect structured information without sending a spreadsheet or long email thread. Use them for intake, client updates, vendor details, listing information, Front Door calls to action, or any repeatable request.

Forms can be standalone public intake forms or transaction-specific forms, depending on the form purpose.

## Creating a form

1. Go to **Templates > Online Forms**
2. Click **New Form**
3. Enter the form name, purpose, and description
4. Customize the welcome message, completion message, and theme if needed
5. Add fields from the field palette
6. Organize fields into sections
7. Preview the public form
8. Create the right kind of share link

The builder has three steps:

- **Setup** — Basic information, branding, messages, theme, section styling, and checklist binding
- **Fields** — Field canvas, field palette, field properties, ordering, and conditional display
- **Share** — Public or transaction-specific links, version history, and form preview

## My Forms and shared samples

The Online Forms page has two tabs:

- **My Forms** — Forms your organization owns and can edit, activate, deactivate, duplicate, or delete
- **Shared** — Sample templates from DocJacket and founding trainers

Shared forms are read-only. Preview the fields, then use **Use This Template** or **Copy to My Forms** to create an editable copy in your organization.

## Form purposes

Choose the purpose before sharing the form:

- **Create Transaction** — Creates a new transaction or intake item from the submitted information. These forms can have standalone public links.
- **Update Transaction** — Collects information for an existing transaction. Links must be attached to a transaction.
- **Additive** — Adds new supporting information to an existing transaction. Links must be attached to a transaction.

Use **Create Transaction** for Front Door **Submit a File** routing and public intake.

Use **Update Transaction** or **Additive** when the form belongs to a specific deal, such as requesting seller updates, vendor details, or missing information.

## Field types

Online Forms support:

- Text, text area, number, email, phone, date, and currency fields
- Dropdown, radio, yes/no, checkbox, and multi-select fields
- Address and participant fields
- Contact picker and organization picker fields
- Services dropdown fields that can filter services by earlier answers
- File uploads
- Rich text

For each field you can set the label, required status, section, placeholder, help text, width, options, and conditional display rules.

## Sections and branding

Forms inherit your organization branding by default. You can also set a per-form theme, welcome message, completion message, and section styling.

Sections can include:

- Section names
- Rich-text section descriptions
- Icons or emoji
- Header band colors

Public forms show your organization logo/name, the form title, welcome message, grouped sections, and a branded submit button.

## Publishing and versions

When you edit fields, DocJacket saves a published snapshot after a short pause. The Share step shows the current live version and version history.

Use **Preview** to open the public form as a recipient would see it. Preview links include a preview banner for your own testing.

## Sharing forms

Create-transaction forms can use a standalone public form link. Anyone with the link can submit the form without a DocJacket account.

Update and additive forms need a transaction-specific link. To create one:

1. Open the transaction
2. Go to the **Forms** tab
3. Click **Send Form**
4. Choose the form
5. Set an expiration date or max submissions if needed
6. Create and copy the link

Form links can be active, inactive, expired, or maxed out. You can copy, open, deactivate, or delete links from the builder or from the transaction's Forms tab.

## Front Door routing

To use a form from a Front Door **Submit a File** CTA:

1. Create an Online Form with purpose **Create Transaction**
2. Add the fields and file uploads you need
3. Create an active public link
4. Go to **Front Door**
5. Edit the **Primary CTA**
6. Choose **Submit a File**
7. Select the form

Front Door can only route to create-transaction forms that have an active share link.

## Submissions and review

Transaction-specific form submissions appear on the transaction's **Forms** tab. From there you can:

- See active links and submission counts
- Expand submissions to review submitted fields
- Map submitted fields to transaction fields
- Mark fields as clear, needing documents, needing internal review, needing attorney/title review, or resolved
- Apply mapped values to the transaction

Create-transaction submissions may enter the intake flow for review and routing before becoming a transaction record.

## When to use forms

Use an online form when you need consistent answers from someone outside your team:

- Buyer or seller intake
- Listing preparation details
- Vendor contact information
- Showing or access instructions
- Client questionnaire responses
- Front Door submit-file intake
- Missing information requests on an active transaction

## How forms fit with transactions

Form responses give you structured data that can be reviewed and used by the team. For repeatable transaction workflows, combine forms with [checklists](./timeline-templates.md), [email templates](./email-templates.md), [smart fields](./smart-fields.md), and [Front Door](../front-door/leads-and-ctas.md).
