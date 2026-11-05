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

Team roles control what people inside your organization can change in DocJacket.

You assign these when inviting team members from **Settings > Team Members**.

DocJacket includes these built-in roles:

- **Owner** — Full access, including billing, the team, settings, and deleting the workspace
- **Admin** — Full access to billing, the team, settings, and every deal; cannot delete the workspace
- **Broker** — Works every deal and reviews files for compliance, with the audit trail and compliance export
- **Transaction Coordinator** — Works every deal: documents, dates, tasks, and email; can reveal saved MLS and portal passwords
- **Agent** — Works every deal: documents, dates, tasks, and email
- **Assistant** — Works every deal: documents, dates, tasks, and email
- **Viewer** — Read-only access to every deal and its documents

**Every team member sees every deal.** DocJacket has no setting that limits someone to the deals assigned to them, whatever their role. A role decides what a person can change — settings, the team, billing, saved passwords — and Viewer is read-only. To focus on your own work, use the **Mine** view on Transactions or **Assigned to me** on Tasks; these filter your own view and don't hide anything from anyone else.

## The Roles page

**Settings > Roles** (Owner and Admin only) shows what each built-in role can do as a read-only table. The only thing you can change there is whether a role below Admin can open **Advanced settings**.

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

## Can agents upload their own documents?

It depends on whether the agent is a member of your DocJacket team or an outside agent you share a portal link with.

**Agents on your team (the Agent role).** Yes. A team member with the **Agent** role can open a deal's **Documents** tab and click **Upload**, the same way a TC does. Every team role except **Viewer** can upload documents and make changes on a deal. A **Viewer** is read-only: they can see and download files but can't upload, rename, or delete them. To give an agent upload rights, invite them from **Settings > Team Members** with the **Agent** role (or change their role from **Viewer** to **Agent**).

**Outside agents (client portal / agent portal link).** Not through the portal. The portal shows an agent the deal's shared documents to view and download, but there is no upload button on the portal. To let a cooperating agent or the other side's agent send you documents without a DocJacket seat, give them the deal's [DocDrop](../documents/docdrop.mdx) email address (**Copy DocDrop** on the transaction overview): anything they email to it is filed on that deal's **Documents** tab for you to review.

## Signer roles

E-sign form templates also use signer roles. These roles decide which signer completes each field on a form template, such as Buyer, Buyer 2, Seller, Seller 2, Buyer Agent, or Listing Agent.

Signer roles are configured inside e-sign form templates. They are separate from team permissions and transaction contact roles, though they often use similar names.

## Quick rule of thumb

- Use **team roles** for internal DocJacket access
- Use **transaction contact roles** for people on a deal
- Use **portal roles** for external guest access
- Use **signer roles** for e-sign field ownership
