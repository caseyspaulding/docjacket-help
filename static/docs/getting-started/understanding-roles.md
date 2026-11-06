---
sidebar_label: Understanding Roles
sidebar_position: 5
description: How DocJacket roles work — team permissions, limiting a role to its own deals, transaction contact roles, portal access, and signer roles.
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
- **Broker** — Works deals and reviews files for compliance, with the audit trail and compliance export
- **Transaction Coordinator** — Works deals: documents, dates, tasks, and email; can reveal saved MLS and portal passwords
- **Agent** — Works deals: documents, dates, tasks, and email
- **Assistant** — Works deals: documents, dates, tasks, and email
- **Viewer** — Read-only: can open deals and their documents, but can't change anything

**By default, every team member sees every deal.** A role decides what a person can change — settings, the team, billing, saved passwords — and Viewer is read-only. To focus on your own work, use the **Mine** view on Transactions or **Assigned to me** on Tasks; these filter your own view and don't hide anything from anyone else. To actually keep a role to its own deals, use the **Deal visibility** setting below.

### Limit a role to the deals its members are on

Owners and Admins can limit chosen roles to **own deals only**. Open **Settings > Team Members** and find the **Deal visibility** card. It has one switch each for **Transaction Coordinator**, **Agent**, **Assistant**, **Viewer**, and **Broker**. All of them are off until you turn them on. Turning one on asks you to confirm and tells you how many members hold that role. Owners and Admins can't be limited and always see every deal.

The setting belongs to the **role**, not to a person. Everyone who holds a limited role is limited, a new hire with that role is covered automatically, and changing a member's role changes what they can see on their very next page load. Members who are limited show an **Own deals only** badge in the team list.

A limited member is "on" a deal when any one of these is true:

- The deal is **assigned** to them
- They **created** the deal
- They are **listed on the deal as an agent** (a contact on the deal with their email address and an agent role, such as Listing Agent or Buyer's Agent)
- They are **assigned a task** on the deal. An assigned task shares the whole deal with that person, so assign a task to bring someone onto a deal without reassigning it.

For a limited member, a deal they aren't on behaves as if it doesn't exist. It doesn't appear in the deal list, pipeline, search, Tasks, Calendar, the dashboard, Ask AI answers, or the morning brief, and opening its link shows **Transaction not found** (or **Listing not found** for a listing).

A few things work differently for a limited member:

- **Contacts stay shared.** The contact list is one address book for the whole organization, so they can still create, edit, and delete contacts. The deals and tasks shown on a contact's page are limited to the deals they are on.
- **Org-wide pages aren't available.** Reports, exports, the organization Inbox, the review queue, and the notification bell cover every deal, so they are hidden for limited members.
- **API keys and AI connections (MCP) don't work for them.** An API key or AI-assistant connection made by a limited member is refused until their role is no longer limited.

## The Roles page

**Settings > Roles** (Owner and Admin only) shows what each built-in role can do as a read-only table. The only thing you can change there is whether a role below Admin can open **Advanced settings**. Which roles see only their own deals isn't set here; use the **Deal visibility** card on **Settings > Team Members**.

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
