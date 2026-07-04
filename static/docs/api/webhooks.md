---
sidebar_label: Webhooks
sidebar_position: 4
description: Subscribe to DocJacket events over webhooks — manage subscriptions with your API key or the Connections UI, verify the HMAC signature, and handle retries and delivery history.
---

<!-- Canonical: https://help.docjacket.com/docs/api/webhooks -->
<!-- Source: docs/api/webhooks.mdx -->

# Webhooks

Webhooks push real-time events to your endpoint — a new transaction, a completed extraction, a viewed disclosure — so you can react instead of polling. Send them to Zapier, Slack, your own service, or any HTTPS URL.

You can manage webhook subscriptions two ways:

- **In DocJacket** — **Settings → Connections** (create, edit, view delivery stats).
- **Via the API** — with your `mcp_at_` key, for fully programmatic setup.

## Manage subscriptions with the API

```bash
# List the event types you can subscribe to
curl https://api.docjacket.com/api/v1/webhook-events \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"

# Create a subscription (requires the `actions` scope)
curl -X POST https://api.docjacket.com/api/v1/webhooks \
  -H "Authorization: Bearer mcp_at_YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ops Slack relay",
    "url": "https://example.com/hooks/docjacket",
    "events": ["extraction.completed", "task.completed"]
  }'
```

The create response includes the **signing secret in full, exactly once** — store it; you'll need it to verify signatures. Later reads only show a masked prefix. Other operations:

| Method | Path | Scope | Purpose |
|---|---|---|---|
| GET | `/api/v1/webhooks` | `read` | List your subscriptions |
| GET | `/api/v1/webhooks/{id}` | `read` | Get one subscription |
| POST | `/api/v1/webhooks` | `actions` | Create a subscription |
| PUT | `/api/v1/webhooks/{id}` | `actions` | Update url / events / active |
| DELETE | `/api/v1/webhooks/{id}` | `actions` | Delete a subscription |
| POST | `/api/v1/webhooks/{id}/test` | `actions` | Fire a test delivery now |
| POST | `/api/v1/webhooks/{id}/regenerate-secret` | `actions` | Rotate the signing secret |
| GET | `/api/v1/webhooks/{id}/deliveries` | `read` | Recent delivery attempts |
| GET | `/api/v1/webhook-events` | `read` | The event catalog |

Subscribe to `"*"` to receive every event type.

## Event catalog

| Event | Fires when |
|---|---|
| `transaction.created` | A new transaction is created |
| `transaction.status_changed` | A transaction's status changes |
| `transaction.closed` | A transaction is closed |
| `document.uploaded` | A document is uploaded to a transaction |
| `document.deleted` | A document is deleted |
| `task.created` | A new task is created |
| `task.completed` | A task is marked complete |
| `extraction.completed` | A document extraction job finishes (includes `jobId`, `status`, `confidence`) |
| `key_date.updated` | A key date is added or changed |
| `key_date.completed` | A key date is marked complete |
| `contact.created` | A new contact is created |
| `disclosure.recipient_viewed` | A disclosure-package recipient opens the disclosure |
| `form.submission_received` | A public form submission arrives |

`extraction.completed` turns a document upload into a round-trip: subscribe, upload via the API, and receive the signed callback with the `jobId` and confidence when extraction finishes — no polling.

## Payload

Every delivery is a `POST` with a JSON body in this envelope:

```json
{
  "eventType": "extraction.completed",
  "eventId": "b1c2…",
  "timestamp": "2026-07-04T13:00:00Z",
  "organizationId": "org-…",
  "userId": null,
  "data": {
    "jobId": "…",
    "transactionId": "…",
    "documentId": "…",
    "status": "completed",
    "confidence": 0.98,
    "requiresReview": false
  }
}
```

Payloads are **thin** — they carry IDs and a few key fields. Fetch the full resource from the REST API using the IDs when you need more. Fields may be added over time; ignore ones you don't recognize.

Each request also carries these headers:

| Header | Value |
|---|---|
| `X-Webhook-Signature` | `sha256=<hmac-hex>` — see below |
| `X-Webhook-Event-Type` | e.g. `extraction.completed` |
| `X-Webhook-Event-Id` | Unique per delivery attempt |
| `X-Webhook-Timestamp` | ISO 8601 send time |

## Verify the signature

DocJacket signs every payload with HMAC-SHA256 using your subscription's secret. **Always verify** before trusting a delivery — compute the HMAC of the raw request body and compare it to the `X-Webhook-Signature` header.

```js
// Node.js (Express) — use the RAW body, not the parsed JSON

function verify(rawBody, signatureHeader, secret) {
  const expected =
    'sha256=' + crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
  const a = Buffer.from(signatureHeader);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

app.post('/hooks/docjacket',
  express.raw({ type: 'application/json' }),
  (req, res) => {
    if (!verify(req.body, req.get('X-Webhook-Signature'), process.env.DJ_WEBHOOK_SECRET)) {
      return res.status(401).end();
    }
    const event = JSON.parse(req.body);
    // …handle event.eventType / event.data…
    res.status(200).end();
  });
```

```python
# Python (Flask)

def verify(raw_body: bytes, signature_header: str, secret: str) -> bool:
    expected = "sha256=" + hmac.new(secret.encode(), raw_body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature_header or "")
```

Return a `2xx` quickly (do heavy work asynchronously). Any non-`2xx` — or a timeout — counts as a failed delivery.

## Retries, circuit breaker & delivery history

- **Retries** — failed deliveries retry with backoff.
- **Circuit breaker** — if an endpoint fails repeatedly, DocJacket automatically pauses it to avoid flooding a down service. Re-enable it (and reset the breaker) once you've fixed the endpoint.
- **Delivery history** — `GET /api/v1/webhooks/{id}/deliveries` (or the Connections page) shows recent attempts with status codes, latency, errors, and the next retry time, so you can self-debug.

## Test it

Fire a test delivery to confirm your endpoint and signature check work before going live:

```bash
curl -X POST https://api.docjacket.com/api/v1/webhooks/SUBSCRIPTION_ID/test \
  -H "Authorization: Bearer mcp_at_YOUR_KEY"
```
