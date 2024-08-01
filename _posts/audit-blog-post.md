---
title: "SMSWithoutBorders: Keeping You Secure - Results of a Penetration Test"
excerpt: "We're committed to keeping your communications safe. That's why we had a rigorous penetration test conducted by Radically Open Security (ROS). While we found and fixed a few vulnerabilities, the good news is that your data is secure with RelaySMS"
coverImage: "/icon.png"
date: "2024-07-31"
author:
  name: "Aysha Musa"
  picture: "/anon-avatar.jpeg"
ogImage:
  url: "/icon.png"
---

Here at SMSWithoutBorders, your security is our top priority. That's why we had a penetration test conducted by Open Technology Fund’s  [Radically Open Security (ROS)](https://www.radicallyopensecurity.com/), a team of experts dedicated to finding and eliminating vulnerabilities in software. This test focused on the SWOB Android app (now RelaySMS) and back-end(now vault) code, aiming to identify any potential weaknesses that could be exploited.


### What is a Penetration Test?

Imagine a team of skilled ethical hackers trying to break into your house. A penetration test is similar, but instead of a house, it's your software! The ROS team had full access to the inner workings of SWOB (like a blueprint of the house) to see if they could find ways to bypass security measures.

### What Did They Find?

The good news is that the test identified only one high-severity vulnerability. This issue stemmed from a lack of input validation in a specific area, potentially allowing attackers to inject malicious code when users sync saved tokens. In simpler terms, a cleverly crafted username could have tricked the system into running harmful scripts. However, rest assured, this vulnerability has been completely fixed!
The test also uncovered several medium-to-low [severity vulnerabilities](https://www.opentech.fund/wp-content/uploads/2023/06/ROS-pentest-report-SMS-without-borders-May-2023.pdf#%5B%7B%22num%22%3A226%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C56.692%2C427.173%2Cnull%5D), which have all been addressed by the SWOB development team. Following these fixes, ROS conducted additional tests to confirm that the vulnerabilities were truly eliminated.


### What This Means for You

This penetration test demonstrates our commitment to proactive security measures. By actively seeking out and eliminating vulnerabilities, we can ensure that your communication with SWOB remains secure, even in offline situations.

### Stay Informed, Stay Secure

We will continue to conduct regular penetration tests and security audits to maintain the highest level of protection for our users. Read Open Technology Fund’s [full official](https://www.opentech.fund/wp-content/uploads/2023/06/ROS-pentest-report-SMS-without-borders-May-2023.pdf) report on the audits for more information.

