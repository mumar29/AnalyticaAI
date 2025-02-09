[](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/advanced/platform-specific-modules/</>)
[Blog](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/advanced/platform-specific-modules/</>)[Guides](https://docs.expo.dev/router/advanced/platform-specific-modules/</guides/overview>)[EAS](https://docs.expo.dev/router/advanced/platform-specific-modules/</eas>)[Reference](https://docs.expo.dev/router/advanced/platform-specific-modules/</versions/latest>)[Learn](https://docs.expo.dev/router/advanced/platform-specific-modules/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/advanced/platform-specific-modules/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/advanced/platform-specific-modules/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/advanced/platform-specific-modules/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/advanced/platform-specific-modules/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/advanced/platform-specific-modules/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/advanced/platform-specific-modules/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/advanced/platform-specific-modules/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/advanced/platform-specific-modules/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/introduction>)[Installation](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/installation>)[Create pages](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/layouts>)[Error handling](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/error-handling>)
Navigation patterns
Advanced
[Platform-specific Modules](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/advanced/platform-specific-modules>)[Customizing links](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/advanced/native-intent>)[Settings](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/advanced/router-settings>)[Apple Handoff](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/advanced/apple-handoff>)
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/advanced/platform-specific-modules/</modules/overview>)[Get started](https://docs.expo.dev/router/advanced/platform-specific-modules/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/advanced/platform-specific-modules/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/advanced/platform-specific-modules/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/advanced/platform-specific-modules/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/advanced/platform-specific-modules/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/advanced/platform-specific-modules/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/advanced/platform-specific-modules/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/advanced/platform-specific-modules/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/advanced/platform-specific-modules/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/advanced/platform-specific-modules/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/advanced/platform-specific-modules/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/advanced/platform-specific-modules/</archive>)[Expo Snack](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/expo.dev/mailing-list/signup>)
# Platform-specific Modules
[Edit this page](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/platform-specific-modules.mdx> "Edit content of this page on GitHub")
Learn how to switch modules based on the platform in Expo Router.
[Edit this page](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/platform-specific-modules.mdx> "Edit content of this page on GitHub")
> Platform specific extensions were added in Expo Router `3.5.0`. Follow this guide only if you are using an older version of Expo Router.
While building your app, you may want to show specific content based on the current platform. Platform-specific modules can make the experience more native to a given platform. The following sections describe the ways you can achieve this with Expo Router.
## Platform module[](https://docs.expo.dev/router/advanced/platform-specific-modules/<#platform-module>)
You can use the `Platform`[](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/reactnative.dev/docs/platform-specific-code#platform-module>) module from React Native to detect the current platform and render the appropriate content based on the result. For example, you can render a `Tabs` layout on native and a custom layout on the web.
app/_layout.tsx
Copy
```
import { Platform } from 'react-native';
import { Link, Slot, Tabs } from 'expo-router';
export default function Layout() {
 if (Platform.OS === 'web') {
  // Use a basic custom layout on web.
  return (
   <div style={{ flex: 1 }}><header><Link href="/">Home</Link><Link href="/settings">Settings</Link></header><Slot /></div>
  );
 }
 // Use a native bottom tabs layout on native platforms.
 return (
  <Tabs><Tabs.Screen name="index" options={{ title: 'Home' }} /><Tabs.Screen name="settings" options={{ title: 'Settings' }} /></Tabs>
 );
}

Show More

```

## Platform specific extensions[](https://docs.expo.dev/router/advanced/platform-specific-modules/<#platform-specific-extensions>)
Metro bundler's platform-specific extensions (for example, .ios.tsx or .native.tsx) are not supported in the app directory. This ensures that routes are universal across platforms for deep linking. However, you can create platform-specific files outside the app directory and use them from within the app directory.
Consider the following project:
`app`
`_layout.tsx`
`index.tsx`
`about.tsx`
`components`
`about.tsx`
`about.ios.tsx`
`about.web.tsx`
For example, the designs require you to build different `about` screens for each platform. In that case, you can create a component for each platform in the components directory using platform extensions. When imported, Metro will ensure the correct component version is used based on the current platform. You can then re-export the component as a screen in the app directory.
app/about.tsx
Copy
```
export { default } from '../components/about';

```

> Best practice: Always provide a file without a platform extension to ensure every platform has a default implementation.
[Previous (Expo Router - Navigation patterns)Custom tabs](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/advanced/custom-tabs>)[Next (Expo Router - Advanced)Customizing links](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/advanced/native-intent>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/platform-specific-modules.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/advanced/platform-specific-modules/<https:/expo.dev/privacy>).
On this page
[Platform module](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/advanced/platform-specific-modules/#platform-module>)[Platform specific extensions](https://docs.expo.dev/router/advanced/platform-specific-modules/</router/advanced/platform-specific-modules/#platform-specific-extensions>)
