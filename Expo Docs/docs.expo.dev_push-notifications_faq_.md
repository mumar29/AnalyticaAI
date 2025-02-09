[](https://docs.expo.dev/push-notifications/faq/<https:/expo.dev>)[Docs](https://docs.expo.dev/push-notifications/faq/</>)
[Blog](https://docs.expo.dev/push-notifications/faq/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/push-notifications/faq/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/push-notifications/faq/<https:/github.com/expo/expo>)[](https://docs.expo.dev/push-notifications/faq/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/push-notifications/faq/</>)[Guides](https://docs.expo.dev/push-notifications/faq/</guides/overview>)[EAS](https://docs.expo.dev/push-notifications/faq/</eas>)[Reference](https://docs.expo.dev/push-notifications/faq/</versions/latest>)[Learn](https://docs.expo.dev/push-notifications/faq/</tutorial/overview>)
[Overview](https://docs.expo.dev/push-notifications/faq/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/push-notifications/faq/</workflow/overview>)[Configure with app config](https://docs.expo.dev/push-notifications/faq/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/push-notifications/faq/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/push-notifications/faq/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/push-notifications/faq/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/push-notifications/faq/</guides/permissions>)[Environment variables](https://docs.expo.dev/push-notifications/faq/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/push-notifications/faq/</router/introduction>)[Installation](https://docs.expo.dev/push-notifications/faq/</router/installation>)[Create pages](https://docs.expo.dev/push-notifications/faq/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/push-notifications/faq/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/push-notifications/faq/</router/layouts>)[Error handling](https://docs.expo.dev/push-notifications/faq/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/push-notifications/faq/</modules/overview>)[Get started](https://docs.expo.dev/push-notifications/faq/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/push-notifications/faq/</push-notifications/overview>)[About notification types](https://docs.expo.dev/push-notifications/faq/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/push-notifications/faq/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/push-notifications/faq/</push-notifications/receiving-notifications>)
Reference
[Add Android FCM V1 credentials](https://docs.expo.dev/push-notifications/faq/</push-notifications/fcm-credentials>)[Send notifications with FCM and APNs](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications-custom>)[Troubleshooting and FAQ](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq>)
More
[Upgrade Expo SDK](https://docs.expo.dev/push-notifications/faq/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/push-notifications/faq/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/push-notifications/faq/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/push-notifications/faq/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/push-notifications/faq/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/push-notifications/faq/</archive>)[Expo Snack](https://docs.expo.dev/push-notifications/faq/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/push-notifications/faq/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/push-notifications/faq/<https:/expo.dev/mailing-list/signup>)
# Push notifications troubleshooting and FAQ
[Edit this page](https://docs.expo.dev/push-notifications/faq/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/faq.mdx> "Edit content of this page on GitHub")
A collection of common questions about Expo push notification service.
[Edit this page](https://docs.expo.dev/push-notifications/faq/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/faq.mdx> "Edit content of this page on GitHub")
A collection of common issues and FAQs when setting up push notifications with the `expo-notifications` library and Expo push notification service.
## Expo push notification service FAQ[](https://docs.expo.dev/push-notifications/faq/<#expo-push-notification-service-faq>)
### Cost of the push notification service[](https://docs.expo.dev/push-notifications/faq/<#cost-of-the-push-notification-service>)
There is no cost associated with sending notifications through Expo push notification service.
### Limit of sending notifications[](https://docs.expo.dev/push-notifications/faq/<#limit-of-sending-notifications>)
There is a limit of 600 notifications per second per project that can be sent. If you exceed this rate, subsequent requests will fail until the rate falls below 600 per second again.
For best results, we recommend you add throttling (which is handled automatically in the `expo-server-sdk-node`[](https://docs.expo.dev/push-notifications/faq/<https:/github.com/expo/expo-server-sdk-node>)) and retry logic to your server.
### Using Expo push notification service is not mandatory[](https://docs.expo.dev/push-notifications/faq/<#using-expo-push-notification-service-is-not-mandatory>)
You can use any push notification service for Expo projects. The `getDevicePushTokenAsync`[ method from `expo-notifications`](https://docs.expo.dev/push-notifications/faq/</versions/latest/sdk/notifications#getdevicepushtokenasync-devicepushtoken>) allows you to get the native device push token, which you can then use with other services, or even [send your notifications directly through FCM and APNs](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications-custom>).
### Connections to notification service are encrypted[](https://docs.expo.dev/push-notifications/faq/<#connections-to-notification-service-are-encrypted>)
Expo's connections to Apple and Google are encrypted and use HTTPS.
### Contents of the notification are not stored[](https://docs.expo.dev/push-notifications/faq/<#contents-of-the-notification-are-not-stored>)
Expo doesn't store the contents of push notifications any longer than it takes to deliver them to the push notification services operated by Google and Apple. Notifications are stored only in memory and in message queues, not in databases.
### Contents of the notifications may be seen by Expo staff[](https://docs.expo.dev/push-notifications/faq/<#contents-of-the-notifications-may-be-seen-by-expo-staff>)
If the Expo team is actively debugging the push notifications service, we may see notification contents (for example, at a breakpoint) but Expo cannot see push notification contents otherwise.
### Delivery guarantees[](https://docs.expo.dev/push-notifications/faq/<#delivery-guarantees>)
Expo makes the best effort to deliver notifications to the push notification services operated by Google and Apple. Expo's infrastructure is designed for at-least-once delivery to the underlying push notification services. In some cases, a notification may be delivered to Google or Apple more than once or not at all, although these cases are rare.
After a notification has been handed off to an underlying push notification service, Expo creates a "push receipt" that records whether the handoff was successful. A push receipt denotes whether the underlying push notification service received the notification.
Finally, the push notification services from Google and Apple follow their policies to deliver the notification to the device.
### When and why does the `ExpoPushToken` change[](https://docs.expo.dev/push-notifications/faq/<#when-and-why-does-the-expopushtoken-change>)
The `ExpoPushToken` remains the same across app upgrades. On Android, reinstalling the app may result in the token changing. On iOS, the token also remains the same even after uninstalling the app and reinstalling it.
It also changes if you change your `applicationId`[](https://docs.expo.dev/push-notifications/faq/</versions/latest/sdk/application#applicationapplicationid>) or `experienceId` (usually `@expoUsername/projectSlug`).
The `ExpoPushToken` never expires. However, if one of your users uninstalls the app, you'll receive a `DeviceNotRegistered` error back from Expo's servers. This means you should stop sending notifications to this token.
## Push notifications troubleshooting[](https://docs.expo.dev/push-notifications/faq/<#push-notifications-troubleshooting>)
### Notifications aren't working[](https://docs.expo.dev/push-notifications/faq/<#notifications-arent-working>)
Push notifications have a lot of moving parts, so this can be due to a wide variety of reasons. To narrow things down, check the [push ticket](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications#push-tickets>) and [push receipt](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications#push-receipts>) for error messages.
You can also narrow things even further by testing [local notifications](https://docs.expo.dev/push-notifications/faq/</versions/latest/sdk/notifications#schedulenotificationasyncnotificationrequest-notificationrequestinput-promisestring>) in your app. This ensures all of your client-side logic is correct, and narrow things down to the server side or app credentials.
See here for some quick terminal commands you can use to get the push receipt[](https://docs.expo.dev/push-notifications/faq/<#see-here-for-some-quick-terminal-commands>)
  1. Send a notification:

```
curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/send" -d '{
 "to": "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",
 "title":"hello",
 "body": "world"
}'

```

  1. Use the resulting ticket `id` to request the push receipt:

```
curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/getReceipts" -d '{
 "ids": [
  "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
 ]
}'

```

### Notifications work in development, but not in release mode[](https://docs.expo.dev/push-notifications/faq/<#notifications-work-in-development-but-not-in-release-mode>)
This indicates that you have either misconfigured your credentials or didn't configure them at all in your production app. Expo Go uses Expo's credentials, which allows working on notifications in development.
When you build your app for the app stores, you need to generate and use your own credentials. On Android, follow [this guide](https://docs.expo.dev/push-notifications/faq/</push-notifications/fcm-credentials>). On iOS, this is handled by your [push key](https://docs.expo.dev/push-notifications/faq/</app-signing/app-credentials#push-notification-keys>) (revoking the push key associated with your app results in your notifications failing to be delivered. To fix that, add a new push key with `eas credentials`).
For more information, see [app signing](https://docs.expo.dev/push-notifications/faq/</app-signing/app-credentials>).
### Notifications occasionally stop coming through on Android[](https://docs.expo.dev/push-notifications/faq/<#notifications-occasionally-stop-coming-through-on-android>)
This is likely due to the `priority` level of the notifications you're sending. You can learn more about [Android priority](https://docs.expo.dev/push-notifications/faq/<https:/firebase.google.com/docs/cloud-messaging/http-server-ref#downstream-http-messages-json>). [Expo accepts four priorities](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications#message-request-format>):
  * `default`: manually mapped to the default priority documented by Apple and Google
  * `high`: mapped to the high priority level documented by Apple and Google
  * `normal`: mapped to the normal priority level documented by Apple and Google
  * (priority omitted): treated exactly as if `default` were specified


Setting the priority to `high` gives your notification the greatest likelihood that Android will display the notification.
### Handle expired push notification credentials[](https://docs.expo.dev/push-notifications/faq/<#handle-expired-push-notification-credentials>)
When your push notification credentials have expired, run `eas credentials`, choose iOS and a build profile, then remove your push notification key and generate a new one.
### Error message when sending a notification[](https://docs.expo.dev/push-notifications/faq/<#error-message-when-sending-a-notification>)
Check the `details` property of the returned push ticket or receipt for more information. [Read this](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications#errors>) for common error code responses and their associated solutions.
### Fetching a push token takes a long time on iOS[](https://docs.expo.dev/push-notifications/faq/<#fetching-a-push-token-takes-a-long-time-on-ios>)
`getDevicePushTokenAsync` and `getExpoPushTokenAsync` can sometimes take a long time to resolve on iOS. This is outside of `expo-notifications`'s control, as stated in Apple's [Troubleshooting Push Notifications](https://docs.expo.dev/push-notifications/faq/<https:/developer.apple.com/library/archive/technotes/tn2265/_index.html>) technical note:
> This is not necessarily an error condition. The system may not have Internet connectivity at all because it is out of range of any cell towers or Wi-Fi access points, or it may be in airplane mode. Instead of treating this as an error, your app should continue normally, disabling only that functionality that relies on push notifications.
Here are some ways our community members have resolved this issue:
Read the Apple's Technical Note on troubleshooting push notifications[](https://docs.expo.dev/push-notifications/faq/<#read-the-apples-technical-note-on-troubleshooting>)
Read Apple's [Technical Note on troubleshooting push notifications](https://docs.expo.dev/push-notifications/faq/<https:/developer.apple.com/library/archive/technotes/tn2265/_index.html>)! This is the single most reliable source of information on this problem. To help you grasp what they're suggesting:
  * Make sure the device has a reliable connection to the Internet (try turning off Wi-Fi or switching to another network, and disabling the firewall block on port 5223, as suggested in [this SO answer](https://docs.expo.dev/push-notifications/faq/<https:/stackoverflow.com/a/34332047/1123156>)).
  * Bare React Native apps must [manually enable the Push Notifications capability](https://docs.expo.dev/push-notifications/faq/</build-reference/ios-capabilities#manual-setup>). If you have trouble setting this up, refer to [this Stack Overflow answer](https://docs.expo.dev/push-notifications/faq/<https:/stackoverflow.com/a/10791240/1123156>). You may also want to try to debug this even further by logging persistent connection debug information as outlined by [this Stack Overflow answer](https://docs.expo.dev/push-notifications/faq/<https:/stackoverflow.com/a/8036052/1123156>).


Try again in a little while[](https://docs.expo.dev/push-notifications/faq/<#try-again-in-a-little-while>)
  * APNS servers near the device may be down as indicated by [this forum thread](https://docs.expo.dev/push-notifications/faq/<https:/developer.apple.com/forums/thread/52224>). Take a walk and try again later!
  * Try again in a few days as suggested by [this GitHub comment](https://docs.expo.dev/push-notifications/faq/<https:/github.com/expo/expo/issues/10369#issuecomment-717872956>).


Disable network sharing on your device[](https://docs.expo.dev/push-notifications/faq/<#disable-network-sharing-on-your-device>)
You may need to disable network sharing as this may impact the registration as suggested by [this Stack Overflow answer](https://docs.expo.dev/push-notifications/faq/<https:/stackoverflow.com/a/59156989/1123156>).
Restart your device[](https://docs.expo.dev/push-notifications/faq/<#restart-your-device>)
If you just changed the APNS servers where the app should be registering (by installing a TestFlight build over an Xcode build on the same device) you may need to restart your device as suggested by [this Stack Overflow answer](https://docs.expo.dev/push-notifications/faq/<https:/stackoverflow.com/a/59864028/1123156>).
Setup your device with a SIM card[](https://docs.expo.dev/push-notifications/faq/<#setup-your-device-with-a-sim-card>)
If the device you're experiencing this on hasn't been setup with a SIM card it looks like configuring it may help mitigate this bug as suggested by [this Stack Overflow answer](https://docs.expo.dev/push-notifications/faq/<https:/stackoverflow.com/a/19432504/1123156>).
## Miscellaneous[](https://docs.expo.dev/push-notifications/faq/<#miscellaneous>)
### Sending notifications directly through FCM and APNs[](https://docs.expo.dev/push-notifications/faq/<#sending-notifications-directly-through-fcm-and-apns>)
If you are not using [Expo push notification service](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications>) and instead, would like to communicate with Google and Apple directly, see [Send notifications with FCM and APNs](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications-custom>).
### Notification icon on Android is a grey or white square[](https://docs.expo.dev/push-notifications/faq/<#notification-icon-on-android-is-a-grey-or-white-square>)
This indicates an issue with the image asset you're providing. The image should be all white with a transparent background (this is required and enforced by Google, not Expo). For more information, see [this article](https://docs.expo.dev/push-notifications/faq/<https:/clevertap.com/blog/fixing-notification-icon-for-android-lollipop-and-above/>).
[Previous (Push notifications - Reference)Send notifications with FCM and APNs](https://docs.expo.dev/push-notifications/faq/</push-notifications/sending-notifications-custom>)[Next (More)Upgrade Expo SDK](https://docs.expo.dev/push-notifications/faq/</workflow/upgrading-expo-sdk-walkthrough>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/push-notifications/faq/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/push-notifications/faq/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/faq.mdx>)
  * Last updated on December 03, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/push-notifications/faq/<https:/expo.dev/privacy>).
On this page
[Expo push notification service FAQ](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#expo-push-notification-service-faq>)[Cost of the push notification service](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#cost-of-the-push-notification-service>)[Limit of sending notifications](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#limit-of-sending-notifications>)[Using Expo push notification service is not mandatory](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#using-expo-push-notification-service-is-not-mandatory>)[Connections to notification service are encrypted](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#connections-to-notification-service-are-encrypted>)[Contents of the notification are not stored](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#contents-of-the-notification-are-not-stored>)[Contents of the notifications may be seen by Expo staff](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#contents-of-the-notifications-may-be-seen-by-expo-staff>)[Delivery guarantees](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#delivery-guarantees>)[When and why does the ExpoPushToken change](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#when-and-why-does-the-expopushtoken-change>)[Push notifications troubleshooting](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#push-notifications-troubleshooting>)[Notifications aren't working](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#notifications-arent-working>)[Notifications work in development, but not in release mode](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#notifications-work-in-development-but-not-in-release-mode>)[Notifications occasionally stop coming through on Android](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#notifications-occasionally-stop-coming-through-on-android>)[Handle expired push notification credentials](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#handle-expired-push-notification-credentials>)[Error message when sending a notification](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#error-message-when-sending-a-notification>)[Fetching a push token takes a long time on iOS](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#fetching-a-push-token-takes-a-long-time-on-ios>)[Miscellaneous](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#miscellaneous>)[Sending notifications directly through FCM and APNs](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#sending-notifications-directly-through-fcm-and-apns>)[Notification icon on Android is a grey or white square](https://docs.expo.dev/push-notifications/faq/</push-notifications/faq/#notification-icon-on-android-is-a-grey-or-white-square>)
