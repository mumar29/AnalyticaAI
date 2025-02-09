[](https://docs.expo.dev/eas-update/develop-faster/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-update/develop-faster/</>)
[Blog](https://docs.expo.dev/eas-update/develop-faster/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-update/develop-faster/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-update/develop-faster/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-update/develop-faster/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-update/develop-faster/</>)[Guides](https://docs.expo.dev/eas-update/develop-faster/</guides/overview>)[EAS](https://docs.expo.dev/eas-update/develop-faster/</eas>)[Reference](https://docs.expo.dev/eas-update/develop-faster/</versions/latest>)[Learn](https://docs.expo.dev/eas-update/develop-faster/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-update/develop-faster/</eas>)[Environment variables](https://docs.expo.dev/eas-update/develop-faster/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-update/develop-faster/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-update/develop-faster/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-update/develop-faster/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-update/develop-faster/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-update/develop-faster/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-update/develop-faster/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-update/develop-faster/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-update/develop-faster/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-update/develop-faster/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-update/develop-faster/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-update/develop-faster/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-update/develop-faster/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-update/develop-faster/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-update/develop-faster/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-update/develop-faster/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-update/develop-faster/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-update/develop-faster/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-update/develop-faster/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-update/develop-faster/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-update/develop-faster/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-update/develop-faster/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-update/develop-faster/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-update/develop-faster/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-update/develop-faster/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-update/develop-faster/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-update/develop-faster/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-update/develop-faster/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-update/develop-faster/</eas-update/getting-started>)
Preview
[Preview updates](https://docs.expo.dev/eas-update/develop-faster/</eas-update/develop-faster>)[Use development builds](https://docs.expo.dev/eas-update/develop-faster/</eas-update/expo-dev-client>)[Github PR previews](https://docs.expo.dev/eas-update/develop-faster/</eas-update/github-actions>)
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-update/develop-faster/</eas/metadata>)[Get started](https://docs.expo.dev/eas-update/develop-faster/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-update/develop-faster/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-update/develop-faster/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-update/develop-faster/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-update/develop-faster/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-update/develop-faster/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-update/develop-faster/</eas/json>)[Webhooks](https://docs.expo.dev/eas-update/develop-faster/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-update/develop-faster/</archive>)[Expo Snack](https://docs.expo.dev/eas-update/develop-faster/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-update/develop-faster/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-update/develop-faster/<https:/expo.dev/mailing-list/signup>)
# Preview updates
[Edit this page](https://docs.expo.dev/eas-update/develop-faster/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/develop-faster.mdx> "Edit content of this page on GitHub")
Learn how to iterate quickly by sharing updates for QA and testing.
[Edit this page](https://docs.expo.dev/eas-update/develop-faster/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/develop-faster.mdx> "Edit content of this page on GitHub")
EAS Update helps us fix critical bugs in production. It can also help us iterate faster with our team during development.
## Distributing updates to others during development[](https://docs.expo.dev/eas-update/develop-faster/<#distributing-updates-to-others-during-development>)
Whether a new feature is being developed, stabilized, QA'd, or critiqued, it's often useful to allow others to preview what it looks and feels like before it is released to production.
Traditionally previewing meant re-building the project and distributing it to a reviewer manually. Previewing features with EAS Update removes the need for rebuilding in most cases and can help us preview new features quicker.
A published update can be loaded in various environments:
  * A [development build](https://docs.expo.dev/eas-update/develop-faster/</eas-update/expo-dev-client>) with a matching runtime version, distributed through [internal distribution](https://docs.expo.dev/eas-update/develop-faster/</build/internal-distribution>) or as an emulator or simulator build.
  * A release build distributed via Google Play beta, TestFlight, or [internal distribution](https://docs.expo.dev/eas-update/develop-faster/</build/internal-distribution>) with a matching runtime version and channel pointing to a branch with the published update. With this strategy, often an EAS Update channel like "alpha" or "beta" will be used, and builds and updates will be created from development branches in source control.
  * Expo Go can also load published updates in cases where custom native code is not used.


[Previous (EAS Update)Get started](https://docs.expo.dev/eas-update/develop-faster/</eas-update/getting-started>)[Next (EAS Update - Preview)Use development builds](https://docs.expo.dev/eas-update/develop-faster/</eas-update/expo-dev-client>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-update/develop-faster/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-update/develop-faster/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/develop-faster.mdx>)
  * Last updated on September 20, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-update/develop-faster/<https:/expo.dev/privacy>).
