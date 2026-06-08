---
sidebar_label: Understanding Roles
sidebar_position: 5
description: How DocJacket roles work — team permissions, transaction contact roles, portal access, and signer roles.
---

<!-- Canonical: https://help.docjacket.com/docs/getting-started/understanding-roles -->
<!-- Source: docs/getting-started/understanding-roles.mdx -->

# Understanding Roles in DocJacket

DocJacket uses the word "role" in a few different places. The important thing is that each role type controls a different part of the system.

## Team roles

Team roles control what people inside your organization can see and do in DocJacket.

You manage these in **Settings > Roles** and assign them when inviting team members from **Settings > Team Members**.

DocJacket includes these system roles:

- **Owner** — Full access to everything, including organization settings, billing, and user management
- **Admin** — Manage team, transactions, and settings, without deleting the organization
- **Transaction Coordinator** — Manage assigned transactions, documents, deadlines, and workflow
- **Agent** — View assigned transactions, upload documents, and communicate with clients
- **Assistant** — Help with administrative tasks using limited access
- **Viewer** — Read-only access to assigned transactions and documents

You can also create **custom roles** with specific permission sets.

## Custom permissions

Custom roles can include permissions across these areas:

- Organization management
- User management
- Transaction management
- Communication
- Tasks and scheduling
- Reports and analytics
- General dashboard access
- Billing
- API and integrations

Custom roles are useful when you have assistants, junior TCs, agents, or back-office users who need more than Viewer access but less than Admin access.

System roles cannot be edited or deleted. Custom roles can be edited, and they can be deleted when no team members are assigned to them.

## Transaction contact roles

Transaction contact roles identify who someone is on a specific deal. They do not grant internal team permissions by themselves.

You assign these roles when adding contacts to a transaction. Common examples include:

**Clients**

- Buyer, Seller

**Agents**

- Listing Agent, Buyer's Agent

**Legal & Title**

- Title Company, Closing Attorney, Escrow Officer

**Lending**

- Lender, Loan Officer

**Service Providers**

- Home Inspector, Appraiser, Surveyor, Contractor

**Other**

- Property Manager, HOA Contact, Insurance Agent

These roles help DocJacket organize contacts, fill smart fields, resolve recipient roles in emails, and show the right people on reports.

You can manage organization contact roles in **Settings > Transaction Roles**.

## Portal roles

Portal access is separate from team roles. A client, agent, lender, title contact, or other guest can receive portal access for a transaction without becoming a DocJacket team member.

Use the transaction **Portal** tab to invite contacts, send portal links, and adjust guest access.

## Signer roles

E-sign form templates also use signer roles. These roles decide which signer completes each field on a form template, such as Buyer, Buyer 2, Seller, Seller 2, Buyer Agent, or Listing Agent.

Signer roles are configured inside e-sign form templates. They are separate from team permissions and transaction contact roles, though they often use similar names.

## Quick rule of thumb

- Use **team roles** for internal DocJacket access
- Use **transaction contact roles** for people on a deal
- Use **portal roles** for external guest access
- Use **signer roles** for e-sign field ownership
