[](https://docs.expo.dev/workflow/ios-simulator/<https:/expo.dev>)[Docs](https://docs.expo.dev/workflow/ios-simulator/</>)
[Blog](https://docs.expo.dev/workflow/ios-simulator/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/workflow/ios-simulator/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/workflow/ios-simulator/<https:/github.com/expo/expo>)[](https://docs.expo.dev/workflow/ios-simulator/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/workflow/ios-simulator/</>)[Guides](https://docs.expo.dev/workflow/ios-simulator/</guides/overview>)[EAS](https://docs.expo.dev/workflow/ios-simulator/</eas>)[Reference](https://docs.expo.dev/workflow/ios-simulator/</versions/latest>)[Learn](https://docs.expo.dev/workflow/ios-simulator/</tutorial/overview>)
[Overview](https://docs.expo.dev/workflow/ios-simulator/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/workflow/ios-simulator/</workflow/overview>)[Configure with app config](https://docs.expo.dev/workflow/ios-simulator/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/workflow/ios-simulator/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/workflow/ios-simulator/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/workflow/ios-simulator/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/workflow/ios-simulator/</guides/permissions>)[Environment variables](https://docs.expo.dev/workflow/ios-simulator/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
[Work with monorepos](https://docs.expo.dev/workflow/ios-simulator/</guides/monorepos>)[View logs](https://docs.expo.dev/workflow/ios-simulator/</workflow/logging>)[Development and production modes](https://docs.expo.dev/workflow/ios-simulator/</workflow/development-mode>)[Common development errors](https://docs.expo.dev/workflow/ios-simulator/</workflow/common-development-errors>)[Android Studio Emulator](https://docs.expo.dev/workflow/ios-simulator/</workflow/android-studio-emulator>)[iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator>)[New Architecture](https://docs.expo.dev/workflow/ios-simulator/</guides/new-architecture>)[React Compiler](https://docs.expo.dev/workflow/ios-simulator/</guides/react-compiler>)
Expo Router
[Introduction](https://docs.expo.dev/workflow/ios-simulator/</router/introduction>)[Installation](https://docs.expo.dev/workflow/ios-simulator/</router/installation>)[Create pages](https://docs.expo.dev/workflow/ios-simulator/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/workflow/ios-simulator/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/workflow/ios-simulator/</router/layouts>)[Error handling](https://docs.expo.dev/workflow/ios-simulator/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/workflow/ios-simulator/</modules/overview>)[Get started](https://docs.expo.dev/workflow/ios-simulator/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/workflow/ios-simulator/</push-notifications/overview>)[About notification types](https://docs.expo.dev/workflow/ios-simulator/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/workflow/ios-simulator/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/workflow/ios-simulator/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/workflow/ios-simulator/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/workflow/ios-simulator/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/workflow/ios-simulator/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/workflow/ios-simulator/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/workflow/ios-simulator/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/workflow/ios-simulator/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/workflow/ios-simulator/</archive>)[Expo Snack](https://docs.expo.dev/workflow/ios-simulator/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/workflow/ios-simulator/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/workflow/ios-simulator/<https:/expo.dev/mailing-list/signup>)
# iOS Simulator
[Edit this page](https://docs.expo.dev/workflow/ios-simulator/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/ios-simulator.mdx> "Edit content of this page on GitHub")
Learn how you can install the iOS Simulator on your Mac and use it to develop your app.
[Edit this page](https://docs.expo.dev/workflow/ios-simulator/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/ios-simulator.mdx> "Edit content of this page on GitHub")
Developing your app directly on a computer can be more convenient than constantly interacting with an iPhone or iPad, especially when network conditions are slow or when a [tunnel connection](https://docs.expo.dev/workflow/ios-simulator/</more/expo-cli#tunneling>) is required due to LAN limitations.
This guide explains how to install the iOS Simulator on your Mac for app development. Note that the iOS Simulator can only be installed on macOS. If you are developing an iOS app from a Windows or a Linux machine, you will need a physical iOS device.
## Setup Xcode and Watchman[](https://docs.expo.dev/workflow/ios-simulator/<#setup-xcode-and-watchman>)
1
### Install Xcode[](https://docs.expo.dev/workflow/ios-simulator/<#install-xcode>)
Open up the Mac App Store, search for [Xcode](https://docs.expo.dev/workflow/ios-simulator/<https:/apps.apple.com/us/app/xcode/id497799835>), and click Install (or Update if you have it already).
2
### Install Xcode Command Line Tools[](https://docs.expo.dev/workflow/ios-simulator/<#install-xcode-command-line-tools>)
Open Xcode, choose Settings... from the Xcode menu (or press `cmd ⌘` + `,`). Go to the Locations and install the tools by selecting the most recent version in the Command Line Tools dropdown.
![Xcode preferences](https://docs.expo.dev/static/images/ios-simulator/xcode-command-line.png)
3
### Install Watchman[](https://docs.expo.dev/workflow/ios-simulator/<#install-watchman>)
[Watchman](https://docs.expo.dev/workflow/ios-simulator/<https:/facebook.github.io/watchman/docs/install#macos>) is a tool for watching changes in the filesystem. Installing it will result in better performance. You can install it with:
Terminal
Copy
`- ``brew update`
`- ``brew install watchman`
4
### Try it out[](https://docs.expo.dev/workflow/ios-simulator/<#try-it-out>)
Run your app with `npx expo start` and press `i` from the command line.
You may get a warning about needing to accept the Xcode license. Run the command that it suggests. Open your app again to see if it was successful. If not, check the [troubleshooting](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator#troubleshooting>) tips below.
You can also press `shift` + `i` in the Expo CLI to interactively select a simulator to open.
![List of iOS Simulators in the Expo CLI UI.](https://docs.expo.dev/static/images/ios-simulator/simulators-list.png)
## Expo Orbit[](https://docs.expo.dev/workflow/ios-simulator/<#expo-orbit>)
You can use the Expo Orbit app which allows launching builds and simulator management with one click from the menu bar on macOS.
[Use Expo OrbitLearn more about how to use Expo Orbit.](https://docs.expo.dev/workflow/ios-simulator/</build/orbit>)
## Limitations[](https://docs.expo.dev/workflow/ios-simulator/<#limitations>)
Although the iOS Simulator is great for rapid development, it does come with a few limitations. We'll list out a few of the main differences that affect Expo APIs below. However, see [Apple's documentation](https://docs.expo.dev/workflow/ios-simulator/<https:/help.apple.com/simulator/mac/current/#/devb0244142d>) for more details.
The following hardware is unavailable in the Simulator:
  * Audio Input
  * Barometer
  * Camera
  * Motion Support (accelerometer and gyroscope)


The Simulator also suspends background apps and processes on iOS 11 and later.
## Troubleshooting[](https://docs.expo.dev/workflow/ios-simulator/<#troubleshooting>)
### The CLI seems to be stuck when opening a Simulator[](https://docs.expo.dev/workflow/ios-simulator/<#the-cli-seems-to-be-stuck-when-opening-a-simulator>)
Sometimes the iOS Simulator doesn't respond to the open command. If it seems stuck on this prompt, you can open the iOS Simulator manually (`open -a Simulator`) and then in the macOS toolbar, choose File > Open Simulator, and select an iOS version and device that you'd like to open.
![Opening a simulator manually from the macOS toolbar.](https://docs.expo.dev/static/images/ios-simulator/open-simulator-manually.png)
You can use this menu to open any version of the simulator. You can also open multiple simulators at the same time, however, Expo CLI will always target the most recently opened simulator.
### Simulator opened but the Expo Go app isn't opening inside of it[](https://docs.expo.dev/workflow/ios-simulator/<#simulator-opened-but-the-expo-go-app-isnt-opening-inside-of-it>)
The first time you install the app in the simulator, iOS will ask if you'd like to open the Expo Go app. You may need to interact with the simulator (click around, drag something) for this prompt to show up, then press OK.
### How do I force an update to the latest version?[](https://docs.expo.dev/workflow/ios-simulator/<#how-do-i-force-an-update-to-the-latest-version>)
Create a project with the desired SDK version and open it in a simulator to install a particular version of Expo Go.
Terminal
`# Bootstrap an SDK 51 project`
`- ``npx create-expo-app --template blank@51`
`# Open the app on a simulator to install the required Expo Go app`
`- ``npx expo start --ios`
### Expo CLI is printing an error message about `xcrun`, what do I do?[](https://docs.expo.dev/workflow/ios-simulator/<#expo-cli-is-printing-an-error-message-about-xcrun-what-do-i-do>)
For miscellaneous errors, try the following:
  * Manually uninstall Expo Go on your simulator and reinstall by pressing `shift` + `i` in the Expo CLI Terminal UI and selecting the desired simulator.
  * If that doesn't help, focus the simulator window and in the Mac toolbar choose Device > Erase All Content and Settings... This will reinitialize your simulator from a blank image. This is sometimes useful for cases where your computer is low on memory and the simulator fails to store some internal files, leaving the device in a corrupt state.


[Previous (Development process - Reference)Android Studio Emulator](https://docs.expo.dev/workflow/ios-simulator/</workflow/android-studio-emulator>)[Next (Development process - Reference)New Architecture](https://docs.expo.dev/workflow/ios-simulator/</guides/new-architecture>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/workflow/ios-simulator/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/workflow/ios-simulator/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/ios-simulator.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/workflow/ios-simulator/<https:/expo.dev/privacy>).
On this page
[Setup Xcode and Watchman](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#setup-xcode-and-watchman>)[Install Xcode](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#install-xcode>)[Install Xcode Command Line Tools](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#install-xcode-command-line-tools>)[Install Watchman](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#install-watchman>)[Try it out](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#try-it-out>)[Expo Orbit](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#expo-orbit>)[Limitations](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#limitations>)[Troubleshooting](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#troubleshooting>)[The CLI seems to be stuck when opening a Simulator](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#the-cli-seems-to-be-stuck-when-opening-a-simulator>)[Simulator opened but the Expo Go app isn't opening inside of it](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#simulator-opened-but-the-expo-go-app-isnt-opening-inside-of-it>)[How do I force an update to the latest version?](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#how-do-i-force-an-update-to-the-latest-version>)[Expo CLI is printing an error message about xcrun , what do I do?](https://docs.expo.dev/workflow/ios-simulator/</workflow/ios-simulator/#expo-cli-is-printing-an-error-message-about-xcrun-what-do-i-do>)
