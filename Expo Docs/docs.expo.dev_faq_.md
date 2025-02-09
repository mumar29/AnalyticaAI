[](https://docs.expo.dev/faq/<https:/expo.dev>)[Docs](https://docs.expo.dev/faq/</>)
[Blog](https://docs.expo.dev/faq/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/faq/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/faq/<https:/github.com/expo/expo>)[](https://docs.expo.dev/faq/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/faq/</>)[Guides](https://docs.expo.dev/faq/</guides/overview>)[EAS](https://docs.expo.dev/faq/</eas>)[Reference](https://docs.expo.dev/faq/</versions/latest>)[Learn](https://docs.expo.dev/faq/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/faq/</get-started/introduction>)[Create a project](https://docs.expo.dev/faq/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/faq/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/faq/</get-started/start-developing>)[Next steps](https://docs.expo.dev/faq/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/faq/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/faq/</develop/authentication>)[Unit testing](https://docs.expo.dev/faq/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/faq/</review/overview>)[Share previews with your team](https://docs.expo.dev/faq/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/faq/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/faq/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/faq/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/faq/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/faq/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/faq/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/faq/</core-concepts>)[FAQ](https://docs.expo.dev/faq/</faq>)
[Archive](https://docs.expo.dev/faq/</archive>)[Expo Snack](https://docs.expo.dev/faq/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/faq/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/faq/<https:/expo.dev/mailing-list/signup>)
# FAQ
[Edit this page](https://docs.expo.dev/faq/<https:/github.com/expo/expo/edit/main/docs/pages/faq.mdx> "Edit content of this page on GitHub")
A list of common questions and limitations about Expo and related services.
[Edit this page](https://docs.expo.dev/faq/<https:/github.com/expo/expo/edit/main/docs/pages/faq.mdx> "Edit content of this page on GitHub")
This page lists some of the common questions and answers about Expo and related services. If you have a question that is not answered here, see [Forums](https://docs.expo.dev/faq/<https:/chat.expo.dev/>) for more common questions.
## What is Expo used for?[](https://docs.expo.dev/faq/<#what-is-expo-used-for>)
Expo is an [open-source framework](https://docs.expo.dev/faq/<https:/github.com/expo/expo>) for apps that run natively on Android, iOS, and the web. Expo brings together the best of mobile and the web and enables many important features for building and scaling an app such as live updates, instantly sharing your app, and web support. The `expo` npm package enables a suite of incredible features for React Native apps. The `expo` package can be installed in nearly any React Native project. See [what Expo offers](https://docs.expo.dev/faq/</core-concepts>) for more information.
## Do companies use Expo?[](https://docs.expo.dev/faq/<#do-companies-use-expo>)
Yes, Expo is used by top companies worldwide, serving hundreds of millions of end users. See our [showcase](https://docs.expo.dev/faq/<https:/expo.dev/customers>).
## Why does Expo have its own SDK?[](https://docs.expo.dev/faq/<#why-does-expo-have-its-own-sdk>)
When Expo was first created, React Native had yet to be publicly released. This means there were no third-party packages. To make React Native's developer experience reasonable, we created [several libraries to achieve common functionalities](https://docs.expo.dev/faq/</versions/latest>). Many of these libraries have since been forked and modified to meet various needs. We welcome users to mix and match whichever [custom native code](https://docs.expo.dev/faq/</workflow/customizing>) they need to make their app great.
The Expo SDK is well-tested, written in TypeScript, documented, and built for Android, iOS, and the web. Every module in the Expo SDK works together to ensure versioning always matches. This creates a nice upgrading experience.
The Expo SDK is also written with the [Expo Modules API](https://docs.expo.dev/faq/</modules>) to make contributing, maintaining, and understanding easier.
## What is the difference between Expo and React Native?[](https://docs.expo.dev/faq/<#what-is-the-difference-between-expo-and-react-native>)
The `expo` package provides a suite of features that make it easier to develop, and scale complex React Native applications. You can install `expo` in nearly any React Native app. The `expo` package is not required to use [Expo Application Services (EAS)](https://docs.expo.dev/faq/</eas>) or React Native, however, it is highly recommended. See [what Expo offers](https://docs.expo.dev/faq/</core-concepts>) for more information.
## Do I need to switch from React Native to use Expo?[](https://docs.expo.dev/faq/<#do-i-need-to-switch-from-react-native-to-use-expo>)
No, the `expo` npm package and CLI work with any React Native app. [Expo Application Services (EAS)](https://docs.expo.dev/faq/</eas>) also works with all React Native apps with first-class support for builds, updates, app store submissions, and more.
## How much does Expo cost?[](https://docs.expo.dev/faq/<#how-much-does-expo-cost>)
The Expo platform is [free and open source](https://docs.expo.dev/faq/<https:/blog.expo.dev/exponent-is-free-as-in-and-as-in-1d6d948a60dc>). This includes the libraries that make up the [Expo SDK](https://docs.expo.dev/faq/</versions/latest>) and the [Expo CLI](https://docs.expo.dev/faq/</more/expo-cli>) used for development. The Expo Go app, the easiest way to get started, is also free from the app stores.
[Expo Application Services (EAS)](https://docs.expo.dev/faq/</eas>) is an optional suite of cloud services for React Native apps, from the Expo team. EAS makes it easier to build your app, submit it to the stores, keep it updated, send push notifications, and more. You can use EAS for free if the [Free plan](https://docs.expo.dev/faq/<https:/expo.dev/pricing>) quotas are sufficient for your app. More information is available on the [pricing page](https://docs.expo.dev/faq/<https:/expo.dev/pricing>).
## How do I add custom native code to my Expo project?[](https://docs.expo.dev/faq/<#how-do-i-add-custom-native-code-to-my-expo-project>)
Expo supports adding custom native code and customizing that native code (Android/Xcode projects). To use any custom native code, you can create a [development build](https://docs.expo.dev/faq/</develop/development-builds/introduction>) and [config plugins](https://docs.expo.dev/faq/</config-plugins/introduction>). We do recommend using the modules in the [Expo SDK](https://docs.expo.dev/faq/</versions/latest>) when possible for easier upgrades and improved developer experience.
## Can I use Expo in the app that is created with React Native CLI?[](https://docs.expo.dev/faq/<#can-i-use-expo-in-the-app-that-is-created-with-react-native-cli>)
Yes! All Expo tools and services work great in any React Native app. For example, you can use any part of the [Expo SDK](https://docs.expo.dev/faq/</versions/latest>), `expo-dev-client`[](https://docs.expo.dev/faq/</develop/development-builds/installation>) and EAS Build, Submit, and Update — they work great! Learn more about [installing `expo` in your project](https://docs.expo.dev/faq/</bare/installing-expo-modules>), [adopting prebuild](https://docs.expo.dev/faq/</guides/adopting-prebuild>), and [setting up EAS Build](https://docs.expo.dev/faq/</build/introduction>).
## How do I share my Expo project? Can I submit it to the app stores?[](https://docs.expo.dev/faq/<#how-do-i-share-my-expo-project-can-i-submit-it-to-the-app-stores>)
The fastest way to share your project is to publish with [EAS Update](https://docs.expo.dev/faq/</eas-update/introduction>) and launch in a [development build](https://docs.expo.dev/faq/</develop/development-builds/introduction>). This gives your app a URL; you can share this URL with anybody who has the [development build](https://docs.expo.dev/faq/</develop/development-builds/introduction>) for Android or iOS. URLs can also be opened in Expo Go for Android.
When ready, you can create a production build (.aab and .ipa) to submit to the app stores. You can build your app in a single command with [EAS Build](https://docs.expo.dev/faq/</build/introduction>) and submit it to the stores with [EAS Submit](https://docs.expo.dev/faq/</submit/introduction>).
You can also use [internal distribution](https://docs.expo.dev/faq/</build/internal-distribution>) to share your app with an APK on Android and ad-hoc or enterprise provisioning on iOS.
## Can I develop iOS apps on a Windows computer?[](https://docs.expo.dev/faq/<#can-i-develop-ios-apps-on-a-windows-computer>)
Traditionally you needed a macOS to develop iOS apps, however, you can use [EAS Build](https://docs.expo.dev/faq/</build/introduction>) to build your app in the cloud. You can also use [EAS Submit](https://docs.expo.dev/faq/</submit/introduction>) to submit your app to the stores. Testing can be done on a physical iOS device using [Expo Go](https://docs.expo.dev/faq/<https:/expo.dev/go>) or a [development build](https://docs.expo.dev/faq/</develop/development-builds/introduction>).
## What versions of Android and iOS are supported by the Expo SDK?[](https://docs.expo.dev/faq/<#what-versions-of-android-and-ios-are-supported-by-the-expo-sdk>)
Expo SDK supports Android 6+ and iOS 13.4+. For more information, see [Support for Android and iOS versions](https://docs.expo.dev/faq/</versions/latest#support-for-android-and-ios-versions>).
## What is the minimal size of a "hello world" expo app?[](https://docs.expo.dev/faq/<#what-is-the-minimal-size-of-a-hello-world-expo-app>)
A bare minimum production app created using pure Expo is less than 3 MB. For iOS, Expo targets a newer minimum iOS version which enables app store optimizations.
If the `expo` package is included in your app, it only adds 1 MB one time to the final size of apps on app stores. The `expo` package has a marginal size cost (for example, 150 Kib on Android). The rest of the size comes from the language runtime (such as Kotlin on Android).
## Can I use Expo with my native library?[](https://docs.expo.dev/faq/<#can-i-use-expo-with-my-native-library>)
You can use native Android and iOS libraries with Expo by creating a [custom native module](https://docs.expo.dev/faq/</modules>) with Swift and Kotlin. Many popular libraries already have custom native modules. Check out our [React Native directory](https://docs.expo.dev/faq/<https:/reactnative.directory>) to find popular libraries for your use case.
## Can I use Expo with this web library?[](https://docs.expo.dev/faq/<#can-i-use-expo-with-this-web-library>)
Many popular web packages such as three.js work with Expo and React Native. See [Expo examples](https://docs.expo.dev/faq/<https:/github.com/expo/examples>) for more information.
## Is Expo similar to React for web development?[](https://docs.expo.dev/faq/<#is-expo-similar-to-react-for-web-development>)
Expo is an [open-source framework](https://docs.expo.dev/faq/<https:/github.com/expo/expo>) for apps that run natively on Android, iOS, and the web. React Native is similar to `react-dom` from web development, enabling you to run React on a particular platform, however, it has a few key differences:
  * React Native does not support HTML or CSS.
  * Instead of using the DOM, React Native uses native components. For example, `<View />` instead of `<div />`. Native components are more performant than the DOM and provide a much nicer user experience.
  * Unlike React.js which has access to browser APIs, React Native uses custom native APIs. For example, instead of `navigator.geolocation`, you use `expo-location` to access the user's location. Custom native APIs are similar to browser APIs except you have full control over them. This means you can access new features before they are available in the browser.


In the same way React.js frameworks help users create larger websites with ease, Expo helps users create larger apps with ease. Expo provides a suite of well-tested React Native modules that run on Android, iOS, and the web. Expo also provides a [suite of tools](https://docs.expo.dev/faq/</eas>) for building, deploying, and updating your app.
## What are the store policies regarding interpreted code?[](https://docs.expo.dev/faq/<#what-are-the-store-policies-regarding-interpreted-code>)
React Native uses a JavaScript interpreter (JSC, V8, or Hermes) to run your application code. Refer to the [Google Play Policy Center](https://docs.expo.dev/faq/<https:/play.google/developer-content-policy/>) and [Apple Developer Program License Agreement](https://docs.expo.dev/faq/<https:/developer.apple.com/support/terms/apple-developer-program-license-agreement>) directly for the most up-to-date policy information.
_The following are excerpts of related policies, as of April 25, 2024._
### Google Play Store[](https://docs.expo.dev/faq/<#google-play-store>)
```
...an app may not download executable code (such as dex, JAR, .so files) from a
source other than Google Play. This restriction does not apply to code that runs
in a virtual machine or an interpreter where either provides indirect access to
Android APIs (such as JavaScript in a webview or browser).
Apps or third-party code, like SDKs, with interpreted languages (JavaScript,
Python, Lua, etc.) loaded at run time (for example, not packaged with the app)
must not allow potential violations of Google Play policies.

```

Source: [Google Play Policy Center](https://docs.expo.dev/faq/<https:/support.google.com/googleplay/android-developer/answer/9888379?hl=en>).
### Apple App Store[](https://docs.expo.dev/faq/<#apple-app-store>)
```
...Interpreted code may be downloaded to an Application but only so long as such code:
(a) does not change the primary purpose of the Application by providing features
  or functionality that are inconsistent with the intended and advertised purpose
  of the Application as submitted to the App Store,
(b) does not create a store or storefront for other code or applications, and
(c) does not bypass signing, sandbox, or other security features of the OS.

```

Source: [3.3.1 APIs and Functionality - B. Executable Code](https://docs.expo.dev/faq/<https:/developer.apple.com/support/terms/apple-developer-program-license-agreement#b331>).
## Should I use Expo CLI or React Native Community CLI?[](https://docs.expo.dev/faq/<#should-i-use-expo-cli-or-react-native-community-cli>)
Expo CLI offers the same core functionality as React Native Community CLI (also known as "React Native CLI") with additional features such as automatic [TypeScript setup](https://docs.expo.dev/faq/</guides/typescript>), [web support](https://docs.expo.dev/faq/</workflow/web>), [auto installing compatible libraries](https://docs.expo.dev/faq/</more/expo-cli#install>), [improved native build commands](https://docs.expo.dev/faq/</more/expo-cli#compiling>), [tunneling](https://docs.expo.dev/faq/</more/expo-cli#tunneling>), [Prebuild](https://docs.expo.dev/faq/</workflow/prebuild>), and [more](https://docs.expo.dev/faq/</more/expo-cli>).
It can be used simultaneously with React Native Community. Regardless of which CLI you use, you can use any part of the [Expo SDK](https://docs.expo.dev/faq/</versions/latest>) and [Expo Application Services](https://docs.expo.dev/faq/</eas>) with your project. For more information, see:
  * Learn how you can migrate to use Expo CLI in an [existing React Native project](https://docs.expo.dev/faq/</bare/using-expo-cli>).
  * Learn about the benefits of [using a framework to build React Native apps](https://docs.expo.dev/faq/<https:/reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps>).
  * Learn about the benefits of migrating to Expo CLI such as improved app performance, expedites release, and fostering stronger collaboration across you team in [this blog post](https://docs.expo.dev/faq/<https:/expo.dev/blog/from-rnc-cli-to-expo>).


## Is Expo Go open source?[](https://docs.expo.dev/faq/<#is-expo-go-open-source>)
Yes, the source for Expo Go can be found in the [expo/expo GitHub repository](https://docs.expo.dev/faq/<https:/github.com/expo/expo>) in the apps/expo-go directory. The Expo Go app is also built with Expo and React Native.
## Is Expo eject deprecated?[](https://docs.expo.dev/faq/<#is-expo-eject-deprecated>)
Yes, Expo eject is a deprecated term and is no longer necessary. It was replaced by the `npx expo prebuild`[](https://docs.expo.dev/faq/</workflow/prebuild>) command which continuously generates native projects for you based on the libraries in your project and the app config (app.json). Learn more in the [Expo Prebuild documentation](https://docs.expo.dev/faq/</workflow/prebuild>).
Unlike the `expo eject` library, authors can configure their libraries to work with Expo Prebuild by creating a [config plugin](https://docs.expo.dev/faq/</config-plugins/introduction>). This means you can use any library with Expo Prebuild. You can also use any custom native code with Expo Prebuild by creating a [development build](https://docs.expo.dev/faq/</develop/development-builds/introduction>).
## Limitations[](https://docs.expo.dev/faq/<#limitations>)
Previously, Expo had large native binary sizes and didn't support custom native code without "ejecting". These issues went away in December 2020 when we released [EAS Build](https://docs.expo.dev/faq/</build/introduction>) which supports any React Native app. The concept of "ejecting" was replaced by the popular [Expo Prebuild](https://docs.expo.dev/faq/</workflow/prebuild>) feature which has been around since SDK 41 (April 2021). The `expo eject`[ command was fully deprecated](https://docs.expo.dev/faq/</faq#is-expo-eject-deprecated>) in Expo SDK 46 (August 2022).
We believe Expo tools are a great option for anyone looking to create amazing cross-platform apps quickly. Nonetheless, everyone's project is unique, and there may be reasons Expo is not the right choice for what you're building. Reasons, why you may not want to use certain Expo tools with your project, are listed below:
### EAS[](https://docs.expo.dev/faq/<#eas>)
For more information on what current limitations exist with EAS, see the following:
[EAS BuildEAS Build is designed to work for any React Native project, whether or not you also use Expo Prebuild or manage your own native files. In some situations, you may need to change your project configuration, or it may be incompatible with your app. Learn more.](https://docs.expo.dev/faq/</build-reference/limitations>) [EAS MetadataEAS Metadata helps create or maintain an app in the stores as easily as possible by using one configuration file. In some situations, not be the right fit for a project. Learn more.](https://docs.expo.dev/faq/</eas/metadata/faq#anti-pitch>) [NotificationsPush Notifications are an important feature, no matter what kind of app you're building. In some situations, you might want to know about common issues when setting up push notifications with Expo. Learn more.](https://docs.expo.dev/faq/</push-notifications/faq>)
#### EAS and bare React Native projects[](https://docs.expo.dev/faq/<#eas-and-bare-react-native-projects>)
EAS Build is compatible with bare (existing) React Native projects (where native directories are checked in version control). When these directories are present, it does not run prebuild, as that could overwrite any manual customizations you have made to the native project files. You'll have to configure the native directories on your own with native tools such as Android Studio or Xcode.
### Expo Go[](https://docs.expo.dev/faq/<#expo-go>)
[Expo Go](https://docs.expo.dev/faq/</get-started/set-up-your-environment?redirected=#how-would-you-like-to-develop>) provides a quick way to get started with your app development. It comes with a pre-configured set of libraries known as the Expo SDK. This makes experimentation much faster and brings the mobile development experience much closer to the web development experience.
Like any other tool, it too has its limitations:
  * Using a third-party library that requires native code
  * Using a third-party push notification service


We strongly recommend any projects that require additional libraries with native code to migrate to [development builds](https://docs.expo.dev/faq/</develop/development-builds/introduction>). It's like creating a version of Expo Go that is specifically customized to your app's needs.
[Previous (More)Core concepts](https://docs.expo.dev/faq/</core-concepts>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/faq/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/faq/<https:/github.com/expo/expo/edit/main/docs/pages/faq.mdx>)
  * Last updated on September 17, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/faq/<https:/expo.dev/privacy>).
On this page
[What is Expo used for?](https://docs.expo.dev/faq/</faq/#what-is-expo-used-for>)[Do companies use Expo?](https://docs.expo.dev/faq/</faq/#do-companies-use-expo>)[Why does Expo have its own SDK?](https://docs.expo.dev/faq/</faq/#why-does-expo-have-its-own-sdk>)[What is the difference between Expo and React Native?](https://docs.expo.dev/faq/</faq/#what-is-the-difference-between-expo-and-react-native>)[Do I need to switch from React Native to use Expo?](https://docs.expo.dev/faq/</faq/#do-i-need-to-switch-from-react-native-to-use-expo>)[How much does Expo cost?](https://docs.expo.dev/faq/</faq/#how-much-does-expo-cost>)[How do I add custom native code to my Expo project?](https://docs.expo.dev/faq/</faq/#how-do-i-add-custom-native-code-to-my-expo-project>)[Can I use Expo in the app that is created with React Native CLI?](https://docs.expo.dev/faq/</faq/#can-i-use-expo-in-the-app-that-is-created-with-react-native-cli>)[How do I share my Expo project? Can I submit it to the app stores?](https://docs.expo.dev/faq/</faq/#how-do-i-share-my-expo-project-can-i-submit-it-to-the-app-stores>)[Can I develop iOS apps on a Windows computer?](https://docs.expo.dev/faq/</faq/#can-i-develop-ios-apps-on-a-windows-computer>)[What versions of Android and iOS are supported by the Expo SDK?](https://docs.expo.dev/faq/</faq/#what-versions-of-android-and-ios-are-supported-by-the-expo-sdk>)[What is the minimal size of a "hello world" expo app?](https://docs.expo.dev/faq/</faq/#what-is-the-minimal-size-of-a-hello-world-expo-app>)[Can I use Expo with my native library?](https://docs.expo.dev/faq/</faq/#can-i-use-expo-with-my-native-library>)[Can I use Expo with this web library?](https://docs.expo.dev/faq/</faq/#can-i-use-expo-with-this-web-library>)[Is Expo similar to React for web development?](https://docs.expo.dev/faq/</faq/#is-expo-similar-to-react-for-web-development>)[What are the store policies regarding interpreted code?](https://docs.expo.dev/faq/</faq/#what-are-the-store-policies-regarding-interpreted-code>)[Google Play Store](https://docs.expo.dev/faq/</faq/#google-play-store>)[Apple App Store](https://docs.expo.dev/faq/</faq/#apple-app-store>)[Should I use Expo CLI or React Native Community CLI?](https://docs.expo.dev/faq/</faq/#should-i-use-expo-cli-or-react-native-community-cli>)[Is Expo Go open source?](https://docs.expo.dev/faq/</faq/#is-expo-go-open-source>)[Is Expo eject deprecated?](https://docs.expo.dev/faq/</faq/#is-expo-eject-deprecated>)[Limitations](https://docs.expo.dev/faq/</faq/#limitations>)[EAS](https://docs.expo.dev/faq/</faq/#eas>)[Expo Go](https://docs.expo.dev/faq/</faq/#expo-go>)
