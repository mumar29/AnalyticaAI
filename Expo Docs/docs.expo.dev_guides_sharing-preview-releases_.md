[](https://docs.expo.dev/guides/sharing-preview-releases/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/sharing-preview-releases/</>)
[Blog](https://docs.expo.dev/guides/sharing-preview-releases/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/sharing-preview-releases/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/sharing-preview-releases/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/sharing-preview-releases/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/sharing-preview-releases/</>)[Guides](https://docs.expo.dev/guides/sharing-preview-releases/</guides/overview>)[EAS](https://docs.expo.dev/guides/sharing-preview-releases/</eas>)[Reference](https://docs.expo.dev/guides/sharing-preview-releases/</versions/latest>)[Learn](https://docs.expo.dev/guides/sharing-preview-releases/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/sharing-preview-releases/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/sharing-preview-releases/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/sharing-preview-releases/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/sharing-preview-releases/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/sharing-preview-releases/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/sharing-preview-releases/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/sharing-preview-releases/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/sharing-preview-releases/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/sharing-preview-releases/</router/introduction>)[Installation](https://docs.expo.dev/guides/sharing-preview-releases/</router/installation>)[Create pages](https://docs.expo.dev/guides/sharing-preview-releases/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/sharing-preview-releases/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/sharing-preview-releases/</router/layouts>)[Error handling](https://docs.expo.dev/guides/sharing-preview-releases/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/sharing-preview-releases/</modules/overview>)[Get started](https://docs.expo.dev/guides/sharing-preview-releases/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/sharing-preview-releases/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/sharing-preview-releases/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/sharing-preview-releases/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/sharing-preview-releases/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/sharing-preview-releases/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/sharing-preview-releases/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/sharing-preview-releases/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/sharing-preview-releases/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/sharing-preview-releases/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/sharing-preview-releases/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/sharing-preview-releases/</guides/icons>)[Localization](https://docs.expo.dev/guides/sharing-preview-releases/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/sharing-preview-releases/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/sharing-preview-releases/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/sharing-preview-releases/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/sharing-preview-releases/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/sharing-preview-releases/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/sharing-preview-releases/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/sharing-preview-releases/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/sharing-preview-releases/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/sharing-preview-releases/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/sharing-preview-releases/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/sharing-preview-releases/</archive>)[Expo Snack](https://docs.expo.dev/guides/sharing-preview-releases/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/sharing-preview-releases/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/sharing-preview-releases/<https:/expo.dev/mailing-list/signup>)
# Share pre-release versions of your app
[Edit this page](https://docs.expo.dev/guides/sharing-preview-releases/<https:/github.com/expo/expo/edit/main/docs/pages/guides/sharing-preview-releases.mdx> "Edit content of this page on GitHub")
Learn about various methods to share pre-release versions of your app for internal distribution and TestFlight.
[Edit this page](https://docs.expo.dev/guides/sharing-preview-releases/<https:/github.com/expo/expo/edit/main/docs/pages/guides/sharing-preview-releases.mdx> "Edit content of this page on GitHub")
During the development process you'll want to share your progress with both technical and non-technical stakeholders of the project to gather feedback and test it, and there are several official approaches you can take for doing this.
## Internal distribution[](https://docs.expo.dev/guides/sharing-preview-releases/<#internal-distribution>)
Android and iOS both offer ways to install a build of your application directly on devices. This gives you full control of putting specific builds on devices, allowing you to iterate quickly and have multiple builds of your application available for review at the same time.
### Android[](https://docs.expo.dev/guides/sharing-preview-releases/<#android>)
To share your application to Android devices, you must build an APK (Android application package file) of your project. APKs can be installed directly to an Android device over USB, by downloading the file over the web or through an email or chat app, once the user accepts the security warning for installing an app that has not gone through Play Store review. AAB (Android app bundle) binaries of your application must be distributed through the Play Store.
### iOS ad hoc distribution[](https://docs.expo.dev/guides/sharing-preview-releases/<#ios-ad-hoc-distribution>)
Apple offers [ad hoc provisioning profiles](https://docs.expo.dev/guides/sharing-preview-releases/<https:/help.apple.com/xcode/mac/current/#/dev7ccaf4d3c>) to distribute your app to test devices once they have been registered to your Apple Developer account. This method requires a paid Apple Developer account and that account will only be able to use this method to distribute to at most 100 iPhones per year.
You will need to know the UDID (Unique Device Identifier) of each device that will install your application, which may be challenging if you are trying to share with someone who is not a developer. Adding a new device will require a rebuild of your application.
Setting up Ad Hoc certificates correctly can be intimidating if you haven't done it before, and tedious even if you have. If you're using [EAS Build](https://docs.expo.dev/guides/sharing-preview-releases/</build/internal-distribution>), which is optimized for Expo and React Native projects, we'll handle the time-consuming parts of setting up Ad Hoc credentials for you.
### iOS enterprise distribution[](https://docs.expo.dev/guides/sharing-preview-releases/<#ios-enterprise-distribution>)
If your app is only intended to be used internally and will not be distributed through the App Store, you should use Enterprise distribution. Unlike Ad Hoc Distribution, there is no limit to the number of devices that can install your application, and you will not need to manage the UDIDs of each device. Enterprise Distribution requires membership in the more expensive [Apple Developer Enterprise Program](https://docs.expo.dev/guides/sharing-preview-releases/<https:/developer.apple.com/programs/enterprise/>), which requires your organization to be a legal entity and go through Apple's verification process.
## TestFlight[](https://docs.expo.dev/guides/sharing-preview-releases/<#testflight>)
TestFlight is another option to distribute your application to iOS devices. TestFlight also requires a paid Apple Developer account, but allows you to share your application with up to 10,000 users that can be invited with their email or a public link. This method requires you to [upload your application](https://docs.expo.dev/guides/sharing-preview-releases/</submit/ios>) to App Store Connect and wait for the automated review before you can share a build. If you intend to ship new builds frequently, investing the time to set up Ad Hoc distribution will be worthwhile.
[Previous (More - Assorted)Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/sharing-preview-releases/</guides/authentication>)[Next (More - Assorted)Using Hermes](https://docs.expo.dev/guides/sharing-preview-releases/</guides/using-hermes>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/sharing-preview-releases/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/sharing-preview-releases/<https:/github.com/expo/expo/edit/main/docs/pages/guides/sharing-preview-releases.mdx>)
  * Last updated on August 05, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/sharing-preview-releases/<https:/expo.dev/privacy>).
On this page
[Internal distribution](https://docs.expo.dev/guides/sharing-preview-releases/</guides/sharing-preview-releases/#internal-distribution>)[Android](https://docs.expo.dev/guides/sharing-preview-releases/</guides/sharing-preview-releases/#android>)[iOS ad hoc distribution](https://docs.expo.dev/guides/sharing-preview-releases/</guides/sharing-preview-releases/#ios-ad-hoc-distribution>)[iOS enterprise distribution](https://docs.expo.dev/guides/sharing-preview-releases/</guides/sharing-preview-releases/#ios-enterprise-distribution>)[TestFlight](https://docs.expo.dev/guides/sharing-preview-releases/</guides/sharing-preview-releases/#testflight>)
