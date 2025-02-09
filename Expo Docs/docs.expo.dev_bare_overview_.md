[](https://docs.expo.dev/bare/overview/<https:/expo.dev>)[Docs](https://docs.expo.dev/bare/overview/</>)
[Blog](https://docs.expo.dev/bare/overview/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/bare/overview/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/bare/overview/<https:/github.com/expo/expo>)[](https://docs.expo.dev/bare/overview/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/bare/overview/</>)[Guides](https://docs.expo.dev/bare/overview/</guides/overview>)[EAS](https://docs.expo.dev/bare/overview/</eas>)[Reference](https://docs.expo.dev/bare/overview/</versions/latest>)[Learn](https://docs.expo.dev/bare/overview/</tutorial/overview>)
[Overview](https://docs.expo.dev/bare/overview/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/bare/overview/</workflow/overview>)[Configure with app config](https://docs.expo.dev/bare/overview/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/bare/overview/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/bare/overview/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/bare/overview/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/bare/overview/</guides/permissions>)[Environment variables](https://docs.expo.dev/bare/overview/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
[Overview](https://docs.expo.dev/bare/overview/</bare/overview>)[Install Expo modules](https://docs.expo.dev/bare/overview/</bare/installing-expo-modules>)[Migrate to Expo CLI](https://docs.expo.dev/bare/overview/</bare/using-expo-cli>)[Install expo-updates](https://docs.expo.dev/bare/overview/</bare/installing-updates>)[Install expo-dev-client](https://docs.expo.dev/bare/overview/</bare/install-dev-builds-in-bare>)[Native project upgrade helper](https://docs.expo.dev/bare/overview/</bare/upgrade>)
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/bare/overview/</router/introduction>)[Installation](https://docs.expo.dev/bare/overview/</router/installation>)[Create pages](https://docs.expo.dev/bare/overview/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/bare/overview/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/bare/overview/</router/layouts>)[Error handling](https://docs.expo.dev/bare/overview/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/bare/overview/</modules/overview>)[Get started](https://docs.expo.dev/bare/overview/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/bare/overview/</push-notifications/overview>)[About notification types](https://docs.expo.dev/bare/overview/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/bare/overview/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/bare/overview/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/bare/overview/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/bare/overview/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/bare/overview/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/bare/overview/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/bare/overview/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/bare/overview/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/bare/overview/</archive>)[Expo Snack](https://docs.expo.dev/bare/overview/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/bare/overview/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/bare/overview/<https:/expo.dev/mailing-list/signup>)
# Overview of using Expo with existing React Native apps
[Edit this page](https://docs.expo.dev/bare/overview/<https:/github.com/expo/expo/edit/main/docs/pages/bare/overview.mdx> "Edit content of this page on GitHub")
Learn how to use Expo tools and services with existing React Native apps.
[Edit this page](https://docs.expo.dev/bare/overview/<https:/github.com/expo/expo/edit/main/docs/pages/bare/overview.mdx> "Edit content of this page on GitHub")
If you have a React Native app that doesn't use any Expo tools, you might be wondering what Expo can provide for you, why you might want to use Expo tools and services, and how to get started.
All tools and services provided by Expo work great in any React Native app.
You can use [EAS](https://docs.expo.dev/bare/overview/</eas>) to get quickly set up with a professional CI/CD workflow for building, reviewing, deploying, and updating your apps. [Expo CLI](https://docs.expo.dev/bare/overview/</more/expo-cli>) provides the best command-line experience for working with React Native. The [Expo SDK](https://docs.expo.dev/bare/overview/</versions/latest>) is an extended standard library for React Native. It gives developers high-quality, well-maintained native libraries that use consistent API conventions to make them easier to learn and use.
If you've ever written a native module for React Native, you'll be surprised how much easier it is to build and maintain modules with the idiomatic Swift and Kotlin DSL provided by the [Expo Modules API](https://docs.expo.dev/bare/overview/</modules/overview>).
There's so much more to explore, and the links below will help you to explore the options available to you.
## Incremental adoption steps[](https://docs.expo.dev/bare/overview/<#incremental-adoption-steps>)
Below are four suggested phases of incremental adoption. These phases generally progress from quick changes to improve developer experience, to more significant workflow and codebase optimizations.
Only the first phase — prerequisites — is required by other phases. After following its instructions, you can skip to the tools and services that are most relevant to your goals in adopting Expo.
### Prerequisites[](https://docs.expo.dev/bare/overview/<#prerequisites>)
These first steps are required to later adopt Expo tools and services:
[Install Expo modulesTo unlock Expo capabilities, you need to install the `expo` package in your existing React Native project. This guide provides both automated and manual installation steps.](https://docs.expo.dev/bare/overview/</bare/installing-expo-modules>) [Use Expo CLIMigration to Expo CLI is a drop-in replacement for `@react-native-community/cli`. It provides full compatibility with all Expo tools and services. This guide explains the benefits and provides compilation commands to start your development server after installing`expo` package.](https://docs.expo.dev/bare/overview/</bare/using-expo-cli>)
### Quick wins[](https://docs.expo.dev/bare/overview/<#quick-wins>)
The following helps improving development experience and requires configuration:
[Use Expo SDKUse one of the many libraries provided by the Expo SDK, an extensive set of libraries that provide access to native APIs.](https://docs.expo.dev/bare/overview/</versions>) [Install expo-dev-client`expo-dev-client` provides access to Expo Go-style app launcher interface into your debug app variants. Learn how to install and configure it in your existing React Native project.](https://docs.expo.dev/bare/overview/</bare/install-dev-builds-in-bare>) [Write native modulesUse the Expo Modules API to write native modules using Swift and Kotlin.](https://docs.expo.dev/bare/overview/</modules/overview>) [Native project upgrade helperView file-by-file diffs of all the changes you need to make to your native projects to upgrade them to the next Expo SDK and React Native version.](https://docs.expo.dev/bare/overview/</bare/upgrade>)
### New workflows[](https://docs.expo.dev/bare/overview/<#new-workflows>)
Once your app has `expo` package installed, you can submit your app to app stores with a single command or update configure `expo-updates` library to manage remote updates to you app's code:
[App distributionBuild and submit your app to app stores with a single command.](https://docs.expo.dev/bare/overview/</distribution/introduction>) [Install expo-updatesLearn how to install and configure `expo-updates` to manage remote updates and enable PR previews.](https://docs.expo.dev/bare/overview/</bare/installing-updates>)
### New mindsets[](https://docs.expo.dev/bare/overview/<#new-mindsets>)
The following helps with your project's long term maintainability, native code maintenance, and easier upgrades:
[Adopt PrebuildLearn how to simplify maintaining your native projects by generating them on demand from configuration.](https://docs.expo.dev/bare/overview/</guides/adopting-prebuild>) [Expo RouterExpo Router is a file-based routing library that offers advantages such as organized navigation hierarchy, automatic deep linking support, and more.](https://docs.expo.dev/bare/overview/</router/introduction>)
## Common questions[](https://docs.expo.dev/bare/overview/<#common-questions>)
How long will it take to adopt Expo in my existing React Native project?[](https://docs.expo.dev/bare/overview/<#how-long-will-it-take-to-adopt>)
Adopting Expo doesn't have to be done in one step. You can start with the _quick wins_ and then move on to more complex parts. You can also pick and choose which features you want to adopt based on what is most helpful for your project.
What will I gain from using Expo in my React Native app?[](https://docs.expo.dev/bare/overview/<#what-will-i-gain-from-using-expo>)
Adopting Expo tools in your existing React Native app can help you develop faster with the [Expo SDK](https://docs.expo.dev/bare/overview/</versions/latest>), streamline native code maintenance and upgrades with [CNG](https://docs.expo.dev/bare/overview/</workflow/continuous-native-generation>), deploy faster with [EAS Update](https://docs.expo.dev/bare/overview/</eas-update/introduction>), and more.
Who uses Expo?[](https://docs.expo.dev/bare/overview/<#who-uses-expo>)
Expo is used by top companies worldwide that serve millions of end users. For more information, see our [Expo showcase](https://docs.expo.dev/bare/overview/<https:/expo.dev/customers>).
What impact will adopting Expo have on my app's size?[](https://docs.expo.dev/bare/overview/<#what-impact-will-adopting-expo-have-on>)
The `expo` package has a small footprint since it only includes a minimal set of modules required in every app with autolinking infrastructure and other Expo SDK libraries that are built-in. For more information on how to determine the actual size of your app, see [Understanding app size](https://docs.expo.dev/bare/overview/</distribution/app-size>).
Why did React Native recommend using Expo?[](https://docs.expo.dev/bare/overview/<#why-did-react-native-recommend-using-expo>)
Most React Native developers solve common problems when building an app, such as implementing navigation, accessing Native APIs, upgrading to new versions, and more. This requires using a specific set of tools and libraries to build and maintain your app — which means you are creating your own framework.
Expo solves these problems by providing a set of primitives and helping you (the developer) to focus on building your app. It also offers tools to iterate faster in development. For more information, see [Why React Native recommends using a framework](https://docs.expo.dev/bare/overview/<https:/reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps>).
Do I have to get rid of my native projects to use Expo?[](https://docs.expo.dev/bare/overview/<#do-i-have-to-get-rid-of>)
By default, Expo projects created with `create-expo-app` use [Continuous Native Generation (CNG)](https://docs.expo.dev/bare/overview/</workflow/continuous-native-generation>) and do not contain android and ios native directories. If you incrementally adopt Expo in your existing React Native app, you don't have to remove these directories. You can use `npx expo run:[android|ios]` as an alternative to commands offered by `@react-native-community/cli` to compile your app locally and keep the configuration of your native projects.
I use CodePush. Can I continue using it with Expo?[](https://docs.expo.dev/bare/overview/<#i-use-codepush-can-i-continue-using>)
CodePush will be retired in March 2025 and is incompatible with React Native's New Architecture, so, in the long run, we recommend switching to EAS Update to manage remote updates to your app's code. However, you can start using Expo tools in your CodePush enabled app today, including the Expo SDK, Expo CLI, EAS Build, and more.
Do I have to build with EAS?[](https://docs.expo.dev/bare/overview/<#do-i-have-to-build-with-eas>)
[Expo Application Services (EAS)](https://docs.expo.dev/bare/overview/</eas>) are deeply integrated cloud services for Expo and React Native apps that provide tools to build, test, and deploy your app.
Although we recommend using EAS for a smooth collaboration with your teammates and fast distribution, you can compile your app locally, on your CI, or any other way you prefer.
Can I install third-party native libraries in my code?[](https://docs.expo.dev/bare/overview/<#can-i-install-third-party-native-libraries-in>)
Yes, you can install and use third-party libraries that require native projects (android and ios) configuration or provides a [config plugin](https://docs.expo.dev/bare/overview/</config-plugins/introduction>) with [development builds](https://docs.expo.dev/bare/overview/</workflow/overview#development-builds>). See [Using Third-Party libraries](https://docs.expo.dev/bare/overview/</workflow/using-libraries#third-party-libraries>) for more information.
I use React Navigation. Do I have to use Expo Router?[](https://docs.expo.dev/bare/overview/<#i-use-react-navigation-do-i-have>)
You can continue using any navigation library in your project. However, we recommend using Expo Router for all the benefits [described here](https://docs.expo.dev/bare/overview/</router/introduction>).
[Previous (Development process - Bundling)Why Metro?](https://docs.expo.dev/bare/overview/</guides/why-metro>)[Next (Development process - Existing React Native apps)Install Expo modules](https://docs.expo.dev/bare/overview/</bare/installing-expo-modules>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/bare/overview/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/bare/overview/<https:/github.com/expo/expo/edit/main/docs/pages/bare/overview.mdx>)
  * Last updated on January 15, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/bare/overview/<https:/expo.dev/privacy>).
On this page
[Incremental adoption steps](https://docs.expo.dev/bare/overview/</bare/overview/#incremental-adoption-steps>)[Prerequisites](https://docs.expo.dev/bare/overview/</bare/overview/#prerequisites>)[Quick wins](https://docs.expo.dev/bare/overview/</bare/overview/#quick-wins>)[New workflows](https://docs.expo.dev/bare/overview/</bare/overview/#new-workflows>)[New mindsets](https://docs.expo.dev/bare/overview/</bare/overview/#new-mindsets>)[Common questions](https://docs.expo.dev/bare/overview/</bare/overview/#common-questions>)
