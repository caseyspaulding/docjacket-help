---
sidebar_label: Getting Email Into DocJacket
sidebar_position: 5
description: The three ways email arrives in DocJacket, and the best-practice approach that files messages on the right deal automatically with no manual sorting.
---

<!-- Canonical: https://help.docjacket.com/docs/messages/getting-email-into-docjacket -->
<!-- Source: docs/messages/getting-email-into-docjacket.mdx -->

# Getting Email Into DocJacket

There are three ways for email to land in DocJacket. They differ in one important way: **how much manual sorting you have to do afterward.** Picking the right approach is the difference between email that files itself on the correct transaction and email that piles up in a queue waiting for you to assign it.

This page explains all three, and which one to use.

## Best practice: send from DocJacket and let replies come back

**The cleanest way to get email into a deal is to send the first message from the deal.** When you send an email from a transaction's **Email** tab, DocJacket stamps it with a private reply address. When the recipient replies, that reply comes straight back to the **same transaction** — automatically attached, with no sorting on your part.

This is what we call the **reply loop**, and it is the recommended workflow:

1. Open the transaction and go to the **Email** tab.
2. Compose your message to the title company, agent, client, or vendor and send it.
3. When they reply, the reply appears on that deal's timeline automatically — including any attachments they send back.

Because the message is already tied to the deal, there is **nothing to assign and nothing to clean up**. Our most efficient users run almost all of their communication this way: they start threads from DocJacket, and the entire back-and-forth files itself.

:::tip
The more you send from DocJacket, the more inbound email files itself. If most of your replies are landing in a queue you have to sort by hand, it usually means the original message was sent from your regular inbox instead of from the deal.
:::

## Forward a single email to a specific deal

When someone emails you outside of DocJacket — for example a thread you didn't start — you can forward that one message onto the right transaction using its **deal email address**.

1. Open the transaction and go to the **Email** tab, then the **Timeline**.
2. Copy the **deal email address** (or click **Generate deal email address** if the deal doesn't have one yet).
3. Forward the outside email to that address.

The message and its attachments file directly onto that transaction. This is the right tool for one-off messages that belong to a deal you can identify.

## Forward your whole mailbox to the intake queue

You can also forward mail to your organization's **intake address** (shown on the **Inbox** / intake queue, with a **Copy intake email** button). Anything sent there lands in a shared **intake queue** for your organization, where you assign each message to the correct deal.

This is useful as a catch-all, but it comes with a trade-off: **everything you forward — including newsletters, marketing, and email-signature images — lands in the queue, and you have to assign each item by hand.** If you auto-forward an entire mailbox here, expect to spend time sorting.

Use the intake queue as a **fallback**, not your primary method:

- Great for: occasional messages where you can't tell which deal they belong to yet, or capturing documents before a transaction exists.
- Not great as: your only way to get email in. Auto-forwarding a full mailbox here creates a large sorting burden and mixes real deal correspondence with noise.

## Which one should I use?

| Situation | Best approach |
| --- | --- |
| Starting a conversation on a deal | **Send from the deal** — replies come back automatically |
| A reply to something you sent from DocJacket | Nothing to do — it files itself |
| A one-off outside email that clearly belongs to a deal | **Forward to the deal email address** |
| Mail you can't yet match to a deal, or docs before a deal exists | **Forward to the intake address** and assign it later |

**Rule of thumb:** the more communication you *start* inside DocJacket, the less sorting you do later. Reach for forwarding when you're bringing in a thread you didn't begin — and lean on the intake queue only as a catch-all.

## Attachments

However an email arrives, its attachments come with it. When you assign an intake email to a deal — or when a reply lands on a deal it's already tied to — the attached files are added to that transaction's documents, pointing at the same file that arrived. DocJacket does **not** automatically run extraction on these files; extraction is always something you choose to start, so nothing is processed without your say-so.

## Related

- [Sending Emails](./sending-emails.mdx) — compose and send from a transaction
- [Transaction Email](./inbox.mdx) — the Inbox, Timeline, Scheduled, and Notes tabs
- [Email Templates](./email-templates.md) — reusable templates with smart fields
