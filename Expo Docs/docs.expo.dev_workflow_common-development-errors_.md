[](https://docs.expo.dev/workflow/common-development-errors/<https:/expo.dev>)[Docs](https://docs.expo.dev/workflow/common-development-errors/</>)
[Blog](https://docs.expo.dev/workflow/common-development-errors/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/workflow/common-development-errors/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/workflow/common-development-errors/<https:/github.com/expo/expo>)[](https://docs.expo.dev/workflow/common-development-errors/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/workflow/common-development-errors/</>)[Guides](https://docs.expo.dev/workflow/common-development-errors/</guides/overview>)[EAS](https://docs.expo.dev/workflow/common-development-errors/</eas>)[Reference](https://docs.expo.dev/workflow/common-development-errors/</versions/latest>)[Learn](https://docs.expo.dev/workflow/common-development-errors/</tutorial/overview>)
[Overview](https://docs.expo.dev/workflow/common-development-errors/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/workflow/common-development-errors/</workflow/overview>)[Configure with app config](https://docs.expo.dev/workflow/common-development-errors/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/workflow/common-development-errors/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/workflow/common-development-errors/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/workflow/common-development-errors/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/workflow/common-development-errors/</guides/permissions>)[Environment variables](https://docs.expo.dev/workflow/common-development-errors/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
[Work with monorepos](https://docs.expo.dev/workflow/common-development-errors/</guides/monorepos>)[View logs](https://docs.expo.dev/workflow/common-development-errors/</workflow/logging>)[Development and production modes](https://docs.expo.dev/workflow/common-development-errors/</workflow/development-mode>)[Common development errors](https://docs.expo.dev/workflow/common-development-errors/</workflow/common-development-errors>)[Android Studio Emulator](https://docs.expo.dev/workflow/common-development-errors/</workflow/android-studio-emulator>)[iOS Simulator](https://docs.expo.dev/workflow/common-development-errors/</workflow/ios-simulator>)[New Architecture](https://docs.expo.dev/workflow/common-development-errors/</guides/new-architecture>)[React Compiler](https://docs.expo.dev/workflow/common-development-errors/</guides/react-compiler>)
Expo Router
[Introduction](https://docs.expo.dev/workflow/common-development-errors/</router/introduction>)[Installation](https://docs.expo.dev/workflow/common-development-errors/</router/installation>)[Create pages](https://docs.expo.dev/workflow/common-development-errors/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/workflow/common-development-errors/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/workflow/common-development-errors/</router/layouts>)[Error handling](https://docs.expo.dev/workflow/common-development-errors/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/workflow/common-development-errors/</modules/overview>)[Get started](https://docs.expo.dev/workflow/common-development-errors/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/workflow/common-development-errors/</push-notifications/overview>)[About notification types](https://docs.expo.dev/workflow/common-development-errors/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/workflow/common-development-errors/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/workflow/common-development-errors/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/workflow/common-development-errors/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/workflow/common-development-errors/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/workflow/common-development-errors/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/workflow/common-development-errors/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/workflow/common-development-errors/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/workflow/common-development-errors/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/workflow/common-development-errors/</archive>)[Expo Snack](https://docs.expo.dev/workflow/common-development-errors/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/workflow/common-development-errors/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/workflow/common-development-errors/<https:/expo.dev/mailing-list/signup>)
# Common development errors
[Edit this page](https://docs.expo.dev/workflow/common-development-errors/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/common-development-errors.mdx> "Edit content of this page on GitHub")
A list of common development errors that are encountered by developers using Expo.
[Edit this page](https://docs.expo.dev/workflow/common-development-errors/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/common-development-errors.mdx> "Edit content of this page on GitHub")
This page outlines a list of errors that are commonly encountered by developers using Expo. For each error, the first bullet provides an explanation for why the error occurs and the second bullet contains debugging suggestions. If there is an error you think belongs here, we welcome and encourage you to [create a PR](https://docs.expo.dev/workflow/common-development-errors/<https:/github.com/expo/expo/pulls>)!
### Metro bundler ECONNREFUSED 127.0.0.1:19001[](https://docs.expo.dev/workflow/common-development-errors/<#metro-bundler-econnrefused-12700119001>)
  * An error is preventing the connection to your local development server.
  * Run `rm -rf .expo` to clear your local state. Check for firewalls or [proxies](https://docs.expo.dev/workflow/common-development-errors/</troubleshooting/proxies>) affecting the network you are currently connected to.


### Module AppRegistry is not a registered callable module (calling runApplication)[](https://docs.expo.dev/workflow/common-development-errors/<#module-appregistry-is-not-a-registered-callable-module-calling-runapplication>)
  * An error in your code is preventing the JavaScript bundle from being executed on startup.
  * Try running `npx expo start --no-dev --minify` to reproduce the production JS bundle locally. If possible, connect your device and access the device logs via Android Studio or Xcode. Device logs contain much more detailed stacktraces and information. Check to see if you have any changes or errors in your Babel configuration. In some rare cases, this issue could be caused by incompatibility between the Metro JavaScript minifier and certain code in your app ([more information](https://docs.expo.dev/workflow/common-development-errors/<https:/forums.expo.dev/t/change-minifierconfig-for-minify-uglify/36460/2>)).


### npm ERR! No git binary found in $PATH[](https://docs.expo.dev/workflow/common-development-errors/<#npm-err-no-git-binary-found-in-path>)
  * Either you do not have git installed or it is not properly configured in your `$PATH`.
  * [Install git](https://docs.expo.dev/workflow/common-development-errors/<https:/git-scm.com/book/en/v2/Getting-Started-Installing-Git>) if you have not already. Otherwise, check how to set it in your `$PATH` based on your OS.


### XX.X.X is not a valid SDK version[](https://docs.expo.dev/workflow/common-development-errors/<#xxxx-is-not-a-valid-sdk-version>)
  * The SDK version you are running has been deprecated and is no longer supported.
  * [Upgrade your project](https://docs.expo.dev/workflow/common-development-errors/</workflow/upgrading-expo-sdk-walkthrough>) to a supported SDK version. If you are using a supported version and see this message, you'll need to update your Expo Go app.


### React Native version mismatch[](https://docs.expo.dev/workflow/common-development-errors/<#react-native-version-mismatch>)
  * The development server running in your terminal is bundling a different version of React Native than the app in your device or simulator.
  * [Align your versions of react-native](https://docs.expo.dev/workflow/common-development-errors/</troubleshooting/react-native-version-mismatch>) by checking the versions in your app.json and package.json


### Application has not been registered[](https://docs.expo.dev/workflow/common-development-errors/<#application-has-not-been-registered>)
  * There is a mismatch between the AppKey registered in the native and JS portion of your app.
  * [Align your AppKey](https://docs.expo.dev/workflow/common-development-errors/</troubleshooting/application-has-not-been-registered>) with the native side of your project.


### Application not behaving as expected[](https://docs.expo.dev/workflow/common-development-errors/<#application-not-behaving-as-expected>)
  * It is possible caches may be preventing you from seeing the current state of your application.
  * Clear all caches associated with your project in [Unix-like](https://docs.expo.dev/workflow/common-development-errors/</troubleshooting/clear-cache-macos-linux>) or [Windows](https://docs.expo.dev/workflow/common-development-errors/</troubleshooting/clear-cache-windows>) systems.


[Previous (Development process - Reference)Development and production modes](https://docs.expo.dev/workflow/common-development-errors/</workflow/development-mode>)[Next (Development process - Reference)Android Studio Emulator](https://docs.expo.dev/workflow/common-development-errors/</workflow/android-studio-emulator>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/workflow/common-development-errors/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/workflow/common-development-errors/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/common-development-errors.mdx>)
  * Last updated on July 04, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/workflow/common-development-errors/<https:/expo.dev/privacy>).
On this page
[Metro bundler ECONNREFUSED 127.0.0.1:19001](https://docs.expo.dev/workflow/common-development-errors/</workflow/common-development-errors/#metro-bundler-econnrefused-12700119001>)[Module AppRegistry is not a registered callable module (calling runApplication)](https://docs.expo.dev/workflow/common-development-errors/</workflow/common-development-errors/#module-appregistry-is-not-a-registered-callable-module-calling-runapplication>)[npm ERR! No git binary found in $PATH](https://docs.expo.dev/workflow/common-development-errors/</workflow/common-development-errors/#npm-err-no-git-binary-found-in-path>)[XX.X.X is not a valid SDK version](https://docs.expo.dev/workflow/common-development-errors/</workflow/common-development-errors/#xxxx-is-not-a-valid-sdk-version>)[React Native version mismatch](https://docs.expo.dev/workflow/common-development-errors/</workflow/common-development-errors/#react-native-version-mismatch>)[Application has not been registered](https://docs.expo.dev/workflow/common-development-errors/</workflow/common-development-errors/#application-has-not-been-registered>)[Application not behaving as expected](https://docs.expo.dev/workflow/common-development-errors/</workflow/common-development-errors/#application-not-behaving-as-expected>)
