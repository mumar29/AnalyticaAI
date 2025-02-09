[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/expo.dev>)[Docs](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</>)
[Blog](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/github.com/expo/expo>)[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</>)[Guides](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</guides/overview>)[EAS](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</eas>)[Reference](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</versions/latest>)[Learn](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/overview>)
[Overview](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/overview>)
Expo tutorial
0 of 9
[Introduction](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/introduction>)[Create your first app](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/create-your-first-app>)[Add navigation](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/add-navigation>)[Build a screen](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/build-a-screen>)[Use an image picker](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/image-picker>)[Create a modal](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/create-a-modal>)[Add gestures](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/gestures>)[Take a screenshot](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/screenshot>)[Handle platform differences](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/platform-differences>)[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/configuration>)[Learning resources](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/follow-up>)
EAS tutorial
0 of 11
[Introduction](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/introduction>)[Configure development build](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/configure-development-build>)[Android development build](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/android-development-build>)[iOS development build for simulators](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/ios-development-build-for-simulators>)[iOS development build for devices](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/ios-development-build-for-devices>)[Multiple app variants](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/multiple-app-variants>)[Internal distribution build](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds>)[Manage app versions](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/manage-app-versions>)[Android production build](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/android-production-build>)[iOS production build](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/ios-production-build>)[Share previews](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/team-development>)[Builds from GitHub](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/using-github>)[Next steps](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/next-steps>)
More
[Additional resources](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</additional-resources>)
[Archive](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</archive>)[Expo Snack](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/expo.dev/mailing-list/signup>)
# Create and share internal distribution build
[Edit this page](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/internal-distribution-builds.mdx> "Edit content of this page on GitHub")
Learn about internal distribution builds, why we need them, and how to create them.
[Edit this page](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/internal-distribution-builds.mdx> "Edit content of this page on GitHub")
In this chapter, we'll learn how to set up [internal distribution builds](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</guides/sharing-preview-releases#internal-distribution>).
## Internal distribution build[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#internal-distribution-build>)
Internal distribution builds are ideal for sharing updates with team members, allowing both technical and non-technical stakeholders to provide feedback directly. Unlike development builds, these do not require running a development server, simplifying the testing process.
### Ways to distribute an app internally[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#ways-to-distribute-an-app-internally>)
Both Google and Apple provide built-in mechanisms for sharing apps internally:
  * Android: Using Google Play beta
  * iOS: Using TestFlight


However, both of these traditional methods have their limitations. For example, TestFlight limits to one active build at a time.
### EAS Build for faster distribution[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#eas-build-for-faster-distribution>)
EAS Build speeds up the process. It creates shareable links for our builds and provides instructions on using them. It has a default configuration designed to facilitate internal distribution, offering a more efficient alternative to traditional methods.
## Create an internal distribution build[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#create-an-internal-distribution-build>)
To create and distribute a build with EAS Build, we need to follow these steps:
1
### Configure preview build profile[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#configure-preview-build-profile>)
From our initial setup in eas.json, we already have a default configuration that includes a `preview` build profile designed for internal distribution:
eas.json
Copy
```
{
 "build": {
  "preview": {
   "distribution": "internal"
  }
 }
}

```

This is all we need to create our first internal distribution build. The `preview` build profile from the above snippet has a `distribution` property whose value is set to `internal`. This value allows us to share our build URLs with anyone so they can install it on their device and do not require a development server to run the app.
As discussed in the previous chapters, for non-app store builds, Android requires .apk and iOS needs .ipa formats. This applies to internal distribution builds as well. The `distribution` when set to `internal`, automatically creates the app binary in these file formats for devices.
2
### Create[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#create>)
Android
iOS
  * Use the `preview` profile to initiate an Android build:


Terminal
Copy
`- ``eas build --platform android --profile preview`
  * This command triggers the EAS Build, and on the Expo dashboard, we can see the build's progress:

![Android preview build details and progress in Expo dashboard](https://docs.expo.dev/static/images/tutorial/eas/android-preview-build.png)No Android app signing credentials required for internal distribution[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#no-android-app-signing-credentials-required-for>)
Android app signing is non-restrictive. A new Android Keystore was generated for development builds, but since Android allows installing any compatible .apk, there's no need for a new keystore for preview builds.
Apple has stricter rules for app distribution on iOS devices. We need an ad hoc provisioning profile, which allows explicitly listing the devices allowed to run the app.
  * To add more devices, use `eas device:create`. This command registers an iOS device and gives us a URL or QR code to share for device registration:


Terminal
Copy
`- ``eas device:create`
  * This command registers an iOS device for app installation, generating a shareable URL (or QR code) for device registration.
> Tip: This command enables device registration at any time. However, only builds created post-registration will work on the newly added device.
  * To create the preview build, we need to use the `preview` profile with the `eas build` command:


Terminal
Copy
`- ``eas build --platform ios --profile preview`
  * This command triggers the EAS Build, and on the Expo dashboard, we can see the build's progress:

![iOS preview build details and progress in Expo dashboard](https://docs.expo.dev/static/images/tutorial/eas/ios-preview-build.png)Alternative method to register devices using `eas build:resign`[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#alternative-method-to-register-devices-using-eas>)
`eas build:resign`[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</app-signing/app-credentials#re-signing-new-credentials>) command can be used to re-sign an existing iOS .ipa with a new ad hoc provisioning profile, eliminating the need for a full rebuild.
3
### Install[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#install>)
Once the build finishes, the Build artifact section gets updated, indicating that the build is complete. This section provides the methods available for running the development build on an iOS device: Expo Orbit and Install button.
  * Open the build's detail page. If you are sharing the build with someone else, you can send them the link to the build. They'll be able to open the build's detail page or build artifact details which include Expo Orbit.
  * Connect the Android or iOS device to our machine using USB.
  * Open the Orbit menu bar app.
  * Select the Device in the Orbit app.
  * Under Build artifact, click the Open with Orbit.

Alternate: Use Install and QR code[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#alternate-use-install-and-qr-code>)
  * Open the build's detail page. If you are sharing the build with someone else, you can send them the link to the build page. They'll be able to open it and see build artifact details which includes Expo Orbit.
  * Click Install under the Build artifact section to display the Install on a test device popup.
  * Copy the link from Send a link to a device section and send it to the test device.

![Internal distribution build details and install link in Expo dashboard](https://docs.expo.dev/static/images/tutorial/eas/distribution-link.png)
4
### Run[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#run>)
Tap the app icon on your device to start the preview build. There is no need for a development server.
Since we have already set up multiple app variants, we can see both the development and preview variants installed separately on our devices. For example:
  * On Android:

![Internal distribution build details and install link in Expo dashboard for Android](https://docs.expo.dev/static/images/tutorial/eas/android-multi-variants-installed.png)
  * On iOS:

![Internal distribution build details and install link in Expo dashboard for iOS](https://docs.expo.dev/static/images/tutorial/eas/ios-multi-variants-installed.png)
## Summary[](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<#summary>)
Chapter 6: Create and share internal distribution build
We successfully created internal distribution builds for Android and iOS, used ad hoc provisioning for iOS, and installed multiple app variants on the same device.
Mark this chapter as read
In the next chapter, learn about developer-facing and user-facing app versions and how to manage them automatically.
[Next: Manage different app versions](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/manage-app-versions>)
[Previous (EAS tutorial)Multiple app variants](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/multiple-app-variants>)[Next (EAS tutorial)Manage app versions](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/manage-app-versions>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/internal-distribution-builds.mdx>)


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/<https:/expo.dev/privacy>).
On this page
[Internal distribution build](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds/#internal-distribution-build>)[Ways to distribute an app internally](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds/#ways-to-distribute-an-app-internally>)[EAS Build for faster distribution](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds/#eas-build-for-faster-distribution>)[Create an internal distribution build](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds/#create-an-internal-distribution-build>)[Configure preview build profile](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds/#configure-preview-build-profile>)[Create](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds/#create>)[Install](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds/#install>)[Run](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds/#run>)[Summary](https://docs.expo.dev/tutorial/eas/internal-distribution-builds/</tutorial/eas/internal-distribution-builds/#summary>)
