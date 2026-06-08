---
sidebar_label: Anchor Dates
sidebar_position: 4
description: How anchor dates work in DocJacket timelines — the reference date key dates calculate from, and how to recalculate when dates change.
---

<!-- Canonical: https://help.docjacket.com/docs/calendar/anchor-dates -->
<!-- Source: docs/calendar/anchor-dates.md -->

# Anchor Dates

An anchor date is the reference point from which dependent key dates are calculated. It's the date that lets DocJacket turn a reusable rule into a real transaction deadline.

## How it works

When you generate a closing timeline from a checklist template, each key date rule can be defined as an offset from an anchor date:

- "Inspection deadline: 10 days after anchor"
- "Appraisal deadline: 21 days after anchor"
- "Closing: 30 days after anchor"

The **anchor date** is usually the **contract date** — the day the purchase agreement was executed. But it could be any date that your key date rules reference.

## Setting the anchor date

When you generate a timeline, DocJacket uses the transaction dates already entered on the deal. The Generate Timeline dialog shows the available anchor dates before you apply the template, including dates that are not set yet.

You can review and adjust key dates later from the closing timeline on the transaction **Overview** tab.

## Why this matters

The anchor date system means you don't have to manually calculate dozens of deadlines. Set the important transaction dates once, and dependent key dates can flow from there. When a closing date gets pushed back or a contract date changes, review the closing timeline and related tasks so the workflow stays aligned.

If the date change affects dependent work, DocJacket may show a cascade preview before saving. The preview helps you confirm which linked task due dates and downstream key dates will move, and which items are locked because they were completed, manually overridden, or missing a reusable rule.

## Common anchor date scenarios

| Scenario | Typical anchor date |
|----------|-------------------|
| Standard residential purchase | Contract execution date |
| New construction | Permit approval date or contract date |
| Commercial lease | Lease commencement date |
| Short sale | Bank approval date |
