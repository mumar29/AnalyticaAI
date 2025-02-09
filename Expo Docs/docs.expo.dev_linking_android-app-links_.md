[](https://docs.expo.dev/linking/android-app-links/<https:/expo.dev>)[Docs](https://docs.expo.dev/linking/android-app-links/</>)
[Blog](https://docs.expo.dev/linking/android-app-links/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/linking/android-app-links/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/linking/android-app-links/<https:/github.com/expo/expo>)[](https://docs.expo.dev/linking/android-app-links/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/linking/android-app-links/</>)[Guides](https://docs.expo.dev/linking/android-app-links/</guides/overview>)[EAS](https://docs.expo.dev/linking/android-app-links/</eas>)[Reference](https://docs.expo.dev/linking/android-app-links/</versions/latest>)[Learn](https://docs.expo.dev/linking/android-app-links/</tutorial/overview>)
[Overview](https://docs.expo.dev/linking/android-app-links/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/linking/android-app-links/</workflow/overview>)[Configure with app config](https://docs.expo.dev/linking/android-app-links/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/linking/android-app-links/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/linking/android-app-links/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/linking/android-app-links/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/linking/android-app-links/</guides/permissions>)[Environment variables](https://docs.expo.dev/linking/android-app-links/</guides/environment-variables>)
Linking
[Overview](https://docs.expo.dev/linking/android-app-links/</linking/overview>)[Into other apps](https://docs.expo.dev/linking/android-app-links/</linking/into-other-apps>)[Into your app](https://docs.expo.dev/linking/android-app-links/</linking/into-your-app>)[Android App Links](https://docs.expo.dev/linking/android-app-links/</linking/android-app-links>)[iOS Universal Links](https://docs.expo.dev/linking/android-app-links/</linking/ios-universal-links>)
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/linking/android-app-links/</router/introduction>)[Installation](https://docs.expo.dev/linking/android-app-links/</router/installation>)[Create pages](https://docs.expo.dev/linking/android-app-links/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/linking/android-app-links/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/linking/android-app-links/</router/layouts>)[Error handling](https://docs.expo.dev/linking/android-app-links/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/linking/android-app-links/</modules/overview>)[Get started](https://docs.expo.dev/linking/android-app-links/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/linking/android-app-links/</push-notifications/overview>)[About notification types](https://docs.expo.dev/linking/android-app-links/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/linking/android-app-links/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/linking/android-app-links/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/linking/android-app-links/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/linking/android-app-links/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/linking/android-app-links/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/linking/android-app-links/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/linking/android-app-links/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/linking/android-app-links/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/linking/android-app-links/</archive>)[Expo Snack](https://docs.expo.dev/linking/android-app-links/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/linking/android-app-links/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/linking/android-app-links/<https:/expo.dev/mailing-list/signup>)
# Android App Links
[Edit this page](https://docs.expo.dev/linking/android-app-links/<https:/github.com/expo/expo/edit/main/docs/pages/linking/android-app-links.mdx> "Edit content of this page on GitHub")
Learn how to configure Android App Links to open your Expo app from a standard web URL.
[Edit this page](https://docs.expo.dev/linking/android-app-links/<https:/github.com/expo/expo/edit/main/docs/pages/linking/android-app-links.mdx> "Edit content of this page on GitHub")
To configure Android App Links for your app, you need to:
  * Add `intentFilters` and set `autoVerify` to true in your project's app config
  * Set up two-way association to verify your website and native app


## Add `intentFilters` to the app config[](https://docs.expo.dev/linking/android-app-links/<#add-intentfilters-to-the-app-config>)
Configure your app config by adding the `android.intentFilters` property and setting the `autoVerify` attribute to `true`. Specifying `autoVerify` is required for Android App Links to work correctly.
The following example shows a basic configuration that enables your app to appear in the standard Android dialog as an option for handling any links to the `webapp.io` domain. It also uses the regular `https` scheme since [Android App Links](https://docs.expo.dev/linking/android-app-links/</linking/overview#android-app-links>) are different from [standard deep links](https://docs.expo.dev/linking/android-app-links/</linking/into-other-apps>).
app.json
Copy
```
{
 "expo": {
  "android": {
   "intentFilters": [
    {
     "action": "VIEW",
     "autoVerify": true,
     "data": [
      {
       "scheme": "https",
       "host": "*.webapp.io",
       "pathPrefix": "/records"
      }
     ],
     "category": ["BROWSABLE", "DEFAULT"]
    }
   ]
  }
 }
}

```

## Set up two-way association[](https://docs.expo.dev/linking/android-app-links/<#set-up-two-way-association>)
To setup two-way association between the website and Android app, you will need the following:
  * Website verification: This requires creating a assetlinks.json file inside the /.well-known directory and hosting it on the target website. This file is used to verify that the app opened from a given link is the correct app.
  * Native app verification: This requires some form of code signing that references the target website domain (URL).


### Create assetlinks.json file[](https://docs.expo.dev/linking/android-app-links/<#create-assetlinksjson-file>)
1
Create an assetlinks.json file for the website verification (also known as [digital asset links](https://docs.expo.dev/linking/android-app-links/<https:/developers.google.com/digital-asset-links/v1/getting-started>) file) at /.well-known/assetlinks.json. This file is used to verify that the app opened for a given link.
If you're using Expo Router to build your website (or any other modern React framework such as Remix, Next.js, and so on), create assetlinks.json at public/.well-known/assetlinks.json. For legacy Expo webpack projects, create the file at web/.well-known/assetlinks.json.
2
Get the value of `package_name` from your app config, under `android.package`.
3
Get the value of `sha256_cert_fingerprints` from your app's signing certificate. If you're using [EAS Build](https://docs.expo.dev/linking/android-app-links/</build/setup>) to build your Android app, after creating a build:
  * Run `eas credentials -p android` command, and select the build profile to get its fingerprint value.
  * Copy the fingerprint value listed under `SHA256 Fingerprint`.

Alternate method to obtain the SHA256 certificate fingerprint from Google Play Console[](https://docs.expo.dev/linking/android-app-links/<#alternate-method-to-obtain-the-sha256-certificate>)
If you're not using EAS to manage code signing, you can find the sha256_cert_fingerprints by building and submitting your app manually to the [Google Play Console](https://docs.expo.dev/linking/android-app-links/<https:/play.google.com/console/>):
  * Inside the Google Play Console's dashboard, go to Release > Setup > App Signing.
  * Find the correct Digital Asset Links JSON snippet for your app.
  * Copy the value looks like `14:6D:E9:83...` and paste it into your public/.well-known/assetlinks.json file under `sha256_cert_fingerprints`.


4
Add `package_name` and `sha256_cert_fingerprints` to the assetlinks.json file:
public/.well-known/assetlinks.json
Copy
```
[
 {
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
   "namespace": "android_app",
   "package_name": "com.example",
   "sha256_cert_fingerprints": [
    // Supports multiple fingerprints for different apps and keys
    "14:6D:E9:83:51:7F:66:01:84:93:4F:2F:5E:E0:8F:3A:D6:F4:CA:41:1A:CF:45:BF:8D:10:76:76:CD"
   ]
  }
 }
]

```

> You can add multiple fingerprints to the `sha256_cert_fingerprints` array to support different variants of your app. For more information, see [Android's documentation on how to declare website associations](https://docs.expo.dev/linking/android-app-links/<https:/developer.android.com/training/app-links/verify-android-applinks#web-assoc>).
### Host assetlinks.json file[](https://docs.expo.dev/linking/android-app-links/<#host-assetlinksjson-file>)
Host the assetlinks.json file using a web server with your domain. This file must be served with the content-type `application/json` and accessible over an HTTPS connection. Verify that your browser can access this file by typing the complete URL in the address bar.
### Native app verification[](https://docs.expo.dev/linking/android-app-links/<#native-app-verification>)
Install the app on an Android device to trigger the [Android app verification](https://docs.expo.dev/linking/android-app-links/<https:/developer.android.com/training/app-links/verify-android-applinks#web-assoc>) process.
Once you have your app opened, see [Handle links into your app](https://docs.expo.dev/linking/android-app-links/</linking/into-your-app#handle-urls>) for more information on how to handle inbound links and show the user the content they requested.
## Debugging[](https://docs.expo.dev/linking/android-app-links/<#debugging>)
The Expo CLI enables you to test Android App Links without deploying a website. Utilizing the `--tunnel`[](https://docs.expo.dev/linking/android-app-links/</more/expo-cli#tunneling>) functionality, you can forward your dev server to a publicly available HTTPS URL.
1
Set the environment variable `EXPO_TUNNEL_SUBDOMAIN=my-custom-domain` where `my-custom-domain` is a unique string that you use during development. This ensures that your tunnel URL is consistent across dev server restarts.
2
Add `intentFilters` to your app config as [described above](https://docs.expo.dev/linking/android-app-links/</linking/android-app-links#add-intentfilters-to-the-app-config>). Replace the `host` value with a Ngrok URL: `my-custom-domain.ngrok.io`.
3
Start your dev server with the `--tunnel` flag:
Terminal
Copy
`- ``npx expo start --tunnel`
4
Compile the development build on your device:
Terminal
Copy
`- ``npx expo run:android`
5
Use the following `adb` command to start the intent activity and open the link on your app or type the custom domain link in your device's web browser.
Terminal
Copy
`- ``adb shell am start -a android.intent.action.VIEW -c android.intent.category.BROWSABLE -d "https://my-custom-domain.ngrok.io/" <your-package-name>`
## Troubleshooting[](https://docs.expo.dev/linking/android-app-links/<#troubleshooting>)
Here are some common tips to help you troubleshoot when implementing Android App Links:
  * Ensure your website is served over HTTPS and with the content-type `application/json`
  * [Verify Android app links](https://docs.expo.dev/linking/android-app-links/<https:/developer.android.com/training/app-links/verify-android-applinks>)
  * Android verification may take 20 seconds or longer to take effect, so be sure to wait until it is completed.
  * If you update your web files, rebuild the native app to trigger a server update on the vendor side (Google)


[Previous (Development process - Linking)Into your app](https://docs.expo.dev/linking/android-app-links/</linking/into-your-app>)[Next (Development process - Linking)iOS Universal Links](https://docs.expo.dev/linking/android-app-links/</linking/ios-universal-links>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/linking/android-app-links/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/linking/android-app-links/<https:/github.com/expo/expo/edit/main/docs/pages/linking/android-app-links.mdx>)
  * Last updated on October 29, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/linking/android-app-links/<https:/expo.dev/privacy>).
On this page
[Add intentFilters to the app config](https://docs.expo.dev/linking/android-app-links/</linking/android-app-links/#add-intentfilters-to-the-app-config>)[Set up two-way association](https://docs.expo.dev/linking/android-app-links/</linking/android-app-links/#set-up-two-way-association>)[Create assetlinks.json file](https://docs.expo.dev/linking/android-app-links/</linking/android-app-links/#create-assetlinksjson-file>)[Host assetlinks.json file](https://docs.expo.dev/linking/android-app-links/</linking/android-app-links/#host-assetlinksjson-file>)[Native app verification](https://docs.expo.dev/linking/android-app-links/</linking/android-app-links/#native-app-verification>)[Debugging](https://docs.expo.dev/linking/android-app-links/</linking/android-app-links/#debugging>)[Troubleshooting](https://docs.expo.dev/linking/android-app-links/</linking/android-app-links/#troubleshooting>)
