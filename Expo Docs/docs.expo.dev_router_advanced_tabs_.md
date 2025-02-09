[](https://docs.expo.dev/router/advanced/tabs/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/advanced/tabs/</>)
[Blog](https://docs.expo.dev/router/advanced/tabs/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/advanced/tabs/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/advanced/tabs/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/advanced/tabs/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/advanced/tabs/</>)[Guides](https://docs.expo.dev/router/advanced/tabs/</guides/overview>)[EAS](https://docs.expo.dev/router/advanced/tabs/</eas>)[Reference](https://docs.expo.dev/router/advanced/tabs/</versions/latest>)[Learn](https://docs.expo.dev/router/advanced/tabs/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/advanced/tabs/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/advanced/tabs/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/advanced/tabs/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/advanced/tabs/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/advanced/tabs/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/advanced/tabs/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/advanced/tabs/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/advanced/tabs/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/advanced/tabs/</router/introduction>)[Installation](https://docs.expo.dev/router/advanced/tabs/</router/installation>)[Create pages](https://docs.expo.dev/router/advanced/tabs/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/advanced/tabs/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/advanced/tabs/</router/layouts>)[Error handling](https://docs.expo.dev/router/advanced/tabs/</router/error-handling>)
Navigation patterns
[Root layout](https://docs.expo.dev/router/advanced/tabs/</router/advanced/root-layout>)[Stack](https://docs.expo.dev/router/advanced/tabs/</router/advanced/stack>)[Tabs](https://docs.expo.dev/router/advanced/tabs/</router/advanced/tabs>)[Drawer](https://docs.expo.dev/router/advanced/tabs/</router/advanced/drawer>)[Nesting navigators](https://docs.expo.dev/router/advanced/tabs/</router/advanced/nesting-navigators>)[Modals](https://docs.expo.dev/router/advanced/tabs/</router/advanced/modals>)[Shared routes](https://docs.expo.dev/router/advanced/tabs/</router/advanced/shared-routes>)[Custom tabs](https://docs.expo.dev/router/advanced/tabs/</router/advanced/custom-tabs>)
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/advanced/tabs/</modules/overview>)[Get started](https://docs.expo.dev/router/advanced/tabs/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/advanced/tabs/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/advanced/tabs/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/advanced/tabs/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/advanced/tabs/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/advanced/tabs/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/advanced/tabs/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/advanced/tabs/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/advanced/tabs/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/advanced/tabs/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/advanced/tabs/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/advanced/tabs/</archive>)[Expo Snack](https://docs.expo.dev/router/advanced/tabs/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/advanced/tabs/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/advanced/tabs/<https:/expo.dev/mailing-list/signup>)
# Tabs
[Edit this page](https://docs.expo.dev/router/advanced/tabs/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/tabs.mdx> "Edit content of this page on GitHub")
Learn how to use the Tabs layout in Expo Router.
[Edit this page](https://docs.expo.dev/router/advanced/tabs/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/tabs.mdx> "Edit content of this page on GitHub")
Tabs are a common way to navigate between different sections of an app. Expo Router provides a tabs layout to help you create a tab bar at the bottom of your app. The fastest way to get started is to use a template. See the [quick start installation](https://docs.expo.dev/router/advanced/tabs/</router/installation#quick-start>) to get started.
Continue reading to add tabs to an existing project or to customize your app's tabs.
## Get started[](https://docs.expo.dev/router/advanced/tabs/<#get-started>)
You can use file-based routing to create a tabs layout. Here's an example file structure:
`app`
`_layout.tsx`
`(tabs)`
`_layout.tsx`
`index.tsx`
`settings.tsx`
This file structure produces a layout with a tab bar at the bottom of the screen. The tab bar will have two tabs: Home and Settings:
![A screenshot of a tab bar with two tabs: Home and Settings.](https://docs.expo.dev/static/images/expo-router/tabs.png)
You can use the app/_layout.tsx file to define your app's root layout:
app/_layout.tsx
Copy
```
import { Stack } from 'expo-router/stack';
export default function Layout() {
 return (
  <Stack><Stack.Screen name="(tabs)" options={{ headerShown: false }} /></Stack>
 );
}

```

The (tabs) directory is a special directory name that tells Expo Router to use the `Tabs` layout.
From the file structure, the (tabs) directory has three files. The first is (tabs)/_layout.tsx. This file is the main layout file for the tab bar and each tab. Inside it, you can control how the tab bar and each tab button look and behave.
app/(tabs)/_layout.tsx
Copy
```
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
export default function TabLayout() {
 return (
  <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}><Tabs.Screen
    name="index"
    options={{
     title: 'Home',
     tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
    }}
   /><Tabs.Screen
    name="settings"
    options={{
     title: 'Settings',
     tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
    }}
   /></Tabs>
 );
}

Show More

```

Finally, you have the two tab files that make up the content of the tabs: app/(tabs)/index.tsx and app/(tabs)/settings.tsx.
app/(tabs)/index.tsx & app/(tabs)/settings.tsx
Copy
```
import { View, Text, StyleSheet } from 'react-native';
export default function Tab() {
 return (
  <View style={styles.container}><Text>Tab [Home|Settings]</Text></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
});

```

The tab file named index.tsx is the default tab when the app loads. The second tab file settings.tsx shows how you can add more tabs to the tab bar.
## Screen options[](https://docs.expo.dev/router/advanced/tabs/<#screen-options>)
The tabs layout wraps the [Bottom Tabs Navigator](https://docs.expo.dev/router/advanced/tabs/<https:/reactnavigation.org/docs/bottom-tab-navigator>) from React Navigation. You can use the [options presented in the React Navigation documentation](https://docs.expo.dev/router/advanced/tabs/<https:/reactnavigation.org/docs/bottom-tab-navigator/#options>) to customize the tab bar or each tab.
## Advanced[](https://docs.expo.dev/router/advanced/tabs/<#advanced>)
### Hiding a tab[](https://docs.expo.dev/router/advanced/tabs/<#hiding-a-tab>)
Sometimes you want a route to exist but not show up in the tab bar. You can pass `href: null` to disable the button:
app/(tabs)/_layout.tsx
Copy
```
import { Tabs } from 'expo-router';
export default function TabLayout() {
 return (
  <Tabs><Tabs.Screen
    name="index"
    options={{
     href: null,
    }}
   /></Tabs>
 );
}

```

### Dynamic routes[](https://docs.expo.dev/router/advanced/tabs/<#dynamic-routes>)
You can use a dynamic route in a tab bar. For example, you have a `[user]` tab that shows a user's profile. You can use the `href` option to link to a specific user's profile.
app/(tabs)/_layout.tsx
Copy
```
import { Tabs } from 'expo-router';
export default function TabLayout() {
 return (
  <Tabs>
   <Tabs.Screen
    {/* Name of the dynamic route.*/}
    name="[user]"
    options={{
     {/* Ensure the tab always links to the same href.*/}
     href: '/evanbacon',
     {/* OR you can use the href object.*/}
     href: {
      pathname: '/[user]',
      params: {
       user: 'evanbacon',
      },
     },
    }}
   />
  </Tabs>
 );
}

Show More

```

> Note: When adding a dynamic route in your tab layout, ensure that the dynamic route defined is unique. You cannot have two screens for the same dynamic route. For example, you cannot have two `[user]` tabs. If you need to have multiple dynamic routes, create a custom navigator.
[Previous (Expo Router - Navigation patterns)Stack](https://docs.expo.dev/router/advanced/tabs/</router/advanced/stack>)[Next (Expo Router - Navigation patterns)Drawer](https://docs.expo.dev/router/advanced/tabs/</router/advanced/drawer>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/advanced/tabs/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/advanced/tabs/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/tabs.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/advanced/tabs/<https:/expo.dev/privacy>).
On this page
[Get started](https://docs.expo.dev/router/advanced/tabs/</router/advanced/tabs/#get-started>)[Screen options](https://docs.expo.dev/router/advanced/tabs/</router/advanced/tabs/#screen-options>)[Advanced](https://docs.expo.dev/router/advanced/tabs/</router/advanced/tabs/#advanced>)[Hiding a tab](https://docs.expo.dev/router/advanced/tabs/</router/advanced/tabs/#hiding-a-tab>)[Dynamic routes](https://docs.expo.dev/router/advanced/tabs/</router/advanced/tabs/#dynamic-routes>)
