[](https://docs.expo.dev/eas/metadata/faq/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/metadata/faq/</>)
[Blog](https://docs.expo.dev/eas/metadata/faq/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/metadata/faq/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/metadata/faq/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/metadata/faq/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/metadata/faq/</>)[Guides](https://docs.expo.dev/eas/metadata/faq/</guides/overview>)[EAS](https://docs.expo.dev/eas/metadata/faq/</eas>)[Reference](https://docs.expo.dev/eas/metadata/faq/</versions/latest>)[Learn](https://docs.expo.dev/eas/metadata/faq/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/metadata/faq/</eas>)[Environment variables](https://docs.expo.dev/eas/metadata/faq/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/metadata/faq/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/metadata/faq/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/metadata/faq/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/metadata/faq/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/metadata/faq/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/metadata/faq/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/metadata/faq/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/metadata/faq/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/faq/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/metadata/faq/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/metadata/faq/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/metadata/faq/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/metadata/faq/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/metadata/faq/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/metadata/faq/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/metadata/faq/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/metadata/faq/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/metadata/faq/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/metadata/faq/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/metadata/faq/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/metadata/faq/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/metadata/faq/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/metadata/faq/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/faq/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/metadata/faq/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/metadata/faq/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/metadata/faq/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/metadata/faq/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/metadata/faq/</eas/metadata>)[Get started](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/getting-started>)
Reference
[store.config.json](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/config>)[Metadata schema](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/schema>)[FAQ](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/faq>)
EAS Insights
[Introduction](https://docs.expo.dev/eas/metadata/faq/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/metadata/faq/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/metadata/faq/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/metadata/faq/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/metadata/faq/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/metadata/faq/</eas/json>)[Webhooks](https://docs.expo.dev/eas/metadata/faq/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/metadata/faq/</archive>)[Expo Snack](https://docs.expo.dev/eas/metadata/faq/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/metadata/faq/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/metadata/faq/<https:/expo.dev/mailing-list/signup>)
# EAS Metadata FAQ
[Edit this page](https://docs.expo.dev/eas/metadata/faq/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/faq.mdx> "Edit content of this page on GitHub")
Frequently asked questions about EAS Metadata.
[Edit this page](https://docs.expo.dev/eas/metadata/faq/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/faq.mdx> "Edit content of this page on GitHub")
> EAS Metadata is in beta and subject to breaking changes.
## Pitch[](https://docs.expo.dev/eas/metadata/faq/<#pitch>)
If you are creating or maintaining an app in the stores, keeping the app store information up to date can be a big task. When making small changes, for example, supporting a new app store region, you have to find and fill in the forms in an app store's dashboard. Then, after providing all the required information, that content still needs to be approved, where one word can be the difference between approval and rejection.
EAS Metadata aims to make this stage of app development as easy as possible. Using a simple configuration file, you can provide all the information to the stores without leaving your project environment. Combined with built-in validation, you get instant feedback about the content you provide, even before any review.
### Easy to configure, update, or maintain[](https://docs.expo.dev/eas/metadata/faq/<#easy-to-configure-update-or-maintain>)
You can start using EAS Metadata by [creating a new or generating a store config](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/getting-started#create-the-store-config>) from an existing app. This store config lets you quickly update the app store information without leaving your project environment. Before pushing the changes to the app stores, EAS Metadata looks for common pitfalls that might result in an app rejection.
### Faster feedback loop with validation[](https://docs.expo.dev/eas/metadata/faq/<#faster-feedback-loop-with-validation>)
EAS Metadata comes with built-in validation, even before anything is sent to the app stores. This validation helps you iterate faster over the information without starting a review. Instead, you can begin the review process when everything is provided, and no issues are detected.
> Make sure to install the [VS Code Expo Tools extension](https://docs.expo.dev/eas/metadata/faq/<https:/github.com/expo/vscode-expo#readme>) to get auto-complete, suggestions, and warnings for store.config.json files.
### Extensible with dynamic store config[](https://docs.expo.dev/eas/metadata/faq/<#extensible-with-dynamic-store-config>)
EAS Metadata also supports a more [dynamic store config](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/config#dynamic-store-config>), instead of only using JSON files. This dynamic store config allows you to gather information from other places like external services. With asynchronous functions, there are no limits to adapting EAS Metadata to suit your preferred workflow.
## Anti-pitch[](https://docs.expo.dev/eas/metadata/faq/<#anti-pitch>)
Here are some reasons EAS Metadata might not be the right fit for a project.
### Does EAS Metadata support the Google Play Store?[](https://docs.expo.dev/eas/metadata/faq/<#does-eas-metadata-support-the-google-play-store>)
We are committed to EAS Metadata and will expand functionality over time. This also means that not all functionality is implemented in EAS Metadata. The Google Play Store is one of those features currently not implemented. See the [store config schema](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/schema#config-schema>) for all existing functionality.
### How do I use unsupported app store features?[](https://docs.expo.dev/eas/metadata/faq/<#how-do-i-use-unsupported-app-store-features>)
EAS Metadata only sends the data from your store config to the app stores. It does not block you from using the app store dashboards if you need a feature that EAS Metadata does not cover yet.
When using EAS Metadata and editing something in the app store dashboards, make sure to run `eas metadata:pull` after these changes. Without updating your local store config, EAS Metadata might overwrite your changes when pushing to the app stores.
### Using restricted app store accounts[](https://docs.expo.dev/eas/metadata/faq/<#using-restricted-app-store-accounts>)
You'll need to authenticate with the app store before EAS Metadata can access the information. If you are working with a large corporate account, you might not have permission to use all functionality of EAS Metadata. While you can use EAS Metadata in these cases, it's often more challenging due to the security restrictions.
[Previous (EAS Metadata - Reference)Metadata schema](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/schema>)[Next (EAS Insights)Introduction](https://docs.expo.dev/eas/metadata/faq/</eas-insights/introduction>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/metadata/faq/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/metadata/faq/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/faq.mdx>)
  * Last updated on October 07, 2023


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/metadata/faq/<https:/expo.dev/privacy>).
On this page
[Pitch](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/faq/#pitch>)[Easy to configure, update, or maintain](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/faq/#easy-to-configure-update-or-maintain>)[Faster feedback loop with validation](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/faq/#faster-feedback-loop-with-validation>)[Extensible with dynamic store config](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/faq/#extensible-with-dynamic-store-config>)[Anti-pitch](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/faq/#anti-pitch>)[Does EAS Metadata support the Google Play Store?](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/faq/#does-eas-metadata-support-the-google-play-store>)[How do I use unsupported app store features?](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/faq/#how-do-i-use-unsupported-app-store-features>)[Using restricted app store accounts](https://docs.expo.dev/eas/metadata/faq/</eas/metadata/faq/#using-restricted-app-store-accounts>)
