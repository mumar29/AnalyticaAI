[](https://docs.expo.dev/router/reference/redirects/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/redirects/</>)
[Blog](https://docs.expo.dev/router/reference/redirects/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/redirects/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/redirects/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/redirects/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/redirects/</>)[Guides](https://docs.expo.dev/router/reference/redirects/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/redirects/</eas>)[Reference](https://docs.expo.dev/router/reference/redirects/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/redirects/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/redirects/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/redirects/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/redirects/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/redirects/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/redirects/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/redirects/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/redirects/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/redirects/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/redirects/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/redirects/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/redirects/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/redirects/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/redirects/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/redirects/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/redirects/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/redirects/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/redirects/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/redirects/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/redirects/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/redirects/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/redirects/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/redirects/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/redirects/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/redirects/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/redirects/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/redirects/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/redirects/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/redirects/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/redirects/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/redirects/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/redirects/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/redirects/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/redirects/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/redirects/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/redirects/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/redirects/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/redirects/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/redirects/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/redirects/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/redirects/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/redirects/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/redirects/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/redirects/<https:/expo.dev/mailing-list/signup>)
# Redirects
[Edit this page](https://docs.expo.dev/router/reference/redirects/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/redirects.mdx> "Edit content of this page on GitHub")
Learn how to redirect URLs in Expo Router.
[Edit this page](https://docs.expo.dev/router/reference/redirects/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/redirects.mdx> "Edit content of this page on GitHub")
You can redirect a request to a different URL based on some in-app criteria. Expo Router supports a number of different redirection patterns.
## Using `Redirect` component[](https://docs.expo.dev/router/reference/redirects/<#using-redirect-component>)
You can immediately redirect from a particular screen by using the `Redirect` component:
```
import { View, Text } from 'react-native';
import { Redirect } from 'expo-router';
export default function Page() {
 const { user } = useAuth();
 if (!user) {
  return <Redirect href="/login" />;
 }
 return (
  <View><Text>Welcome Back!</Text></View>
 );
}

```

## Using `useRouter` hook[](https://docs.expo.dev/router/reference/redirects/<#using-userouter-hook>)
You can also redirect imperatively with the `useRouter` hook:
```
import { Text } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
function MyScreen() {
 const router = useRouter();
 useFocusEffect(() => {
  // Call the replace method to redirect to a new route without adding to the history.
  // We do this in a useFocusEffect to ensure the redirect happens every time the screen
  // is focused.
  router.replace('/profile/settings');
 });
 return <Text>My Screen</Text>;
}

```

[Previous (Expo Router - Reference)URL parameters](https://docs.expo.dev/router/reference/redirects/</router/reference/url-parameters>)[Next (Expo Router - Reference)Static Rendering](https://docs.expo.dev/router/reference/redirects/</router/reference/static-rendering>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/redirects/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/redirects/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/redirects.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/redirects/<https:/expo.dev/privacy>).
On this page
[Using Redirect component](https://docs.expo.dev/router/reference/redirects/</router/reference/redirects/#using-redirect-component>)[Using useRouter hook](https://docs.expo.dev/router/reference/redirects/</router/reference/redirects/#using-userouter-hook>)
