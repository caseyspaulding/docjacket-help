---
sidebar_label: Organization Settings
sidebar_position: 2
description: Manage organization identity, report branding, reminder defaults, scheduled-email timing, automation review behavior, and email subject defaults.
---

<!-- Canonical: https://help.docjacket.com/docs/settings/organization-settings -->
<!-- Source: docs/settings/organization-settings.mdx -->

# Organization Settings

Use **Settings > Organization** for account-wide settings that affect your whole organization.

## Organization identity

The Organization page shows your organization's name, logo, ID, subdomain, creation date, and custom-domain verification status when a custom domain exists.

From here, you can:

- Change the organization logo
- Edit the organization name
- Review the DocJacket subdomain
- Confirm whether a custom domain is verified

## Report branding

Organization settings include report-specific branding controls:

- Theme color
- Report primary color
- Report secondary color
- Report accent color
- Report footer text

Use **Settings > Brand** for the broader brand preset, fonts, public-page attribution, and live brand editor.

## Reminder and scheduled-email defaults

Organization settings also control email defaults used by reminders and scheduled messages:

- **Always CC on Reminders** - Adds one or more addresses to the Cc line of every reminder sent from your organization
- **Default send time for scheduled emails** - Sets the local send hour used when an individual scheduled email does not specify its own time

## Automation review

Use **Review auto-emails before sending** to decide whether organization-wide automation rules should send directly or pause for review.

When this is on, drafts created by status-change or task-completion automation rules land in the topbar **Review queue** before sending. Open the document-tasks icon and use the **Ready for Review** tab to send, edit, or skip them.

Reminders and scheduled emails that your team manually configured still send on their configured schedule. They appear in the Review queue's **Scheduled** tab when they are upcoming, held, or need attention.

## Email subject address prefix

Use **Prefix property address to email subjects** when your team wants transaction emails to start with the property address automatically.

You can choose the address format. The prefix applies as a default in transaction message composers, task-email send dialogs, standalone message compose, and e-signature packet sends. Users can still edit or remove the prefix before sending.
