# PinBuddy — Privacy Policy

_Last updated: 8 July 2026_

PinBuddy is a Chrome extension that acts as a client for the [Pinboard](https://pinboard.in)
bookmarking service. This policy explains what data the extension handles and where it goes.

## What data PinBuddy handles

- **Your Pinboard API token** — used to authenticate requests to your Pinboard account.
- **Your bookmarks** — cached so they can be displayed in the popup.
- **Page details of items you bookmark** — the URL, title, and any text you have selected on
  the page, used to pre-fill and create a bookmark.
- **Your preferences** — such as the default view, default checkbox states, and whether system
  notifications are enabled.

## Where your data is stored

All of the above is stored **locally in your browser** using Chrome's storage
(`chrome.storage`). It may sync across your own Chrome profile via Chrome Sync, but it is not
stored anywhere else.

## Where your data is sent

When you add, edit, or delete a bookmark, PinBuddy sends the relevant data to **your own
Pinboard account** through the official Pinboard API (`https://api.pinboard.in`), authenticated
with your token.

**PinBuddy has no servers of its own.** Your token, bookmarks, and page data are **never** sent
to the developer, and are **never** shared with, sold to, or transferred to any third party
other than Pinboard itself — the service you have chosen to use.

## How your data is used

Your data is used solely to provide the extension's single purpose: browsing, adding, and
managing your Pinboard bookmarks. It is **not** used for advertising, analytics, profiling,
creditworthiness, or any purpose unrelated to that function.

## Removing your data

You can remove all locally stored data at any time by logging out from the extension's options
page, or by removing the extension from Chrome. To delete bookmarks stored in your Pinboard
account, use your Pinboard account directly.

## Permissions

PinBuddy requests only the permissions it needs to function: access to the active tab's URL and
title, the ability to read your text selection when you open the Add popup, local storage for
your token and preferences, and optional system notifications. Details are available on the
extension's Chrome Web Store listing.

## Contact

Questions about this policy can be sent to **grzybecki@gmail.com**.
