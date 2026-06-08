---
sidebar_label: Email and Automation
sidebar_position: 11
description: Configure email template categories, working hours, notification preferences, and rule-based email or SMS automation.
---

<!-- Canonical: https://help.docjacket.com/docs/settings/email-and-automation -->
<!-- Source: docs/settings/email-and-automation.md -->

# Email and Automation Settings

The **Emails & Alerts** group controls template organization, automated send timing, personal notifications, and rule-based message automation.

## Email Settings

Use **Settings > Email** to organize email templates into categories. Categories can have a name, description, color, and active or inactive status.

Each category card shows the category color, name, description, active/inactive badge, and how many templates use that category. If your organization does not have categories yet, DocJacket creates the default category set when the page loads.

From this page, you can:

- Add email template categories
- Edit category name, description, and color
- Make a category active or inactive
- Delete categories that are not in use

Categories with existing templates cannot be deleted. Recategorize those templates first, then delete the unused category.

This page does not connect your mailbox. To send from Gmail or Outlook, connect or reconnect your mailbox from **Settings > Integrations**.

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

Automation rules can send email, SMS, or both when a transaction enters a status or when a configured checklist task is completed. Rules use active email templates, recipient logic, and delivery-channel settings.

Current rule triggers include:

- **When a transaction enters a status** — Fires on future status changes only. Existing transactions already in that status are not triggered retroactively.
- **When a checklist task is completed** — Fires when a transaction task created from the selected checklist task template is marked complete.

Rules can send to transaction contact roles, direct email addresses, or both. Direct email entries are checked before the rule is saved, and duplicate direct addresses are collapsed case-insensitively.

Delivery options are:

- **Email**
- **SMS**
- **Email + SMS**

SMS automation requires SMS access on your plan and a provisioned SMS number in **Settings > SMS**. Recipient phone number and SMS-consent checks happen when the rule fires for a specific transaction.

You can enable or disable a rule without deleting it. Deleting a rule stops future triggers; it does not undo messages that were already drafted, scheduled, or sent.

## Review Behavior

If organization-wide review-first is enabled, drafts from these rules land in the topbar **Review queue** before they send. Open the document-tasks icon and use the **Ready for Review** tab to send, edit, or skip them.

If review-first is off globally, individual automation rules can still opt into **Review before sending**. When neither review-first setting applies, rule-created messages send automatically on schedule.

Scheduled reminders and manually configured scheduled emails stay schedule-driven. They appear in the Review queue's **Scheduled** tab when they are upcoming, held, or need attention instead of the Ready for Review tab.
