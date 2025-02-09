[](https://docs.expo.dev/workflow/logging/<https:/expo.dev>)[Docs](https://docs.expo.dev/workflow/logging/</>)
[Blog](https://docs.expo.dev/workflow/logging/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/workflow/logging/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/workflow/logging/<https:/github.com/expo/expo>)[](https://docs.expo.dev/workflow/logging/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/workflow/logging/</>)[Guides](https://docs.expo.dev/workflow/logging/</guides/overview>)[EAS](https://docs.expo.dev/workflow/logging/</eas>)[Reference](https://docs.expo.dev/workflow/logging/</versions/latest>)[Learn](https://docs.expo.dev/workflow/logging/</tutorial/overview>)
[Overview](https://docs.expo.dev/workflow/logging/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/workflow/logging/</workflow/overview>)[Configure with app config](https://docs.expo.dev/workflow/logging/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/workflow/logging/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/workflow/logging/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/workflow/logging/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/workflow/logging/</guides/permissions>)[Environment variables](https://docs.expo.dev/workflow/logging/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
[Work with monorepos](https://docs.expo.dev/workflow/logging/</guides/monorepos>)[View logs](https://docs.expo.dev/workflow/logging/</workflow/logging>)[Development and production modes](https://docs.expo.dev/workflow/logging/</workflow/development-mode>)[Common development errors](https://docs.expo.dev/workflow/logging/</workflow/common-development-errors>)[Android Studio Emulator](https://docs.expo.dev/workflow/logging/</workflow/android-studio-emulator>)[iOS Simulator](https://docs.expo.dev/workflow/logging/</workflow/ios-simulator>)[New Architecture](https://docs.expo.dev/workflow/logging/</guides/new-architecture>)[React Compiler](https://docs.expo.dev/workflow/logging/</guides/react-compiler>)
Expo Router
[Introduction](https://docs.expo.dev/workflow/logging/</router/introduction>)[Installation](https://docs.expo.dev/workflow/logging/</router/installation>)[Create pages](https://docs.expo.dev/workflow/logging/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/workflow/logging/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/workflow/logging/</router/layouts>)[Error handling](https://docs.expo.dev/workflow/logging/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/workflow/logging/</modules/overview>)[Get started](https://docs.expo.dev/workflow/logging/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/workflow/logging/</push-notifications/overview>)[About notification types](https://docs.expo.dev/workflow/logging/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/workflow/logging/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/workflow/logging/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/workflow/logging/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/workflow/logging/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/workflow/logging/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/workflow/logging/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/workflow/logging/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/workflow/logging/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/workflow/logging/</archive>)[Expo Snack](https://docs.expo.dev/workflow/logging/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/workflow/logging/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/workflow/logging/<https:/expo.dev/mailing-list/signup>)
# View logs
[Edit this page](https://docs.expo.dev/workflow/logging/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/logging.mdx> "Edit content of this page on GitHub")
Learn how to view logs when using Expo CLI, native logs in Android Studio and Xcode, and system logs.
[Edit this page](https://docs.expo.dev/workflow/logging/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/logging.mdx> "Edit content of this page on GitHub")
Logging information in a React Native app works similarly to in a web browser. You can use `console.log`, `console.warn` and `console.error`. However, at times, you might want to dive deep to get more useful information about what's happening in your app. For that, you can use native logs and system logs.
## Console logs[](https://docs.expo.dev/workflow/logging/<#console-logs>)
When you run `npx expo start` and connect a device, console logs will show up in the terminal process. These logs are sent from the runtime to Expo CLI over web sockets, meaning the results are lower fidelity than connecting dev tools directly to the engine.
You can view high fidelity logs and use advanced logging functions like `console.table` by creating a development build with [Hermes](https://docs.expo.dev/workflow/logging/</guides/using-hermes>), and [connecting the inspector](https://docs.expo.dev/workflow/logging/</guides/using-hermes#javascript-inspector-for-hermes>).
## Native logs[](https://docs.expo.dev/workflow/logging/<#native-logs>)
You can view native runtime logs in Android Studio and Xcode by compiling the native app locally. For more information, see [native debugging](https://docs.expo.dev/workflow/logging/</debugging/runtime-issues#native-debugging>).
## System logs[](https://docs.expo.dev/workflow/logging/<#system-logs>)
While it's usually not necessary, if you want to see logs for everything happening on your device, for example, even the logs from other apps and the OS, you can use the following commands:
Terminal
`# Show system logs for an Android device with adb logcat`
`- ``npx react-native log-android`
`# Show system logs for an iOS device`
`- ``npx react-native log-ios`
[Previous (Development process - Reference)Work with monorepos](https://docs.expo.dev/workflow/logging/</guides/monorepos>)[Next (Development process - Reference)Development and production modes](https://docs.expo.dev/workflow/logging/</workflow/development-mode>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/workflow/logging/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/workflow/logging/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/logging.mdx>)
  * Last updated on May 16, 2023


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/workflow/logging/<https:/expo.dev/privacy>).
On this page
[Console logs](https://docs.expo.dev/workflow/logging/</workflow/logging/#console-logs>)[Native logs](https://docs.expo.dev/workflow/logging/</workflow/logging/#native-logs>)[System logs](https://docs.expo.dev/workflow/logging/</workflow/logging/#system-logs>)
