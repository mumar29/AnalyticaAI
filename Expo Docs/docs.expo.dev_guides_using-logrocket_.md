[](https://docs.expo.dev/guides/using-logrocket/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/using-logrocket/</>)
[Blog](https://docs.expo.dev/guides/using-logrocket/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/using-logrocket/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/using-logrocket/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/using-logrocket/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/using-logrocket/</>)[Guides](https://docs.expo.dev/guides/using-logrocket/</guides/overview>)[EAS](https://docs.expo.dev/guides/using-logrocket/</eas>)[Reference](https://docs.expo.dev/guides/using-logrocket/</versions/latest>)[Learn](https://docs.expo.dev/guides/using-logrocket/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/using-logrocket/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/using-logrocket/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/using-logrocket/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/using-logrocket/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/using-logrocket/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/using-logrocket/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/using-logrocket/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/using-logrocket/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/using-logrocket/</router/introduction>)[Installation](https://docs.expo.dev/guides/using-logrocket/</router/installation>)[Create pages](https://docs.expo.dev/guides/using-logrocket/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/using-logrocket/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/using-logrocket/</router/layouts>)[Error handling](https://docs.expo.dev/guides/using-logrocket/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/using-logrocket/</modules/overview>)[Get started](https://docs.expo.dev/guides/using-logrocket/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/using-logrocket/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/using-logrocket/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/using-logrocket/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/using-logrocket/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/using-logrocket/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/using-logrocket/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/using-logrocket/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/using-logrocket/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/using-logrocket/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/using-logrocket/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/using-logrocket/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/using-logrocket/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/using-logrocket/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/using-logrocket/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/using-logrocket/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/using-logrocket/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/using-logrocket/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/using-logrocket/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/using-logrocket/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/using-logrocket/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/using-logrocket/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/using-logrocket/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/using-logrocket/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/using-logrocket/</archive>)[Expo Snack](https://docs.expo.dev/guides/using-logrocket/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/using-logrocket/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/using-logrocket/<https:/expo.dev/mailing-list/signup>)
# Using LogRocket
[Edit this page](https://docs.expo.dev/guides/using-logrocket/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-logrocket.mdx> "Edit content of this page on GitHub")
A guide on installing and configuring LogRocket for session replays and error monitoring.
[Edit this page](https://docs.expo.dev/guides/using-logrocket/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-logrocket.mdx> "Edit content of this page on GitHub")
[LogRocket](https://docs.expo.dev/guides/using-logrocket/<https:/logrocket.com>) records user sessions and identifies bugs as your users use your app. You can filter sessions by update IDs and also connect to your LogRocket account on the Expo dashboard to get quick access to your app's session data.
## Install and configure LogRocket[](https://docs.expo.dev/guides/using-logrocket/<#install-and-configure-logrocket>)
You can install the LogRocket SDK with the following command:
Terminal
Copy
`- ``npx expo install @logrocket/react-native expo-build-properties`
Then, in your [app config](https://docs.expo.dev/guides/using-logrocket/</workflow/configuration>), include the LogRocket config plugin:
app.json
Copy
```
{
 "plugins": [
  [
   "expo-build-properties",
   {
    "android": {
     "minSdkVersion": 25
    }
   }
  ],
  "@logrocket/react-native"
 ]
}

```

Finally, initialize LogRocket in your app in a top-level file, like app/_layout.tsx:
app/_layout.tsx
Copy
```
import { useEffect } from 'react';
import * as Updates from 'expo-updates';
import LogRocket from '@logrocket/react-native';
const App = () => {
 useEffect(() => {
  LogRocket.init('<App ID>', {
   updateId: Updates.updateId,
  });
 }, []);
};

```

In the code above, replace `<App ID>` with your [LogRocket App ID](https://docs.expo.dev/guides/using-logrocket/<https:/app.logrocket.com/r/settings/setup>).
## Learn more about LogRocket[](https://docs.expo.dev/guides/using-logrocket/<#learn-more-about-logrocket>)
To learn more about how to use LogRocket with Expo, check out the [LogRocket documentation](https://docs.expo.dev/guides/using-logrocket/<https:/docs.logrocket.com/reference/react-native-expo-adding-the-sdk>).
[Previous (More - Integrations)Using Next.js](https://docs.expo.dev/guides/using-logrocket/</guides/using-nextjs>)[Next (More - Integrations)Using Sentry](https://docs.expo.dev/guides/using-logrocket/</guides/using-sentry>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/using-logrocket/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/using-logrocket/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-logrocket.mdx>)
  * Last updated on January 22, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/using-logrocket/<https:/expo.dev/privacy>).
