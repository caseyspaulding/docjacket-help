---
sidebar_label: User Management
sidebar_position: 6
description: Invite team members to your DocJacket organization, assign roles, manage seats, and control who can access transactions and settings.
---

<!-- Canonical: https://help.docjacket.com/docs/settings/user-management -->
<!-- Source: docs/settings/user-management.mdx -->

# User Management

Add team members to your DocJacket organization and control what they can access.

## Inviting team members

1. Go to **Settings > Team Members**
2. Click **Invite Member**
3. Enter their email address
4. Assign a role
5. Click **Send Invite**

They'll receive an email with a link to join your organization.

The Team Members page also shows seat usage. If your plan is at capacity, DocJacket may prompt you to upgrade or add another seat before sending the invite.

### If they already have a DocJacket account

Plenty of people you invite will have used DocJacket before — at a previous brokerage, or on their own.

**If they aren't currently in a workspace**, they don't need to hunt down the invitation email. Signing in normally — with Google, or by requesting a sign-in link — puts them straight into your organization, and the invitation is marked accepted. That covers someone who left a previous brokerage, and someone who signed up but never finished setting up a workspace of their own.

**If they're already working in another organization**, joining yours takes clicking the link in the invitation email. Signing in normally leaves them where they are. This is deliberate: entering someone's email address should never move them out of the workspace holding their live transactions.

**If more than one organization has invited them**, DocJacket won't choose on their behalf — they'll be asked to use the invitation link for the one they mean to join.

If you invited someone and they aren't showing up on your Team Members page, check whether the invitation is still listed as pending. If it is, resend it and have them click the link in the email.

## Roles and permissions

Each team member has one role, and the role decides what they can do. DocJacket has seven built-in roles: **Owner**, **Admin**, **Broker**, **Transaction Coordinator**, **Agent**, **Assistant**, and **Viewer**. What each role can do is set by DocJacket. You can't create new roles or pick permissions for a role. To give someone different access, [change their role](#changing-a-members-role). For what each role is for, see [Understanding Roles](../getting-started/understanding-roles.mdx).

**Settings > Roles** (the **Roles** item under **Advanced** in the Settings menu) shows what each role can do as a read-only table. It is for Owners and Admins. The one thing you can change there is whether a role below Admin can open **Advanced settings**. If your organization created custom roles in the past, they are still listed there with a **Custom** badge, and you can delete one once no member holds it.

The **Roles** item under **Transactions** in the Settings menu is a different page: it manages the roles contacts play on a deal, such as Buyer or Listing Agent. See [Transaction Configuration](./transaction-configuration.md#transaction-roles).

### Which deals each role sees

By default, every team member sees every deal. Owners and Admins can limit the **Transaction Coordinator**, **Agent**, **Assistant**, **Viewer**, and **Broker** roles to the deals their members are on:

1. Go to **Settings > Team Members**
2. Find the **Deal visibility** card
3. Turn on the switch for the role, and confirm

A limited member doesn't see the deals they aren't on, or the tasks and key dates on those deals: they're left out of that member's **Tasks** page, **Calendar**, dashboard, and search. Assigning a member a task on a deal puts them on that deal, so they'll see it and its tasks.

Owners and Admins always see every deal, and a custom role can't be limited. The setting belongs to the role, so everyone who holds it is covered, including people you invite later. For what counts as being "on" a deal and what a limited member can't see, see [Limit a role to the deals its members are on](../getting-started/understanding-roles.mdx#limit-a-role-to-the-deals-its-members-are-on).

## Changing a member's role

1. Go to **Settings > Team Members**
2. Click the **⋮** menu on the member's row
3. Choose **Change role**
4. Pick the new role and click **Save**

The new role takes effect right away. If you changed your own role, the menus and settings you can reach update without signing out.

If your organization uses **Deal visibility** and the new role is limited differently from the old one, the dialog tells you before you save whether the member will see every deal or only the deals they are on.

A few rules keep your organization safe:

- **Only an Owner can make someone an Owner, or change an Owner's role.** Admins can change everyone else's role.
- **Every organization keeps at least one Owner.** If you're the only Owner and want a different role, make someone else an Owner first, then change your own.

A role controls what someone can **do** in DocJacket. It isn't the title people see on your emails — that comes from your signature. If you're the only person in your organization, stay an Owner and put your job title (for example "Transaction Coordinator") in your [email signature](../templates/email-signatures.md).

## Managing members and invitations

From **Settings > Team Members**, you can:

- **Change a member's role** - See [Changing a member's role](#changing-a-members-role)
- **Deactivate a member** - Remove their access without deleting their account
- **Reactivate a member** - Restore access when your seat limit allows it
- **Remove a member** - Permanently remove them from your organization
- **Resend an invitation** - Send a fresh invite email for a pending invitation
- **Cancel an invitation** - Stop a pending invitation that should no longer be used
