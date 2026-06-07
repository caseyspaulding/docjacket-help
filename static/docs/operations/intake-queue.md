---
sidebar_label: Intake Queue
sidebar_position: 3
description: Route inbound emails, SMS, intake forms, and notes to transactions from DocJacket's Intake Queue.
---

<!-- Canonical: https://help.docjacket.com/docs/operations/intake-queue -->
<!-- Source: docs/operations/intake-queue.md -->

# Intake Queue

The Intake Queue is where inbound work waits until it is assigned, accepted, or dismissed.

Use it for:

- Incoming emails
- Incoming SMS items
- Online intake form submissions
- Internal intake notes

## Intake email

If your organization has an intake subdomain, the queue shows an intake email address in the header. Copy that address and forward transaction-related messages to it so DocJacket can route them.

## Tabs and counts

The queue groups work by item type. The header shows counts for emails, SMS, and intake form submissions.

Use the tabs to narrow the table when you only want to process one kind of inbound item.

## AI routing suggestions

DocJacket may suggest a transaction for an item. Suggested matches show:

- Transaction address
- Confidence percentage
- Optional match reason

Click **Accept** when the suggestion is correct. The item is assigned to that transaction.

## Manual assignment

If there is no good suggestion, click **Assign to Transaction**.

Search by address, buyer, or seller, choose the transaction, and assign the item. The detail drawer is useful when you need to read the message content before deciding.

## Bulk actions

Select multiple items to assign or dismiss them together. Bulk assignment is useful when several forwarded emails belong to the same transaction.

## Dismissing items

Dismiss items that do not need to be routed. Form submissions are rejected when dismissed; other item types are archived.

Use dismissal for spam, duplicates, or messages that do not belong in a transaction record.
