---
sidebar_label: Anchor Dates
sidebar_position: 4
description: How anchor dates work in DocJacket timelines — why Contract Date and Effective Date are two different days, which anchors mean the binding moment, and how to rename a key date to your own wording.
---

<!-- Canonical: https://help.docjacket.com/docs/calendar/anchor-dates -->
<!-- Source: docs/calendar/anchor-dates.md -->

# Anchor Dates

An anchor date is the reference point from which dependent key dates are calculated. It's the date that lets DocJacket turn a reusable rule into a real transaction deadline.

## How it works

When you generate a closing timeline from a Playbook template, each key date rule can be defined as an offset from an anchor date:

- "Inspection deadline: 10 days after anchor"
- "Appraisal deadline: 21 days after anchor"
- "Closing: 30 days after anchor"

The **anchor date** is usually the date the contract became binding. Which name that date goes by depends on your state — see [Which date your deadlines count from](#which-date-your-deadlines-count-from) below. It can also be any other date your rules reference, such as a listing date or a lease commencement date.

## Setting the anchor date

When you generate a timeline, DocJacket uses the transaction dates already entered on the deal. The Generate Timeline dialog shows the available anchor dates before you apply the template, including dates that are not set yet.

You can review and adjust key dates later from the closing timeline on the transaction **Overview** tab.

## Which date your deadlines count from

A purchase contract has **two** signature events, and DocJacket records them as two different dates:

| The event | The date | When |
|-----------|----------|------|
| The **buyer signs the offer** | **Contract Date** | The earlier of the two |
| The **seller accepts** — the contract is now binding | **Effective Date** | Usually 1–3 days later |

**Deadlines count from the binding moment**, not from the offer. An offer signed on a Friday and accepted on the Monday gives a 10-day inspection deadline that runs from Monday.

Three anchor names all mean that same binding moment, because states and contract forms word it differently:

| Anchor | Where you'll see it |
|--------|---------------------|
| **Effective Date** | Contracts that use "effective" for the binding moment |
| **Acceptance Date** | The primary anchor in roughly 45 states' Playbooks |
| **Binding Agreement Date** | Contracts that say "binding agreement" |

Your Playbook uses whichever one your state's contract uses, so you'll normally see only one of those three in play on a deal. **Contract Date is not one of them** — it's the separate, earlier offer date.

:::warning Don't swap Contract Date in for one of the other three
They aren't interchangeable. Substituting Contract Date for Effective Date in a date rule moves every deadline built on it, usually one to three days early.
:::

:::tip Seeing both Contract Date and Effective Date on a deal, a day apart?
That's correct, and it's what a contract with two signature dates should produce. The buyer signed one day; the seller accepted the next.
:::

## When signed and fully executed are different days

This is the normal case rather than the exception: the day the offer was signed and the day it became **fully executed** are usually different, often by a day — an offer signed on a Sunday can become binding on the Monday.

Keep them separate rather than merging them:

| What you're recording | Key Date Type to use |
|-----------------------|----------------------|
| The day it was signed | Contract Date |
| The day it became fully executed and binding | Binding Agreement Date |

Naming a key date "Executed Contract" or "Fully Executed" sets Binding Agreement Date for you automatically.

## Use your own wording

You don't have to adopt DocJacket's vocabulary. A key date has a **Name** that you choose and a **Key Date Type** that connects it to the rest of the system, and the two are independent.

To rename one:

1. Go to **Templates → Key Date Library** (`/library/milestones`).
2. Find the key date and click the pencil to edit it.
3. Change **Name** to whatever your brokerage calls it.
4. Leave **Key Date Type** as it is.
5. Save.

:::caution Leave the Key Date Type set
The Key Date Type is how reminders, reports, calendar sync, and FollowUpBoss sync find a deadline. Renaming is safe. Clearing the type turns the date into a one-off with no standard meaning, and reminders will no longer find it.
:::

Two things to know about renaming:

- It applies to **new** deals. A deal that's already open keeps the name it had when it was created — rename the key date on that deal directly if you need to change a live one.
- The **Anchor Date** dropdown inside a date rule is a fixed list and can't be renamed. If none of its wording matches your contract, pick whichever of the three binding-date anchors above your state uses — Effective, Acceptance or Binding Agreement. They point at the same moment; Contract Date does not.

## Why this matters

The anchor date system means you don't have to manually calculate dozens of deadlines. Set the important transaction dates once, and dependent key dates can flow from there. When a closing date gets pushed back or a contract date changes, review the closing timeline and related tasks so the workflow stays aligned.

If the date change affects dependent work, DocJacket may show a cascade preview before saving. The preview helps you confirm which linked task due dates and downstream key dates will move, and which items are locked because they were completed, manually overridden, or missing a reusable rule.

## Common anchor date scenarios

| Scenario | Typical anchor date |
|----------|-------------------|
| Standard residential purchase | Whichever of the three binding-date anchors your state's contract uses — Effective, Acceptance or Binding Agreement |
| New construction | Permit approval date or contract date |
| Commercial lease | Lease commencement date |
| Short sale | Bank approval date |

## Common questions

### "Is Contract Date the date the contract was accepted?"

No — and this one catches people out. **Contract Date is the day the buyer signed the offer.** The date of final acceptance, when the last required party signed and the contract became binding, is the **Effective Date**.

If an offer is signed on the Friday and accepted on the Monday, Friday is the Contract Date and Monday is the Effective Date. Your deadlines count from Monday.

Acceptance Date and Binding Agreement Date are other names for that same binding moment; your Playbook uses whichever one your state's contract uses. See [Which date your deadlines count from](#which-date-your-deadlines-count-from).

### "Where does the contract executed date go?"

*Executed* means the contract is binding, so it goes to the binding anchor your Playbook uses — Effective Date, Acceptance Date or Binding Agreement Date. Not Contract Date, which is the earlier offer date.

If you'd rather the deadline read "Executed Date" on screen, [rename it](#use-your-own-wording) and leave the Key Date Type as it is, so reminders and reports still find it.

If you track *fully executed* as its own date, separate from signing, that one belongs on Binding Agreement Date — see [When signed and fully executed are different days](#when-signed-and-fully-executed-are-different-days).

### "How do I change 'Effective Date' to read 'Executed Date'?"

Two different things carry that name, and the answer depends on which one you mean:

- **The deadline in your list.** [Rename it](#use-your-own-wording) — about fifteen seconds.
- **The Anchor Date dropdown inside a date rule.** Those labels are fixed and can't be renamed. **Acceptance Date** and **Binding Agreement Date** mean the same binding moment as Effective Date, so you can pick whichever your state's contract uses. Don't reach for **Contract Date** here — it's the earlier offer date, and swapping it in moves your deadlines.

### "I uploaded a contract and it didn't set up my dates"

First, check when it happened. **If it was before 6 August 2026, upload the contract again** — this is fixed. Deals whose Playbook anchored on Acceptance Date or Binding Agreement Date didn't receive those dates from the contract, so their deadlines fell back to a standard timeframe and were marked **Estimated**. Acceptance Date is the primary anchor in roughly 45 states, so this affected a lot of deals.

If the dates are still empty after re-uploading, that's a different problem — contact support and include the deal and the contract.

:::note An "Estimated" badge isn't an error
It means the deadline wasn't found in the contract, so DocJacket calculated it from a standard timeframe. Open the key date and set it to confirm.
:::
