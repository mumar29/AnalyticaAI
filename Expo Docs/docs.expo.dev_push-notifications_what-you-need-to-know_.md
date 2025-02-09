[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/expo.dev>)[Docs](https://docs.expo.dev/push-notifications/what-you-need-to-know/</>)
[Blog](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/github.com/expo/expo>)[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/push-notifications/what-you-need-to-know/</>)[Guides](https://docs.expo.dev/push-notifications/what-you-need-to-know/</guides/overview>)[EAS](https://docs.expo.dev/push-notifications/what-you-need-to-know/</eas>)[Reference](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest>)[Learn](https://docs.expo.dev/push-notifications/what-you-need-to-know/</tutorial/overview>)
[Overview](https://docs.expo.dev/push-notifications/what-you-need-to-know/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/push-notifications/what-you-need-to-know/</workflow/overview>)[Configure with app config](https://docs.expo.dev/push-notifications/what-you-need-to-know/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/push-notifications/what-you-need-to-know/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/push-notifications/what-you-need-to-know/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/push-notifications/what-you-need-to-know/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/push-notifications/what-you-need-to-know/</guides/permissions>)[Environment variables](https://docs.expo.dev/push-notifications/what-you-need-to-know/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/push-notifications/what-you-need-to-know/</router/introduction>)[Installation](https://docs.expo.dev/push-notifications/what-you-need-to-know/</router/installation>)[Create pages](https://docs.expo.dev/push-notifications/what-you-need-to-know/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/push-notifications/what-you-need-to-know/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/push-notifications/what-you-need-to-know/</router/layouts>)[Error handling](https://docs.expo.dev/push-notifications/what-you-need-to-know/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/push-notifications/what-you-need-to-know/</modules/overview>)[Get started](https://docs.expo.dev/push-notifications/what-you-need-to-know/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/overview>)[About notification types](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/push-notifications/what-you-need-to-know/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/push-notifications/what-you-need-to-know/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/push-notifications/what-you-need-to-know/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/push-notifications/what-you-need-to-know/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/push-notifications/what-you-need-to-know/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/push-notifications/what-you-need-to-know/</archive>)[Expo Snack](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/expo.dev/mailing-list/signup>)
# What you need to know about notifications
[Edit this page](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/what-you-need-to-know.mdx> "Edit content of this page on GitHub")
Learn about notification types and their behavior before you get started.
[Edit this page](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/what-you-need-to-know.mdx> "Edit content of this page on GitHub")
Notifications have a large surface area and differences across platforms can make implementing notifications intimidating.
Whether you are starting with notifications or have existing knowledge, this document aims to give you a quick start by explaining the different notification types and their behavior that you should understand.
Remember that Expo's notification support builds on top of the native functionality provided by Android and iOS. The same concepts and behaviors from native platforms apply to Expo apps. If you are unsure about a specific notification feature, see each platform's [official documentation](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know#external-references>).
## Remote and Local notifications[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#remote-and-local-notifications>)
  1. Push Notifications: (Also called "remote notifications") Notifications that are sent to a user's device from a remote server.
  2. Local Notifications: (Also called "in-app notifications") Notifications that are created and displayed from within the app. Since many of the APIs that create these notifications will create them at a particular time, these may also sometimes be called "scheduled notifications".


`expo-notifications` supports both push and local notifications. You must use a [development build](https://docs.expo.dev/push-notifications/what-you-need-to-know/</develop/development-builds/introduction>) to use push notifications since they are not supported in Expo Go.
The rest of this guide focuses on push notifications.
## Push notification delivery[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#push-notification-delivery>)
When a push notification arrives to your app, its behavior depends on the app's state and the type of notification. Let's clarify the terminology:
### Application states[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#application-states>)
  * Foreground: The app is actively running in the foreground.
  * Background: The app is running in the background, "minimized".
  * Terminated: The app was "killed", usually by a swipe-away gesture in the app switcher. On Android, if the user force-stops the app from device settings, it must be manually reopened for notifications to start working (this is a limitation of Android).


### Push Notification Behaviors[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#push-notification-behaviors>)
For any kind of notification, when the app is in the foreground, the app is in control of how an incoming notification is handled. The app may present it directly, show some custom in-app UI, or even ignore it (this is controlled by `NotificationHandler`[](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest/sdk/notifications#setnotificationhandlerhandler>)). When the app is not in the foreground, the behavior depends on the type of notification.
The table below summarizes what happens when a push notification is delivered to the device:
Notification Type| App in Foreground| App in Background| App Terminated  
---|---|---|---  
[Notification Message](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know#notification-message>) and [Notification Message with data payload](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know#notification-message-with-data-payload>)| delivery runs `NotificationReceivedListener`[](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest/sdk/notifications#addnotificationreceivedlistenerlistener>) and [JS task](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest/sdk/notifications#registertaskasynctaskname>)| OS shows notification| OS shows notification  
[Headless Background Notification](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know#headless-background-notifications>)| delivery runs `NotificationReceivedListener`[](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest/sdk/notifications#addnotificationreceivedlistenerlistener>) and [JS task](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest/sdk/notifications#registertaskasynctaskname>)| delivery runs [JS task](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest/sdk/notifications#registertaskasynctaskname>)| delivery runs [JS task](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest/sdk/notifications#registertaskasynctaskname>)  
For the cases when user interacts with the notification (for example by pressing an action button), the following handlers are made available to you.
App state| Listener(s) triggered  
---|---  
Foreground| `NotificationReceivedListener` and `NotificationResponseReceivedListener`  
Background| `NotificationResponseReceivedListener`  
Terminated| `useLastNotificationResponse` or `getLastNotificationResponseAsync`  
In the table above, whenever `NotificationResponseReceivedListener` is triggered, the same would apply to the `useLastNotificationResponse` hook.
> When the app is not running or killed and is restarted by tapping on a notification, the `NotificationResponseReceivedListener` may or may not be triggered. To reliably capture the response, we recommend using `useLastNotificationResponse` or `getLastNotificationResponseAsync`. We plan to improve this behavior in a future release.
## Push notification types[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#push-notification-types>)
### Notification Message[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#notification-message>)
A Notification Message is a notification that specifies presentational information, such as a title or body text.
  * On Android, this corresponds to a push notification request that contains `AndroidNotification`[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#AndroidNotification>)
  * On iOS, this corresponds to a push notification request that contains `aps.alert`[ dictionary](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/developer.apple.com/documentation/usernotifications/generating-a-remote-notification#Create-the-JSON-payload>) and the `apns-push-type` header set to `alert`.


When you use the Expo Push Service, and specify `title`, `subtitle`, `body`, `icon`, or `channelId`, the resulting push notification request is a Notification Message.
The typical use case for a Notification Message is to have it presented to the user immediately without any extra processing being done.
### Notification Message with data payload[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#notification-message-with-data-payload>)
This is an Android-only term ([see the official docs](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/firebase.google.com/docs/cloud-messaging/concept-options#data_messages>)) where a push notification request contains both `data` field and a `notification` field.
On iOS, extra data may be part of a regular Notification Message request. Apple doesn't distinguish between Notification Message which does and does not carry data.
### Headless Background Notifications[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#headless-background-notifications>)
Headless Notification is a remote notification that doesn't directly specify presentational information such as the title or body text. With the exception below*, headless notifications are not presented to users. Instead, they carry data (JSON) which is processed by a JavaScript task defined in your app via `registerTaskAsync`[](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest/sdk/notifications#registertaskasynctaskname>). The task may perform arbitrary logic. For example, write to `AsyncStorage`, make an api request, or present a local notification whose content is taken from the push notification's data.
> We use the term "Headless Background Notification" to refer to the [Data Message](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/firebase.google.com/docs/cloud-messaging/concept-options#data_messages>) on Android and the [background notification](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/developer.apple.com/documentation/usernotifications/pushing-background-updates-to-your-app#Create-a-background-notification>) on iOS. Their key similarities are that both of these notification types allow sending only JSON data, and background processing by the app.
Headless Background Notifications have the ability to run custom JavaScript in response to a notification _even when the app is terminated_. This is powerful but comes with a limitation: even when the notification is delivered to the device, the OS does not guarantee its delivery to your app. This may happen due to a variety of reasons, such as when [Doze mode](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/developer.android.com/training/monitoring-device-state/doze-standby>) is enabled on Android, or when you send too many background notifications — Apple recommends not to [send more than two or three per hour](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/developer.apple.com/documentation/usernotifications/pushing-background-updates-to-your-app#overview>).
When you use the Expo Push Service, and specify only `data` and `_contentAvailable: true` (and other non-interactive fields such as `ttl`), the resulting push notification request produces a Headless Background Notification.
> To use Headless Background Notifications on iOS, you have to [configure](https://docs.expo.dev/push-notifications/what-you-need-to-know/</versions/latest/sdk/notifications#background-notification-configuration>) them first.
The rule of thumb is to prefer a regular Notification Message if you don't require running JavaScript in the background.
* The exception is when you specify `title` or `message` inside of `data`[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/github.com/expo/expo-server-sdk-node/blob/88ed8fbfc1345f13911d8a8d30a5d8009aaa8892/src/ExpoClient.ts#L349>). In that case, `expo-notifications` package automatically presents the headless notification on Android, but not on iOS. We're planning to make this behavior more consistent across platforms in a future release.
### Data-only Notifications[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#data-only-notifications>)
Android has a concept of [Data Messages](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/firebase.google.com/docs/cloud-messaging/concept-options#data_messages>). iOS does not have exactly the same concept, but a close equivalent is what we call [Headless Background Notifications](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know#headless-background-notifications>).
You may also come across the term "silent notification", which is yet another name for notifications that don't present anything to the user — we describe these as [Headless Background Notifications](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know#headless-background-notifications>).
## External references[](https://docs.expo.dev/push-notifications/what-you-need-to-know/<#external-references>)
This is a non-exhaustive list of official resources for push notifications on Android and iOS:
  * [Android - About FCM messages](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/firebase.google.com/docs/cloud-messaging/concept-options>)
  * [iOS - Generating a remote notification](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/developer.apple.com/documentation/usernotifications/generating-a-remote-notification>)
  * [iOS - Pushing background updates to your app](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/developer.apple.com/documentation/usernotifications/pushing-background-updates-to-your-app>)


[Previous (Push notifications)Overview](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/overview>)[Next (Push notifications)Expo push notifications setup](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/push-notifications-setup>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/what-you-need-to-know.mdx>)
  * Last updated on January 11, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/push-notifications/what-you-need-to-know/<https:/expo.dev/privacy>).
On this page
[Remote and Local notifications](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#remote-and-local-notifications>)[Push notification delivery](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#push-notification-delivery>)[Application states](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#application-states>)[Push Notification Behaviors](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#push-notification-behaviors>)[Push notification types](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#push-notification-types>)[Notification Message](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#notification-message>)[Notification Message with data payload](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#notification-message-with-data-payload>)[Headless Background Notifications](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#headless-background-notifications>)[Data-only Notifications](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#data-only-notifications>)[External references](https://docs.expo.dev/push-notifications/what-you-need-to-know/</push-notifications/what-you-need-to-know/#external-references>)
