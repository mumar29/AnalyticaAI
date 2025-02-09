[](https://docs.expo.dev/router/reference/troubleshooting/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/troubleshooting/</>)
[Blog](https://docs.expo.dev/router/reference/troubleshooting/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/troubleshooting/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/troubleshooting/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/troubleshooting/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/troubleshooting/</>)[Guides](https://docs.expo.dev/router/reference/troubleshooting/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/troubleshooting/</eas>)[Reference](https://docs.expo.dev/router/reference/troubleshooting/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/troubleshooting/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/troubleshooting/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/troubleshooting/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/troubleshooting/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/troubleshooting/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/troubleshooting/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/troubleshooting/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/troubleshooting/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/troubleshooting/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/troubleshooting/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/troubleshooting/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/troubleshooting/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/troubleshooting/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/troubleshooting/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/troubleshooting/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/troubleshooting/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/troubleshooting/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/troubleshooting/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/troubleshooting/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/troubleshooting/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/troubleshooting/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/troubleshooting/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/troubleshooting/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/troubleshooting/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/troubleshooting/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/troubleshooting/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/troubleshooting/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/troubleshooting/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/troubleshooting/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/troubleshooting/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/troubleshooting/<https:/expo.dev/mailing-list/signup>)
# Troubleshooting
[Edit this page](https://docs.expo.dev/router/reference/troubleshooting/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/troubleshooting.mdx> "Edit content of this page on GitHub")
Fixing common issues with Expo Router setup.
[Edit this page](https://docs.expo.dev/router/reference/troubleshooting/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/troubleshooting.mdx> "Edit content of this page on GitHub")
## Missing files or source maps in React Native DevTools[](https://docs.expo.dev/router/reference/troubleshooting/<#missing-files-or-source-maps-in-react-native-devtools>)
This can happen if your Chrome DevTools has exclusions within its ignore list. To fix the issue, use [React Native DevTools](https://docs.expo.dev/router/reference/troubleshooting/<https:/reactnative.dev/docs/react-native-devtools>):
  1. Start the React Native DevTools by pressing `J` from the development server running in the terminal window
  2. Open Settings by clicking the gear icon
  3. Under Extensions, click Restore defaults and reload
  4. Open Settings again, and go to Ignore List tab
  5. Uncheck any exclusions for `/node_modules/`


## `EXPO_ROUTER_APP_ROOT` not defined[](https://docs.expo.dev/router/reference/troubleshooting/<#expo_router_app_root-not-defined>)
If `process.env.EXPO_ROUTER_APP_ROOT` is not defined you'll see the following error:
Terminal
Copy
`- ``Invalid call at line 11: process.env.EXPO_ROUTER_APP_ROOT First argument of require.context should be a string.`
This can happen when the Babel plugin `expo-router/babel` is not used in the project babel.config.js. You can try clearing the cache with:
Terminal
Copy
`- ``npx expo start --clear`
Alternatively, you can circumvent this issue by creating an index.js file in the root of your project with the following contents:
index.js
Copy
```
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
// Must be exported or Fast Refresh won't update the context
export function App() {
 const ctx = require.context('./app');
 return <ExpoRoot context={ctx} />;
}
registerRootComponent(App);

```

> Do not use this to change the root directory (app) as it won't account for usage in any other places.
## `require.context` not enabled[](https://docs.expo.dev/router/reference/troubleshooting/<#requirecontext-not-enabled>)
This can happen when using a custom version of `@expo/metro-config` that does not enable context modules. Expo Router requires the project metro.config.js to use `expo-router/metro` as the default configuration. Delete the metro.config.js, or extend `expo/metro-config`. See [Customizing metro](https://docs.expo.dev/router/reference/troubleshooting/</guides/customizing-metro>) for more information.
## Missing back button[](https://docs.expo.dev/router/reference/troubleshooting/<#missing-back-button>)
If you set up a modal or another screen that is expected to have a back button, then you'll need to add `unstable_settings`[](https://docs.expo.dev/router/reference/troubleshooting/</router/advanced/router-settings>) to the route's layout to ensure the initial route is configured. Initial routes are somewhat unique to mobile apps and fit awkwardly in the system — improvements pending.
app/_layout.tsx
Copy
```
export const unstable_settings = {
 initialRouteName: 'index',
};

```

[Previous (Expo Router - Reference)Testing](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/testing>)[Next (Expo Router - Migration)React Navigation](https://docs.expo.dev/router/reference/troubleshooting/</router/migrate/from-react-navigation>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/troubleshooting/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/troubleshooting/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/troubleshooting.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/troubleshooting/<https:/expo.dev/privacy>).
On this page
[Missing files or source maps in React Native DevTools](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/troubleshooting/#missing-files-or-source-maps-in-react-native-devtools>)[EXPO_ROUTER_APP_ROOT not defined](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/troubleshooting/#expo_router_app_root-not-defined>)[require.context not enabled](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/troubleshooting/#requirecontext-not-enabled>)[Missing back button](https://docs.expo.dev/router/reference/troubleshooting/</router/reference/troubleshooting/#missing-back-button>)
