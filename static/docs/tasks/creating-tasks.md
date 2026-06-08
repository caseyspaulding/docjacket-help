---
sidebar_label: Creating Tasks
sidebar_position: 2
description: Add tasks to a DocJacket transaction — quick-add, full task drawer, AI generation, and bulk-apply via checklists.
---

<!-- Canonical: https://help.docjacket.com/docs/tasks/creating-tasks -->
<!-- Source: docs/tasks/creating-tasks.mdx -->

# Creating Tasks

There are several ways to add tasks to a transaction. Use quick add for one-off work, apply a checklist when you want a full saved workflow, or let DocJacket suggest tasks from the transaction.

## Quick add

The fastest way to create a single task is from a transaction's **Tasks** tab.

1. Type a task name in the quick-add bar
2. Press **Enter** or click **Add**
3. The task is created with Medium priority by default

Click the task name or edit icon to open the detail drawer and add the due date, assignee, dependency, instructions, portal visibility, email automation, reminders, task options, and comments.

## Detail drawer

Click any task to open the detail drawer on the right side. The main fields are:

- **Name and description** — What needs to be done
- **Due date** — When it's due
- **Assignee** — Who's responsible
- **Depends On** — Another task that should be finished first
- **Instructions** — Detailed notes or steps

The drawer also includes sections for subtasks, task email templates, scheduled emails, reminders, portal visibility, task options, comments, and read-only completion info.

The **Key Date** task option highlights that task as an important date-style item in task and calendar views. It is not the same as assigning a governed Key Date Type to the transaction's closing timeline.

## From a checklist

Use a checklist when you want a repeatable set of tasks and date rules.

From a transaction's **Tasks** tab:

1. Click **Add checklist**
2. Select one or more checklists
3. Apply the selected checklist

DocJacket adds the checklist's tasks and keeps them grouped under the checklist name. If the checklist includes due-date rules, those dates are calculated from the transaction's existing key dates.

The Tasks tab picker can apply multiple checklists. Use it when you mainly want saved task workflows. To create or replace the transaction's key-date timeline and linked task workflow from one checklist template, use **Generate Timeline** on the transaction Overview.

See [Checklists](./task-templates.mdx) for more.

## AI-generated

Click **Generate** on the transaction's **Tasks** tab to let DocJacket suggest tasks for that transaction. Review the suggestions, select the tasks you want, and click **Add Selected**.

See [AI Task Generation](/docs/ai-features/ai-task-generation) for details.

## Working in the task table

The transaction **Tasks** tab shows tasks in checklist sections. Each section shows completed and total task counts, and each row includes the task name, due date, completed date, notes, sent indicators, and portal visibility.

You can:

- Search tasks by name
- Filter by status or assignee
- Sort by task, due date, completed date, or notes
- Resize the table columns
- Select multiple tasks for bulk complete or bulk delete
- Drag rows within a checklist section to adjust visual order
- Save a checklist section as a new checklist template

Changing row order does not change due dates.

## Task email and reminder timing

Task email templates can be linked from the task drawer. Linked emails can be reviewed and sent from the task, or scheduled with an auto-send date. When an auto-send date is not set, DocJacket uses the task due date as the scheduling anchor.

Scheduled emails are client-facing emails tied to a date. Reminders are internal notification prompts for the task. Calendar visibility depends on task due dates, organization calendar settings, and the transaction's calendar-sync toggle.
