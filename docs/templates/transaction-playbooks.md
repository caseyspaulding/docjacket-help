---
sidebar_label: What a Playbook Is
sidebar_position: 3
description: What Playbooks are in DocJacket — reusable, per-deal-type setups of key dates, tasks, required documents, and automations that you apply to a transaction in one click.
---

# What a Playbook Is

A **Playbook** is a reusable, ready-to-go setup for a **deal type**: the key dates, tasks, automations, and required documents a transaction of that type needs, applied in a single click. Set it up once, reuse it on every deal.

A Playbook is what DocJacket used to call a **checklist**. It's the same feature under a new name, not a second object that contains a checklist.

## What's in a Playbook

A Playbook covers everything a deal of that type needs:

- **Key dates and tasks** — the deadlines and work for that deal type, with due-date offsets and assignments.
- **[Required documents](./required-documents-lists.md)** — which documents are required, including conditional "required if…" rules.
- **Automations** — the rules and reminders that run for that deal type, by email, text message (SMS), or both. You author them in the Playbook builder: each task automation has a **Deliver by** choice, and every key date has its own **Reminders** panel (see below).

So instead of hand-adding tasks, key dates, and a document list to every new deal, the Playbook stamps all of it on at once.

## Where to find them

Open **Templates** → **Playbooks** — the card at the top of the page. The reusable
pieces a Playbook draws on — **Required Documents Lists**, the **Key Date Library**,
and **Smart Fields** — are in the same Templates area under **Library**.

:::info Playbooks were previously called Checklists
If you're following older notes, **Templates → Playbooks** is where your checklists
live. Your existing ones are all under the **My Playbooks** tab. Full guide:
[Playbooks](./timeline-templates.md).
:::

## Creating a Playbook

1. Go to **Templates → Playbooks** and click **New Playbook**.
2. Add the key dates and tasks for the deal type, and attach the **Required Documents List** that applies.
3. Save it — it's now reusable across deals.

See [Playbooks](./timeline-templates.md) for the full builder walkthrough.

## Applying a Playbook to a deal

Apply a Playbook to a transaction and DocJacket sets up the whole deal at once — its tasks, key dates, and required documents — in a **single click**. Two conveniences:

- **Auto-setup:** a new deal can be set up automatically from a matching Playbook.
- **Save what you built:** when you set a deal up by hand, DocJacket offers to save that work as a Playbook for next time — so the manual setup becomes one-click from then on. The reminders you configured on key dates and tasks are captured too, text messages included, and re-created on every deal you apply the Playbook to.

**Automated texts are set up in the builder, the same way as emails.** On a task, open its automation and use **Deliver by** to choose **Email**, **SMS**, or **Email + SMS** — an automated SMS on a task works just like an automated email. On a key date, open the **Reminders** panel and click **Add reminder**: choose when it goes out (**Days before the key date** — add one or several, e.g. 7 and 3 — **On the key date**, or **When it's marked complete**), who gets it (**Recipients by role**, plus any direct addresses under **Also email**), the **Email template**, **Deliver by**, and whether it should **Require review before sending**. Each reminder shows **Waits for review** or **Sends automatically**, and you can edit or remove it in place; removing one doesn't touch deals you've already created. If SMS isn't on your plan yet, or you haven't set up a business number, the picker says so (**SMS isn't on your plan** / **No SMS number yet**) and the save tells you why — email reminders are never affected. The text itself uses the reminder wording under **Settings › SMS › Message wording**; it is not a template you write per task the way an email is.

You can still build a text reminder on a live deal instead (open the task, expand **My Reminders**, and use **Remind someone…**; key dates have the same composer in their drawer) and then click **Save as Template** on the deal's Key Dates tab — the saved Playbook keeps those reminders, text messages included.

**Text messages are shown before they're scheduled.** If a Playbook includes SMS reminders, the apply confirmation lists every text it's about to set up — who it goes to and how many days before its date — and you can untick any of them. Unticking a text keeps its key date or task; it only skips the message. If your organization can't send SMS yet (no texting plan or no business number), DocJacket sets up everything else and skips the texts.

## Not the same as AI "playbooks"

If you use DocJacket's [AI Access](../ai-access/index.mdx) features, you may see the AI **slash commands** (e.g. `/docjacket:morning-briefing`) referred to as "playbooks." Those are a separate, developer/power-user thing — pre-written AI command recipes. **Playbooks** on this page are the reusable deal setups under Templates, and are what most people mean by "playbooks" in DocJacket.
