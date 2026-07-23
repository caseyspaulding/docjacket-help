---
sidebar_label: Why an email didn't appear
sidebar_position: 6
description: You completed a task and no email showed up in the Review queue. Here are the causes, in the order worth checking, and how to send the email anyway.
---

<!-- Canonical: https://help.docjacket.com/docs/tasks/email-didnt-appear -->
<!-- Source: docs/tasks/email-didnt-appear.mdx -->

# Why didn't my task email appear?

You checked a task off, expected the email in your **Review queue**, and nothing showed up. Almost always it's one of the five causes below.

**Quickest way to find out:** open the transaction, click the task, and look at the **Task emails** section. Each linked email shows its current status right there, which usually identifies the cause immediately.

## 1. The email is set to "Just notify me in-app"

**What you'd see:** the email shows **Notified in-app {'{date}'} — not sent**.

An email set to **Just notify me in-app** doesn't prepare a draft when its date arrives — it only posts an in-app notification. No email is created, so nothing reaches your Review queue on that date. That's the setting working as intended.

**What to do:**

- To send it now, use **Review & send** on that email. Notify-mode emails keep that button, because a notification isn't an email.
- Completing the task also prepares it for review, even if the notification already went out.
- If this email should always produce a draft on its date, change **When this fires** to **Draft email for review**. Change it on the [checklist template](./task-templates.mdx) so future deals inherit it, not just this deal.

See [Delivery mode](./email-automation.mdx#delivery-mode) for the full explanation.

## 2. The email already went out

**What you'd see:** the email shows **Sent {'{date}'}**, and there's no **Review & send** button.

Each linked email fires once. If its date passed and it was prepared and sent, completing the task later won't produce a second copy — that's deliberate, so a deadline email doesn't send twice.

**What to do:** check the **Done** tab of your Review queue, or the transaction's activity, to confirm where it went. If you need to send it again, compose it manually from the task.

## 3. No recipient could be resolved

**What you'd see:** a card in your **Review queue** saying the email needs a recipient, plus a notification.

If the email's recipient role has no contact assigned on that deal — a **Seller** email on a deal with no seller yet, for example — DocJacket won't guess and won't send to the wrong person. It parks the email and asks you who it should go to.

**What to do:** open the card in the Review queue, add the recipient, and it becomes sendable. To stop it recurring, assign the contact on the deal, or set **Recipients by Role** on the email template so every task using it inherits recipients.

## 4. The task has no email linked to it

**What you'd see:** the **Task emails** section is empty.

The task simply has nothing attached — completing it was never going to produce an email. This is common on tasks created by hand, or on a checklist where the automation was set up on a different task than you expected.

**What to do:** link an email template to the task, or add the automation to the [checklist template](./task-templates.mdx) so it's there on every future deal.

## 5. The email sent automatically instead of waiting

**What you'd see:** nothing in **Ready for Review**, but the email appears under **Done** or in your sent mail.

If **Require review before sending** is off for that email, and your organization-wide review setting is also off, the email sends immediately on completion rather than waiting for approval.

**What to do:** if you want a review step, turn on **Require review before sending** for that email — or turn on **Review auto-emails before sending** in **Settings > Organization** to force every automated email to wait. See [Review before sending](./email-automation.mdx#review-before-sending).

## Still not sure?

Check these in order:

1. **Task emails** on the task — the per-email status line tells you most of it
2. **Review queue > Ready for Review** — is it waiting on you?
3. **Review queue > Done** — did it already go?
4. **Notification bell** — a notify-mode heads-up or a needs-a-recipient alert lands here, not in the Review queue

The Review queue and the notification bell are **different icons** in the topbar. Prepared emails appear in the Review queue; in-app heads-ups appear in the bell. See [Review Queue](../operations/pending-review.md).
