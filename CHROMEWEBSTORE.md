# Chrome Web Store Listing — PinBuddy

> Last Updated: 2026-07-08 · Package version: 1.0.8

Single source of truth for the Web Store listing. Copy each field into the
Developer Dashboard. This file is **excluded from the uploaded ZIP** (it lives in
the repo root; the ZIP only contains `dist/`).

---

## Single Purpose [REQUIRED]

PinBuddy lets you browse, add, and manage your Pinboard bookmarks directly from the Chrome toolbar.

---

## Permissions Justification [REQUIRED — Privacy practices tab]

Paste each justification into the matching field on the **Privacy practices** tab.

| Permission | Type | Justification |
|------------|------|---------------|
| `storage` | permissions | Stores the user's Pinboard API token and username, their cached bookmarks, and their preferences (default view, default checkbox states, notification setting) via `chrome.storage` so the extension can display bookmarks and remember settings between sessions. This data stays on the user's device / their own synced Chrome storage and is never sent to the developer. |
| `tabs` | permissions | Reads the active tab's URL and title so the Add form can pre-fill the page being bookmarked, and so the toolbar icon can indicate whether the current page is already saved in the user's Pinboard account. The URL and title are used only to build the bookmark and are sent only to the user's own Pinboard account. |
| `scripting` | permissions | When the user opens the Add popup, the extension injects a small bundled function into the active tab to read the user's current text selection, which pre-fills the bookmark's description field. Only a function defined inside the extension is injected — no remote code. |
| `notifications` | permissions | Shows an optional system notification confirming that a bookmark was successfully added or removed. It is only shown when the user has enabled notifications in the options page. |
| `<all_urls>` | host_permissions | Users can bookmark any web page, so the extension needs access to the active tab on any site to (a) read the page URL/title to pre-fill the bookmark and set the toolbar icon state, and (b) inject the selection-reading function into the active page. Access is used only for the page the user is actively bookmarking; no browsing data is collected or sent to the developer. |

### Remote code

**No remote code is used.** All JavaScript is bundled inside the extension package. The
`scripting` API executes only a function defined within the extension (reading the current
text selection); no code is fetched or evaluated from a remote source.

> On the Privacy practices tab, select **"No, I am not using remote code."** If a text box
> is still required, paste the paragraph above.

---

## Privacy & Data Use [REQUIRED — for certification]

**Does the extension collect user data?** Yes — but only to provide its core function, and
only to the user's own Pinboard account.

The extension handles the user's Pinboard API token (authentication) and the URL, title, and
selected text of pages the user chooses to bookmark. This data is stored locally via
`chrome.storage` and transmitted **only to the user's own Pinboard account** through the
official Pinboard API (`api.pinboard.in`). It is **not** collected by, sent to, or accessible
by the developer, and it is **not** shared with any other third party.

| Data Type | Collected? | Transmitted Off-Device? | Purpose |
|-----------|-----------|------------------------|---------|
| Authentication info (Pinboard API token) | Yes | Yes — to the user's own Pinboard account only | Authenticate the user's Pinboard API calls |
| Website content (URL, title, selected text of bookmarked pages) | Yes | Yes — to the user's own Pinboard account only | Create/read the user's bookmarks |
| PII, health, financial, location, personal communications, web history | No | No | — |

### Data Use Certification (check all three — all true for PinBuddy)
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

---

## Privacy Policy [REQUIRED because the extension handles authentication data]

A public privacy policy URL is required to certify. Draft below — host it (e.g.
`https://pawelgrzybek.com/pinbuddy-privacy` or a GitHub Pages page) and paste the URL into
the dashboard.

> **PinBuddy Privacy Policy**
>
> PinBuddy is a client for the Pinboard bookmarking service. To function, it stores your
> Pinboard API token, your cached bookmarks, and your preferences locally in your browser
> using Chrome storage. When you add, edit, or delete a bookmark, PinBuddy sends that data
> to your own Pinboard account via the official Pinboard API (api.pinboard.in) using your
> token.
>
> PinBuddy has no servers of its own. Your token and bookmark data are never sent to the
> developer or any third party other than Pinboard itself, and are never sold. You can remove
> all stored data at any time by logging out in the options page or removing the extension.
>
> Contact: <YOUR CONTACT EMAIL>

---

## Store Listing (reference — already published, unchanged this release)

- **Name:** PinBuddy
- **Short description:** Browse your Pinboard bookmarks and add new ones with ease.
- **Category:** Productivity
- **Primary language:** English

---

## Dashboard actions you must do yourself

1. **Settings tab → Contact email:** add a publisher contact email, then **verify** it via the
   confirmation email Google sends.
2. **Privacy practices tab:** paste Single Purpose + the six justifications, answer the remote
   code question ("No"), complete the data-use disclosure, check the three certification boxes,
   add the Privacy Policy URL.
3. **Save draft**, then **Submit for review**.

## Version history
- **1.0.8** (2026-07-08) — Migrated to Manifest V3 (service worker, `host_permissions`,
  `scripting`). No user-facing feature changes. First release requiring the MV3 privacy-practices
  justifications.
