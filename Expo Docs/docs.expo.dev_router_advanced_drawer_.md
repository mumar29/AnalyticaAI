[](https://docs.expo.dev/router/advanced/drawer/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/advanced/drawer/</>)
[Blog](https://docs.expo.dev/router/advanced/drawer/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/advanced/drawer/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/advanced/drawer/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/advanced/drawer/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/advanced/drawer/</>)[Guides](https://docs.expo.dev/router/advanced/drawer/</guides/overview>)[EAS](https://docs.expo.dev/router/advanced/drawer/</eas>)[Reference](https://docs.expo.dev/router/advanced/drawer/</versions/latest>)[Learn](https://docs.expo.dev/router/advanced/drawer/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/advanced/drawer/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/advanced/drawer/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/advanced/drawer/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/advanced/drawer/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/advanced/drawer/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/advanced/drawer/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/advanced/drawer/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/advanced/drawer/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/advanced/drawer/</router/introduction>)[Installation](https://docs.expo.dev/router/advanced/drawer/</router/installation>)[Create pages](https://docs.expo.dev/router/advanced/drawer/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/advanced/drawer/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/advanced/drawer/</router/layouts>)[Error handling](https://docs.expo.dev/router/advanced/drawer/</router/error-handling>)
Navigation patterns
[Root layout](https://docs.expo.dev/router/advanced/drawer/</router/advanced/root-layout>)[Stack](https://docs.expo.dev/router/advanced/drawer/</router/advanced/stack>)[Tabs](https://docs.expo.dev/router/advanced/drawer/</router/advanced/tabs>)[Drawer](https://docs.expo.dev/router/advanced/drawer/</router/advanced/drawer>)[Nesting navigators](https://docs.expo.dev/router/advanced/drawer/</router/advanced/nesting-navigators>)[Modals](https://docs.expo.dev/router/advanced/drawer/</router/advanced/modals>)[Shared routes](https://docs.expo.dev/router/advanced/drawer/</router/advanced/shared-routes>)[Custom tabs](https://docs.expo.dev/router/advanced/drawer/</router/advanced/custom-tabs>)
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/advanced/drawer/</modules/overview>)[Get started](https://docs.expo.dev/router/advanced/drawer/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/advanced/drawer/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/advanced/drawer/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/advanced/drawer/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/advanced/drawer/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/advanced/drawer/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/advanced/drawer/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/advanced/drawer/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/advanced/drawer/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/advanced/drawer/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/advanced/drawer/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/advanced/drawer/</archive>)[Expo Snack](https://docs.expo.dev/router/advanced/drawer/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/advanced/drawer/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/advanced/drawer/<https:/expo.dev/mailing-list/signup>)
# Drawer
[Edit this page](https://docs.expo.dev/router/advanced/drawer/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/drawer.mdx> "Edit content of this page on GitHub")
Learn how to use the Drawer layout in Expo Router.
[Edit this page](https://docs.expo.dev/router/advanced/drawer/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/drawer.mdx> "Edit content of this page on GitHub")
To use [drawer navigator](https://docs.expo.dev/router/advanced/drawer/<https:/reactnavigation.org/docs/drawer-based-navigation>) you'll need to install some extra dependencies.
## Installation[](https://docs.expo.dev/router/advanced/drawer/<#installation>)
Terminal
Copy
`- ``npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated`
SDK 50 and higher
SDK 49 and lower
No additional configuration is required for SDK 50 and above. [Reanimated Babel plugin](https://docs.expo.dev/router/advanced/drawer/<https:/docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#reanimated-babel-plugin>) is automatically configured in `babel-preset-expo` when you install the library.
Update your babel.config.js to include the Reanimated babel plugin:
babel.config.js
Copy
```
module.exports = {
 presets: [
   %%placeholder-start%%... %%placeholder-end%%
  ],
  plugins: [
   %%placeholder-start%%... %%placeholder-end%%
   'react-native-reanimated/plugin',
  ],
};

```

After you add the Babel plugin, restart your development server and clear the bundler cache using the command:
Terminal
Copy
`- ``npx expo start --clear`
> If you load other Babel plugins, the Reanimated plugin has to be the last item in the plugins array.
## Usage[](https://docs.expo.dev/router/advanced/drawer/<#usage>)
SDK 50 and higher
SDK 49 and lower
Now you can use the `Drawer` layout to create a drawer navigator. You'll need to wrap the `<Drawer />` in a `<GestureHandlerRootView>` to enable gestures. You only need one `<GestureHandlerRootView>` in your component tree. Any nested routes are not required to be wrapped individually.
app/_layout.tsx
Copy
```
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
export default function Layout() {
 return (
  <GestureHandlerRootView style={{ flex: 1 }}><Drawer /></GestureHandlerRootView>
 );
}

```

To edit the drawer navigation menu labels, titles and screen options specific screens are required as follows:
app/_layout.tsx
Copy
```
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
export default function Layout() {
 return (
  <GestureHandlerRootView style={{ flex: 1 }}><Drawer><Drawer.Screen
     name="index" // This is the name of the page and must match the url from root
     options={{
      drawerLabel: 'Home',
      title: 'overview',
     }}
    /><Drawer.Screen
     name="user/[id]" // This is the name of the page and must match the url from root
     options={{
      drawerLabel: 'User',
      title: 'overview',
     }}
    /></Drawer></GestureHandlerRootView>
 );
}

Show More

```

> Note: Be careful when using `react-native-gesture-handler` on the web. It can increase the JavaScript bundle size significantly. Learn more about using [platform-specific modules](https://docs.expo.dev/router/advanced/drawer/</router/advanced/platform-specific-modules>).
Now you can use the `Drawer` layout to create a drawer navigator.
app/_layout.tsx
Copy
```
import { Drawer } from 'expo-router/drawer';
export default function Layout() {
 return <Drawer />;
}

```

To edit the drawer navigation menu labels, titles and screen options specific screens are required as follows:
app/_layout.tsx
Copy
```
import { Drawer } from 'expo-router/drawer';
export default function Layout() {
 return (
  <Drawer><Drawer.Screen
    name="index" // This is the name of the page and must match the url from root
    options={{
     drawerLabel: 'Home',
     title: 'overview',
    }}
   /><Drawer.Screen
    name="user/[id]" // This is the name of the page and must match the url from root
    options={{
     drawerLabel: 'User',
     title: 'overview',
    }}
   /></Drawer>
 );
}

Show More

```

[Previous (Expo Router - Navigation patterns)Tabs](https://docs.expo.dev/router/advanced/drawer/</router/advanced/tabs>)[Next (Expo Router - Navigation patterns)Nesting navigators](https://docs.expo.dev/router/advanced/drawer/</router/advanced/nesting-navigators>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/advanced/drawer/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/advanced/drawer/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/drawer.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/advanced/drawer/<https:/expo.dev/privacy>).
On this page
[Installation](https://docs.expo.dev/router/advanced/drawer/</router/advanced/drawer/#installation>)[Usage](https://docs.expo.dev/router/advanced/drawer/</router/advanced/drawer/#usage>)
