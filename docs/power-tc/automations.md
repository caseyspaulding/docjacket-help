---
sidebar_label: "Task automations: draft-and-review"
sidebar_position: 5
description: Wire your email templates to checklist tasks so completing a task drafts the right email for you to review and send — automation that saves time without ever sending behind your back.
---

# Task automations: draft-and-review

Here's where the checklist and the email library connect — and where most people either under-use automation or set it up to fire blindly. The expert approach is **draft-and-review**: the system does the tedious 90%, you keep the final 10%.

## How it works

Wire an email template to a checklist task with an **"on completion"** trigger. Then, when you mark that task done — say *"Schedule Inspection"* — DocJacket automatically:

1. Picks the right email template
2. Resolves the recipients by role for this deal
3. Fills in the smart fields from the deal record
4. Attaches the relevant documents
5. **Drops the finished draft into your review queue**

You glance at it, tweak if needed, and send.

```
Complete a task → DocJacket drafts the role-targeted email
               → it lands in your review queue
               → you approve & send
```

## Keep it draft-and-review — don't auto-send

DocJacket lets you require approval before anything goes out. **Leave that on.**

:::tip The principle that makes this work
Automation should *compute and propose*, not send behind your back. The draft saves you the tedious part — choosing the template, the recipients, the smart-field data, the attachments. The review keeps you in control of the part that matters: a final human look before a client or agent hears from you. That's how you get high email volume **and** near-zero mistakes.
:::

Our most active coordinator has **hundreds** of these automations across their templates — and every single one is set to require approval. None auto-send.

## The one mistake to avoid: don't automate internal tasks

Only wire an email rule to a task that genuinely **sends to an external party** (an agent, client, lender, or title officer).

Do **not** put email automations on internal or status-only tasks — things like *"Splits sent to closer,"* *"Escrow confirmed,"* or a step you use just to mark progress. Those don't have anyone to email, so they'll generate empty drafts that pile up in your review queue and waste your time clearing them.

:::warning Rule of thumb
If completing the task wouldn't normally make you send someone an email, don't attach an email automation to it.
:::

## Wire an automation

1. Open a checklist template and select a task.
2. Add a **notification / email rule**.
3. Set the trigger to **On completion**.
4. Choose the email template, confirm the role-based recipients, and attach any documents.
5. Leave **Require approval** **on**.
6. Save.

![Task on-completion rule with an email template, role-based recipients, and Require approval turned on](/img/power-tc/automations-rule.png)

## Next

→ [Your first week as a power TC](./quickstart.md)
