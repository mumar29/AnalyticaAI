[](https://docs.expo.dev/workflow/development-mode/<https:/expo.dev>)[Docs](https://docs.expo.dev/workflow/development-mode/</>)
[Blog](https://docs.expo.dev/workflow/development-mode/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/workflow/development-mode/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/workflow/development-mode/<https:/github.com/expo/expo>)[](https://docs.expo.dev/workflow/development-mode/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/workflow/development-mode/</>)[Guides](https://docs.expo.dev/workflow/development-mode/</guides/overview>)[EAS](https://docs.expo.dev/workflow/development-mode/</eas>)[Reference](https://docs.expo.dev/workflow/development-mode/</versions/latest>)[Learn](https://docs.expo.dev/workflow/development-mode/</tutorial/overview>)
[Overview](https://docs.expo.dev/workflow/development-mode/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/workflow/development-mode/</workflow/overview>)[Configure with app config](https://docs.expo.dev/workflow/development-mode/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/workflow/development-mode/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/workflow/development-mode/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/workflow/development-mode/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/workflow/development-mode/</guides/permissions>)[Environment variables](https://docs.expo.dev/workflow/development-mode/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
[Work with monorepos](https://docs.expo.dev/workflow/development-mode/</guides/monorepos>)[View logs](https://docs.expo.dev/workflow/development-mode/</workflow/logging>)[Development and production modes](https://docs.expo.dev/workflow/development-mode/</workflow/development-mode>)[Common development errors](https://docs.expo.dev/workflow/development-mode/</workflow/common-development-errors>)[Android Studio Emulator](https://docs.expo.dev/workflow/development-mode/</workflow/android-studio-emulator>)[iOS Simulator](https://docs.expo.dev/workflow/development-mode/</workflow/ios-simulator>)[New Architecture](https://docs.expo.dev/workflow/development-mode/</guides/new-architecture>)[React Compiler](https://docs.expo.dev/workflow/development-mode/</guides/react-compiler>)
Expo Router
[Introduction](https://docs.expo.dev/workflow/development-mode/</router/introduction>)[Installation](https://docs.expo.dev/workflow/development-mode/</router/installation>)[Create pages](https://docs.expo.dev/workflow/development-mode/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/workflow/development-mode/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/workflow/development-mode/</router/layouts>)[Error handling](https://docs.expo.dev/workflow/development-mode/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/workflow/development-mode/</modules/overview>)[Get started](https://docs.expo.dev/workflow/development-mode/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/workflow/development-mode/</push-notifications/overview>)[About notification types](https://docs.expo.dev/workflow/development-mode/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/workflow/development-mode/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/workflow/development-mode/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/workflow/development-mode/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/workflow/development-mode/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/workflow/development-mode/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/workflow/development-mode/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/workflow/development-mode/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/workflow/development-mode/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/workflow/development-mode/</archive>)[Expo Snack](https://docs.expo.dev/workflow/development-mode/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/workflow/development-mode/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/workflow/development-mode/<https:/expo.dev/mailing-list/signup>)
# Development and production modes
[Edit this page](https://docs.expo.dev/workflow/development-mode/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/development-mode.mdx> "Edit content of this page on GitHub")
Learn how to run a project in development mode or production mode.
[Edit this page](https://docs.expo.dev/workflow/development-mode/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/development-mode.mdx> "Edit content of this page on GitHub")
Your project will always run in either development or production mode. By default, running your project locally with `npx expo start` runs it in development mode, whereas a published project (with `eas update`), or any standalone app, will run in production mode.
Development mode includes useful warnings and gives you access to tools that make development and debugging easier. Production mode [minifies your code](https://docs.expo.dev/workflow/development-mode/</guides/customizing-metro#minification>) and better represents the performance your app will have on end users' devices. Let's look at each of these modes in more detail and learn how you can switch between them.
## Development mode[](https://docs.expo.dev/workflow/development-mode/<#development-mode>)
React Native includes some very useful tools for development: remote JavaScript debugging in Chrome, live reload, hot reloading, and an element inspector similar to the beloved inspector you use in Chrome. If you want to see how to use those tools, see [Debugging](https://docs.expo.dev/workflow/development-mode/</debugging/runtime-issues>).
Development mode also performs validations while your app is running to give you warnings. For example, if you're using a deprecated property or if you forgot to pass a required property into a component. The video below shows the Element Inspector and Performance Monitor in action on both Android Emulator and iOS Simulator:
> This comes at a cost. Your app runs slower in development mode. You can switch it on and off with the Expo CLI, see [Production mode](https://docs.expo.dev/workflow/development-mode/</workflow/development-mode#production-mode>). When you switch it, close and re-open your app for the change to take effect. Any time you are testing your app's performance, make sure to disable development mode.
### View the developer menu[](https://docs.expo.dev/workflow/development-mode/<#view-the-developer-menu>)
The menu gives access to a host of features that make development and debugging much easier. For more information on how to open it on Android and iOS, see [Developer menu](https://docs.expo.dev/workflow/development-mode/</debugging/tools#developer-menu>).
## Production mode[](https://docs.expo.dev/workflow/development-mode/<#production-mode>)
Production mode is most useful for two things:
  * Testing your app's performance, as Development slows your app down considerably.
  * Catching bugs that only show up in production.


The easiest way to simulate how your project will run on end users' devices is with the command:
Terminal
Copy
`- ``npx expo start --no-dev --minify`
It runs the JavaScript of your app in production mode (which tells the Metro bundler to set the `__DEV__` environment variable to `false`, among a few other things). The `--minify` flag minifies your app. This flag also eliminates unnecessary data such as comments, formatting, and unused code. If you are getting an error or crash in your standalone app, running your project with this command can save you a lot of time in finding the root cause.
To completely compile your app for production see [Compiling Android](https://docs.expo.dev/workflow/development-mode/</more/expo-cli#compiling-android>) and [Compiling iOS](https://docs.expo.dev/workflow/development-mode/</more/expo-cli#compiling-ios>).
[Previous (Development process - Reference)View logs](https://docs.expo.dev/workflow/development-mode/</workflow/logging>)[Next (Development process - Reference)Common development errors](https://docs.expo.dev/workflow/development-mode/</workflow/common-development-errors>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/workflow/development-mode/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/workflow/development-mode/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/development-mode.mdx>)
  * Last updated on August 31, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/workflow/development-mode/<https:/expo.dev/privacy>).
On this page
[Development mode](https://docs.expo.dev/workflow/development-mode/</workflow/development-mode/#development-mode>)[View the developer menu](https://docs.expo.dev/workflow/development-mode/</workflow/development-mode/#view-the-developer-menu>)[Production mode](https://docs.expo.dev/workflow/development-mode/</workflow/development-mode/#production-mode>)
