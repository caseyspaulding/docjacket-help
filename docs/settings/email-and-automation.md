---
sidebar_label: Email and Automation
sidebar_position: 11
description: Configure email template categories, working hours, notification preferences, and rule-based email or SMS automation.
---

# Email and Automation Settings

The **Emails & Alerts** group controls template organization, automated send timing, personal notifications, and rule-based message automation.

## Email settings

Use **Settings > Email** to organize email templates into categories. Categories can have a name, description, color, and active or inactive status.

This page does not connect your mailbox. To send from Gmail or Outlook, connect or reconnect your mailbox from **Settings > Integrations**.

## Working hours

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

## Notifications

Use **Settings > Notifications** to choose which alerts you receive.

Notification preferences are personal. Changing your notifications does not change what other team members receive.

## Automation rules

Use **Settings > Automation Rules** to create and manage rule-based notifications and messages.

Automation rules can send email, SMS, or both when a transaction enters a status or when a configured checklist task is completed. Rules use templates, recipient logic, and delivery-channel settings. They can either send automatically or require review before sending.

If organization-wide review-first is enabled, drafts from these rules land in the topbar **Review queue** before they send. Open the document-tasks icon and use the **Ready for Review** tab to send, edit, or skip them.

If review-first is off globally, individual automation rules can still opt into **Review before sending**. Scheduled reminders and manually configured scheduled emails stay schedule-driven; they appear in the Review queue's **Scheduled** tab instead of the Ready for Review tab.
