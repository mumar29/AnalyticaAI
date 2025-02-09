[](https://docs.expo.dev/guides/google-authentication/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/google-authentication/</>)
[Blog](https://docs.expo.dev/guides/google-authentication/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/google-authentication/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/google-authentication/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/google-authentication/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/google-authentication/</>)[Guides](https://docs.expo.dev/guides/google-authentication/</guides/overview>)[EAS](https://docs.expo.dev/guides/google-authentication/</eas>)[Reference](https://docs.expo.dev/guides/google-authentication/</versions/latest>)[Learn](https://docs.expo.dev/guides/google-authentication/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/google-authentication/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/google-authentication/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/google-authentication/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/google-authentication/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/google-authentication/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/google-authentication/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/google-authentication/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/google-authentication/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/google-authentication/</router/introduction>)[Installation](https://docs.expo.dev/guides/google-authentication/</router/installation>)[Create pages](https://docs.expo.dev/guides/google-authentication/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/google-authentication/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/google-authentication/</router/layouts>)[Error handling](https://docs.expo.dev/guides/google-authentication/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/google-authentication/</modules/overview>)[Get started](https://docs.expo.dev/guides/google-authentication/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/google-authentication/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/google-authentication/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/google-authentication/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/google-authentication/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/google-authentication/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/google-authentication/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/google-authentication/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/google-authentication/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/google-authentication/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/google-authentication/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/google-authentication/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/google-authentication/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/google-authentication/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/google-authentication/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/google-authentication/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/google-authentication/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/google-authentication/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/google-authentication/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/google-authentication/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/google-authentication/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/google-authentication/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/google-authentication/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/google-authentication/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/google-authentication/</archive>)[Expo Snack](https://docs.expo.dev/guides/google-authentication/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/google-authentication/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/google-authentication/<https:/expo.dev/mailing-list/signup>)
# Using Google authentication
[Edit this page](https://docs.expo.dev/guides/google-authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/google-authentication.mdx> "Edit content of this page on GitHub")
A guide on using @react-native-google-signin/google-signin library to integrate Google authentication in your Expo project.
[Edit this page](https://docs.expo.dev/guides/google-authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/google-authentication.mdx> "Edit content of this page on GitHub")
The `@react-native-google-signin/google-signin`[](https://docs.expo.dev/guides/google-authentication/<https:/github.com/react-native-google-signin/google-signin>) library provides different ways, such as Firebase and Google API, to integrate Google authentication in your Expo app. It also provides native sign-in buttons and supports various authentication methods (standard, server-side validation, and offline access). You can use the library in your project by adding the [config plugin](https://docs.expo.dev/guides/google-authentication/</config-plugins/introduction>) in the [app config](https://docs.expo.dev/guides/google-authentication/</versions/latest/config/app>).
This guide provides additional information on how to configure the library for your project, and different steps might be required depending on the authentication method you choose.
## Prerequisites[](https://docs.expo.dev/guides/google-authentication/<#prerequisites>)
The `@react-native-google-signin/google-signin` library can't be used in the Expo Go app because it requires custom native code. Learn more about [adding custom native code to your app](https://docs.expo.dev/guides/google-authentication/</workflow/customizing>).
## Installation[](https://docs.expo.dev/guides/google-authentication/<#installation>)
See `@react-native-google-signin/google-signin` documentation for instructions on how to install and configure the library:
[React Native Google Sign In: Expo installation instructions](https://docs.expo.dev/guides/google-authentication/<https:/react-native-google-signin.github.io/docs/setting-up/expo>)
## Configure Google project for Android and iOS[](https://docs.expo.dev/guides/google-authentication/<#configure-google-project-for-android-and-ios>)
Below are instructions on how to configure your Google project for Android and iOS.
### Upload app to Google Play Store[](https://docs.expo.dev/guides/google-authentication/<#upload-app-to-google-play-store>)
We recommend uploading the app to the Google Play Store if your app still needs to be in production. It is not necessary to upload the complete app if your project is still in the development process. Upload a single instance of your app. This will allow you to sign your app with the required certificates, such as the SHA-1 certificate fingerprint, which is required when configuring the Google project for Android. To learn more about the app submission process, see the guides below in the order they are specified:
[Create your first EAS Build](https://docs.expo.dev/guides/google-authentication/</build/setup>) [Build your project for app stores](https://docs.expo.dev/guides/google-authentication/</deploy/build-project>) [Manually upload Android app for the first time](https://docs.expo.dev/guides/google-authentication/<https:/expo.fyi/first-android-submission>)
Once you have uploaded your app, you can provide an SHA-1 certificate fingerprint value when asked while configuring the Google project. There are two values that you can provide from:
  * Fingerprint of the .apk you built (on your machine or using EAS Build). You can find the SHA-1 certificate fingerprint in the Google Play Console under Release > Setup > App Integrity > Upload key certificate.
  * Fingerprint of a production app downloaded from the play store. You can find the SHA-1 certificate fingerprint in the Google Play Console under Release > Setup > App Integrity > App signing key certificate.


### With Firebase[](https://docs.expo.dev/guides/google-authentication/<#with-firebase>)
For more instructions on how to configure your Google project for Android and iOS with Firebase:
[Firebase](https://docs.expo.dev/guides/google-authentication/<https:/react-native-google-signin.github.io/docs/setting-up/expo#expo-and-firebase>)
#### Upload google-services.json and GoogleService-Info.plist to EAS[](https://docs.expo.dev/guides/google-authentication/<#upload-google-servicesjson-and-googleservice-infoplist-to-eas>)
If you use the Firebase method for Android and iOS (as shared in sections above), you'll need to upload google-services.json and GoogleService-Info.plist to EAS and add them to .gitignore to avoid checking them in the repository.
[Upload a secret file to EAS and use in the app config](https://docs.expo.dev/guides/google-authentication/</build-reference/variables#how-to-upload-a-secret-file-and-use-it-in-my-app-config>)
### With Google API[](https://docs.expo.dev/guides/google-authentication/<#with-google-api>)
This is an alternate method to configure a Google project when you are not using [Firebase](https://docs.expo.dev/guides/google-authentication/</guides/google-authentication#with-firebase>).
#### Android[](https://docs.expo.dev/guides/google-authentication/<#android>)
For more instructions on how to configure your Google project for Android with Google API:
[Configure a Google API Console project](https://docs.expo.dev/guides/google-authentication/<https:/developers.google.com/identity/android-credential-manager#configure-a-google-api-console-project>)
#### iOS[](https://docs.expo.dev/guides/google-authentication/<#ios>)
For iOS, if you use Google API instead of Firebase, you'll need to generate an OAuth client id. Follow the instructions below to generate the client id:
[Get an OAuth client ID from a Google API Console project](https://docs.expo.dev/guides/google-authentication/<https:/developers.google.com/identity/sign-in/ios/start-integrating#get_an_oauth_client_id>)
After you have created the iOS client id, you'll also need to provide the iOS URL scheme value in the app config. You can find the value in the Google API console under API and Services > Credentials > OAuth 2.0 Client IDs > name of your iOS client id > Additional information > iOS URL scheme.
![Getting iOS URL scheme value from Google API console.](https://docs.expo.dev/static/images/guides/ios-url-scheme.png)
Then, add the iOS URL scheme value in the app config under `ios.infoPlist`[](https://docs.expo.dev/guides/google-authentication/</versions/latest/config/app#infoplist>) as shown below:
app.json
Copy
```
{
 "ios": {
  %%placeholder-start%%...%%placeholder-end%%
  "infoPlist": {
   "CFBundleURLTypes": [
    {
     "CFBundleURLSchemes": ["com.googleusercontent.apps.17898xxxxxx-xxxxxqhqj0exxxxxpl03xxx"]
    }
   ]
  }
 }
}

```

[Previous (More - Integrations)Using Firebase](https://docs.expo.dev/guides/google-authentication/</guides/using-firebase>)[Next (More - Integrations)Using ESLint and Prettier](https://docs.expo.dev/guides/google-authentication/</guides/using-eslint>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/google-authentication/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/google-authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/google-authentication.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/google-authentication/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/guides/google-authentication/</guides/google-authentication/#prerequisites>)[Installation](https://docs.expo.dev/guides/google-authentication/</guides/google-authentication/#installation>)[Configure Google project for Android and iOS](https://docs.expo.dev/guides/google-authentication/</guides/google-authentication/#configure-google-project-for-android-and-ios>)[Upload app to Google Play Store](https://docs.expo.dev/guides/google-authentication/</guides/google-authentication/#upload-app-to-google-play-store>)[With Firebase](https://docs.expo.dev/guides/google-authentication/</guides/google-authentication/#with-firebase>)[With Google API](https://docs.expo.dev/guides/google-authentication/</guides/google-authentication/#with-google-api>)
