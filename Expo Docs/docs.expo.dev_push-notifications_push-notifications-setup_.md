[](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/expo.dev>)[Docs](https://docs.expo.dev/push-notifications/push-notifications-setup/</>)
[Blog](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/github.com/expo/expo>)[](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/push-notifications/push-notifications-setup/</>)[Guides](https://docs.expo.dev/push-notifications/push-notifications-setup/</guides/overview>)[EAS](https://docs.expo.dev/push-notifications/push-notifications-setup/</eas>)[Reference](https://docs.expo.dev/push-notifications/push-notifications-setup/</versions/latest>)[Learn](https://docs.expo.dev/push-notifications/push-notifications-setup/</tutorial/overview>)
[Overview](https://docs.expo.dev/push-notifications/push-notifications-setup/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/push-notifications/push-notifications-setup/</workflow/overview>)[Configure with app config](https://docs.expo.dev/push-notifications/push-notifications-setup/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/push-notifications/push-notifications-setup/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/push-notifications/push-notifications-setup/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/push-notifications/push-notifications-setup/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/push-notifications/push-notifications-setup/</guides/permissions>)[Environment variables](https://docs.expo.dev/push-notifications/push-notifications-setup/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/push-notifications/push-notifications-setup/</router/introduction>)[Installation](https://docs.expo.dev/push-notifications/push-notifications-setup/</router/installation>)[Create pages](https://docs.expo.dev/push-notifications/push-notifications-setup/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/push-notifications/push-notifications-setup/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/push-notifications/push-notifications-setup/</router/layouts>)[Error handling](https://docs.expo.dev/push-notifications/push-notifications-setup/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/push-notifications/push-notifications-setup/</modules/overview>)[Get started](https://docs.expo.dev/push-notifications/push-notifications-setup/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/overview>)[About notification types](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/push-notifications/push-notifications-setup/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/push-notifications/push-notifications-setup/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/push-notifications/push-notifications-setup/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/push-notifications/push-notifications-setup/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/push-notifications/push-notifications-setup/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/push-notifications/push-notifications-setup/</archive>)[Expo Snack](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/expo.dev/mailing-list/signup>)
# Expo push notifications setup
[Edit this page](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/push-notifications-setup.mdx> "Edit content of this page on GitHub")
Learn how to set up push notifications, get credentials for development and production, and send a testing push notification.
[Edit this page](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/push-notifications-setup.mdx> "Edit content of this page on GitHub")
To utilize Expo push notification service, you must configure your app by installing a set of libraries, implement functions to handle notifications, and set up credentials for Android and iOS.
Complete the steps outlined in this guide or follow the more detailed video below. At the end, you'll be able to send a push notification and receive it on a device.
[![Expo Notifications with EAS | Complete Guide](https://i3.ytimg.com/vi/BCCjGtKtBjE/maxresdefault.jpg)Expo Notifications with EAS | Complete GuideLearn how to set up push notifications in an Expo project. This video covers configuring Firebase for FCM v1 on Android, setting up Android and iOS credentials on EAS, building with EAS Build, and testing with Expo Notifications tool.](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/www.youtube.com/watch?v=BCCjGtKtBjE>)
To get the client-side ready for push notifications, the following things are required:
  * The user's permission to send them push notifications.
  * The app's `ExpoPushToken`[](https://docs.expo.dev/push-notifications/push-notifications-setup/</versions/latest/sdk/notifications#expopushtoken>).

Do you want to use FCM / APNs directly, instead of the Expo push notification service?[](https://docs.expo.dev/push-notifications/push-notifications-setup/<#do-you-want-to-use-fcm->)
If you need finer-grained control over your notifications, communicating directly with FCM and APNs may be necessary. Expo does not lock you into using Expo Application Services, and the `expo-notifications` API is push-service agnostic. Learn how to ["Send notifications with FCM and APNs"](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/sending-notifications-custom>).
## Prerequisites[](https://docs.expo.dev/push-notifications/push-notifications-setup/<#prerequisites>)
> Important: Push notifications are not supported on Android Emulators and iOS Simulators. A real device is required.
The following steps described in this guide use [EAS Build](https://docs.expo.dev/push-notifications/push-notifications-setup/</build/introduction>). This is the easiest way to set up notifications since your EAS project will also contain the [notification credentials](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/push-notifications-setup#get-credentials-for-development-builds>). However, you can use the `expo-notifications` library without EAS Build by building [your project locally](https://docs.expo.dev/push-notifications/push-notifications-setup/</guides/local-app-development>).
1
## Install libraries[](https://docs.expo.dev/push-notifications/push-notifications-setup/<#install-libraries>)
Run the following command to install the `expo-notifications`, `expo-device` and `expo-constants` libraries:
Terminal
Copy
`- ``npx expo install expo-notifications expo-device expo-constants`
  * `expo-notifications`[](https://docs.expo.dev/push-notifications/push-notifications-setup/</versions/latest/sdk/notifications>) library is used to request a user's permission and to obtain the `ExpoPushToken` for sending push notifications.
  * `expo-device`[](https://docs.expo.dev/push-notifications/push-notifications-setup/</versions/latest/sdk/device>) is used to check whether the app is running on a physical device.
  * `expo-constants`[](https://docs.expo.dev/push-notifications/push-notifications-setup/</versions/latest/sdk/constants>) is used to get the `projectId` value from the app config.


2
## Add a minimal working example[](https://docs.expo.dev/push-notifications/push-notifications-setup/<#add-a-minimal-working-example>)
The code below shows a working example of how to register for, send, and receive push notifications in a React Native app. Copy and paste it into your project:
App.tsx
Copy
```
import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
Notifications.setNotificationHandler({
 handleNotification: async () => ({
  shouldShowAlert: true,
  shouldPlaySound: true,
  shouldSetBadge: true,
 }),
});
async function sendPushNotification(expoPushToken: string) {
 const message = {
  to: expoPushToken,
  sound: 'default',
  title: 'Original Title',
  body: 'And here is the body!',
  data: { someData: 'goes here' },
 };
 await fetch('https://exp.host/--/api/v2/push/send', {
  method: 'POST',
  headers: {
   Accept: 'application/json',
   'Accept-encoding': 'gzip, deflate',
   'Content-Type': 'application/json',
  },
  body: JSON.stringify(message),
 });
}
function handleRegistrationError(errorMessage: string) {
 alert(errorMessage);
 throw new Error(errorMessage);
}
async function registerForPushNotificationsAsync() {
 if (Platform.OS === 'android') {
  Notifications.setNotificationChannelAsync('default', {
   name: 'default',
   importance: Notifications.AndroidImportance.MAX,
   vibrationPattern: [0, 250, 250, 250],
   lightColor: '#FF231F7C',
  });
 }
 if (Device.isDevice) {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
   const { status } = await Notifications.requestPermissionsAsync();
   finalStatus = status;
  }
  if (finalStatus !== 'granted') {
   handleRegistrationError('Permission not granted to get push token for push notification!');
   return;
  }
  const projectId =
   Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
  if (!projectId) {
   handleRegistrationError('Project ID not found');
  }
  try {
   const pushTokenString = (
    await Notifications.getExpoPushTokenAsync({
     projectId,
    })
   ).data;
   console.log(pushTokenString);
   return pushTokenString;
  } catch (e: unknown) {
   handleRegistrationError(`${e}`);
  }
 } else {
  handleRegistrationError('Must use physical device for push notifications');
 }
}
export default function App() {
 const [expoPushToken, setExpoPushToken] = useState('');
 const [notification, setNotification] = useState<Notifications.Notification | undefined>(
  undefined
 );
 const notificationListener = useRef<Notifications.EventSubscription>();
 const responseListener = useRef<Notifications.EventSubscription>();
 useEffect(() => {
  registerForPushNotificationsAsync()
   .then(token => setExpoPushToken(token ?? ''))
   .catch((error: any) => setExpoPushToken(`${error}`));
  notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
   setNotification(notification);
  });
  responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
   console.log(response);
  });
  return () => {
   notificationListener.current &&
    Notifications.removeNotificationSubscription(notificationListener.current);
   responseListener.current &&
    Notifications.removeNotificationSubscription(responseListener.current);
  };
 }, []);
 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}><Text>Your Expo push token: {expoPushToken}</Text><View style={{ alignItems: 'center', justifyContent: 'center' }}><Text>Title: {notification && notification.request.content.title}</Text><Text>Body: {notification && notification.request.content.body}</Text><Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text></View><Button
    title="Press to Send Notification"
    onPress={async () => {
     await sendPushNotification(expoPushToken);
    }}
   /></View>
 );
}

Show More

```

### Configure `projectId`[](https://docs.expo.dev/push-notifications/push-notifications-setup/<#configure-projectid>)
Using the previous example, when you are registering for push notifications, you need to use `projectId`[](https://docs.expo.dev/push-notifications/push-notifications-setup/</versions/latest/sdk/constants#easconfig>). This property is used to attribute Expo push token to the specific project. For projects using EAS, the `projectId` property represents the Universally Unique Identifier (UUID) of that project.
`projectId` is set automatically when you create a development build. However, we recommend setting it manually in your project's code. To do so, you can use `expo-constants`[](https://docs.expo.dev/push-notifications/push-notifications-setup/</versions/latest/sdk/constants>) to get the `projectId` value from the app config.
```
const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
const pushTokenString = (await Notifications.getExpoPushTokenAsync({ projectId })).data;

```

One advantage of attributing the Expo push token to your project's ID is that it doesn't change when a project is transferred between different accounts or the existing account gets renamed.
3
## Get credentials for development builds[](https://docs.expo.dev/push-notifications/push-notifications-setup/<#get-credentials-for-development-builds>)
For Android and iOS, there are different requirements to set up your credentials.
Android
iOS
For Android, you need to configure Firebase Cloud Messaging (FCM) to get credentials and set up your Expo project.
Follow the steps in [Add Android FCM V1 credentials](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/fcm-credentials>) to set up your credentials.
> A paid Apple Developer Account is required to generate credentials.
For iOS, make sure you have [registered your iOS device](https://docs.expo.dev/push-notifications/push-notifications-setup/</develop/development-builds/create-a-build#create-a-development-build-for-the-device>) on which you want to test before running the `eas build` command for the first time.
If you create a development build for the first time, you'll be asked to enable push notifications. Answer yes to the following questions when prompted by the EAS CLI:
  * Setup Push Notifications for your project
  * Generating a new Apple Push Notifications service key


> If you are not using EAS Build, run `eas credentials` manually.
4
## Build the app[](https://docs.expo.dev/push-notifications/push-notifications-setup/<#build-the-app>)
Terminal
Copy
`- ``eas build`
5
## Test using the push notifications tool[](https://docs.expo.dev/push-notifications/push-notifications-setup/<#test-using-the-push-notifications-tool>)
After creating and installing the development build, you can use [Expo push notifications tool](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/expo.dev/notifications>) to quickly send a test notification to your device.
  1. Start the development server for your project:
Terminal
Copy
`- ``npx expo start`
  2. Open the development build on your device.
  3. After the `ExpoPushToken` is generated, enter the value in the Expo push notifications tool with other details (for example, a message title and body).
  4. Click on the Send a Notification button.
![Expo push notifications tool overview.](https://docs.expo.dev/static/images/notifications/push-notifications-tool-overview.png)


After sending the notification from the tool, you should see the notification on your device. Below is an example of an Android device receiving a push notification.
![An Android device receiving a push notification.](https://docs.expo.dev/static/images/notifications/notification-on-android.png)
[Previous (Push notifications)About notification types](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/what-you-need-to-know>)[Next (Push notifications)Send notifications with the Expo Push Service](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/sending-notifications>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/push-notifications-setup.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/push-notifications/push-notifications-setup/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/push-notifications-setup/#prerequisites>)[Install libraries](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/push-notifications-setup/#install-libraries>)[Add a minimal working example](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/push-notifications-setup/#add-a-minimal-working-example>)[Configure projectId](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/push-notifications-setup/#configure-projectid>)[Get credentials for development builds](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/push-notifications-setup/#get-credentials-for-development-builds>)[Build the app](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/push-notifications-setup/#build-the-app>)[Test using the push notifications tool](https://docs.expo.dev/push-notifications/push-notifications-setup/</push-notifications/push-notifications-setup/#test-using-the-push-notifications-tool>)
