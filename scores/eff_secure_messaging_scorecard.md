# EFF Secure Messaging Scorecard

> Use the EFF Scorecard as an example of what would need to be collected in order to make the scorecard dynamic, and learn from the criteria approach and how it is metadata for a score.

<!-- MarkdownTOC -->

- [Encrypted in transit?][encrypted-in-transit]
    - [Measurements][measurements]
- [Encrypted so the provider can’t read it?][encrypted-so-the-provider-can’t-read-it]
- [Can you verify contacts’ identities?][can-you-verify-contacts’-identities]
- [Are past comms secure if your keys are stolen?][are-past-comms-secure-if-your-keys-are-stolen]
- [Is the code open to independent review?][is-the-code-open-to-independent-review]
- [Is security design properly documented?][is-security-design-properly-documented]
- [Has there been any recent code audit?][has-there-been-any-recent-code-audit]

<!-- /MarkdownTOC -->

## Encrypted in transit?

1. Is your communication encrypted in transit?

This criterion requires that all user communications are encrypted along all the links in the communication path. Note that we are not requiring encryption of data that is transmitted on a company network, though that is ideal. We do not require that metadata (such as user names or addresses) is encrypted.

> OII v1: Privacy > Confidentiality
> There was only a End to End Encryption criteria.

### Measurements

> Discussion: Some of this related to properties of the project's code () and architecture.

> This doesn't capture the "by default aspect" of OIIv1: Privacy > Confidentiality > Confidential by Default

 - Technical > Code 
     + 
 - Technical > Architecture
     + 



## Encrypted so the provider can’t read it?

2. Is your communication encrypted with a key the provider doesn't have access to?

This criterion requires that all user communications are end-to-end encrypted. This means the keys necessary to decrypt messages must be generated and stored at the endpoints (i.e. by users, not by servers). The keys should never leave endpoints except with explicit user action, such as to backup a key or synchronize keys between two devices. It is fine if users' public keys are exchanged using a centralized server.

> OII v1: Privacy > Confidentiality > End to End Encryption

## Can you verify contacts’ identities?

3. Can you independently verify your correspondent's identity?

This criterion requires that a built-in method exists for users to verify the identity of correspondents they are speaking with and the integrity of the channel, even if the service provider or other third parties are compromised. Two acceptable solutions are:

An interface for users to view the fingerprint (hash) of their correspondent's public keys as well as their own, which users can verify manually or out-of-band.

A key exchange protocol with a short-authentication-string comparison, such as the Socialist Millionaire's protocol.

Other solutions are possible, but any solution must verify a binding between users and the cryptographic channel which has been set up. For the scorecard, we are simply requiring that a mechanism is implemented and not evaluating the usability and security of that mechanism.

## Are past comms secure if your keys are stolen?

4. Are past communications secure if your keys are stolen?

This criterion requires that the app provide forward secrecy, that is, all communications must be encrypted with ephemeral keys which are routinely deleted (along with the random values used to derive them). It is imperative that these keys cannot be reconstructed after the fact by anybody even given access to both parties' long-term private keys, ensuring that if users choose to delete their local copies of correspondence, they are permanently deleted. Note that this criterion requires criterion 2, end-to-end encryption.

Note: For this phase of the campaign, we accept a hybrid forward-secrecy approach with forward secrecy on the transport layer (for example through TLS with a Diffie-Hellman cipher suite) and non-forward-secret end-to-end encryption, plus an explicit guarantee that ciphertexts are not logged by the provider. This is a compromise as it requires trusting the provider not to log ciphertexts, but we prefer this setup to having no forward secrecy at all.

## Is the code open to independent review?

5. Is the code open to independent review?

This criterion requires that sufficient source-code has been published that a compatible implementation can be independently compiled. Although it is preferable, we do not require the code to be released under any specific free/open source license. We only require that all code which could affect the communication and encryption performed by the client is available for review in order to detect bugs, back doors, and structural problems. Note: when tools are provided by an operating system vendor, we only require code for the tool and not the entire OS. This is a compromise, but the task of securing OSes and updates to OSes is beyond the scope of this project.

## Is security design properly documented?

6. Is the crypto design well-documented?

This criterion requires clear and detailed explanations of the cryptography used by the application. Preferably this should take the form of a white-paper written for review by an audience of professional cryptographers. This must provide answers to the following questions:

Which algorithms and parameters (such as key sizes or elliptic curve groups) are used in every step of the encryption and authentication process

How keys are generated, stored, and exchanged between users

The life-cycle of keys and the process for users to change or revoke their key

A clear statement of the properties and protections the software aims to provide (implicitly, this tends to also provide a threat model, though it's good to have an explicit threat model too). This should also include a clear statement of scenarios in which the protocol is not secure. 

## Has there been any recent code audit?

7. Has there been an independent security audit?

This criterion requires an independent security review has been performed within the 12 months prior to evaluation. This review must cover both the design and the implementation of the app and must be performed by a named auditing party that is independent of the tool's main development team. Audits by an independent security team within a large organization are sufficient. Recognizing that unpublished audits can be valuable, we do not require that the results of the audit have been made public, only that a named party is willing to verify that the audit took place.

We've discussed this criterion in depth in a Deeplinks post: What Makes a Good Security Audit? 