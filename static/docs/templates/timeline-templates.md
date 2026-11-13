---
sidebar_label: Playbooks
sidebar_position: 2
description: Create Playbook templates with key dates, tasks, and automations — organized by transaction type, state, category, and side of the deal.
---

<!-- Canonical: https://help.docjacket.com/docs/templates/timeline-templates -->
<!-- Source: docs/templates/timeline-templates.md -->

# Playbooks

Playbooks define the reusable workflow for a transaction type. A Playbook can include **Key Dates**, **Tasks**, and **Automations** so a new transaction starts with the right deadlines, task list, and prepared emails.

:::info Playbooks were previously called Checklists
If you set your workflow up before August 2026, or you're following older notes, this
is the same feature under a new name. **Templates → Playbooks** is where your
checklists live — nothing was moved or lost, and your existing ones are all under the
**My Playbooks** tab.
:::

## Is a checklist different from a Playbook?

**No. It's the same feature, renamed in August 2026.** There is no separate checklist object and no "checklist inside a Playbook." What used to be called a checklist is now called a Playbook.

One Playbook holds everything for a deal type:

- **Key dates**
- **Tasks** (with phases, due-date rules, and repeating schedules)
- **Automations** (emails, texts, and key-date reminders)
- **Required documents**: attach one or more Required Documents Lists in the Playbook builder's **Required documents** section

You don't need to bundle a checklist and a document list together, because the Playbook already holds both. If you see older notes about "checklists and Playbooks" as two different things, or about Playbooks being a folder that wraps a checklist, those describe an older setup.

## "I don't see Checklists on the Templates page"

If you are looking for **Checklists** and don't see that card on the Templates page,
you're in the right place — that card is now **Playbooks**. It sits at the top of the
Templates page with a **Formerly Checklists** label next to its name, above the
Communication section that holds Email Templates and Email Signatures.

Your saved checklist templates are all inside it, under the **My Playbooks** tab.
Nothing was moved or lost, and no plan or permission level hides the Checklists page —
if you can see Email Templates, the Playbooks card is on the same page.

The key idea:

- **Key Date Library** defines reusable date rules
- **Playbooks** bundle those key dates with tasks and automations
- **Transactions** apply a Playbook to create real key dates and real tasks

This is the same product category as a reusable date-template workflow: set the date logic once, then apply it to future transactions. In DocJacket, that logic lives in the **Key Date Library**, and the Playbook adds the work that depends on those dates.

## Playbook list page

Go to **Templates → Playbooks** to manage Playbook templates.

![Playbooks list page with My Playbooks, DocJacket Playbooks, filters, default Playbook guidance, and Playbook cards](/img/templates/checklists-list.png)

The page has two tabs:

- **My Playbooks** — Playbooks your organization owns and can edit
- **DocJacket Playbooks** — ready-made Playbooks DocJacket provides, available to every organization

DocJacket Playbooks are read-only. Use **Copy to My Playbooks** or **Duplicate** before customizing key dates, tasks, or automations. Your copy shows a **Copied from** line so you can always tell where it started.

Use the filters to narrow the list by:

- **Transaction Type** — Sale, Listing, or both
- **Property Category** — Residential, Commercial, Land, Lease, New Build, and other categories
- **Status** — Active or Inactive
- **Complexity** — Lite or Standard
- **Search** — Playbook name or description

On **My Playbooks**, you can mark an active Playbook as the default. Default Playbooks can auto-apply when creating transactions for the matching state and type.

An **Inactive** Playbook can't auto-apply and can't be set as the default. To bring one back, click **Activate** on its row in the list — the Inactive badge clears immediately, and the Playbook is usable and default-eligible again. (DocJacket system Playbooks can't be activated or deactivated; copy one to My Playbooks instead.)

## Creating a Playbook template

1. Go to **Templates → Playbooks**
2. Click **New Playbook**
3. Add a name, transaction type, property category, state, side, and description
4. Save the template to open the Playbook builder
5. Add key dates from the **Key Date Library**, or create new key dates while building
6. Add tasks and tie them to the key dates they belong to
7. Add task timing rules, priorities, phases, and sections
8. Add automations, such as scheduled emails or completion rules
9. Use **Test template** to preview the Playbook against a sample effective date
10. Save the template

The builder title may say **Create Playbook** or **Edit Playbook**. The Templates hub and list page label this area **Playbooks**.

These steps are for **Start blank**. To have the Playbook assistant draft one from a description or your existing checklist, choose **New Playbook → ✦ Create with AI** and see [Build a Playbook with AI](./build-a-playbook-with-ai.md).

## Template settings

The builder shows a **Template Summary** card with the Playbook name, category, state, side, key-date count, task count, and automation count.

![Playbook builder with Template Summary, task tabs, AI Task Generator, Import CSV, and task rows grouped by key date](/img/templates/checklist-builder.png)

Use **Edit template settings** to change:

- Name
- Transaction Type
- Property Category
- State
- Side
- Description

DocJacket Playbooks are read-only. Copy one into **My Playbooks** before editing settings, key dates, tasks, or automations.

## Adding key dates

Key dates organize the Playbook. For each key date you can define:

- Name
- Description
- Key Date Type
- Side
- Category
- Priority
- Date rule type
- Anchor date field
- Offset direction
- Offset days
- Calendar-day or business-day calculation
- Whether the date is required

Use **Add Key Date** in the builder. The drawer has two modes:

- **Create New** — define a new key date rule directly inside the Playbook
- **From Library** — pick an existing reusable key date from the Key Date Library

If a shared key date needs customization, duplicate it first and use the copy in your Playbook.

### One key date per Key Date Type

A Playbook holds one key date for each Key Date Type, because a deal keeps one of each. If you try to add a second date with a type the Playbook already has, DocJacket doesn't add it and the message names the date that already holds the type.

- **Create New** — the message offers **Add without a key date type**, which adds the date as a custom one. You can also rename it or give it a different Key Date Type. If the name alone makes DocJacket treat it as a governed type, a blue hint says, for example, "This Playbook already has a Closing Date ("Close of Escrow"). Rename this one to keep it custom."
- **From Library** — use the key date that is already in the Playbook, or change the library key date's Key Date Type in **My Key Dates** and add it again.

## Adding tasks

Playbook tasks are the work your team completes during the transaction. Tasks can include:

- Name and description
- Phase and section
- Priority
- Assigned owner
- Due-date anchor
- Offset days and direction
- Calendar-day or business-day calculation
- Linked key dates
- Document category
- [Subtasks](#subtasks)
- Scheduled emails
- On-completion email actions
- **Conditional Task** — only create this task when the deal matches a condition (see [Conditional tasks](#conditional-tasks))

Tasks should reference the key date they depend on. For example, a task can be due 3 days before **Final Walkthrough** instead of hardcoding the same rule from **Closing Date**.

To add a task, click **Add Task**, fill in the panel that opens on the right, and click **Add task** at the bottom of the panel — it is also in the panel's header strip. That button is what saves the task to the Playbook; while a new task is unsaved the panel shows a **Not added yet** badge. The page-level **Save** at the top also adds an open task before it saves the Playbook settings. Closing the panel with **×** or **Cancel** discards a new task (DocJacket asks first if you have typed anything).

### Subtasks

A saved task can carry a list of subtasks: small checks that appear under the task on every deal it is added to. Open the task, find the **Subtasks** section, click **Add subtask**, type a name and press **Enter**. A subtask can have a due date rule, **Assign to role**, a condition, a priority and a description, but no phase, repeat, key date link, portal setting or emails. If the main task isn't added to a deal, its subtasks aren't either.

In the task lists, subtasks are indented under their main task, and the main task shows an **N subtasks** chip. Deleting a main task also deletes its subtasks, and DocJacket says so before you confirm. The full steps, and what a subtask can and can't have, are in [Subtasks](../tasks/subtasks.mdx#adding-subtasks-to-a-task-in-a-playbook).

### Scheduled emails need a To recipient

Gmail and Outlook will not send an email with nobody in **To**, and a Playbook's scheduled email is copied onto every deal built from it. So DocJacket will not save a scheduled email in a Playbook without a **To** recipient. If you try, you see "Add a To recipient first" and the form stays open. The email template's own To recipients count, so you only need to pick one on the scheduled email when its template names none.

When you add a task with an email that sends before, on, or after the due date, the **Add task** panel has a **Send to** picker for that scheduled email. While the picker has no To and the chosen template names no recipients, both **Add task** buttons are disabled and the panel says "Add a To recipient for the scheduled email". Pick a recipient, or choose a template that names one. If the email still has no To when the task is added, the task is saved but the scheduled email is not, and DocJacket tells you to add it under **Scheduled emails**. Emails that send when the task is done are not affected.

A scheduled email saved before this rule can still have no To. In the **Scheduled emails** section it shows an amber **No recipient, will not send** chip. The Playbook still opens normally. Click **Edit** on the email and add a To recipient. Emails whose template names a To do not show the chip.

![Playbook task editor showing task details, priority, phase, due-date context, and an automation count on the selected task](/img/templates/checklist-task-automation.png)

## A task due the same day as a key date

Yes — a task can be due **on** a key date, not just before or after it. Enter **0** days:

1. Open the task in the Playbook builder
2. Under **When it's due**, pick the key date in **Due date is based on** (for example **Closing Date** or **Inspection Deadline**)
3. Type **0** in **Days**. **Before / after** doesn't matter when the offset is zero
4. The **Preview** reads *"This task will be due on Closing Date."* and the task row shows **Due on Closing Date**

Use this for same-day work such as "Confirm wire received" on the closing date or "Send inspection notice" on the inspection deadline. Type the 0 — if you leave **Days** empty, the preview reads *"This task will be due during …"* instead.

A zero-day task lands on exactly the key date's day, even when **Count using** is **Business days**. If that day is a weekend or holiday, the task stays there unless you set **Weekend / holiday handling** to **Use next business day** or **Use previous business day**. When the key date moves on a deal, the task's due date moves with it (unless someone pinned the task's date by hand).

## Repeating tasks

A Playbook task can recur: every week, or every 2 weeks, on the day you choose. This is how you build a weekly compliance check, a "Friday update to the client" email task, or any other every-Monday / every-Friday routine into every deal.

In the task panel, under **Task Details**, set **Repeat** to **Weekly** or **Every 2 weeks** and pick the day in **On**.

A task either repeats **or** has its due date based on a key date, never both. If **Due date is based on** (under **When it's due**) is set to a key date, the **Repeat** control is hidden. Clear that anchor to make the task repeat. DocJacket won't save a task that has both.

When you apply the Playbook to a deal, the first occurrence is due on the first matching day on or after the day you apply it (apply on a Friday and a "weekly on Friday" task is due that same day). Completing an occurrence creates the next one. The series ends when the deal closes. See [Repeating tasks](../tasks/creating-tasks.mdx#repeating-tasks-recurring-weekly-tasks) for how occurrences behave on a deal.

## Playbook phases

Every Playbook task can be given a **Playbook phase**. The phase list is fixed. These are the phases, in order:

| Phase | Typical work |
|---|---|
| **Pre-Listing** | Listing agreement, photos, disclosures, prep before the listing goes live |
| **Active Listing** | MLS, showings, feedback, and offers while the listing is on the market |
| **Intake** | Open the file, confirm the parties, collect the executed contract |
| **Due Diligence** | Inspections, repair negotiation, contingency tracking |
| **Financing** | Loan application, appraisal, loan approval |
| **Pre-Closing** | Title, HOA/estoppel, walkthrough, closing disclosure, scheduling the closing |
| **Closing** | Closing day itself: signing, funding, recording, keys |
| **Post-Close** | Deliver documents, request a review, close out the file |

**You can't add, rename, or delete phases.** There is no "add phase" button, and the **Playbook phase** dropdown only offers the eight phases above. If your listing tasks don't seem to fit, use **Pre-Listing** and **Active Listing**; those are the listing phases.

When you apply a Playbook, the apply dialog groups its tasks by phase. Click **Clear** on a phase to leave its tasks out, or **All** to put them back.

## Conditional tasks

Some tasks only apply to certain deals — a septic inspection, an HOA document review,
a task that only matters on a cash deal or a financed one. **You do not need a separate
Playbook for each combination.** Build one Playbook with every task in it, and mark the
situational ones conditional. A conditional task whose condition isn't met is **held
back** when you apply the Playbook, so the deal only gets the work that applies. If the
deal changes later, DocJacket offers the held-back task back to you
(see [Held-back tasks and key dates](#held-back-tasks-and-key-dates)).

To make a task conditional, open the task in the Playbook builder and, under
**Options**, tick **Conditional Task**. You then pick the condition one of two ways:

- **Transaction field** — one field from a fixed list. Quickest for a single yes/no or
  contingency condition.
- **Build a rule with AND / OR instead** — a rule that can combine several conditions and
  use your own custom fields. Use this for anything the fixed list can't say.

### Option 1: a single Transaction field

The **Transaction field** list is fixed. It does not include your custom fields — use a
rule (below) for those. It contains:

| Field | Behaves as |
|---|---|
| Cash deal | Yes/no flag |
| Sellers only | Yes/no flag |
| HOA, Radon, Septic, Well, Pool, Solar, Lead paint, Inspection, Smart-home, Home-warranty contingency | Contingency |
| Sale of home (contingent on another closing) | Contingency |
| Additional Deposit (key date set) | Created only when the deal has a real date for it |
| Form 22L&A row elected (Survey, Perc Test, On-Site Sewage System, Water Quality, Water Quantity, Timber) | Created only for the rows elected on the form |

Flags and contingencies behave differently, and the difference matters:

- **Yes/no flags** (Cash deal, Sellers only) — the task is created **only when the flag
  is on**. If the flag is off, or nothing has been filled in yet, the task is skipped.
- **Contingencies** — by default the task is created **unless** the contingency is
  explicitly set to **N/A** on the deal, so an unanswered contingency doesn't quietly drop
  work. For a contingency, a **When to create it** list appears: **Create unless marked
  N/A** (the default) or **Create only when present**.

**Additional Deposit (key date set)** is checked once, when the Playbook is applied: if
the deal has no real date for it yet, the task isn't created, and a date added afterwards
does not add it.

### Option 2: a rule with AND / OR

Click **Build a rule with AND / OR instead** (if a field is already chosen the link reads
**Convert to a rule (AND / OR)**). The panel changes to **Add this task when**, and a
rule replaces the single field. Click **Use a single field instead** to go back.

Each line reads *[condition] [is / is not / is blank / is not blank] [value]*. Choose a
condition from the first list:

| Condition | Example |
|---|---|
| Representing | The buyer, the seller, or both sides |
| State, County | State is FL |
| Property type | Condo |
| Loan type | Cash, Conventional, FHA, VA, USDA |
| Property feature | HOA, Septic, Well, Pool, Solar, Radon, Lead paint |
| **Deal flag** | **Buyer is financing**, Cash deal, Home warranty included, Tenant occupied |
| Built before year | 1978 |
| **Custom field** | Any custom field of your own |

- **Deal flag** lines read **is true** / **is not true**. Use **Deal flag › Buyer is
  financing** to gate financing-only tasks.
- **Custom field** lines let you pick the field, then the operator. **is blank** and
  **is not blank** need no value. For a **Dropdown** field, the value list is that
  field's own options. Custom fields of every type work, but a Yes/No question needs to
  be a Dropdown field — there is no checkbox field type.
- **And** adds another line. Every line must be true.
- **And any of…** adds an **Any of these** group; the group is true when any one of its
  lines is. Click **Or** inside the group to add a line.

A plain-English summary appears under the rule (for example, "Adds this task when: Septic system? is Yes"). Finish or
remove every line before you save; a half-built rule can't be saved.

If the deal doesn't yet have a value for something the rule needs (a custom field that's
still blank), the task is held back until it does.

### Gating on financed vs. cash deals

Use either approach:

- Mark the financing task conditional with a rule of **Deal flag › Buyer is financing**
  **is true**, or
- Leave financing work unconditional and mark the cash-only tasks conditional on
  **Cash deal**.

:::warning Don't put the Cash deal condition on a financing task
A task with the **Cash deal** condition is added *only* on cash deals, and the **When to create it** setting is ignored for it. Putting that condition on an appraisal or lender task removes the task from every financed deal, and the Playbook editor doesn't warn you. To skip a task on cash deals, use **Deal flag › Buyer is financing is true** instead, or nest the task under a key date that only financed deals get.
:::

### The "If label" box is cosmetic

Under the condition there's an **If label** box (for example, `If HOA`). This is
**text only — it does not gate anything.** It just prints on the task row so your team
can see at a glance when a task applies. If you type a label but set no condition, the
task is created on every deal and the builder warns you it is **not enforced**.

:::note Conditional in the Playbook builder vs. on a task
The **Conditional Task** checkbox in the *Playbook builder* controls whether a task
gets created at all. On an individual task inside a transaction the matching toggle is
called **Condition note** ([Task Options](../tasks/task-options.md)) — that one is a
note on work that already exists, and it doesn't create, hide, or remove anything.
:::

## Only add a key date when…

A key date can be conditional too — for example, a **Loan Approval** date that only
belongs on financed deals.

1. In the Playbook builder, open the **Key dates** tab.
2. Click the key date's row, then **Edit key date**.
3. Tick **Only add this key date when…**.
4. Build the rule the same way as for a task (for example **Deal flag** **is true**
   **Buyer is financing**), then **Save**.

Unlike a task, a key date is added when the deal simply doesn't have the answer yet: it
is held back only when the rule is known to be false. Tasks anchored to a held-back key
date are held back with it.

## Held-back tasks and key dates

When you apply a Playbook, anything whose condition isn't met is left off the deal — but
DocJacket remembers it. Nothing is added behind your back; you decide when it comes in.

On the deal's **Tasks** tab, the **Optional tasks (N)** button lists tasks the Playbook
left off. When a held-back item's condition becomes true, the button shows
**N now applicable**, and opening it shows a **Now applicable** section: *"Your Playbook
holds these back until a condition is met. It is now met."* Those rows are pre-ticked.
Click **Add N tasks** to create them. (The section below it holds ordinary optional
tasks — ones set not to be added to every deal — which stay unticked until you choose
them.)

A held-back **key date** comes back the same way, as one row: **[Key date name] (key date) +
N tasks**. Its button reads **Add 1 key date and N tasks**, and the tasks are created
linked to that date and get their due dates from it.

**Example — a deal that turns out to be financed.** Your Playbook has a **Loan
Approval** key date and loan tasks that apply when **Buyer is financing** is true. You
apply it to a deal that was entered as cash, so they are held back. Later the buyer
switches to a loan; you update the deal. Open **Optional tasks**, and **Loan Approval
(key date) + N tasks** is waiting under **Now applicable**.

**Example — setting a field mid-deal.** A task is conditional on a Dropdown custom field
*Septic system type* **is** *Private*. The field was blank at apply, so the task was held
back. Open the deal's **Overview**, set the field in the **Custom Fields** card, and
return to the **Tasks** tab: the task is now under **Now applicable**.

A task you deleted by hand after it was created is not offered back in **Optional tasks**. It can come back if you apply the Playbook to the deal again; see [Applying a Playbook to a transaction](#applying-a-playbook-to-a-transaction).

## Brokerage add-on Playbooks

A Playbook can be limited to specific brokerages. It then works as an **add-on**: it is
offered next to the deal's main Playbook, and never replaces it.

**Set one up.** Open the Playbook in the builder, find **Applies to**, and under
**Brokerages** use **Add a brokerage** to pick one or more. A **Brokerage add-on** badge
appears next to **Applies to**.

**On a deal.** When the deal's agent works for one of those brokerages, the deal's
**Overview** shows a banner, **Add [Playbook name]**, with *"Matched brokerage: …"*.
Nothing is added until you click:

- **Add** adds the add-on's tasks and documents alongside the main Playbook.
- **Not for this deal** hides that banner on that deal, in the browser you're using.

If more than three add-ons match, the rest fold into a **+N more** link.

## Automations

Automations can be attached to key dates or tasks. In practice, most automations live on tasks.

Common automation uses include:

- Prepare an email when a task is due
- Send a linked email template
- Include selected document categories
- Trigger follow-up work when a task is completed
- Send an automated text message (SMS) instead of, or as well as, the email

**Delivery.** Every task automation has a **Deliver by** choice: **Email**, **SMS**, or **Email + SMS**. Pick SMS and the builder checks your texting setup on the spot — if SMS isn't on your plan or you haven't set up a business number yet, a chip says so and the save tells you why. Email automations are never affected.

**Key-date reminders.** Select a key date and open its **Reminders** panel. **Add reminder** lets you set when it goes out — **Days before the key date** (add one or several, for a countdown like 7 and 3 days), **On the key date**, or **When it's marked complete** — who receives it (**Recipients by role**, plus direct addresses under **Also email**), the **Email template**, **Deliver by**, and **Require review before sending**. Each saved reminder is labelled **Waits for review** or **Sends automatically**; edit it in place or **Remove** it. Removing a reminder from the Playbook does not change deals that were already created from it.

Use **Review automations** to see every automation rule in the Playbook, grouped by key date and task. From there, use **Edit** to jump back to the rule in the builder. Bulk editing across automation rules is not currently part of this drawer.

## AI and bulk tools

The Playbook builder includes tools for faster setup:

- **AI Key Date Generator** — Describe the transaction workflow and review proposed key dates before applying them.
- **AI Task Generator** — Generate proposed tasks linked to the key dates in the Playbook.
- **Import Tasks from CSV** — Bulk-import tasks from a spreadsheet.
- **Export** — Download the Playbook's key dates and tasks as a CSV file. See [Print or export a Playbook's key dates and tasks](#print-or-export-a-playbooks-key-dates-and-tasks).
- **Suggested tasks** — Add common tasks for known key date types.

:::warning Review AI and imported items
Generated and CSV-imported key dates and tasks are a starting point, not a finished Playbook — review them before relying on the Playbook with clients.
:::

## Print or export a Playbook's key dates and tasks

There is no Print button inside the Playbook builder. To print a Playbook — or share it, review it in a spreadsheet, or keep a copy — download it as a CSV file and print it from Excel, Google Sheets, or Numbers.

**Where the CSV export button is:**

1. Go to **Templates → Playbooks** and open the Playbook.
2. Click the **Key dates** tab at the top of the builder. (The button is not on the **Combined View** or **Tasks** tabs, which is why it is easy to miss.)
3. In the **Key Dates** panel header, next to **Add Key Date**, click **Export** — a small button with a download icon. Hovering over it shows **Download as CSV**.

The file downloads straight away, named after the Playbook (for example `Florida Buyer.csv`).

**What the CSV contains.** One file with **both key dates and tasks**, in two blocks:

- **`# Key Dates`** — every key date in the Playbook: Order, Key Date, Side, Category, Priority, Date Rule, Anchor Field, Offset Days, Offset Direction, Day Calculation, Phase, and Required.
- **`# Tasks`** — every task in the Playbook: Order, Task Name, Priority, Phase, Due Date Anchor, Offset Days, Direction, Conditional, Condition, Condition Mode, Condition Rule, Description, Template Group(s), Task Start Date Rule, Predecessors, Day Mode, Weekend Roll, and Subtask Of.

The export always includes every key date and every task, even if you typed something in **Filter key dates...** first. It lists the Playbook's date *rules* (for example "3 days after Effective Date") — a Playbook is a template, so there are no real calendar dates in it yet. Export works on DocJacket starter Playbooks too, even though they are read-only.

The **Tasks** block uses the same column names as **Import CSV**, so you can edit the tasks in a spreadsheet and import them into another Playbook.

**Subtasks in the CSV.** The last column, **Subtask Of**, holds the exact name of a subtask's main task, and it is empty for a main task. Each subtask is listed right after its main task.

When you import a file with a **Subtask Of** column:

- A row that names exactly one main task in the same file becomes a subtask of it. The main task can be further down the file.
- If the name matches no main task, matches two, is the row's own name, or is itself a subtask, the row is imported as a main task and flagged.
- A row that is set to wait on a subtask is imported without the wait and flagged: "A task can't wait on a subtask. Pick a main task, or give this task a due date."
- A file without a **Subtask Of** column imports exactly as it did before.

:::tip Printing a deal's task list instead
If what you want on paper is the task list for **one transaction** — with real due dates and completed tasks checked off — open the transaction's **Tasks** tab and click **Print**. That opens a printable checklist PDF of the deal's tasks. See [Print a task list](/docs/tasks#print-a-task-list).
:::

## Testing a Playbook

Use **Test template** to preview the Playbook against a sample effective date. The preview shows key dates, linked tasks, computed sample dates when available, and tasks not linked to any key date.

The preview is for template review. It is computed client-side and does not include configured holidays. Real transactions also use the transaction's actual contract dates, holidays, and any dates already extracted or entered.

## Applying a Playbook to a transaction

In the Overview header, the Playbook controls depend on the deal:

- A deal with no Playbook shows **Apply Playbook**, or **Apply** followed by the name of a Playbook DocJacket suggests for the deal.
- A deal that was set up from a Playbook shows a chip with that Playbook's name and an **Add another Playbook** button.
- An archived deal can't take a Playbook: the buttons are disabled and the hover text reads "Archived deals can't take a Playbook. Restore the deal first."

You can also click **Generate Timeline** on the Overview's closing timeline and pick a Playbook.

DocJacket can:

- Scope available Playbooks by the transaction's state, side, and type
- Show existing applied Playbooks so users do not accidentally stack duplicates
- Preview how many key dates and tasks will be created
- Show anchor dates used for calculation
- Assign tasks by owner or label
- Leave out a phase's tasks (**Clear** / **All** per phase)
- Replace previously-applied template items when needed
- Preserve manually added items and contract-extracted dates when replacing template-generated items

After applying, the transaction has real key dates and real tasks. Moving key dates can update linked task due dates according to their rules.

### "N to sync": when a deal is behind its Playbook

The Overview header shows a chip with the name of the Playbook the deal was set up from. When the chip turns amber and reads **· 10 to sync** (hover: "This deal is 10 item(s) behind the … playbook"), the Playbook has items the deal doesn't, or now says something differently. Nothing is broken, and nothing changes on the deal until you sync.

The number counts:

- **Key dates and tasks in the Playbook that are not on the deal.** Tasks you deleted from the deal yourself are not counted; hover the chip to see how many were left out.
- **Items the Playbook now says differently.** A deadline rule changed in the Playbook on a date nobody changed by hand, or a task renamed in the Playbook.

Subtasks aren't counted. A subtask is added to a deal along with its main task, so it never makes the chip say **to sync** on its own.

Not counted: Playbook documents, dates you changed by hand or marked Completed, Waived or N/A, Optional tasks, and items the Playbook leaves out on this deal (a condition that isn't met, the other side's key dates, financing items on a cash deal).

The number is the same one the Apply Playbook dialog shows on its last button. A chip that reads **2 to sync** opens a dialog whose button reads **Create 2 items**.

**To sync (re-sync) the deal with its Playbook:**

1. Click the chip. The **Apply Playbook** dialog opens with that Playbook picked.
2. Read the rows. **Already on this deal · keeps your date** means a date you changed or closed; it is not touched. **Already on this deal · recalculates to …** means a Playbook date nobody changed; it moves to the Playbook's current rule. **Keeps your existing date** means a date you entered or that came from the contract; it keeps its date.
3. If you deleted tasks from the deal, they read **Removed from this deal on** a date and an amber note says they will be added back. If you deleted them on purpose, click **Leave out the N you removed**.
4. Click **Create N items** (or **Apply** when nothing new is left). Leave **Replace previously-applied template items** unticked.

You don't have to sync. The deal is fine as it is.

On an archived deal the chip is display-only, because an archived deal can't take a Playbook.

### Applying the same Playbook again

You can re-apply a Playbook that is already on the deal, whether or not the chip says **to sync**. Without **Replace previously-applied template items**, re-applying adds what's missing and leaves the rest alone.

- Rows that are already on the deal read **Already on this deal**. They are locked, and they are left out of the sentence at the top and the count on the button.
- When everything is already there, the dialog says "Everything in this Playbook is already on this deal.", the button reads **Apply**, and the receipt headline is **Deal already set up**.
- **Subtasks.** A subtask is added to a deal with its main task and is not counted in the dialog or on the button. When you re-apply the whole Playbook with nothing unticked, a subtask that is missing under a task already on the deal is added. If you untick any row, or the Playbook has optional tasks, a task that is already on the deal doesn't get new subtasks. The receipt reports subtasks separately from tasks.
- **Deleted tasks come back by default.** Click **Leave out the N you removed** to skip them for that one apply. DocJacket doesn't remember the choice for next time.
- **Playbook for the other side.** If the Playbook is for Seller deals and the deal is Buyer (or the reverse), an amber note says so: "This Playbook is for Seller deals · this deal is Buyer. Its 2 seller-side key dates won't be added; its tasks will." It doesn't stop you. The receipt repeats it with "N key date(s) for the other side, not added".
- **Dates that can't be calculated yet.** If a key date counts from a date the deal doesn't have, the receipt says "Some dates are waiting on a date this deal doesn't have yet:" and lists the missing dates by name, for example Effective Date.
- **Send your client their portal.** See [Sharing Portal Links](../client-portal/sharing-portal-links.mdx#after-you-apply-a-playbook).

### Applying a second Playbook to the same transaction

You can apply more than one Playbook to the same deal, and by default the second one
**adds to** what's already there — it does not wipe the first. This is what makes the
listing-then-contract workflow work on a single record:

1. Create the deal as a listing and apply your **listing** Playbook — order photos,
   sign the listing agreement, get it on the MLS.
2. Work the listing. When it goes under contract, **don't start a new deal** — upload
   the accepted contract into the listing and keep **Mark under contract** ticked on the
   review screen, or click **Convert to Purchase** on the listing's **Listing** tab. Either
   one turns the same record into a Purchase and moves it to your under-contract status. See
   [When a listing goes under contract](../transactions/listings.md#when-a-listing-goes-under-contract).
3. Apply your **contract-to-close** Playbook to that same transaction. (A deal that was
   created from a Playbook never gets a default closing checklist added automatically, so
   this step is yours.)

Both sets of tasks and key dates now live on one file, with one address, one contact
list, and one document set — and the listing history stays attached.

The apply dialog shows any Playbooks already applied, so you can see what's there
before adding another. If you *do* want the new Playbook to take over, tick **Replace
previously-applied template items** — that removes the previously applied *template-generated*
items on both the key-date and task side. Items you added by hand, and dates extracted
from the contract, are preserved either way.

:::tip
Leave **Replace** unticked when you're layering a second workflow onto a deal.

If you're correcting a Playbook you applied by mistake and it's the **only** one
on the deal, ticking Replace is fine. But if the deal already has **more than one**
applied checklist and you only want to drop one of them, don't tick Replace — it
clears every applied checklist's tasks (and every template-generated key date on
the deal) at once, not just the one you meant to fix. Instead, go to the **Tasks**
tab, click the trash icon on the specific checklist's header to remove just its
tasks, then apply the right Playbook — it adds cleanly to what's left.
:::

## Saving a transaction as a Playbook

If you customize a transaction's key dates, tasks, and automations, you can save that work as a new Playbook template. This is useful when a live deal becomes the model for a better workflow.

After saving, open the new Playbook in the builder to clean up names, sections, assignments, and automations.

## Playbooks vs. key date rules

The **Key Date Library** stores individual reusable date rules. A Playbook bundles those rules with tasks and automations.

Example:

- **Key Date rule:** Final Walkthrough = Closing Date - 1 business day
- **Playbook task:** Schedule walkthrough = Final Walkthrough - 3 days
- **Automation:** Prepare walkthrough reminder email when the task is due

## Tips

- Start with the built-in templates and customize them for your specific workflow
- Create state-specific variations — a Texas residential close has different deadlines than a Florida one
- Include the most common tasks in your template so they are created when the Playbook is applied
- Keep date calculation logic in the Key Date Library when the same rule will be reused
- Use task phases so users can apply only the work they need
- Test the Playbook before applying it to a live transaction
- Review and update templates periodically as regulations or your workflow change
