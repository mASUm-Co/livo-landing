---
sidebar_position: 5.5
---

# TV guide (EPG)

The TV guide shows what is on your live channels: the current programme, how much time is left and what comes next.

## Where you see it

- **Channel cards in Live**: the programme on now, the time left and **Up next**.
- **Apple TV preview panel**: the selected channel's schedule for today.
- **Live player**: the running programme with a progress timeline and the next programme.

<DocScreenshot shot="tv-02-live" alt="Channel grid on Apple TV with the programme guide in the preview panel" caption="Guide data in the Apple TV preview panel" />

Programme times follow your device's time zone, region and 12/24-hour setting.

## Where the guide comes from

Livo does not include a guide of its own. It uses, in this order:

1. A **guide address you enter** for the source.
2. The **guide address in your M3U playlist** (`url-tvg` / `x-tvg-url` in the playlist header).
3. For **Xtream Codes** accounts, the account's own guide.

The guide is downloaded to your device only; the address is never sent to Livo's servers. It refreshes after a playlist refresh, when you open the app and the guide is older than 12 hours, and whenever you choose **Refresh guide**.

## Guide settings

Open **IPTV Sources**, edit your source and scroll to **Program guide**:

- **Guide address** shows the address in use, or *No guide address found*.
- **XMLTV address (optional)**: enter an `http://` or `https://` XMLTV address. It replaces the one found in the playlist.
- **Time shift**: if every programme is off by the same amount, move the guide forward or back in half-hour steps (up to 12 hours).
- **Refresh guide** downloads it again. The status line shows when it was updated and how many channels matched, for example *Updated 18:30 · 280/300 channels matched*.

## Why some channels have no guide

Livo matches guide entries to channels by the channel's guide id (`tvg-id`) and name. A channel shows no guide when the guide has no entry for it or the ids do not match. Ask your provider for a guide that covers your channels, or try another XMLTV address.

If the last refresh failed, Livo keeps showing the previous guide and says so in the status line.
