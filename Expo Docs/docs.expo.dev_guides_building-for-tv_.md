[](https://docs.expo.dev/guides/building-for-tv/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/building-for-tv/</>)
[Blog](https://docs.expo.dev/guides/building-for-tv/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/building-for-tv/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/building-for-tv/</>)[Guides](https://docs.expo.dev/guides/building-for-tv/</guides/overview>)[EAS](https://docs.expo.dev/guides/building-for-tv/</eas>)[Reference](https://docs.expo.dev/guides/building-for-tv/</versions/latest>)[Learn](https://docs.expo.dev/guides/building-for-tv/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/building-for-tv/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/building-for-tv/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/building-for-tv/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/building-for-tv/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/building-for-tv/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/building-for-tv/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/building-for-tv/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/building-for-tv/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/building-for-tv/</router/introduction>)[Installation](https://docs.expo.dev/guides/building-for-tv/</router/installation>)[Create pages](https://docs.expo.dev/guides/building-for-tv/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/building-for-tv/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/building-for-tv/</router/layouts>)[Error handling](https://docs.expo.dev/guides/building-for-tv/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/building-for-tv/</modules/overview>)[Get started](https://docs.expo.dev/guides/building-for-tv/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/building-for-tv/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/building-for-tv/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/building-for-tv/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/building-for-tv/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/building-for-tv/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/building-for-tv/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/building-for-tv/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/building-for-tv/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/building-for-tv/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/building-for-tv/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/building-for-tv/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/building-for-tv/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/building-for-tv/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/building-for-tv/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/building-for-tv/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/building-for-tv/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/building-for-tv/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/building-for-tv/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/building-for-tv/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/building-for-tv/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/building-for-tv/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/building-for-tv/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/building-for-tv/</archive>)[Expo Snack](https://docs.expo.dev/guides/building-for-tv/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/building-for-tv/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/building-for-tv/<https:/expo.dev/mailing-list/signup>)
# Build Expo apps for TV
[Edit this page](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/expo/expo/edit/main/docs/pages/guides/building-for-tv.mdx> "Edit content of this page on GitHub")
A guide for building an Expo app for an Android TV or Apple TV target.
[Edit this page](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/expo/expo/edit/main/docs/pages/guides/building-for-tv.mdx> "Edit content of this page on GitHub")
> TV development is available only in SDK 50 and above. Not all Expo features and SDK libraries are available on TV. For more details, check the [See which libraries are supported](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv#see-which-libraries-are-supported>).
React Native is supported on Android TV and Apple TV through the [React Native TV project](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/react-native-tvos/react-native-tvos>). This technology extends beyond TV, offering a comprehensive core repo fork with support for phone and TV targets, including Hermes and Fabric.
Using the React Native TV library as the `react-native` dependency in an Expo project, it becomes capable of targeting both mobile (Android, iOS) and TV (Android TV, Apple TV) devices.
## Prerequisites[](https://docs.expo.dev/guides/building-for-tv/<#prerequisites>)
The necessary changes to the native Android and iOS files are minimal and can be automated with a [config plugin](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/react-native-tvos/config-tv/tree/main/packages/config-tv>) if you use [prebuild](https://docs.expo.dev/guides/building-for-tv/</workflow/prebuild>). Below is a list of changes made by the config plugins, which you can alternatively apply manually:
### Android[](https://docs.expo.dev/guides/building-for-tv/<#android>)
  * AndroidManifest.xml is modified: 
    * The default phone portrait orientation is removed
    * The required intent for TV apps is added
  * MainApplication.kt is modified to remove unsupported Flipper invocations


### iOS[](https://docs.expo.dev/guides/building-for-tv/<#ios>)
  * ios/Podfile is modified to target tvOS instead of iOS
  * The Xcode project is modified to target tvOS instead of iOS
  * The splash screen (SplashScreen.storyboard) is modified to work on tvOS


## System requirements for TV development[](https://docs.expo.dev/guides/building-for-tv/<#system-requirements-for-tv-development>)
### Android TV[](https://docs.expo.dev/guides/building-for-tv/<#android-tv>)
  * [Node.js (LTS)](https://docs.expo.dev/guides/building-for-tv/<https:/nodejs.org/en/>) on macOS or Linux.
  * Android Studio (Iguana or later).
  * In the Android Studio SDK manager, select the dropdown for the Android SDK you are using (API version 31 or later), and make sure an Android TV system image is selected for installation. (For Apple silicon, choose the ARM 64 image. Otherwise, choose the Intel x86_64 image).
  * After installing the Android TV system image, create an Android TV emulator using that image (the process is the same as creating an Android phone emulator).


### Apple TV[](https://docs.expo.dev/guides/building-for-tv/<#apple-tv>)
  * [Node.js (LTS)](https://docs.expo.dev/guides/building-for-tv/<https:/nodejs.org/en/>) on macOS.
  * Xcode 15 or later.
  * tvOS SDK 17 or later. (This is not installed automatically with Xcode. You can install it later with `xcodebuild -downloadAllPlatforms`).


## Quick start[](https://docs.expo.dev/guides/building-for-tv/<#quick-start>)
The fastest way to generate a new project is described in the [TV example](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/expo/examples/tree/master/with-tv>) within the Expo examples repository:
Terminal
Copy
`- ``npx create-expo-app MyTVProject -e with-tv`
For SDK 51 and later, you can start with the [TV Router example](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/expo/examples/tree/master/with-router-tv>):
Terminal
Copy
`- ``npx create-expo-app MyTVProject -e with-router-tv`
This creates a new project that uses [Expo Router](https://docs.expo.dev/guides/building-for-tv/</router/introduction>) for file-based navigation, modeled after the [create-expo-app default template](https://docs.expo.dev/guides/building-for-tv/</get-started/create-a-project>).
See which libraries are supported[](https://docs.expo.dev/guides/building-for-tv/<#see-which-libraries-are-supported>)
At this time, TV applications work with the following libraries and APIs listed below:
  * [AppleAuthentication](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/apple-authentication>)
  * [Application](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/application>)
  * [Audio](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/audio>)
  * [Asset](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/asset>)
  * [AsyncStorage](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/async-storage>)
  * [AV](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/av>)
  * [BlurView](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/blur-view>)
  * [BuildProperties](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/build-properties>)
  * [Constants](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/constants>)
  * [Crypto](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/crypto>)
  * [Device](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/device>)
  * [FileSystem](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/filesystem>)
  * [FlashList](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/flash-list>)
  * [Font](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/font>)
  * [Image](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/image>)
  * [KeepAwake](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/keep-awake>)
  * [LinearGradient](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/linear-gradient>)
  * [Localization](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/localization>)
  * [Manifests](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/manifests>)
  * [NetInfo](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/netinfo>)
  * [Reanimated](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/reanimated>)
  * [SafeAreaContext](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/safe-area-context>)
  * [SplashScreen](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/splash-screen>)
  * [Svg](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/svg>)
  * [Updates](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/updates>)
  * [Video](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/video>)


TV also works with `react-navigation`[](https://docs.expo.dev/guides/building-for-tv/<https:/reactnavigation.org/>), `react-native-video`[](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/react-native-video/react-native-video>), and many other commonly used third-party React Native libraries. See [React Native directory](https://docs.expo.dev/guides/building-for-tv/<https:/reactnative.directory/?tvos=true>) to learn more about supported third-party libraries.
#### Limitations[](https://docs.expo.dev/guides/building-for-tv/<#limitations>)
  * The [Expo DevClient](https://docs.expo.dev/guides/building-for-tv/</versions/latest/sdk/dev-client>) library is not supported at this time.
  * The [Expo Router](https://docs.expo.dev/guides/building-for-tv/</router/introduction>) library is only supported in SDK 51 and later.


## Integration with an existing Expo project[](https://docs.expo.dev/guides/building-for-tv/<#integration-with-an-existing-expo-project>)
The following walkthrough describes the steps required to modify an Expo project for TV.
1
### Modify dependencies for TV[](https://docs.expo.dev/guides/building-for-tv/<#modify-dependencies-for-tv>)
In package.json, modify the `react-native` dependency to use the TV repo, and exclude this dependency from `npx expo install`[ version validation](https://docs.expo.dev/guides/building-for-tv/</more/expo-cli#configuring-dependency-validation>).
package.json
Copy
```
{
 %%placeholder-start%%... %%placeholder-end%%
 "dependencies": {
  %%placeholder-start%%... %%placeholder-end%%
  "react-native": "npm:react-native-tvos",
  %%placeholder-start%%... %%placeholder-end%%
 },
 "expo": {
  "install": {
   "exclude": [
    "react-native"
   ]
  }
 }
}

```

2
### Add the TV config plugin[](https://docs.expo.dev/guides/building-for-tv/<#add-the-tv-config-plugin>)
Terminal
Copy
`- ``npx expo install @react-native-tvos/config-tv -- --dev`
When installed, the plugin will modify the project for TV when either:
  * The environment variable `EXPO_TV` is set to `1`
  * The plugin parameter `isTV` is set to `true`


Verify that this plugin appears in app.json:
app.json
Copy
```
{
 "plugins": ["@react-native-tvos/config-tv"]
}

```

To see additional information on the plugin's actions during prebuild, you can set [debug environment variables](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/debug-js/debug#conventions>) before running prebuild. (See also our documentation on [Expo CLI environment variables](https://docs.expo.dev/guides/building-for-tv/</more/expo-cli#environment-variables>).)
Terminal
`# See all Expo CLI and config plugin debug information`
`- ``export DEBUG=expo:*`
`# See only debug information for the TV plugin`
`- ``export DEBUG=expo:react-native-tvos:config-tv`
3
### Run prebuild[](https://docs.expo.dev/guides/building-for-tv/<#run-prebuild>)
Set the `EXPO_TV` environment variable, and run prebuild to make the TV modifications to the project.
Terminal
`- ``export EXPO_TV=1`
`- ``npx expo prebuild --clean`
> Note: The `--clean` argument is recommended, and is required if you have existing Android and iOS directories in the project.
4
### Build for Android TV[](https://docs.expo.dev/guides/building-for-tv/<#build-for-android-tv>)
Start an Android TV emulator and use the following command to start the app on the emulator:
Terminal
Copy
`- ``npx expo run:android`
5
### Build for Apple TV[](https://docs.expo.dev/guides/building-for-tv/<#build-for-apple-tv>)
Run the following command to build and run the app on an Apple TV simulator:
Terminal
Copy
`- ``npx expo run:ios`
6
### Revert TV changes and build for phone[](https://docs.expo.dev/guides/building-for-tv/<#revert-tv-changes-and-build-for-phone>)
You can revert the changes for TV and go back to phone development by unsetting `EXPO_TV` and running prebuild again:
Terminal
`- ``unset EXPO_TV`
`- ``npx expo prebuild --clean`
7
### Create EAS Build profiles for both TV and phone[](https://docs.expo.dev/guides/building-for-tv/<#create-eas-build-profiles-for-both-tv-and-phone>)
Since the TV build can be driven by the value of an environment variable, it is easy to set up EAS Build profiles that build from the same source but target TV instead of phone.
The following example eas.json shows how to extend existing profiles (`development` and `preview`) to create TV profiles (`development_tv` and `preview_tv`).
eas.json
Copy
```
{
 "cli": {
  "version": ">= 5.2.0"
 },
 "build": {
  "base": {
   "distribution": "internal",
   "ios": {
    "simulator": true
   },
   "android": {
    "buildType": "apk",
    "withoutCredentials": true
   },
   "channel": "base"
  },
  "development": {
   "extends": "base",
   "android": {
    "gradleCommand": ":app:assembleDebug"
   },
   "ios": {
    "buildConfiguration": "Debug"
   },
   "channel": "development"
  },
  "development_tv": {
   "extends": "development",
   "env": {
    "EXPO_TV": "1"
   },
   "channel": "development"
  },
  "preview": {
   "extends": "base",
   "channel": "preview"
  },
  "preview_tv": {
   "extends": "preview",
   "env": {
    "EXPO_TV": "1"
   },
   "channel": "preview"
  }
 },
 "submit": {}
}

Show More

```

## More[](https://docs.expo.dev/guides/building-for-tv/<#more>)
[IgniteTVA complete example is available on GitHub.](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/react-native-tvos/IgniteTV>)
[Previous (More - Integrations)Using BugSnag](https://docs.expo.dev/guides/building-for-tv/</guides/using-bugsnag>)[Next (More - Integrations)Using TypeScript](https://docs.expo.dev/guides/building-for-tv/</guides/typescript>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/building-for-tv/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/building-for-tv/<https:/github.com/expo/expo/edit/main/docs/pages/guides/building-for-tv.mdx>)
  * Last updated on December 13, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/building-for-tv/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#prerequisites>)[Android](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#android>)[iOS](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#ios>)[System requirements for TV development](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#system-requirements-for-tv-development>)[Android TV](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#android-tv>)[Apple TV](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#apple-tv>)[Quick start](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#quick-start>)[Integration with an existing Expo project](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#integration-with-an-existing-expo-project>)[Modify dependencies for TV](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#modify-dependencies-for-tv>)[Add the TV config plugin](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#add-the-tv-config-plugin>)[Run prebuild](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#run-prebuild>)[Build for Android TV](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#build-for-android-tv>)[Build for Apple TV](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#build-for-apple-tv>)[Revert TV changes and build for phone](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#revert-tv-changes-and-build-for-phone>)[Create EAS Build profiles for both TV and phone](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#create-eas-build-profiles-for-both-tv-and-phone>)[More](https://docs.expo.dev/guides/building-for-tv/</guides/building-for-tv/#more>)
