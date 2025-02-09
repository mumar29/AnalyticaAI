[](https://docs.expo.dev/router/reference/screen-tracking/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/screen-tracking/</>)
[Blog](https://docs.expo.dev/router/reference/screen-tracking/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/screen-tracking/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/screen-tracking/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/screen-tracking/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/screen-tracking/</>)[Guides](https://docs.expo.dev/router/reference/screen-tracking/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/screen-tracking/</eas>)[Reference](https://docs.expo.dev/router/reference/screen-tracking/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/screen-tracking/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/screen-tracking/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/screen-tracking/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/screen-tracking/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/screen-tracking/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/screen-tracking/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/screen-tracking/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/screen-tracking/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/screen-tracking/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/screen-tracking/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/screen-tracking/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/screen-tracking/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/screen-tracking/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/screen-tracking/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/screen-tracking/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/screen-tracking/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/screen-tracking/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/screen-tracking/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/screen-tracking/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/screen-tracking/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/screen-tracking/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/screen-tracking/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/screen-tracking/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/screen-tracking/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/screen-tracking/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/screen-tracking/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/screen-tracking/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/screen-tracking/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/screen-tracking/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/screen-tracking/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/screen-tracking/<https:/expo.dev/mailing-list/signup>)
# Screen tracking for analytics
[Edit this page](https://docs.expo.dev/router/reference/screen-tracking/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/screen-tracking.mdx> "Edit content of this page on GitHub")
Learn how to enable screen tracking for analytic when using Expo Router.
[Edit this page](https://docs.expo.dev/router/reference/screen-tracking/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/screen-tracking.mdx> "Edit content of this page on GitHub")
Unlike React Navigation, Expo Router always has access to a URL. This means screen tracking is as easy as the web.
  1. Create a higher-order component that observes the currently selected URL
  2. Track the URL in your analytics provider


`app`
`_layout.tsx`
app/_layout.tsx
Copy
```
import { useEffect } from 'react';
import { usePathname, useGlobalSearchParams, Slot } from 'expo-router';
export default function Layout() {
 const pathname = usePathname();
 const params = useGlobalSearchParams();
 // Track the location in your analytics provider here.
 useEffect(() => {
  analytics.track({ pathname, params });
 }, [pathname, params]);
 // Export all the children routes in the most basic way.
 return <Slot />;
}

```

Now when the user changes routes, the analytics provider will be notified.
## Migrating from React Navigation[](https://docs.expo.dev/router/reference/screen-tracking/<#migrating-from-react-navigation>)
React Navigation's [screen tracking guide](https://docs.expo.dev/router/reference/screen-tracking/<https:/reactnavigation.org/docs/screen-tracking/>) cannot make the same assumptions about the navigation state that Expo Router can. As a result, the implementation requires the use of `onReady` and `onStateChange` callbacks. Avoid using these methods if possible as the root `<NavigationContainer />` is not directly exposed and allows cascading in Expo Router.
[Previous (Expo Router - Reference)Not found routes](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/not-found>)[Next (Expo Router - Reference)Top-level src directory](https://docs.expo.dev/router/reference/screen-tracking/</router/reference/src-directory>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/screen-tracking/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/screen-tracking/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/screen-tracking.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/screen-tracking/<https:/expo.dev/privacy>).
