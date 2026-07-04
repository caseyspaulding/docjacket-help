---
sidebar_label: Versioning & changes
sidebar_position: 6
description: How the DocJacket API evolves — additive by default, breaking changes ship as a new version, with a deprecation window.
---

<!-- Canonical: https://help.docjacket.com/docs/api/versioning -->
<!-- Source: docs/api/versioning.mdx -->

# Versioning & changes

The API is built to evolve without breaking your integration.

## Additive by default

New fields and operations can appear at any time. **Clients must ignore response fields they don't recognize** and must not depend on property order. Adding a field is never a breaking change, so treat responses leniently.

## Breaking changes get a new version

A change that would break an existing client — removing or renaming a field, tightening a type, or changing an error contract — ships only as a **new major version** at a new path (for example `/api/v2`). The current `/api/v1` is never broken in place.

## Deprecation

When a version is deprecated, it remains available for at least **6 months** after its successor ships, and the retirement is announced in the release notes. That gives you a comfortable window to migrate.

## Stay in sync

- The **[live reference](https://api.docjacket.com/reference)** and **[openapi.json](https://api.docjacket.com/openapi.json)** are generated from the deployed API — they're always current.
- `GET /api/v1/catalog` reflects the exact operations available to your key right now.
- Retries are safe: side-effecting writes honor the `Idempotency-Key` header.
