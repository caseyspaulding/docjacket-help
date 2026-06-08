---
sidebar_label: Offices
sidebar_position: 4
description: Manage DocJacket office locations, states, members, approved forms, branding, and compliance defaults.
---

# Offices

Offices let brokerages and teams manage location-specific configuration. Each office can have its own states, members, branding, approved forms, and signing defaults.

## Creating an office

1. Open **Offices** from the sidebar or from **Settings > Offices**
2. Click **Add Office**
3. Enter the office name and slug
4. Add branding details if needed
5. Save the office

The slug is used for office-specific intake URLs, such as `/intake/{slug}`. The Offices page shows each office as a card with active/inactive status, branding status, state count, member count, and quick actions for opening, editing, managing states, activating/deactivating, or deleting the office.

## Office detail tabs

Inside an office, you can manage:

- **Approved forms** — Office-owned blank PDF templates used for reusable e-signature packets.
- **Members** — Users associated with that office.
- **Branding** — Office-specific display name, logo, accent color, and broker of record.
- **Defaults & compliance** — Signer defaults, reminder settings, broker-approval behavior, and compliance activity.

The office detail header also summarizes approved form count, member count, and configured states. Leaving the **Branding** or **Defaults & compliance** tabs with unsaved edits prompts you before discarding changes.

## Approved forms

The **Approved forms** tab is where an office manages its reusable signing library.

Use it to:

- Upload blank PDF form templates
- Open the field editor
- Save drafts and publish locked versions
- Duplicate similar forms
- Archive forms that should no longer be used for new Signature Requests

See [Approved Form Templates](../documents/approved-form-templates.md) for the full template workflow.

## Branding and broker of record

Use **Branding** to control the office identity shown in signer emails and signing flows:

- Display name
- Logo URL
- Accent color
- Designated broker name
- Designated broker license number

The designated broker fields are required before office-approved e-sign packets can be sent. They also print on signed packet PDFs as the broker footer. If a transaction packet cannot advance because the office is missing its designated broker, fix it on this tab.

## Defaults and compliance

Use **Defaults & compliance** to set:

- Completion CC recipients
- Whether the designated broker must approve after all clients sign
- Default Signature Request expiration
- Default reminder cadence

When broker approval is required, DocJacket adds the designated broker as the final signer on every Signature Request for that office. Broker name and license still live on the **Branding** tab.

## Members

Use **Members** to add existing team members to the office, assign their office role, activate or deactivate their access, or remove them from the office.

Available office roles are:

- **OfficeAdmin**
- **Coordinator**
- **Viewer**

## States

Use **Manage States** to select the states where an office operates and choose a primary state when applicable.

## Tips

- Create separate offices when branding, approved forms, or compliance defaults differ.
- Keep office members current so requests and forms route correctly.
- Set the designated broker before testing form packets.
- Publish templates before expecting them to appear in a transaction's **Forms & signatures** flow.
