---
sidebar_label: How Email Sending Works
sidebar_position: 2
description: How DocJacket sends transaction email from your connected Gmail or Outlook, who each email sends as, and where replies go.
---

<!-- Canonical: https://help.docjacket.com/docs/messages/how-email-sending-works -->
<!-- Source: docs/messages/how-email-sending-works.mdx -->

# How Email Sending Works

When DocJacket sends email from a transaction, it sends **through your connected
Gmail or Outlook account** — not from a generic DocJacket address. The message
goes out from your email address, a copy lands in your **Sent** folder, and any
reply comes back to **your inbox**, exactly as if you'd sent it yourself.

DocJacket only ever **sends** on your behalf. It does **not** read your inbox.

## Connect your mailbox first

Sending from your own address requires a connected mailbox. Connect Gmail or
Outlook from **Settings > Integrations**. See
[Google Workspace](../integrations/google-workspace.mdx) or
[Microsoft Outlook](../integrations/microsoft-outlook.mdx).

Until a mailbox is connected, manual sends from a deal prompt you to connect one,
and automated email falls back to DocJacket's own email service (a
`@docjacket.com` address) unless your organization requires a connected mailbox
(see below).

## Which account an email sends from

Every transaction email sends from a specific person's connected mailbox,
depending on how it was sent:

| Email | Sends from |
|---|---|
| You compose, reply, or forward from a deal | **You** (the signed-in user) |
| Task emails, reminders, and automation-rule emails | The deal's **assigned coordinator** — or the **account owner** if the deal is unassigned |
| Situation reports and other scheduled reports | The person who **created the schedule** |

If that person hasn't connected a mailbox, see the fallback behavior below.

## Where replies go

Because the email is sent from your real mailbox, replies go straight back to
**your inbox** in Gmail or Outlook — the normal way. You reply from your own inbox
like any other email. (Sent and received messages from a deal are also listed on
the transaction's **Email** tab for reference.)

## Requiring a connected mailbox

Organizations that want every deal email to come from a real mailbox — never a
`@docjacket.com` address — can turn on **Only send transaction email from a
connected mailbox** in **Settings > Organization**.

When this is on:

- Email sends from the sender's connected mailbox, or the account owner's if the
  sender hasn't connected one.
- If no mailbox is connected, a send you trigger yourself is **blocked** with a
  prompt to connect one, and an automated send is **held** until a mailbox is
  connected (the account owner is notified).

When it's off (the default), email still prefers a connected mailbox but falls
back to DocJacket's email service when none is available.

:::tip
Connect a mailbox for every team member who sends deal email, so their messages
always come from their own address and replies reach them directly.
:::

## Can you tell if a client opened an email?

Sometimes — and it depends on **which mailbox actually sent the message**, which is
the same distinction as the rest of this page.

| How it was sent | Open tracking |
|---|---|
| From **your connected Gmail or Outlook** | **No.** DocJacket hands the message to your mailbox and it goes out as your own email. |
| From **DocJacket's email service** (no connected mailbox — the fallback described above) | **Yes.** DocJacket records when it was delivered and when it was first opened. |

When an email *is* tracked, an **Email opened** entry appears on the transaction's
activity timeline, and the message shows its delivery status.

This surprises people, so it's worth stating plainly: **connecting your mailbox
gives up open tracking.** That's not a setting you can toggle — it's a consequence
of the message being sent by Gmail or Outlook rather than by DocJacket. Once Gmail
sends it, it's an ordinary email from your account, and DocJacket has no more
visibility into it than into anything else you send from Gmail.

Most teams consider that the right trade. Sending from your own mailbox means better
deliverability, replies land in your inbox, and the message looks like it came from
you — which matters more on a deal than knowing whether someone opened it.

:::note What you can always see
Regardless of how a message was sent, the transaction's **Email** tab lists what was
sent and what came back. Replies file themselves onto the deal when you started the
thread from DocJacket — see
[Getting Email Into DocJacket](./getting-email-into-docjacket.mdx). Read receipts and
"has my client seen this" are the only things that depend on the sending path.
:::
