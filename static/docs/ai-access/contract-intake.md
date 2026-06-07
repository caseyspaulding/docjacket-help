---
sidebar_label: Contract Intake
sidebar_position: 6
description: Drop a contract PDF in your AI chat — DocJacket reads the parties, addresses, key dates, and financials, then creates the matching transaction.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/contract-intake -->
<!-- Source: docs/ai-access/contract-intake.mdx -->

# Contract Intake

Drop a contract PDF in chat — extract → review → transaction created in under a minute

DocJacket can read a contract PDF, pull out the parties, addresses, key dates, and financials, and create the matching transaction — all from inside your AI assistant chat. No copying fields out of the PDF by hand, no creating the transaction in the web app, no flipping between windows.

This is the same extraction engine that powers the in-app **[Contract Extraction](/docs/ai-features/contract-extraction)** wizard, exposed through MCP so it works from Claude / Codex / ChatGPT.

## What you can say

Plain English works. The assistant picks the right tools based on what you ask:

> "I just got this contract. Set up the deal." [paste or drop the PDF]
> "Open this purchase agreement and start a transaction."
> "Process this listing agreement."
> "Extract this PDF and review with me before creating the deal."

## How it works

The assistant walks the workflow for you. Behind the scenes:

1. **Upload.** Three paths, in priority order:
   - **(a) If the PDF is already in DocJacket** (DocDrop, email intake, the web wizard, or a prior chat call): the assistant calls `list_documents` to discover it, confirms with you ("found 'fl-buyer-purchase.pdf' uploaded at 9:14am — extract it?"), then `extract_existing_document(documentId)` starts the pipeline. PDF bytes never leave DocJacket. This is the canonical path and works in every assistant (Claude, Cowork, ChatGPT, Codex, Gemini) without any sandbox or paid-plan prerequisites. Just say *"extract the contract I uploaded this morning"* or *"process the file from earlier."*
   - **(b) If you attached the PDF directly in chat on Claude.ai with code execution enabled** (paid plan + `mcp.docjacket.com` added to allowed domains under Settings → Capabilities → Code execution): the assistant uses a two-step presigned upload — `request_upload_url` returns a short-lived URL, the assistant `curl`s the file from its sandbox to blob storage, then `kick_off_extraction` starts the pipeline. PDF bytes never enter the chat conversation.
   - **(c) Tiny PDF (~under 1 MB) attached in chat with no other option:** the assistant falls back to `upload_document_for_extraction`, which carries the bytes as base64 in the tool call. Avoid this path for anything larger — base64 inflates the file ~33% and lives in chat tokens for the rest of the conversation.

   Either way you get an `extractionJobId` and extraction kicks off in the background.
2. **Classify.** `classify_document` runs concurrently to detect the doc type — purchase agreement, listing agreement, lease, addendum, disclosure, etc. The classification informs which extraction prompt and checklist to use.
3. **Poll.** Extraction typically takes **10–60 seconds** depending on document length and complexity. The assistant polls `get_extraction_results` until the job is `completed` (or `failed`, in which case it shows the error and offers to retry).
4. **Review.** The assistant presents the extracted fields in chat:

   ```
   📄 Purchase Agreement — 1247 Pine Street

   Buyer:       Sarah Smith (sarah@example.com)
   Seller:      John & Mary Johnson
   Price:       $625,000 · EMD $10,000
   Closing:     2026-06-15
   Inspection:  2026-05-25 (10 business days)
   Financing:   2026-06-01 (conventional, Wells Fargo)
   Listing:     Mike Park, Park Realty
   Buyer agent: Casey Spaulding, Spaulding Real Estate

   Want me to create the transaction with these fields?
   ```

   You can correct any field inline ("change the closing to June 18"), ask follow-ups ("is Mike Park already in my contacts?"), or just confirm.

5. **Apply.** On your "yes," the assistant calls `apply_extraction`, which atomically:
   - Creates the transaction with type detected (purchase / listing / lease) and side (buy / sell)
   - Adds every extracted party as a transaction contact with their role
   - Sets key dates on the transaction timeline (closing, inspection, financing, appraisal, EMD due)
   - Applies the default checklist for the transaction type + state
   - Schedules reminders for major deadlines

6. **Done.** The assistant comes back with the transaction URL. You can keep going in chat (`get_missing_documents`, `get_next_required_actions`, `send_client_update`, etc.) or pick up in the DocJacket web app — either way the deal is fully set up.

## What gets extracted

| Category | Fields |
|---|---|
| **Property** | Address (street / city / state / zip), MLS number, year built (when present), legal description |
| **Parties** | Buyer(s) and seller(s) with names + email/phone when present; listing agent + brokerage; buyer agent + brokerage; lender contact; title company contact |
| **Financial** | Purchase price, earnest money amount, loan type, loan amount, down payment, seller concessions |
| **Key dates** | Contract date, closing date, inspection deadline, financing deadline, appraisal deadline, EMD due date, possession date, contingency-removal deadlines |
| **Contingencies** | Inspection period (calendar or business days), appraisal contingency, financing contingency, sale-of-buyer's-home contingency |

Standard state-association forms (TAR, CAR, FAR, MLS contracts) extract with highest accuracy. Custom forms work but may need more review.

## What gets created

When you confirm `apply_extraction`:

- ✅ **Transaction** in DocJacket with type + side detected
- ✅ **All parties added** as transaction contacts (existing contacts are matched by email when possible to avoid duplicates)
- ✅ **Key dates** populated on the timeline — inspection, financing, appraisal, closing, EMD due
- ✅ **Default checklist applied** based on transaction type + state (e.g. CA Purchase checklist for a CAR contract in California)
- ✅ **Reminders** scheduled for the major deadlines so you don't miss them

Everything is editable in the DocJacket web app afterward.

## Limitations to know about

- **One PDF per call.** If the customer sent you a multi-document packet (contract + addenda + disclosures stapled into one PDF), use the in-app **[Smart Document Splitting](/docs/ai-features/smart-document-splitting)** wizard first to separate the docs, then run intake on the contract page-range.
- **Purchase deals are most polished.** Listing-side and lease intake work but have less per-state customization. If a field looks wrong, just correct it in the review step.
- **Per-state addenda are on the roadmap.** Today's extraction handles the main contract well; supplemental state forms (CA TDS, FL HOA disclosure, NJ attorney review rider, etc.) are best added through the web app after the transaction is created.
- **Lead-Based Paint flagging is conservative.** The assistant will mention LBP applicability on every deal; if the property was built after 1978, just say "skip LBP" during review.
- **Always review before confirming.** Extraction is very good but not perfect. A 15-second scan catches the occasional misread on a smudgy scan or non-standard form.

## Recovery — if you lost the chat

Extractions don't depend on the chat window — they run server-side and stay queryable. If you closed Claude / Codex / ChatGPT mid-intake, open a new conversation and ask:

> "Check my recent DocJacket extractions."

The assistant calls `get_intake_status` and returns recent jobs with state — `processing`, `completed`, or `failed`. Completed jobs are still applicable; just confirm in the new chat and DocJacket finishes the intake.

## Try it now

The fastest way to see it work:

1. Connect [Claude](/docs/ai-access/claude) or [Codex / ChatGPT](/docs/ai-access/codex) if you haven't.
2. Grab any sample purchase contract PDF.
3. Drop it in chat and say: *"Open this and set up the deal."*
4. Review the extracted fields, fix anything wrong, confirm.
5. Open DocJacket → Transactions — the new deal is there with parties, dates, checklist, and reminders.

## Read more

- **[Connect Claude](/docs/ai-access/claude)** / **[Connect Codex / ChatGPT](/docs/ai-access/codex)** — install the connector if you haven't
- **[Contract Extraction (in-app)](/docs/ai-features/contract-extraction)** — same engine, web-app workflow if you prefer not to use chat
- **[Smart Document Splitting](/docs/ai-features/smart-document-splitting)** — split a multi-doc PDF first if you have one
- **[AI Access overview](/docs/ai-access)** — section index
