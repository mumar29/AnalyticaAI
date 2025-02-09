[](https://docs.expo.dev/build/updates/<https:/expo.dev>)[Docs](https://docs.expo.dev/build/updates/</>)
[Blog](https://docs.expo.dev/build/updates/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/build/updates/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/build/updates/<https:/github.com/expo/expo>)[](https://docs.expo.dev/build/updates/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/build/updates/</>)[Guides](https://docs.expo.dev/build/updates/</guides/overview>)[EAS](https://docs.expo.dev/build/updates/</eas>)[Reference](https://docs.expo.dev/build/updates/</versions/latest>)[Learn](https://docs.expo.dev/build/updates/</tutorial/overview>)
[Introduction](https://docs.expo.dev/build/updates/</eas>)[Environment variables](https://docs.expo.dev/build/updates/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/build/updates/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/build/updates/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/build/updates/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/build/updates/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/build/updates/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/build/updates/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/build/updates/</build/introduction>)[Create your first build](https://docs.expo.dev/build/updates/</build/setup>)[Configure with eas.json](https://docs.expo.dev/build/updates/</build/eas-json>)[Internal distribution](https://docs.expo.dev/build/updates/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/build/updates/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/build/updates/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/build/updates/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/build/updates/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/build/updates/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/build/updates/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/build/updates/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/build/updates/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/build/updates/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/build/updates/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/build/updates/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/build/updates/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/build/updates/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/build/updates/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/build/updates/</submit/android>)[Submit to Apple](https://docs.expo.dev/build/updates/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/build/updates/</eas-update/introduction>)[Get started](https://docs.expo.dev/build/updates/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/build/updates/</eas/metadata>)[Get started](https://docs.expo.dev/build/updates/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/build/updates/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/build/updates/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/build/updates/</distribution/app-stores>)[App transfers](https://docs.expo.dev/build/updates/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/build/updates/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/build/updates/</eas/json>)[Webhooks](https://docs.expo.dev/build/updates/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/build/updates/</archive>)[Expo Snack](https://docs.expo.dev/build/updates/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/build/updates/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/build/updates/<https:/expo.dev/mailing-list/signup>)
# Using EAS Update
[Edit this page](https://docs.expo.dev/build/updates/<https:/github.com/expo/expo/edit/main/docs/pages/build/updates.mdx> "Edit content of this page on GitHub")
Learn how to use EAS Update with EAS Build.
[Edit this page](https://docs.expo.dev/build/updates/<https:/github.com/expo/expo/edit/main/docs/pages/build/updates.mdx> "Edit content of this page on GitHub")
EAS Build includes some special benefits for `expo-updates`[](https://docs.expo.dev/build/updates/</versions/latest/sdk/updates>) library. In particular, you can configure the `channel`[](https://docs.expo.dev/build/updates/</eas-update/how-it-works#distributing-builds>) property in eas.json and EAS Build will take care of updating it in your native project at build time.
This document covers concerns specific to using `expo-updates` library with EAS Build. For more general information about configuring the library with EAS Update, see [Getting started with EAS Update ](https://docs.expo.dev/build/updates/</eas-update/getting-started>).
## Setting the channel for a build profile[](https://docs.expo.dev/build/updates/<#setting-the-channel-for-a-build-profile>)
Each [build profile](https://docs.expo.dev/build/updates/</build/eas-json#build-profiles>) can be assigned to a channel, so updates for builds produced for a given profile will pull only those releases that are published to its channel.
The following example demonstrates how you might use the `"production"` channel for production builds, and the `"staging"` channel for test builds distributed with [internal distribution](https://docs.expo.dev/build/updates/</build/internal-distribution>).
eas.json
Copy
```
{
 "build": {
  "production": {
   "channel": "production"
  },
  "preview": {
   "channel": "staging",
   "distribution": "internal"
  }
 }
}

```

## Binary compatibility and runtime versions[](https://docs.expo.dev/build/updates/<#binary-compatibility-and-runtime-versions>)
Your native runtime may change on each build, depending on whether you modify the code in a way that changes the API contract with JavaScript. If you publish a JavaScript bundle to a binary with an incompatible native runtime (for example, a function that the JavaScript bundle expects to exist does not exist) then your app may not work as expected, or it may crash.
We recommend using a different [runtime version](https://docs.expo.dev/build/updates/</distribution/runtime-versions>) for each binary version of your app. Any time you change the native runtime (in managed apps, this happens when you add or remove a native library, or modify app.json), you should increment the runtime version.
## Previewing updates in development builds[](https://docs.expo.dev/build/updates/<#previewing-updates-in-development-builds>)
Updates published with the `runtimeVersion` field can't be loaded in Expo Go. Instead, you should use `expo-dev-client`[](https://docs.expo.dev/build/updates/</versions/latest/sdk/dev-client>) to create a development build.
## Environment variables and `eas update`[](https://docs.expo.dev/build/updates/<#environment-variables-and-eas-update>)
Environment variables set on the `env` field in build profiles are not available when you run `eas update`. Learn more about using [environment variables with EAS Update](https://docs.expo.dev/build/updates/</eas-update/environment-variables>).
[Previous (EAS Build)Automate submissions](https://docs.expo.dev/build/updates/</build/automate-submissions>)[Next (EAS Build)Trigger builds from CI](https://docs.expo.dev/build/updates/</build/building-on-ci>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/build/updates/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/build/updates/<https:/github.com/expo/expo/edit/main/docs/pages/build/updates.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/build/updates/<https:/expo.dev/privacy>).
On this page
[Setting the channel for a build profile](https://docs.expo.dev/build/updates/</build/updates/#setting-the-channel-for-a-build-profile>)[Binary compatibility and runtime versions](https://docs.expo.dev/build/updates/</build/updates/#binary-compatibility-and-runtime-versions>)[Previewing updates in development builds](https://docs.expo.dev/build/updates/</build/updates/#previewing-updates-in-development-builds>)[Environment variables and eas update](https://docs.expo.dev/build/updates/</build/updates/#environment-variables-and-eas-update>)
