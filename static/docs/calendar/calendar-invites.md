---
sidebar_label: Calendar Invites
sidebar_position: 6
description: Send Google Calendar invitations for a transaction's key dates to the agents and title companies on the deal, with automatic updates and cancellations.
---

<!-- Canonical: https://help.docjacket.com/docs/calendar/calendar-invites -->
<!-- Source: docs/calendar/calendar-invites.md -->

# Calendar Invites

Calendar invites let you send a real calendar invitation for a transaction's key dates to the people on the deal — the agents you work with and the title or escrow company. They get an email invitation they can **Accept** or **Decline**, the event lands on their calendar, and it stays in sync: when a date moves the invite updates automatically, and when a date is completed or removed the invite is cancelled.

This is different from [Google Calendar sync](./calendar-view.mdx), which pushes *your own* deadlines to *your own* calendar. Calendar invites send an invitation to *other people*.

## Turn it on

Calendar invites are off until an admin enables them for your organization.

1. Go to **Settings → Organization**.
2. Turn on **Send calendar invites to agents & title**.

Once it's on, a **Calendar invites** button appears in each deal's Key Dates area, and a **Calendar invite** section appears when you open an individual key date.

## Do agents need a Google account?

Only the person **sending** needs Google Calendar connected — the people you invite do not.

- **You (the sender):** the invite is created on your connected Google Calendar and sent from there, so the deal's coordinator needs **Google Calendar** connected under **Settings → Integrations**. If only Gmail is connected, DocJacket will prompt you to connect Google Calendar before sending. See [Google Workspace](../integrations/google-workspace.mdx) for how to connect.
- **The agents and title companies you invite:** nothing to connect, and they don't need a Google account. They receive a normal calendar-invitation email with Accept and Decline, and it works with whatever calendar they use — Google, Outlook, or Apple.

## Send invites for a whole deal

Use this when you're opening a file and want to send all the invites at once.

1. Open the transaction and find the **Key Dates** area on the Overview.
2. Click **Calendar invites**.
3. Choose the **people** to invite (contacts on the deal that have an email address) and the **key dates** to send.
4. Click **Send invites** and confirm.

Each selected person gets one invitation per selected date.

## Send an invite for a single key date

Use this for one-off changes or when you only want to invite people to a specific date.

1. Open the transaction and click a **key date** to open its details panel.
2. In the **Calendar invite** section (next to Reminders), check the people to invite.
3. Click **Send invite** and confirm.

If the date already has invites, the section shows who was invited and their response, and the button becomes **Update invite**.

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
- **Cancel manually** — use **Cancel invite** on a single key date, or **Cancel all** from the deal-level Calendar invites panel, to withdraw invitations and notify attendees.

## Good to know

- **Multiple businesses or brands.** If you send email from more than one connected account (for example, a team brand and your own company), invites go out from the calendar that matches the account the deal sends from. Connect a Google Calendar for each account you send from.
- **First-time recipients on Gmail.** The first time you invite someone on Gmail who hasn't corresponded with you, Google may show the invitation as an email they click to add, rather than adding it to their calendar automatically. They still receive it and can respond. This is Google's behavior, not a DocJacket setting.
- **Which dates to invite.** You choose the dates each time, so you can invite agents to the milestones they care about (acceptance, deposit due, contingency removals, closing) without sending every internal date.

## Related

- [Calendar View](./calendar-view.mdx) — sync your own deadlines to your Google Calendar
- [Key Dates List](./key-dates.md) — review upcoming and overdue dates across every deal
- [Google Workspace](../integrations/google-workspace.mdx) — connect Gmail and Google Calendar
