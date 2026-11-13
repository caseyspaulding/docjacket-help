---
sidebar_label: Transaction Email
sidebar_position: 2
description: Use a transaction's Email tab to manage the inbox, communication timeline, scheduled email, and internal notes.
---

<!-- Canonical: https://help.docjacket.com/docs/messages/inbox -->
<!-- Source: docs/messages/inbox.mdx -->

# Transaction Email

Open a transaction and click **Email** to manage communication for that deal. This workspace is organized into four tabs: **Inbox**, **Timeline**, **Scheduled**, and **Notes**.

![Transaction Email Inbox showing filters, search, message rows, and Compose](/img/messages/email-inbox-list.png)

Transaction communication is intentionally handled inside the deal workspace so emails, forwarded deal messages, scheduled sends, and notes stay attached to the correct transaction.

## Inbox

The **Inbox** tab is the transaction email center. Use it to:

- Filter messages by **Inbox**, **Unread**, **Sent**, **Drafts**, **Auto**, or **Archived**
- Search transaction emails by subject, recipient, or content
- Open an email to reply, reply all, forward, star, mark read or unread, archive, or delete
- Select multiple messages and bulk mark read, archive, or delete
- Review delivery status and provider message IDs when available
- Approve or dismiss suggested actions shown on a message

If no Gmail or Outlook account is connected, DocJacket shows a connect prompt before you start sending email.

### Move or remove a filed email

When an inbound email was filed onto this deal — by you assigning it from the intake queue, automatically, or by someone emailing the deal's own address — the message detail panel adds two extra actions:

- **Move to another deal** — reassign the email (and its attachments) to a different transaction. If the sender wasn't verified, the attachments stay held on the new deal until you click **Save to Documents**.
- **Remove from this deal** — detach the email so it can be routed somewhere else.

These actions appear only on filed inbound emails, and they are the fix when a message lands on the wrong transaction. See [Getting Email Into DocJacket](./getting-email-into-docjacket.mdx) for how messages get filed in the first place.

:::tip Wrong deal? Nothing is lost
Moving or removing a filed email carries the message and its attachments along (files held from an unverified sender stay held until you save them) — so an automatic suggestion that picked the wrong transaction is a quick, safe fix.
:::

## Timeline

The **Timeline** tab is the chronological communication record for the deal. It combines email, notes, and pending scheduled items into one view so you can answer, "What happened on this transaction?"

Timeline rows can show:

- Inbound and outbound emails
- Auto-generated messages
- Scheduled emails
- Internal notes
- Attachments when a communication includes files

The timeline also shows the deal email address when one exists. Copy that address when you want to forward outside email into the transaction. If the transaction does not have a deal email address yet, click **Generate deal email address**. To swap the address for a fresh one, click **New address** next to **Copy**. The old address stops working immediately, so tell anyone who saved it. See [Replace a deal's email address](../documents/docdrop.mdx#replace-a-deals-email-address).

## Scheduled

The **Scheduled** tab shows emails queued for the transaction. It combines:

- Template or task-driven scheduled emails
- One-off emails created from the Inbox tab's **Schedule** option

Rows show the subject, recipients, send time, and whether the item is pending, held, or failed. Depending on the source, you can edit, cancel, or send now. Sent items move back into the **Inbox** tab.

If there is no connected Gmail or Outlook account, the Scheduled tab shows a connect prompt because scheduled emails need a mailbox to send from.

### When a scheduled email has no recipient

Gmail and Outlook will not send an email that has no **To** recipient, so DocJacket holds it instead of trying. A held row shows one of two labels:

- **No recipient set** — nothing on the email names a To recipient, and its email template's **Recipients by Role** names no To either. Hover the label to see *"This email has no recipient, so it will not send. Use Edit to add one, or Cancel."*
- **No recipients** — the email names a To role, but no contact on the deal holds that role, so only Cc recipients (or nobody) would be left.

Either way, DocJacket sends you one notification in the bell that links to the deal. To fix the row, use **Edit** to add a recipient, then **Send now**, or **Cancel** it. If the role was missing a contact, add the contact to the deal first.

Your organization's **Always CC on Reminders** addresses go on the Cc line, so they never make an email without a To sendable on their own.

To stop this happening on future deals, add a **To** recipient to the scheduled email in the Playbook, or set **Recipients by Role** on its [email template](../templates/email-templates.md#recipient-targeting).

## Notes

The **Notes** tab is for internal transaction notes. Add rich-text notes, reply to notes, pin important notes, and edit or delete notes you created.

Notes are internal team communication. Use email when the message should go to a client, agent, or vendor.
