[](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/advanced/nesting-navigators/</>)
[Blog](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/advanced/nesting-navigators/</>)[Guides](https://docs.expo.dev/router/advanced/nesting-navigators/</guides/overview>)[EAS](https://docs.expo.dev/router/advanced/nesting-navigators/</eas>)[Reference](https://docs.expo.dev/router/advanced/nesting-navigators/</versions/latest>)[Learn](https://docs.expo.dev/router/advanced/nesting-navigators/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/advanced/nesting-navigators/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/advanced/nesting-navigators/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/advanced/nesting-navigators/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/advanced/nesting-navigators/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/advanced/nesting-navigators/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/advanced/nesting-navigators/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/advanced/nesting-navigators/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/advanced/nesting-navigators/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/advanced/nesting-navigators/</router/introduction>)[Installation](https://docs.expo.dev/router/advanced/nesting-navigators/</router/installation>)[Create pages](https://docs.expo.dev/router/advanced/nesting-navigators/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/advanced/nesting-navigators/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/advanced/nesting-navigators/</router/layouts>)[Error handling](https://docs.expo.dev/router/advanced/nesting-navigators/</router/error-handling>)
Navigation patterns
[Root layout](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/root-layout>)[Stack](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/stack>)[Tabs](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/tabs>)[Drawer](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/drawer>)[Nesting navigators](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/nesting-navigators>)[Modals](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/modals>)[Shared routes](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/shared-routes>)[Custom tabs](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/custom-tabs>)
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/advanced/nesting-navigators/</modules/overview>)[Get started](https://docs.expo.dev/router/advanced/nesting-navigators/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/advanced/nesting-navigators/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/advanced/nesting-navigators/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/advanced/nesting-navigators/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/advanced/nesting-navigators/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/advanced/nesting-navigators/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/advanced/nesting-navigators/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/advanced/nesting-navigators/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/advanced/nesting-navigators/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/advanced/nesting-navigators/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/advanced/nesting-navigators/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/advanced/nesting-navigators/</archive>)[Expo Snack](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/expo.dev/mailing-list/signup>)
# Nesting navigators
[Edit this page](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/nesting-navigators.mdx> "Edit content of this page on GitHub")
Learn how to nest navigators in Expo Router.
[Edit this page](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/nesting-navigators.mdx> "Edit content of this page on GitHub")
> Navigation UI elements (Link, Tabs, Stack) may move out of the Expo Router library in the future.
Nesting navigators allow rendering a navigator inside the screen of another navigator. This guide is an extension of [React Navigation: Nesting navigators](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/reactnavigation.org/docs/nesting-navigators>) to Expo Router. It provides an example of how nesting navigators work when using Expo Router.
## Example[](https://docs.expo.dev/router/advanced/nesting-navigators/<#example>)
Consider the following file structure which is used as an example:
`app`
`_layout.tsx`
`index.tsx`
`home`
`_layout.tsx`
`feed.tsx`
`messages.tsx`
In the above example, app/home/feed.tsx matches `/home/feed`, and app/home/messages.tsx matches `/home/messages`.
app/_layout.tsx
Copy
```
import { Stack } from 'expo-router';
export default Stack;

```

Both app/home/_layout.tsx and app/index.tsx below are nested in the app/_layout.tsx layout so that it will be rendered as a stack.
app/home/_layout.tsx
Copy
```
import { Tabs } from 'expo-router';
export default Tabs;

```

app/index.tsx
Copy
```
import { Link } from 'expo-router';
export default function Root() {
 return <Link href="/home/messages">Navigate to nested route</Link>;
}

```

Both app/home/feed.tsx and app/home/messages.tsx below are nested in the home/_layout.tsx layout, so it will be rendered as a tab.
app/home/feed.tsx
Copy
```
import { View, Text } from 'react-native';
export default function Feed() {
 return (
  <View><Text>Feed screen</Text></View>
 );
}

```

app/home/messages.tsx
Copy
```
import { View, Text } from 'react-native';
export default function Messages() {
 return (
  <View><Text>Messages screen</Text></View>
 );
}

```

## Navigate to a screen in a nested navigator[](https://docs.expo.dev/router/advanced/nesting-navigators/<#navigate-to-a-screen-in-a-nested-navigator>)
In React Navigation, navigating to a specific nested screen can be controlled by passing the screen name in params. This renders the specified nested screen instead of the initial screen for that nested navigator.
For example, from the initial screen inside the `root` navigator, you want to navigate to a screen called `media` inside `settings` (a nested navigator). In React Navigation, this is done as shown in the example below:
React Navigation
Copy
```
navigation.navigate('root', {
 screen: 'settings',
 params: {
  screen: 'media',
 },
});

```

In Expo Router, you can use `router.push()` to achieve the same result. There is no need to pass the screen name in the params explicitly.
Expo Router
Copy
```
router.push('/root/settings/media');

```

[Previous (Expo Router - Navigation patterns)Drawer](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/drawer>)[Next (Expo Router - Navigation patterns)Modals](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/modals>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/nesting-navigators.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/advanced/nesting-navigators/<https:/expo.dev/privacy>).
On this page
[Example](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/nesting-navigators/#example>)[Navigate to a screen in a nested navigator](https://docs.expo.dev/router/advanced/nesting-navigators/</router/advanced/nesting-navigators/#navigate-to-a-screen-in-a-nested-navigator>)
