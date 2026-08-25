---
sidebar_label: SMS Settings
sidebar_position: 13
description: Manage your dedicated business SMS number, shared-number fallback, monthly usage, extra credits, and number release.
---

# SMS Settings

Use **Settings > SMS** to manage your organization's texting setup, usage, SMS credits, and dedicated sending number.

SMS settings control the account-level setup. The transaction **Messages > SMS** tab is where users send messages, reply to conversations, use SMS templates, attach files, and send to multiple contacts.

## Business number

Paid organizations can use a dedicated business phone number for outbound SMS. Provisioning a number requires a paid plan; if your plan does not include SMS access, DocJacket blocks setup and shows the plan requirement.

From SMS settings, you can:

- Search available phone numbers by area code
- Open the search dialog with suggested numbers, or leave the area code blank to see available options
- Choose a number
- Set up the selected number
- See the city or region associated with the number when available
- Confirm which number is currently active

If you do not have a dedicated number, DocJacket can fall back to the shared DocJacket sending number. The SMS tab still lets you send from that shared number when your plan and usage limits allow it.

## Plan and usage

The **SMS Plan** card shows:

- Whether SMS is available on the organization's plan
- The number of texts used in the current billing period
- The number of included and purchased texts available
- Whether the organization is using purchased credits
- Any block reason, such as free-plan access or the monthly hard limit

Free plans cannot send SMS. DocJacket shows the plan requirement and reminds users that portal chat is always free.

## Credits and overages

When the organization uses its included monthly texts, DocJacket prompts users to buy more credits. Click **Buy 250 More - $5** to start checkout for an additional credit block.

Purchased credits apply to the current monthly usage bucket. If the organization reaches the monthly hard limit, DocJacket blocks additional SMS sends and prompts the team to contact support.

## Sending and replies

To send a direct message from a transaction, open the transaction, go to **Messages > SMS**, and click **New Message**.

From the SMS tab you can:

- Send to one transaction contact
- Send to multiple contacts
- Reply in an existing thread
- Attach a file
- Use a saved SMS template
- Review unread counts, typing indicators, delivery status, and inline action cards when available

Threads may show SMS, Portal, or Email badges depending on how the contact is communicating. Portal chat is separate from SMS and does not count against SMS usage. Contacts with portal access can reply through the portal instead of using text credits.

Replies return to the same message thread automatically, so the conversation stays attached to the transaction.

## Sending safeguards

Before sending, DocJacket checks the recipient phone number, unresolved merge fields, SMS opt-outs, quiet hours, duplicate sends, and monthly usage limits.

If a contact has already received several texts that day, DocJacket shows a warning before the user sends another text. Users can continue only after confirming the send.

## Message wording

DocJacket sends a few automatic texts on your behalf — key-date reminders and appointment confirmations. The **Message wording** section in **Settings > SMS** lets you rewrite what each of them says:

- The key-date **reminder** text
- The **appointment confirmation** question, and the follow-ups sent after a Y or N reply
- The plain **appointment heads-up** used when you don't need a Y/N answer

Each message shows its default wording, the merge fields you can use (like the property address and the date), and a character count. Edit the text, save, and every future send uses your version; **Reset to default** brings the original back. The sender line, reply instructions, and opt-out notice are added automatically and can't be removed.

### Different wording per appointment type

The appointment heads-up has a **Per appointment type** section underneath it, with a box for **Inspection**, **Final walk-through**, **Closing**, and **Appraisal**.

Leave a type alone and it keeps using the wording above it — the box shows *Using the wording above*, or *Using the built-in default* if you haven't customized that either. Give a type its own text and only that type changes; it's marked *Its own wording*, with its own **Reset to default**.

This is for when one appointment needs to say more than the others:

- **Inspection** — "The inspection at 123 Main St is tomorrow. We recommend arriving for the last hour."
- **Appraisal** — "Heads up: the appraisal at 123 Main St is tomorrow."

Resetting the shared wording at the top does **not** wipe the types you customized. They keep their own text; only the types that were following along fall back to the built-in default.

### Including the appointment time

Appointment messages accept an `{{appointment_time}}` merge field, filled from the **Time (optional)** field on the key date. It's empty when nobody typed a time, so write the sentence to read sensibly either way, or use it only on the types your team always schedules.

Key-date **reminders** already include the time on their own — you don't need to add anything for those. See [Key Dates & Financials](../transactions/key-dates-and-financials.mdx#adding-the-appointment-time).

### What DocJacket checks when you save

Two checks run on wording you save:

- **Plain characters only.** Curly quotes, em dashes and other characters that come along when text is pasted from a word processor are rejected, and the message names the character to replace. One of them more than doubles what every text costs to send, so it's worth the swap.
- **Length.** If an appointment message would go out as more than one segment at a typical property address, DocJacket says so. It still sends, and still arrives as one message — it's a heads-up, not a block.

## Appointment confirmation style

The day before an inspection, final walk-through, closing, or appraisal, DocJacket can text the agent about the appointment. For each of those date types, choose the style that fits how your team works:

- **Confirm (Y/N)** — asks "Confirm you'll be at…?" and routes the reply: Y reminds the agent and client, N alerts the agent to reschedule
- **Notify** — a plain "heads up, this is tomorrow" text with no reply needed — a common choice for appraisals, which most parties don't attend
- **Off** — no text for that date type

Organizations start with Confirm on all four types; changing a type affects only future texts.

The **Notify** text can read differently for each type — see [Different wording per appointment type](#different-wording-per-appointment-type).

## Releasing a number

The **Danger Zone** appears when your organization has a dedicated number.

Releasing a number permanently gives it up. Contacts who saved that number will no longer recognize your texts, and you cannot get the same number back. Your account falls back to the shared DocJacket number after release.

When a number is released or a new number is provisioned, existing transaction conversations stay attached to their transactions, but future SMS sends use the currently active sending number.
