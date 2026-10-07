---
sidebar_label: Email Signatures
sidebar_position: 6
description: Create branded DocJacket email signatures and apply them automatically when you send transaction and task emails to clients and agents.
---

<!-- Canonical: https://help.docjacket.com/docs/templates/email-signatures -->
<!-- Source: docs/templates/email-signatures.md -->

# Email Signatures

Email signatures let outgoing DocJacket messages include a consistent closing block with your name, role, contact details, brokerage information, logo, links, or required disclaimers.

Create one default signature for everyday use, or keep separate active signatures for different brands, offices, roles, or message types.

## Creating a signature

1. Go to **Templates > Email Signatures**
2. Click **New Signature**
3. Enter a signature name
4. Choose a starter layout, or start from scratch
5. Edit the signature content in the rich editor
6. Add links, formatting, images, logos, or disclaimer text as needed
7. Use the preview panel to check how the signature will render in email
8. Turn on **Set as default signature** if this should be used automatically
9. Click **Save**

New signatures open the template picker automatically. Starter layouts include:

- **Simple** — name, title, and contact details
- **Professional** — name and title with contact details below a divider
- **Branded** — stacked contact details for a fuller signature
- **Compact** — one dense line for quick replies

The starter layouts give you editable sample content. Replace the sample name, company, phone, email, and website with the exact text you want recipients to see.

## Editing content

The signature editor uses the same rich editor used elsewhere in DocJacket. You can:

- Format text
- Add links
- Insert line breaks
- Add images with the editor's image button (PNG or JPG work best; a photo pasted from Outlook or Apple Mail usually doesn't come through)
- Add brokerage or compliance language
- Preview the rendered signature before saving

Keep signature images small enough for email. Large logos or wide banners can make mobile email replies harder to read.

:::tip Send yourself a test
After changing a logo or adding long disclaimer language, send yourself a test email. Signatures can render differently across email clients, and a quick test catches oversized images or broken links before clients see them.
:::

## Using HTML in your signature

Want to put HTML in your signature — for example a signature with a logo, a headshot, and social icons that you built in a signature generator? Use the editor's HTML mode.

1. Go to **Templates > Email Signatures** and open a signature (or click **New Signature**)
2. Above **Signature Content**, switch the editor from **Visual** to **HTML**
3. Paste the HTML from your signature generator into the box
4. Check the **Preview** panel
5. Click **Save**

DocJacket remembers which mode each signature uses, so an HTML signature reopens in HTML mode.

### Images in an HTML signature

- **Images must be https links.** An image whose address starts with `http://`, or has no address scheme, is removed when you save. Embedded `data:` images are removed too.
- **Need to host an image?** In HTML mode, click **Upload image** and pick a PNG, JPG, GIF, or WebP file under 20 MB. DocJacket stores the image, resizes it to at most 800 px on its longest side, and inserts an `<img>` tag with its https link where your cursor was in the HTML box.

### What DocJacket removes for safety

Every signature is cleaned when you save. Scripts, forms and form fields, iframes, `<style>` blocks, event handlers such as `onclick`, HTML comments, and `javascript:` links are removed. Tables, inline `style="..."` formatting, fonts, colors, images, and links keep working. Links can be `https`, `http`, `mailto:` (email), or `tel:` (phone) — a bare email address becomes a `mailto:` link and a bare `www.` address becomes an `https://` link.

If anything was removed, you'll see a **Some content was removed** message listing what was taken out, and the HTML box shows the cleaned version.

### Size limit

Gmail cuts off messages at around 100 KB, which hides a too-large signature behind **[Message clipped]**. If an HTML signature is over that size, DocJacket shows **This signature is too large to display in full** and won't save it. The usual cause is an embedded image — host it with **Upload image** instead.

### Switching back to Visual

Switching from **HTML** to **Visual** asks **Switch to the visual editor?** first. The visual editor can't keep tables, columns, or most custom styling, so editing there may flatten your layout. Choose **Keep HTML** to stay in HTML mode.

## Default signature

The default signature is selected automatically when DocJacket loads signatures for outgoing messages. You can set the default from either:

- The signature editor, using **Set as default signature**
- The signatures list, using **Set as Default**

Only one signature can be the default at a time. The default signature cannot be deleted until another signature is made default.

## Using signatures

When you compose an email from a transaction, DocJacket selects your default signature when one exists. You can choose another active signature from the composer, or choose no signature for that message.

Task email sends also show the default signature preview before sending.

Signatures work alongside [email templates](./email-templates.md). The template supplies the message content, and the signature supplies the branded closing block.

For example:

- Email template: inspection reminder body
- Email signature: your name, brokerage, phone, website, and disclaimer

## Tips

- Keep your default signature concise so task emails stay easy to read.
- Include required brokerage or compliance language if your office requires it.
- Create a separate signature when a team, office, or role needs different branding.
- Use a compact signature for high-volume task replies.
- Send yourself a test email after changing logos or long disclaimer language.
