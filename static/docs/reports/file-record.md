---
sidebar_label: File Record & Communication Log
sidebar_position: 4
description: Export a transaction's complete communication log and documents as one archive for your compliance file — and how DocJacket fits alongside CTM, SkySlope, Dotloop, or KW Command.
---

<!-- Canonical: https://help.docjacket.com/docs/reports/file-record -->
<!-- Source: docs/reports/file-record.mdx -->

# File Record & Communication Log

The **file record** is the complete paper trail for one transaction: every email and text message DocJacket tracked, with full message bodies, plus every document on the deal — exported as a single archive you can keep, print, or hand to your broker at closing.

## "We already use CTM for compliance — isn't this duplicate work?"

This is the most common question from transaction coordinators moving to DocJacket, and the short answer is **no, you don't have to give anything up.**

DocJacket is not a compliance or forms system. It does not replace **CTM eContracts**, **SkySlope**, **Dotloop**, **KW Command**, **Folio**, or whatever your brokerage uses for broker review and document retention. Those stay exactly where they are.

What DocJacket handles is the part in between: the **contract-to-close coordination**. Deadlines, reminders, chasing signatures, texting agents and clients, keeping everyone on the same page. That's the work that normally lives in your head, a spreadsheet, and a hundred emails.

The concern behind the question is usually this: *if I coordinate in DocJacket but my compliance file lives in CTM, am I now keeping two records and doing double entry?*

You aren't, because **DocJacket exports its record back out.** When you close the file, one click produces a dated archive of the whole correspondence history plus the documents — the same "print the full communication on this transaction" artifact your compliance system gives you. Save it to the deal in CTM, hand it to your broker, or keep it in your own audit trail. You do the coordination once, in one place, and take the record with you.

## What's in the archive

Exporting produces a ZIP containing:

| Item | What it is |
| --- | --- |
| `Communication-Log.pdf` | Every tracked email and text on the transaction, in date order, with the full message body — not just subject lines |
| `documents/` | Every document on the deal, including attachments that arrived by email |
| `manifest.txt` | A readable index of what's in the package |

You can also export the communication log **on its own**, without the documents, if you only need the correspondence history.

## Export the file record

1. Open the transaction
2. Click the **Reports** tab
3. In the **File record** card at the top, click **Export file record**
4. Optionally set a **From** and **To** date — leave both blank for the full history
5. Leave **Include files** checked to bundle the documents, or uncheck it for the correspondence log alone
6. Click **Generate + Files**

To send it instead of downloading it, click **Email…** in the same dialog and pick recipients — useful for handing a closed file to a broker or compliance reviewer.

## What counts as "tracked" communication

The log contains the messages DocJacket can see:

- Emails **sent from DocJacket** — task emails, reminders, client updates, portal invitations
- **Text messages** sent and received through DocJacket
- Emails **received into the deal**, if you've set up email forwarding or BCC to DocJacket

That last one matters. If you send an email from your own inbox or from CTM and DocJacket never receives a copy, it is not in the log — DocJacket can only record what reaches it. If you want the file record to be the complete correspondence history, set up BCC or forwarding so replies and attachments land on the deal automatically. See [Inbox](/docs/messages/inbox) and [Email and automation settings](/docs/settings/email-and-automation).

## When to use it

- **At closing** — export the full record and file it with the closed transaction
- **Broker or compliance review** — email the archive to whoever reviews the file
- **A dispute or audit** — produce a dated, chronological record of who was told what, and when
- **Handing a deal to someone else** — give the new coordinator the whole history in one file

## Related

- [Transaction Reports](/docs/reports/transaction-reports) — client-facing status reports, which are a different thing: reports you *send*, versus the record you *keep*
- [Importing Deals from SkySlope](/docs/getting-started/importing-deals-from-skyslope) — moving existing deals in from another platform
- [Uploading Documents](/docs/documents/uploading-documents)
