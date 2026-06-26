---
sidebar_label: Intake Queue
sidebar_position: 3
description: Route unassigned emails, SMS, intake forms, and notes to transactions from the DocJacket Inbox intake workflow.
---

# Intake Queue

The Intake Queue workflow lives in **Inbox**. It is where unassigned inbound work waits until it is accepted, assigned, or dismissed.

Use it when the question is "Which transaction does this belong to?"

Use it for:

- Incoming emails
- Incoming SMS items
- Online intake form submissions
- Internal intake notes

## Where to find it

Open **Inbox** from the left sidebar. The page includes conversation filters for **All**, **Unread**, and **Unassigned**, plus type chips for **Forms**, **Email**, **SMS**, and **Notes**.

Use **Unassigned** when you want to focus on routing work that is not linked to a transaction yet. Use the type chips when you only want to process one inbound channel.

## Intake email

If your organization has an intake subdomain, Inbox shows a **Forward to** intake email address in the header, such as an organization-specific address at `intake.docjacket.com`. Copy that address and forward transaction-related messages to it so DocJacket can route them.

## Filters and counts

Inbox groups work by item type and shows counts where they help, such as the email count on the Email chip.

Use the search box when you need to find a message by sender, subject, address, or content.

If there is no matching work, DocJacket shows an empty state instead of the thread list.

## AI routing suggestions

DocJacket may suggest a transaction for an unassigned item. Suggested matches show in the selected item's context panel and can include:

- Transaction address
- Confidence percentage
- Optional match reason

Click **Accept & Assign** when the suggestion is correct. The item is linked to that transaction.

## Manual assignment

If there is no good suggestion, use **Assign to Transaction** in the right panel.

Search by address, buyer, or seller, choose the transaction, and assign the item. Keep the selected message open while you search so you can read the content before deciding.

Assignment links the item to the transaction record so the team can handle it in the right deal context.

## Bulk actions

Select multiple intake items to assign or dismiss them together. Bulk assignment is useful when several forwarded emails belong to the same transaction.

## Dismissing items

Dismiss items that do not need to be routed. Dismissed items are removed from the routing workflow; use this for spam, duplicates, or messages that do not belong in a transaction record.

If an item is not about routing and instead needs approval, editing, sending, or final save after extraction, use the **Review Queue** or **AI Extractions** instead.
