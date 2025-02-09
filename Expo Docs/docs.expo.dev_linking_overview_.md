[](https://docs.expo.dev/linking/overview/<https:/expo.dev>)[Docs](https://docs.expo.dev/linking/overview/</>)
[Blog](https://docs.expo.dev/linking/overview/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/linking/overview/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/linking/overview/<https:/github.com/expo/expo>)[](https://docs.expo.dev/linking/overview/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/linking/overview/</>)[Guides](https://docs.expo.dev/linking/overview/</guides/overview>)[EAS](https://docs.expo.dev/linking/overview/</eas>)[Reference](https://docs.expo.dev/linking/overview/</versions/latest>)[Learn](https://docs.expo.dev/linking/overview/</tutorial/overview>)
[Overview](https://docs.expo.dev/linking/overview/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/linking/overview/</workflow/overview>)[Configure with app config](https://docs.expo.dev/linking/overview/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/linking/overview/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/linking/overview/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/linking/overview/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/linking/overview/</guides/permissions>)[Environment variables](https://docs.expo.dev/linking/overview/</guides/environment-variables>)
Linking
[Overview](https://docs.expo.dev/linking/overview/</linking/overview>)[Into other apps](https://docs.expo.dev/linking/overview/</linking/into-other-apps>)[Into your app](https://docs.expo.dev/linking/overview/</linking/into-your-app>)[Android App Links](https://docs.expo.dev/linking/overview/</linking/android-app-links>)[iOS Universal Links](https://docs.expo.dev/linking/overview/</linking/ios-universal-links>)
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/linking/overview/</router/introduction>)[Installation](https://docs.expo.dev/linking/overview/</router/installation>)[Create pages](https://docs.expo.dev/linking/overview/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/linking/overview/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/linking/overview/</router/layouts>)[Error handling](https://docs.expo.dev/linking/overview/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/linking/overview/</modules/overview>)[Get started](https://docs.expo.dev/linking/overview/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/linking/overview/</push-notifications/overview>)[About notification types](https://docs.expo.dev/linking/overview/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/linking/overview/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/linking/overview/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/linking/overview/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/linking/overview/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/linking/overview/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/linking/overview/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/linking/overview/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/linking/overview/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/linking/overview/</archive>)[Expo Snack](https://docs.expo.dev/linking/overview/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/linking/overview/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/linking/overview/<https:/expo.dev/mailing-list/signup>)
# Overview of Linking, Deep Links, Android App Links, and iOS Universal Links
[Edit this page](https://docs.expo.dev/linking/overview/<https:/github.com/expo/expo/edit/main/docs/pages/linking/overview.mdx> "Edit content of this page on GitHub")
An overview of available resources to implement Linking and Deep Links in your Expo apps.
[Edit this page](https://docs.expo.dev/linking/overview/<https:/github.com/expo/expo/edit/main/docs/pages/linking/overview.mdx> "Edit content of this page on GitHub")
## Linking[](https://docs.expo.dev/linking/overview/<#linking>)
Linking allows your app to interact with incoming and outgoing URLs. In this process, the user not only gets directed to open your app, but they are taken to a specific screen (route) within the app.
### Linking strategies[](https://docs.expo.dev/linking/overview/<#linking-strategies>)
There are different linking strategies you handle in your Expo app:
  * Linking to other apps from your app (outgoing links)
  * Linking to your app from other apps or a web browser (incoming links)
  * Linking to specific content within your app (deep links)
  * Redirecting links from your web domain to your app if it is installed (Android App Links and iOS Universal Links); also known as App shortcuts


> Tip: We recommend using [Development builds](https://docs.expo.dev/linking/overview/</develop/development-builds/introduction>) to test your app's linking strategies instead of Expo Go.
## Linking to other apps from your app[](https://docs.expo.dev/linking/overview/<#linking-to-other-apps-from-your-app>)
Linking to other apps from your app is achieved using a URL based on the target app's URL scheme. This URL scheme allows you to reference resources within that native app.
Your app can use a [common URL scheme](https://docs.expo.dev/linking/overview/</linking/into-other-apps#common-url-schemes>) for default apps, including `https` and `http` (commonly used by web browsers like Chrome, Safari, and so on), and use JavaScript to invoke the URL that launches the corresponding native app.
[Linking into other appsLearn how to handle common and custom URL schemes to link other apps from your app.](https://docs.expo.dev/linking/overview/</linking/into-other-apps>)
## Linking to your app from other apps or a web browser[](https://docs.expo.dev/linking/overview/<#linking-to-your-app-from-other-apps-or-a-web-browser>)
[Deep Links](https://docs.expo.dev/linking/overview/<https:/en.wikipedia.org/wiki/Deep_linking>) are links to a specific URL based content inside an app or a website.
For example, by clicking an advertisement of your product, your app will open on the user's device and they can view that product's details. This product's link that the user clicked may look like:
```
myapp://web-app.com/product

```

This link is constructed by three parts:
  * Scheme: The URL scheme that identifies the app that should open the URL (example: `myapp://`). It can also be `https` or `http` for non-standard deep links.
  * Host: The domain name of the app that should open the URL (example: `web-app.com`).
  * Path: The path to the screen that should be opened (example: `/product`). If the path isn't specified, the user is taken to the home screen of the app.

[Linking to your appLearn how to configure custom URL schemes to create a deep link of your app.](https://docs.expo.dev/linking/overview/</linking/into-your-app>)
## Universal linking[](https://docs.expo.dev/linking/overview/<#universal-linking>)
Both Android and iOS implement their own systems for routing web URL's to an app if the app is installed. On Android, this system is called App Links, and on iOS it is called Universal Links.
### Android App Links[](https://docs.expo.dev/linking/overview/<#android-app-links>)
Android App Links are different from [standard deep links](https://docs.expo.dev/linking/overview/</linking/overview#linking-to-your-app-from-other-apps-or-a-web-browser>) as they use regular HTTP and HTTPS schemes and are exclusive to Android devices.
This link type allows your app to always open when a user clicks the link instead of choosing between the browser or another handler from a dialog displayed on the device. If the user doesn't have your app installed, the link takes them to your app's associated website.
[Configure Android App LinksLearn how to configure `intentFilters` and set up two-way association from a standard web URL.](https://docs.expo.dev/linking/overview/</linking/android-app-links>)
### iOS Universal Links[](https://docs.expo.dev/linking/overview/<#ios-universal-links>)
iOS Universal Links are different from [standard deep links](https://docs.expo.dev/linking/overview/</linking/overview#linking-to-your-app-from-other-apps-or-a-web-browser>) as they use regular HTTP and HTTPS schemes and are exclusive to iOS devices.
This link type allows your app to open when a user clicks an HTTP(S) link pointing to your web domain. If the user doesn't have your app installed, the link takes them to your app's associated website. You can further configure the website by displaying a banner for the user to open your app using [Apple Smart Banner](https://docs.expo.dev/linking/overview/</linking/ios-universal-links#apple-smart-banner>).
[Configure iOS Universal LinksLearn how to configure `associatedDomains` and set up two-way association.](https://docs.expo.dev/linking/overview/</linking/ios-universal-links>)
## Use Expo Router to handle deep linking[](https://docs.expo.dev/linking/overview/<#use-expo-router-to-handle-deep-linking>)
To implement any of the above Linking strategies, we recommend using [Expo Router](https://docs.expo.dev/linking/overview/</router/introduction>) since deep linking is automatically enabled for all of your app's screens.
Benefits:
  * `Link` component from Expo Router can be used to [handle URL schemes to other apps](https://docs.expo.dev/linking/overview/</linking/into-other-apps#expo-router>)
  * Android App Links and iOS Universal Links require configuring runtime routing in JavaScript for the link in your app. Using Expo Router, you don't have to configure runtime routing separately since deep links for all routes are automatically enabled.


[Previous (Development process)Environment variables](https://docs.expo.dev/linking/overview/</guides/environment-variables>)[Next (Development process - Linking)Into other apps](https://docs.expo.dev/linking/overview/</linking/into-other-apps>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/linking/overview/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/linking/overview/<https:/github.com/expo/expo/edit/main/docs/pages/linking/overview.mdx>)
  * Last updated on October 07, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/linking/overview/<https:/expo.dev/privacy>).
On this page
[Linking](https://docs.expo.dev/linking/overview/</linking/overview/#linking>)[Linking strategies](https://docs.expo.dev/linking/overview/</linking/overview/#linking-strategies>)[Linking to other apps from your app](https://docs.expo.dev/linking/overview/</linking/overview/#linking-to-other-apps-from-your-app>)[Linking to your app from other apps or a web browser](https://docs.expo.dev/linking/overview/</linking/overview/#linking-to-your-app-from-other-apps-or-a-web-browser>)[Universal linking](https://docs.expo.dev/linking/overview/</linking/overview/#universal-linking>)[Android App Links](https://docs.expo.dev/linking/overview/</linking/overview/#android-app-links>)[iOS Universal Links](https://docs.expo.dev/linking/overview/</linking/overview/#ios-universal-links>)[Use Expo Router to handle deep linking](https://docs.expo.dev/linking/overview/</linking/overview/#use-expo-router-to-handle-deep-linking>)
