---
slug: v0-9-0-release-notes
title: What's new in Livo Player v0.9.0 for iPhone, iPad and Apple TV
authors: []
tags: [release-notes, ios, tvos]
---

Livo Player v0.9.0 for iPhone, iPad and Apple TV brings a redesigned player, richer movie and series details, more reliable Continue Watching sync, steadier live streams and new privacy controls.

<!-- truncate -->

This is our biggest iOS and tvOS update so far. Most of the work went into the moments you notice every day: starting a stream, picking up where you left off, moving to the next episode and switching between your devices. Under the hood, playback, storage and subscriptions were rebuilt on a cleaner foundation that the next releases will build on.

## Player

- A **redesigned player** on iPhone and iPad with cleaner controls: quality, audio and subtitle buttons sit in the top-right corner, and the time counters sit next to Previous/Next.
- An **up-next countdown** for the next episode, on both iOS and tvOS, so series keep playing without extra taps.
- An **in-player Overview** with the poster and a short summary of what you are watching.
- Movies and episodes **resume from where you left off** more reliably, with both the Apple player and the VLC engine.
- **Better-looking subtitles**. On Apple TV, subtitles now follow your system caption settings.

## Live TV

- **Fewer stalls and freezes** on live streams, including on less stable sources. If a playlist proxy fails, Livo falls back to the direct source.
- **Automatic Quality** is now on by default and can switch between quality variants of the same channel.
- On Apple TV, **audio stays in sync with HomePod and AirPlay speakers** after pause and play, and live audio no longer sounds thin or sped up.

## Movies and series

- A new **Technical** section on movie and series details shows video, audio and subtitle information at a glance.
- **iPad gets its own layout** for movie details, and the iPhone landscape layout was cleaned up.
- Series details now match movie details, with the episode name and overview in the header.
- **Watched** and **Watchlist** states update instantly and are available from long-press menus on both iOS and tvOS.
- Movie and series lists are sorted the same way on iPhone, iPad and Apple TV, and **Recently Added** uses the date content actually arrived in your playlist.

## Continue Watching

- Continue Watching now **syncs more reliably across your devices with iCloud**. Progress is merged per title, and items you finish or remove stay removed on every device.
- Your playlist refreshes automatically when you open the app, at most once a day.

## Apple TV

- The **QR pairing screen closes automatically** once your source is saved.
- Redesigned cards on the Home screen and steadier focus when moving around the app.
- The default audio and subtitle language rows in Settings can now be focused and changed with the remote.

## Privacy and premium

- **New privacy controls**: an ad consent screen, App Tracking Transparency and an option to opt out of analytics in Settings.
- Analytics never include your stream addresses or playlist credentials, and credentials are kept out of logs.
- **Restoring premium** is more reliable, including for promo-code subscriptions, with clear feedback when something goes wrong.

## Reliability

- Movie and series caches now have size limits, and saved data is written more safely.
- Many smaller fixes for crashes, layout issues and playback edge cases.

v0.9.0 is available on the App Store for iPhone, iPad and Apple TV. As always, Livo plays your own M3U and Xtream Codes playlists and does not provide any content or channels.
