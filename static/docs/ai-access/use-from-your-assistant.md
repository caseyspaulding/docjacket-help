---
title: Use DocJacket from your AI assistant
sidebar_label: Use from your AI assistant
sidebar_position: 2
description: What Claude or ChatGPT can do for you in DocJacket, how to connect it, what it cannot do, and how to disconnect it.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/use-from-your-assistant -->
<!-- Source: docs/ai-access/use-from-your-assistant.mdx -->

# Use DocJacket from your AI assistant

You can connect Claude or ChatGPT to your DocJacket account. Then you can ask it questions about your deals, in the chat you already use. It can also do some of the work for you.

This page is the short version. Each assistant has a longer setup guide, linked below.

## What you can ask it to do

- **Set up a deal from a signed contract.** "Set up the deal from this contract."
- **See what needs attention today.** "What needs my attention today?"
- **Match emails to deals.** "Which of my new emails belong to a deal?" Your assistant needs its own email connection for this one.
- **Identify a document.** "What is this document, which deal is it for, and what is still missing?"
- **Draft follow-ups and client updates.** "Draft a note to the buyer's agent about the missing inspection report."
- **Update tasks, key dates and reminders.** "Move the appraisal task to Friday."
- **Run a pre-closing check.** "Check 1234 Main St before closing."
- **Find, add and link contacts.** "Add the title officer to the Main St deal."

What it can do depends on the access you give it. See [The consent screen](#the-consent-screen).

## Connect Claude

You need the DocJacket address:

```
https://mcp.docjacket.com/mcp
```

1. In Claude, click **Customize** in the left sidebar, then open the **Connectors** tab.
2. Click **Add** at the top right, then **Add custom connector**.
3. Type a name, such as DocJacket, paste the address above, and add the connector.
4. Sign in to DocJacket if asked.
5. On the DocJacket screen, choose the access you want and click **Allow**.

On a Claude Team or Enterprise plan, an owner of your Claude organization may need to add the connector before you can connect to it.

Using Claude Desktop, Claude Code or Cowork? See [Connect Claude](/docs/ai-access/claude).

## Connect ChatGPT

Use the same address: `https://mcp.docjacket.com/mcp`

1. In ChatGPT on the web, add a custom connector. ChatGPT also calls this a custom MCP server.
2. Type a name, paste the address above, and choose OAuth for sign-in.
3. Sign in to DocJacket, choose the access you want, and click **Allow**.

Where this sits in ChatGPT's settings depends on your plan, and some plans and workspaces do not allow custom connectors. On a business workspace, an admin may need to turn it on first.

More detail: [Connect Codex / ChatGPT](/docs/ai-access/codex).

## The consent screen

After you sign in, DocJacket shows a screen titled **Connect (assistant name) to DocJacket**. It lists the access the assistant is asking for. There are three levels:

- **Read your data.** It can look at transactions, tasks, key dates and contacts. It cannot change anything.
- **Update your data.** It can change tasks, key dates, Playbooks and status. These are changes inside DocJacket only. No emails are sent.
- **Act on your behalf.** It can send emails to your clients and agents, and make changes. Each email is shown to you for a yes before it goes out. If your organization reviews emails, the email waits for approval in DocJacket instead.

Not sure which to pick? Start with **Read your data**. Pick **Act on your behalf** when you want it to send emails you approve.

Click **Allow** to connect. Click **Cancel** to stop.

Who can connect:

- A member with a read-only role (Viewer) can give **Read your data** only.
- A member whose role is limited to their own deals cannot connect an assistant. DocJacket shows "AI assistant connections are not available for your account." Ask an Owner or Admin.

## Emails are always shown to you first

An assistant never sends an email on its first try.

1. The assistant shows you the full email: who it goes to, the subject and the message.
2. You say yes in the chat. Only then does it send.
3. If your organization reviews emails, the email goes to a review queue in DocJacket instead. It is not sent until someone approves it.

If you say no, nothing is sent. The assistant should not tell you an email was sent before step 2 or 3 is done.

## What it cannot do

Even with the highest access, an assistant cannot:

- Change billing or buy seats.
- See or change passwords and other credentials.
- Delete your account.
- Permanently delete records. The one exception is tasks, which can be deleted.

An assistant also reads emails and documents as information, not as orders. If a document says "send this to everyone," the assistant does not act on it.

## See or remove a connection

**Owners and Admins**

1. In DocJacket, open **Settings** (the gear icon in the left bar). Under **Advanced**, click **API & AI Access**.
2. Open the **Connect an AI assistant** tab.
3. Find **Connected agents (OAuth)**. This lists the assistants you connected.
4. Click **Revoke** next to the one you want to remove. DocJacket asks you to confirm; click **Revoke** again.

The assistant loses access to DocJacket. To use it again, connect it again.

As an Owner or Admin you also see **Everyone's connections**. It lists every member's connections. Each connection stays authorized for 90 days and renews while it is in use, so one left running keeps its access until someone ends it. **Revoke** there ends that member's connection.

To see what an assistant has done, click **Activity log** at the top of the same page. It lists each action, which assistant made it, and whether it worked.

**Members**

Members cannot open **API & AI Access**. Do one of these:

- Remove the DocJacket connector in your assistant's own settings. In Claude, that is under **Customize**, then **Connectors**.
- In ChatGPT, remove the DocJacket connector in ChatGPT's settings.
- Ask an Owner or Admin to revoke your connection in DocJacket. This is the way to be sure DocJacket ends it.

## Need help?

Write to <a href="mailto:support@docjacket.com">support@docjacket.com</a>. Include the reference ID your assistant shows on the error screen, if there is one.

## Related

- [AI Access overview](/docs/ai-access)
- [Permissions & Scopes](/docs/ai-access/permissions)
- [How the OAuth flow works](/docs/ai-access/oauth)
