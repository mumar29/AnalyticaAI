[](https://docs.expo.dev/eas-update/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-update/</>)
[Blog](https://docs.expo.dev/eas-update/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-update/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-update/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-update/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-update/</>)[Guides](https://docs.expo.dev/eas-update/</guides/overview>)[EAS](https://docs.expo.dev/eas-update/</eas>)[Reference](https://docs.expo.dev/eas-update/</versions/latest>)[Learn](https://docs.expo.dev/eas-update/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-update/</eas>)[Environment variables](https://docs.expo.dev/eas-update/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-update/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-update/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-update/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-update/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-update/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-update/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-update/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-update/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-update/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-update/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-update/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-update/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-update/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-update/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-update/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-update/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-update/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-update/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-update/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-update/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-update/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-update/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-update/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-update/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-update/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-update/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-update/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-update/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-update/</eas/metadata>)[Get started](https://docs.expo.dev/eas-update/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-update/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-update/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-update/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-update/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-update/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-update/</eas/json>)[Webhooks](https://docs.expo.dev/eas-update/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-update/</archive>)[Expo Snack](https://docs.expo.dev/eas-update/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-update/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-update/<https:/expo.dev/mailing-list/signup>)
# EAS Update
[Edit this page](https://docs.expo.dev/eas-update/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/introduction.mdx> "Edit content of this page on GitHub")
An introduction to EAS Update which is a hosted service for projects using the expo-updates library.
[Edit this page](https://docs.expo.dev/eas-update/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/introduction.mdx> "Edit content of this page on GitHub")
EAS Update is a hosted service that serves updates for projects using the `expo-updates`[](https://docs.expo.dev/eas-update/</versions/latest/sdk/updates>) library.
EAS Update makes fixing small bugs and pushing quick fixes a snap in between app store submissions. It accomplishes this by enabling an app to update its own non-native pieces (such as JS, styling, and images) over-the-air.
All apps that include the `expo-updates` library have the ability to receive updates.
  * To start using EAS Update, continue to the [Getting Started](https://docs.expo.dev/eas-update/</eas-update/getting-started>) guide.
  * For a complete tutorial of using EAS Update with other EAS services, refer to the [EAS Tutorial](https://docs.expo.dev/eas-update/</tutorial/eas/introduction>).


## JS API for update management[](https://docs.expo.dev/eas-update/<#js-api-for-update-management>)
![Updates JS API](https://docs.expo.dev/static/images/eas-update/frontpage/critical-update.png)
The updates [JavaScript API](https://docs.expo.dev/eas-update/</versions/latest/sdk/updates>) includes a React hook called `useUpdates()`. This hook provides detailed information about the currently running update and any new updates that are available or have been downloaded. In addition, you can view any errors that were encountered during the update process to help you debug any issues while the app is attempting to update.
The API also provides methods such as `checkForUpdateAsync()` and `fetchUpdateAsync()` which allows you to control when your app checks for and downloads updates.
## Insight tracking[](https://docs.expo.dev/eas-update/<#insight-tracking>)
![Website dashboard deployment insights](https://docs.expo.dev/static/images/eas-update/frontpage/insights.png)
You'll get a [deployments dashboard](https://docs.expo.dev/eas-update/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/deployments>) that helps visualize which updates are being sent to builds. Updates work in concert with [insights](https://docs.expo.dev/eas-update/</eas-insights/introduction>) to provide data on the adoption rates of your updates with your users.
## Republish for reverting mistakes[](https://docs.expo.dev/eas-update/<#republish-for-reverting-mistakes>)
![Republishing button on an update](https://docs.expo.dev/static/images/eas-update/frontpage/republish.png)
If an update isn't performing as expected, you can [republish](https://docs.expo.dev/eas-update/</eas-update/eas-cli#republish-a-previous-update-within-a-branch>) a previous, stable version on top of the problematic one, much like a new "commit" in version control systems.
## Get started[](https://docs.expo.dev/eas-update/<#get-started>)
[Get started with EAS UpdateLearn how to get started with the setup required to configure and use EAS Update in your project.](https://docs.expo.dev/eas-update/</eas-update/getting-started>) [Publish an updateLearn how to publish an update to a specific branch with EAS Update.](https://docs.expo.dev/eas-update/</eas-update/getting-started#publish-an-update>) [Preview updatesView your teammate's changes with EAS Update.](https://docs.expo.dev/eas-update/</eas-update/develop-faster>) [Use GitHub ActionsPublish an update and preview with a QR code after a commit.](https://docs.expo.dev/eas-update/</eas-update/github-actions>) [Migrate from CodePushLearn how to migrate from CodePush to EAS Update.](https://docs.expo.dev/eas-update/</eas-update/codepush>)
[Previous (EAS Submit)Submit to Apple](https://docs.expo.dev/eas-update/</submit/ios>)[Next (EAS Update)Get started](https://docs.expo.dev/eas-update/</eas-update/getting-started>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-update/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-update/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/introduction.mdx>)
  * Last updated on December 04, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-update/<https:/expo.dev/privacy>).
On this page
[JS API for update management](https://docs.expo.dev/eas-update/</eas-update/introduction/#js-api-for-update-management>)[Insight tracking](https://docs.expo.dev/eas-update/</eas-update/introduction/#insight-tracking>)[Republish for reverting mistakes](https://docs.expo.dev/eas-update/</eas-update/introduction/#republish-for-reverting-mistakes>)[Get started](https://docs.expo.dev/eas-update/</eas-update/introduction/#get-started>)
