---
sidebar_label: Branding and Domains
sidebar_position: 5
description: Customize the Front Door theme and connect a custom domain.
---

<!-- Canonical: https://help.docjacket.com/docs/front-door/branding-and-domains -->
<!-- Source: docs/front-door/branding-and-domains.md -->

# Branding and Domains

Front Door uses your DocJacket brand settings so the public page, intake forms, and related public surfaces feel consistent.

## Theme

Go to **Front Door > Theme** to edit the page theme.

The theme editor controls brand settings such as colors, fonts, hero style, and layout. Changes stay in sync with **Settings > Brand and Profile**, so updating Front Door branding also updates other branded surfaces that use the same brand profile.

The page includes a live preview so you can see how changes affect the public Front Door.

## Custom domain

Go to **Front Door > Domain** to connect your own domain, such as `www.yourbrand.com`.

Custom domains are available on paid plans. If your organization is on the free tier, DocJacket shows an upgrade prompt before the domain setup form.

## DNS setup

After you enter a domain, DocJacket shows the DNS records to add.

For a subdomain such as `www.yourbrand.com`, add the CNAME record shown on the page.

For an apex domain such as `yourbrand.com`, add the A records shown on the page. Some DNS providers also support CNAME flattening with ALIAS or ANAME records.

Most DNS providers propagate within a few minutes, but some can take longer.

## Domain status

Domain statuses include:

- **Waiting for DNS** — The domain is saved, but DNS has not resolved yet
- **Verifying** — DocJacket is checking the domain
- **Live** — The domain is active with SSL
- **Failed** — Verification failed; review the failure message and DNS records

Use **Check status** after adding DNS records. DocJacket also keeps checking while the domain is waiting or verifying.

You can remove a custom domain if traffic should stop resolving to your Front Door.
