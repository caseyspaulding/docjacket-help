---
sidebar_label: Linking Contacts Together
sidebar_position: 2.5
description: Link an escrow officer to their assistant, a lender to their processor, or a person to their title company, with Connections, Auto-add to deals (companions), and the Organization field.
---

<!-- Canonical: https://help.docjacket.com/docs/contacts/linking-contacts -->
<!-- Source: docs/contacts/linking-contacts.md -->

# Linking Contacts Together

DocJacket has three ways to link contacts to each other. Which one you want depends on what the link should do:

| You want to... | Use |
|---|---|
| Automatically add an escrow officer's assistant (or a lender's processor) to every deal the officer joins | **Auto-add to deals** (companions) |
| Record that two people are connected, such as an assistant and the officer they work for, or a spouse | **Connections** (relationships) |
| Link a person to their title company, escrow company, lender, or brokerage | **Organization** |

All three are on the contact's detail page. Open **Contacts**, click the person, and look for the cards and fields below.

## Link an escrow officer and their assistant (companions)

The most common case: every time you add a particular escrow officer to a deal, you also want their assistant on it. Set this up once on the officer's contact:

1. Open the **escrow officer's** contact.
2. Find the **Auto-add to deals** card ("When this contact joins a deal, bring these people too").
3. Click **+**.
4. Search for and pick the **assistant**.
5. Pick the assistant's **role on the deal** (for example, the escrow or title assistant role your office uses).
6. Click **Add**.

From then on, whenever the officer is added to a deal, DocJacket adds the assistant to the same deal with that role. You don't have to remember to add the assistant separately. This works whether the officer is added by hand, from contract extraction, as a default contact, or from a form submission.

Good to know:

- **It's one-way.** The link goes *from* the officer *to* the assistant. Adding the assistant to a deal does not bring in the officer. If you want both directions, add the link on each contact.
- **It only affects deals going forward.** Deals the officer is already on aren't changed. Removing the link later doesn't remove the assistant from deals they were already added to.
- **You can add more than one companion.** An officer with two assistants, or a lender with a processor and a loan officer assistant, can bring all of them.
- **The same pattern works for any team**: a lender and their processor, an agent and their showing assistant, a transaction attorney and their paralegal.

## Link two contacts together (Connections)

To link 2 contacts together just to record that they are connected, without changing what happens on deals, use the **Connections** card on the contact's page:

1. Open one of the two contacts.
2. On the **Connections** card, click **+**.
3. Search for and pick the other person.
4. Choose how they're linked:
   - **Working:** Assistant, Assistant To, Manager, Colleague
   - **Personal:** Spouse, Wife, Husband, Domestic Partner, Partner, Girlfriend, Boyfriend
5. Click **Add**.

The link shows on both people's **Connections** cards, with the label you chose. For an escrow officer and their assistant, open the officer and link the assistant as **Assistant** (or open the assistant and link the officer as **Assistant To**).

The **Connections** card also lists, automatically, other people this contact has shared deals with and their roles on those deals. You don't need to add those by hand.

A Connections link is a record only. It does **not** add anyone to a deal. If you want the assistant added to deals automatically, use **Auto-add to deals** above. You can use both.

## Link a person to their title company or other company (Organization)

To connect a person to the company they work for (a title company, escrow company, lender, or brokerage), use the **Organization** field on the person's contact page. Search for the company and pick it, or create it from the same field if it isn't there yet.

Company records live under **Contacts → Organizations**. Linking people to one organization is how you keep, say, every officer and assistant at one title company together.

Linking a person to an organization does not, by itself, add anyone to a deal. To have an assistant follow a specific officer onto deals, use **Auto-add to deals** on the officer.

## Related

- [Managing Contacts](./managing-contacts.mdx): adding, editing, and merging contacts
- [Contact Roles](./contact-roles.md): the roles contacts can hold on a deal
- [Contact Groups](./contact-groups.md): reusable lists of contacts
