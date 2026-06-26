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
- Current User — your own name, email, and phone (for example `{{my_name}}`), handy in signatures and sign-offs
- Custom

Each field card shows the label, syntax, description, and example when available. For the complete list, see the [Full field reference](#full-field-reference) below.

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

:::tip Reuse before you create
Search the existing library before adding a custom field — most of what you need is already there. And keep governed transaction dates in the [Key Date Library](./task-templates.md) rather than creating duplicate custom date fields, so automation and reporting stay consistent.
:::

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

## Full field reference

This is the complete built-in smart-field library. Your organization can also add **Custom** fields, and some fields only populate for specific workflows (for example, leasing or state-specific dates). Insert fields from the smart-field picker so the syntax is always correct.

### Transaction

| Field | Token |
| --- | --- |
| Property Address (street) | `{{property_address}}` |
| Property Full Address | `{{property_full_address}}` |
| Property City | `{{property_city}}` |
| Property State | `{{property_state}}` |
| Property ZIP | `{{property_zip}}` |
| MLS Number | `{{mls_number}}` |
| Transaction Type | `{{transaction_type}}` |
| Transaction Status | `{{transaction_status}}` |
| Closing Location | `{{closing_location}}` |
| Closing Location Map Link | `{{closing_location_map_link}}` |
| Alt. Earnest Money Location | `{{alt_em_location}}` |
| Alt. Earnest Money Map Link | `{{alt_em_location_map_link}}` |
| Closing Time | `{{closing_time}}` |
| Role | `{{role}}` |
| Earnest Money Location | `{{em_location}}` |
| Alt EM Holder | `{{em_alt_title_company}}` |

### Contacts

| Field | Token |
| --- | --- |
| Buyer Name | `{{buyer_name}}` |
| Buyer Email | `{{buyer_email}}` |
| Buyer Phone | `{{buyer_phone}}` |
| Seller Name | `{{seller_name}}` |
| Seller Email | `{{seller_email}}` |
| Seller Phone | `{{seller_phone}}` |
| Buyer First Name | `{{buyer_first_name}}` |
| Seller First Name | `{{seller_first_name}}` |
| All First Names (current side) | `{{first_names}}` |
| All Full Names (current side) | `{{full_names}}` |
| Title Company | `{{title_company}}` |
| Title Officer | `{{title_officer}}` |
| Title Company Address | `{{title_company_address}}` |
| Title Company Map Link | `{{title_company_map_link}}` |
| Title Company Phone | `{{title_company_phone}}` |
| Title Company Email | `{{title_company_email}}` |
| Lender Name | `{{lender_name}}` |
| Loan Officer | `{{loan_officer}}` |
| Lender Phone | `{{lender_phone}}` |
| Lender Email | `{{lender_email}}` |
| Buyer's Attorney Name | `{{buyers_attorney_name}}` |
| Buyer's Attorney Email | `{{buyers_attorney_email}}` |
| Buyer's Attorney Phone | `{{buyers_attorney_phone}}` |
| Buyer's Attorney Firm | `{{buyers_attorney_company}}` |
| Seller's Attorney Name | `{{sellers_attorney_name}}` |
| Seller's Attorney Email | `{{sellers_attorney_email}}` |
| Seller's Attorney Phone | `{{sellers_attorney_phone}}` |
| Seller's Attorney Firm | `{{sellers_attorney_company}}` |
| Home Inspector Name | `{{home_inspector_name}}` |
| Home Inspector Email | `{{home_inspector_email}}` |
| Home Inspector Phone | `{{home_inspector_phone}}` |
| Home Inspector Company | `{{home_inspector_company}}` |
| Opposing TC Name | `{{coop_tc_name}}` |
| Opposing TC Email | `{{coop_tc_email}}` |
| Opposing TC Phone | `{{coop_tc_phone}}` |
| Opposing TC Firm | `{{coop_tc_company}}` |
| Buyer's Paralegal Name | `{{buyer_paralegal_name}}` |
| Buyer's Paralegal Email | `{{buyer_paralegal_email}}` |
| Buyer's Paralegal Phone | `{{buyer_paralegal_phone}}` |
| Buyer's Paralegal Firm | `{{buyer_paralegal_company}}` |
| Seller's Paralegal Name | `{{seller_paralegal_name}}` |
| Seller's Paralegal Email | `{{seller_paralegal_email}}` |
| Seller's Paralegal Phone | `{{seller_paralegal_phone}}` |
| Seller's Paralegal Firm | `{{seller_paralegal_company}}` |
| HOA Contact Name | `{{hoa_contact_name}}` |
| HOA Contact Email | `{{hoa_contact_email}}` |
| HOA Contact Phone | `{{hoa_contact_phone}}` |
| HOA Management Company | `{{hoa_contact_company}}` |
| Landlord Name | `{{landlord_name}}` |
| Landlord Email | `{{landlord_email}}` |
| Landlord Phone | `{{landlord_phone}}` |
| Landlord Company | `{{landlord_company}}` |
| Tenant Name | `{{tenant_name}}` |
| Tenant Email | `{{tenant_email}}` |
| Tenant Phone | `{{tenant_phone}}` |
| Tenant Company | `{{tenant_company}}` |
| Maintenance Contact Name | `{{maintenance_contact_name}}` |
| Maintenance Contact Email | `{{maintenance_contact_email}}` |
| Maintenance Contact Phone | `{{maintenance_contact_phone}}` |
| Maintenance Company | `{{maintenance_contact_company}}` |

### Agents

| Field | Token |
| --- | --- |
| Agent Name (You) | `{{agent_name}}` |
| Agent Email (You) | `{{agent_email}}` |
| Agent Phone (You) | `{{agent_phone}}` |
| Agent License # | `{{agent_license}}` |
| Deal Agent Name | `{{deal_agent_name}}` |
| Deal Agent Email | `{{deal_agent_email}}` |
| Deal Agent Phone | `{{deal_agent_phone}}` |
| Deal Agent Brokerage | `{{deal_agent_brokerage}}` |
| Deal Agent First Name | `{{deal_agent_first_name}}` |
| Listing Agent Name | `{{listing_agent_name}}` |
| Listing Agent Email | `{{listing_agent_email}}` |
| Listing Agent Phone | `{{listing_agent_phone}}` |
| Listing Agent Brokerage | `{{listing_agent_brokerage}}` |
| Listing Agent Office Address | `{{listing_agent_office_address}}` |
| Buyer Agent Name | `{{buyer_agent_name}}` |
| Buyer Agent Email | `{{buyer_agent_email}}` |
| Buyer Agent Phone | `{{buyer_agent_phone}}` |
| Buyer Agent Brokerage | `{{buyer_agent_brokerage}}` |
| Opposing Agent Name (alias) | `{{co_agent_name}}` |
| Opposing Agent Email (alias) | `{{co_agent_email}}` |
| Opposing Agent Brokerage (alias) | `{{co_agent_brokerage}}` |
| Agent Has Assistant? | `{{agent_has_assistant}}` |
| Agent Assistant Email | `{{agent_assistant_email}}` |
| Opposing Agent Name | `{{opposing_agent_name}}` |
| Opposing Agent Email | `{{opposing_agent_email}}` |
| Opposing Agent Phone | `{{opposing_agent_phone}}` |
| Opposing Agent Brokerage | `{{opposing_agent_brokerage}}` |

### Organization / Brokerage

| Field | Token |
| --- | --- |
| Brokerage Name | `{{brokerage_name}}` |
| Brokerage Address | `{{brokerage_address}}` |
| Brokerage Phone | `{{brokerage_phone}}` |

### Dates

| Field | Token |
| --- | --- |
| Closing Date | `{{closing_date}}` |
| Contract Date | `{{contract_date}}` |
| Inspection Deadline | `{{inspection_deadline}}` |
| Financing Deadline | `{{financing_deadline}}` |
| Appraisal Deadline | `{{appraisal_deadline}}` |
| Deposit Due Date | `{{deposit_due_date}}` |
| Option Period End | `{{option_period_end}}` |
| P&S Deadline | `{{purchase_sale_deadline}}` |
| Final Walkthrough | `{{final_walkthrough}}` |
| Lease Signed | `{{lease_signed}}` |
| Application Approved | `{{application_approved}}` |
| Possession Date | `{{possession_date}}` |
| Listing Date | `{{listing_date}}` |
| Earnest Money Due | `{{earnest_money_due}}` |
| EM Due Date | `{{em_due_date}}` |

### Financial

| Field | Token |
| --- | --- |
| Financing Type | `{{financing_type}}` |
| Purchase Price | `{{purchase_price}}` |
| Earnest Money | `{{earnest_money}}` |
| Option Fee | `{{option_fee}}` |
| Down Payment | `{{down_payment}}` |
| Loan Amount | `{{loan_amount}}` |
| Commission Rate | `{{commission_rate}}` |
| Buyer Agent Commission Rate | `{{buyer_agent_commission_rate}}` |
| Seller Agent Commission Rate | `{{seller_agent_commission_rate}}` |

### Current User

| Field | Token |
| --- | --- |
| My Name | `{{my_name}}` |
| My Email | `{{my_email}}` |
| My Phone | `{{my_phone}}` |
| My First Name | `{{my_first_name}}` |

### Contact blocks

Contact blocks render a formatted contact card — name, email, phone, and company — and only show the fields that are filled in, so they're safe to include in reusable templates. Insert them from the smart-field picker.

| Field | Token |
| --- | --- |
| Assistant Contact Block | `{{contact_block:assistant}}` |
| Brokerage Contact Block | `{{contact_block:brokerage}}` |
| Buyer Agent Contact Block | `{{contact_block:buyer_agent}}` |
| Buyer Contact Block | `{{contact_block:buyer}}` |
| Buyer's Attorney Block | `{{contact_block:buyers_attorney}}` |
| Buyer's Paralegal Block | `{{contact_block:buyer_paralegal}}` |
| Deal Agent Contact Block | `{{contact_block:deal_agent}}` |
| Escrow Assistant Block | `{{contact_block:escrow_assistant}}` |
| Escrow Officer Block | `{{contact_block:escrow_officer}}` |
| HOA Contact Block | `{{contact_block:hoa_contact}}` |
| Home Inspector Block | `{{contact_block:home_inspector}}` |
| Landlord Block | `{{contact_block:landlord}}` |
| Lender Contact Block | `{{contact_block:lender}}` |
| Listing Agent Contact Block | `{{contact_block:listing_agent}}` |
| Loan Officer Block | `{{contact_block:loan_officer}}` |
| Loan Processor Block | `{{contact_block:loan_processor}}` |
| Maintenance Contact Block | `{{contact_block:maintenance_contact}}` |
| Opposing Agent Contact Block | `{{contact_block:co_agent}}` |
| Opposing TC Block | `{{contact_block:coop_tc}}` |
| Seller Contact Block | `{{contact_block:seller}}` |
| Seller's Attorney Block | `{{contact_block:sellers_attorney}}` |
| Seller's Paralegal Block | `{{contact_block:seller_paralegal}}` |
| Tenant Block | `{{contact_block:tenant}}` |
| Title Company Contact Block | `{{contact_block:title_company}}` |
| Title Processor Block | `{{contact_block:title_processor}}` |
| Your Agent Contact Block | `{{contact_block:agent}}` |

## Tips

- Reuse existing fields before creating a new one.
- Give custom fields clear names that match how your team talks about the data.
- Keep governed transaction dates in the [Key Date Library](./task-templates.md) instead of creating duplicate custom date fields.
- Use groups for longer templates so you do not miss related fields.
- Preview or test-send templates that use conditions before relying on them in automation.
