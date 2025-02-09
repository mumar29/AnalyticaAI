[](https://docs.expo.dev/router/advanced/router-settings/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/advanced/router-settings/</>)
[Blog](https://docs.expo.dev/router/advanced/router-settings/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/advanced/router-settings/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/advanced/router-settings/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/advanced/router-settings/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/advanced/router-settings/</>)[Guides](https://docs.expo.dev/router/advanced/router-settings/</guides/overview>)[EAS](https://docs.expo.dev/router/advanced/router-settings/</eas>)[Reference](https://docs.expo.dev/router/advanced/router-settings/</versions/latest>)[Learn](https://docs.expo.dev/router/advanced/router-settings/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/advanced/router-settings/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/advanced/router-settings/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/advanced/router-settings/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/advanced/router-settings/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/advanced/router-settings/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/advanced/router-settings/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/advanced/router-settings/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/advanced/router-settings/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/advanced/router-settings/</router/introduction>)[Installation](https://docs.expo.dev/router/advanced/router-settings/</router/installation>)[Create pages](https://docs.expo.dev/router/advanced/router-settings/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/advanced/router-settings/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/advanced/router-settings/</router/layouts>)[Error handling](https://docs.expo.dev/router/advanced/router-settings/</router/error-handling>)
Navigation patterns
Advanced
[Platform-specific Modules](https://docs.expo.dev/router/advanced/router-settings/</router/advanced/platform-specific-modules>)[Customizing links](https://docs.expo.dev/router/advanced/router-settings/</router/advanced/native-intent>)[Settings](https://docs.expo.dev/router/advanced/router-settings/</router/advanced/router-settings>)[Apple Handoff](https://docs.expo.dev/router/advanced/router-settings/</router/advanced/apple-handoff>)
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/advanced/router-settings/</modules/overview>)[Get started](https://docs.expo.dev/router/advanced/router-settings/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/advanced/router-settings/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/advanced/router-settings/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/advanced/router-settings/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/advanced/router-settings/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/advanced/router-settings/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/advanced/router-settings/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/advanced/router-settings/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/advanced/router-settings/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/advanced/router-settings/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/advanced/router-settings/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/advanced/router-settings/</archive>)[Expo Snack](https://docs.expo.dev/router/advanced/router-settings/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/advanced/router-settings/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/advanced/router-settings/<https:/expo.dev/mailing-list/signup>)
# Router Settings
[Edit this page](https://docs.expo.dev/router/advanced/router-settings/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/router-settings.mdx> "Edit content of this page on GitHub")
Learn how to configure layouts with static properties in Expo Router.
[Edit this page](https://docs.expo.dev/router/advanced/router-settings/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/router-settings.mdx> "Edit content of this page on GitHub")
> Warning: `unstable_settings` currently do not work with [async routes](https://docs.expo.dev/router/advanced/router-settings/</router/reference/async-routes>) (development-only). This is why the feature is designated _unstable_.
### `initialRouteName`[](https://docs.expo.dev/router/advanced/router-settings/<#initialroutename>)
When deep linking to a route, you may want to provide a user with a "back" button. The `initialRouteName` sets the default screen of the stack and should match a valid filename (without the extension).
`app`
`_layout.tsx`
`index.tsx`
`other.tsx`
app/_layout.tsx
Copy
```
import { Stack } from 'expo-router';
export const unstable_settings = {
 // Ensure any route can link back to `/`
 initialRouteName: 'index',
};
export default function Layout() {
 return <Stack />;
}

```

Now deep linking directly to `/other` or reloading the page will continue to show the back arrow.
[Previous (Expo Router - Advanced)Customizing links](https://docs.expo.dev/router/advanced/router-settings/</router/advanced/native-intent>)[Next (Expo Router - Advanced)Apple Handoff](https://docs.expo.dev/router/advanced/router-settings/</router/advanced/apple-handoff>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/advanced/router-settings/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/advanced/router-settings/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/router-settings.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/advanced/router-settings/<https:/expo.dev/privacy>).
