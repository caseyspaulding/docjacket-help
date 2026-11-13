---
sidebar_label: Review Queue
sidebar_position: 4
description: Use the topbar Review queue to review pending uploads, ready drafts, scheduled sends, and recent activity.
---

# Review Queue

The **Review queue** is the topbar drawer for work that needs a quick decision. It replaced the old sidebar **Pending Review** page.

Open it from the document-tasks icon in the topbar, near the message, notification, theme, help, and account icons.

The badge on the icon counts review actions plus pending uploads. A number on the icon means at least one item needs attention.

## What appears here

The drawer can include:

- **Pending Uploads** - extraction groups that completed scanning, were not applied to a transaction, and have not been dismissed
- **Ready for Review** - automation-rule drafts, email drafts, SMS drafts, and other actions waiting for approval, send, skip, or dismissal
- **Scheduled** - upcoming reminders, scheduled emails, and one-off scheduled messages
- **Done** - recent sent, approved, skipped, dismissed, rejected, or completed activity from the last several days

## Pending uploads

If the drawer shows **Pending Uploads**, those uploads were scanned but never saved into a transaction, listing, or existing-transaction update. This section sits above the tabs because it is action-required work, but it comes from extraction history rather than the automation-action queue.

Pending upload rows can show the extracted address or file name, document count, age, and file list. Use **Review** to return to the extraction review flow.

Use **Discard** only when the upload should stop appearing as unfinished work. Discard takes effect immediately: there is no confirmation step, and a "Pending upload discarded" message appears. That message has an **Undo** button. Click **Undo** and the upload goes back into the list where it was, with a "Pending upload restored" message. If it can't be put back, you see "Couldn't restore it." The Undo button is only on the message that appears, so click it right away if you discarded the wrong one. **Undo** reverses only that one discard. Discard soft-dismisses the pending-upload card; it does not erase the underlying extraction history.

## Ready for Review

Use the **Ready for Review** tab for drafts and actions that need a human decision before they proceed.

Depending on the draft, you may be able to:

- Open the detail view
- Edit supported email or SMS content
- Approve or send the draft
- Dismiss or skip the draft
- Use **Skip past-deadline** for drafts whose deadline has already passed
- Use **Approve All** when every ready item should proceed

This tab is the review-first safety step for automation output. Click a card to open the detail view. Nothing sends from here until you approve, send, skip, or dismiss the item.

### Emails from Automation Rules

A rule that sends when a deal enters a status, or when a Playbook task is completed, can land here even if your organization lets other automated emails send without review. DocJacket holds it when a smart field has no value on the deal, a merge field in the template can't be filled in, or the template was deleted, is inactive, or has no wording. The card says what the problem is, and you can't approve it until the blanks are filled in. Open the draft, fill them in, save, then send. See [Automation Rules](../settings/email-and-automation.md#what-does-a-status-or-task-rule-send).

### Attachments from another deal

Every document attached to a draft must be on that draft's deal. If one is not, approving the draft is refused with "One of the attached documents is not on this deal. Remove it from the draft and approve again." Remove the document from the draft and approve again.

### New deals from email

A contract forwarded to your new-deal address that DocJacket didn't create on its own, for example because the sender isn't on your team, arrives here as a card that says why. Pick **Buyer**, **Seller**, or **Not sure yet** to create the deal, or dismiss it. The same choice also comes to you in a pop-up. See [Start a Deal by Email](../transactions/start-a-deal-by-email.mdx).

### Cards that need a recipient

Some cards arrive flagged as needing a recipient. This happens when an automated email's recipient role has no contact assigned on that deal — a **Seller** email on a deal with no seller yet, for example.

DocJacket won't guess at a recipient or send to the wrong person, so it parks the email here and notifies you instead of dropping it. Open the card, add the recipient, and it becomes sendable.

A scheduled email's review card must have a **To** recipient before you can approve it. Approving one without a To is refused with a message that starts *"Add a To recipient"*. Add a To recipient, then approve.

## What won't appear here

Two things people expect in this queue that intentionally don't show up:

- **In-app heads-ups.** An email set to **Just notify me in-app** posts a notification on its date and prepares no email, so nothing arrives here. Those land in the **notification bell**, a separate topbar icon. See [Delivery mode](../tasks/email-automation.mdx#delivery-mode).
- **Emails that already sent.** Once an email has gone out it moves to **Done** rather than staying in Ready for Review.

If you completed a task and expected an email that never appeared, see [Why didn't my task email appear?](../tasks/email-didnt-appear.mdx).

## Scheduled

Use the **Scheduled** tab to review upcoming reminders, scheduled emails, and one-off scheduled messages.

Scheduled cards can show the related transaction, anchor label, schedule state, recipients, and attention labels for held or failed sends. Click the card to open the transaction. Scheduled emails can be edited, sent now, or cancelled. Scheduled one-off messages can be cancelled.

A scheduled email held for **No recipient set** or **No recipients** has no To recipient. See [When a scheduled email has no recipient](../messages/inbox.mdx#when-a-scheduled-email-has-no-recipient).

## Done

Use the **Done** tab to check recent activity from the last several days.

Done items can show what was sent, approved, skipped, dismissed, rejected, or completed, along with the related transaction when available.

## How it differs from AI Extractions

The **Review queue** is the fast topbar drawer for decisions that need attention. **AI Extractions** is the full extraction history page. If a pending upload is confusing, open **AI Extractions** to see the underlying job status, confidence, start time, and save state.

## If you have an old Pending Review link

Older **Pending Review** links now redirect to the Inbox with a retirement notice. Use the topbar Review queue for current in-app review work.
