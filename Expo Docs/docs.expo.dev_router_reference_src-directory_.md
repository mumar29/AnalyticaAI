[](https://docs.expo.dev/router/reference/src-directory/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/src-directory/</>)
[Blog](https://docs.expo.dev/router/reference/src-directory/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/src-directory/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/src-directory/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/src-directory/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/src-directory/</>)[Guides](https://docs.expo.dev/router/reference/src-directory/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/src-directory/</eas>)[Reference](https://docs.expo.dev/router/reference/src-directory/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/src-directory/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/src-directory/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/src-directory/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/src-directory/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/src-directory/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/src-directory/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/src-directory/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/src-directory/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/src-directory/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/src-directory/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/src-directory/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/src-directory/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/src-directory/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/src-directory/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/src-directory/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/src-directory/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/src-directory/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/src-directory/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/src-directory/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/src-directory/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/src-directory/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/src-directory/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/src-directory/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/src-directory/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/src-directory/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/src-directory/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/src-directory/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/src-directory/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/src-directory/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/src-directory/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/src-directory/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/src-directory/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/src-directory/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/src-directory/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/src-directory/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/src-directory/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/src-directory/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/src-directory/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/src-directory/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/src-directory/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/src-directory/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/src-directory/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/src-directory/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/src-directory/<https:/expo.dev/mailing-list/signup>)
# Top-level src directory
[Edit this page](https://docs.expo.dev/router/reference/src-directory/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/src-directory.mdx> "Edit content of this page on GitHub")
Learn how to use a top-level src directory in your Expo Router project.
[Edit this page](https://docs.expo.dev/router/reference/src-directory/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/src-directory.mdx> "Edit content of this page on GitHub")
As your project grows, it can be helpful to move all the directories containing application code into a single src directory. Expo Router supports this out of the box.
`src`
`app`
`_layout.tsx`
`index.tsx`
`components`
`button.tsx`
`package.json`
Simply move your app directory to src/app and restart the development server.
Terminal
`- ``npx expo start`
`# Or export for production`
`- ``npx expo export`
Notes:
  * The config files (app.config.tsx, app.json, package.json, metro.config.js, tsconfig.json) should remain in the root directory.
  * The src/app directory takes higher precedence than the root app directory. Only the src/app directory will be used if you have both.
  * The public directory should remain in the root directory.
  * Static rendering will automatically use the src/app directory if it exists.
  * You may consider updating any [type aliases](https://docs.expo.dev/router/reference/src-directory/</guides/typescript#path-aliases>) to point to the src directory instead of the root directory.


## Custom directory[](https://docs.expo.dev/router/reference/src-directory/<#custom-directory>)
> Changing the default root directory is highly discouraged. We will not accept bug reports regarding projects with custom root directories.
You can dangerously customize the root directory using the Expo Router Config Plugin. The following will change the root directory to src/routes, relative to the project root.
app.json
Copy
```
{
 "plugins": [
  [
   "expo-router",
   {
    "root": "./src/routes"
   }
  ]
 ]
}

```

This may lead to unexpected behavior. Many tools assume the root directory to be either ./app or ./src/app. Only tools in the exact version of Expo CLI will respect the config plugin.
[Previous (Expo Router - Reference)Screen tracking for analytics](https://docs.expo.dev/router/reference/src-directory/</router/reference/screen-tracking>)[Next (Expo Router - Reference)Testing](https://docs.expo.dev/router/reference/src-directory/</router/reference/testing>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/src-directory/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/src-directory/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/src-directory.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/src-directory/<https:/expo.dev/privacy>).
