---
sidebar_label: Transaction Messages
sidebar_position: 2
description: Use a transaction's Messages tab to manage email, scheduled email, direct SMS, portal conversations, and internal notes.
---

<!-- Canonical: https://help.docjacket.com/docs/messages/inbox -->
<!-- Source: docs/messages/inbox.mdx -->

# Transaction Messages

Open a transaction and click **Messages** to manage communication for that deal. This workspace is organized into four tabs: **Email**, **Scheduled**, **SMS**, and **Notes**.

The sidebar **Messages** page points you back to transactions. Message history is intentionally handled inside each transaction so emails, texts, portal replies, and notes stay attached to the correct deal.

## Email

The **Email** tab is a split-pane inbox for the current transaction. Use it to:

- Filter messages by **Inbox**, **Unread**, **Sent**, **Drafts**, **Auto**, or **Archived**
- Search transaction emails by subject, recipient, or content
- Open an email to reply, reply all, forward, star, mark read or unread, archive, or delete
- Select multiple messages and bulk mark read, archive, or delete
- Review delivery status and provider message IDs when available
- Approve or dismiss suggested actions shown on a message

If no Gmail or Outlook account is connected, DocJacket shows a connect prompt before you start sending email.

## Scheduled

The **Scheduled** tab shows emails queued for the transaction. It combines:

- Template or task-driven scheduled emails
- One-off emails created from the Email tab's **Send later** option

Rows show the subject, recipients, send time, and whether the item is pending, held, or failed. Depending on the source, you can edit, cancel, or send now. Sent items move back into the **Email** tab.

## SMS and Portal

The **SMS** tab shows direct conversations for the transaction. It is the live thread view for text and portal-style communication, so threads can show **SMS**, **Portal**, or **Email** badges depending on how DocJacket resolved the contact's delivery channel.

From this tab you can:

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

## Notes

The **Notes** tab is for internal transaction notes. Add rich-text notes, reply to notes, pin important notes, and edit or delete notes you created.
