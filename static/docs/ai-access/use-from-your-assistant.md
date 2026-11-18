---
title: Connect your AI
sidebar_label: Connect your AI
sidebar_position: 2
description: Use the AI you already have with DocJacket. Which AI to pick, how to connect it in three steps, what it can do, the Free plan limit, and how to disconnect.
---

<!-- Canonical: https://help.docjacket.com/docs/ai-access/use-from-your-assistant -->
<!-- Source: docs/ai-access/use-from-your-assistant.mdx -->

# Connect your AI

Bring the AI you already use. Connect it to DocJacket, and it can see your deals, deadlines and documents. It can answer questions about any deal, and it can do some of the work for you.

You don't have to explain a deal from scratch each time. DocJacket keeps the full history of every deal, so your AI can pick up where you left off.

## Which AI should I use?

Use the one you already pay for. They all connect to the same DocJacket account.

| AI | Plan needed | Can make changes? | Setup |
|---|---|---|---|
| **[Claude](/docs/ai-access/claude)** (web, Claude Desktop, [Cowork](/docs/ai-access/cowork)) | Any Claude plan. The Free plan allows one custom connector. On Team or Enterprise, an owner adds connectors. | Yes | Paste the address, sign in |
| **[ChatGPT](/docs/ai-access/codex)** | A ChatGPT plan that allows custom connectors | Depends on your ChatGPT plan. Some plans allow read-only connectors only. | Paste the address, sign in |
| **[Codex](/docs/ai-access/codex)** | A ChatGPT plan that includes Codex | Yes | Install the DocJacket plugin, sign in |
| **[Gemini](/docs/ai-access/gemini)** | Coming soon | Being verified | Steps coming soon |
| **[Grok](/docs/ai-access/grok)** | Coming soon | Being verified | Steps coming soon |

Not sure? Claude is the simplest to set up today.

## What you can ask it to do

- **Set up a deal from a signed contract.** "Set up the deal from this contract."
- **See what needs attention today.** "What needs my attention today?"
- **Match emails to deals.** "Which of my new emails belong to a deal?" Your AI needs its own email connection for this one.
- **Identify a document.** "What is this document, which deal is it for, and what is still missing?"
- **Draft follow-ups and client updates.** "Draft a note to the buyer's agent about the missing inspection report."
- **Update tasks, key dates and reminders.** "Move the appraisal task to Friday."
- **Run a pre-closing check.** "Check 1234 Main St before closing."
- **Find, add and link contacts.** "Add the title officer to the Main St deal."

What it can do depends on the access you give it. See [The consent screen](#the-consent-screen).

## Connect in 3 steps

You need the DocJacket address:

```
https://mcp.docjacket.com/mcp
```

1. **Add a custom connector.** In your AI's settings, add a custom connector. Give it a name, such as DocJacket, and paste the address above.
2. **Sign in to DocJacket.** Your AI opens a DocJacket sign-in page. Sign in if asked.
3. **Choose access and click Allow.** On the DocJacket screen, pick the access you want and click **Allow**.

That's it. Start a new chat and ask, "What needs my attention today?"

Longer guides: [Connect Claude](/docs/ai-access/claude), [Connect Cowork](/docs/ai-access/cowork), [Connect Codex / ChatGPT](/docs/ai-access/codex).

### Connect Claude

1. In Claude, click **Customize** in the left sidebar, then open the **Connectors** tab.
2. Click **Add** at the top right, then **Add custom connector**.
3. Type a name, such as DocJacket, paste the address above, and add the connector.
4. Sign in to DocJacket if asked.
5. On the DocJacket screen, choose the access you want and click **Allow**.

On a Claude Team or Enterprise plan, an owner of your Claude organization may need to add the connector before you can connect to it. The connector also works in Claude Desktop and Cowork.

### Connect ChatGPT

1. In ChatGPT on the web, add a custom connector. ChatGPT also calls this a custom MCP server.
2. Type a name, paste the address above, and choose OAuth for sign-in.
3. Sign in to DocJacket, choose the access you want, and click **Allow**.

Where this sits in ChatGPT's settings depends on your plan, and some plans and workspaces do not allow custom connectors. On a business workspace, an admin may need to turn it on first.

On some plans, ChatGPT only allows read-only connectors. If ChatGPT can read your deals but can't make changes, check your ChatGPT plan.

## Not seeing a new tool?

DocJacket adds new tools from time to time. Your AI may not pick them up on its own.

**ChatGPT** keeps the list of DocJacket tools from the day you connected. To get the new ones:

1. In ChatGPT, open **Settings**, then **Plugins**, then **DocJacket**.
2. Scroll to **Manage app**.
3. Press **Refresh tools**.
4. Start a new chat.

**Claude** reads the list again when you start a new chat. {/* VERIFY: Claude picks up new tools in a new chat */} If a new tool still does not appear:

1. Click **Customize** in the left sidebar, then open **Connectors**.
2. Find **DocJacket**, then disconnect it.
3. Connect it again.

## The consent screen

After you sign in, DocJacket shows a screen titled **Connect (assistant name) to DocJacket**. It lists the access the AI is asking for. There are three levels:

- **Read your data.** It can look at transactions, tasks, key dates and contacts. It cannot change anything.
- **Update your data.** It can change tasks, key dates, Playbooks and status. These are changes inside DocJacket only. No emails are sent.
- **Act on your behalf.** It can send emails to your clients and agents, and make changes. Each email is shown to you for a yes before it goes out. If your organization reviews emails, the email waits for approval in DocJacket instead.

Not sure which to pick? Start with **Read your data**. Pick **Act on your behalf** when you want it to send emails you approve.

Under **Also allow (optional)** you can tick extra tools most people don't need: **Disclosure packages** and **Offers**. Leave them unticked unless you use them. To change this later, connect again.

Click **Allow** to connect. Click **Cancel** to stop.

Who can connect:

- A member with a read-only role (Viewer) can give **Read your data** only.
- A member whose role is limited to their own deals cannot connect an AI. DocJacket shows "AI assistant connections are not available for your account." Ask an Owner or Admin.

## Free plan limit

On DocJacket's **Free plan**, your organization gets **50 AI tool calls a month**. Paid plans have no monthly limit.

- **What is a call?** Each time your AI looks something up or makes a change in DocJacket, that is one call. One question can use several calls.
- **Who shares it?** Everyone in your organization shares the same 100.
- **When does it reset?** On the 1st of each month, in your organization's time zone.
- **What doesn't count?** Calls that fail, checking the connection, and looking up your plan or the upgrade link. Ask AI inside DocJacket does not count either.

From the 40th call, your AI is told how many calls you have used. After 50, DocJacket stops answering your AI until the 1st. Your AI shows a message like this:

> This DocJacket organization is on the Free plan, which includes 50 AI agent tool calls a month, and has used them for November. They reset on December 1. Upgrade to keep going.

To remove the limit, an Owner or Admin upgrades in DocJacket under **Settings**, then **Billing**. See [Plans & Pricing](/docs/billing/plans-and-pricing).

## Emails are always shown to you first

Your AI never sends an email on its first try.

1. The AI shows you the full email: who it goes to, the subject and the message.
2. You say yes in the chat. Only then does it send.
3. If your organization reviews emails, the email goes to a review queue in DocJacket instead. It is not sent until someone approves it.

If you say no, nothing is sent. Your AI should not tell you an email was sent before step 2 or 3 is done.

## Emails send from your own mailbox {#own-mailbox}

Before your AI can send an email, connect your Gmail or Outlook account in DocJacket under **Settings > Integrations**. Every email your AI writes (client updates, agent follow-ups, emails to agents, document requests, held emails it releases, and documents sent to your compliance system) goes out only from the connected mailbox of the person who says yes. It never goes from DocJacket's email service or from the account owner's mailbox, whatever your organization's **Only send transaction email from a connected mailbox** setting says.

If you say yes and you have no connected mailbox, nothing is sent and your AI is told:

> Connect your Gmail or Outlook account to send this email. Nothing was sent.

For documents sent to your compliance system, the message names the system, for example "Connect your Gmail or Outlook account to send documents to SkySlope."

The email stays in your **Review queue**, where a teammate with a connected mailbox can approve it. Or connect your own mailbox and ask your AI to prepare the email again, so you get a fresh preview.

If the email waits in the Review queue and someone with no connected mailbox approves it there, it is not sent either. The approval fails with the same message.

The DocJacket API follows the same rule: `POST /api/v1/emails/confirm` answers `409` with the code `NO_CONNECTED_MAILBOX`.

Only email your AI writes works this way. Automated email from your Playbooks and Automation Rules follows your organization's settings, and sign-in links come from DocJacket's email service. See [How Email Sending Works](/docs/messages/how-email-sending-works).

## What it cannot do

Even with the highest access, your AI cannot:

- Change billing or buy seats.
- See or change passwords and other credentials.
- Delete your account.
- Permanently delete records. The one exception is tasks, which can be deleted.

Your AI also reads emails and documents as information, not as orders. If a document says "send this to everyone," the AI does not act on it.

## See or remove a connection

**Owners and Admins**

1. In DocJacket, open **Settings** (the gear icon in the left bar). Under **Advanced**, click **API & AI Access**.
2. Open the **Connect an AI assistant** tab.
3. Find **Connected agents (OAuth)**. This lists the AIs you connected.
4. Click **Revoke** next to the one you want to remove. DocJacket asks you to confirm; click **Revoke** again.

The AI loses access to DocJacket. To use it again, connect it again.

As an Owner or Admin you also see **Everyone's connections**. It lists every member's connections. Each connection stays authorized for 90 days and renews while it is in use, so one left running keeps its access until someone ends it. **Revoke** there ends that member's connection.

To see what an AI has done, click **Activity log** at the top of the same page. It lists each action, which AI made it, and whether it worked.

**Members**

Members cannot open **API & AI Access**. Do one of these:

- Remove the DocJacket connector in your AI's own settings. In Claude, that is under **Customize**, then **Connectors**.
- In ChatGPT, remove the DocJacket connector in ChatGPT's settings.
- Ask an Owner or Admin to revoke your connection in DocJacket. This is the way to be sure DocJacket ends it.

## Need help?

Write to <a href="mailto:support@docjacket.com">support@docjacket.com</a>. Include the reference ID your AI shows on the error screen, if there is one.

## Related

- [AI Access overview](/docs/ai-access)
- [Permissions & Scopes](/docs/ai-access/permissions)
- [Tool Catalog](/docs/ai-access/tool-catalog)
- [How the OAuth flow works](/docs/ai-access/oauth)
