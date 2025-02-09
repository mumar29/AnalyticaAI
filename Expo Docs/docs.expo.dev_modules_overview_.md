[](https://docs.expo.dev/modules/overview/<https:/expo.dev>)[Docs](https://docs.expo.dev/modules/overview/</>)
[Blog](https://docs.expo.dev/modules/overview/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/modules/overview/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/modules/overview/<https:/github.com/expo/expo>)[](https://docs.expo.dev/modules/overview/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/modules/overview/</>)[Guides](https://docs.expo.dev/modules/overview/</guides/overview>)[EAS](https://docs.expo.dev/modules/overview/</eas>)[Reference](https://docs.expo.dev/modules/overview/</versions/latest>)[Learn](https://docs.expo.dev/modules/overview/</tutorial/overview>)
[Overview](https://docs.expo.dev/modules/overview/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/modules/overview/</workflow/overview>)[Configure with app config](https://docs.expo.dev/modules/overview/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/modules/overview/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/modules/overview/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/modules/overview/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/modules/overview/</guides/permissions>)[Environment variables](https://docs.expo.dev/modules/overview/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/modules/overview/</router/introduction>)[Installation](https://docs.expo.dev/modules/overview/</router/installation>)[Create pages](https://docs.expo.dev/modules/overview/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/modules/overview/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/modules/overview/</router/layouts>)[Error handling](https://docs.expo.dev/modules/overview/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/modules/overview/</modules/overview>)[Get started](https://docs.expo.dev/modules/overview/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/modules/overview/</push-notifications/overview>)[About notification types](https://docs.expo.dev/modules/overview/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/modules/overview/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/modules/overview/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/modules/overview/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/modules/overview/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/modules/overview/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/modules/overview/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/modules/overview/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/modules/overview/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/modules/overview/</archive>)[Expo Snack](https://docs.expo.dev/modules/overview/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/modules/overview/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/modules/overview/<https:/expo.dev/mailing-list/signup>)
# Expo Modules API: Overview
[Edit this page](https://docs.expo.dev/modules/overview/<https:/github.com/expo/expo/edit/main/docs/pages/modules/overview.mdx> "Edit content of this page on GitHub")
An overview of the APIs and utilities provided by Expo to develop native modules.
[Edit this page](https://docs.expo.dev/modules/overview/<https:/github.com/expo/expo/edit/main/docs/pages/modules/overview.mdx> "Edit content of this page on GitHub")
## What is the Expo Modules API[](https://docs.expo.dev/modules/overview/<#what-is-the-expo-modules-api>)
The Expo Modules API allows you to write Swift and Kotlin to add new capabilities to your app with native modules and views. The API is designed to take advantage of modern language features, to be as consistent as possible on both platforms, to require minimal boilerplate, and provide comparable performance characteristics to React Native's Turbo Modules API. Expo Modules all support the New Architecture and are automatically backwards compatible with existing React Native apps using the old architecture.
We believe that using the Expo Modules API makes building and maintaining nearly all kinds of React Native modules about as easy as it can be, and we think that the Expo Modules API is the best choice for the vast majority of developers building native modules for their apps.
### Common questions[](https://docs.expo.dev/modules/overview/<#common-questions>)
Do I need to know the Expo Modules API to build an Expo / React Native app?[](https://docs.expo.dev/modules/overview/<#do-i-need-to-know-the-expo>)
Most of the time, Expo and React Native developers don't need to write any native code — libraries are already available for a wide range of use cases, from camera to video to maps to haptics and much more.
But sometimes, nothing does exactly what you need. Maybe you want to integrate an analytics service that your company mandates but that doesn't yet have a React Native library yet, so you need to build a module around their SDK. Or maybe you want to access a system feature that your app requires, but isn't commonly used, so nobody maintains a library for it.
When should I use Turbo Modules and when should I use the Expo Modules API?[](https://docs.expo.dev/modules/overview/<#when-should-i-use-turbo-modules-and>)
To summarize and paraphrase the [recommendation from the React Native team](https://docs.expo.dev/modules/overview/<https:/github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0759-react-native-frameworks.md#what-do-we-recommend-to-react-native-library-developers>):
  * If you intend to use C++ in your native module, use Turbo Modules since it provides easier access to lower-level mechanisms.
  * If you are looking for a better developer experience and you are willing to depend on the `expo` package in your module, then use the Expo Modules API.


Where can I find open source Expo Modules to learn from?[](https://docs.expo.dev/modules/overview/<#where-can-i-find-open-source-expo>)
The [Expo SDK](https://docs.expo.dev/modules/overview/<https:/github.com/expo/expo/tree/main/packages>) is a great place to look if you want to learn how we have implemented our libraries. Another great resource is open source apps, such as [Bluesky](https://docs.expo.dev/modules/overview/<https:/github.com/bluesky-social/social-app/tree/main/modules>).
The following libraries are some of our favorites from the community:
  * `react-native-widget-extension`[](https://docs.expo.dev/modules/overview/<https:/github.com/bndkt/react-native-widget-extension>)
  * `burnt`[](https://docs.expo.dev/modules/overview/<https:/github.com/nandorojo/burnt>)
  * `expo-video-metadata`[](https://docs.expo.dev/modules/overview/<https:/github.com/hirbod/expo-video-metadata>)
  * `swiftui-react-native`[](https://docs.expo.dev/modules/overview/<https:/github.com/andrew-levy/swiftui-react-native>)
  * `react-native-ios-context-menu`[](https://docs.expo.dev/modules/overview/<https:/github.com/dominicstop/react-native-ios-context-menu>)
  * `react-native-mlkit`[](https://docs.expo.dev/modules/overview/<https:/github.com/infinitered/react-native-mlkit>)
  * `react-native-passkeys`[](https://docs.expo.dev/modules/overview/<https:/github.com/peterferguson/react-native-passkeys>)
  * `expo-drag-drop-content-view`[](https://docs.expo.dev/modules/overview/<https:/github.com/AlirezaHadjar/expo-drag-drop-content-view>)


What impact does using the Expo Modules API have on my app size?[](https://docs.expo.dev/modules/overview/<#what-impact-does-using-the-expo-modules>)
Adding the Expo Modules API to your app has a negligible impact on your app size, it may increase the size by a few hundred kilobytes. [Learn more in this blog post](https://docs.expo.dev/modules/overview/<https:/blog.expo.dev/embracing-expo-modules-in-your-react-native-projects-cd8ed4cbec3>).
What impact does using the Expo Modules API have on my app's performance?[](https://docs.expo.dev/modules/overview/<#what-impact-does-using-the-expo-modules-1>)
The Expo Modules API has similar performance characteristics to React Native's Turbo Modules API. Both APIs leverage React Native's JavaScript Interface (JSI), rather than the legacy approach of using a JSON message queue ("bridge") ([learn more about JSI](https://docs.expo.dev/modules/overview/<https:/reactnative.dev/docs/the-new-architecture/landing-page#fast-javascriptnative-interfacing>)).
Neither Expo Modules nor Turbo Modules are designed to be as fast as technically possible, but rather they are fast where it matters. For example, the Expo Modules API could leverage code generation and the new native Swift / C++ interop to reduce the overhead of individual method calls. However, this imposes some developer experience challenges and overhead, and we have not yet encountered any use cases where such an optimization would provide any meaningful real-world performance improvements. In reality, the time spent executing the body of a native method is often orders of magnitude greater than the overhead of the method invocation. Both Expo Modules and Turbo Modules can easily execute hundreds of thousands of native method calls per second, which is well over what you are likely to find in any app, and the overhead of the method calls is unlikely to be the bottleneck.
If you encounter any performance bottlenecks with the Expo Modules API, [file an issue](https://docs.expo.dev/modules/overview/<https:/github.com/expo/expo/issues/new/choose>) and we'd be happy to discuss it with you.
Does the Expo Modules API support platforms other than Android, iOS, and web?[](https://docs.expo.dev/modules/overview/<#does-the-expo-modules-api-support-platforms>)
The Expo Modules API has experimental support for macOS and tvOS. See [Additional platform support](https://docs.expo.dev/modules/overview/</modules/additional-platform-support>) tutorial for more information.
How can I use the Expo Modules API to make a third-party SDK available to my Expo app?[](https://docs.expo.dev/modules/overview/<#how-can-i-use-the-expo-modules>)
Learn more about this in the [Integrate an existing library](https://docs.expo.dev/modules/overview/</modules/existing-library>) tutorial.
## Next steps[](https://docs.expo.dev/modules/overview/<#next-steps>)
[Tutorial: Creating a native moduleA tutorial on creating a native module that persists settings with Expo Modules API.](https://docs.expo.dev/modules/overview/</modules/native-module-tutorial>) [Tutorial: Creating a native viewA tutorial on creating a native view that renders a WebView with Expo Modules API.](https://docs.expo.dev/modules/overview/</modules/native-view-tutorial>) [Expo Modules API: ReferenceA reference on creating native modules using Kotlin and Swfit.](https://docs.expo.dev/modules/overview/</modules/module-api>) [Expo Modules API: Design considerationsAn overview of the design considerations behind the Expo Modules API.](https://docs.expo.dev/modules/overview/</modules/design>) [expo-module.config.jsonA reference of available configuration options.](https://docs.expo.dev/modules/overview/</modules/module-config>)
[Previous (Expo Router - Migration)Expo Webpack](https://docs.expo.dev/modules/overview/</router/migrate/from-expo-webpack>)[Next (Expo Modules API)Get started](https://docs.expo.dev/modules/overview/</modules/get-started>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/modules/overview/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/modules/overview/<https:/github.com/expo/expo/edit/main/docs/pages/modules/overview.mdx>)
  * Last updated on November 02, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/modules/overview/<https:/expo.dev/privacy>).
On this page
[What is the Expo Modules API](https://docs.expo.dev/modules/overview/</modules/overview/#what-is-the-expo-modules-api>)[Common questions](https://docs.expo.dev/modules/overview/</modules/overview/#common-questions>)[Next steps](https://docs.expo.dev/modules/overview/</modules/overview/#next-steps>)
