---
sidebar_label: Overview
sidebar_position: 1
description: Use DocJacket's day-to-day work queues to see what needs attention, route inbound work, review drafts, and finish extraction saves.
---

<!-- Canonical: https://help.docjacket.com/docs/operations -->
<!-- Source: docs/operations/index.md -->

# Operations

Operations pages are the surfaces your team checks during the day to decide what needs attention next.

## In this section

- [Dashboard](./dashboard.md) - Your daily overview, quick actions, pending uploads, closings, tasks, and briefing
- [Intake Queue](./intake-queue.md) - Route inbound emails, SMS, intake forms, and notes to the right transaction
- [Review Queue](./pending-review.md) - Use the topbar drawer for pending uploads, ready drafts, scheduled sends, and recent activity
- [Extraction Review](./extraction-review.md) - Finish saving extracted contract data and review extraction history

## How the queues fit together

Use the **Dashboard** as your morning check-in. It points you toward closings, overdue tasks, waiting items, outstanding payments, and uploads that still need review.

Use the **Intake Queue** when inbound emails, SMS, form submissions, or notes need routing to a transaction. This is assignment work: decide where an inbound item belongs, then assign or dismiss it.

Use the **Review Queue** when drafts, automation output, scheduled sends, or pending uploads need a human decision. The old sidebar **Pending Review** page was retired; current review work lives in the document-tasks icon in the topbar.

Use **AI Extractions** when uploaded documents were scanned but still need to be reviewed and saved, or when you need the full extraction history behind a pending upload.

## Extraction lifecycle

Uploading a contract starts a workflow, but it does not create or update transaction data by itself. The normal lifecycle is:

1. **Upload** - Add documents through **Upload Documents** or transaction **Extract Data**.
2. **Scan** - DocJacket runs extraction and shows progress.
3. **Review** - Open the extracted data, citations, confidence, warnings, and changed-field comparison.
4. **Save** - Click **Create Transaction**, **Create Listing**, or **Update Transaction**.

If the scan finishes but the save step does not happen, the work is unfinished. Look for it in **Pending Uploads**, the topbar **Review queue**, or the **AI Extractions** page.

The key distinction is simple: **Intake Queue** routes inbound work to a transaction, **Review Queue** approves prepared work, and **AI Extractions** finishes document scans.
