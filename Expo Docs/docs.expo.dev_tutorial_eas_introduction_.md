[](https://docs.expo.dev/tutorial/eas/introduction/<https:/expo.dev>)[Docs](https://docs.expo.dev/tutorial/eas/introduction/</>)
[Blog](https://docs.expo.dev/tutorial/eas/introduction/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/tutorial/eas/introduction/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/tutorial/eas/introduction/<https:/github.com/expo/expo>)[](https://docs.expo.dev/tutorial/eas/introduction/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/tutorial/eas/introduction/</>)[Guides](https://docs.expo.dev/tutorial/eas/introduction/</guides/overview>)[EAS](https://docs.expo.dev/tutorial/eas/introduction/</eas>)[Reference](https://docs.expo.dev/tutorial/eas/introduction/</versions/latest>)[Learn](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/overview>)
[Overview](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/overview>)
Expo tutorial
0 of 9
[Introduction](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/introduction>)[Create your first app](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/create-your-first-app>)[Add navigation](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/add-navigation>)[Build a screen](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/build-a-screen>)[Use an image picker](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/image-picker>)[Create a modal](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/create-a-modal>)[Add gestures](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/gestures>)[Take a screenshot](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/screenshot>)[Handle platform differences](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/platform-differences>)[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/configuration>)[Learning resources](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/follow-up>)
EAS tutorial
0 of 11
[Introduction](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/introduction>)[Configure development build](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/configure-development-build>)[Android development build](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/android-development-build>)[iOS development build for simulators](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/ios-development-build-for-simulators>)[iOS development build for devices](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/ios-development-build-for-devices>)[Multiple app variants](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/multiple-app-variants>)[Internal distribution build](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/internal-distribution-builds>)[Manage app versions](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/manage-app-versions>)[Android production build](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/android-production-build>)[iOS production build](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/ios-production-build>)[Share previews](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/team-development>)[Builds from GitHub](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/using-github>)[Next steps](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/next-steps>)
More
[Additional resources](https://docs.expo.dev/tutorial/eas/introduction/</additional-resources>)
[Archive](https://docs.expo.dev/tutorial/eas/introduction/</archive>)[Expo Snack](https://docs.expo.dev/tutorial/eas/introduction/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/tutorial/eas/introduction/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/tutorial/eas/introduction/<https:/expo.dev/mailing-list/signup>)
# EAS Tutorial: Introduction
[Edit this page](https://docs.expo.dev/tutorial/eas/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/introduction.mdx> "Edit content of this page on GitHub")
An introduction to the tutorial for building apps for Android and iOS using Expo Application Services (EAS) that covers the Build, Update, and Submit workflows.
[Edit this page](https://docs.expo.dev/tutorial/eas/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/introduction.mdx> "Edit content of this page on GitHub")
## About this tutorial[](https://docs.expo.dev/tutorial/eas/introduction/<#about-this-tutorial>)
This tutorial will give you proficiency with [Expo Application Services (EAS)](https://docs.expo.dev/tutorial/eas/introduction/<https:/expo.dev/eas>) core services: [Build](https://docs.expo.dev/tutorial/eas/introduction/</build/introduction>), [Submit](https://docs.expo.dev/tutorial/eas/introduction/</submit/introduction>), and [Update](https://docs.expo.dev/tutorial/eas/introduction/</eas-update/introduction>). When you complete the tutorial, you will know how to set up a professional mobile Continuous Integration (CI)/Continuous Development (CD) pipeline for your individual and team projects.
This tutorial covers the following topics:
  * Use EAS Build to create and install a development build, then run it on a device, emulator, or simulator.
  * Experience the benefits of using a development build instead of Expo Go.
  * Implement workflows for sharing development builds with a team or external stakeholders.
  * Automatically increment app build versions.
  * Simultaneously install different app variants, like development and preview, on one device.
  * Utilize EAS Update to create and deploy updates swiftly during the development phase.
  * Automate build processes by integrating with a GitHub repository.


These topics will give us the foundation needed to use EAS effectively and to approach more advanced topics when needed.
## Prerequisites[](https://docs.expo.dev/tutorial/eas/introduction/<#prerequisites>)
This tutorial is hands-on and designed to be completed in about two hours. You will need an existing Expo project to follow along and set it up locally on your machine. Options include:
  * Continuing with the Sticker Smash app from our previous tutorial. If new, download it from [GitHub](https://docs.expo.dev/tutorial/eas/introduction/<https:/github.com/expo/examples/tree/master/stickersmash>).
  * Starting a new project with `npx create-expo-app`[](https://docs.expo.dev/tutorial/eas/introduction/</get-started/create-a-project>).
  * Using a bare React Native project. Ensure the `expo` package is installed, which you can do [automatically](https://docs.expo.dev/tutorial/eas/introduction/</bare/installing-expo-modules>) or [manually](https://docs.expo.dev/tutorial/eas/introduction/</bare/installing-expo-modules#manual-installation>).


## Tools[](https://docs.expo.dev/tutorial/eas/introduction/<#tools>)
[Expo Orbit](https://docs.expo.dev/tutorial/eas/introduction/<https:/expo.dev/orbit>) to manage and launch builds with one click on macOS and Windows.
If you want to install and run the build locally on your machine simultaneously, you can use Android Emulator or iOS Simulator. To set them up, see the following:
  * [Android Emulator](https://docs.expo.dev/tutorial/eas/introduction/</workflow/android-studio-emulator>)
  * [iOS Simulator](https://docs.expo.dev/tutorial/eas/introduction/</workflow/ios-simulator>) (available only on macOS)


## Next step[](https://docs.expo.dev/tutorial/eas/introduction/<#next-step>)
We're ready for this journey after setting up an Expo project locally. In the next chapter, let's learn how to create your first build with EAS Build.
[StartLet's start by configuring a development build.](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/configure-development-build>)
[Previous (Expo tutorial)Learning resources](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/follow-up>)[Next (EAS tutorial)Configure development build](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/configure-development-build>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/tutorial/eas/introduction/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/tutorial/eas/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/introduction.mdx>)


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/tutorial/eas/introduction/<https:/expo.dev/privacy>).
On this page
[About this tutorial](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/introduction/#about-this-tutorial>)[Prerequisites](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/introduction/#prerequisites>)[Tools](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/introduction/#tools>)[Next step](https://docs.expo.dev/tutorial/eas/introduction/</tutorial/eas/introduction/#next-step>)
