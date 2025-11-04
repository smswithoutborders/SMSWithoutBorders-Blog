---
title: "Sending Images Without Internet? Yeah, That’s a Thing Now."
excerpt: "Internet down? Doesn’t matter. RelaySMS just leveled up. You can now send images over SMS fully encrypted, no Wi-Fi, no internet connection necessary"
coverImage: "/icon.png"
date: "2025-10-31"
author:
  name: "Aysha Musa"
  picture: "/anon-avatar.svg"
ogImage:
  url: "/icon.png"
---

Internet down? Doesn’t matter. RelaySMS just leveled up.
You can now send images over SMS fully encrypted, no Wi-Fi, no internet connection necessary.

This update is a big deal for people who work or live where the internet isn’t always guaranteed, including journalists and digital rights defenders. Basically, anyone who still needs to show what’s happening when everything else goes dark.
RelaySMS now lets you share visuals that speak louder than words, even when you’re completely offline.

#### How it works technically

So SMS, as we know it wasn’t built for this. A single text only carries 160 characters, and that’s nothing compared to even a tiny image. So our team rebuilt how SMS handles big data.
Now, when you send a photo:

RelaySMS compresses and resizes it, keeping it clear enough to see but light enough to move.

Splits the image into encrypted chunks, sends them one by one, and reassembles them perfectly on the other side.

If your phone is interrupted or restarts mid-send, the app just keeps going where it left off.

And because it’s using Signal’s Double Ratchet encryption, your data stays locked tight the whole way through.

All of this works when you set RelaySMS as your default SMS app (also a thing now!), turning your phone into an all-in-one offline communication machine.

The feature is live for Android right now on the [Play Store](https://play.google.com/store/apps/details?id=com.afkanerd.sw0b)

We’ve also open-sourced the RelaySMS Image SDK available on [GitHub](https://github.com/smswithoutborders) so other developers can build on this tech for their own offline apps.
Enjoy!
