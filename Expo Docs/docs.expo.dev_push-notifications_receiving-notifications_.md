[](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/expo.dev>)[Docs](https://docs.expo.dev/push-notifications/receiving-notifications/</>)
[Blog](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/github.com/expo/expo>)[](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/push-notifications/receiving-notifications/</>)[Guides](https://docs.expo.dev/push-notifications/receiving-notifications/</guides/overview>)[EAS](https://docs.expo.dev/push-notifications/receiving-notifications/</eas>)[Reference](https://docs.expo.dev/push-notifications/receiving-notifications/</versions/latest>)[Learn](https://docs.expo.dev/push-notifications/receiving-notifications/</tutorial/overview>)
[Overview](https://docs.expo.dev/push-notifications/receiving-notifications/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/push-notifications/receiving-notifications/</workflow/overview>)[Configure with app config](https://docs.expo.dev/push-notifications/receiving-notifications/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/push-notifications/receiving-notifications/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/push-notifications/receiving-notifications/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/push-notifications/receiving-notifications/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/push-notifications/receiving-notifications/</guides/permissions>)[Environment variables](https://docs.expo.dev/push-notifications/receiving-notifications/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/push-notifications/receiving-notifications/</router/introduction>)[Installation](https://docs.expo.dev/push-notifications/receiving-notifications/</router/installation>)[Create pages](https://docs.expo.dev/push-notifications/receiving-notifications/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/push-notifications/receiving-notifications/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/push-notifications/receiving-notifications/</router/layouts>)[Error handling](https://docs.expo.dev/push-notifications/receiving-notifications/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/push-notifications/receiving-notifications/</modules/overview>)[Get started](https://docs.expo.dev/push-notifications/receiving-notifications/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/overview>)[About notification types](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/push-notifications/receiving-notifications/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/push-notifications/receiving-notifications/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/push-notifications/receiving-notifications/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/push-notifications/receiving-notifications/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/push-notifications/receiving-notifications/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/push-notifications/receiving-notifications/</archive>)[Expo Snack](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/expo.dev/mailing-list/signup>)
# Handle incoming notifications
[Edit this page](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/receiving-notifications.mdx> "Edit content of this page on GitHub")
Learn how to respond to a notification received by your app and take action based on the event.
[Edit this page](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/receiving-notifications.mdx> "Edit content of this page on GitHub")
The `expo-notifications`[](https://docs.expo.dev/push-notifications/receiving-notifications/</versions/latest/sdk/notifications>) library contains event listeners that handle how your app responds when receiving a notification.
## Notification event listeners[](https://docs.expo.dev/push-notifications/receiving-notifications/<#notification-event-listeners>)
The `addNotificationReceivedListener`[](https://docs.expo.dev/push-notifications/receiving-notifications/</versions/latest/sdk/notifications#addnotificationreceivedlistenerlistener>) and `addNotificationResponseReceivedListener`[](https://docs.expo.dev/push-notifications/receiving-notifications/</versions/latest/sdk/notifications#addnotificationresponsereceivedlistenerlistener>) event listeners receive an object when a notification is received or interacted with.
These listeners allow you to add behavior when notifications are received while your app is open and foregrounded and when your app is backgrounded or closed and the user taps on the notification.
```
useEffect(() => {
 registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
 notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  setNotification(notification);
 });
 responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  console.log(response);
 });
 return () => {
  Notifications.removeNotificationSubscription(notificationListener.current);
  Notifications.removeNotificationSubscription(responseListener.current);
 };
}, []);

```
Android notification object example from `addNotificationReceivedListener`[](https://docs.expo.dev/push-notifications/receiving-notifications/<#android-notification-object-example-from-addnotificationreceivedlistener>)
Sample of the `notification` object received by the callback function when using `Notifications.addNotificationReceivedListener`:
```
// console.log(notification);
{
 "request": {
  "trigger": {
   "remoteMessage": {
    "originalPriority": 2,
    "sentTime": 1724782348210,
    "notification": {
     "usesDefaultVibrateSettings": false,
     "color": null,
     "channelId": null,
     "visibility": null,
     "sound": null,
     "tag": null,
     "bodyLocalizationArgs": null,
     "imageUrl": null,
     "title": "Chat App",
     "ticker": null,
     "eventTime": null,
     "body": "New message from John Doe",
     "titleLocalizationKey": null,
     "notificationPriority": null,
     "icon": null,
     "usesDefaultLightSettings": false,
     "sticky": false,
     "link": null,
     "titleLocalizationArgs": null,
     "bodyLocalizationKey": null,
     "usesDefaultSound": false,
     "clickAction": null,
     "localOnly": false,
     "lightSettings": null,
     "notificationCount": null
    },
    "data": {
     "channelId": "default",
     "message": "New message from John Doe",
     "title": "Chat App",
     "body": "{\"senderId\":\"user123\",\"senderName\":\"John Doe\",\"messageId\":\"msg789\",\"conversationId\":\"conversation-456\",\"messageType\":\"text\",\"timestamp\":1724766427}",
     "scopeKey": "@betoatexpo/expo-notifications-app",
     "experienceId": "@betoatexpo/expo-notifications-app",
     "projectId": "51092087-87a4-4b12-8008-145625477434"
    },
    "to": null,
    "ttl": 0,
    "collapseKey": "dev.expo.notificationsapp",
    "messageType": null,
    "priority": 2,
    "from": "115310547649",
    "messageId": "0:1724782348220771%0f02879c0f02879c"
   },
   "channelId": "default",
   "type": "push"
  },
  "content": {
   "autoDismiss": true,
   "title": "Chat App",
   "badge": null,
   "sticky": false,
   "sound": "default",
   "body": "New message from John Doe",
   "subtitle": null,
   "data": {
    "senderId": "user123",
    "senderName": "John Doe",
    "messageId": "msg789",
    "conversationId": "conversation-456",
    "messageType": "text",
    "timestamp": 1724766427
   }
  },
  "identifier": "0:1724782348220771%0f02879c0f02879c"
 },
 "date": 1724782348210
}

Show More

```

You can directly access the notification custom data by logging the `notification.request.content.data` object:
```
// console.log(notification.request.content.data);
{
 "senderId": "user123",
 "senderName": "John Doe",
 "messageId": "msg789",
 "conversationId": "conversation-456",
 "messageType": "text",
 "timestamp": 1724766427
}

```

iOS notification object example from `addNotificationReceivedListener`[](https://docs.expo.dev/push-notifications/receiving-notifications/<#ios-notification-object-example-from-addnotificationreceivedlistener>)
Sample of the `notification` object received by the callback function when using `Notifications.addNotificationReceivedListener`:
```
// console.log(notification);
{
 "request": {
  "trigger": {
   "class": "UNPushNotificationTrigger",
   "type": "push",
   "payload": {
    "experienceId": "@betoatexpo/expo-notifications-app",
    "projectId": "51092087-87a4-4b12-8008-145625477434",
    "scopeKey": "@betoatexpo/expo-notifications-app",
    "aps": {
     "thread-id": "",
     "category": "",
     "badge": 1,
     "alert": {
      "subtitle": "Hey there! How's your day going?",
      "title": "Chat App",
      "launch-image": "",
      "body": "New message from John Doe"
     },
     "sound": "default"
    },
    "body": {
     "messageId": "msg789",
     "timestamp": 1724766427,
     "messageType": "text",
     "senderId": "user123",
     "senderName": "John Doe",
     "conversationId": "conversation-456"
    }
   }
  },
  "identifier": "3AEB849E-9059-4D09-BC3B-9A0B104CF062",
  "content": {
   "body": "New message from John Doe",
   "sound": "default",
   "launchImageName": "",
   "badge": 1,
   "subtitle": "Hey there! How's your day going?",
   "title": "Chat App",
   "data": {
    "conversationId": "conversation-456",
    "senderName": "John Doe",
    "senderId": "user123",
    "messageType": "text",
    "timestamp": 1724766427,
    "messageId": "msg789"
   },
   "summaryArgument": null,
   "categoryIdentifier": "",
   "attachments": [],
   "interruptionLevel": "active",
   "threadIdentifier": "",
   "targetContentIdentifier": null,
   "summaryArgumentCount": 0
  }
 },
 "date": 1724798493.0589335
}

Show More

```

You can directly access the notification custom data by logging the `notification.request.content.data` object:
```
// console.log(notification.request.content.data);
{
 "senderId": "user123",
 "senderName": "John Doe",
 "messageId": "msg789",
 "conversationId": "conversation-456",
 "messageType": "text",
 "timestamp": 1724766427
}

```

For more information on these objects, see `Notification`[](https://docs.expo.dev/push-notifications/receiving-notifications/</versions/latest/sdk/notifications#notification>) documentation.
## Foreground notification behavior[](https://docs.expo.dev/push-notifications/receiving-notifications/<#foreground-notification-behavior>)
To handle the behavior when notifications are received when your app is foregrounded, use `Notifications.setNotificationHandler`[](https://docs.expo.dev/push-notifications/receiving-notifications/</versions/latest/sdk/notifications#handling-incoming-notifications-when-the-app-is>) with the `handleNotification()` callback to set the following options:
  * `shouldShowAlert`
  * `shouldPlaySound`
  * `shouldSetBadge`

```
Notifications.setNotificationHandler({
 handleNotification: async () => ({
  shouldShowAlert: true,
  shouldPlaySound: false,
  shouldSetBadge: false,
 }),
});

```

## Closed notification behavior[](https://docs.expo.dev/push-notifications/receiving-notifications/<#closed-notification-behavior>)
On Android, users can set certain OS-level settings, usually revolving around performance and battery optimization, that can prevent notifications from being delivered when the app is closed. For example, one such setting is the Deep Clear option on OnePlus devices using Android 9 and lower versions.
[Previous (Push notifications)Send notifications with the Expo Push Service](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/sending-notifications>)[Next (Push notifications - Reference)Add Android FCM V1 credentials](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/fcm-credentials>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/receiving-notifications.mdx>)
  * Last updated on December 03, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/push-notifications/receiving-notifications/<https:/expo.dev/privacy>).
On this page
[Notification event listeners](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/receiving-notifications/#notification-event-listeners>)[Foreground notification behavior](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/receiving-notifications/#foreground-notification-behavior>)[Closed notification behavior](https://docs.expo.dev/push-notifications/receiving-notifications/</push-notifications/receiving-notifications/#closed-notification-behavior>)
