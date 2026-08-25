---
sidebar_label: Calendar and Holidays
sidebar_position: 9
description: Configure Google Calendar task syncing and organization holidays used by business-day scheduling rules.
---

<!-- Canonical: https://help.docjacket.com/docs/settings/calendar-and-holidays -->
<!-- Source: docs/settings/calendar-and-holidays.md -->

# Calendar and Holidays

Use **Settings > Calendar** and **Settings > Holidays** to control how dates sync and how business-day rules skip closed days.

## Calendar sync

DocJacket can sync closings and key dates to your connected Google Calendar when calendar sync is enabled for the transaction.

In **Settings > Calendar**, you can choose whether task due dates also sync to Google Calendar.

When task syncing is on:

- Tasks with due dates appear on Google Calendar
- Task dates appear alongside closings and key dates
- Re-added task events usually appear on the next sync

When task syncing is off:

- Existing task events are removed from Google Calendar within a few minutes
- Closing dates and key dates still sync
- Task due dates remain visible inside DocJacket and in the morning brief

Each transaction also has a Google Calendar toggle on its Overview. Turn that off to hide just that transaction from Google Calendar without disconnecting Google Calendar for the whole organization.

### Only sync my deals

By default, calendar sync puts every synced transaction in your organization on your Google Calendar. If you're on a team and only want your own, turn on **Only sync my deals** in **Settings > Calendar** — your calendar then shows just the deals assigned to you or created by you, and events from other deals are removed from Google automatically. The setting is per person; teammates' calendars aren't affected.

If you delete a DocJacket event from Google Calendar by hand, DocJacket respects that: the date stays in DocJacket, but that event won't be pushed back onto your Google Calendar.

## Holidays

Organization holidays count as non-business days for business-day scheduling rules.

Holidays affect:

- Task rules that use business days
- Scheduled emails that use business-day timing
- Working-hours email deferral when **Skip on organization holidays** is enabled

## Managing holidays

From **Settings > Holidays**, you can:

- Import US federal holidays for the current year and the next two years
- Add a custom holiday
- Mark a holiday as recurring every year
- Edit existing holidays
- Delete holidays that no longer apply

Add office closures and local holidays that should delay automated reminders or task schedules.
