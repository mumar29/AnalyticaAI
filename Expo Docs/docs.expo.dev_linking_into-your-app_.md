[](https://docs.expo.dev/linking/into-your-app/<https:/expo.dev>)[Docs](https://docs.expo.dev/linking/into-your-app/</>)
[Blog](https://docs.expo.dev/linking/into-your-app/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/linking/into-your-app/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/linking/into-your-app/<https:/github.com/expo/expo>)[](https://docs.expo.dev/linking/into-your-app/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/linking/into-your-app/</>)[Guides](https://docs.expo.dev/linking/into-your-app/</guides/overview>)[EAS](https://docs.expo.dev/linking/into-your-app/</eas>)[Reference](https://docs.expo.dev/linking/into-your-app/</versions/latest>)[Learn](https://docs.expo.dev/linking/into-your-app/</tutorial/overview>)
[Overview](https://docs.expo.dev/linking/into-your-app/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/linking/into-your-app/</workflow/overview>)[Configure with app config](https://docs.expo.dev/linking/into-your-app/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/linking/into-your-app/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/linking/into-your-app/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/linking/into-your-app/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/linking/into-your-app/</guides/permissions>)[Environment variables](https://docs.expo.dev/linking/into-your-app/</guides/environment-variables>)
Linking
[Overview](https://docs.expo.dev/linking/into-your-app/</linking/overview>)[Into other apps](https://docs.expo.dev/linking/into-your-app/</linking/into-other-apps>)[Into your app](https://docs.expo.dev/linking/into-your-app/</linking/into-your-app>)[Android App Links](https://docs.expo.dev/linking/into-your-app/</linking/android-app-links>)[iOS Universal Links](https://docs.expo.dev/linking/into-your-app/</linking/ios-universal-links>)
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/linking/into-your-app/</router/introduction>)[Installation](https://docs.expo.dev/linking/into-your-app/</router/installation>)[Create pages](https://docs.expo.dev/linking/into-your-app/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/linking/into-your-app/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/linking/into-your-app/</router/layouts>)[Error handling](https://docs.expo.dev/linking/into-your-app/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/linking/into-your-app/</modules/overview>)[Get started](https://docs.expo.dev/linking/into-your-app/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/linking/into-your-app/</push-notifications/overview>)[About notification types](https://docs.expo.dev/linking/into-your-app/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/linking/into-your-app/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/linking/into-your-app/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/linking/into-your-app/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/linking/into-your-app/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/linking/into-your-app/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/linking/into-your-app/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/linking/into-your-app/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/linking/into-your-app/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/linking/into-your-app/</archive>)[Expo Snack](https://docs.expo.dev/linking/into-your-app/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/linking/into-your-app/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/linking/into-your-app/<https:/expo.dev/mailing-list/signup>)
# Linking into your app
[Edit this page](https://docs.expo.dev/linking/into-your-app/<https:/github.com/expo/expo/edit/main/docs/pages/linking/into-your-app.mdx> "Edit content of this page on GitHub")
Learn how to handle an incoming URL in your React Native and Expo app by creating a deep link.
[Edit this page](https://docs.expo.dev/linking/into-your-app/<https:/github.com/expo/expo/edit/main/docs/pages/linking/into-your-app.mdx> "Edit content of this page on GitHub")
This guide provides steps to configure standard deep links in your project by adding a custom scheme.
## Add a custom scheme in app config[](https://docs.expo.dev/linking/into-your-app/<#add-a-custom-scheme-in-app-config>)
To provide a link to your app, add a custom string to the `scheme`[](https://docs.expo.dev/linking/into-your-app/</versions/latest/config/app#scheme>) property in the [app config](https://docs.expo.dev/linking/into-your-app/</workflow/configuration>):
app.json
Copy
```
{
 "expo": {
  "scheme": "myapp"
 }
}

```

After adding a custom scheme to your app, you need to [create a new development build](https://docs.expo.dev/linking/into-your-app/</develop/development-builds/create-a-build>). Once the app is installed on a device, you can open links within your app using `myapp://`.
If the custom scheme is not defined, the app will use `android.package` and `ios.bundleIdentifier` as the default schemes in both development and production builds. This is because [Expo Prebuild](https://docs.expo.dev/linking/into-your-app/</workflow/prebuild>) automatically adds these properties as custom schemes for Android and iOS.
## Test the deep link[](https://docs.expo.dev/linking/into-your-app/<#test-the-deep-link>)
You can test a link that opens your app using `npx uri-scheme`[](https://docs.expo.dev/linking/into-your-app/<https:/github.com/expo/expo/tree/main/packages/uri-scheme#readme>), which is a command-line utility for interacting and testing URI schemes.
For example, if your app has a `/details` screen that you want to open when a user taps on a link (either through another app or a web browser), you can test this behavior by running the following command:
Terminal
`# If you have `android.package` or `ios.bundleIdentifier` defined in your app.json`
`- ``npx uri-scheme open com.example.app://somepath/details --android`
`# If you have a `scheme` defined in your app.json`
`- ``npx uri-scheme open myapp://somepath/details --ios`
Running the above command:
  * Opens your app's `/details` screen
  * The `android` or `ios` options specify that the link should be opened on Android or iOS
  * Alternatively, you can open the link by searching for it in the device's native browser. For example, open Safari on iOS and type `myapp://` in the address bar to prompt the device to open your app.

Test a link using Expo Go[](https://docs.expo.dev/linking/into-your-app/<#test-a-link-using-expo-go>)
By default, [Expo Go](https://docs.expo.dev/linking/into-your-app/<https:/expo.dev/go>) uses the `exp://` scheme. If you link to `exp://` without specifying a URL address afterward, it will open the app to the home screen. In development, your app's complete URL looks like `exp://127.0.0.1:8081`.
To open the `/details` screen while testing on Expo Go, you can use `npx uri-scheme`:
Terminal
Copy
`- ``npx uri-scheme open exp://127.0.0.1:8081/--/somepath/into/app?hello=world --ios`
In Expo Go, `/--/` is added to the URL when a path is specified. This indicates to Expo Go that the substring after it corresponds to the deep link path and is not part of the path to the app itself.
By default, `exp://` is replaced with `http://` when opening a URL in Expo Go. You can also use `exps://` to open `https://` URLs. However, `exps://` does not currently support loading sites with insecure TLS certificates.
## Handle URLs[](https://docs.expo.dev/linking/into-your-app/<#handle-urls>)
> If you are using [Expo Router](https://docs.expo.dev/linking/into-your-app/</linking/overview#use-expo-router-to-handle-deep-linking>), you can ignore this section.
You can observe links that launch your app using the `Linking.useURL()`[](https://docs.expo.dev/linking/into-your-app/</versions/latest/sdk/linking#useurl>) hook from `expo-linking`[](https://docs.expo.dev/linking/into-your-app/</versions/latest/sdk/linking>).
index.tsx
Copy
```
import * as Linking from 'expo-linking';
export default function Home() {
 const url = Linking.useURL();
 return <Text>URL: {url}</Text>;
}

```

The `Linking.useURL()` hook works behind the scenes by following these imperative methods:
  * The link that launched the app is initially returned using `Linking.getInitialURL()`[](https://docs.expo.dev/linking/into-your-app/</versions/latest/sdk/linking#linkinggetinitialurl>)
  * Any new links triggered while the app is already open are observed with `Linking.addEventListener('url', callback)`[](https://docs.expo.dev/linking/into-your-app/</versions/latest/sdk/linking#linkingaddeventlistenertype-handler>)


## Parse URLs[](https://docs.expo.dev/linking/into-your-app/<#parse-urls>)
You can use the `Linking.parse()`[](https://docs.expo.dev/linking/into-your-app/</versions/latest/sdk/linking#linkingparseurl>) method to parse the path, hostname, and query parameters from a URL. This method extracts deep linking information and considers nonstandard implementations.
index.tsx
Copy
```
import * as Linking from 'expo-linking';
export default function Home() {
 const url = Linking.useURL();
 if (url) {
  const { hostname, path, queryParams } = Linking.parse(url);
  console.log(
   `Linked to app with hostname: ${hostname}, path: ${path} and data: ${JSON.stringify(
    queryParams
   )}`
  );
 }
 return (
  %%placeholder-start%%Your React component here. %%placeholder-end%%
 )
}

```

## Limitations[](https://docs.expo.dev/linking/into-your-app/<#limitations>)
If a user does not have your app installed, deep links to your app will not work. Attribution services like [Branch](https://docs.expo.dev/linking/into-your-app/<https:/www.branch.io/deep-linking/>) offer solutions for conditionally linking to your app or web page.
Universal links is another solution you can use to handle such cases, in which the route to your web page determines whether or not the app is installed. For more details, see [Universal Links](https://docs.expo.dev/linking/into-your-app/</linking/ios-universal-links>).
[Previous (Development process - Linking)Into other apps](https://docs.expo.dev/linking/into-your-app/</linking/into-other-apps>)[Next (Development process - Linking)Android App Links](https://docs.expo.dev/linking/into-your-app/</linking/android-app-links>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/linking/into-your-app/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/linking/into-your-app/<https:/github.com/expo/expo/edit/main/docs/pages/linking/into-your-app.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/linking/into-your-app/<https:/expo.dev/privacy>).
On this page
[Add a custom scheme in app config](https://docs.expo.dev/linking/into-your-app/</linking/into-your-app/#add-a-custom-scheme-in-app-config>)[Test the deep link](https://docs.expo.dev/linking/into-your-app/</linking/into-your-app/#test-the-deep-link>)[Handle URLs](https://docs.expo.dev/linking/into-your-app/</linking/into-your-app/#handle-urls>)[Parse URLs](https://docs.expo.dev/linking/into-your-app/</linking/into-your-app/#parse-urls>)[Limitations](https://docs.expo.dev/linking/into-your-app/</linking/into-your-app/#limitations>)
