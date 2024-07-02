---
title: "New Alpha Release: Vault 0.1.0"
excerpt: "SMSWithoutBorders Vault 0.1.0 is Now Available in Alpha Release! The Vault is a technology developed by the SMSWithoutBorders team to secure users' access tokens and facilitate the secure usage of these tokens for publishing users' messages."
coverImage: "/icon.png"
date: "2024-06-28"
author:
  name: "Promise Fru"
  picture: "/anon-avatar.jpeg"
ogImage:
  url: "/icon.png"
---

**Source Code**

- [GitHub repository](https://github.com/smswithoutborders/SMSwithoutborders-BE/tree/staging)

**_NOTE_**:**_This writeup doesn't contain information about all the components involved in the operations; it focuses solely on the Vault and the client devices._**

The Vault is a technology developed by the SMSWithoutBorders team to secure users' access tokens and facilitate the secure usage of these tokens for publishing users' messages. It leverages the [Double Ratchet Algorithm](https://signal.org/docs/specifications/doubleratchet/) to ensure secure communication between the sending device and the publishing server. The Vault has undergone significant evolution to reach its current state.

### Key Features

- **End-to-End Encryption**: Devices exchange keys using X25519[(Curve25519)](https://en.wikipedia.org/wiki/Curve25519) for secure communication with the Vault.
- **Device Identification**: Each device is uniquely identified using a device_id generated from the key exchange.
- **Double Ratchet Algorithm**: Ensures message confidentiality and forward secrecy.

### How it Works

The Vault utilizes the [smswithoutborders_libsig](https://github.com/smswithoutborders/lib_signal_double_ratchet_python) Python library for cryptographic operations.

#### _**X25519 for Key Exchange**_

To be identified and communicate securely, a device must perform two X25519 key exchanges with the Vault:

![generating-an-identity](/posts/generating_an_identity.png)

**1. For Generating an Identity (Device ID)**: Refer to the [specification](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/staging/docs/specifications.md#2-device-id).

**2. For Communication**: Encrypting and decrypting messages using the Double Ratchet Algorithm.

#### _**Communication Using The Double Ratchet Algorithm**_

Messages sent from an authenticated device are encrypted using the Double Ratchet Algorithm and can be decrypted by the Vault using the same algorithm.

![double-ratchet-algorithm](/posts/double-ratchet-algorithm.png)

### Considerations

- **Transmission via SMS**: End-to-end encryption between the device and the Vault ensures that no unauthorized party can read the content in transit.
- **Security**: The use of the Double Ratchet Algorithm provides forward secrecy and ensures that even if one session is compromised, it does not compromise future sessions.
- **Authentication**: Devices are authenticated using their unique device_id, computed from the initial key exchange, ensuring that only authorized devices can communicate with the Vault.

### **Changelog**

**Added**

- gRPC service communications.
- Device Identification (device_id).
- End-to-End Encryption.

### **Contributors**

A big thank you to the following contributors for their valuable contributions to this release:

- [Promise Fru](https://github.com/PromiseFru): Implementation of gRPC service and core cryptographic technologies.
- [Wisdom Nji](https://github.com/sherlockwisdom): Development of [smswithoutborders_libsig](https://github.com/smswithoutborders/lib_signal_double_ratchet_python) Python library.

### **Feedback**

Your feedback is crucial to us! If you encounter any bugs or have suggestions on how we can improve this release, please [let us know](mailto:support@smswithoutborders.com).
