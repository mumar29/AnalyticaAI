[](https://docs.expo.dev/develop/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/</>)
[Blog](https://docs.expo.dev/develop/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/</>)[Guides](https://docs.expo.dev/develop/</guides/overview>)[EAS](https://docs.expo.dev/develop/</eas>)[Reference](https://docs.expo.dev/develop/</versions/latest>)[Learn](https://docs.expo.dev/develop/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/</develop/tools>)
Navigation
User interface
Development builds
[Introduction](https://docs.expo.dev/develop/</develop/development-builds/introduction>)[Create a build](https://docs.expo.dev/develop/</develop/development-builds/create-a-build>)[Use a build](https://docs.expo.dev/develop/</develop/development-builds/use-development-builds>)[Share with your team](https://docs.expo.dev/develop/</develop/development-builds/share-with-your-team>)[Tools, workflows and extensions](https://docs.expo.dev/develop/</develop/development-builds/development-workflows>)[Next steps](https://docs.expo.dev/develop/</develop/development-builds/next-steps>)
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/</core-concepts>)[FAQ](https://docs.expo.dev/develop/</faq>)
[Archive](https://docs.expo.dev/develop/</archive>)[Expo Snack](https://docs.expo.dev/develop/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/<https:/expo.dev/mailing-list/signup>)
# Introduction to development builds
[Edit this page](https://docs.expo.dev/develop/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/introduction.mdx> "Edit content of this page on GitHub")
A better development environment for React Native apps.
[Edit this page](https://docs.expo.dev/develop/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/introduction.mdx> "Edit content of this page on GitHub")
A development build is a debug build of your app that contains the `expo-dev-client`[](https://docs.expo.dev/develop/</versions/latest/sdk/dev-client>) package. By using development builds instead of [Expo Go](https://docs.expo.dev/develop/</get-started/set-up-your-environment>), you gain full control over the native runtime, so you can [install any native libraries](https://docs.expo.dev/develop/</workflow/using-libraries#determining-third-party-library-compatibility>), [modify any project configuration](https://docs.expo.dev/develop/</config-plugins/introduction>), or [write your own native code](https://docs.expo.dev/develop/</modules/get-started>). With Expo development builds, you are building your own native app, while with Expo Go you are running your project in a sandboxed native app environment.
![expo-dev-client launcher and menu UIs on Android and iOS](https://docs.expo.dev/static/images/dev-client/preview.png)When you run a development build it will look like this, only with your app name and icon included rather than "Microfoam". The launcher UI is pictured in iOS on the left and Android on the right. In between, you can see an app running inside of the development build, with the customizable developer menu open.
The `expo-dev-client`[](https://docs.expo.dev/develop/</versions/latest/sdk/dev-client>) package replaces the default in-app development tools UI that React Native provides with [a more powerful and extensible in-app UI](https://docs.expo.dev/develop/</debugging/tools#developer-menu>), adds [support for network debugging](https://docs.expo.dev/develop/</debugging/tools#inspecting-network-requests>), adds support for [launching updates](https://docs.expo.dev/develop/</eas-update/expo-dev-client>) (such as from [PR previews](https://docs.expo.dev/develop/</develop/development-builds/development-workflows#pr-previews>)), and adds a launcher UI.
The launcher UI makes it possible to switch between development servers without needing to rebuild the app binary. This works great alongside [Continuous Native Generation (CNG)](https://docs.expo.dev/develop/</workflow/continuous-native-generation>) because you can generate a single development build whenever you modify the native code in your app, and then you can iterate on the JavaScript code without needing to rebuild the native code until the next time that you need to modify it. It also works great without CNG — this approach is very well suited to teams that have specialized native engineers who work on the native runtime and application developers that specialize in React to [achieve web-like iteration speeds](https://docs.expo.dev/develop/<https:/blog.expo.dev/javascript-driven-development-with-custom-runtimes-eda87d574c9d>) with native apps, without compromise.
[Get started with development builds using EAS BuildThe easiest way to get started with development builds is to use EAS Build to build your app in the cloud, because you do not need to install any native build tools locally.](https://docs.expo.dev/develop/</develop/development-builds/create-a-build>) [Get started with development builds in a local development environmentThis guide covers the basics of building your app for development, and provides instructions on how to configure your environment.](https://docs.expo.dev/develop/</guides/local-app-development>) [Develop an app with ExpoAn overview of the development process of building an Expo app to help build a mental model of the core development loop. See where development builds fit in.](https://docs.expo.dev/develop/</workflow/overview>) [Getting the most out of Expo Development BuildsA YouTube video that explains what a development build is, why it is important, and how to use it.](https://docs.expo.dev/develop/<https:/www.youtube.com/watch?v=7J8LRpja9_o>)
## Frequently asked questions[](https://docs.expo.dev/develop/<#frequently-asked-questions>)
What is a native runtime?[](https://docs.expo.dev/develop/<#what-is-a-native-runtime>)
A native runtime refers to the runtime environment that your JavaScript application code is executed in. If your development build is compiled with `expo-camera` installed, the native runtime will include the appropriate code so that you can access that functionality from JavaScript. If the build was not compiled with `expo-camera`, then you cannot access that code from your JavaScript code. Different versions of your app runtime are managed with a [runtime version](https://docs.expo.dev/develop/</eas-update/runtime-versions>) configuration field.
How are development builds different from Expo Go?[](https://docs.expo.dev/develop/<#how-are-development-builds-different-from-expo>)
When you start a new project with Expo, the fastest and easiest way to get to "Hello, world!" is with [Expo Go](https://docs.expo.dev/develop/</get-started/set-up-your-environment>) on your device because you don't need to compile any native code or install any native tooling.
Beyond "Hello, world!" and prototypes, you'll quickly encounter limitations and need to build a development build of your app. For example, the Expo Go sandbox environment is limited to only the native packages included in the [Expo SDK](https://docs.expo.dev/develop/</versions/latest>), while you can include any library in a development build because it's just a normal native app.
You can think of a development build as your fully customizable version of Expo Go, tailored specifically for your project. Or, conversely, Expo Go is a development environment with a preset runtime.
What other types of builds are there?[](https://docs.expo.dev/develop/<#what-other-types-of-builds-are-there>)
  * A [production build](https://docs.expo.dev/develop/</deploy/build-project>) is for the general public, deployed through stores.
  * A [preview build](https://docs.expo.dev/develop/</build/internal-distribution>) lets your team test your next release, either by installing an APK directly on Android or using ad hoc or enterprise provisioning on iOS.


[Previous (Develop - User interface)Next steps](https://docs.expo.dev/develop/</develop/user-interface/next-steps>)[Next (Develop - Development builds)Create a build](https://docs.expo.dev/develop/</develop/development-builds/create-a-build>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/introduction.mdx>)
  * Last updated on December 04, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/<https:/expo.dev/privacy>).
