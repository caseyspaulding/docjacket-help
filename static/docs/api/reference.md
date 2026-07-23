---
title: API reference — all operations
sidebar_label: All operations
sidebar_position: 6
description: Every operation in the DocJacket REST API — 115 endpoints grouped by resource, with method, path, and required scope. Generated from the OpenAPI specification.
---

<!-- Canonical: https://help.docjacket.com/docs/api/reference -->
<!-- Source: docs/api/reference.mdx -->

{/* GENERATED FILE — do not edit by hand.
     Source: spec/dj-api.json (OpenAPI 3.1.1)
     Regenerate: npm run fetch-spec && npm run gen-api-reference
     Generator: scripts/gen-api-reference.mjs */}

# API reference — all operations

The DocJacket REST API lets your own systems read and act on transactions, contacts, tasks, key dates, documents, extractions, disclosures, and templates. This page lists **all 115 operations** in one place, grouped by resource, so the whole surface is readable without running JavaScript or parsing the raw specification.

- **Base URL:** `https://api.docjacket.com`
- **Interactive reference** (try-it console, client snippets): [api.docjacket.com/reference](https://api.docjacket.com/reference)
- **Raw OpenAPI 3.1.1 specification:** [api.docjacket.com/openapi.json](https://api.docjacket.com/openapi.json)
- **MCP server** (same capabilities, for AI assistants): `https://mcp.docjacket.com/mcp`

For request and response schemas, read the [raw specification](https://api.docjacket.com/openapi.json) or the [interactive reference](https://api.docjacket.com/reference) — this page is the index, not the full contract.

## Authentication

Every request carries an API key as a bearer token:

```
Authorization: Bearer mcp_at_YOUR_KEY
```

Two credential types:

| Key | Prefix | Use |
|---|---|---|
| **Organization key** | `mcp_at_…` | Acts within a single organization. Mint one under **Settings → AI & API Access**. Covers every section except Organizations (Partner). |
| **Partner key** | `rsk_…` | Cross-tenant provisioning and read for white-label partners. Accepted only on the `/api/v1/orgs/*` operations. |

Organization keys carry one or more **scopes**, listed per operation in the tables below:

| Scope | Grants |
|---|---|
| `read` | Read operations (GET). |
| `draft` | Low-risk writes — completing a task, logging activity, applying a checklist. |
| `actions` | Side-effecting writes — sending email, creating and deleting records, provisioning. |

See [Authentication & API keys](./authentication.mdx) for creating, scoping, rotating, and revoking keys.

## Your first three calls

The documented starting sequence — each answers a question you need before writing real integration code:

```bash
# 1. Does my key work? Echoes your organization and granted scopes.
curl https://api.docjacket.com/api/v1/health \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# 2. What can this key call? Every operation, with a per-key "callable" flag.
curl https://api.docjacket.com/api/v1/catalog \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# 3. What have I been calling? Volume, top operations, and error rate.
curl https://api.docjacket.com/api/v1/usage \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"
```

## Conventions

- **Errors** use one envelope: `{ "error": { "code", "message", "fields"? } }`. Cross-tenant lookups return `404` rather than `403`, so the existence of another organization's data is never disclosed.
- **Rate limits** are per key, per minute, in a fixed window: **300 reads** (GET) and **60 writes** (POST/PUT/PATCH/DELETE). Exceeding a bucket returns `429` with `Retry-After: 60` and `code: "rate_limited"`.
- **Idempotency:** send an `Idempotency-Key` header on side-effecting writes so retries are safe.
- **Versioning is additive by default.** New fields and operations can appear at any time, so **ignore unknown response fields** and do not depend on property order. Breaking changes ship as a new major version at a new path (`/api/v2`) — `/api/v1` is never broken in place. A deprecated version stays available for at least **6 months** after its successor ships.

See [Making requests](./making-requests.mdx) for the full conventions and [Versioning & changes](./versioning.mdx) for the deprecation policy.

## Operations

115 operations across 14 sections.

### Meta

Start here. Verify your key, discover the operations it can call, and see your own call volume.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/catalog` | List operations available to your API key | `read` |
| GET | `/api/v1/health` | Check API key authentication and service health | `read` |
| GET | `/api/v1/next-actions` | Get the ranked next-actions feed (tasks + key dates) | `read` |
| GET | `/api/v1/usage` | Get call-volume, daily breakdown, top operations, and error rate for your API key | `read` |

### Transactions

The transaction record itself — create, list, read, and update deals, and manage the checklists, contingencies, notes, and reminders attached to them.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/transactions` | List or search transactions | `read` |
| POST | `/api/v1/transactions` | Apply a completed extraction — create a new transaction, or attach to an existing one via transactionId | `actions` |
| GET | `/api/v1/transactions/{transactionId}` | Get a transaction by ID | `read` |
| POST | `/api/v1/transactions/{transactionId}/activity` | Log an activity on a transaction | `draft` |
| GET | `/api/v1/transactions/{transactionId}/checklist` | Get aggregate checklist status for a transaction | `read` |
| POST | `/api/v1/transactions/{transactionId}/checklist` | Apply a checklist template to a transaction | `draft` |
| POST | `/api/v1/transactions/{transactionId}/contacts` | Link an existing contact to a transaction with a role | `actions` |
| GET | `/api/v1/transactions/{transactionId}/contingencies` | List open contingencies for a transaction | `read` |
| POST | `/api/v1/transactions/{transactionId}/documents/{documentId}/share` | Share a document to a party on a deal via secure SMS link | `actions` |
| POST | `/api/v1/transactions/{transactionId}/documents/reorder` | Set the order of a transaction's documents | `draft` |
| GET | `/api/v1/transactions/{transactionId}/form-links` | List form links sent on a transaction | `read` |
| GET | `/api/v1/transactions/{transactionId}/intake-status` | Get the intake-progress snapshot for a transaction | `read` |
| GET | `/api/v1/transactions/{transactionId}/key-dates` | List key dates for a transaction | `read` |
| POST | `/api/v1/transactions/{transactionId}/key-dates` | Add key dates to a transaction (batch) | `draft` |
| PATCH | `/api/v1/transactions/{transactionId}/key-dates/{keyDateType}` | Update a key date on a transaction | `draft` |
| GET | `/api/v1/transactions/{transactionId}/merge-fields` | Get all merge field values for a transaction | `read` |
| GET | `/api/v1/transactions/{transactionId}/missing-documents` | List documents missing against the purchase baseline | `read` |
| PATCH | `/api/v1/transactions/{transactionId}/notes` | Set or clear a transaction's general notes | `draft` |
| GET | `/api/v1/transactions/{transactionId}/portal-link` | Get the active client-portal link for a transaction | `read` |
| POST | `/api/v1/transactions/{transactionId}/reminders` | Schedule a reminder on a transaction | `actions` |
| POST | `/api/v1/transactions/{transactionId}/render-template` | Render an email template against a transaction (preview-only) | `read` |
| PATCH | `/api/v1/transactions/{transactionId}/status` | Change a transaction's status (runs the same cascade as the web app) | `actions` |
| POST | `/api/v1/transactions/{transactionId}/status-summary` | Save a status summary on a transaction | `draft` |
| POST | `/api/v1/transactions/{transactionId}/tasks` | Create a task on a transaction | `draft` |
| GET | `/api/v1/transactions/resolve` | Resolve a property reference to ranked transaction matches | `read` |

### Messaging

Email and messaging on a deal — send client updates and document requests, draft and schedule messages, and read the communication log.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/conversations` | List the organization's message threads | `read` |
| POST | `/api/v1/conversations/{threadId}/documents` | Share a document into an existing conversation via secure SMS link | `actions` |
| GET | `/api/v1/conversations/{threadId}/messages` | List messages in a conversation thread | `read` |
| POST | `/api/v1/conversations/{threadId}/messages` | Reply with an SMS in an existing conversation thread | `actions` |
| DELETE | `/api/v1/scheduled-messages/{messageId}` | Cancel a pending scheduled message | `actions` |
| GET | `/api/v1/transactions/{transactionId}/communications` | List every message for a transaction across channels (SMS + email + in-app) | `read` |
| POST | `/api/v1/transactions/{transactionId}/conversations` | Start a conversation by sending the first SMS on a deal | `actions` |
| POST | `/api/v1/transactions/{transactionId}/draft-message` | Generate an AI message draft (never sends) | `draft` |
| POST | `/api/v1/transactions/{transactionId}/emails/agent` | Send an email to an agent on the deal | `actions` |
| POST | `/api/v1/transactions/{transactionId}/emails/agent-followup` | Send a follow-up email to an agent or vendor | `actions` |
| POST | `/api/v1/transactions/{transactionId}/emails/client-update` | Send a status-update email to a deal party | `actions` |
| POST | `/api/v1/transactions/{transactionId}/emails/document-request` | Send a document-request email to a deal party | `actions` |
| POST | `/api/v1/transactions/{transactionId}/messages` | Send an email on a deal (appears in the merged thread as channel=email) | `actions` |
| GET | `/api/v1/transactions/{transactionId}/recipients` | List a deal's participants with role and per-channel availability | `read` |
| GET | `/api/v1/transactions/{transactionId}/reports/communication-log` | Export a transaction's communication log (email + SMS) as a PDF, ZIP (with documents), or JSON | `read` |
| GET | `/api/v1/transactions/{transactionId}/scheduled-messages` | List active scheduled messages on a deal | `read` |
| POST | `/api/v1/transactions/{transactionId}/scheduled-messages` | Schedule an email to send later on a deal | `actions` |

### Key Dates

Deadlines across your book of business. Key dates for a single transaction live under Transactions.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/key-dates/upcoming` | List upcoming key dates across active transactions | `read` |

### Tasks

Task lists on a deal — create, list, comment on, complete, and delete tasks.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/tasks` | List open tasks | `read` |
| POST | `/api/v1/tasks/{taskId}/assign` | Reassign a task to a team member | `draft` |
| GET | `/api/v1/tasks/{taskId}/comments` | List a task's comment thread | `read` |
| POST | `/api/v1/tasks/{taskId}/comments` | Add a comment to a task | `draft` |
| DELETE | `/api/v1/tasks/{taskId}/comments/{commentId}` | Delete a task comment (author only) | `draft` |
| POST | `/api/v1/tasks/{taskId}/complete` | Mark a task complete | `draft` |
| POST | `/api/v1/tasks/{taskId}/reschedule` | Reschedule (postpone) a task's due date | `draft` |
| POST | `/api/v1/tasks/delete` | Delete tasks (bulk, permanent) | `actions` |

### Documents

Files on a deal — request an upload URL, list and classify documents, share them, and manage versions.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/documents` | List recently-uploaded documents with extraction state | `read` |
| POST | `/api/v1/documents` | Upload a document (base64) and start extraction | `actions` |
| PATCH | `/api/v1/documents/{documentId}` | Rename or re-classify a document | `draft` |
| DELETE | `/api/v1/documents/{documentId}` | Soft-delete a document | `draft` |
| POST | `/api/v1/documents/{documentId}/extract` | Start extraction for a document already in DocJacket | `actions` |
| POST | `/api/v1/documents/{documentId}/split` | Split a multi-page PDF into separate documents | `draft` |
| POST | `/api/v1/documents/{documentId}/versions` | Replace a document with a new uploaded version | `draft` |
| GET | `/api/v1/documents/{documentId}/view-url` | Get a short-lived presigned URL to view a document | `read` |
| POST | `/api/v1/documents/classify` | Classify a document by filename and/or content preview | `read` |
| GET | `/api/v1/documents/types` | List the canonical document-type vocabulary | `read` |
| POST | `/api/v1/documents/upload-url` | Get a presigned PUT URL for a document upload | `actions` |

### Extractions

AI contract extraction — kick off a run, poll results, and apply extracted fields to a transaction.

| Method | Path | Description | Scope |
|---|---|---|---|
| POST | `/api/v1/extractions` | Start extraction from a presigned upload | `actions` |
| GET | `/api/v1/extractions/{jobId}` | Get the state and results of an extraction job | `read` |
| GET | `/api/v1/extractions/{jobId}/source-url` | Get a short-lived presigned URL to view an extraction's source PDF | `read` |

### Contacts

People and companies — search, create, and update contacts, and read the role vocabulary they are assigned to.

| Method | Path | Description | Scope |
|---|---|---|---|
| POST | `/api/v1/contact-roles` | Create a custom contact role | `actions` |
| GET | `/api/v1/contacts` | List or search contacts | `read` |
| POST | `/api/v1/contacts` | Create a contact | `actions` |
| GET | `/api/v1/contacts/{contactId}` | Get a contact by ID | `read` |
| GET | `/api/v1/contacts/by-email` | Find contacts by exact email, with their transactions | `read` |
| GET | `/api/v1/contacts/search` | Fuzzy-search contacts by name, email, phone, or company | `read` |

### Disclosure Packages

Seller disclosure packages — assemble documents, activate, invite and revoke recipients, and read access activity.

| Method | Path | Description | Scope |
|---|---|---|---|
| POST | `/api/v1/disclosure-packages` | Create a disclosure package (optionally attach documents and activate) | `actions` |
| GET | `/api/v1/disclosure-packages/{packageId}` | Get a disclosure package with items and recipients | `read` |
| POST | `/api/v1/disclosure-packages/{packageId}/activate` | Activate a disclosure package (idempotent) | `actions` |
| GET | `/api/v1/disclosure-packages/{packageId}/activity` | Get the recipient-activity report for a disclosure package | `read` |
| PUT | `/api/v1/disclosure-packages/{packageId}/documents` | Replace a disclosure package's document list | `actions` |
| POST | `/api/v1/disclosure-packages/{packageId}/recipients` | Invite a recipient to a disclosure package (sends the share email) | `actions` |
| DELETE | `/api/v1/disclosure-packages/{packageId}/recipients/{recipientId}` | Revoke a disclosure recipient's access (idempotent) | `actions` |

### Proposals

AI-generated proposals awaiting human review — list, inspect, approve, and reject.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/proposals` | List pending AI proposals for the organization | `read` |
| GET | `/api/v1/proposals/{id}` | Get one AI proposal with its evidence | `read` |
| POST | `/api/v1/proposals/{id}/approve` | Approve an AI proposal | `actions` |
| PUT | `/api/v1/proposals/{id}/payload` | Edit a proposal's proposed value before approving | `actions` |
| POST | `/api/v1/proposals/{id}/reject` | Reject an AI proposal | `actions` |

### Templates & Forms

Reusable content — email templates, checklist templates, intake forms, and the submissions they produce.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/checklist-templates` | List timeline/checklist templates (org + system) | `read` |
| GET | `/api/v1/email-templates` | List email templates (org + system, active only) | `read` |
| POST | `/api/v1/email-templates` | Create an email template | `actions` |
| GET | `/api/v1/email-templates/{idOrSlug}` | Get an email template by ID or slug | `read` |
| GET | `/api/v1/form-submissions` | List form submissions (org-wide or per transaction) | `read` |
| GET | `/api/v1/form-submissions/{submissionId}` | Get field-level detail for a form submission | `read` |
| GET | `/api/v1/forms/{formId}` | Get a form template with its field list | `read` |

### Webhooks

Push instead of poll — subscribe to events, manage subscriptions, and read the event catalog.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/webhook-events` | List the webhook event types you can subscribe to | `read` |
| GET | `/api/v1/webhooks` | List your webhook subscriptions | `read` |
| POST | `/api/v1/webhooks` | Create a webhook subscription | `actions` |
| GET | `/api/v1/webhooks/{id}` | Get a webhook subscription by ID | `read` |
| PUT | `/api/v1/webhooks/{id}` | Update a webhook subscription | `actions` |
| DELETE | `/api/v1/webhooks/{id}` | Delete a webhook subscription | `actions` |
| GET | `/api/v1/webhooks/{id}/deliveries` | List recent delivery attempts for a webhook subscription | `read` |
| POST | `/api/v1/webhooks/{id}/regenerate-secret` | Rotate a webhook subscription's signing secret | `actions` |
| POST | `/api/v1/webhooks/{id}/test` | Send a test delivery to a webhook subscription | `actions` |

### Organization

Your own organization — settings, the transaction-status vocabulary, notifications, and registered devices.

| Method | Path | Description | Scope |
|---|---|---|---|
| POST | `/api/v1/devices/register` | Register or refresh a mobile device for the authenticated user | `actions` |
| GET | `/api/v1/notifications` | List the signed-in user's notification inbox | `read` |
| GET | `/api/v1/notifications/unread-count` | Unread notification count for the signed-in user | `read` |
| GET | `/api/v1/org/users` | List the organization's assignable team members | `read` |
| GET | `/api/v1/transaction-statuses` | List the organization's selectable transaction statuses | `read` |

### Organizations (Partner)

White-label partner tier. Provision and read the organizations in your book of business. Requires a partner key (rsk_…), not an organization key.

| Method | Path | Description | Scope |
|---|---|---|---|
| GET | `/api/v1/orgs` | List your customer organizations | — |
| POST | `/api/v1/orgs` | Provision a customer organization | — |
| GET | `/api/v1/orgs/{orgId}` | Get a customer organization | — |
| GET | `/api/v1/orgs/{orgId}/entitlements` | Get an organization's plan, seats, and AI fair-use pool state | — |
| GET | `/api/v1/orgs/{orgId}/summary` | Get an organization's activity summary (active deals, tasks due, last activity) | — |
| POST | `/api/v1/orgs/{orgId}/users` | Invite a seat into an organization | — |
| DELETE | `/api/v1/orgs/{orgId}/users/{userId}` | Remove a seat from an organization | — |

## Where to go next

- **[Authentication & API keys](./authentication.mdx)** — create, scope, rotate, and revoke keys.
- **[Making requests](./making-requests.mdx)** — conventions, errors, rate limits, and recipes.
- **[Webhooks](./webhooks.mdx)** — subscribe to events instead of polling, and verify signatures.
- **[Partner API](./reseller.mdx)** — provisioning and read access for white-label resellers.
- **[Versioning & changes](./versioning.mdx)** — how the API evolves without breaking you.
