[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/expo.dev>)[Docs](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</>)
[Blog](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/github.com/expo/expo>)[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</>)[Guides](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</guides/overview>)[EAS](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</eas>)[Reference](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</versions/latest>)[Learn](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/overview>)
[Overview](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/overview>)
Expo tutorial
0 of 9
[Introduction](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/introduction>)[Create your first app](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/create-your-first-app>)[Add navigation](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/add-navigation>)[Build a screen](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/build-a-screen>)[Use an image picker](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/image-picker>)[Create a modal](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/create-a-modal>)[Add gestures](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/gestures>)[Take a screenshot](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/screenshot>)[Handle platform differences](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/platform-differences>)[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/configuration>)[Learning resources](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/follow-up>)
EAS tutorial
0 of 11
[Introduction](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/introduction>)[Configure development build](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/configure-development-build>)[Android development build](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/android-development-build>)[iOS development build for simulators](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-simulators>)[iOS development build for devices](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-devices>)[Multiple app variants](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/multiple-app-variants>)[Internal distribution build](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/internal-distribution-builds>)[Manage app versions](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/manage-app-versions>)[Android production build](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/android-production-build>)[iOS production build](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-production-build>)[Share previews](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/team-development>)[Builds from GitHub](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/using-github>)[Next steps](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/next-steps>)
More
[Additional resources](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</additional-resources>)
[Archive](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</archive>)[Expo Snack](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/expo.dev/mailing-list/signup>)
# Create and run a cloud build for iOS Simulator
[Edit this page](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/ios-development-build-for-simulators.mdx> "Edit content of this page on GitHub")
Learn how to configure a development build for iOS Simulators using EAS Build.
[Edit this page](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/ios-development-build-for-simulators.mdx> "Edit content of this page on GitHub")
In this chapter, we'll create a development build that can run on an iOS Simulator with EAS Build.
Development builds for iOS Simulators are generated in the .app format which is different from iOS devices.
## Create a simulator build profile in eas.json[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<#create-a-simulator-build-profile-in-easjson>)
In eas.json, add a new build profile called `ios-simulator` with the property `ios.simulator`[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</eas/json#simulator>) property. Set its value `true`:
eas.json
Copy
```
{
 "build": {
  "development": {
   %%placeholder-start%%... %%placeholder-end%%
  },
  "ios-simulator": {
   "ios": {
    "simulator": true
   }
  }
 }
}

```

For a development build, it's necessary to have the `developmentClient` and `distribution` properties defined in the profile. To avoid redundancy, we can extend the `development` profile properties:
eas.json
Copy
```
{
 "ios-simulator": {
   "extends": "development",
   "ios": {
    "simulator": true
   }
  }
 }
}

```

## Development build for iOS Simulator[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<#development-build-for-ios-simulator>)
1
### Create[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<#create>)
Run the `eas build` command with `ios` as a platform and `ios-simulator` as the build profile:
Terminal
Copy
`- ``eas build --platform ios --profile ios-simulator`
This command prompts us with the following questions when we create the build for the first time:
  * What would you like your iOS bundle identifier to be? Press `return` to select the default value provided for this prompt. This will add `ios.bundleIdentifier`[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</versions/latest/config/app#package>) in app.json.


After responding to the prompts, our EAS Build is queued, and the EAS CLI provides a link to view build details and track progress on the Expo dashboard:
![iOS Simulator build details page](https://docs.expo.dev/static/images/tutorial/eas/ios-sim-build.png)What does a build details page contain?[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<#what-does-a-build-details-page-contain>)
The build details page displays the build type, profile, Expo SDK version, app version, build number, last commit hash, and the identity of the developer or account owner who initiated the build.
In the above image, the current status of the Build artifact shows that the build is in progress. Upon completion, this section will offer an option to download the build. The Logs outlines every step taken during the iOS build process on EAS Build. For the sake of brevity, we won't explore each step in detail here. To learn more, see [iOS build process](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</build-reference/ios-builds>).
What is iOS bundle identifier?[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<#what-is-ios-bundle-identifier>)
The `ios.bundleIdentifier` is a unique name of our app. If we publish our app right now, the Apple App Store will use this property and its value to identify our app on the store.
This notation is defined as `host.owner.app-name`. For example, our example app has `com.owner.stickersmash` where `com.owner` is the domain and `stickersmash` is our app name.
2
### Install[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<#install>)
In the terminal, once the build finishes, EAS CLI prompts us by asking whether we want to run the build on an iOS Simulator. Press `Y`.
![EAS CLI automatically gives option to run a build on iOS Simulator](https://docs.expo.dev/static/images/tutorial/eas/ios-sim-cli.png)Alternate: Use Expo Orbit[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<#alternate-use-expo-orbit>)
You can use [Expo Orbit](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/expo.dev/orbit>) to install the development build. From Build artifact on the Expo dashboard, click Open with Expo Orbit to install the development build on the iOS Simulator.
3
### Run[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<#run>)
Start the development server by running the `npx expo start` command from the project directory:
Terminal
Copy
`- ``npx expo start`
Press `i` in the terminal window to open the project on the iOS Simulator.
## Summary[](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<#summary>)
Chapter 3: Create and run a cloud build for iOS Simulator
We successfully used EAS Build to create and run development builds on iOS Simulators.
Mark this chapter as read
In the next chapter, let's create a development build for iOS, install it on a device, and get it running.
[Next: Create and run a cloud build for iOS device](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-devices>)
[Previous (EAS tutorial)Android development build](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/android-development-build>)[Next (EAS tutorial)iOS development build for devices](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-devices>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/ios-development-build-for-simulators.mdx>)


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/<https:/expo.dev/privacy>).
On this page
[Create a simulator build profile in eas.json](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-simulators/#create-a-simulator-build-profile-in-easjson>)[Development build for iOS Simulator](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-simulators/#development-build-for-ios-simulator>)[Create](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-simulators/#create>)[Install](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-simulators/#install>)[Run](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-simulators/#run>)[Summary](https://docs.expo.dev/tutorial/eas/ios-development-build-for-simulators/</tutorial/eas/ios-development-build-for-simulators/#summary>)
