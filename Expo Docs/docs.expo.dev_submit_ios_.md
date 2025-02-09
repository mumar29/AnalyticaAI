[](https://docs.expo.dev/submit/ios/<https:/expo.dev>)[Docs](https://docs.expo.dev/submit/ios/</>)
[Blog](https://docs.expo.dev/submit/ios/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/submit/ios/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/submit/ios/<https:/github.com/expo/expo>)[](https://docs.expo.dev/submit/ios/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/submit/ios/</>)[Guides](https://docs.expo.dev/submit/ios/</guides/overview>)[EAS](https://docs.expo.dev/submit/ios/</eas>)[Reference](https://docs.expo.dev/submit/ios/</versions/latest>)[Learn](https://docs.expo.dev/submit/ios/</tutorial/overview>)
[Introduction](https://docs.expo.dev/submit/ios/</eas>)[Environment variables](https://docs.expo.dev/submit/ios/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/submit/ios/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/submit/ios/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/submit/ios/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/submit/ios/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/submit/ios/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/submit/ios/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/submit/ios/</build/introduction>)[Create your first build](https://docs.expo.dev/submit/ios/</build/setup>)[Configure with eas.json](https://docs.expo.dev/submit/ios/</build/eas-json>)[Internal distribution](https://docs.expo.dev/submit/ios/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/submit/ios/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/submit/ios/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/submit/ios/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/submit/ios/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/submit/ios/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/submit/ios/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/submit/ios/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/submit/ios/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/submit/ios/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/submit/ios/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/submit/ios/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/submit/ios/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/submit/ios/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/submit/ios/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/submit/ios/</submit/android>)[Submit to Apple](https://docs.expo.dev/submit/ios/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/submit/ios/</eas-update/introduction>)[Get started](https://docs.expo.dev/submit/ios/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/submit/ios/</eas/metadata>)[Get started](https://docs.expo.dev/submit/ios/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/submit/ios/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/submit/ios/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/submit/ios/</distribution/app-stores>)[App transfers](https://docs.expo.dev/submit/ios/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/submit/ios/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/submit/ios/</eas/json>)[Webhooks](https://docs.expo.dev/submit/ios/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/submit/ios/</archive>)[Expo Snack](https://docs.expo.dev/submit/ios/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/submit/ios/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/submit/ios/<https:/expo.dev/mailing-list/signup>)
# Submit to the Apple App Store
[Edit this page](https://docs.expo.dev/submit/ios/<https:/github.com/expo/expo/edit/main/docs/pages/submit/ios.mdx> "Edit content of this page on GitHub")
Learn how to submit your app to the Apple App Store from your computer and CI.
[Edit this page](https://docs.expo.dev/submit/ios/<https:/github.com/expo/expo/edit/main/docs/pages/submit/ios.mdx> "Edit content of this page on GitHub")
This guide outlines how to submit your app to the Apple App Store from your own computer and from CI.
## Prerequisites[](https://docs.expo.dev/submit/ios/<#prerequisites>)
  * A paid developer account is required to submit an app — you can create an Apple Developer account on the [Apple Developer Portal](https://docs.expo.dev/submit/ios/<https:/developer.apple.com/account/>).
  * You will also need to have EAS CLI installed and authenticated with your Expo account: 
Terminal
Copy
`- ``npm install -g eas-cli && eas login`


1
## Build a standalone app[](https://docs.expo.dev/submit/ios/<#build-a-standalone-app>)
You'll need a native app binary signed for store submission. You can either use [EAS Build](https://docs.expo.dev/submit/ios/</build/introduction>) or do it on your own.
2
## Start the submission[](https://docs.expo.dev/submit/ios/<#start-the-submission>)
To submit the binary to the App Store, run `eas submit -p ios` from inside your project directory. The command will lead you step by step through the process of submitting the app. See the [Configuration with eas.json](https://docs.expo.dev/submit/ios/</build/eas-json>) page to learn how to pre-configure your submission.
> Although it's possible to upload any binary to the store, each submission is associated with an Expo project. That's why it's important to start a submission from inside your project's directory because [app config](https://docs.expo.dev/submit/ios/</workflow/configuration>) is defined inside that directory.
If you have not generated an App Store Connect API Key yet, you can let EAS CLI take care of that for you by signing into your Apple Developer Program account and following the prompts. You can also upload your own [API Key](https://docs.expo.dev/submit/ios/<https:/expo.fyi/creating-asc-api-key>) or pass in an [Apple app-specific password](https://docs.expo.dev/submit/ios/<https:/expo.fyi/apple-app-specific-password>).
To upload your iOS app to the Apple App Store, run `eas submit --platform ios` and follow the instructions on the screen.
The command will perform the following steps:
  * Log in to your Expo account and ensure that your app project exists on EAS servers.
  * Ensure that your app exists on App Store Connect and its [Bundle Identifier](https://docs.expo.dev/submit/ios/<https:/expo.fyi/bundle-identifier>) is registered on Apple Developer Portal:
    * You will be asked to log in to your Apple Developer account and select your team. You can also provide this information in eas.json by setting `appleId` and `appleTeamId` in the submit profile. The Apple ID password has to be set with the `EXPO_APPLE_PASSWORD` environment variable.
    * The command will look for `ios.bundleIdentifier` in the app config.
    * If you are submitting your app for the first time, it will be automatically created. Unless `expo.name` in your app configuration is found or `appName` is provided in eas.json, you will be prompted for the app name. You can also specify your app's language and SKU using `language` and `sku` keys in eas.json. If you have never submitted any app before, you may also have to specify your company name with `companyName`.
> If you already have an App Store Connect app, this step can be skipped by providing the `ascAppId` in the submit profile. The [ASC App ID](https://docs.expo.dev/submit/ios/<https:/expo.fyi/asc-app-id>) can be found either on App Store Connect, or later during this command in the _Submission Summary_ table.
  * Ensure you have the proper credentials set up. If none can be found, you can let EAS CLI set some up for you.
Do you want to use your own credentials?[](https://docs.expo.dev/submit/ios/<#do-you-want-to-use-your-own>)
App Store Connect API Key: Create your own [API Key](https://docs.expo.dev/submit/ios/<https:/expo.fyi/creating-asc-api-key>) then set it with the `ascApiKeyPath`, `ascApiKeyIssuerId`, and `ascApiKeyId` fields in eas.json.
App Specific Password: Provide your [password](https://docs.expo.dev/submit/ios/<https:/expo.fyi/apple-app-specific-password>) and Apple ID Username by passing them in with the `EXPO_APPLE_APP_SPECIFIC_PASSWORD` environment variable and `appleId` field in eas.json, respectively.
  * Ask for which binary to submit. You can select one of the following:
    * The latest successful iOS build for the project on EAS servers.
    * Specific build ID. It can be found on the [builds dashboard](https://docs.expo.dev/submit/ios/<https:/expo.dev/builds>).
    * Path to an .ipa archive on your local filesystem.
    * URL to the app archive.
> This step can be skipped if one of the following CLI parameters is provided: `--latest`, `--id`, `--path`, or `--url`.
  * A summary of the provided configuration is displayed and the submission process begins. The submission progress is displayed on the screen.
  * Your build should now be visible on [App Store Connect](https://docs.expo.dev/submit/ios/<https:/appstoreconnect.apple.com>). If something goes wrong, an appropriate message is displayed on the screen.


## Submitting your app using CI[](https://docs.expo.dev/submit/ios/<#submitting-your-app-using-ci>)
The `eas submit` command is able to perform submissions from a CI environment. All you have to do is ensure that all required information is provided with eas.json and environment variables.
You must do the following:
  * Provide the archive source (`--latest`, `--id`, `--path`, or `--url`).
  * Make sure that the iOS Bundle Identifier is present in your [app config file](https://docs.expo.dev/submit/ios/</workflow/configuration>).
  * Set the ASC App ID (`ascAppId` in eas.json). The ASC App ID is required to skip the Apple Developer log-in process, which will likely not be possible on CI due to the 2FA prompt.
  * Set up your App Store Connect API Key with EAS Servers. You can check the state of your credentials by running `eas credentials` or by running `eas submit -p ios` interactively.
Do you want to use your own credentials?[](https://docs.expo.dev/submit/ios/<#do-you-want-to-use-your-own-1>)
App Store Connect API Key: Create your own [API Key](https://docs.expo.dev/submit/ios/<https:/expo.fyi/creating-asc-api-key>) then set it with the `ascApiKeyPath`, `ascApiKeyIssuerId`, and `ascApiKeyId` fields in eas.json.
App Specific Password: Provide your [password](https://docs.expo.dev/submit/ios/<https:/expo.fyi/apple-app-specific-password>) and Apple ID Username by passing them in with the `EXPO_APPLE_APP_SPECIFIC_PASSWORD` environment variable and `appleId` field in eas.json, respectively.


Example usage:
Terminal
Copy
`- ``eas submit -p ios --latest --profile foobar`
## Manual submissions[](https://docs.expo.dev/submit/ios/<#manual-submissions>)
If you ever need to submit your build without going through EAS Submit, for example, if the service is temporarily unavailable for maintenance, you can upload to the Apple App Store manually from a macOS device.
How to upload to the Apple App Store manually from a macOS device[](https://docs.expo.dev/submit/ios/<#how-to-upload-to-the-apple-app>)
#### Creating an entry on App Store Connect[](https://docs.expo.dev/submit/ios/<#creating-an-entry-on-app-store-connect>)
Start by creating an app profile in App Store Connect, if you haven't already:
  1. Go to [App Store Connect](https://docs.expo.dev/submit/ios/<https:/appstoreconnect.apple.com/apps>) and sign in. Make sure you have accepted any legal notices or terms at the top of the page.
  2. Click the blue plus button by the Apps header, then click New App.
  3. Add your app's name, language, bundle identifier, and SKU (this isn't seen by end users, it can be any unique string. A common choice is your app's bundle identifier, for example, "com.company.my-app").
  4. Click Create. If this succeeds, then you have created your application record.


#### Uploading with Transporter[](https://docs.expo.dev/submit/ios/<#uploading-with-transporter>)
Finally, you need to upload the IPA to the Apple App Store.
  1. Download [Transporter from the App Store](https://docs.expo.dev/submit/ios/<https:/apps.apple.com/app/transporter/id1450874784>).
  2. Sign in with your Apple ID.
  3. Add the build either by dragging the IPA file directly into the Transporter window or by selecting it from the file dialog opened with + or Add App button.
  4. Submit it by clicking the Deliver button.


This process can take a few minutes, then another 10-15 minutes of processing on Apple's servers. Afterward, you can check the status of your binary in [App Store Connect](https://docs.expo.dev/submit/ios/<https:/appstoreconnect.apple.com/apps>):
  1. Visit [App Store Connect](https://docs.expo.dev/submit/ios/<https:/appstoreconnect.apple.com/apps>), select My Apps, and click on the app entry you created earlier.
  2. Scroll down to the Build section and select your newly uploaded binary.


## Automating submissions[](https://docs.expo.dev/submit/ios/<#automating-submissions>)
To learn how to automatically submit your app after a successful build, refer to the [Automating submissions](https://docs.expo.dev/submit/ios/</build/automate-submissions>).
[Previous (EAS Submit)Submit to Google](https://docs.expo.dev/submit/ios/</submit/android>)[Next (EAS Update)Introduction](https://docs.expo.dev/submit/ios/</eas-update/introduction>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/submit/ios/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/submit/ios/<https:/github.com/expo/expo/edit/main/docs/pages/submit/ios.mdx>)
  * Last updated on August 05, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/submit/ios/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/submit/ios/</submit/ios/#prerequisites>)[Build a standalone app](https://docs.expo.dev/submit/ios/</submit/ios/#build-a-standalone-app>)[Start the submission](https://docs.expo.dev/submit/ios/</submit/ios/#start-the-submission>)[Submitting your app using CI](https://docs.expo.dev/submit/ios/</submit/ios/#submitting-your-app-using-ci>)[Manual submissions](https://docs.expo.dev/submit/ios/</submit/ios/#manual-submissions>)[Automating submissions](https://docs.expo.dev/submit/ios/</submit/ios/#automating-submissions>)
