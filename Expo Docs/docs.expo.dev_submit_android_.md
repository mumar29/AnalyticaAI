[](https://docs.expo.dev/submit/android/<https:/expo.dev>)[Docs](https://docs.expo.dev/submit/android/</>)
[Blog](https://docs.expo.dev/submit/android/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/submit/android/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/submit/android/<https:/github.com/expo/expo>)[](https://docs.expo.dev/submit/android/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/submit/android/</>)[Guides](https://docs.expo.dev/submit/android/</guides/overview>)[EAS](https://docs.expo.dev/submit/android/</eas>)[Reference](https://docs.expo.dev/submit/android/</versions/latest>)[Learn](https://docs.expo.dev/submit/android/</tutorial/overview>)
[Introduction](https://docs.expo.dev/submit/android/</eas>)[Environment variables](https://docs.expo.dev/submit/android/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/submit/android/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/submit/android/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/submit/android/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/submit/android/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/submit/android/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/submit/android/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/submit/android/</build/introduction>)[Create your first build](https://docs.expo.dev/submit/android/</build/setup>)[Configure with eas.json](https://docs.expo.dev/submit/android/</build/eas-json>)[Internal distribution](https://docs.expo.dev/submit/android/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/submit/android/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/submit/android/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/submit/android/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/submit/android/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/submit/android/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/submit/android/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/submit/android/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/submit/android/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/submit/android/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/submit/android/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/submit/android/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/submit/android/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/submit/android/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/submit/android/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/submit/android/</submit/android>)[Submit to Apple](https://docs.expo.dev/submit/android/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/submit/android/</eas-update/introduction>)[Get started](https://docs.expo.dev/submit/android/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/submit/android/</eas/metadata>)[Get started](https://docs.expo.dev/submit/android/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/submit/android/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/submit/android/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/submit/android/</distribution/app-stores>)[App transfers](https://docs.expo.dev/submit/android/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/submit/android/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/submit/android/</eas/json>)[Webhooks](https://docs.expo.dev/submit/android/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/submit/android/</archive>)[Expo Snack](https://docs.expo.dev/submit/android/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/submit/android/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/submit/android/<https:/expo.dev/mailing-list/signup>)
# Submit to the Google Play Store
[Edit this page](https://docs.expo.dev/submit/android/<https:/github.com/expo/expo/edit/main/docs/pages/submit/android.mdx> "Edit content of this page on GitHub")
Learn how to submit your app to the Google Play Store from your computer and CI.
[Edit this page](https://docs.expo.dev/submit/android/<https:/github.com/expo/expo/edit/main/docs/pages/submit/android.mdx> "Edit content of this page on GitHub")
This guide outlines how to submit your app to the Google Play Store from your own computer and from CI.
## Prerequisites[](https://docs.expo.dev/submit/android/<#prerequisites>)
  * A paid developer account is required — You can create a Google Play Developer account on the [Google Play Console sign-up page](https://docs.expo.dev/submit/android/<https:/play.google.com/apps/publish/signup/>).
  * You have to create a [Google Service Account](https://docs.expo.dev/submit/android/<https:/expo.fyi/creating-google-service-account>) and download its JSON private key.
  * After that, you'll have to create an app on [Google Play Console](https://docs.expo.dev/submit/android/<https:/play.google.com/apps/publish/>) and upload your app manually at least once.
  * You will also need to have EAS CLI installed and authenticated with your Expo account: 
Terminal
Copy
`- ``npm install -g eas-cli && eas login`


### Creating a Google Service Account[](https://docs.expo.dev/submit/android/<#creating-a-google-service-account>)
For more information, see [expo.fyi/creating-google-service-account](https://docs.expo.dev/submit/android/<https:/expo.fyi/creating-google-service-account>).
### Manually uploading your app for the first time[](https://docs.expo.dev/submit/android/<#manually-uploading-your-app-for-the-first-time>)
Before using `eas submit -p android` for uploading your builds, you have to upload your app manually at least once. This is a limitation of the Google Play Store API.
For more information, see [expo.fyi/first-android-submission](https://docs.expo.dev/submit/android/<https:/expo.fyi/first-android-submission>).
1
## Build a standalone app[](https://docs.expo.dev/submit/android/<#build-a-standalone-app>)
You'll need a native app binary signed for store submission. You can either use [EAS Build](https://docs.expo.dev/submit/android/</build/introduction>) or do it on your own.
2
## Start the submission[](https://docs.expo.dev/submit/android/<#start-the-submission>)
To submit the binary to the Play Store, run `eas submit -p android` from inside your project directory. The command will lead you step by step through the process of submitting the app. See the [Configuration with eas.json](https://docs.expo.dev/submit/android/</build/eas-json>) page to learn how to pre-configure your submission.
> Although it's possible to upload any binary to the store, each submission is associated with an Expo project. That's why it's important to start a submission from inside your project's directory because [app config](https://docs.expo.dev/submit/android/</workflow/configuration>) is defined inside that directory.
To upload your Android app to the Google Play Store, run `eas submit --platform android` and follow the instructions on the screen.
The command will perform the following steps:
  * Log in to your Expo account and ensure that your app project exists on EAS servers.
  * Prompt for the Android package name unless `android.package` is set in the app config.
  * Ask for which binary to submit. You can select one of the following:
    * The latest finished Android build for the project on EAS servers.
    * Specific build ID. It can be found on the [builds dashboard](https://docs.expo.dev/submit/android/<https:/expo.dev/builds>).
    * Path to an .apk or .aab archive on your local filesystem.
    * URL to the app archive.
> This step can be skipped if one of the following CLI parameters is provided: `--latest`, `--id`, `--path`, or `--url`.
  * Unless `serviceAccountKeyPath` is provided in eas.json, you will be prompted for the path to your Google Services JSON key.
  * The summary of provided configuration is displayed and the submission process begins. The submission progress is displayed on the screen.
  * Your build should now be visible on Google Play Console. If something goes wrong, an appropriate message is displayed on the screen.


## Submitting your app using CI[](https://docs.expo.dev/submit/android/<#submitting-your-app-using-ci>)
The `eas submit` command can perform submissions from a CI environment. All you have to do is ensure that all required information is provided with eas.json and environment variables. Mainly, providing the archive source (`--latest`, `--id`, `--path`, or `--url`) is essential. Also, make sure that the Android package name is present in your [app config file](https://docs.expo.dev/submit/android/</workflow/configuration>).
For Android submissions, you must provide the path to your Google Services JSON key using the `serviceAccountKeyPath` key in eas.json. You may also find the `track` and `releaseStatus` parameters useful.
Example usage:
Terminal
Copy
`- ``eas submit -p android --profile foobar`
## Automating submissions[](https://docs.expo.dev/submit/android/<#automating-submissions>)
To learn how to automatically submit your app after a successful build, refer to the [Automating submissions](https://docs.expo.dev/submit/android/</build/automate-submissions>).
[Previous (EAS Submit)Configure with eas.json](https://docs.expo.dev/submit/android/</submit/eas-json>)[Next (EAS Submit)Submit to Apple](https://docs.expo.dev/submit/android/</submit/ios>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/submit/android/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/submit/android/<https:/github.com/expo/expo/edit/main/docs/pages/submit/android.mdx>)
  * Last updated on August 05, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/submit/android/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/submit/android/</submit/android/#prerequisites>)[Creating a Google Service Account](https://docs.expo.dev/submit/android/</submit/android/#creating-a-google-service-account>)[Manually uploading your app for the first time](https://docs.expo.dev/submit/android/</submit/android/#manually-uploading-your-app-for-the-first-time>)[Build a standalone app](https://docs.expo.dev/submit/android/</submit/android/#build-a-standalone-app>)[Start the submission](https://docs.expo.dev/submit/android/</submit/android/#start-the-submission>)[Submitting your app using CI](https://docs.expo.dev/submit/android/</submit/android/#submitting-your-app-using-ci>)[Automating submissions](https://docs.expo.dev/submit/android/</submit/android/#automating-submissions>)
