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

## Timeline

The **Timeline** tab is the chronological communication record for the deal. It combines email, notes, and pending scheduled items into one view so you can answer, "What happened on this transaction?"

Timeline rows can show:

- Inbound and outbound emails
- Auto-generated messages
- Scheduled emails
- Internal notes
- Attachments when a communication includes files

The timeline also shows the deal email address when one exists. Copy that address when you want to forward outside email into the transaction. If the transaction does not have a deal email address yet, generate one from the timeline.

## Scheduled

The **Scheduled** tab shows emails queued for the transaction. It combines:

- Template or task-driven scheduled emails
- One-off emails created from the Inbox tab's **Schedule** option

Rows show the subject, recipients, send time, and whether the item is pending, held, or failed. Depending on the source, you can edit, cancel, or send now. Sent items move back into the **Inbox** tab.

If there is no connected Gmail or Outlook account, the Scheduled tab shows a connect prompt because scheduled emails need a mailbox to send from.

## Notes

The **Notes** tab is for internal transaction notes. Add rich-text notes, reply to notes, pin important notes, and edit or delete notes you created.

Notes are internal team communication. Use email or portal/SMS conversations when the message should go to a client, agent, or vendor.

## SMS and portal conversations

SMS and portal-style conversations are separate from the Email workspace, but they are still attached to the transaction. The conversation view can show **SMS**, **Portal**, or **Email** badges depending on how DocJacket resolved the contact's delivery channel.

From the conversation view you can:

- Start a new message to a transaction contact
- Send a message to multiple contacts
- Reply in an existing thread
- Attach a file
- Use saved SMS templates
- See unread counts, typing indicators, delivery status, and AI action cards when available

### Starting a thread

Click **New Message** to choose one transaction contact and write a message. The contact list only includes contacts with a phone number for direct SMS sends.

If SMS templates exist, choose a template from the message dialog or from the selected thread composer. DocJacket renders transaction and contact variables before placing the text in the composer. If the rendered template is missing values, DocJacket warns you before you send.

SMS messages can be up to 1600 characters. The new-message composer shows character and segment counts so you can see when a long text may use multiple SMS segments; the inline thread composer shows a character count while you reply.

### Sending to multiple contacts

Click **Send to Multiple** to send the same message to several transaction contacts. The multi-send flow uses DocJacket's channel resolution:

- A contact's explicit communication preference wins when one is set
- Portal access is preferred because portal chat is free
- Contacts with phone numbers can receive SMS
- Contacts with email but no phone can fall back to email where supported

Each selected contact is processed separately. The confirmation toast shows how many succeeded and how many failed.

### Existing threads

Select a thread to see its messages. In a selected thread you can type a reply, press **Enter** to send, use **Shift+Enter** for a line break, attach a file up to 25 MB, or apply an SMS template.

Outbound messages show delivery state when DocJacket receives it. SMS messages can show sent, delivered, undelivered, or failed status. Portal messages can show when the portal user has read the message.

Inbound replies update the thread automatically and keep the conversation attached to the transaction.

### Dedicated numbers and shared sending

If your organization does not have a dedicated SMS number, DocJacket shows setup guidance and an option to send from the shared DocJacket number.

Use **Settings > SMS** to search for a dedicated business number, review monthly usage, buy extra credits, or release an existing number.

### SMS limits and safeguards

SMS sends are subject to the organization's plan, monthly credits, hard limit, quiet hours, recipient opt-outs, duplicate-send protection, and unresolved merge-field checks.

Portal chat does not count against SMS usage. A transaction thread may show portal messages beside SMS history, but only actual SMS sends consume SMS credits.
