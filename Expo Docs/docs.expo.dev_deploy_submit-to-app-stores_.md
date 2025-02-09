[](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.dev>)[Docs](https://docs.expo.dev/deploy/submit-to-app-stores/</>)
[Blog](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/github.com/expo/expo>)[](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/deploy/submit-to-app-stores/</>)[Guides](https://docs.expo.dev/deploy/submit-to-app-stores/</guides/overview>)[EAS](https://docs.expo.dev/deploy/submit-to-app-stores/</eas>)[Reference](https://docs.expo.dev/deploy/submit-to-app-stores/</versions/latest>)[Learn](https://docs.expo.dev/deploy/submit-to-app-stores/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/deploy/submit-to-app-stores/</get-started/introduction>)[Create a project](https://docs.expo.dev/deploy/submit-to-app-stores/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/deploy/submit-to-app-stores/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/deploy/submit-to-app-stores/</get-started/start-developing>)[Next steps](https://docs.expo.dev/deploy/submit-to-app-stores/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/deploy/submit-to-app-stores/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/deploy/submit-to-app-stores/</develop/authentication>)[Unit testing](https://docs.expo.dev/deploy/submit-to-app-stores/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/deploy/submit-to-app-stores/</review/overview>)[Share previews with your team](https://docs.expo.dev/deploy/submit-to-app-stores/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/deploy/submit-to-app-stores/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/deploy/submit-to-app-stores/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/deploy/submit-to-app-stores/</core-concepts>)[FAQ](https://docs.expo.dev/deploy/submit-to-app-stores/</faq>)
[Archive](https://docs.expo.dev/deploy/submit-to-app-stores/</archive>)[Expo Snack](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.dev/mailing-list/signup>)
# Submit to app stores
[Edit this page](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/github.com/expo/expo/edit/main/docs/pages/deploy/submit-to-app-stores.mdx> "Edit content of this page on GitHub")
Learn how to submit your app to Google Play Store and Apple App Store from the command line with EAS Submit.
[Edit this page](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/github.com/expo/expo/edit/main/docs/pages/deploy/submit-to-app-stores.mdx> "Edit content of this page on GitHub")
EAS Submit is a hosted service that allows uploading and submitting app binaries to the app stores using EAS CLI. This guide describes how to submit your app to the Google Play Store and Apple App Store using EAS Submit.
[![How to quickly publish to the App Store & Play Store with EAS Submit](https://i3.ytimg.com/vi/-KZjr576tuE/maxresdefault.jpg)How to quickly publish to the App Store & Play Store with EAS SubmitEAS Submit makes it easy to publish your apps to the App Store and Play Store with a simple command.](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/www.youtube.com/watch?v=-KZjr576tuE>)
## Google Play Store[](https://docs.expo.dev/deploy/submit-to-app-stores/<#google-play-store>)
### Prerequisites[](https://docs.expo.dev/deploy/submit-to-app-stores/<#prerequisites>)
  * A paid developer account is required — You can create a Google Play Developer account on the [Google Play Console sign-up page](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/play.google.com/apps/publish/signup/>).
  * Create a [Google Service Account](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/cloud.google.com/iam/docs/creating-managing-service-accounts>) and download its JSON private key.
  * Create an app on [Google Play Console](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/play.google.com/apps/publish/>) and upload your app manually at least once.
  * Native app binary signed for Google Play Store submission using EAS Build. If you haven't followed the previous guide, see [Build your project for app stores](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/build-project>) for more information.


> Although it's possible to upload any binary to the store, each submission is associated with an Expo project. That's why it's important to start a submission from inside your project's directory because [app config](https://docs.expo.dev/deploy/submit-to-app-stores/</workflow/configuration>) is defined inside that directory.
### Submit binary to Google Play Store[](https://docs.expo.dev/deploy/submit-to-app-stores/<#submit-binary-to-google-play-store>)
To submit the app binary to Google Play Store, run the following command from inside your project's directory:
Terminal
Copy
`- ``eas submit -p android`
The command will lead you through the process of submitting the app. It will perform the following steps:
  * Log in to your Expo account and ensure that your app project exists on EAS servers.
  * Prompt for the Android package name unless `android.package` is set in the app config.
  * Ask for which binary to submit. You can select one of the following:
    * The latest finished Android build for the project on EAS servers.
    * Specific build ID. It can be found on the [builds dashboard](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.dev/builds>).
    * Path to an .apk or .aab archive on your local filesystem.
    * URL to the app archive.
> This step can be skipped if one of the following CLI parameters is provided: `--latest`, `--id`, `--path`, or `--url`.
  * Unless `serviceAccountKeyPath` is provided in eas.json, you will be prompted for the path to your Google Services JSON key.
  * The summary of provided configuration is displayed and the submission process begins. The submission progress is displayed on the screen.
  * Your build should now be visible on Google Play Console. If something goes wrong, an appropriate message is displayed on the screen.


## Apple App Store[](https://docs.expo.dev/deploy/submit-to-app-stores/<#apple-app-store>)
### Prerequisites[](https://docs.expo.dev/deploy/submit-to-app-stores/<#prerequisites-1>)
  * A paid developer account is required to submit an app — you can create an Apple Developer account on the [Apple Developer Portal](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/developer.apple.com/account/>).
  * Native app binary signed for Apple App Store submission using EAS Build. If you haven't followed the previous guide, see [Build your project for app stores](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/build-project>) for more information.


### Submit binary to Apple App Store[](https://docs.expo.dev/deploy/submit-to-app-stores/<#submit-binary-to-apple-app-store>)
> If you have not generated an App Store Connect API Key yet, you can let EAS CLI take care of that for you by signing into your Apple Developer Program account and following the prompts. You can also upload your own [API Key](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.fyi/creating-asc-api-key>) or pass in an [Apple app-specific password](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.fyi/apple-app-specific-password>).
To submit the binary to the App Store, run the following command from inside your project's directory:
Terminal
Copy
`- ``eas submit -p ios`
The command will lead you through the process of submitting the app. It will perform the following steps:
  * Log in to your Expo account and ensure that your app project exists on EAS servers.
  * Ensure that your app exists on App Store Connect and its [Bundle Identifier](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.fyi/bundle-identifier>) is registered on Apple Developer Portal:
    * You will be asked to log in to your Apple Developer account and select your team. You can also provide this information in eas.json by setting `appleId` and `appleTeamId` in the submit profile. The Apple ID password has to be set with the `EXPO_APPLE_PASSWORD` environment variable.
    * The command will look for `ios.bundleIdentifier` in the app config.
    * If you are submitting your app for the first time, it will be automatically created. Unless `expo.name` in your app configuration is found or `appName` is provided in eas.json, you will be prompted for the app name. You can also specify your app's language and SKU using `language` and `sku` keys in eas.json. If you have never submitted any app before, you may also have to specify your company name with `companyName`.
> If you already have an App Store Connect app, this step can be skipped by providing the `ascAppId` in the submit profile. The [ASC App ID](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.fyi/asc-app-id>) can be found either on App Store Connect, or later during this command in the _Submission Summary_ table.
  * Ensure you have the proper credentials set up. If none can be found, you can let EAS CLI set some up for you.
Do you want to use your own credentials?[](https://docs.expo.dev/deploy/submit-to-app-stores/<#do-you-want-to-use-your-own>)
App Store Connect API Key: Create your own [API Key](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.fyi/creating-asc-api-key>) then set it with the `ascApiKeyPath`, `ascApiKeyIssuerId`, and `ascApiKeyId` fields in eas.json.
App Specific Password: Provide your [password](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.fyi/apple-app-specific-password>) and Apple ID Username by passing them in with the `EXPO_APPLE_APP_SPECIFIC_PASSWORD` environment variable and `appleId` field in eas.json, respectively.
  * Ask for which binary to submit. You can select one of the following:
    * The latest successful iOS build for the project on EAS servers.
    * Specific build ID. It can be found on the [builds dashboard](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.dev/builds>).
    * Path to an .ipa archive on your local filesystem.
    * URL to the app archive.
> This step can be skipped if one of the following CLI parameters is provided: `--latest`, `--id`, `--path`, or `--url`.
  * A summary of the provided configuration is displayed and the submission process begins. The submission progress is displayed on the screen.
  * Your build should now be visible on [App Store Connect](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/appstoreconnect.apple.com>). If something goes wrong, an appropriate message is displayed on the screen.


## Manual submission to app stores[](https://docs.expo.dev/deploy/submit-to-app-stores/<#manual-submission-to-app-stores>)
To learn more about manual app submission process to Google Play Store and Apple App Store, see the following:
[Manual first submission of an Android appFollow the steps from the FYI guide on manually submitting your app to Google Play Store for the first time.](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.fyi/first-android-submission>) [App submission using App Store ConnectLearn how to submit your app manually to Apple App Store or TestFlight using App Store Connect.](https://docs.expo.dev/deploy/submit-to-app-stores/</guides/local-app-production#app-submission-using-app-store-connect>)
## Next step[](https://docs.expo.dev/deploy/submit-to-app-stores/<#next-step>)
[EAS Submit configuration with eas.jsonLearn how to pre-configure your project using eas.json file with EAS Submit and more about Android or iOS specific options.](https://docs.expo.dev/deploy/submit-to-app-stores/</submit/eas-json>)
[Previous (Deploy)Build project for app stores](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/build-project>)[Next (Deploy)App stores metadata](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/app-stores-metadata>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/github.com/expo/expo/edit/main/docs/pages/deploy/submit-to-app-stores.mdx>)
  * Last updated on December 12, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/deploy/submit-to-app-stores/<https:/expo.dev/privacy>).
On this page
[Google Play Store](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/submit-to-app-stores/#google-play-store>)[Prerequisites](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/submit-to-app-stores/#prerequisites>)[Submit binary to Google Play Store](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/submit-to-app-stores/#submit-binary-to-google-play-store>)[Apple App Store](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/submit-to-app-stores/#apple-app-store>)[Prerequisites](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/submit-to-app-stores/#prerequisites-1>)[Submit binary to Apple App Store](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/submit-to-app-stores/#submit-binary-to-apple-app-store>)[Manual submission to app stores](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/submit-to-app-stores/#manual-submission-to-app-stores>)[Next step](https://docs.expo.dev/deploy/submit-to-app-stores/</deploy/submit-to-app-stores/#next-step>)
