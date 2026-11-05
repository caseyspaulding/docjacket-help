---
sidebar_label: "Coming from Open To Close: tasks that fire on a field"
sidebar_position: 13
description: Rebuild an Open To Close task template that fires when a field is set — one Playbook, conditional tasks, and Dropdown custom fields.
---

<!-- Canonical: https://help.docjacket.com/docs/templates/coming-from-open-to-close -->
<!-- Source: docs/templates/coming-from-open-to-close.md -->

# Coming from Open To Close: task templates that fire on a field

In Open To Close you may have several task templates, each triggered when a field on the deal is set. In DocJacket you build **one Playbook** that holds all of those tasks, and mark each one **conditional** on the field. The deal gets the tasks that apply, and the rest wait until their field is set.

## What you need

- One Playbook for the deal type, with every task in it.
- A **Dropdown** custom field for each question the tasks depend on. There is no checkbox field type, so a Yes/No question is a Dropdown with the options **Yes** and **No**.

## Set it up

1. **Create the fields.** Go to **Settings > Custom Fields**, stay on the **Smart Fields** tab, and click **Add Custom Field**. In the **Add Smart Field** drawer, enter a **Field Name**, set **Field Type** to **Dropdown**, click **Add Option** to add **Yes** and **No** (for example for *Septic system?*), and click **Create**. See [Transaction Configuration](../settings/transaction-configuration.md#custom-fields).
2. **Open the Playbook.** Go to **Templates > Playbooks** and open the Playbook (or click **New Playbook**).
3. **Make the task conditional.** Open the task (or click **Add Task** and enter a **Name**), tick **Conditional Task**, and click **Build a rule with AND / OR instead**.
4. **Build the rule.** Under **Add this task when**, choose **Custom field**, pick your field under **Pick a field**, leave the operator on **is**, and choose **Yes**. Add more lines with **And**, or **And any of…** when any one of several answers should trigger the task.
5. Click **Add task** (or save the task), then save the Playbook.

For rules that don't need a custom field — a cash or financed deal, a property feature, a state — see [Conditional tasks](./timeline-templates.md#conditional-tasks).

## On a deal

Set the field in the deal's **Overview**, in the **Custom Fields** card. It saves as soon as you change it; there is no Save button.

- If the field is already set when you apply the Playbook, the task is created.
- If you set it later, the task is waiting in the **Tasks** tab under **Optional tasks (N)**, marked **N now applicable**. Open it, review the pre-ticked tasks under **Now applicable**, and click **Add N tasks**. If you change the field back so the condition is no longer met, the button disappears.

## Submit vs. Approve

If your Open To Close setup separated *submitting* a field value from *approving* the tasks it triggers, that maps to the **Now applicable** list. Setting the field on the deal is the submit; your click on **Add N tasks** is the approve. DocJacket never adds a held-back task on its own.

See also [Held-back tasks and key dates](./timeline-templates.md#held-back-tasks-and-key-dates).
