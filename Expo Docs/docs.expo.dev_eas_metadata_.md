[](https://docs.expo.dev/eas/metadata/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/metadata/</>)
[Blog](https://docs.expo.dev/eas/metadata/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/metadata/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/metadata/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/metadata/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/metadata/</>)[Guides](https://docs.expo.dev/eas/metadata/</guides/overview>)[EAS](https://docs.expo.dev/eas/metadata/</eas>)[Reference](https://docs.expo.dev/eas/metadata/</versions/latest>)[Learn](https://docs.expo.dev/eas/metadata/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/metadata/</eas>)[Environment variables](https://docs.expo.dev/eas/metadata/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/metadata/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/metadata/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/metadata/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/metadata/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/metadata/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/metadata/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/metadata/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/metadata/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/metadata/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/metadata/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/metadata/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/metadata/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/metadata/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/metadata/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/metadata/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/metadata/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/metadata/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/metadata/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/metadata/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/metadata/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/metadata/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/metadata/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/metadata/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/metadata/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/metadata/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/metadata/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/metadata/</eas/metadata>)[Get started](https://docs.expo.dev/eas/metadata/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/metadata/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/metadata/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/metadata/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/metadata/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/metadata/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/metadata/</eas/json>)[Webhooks](https://docs.expo.dev/eas/metadata/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/metadata/</archive>)[Expo Snack](https://docs.expo.dev/eas/metadata/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/metadata/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/metadata/<https:/expo.dev/mailing-list/signup>)
# EAS Metadata
[Edit this page](https://docs.expo.dev/eas/metadata/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata.mdx> "Edit content of this page on GitHub")
An introduction to automate and maintain your app store presence from the command line with EAS Metadata.
[Edit this page](https://docs.expo.dev/eas/metadata/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata.mdx> "Edit content of this page on GitHub")
> EAS Metadata is in beta and subject to breaking changes.
EAS Metadata enables you to automate and maintain your app store presence from the command line.
You need to provide a lot of information to multiple app stores before your users can use your app. This information is often about complex topics that don't apply to your app. You have to start a lengthy review process after providing the information. When the reviewer finds any issues in the information you provided, you need to restart this process.
EAS Metadata uses a [store.config.json](https://docs.expo.dev/eas/metadata/</eas/metadata/config#static-store-config>) file to provide information instead of going through multiple forms in the app store dashboards. When it's time to update the app stores, you can push the store config to the app stores.
Terminal
Copy
`- ``eas metadata:push`
EAS Metadata can also instantly identify known app store restrictions that could trigger a rejection after a lengthy review queue.
Adding the store config file to your repository enables you to collaborate with other team members to prepare the app submission.
> Using VS Code? Install the [Expo Tools extension](https://docs.expo.dev/eas/metadata/<https:/github.com/expo/vscode-expo#readme>) for auto-complete, suggestions, and warnings in your store.config.json files.
## Get started[](https://docs.expo.dev/eas/metadata/<#get-started>)
[IntroductionAdd EAS Metadata to a new project, or generate the store config from an existing app.](https://docs.expo.dev/eas/metadata/</eas/metadata/getting-started>) [Customize the store configCustomize the store config to adapt EAS Metadata to your preferred workflow.](https://docs.expo.dev/eas/metadata/</eas/metadata/config>) [Store config schemaExplore all configurable options EAS Metadata has to offer.](https://docs.expo.dev/eas/metadata/</eas/metadata/schema>)
[Previous (EAS Update - Reference)FAQ](https://docs.expo.dev/eas/metadata/</eas-update/faq>)[Next (EAS Metadata)Get started](https://docs.expo.dev/eas/metadata/</eas/metadata/getting-started>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/metadata/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/metadata/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata.mdx>)
  * Last updated on January 17, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/metadata/<https:/expo.dev/privacy>).
