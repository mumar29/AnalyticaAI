[](https://docs.expo.dev/accounts/two-factor/<https:/expo.dev>)[Docs](https://docs.expo.dev/accounts/two-factor/</>)
[Blog](https://docs.expo.dev/accounts/two-factor/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/accounts/two-factor/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/accounts/two-factor/<https:/github.com/expo/expo>)[](https://docs.expo.dev/accounts/two-factor/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/accounts/two-factor/</>)[Guides](https://docs.expo.dev/accounts/two-factor/</guides/overview>)[EAS](https://docs.expo.dev/accounts/two-factor/</eas>)[Reference](https://docs.expo.dev/accounts/two-factor/</versions/latest>)[Learn](https://docs.expo.dev/accounts/two-factor/</tutorial/overview>)
[Introduction](https://docs.expo.dev/accounts/two-factor/</eas>)[Environment variables](https://docs.expo.dev/accounts/two-factor/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/accounts/two-factor/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/accounts/two-factor/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/accounts/two-factor/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/accounts/two-factor/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/accounts/two-factor/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/accounts/two-factor/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/accounts/two-factor/</build/introduction>)[Create your first build](https://docs.expo.dev/accounts/two-factor/</build/setup>)[Configure with eas.json](https://docs.expo.dev/accounts/two-factor/</build/eas-json>)[Internal distribution](https://docs.expo.dev/accounts/two-factor/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/accounts/two-factor/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/accounts/two-factor/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/accounts/two-factor/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/accounts/two-factor/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/accounts/two-factor/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/accounts/two-factor/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/accounts/two-factor/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/accounts/two-factor/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/accounts/two-factor/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/accounts/two-factor/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/accounts/two-factor/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/accounts/two-factor/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/accounts/two-factor/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/accounts/two-factor/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/accounts/two-factor/</submit/android>)[Submit to Apple](https://docs.expo.dev/accounts/two-factor/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/accounts/two-factor/</eas-update/introduction>)[Get started](https://docs.expo.dev/accounts/two-factor/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/accounts/two-factor/</eas/metadata>)[Get started](https://docs.expo.dev/accounts/two-factor/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/accounts/two-factor/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/accounts/two-factor/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/accounts/two-factor/</distribution/app-stores>)[App transfers](https://docs.expo.dev/accounts/two-factor/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/accounts/two-factor/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/accounts/two-factor/</eas/json>)[Webhooks](https://docs.expo.dev/accounts/two-factor/</eas/webhooks>)
Expo accounts
[Account types](https://docs.expo.dev/accounts/two-factor/</accounts/account-types>)[Two-factor authentication](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor>)[Programmatic access](https://docs.expo.dev/accounts/two-factor/</accounts/programmatic-access>)[Single Sign-On (SSO)](https://docs.expo.dev/accounts/two-factor/</accounts/sso>)[Audit logs](https://docs.expo.dev/accounts/two-factor/</accounts/audit-logs>)
Billing
[Archive](https://docs.expo.dev/accounts/two-factor/</archive>)[Expo Snack](https://docs.expo.dev/accounts/two-factor/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/accounts/two-factor/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/accounts/two-factor/<https:/expo.dev/mailing-list/signup>)
# Two-factor authentication
[Edit this page](https://docs.expo.dev/accounts/two-factor/<https:/github.com/expo/expo/edit/main/docs/pages/accounts/two-factor.mdx> "Edit content of this page on GitHub")
Learn about how you leverage two-factor authentication (2FA) to secure your Expo account.
[Edit this page](https://docs.expo.dev/accounts/two-factor/<https:/github.com/expo/expo/edit/main/docs/pages/accounts/two-factor.mdx> "Edit content of this page on GitHub")
Two-factor authentication provides an extra layer of security when logging in to expo.dev, the Expo Go app, and command line tools. With two-factor authentication enabled, you will need to provide a short-lived code in addition to your username and password to access your account.
## Enable two-factor authentication (2FA)[](https://docs.expo.dev/accounts/two-factor/<#enable-two-factor-authentication-2fa>)
You can enable two-factor authentication from your [personal account settings](https://docs.expo.dev/accounts/two-factor/<https:/expo.dev/settings#two-factor-auth>).
## Two-factor authentication methods[](https://docs.expo.dev/accounts/two-factor/<#two-factor-authentication-methods>)
You can receive 2FA codes through an authenticator app.
### Authenticator apps[](https://docs.expo.dev/accounts/two-factor/<#authenticator-apps>)
Expo accepts any authenticator app that supports Time-based One-time Passwords (TOTP) including:
  * [Last Pass Authenticator](https://docs.expo.dev/accounts/two-factor/<https:/lastpass.com/auth/>)
  * [Authy](https://docs.expo.dev/accounts/two-factor/<https:/authy.com/>)
  * [1Password](https://docs.expo.dev/accounts/two-factor/<https:/support.1password.com/one-time-passwords/>)
  * [Google Authenticator](https://docs.expo.dev/accounts/two-factor/<https:/support.google.com/accounts/answer/1066447>)
  * [Microsoft Authenticator](https://docs.expo.dev/accounts/two-factor/<https:/www.microsoft.com/en-us/account/authenticator>)


Expo will provide a QR code to scan with your authenticator app during setup. The app will provide a confirmation code to enter on Expo. Enter the code to finish activating 2FA via your authenticator app.
### SMS messages[](https://docs.expo.dev/accounts/two-factor/<#sms-messages>)
> Deprecated: SMS is no longer supported for newly-added two-factor authentication methods. Existing SMS two-factor authentication methods will continue to work, though we suggest switching to an authenticator app as it provides better security.
Provide a mobile phone number to receive a short-lived token via SMS. Codes received via SMS will be valid for at least 10 minutes, so you may receive the same code multiple times within this window. If you set an SMS device as your default 2FA method, you will be sent a verification code automatically whenever you take an action that requires a 2FA code.
### Recovery codes[](https://docs.expo.dev/accounts/two-factor/<#recovery-codes>)
When you set up two-factor authentication for your account, you'll receive a set of recovery codes. These codes can be used instead of a one-time password if you lose access to your authenticator app or SMS device. Keep in mind that each recovery code is only valid for one use.
If you selected the option to download your recovery codes at the time they were created, you can locate them in a file labeled as expo-recovery-codes.txt.
> Store your recovery codes in a secure and memorable place to ensure you, and only you can access your account!
## Change your two-factor settings[](https://docs.expo.dev/accounts/two-factor/<#change-your-two-factor-settings>)
You can make changes to your two-factor settings from your [personal account settings](https://docs.expo.dev/accounts/two-factor/<https:/expo.dev/settings>). You can:
  * add or remove authentication methods
  * set your default method
  * regenerate your recovery codes
  * disable two-factor authentication for your account


You will need to provide a one-time password to make any changes to your 2FA settings.
## Recover your account[](https://docs.expo.dev/accounts/two-factor/<#recover-your-account>)
### Recovery codes[](https://docs.expo.dev/accounts/two-factor/<#recovery-codes-1>)
When you set up your account to use 2FA, Expo provides you with a list of recovery codes. In the event you lose your device(s), a recovery code may be used in place of a one-time password. Each of these codes may only be used once. You may regenerate your recovery codes, which will invalidate any existing codes, from your [personal account settings](https://docs.expo.dev/accounts/two-factor/<https:/expo.dev/settings/>).
### Secondary 2FA methods[](https://docs.expo.dev/accounts/two-factor/<#secondary-2fa-methods>)
By setting up multiple authentication methods associated with different physical devices, you can ensure you will not lose access to your account in the event a device is reset or lost.
### Manual recovery[](https://docs.expo.dev/accounts/two-factor/<#manual-recovery>)
If you cannot access your account through any of the supplied methods, you may email Expo support from the email associated with your account. Unfortunately, we cannot guarantee we will be able to restore your access to your account in this scenario.
[Previous (Reference - Expo accounts)Account types](https://docs.expo.dev/accounts/two-factor/</accounts/account-types>)[Next (Reference - Expo accounts)Programmatic access](https://docs.expo.dev/accounts/two-factor/</accounts/programmatic-access>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/accounts/two-factor/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/accounts/two-factor/<https:/github.com/expo/expo/edit/main/docs/pages/accounts/two-factor.mdx>)
  * Last updated on November 24, 2023


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/accounts/two-factor/<https:/expo.dev/privacy>).
On this page
[Enable two-factor authentication (2FA)](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#enable-two-factor-authentication-2fa>)[Two-factor authentication methods](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#two-factor-authentication-methods>)[Authenticator apps](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#authenticator-apps>)[SMS messages](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#sms-messages>)[Recovery codes](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#recovery-codes>)[Change your two-factor settings](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#change-your-two-factor-settings>)[Recover your account](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#recover-your-account>)[Recovery codes](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#recovery-codes-1>)[Secondary 2FA methods](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#secondary-2fa-methods>)[Manual recovery](https://docs.expo.dev/accounts/two-factor/</accounts/two-factor/#manual-recovery>)
