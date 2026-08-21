---
sidebar_label: Anchor Dates
sidebar_position: 4
description: How anchor dates work in DocJacket timelines — why Effective Date, Contract Date, Acceptance Date and Binding Agreement Date are four names for one moment, when signed and fully executed differ, and how to rename a key date to your own wording.
---

# Anchor Dates

An anchor date is the reference point from which dependent key dates are calculated. It's the date that lets DocJacket turn a reusable rule into a real transaction deadline.

## How it works

When you generate a closing timeline from a Playbook template, each key date rule can be defined as an offset from an anchor date:

- "Inspection deadline: 10 days after anchor"
- "Appraisal deadline: 21 days after anchor"
- "Closing: 30 days after anchor"

The **anchor date** is usually the date the contract became binding. Which name that date goes by depends on your state — see [Four names for the same date](#four-names-for-the-same-date) below. It can also be any other date your rules reference, such as a listing date or a lease commencement date.

## Setting the anchor date

When you generate a timeline, DocJacket uses the transaction dates already entered on the deal. The Generate Timeline dialog shows the available anchor dates before you apply the template, including dates that are not set yet.

You can review and adjust key dates later from the closing timeline on the transaction **Overview** tab.

## Four names for the same date

Most Playbooks anchor on the moment a contract becomes binding — the point when the last required party has signed. DocJacket carries four separate anchors for that one moment, because states and contract forms call it different things:

| Anchor | Where you'll see it |
|--------|---------------------|
| **Effective Date** | Contracts that use "effective" for the binding moment |
| **Contract Date** | The general-purpose name |
| **Acceptance Date** | The primary anchor in roughly 45 states' Playbooks |
| **Binding Agreement Date** | Contracts that say "binding agreement" |

These are not four different deadlines. Your Playbook uses whichever one your state's contract uses, so you'll normally see only one of them in play on a deal. When a contract is read, DocJacket fills them from the same event — there's nothing extra for you to enter.

:::tip Can't find a date you know you have?
It's almost always here, under one of the other three names. Check all four before assuming it didn't come through.
:::

## When signed and fully executed are different days

Some coordinators track two dates rather than one: the day the contract was signed, and the day it became **fully executed**. Those are often a day apart — an offer signed on a Sunday can become binding on the Monday.

If you work that way, keep them separate rather than merging them:

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
- The **Anchor Date** dropdown inside a date rule is a fixed list and can't be renamed. If none of its wording matches your contract, pick whichever of the four binding-date anchors above your state uses; they point at the same moment.

## Why this matters

The anchor date system means you don't have to manually calculate dozens of deadlines. Set the important transaction dates once, and dependent key dates can flow from there. When a closing date gets pushed back or a contract date changes, review the closing timeline and related tasks so the workflow stays aligned.

If the date change affects dependent work, DocJacket may show a cascade preview before saving. The preview helps you confirm which linked task due dates and downstream key dates will move, and which items are locked because they were completed, manually overridden, or missing a reusable rule.

## Common anchor date scenarios

| Scenario | Typical anchor date |
|----------|-------------------|
| Standard residential purchase | Whichever of the four binding-date anchors your state's contract uses |
| New construction | Permit approval date or contract date |
| Commercial lease | Lease commencement date |
| Short sale | Bank approval date |

## Common questions

### "Is Contract Date the date the contract was accepted?"

Yes. Contract Date is the date of **final acceptance** — the day the last required party signed. If an offer is signed over a weekend and becomes binding on the Monday, Monday is the Contract Date.

Effective Date, Acceptance Date and Binding Agreement Date normally mean that same moment. Your Playbook uses whichever one your state's contract uses, so you'll usually see only one of them in play on a deal. See [Four names for the same date](#four-names-for-the-same-date).

### "Where does the contract executed date go?"

Into whichever of those four anchors your Playbook uses. They're filled from the same event when your contract is read, so there's nothing extra for you to enter.

If you'd rather the deadline read "Executed Date" on screen, [rename it](#use-your-own-wording) and leave the Key Date Type as it is, so reminders and reports still find it.

If you track *fully executed* as its own date, separate from signing, that one belongs on Binding Agreement Date — see [When signed and fully executed are different days](#when-signed-and-fully-executed-are-different-days).

### "How do I change 'Effective Date' to read 'Executed Date'?"

Two different things carry that name, and the answer depends on which one you mean:

- **The deadline in your list.** [Rename it](#use-your-own-wording) — about fifteen seconds.
- **The Anchor Date dropdown inside a date rule.** Those labels are fixed and can't be renamed. But Contract Date, Acceptance Date and Binding Agreement Date all mean the same moment as Effective Date, so choosing the one your state's contract actually uses gives you identical dates with the wording you expect.

### "I uploaded a contract and it didn't set up my dates"

First, check when it happened. **If it was before 6 August 2026, upload the contract again** — this is fixed. Deals whose Playbook anchored on Acceptance Date or Binding Agreement Date didn't receive those dates from the contract, so their deadlines fell back to a standard timeframe and were marked **Estimated**. Acceptance Date is the primary anchor in roughly 45 states, so this affected a lot of deals.

If the dates are still empty after re-uploading, that's a different problem — contact support and include the deal and the contract.

:::note An "Estimated" badge isn't an error
It means the deadline wasn't found in the contract, so DocJacket calculated it from a standard timeframe. Open the key date and set it to confirm.
:::
