---
sidebar_label: Calendar Invites
sidebar_position: 6
description: Send a Google Calendar invitation for a key date to the people you choose on that date, with RSVP tracking and automatic updates and cancellations.
---

<!-- Canonical: https://help.docjacket.com/docs/calendar/calendar-invites -->
<!-- Source: docs/calendar/calendar-invites.md -->

# Calendar Invites

Calendar invites let you send a real calendar invitation for a transaction's key dates to the people on the deal. They get an email invitation they can **Accept** or **Decline**, the event lands on their calendar, and it stays in sync: when a date moves the invite updates automatically, and when a date is completed or removed the invite is cancelled.

**You choose the recipients for each date separately.** Invites are not sent to everyone on the deal — you tick the people you want on that particular date. The closing invite can go to your agent and the opposing agent, while the inspection invite goes to a different group entirely. Nobody is invited to anything until you pick them.

This is different from [Google Calendar sync](./calendar-view.mdx), which pushes *your own* deadlines to *your own* calendar. Calendar invites send an invitation to *other people*.

## Send an invite

1. Open the transaction and click a **key date** to open its details panel.
2. Expand the **Calendar invite** section.
3. Tick the people to invite. You'll see everyone on the deal with their role, plus an **Also add me** row so you can put the date on your own calendar at the same time.
4. Click **Send invite** and confirm.

Repeat on the next date and pick a different set of people. Each key date keeps its own invitation and its own list — changing one never touches another.

If the date already has invites, the section opens automatically, shows who was invited and how they responded, and the button becomes **Update invite**.

:::note
A key date needs a date on it before it can be invited. If it doesn't have one yet, the section says *"Set a due date to send a calendar invite."*
:::

## Who you can invite

The list offers the contacts on that transaction who have an email address and are set to receive transaction updates — agents, title and escrow, lenders, your clients, anyone else on the deal — plus your own address via **Also add me**.

If someone you expected is missing, check that they're added to the transaction, that their contact record has an email address, and that they haven't been switched off from transaction updates.

## Do the people you invite need a Google account?

Only the person **sending** needs Google Calendar connected — the people you invite do not.

- **You (the sender):** the invite is created on your connected Google Calendar and sent from there, so the deal's coordinator needs **Google Calendar** connected under **Settings → Integrations**. See [Google Workspace](../integrations/google-workspace.mdx) for how to connect.
- **The people you invite:** nothing to connect, and they don't need a Google account. They receive a normal calendar-invitation email with Accept and Decline, and it works with whatever calendar they use — Google, Outlook, or Apple.

If you're asked to connect Google Calendar even though you already have, disconnect it under **Settings → Integrations** and connect it again. That refreshes the connection and clears the prompt.

## See who accepted

After you send, each invited person shows a response status:

- **Accepted** — they're coming / have it on their calendar.
- **Declined** — they've declined.
- **No response yet** — the invite was sent but they haven't responded.

Responses update over time, so check back to see who has confirmed.

## Updates and cancellations

You don't have to resend invites when things change:

- **A date moves** — everyone invited to that date gets an updated invitation and the event shifts on their calendar.
- **A date is completed or removed** — the invite is cancelled and the event drops off their calendar.
- **Change who's invited** — reopen the **Calendar invite** section on that date, tick or untick people, and click **Update invite**.
- **Cancel manually** — click **Cancel invite** on the key date to withdraw the invitation and notify everyone on it.

## Turning it on

Calendar invites are switched on for most organizations already. If you don't see a **Calendar invite** section when you open a key date, an admin can enable it:

1. Go to **Settings → Organization**.
2. Turn on **Send calendar invites for key dates**.

## Good to know

- **Key dates only.** Invitations are sent for key dates. Tasks can't be sent as invitations yet — they appear on your own calendar if you have task sync turned on, but they aren't sent to anyone else.
- **Multiple businesses or brands.** If you send email from more than one connected account (for example, a team brand and your own company), invites go out from the calendar that matches the account the deal sends from. Connect a Google Calendar for each account you send from.
- **First-time recipients on Gmail.** The first time you invite someone on Gmail who hasn't corresponded with you, Google may show the invitation as an email they click to add, rather than adding it to their calendar automatically. They still receive it and can respond. This is Google's behavior, not a DocJacket setting.
- **Invite selectively.** Because you choose per date, you can invite agents to the milestones they care about — acceptance, deposit due, contingency removals, closing — without putting your internal dates on anyone else's calendar.

## Related

- [Calendar View](./calendar-view.mdx) — sync your own deadlines to your Google Calendar
- [Key Dates List](./key-dates.md) — review upcoming and overdue dates across every deal
- [Google Workspace](../integrations/google-workspace.mdx) — connect Gmail and Google Calendar
