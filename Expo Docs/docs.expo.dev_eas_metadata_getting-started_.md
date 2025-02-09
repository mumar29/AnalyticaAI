[](https://docs.expo.dev/eas/metadata/getting-started/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/metadata/getting-started/</>)
[Blog](https://docs.expo.dev/eas/metadata/getting-started/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/metadata/getting-started/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/metadata/getting-started/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/metadata/getting-started/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/metadata/getting-started/</>)[Guides](https://docs.expo.dev/eas/metadata/getting-started/</guides/overview>)[EAS](https://docs.expo.dev/eas/metadata/getting-started/</eas>)[Reference](https://docs.expo.dev/eas/metadata/getting-started/</versions/latest>)[Learn](https://docs.expo.dev/eas/metadata/getting-started/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/metadata/getting-started/</eas>)[Environment variables](https://docs.expo.dev/eas/metadata/getting-started/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/metadata/getting-started/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/metadata/getting-started/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/metadata/getting-started/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/metadata/getting-started/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/metadata/getting-started/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/metadata/getting-started/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/metadata/getting-started/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/metadata/getting-started/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/getting-started/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/metadata/getting-started/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/metadata/getting-started/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/metadata/getting-started/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/metadata/getting-started/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/metadata/getting-started/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/metadata/getting-started/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/metadata/getting-started/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/metadata/getting-started/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/metadata/getting-started/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/metadata/getting-started/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/metadata/getting-started/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/metadata/getting-started/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/metadata/getting-started/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/metadata/getting-started/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/getting-started/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/metadata/getting-started/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/metadata/getting-started/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/metadata/getting-started/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/metadata/getting-started/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata>)[Get started](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/metadata/getting-started/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/metadata/getting-started/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/metadata/getting-started/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/metadata/getting-started/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/metadata/getting-started/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/metadata/getting-started/</eas/json>)[Webhooks](https://docs.expo.dev/eas/metadata/getting-started/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/metadata/getting-started/</archive>)[Expo Snack](https://docs.expo.dev/eas/metadata/getting-started/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/metadata/getting-started/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/metadata/getting-started/<https:/expo.dev/mailing-list/signup>)
# Get started with EAS Metadata
[Edit this page](https://docs.expo.dev/eas/metadata/getting-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/getting-started.mdx> "Edit content of this page on GitHub")
Learn how to automate and maintain your app store presence from the command line with EAS Metadata.
[Edit this page](https://docs.expo.dev/eas/metadata/getting-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/getting-started.mdx> "Edit content of this page on GitHub")
> EAS Metadata is in beta and subject to breaking changes.
EAS Metadata enables you to automate and maintain your app store presence from the command line. It uses a [store.config.json](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/config#static-store-config>) file containing all required app information instead of going through multiple different forms. It also tries to find common pitfalls that could cause app rejections with built-in validation.
## Prerequisites[](https://docs.expo.dev/eas/metadata/getting-started/<#prerequisites>)
EAS Metadata currently only supports the Apple App Store.
> Using VS Code? Install the [Expo Tools extension](https://docs.expo.dev/eas/metadata/getting-started/<https:/github.com/expo/vscode-expo#readme>) for auto-complete, suggestions, and warnings in your store.config.json files.
## Create the store config[](https://docs.expo.dev/eas/metadata/getting-started/<#create-the-store-config>)
Let's start by creating our store.config.json file in the root directory of your project. This file holds all the information you want to upload to the app stores.
If you already have an app in the stores, you can pull the information into a store config by running:
Terminal
Copy
`- ``eas metadata:pull`
If you don't have an app in the stores yet, EAS Metadata can't generate the store config for you. Instead, create a new store config file.
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "info": {
   "en-US": {
    "title": "Awesome App",
    "subtitle": "Your self-made awesome app",
    "description": "The most awesome app you have ever seen",
    "keywords": ["awesome", "app"],
    "marketingUrl": "https://example.com/en/promo",
    "supportUrl": "https://example.com/en/support",
    "privacyPolicyUrl": "https://example.com/en/privacy"
   }
  }
 }
}

```

> By default, EAS Metadata uses the store.config.json file at the root of your project. You can change the name and location of this file by setting the eas.json `metadataPath`[](https://docs.expo.dev/eas/metadata/getting-started/</submit/eas-json#metadatapath>) property.
## Update the store config[](https://docs.expo.dev/eas/metadata/getting-started/<#update-the-store-config>)
Now it's time to edit the store.config.json file and customize it to your app needs. You can find all available options in the [store config schema](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/schema>).
## Upload a new app version[](https://docs.expo.dev/eas/metadata/getting-started/<#upload-a-new-app-version>)
Before pushing the store.config.json to the app stores, you must upload a new binary of your app. For more information, see [uploading new binaries to stores](https://docs.expo.dev/eas/metadata/getting-started/</submit/introduction>).
After the binary is submitted and processed, you can push the store config to the app stores.
## Upload the store config[](https://docs.expo.dev/eas/metadata/getting-started/<#upload-the-store-config>)
When you are satisfied with the store.config.json settings, you can push it to the app stores by running the following command:
Terminal
Copy
`- ``eas metadata:push`
If EAS Metadata runs into any issues with your store config, it will warn you when running this command. When there are no errors, or you confirm to push it with possible issues, it will try to upload as much as possible.
When the store config partially fails, you can change the store config and retry. `eas metadata:push` can be used to retry pushing the missing items.
## Next steps[](https://docs.expo.dev/eas/metadata/getting-started/<#next-steps>)
[Customize the store configCustomize the store config to adapt EAS Metadata to your preferred workflow.](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/config>) [Store config schemaExplore all configurable options EAS Metadata has to offer.](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/schema>)
[Previous (EAS Metadata)Introduction](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata>)[Next (EAS Metadata - Reference)store.config.json](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/config>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/metadata/getting-started/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/metadata/getting-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/getting-started.mdx>)
  * Last updated on December 04, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/metadata/getting-started/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/getting-started/#prerequisites>)[Create the store config](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/getting-started/#create-the-store-config>)[Update the store config](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/getting-started/#update-the-store-config>)[Upload a new app version](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/getting-started/#upload-a-new-app-version>)[Upload the store config](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/getting-started/#upload-the-store-config>)[Next steps](https://docs.expo.dev/eas/metadata/getting-started/</eas/metadata/getting-started/#next-steps>)
