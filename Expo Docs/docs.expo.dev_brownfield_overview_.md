[](https://docs.expo.dev/brownfield/overview/<https:/expo.dev>)[Docs](https://docs.expo.dev/brownfield/overview/</>)
[Blog](https://docs.expo.dev/brownfield/overview/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/brownfield/overview/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/brownfield/overview/<https:/github.com/expo/expo>)[](https://docs.expo.dev/brownfield/overview/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/brownfield/overview/</>)[Guides](https://docs.expo.dev/brownfield/overview/</guides/overview>)[EAS](https://docs.expo.dev/brownfield/overview/</eas>)[Reference](https://docs.expo.dev/brownfield/overview/</versions/latest>)[Learn](https://docs.expo.dev/brownfield/overview/</tutorial/overview>)
[Overview](https://docs.expo.dev/brownfield/overview/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/brownfield/overview/</workflow/overview>)[Configure with app config](https://docs.expo.dev/brownfield/overview/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/brownfield/overview/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/brownfield/overview/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/brownfield/overview/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/brownfield/overview/</guides/permissions>)[Environment variables](https://docs.expo.dev/brownfield/overview/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
[Overview](https://docs.expo.dev/brownfield/overview/</brownfield/overview>)[Install Expo modules](https://docs.expo.dev/brownfield/overview/</brownfield/installing-expo-modules>)
Reference
Expo Router
[Introduction](https://docs.expo.dev/brownfield/overview/</router/introduction>)[Installation](https://docs.expo.dev/brownfield/overview/</router/installation>)[Create pages](https://docs.expo.dev/brownfield/overview/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/brownfield/overview/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/brownfield/overview/</router/layouts>)[Error handling](https://docs.expo.dev/brownfield/overview/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/brownfield/overview/</modules/overview>)[Get started](https://docs.expo.dev/brownfield/overview/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/brownfield/overview/</push-notifications/overview>)[About notification types](https://docs.expo.dev/brownfield/overview/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/brownfield/overview/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/brownfield/overview/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/brownfield/overview/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/brownfield/overview/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/brownfield/overview/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/brownfield/overview/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/brownfield/overview/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/brownfield/overview/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/brownfield/overview/</archive>)[Expo Snack](https://docs.expo.dev/brownfield/overview/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/brownfield/overview/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/brownfield/overview/<https:/expo.dev/mailing-list/signup>)
# Integrating Expo tools into existing native apps
[Edit this page](https://docs.expo.dev/brownfield/overview/<https:/github.com/expo/expo/edit/main/docs/pages/brownfield/overview.mdx> "Edit content of this page on GitHub")
An overview of how you can integrate Expo tools into existing native apps ("brownfield" apps).
[Edit this page](https://docs.expo.dev/brownfield/overview/<https:/github.com/expo/expo/edit/main/docs/pages/brownfield/overview.mdx> "Edit content of this page on GitHub")
An existing native app that was built using another technology, whose main entry point is _not_ a React Native view, is commonly referred to as a "brownfield" app. For example, if your app was built using UIKit and Swift, and you want to use React Native for a single screen then that is considered an "existing native app" and "brownfield".
In contrast, "greenfield" apps are created using Expo or React Native from the start or where React Native is the entry point and where all other UI branches off from.
By these definitions, if you have an "existing native app" for Android or iOS and you want to learn how to use Expo and React Native in your project (perhaps on a single screen or even a single feature), then this guide is for you.
## Compatibility with existing native apps[](https://docs.expo.dev/brownfield/overview/<#compatibility-with-existing-native-apps>)
> Support for integrating Expo modules into existing native projects is still experimental. If you encounter issues, [create an issue on GitHub](https://docs.expo.dev/brownfield/overview/<https:/github.com/expo/expo/issues>). Not all features of the tools and services below will be available when used in the context of an existing native app.
Expo is primarily built with greenfield apps in mind. Not all Expo tools and services are compatible with existing native projects.
Tool/Service| Supports brownfield?  
---|---  
[Expo SDK](https://docs.expo.dev/brownfield/overview/</versions/latest>) - an extended standard library for React Native| Yes  
[Expo Modules API](https://docs.expo.dev/brownfield/overview/</modules/overview>) - build native extensions using an idiomatic Swift/Kotlin API| Yes  
[Expo Router](https://docs.expo.dev/brownfield/overview/</router/introduction>) - file-based routing and navigation| No  
[Expo CLI](https://docs.expo.dev/brownfield/overview/</more/expo-cli>) - tools to run and develop your app from your terminal| No  
[Expo Dev Client](https://docs.expo.dev/brownfield/overview/</versions/latest/sdk/dev-client>) - adds in-app developer tooling to Debug builds| No  
[EAS Build](https://docs.expo.dev/brownfield/overview/</build/introduction>) - a CI/CD service built specifically for Expo/React Native| Yes  
[EAS Submit](https://docs.expo.dev/brownfield/overview/</submit/introduction>) - a hosted service that uploads your app to stores| Yes  
[EAS Update](https://docs.expo.dev/brownfield/overview/</eas-update/introduction>) - instant updates of your app JavaScript and assets| No  
## Next steps[](https://docs.expo.dev/brownfield/overview/<#next-steps>)
[Integrating your first React Native viewLearn how to add a React Native root view to your existing native app in the React Native docs.](https://docs.expo.dev/brownfield/overview/<https:/reactnative.dev/docs/integration-with-existing-apps>) [Install Expo modulesInstall the Expo Modules API and use it to add existing Expo modules or write your own native extensions.](https://docs.expo.dev/brownfield/overview/</brownfield/installing-expo-modules>)
[Previous (Development process - Existing React Native apps)Native project upgrade helper](https://docs.expo.dev/brownfield/overview/</bare/upgrade>)[Next (Development process - Existing native apps)Install Expo modules](https://docs.expo.dev/brownfield/overview/</brownfield/installing-expo-modules>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/brownfield/overview/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/brownfield/overview/<https:/github.com/expo/expo/edit/main/docs/pages/brownfield/overview.mdx>)
  * Last updated on November 07, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/brownfield/overview/<https:/expo.dev/privacy>).
