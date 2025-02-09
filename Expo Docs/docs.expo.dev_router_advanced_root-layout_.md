[](https://docs.expo.dev/router/advanced/root-layout/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/advanced/root-layout/</>)
[Blog](https://docs.expo.dev/router/advanced/root-layout/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/advanced/root-layout/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/advanced/root-layout/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/advanced/root-layout/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/advanced/root-layout/</>)[Guides](https://docs.expo.dev/router/advanced/root-layout/</guides/overview>)[EAS](https://docs.expo.dev/router/advanced/root-layout/</eas>)[Reference](https://docs.expo.dev/router/advanced/root-layout/</versions/latest>)[Learn](https://docs.expo.dev/router/advanced/root-layout/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/advanced/root-layout/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/advanced/root-layout/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/advanced/root-layout/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/advanced/root-layout/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/advanced/root-layout/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/advanced/root-layout/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/advanced/root-layout/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/advanced/root-layout/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/advanced/root-layout/</router/introduction>)[Installation](https://docs.expo.dev/router/advanced/root-layout/</router/installation>)[Create pages](https://docs.expo.dev/router/advanced/root-layout/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/advanced/root-layout/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/advanced/root-layout/</router/layouts>)[Error handling](https://docs.expo.dev/router/advanced/root-layout/</router/error-handling>)
Navigation patterns
[Root layout](https://docs.expo.dev/router/advanced/root-layout/</router/advanced/root-layout>)[Stack](https://docs.expo.dev/router/advanced/root-layout/</router/advanced/stack>)[Tabs](https://docs.expo.dev/router/advanced/root-layout/</router/advanced/tabs>)[Drawer](https://docs.expo.dev/router/advanced/root-layout/</router/advanced/drawer>)[Nesting navigators](https://docs.expo.dev/router/advanced/root-layout/</router/advanced/nesting-navigators>)[Modals](https://docs.expo.dev/router/advanced/root-layout/</router/advanced/modals>)[Shared routes](https://docs.expo.dev/router/advanced/root-layout/</router/advanced/shared-routes>)[Custom tabs](https://docs.expo.dev/router/advanced/root-layout/</router/advanced/custom-tabs>)
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/advanced/root-layout/</modules/overview>)[Get started](https://docs.expo.dev/router/advanced/root-layout/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/advanced/root-layout/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/advanced/root-layout/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/advanced/root-layout/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/advanced/root-layout/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/advanced/root-layout/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/advanced/root-layout/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/advanced/root-layout/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/advanced/root-layout/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/advanced/root-layout/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/advanced/root-layout/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/advanced/root-layout/</archive>)[Expo Snack](https://docs.expo.dev/router/advanced/root-layout/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/advanced/root-layout/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/advanced/root-layout/<https:/expo.dev/mailing-list/signup>)
# Root layout
[Edit this page](https://docs.expo.dev/router/advanced/root-layout/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/root-layout.mdx> "Edit content of this page on GitHub")
Learn how to use the root layout to add global providers to your app when using Expo Router.
[Edit this page](https://docs.expo.dev/router/advanced/root-layout/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/root-layout.mdx> "Edit content of this page on GitHub")
Traditional React Native projects are structured with a single root component that is often defined in App.tsx or index.tsx. This pattern is often used to inject global providers such as Redux, Themes, Styles, and so on, into the app, and to delay rendering until assets and fonts are loaded.
In Expo Router, you can use the Root Layout (app/_layout.tsx) to add providers which can be accessed by any route in the app.
> Try to reduce the scope of your providers to only the routes that need them. This will improve performance and cause fewer rerenders.
[Previous (Expo Router)Error handling](https://docs.expo.dev/router/advanced/root-layout/</router/error-handling>)[Next (Expo Router - Navigation patterns)Stack](https://docs.expo.dev/router/advanced/root-layout/</router/advanced/stack>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/advanced/root-layout/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/advanced/root-layout/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/root-layout.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/advanced/root-layout/<https:/expo.dev/privacy>).
