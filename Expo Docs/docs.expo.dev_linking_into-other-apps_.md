[](https://docs.expo.dev/linking/into-other-apps/<https:/expo.dev>)[Docs](https://docs.expo.dev/linking/into-other-apps/</>)
[Blog](https://docs.expo.dev/linking/into-other-apps/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/linking/into-other-apps/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/linking/into-other-apps/<https:/github.com/expo/expo>)[](https://docs.expo.dev/linking/into-other-apps/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/linking/into-other-apps/</>)[Guides](https://docs.expo.dev/linking/into-other-apps/</guides/overview>)[EAS](https://docs.expo.dev/linking/into-other-apps/</eas>)[Reference](https://docs.expo.dev/linking/into-other-apps/</versions/latest>)[Learn](https://docs.expo.dev/linking/into-other-apps/</tutorial/overview>)
[Overview](https://docs.expo.dev/linking/into-other-apps/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/linking/into-other-apps/</workflow/overview>)[Configure with app config](https://docs.expo.dev/linking/into-other-apps/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/linking/into-other-apps/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/linking/into-other-apps/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/linking/into-other-apps/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/linking/into-other-apps/</guides/permissions>)[Environment variables](https://docs.expo.dev/linking/into-other-apps/</guides/environment-variables>)
Linking
[Overview](https://docs.expo.dev/linking/into-other-apps/</linking/overview>)[Into other apps](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps>)[Into your app](https://docs.expo.dev/linking/into-other-apps/</linking/into-your-app>)[Android App Links](https://docs.expo.dev/linking/into-other-apps/</linking/android-app-links>)[iOS Universal Links](https://docs.expo.dev/linking/into-other-apps/</linking/ios-universal-links>)
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/linking/into-other-apps/</router/introduction>)[Installation](https://docs.expo.dev/linking/into-other-apps/</router/installation>)[Create pages](https://docs.expo.dev/linking/into-other-apps/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/linking/into-other-apps/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/linking/into-other-apps/</router/layouts>)[Error handling](https://docs.expo.dev/linking/into-other-apps/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/linking/into-other-apps/</modules/overview>)[Get started](https://docs.expo.dev/linking/into-other-apps/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/linking/into-other-apps/</push-notifications/overview>)[About notification types](https://docs.expo.dev/linking/into-other-apps/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/linking/into-other-apps/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/linking/into-other-apps/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/linking/into-other-apps/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/linking/into-other-apps/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/linking/into-other-apps/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/linking/into-other-apps/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/linking/into-other-apps/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/linking/into-other-apps/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/linking/into-other-apps/</archive>)[Expo Snack](https://docs.expo.dev/linking/into-other-apps/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/linking/into-other-apps/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/linking/into-other-apps/<https:/expo.dev/mailing-list/signup>)
# Linking into other apps
[Edit this page](https://docs.expo.dev/linking/into-other-apps/<https:/github.com/expo/expo/edit/main/docs/pages/linking/into-other-apps.mdx> "Edit content of this page on GitHub")
Learn how to handle and open a URL from your app based on the URL scheme of another app.
[Edit this page](https://docs.expo.dev/linking/into-other-apps/<https:/github.com/expo/expo/edit/main/docs/pages/linking/into-other-apps.mdx> "Edit content of this page on GitHub")
Handling linking into other apps from your app is achieved by using the target app's URL. There are two methods you can use to open such URLs from your app:
  * Using the `expo-linking`[](https://docs.expo.dev/linking/into-other-apps/</versions/latest/sdk/linking>) API
  * Using Expo Router's `Link`[ component](https://docs.expo.dev/linking/into-other-apps/</develop/file-based-routing#how-does-link-work>)


## Using expo-linking API[](https://docs.expo.dev/linking/into-other-apps/<#using-expo-linking-api>)
The `expo-linking`[](https://docs.expo.dev/linking/into-other-apps/</versions/latest/sdk/linking>) API provides a universal abstraction over native linking APIs (such as `window.history` on the web) and offers utilities for your app to interact with other installed apps.
The example below opens a the [common URL scheme](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps#common-url-schemes>) in the default browser of the operating system using `Linking.openURL`[](https://docs.expo.dev/linking/into-other-apps/</versions/latest/sdk/linking#linkingopenurlurl>):
index.tsx
Copy
```
import { Button, View, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
export default function Home() {
 return (
  <View style={styles.container}><Button title="Open a URL" onPress={() => Linking.openURL('https://expo.dev/')} /></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
});

Show More

```

## Using Expo Router's `Link` component[](https://docs.expo.dev/linking/into-other-apps/<#using-expo-routers-link-component>)
If your project uses [Expo Router](https://docs.expo.dev/linking/into-other-apps/</router/introduction>), use the `Link` component to open a URL. It wraps a `<Text>` component on native platforms and an `<a>` element on the web. It also uses the `expo-linking` API to handle URL schemes.
The example below opens a [common URL scheme](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps#common-url-schemes>) (HTTPS) in the default browser of the operating system:
index.tsx
Copy
```
import { Button, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
export default function Home() {
 return (
  <View style={styles.container}><Link href="https://expo.dev">Open a URL</Link></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
});

Show More

```

## Common URL schemes[](https://docs.expo.dev/linking/into-other-apps/<#common-url-schemes>)
There are built-in URL schemes that provide access to core functionality on all platforms. Here is a list of commonly-used schemes:
Scheme| Description| Example  
---|---|---  
`https` / `http`| Open web browser app.| `https://expo.dev`  
`mailto`| Open mail app.| `mailto:support@expo.dev`  
`tel`| Open phone app.| `tel:+123456789`  
`sms`| Open SMS app.| `sms:+123456789`  
Specify Android intents to handle common URL schemes[](https://docs.expo.dev/linking/into-other-apps/<#specify-android-intents-to-handle-common-url>)
For Android 11 (API level 30) and above, you must specify the intents your app will handle in the AndroidManifest.xml file. You can accomplish this by [creating a config plugin](https://docs.expo.dev/linking/into-other-apps/</config-plugins/plugins-and-mods#create-a-plugin>).
The following config plugin example enables linking to email and phone apps by defining the intents:
my-plugin.ts
Copy
```
import { withAndroidManifest, ConfigPlugin } from 'expo/config-plugins';
const withAndroidQueries: ConfigPlugin = config => {
 return withAndroidManifest(config, config => {
  config.modResults.manifest.queries = [
   {
    intent: [
     {
      action: [{ $: { 'android:name': 'android.intent.action.SENDTO' } }],
      data: [{ $: { 'android:scheme': 'mailto' } }],
     },
     {
      action: [{ $: { 'android:name': 'android.intent.action.DIAL' } }],
     },
    ],
   },
  ];
  return config;
 });
};
module.exports = withAndroidQueries;

Show More

```

After creating the config plugin, [import the custom config plugin](https://docs.expo.dev/linking/into-other-apps/</config-plugins/plugins-and-mods#import-a-plugin>) under the `plugins` property:
app.json
Copy
```
{
 "expo": {
  "plugins": [
   "./my-plugin.ts"
   %%placeholder-start%%... %%placeholder-end%%
  ]
 }
}

```

> Tip: On Android, you can use `expo-intent-launcher` to open a specific settings screen on the device. See `expo-intent-launcher`[ API reference](https://docs.expo.dev/linking/into-other-apps/</versions/latest/sdk/intent-launcher#enums>) to view the list of available intents.
## Custom URL schemes[](https://docs.expo.dev/linking/into-other-apps/<#custom-url-schemes>)
> If you know the custom scheme for the app you want to open, you can link to it using any of the methods: [Using `expo-linking` API](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps#using-expo-linking-api>) or [Using `Link` from Expo Router](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps#using-expo-routers-link-component>).
Some services provide documentation on how to use their app's custom URL schemes. For example, [Uber's deep linking documentation](https://docs.expo.dev/linking/into-other-apps/<https:/developer.uber.com/docs/riders/ride-requests/tutorials/deep-links/introduction#standard-deep-links>) describes how to link directly to a specific pickup location and destination:
```
uber://?client_id=<CLIENT_ID>&action=setPickup&pickup[latitude]=37.775818&pickup[longitude]=-122.418028&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=37.802374&dropoff[longitude]=-122.405818&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383

```

In the example above, if the user does not have the Uber app installed on their device, your app can direct them to the Google Play Store or Apple App Store to install it. We recommend using the `react-native-app-link`[](https://docs.expo.dev/linking/into-other-apps/<https:/github.com/FiberJW/react-native-app-link>) library to handle these scenarios.
Specify custom schemes for iOS[](https://docs.expo.dev/linking/into-other-apps/<#specify-custom-schemes-for-ios>)
On iOS, using `Linking.canOpenURL`[](https://docs.expo.dev/linking/into-other-apps/</versions/latest/sdk/linking#linkingcanopenurlurl>) to query other apps's linking schemes requires additional configuration in InfoPlist. You can use the `ios.infoPlist`[](https://docs.expo.dev/linking/into-other-apps/</versions/latest/config/app#infoplist>) property in your app config to specify a list of schemes your app is allowed to query. For example:
app.json
Copy
```
{
 "expo": {
  "ios": {
   "infoPlist": {
    "LSApplicationQueriesSchemes": ["uber"]
   }
  }
 }
}

```

If your don't specify this list, `Linking.canOpenURL` may return `false` even if the device has the target app installed.
> Tip: To test the configuration described above from an iOS device, [use a development build](https://docs.expo.dev/linking/into-other-apps/</develop/development-builds/introduction>). It cannot be tested with Expo Go.
## Create URLs[](https://docs.expo.dev/linking/into-other-apps/<#create-urls>)
You can use `Linking.createURL`[](https://docs.expo.dev/linking/into-other-apps/</versions/latest/sdk/linking#linkingcreateurlurl>) to create a URL that can be used to open or redirect back to your app. This method resolves to the following:
  * Production and development builds: `myapp://`, where `myapp` is the [custom scheme](https://docs.expo.dev/linking/into-other-apps/</linking/into-your-app#add-a-scheme-in-app-config>) defined in the app config
  * Development in Expo Go: `exp://127.0.0.1:8081`


Using `Linking.createURL` helps you avoid hardcoding URLs. You can modify the returned URL by passing optional parameters to this method.
To pass data to your app, you can append it as a path or query string to the URL. `Linking.createURL` will construct a working URL automatically. For example:
Example
Copy
```
const redirectUrl = Linking.createURL('path/into/app', {
 queryParams: { hello: 'world' },
});

```

This will resolve into the following, depending on the environment:
  * Production and development builds: `myapp://path/into/app?hello=world`
  * Development in Expo Go: `exp://127.0.0.1:8081/--/path/into/app?hello=world`

Using Expo Go for testing?[](https://docs.expo.dev/linking/into-other-apps/<#using-expo-go-for-testing>)
For apps that require a stable URL (for example, auth provider redirects), use a development build with a custom scheme instead of using Expo Go. For more details on how to create and test a custom scheme, see [Linking into your app](https://docs.expo.dev/linking/into-other-apps/</linking/into-your-app>).
## In-app browsers[](https://docs.expo.dev/linking/into-other-apps/<#in-app-browsers>)
The `expo-linking` API allows you to open a URL using the operating system's default web browser app. You can use the `expo-web-browser`[](https://docs.expo.dev/linking/into-other-apps/</versions/latest/sdk/webbrowser>) library to open URLs in an in-app browser. For example, an in-app browser is useful for secure [authentication](https://docs.expo.dev/linking/into-other-apps/</guides/authentication>).
Example of opening a URL in an in-app browser[](https://docs.expo.dev/linking/into-other-apps/<#example-of-opening-a-url-in-an>)
The example below simulates the behavior of opening a URL in an in-app browser using `expo-web-browser` and the default or preferred web browser using `expo-linking`:
WebBrowser compared to Linking
Copy
Open in Snack
```
import { Button, View, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
export default function Home() {
 return (
  <View style={styles.container}><Button
    title="Open URL with the system browser"
    onPress={() => Linking.openURL('https://expo.dev')}
    style={styles.button}
   /><Button
    title="Open URL with an in-app browser"
    onPress={() => WebBrowser.openBrowserAsync('https://expo.dev')}
    style={styles.button}
   /></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
 button: {
  marginVertical: 10,
 },
});

Show More

```

## Additional link functionality on web[](https://docs.expo.dev/linking/into-other-apps/<#additional-link-functionality-on-web>)
To provide additional link functionality on the web, such as right-click to copy or hover to preview, you can use a `Link` component from the `expo-router`[](https://docs.expo.dev/linking/into-other-apps/</router/introduction>) library.
index.tsx
Copy
```
import { Link } from 'expo-router';
export default function Home() {
 return <Link href="https://expo.dev">Go to Expo</Link>;
}

```

Alternatively, you can use the `@expo/html-elements`[](https://docs.expo.dev/linking/into-other-apps/<https:/www.npmjs.com/package/@expo/html-elements>) library to use a universal `<A>` element:
index.tsx
Copy
```
import { A } from '@expo/html-elements';
export default function Home() {
 return <A href="https://expo.dev">Go to Expo</A>;
}

```

The `<A>` component renders an `<a>` on the web and an interactive `<Text>`that uses the `expo-linking` API on native platforms.
[Previous (Development process - Linking)Overview](https://docs.expo.dev/linking/into-other-apps/</linking/overview>)[Next (Development process - Linking)Into your app](https://docs.expo.dev/linking/into-other-apps/</linking/into-your-app>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/linking/into-other-apps/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/linking/into-other-apps/<https:/github.com/expo/expo/edit/main/docs/pages/linking/into-other-apps.mdx>)
  * Last updated on October 07, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/linking/into-other-apps/<https:/expo.dev/privacy>).
On this page
[Using expo-linking API](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps/#using-expo-linking-api>)[Using Expo Router's Link component](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps/#using-expo-routers-link-component>)[Common URL schemes](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps/#common-url-schemes>)[Custom URL schemes](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps/#custom-url-schemes>)[Create URLs](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps/#create-urls>)[In-app browsers](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps/#in-app-browsers>)[Additional link functionality on web](https://docs.expo.dev/linking/into-other-apps/</linking/into-other-apps/#additional-link-functionality-on-web>)
