[](https://docs.expo.dev/build/orbit/<https:/expo.dev>)[Docs](https://docs.expo.dev/build/orbit/</>)
[Blog](https://docs.expo.dev/build/orbit/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/build/orbit/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/build/orbit/<https:/github.com/expo/expo>)[](https://docs.expo.dev/build/orbit/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/build/orbit/</>)[Guides](https://docs.expo.dev/build/orbit/</guides/overview>)[EAS](https://docs.expo.dev/build/orbit/</eas>)[Reference](https://docs.expo.dev/build/orbit/</versions/latest>)[Learn](https://docs.expo.dev/build/orbit/</tutorial/overview>)
[Introduction](https://docs.expo.dev/build/orbit/</eas>)[Environment variables](https://docs.expo.dev/build/orbit/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/build/orbit/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/build/orbit/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/build/orbit/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/build/orbit/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/build/orbit/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/build/orbit/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/build/orbit/</build/introduction>)[Create your first build](https://docs.expo.dev/build/orbit/</build/setup>)[Configure with eas.json](https://docs.expo.dev/build/orbit/</build/eas-json>)[Internal distribution](https://docs.expo.dev/build/orbit/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/build/orbit/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/build/orbit/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/build/orbit/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/build/orbit/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/build/orbit/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/build/orbit/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/build/orbit/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/build/orbit/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/build/orbit/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/build/orbit/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/build/orbit/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/build/orbit/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/build/orbit/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/build/orbit/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/build/orbit/</submit/android>)[Submit to Apple](https://docs.expo.dev/build/orbit/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/build/orbit/</eas-update/introduction>)[Get started](https://docs.expo.dev/build/orbit/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/build/orbit/</eas/metadata>)[Get started](https://docs.expo.dev/build/orbit/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/build/orbit/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/build/orbit/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/build/orbit/</distribution/app-stores>)[App transfers](https://docs.expo.dev/build/orbit/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/build/orbit/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/build/orbit/</eas/json>)[Webhooks](https://docs.expo.dev/build/orbit/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/build/orbit/</archive>)[Expo Snack](https://docs.expo.dev/build/orbit/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/build/orbit/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/build/orbit/<https:/expo.dev/mailing-list/signup>)
# Expo Orbit
[Edit this page](https://docs.expo.dev/build/orbit/<https:/github.com/expo/expo/edit/main/docs/pages/build/orbit.mdx> "Edit content of this page on GitHub")
Accelerate your development workflow with one-click build and update launches and simulator management.
[Edit this page](https://docs.expo.dev/build/orbit/<https:/github.com/expo/expo/edit/main/docs/pages/build/orbit.mdx> "Edit content of this page on GitHub")
[Expo Orbit](https://docs.expo.dev/build/orbit/<https:/expo.dev/orbit>) for macOS and Windows enables faster to install and launch builds or updates from EAS, local files, or run Snack projects, on simulators and physical devices.
## Why Orbit[](https://docs.expo.dev/build/orbit/<#why-orbit>)
Before Orbit, installing builds or updates from EAS (on Android and iOS physical devices or emulator/simulator) or running Snack projects on simulators was manual. You had to run `eas build:run` command and select a build for your chosen device or download the archive and then drag and drop it to the simulator (in the case of iOS). Also, for Snack projects, additional steps included installing Expo Go on the virtual device, logging in, and then selecting the Snack from the list. Orbit makes all of these steps as seamless as possible.
## Highlights[](https://docs.expo.dev/build/orbit/<#highlights>)
  * List and launch simulators, including running Android emulators without audio.
  * Install and launch builds from EAS on simulators and real devices in one click.
  * [Install and open updates from EAS](https://docs.expo.dev/build/orbit/</review/with-orbit>) on Android Emulators or iOS Simulators.
  * Launch Snack projects in your simulators in one click.
  * Install and launch apps from local files using Finder or drag and drop a file into the menu bar app. Orbit supports any Android .apk, iOS Simulator compatible .app, or ad hoc signed apps.
  * See pinned projects from your [EAS dashboard](https://docs.expo.dev/build/orbit/<https:/expo.dev>) and quickly launch your latest builds.


## Installation[](https://docs.expo.dev/build/orbit/<#installation>)
> Orbit relies on the Android SDK on both macOS and Windows and `xcrun` for device management only on macOS, which requires setting up both [Android Studio](https://docs.expo.dev/build/orbit/</workflow/android-studio-emulator>) and [Xcode](https://docs.expo.dev/build/orbit/</workflow/ios-simulator>).
macOS
Windows
You can download Orbit with Homebrew for macOS, or directly from the [GitHub releases](https://docs.expo.dev/build/orbit/<https:/github.com/expo/orbit/releases>).
Terminal
Copy
`- ``brew install expo-orbit`
If you want Orbit to start when you log in automatically, click on the Orbit icon in the menu bar, then Settings and select the Launch on Login option.
> Note: Orbit for Windows is in preview and is only compatible with x64 and x86 machines. Compatibility for other architectures will be added in the future.
You can download Orbit for Windows directly from the [GitHub releases](https://docs.expo.dev/build/orbit/<https:/github.com/expo/orbit/releases>).
[Previous (EAS Build)Trigger builds from GitHub App](https://docs.expo.dev/build/orbit/</build/building-from-github>)[Next (EAS Build - App Signing)App credentials](https://docs.expo.dev/build/orbit/</app-signing/app-credentials>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/build/orbit/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/build/orbit/<https:/github.com/expo/expo/edit/main/docs/pages/build/orbit.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/build/orbit/<https:/expo.dev/privacy>).
On this page
[Why Orbit](https://docs.expo.dev/build/orbit/</build/orbit/#why-orbit>)[Highlights](https://docs.expo.dev/build/orbit/</build/orbit/#highlights>)[Installation](https://docs.expo.dev/build/orbit/</build/orbit/#installation>)
