---
sidebar_label: Task Options
sidebar_position: 7
description: Configure advanced task options in DocJacket — portal visibility, reminders, completion emails, conditional labels, and time tracking.
---

# Task Options

Click a task to open its detail drawer. This is where you change a task's due date (reschedule or move a task), reassign it, and edit its details. The drawer starts with the core task fields, then includes collapsible sections for the settings that affect visibility, automation, reminders, comments, and reporting.

![Transaction Tasks tab where clicking a task opens Task Details](/img/tasks/transaction-tasks-tab.png)

## Core fields

Use the top of the drawer for the basics:

- **Status actions** — complete, skip, or reopen the task
- **Due Date** — when the task is due
- **Assignee** — the team member responsible for the work
- **Depends On** — another task that should be completed first
- **Instructions** — internal steps or guidance for the assignee

If a task is blocked by another task, DocJacket shows a blocked indicator until the dependency is cleared.

## Due dates: linked to a key date, your own, or cleared

Tasks that came from a Playbook are usually **linked to a key date** - "Option Fee Receipt" lands one day after the Effective Date automatically, with no typing.

- **Type your own date** and it replaces the calculated one. If the anchor key date later moves, the date rule recalculates from the new anchor.
- **Unlink a task's due date from a key date** by **clearing** the date: a cleared date stays cleared, and DocJacket will not re-date the task when key dates shift. Set a date again whenever you're ready.
- A task with no due date is fine - it simply isn't planned yet.

## Portal Visibility

Use **Portal Visibility** when a task should be visible to transaction parties in the portal.

You can:

- Turn **Show on Portal** on or off
- Leave contact selection empty so all portal contacts can see it
- Select specific portal contacts when only certain people should see it

**Example:** Show "Submit buyer's pre-approval letter" to the buyer-side portal contact, but keep internal compliance tasks hidden.

A portal-visible task also appears in the agent's **My Tasks** list on their portal hub. If you have turned on **Let agents manage tasks from their portal**, agents can check these off themselves — they still cannot edit or delete them. See [Portal for Agents](../client-portal/portal-for-agents.mdx).

Leaving contact selection empty means every portal contact on the deal can see the task, and any of them can complete it when that setting is on. Select specific contacts when it should be one person's job.

To give a task to one person without turning the eye on for everyone, assign it instead. See [Assign a task to a buyer, seller or agent](./assign-tasks-to-parties.md).

## Report Visibility

Tasks also carry a second eye for **Transaction Summaries**. Every task shows on generated and scheduled Transaction Summaries by default; turn **Show on Transaction Summaries** off to keep a task out of the report's task section without touching its portal visibility. The two eyes are independent — a task can be portal-visible but report-hidden, or the reverse.

## Reminders

Use **My Reminders** for your own notifications. Each signed-in teammate has separate settings.

1. Save a due date on the task.
2. Choose **On the due date**, or **1, 2, 3, 5, 7, or 14 days before**.
3. Click **Add reminder**. Choose **Email**, **SMS**, or **Email + SMS** for that timing.
4. For each additional timing, choose the timing and click **Add reminder** again. Choose its delivery channel. Selecting a timing alone does not add it to your reminder list.
5. Check that every timing appears in the list, then click **Save my reminders** to save them together.

You can use each timing once. Removing one leaves your other reminders and your teammates' settings alone. SMS needs a verified mobile number and an available organization SMS service.

The scheduled-date preview helps you check the timing. Past send times are skipped; completing or skipping the task, or archiving the transaction, stops pending delivery. Removing and re-adding the same timing does not replay an occurrence already sent or cancelled for that due date.

**Example:** For "Order home warranty," choose **7 days before** and click **Add reminder**. Then choose **2 days before** and click **Add reminder** again. With both rows visible, click **Save my reminders**. You now have two personal reminders; your teammates' settings are unchanged.

## Remind someone about a task

My Reminders only notify you. To remind **someone else** — like the agent who owes a signature or a resolution — use **Remind someone** in the task drawer. It opens the same reminder composer used on key dates:

- Pick who gets it — deal contacts by role or by name
- Choose email, text message, or both, with a preview of the text before you save
- Choose how many days before the due date it goes out

Reminders to contacts respect texting consent and opt-outs, and the task still needs a due date first.

**Example:** "Close out the listing in the MLS" is due the day after closing — remind yourself by text, and remind the agent three days ahead by email.

## Task emails

Use **Task emails** to link an email template to the task. Linked task emails can be reviewed and sent from the task, and completion can prompt you to send or skip any pending linked emails. When a linked email is configured to require review, it appears in the topbar Review queue's **Ready for Review** tab before sending.

When you open a task email to review and send it, the **To, CC, and BCC lines come prefilled** from the template's recipient roles, resolved to the actual people on this deal — and you can edit any of them before sending. If a CC line comes up blank, the drawer tells you why, role by role: usually the role isn't assigned on the deal, or the person in it has **no email address on file**. Add the contact to the role (or add their email) and reopen the email to see it fill in.

Linked emails can use:

- The task's auto-send date
- The task's due date
- A transaction key date such as Closing Date or Inspection Deadline
- A before/on/after offset from that anchor

Use this section for deal-specific changes. For repeatable automations that should exist every time a Playbook is applied, configure the task email in the Playbook template first.

### Changed dates and an open email draft

A newly rendered template reads the transaction's saved dates. An email already open for editing is a snapshot: changing a date does not silently replace your draft.

Save the transaction date first, then click **Refresh** in the composer (its tooltip reads "Refresh the transaction data in this email draft"). The subject and message are rerendered from the template with the latest saved values in one click, replacing any edits you made to that text; recipients, attachments, and the selected signature stay as they are. Refreshing does not send the email. Older drafts that store the signature inside the message cannot be refreshed — update their dates by hand or start a new email from the template.

See [Email Automation](./email-automation.mdx) for the full workflow.

## Scheduled emails

Use **Scheduled emails** when the message should send from the task due date, instead of waiting for the task to be completed.

From the drawer, you can schedule a new email, edit pending or held scheduled emails, send one now, or cancel it. Scheduled emails send from the TC's connected Gmail or Outlook account when available. Upcoming and held scheduled emails also appear in the Review queue's **Scheduled** tab.

A scheduled email needs a **To** recipient before you can save it, whether you are adding it or editing it. The email template's To recipients count. If you save without one, DocJacket asks you to add a To recipient and the email is not saved. A scheduled email with no **To** recipient is held rather than sent; see [When a scheduled email has no recipient](../messages/inbox.mdx#when-a-scheduled-email-has-no-recipient).

## Options

The drawer's **Options** section includes settings for how the task behaves:

- **Key Date** — highlights the task as an important date-style item in task and calendar views. This is not a replacement for the transaction's canonical key dates.
- **Notify on Complete** — sends linked emails when the task is marked complete
- **Notify Contact** — chooses the contact for completion notification when enabled
- **Condition note** — a note on the task row saying when the task applies. It does not hide or remove the task. The checkbox that decides whether a Playbook creates a task at all is **Conditional Task**, in the Playbook editor (see below).
- **Est. Hours** and **Actual Hours** — track estimated and actual work time

## Condition note on a deal's task

On a task inside a deal, the **Condition note** toggle (under **Options**) adds a note to the task row saying when it applies. The hint under the toggle reads "A note on the task row saying when it applies. It does not hide or remove the task." Hover the note on the task list and it reads "Note:" followed by the note's text and "(a note from the Playbook; it does not hide or remove the task)".

Turning it on or off on a deal doesn't add or remove anything. Whether a task is created at all is decided in the Playbook editor, below.

## Conditional Task (in the Playbook editor)

Tick **Conditional Task** on a task in the Playbook builder when it only applies to some deals. The deal's own details then decide, when the Playbook is applied, whether the task is created — you don't need a different Playbook for each variation like warranty, financing, or cash deals.

Open the task in the Playbook editor, tick **Conditional Task**, and choose the condition one of two ways:

- **Transaction field** — pick one field from a fixed list: **Cash deal** and **Sellers only** (created only when true), or a contingency such as HOA, septic, or sale of home (created unless the deal marks it N/A).
- **Build a rule with AND / OR instead** — under **Add this task when**, combine several conditions, including **Deal flag** (such as **Buyer is financing**) and your own **Custom field** values (**is**, **is not**, **is blank**, **is not blank**). Use **And** for conditions that must all be true and **And any of…** when any one will do.

The label appears on the task row so your team can see why the task exists.

**Example:** "Schedule septic inspection" with the Septic contingency condition — created on deals with a septic contingency, skipped when the deal marks it N/A.

If a task's condition isn't met when the Playbook is applied, it isn't lost. When the deal changes and the condition becomes true, the deal's **Optional tasks (N)** button on the **Tasks** tab shows **N now applicable**, and you can add the task from there. See [Held-back tasks and key dates](../templates/timeline-templates.md#held-back-tasks-and-key-dates) and the full list of conditions in [Conditional tasks](../templates/timeline-templates.md#conditional-tasks).

## Comments

Use **Comments** for team notes about the task. Comments are visible to team members and can be edited or deleted by their author.

**Example:** Add a comment when the lender says the appraisal is delayed, so the next person opening the task sees the latest update.
