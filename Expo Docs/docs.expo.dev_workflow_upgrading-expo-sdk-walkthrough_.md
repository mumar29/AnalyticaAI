[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/expo.dev>)[Docs](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</>)
[Blog](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/github.com/expo/expo>)[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</>)[Guides](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</guides/overview>)[EAS](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</eas>)[Reference](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</versions/latest>)[Learn](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</tutorial/overview>)
[Overview](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/overview>)[Configure with app config](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</guides/permissions>)[Environment variables](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</router/introduction>)[Installation](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</router/installation>)[Create pages](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</router/layouts>)[Error handling](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</modules/overview>)[Get started](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</push-notifications/overview>)[About notification types](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</archive>)[Expo Snack](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/expo.dev/mailing-list/signup>)
# Upgrade Expo SDK
[Edit this page](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/upgrading-expo-sdk-walkthrough.mdx> "Edit content of this page on GitHub")
Learn how to incrementally upgrade the Expo SDK version in your project.
[Edit this page](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/upgrading-expo-sdk-walkthrough.mdx> "Edit content of this page on GitHub")
> We recommend upgrading SDK versions incrementally, one at a time. Doing so will help you pinpoint breakages and issues that arise during the upgrade process.
With a new SDK release, the latest version enters the current release status. This applies to Expo Go as it only supports the latest SDK version and previous versions are no longer supported. We recommend using [development builds](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</develop/development-builds/introduction>) for production apps as the backwards compatibility for older SDK versions on EAS services tends to be much longer, but not forever.
If you are looking to install a specific version of Expo Go, visit [expo.dev/go](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/expo.dev/go>). It supports downloads for Android devices/emulators and iOS simulators. However, due to iOS platform restrictions, only the latest version of Expo Go is available for installation on physical iOS devices.
## How to upgrade to the latest SDK version[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<#how-to-upgrade-to-the-latest-sdk-version>)
1
### Upgrade the Expo SDK[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<#upgrade-the-expo-sdk>)
Install the new version of the Expo package:
npm
Yarn
Terminal
`# Install latest`
`- ``npx expo install expo@latest`
`# Install a specific SDK version (for example, SDK 52)`
`- ``npx expo install expo@^52.0.0`
Terminal
`# Install latest`
`- ``yarn expo install expo@latest`
`# Install a specific SDK version (for example, SDK 52)`
`- ``yarn expo install expo@^52.0.0`
2
### Upgrade dependencies[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<#upgrade-dependencies>)
Upgrade all dependencies to match the installed SDK version.
Terminal
Copy
`- ``npx expo install --fix`
3
### Update native projects[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<#update-native-projects>)
  * If you use [Continuous Native Generation](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/continuous-native-generation>): Delete the android and ios directories if you generated them for a previous SDK version in your local project directory. They'll be re-generated next time you run a build, either with `npx expo run:ios`, `npx expo prebuild`, or with EAS Build.
  * If you don't use [Continuous Native Generation](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/continuous-native-generation>): Run `npx pod-install` if you have an `ios` directory. Apply any relevant changes from the [Native project upgrade helper](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</bare/upgrade>). Alternatively, you could consider [adopting prebuild](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</guides/adopting-prebuild>) for easier upgrades in the future.


4
### Follow the release notes for any other instructions[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<#follow-the-release-notes-for-any-other-instructions>)
Read the [SDK changelogs](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/upgrading-expo-sdk-walkthrough#sdk-changelogs>) for the SDK version you are upgrading to. They contain important information about breaking changes, deprecations, and other changes that may affect your app. Refer to tue "Upgrading your app" section at the bottom of the release notes page for any additional instructions.
## SDK Changelogs[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<#sdk-changelogs>)
Each SDK announcement release notes post contains information deprecations, breaking changes, and anything else that might be unique to that particular SDK version. When upgrading, be sure to check these out to make sure you don't miss anything.
  * SDK 52: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/expo.dev/changelog/2024/11-12-sdk-52>)
  * SDK 51: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/expo.dev/changelog/2024/05-07-sdk-51>)
  * SDK 50: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/expo.dev/changelog/2024/01-18-sdk-50>)


### Deprecated SDK Version Changelogs[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<#deprecated-sdk-version-changelogs>)
The following blog posts may included outdated information, but they are still useful for reference if you happen to fall far behind on SDK upgrades.
See a full list of deprecated SDK release changelogs[](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<#see-a-full-list-of-deprecated-sdk>)
  * SDK 49: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-49-c6d398cdf740>)
  * SDK 48: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-48-ccb8302e231>)
  * SDK 47: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-47-a0f6f5c038af>)
  * SDK 46: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-46-c2a1655f63f7>)
  * SDK 45: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-45-f4e332954a68>)
  * SDK 44: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-44-4c4b8306584a>)
  * SDK 43: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-43-aa9b3c7d5541>)
  * SDK 42: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-42-579aee2348b6>)
  * SDK 41: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-41-12cc5232f2ef>)
  * SDK 40: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/dev.to/expo/expo-sdk-40-is-now-available-1in0>)
  * SDK 39: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/dev.to/expo/expo-sdk-39-is-now-available-1lm8>)
  * SDK 38: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/dev.to/expo/expo-sdk-38-is-now-available-5aa0>)
  * SDK 37: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/dev.to/expo/expo-sdk-37-is-now-available-69g>)
  * SDK 36: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-36-is-now-available-b91897b437fe>)
  * SDK 35: [Release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/blog.expo.dev/expo-sdk-35-is-now-available-beee0dfafbf4>)


[Previous (Push notifications - Reference)Troubleshooting and FAQ](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</push-notifications/faq>)[Next (More - Assorted)Authentication with OAuth or OpenID providers](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</guides/authentication>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/upgrading-expo-sdk-walkthrough.mdx>)
  * Last updated on November 21, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/<https:/expo.dev/privacy>).
On this page
[How to upgrade to the latest SDK version](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/upgrading-expo-sdk-walkthrough/#how-to-upgrade-to-the-latest-sdk-version>)[Upgrade the Expo SDK](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/upgrading-expo-sdk-walkthrough/#upgrade-the-expo-sdk>)[Upgrade dependencies](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/upgrading-expo-sdk-walkthrough/#upgrade-dependencies>)[Update native projects](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/upgrading-expo-sdk-walkthrough/#update-native-projects>)[Follow the release notes for any other instructions](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/upgrading-expo-sdk-walkthrough/#follow-the-release-notes-for-any-other-instructions>)[SDK Changelogs](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/upgrading-expo-sdk-walkthrough/#sdk-changelogs>)[Deprecated SDK Version Changelogs](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/</workflow/upgrading-expo-sdk-walkthrough/#deprecated-sdk-version-changelogs>)
