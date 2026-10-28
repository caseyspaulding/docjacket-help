---
sidebar_label: Send deal data to a CRM
sidebar_position: 5
description: Send DocJacket deal events (created, status changed, closed) to GoHighLevel or another CRM with a webhook, so your CRM workflows can run rewards programs, client check-ins, and more. No code required.
---

# Send deal data to GoHighLevel or another CRM

When a deal is created, changes status, or closes, DocJacket can send the deal's details to your CRM automatically. Your CRM then runs whatever workflow you have built on top of it: a thank-you text when a deal closes, a rewards-program point for the agent, a check-in with the client 30 days later.

This works through a **webhook**: a web address in your CRM that DocJacket posts to each time something happens. You set it up once, in two places. No code is needed.

:::note Who can do this
Adding or editing a webhook in DocJacket needs a workspace Owner or Admin. Other team members can see the connections page but not change it.
:::

## Step 1: In your CRM, create the webhook URL

### GoHighLevel

GoHighLevel calls this an **Inbound Webhook** trigger, and it lives inside a workflow.

1. In GoHighLevel, create a new workflow (or open an existing one).
2. Add a trigger and choose **Inbound Webhook**.
3. Copy the webhook URL GoHighLevel generates for that workflow.

Leave the workflow open. After step 2 you will send a test from DocJacket, and GoHighLevel will let you pick the incoming fields from that sample.

HighLevel's own article, [Workflow Trigger - Inbound Webhook](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook), has the current screens. Their documentation also describes Inbound Webhook as a premium trigger, so if you do not see it, check your HighLevel plan and settings. Screens change, so follow HighLevel's article if anything here looks different.

### Another CRM

Any CRM that can receive a webhook works the same way: create a "catch hook" or "inbound webhook" and copy its URL. If your CRM cannot receive webhooks directly, put Zapier or Make in the middle:

- **Zapier:** create a Zap, choose **Webhooks by Zapier** as the trigger, select **Catch Hook**, and copy the URL it shows. Then add an action that sends the data to your CRM.
- **Make:** create a Scenario, add a **Webhooks** module, select **Custom webhook**, and copy the URL it shows. Then add a module for your CRM.

## Step 2: In DocJacket, add the webhook

1. Go to **Settings → Connections** (under the **Advanced** group in the settings menu).
2. Click **Add Webhook**.
3. Enter a **Name**, for example "GoHighLevel deals".
4. Paste the URL you copied into **Connection URL**.
5. Under **Events**, tick:
   - `transaction.created`: a new deal is created.
   - `transaction.status_changed`: a deal moves to a different status.
   - `transaction.closed`: a deal moves into a closed status.
6. Optionally tick the task and key-date events too: `task.created`, `task.completed`, `key_date.updated`, `key_date.completed`. These carry less detail than the deal events; see [Webhooks](/docs/api/webhooks).
7. Click **Create**.

`transaction.closed` is sent when a deal enters a closed-type status. That is based on the status's type, not its name, so it works even if you named your closed status something other than "Closed". Closing from the Close button, the status control, the edit form, or a form apply all send it. A closing deal sends both `transaction.status_changed` and `transaction.closed`, so in your CRM use one or the other for "deal closed" automations, not both.

### Send a test

On the connection's row, click the lightning-bolt icon to send a test delivery. DocJacket shows a message with the result, such as "Test delivered (HTTP 200 ...)". The test is a short "This is a test delivery" message, not a deal, so it proves the link works but will not show deal fields.

To get real deal fields into your CRM's sample, create a test deal in DocJacket (or change an existing deal's status). The next delivery carries the full deal details, and your CRM can use it to list the fields to map.

## Step 3: Add custom fields for what your business tracks

If you track something the standard deal fields do not cover, such as **Client Type**, a referral source, or a rewards tier, create it as a custom field:

1. Go to **Settings → Custom Fields** (under the **Transactions** group in the settings menu).
2. Create the field with a **Field Name**. DocJacket suggests a **Merge Code** from the name; it cannot be changed after the field is created.
3. Fill the field in on your deals.

Every custom field has a merge code, and the deal's merge fields endpoint (see [Pulling more data](#pulling-more-data-than-the-webhook-carries)) returns custom fields along with every other smart field. Today, use that endpoint to read custom field values into your CRM.

## What the CRM receives

Every delivery is a `POST` with a JSON body. The deal events add a `deal` object with the full deal snapshot, so your CRM does not need to call back to DocJacket for the basics.

For `transaction.status_changed`, the event-specific part (`data`) is:

| Field | Meaning |
|---|---|
| `id` | The deal's ID |
| `oldStatus` | The status before the change |
| `newStatus` | The status after the change |
| `deal` | The full deal snapshot (table below) |

`transaction.created` carries `id`, `address`, `type`, `status` and `deal`. `transaction.closed` carries `id`, `itemsCancelled` (the number of open items wound down by the close, or `null` when not reported), `closedAt` and `deal`.

The envelope around `data`, the example JSON, and the signing headers are in [Webhooks](/docs/api/webhooks#payload).

### Field mapping table

These are the fields inside `deal`. In your CRM's mapping screen they usually appear as `data.deal.<name>`, for example `data.deal.purchasePrice`. If a value is blank in DocJacket, the field is `null`.

| JSON path (under `deal`) | Type | What it is |
|---|---|---|
| `id` | text (UUID) | The deal's ID in DocJacket |
| `address` | text | Street address of the property |
| `city` | text | Property city |
| `state` | text | Property state |
| `zip` | text | Property ZIP code |
| `county` | text | Property county |
| `side` | text | Which side your team represents, for example `Buyer` |
| `type` | text | Deal type, for example `Purchase` |
| `status` | text | Current status, using your own status names |
| `purchasePrice` | number | Purchase price |
| `closingDate` | date (`YYYY-MM-DD`) | Closing date |
| `tcFee` | number | The transaction coordination fee on the deal |
| `office.id` | text (UUID) | Office ID (`office` is `null` if the deal has no office) |
| `office.name` | text | Office name |
| `assignedTo.id` | text (UUID) | The team member the deal is assigned to (`assignedTo` is `null` if unassigned) |
| `assignedTo.name` | text | Assigned team member's name |
| `assignedTo.email` | text | Assigned team member's email |
| `agents` | list | One entry per agent on the deal; empty if no agent is recorded |
| `agents[].role` | text | `listing` or `buyer` |
| `agents[].name` | text | Agent's name |
| `agents[].email` | text | Agent's email |
| `agents[].brokerage` | text | Agent's brokerage |

Because `agents` is a list, some CRMs need an extra step to read it. If yours does not handle lists, Zapier or Make can pick out the listing agent and the buyer agent for you.

## Pulling more data than the webhook carries

For anything the webhook does not include, the API returns every smart field and custom field for a deal:

```
GET https://api.docjacket.com/api/v1/transactions/{id}/merge-fields
```

Use the `id` from the webhook. The response lists each merge field with its value (`fields`), the number filled in (`populatedCount`), and the fields DocJacket recognizes but has no data for on this deal (`missing`).

It needs an API key with the **read** scope. Create one in **Settings → Advanced → API & AI Access**; see [Authentication & API keys](/docs/api/authentication). In Zapier or Make, add an HTTP request step after the webhook that calls this address with the key as a bearer token.

## Troubleshooting

- **Nothing arrives in the CRM.** On the Connections page, click the history icon on the connection's row to open **Delivery History**. Each delivery shows the event, the response status, how long it took, and any error. If there are no deliveries, the event you are waiting for has not happened yet or was not ticked under **Events**.
- **Deliveries show errors.** Your CRM did not answer with a success response. Check the URL under **Edit**, and that the CRM side is switched on (in GoHighLevel, check the workflow's status).
- **A "Circuit Open" badge appears.** After repeated failures DocJacket pauses the connection so it does not keep hitting a broken address. Fix the cause, then click **Reset Circuit**.
- **The connection shows Inactive.** Use the pause/play icon to turn it back on.

Failed deliveries are retried automatically. The details on retries, the circuit breaker, and signature checking are in [Webhooks](/docs/api/webhooks#retries-circuit-breaker--delivery-history).
