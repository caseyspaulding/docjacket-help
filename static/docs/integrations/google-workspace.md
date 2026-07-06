---
sidebar_label: Google Workspace
sidebar_position: 2
description: Connect Gmail, Google Drive, Google Calendar, and Google Contacts to DocJacket to sync email, files, dates, and contacts automatically.
---

<!-- Canonical: https://help.docjacket.com/docs/integrations/google-workspace -->
<!-- Source: docs/integrations/google-workspace.mdx -->

# Google Workspace

Connect Google services from **Settings > Integrations**. Each service has its own card, connection status, and connect or reconnect action.

## What's included

### Gmail

Connect Gmail to send transaction email from your Gmail account. Gmail powers:

- Transaction email compose, reply, reply-all, and forward
- Scheduled one-off emails from the Email tab
- Scheduled emails from tasks, key dates, reports, and automation rules
- Drafts and sent-message history stored with the transaction in DocJacket
- Attachment sending from transaction documents or uploaded files

Gmail also supports multiple connected accounts. After Gmail is connected, click **Manage accounts** to add another Gmail account, choose the primary account, or remove an account.

For how sent mail is attributed and where replies go, see [How Email Sending Works](../messages/how-email-sending-works.mdx).

### Google Drive

Connect Google Drive to work with transaction files from the Documents tab:

- Import files from Drive into DocJacket
- Upload selected transaction documents to Drive
- Link or change a persistent Drive folder for a transaction
- Open the linked folder in Google Drive

### Google Calendar

Connect Google Calendar to push DocJacket dates to your calendar. Calendar sync can include closings, key dates, and task due dates when enabled in calendar settings and on the transaction.

DocJacket treats DocJacket as the source of truth for transaction dates. Update transaction dates in DocJacket, then let sync push those changes to Google Calendar. DocJacket does not use Google Calendar as the place to edit transaction deadlines.

### Google Contacts

Connect Google Contacts when you want to preview and import contacts into DocJacket from the Contacts import workflow.

## Connecting

1. Go to **Settings > Integrations**
2. Find the Google service you want to connect
3. Click **Connect**
4. Sign in with your Google account
5. Grant the requested permissions

If the card shows **Expired**, click **Reconnect** so DocJacket can refresh the permission.

## Tips

- Use **Manage accounts** under Gmail if you send from more than one Gmail address.
- Google Drive imports create DocJacket documents. Changes made later in Drive do not automatically edit the imported DocJacket copy.
- Calendar sync is most useful when transaction dates are maintained in DocJacket first.
