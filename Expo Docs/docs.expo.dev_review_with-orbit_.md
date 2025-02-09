[](https://docs.expo.dev/review/with-orbit/<https:/expo.dev>)[Docs](https://docs.expo.dev/review/with-orbit/</>)
[Blog](https://docs.expo.dev/review/with-orbit/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/review/with-orbit/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/review/with-orbit/<https:/github.com/expo/expo>)[](https://docs.expo.dev/review/with-orbit/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/review/with-orbit/</>)[Guides](https://docs.expo.dev/review/with-orbit/</guides/overview>)[EAS](https://docs.expo.dev/review/with-orbit/</eas>)[Reference](https://docs.expo.dev/review/with-orbit/</versions/latest>)[Learn](https://docs.expo.dev/review/with-orbit/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/review/with-orbit/</get-started/introduction>)[Create a project](https://docs.expo.dev/review/with-orbit/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/review/with-orbit/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/review/with-orbit/</get-started/start-developing>)[Next steps](https://docs.expo.dev/review/with-orbit/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/review/with-orbit/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/review/with-orbit/</develop/authentication>)[Unit testing](https://docs.expo.dev/review/with-orbit/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/review/with-orbit/</review/overview>)[Share previews with your team](https://docs.expo.dev/review/with-orbit/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/review/with-orbit/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/review/with-orbit/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/review/with-orbit/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/review/with-orbit/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/review/with-orbit/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/review/with-orbit/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/review/with-orbit/</core-concepts>)[FAQ](https://docs.expo.dev/review/with-orbit/</faq>)
[Archive](https://docs.expo.dev/review/with-orbit/</archive>)[Expo Snack](https://docs.expo.dev/review/with-orbit/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/review/with-orbit/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/review/with-orbit/<https:/expo.dev/mailing-list/signup>)
# How to launch an update using Expo Orbit
[Edit this page](https://docs.expo.dev/review/with-orbit/<https:/github.com/expo/expo/edit/main/docs/pages/review/with-orbit.mdx> "Edit content of this page on GitHub")
Learn how to open updates with Expo Orbit as part of a review workflow.
[Edit this page](https://docs.expo.dev/review/with-orbit/<https:/github.com/expo/expo/edit/main/docs/pages/review/with-orbit.mdx> "Edit content of this page on GitHub")
[Expo Orbit](https://docs.expo.dev/review/with-orbit/<https:/expo.dev/orbit>) is a macOS and Windows app designed to speed up installing and running builds from EAS. It makes running your builds and updates as easy as pressing Open in Orbit.
How does automatic installation and launching of updates work?[](https://docs.expo.dev/review/with-orbit/<#how-does-automatic-installation-and-launching-of>)
When you launch an update, Orbit will look for the latest development build that matches the runtime version and target platform of the update. If a compatible build is found, the update will install automatically on the target device and launch with a deep link that points to the update.
If you don't have any development builds available, either because they have all expired, you haven't created one, you don't use EAS Build, or you are [building your app locally](https://docs.expo.dev/review/with-orbit/</guides/local-app-development>), then Orbit will prompt you on how to proceed. Click Launch with deep link in the prompt to open the update if you already have a compatible development build installed on your target device.
## Prerequisites[](https://docs.expo.dev/review/with-orbit/<#prerequisites>)
  * Install the Orbit app before following the steps in this guide. You can download it directly from [GitHub releases](https://docs.expo.dev/review/with-orbit/<https:/github.com/expo/orbit/releases>) or see the [alternative method](https://docs.expo.dev/review/with-orbit/</build/orbit#installation>) to install it.
  * After installing the app, sign in to your Expo account from Settings.


## Preview an update with Expo Orbit[](https://docs.expo.dev/review/with-orbit/<#preview-an-update-with-expo-orbit>)
Expo Orbit launching an update directly from Expo dashboard to an iOS Simulator.
Previewing with Expo Orbit requires you to have an update published. If you haven't published an update, see [Publish an update](https://docs.expo.dev/review/with-orbit/</eas-update/getting-started#publish-an-update>) before following the steps in the next section.
### Install and launch the update[](https://docs.expo.dev/review/with-orbit/<#install-and-launch-the-update>)
> Note: Launching updates using Expo Orbit is not supported on physical iOS devices. It is supported on Android devices/emulators or iOS Simulators.
After the update is published, follow these steps to open it on an Android Emulator or iOS Simulator:
  * Navigate your project's Updates tab.
  * Select the update you want to preview.
  * Click Preview. This will open the Preview dialog.
  * Under Open with Orbit, select a platform to launch the update.
  * Orbit will install and launch the update on the selected Android Emulator or iOS Simulator.


You can now seamlessly launch and review updates using Expo Orbit.
[Previous (Review)Share previews with your team](https://docs.expo.dev/review/with-orbit/</review/share-previews-with-your-team>)[Next (Deploy)Build project for app stores](https://docs.expo.dev/review/with-orbit/</deploy/build-project>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/review/with-orbit/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/review/with-orbit/<https:/github.com/expo/expo/edit/main/docs/pages/review/with-orbit.mdx>)
  * Last updated on September 26, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/review/with-orbit/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/review/with-orbit/</review/with-orbit/#prerequisites>)[Preview an update with Expo Orbit](https://docs.expo.dev/review/with-orbit/</review/with-orbit/#preview-an-update-with-expo-orbit>)[Install and launch the update](https://docs.expo.dev/review/with-orbit/</review/with-orbit/#install-and-launch-the-update>)
