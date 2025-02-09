[](https://docs.expo.dev/guides/facebook-authentication/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/facebook-authentication/</>)
[Blog](https://docs.expo.dev/guides/facebook-authentication/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/facebook-authentication/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/facebook-authentication/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/facebook-authentication/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/facebook-authentication/</>)[Guides](https://docs.expo.dev/guides/facebook-authentication/</guides/overview>)[EAS](https://docs.expo.dev/guides/facebook-authentication/</eas>)[Reference](https://docs.expo.dev/guides/facebook-authentication/</versions/latest>)[Learn](https://docs.expo.dev/guides/facebook-authentication/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/facebook-authentication/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/facebook-authentication/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/facebook-authentication/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/facebook-authentication/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/facebook-authentication/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/facebook-authentication/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/facebook-authentication/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/facebook-authentication/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/facebook-authentication/</router/introduction>)[Installation](https://docs.expo.dev/guides/facebook-authentication/</router/installation>)[Create pages](https://docs.expo.dev/guides/facebook-authentication/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/facebook-authentication/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/facebook-authentication/</router/layouts>)[Error handling](https://docs.expo.dev/guides/facebook-authentication/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/facebook-authentication/</modules/overview>)[Get started](https://docs.expo.dev/guides/facebook-authentication/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/facebook-authentication/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/facebook-authentication/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/facebook-authentication/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/facebook-authentication/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/facebook-authentication/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/facebook-authentication/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/facebook-authentication/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/facebook-authentication/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/facebook-authentication/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/facebook-authentication/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/facebook-authentication/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/facebook-authentication/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/facebook-authentication/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/facebook-authentication/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/facebook-authentication/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/facebook-authentication/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/facebook-authentication/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/facebook-authentication/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/facebook-authentication/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/facebook-authentication/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/facebook-authentication/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/facebook-authentication/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/facebook-authentication/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/facebook-authentication/</archive>)[Expo Snack](https://docs.expo.dev/guides/facebook-authentication/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/facebook-authentication/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/facebook-authentication/<https:/expo.dev/mailing-list/signup>)
# Using Facebook authentication
[Edit this page](https://docs.expo.dev/guides/facebook-authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/facebook-authentication.mdx> "Edit content of this page on GitHub")
A guide on using react-native-fbsdk-next library to integrate Facebook authentication in your Expo project.
[Edit this page](https://docs.expo.dev/guides/facebook-authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/facebook-authentication.mdx> "Edit content of this page on GitHub")
The `react-native-fbsdk-next`[](https://docs.expo.dev/guides/facebook-authentication/<https:/github.com/thebergamo/react-native-fbsdk-next/>) library provides a wrapper around Facebook's Android and iOS SDKs. It allows integrating Facebook authentication into your Expo project and provide access to native components.
This guide provides additional information on configuring the library with Expo for Android.
## Prerequisites[](https://docs.expo.dev/guides/facebook-authentication/<#prerequisites>)
The `react-native-fbsdk-next` library can't be used in the Expo Go app because it requires custom native code. Learn more about [adding custom native code to your app](https://docs.expo.dev/guides/facebook-authentication/</workflow/customizing>).
## Installation[](https://docs.expo.dev/guides/facebook-authentication/<#installation>)
See `react-native-fbsdk-next` documentation for instructions on how to install and configure the library:
[React Native FBSDK Next: Expo installation instructions](https://docs.expo.dev/guides/facebook-authentication/<https:/github.com/thebergamo/react-native-fbsdk-next/#expo-installation>)
## Configuration for Android[](https://docs.expo.dev/guides/facebook-authentication/<#configuration-for-android>)
Adding Android as a platform in your Facebook project requires you to have your app approved by Google Play Store so that it has a valid Play Store URL, and the `package`[](https://docs.expo.dev/guides/facebook-authentication/</versions/latest/config/app#package>) name associated with your app. Otherwise, you'll run into the following error:
![Facebook project not recognizing unpublished Android app's package that doesn't have a valid Google Play Store URL.](https://docs.expo.dev/static/images/guides/android-package-error.png)
See the following guides for more information on how to build your project for app stores:
[Build your project for app stores](https://docs.expo.dev/guides/facebook-authentication/</deploy/build-project>) [Manually upload Android app for the first time](https://docs.expo.dev/guides/facebook-authentication/<https:/expo.fyi/first-android-submission>)
Once you have uploaded the app to the Play Store you can submit your app review. When it is approved the Facebook project will be able to access it at a Play Store URL.
After that, go to your Facebook project's Settings > Basic and add the Android platform. You'll need to provide the Key hash, Package name and Class name.
![Required fields to add Android platform in the Facebook project.](https://docs.expo.dev/static/images/guides/android-required-fields.png)
  * To add Key hash, go to your Play Store Console to obtain the SHA-1 certificate fingerprint from Release > Setup > App Integrity > App signing key certificate. Then, [convert the value of the Hex value of the certificate to Base64](https://docs.expo.dev/guides/facebook-authentication/<https:/base64.guru/converter/encode/hex>) and add it under the Android > Key hashes in your Facebook project.
  * You can find the Package name in your [app config](https://docs.expo.dev/guides/facebook-authentication/</versions/latest/config/app>) under the `android.package`[](https://docs.expo.dev/guides/facebook-authentication/</versions/latest/config/app#package>) field.
  * The Class name is `MainActivity` by default, and you can use `package.MainActivity` where `package` is the `android.package` in your project's app config. For example, `com.myapp.example.MainActivity`, where `com.myapp.example` is the `package` name of your app.
  * Then, click Save changes to save the configuration.


Now, you can use your Facebook project for development or release builds and production apps.
[Previous (More - Integrations)Using Analytics](https://docs.expo.dev/guides/facebook-authentication/</guides/using-analytics>)[Next (More - Integrations)Using Supabase](https://docs.expo.dev/guides/facebook-authentication/</guides/using-supabase>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/facebook-authentication/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/facebook-authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/facebook-authentication.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/facebook-authentication/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/guides/facebook-authentication/</guides/facebook-authentication/#prerequisites>)[Installation](https://docs.expo.dev/guides/facebook-authentication/</guides/facebook-authentication/#installation>)[Configuration for Android](https://docs.expo.dev/guides/facebook-authentication/</guides/facebook-authentication/#configuration-for-android>)
