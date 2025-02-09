[](https://docs.expo.dev/develop/tools/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/tools/</>)
[Blog](https://docs.expo.dev/develop/tools/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/tools/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/tools/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/tools/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/tools/</>)[Guides](https://docs.expo.dev/develop/tools/</guides/overview>)[EAS](https://docs.expo.dev/develop/tools/</eas>)[Reference](https://docs.expo.dev/develop/tools/</versions/latest>)[Learn](https://docs.expo.dev/develop/tools/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/tools/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/tools/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/tools/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/tools/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/tools/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/tools/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/tools/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/tools/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/tools/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/tools/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/tools/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/tools/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/tools/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/tools/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/tools/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/tools/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/tools/</core-concepts>)[FAQ](https://docs.expo.dev/develop/tools/</faq>)
[Archive](https://docs.expo.dev/develop/tools/</archive>)[Expo Snack](https://docs.expo.dev/develop/tools/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/tools/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/tools/<https:/expo.dev/mailing-list/signup>)
# Tools for development
[Edit this page](https://docs.expo.dev/develop/tools/<https:/github.com/expo/expo/edit/main/docs/pages/develop/tools.mdx> "Edit content of this page on GitHub")
An overview of Expo tools and websites that will help you during various aspects of your project-building journey.
[Edit this page](https://docs.expo.dev/develop/tools/<https:/github.com/expo/expo/edit/main/docs/pages/develop/tools.mdx> "Edit content of this page on GitHub")
When you create a new project with Expo, learning about the following essential tools and websites can help you during your app development journey. This page provides an overview of a list of recommended tools.
## Expo CLI[](https://docs.expo.dev/develop/tools/<#expo-cli>)
Expo CLI is a development tool and is installed automatically with `expo` package when you create a new project. You can use it by leveraging `npx` (a Node.js package runner).
It is designed to help you move faster during the app development phase. For example, your first interaction with Expo CLI is starting the development server by running the command: `npx expo start`.
The following is a list of common commands that you will use with Expo CLI while developing your app:
Command| Description  
---|---  
`npx expo start`| Starts the development server (whether you are using a development build or Expo Go).  
`npx expo prebuild`| Generates native Android and iOS directories using [Prebuild](https://docs.expo.dev/develop/tools/</workflow/prebuild>).  
`npx expo run:android`| Compiles native Android app locally.  
`npx expo run:ios`| Compiles native iOS app locally.  
`npx expo install package-name`| Used to install a new library or validate and update specific libraries in your project by adding `--fix` option to this command.  
`npx expo lint`| [Setup and configures](https://docs.expo.dev/develop/tools/</guides/using-eslint>) ESLint. If ESLint is already configured, this command will [lint your project files](https://docs.expo.dev/develop/tools/</guides/using-eslint#usage>).  
In a nutshell, Expo CLI allows you to develop, compile, start your app, and more. See [Expo CLI reference](https://docs.expo.dev/develop/tools/</more/expo-cli>) for more available options and actions you can perform with the CLI.
## EAS CLI[](https://docs.expo.dev/develop/tools/<#eas-cli>)
EAS CLI is used to log in to your Expo account and compile your app using different EAS services such as Build, Update, or Submit. You can also use this tool to:
  * Publish your app to the app stores
  * Create a development, preview, or production build of your app
  * Create over-the-air (OTA) updates
  * Manage your app credentials
  * Create an ad hoc provisioning profile for an iOS device


To use EAS CLI, you need to install it globally on your local machine by running the command:
Terminal
Copy
`- ``npm install -g eas-cli`
You can use `eas --help` in your terminal window to learn more about the available commands. For a complete reference, see `eas-cli`[ npm page](https://docs.expo.dev/develop/tools/<https:/www.npmjs.com/package/eas-cli>).
## Expo Doctor[](https://docs.expo.dev/develop/tools/<#expo-doctor>)
Expo Doctor is a command line tool used to diagnose issues in your Expo project. To use it, run the following command in your project's root directory:
Terminal
Copy
`- ``npx expo-doctor`
This command performs checks and analyzes your project's codebase for common issues in [app config](https://docs.expo.dev/develop/tools/</workflow/configuration>) and package.json files, dependency compatibility, configuration files, and the overall health of the project. Once the check is complete, Expo Doctor outputs the results.
If Expo Doctor finds an issue, it provides a description of the problem along with advice on how to fix it or where to find help.
By default, Expo Doctor validates your project's packages against the [React Native directory](https://docs.expo.dev/develop/tools/<https:/reactnative.directory/>) and checks if app config properties are properly synced when native directories exist. You can configure these checks in your project's package.json file. See `reactNativeDirectoryCheck`[](https://docs.expo.dev/develop/tools/</versions/latest/config/package-json#reactnativedirectorycheck>) and `appConfigFieldsNotSyncedCheck`[](https://docs.expo.dev/develop/tools/</versions/latest/config/package-json#appconfigfieldsnotsynced>) for more details.
You can also use `npx expo-doctor --help` to display usage information.
## Orbit[](https://docs.expo.dev/develop/tools/<#orbit>)
Orbit is a macOS and Windows app that enables:
  * Install and launch builds from EAS on physical devices and emulators.
  * Install and launch updates from EAS on Android Emulators or iOS Simulators.
  * Launch snack projects on Android Emulators or iOS Simulators.
  * Use local files to install and launch apps. Orbit supports any Android .apk, iOS Simulator compatible .app, or ad hoc signed apps.
  * See a list of pinned projects from your EAS dashboard.


### Installation[](https://docs.expo.dev/develop/tools/<#installation>)
macOS
Windows
You can download Orbit with Homebrew for macOS, or directly from the [GitHub releases](https://docs.expo.dev/develop/tools/<https:/github.com/expo/orbit/releases>).
Terminal
Copy
`- ``brew install expo-orbit`
If you want Orbit to start when you log in automatically, click on the Orbit icon in the menu bar, then Settings and select the Launch on Login option.
> Note: Orbit for Windows is in preview and is only compatible with x64 and x86 machines. Compatibility for other architectures will be added in the future.
You can download Orbit for Windows directly from the [GitHub releases](https://docs.expo.dev/develop/tools/<https:/github.com/expo/orbit/releases>).
> Orbit relies on the Android SDK on both macOS and Windows and `xcrun` for device management only on macOS, which requires setting up both [Android Studio](https://docs.expo.dev/develop/tools/</workflow/android-studio-emulator>) and [Xcode](https://docs.expo.dev/develop/tools/</workflow/ios-simulator>).
## Expo Tools for VS Code[](https://docs.expo.dev/develop/tools/<#expo-tools-for-vs-code>)
Expo Tools is a VS Code extension to improve your development experience when working with app config files. It provides features such as autocomplete and intellisense for files such as app config, EAS config, store config and Expo Module config files.
[Install Expo Tools VS Code extensionUse this link to install the extension or search Expo Tools directly in your VS Code editor.](https://docs.expo.dev/develop/tools/<https:/marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools>)
You can also use it to debug your app using VS Code's built-in debugger to set breakpoints, inspect variables, execute code through the debug console, and more. See [Debugging with VS Code](https://docs.expo.dev/develop/tools/</debugging/tools#debugging-with-vs-code>) for how to use this extension for debugging.
## Test prototypes with Snack and Expo Go[](https://docs.expo.dev/develop/tools/<#test-prototypes-with-snack-and-expo-go>)
### Snack[](https://docs.expo.dev/develop/tools/<#snack>)
Snack is an in-browser development environment that works similarly to Expo Go. It's a great way to share code snippets and experiment with React Native without downloading any tools on your computer.
To use it, go to [snack.expo.dev](https://docs.expo.dev/develop/tools/<https:/snack.expo.dev/>), edit the `<Text>` component in App.js, choose a platform (Android, iOS, or web) in the right panel and see the changes live.
### Expo Go[](https://docs.expo.dev/develop/tools/<#expo-go>)
[Expo Go](https://docs.expo.dev/develop/tools/<https:/expo.dev/go>) is a free open-source, sandbox for learning and experimenting with React Native. It works with Android and iOS.
For more information on how to use it:
  * Click [this link](https://docs.expo.dev/develop/tools/</get-started/set-up-your-environment?mode=expo-go>) to go to Set up your environment guide
  * Select a platform to develop under Where would you like to develop?
  * Select Expo Go under How would you like to develop?
  * Follow the instructions described in that guide


> Note: Not recommended for building and distributing production apps to the app stores. Instead, use [development builds](https://docs.expo.dev/develop/tools/</get-started/set-up-your-environment?mode=development-build>).
What if I open a project with an unsupported SDK version?[](https://docs.expo.dev/develop/tools/<#what-if-i-open-a-project-with>)
When running a project that was created for an unsupported SDK version in Expo Go, you'll see the following error:
```
"Project is incompatible with this version of Expo Go"

```

To fix this, upgrading your project to a [supported SDK version](https://docs.expo.dev/develop/tools/</versions/latest#each-expo-sdk-version-depends-on-a-react-native-version>) is recommended. If you want to learn how to do it, see [Upgrade the project to a new SDK Version](https://docs.expo.dev/develop/tools/</develop/tools#how-do-i-upgrade-my-project-from>).
How do I upgrade my project from an unsupported SDK version?[](https://docs.expo.dev/develop/tools/<#how-do-i-upgrade-my-project-from>)
See [Upgrading Expo SDK guide](https://docs.expo.dev/develop/tools/</workflow/upgrading-expo-sdk-walkthrough>) for instructions for upgrading to a specific SDK version.
## React Native directory[](https://docs.expo.dev/develop/tools/<#react-native-directory>)
Any library that is compatible with React Native works in an Expo project when you use a development build to create your project.
[reactnative.directory](https://docs.expo.dev/develop/tools/<https:/reactnative.directory/>) is a searchable database for React Native libraries. If a library you are looking for is not included in Expo SDK, use the directory to find a compatible library for your project.
[Use librariesSee this guide to learn more about the difference between React Native core libraries, Expo SDK libraries, and third-party libraries. It also explains how to determine third-party library compatibility.](https://docs.expo.dev/develop/tools/</workflow/using-libraries>)
[Previous (Get started)Next steps](https://docs.expo.dev/develop/tools/</get-started/next-steps>)[Next (Develop - Navigation)File-based routing](https://docs.expo.dev/develop/tools/</develop/file-based-routing>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/tools/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/tools/<https:/github.com/expo/expo/edit/main/docs/pages/develop/tools.mdx>)
  * Last updated on December 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/tools/<https:/expo.dev/privacy>).
On this page
[Expo CLI](https://docs.expo.dev/develop/tools/</develop/tools/#expo-cli>)[EAS CLI](https://docs.expo.dev/develop/tools/</develop/tools/#eas-cli>)[Expo Doctor](https://docs.expo.dev/develop/tools/</develop/tools/#expo-doctor>)[Orbit](https://docs.expo.dev/develop/tools/</develop/tools/#orbit>)[Installation](https://docs.expo.dev/develop/tools/</develop/tools/#installation>)[Expo Tools for VS Code](https://docs.expo.dev/develop/tools/</develop/tools/#expo-tools-for-vs-code>)[Test prototypes with Snack and Expo Go](https://docs.expo.dev/develop/tools/</develop/tools/#test-prototypes-with-snack-and-expo-go>)[Snack](https://docs.expo.dev/develop/tools/</develop/tools/#snack>)[Expo Go](https://docs.expo.dev/develop/tools/</develop/tools/#expo-go>)[React Native directory](https://docs.expo.dev/develop/tools/</develop/tools/#react-native-directory>)
