---
sidebar_label: Intake Queue
sidebar_position: 3
description: Route unassigned emails and intake-form submissions to the right transaction from the DocJacket Inbox to keep your pipeline organized.
---

<!-- Canonical: https://help.docjacket.com/docs/operations/intake-queue -->
<!-- Source: docs/operations/intake-queue.md -->

# Intake Queue

The Intake Queue workflow lives in **Inbox**, where you view and manage all transaction communications. It is where unassigned inbound work waits until it is accepted, assigned, or dismissed.

Use it when the question is "Which transaction does this belong to?"

Use it for:

- Incoming emails
- Online intake form submissions

## Where to find it

Open **Inbox** from the left sidebar. The page includes conversation filters for **All**, **Unread**, and **Unassigned**, plus type chips for **Forms** and **Email**.

Use **Unassigned** when you want to focus on routing work that is not linked to a transaction yet. Use the type chips when you only want to process one inbound channel.

## Intake email

If your organization has an intake subdomain, Inbox shows a **Forward to** intake email address in the header, such as an organization-specific address at `intake.docjacket.com`. Copy that address and forward transaction-related messages to it so DocJacket can route them.

:::tip Make it automatic
Set up a forwarding rule in your email so anything that should reach DocJacket lands in the Intake Queue without you copying the address each time.
:::

## Filters and counts

Inbox groups work by item type and shows counts where they help, such as the email count on the Email chip.

Use the search box when you need to find a message by sender, subject, address, or content.

If there is no matching work, DocJacket shows an empty state instead of the thread list.

## AI routing suggestions

DocJacket may suggest a transaction for an unassigned item. Suggested matches show in the selected item's context panel and can include:

- Transaction address
- Confidence percentage
- Optional match reason

DocJacket builds these suggestions two ways. First, it checks whether the sender has already been linked to a transaction before — when there is a match, that is a strong, high-confidence suggestion. If there is no prior history, DocJacket reads the message and proposes the best active transaction it can find.

Click **Accept & Assign** when the suggestion is correct. The item is linked to that transaction.

:::note Automatic linking
When DocJacket is highly confident, it may link the item to a transaction automatically so you do not have to. You can always change that — see [Unlink or move a filed email](#unlink-or-move-a-filed-email).
:::

## Manual assignment

If there is no good suggestion, use **Assign to Transaction** in the right panel.

Search by address, buyer, or seller, choose the transaction, and assign the item. Keep the selected message open while you search so you can read the content before deciding.

Assignment links the item to the transaction record so the team can handle it in the right deal context.

## What happens when you assign an email

Assigning an email does more than file it:

- **Attachments come along.** Any files attached to a forwarded email are added to the transaction's documents, so contracts and addenda land on the deal automatically. You still choose when to run extraction on them from the deal's documents.
- **The email shows on the deal.** The message appears on the transaction's **Email** tab, so the whole team can read the conversation in the right deal context — not just in Inbox.

## Unlink or move a filed email

If an email ends up on the wrong deal, you do not have to live with it. From the transaction's **Email** tab you can:

- **Remove it from the deal**, sending it back to be reassigned, or
- **Move it to another deal** without losing the message or its attachments.

:::tip Wrong deal? Easy to fix
This is the fix when an automatic suggestion linked something to the wrong transaction — nothing is lost, including attachments.
:::

## Replies from clients

When you send email from a deal, replies file themselves automatically. When a client, agent, or title company replies to that message, DocJacket forwards a copy to the assignee's inbox — or the account owner's, if the deal is not assigned yet — so the reply is not missed. The forwarded copy keeps the sender's name and the original subject so you can see at a glance who replied and about what.

## Bulk actions

Select multiple intake items to assign or dismiss them together. Bulk assignment is useful when several forwarded emails belong to the same transaction.

## Dismissing items

Dismiss items that do not need to be routed. Dismissed items are removed from the routing workflow; use this for spam, duplicates, or messages that do not belong in a transaction record.

DocJacket flags likely marketing and spam for you and keeps it out of the routing suggestions, but it does not delete anything on its own — dismissing is always your call.

:::warning Routing vs. review
If an item is not about routing and instead needs approval, editing, sending, or final save after extraction, use the **Review Queue** or **AI Extractions** instead.
:::
