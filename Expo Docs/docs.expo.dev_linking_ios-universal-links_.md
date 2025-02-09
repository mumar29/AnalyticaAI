[](https://docs.expo.dev/linking/ios-universal-links/<https:/expo.dev>)[Docs](https://docs.expo.dev/linking/ios-universal-links/</>)
[Blog](https://docs.expo.dev/linking/ios-universal-links/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/linking/ios-universal-links/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/linking/ios-universal-links/<https:/github.com/expo/expo>)[](https://docs.expo.dev/linking/ios-universal-links/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/linking/ios-universal-links/</>)[Guides](https://docs.expo.dev/linking/ios-universal-links/</guides/overview>)[EAS](https://docs.expo.dev/linking/ios-universal-links/</eas>)[Reference](https://docs.expo.dev/linking/ios-universal-links/</versions/latest>)[Learn](https://docs.expo.dev/linking/ios-universal-links/</tutorial/overview>)
[Overview](https://docs.expo.dev/linking/ios-universal-links/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/linking/ios-universal-links/</workflow/overview>)[Configure with app config](https://docs.expo.dev/linking/ios-universal-links/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/linking/ios-universal-links/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/linking/ios-universal-links/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/linking/ios-universal-links/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/linking/ios-universal-links/</guides/permissions>)[Environment variables](https://docs.expo.dev/linking/ios-universal-links/</guides/environment-variables>)
Linking
[Overview](https://docs.expo.dev/linking/ios-universal-links/</linking/overview>)[Into other apps](https://docs.expo.dev/linking/ios-universal-links/</linking/into-other-apps>)[Into your app](https://docs.expo.dev/linking/ios-universal-links/</linking/into-your-app>)[Android App Links](https://docs.expo.dev/linking/ios-universal-links/</linking/android-app-links>)[iOS Universal Links](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links>)
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/linking/ios-universal-links/</router/introduction>)[Installation](https://docs.expo.dev/linking/ios-universal-links/</router/installation>)[Create pages](https://docs.expo.dev/linking/ios-universal-links/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/linking/ios-universal-links/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/linking/ios-universal-links/</router/layouts>)[Error handling](https://docs.expo.dev/linking/ios-universal-links/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/linking/ios-universal-links/</modules/overview>)[Get started](https://docs.expo.dev/linking/ios-universal-links/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/linking/ios-universal-links/</push-notifications/overview>)[About notification types](https://docs.expo.dev/linking/ios-universal-links/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/linking/ios-universal-links/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/linking/ios-universal-links/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/linking/ios-universal-links/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/linking/ios-universal-links/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/linking/ios-universal-links/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/linking/ios-universal-links/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/linking/ios-universal-links/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/linking/ios-universal-links/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/linking/ios-universal-links/</archive>)[Expo Snack](https://docs.expo.dev/linking/ios-universal-links/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/linking/ios-universal-links/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/linking/ios-universal-links/<https:/expo.dev/mailing-list/signup>)
# iOS Universal Links
[Edit this page](https://docs.expo.dev/linking/ios-universal-links/<https:/github.com/expo/expo/edit/main/docs/pages/linking/ios-universal-links.mdx> "Edit content of this page on GitHub")
Learn how to configure iOS Universal Links to open your Expo app from a standard web URL.
[Edit this page](https://docs.expo.dev/linking/ios-universal-links/<https:/github.com/expo/expo/edit/main/docs/pages/linking/ios-universal-links.mdx> "Edit content of this page on GitHub")
To configure iOS Universal Links for your app, you need to set up the two-way association to verify your website and native app.
## Set up two-way association[](https://docs.expo.dev/linking/ios-universal-links/<#set-up-two-way-association>)
To setup two-way association between the website and app for iOS, you need to perform the following steps:
  * Website verification: This requires creating a apple-app-site-association (AASA) file inside the /.well-known directory and hosting it on the target website. This file is used to verify that the app opened from a given link is the correct app.
  * Native app verification: This requires some form of code signing that references the target website domain (URL).


### Create AASA file[](https://docs.expo.dev/linking/ios-universal-links/<#create-aasa-file>)
Create an apple-app-site-association file for the website verification inside the /.well-known directory. This file specifies your Apple Developer Team ID, bundle identifier, and a list of supported paths to redirect to the native app.
> You can run the experimental CLI command `npx setup-safari` inside your project to automatically register a bundle identifier to your Apple account, assign entitlements to the ID, and create an iTunes app entry in the store. The local setup will be printed and you can skip most the following. This is the easiest way to get started with universal links on iOS.
If you're using Expo Router to build your website (or any other modern React framework such as Remix, Next.js, and so on), create the AASA file at public/.well-known/apple-app-site-association. For legacy Expo webpack projects, create the file at web/.well-known/apple-app-site-association.
public/.well-known/apple-app-site-association
Copy
```
{
 // This section enables Universal Links
 "applinks": {
  "apps": [],
  "details": [
   {
    // Syntax: "<APPLE_TEAM_ID>.<BUNDLE_ID>"
    "appID": "QQ57RJ5UTD.com.example.myapp",
    // All paths that should support redirecting.
    "paths": ["/records/*"]
   }
  ]
 },
 // This section enables Apple Handoff
 "activitycontinuation": {
  "apps": ["<APPLE_TEAM_ID>.<BUNDLE_ID>"]
 },
 // This section enable Shared Web Credentials
 "webcredentials": {
  "apps": ["<APPLE_TEAM_ID>.<BUNDLE_ID>"]
 }
}

Show More

```

In the above example:
  * Any links to `https://www.myapp.io/records/*` (with wildcard matching for the record ID) should be opened directly by the app with a matching bundle identifier on an iOS device. It is a combination of the [Apple Team ID](https://docs.expo.dev/linking/ios-universal-links/<https:/expo.fyi/apple-team>) and the bundle identifier.
  * The `*` wildcard does not match domain or path separators (periods and slashes).
  * The `activitycontinuation` and `webcredentials` objects are optional, but recommended.


> See [Apple's documentation](https://docs.expo.dev/linking/ios-universal-links/<https:/developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html>) for further details on the format of the AASA. Branch provides an [AASA validator](https://docs.expo.dev/linking/ios-universal-links/<https:/branch.io/resources/aasa-validator/>) which can help you confirm that your AASA is correctly deployed and has a valid format.
### Supporting `details` format[](https://docs.expo.dev/linking/ios-universal-links/<#supporting-details-format>)
The `details`[ format is supported](https://docs.expo.dev/linking/ios-universal-links/<https:/developer.apple.com/documentation/xcode/supporting-associated-domains>) as of iOS 13. It allows you to specify:
  * `appIDs` instead of `appID`: Makes it easier to associate multiple apps with the same configuration
  * An array of `components`: Allows you to specify fragments, exclude specific paths, and add comments

An example AASA JSON from Apple's documentation[](https://docs.expo.dev/linking/ios-universal-links/<#an-example-aasa-json-from-apples-documentation>)
public/.well-known/apple-app-site-association
Copy
```
{
 "applinks": {
  "details": [
   {
    "appIDs": ["ABCDE12345.com.example.app", "ABCDE12345.com.example.app2"],
    "components": [
     {
      "#": "no_universal_links",
      "exclude": true,
      "comment": "Matches any URL whose fragment equals no_universal_links and instructs the system not to open it as a universal link"
     },
     {
      "/": "/buy/*",
      "comment": "Matches any URL whose path starts with /buy/"
     },
     {
      "/": "/help/website/*",
      "exclude": true,
      "comment": "Matches any URL whose path starts with /help/website/ and instructs the system not to open it as a universal link"
     },
     {
      "/": "/help/*",
      "?": {
       "articleNumber": "????"
      },
      "comment": "Matches any URL whose path starts with /help/ and which has a query item with name 'articleNumber' and a value of exactly 4 characters"
     }
    ]
   }
  ]
 }
}

Show More

```

To support all iOS versions, you can provide both the above formats in your `details` key, but we recommend placing the configuration for more recent iOS versions first.
### Host AASA file[](https://docs.expo.dev/linking/ios-universal-links/<#host-aasa-file>)
Host the apple-app-site-association file using a web server with your domain. This file must be served over an HTTPS connection. Verify that your browser can access this file.
After you have setup the AASA file, deploy your website to a server that supports HTTPS (most modern web hosts).
### Native app configuration[](https://docs.expo.dev/linking/ios-universal-links/<#native-app-configuration>)
After deploying your apple-app-site-association (AASA) file, configure your app to use your associated domain by adding `ios.associatedDomains`[](https://docs.expo.dev/linking/ios-universal-links/</versions/latest/config/app#associateddomains>) to your [app config](https://docs.expo.dev/linking/ios-universal-links/</workflow/configuration>). Make sure to follow [Apple's specified format](https://docs.expo.dev/linking/ios-universal-links/<https:/developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_associated-domains>) and not include the protocol (`https`) in your URL. This is a common mistake that will result in the universal links not working.
For example, if an associated website is `https://expo.dev/`, the `applinks` is:
app.json
Copy
```
{
 "expo": {
  "ios": {
   "associatedDomains": ["applinks:expo.dev"]
  }
 }
}

```

Build your iOS app with [EAS Build](https://docs.expo.dev/linking/ios-universal-links/</build/setup>) which ensures that the entitlement is registered with Apple automatically.
Manual native configuration[](https://docs.expo.dev/linking/ios-universal-links/<#manual-native-configuration>)
If you're not using EAS or [Continuous Native Generation](https://docs.expo.dev/linking/ios-universal-links/</workflow/continuous-native-generation>) (`npx expo prebuild`), you have to [manually configure](https://docs.expo.dev/linking/ios-universal-links/</build-reference/ios-capabilities#manual-setup>) the Associated Domains capability for your bundle identifier.
If you enable through the [Apple Developer Console](https://docs.expo.dev/linking/ios-universal-links/</build-reference/ios-capabilities#apple-developer-console>), then make sure to add the following entitlements in your ios/[app]/[app].entitlements file:
```
<key>com.apple.developer.associated-domains</key>
<array>
 <string>applinks:expo.dev</string>
</array>

```

### Native app verification[](https://docs.expo.dev/linking/ios-universal-links/<#native-app-verification>)
Install the app on your iOS device to trigger the verification process. A link to your website on your mobile device should open your app. If it doesn't, re-check the previous steps to ensure that your AASA is valid, the path specified in the AASA, and you have correctly configured your App ID in the [Apple Developer Console](https://docs.expo.dev/linking/ios-universal-links/<https:/developer.apple.com/account/resources/identifiers/list>).
Once you have your app opened, see [Handle links into your app](https://docs.expo.dev/linking/ios-universal-links/</linking/into-your-app#handle-urls>) for more information on how to handle inbound links and show the user the content they requested.
> iOS downloads your AASA when your app is first installed or when updates are installed from the App Store. The operating system does not refresh frequently after that. If you want to change the paths in your AASA for a production app, you will need to issue a full update via the App Store so that all of your users' apps re-fetch your AASA and recognize the new paths.
## Apple Smart Banner[](https://docs.expo.dev/linking/ios-universal-links/<#apple-smart-banner>)
If a user doesn't have your app installed, they'll be directed to the website. You can use the [Apple Smart Banner](https://docs.expo.dev/linking/ios-universal-links/<https:/developer.apple.com/documentation/webkit/promoting_apps_with_smart_app_banners>) to show a banner at the top of the page that prompts the user to install the app. The banner will only show up if the user is on a mobile device and doesn't have the app installed.
To enable the banner, add the following meta tag to the `<head>` of your website, replacing `<ITUNES_ID>` with your app's iTunes ID:
```
<meta name="apple-itunes-app" content="app-id=<ITUNES_ID>" />

```

If you're having trouble setting up the banner, run the following command to automatically generate the meta tag for your project:
Terminal
Copy
`- ``npx setup-safari`
### Add the meta tag to your statically rendered website[](https://docs.expo.dev/linking/ios-universal-links/<#add-the-meta-tag-to-your-statically-rendered-website>)
If you're building a [statically rendered website with Expo Router](https://docs.expo.dev/linking/ios-universal-links/</router/reference/static-rendering>), then add the HTML tag to the `<head>` component in your [app/+html.js file](https://docs.expo.dev/linking/ios-universal-links/</router/reference/static-rendering#root-html>).
app/+html.tsx
Copy
```
import { type PropsWithChildren } from "react";
export default function Root({ children }: PropsWithChildren) {
 return (
  <html lang="en"><head><meta charSet="utf-8" /><meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="apple-itunes-app" content="app-id=<ITUNES_ID>" />
    {/* Other head elements... */}</head><body>{children}</body></html>
 );
}

```

## Debugging[](https://docs.expo.dev/linking/ios-universal-links/<#debugging>)
Expo CLI enables you to test iOS Universal Links without deploying a website. Utilizing the `--tunnel`[](https://docs.expo.dev/linking/ios-universal-links/</more/expo-cli#tunneling>) functionality, you can forward your dev server to a publicly available HTTPS URL.
1
Set the environment variable `EXPO_TUNNEL_SUBDOMAIN=my-custom-domain` where `my-custom-domain` is a unique string that you use during development. This ensures that your tunnel URL is consistent across dev server restarts.
2
Add `associatedDomains` to your app config as [described above](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links#native-app-configuration>). Replace the domain value with a Ngrok URL: `my-custom-domain.ngrok.io`.
3
Start your dev server with the `--tunnel` flag:
Terminal
Copy
`- ``npx expo start --tunnel`
4
Compile the development build on your device:
Terminal
Copy
`- ``npx expo run:ios`
You can now type your custom domain link in your device's web browser to open your app.
## Troubleshooting[](https://docs.expo.dev/linking/ios-universal-links/<#troubleshooting>)
Here are some common tips to help you troubleshoot when implementing iOS Universal Links:
  * Read Apple's official documentation on [debugging universal links](https://docs.expo.dev/linking/ios-universal-links/<https:/developer.apple.com/documentation/technotes/tn3155-debugging-universal-links>)
  * Ensure your apple app site association file is valid by using a [validator tool](https://docs.expo.dev/linking/ios-universal-links/<https:/branch.io/resources/aasa-validator/>).
  * The uncompressed `apple-app-site-association` file cannot be [larger than 128kb](https://docs.expo.dev/linking/ios-universal-links/<https:/developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html>).
  * Ensure your website is served over HTTPS.
  * If you update your web files, rebuild the native app to trigger a server update on the vendor side (Apple).


[Previous (Development process - Linking)Android App Links](https://docs.expo.dev/linking/ios-universal-links/</linking/android-app-links>)[Next (Development process - Custom native code)Add custom native code](https://docs.expo.dev/linking/ios-universal-links/</workflow/customizing>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/linking/ios-universal-links/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/linking/ios-universal-links/<https:/github.com/expo/expo/edit/main/docs/pages/linking/ios-universal-links.mdx>)
  * Last updated on October 29, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/linking/ios-universal-links/<https:/expo.dev/privacy>).
On this page
[Set up two-way association](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#set-up-two-way-association>)[Create AASA file](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#create-aasa-file>)[Supporting details format](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#supporting-details-format>)[Host AASA file](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#host-aasa-file>)[Native app configuration](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#native-app-configuration>)[Native app verification](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#native-app-verification>)[Apple Smart Banner](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#apple-smart-banner>)[Add the meta tag to your statically rendered website](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#add-the-meta-tag-to-your-statically-rendered-website>)[Debugging](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#debugging>)[Troubleshooting](https://docs.expo.dev/linking/ios-universal-links/</linking/ios-universal-links/#troubleshooting>)
