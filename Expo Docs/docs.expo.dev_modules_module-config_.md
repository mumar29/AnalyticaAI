[](https://docs.expo.dev/modules/module-config/<https:/expo.dev>)[Docs](https://docs.expo.dev/modules/module-config/</>)
[Blog](https://docs.expo.dev/modules/module-config/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/modules/module-config/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/modules/module-config/<https:/github.com/expo/expo>)[](https://docs.expo.dev/modules/module-config/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/modules/module-config/</>)[Guides](https://docs.expo.dev/modules/module-config/</guides/overview>)[EAS](https://docs.expo.dev/modules/module-config/</eas>)[Reference](https://docs.expo.dev/modules/module-config/</versions/latest>)[Learn](https://docs.expo.dev/modules/module-config/</tutorial/overview>)
[Overview](https://docs.expo.dev/modules/module-config/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/modules/module-config/</workflow/overview>)[Configure with app config](https://docs.expo.dev/modules/module-config/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/modules/module-config/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/modules/module-config/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/modules/module-config/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/modules/module-config/</guides/permissions>)[Environment variables](https://docs.expo.dev/modules/module-config/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/modules/module-config/</router/introduction>)[Installation](https://docs.expo.dev/modules/module-config/</router/installation>)[Create pages](https://docs.expo.dev/modules/module-config/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/modules/module-config/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/modules/module-config/</router/layouts>)[Error handling](https://docs.expo.dev/modules/module-config/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/modules/module-config/</modules/overview>)[Get started](https://docs.expo.dev/modules/module-config/</modules/get-started>)
Tutorials
Reference
[Module API](https://docs.expo.dev/modules/module-config/</modules/module-api>)[Android lifecycle listeners](https://docs.expo.dev/modules/module-config/</modules/android-lifecycle-listeners>)[iOS AppDelegate subscribers](https://docs.expo.dev/modules/module-config/</modules/appdelegate-subscribers>)[Autolinking](https://docs.expo.dev/modules/module-config/</modules/autolinking>)[expo-module.config.json](https://docs.expo.dev/modules/module-config/</modules/module-config>)[Mocking native calls](https://docs.expo.dev/modules/module-config/</modules/mocking>)[Design considerations](https://docs.expo.dev/modules/module-config/</modules/design>)
Push notifications
[Overview](https://docs.expo.dev/modules/module-config/</push-notifications/overview>)[About notification types](https://docs.expo.dev/modules/module-config/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/modules/module-config/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/modules/module-config/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/modules/module-config/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/modules/module-config/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/modules/module-config/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/modules/module-config/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/modules/module-config/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/modules/module-config/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/modules/module-config/</archive>)[Expo Snack](https://docs.expo.dev/modules/module-config/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/modules/module-config/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/modules/module-config/<https:/expo.dev/mailing-list/signup>)
# expo-module.config.json
[Edit this page](https://docs.expo.dev/modules/module-config/<https:/github.com/expo/expo/edit/main/docs/pages/modules/module-config.mdx> "Edit content of this page on GitHub")
Learn about different configuration options available in expo-module.config.json.
[Edit this page](https://docs.expo.dev/modules/module-config/<https:/github.com/expo/expo/edit/main/docs/pages/modules/module-config.mdx> "Edit content of this page on GitHub")
Expo modules are configured in expo-module.config.json. This file currently is capable of configuring autolinking and module registration. The following properties are available:
  * `platforms` — An array of supported platforms.
  * `ios` — Config with options specific to iOS platform 
    * `modules` — Names of Swift native modules classes to put to the generated modules provider file.
    * `appDelegateSubscribers` — Names of Swift classes that hook into `ExpoAppDelegate` to receive AppDelegate lifecycle events.
  * `android` — Config with options specific to Android platform 
    * `modules` — Full names (package + class name) of Kotlin native modules classes to put to the generated package provider file.


[Previous (Expo Modules API - Reference)Autolinking](https://docs.expo.dev/modules/module-config/</modules/autolinking>)[Next (Expo Modules API - Reference)Mocking native calls](https://docs.expo.dev/modules/module-config/</modules/mocking>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/modules/module-config/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/modules/module-config/<https:/github.com/expo/expo/edit/main/docs/pages/modules/module-config.mdx>)
  * Last updated on July 23, 2023


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/modules/module-config/<https:/expo.dev/privacy>).
