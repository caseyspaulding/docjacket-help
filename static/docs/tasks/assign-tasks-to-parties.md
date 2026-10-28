---
sidebar_label: Assign a Task to a Party
sidebar_position: 4.5
description: Assign a deal task to a buyer, seller or agent so they see it on their own portal link, mark it done, and you confirm it.
---

<!-- Canonical: https://help.docjacket.com/docs/tasks/assign-tasks-to-parties -->
<!-- Source: docs/tasks/assign-tasks-to-parties.md -->

# Assign a task to a buyer, seller or agent

Assign a task to someone on the deal and it shows up on **their** portal link, marked **For you**. They can tell you it's done; you confirm it. Nobody else on the deal gains access to the task.

Assigning is separate from the portal eye. The eye shows a task to everyone with portal access. Assigning shows it to one party, even when the eye is off.

## Assign a task on one deal

1. Open the deal and go to the **Tasks** tab
1. Open the task
1. In the **Assigned to** field, choose the person. The contact must be on the deal
1. Save

The task list shows a chip with the assignee's name. The note under the field reads: "They'll see this on their portal and can mark it done. Other parties won't see it."

If the person has no portal link yet, the task shows a hint with a **Send portal links** shortcut.

## Assign by role in a Playbook

Assign by role when the same party should own the task on every deal.

1. Go to **Templates → Playbooks** and open the Playbook
1. Open the task to edit it
1. In **Assign to role**, choose the role, such as Buyer or Seller
1. Save

On every deal the Playbook is applied to, the task goes to whoever holds that role. That includes a buyer added later, and both buyers when there are two. If the role has no contact on a deal, nobody new sees the task until you add one.

## What the party sees

- The task appears on their own portal link with a **For you** badge, even if the task's portal eye is off.
- They can select **Mark done**, and **Undo** if they change their mind.
- A general portal link that isn't tied to one person shows no assigned tasks.

Agents on your side work the same way in their agent portal hub. They don't need any organization setting turned on. See [Portal for Agents](../client-portal/portal-for-agents.mdx).

## Mark done, then you confirm

When someone selects **Mark done**, the task is **not** completed. It stays open, you get a Portal Activity notification, and the task shows "Marked done by (name)" with two choices:

- **Confirm** completes the task the normal way, so completion emails and the Review queue still apply
- **Not yet** clears their mark and leaves the task open

## Email the assignee when the task completes

In a task's on-completion email rules, choose **Task assignee** as a recipient. When the email is prepared, it goes to whoever the task is assigned to at that moment. If the task isn't assigned, it reaches nobody.

These emails still go through the [Review queue](./email-automation.mdx), so nothing is sent until you approve it.

:::note
The **Agents see the tasks you assigned to them** setting under **Settings → Organization** is gone. Assigning a task is now how you choose which tasks an agent sees.
:::
