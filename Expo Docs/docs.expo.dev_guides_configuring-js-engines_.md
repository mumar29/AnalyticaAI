[](https://docs.expo.dev/guides/configuring-js-engines/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/configuring-js-engines/</>)
[Blog](https://docs.expo.dev/guides/configuring-js-engines/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/configuring-js-engines/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/configuring-js-engines/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/configuring-js-engines/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/configuring-js-engines/</>)[Guides](https://docs.expo.dev/guides/configuring-js-engines/</guides/overview>)[EAS](https://docs.expo.dev/guides/configuring-js-engines/</eas>)[Reference](https://docs.expo.dev/guides/configuring-js-engines/</versions/latest>)[Learn](https://docs.expo.dev/guides/configuring-js-engines/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/configuring-js-engines/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/configuring-js-engines/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/configuring-js-engines/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/configuring-js-engines/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/configuring-js-engines/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/configuring-js-engines/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/configuring-js-engines/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/configuring-js-engines/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/configuring-js-engines/</router/introduction>)[Installation](https://docs.expo.dev/guides/configuring-js-engines/</router/installation>)[Create pages](https://docs.expo.dev/guides/configuring-js-engines/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/configuring-js-engines/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/configuring-js-engines/</router/layouts>)[Error handling](https://docs.expo.dev/guides/configuring-js-engines/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/configuring-js-engines/</modules/overview>)[Get started](https://docs.expo.dev/guides/configuring-js-engines/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/configuring-js-engines/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/configuring-js-engines/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/configuring-js-engines/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/configuring-js-engines/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/configuring-js-engines/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/configuring-js-engines/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/configuring-js-engines/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/configuring-js-engines/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/configuring-js-engines/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/configuring-js-engines/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/configuring-js-engines/</guides/icons>)[Localization](https://docs.expo.dev/guides/configuring-js-engines/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/configuring-js-engines/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/configuring-js-engines/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/configuring-js-engines/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/configuring-js-engines/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/configuring-js-engines/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/configuring-js-engines/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/configuring-js-engines/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/configuring-js-engines/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/configuring-js-engines/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/configuring-js-engines/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/configuring-js-engines/</archive>)[Expo Snack](https://docs.expo.dev/guides/configuring-js-engines/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/configuring-js-engines/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/configuring-js-engines/<https:/expo.dev/mailing-list/signup>)
# Configure JS engines
[Edit this page](https://docs.expo.dev/guides/configuring-js-engines/<https:/github.com/expo/expo/edit/main/docs/pages/guides/configuring-js-engines.mdx> "Edit content of this page on GitHub")
A guide on configuring JS engines for both Android and iOS in an Expo project.
[Edit this page](https://docs.expo.dev/guides/configuring-js-engines/<https:/github.com/expo/expo/edit/main/docs/pages/guides/configuring-js-engines.mdx> "Edit content of this page on GitHub")
JavaScript engines execute your application code and provide various features such as memory management, optimization, and error handling. By default, Expo projects use [Hermes](https://docs.expo.dev/guides/configuring-js-engines/<https:/hermesengine.dev/>) as the JavaScript engine (in SDK 47 and lower, the default was [JavaScriptCore](https://docs.expo.dev/guides/configuring-js-engines/<https:/developer.apple.com/documentation/javascriptcore>)). Switching to other engines, such as JSC or V8, for Android and iOS platforms is possible. However, not for the web because the JavaScript engine is included in the web browser.
## Configuring the `jsEngine` through app config[](https://docs.expo.dev/guides/configuring-js-engines/<#configuring-the-jsengine-through-app-config>)
> Changing the JS engine is unavailable in Expo Go from SDK 52 (only the Hermes engine is available). A [development build](https://docs.expo.dev/guides/configuring-js-engines/</develop/development-builds/introduction>) is required to use this customization.
We recommend Hermes because it is purpose built and optimized for React Native apps, and it has the best debugging experience. If you are familiar with the tradeoffs of different JavaScript engines and would like to change away from Hermes, the `jsEngine`[](https://docs.expo.dev/guides/configuring-js-engines/</versions/latest/config/app#jsengine>) field inside [app config](https://docs.expo.dev/guides/configuring-js-engines/</workflow/configuration>) allows you to specify the JavaScript engine for your app. The default value is `hermes`.
If you want to use JSC instead, set the `jsEngine` field in the app config:
app.json
Copy
```
{
 "expo": {
  "jsEngine": "jsc"
 }
}

```

Usage in bare React Native projects[](https://docs.expo.dev/guides/configuring-js-engines/<#usage-in-bare-react-native-projects>)
To change the JavaScript engine in a bare React Native project, update the `expo.jsEngine` value in android/gradle.properties and ios/Podfile.properties.json.
It's important to highlight that changing the JS engine will require you to recompile development builds with `eas build` to work properly.
## Using the V8 engine[](https://docs.expo.dev/guides/configuring-js-engines/<#using-the-v8-engine>)
To use the V8 engine, you need to install `react-native-v8`[](https://docs.expo.dev/guides/configuring-js-engines/<https:/github.com/Kudo/react-native-v8>), an opt-in package that adds V8 runtime support for React Native. You can install it by running the following command:
Terminal
Copy
`- ``npx expo install react-native-v8 v8-android-jit`
Make sure to remove the `jsEngine` field from the app config.
Usage with Expo Prebuild[](https://docs.expo.dev/guides/configuring-js-engines/<#usage-with-expo-prebuild>)
Run `npx expo prebuild -p android --clean` after the installation to prebuild again.
## Switch JavaScript engine on a specific platform[](https://docs.expo.dev/guides/configuring-js-engines/<#switch-javascript-engine-on-a-specific-platform>)
To use a different engine on one specific platform, you can set the `"jsEngine"` value at the top level and then override it with a different value under the `"android"` or `"ios"` key. The value specified for the platform will take precedence over the common field.
app.json
Copy
```
{
 "expo": {
  "jsEngine": "hermes",
  "ios": {
   "jsEngine": "jsc"
  }
 }
}

```

[Previous (More - Assorted)Localization](https://docs.expo.dev/guides/configuring-js-engines/</guides/localization>)[Next (More - Assorted)Using Bun](https://docs.expo.dev/guides/configuring-js-engines/</guides/using-bun>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/configuring-js-engines/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/configuring-js-engines/<https:/github.com/expo/expo/edit/main/docs/pages/guides/configuring-js-engines.mdx>)
  * Last updated on October 14, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/configuring-js-engines/<https:/expo.dev/privacy>).
On this page
[Configuring the jsEngine through app config](https://docs.expo.dev/guides/configuring-js-engines/</guides/configuring-js-engines/#configuring-the-jsengine-through-app-config>)[Using the V8 engine](https://docs.expo.dev/guides/configuring-js-engines/</guides/configuring-js-engines/#using-the-v8-engine>)[Switch JavaScript engine on a specific platform](https://docs.expo.dev/guides/configuring-js-engines/</guides/configuring-js-engines/#switch-javascript-engine-on-a-specific-platform>)
