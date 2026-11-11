---
sidebar_label: Email and Automation
sidebar_position: 12
description: Configure email template categories, working hours, notification preferences, and rule-based email automation.
---

<!-- Canonical: https://help.docjacket.com/docs/settings/email-and-automation -->
<!-- Source: docs/settings/email-and-automation.md -->

# Email and Automation Settings

The **Emails & Alerts** group controls template organization, automated send timing, personal notifications, and rule-based message automation.

## Email Settings

Use **Settings > Email** to organize email templates into categories. Categories can have a name, description, color, and active or inactive status.

Each category card shows the category color, name, description, active/inactive badge, and how many templates use that category. If your organization does not have categories yet, DocJacket creates the default category set when the page loads.

The default categories are:

| Category | Fits |
|---|---|
| Welcome | Intro and kick-off emails |
| Reminder | Deadline nudges |
| Request | Asking a party for something |
| Confirmation | Confirming a date or receipt |
| Update | Status updates and post-closing thank-yous |
| Notification | Automated notices |

Categories only organize and filter your templates. They do not change who receives an email or when it sends. If a template does not fit a default, add your own category.

From this page, you can:

- Add email template categories
- Edit category name, description, and color
- Make a category active or inactive
- Delete categories that are not in use

Categories with existing templates cannot be deleted. Recategorize those templates first, then delete the unused category.

This page does not connect your mailbox. To send from Gmail or Outlook, connect or reconnect your mailbox from **Settings > Integrations**.

## Require a Connected Mailbox

Use **Settings > Organization** to turn on **Only send transaction email from a connected mailbox**. When on, deal email (compose, replies, task emails, reminders, reports, and portal links) only ever sends from a connected Gmail or Outlook account — never from a DocJacket system address.

- The email sends from the sender's connected mailbox, or the account owner's if the sender hasn't connected one.
- If no mailbox is connected, a manual send is blocked with a prompt to connect one, and an automated send is held until a mailbox is connected. The account owner is notified so it can be reconnected.

Leave this off (the default) to let DocJacket's email service send as a fallback when a connected mailbox isn't available. See [How Email Sending Works](../messages/how-email-sending-works.mdx).

## Working Hours

Use **Settings > Working Hours** to hold automated emails until your organization's preferred send window.

Working hours apply to automated emails such as:

- Deadline reminders
- E-signature chasers
- Billing nudges
- Other scheduled system messages

Manual sends are not affected. If a user clicks **Send** on a task email, DocJacket sends it immediately.

When working hours are enabled, you can choose:

- Start and end time
- Working days
- Whether organization holidays should be skipped

Times use the organization's timezone.

The send window must have different start and end times, and at least one working day must be selected. When **Skip on organization holidays** is enabled, DocJacket defers eligible automated emails to the next working day based on your organization's holidays calendar.

## Notifications

Use **Settings > Notifications** to choose which alerts you receive.

Notification preferences are personal. Changing your notifications does not change what other team members receive. You can control email notifications, the daily morning briefing, and in-app bell notifications.

## Automation Rules

Use **Settings > Automation Rules** to create and manage rule-based notifications and messages.

Automation rules send an email when a transaction enters a status or when a configured Playbook task is completed. They do not send text messages. A third kind prepares an email for your review when a document is filed under a category. Rules use active email templates and recipient logic.

Current rule triggers include:

- **When a transaction enters a status** — Fires on future status changes only. Existing transactions already in that status are not triggered retroactively.
- **When a Playbook task is completed** — Fires when a transaction task created from the selected Playbook task template is marked complete.
- **When a document is filed** — Fires each time a document is filed to a deal under the **Document category** you pick. It prepares the email and holds it in your Review queue for you to send; it never sends on its own, even if your organization sends other automated emails without review. It applies to documents filed after the rule is created, uses only your own email templates, and does not use SMS. A document that arrives by email or import triggers nothing until someone files it under a category.

Rules can send to transaction contact roles, direct email addresses, or both. Direct email entries are checked before the rule is saved, and duplicate direct addresses are collapsed case-insensitively.

### Can an Automation Rule send a text message?

No. Automation Rules send email only, and the rule editor has no text-message option.

If you open a rule that was saved earlier with a text option, a note in the editor says what the rule actually did: a rule set to send a text as well as the email sent only the email, and a rule set to send a text only sent nothing. Saving the rule makes it an email rule.

### Which email templates can a rule use?

Only your own templates. DocJacket's starter templates are not offered in a rule's template list. To use one, copy it into your templates first, then pick your copy in the rule.

You can enable or disable a rule without deleting it. Deleting a rule stops future triggers; it does not undo messages that were already drafted, scheduled, or sent.

## Review Behavior

You decide whether automated emails send on their own or wait for your approval — and by default, **nothing reaches a client or agent until you say so.**

**Organization-wide safety switch.** In **Settings > Organization**, turn on **Review auto-emails before sending** to hold *every* automated email — task emails, reminders, status-rule messages — in the topbar **Review queue** before it sends. Open the document-tasks icon and use the **Ready for Review** tab to send, edit, or skip each one. Drafts auto-expire after your retention window if you don't act on them. This is the recommended setting for anyone who never wants an email leaving the account without a final human look.

**Per-rule review.** Even with the organization-wide switch off, an individual automation rule (or a task's on-completion email) can opt into **Review before sending** on its own — and for on-completion task emails that per-email switch is **on by default**.

When neither review setting applies to a message, it sends automatically on schedule. Scheduled reminders and manually configured scheduled emails stay schedule-driven — they appear in the Review queue's **Scheduled** tab when they are upcoming, held, or need attention, instead of the Ready for Review tab.

Scheduled reminders and manually configured scheduled emails stay schedule-driven. They appear in the Review queue's **Scheduled** tab when they are upcoming, held, or need attention instead of the Ready for Review tab.
