[](https://docs.expo.dev/router/reference/sitemap/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/sitemap/</>)
[Blog](https://docs.expo.dev/router/reference/sitemap/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/sitemap/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/sitemap/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/sitemap/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/sitemap/</>)[Guides](https://docs.expo.dev/router/reference/sitemap/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/sitemap/</eas>)[Reference](https://docs.expo.dev/router/reference/sitemap/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/sitemap/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/sitemap/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/sitemap/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/sitemap/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/sitemap/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/sitemap/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/sitemap/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/sitemap/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/sitemap/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/sitemap/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/sitemap/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/sitemap/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/sitemap/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/sitemap/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/sitemap/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/sitemap/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/sitemap/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/sitemap/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/sitemap/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/sitemap/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/sitemap/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/sitemap/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/sitemap/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/sitemap/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/sitemap/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/sitemap/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/sitemap/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/sitemap/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/sitemap/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/sitemap/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/sitemap/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/sitemap/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/sitemap/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/sitemap/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/sitemap/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/sitemap/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/sitemap/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/sitemap/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/sitemap/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/sitemap/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/sitemap/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/sitemap/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/sitemap/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/sitemap/<https:/expo.dev/mailing-list/signup>)
# Sitemap
[Edit this page](https://docs.expo.dev/router/reference/sitemap/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/sitemap.mdx> "Edit content of this page on GitHub")
Learn how to use the sitemap to debug your app with Expo Router.
[Edit this page](https://docs.expo.dev/router/reference/sitemap/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/sitemap.mdx> "Edit content of this page on GitHub")
On native, you can use the `uri-scheme`[](https://docs.expo.dev/router/reference/sitemap/<https:/www.npmjs.com/package/uri-scheme>) CLI to test opening native links on a device.
For example, if you want to launch the Expo Go app on iOS to the `/form-sheet` route, run:
Terminal
Copy
`- ``npx uri-scheme open exp://192.168.87.39:19000/--/form-sheet --ios`
> Replace `192.168.87.39:19000` with the IP address shown when running `npx expo start`.
You can also search for links directly in a browser like Safari or Chrome to test deep linking on physical devices. Learn more about [testing deep links](https://docs.expo.dev/router/reference/sitemap/<https:/reactnavigation.org/docs/deep-linking>).
## Sitemap[](https://docs.expo.dev/router/reference/sitemap/<#sitemap>)
![Directory structure](https://docs.expo.dev/static/images/expo-router/directory.png)
Expo Router currently injects a /_sitemap automatically that provides a list of all routes in the app. This is useful for debugging.
In SDK 52 and above, the sitemap can be removed by adding `sitemap: false` to the `expo-router` config plugin in the app config:
app.json
Copy
```
{
 "plugins": [
  [
   "expo-router",
   {
    "sitemap": false
   }
  ]
 ]
}

```

In SDK 51 and below, the sitemap can be removed by creating an empty _sitemap file insdide the app directory:
app/_sitemap.tsx
Copy
```
export default function Sitemap() {
 return null;
}

```

[Previous (Expo Router - Reference)API Routes](https://docs.expo.dev/router/reference/sitemap/</router/reference/api-routes>)[Next (Expo Router - Reference)Typed routes](https://docs.expo.dev/router/reference/sitemap/</router/reference/typed-routes>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/sitemap/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/sitemap/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/sitemap.mdx>)
  * Last updated on November 07, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/sitemap/<https:/expo.dev/privacy>).
