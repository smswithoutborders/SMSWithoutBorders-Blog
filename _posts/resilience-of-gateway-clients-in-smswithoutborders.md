---
title: "Resilience Of Gateway Clients In SMSWithoutBorders"
excerpt: "SMSWithoutBorders is pleased to announce a significant advancement in message-forwarding functionalities for its gateway clients"
coverImage: "/icon.png"
date: "2024-04-16"
author:
  name: "Aysha Musa"
  picture: "/anon-avatar.jpeg"
ogImage:
  url: "/icon.png"
---

![resilience-flow](/posts/resilience-flow.png)

SMSWithoutBorders is pleased to announce a significant advancement in message-forwarding functionalities for its gateway clients. By default, these clients have relied solely on HTTPS for routing SMS messages to online platforms. This update introduces support for additional protocols, including AMQP, FTP, and SMTP, providing greater flexibility and resilience in message delivery.

### Breaking Down the Update: Multi-Protocol Support using the Round-Robin algorithm

The decision to diversify protocol support stems from the need to address potential disruptions that may occur with the messaging protocols. By incorporating multiple protocols such as AMQPS (Advanced Message Queuing Protocol), FTP (File Transfer Protocol), and SMTP (Simple Mail Transfer Protocol) into the gateway client framework, SMSWithoutBorders is proactively mitigating the risk of message delivery interruptions. Gateway clients can now automatically switch between protocols in case of failures. The Gateway clients publish the data for which protocols are available for use in specific regions. The data is publicly available on the [ SMSWithoutBorders resilience dashboard](https://telemetry.smswithoutborders.com/)

### The Role of Gateway Clients in the Context of Resilience

Gateway clients serve as the key component in facilitating the seamless transfer of messages from SMS to online platforms. Their ability to adapt to varying network conditions and protocol blockages is crucial for ensuring uninterrupted communication flow. With the introduction of multi-protocol support, gateway clients are poised to become even more resilient and reliable in their message-forwarding capabilities.

Any disruption in message forwarding could have significant implications for users relying on SMSWithoutBorders for their message routing needs. By enhancing resilience through multi-protocol support, SMSWithoutBorders is not only safeguarding against potential disruptions but also instilling confidence in its user base.

By enabling multiple protocols, SMSWithoutBorders is proactively addressing potential challenges and ensuring uninterrupted message forwarding for its users. As we move forward, these advancements will continue to shape the landscape of SMS-based communication, empowering users to stay connected in an ever-changing digital environment.
