---
sidebar_label: Task Options
sidebar_position: 6
description: Configure advanced task options in DocJacket — portal visibility, reminders, completion emails, conditional labels, and time tracking.
---

# Task Options

Click a task to open its detail drawer. The drawer starts with the core task fields, then includes collapsible sections for the settings that affect visibility, automation, reminders, comments, and reporting.

## Core fields

Use the top of the drawer for the basics:

- **Due Date** — when the task is due
- **Assignee** — the team member responsible for the work
- **Depends On** — another task that should be completed first
- **Instructions** — internal steps or guidance for the assignee

If a task is blocked by another task, DocJacket shows a blocked indicator until the dependency is cleared.

## Portal Visibility

Use **Portal Visibility** when a task should be visible to transaction parties in the portal.

You can:

- Turn **Show on Portal** on or off
- Leave contact selection empty so all portal contacts can see it
- Select specific portal contacts when only certain people should see it

**Example:** Show "Submit buyer's pre-approval letter" to the buyer-side portal contact, but keep internal compliance tasks hidden.

## Reminders

Use **Reminders** to get notified before the task is due. Reminder choices include 1, 2, 3, 5, 7, or 14 days before the due date.

**Example:** Set a 3-day reminder for "Order home warranty" so your team has time to coordinate before closing.

## Task emails

Use **Task emails** to link an email template to the task. Linked task emails can be reviewed and sent from the task, and completion can prompt you to send or skip any pending linked emails. When a linked email is configured to require review, it appears in the topbar Review queue's **Ready for Review** tab before sending.

Linked emails can use:

- The task's due date
- The task's auto-send date
- A transaction key date such as Closing Date or Inspection Deadline
- A before/on/after offset from that anchor

See [Email Automation](./email-automation.mdx) for the full workflow.

## Scheduled emails

Use **Scheduled emails** when the message should send from the task due date, instead of waiting for the task to be completed.

From the drawer, you can schedule a new email, edit pending or held scheduled emails, send one now, or cancel it. Upcoming and held scheduled emails also appear in the Review queue's **Scheduled** tab.

## Options

The drawer's **Options** section includes settings for how the task behaves:

- **Key Date** — highlights the task as an important date-style item in task and calendar views. This is not a replacement for the transaction's canonical key dates.
- **Notify on Complete** — sends linked emails when the task is marked complete
- **Notify Contact** — chooses the contact for completion notification when enabled
- **Conditional Task** — labels the task as only relevant under certain conditions
- **Est. Hours** and **Actual Hours** — track estimated and actual work time

## Conditional Task

Use a conditional label when the task only applies in some transactions. The label appears on the task row so your team can see why it exists.

**Example:** "Schedule septic inspection" — only relevant for properties with septic systems, not city sewer.

## Comments

Use **Comments** for team notes about the task. Comments are visible to team members and can be edited or deleted by their author.

**Example:** Add a comment when the lender says the appraisal is delayed, so the next person opening the task sees the latest update.
