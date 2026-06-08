---
sidebar_label: Portal Visibility
sidebar_position: 5
description: Show, hide, restrict, and control download access for transaction documents on DocJacket client and agent portals.
---

# Portal Visibility

Portal visibility controls whether a transaction document appears inside a client or agent portal. It is separate from disclosure packages, email attachments, Google Drive export, and e-signature workflows.

Use portal visibility when someone should have ongoing access to a document from their transaction portal. Use a disclosure package when someone needs a specific packet of documents with recipient links, acknowledgement, expiry, and package activity tracking.

## Where to control visibility

1. Open a transaction
2. Go to **Documents**
3. Stay on the **Files** subtab
4. Find the document in **Documents Received**
5. Use the eye icon in the row actions

The eye icon toggles whether the document appears on Agent and Client Portals. When you turn visibility on, DocJacket opens the **Portal Visibility** dialog so you can choose who can see it and whether downloads are allowed.

## Visibility choices

The dialog has three practical choices:

- **Hidden** — The document does not appear on portal links.
- **Visible to all portal contacts** — Leave every contact unchecked. Any active portal contact for that transaction can see the document.
- **Visible to selected portal contacts** — Check one or more portal contacts when only those people should see the document.

Contact restrictions use the transaction's portal contacts. If no contacts have portal access on the transaction, there may be no contact list to choose from yet.

## Download permission

When a document is visible on the portal, you can also choose whether recipients may download it.

- **Download allowed** — Portal viewers can open the document preview/download controls.
- **Download disabled** — The document can still be listed for eligible portal viewers, but download and preview controls are withheld.

Use download-disabled visibility when you want the portal to acknowledge that a document exists without giving the recipient a local copy from the portal.

## What portal viewers see

Portal-visible documents appear in the portal's **Documents** card, grouped by category. The portal respects both rules:

- The document must be portal-visible.
- If specific contacts were selected, the viewer's portal contact must be in that selected list.

Hidden documents, internal files, and documents restricted to other contacts do not appear to that portal viewer.

## Portal visibility vs. other sharing

Portal visibility is not the same as these other document actions:

- **Share** — Creates an individual document share flow from the document row.
- **Share Disclosure Package** — Creates a grouped packet of documents with recipient links and package-level activity.
- **Send for Signature** — Sends an uploaded document or form packet for e-signature.
- **Email/SMS attachment** — Sends a copy or link through a message workflow.
- **Google Drive export** — Copies documents into a linked Drive folder.

Changing portal visibility does not automatically send a portal link. If the recipient does not already have portal access, create or send their portal link from the transaction **Portal** tab or the **Contacts** tab.

## Good patterns

- Share only final or reviewed files unless your team intentionally exposes drafts.
- Restrict buyer-only, seller-only, or agent-only documents to the relevant portal contacts.
- Turn off downloads for sensitive documents when you want visibility without portal download access.
- Use disclosure packages for review packets that need acknowledgement or a clean recipient activity trail.
- Re-check the transaction **Portal** tab preview after changing visibility on sensitive files.
