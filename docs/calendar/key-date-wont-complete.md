---
sidebar_label: Key Date Won't Mark Complete
sidebar_position: 7
description: Why a key date does not show complete when you finish one of its tasks, how open linked tasks affect it, and how to complete it anyway.
---

# Why a Key Date Won't Mark Complete

You checked off a task, but the key date it belongs to — say **MLS Go-Live**, **Inspection**, or **Appraisal** — still does not show as complete. Or you completed the key date and it went back to not complete. Both come from how key dates and their **linked tasks** work together.

## The rule: a key date completes itself only when all its linked tasks are done

A key date can have tasks linked to it (from a Playbook, or ones you linked yourself). DocJacket **automatically marks the key date complete when every linked task is either completed or skipped**.

If even one linked task is still open, the key date stays open. So when **MLS Go-Live** has three linked tasks and you complete two, the key date is not complete yet — the third open task is holding it.

To see which tasks are linked, open the transaction **Overview**, find the key date in the closing timeline, and expand it (click the row) — its linked tasks are listed underneath with a checkbox each. Or click the key date's name to open its drawer and look at **Linked Tasks**.

Open linked tasks **never stop you completing the key date yourself.** You have three ways to resolve it.

## Option 1: Complete the remaining linked tasks

Check off (or **Skip**) the tasks that are still open. When the last one is done, the key date marks itself complete automatically.

## Option 2: Complete the key date and its tasks in one step

1. On the transaction **Overview**, click the key date's name in the closing timeline to open its drawer.
2. Click the green **Complete** button.
3. If the key date still has open linked tasks, a **Complete key date** dialog lists them, with **Also complete these linked tasks** (or **Also complete this linked task**) checked.
4. Click **Complete**.

The key date and every listed task are completed together.

Want the key date done but the tasks left open? Uncheck that box before clicking **Complete** — only the key date is completed.

The same dialog appears if you change the key date's **status** in the drawer to one that counts as complete (such as **Completed**). **Waived** and **N/A** close the key date without asking about its tasks.

## Option 3: Unlink a task that doesn't belong

If a task is linked to the key date by mistake, open the key date's drawer, find the task under **Linked Tasks**, and click its **Unlink task** icon. The task stays on the deal; it is just no longer tied to that key date. Then complete the key date with the **Complete** button.

## "I completed the key date and it went back to not complete"

Reopening a linked task reopens the key date. If you mark a task **incomplete** again (uncheck it) while it is linked to a completed key date, DocJacket sets that key date back to not complete — because one of its tasks is open again.

To finish it: complete the task again, or unlink it from the key date (Option 3) and then complete the key date.

## Reopening a key date

To undo a completed key date, open its drawer and click **Reopen**. (For a key date marked **Waived** or **N/A**, the button says **Restore**.)

:::note Read-only seats
The **Complete**, **Reopen**, and **Restore** buttons are hidden for team members with a read-only seat. Ask an Owner or Admin, or someone with edit access, to complete the key date.
:::

## Related

- [Key Dates & Financials](../transactions/key-dates-and-financials.mdx)
- [Playbooks & Key Dates](./timeline-templates.mdx)
- [Creating Tasks](../tasks/creating-tasks.mdx)
