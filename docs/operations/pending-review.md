---
sidebar_label: Review Queue
sidebar_position: 4
description: Use the topbar Review queue to review pending uploads, ready drafts, scheduled sends, and recent activity.
---

# Review Queue

The **Review queue** is the topbar drawer for work that needs a quick decision. It replaced the old sidebar **Pending Review** page; use the document-tasks icon in the topbar for current review work.

Open it from the document-tasks icon in the topbar, near the message, notification, theme, help, and account icons.

The badge on the icon counts review actions plus pending uploads, so a number on the icon means at least one item needs attention.

## What appears here

The drawer can include:

- **Pending Uploads** - extraction groups that completed scanning, were not applied to a transaction, and have not been dismissed
- **Ready for Review** - automation-rule drafts, email drafts, SMS drafts, and other actions waiting for approval or dismissal
- **Scheduled** - upcoming reminders, scheduled emails, and one-off scheduled messages
- **Done** - recent sent, approved, skipped, dismissed, rejected, or completed activity from the last several days

## Pending uploads

If the drawer shows **Pending Uploads**, those uploads were scanned but never saved into a transaction, listing, or existing-transaction update. This section sits above the tabs because it is action-required work, but it comes from extraction history rather than the automation-action queue.

Pending upload rows can show the extracted address or file name, document count, age, and file list. Use **Review** to return to the extraction review flow.

Use **Discard** only when the upload should stop appearing as unfinished work. Discard soft-dismisses the pending-upload card; it does not erase the underlying extraction history.

## Ready for Review

Use the **Ready for Review** tab for drafts and actions that need a human decision before they proceed.

Depending on the draft, you may be able to:

- Open the detail view
- Edit supported email or SMS content
- Approve or send the draft
- Dismiss or skip the draft
- Use **Skip past-deadline** for drafts whose deadline has already passed
- Use **Approve All** when every ready item should proceed

This tab is the review-first safety step for automation output. Nothing sends from here until you approve, send, skip, or dismiss the item.

## Scheduled

Use the **Scheduled** tab to review upcoming reminders, scheduled emails, and one-off scheduled messages.

Scheduled email cards can show the related transaction, anchor label, schedule state, recipients, and attention labels for held or failed sends. Scheduled emails can be edited, sent now, or cancelled. Scheduled one-off messages can be cancelled.

## Done

Use the **Done** tab to check recent activity from the last several days.

Done items can show what was sent, approved, skipped, dismissed, rejected, or completed, along with the related transaction when available.

## How it differs from AI Extractions

The **Review queue** is the fast topbar drawer for decisions that need attention. **AI Extractions** is the full extraction history page. If a pending upload is confusing, open **AI Extractions** to see the underlying job status, confidence, start time, and save state.

## If you have an old Pending Review link

Older **Pending Review** links now redirect to the Inbox with a retirement notice. Use the topbar Review queue for current in-app review work.
