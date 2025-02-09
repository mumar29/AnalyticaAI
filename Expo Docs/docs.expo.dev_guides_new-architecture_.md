[](https://docs.expo.dev/guides/new-architecture/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/new-architecture/</>)
[Blog](https://docs.expo.dev/guides/new-architecture/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/new-architecture/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/new-architecture/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/new-architecture/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/new-architecture/</>)[Guides](https://docs.expo.dev/guides/new-architecture/</guides/overview>)[EAS](https://docs.expo.dev/guides/new-architecture/</eas>)[Reference](https://docs.expo.dev/guides/new-architecture/</versions/latest>)[Learn](https://docs.expo.dev/guides/new-architecture/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/new-architecture/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/new-architecture/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/new-architecture/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/new-architecture/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/new-architecture/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/new-architecture/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/new-architecture/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/new-architecture/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
[Work with monorepos](https://docs.expo.dev/guides/new-architecture/</guides/monorepos>)[View logs](https://docs.expo.dev/guides/new-architecture/</workflow/logging>)[Development and production modes](https://docs.expo.dev/guides/new-architecture/</workflow/development-mode>)[Common development errors](https://docs.expo.dev/guides/new-architecture/</workflow/common-development-errors>)[Android Studio Emulator](https://docs.expo.dev/guides/new-architecture/</workflow/android-studio-emulator>)[iOS Simulator](https://docs.expo.dev/guides/new-architecture/</workflow/ios-simulator>)[New Architecture](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture>)[React Compiler](https://docs.expo.dev/guides/new-architecture/</guides/react-compiler>)
Expo Router
[Introduction](https://docs.expo.dev/guides/new-architecture/</router/introduction>)[Installation](https://docs.expo.dev/guides/new-architecture/</router/installation>)[Create pages](https://docs.expo.dev/guides/new-architecture/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/new-architecture/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/new-architecture/</router/layouts>)[Error handling](https://docs.expo.dev/guides/new-architecture/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/new-architecture/</modules/overview>)[Get started](https://docs.expo.dev/guides/new-architecture/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/new-architecture/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/new-architecture/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/new-architecture/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/new-architecture/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/new-architecture/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/new-architecture/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/new-architecture/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/new-architecture/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/new-architecture/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/new-architecture/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/new-architecture/</archive>)[Expo Snack](https://docs.expo.dev/guides/new-architecture/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/new-architecture/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/new-architecture/<https:/expo.dev/mailing-list/signup>)
# React Native's New Architecture
[Edit this page](https://docs.expo.dev/guides/new-architecture/<https:/github.com/expo/expo/edit/main/docs/pages/guides/new-architecture.mdx> "Edit content of this page on GitHub")
Learn about React Native's "New Architecture" and how and why to migrate to it.
[Edit this page](https://docs.expo.dev/guides/new-architecture/<https:/github.com/expo/expo/edit/main/docs/pages/guides/new-architecture.mdx> "Edit content of this page on GitHub")
> We recommend using SDK 52 or newer for the best experience with the New Architecture.
The New Architecture is a name that we use to describe a complete refactoring of the internals of React Native. It is also used to solve limitations of the original React Native architecture discovered over years of usage in production at Meta and other companies.
In this guide, we'll talk about how to use the New Architecture in Expo projects today.
[New Architecture is hereA blog post from the React Native team at Meta that gives an overview of the features of the New Architecture and the motivations behind building it.](https://docs.expo.dev/guides/new-architecture/<https:/reactnative.dev/blog/2024/10/23/the-new-architecture-is-here>)
## Why invest in migrating to the New Architecture?[](https://docs.expo.dev/guides/new-architecture/<#why-invest-in-migrating-to-the-new-architecture>)
The New Architecture is the future of React Native — yet, for many apps, there may not be many immediate benefits to migrating today. You may want to think of migrating to the New Architecture as an investment in the future of your app, rather than as a way to immediately improve your app.
The changes that come with the New Architecture address the technical debt of the original implementation and unlock possibilities for solving long-standing issues in React Native, such as interoperability with synchronous native APIs (for example, `UITableView`), and pave the way for [concurrent React support](https://docs.expo.dev/guides/new-architecture/<https:/react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react>).
## Expo tools and the New Architecture[](https://docs.expo.dev/guides/new-architecture/<#expo-tools-and-the-new-architecture>)
As of SDK 51, nearly all `expo-*` packages in the [Expo SDK](https://docs.expo.dev/guides/new-architecture/</versions/latest>) support the New Architecture (including [bridgeless](https://docs.expo.dev/guides/new-architecture/<https:/github.com/reactwg/react-native-new-architecture/discussions/154>)). [Learn more about known issues](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture#known-issues-in-expo-sdk-libraries>).
Additionally, all modules written using the [Expo Modules API](https://docs.expo.dev/guides/new-architecture/</modules/overview>) support the New Architecture by default! So if you have built your own native modules using this API, no additional work is needed to use them with the New Architecture.
## Third-party libraries and the New Architecture[](https://docs.expo.dev/guides/new-architecture/<#third-party-libraries-and-the-new-architecture>)
The compatibility status of many of the most popular libraries is tracked on [React Native Directory](https://docs.expo.dev/guides/new-architecture/<https:/reactnative.directory/>) ([learn more about known issues in third-party libraries](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture#known-issues-in-third-party-libraries>)). We've built tooling into Expo Doctor to integrate with React Native Directory to help you validate your dependencies, so you can quickly learn which libraries are unmaintained and which incompatible or untested with the New Architecture.
### Validate your dependencies with React Native Directory[](https://docs.expo.dev/guides/new-architecture/<#validate-your-dependencies-with-react-native-directory>)
Run `npx expo-doctor` to check your dependencies against the data in React Native Directory.
Terminal
Copy
`- ``npx expo-doctor@latest`
You can configure the React Native Directory check in your package.json file. For example, if you would like to exclude a package from validation:
package.json
Copy
```
{
 "expo": {
  "doctor": {
   "reactNativeDirectoryCheck": {
    "exclude": ["react-redux"]
   }
  }
 }
}

```

See all available options[](https://docs.expo.dev/guides/new-architecture/<#see-all-available-options>)
  * enabled: If `true`, the check will warn if any packages are missing from React Native Directory. Set this to `false` to disable this behavior. On SDK 52 and above, this is set to `true` by default, otherwise it is `false` by default. You can also override this setting with the `EXPO_DOCTOR_ENABLE_DIRECTORY_CHECK` environment variable (0 is `false`, 1 is `true`).
  * exclude: List any packages you want to exclude from the check. Supports exact package names and regex patterns. For example, `["exact-package", "/or-a-regex-.*/"]`.
  * listUnknownPackages: By default, the check will warn if any packages are missing from React Native Directory. Set this to false to disable this behavior.


## Initialize a new project with the New Architecture[](https://docs.expo.dev/guides/new-architecture/<#initialize-a-new-project-with-the-new-architecture>)
As of SDK 52, all new projects will be initialized with the New Architecture enabled by default.
Terminal
Copy
`- ``npx create-expo-app@latest`
## Enable the New Architecture in an existing project[](https://docs.expo.dev/guides/new-architecture/<#enable-the-new-architecture-in-an-existing-project>)
1
Set `newArchEnabled` on target platforms:
SDK 52 and above
SDK 51 and below
To enable it on both Android and iOS, use the `newArchEnabled` at the root of the `expo` object in your app config. You can selectively enable it for a single platform by setting, for example, `"android": { "newArchEnabled": true }`.
app.json
Copy
```
{
 "expo": {
  "newArchEnabled": true
 }
}

```

To enable it, you need to [install the `expo-build-properties` plugin](https://docs.expo.dev/guides/new-architecture/</versions/latest/sdk/build-properties#installation>) and set `newArchEnabled` on target platforms.
app.json
Copy
```
{
 "expo": {
  "plugins": [
   [
    "expo-build-properties",
    {
     "android": {
      "newArchEnabled": true
     },
     "ios": {
      "newArchEnabled": true
     }
    }
   ]
  ]
 }
}

```

2
Create a new build:
Android
iOS
Terminal
`# Run a clean prebuild and start a local build, if you like`
`- ``npx expo prebuild --clean && npx expo run:android`
`# Run a build with EAS if you prefer`
`- ``eas build -p android`
Terminal
`# Run a clean prebuild and start a local build, if you like`
`- ``npx expo prebuild --clean && npx expo run:ios`
`# Run a build with EAS if you prefer`
`- ``eas build -p ios`
If the build succeeds, you will now be running your app with the New Architecture! Depending on the native modules you use, your app may work properly immediately.
Now you can tap around your app and test it out. For most non-trivial apps, you're likely to encounter some issues, such as missing native views that haven't been implemented for the New Architecture yet. Many of the issues you encounter are actionable and can be resolved with some configuration or code changes. We recommend reading [Troubleshooting](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture#troubleshooting>) sections below for more information.
Are you enabling the New Architecture in a bare React Native app?[](https://docs.expo.dev/guides/new-architecture/<#are-you-enabling-the-new-architecture-in>)
  * Android: Set `newArchEnabled=true` in the gradle.properties file.
  * iOS: If your project has a Podfile.properties.json file (which is created by `npx create-expo-app` or `npx expo prebuild`), you can enable the New Architecture by setting the `newArchEnabled` property to `"true"` in the Podfile.properties.json file. Otherwise, refer to the ["Enable the New Architecture for Apps"](https://docs.expo.dev/guides/new-architecture/<https:/github.com/reactwg/react-native-new-architecture/blob/main/docs/enable-apps.md>) section of the React Native New Architecture working group.


## Disable the New Architecture in an existing project[](https://docs.expo.dev/guides/new-architecture/<#disable-the-new-architecture-in-an-existing-project>)
Starting SDK 52, Expo Go only supports the New Architecture since all Expo libraries and third-party libraries included in Expo Go support the New Architecture. Note that [the Go app is not intended to be used as a development environment for real-world apps](https://docs.expo.dev/guides/new-architecture/<https:/expo.fyi/expo-go-usage>).
If you want to opt out of using the New Architecture, whether you are using Expo Go or a development build, remove the `newArchEnabled` property from app config and create a [development build](https://docs.expo.dev/guides/new-architecture/</develop/development-builds/introduction>).
## Troubleshooting[](https://docs.expo.dev/guides/new-architecture/<#troubleshooting>)
Meta and Expo are working towards making the New Architecture the default for all new apps and ensuring it is as easy as possible to migrate existing apps. However, the New Architecture isn't just a name — many of the internals of React Native has been re-architected and rebuilt from the ground up. As a result, you may encounter issues when enabling the New Architecture in your app. The following is some advice for troubleshooting these issues.
Can I still try the New Architecture even if some of the libraries I use aren't supported?[](https://docs.expo.dev/guides/new-architecture/<#can-i-still-try-the-new-architecture>)
You may be able to try the New Architecture in your app even if some of the libraries you use aren't supported, but it will require temporarily removing those libraries. Create a new branch in your repository and remove any of the libraries that aren't compatible until your app is running. This will give you a good idea of what libraries still need work before you can fully migrate to the New Architecture. We recommend creating issues or pull requests on those libraries' repositories to help them become compatible with the New Architecture. Alternatively, you could switch to other libraries that are compatible with the New Architecture. Refer to [React Native Directory](https://docs.expo.dev/guides/new-architecture/<https:/reactnative.directory/>) to find compatible libraries.
Known issues in Expo SDK libraries[](https://docs.expo.dev/guides/new-architecture/<#known-issues-in-expo-sdk-libraries>)
As of SDK 52, the following are the known issues with the New Architecture in the Expo SDK:
  * expo-location: background location is not yet supported.


You may encounter other issues in older SDK releases. We recommend upgrading to the latest SDK version.
Known issues in React Native[](https://docs.expo.dev/guides/new-architecture/<#known-issues-in-react-native>)
Refer to the [issues labeled with "Type: New Architecture" on the React Native GitHub repository](https://docs.expo.dev/guides/new-architecture/<https:/github.com/facebook/react-native/issues?q=is%3Aopen+is%3Aissue+label%3A%22Type%3A+New+Architecture%22>).
Known issues in third-party libraries[](https://docs.expo.dev/guides/new-architecture/<#known-issues-in-third-party-libraries>)
Since React Native 0.74, there are various Interop Layers enabled by default. This allows many libraries built for the old architecture to work on the New Architecture without any changes. However, the interop is not perfect and some libraries will need to be updated. The libraries that are most likely to require updates are those that ship or depend on third-party native code. [Learn more about library support in the New Architecture](https://docs.expo.dev/guides/new-architecture/<https:/github.com/reactwg/react-native-new-architecture/discussions/167>).
Refer to [React Native Directory](https://docs.expo.dev/guides/new-architecture/<https:/reactnative.directory/>) a more complete list of libraries and their compatibility with the New Architecture. The following libraries were found to be popular among Expo apps and are known to be incompatible:
  * @react-native-community/masked-view: use `@react-native-masked-view/masked-view` instead.
  * @react-native-community/clipboard: use `@react-native-clipboard/clipboard` instead.
  * rn-fetch-blob: use `react-native-blob-util` instead.
  * react-native-fs: use `expo-file-system` or [a fork of react-native-fs](https://docs.expo.dev/guides/new-architecture/<https:/github.com/birdofpreyru/react-native-fs>) instead.
  * react-native-geolocation-service: use `expo-location` instead.
  * react-native-datepicker: use `react-native-date-picker` or `@react-native-community/datetimepicker` instead.


My build failed after enabling the New Architecture[](https://docs.expo.dev/guides/new-architecture/<#my-build-failed-after-enabling-the-new>)
This isn't entirely surprising! Not all libraries are compatible yet, and in some cases compatibility was only recently added and so you will want to ensure you update your libraries to their latest versions. Read the logs to determine which library is incompatible. Also, run `npx expo-doctor@latest` to check your dependencies against the data in React Native Directory.
When you are using the latest version of a library and it is not compatible, report any issues you encounter to the respective GitHub repository. Create a [minimal reproducible example](https://docs.expo.dev/guides/new-architecture/<https:/stackoverflow.com/help/minimal-reproducible-example>) and report the issue to the library author. If you believe the issue originates in React Native itself, rather than a library, report it to the React Native team (again, with a minimal reproducible example).
[Previous (Development process - Reference)iOS Simulator](https://docs.expo.dev/guides/new-architecture/</workflow/ios-simulator>)[Next (Development process - Reference)React Compiler](https://docs.expo.dev/guides/new-architecture/</guides/react-compiler>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/new-architecture/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/new-architecture/<https:/github.com/expo/expo/edit/main/docs/pages/guides/new-architecture.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/new-architecture/<https:/expo.dev/privacy>).
On this page
[Why invest in migrating to the New Architecture?](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture/#why-invest-in-migrating-to-the-new-architecture>)[Expo tools and the New Architecture](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture/#expo-tools-and-the-new-architecture>)[Third-party libraries and the New Architecture](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture/#third-party-libraries-and-the-new-architecture>)[Validate your dependencies with React Native Directory](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture/#validate-your-dependencies-with-react-native-directory>)[Initialize a new project with the New Architecture](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture/#initialize-a-new-project-with-the-new-architecture>)[Enable the New Architecture in an existing project](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture/#enable-the-new-architecture-in-an-existing-project>)[Disable the New Architecture in an existing project](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture/#disable-the-new-architecture-in-an-existing-project>)[Troubleshooting](https://docs.expo.dev/guides/new-architecture/</guides/new-architecture/#troubleshooting>)
