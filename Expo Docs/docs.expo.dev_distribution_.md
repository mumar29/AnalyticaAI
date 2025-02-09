[](https://docs.expo.dev/distribution/<https:/expo.dev>)[Docs](https://docs.expo.dev/distribution/</>)
[Blog](https://docs.expo.dev/distribution/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/distribution/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/distribution/<https:/github.com/expo/expo>)[](https://docs.expo.dev/distribution/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/distribution/</>)[Guides](https://docs.expo.dev/distribution/</guides/overview>)[EAS](https://docs.expo.dev/distribution/</eas>)[Reference](https://docs.expo.dev/distribution/</versions/latest>)[Learn](https://docs.expo.dev/distribution/</tutorial/overview>)
[Introduction](https://docs.expo.dev/distribution/</eas>)[Environment variables](https://docs.expo.dev/distribution/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/distribution/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/distribution/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/distribution/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/distribution/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/distribution/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/distribution/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/distribution/</build/introduction>)[Create your first build](https://docs.expo.dev/distribution/</build/setup>)[Configure with eas.json](https://docs.expo.dev/distribution/</build/eas-json>)[Internal distribution](https://docs.expo.dev/distribution/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/distribution/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/distribution/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/distribution/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/distribution/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/distribution/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/distribution/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/distribution/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/distribution/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/distribution/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/distribution/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/distribution/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/distribution/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/distribution/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/distribution/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/distribution/</submit/android>)[Submit to Apple](https://docs.expo.dev/distribution/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/distribution/</eas-update/introduction>)[Get started](https://docs.expo.dev/distribution/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/distribution/</eas/metadata>)[Get started](https://docs.expo.dev/distribution/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/distribution/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/distribution/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/distribution/</distribution/app-stores>)[App transfers](https://docs.expo.dev/distribution/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/distribution/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/distribution/</eas/json>)[Webhooks](https://docs.expo.dev/distribution/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/distribution/</archive>)[Expo Snack](https://docs.expo.dev/distribution/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/distribution/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/distribution/<https:/expo.dev/mailing-list/signup>)
# Distribution: Overview
[Edit this page](https://docs.expo.dev/distribution/<https:/github.com/expo/expo/edit/main/docs/pages/distribution/introduction.mdx> "Edit content of this page on GitHub")
An overview of submitting an app to the app stores or with the internal distribution.
[Edit this page](https://docs.expo.dev/distribution/<https:/github.com/expo/expo/edit/main/docs/pages/distribution/introduction.mdx> "Edit content of this page on GitHub")
Get your app into the hands of users by submitting it to the app stores or with [Internal Distribution](https://docs.expo.dev/distribution/</build/internal-distribution>).
Terminal
Copy
`# Install the CLI`
`- ``npm i -g eas-cli`
`# Build and submit your app`
`- ``eas build --auto-submit`
`# OR -- Submit existing binaries`
`- ``eas submit`
You can run `eas build --auto-submit` with [EAS CLI](https://docs.expo.dev/distribution/</eas>) to build your app and automatically upload the binary for distribution on the Apple App Store and Google Play Store.
This automatically manages all native code signing for Android and iOS for any React Native app. Advanced features such as payments, notifications, universal links, and iCloud can be automatically enabled based on your [config plugins](https://docs.expo.dev/distribution/</config-plugins/introduction>) or native entitlements, meaning no more wrestling with slow portals to get libraries set up correctly.
### Get started[](https://docs.expo.dev/distribution/<#get-started>)
[Submit to the Google Play StoreLearn how to submit an Android app to the Google Play Store.](https://docs.expo.dev/distribution/</submit/android>) [Submit to the Apple App StoreLearn how to submit an iOS or an iPadOS app to the Apple App Store from any operating system.](https://docs.expo.dev/distribution/</submit/ios>) [Internal DistributionShare your mobile app internally with testers using AdHoc builds.](https://docs.expo.dev/distribution/</build/internal-distribution>) [Publish websitesExport your website and upload to any web host.](https://docs.expo.dev/distribution/</guides/publishing-websites>) [OTA updatesSend over-the-air updates to your users instantly.](https://docs.expo.dev/distribution/</eas-update/introduction>)
[Previous (EAS Insights)Introduction](https://docs.expo.dev/distribution/</eas-insights/introduction>)[Next (Distribution)App stores best practices](https://docs.expo.dev/distribution/</distribution/app-stores>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/distribution/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/distribution/<https:/github.com/expo/expo/edit/main/docs/pages/distribution/introduction.mdx>)
  * Last updated on December 19, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/distribution/<https:/expo.dev/privacy>).
