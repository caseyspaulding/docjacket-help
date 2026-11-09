---
sidebar_label: Reports page
sidebar_position: 5
description: What is on the sidebar Reports page - the Overview, Agents, Workflow, Payouts, and CMA tabs, the period picker, per-tab PDFs, and the Export deals CSV.
---

<!-- Canonical: https://help.docjacket.com/docs/reports/reports-page -->
<!-- Source: docs/reports/reports-page.md -->

# The Reports page: what's included

The **Reports** page is DocJacket's organization-wide analytics: closed volume, agent leaderboard, task performance, TC income and payouts, and a CMA builder. It is separate from a single deal's **Reports** tab, which creates a report for one transaction (see [Transaction Reports](./transaction-reports.mdx)).

## Where to find it

In the left sidebar, open **More** and click **Reports**. The page is titled "Reports" with the subtitle "Transaction analytics and performance metrics".

## Period picker, PDF, and Export

On every tab except CMA, the page header has:

- A **period picker**: This Month, Last Month, This Quarter, Last Quarter, This Year, Last Year, or Custom Range (pick a From and To date).
- **Export**, which opens the Export deals dialog (hidden on the Payouts tab). See [Export deals to CSV](#export-deals-to-csv).
- A PDF button that downloads the current tab as a PDF. Its label changes with the tab: **Overview PDF**, **Agents PDF**, **Workflow PDF**, or **Payouts PDF**.

## The five tabs

### Overview

- A summary bar with **Closed Volume**, **Transactions Closed**, **Active Pipeline**, and **Total Commission** (shown when it is above zero).
- **Transaction Performance**: **Avg Days to Close** and **Transactions Closed**, each compared with the prior period, plus **Active Volume** and **On-Time Close Rate**.
- **Business Summary**: **New Transactions**, closed deals, **Active Volume**, and **Documents Processed**, plus a **Monthly Closings (Last 6 Months)** chart with a year-to-date badge.

### Agents

The **Agent Leaderboard** has one row per agent with these columns: Agent, Deals, Closed, Cancelled, Fees Paid, Pipeline, Closed Vol, Avg Closed, and Assists. Use **Columns** to show or hide columns. A definitions line under the table explains each one, for example that Closed means a closed status with a closing date in the period and Pipeline means all currently active or under-contract deals.

Click an agent to see their deals: Address, Role, Status, Price, and Closing Date.

### Workflow

**Workflow Efficiency** shows a **Task On-Time Rate** gauge, **Avg Days Overdue** (late tasks only), and **Tasks Completed**. The **Top Bottlenecks** table lists the tasks that run late most often, with columns Task, Avg Late, and # (how many times).

### Payouts

- **Collected TC Income**: TC fee payments received. This is the only Payouts section the period picker changes.
- **Expected TC Income**: TC fees still owed.
- **Projected Payouts**: what is expected to pay out over the next several months.
- **Outstanding TC Fees**: unpaid TC fees across the organization.

Expected TC Income, Projected Payouts, and Outstanding TC Fees keep their own fixed time horizons and do not follow the period picker.

### CMA

The Create CMA wizard, built into the page. It is also available directly at `/reports/cma`. The period picker, Export, and PDF buttons are hidden on this tab.

## Export deals to CSV

Click **Export** to open the **Export deals** dialog. It has its own settings, so changing them never moves the page's period:

- **Period**: the same presets as the page, or a custom range.
- **Date basis**: **Closing date** or **Created date**.
- **Deals**: **Closed only** or **All statuses**.
- **Include archived deals**.

Click **Download CSV**. The file has one row per deal with these columns: Address, Status, Type, Side, Listing Agent, Buyer's Agent, Buyer, Seller, Sales Price, Commission, TC Fee, TC Fee Paid (capped at fee amount), TC Fee Balance, Last TC Payment Date, Listing Date, Closing Date, Created Date, and Archived.

The TC fee columns depend on who exports. Owners and admins get the TC fee columns for every deal. Other team members get them only for fees billed to themselves. Everyone else gets blank TC fee cells. The deal rows themselves are the same for everyone.

**TC Fee Paid** is capped at each fee's amount, so it can read lower than **Collected TC Income** on the Payouts tab, which counts all cash received.

## One deal's reports

For a single deal's Transaction Summary, Commission Statement, Print Checklist, or file record, use the deal's own **Reports** tab. See [Transaction Reports](./transaction-reports.mdx).
