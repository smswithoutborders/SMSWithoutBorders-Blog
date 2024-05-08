---
title: "Reliability Of Gateway Clients In Smswithoutborders"
excerpt: "SMSWithoutBorders is a free mobile app that lets you send secure SMS messages to online platforms like Gmail, Telegram, and X (Twitter) without needing the internet. This blog will explain how SMSWithoutBorders does this using tools like SMSWithoutBorders Gateway Clients."
coverImage: "/icon.png"
date: "2024-04-05"
author:
  name: "Aysha Musa"
  picture: "/anon-avatar.jpeg"
ogImage:
  url: "/icon.png"
---

[reliability-data-flow](\posts\Reliability-Data-Flow.jpg)

SMSWithoutBorders is an open source proactive mobile app designed to enable users to send secure SMS messages to online platforms such as Gmail, Telegram, and X (Twitter) using SMS messaging without an internet connection. The scope of this blog includes knowing how SMSWithoutBorders accomplishes this using SMS tools such as SMSWithoutBorders Gateway Clients.

### What are Gateway Clients?

Gateway Client in SMSWithoutBorders is key in routing messages from SMS to online platforms. The Gateway Client listens for messages and routes them to the Gateway server, which publishes the messages on the users' behalf to the online platforms. If the Gateway Client is offline, the messages are queued up and forwarded when the gateway client is online. There are several Gateway Clients such as Linux Gateway Client and the Android messaging app Deku SMS. Apart from routing messages to online platforms Deku SMS also has the ability to send and receive end-to-end encrypted messages. Check out the GitHub repositories of [Deku SMS](https://github.com/deku-messaging/Deku-SMS-Android) and Linux [Gateway Client](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) to know more about them.

### Why Reliability Matters

Reliability measures a Gateway Client’s capability of receiving and routing messages within 180 seconds (just 3 minutes!). Reliable Gateway Clients ensure that your messages are received and immediately routed (aka forwarded) to the cloud. Reliability is crucial for users relying on timely communication to maintain their ability to communicate online, regardless of their internet connection status.

### How do we measure the Reliability of Gateway Clients?

To calculate reliability, we send test messages to the Gateway Clients and measure the time it takes for each Gateway Client to route the message. We analyze the time differences between sending, receiving, and publishing. If a Gateway Client successfully routes all test SMS messages within the 180-second timeframe, it is considered 100% reliable. However, if there are delays or failures in message receiving and routing, the reliability percentage would decrease accordingly.

### Why It Matters to You as an SMSWithoutBorders App User

As a user of the SMSWithoutBorders app, you directly interact with Gateway Clients, and their reliability impacts your experience. Reliable message routing ensures that your messages and important information are published online promptly, enhancing your overall user experience. You can now prioritize the most reliable Gateway Clients when sending messages through the SMSWithoutBorders app.

The data for these reliability tests are publicly available and can be downloaded on the [reliability dashboard](https://telemetry.smswithoutborders.com/)
