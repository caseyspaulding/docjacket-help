---
sidebar_label: "Task automations: draft-and-review"
sidebar_position: 5
description: Preconfigure checklist task emails, then review or adjust them on the transaction task drawer before sending.
---

# Task automations: draft-and-review

Here's where the checklist and the email library connect — and where most people either under-use automation or set it up to fire blindly. The expert approach is **draft-and-review**: preconfigure the repeatable email work on the checklist template, then review or adjust it on the live transaction before anything goes out.

## How it works

Wire an email template to a checklist template task with an **"on completion"** trigger. When that checklist is applied to a transaction, the live task carries the linked email with it. You can also open the task's **Task Details** drawer on the transaction and add, remove, or edit linked emails for that deal only.

Then, when a configured task is ready to send — either from the task drawer's **View** action or from the completion flow — DocJacket:

1. Picks the right email template
2. Resolves the recipients by role for this deal
3. Fills in the smart fields from the deal record
4. Attaches the relevant documents
5. Keeps the final send step in front of you

You glance at it, tweak if needed, and send. If a live task shows **Task Emails (0)**, completion will not prompt or create an email for that task.

```
Checklist template task → On-completion email rule
                        → Applied live task shows Task Emails
                        → Review merged email
                        → Send when ready
```

<div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', margin: '1.5rem 0' }}>
  <iframe
    src="https://app.supademo.com/embed/cmqpq1x4z03nomd1xjz83rt5j"
    title="Power TC draft-and-review task automation walkthrough"
    allow="fullscreen"
    allowFullScreen
    loading="lazy"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, borderRadius: 8 }}
  />
</div>

## Keep it draft-and-review — don't auto-send

DocJacket lets you require review before anything goes out. **Leave that on.**

:::tip The principle that makes this work
Automation should *compute and propose*, not send behind your back. The draft saves you the tedious part — choosing the template, the recipients, the smart-field data, the attachments. The review keeps you in control of the part that matters: a final human look before a client or agent hears from you. That's how you get high email volume **and** near-zero mistakes.
:::

Our most active coordinator has **hundreds** of these automations across their templates — and every single one is set to require review. None auto-send.

## The one mistake to avoid: don't automate internal tasks

Only wire an email rule to a task that genuinely **sends to an external party** (an agent, client, lender, or title officer).

Do **not** put email automations on internal or status-only tasks — things like *"Splits sent to closer,"* *"Escrow confirmed,"* or a step you use just to mark progress. Those don't have anyone to email, so they create clutter and make the review workflow noisier.

:::warning Rule of thumb
If completing the task wouldn't normally make you send someone an email, don't attach an email automation to it.
:::

## Wire an automation

1. Open a checklist template and select a task.
2. Open the task's **On completion** automation section.
3. Link the email template that should be prepared when the task is completed.
4. Confirm the role-based recipients, smart-field coverage, and any document attachments.
5. Leave **Require review before sending** on.
6. Save the checklist template.

After the checklist is applied to a transaction, open that task from the transaction's **Tasks** tab. The **Task Details** drawer shows the inherited emails under **Task Emails**. From there, you can click **View** to review the merged message, or link another email template for this one transaction.

![Task on-completion rule with an email template, role-based recipients, and Require review before sending turned on](/img/power-tc/automations-rule.png)

## Next

→ [Your first week as a power TC](./quickstart.md)
