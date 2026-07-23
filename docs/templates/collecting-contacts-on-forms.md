---
sidebar_label: Collecting Contacts on Forms
sidebar_position: 7
description: How the Contact Picker works on online forms, and how to make sure an intake form captures a person's email and phone — not just their name.
---

# Collecting Contacts on Forms

Online Forms give you a few ways to capture people, and picking the right one decides whether you get a full contact record or just a name. This is the most common point of confusion when building an intake form.

## The Contact Picker is for *existing* contacts

The **Contact Picker** field lets a respondent **choose a contact you already have** — it is not a way to collect a new person's details.

- In the form builder, a Contact Picker uses an **Allowed Contacts** list. Only the contacts you select there appear as options on the public form.
- On the public form it shows a **single search box**, and the respondent picks from your list. DocJacket then attaches that existing contact to the transaction, using whatever **email and phone are already saved on that contact's record**.
- As they search and after they pick, each result shows the contact's **company, office address, and tags** — enough for the person filling out the form to confirm they've chosen the right contact (for example, the correct Escrow Officer at the correct office). Phone and email are **never** shown on the public form.
- It does **not** collect a new email or phone from the person filling out the form — there are no email/phone boxes on a Contact Picker.

:::caution Why a contact field can show "just a name"
If a Contact Picker has **no Allowed Contacts** set, it falls back to a plain **name text box** on the public form. So an outside person filling out an intake form ends up typing only a name — because the Contact Picker was never meant to gather a *new* contact's email in the first place.
:::

## Capturing a new person's email and phone

When you need details from someone who **isn't already in your contacts** — a buyer or seller filling out an intake form — don't rely on a contact field. Add dedicated fields instead:

1. In the form builder, add an **Email** field
2. Add a **Phone** field
3. Add a **Text** field for their name (or use the built-in submitter name)

These give you real, mapped values you can push onto the transaction.

:::tip Every public form already captures the submitter's email
Public forms include a built-in **Your Name** and **Your Email** at the top of the form, separate from any field you add. For a simple intake, that submitter email may already be all you need.
:::

If you added a **Participant** field expecting separate name and email boxes, add explicit **Email** and **Phone** fields instead — dedicated fields are the reliable way to capture contact details on a public form.

## Getting the details onto the transaction

Once a form is submitted, you map its answers onto the deal from the transaction's **Forms** tab:

- **Email**, **Phone**, and **Name** fields can be mapped to the Buyer, Seller, or Agent slots on the transaction.
- A **Contact Picker** selection attaches that existing contact to the deal by its role.

See [Applying Form Submissions](./applying-form-submissions.md) for the full mapping workflow, and [Online Forms](./online-forms.md) for building and sharing forms.

## Rule of thumb

- The person is **already in your contacts** → use a **Contact Picker** (and set Allowed Contacts).
- The person is **new** (outside intake) → use dedicated **Email**, **Phone**, and name fields.
