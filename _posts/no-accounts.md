---
title: "RelaySMS just got an upgrade : here's what's new"
excerpt: "We've been working on some changes to RelaySMS and we're excited to finally share them with you. If you've used RelaySMS before, you know the drill internet goes down, you still need to get a message out. That's what we built this for. This update just makes it a lot smoother to do that."
coverImage: "/posts/post.png"
date: "2026-08-07"
author:
  - name: "Aysha Musa"
    picture: "/anon-avatar.svg"
  - name: "Vanessa Christopher"
    picture: "/anon-avatar.svg"
ogImage:
  url: "/posts/post.png"
---

![RelaySMS no-account experience](/posts/post.png)

We are releasing a newer version of RelaySMS with some major updates. The most prominent of which is no more accounts and logins. This release rolled for Android by the time you are reading this. Here are the new introductions;


#### No more accounts

In previous releases of RelaySMS, the usage flow included: Log into/Create an account, save tokens and send messages. The first step required the user to take some privacy measures; in cases where they do not want to link their accounts to their identity. We made the decision of removing that step as it does not provide inherent benefits for the users. This means the server has no way of knowing which user has what token all together. 

Rather the user can now save whatever account they want to publish from during a shutdown. That account is referenced with a unique token stored on the user’s device and references to the cloud. The token is tied to the user’s security keys stored on device and also on the server; so losing this token makes publishing impossible. 

In case the user wants to change their device, they can now [backup and restore](https://docs.smswithoutborders.com/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore) their stored tokens and keys on the new device. 



#### Shorter messages, lower SMS costs
We have made the messages RelaySMS sends significantly shorter. We accomplished this with a ground-up rebuild of our [messaging protocols](https://smswithoutborders.com/research/relaysms-payload-specs)
This moves us closer to solving one of the biggest issues with using SMS as a transport for publishing online; the cost of sending an SMS message.


#### Save your platforms and restore them anytime

You can now connect your platforms; Gmail, Bluesky, Telegram, or RelaySMS Mail and back them up so you never lose them.

Here's why that matters:
Let's say you delete your saved platforms or something happens to your app. In the past that could mean losing everything and having to start over. Now you can back up your saved platforms, keep the restore key somewhere safe, and pick up right where you left off whenever you need to.
It takes about a minute to restore. So even if you haven't touched the app in months, you can come back during a shutdown and be ready to send straight away.

#### A cleaner, easier interface

Alongside the bigger changes, we have made a number of subtle UI improvements to make the app easier to navigate.

That is the update. Simple, but we think it makes a real difference especially for the people using RelaySMS in situations where every detail counts. This update is available on android only for now and will be coming to the iOS soon.

Need a hand? Visit our [tutorials](https://docs.smswithoutborders.com/) for guides on setting up and using RelaySMS.

Download the latest version here: [Play Store](https://play.google.com/store/apps/details?id=com.afkanerd.sw0b)

As always, if you have feedback or run into anything — we're listening. Find us on [Telegram](https://t.me/+IPYp6q06dWsyZjY0), [X](https://x.com/RelaySMS), or [GitHub](https://github.com/smswithoutborders).
