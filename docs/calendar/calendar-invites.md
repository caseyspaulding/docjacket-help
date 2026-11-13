---
sidebar_label: Calendar Invites
sidebar_position: 6
description: Send a Google Calendar invitation for a key date to the people you choose on that date, with RSVP tracking, automatic updates, and what does and doesn't cancel an invite.
---

# Calendar Invites

Calendar invites let you send a real calendar invitation for a transaction's key dates to the people on the deal. They get an email invitation they can **Accept** or **Decline**, the event lands on their calendar, and it stays in sync: when a date moves the invite updates automatically. Completing a date does **not** cancel its invite. Marking it **Waived** or **N/A** asks whether to cancel it. Clearing the date or deleting the key date cancels it (see [Updates and cancellations](#updates-and-cancellations)).

**You choose the recipients for each date separately.** Invites are not sent to everyone on the deal — you tick the people you want on that particular date. The closing invite can go to your agent and the opposing agent, while the inspection invite goes to a different group entirely. Nobody is invited to anything until you pick them.

This is different from [Google Calendar sync](./calendar-view.mdx), which pushes *your own* deadlines to *your own* calendar. Calendar invites send an invitation to *other people*.

## Send an invite

There is no "Calendar invites" button on the Key Dates list or at the top of a deal. The invite lives **inside each key date**: open the date's details panel and look for the **Calendar invite** section.

1. Open the transaction and click a **key date** (for example, the closing date) to open its details panel.
2. Expand the **Calendar invite** section.
3. Tick the people to invite. You'll see everyone on the deal with their role, plus an **Also add me** row so you can put the date on your own calendar at the same time. If you are the deal's organizer, that row reads **Add to my calendar** instead. It is sent from your own Google Calendar, so it goes straight onto it. Google doesn't email you an invitation to your own event.
4. Click **Send invite** and confirm. If you ticked only yourself, the toast says **Added to your Google Calendar.**

Repeat on the next date and pick a different set of people. Each key date keeps its own invitation and its own list — changing one never touches another.

If the date already has invites, the section opens automatically, shows who was invited and how they responded, and the button becomes **Update invite**.

You can send an invite for a date that is already **Completed** (or Approved, Clear to Close, or any other status). Only **Waived** and **N/A** dates can't be invited. See [Waived and N/A dates](#waived-and-na-dates).

:::note
A key date needs a date on it before it can be invited. If it doesn't have one yet, the section says *"Set a due date to send a calendar invite."*
:::

## If an invite isn't sent

When an invite doesn't go out, DocJacket says why instead of "Calendar invite sent." The reason appears in a message when you click the button and as a line under it:

- **Not sent: this date is marked Waived.** (or **marked N/A**)
- **Not sent: this date has no due date.**
- **Not sent: calendar invites are turned off for this deal.**
- **Not sent: nobody with an email address was selected.**
- **Not sent: Google Calendar did not create the event.**
- **Not sent: this date was not found on this deal.**

If the organizer's Google Calendar has been disconnected, the message reads **Saved — the invite will send once Google Calendar reconnects.** Reconnect it under **Settings → Integrations** and the invite goes out.

The deal's Activity also records each one as "Calendar invite not sent for *date name*: *reason*."

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
- **Maybe** — they replied tentatively.
- **No response yet** — the invite was sent but they haven't responded.

Responses update over time, so check back to see who has confirmed.

## Updates and cancellations

You don't have to resend invites when things change:

- **A date moves** — everyone invited to that date gets one updated invitation and the event shifts on their calendar.
- **Other changes on the deal** — guests are only emailed an updated invitation when something they can see changes: the event's title, description, location, date or time, all-day setting, or who is invited. Edits elsewhere on the deal don't re-send an invite that hasn't changed.
- **A date is completed** — nothing happens to the invite. It stays on everyone's calendar, and it still updates if the date later moves.
- **A date is cleared or the key date is deleted** — the invite is cancelled, everyone invited is emailed a cancellation, and the event drops off their calendar.
- **Change who's invited** — reopen the **Calendar invite** section on that date, tick or untick people, and click **Update invite**.
- **Cancel manually** — click **Cancel invite** on the key date. If the date is still ahead, everyone on it gets a cancellation.
- **Cancel or archive the deal** — DocJacket asks whether to cancel the invites too. See [When a deal is cancelled or archived](#when-a-deal-is-cancelled-or-archived).

### Waived and N/A dates

A date marked **Waived** or **N/A** can't be invited: **Send invite** is greyed out and the panel says **Not sent: this date is marked Waived.** (or **marked N/A.**).

If the date already has an invite on people's calendars and is still ahead, choosing **Waived** or **N/A** asks first. You'll see this whether you change the date's status in its panel or click **Mark N/A** on its row in the Key Dates list. The question is **Also cancel the calendar invite?**, with three buttons:

- **Cancel the invite** — emails each invited person a cancellation and removes the event.
- **Keep the invite** — marks the date Waived or N/A and leaves the invite exactly as it is. It is not updated or cancelled later when the date changes.
- **Back** — changes nothing.

When nobody besides you (the organizer) was invited, the question names the date and reads, for example, "Closing is on your calendar. Cancelling removes it. No one else was invited, so no email is sent." Otherwise it reads "The people invited to Closing have it on their calendars. Cancelling emails each of them a cancellation."

### When a deal is cancelled or archived

Cancelling or archiving a deal that has calendar invites still ahead asks about those invites too, the same way marking a date Waived or N/A does.

**When it asks**

- Moving the deal to a **Cancelled**-type status asks. That covers the status chip on the deal, the status cell and the bulk **Status** menu on the Transactions list, dragging the card into a Cancelled column on the Pipeline, and the **Status** field on the deal's Edit form. Moving a deal from Closed to a Cancelled-type status asks too. A deal that is already in a Cancelled-type status doesn't ask again.
- Archiving asks, after the usual archive confirmation, from the row's ⋮ menu and from **Archive Transaction** on the Edit form. The bulk **Archive** button on the Transactions list asks once for the whole selection.
- It only asks when a key date on the deal has a live invite and the date hasn't passed yet. Otherwise the deal is cancelled or archived without the extra question.
- **Closing a deal never asks.** A closed deal's invites stay on guests' calendars as they are.

**The question**

For one key date it reads **Also cancel the calendar invite?** with three buttons: **Cancel the invite**, **Keep the invite** and **Back**. For two or more key dates the title and buttons are plural (**Also cancel the calendar invites?**, **Cancel the invites**, **Keep the invites**). The message says how many key dates are affected, and for a bulk archive or bulk status change, how many deals. As with Waived and N/A, it says each invited person will be emailed a cancellation, or, when no one besides you was invited, that no email is sent.

- **Keep the invite** is the default. The deal is cancelled or archived and every invite stays on guests' calendars.
- **Cancel the invite** cancels or archives the deal and then cancels every live invite on it. Each invited person is emailed a cancellation, except for dates that have already passed, which nobody is emailed about. Cancelling also turns off calendar invites for that deal, and its Activity shows **Cancelled all calendar invites**.
- **Back** changes nothing: the deal isn't cancelled or archived. On the Edit form, Back doesn't save anything, including your other edits.

If the invites can't be cancelled, the deal is still cancelled or archived and a message reads "The deal was updated, but its calendar invites could not be cancelled." Open each key date and click **Cancel invite** to cancel them one at a time.

Archiving doesn't cancel invites by itself, and restoring an archived deal doesn't bring cancelled invites back. See [Cancelling or Closing a Transaction](../transactions/canceling-a-transaction.mdx) and [Archiving a Transaction](../transactions/archiving-a-transaction.mdx).

### Dates that have already passed

Clicking **Cancel invite** on a date that has already passed doesn't email anyone. A date counts as past when its day is before today, or, for a date with a time, when that time has already gone by. The confirmation reads "This date has passed, so nobody is emailed a cancellation. The event stays on guests' calendars." The invite shows as cancelled in DocJacket, but the event stays on guests' calendars.

Marking a past date **Waived** or **N/A** doesn't ask about the invite at all, and leaves it as it is.

### Closing out dates from Ask AI

When you mark a date done, waived or N/A through Ask AI or a connected assistant, the invite is never cancelled. The approval card says the calendar invite stays on guests' calendars. To cancel one from there, ask the assistant to cancel the invites for that date.

The same is true when a deal is cancelled or archived through the public API, Ask AI or a connected assistant: those never cancel invites, and there is no question to answer. Only the app's own screens ask. To cancel the invites afterward, use **Cancel invite** on each key date, or ask the assistant to cancel them.

## Turning it on

Calendar invites are on by default. The **Calendar invite** section always appears in a key date's details panel. If it says calendar invites are turned off for your organization, an admin can enable them:

1. Go to **Settings → Organization**.
2. Turn on **Send calendar invites for key dates**.

If the setting is turned off while a date still has an invite out, the panel says **Sending new invites is turned off in Settings → Organization.** and still offers **Cancel invite**.

If you turned the setting on and still can't send, check the other items under [What has to be in place](#what-has-to-be-in-place): the date needs a due date, someone needs to be ticked, and the deal's organizer needs a connected Google Calendar.

## Good to know

- **Key dates only.** Invitations are sent for key dates. Tasks can't be sent as invitations yet — they appear on your own calendar if you have task sync turned on, but they aren't sent to anyone else. <!-- until: docjacket-v3#3711 -->
- **Multiple businesses or brands.** If you send email from more than one connected account (for example, a team brand and your own company), invites go out from the calendar that matches the account the deal sends from. Connect a Google Calendar for each account you send from.
- **First-time recipients on Gmail.** The first time you invite someone on Gmail who hasn't corresponded with you, Google may show the invitation as an email they click to add, rather than adding it to their calendar automatically. They still receive it and can respond. This is Google's behavior, not a DocJacket setting.
- **Invite selectively.** Because you choose per date, you can invite agents to the milestones they care about — acceptance, deposit due, contingency removals, closing — without putting your internal dates on anyone else's calendar.

## Related

- [Calendar View](./calendar-view.mdx) — sync your own deadlines to your Google Calendar
- [Key Dates List](./key-dates.md) — review upcoming and overdue dates across every deal
- [Google Workspace](../integrations/google-workspace.mdx) — connect Gmail and Google Calendar
