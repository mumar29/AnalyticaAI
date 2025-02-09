[](https://docs.expo.dev/router/reference/not-found/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/not-found/</>)
[Blog](https://docs.expo.dev/router/reference/not-found/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/not-found/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/not-found/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/not-found/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/not-found/</>)[Guides](https://docs.expo.dev/router/reference/not-found/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/not-found/</eas>)[Reference](https://docs.expo.dev/router/reference/not-found/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/not-found/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/not-found/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/not-found/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/not-found/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/not-found/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/not-found/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/not-found/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/not-found/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/not-found/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/not-found/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/not-found/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/not-found/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/not-found/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/not-found/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/not-found/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/not-found/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/not-found/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/not-found/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/not-found/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/not-found/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/not-found/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/not-found/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/not-found/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/not-found/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/not-found/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/not-found/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/not-found/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/not-found/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/not-found/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/not-found/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/not-found/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/not-found/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/not-found/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/not-found/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/not-found/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/not-found/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/not-found/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/not-found/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/not-found/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/not-found/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/not-found/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/not-found/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/not-found/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/not-found/<https:/expo.dev/mailing-list/signup>)
# Not found routes
[Edit this page](https://docs.expo.dev/router/reference/not-found/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/not-found.mdx> "Edit content of this page on GitHub")
Learn how to handle server 404s and missing routes.
[Edit this page](https://docs.expo.dev/router/reference/not-found/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/not-found.mdx> "Edit content of this page on GitHub")
404s can be handled by using a +not-found.tsx route. This route matches all unmatched routes from a nested level. This is similar to [...wild].tsx. However, unlike the deep dynamic routes, +not-found.tsx is matched after API routes.
On web, the server will first serve files in the following order:
  1. Static files in the public directory.
  2. Standard and dynamic routes in the app directory.
  3. API routes in the app directory.
  4. Not found routes will be served last with a 404 status code.


On native, where there is no server, the router will first try to perform a client-navigation, then fall back on `+not-found` routes if no route matches.
In the future, `+not-found` routes will integrate with data fetching and suspense to allow for custom 404 pages during online-only native operations.
[Previous (Expo Router - Reference)Authentication](https://docs.expo.dev/router/reference/not-found/</router/reference/authentication>)[Next (Expo Router - Reference)Screen tracking for analytics](https://docs.expo.dev/router/reference/not-found/</router/reference/screen-tracking>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/not-found/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/not-found/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/not-found.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/not-found/<https:/expo.dev/privacy>).
