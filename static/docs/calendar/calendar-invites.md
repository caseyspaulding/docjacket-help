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

There is no "Calendar invites" button on the Key Dates list or at the top of a deal. The invite lives **inside each key date**: open the date's details panel and look for the **Calendar invite** section.

1. Open the transaction and click a **key date** (for example, the closing date) to open its details panel.
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

## What has to be in place

For the **Send invite** button to work, all of these need to be true:

1. **The organization setting is on.** **Settings → Organization → Send calendar invites for key dates** (on by default). When it's off, the Calendar invite section still appears but says *"Calendar invites are turned off for this organization in Settings → Organization."*
2. **The key date has a date.** Otherwise the section says *"Set a due date to send a calendar invite."*
3. **At least one person is ticked.** Your deal contacts with an email address are listed, plus **Also add me**.
4. **A Google Calendar is connected for the deal's organizer.** Each deal sends its invites from one Google Calendar: normally the calendar of the team member assigned to the deal, or the account owner's if no one is assigned. It has to be the same Google account the deal's email sends from. If that calendar isn't connected, the section shows *"Invites send from a connected Google Calendar"* with a link to **Settings → Integrations**.

## Do the people you invite need a Google account?

Only the **organizer** needs Google Calendar connected — the people you invite do not.

- **The organizer:** the invite is created on the organizer's connected Google Calendar and sent from there, so that person needs **Google Calendar** connected under **Settings → Integrations**. See [Google Workspace](../integrations/google-workspace.mdx) for how to connect.
- **The people you invite:** nothing to connect, and they don't need a Google account. They receive a normal calendar-invitation email with Accept and Decline, and it works with whatever calendar they use — Google, Outlook, or Apple.

If you're asked to connect Google Calendar even though you already have, disconnect it under **Settings → Integrations** and connect it again. That refreshes the connection and clears the prompt.

## If you use Outlook: adding the closing date to your Outlook calendar

Calendar Invites organizes from a connected **Google Calendar** only — there's no Outlook equivalent. Connecting Outlook Calendar under **Settings → Integrations** does not enable this feature, and it does **not** sync your closing dates or key dates into Outlook either.

To get your closing dates and other deadlines onto your Outlook calendar, use the subscription feed: go to **Settings → Calendar → Subscribe from any calendar**, click **Create subscription link**, and add that link to Outlook as a subscribed (internet) calendar. It works with Outlook, Apple Calendar, and Google Calendar, needs no account connection, and keeps itself up to date as dates change. It's a feed for your own calendar, not an invitation to other people on the deal.

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

Calendar invites are on by default. The **Calendar invite** section always appears in a key date's details panel. If it says calendar invites are turned off for your organization, an admin can enable them:

1. Go to **Settings → Organization**.
2. Turn on **Send calendar invites for key dates**.

If you turned the setting on and still can't send, check the other items under [What has to be in place](#what-has-to-be-in-place): the date needs a due date, someone needs to be ticked, and the deal's organizer needs a connected Google Calendar.

## Good to know

- **Key dates only.** Invitations are sent for key dates. Tasks can't be sent as invitations yet — they appear on your own calendar if you have task sync turned on, but they aren't sent to anyone else.
- **Multiple businesses or brands.** If you send email from more than one connected account (for example, a team brand and your own company), invites go out from the calendar that matches the account the deal sends from. Connect a Google Calendar for each account you send from.
- **First-time recipients on Gmail.** The first time you invite someone on Gmail who hasn't corresponded with you, Google may show the invitation as an email they click to add, rather than adding it to their calendar automatically. They still receive it and can respond. This is Google's behavior, not a DocJacket setting.
- **Invite selectively.** Because you choose per date, you can invite agents to the milestones they care about — acceptance, deposit due, contingency removals, closing — without putting your internal dates on anyone else's calendar.

## Related

- [Calendar View](./calendar-view.mdx) — sync your own deadlines to your Google Calendar
- [Key Dates List](./key-dates.md) — review upcoming and overdue dates across every deal
- [Google Workspace](../integrations/google-workspace.mdx) — connect Gmail and Google Calendar
