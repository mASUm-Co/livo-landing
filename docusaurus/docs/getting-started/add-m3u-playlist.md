---
sidebar_position: 3
---

# Add an M3U playlist

1. Open **IPTV Sources** (from Home or **Settings → Account**) and tap **+**.
2. Enter a **Display Name**, for example the name of your provider.
3. Choose **M3U Playlist** as the **Type**.
4. Paste the **M3U URL** from your provider.
5. Keep **Active source** on and tap **Save**.

<DocScreenshot shot="phone-04-add-source" alt="The add source form on iPhone with a name and an M3U address filled in" caption="Adding an M3U playlist on iPhone" />

Livo downloads the playlist and sorts it into **Live**, **Movies** and **Series** when the playlist marks its items that way. Large playlists can take a moment on the first load.

## TV guide

If your playlist contains a guide address (`url-tvg` in the playlist header), Livo uses it for the [TV guide](/docs/usage/tv-guide) automatically. You can also enter a guide address by hand in the source's **Program guide** section.

## Several sources

You can add more than one source. Only the **active** source is shown in Live, Movies and Series. Switch the active source in **IPTV Sources**.

## On Apple TV and Android TV: add with QR

Typing a long URL with a remote is slow. On the TV, choose **Add IPTV Source With QR**, scan the code with your phone and type the playlist there. The TV saves the source and the pairing screen closes by itself. The QR code expires after a few minutes; choose **Retry** to get a new one.

<DocScreenshot shot="tv-04-add-source" alt="QR pairing screen on Apple TV with a QR code and the pairing link" caption="Scan the code with your phone and type the playlist there" />

## If it does not load

- Check the URL with your provider and make sure it is copied completely.
- If some categories are missing, the playlist may not mark items as movies or series.
- See [Playlist is not loading](/docs/troubleshooting/playlist-not-loading).
