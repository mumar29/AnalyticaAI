[](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/development-builds/create-a-build/</>)
[Blog](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/development-builds/create-a-build/</>)[Guides](https://docs.expo.dev/develop/development-builds/create-a-build/</guides/overview>)[EAS](https://docs.expo.dev/develop/development-builds/create-a-build/</eas>)[Reference](https://docs.expo.dev/develop/development-builds/create-a-build/</versions/latest>)[Learn](https://docs.expo.dev/develop/development-builds/create-a-build/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/development-builds/create-a-build/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/development-builds/create-a-build/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/development-builds/create-a-build/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/development-builds/create-a-build/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/development-builds/create-a-build/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/tools>)
Navigation
User interface
Development builds
[Introduction](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/introduction>)[Create a build](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/create-a-build>)[Use a build](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/use-development-builds>)[Share with your team](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/share-with-your-team>)[Tools, workflows and extensions](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/development-workflows>)[Next steps](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/next-steps>)
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/development-builds/create-a-build/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/development-builds/create-a-build/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/development-builds/create-a-build/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/development-builds/create-a-build/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/development-builds/create-a-build/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/development-builds/create-a-build/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/development-builds/create-a-build/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/development-builds/create-a-build/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/development-builds/create-a-build/</core-concepts>)[FAQ](https://docs.expo.dev/develop/development-builds/create-a-build/</faq>)
[Archive](https://docs.expo.dev/develop/development-builds/create-a-build/</archive>)[Expo Snack](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/expo.dev/mailing-list/signup>)
# Create a development build
[Edit this page](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/create-a-build.mdx> "Edit content of this page on GitHub")
Learn how to create development builds for a project.
[Edit this page](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/create-a-build.mdx> "Edit content of this page on GitHub")
> If you are looking to create a development build locally, rather than remotely on EAS, you can [create local builds with `npx expo run:[android|ios]`](https://docs.expo.dev/develop/development-builds/create-a-build/</guides/local-app-development#local-builds-with-expo-dev-client>) or with `eas build --local`[](https://docs.expo.dev/develop/development-builds/create-a-build/</build-reference/local-builds>).
Development builds can be created with [EAS Build](https://docs.expo.dev/develop/development-builds/create-a-build/</build/introduction>) or [locally on your computer](https://docs.expo.dev/develop/development-builds/create-a-build/</guides/local-app-development>) if you have Android Studio and Xcode installed.
In this guide, you'll find information on creating a development build with EAS and installing it on an emulator/simulator or a physical device to continue developing your app.
## Prerequisites[](https://docs.expo.dev/develop/development-builds/create-a-build/<#prerequisites>)
You will need a React Native Android and/or iOS project that is configured to build with EAS Build. If you haven't configured your project yet, see [Create your first build](https://docs.expo.dev/develop/development-builds/create-a-build/</build/setup>).
## Instructions[](https://docs.expo.dev/develop/development-builds/create-a-build/<#instructions>)
The following instructions cover both Android and iOS and physical devices and emulators. You can use whichever instructions are relevant to your project. If you would prefer a video over text, skip to [Video walkthroughs](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/create-a-build#video-walkthroughs>).
1
## Install expo-dev-client[](https://docs.expo.dev/develop/development-builds/create-a-build/<#install-expo-dev-client>)
Terminal
Copy
`- ``npx expo install expo-dev-client`
Are you using this library in a bare React Native app?[](https://docs.expo.dev/develop/development-builds/create-a-build/<#are-you-using-this-library-in-a>)
Apps that don't use [Continuous Native Generation](https://docs.expo.dev/develop/development-builds/create-a-build/</workflow/continuous-native-generation>) need to follow instructions from [Install `expo-dev-client` in bare React Native](https://docs.expo.dev/develop/development-builds/create-a-build/</bare/install-dev-builds-in-bare>).
2
## Verify your eas.json configuration[](https://docs.expo.dev/develop/development-builds/create-a-build/<#verify-your-easjson-configuration>)
The first time you run the `eas build` command, it creates an [eas.json](https://docs.expo.dev/develop/development-builds/create-a-build/</build/eas-json>) file at the root of your project directory. The eas.json includes three default build profiles — `development`, `preview`, and `production`. If you have removed the `development` profile since you first initialized eas.json, you should add it back now. A minimal configuration is shown below:
eas.json
Copy
```
{
 "build": {
  "development": {
   "developmentClient": true,
   "distribution": "internal"
  },
  "preview": {
   "distribution": "internal"
  },
  "production": {}
 }
}

```

The `development` profile sets the following options:
  * `developmentClient`[](https://docs.expo.dev/develop/development-builds/create-a-build/</eas/json#developmentclient>) to `true` to create a Debug build. It also generates a build artifact you can install on an Android device or emulator, or an iOS device with [internal distribution](https://docs.expo.dev/develop/development-builds/create-a-build/</build/internal-distribution>).
  * Building for an iOS device requires an Apple Developer Program membership. If you don't have one, you can only build for an iOS Simulator. See the next step for more information.


> iOS builds where `developmentClient` is set to `true` on the build profile should always be distributed as `internal`. If you are distributing for TestFlight, you have to set the distribution to `store`.
3
## Create a build for emulator/simulator[](https://docs.expo.dev/develop/development-builds/create-a-build/<#create-a-build-for-emulatorsimulator>)
Follow the steps below to create and install the development build on an Android Emulator or an iOS Simulator.
> This is only required if you want to develop a project on an emulator/simulator. Otherwise, skip these steps if you are using a device.
Each platform has specific instructions you'll have to follow:
For Android Emulator
For iOS Simulator
To create and install the development build on an Android Emulator, you will need a .apk. To create it, run the following command:
Terminal
Copy
`- ``eas build --profile development --platform android`
After the build is complete, the CLI will prompt you to automatically download and install it on the Android Emulator. When prompted, press `Y` to directly install it on the emulator.
See [Build APKs for Android Emulators and devices](https://docs.expo.dev/develop/development-builds/create-a-build/</build-reference/apk#installing-your-build>) for more information.
To create and install a development build on an iOS Simulator, we recommend you create a separate [build profile](https://docs.expo.dev/develop/development-builds/create-a-build/</build/eas-json#build-profiles>) for the simulator and then set the `ios.simulator` option to `true` in the eas.json.
For example, the `development-simulator` profile below is only for creating a development build for iOS Simulator:
eas.json
Copy
```
{
 "build": {
  "development-simulator": {
   "developmentClient": true,
   "distribution": "internal",
   "ios": {
    "simulator": true
   }
  }
 }
}

```

Then, run the following command to create the development build on an iOS Simulator:
Terminal
Copy
`- ``eas build --profile development-simulator --platform ios`
After the build is complete, the CLI will prompt you to automatically download and install it on the iOS Simulator. When prompted, press `Y` to directly install it on the simulator.
See [Installing build on the simulator](https://docs.expo.dev/develop/development-builds/create-a-build/</build-reference/simulators#installing-build-on-the-simulator>) for more information.
4
## Create a build for the device[](https://docs.expo.dev/develop/development-builds/create-a-build/<#create-a-build-for-the-device>)
Follow the steps below to create and install the development build on an Android or an iOS device. Each platform has specific instructions you'll have to follow:
For Android device
For iOS device
> If you have created a development build for Android Emulator, you do not need to create it separately for the device. You can skip this step since the same .apk will work in both scenarios.
To create and install the development build on an Android device, you will need a .apk. To create it, run the following command:
Terminal
Copy
`- ``eas build --profile development --platform android`
After the build is complete, copy the URL to the .apk from the build details page or the link provided when `eas build` has finished. Then, send that URL to your device and open it on your device to download and install the .apk.
> Apple Developer membership is required to create and install a development build on an iOS device.
To register any iOS device you'd like to develop onto your [ad hoc provisioning profile](https://docs.expo.dev/develop/development-builds/create-a-build/</build/internal-distribution#22-configure-app-signing-credentials-for-ios>), run the following command:
Terminal
Copy
`- ``eas device:create`
After registering your iOS device, you can create the development build by running the command:
Terminal
Copy
`- ``eas build --profile development --platform ios`
> Devices running iOS 16 and above require enabling a special OS-level Developer Mode to install development builds. If you don't have this setting enabled or are installing your first development build on your device, see [iOS Developer Mode](https://docs.expo.dev/develop/development-builds/create-a-build/</guides/ios-developer-mode>) to enable it.
After the build is complete, you can download it on your iOS device by scanning the QR code from the device's camera from the Expo CLI. The QR code is provided when the `eas build` command has finished running.
You can also find this QR code on the build page in the [Expo dashboard](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/builds>). Click the Install button and scan the QR code using the system's camera.
## Video walkthroughs[](https://docs.expo.dev/develop/development-builds/create-a-build/<#video-walkthroughs>)
["Build and Deploy React Native Apps with Expo EAS"A course on egghead.io that covers all of the information from this page, and more.](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/egghead.io/courses/build-and-deploy-react-native-apps-with-expo-eas-85ab521e>) ["Async Office Hours: How to make a development build with EAS Build"Learn how to make a development build with EAS Build in this video tutorial hosted by Developer Success Engineer: Keith Kurak.](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/www.youtube.com/watch?v=LUFHXsBcW6w>)
[Previous (Develop - Development builds)Introduction](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/introduction>)[Next (Develop - Development builds)Use a build](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/use-development-builds>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/create-a-build.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/development-builds/create-a-build/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/create-a-build/#prerequisites>)[Instructions](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/create-a-build/#instructions>)[Install expo-dev-client](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/create-a-build/#install-expo-dev-client>)[Verify your eas.json configuration](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/create-a-build/#verify-your-easjson-configuration>)[Create a build for emulator/simulator](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/create-a-build/#create-a-build-for-emulatorsimulator>)[Create a build for the device](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/create-a-build/#create-a-build-for-the-device>)[Video walkthroughs](https://docs.expo.dev/develop/development-builds/create-a-build/</develop/development-builds/create-a-build/#video-walkthroughs>)
