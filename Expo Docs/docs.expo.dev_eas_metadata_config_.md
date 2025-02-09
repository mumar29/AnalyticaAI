[](https://docs.expo.dev/eas/metadata/config/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/metadata/config/</>)
[Blog](https://docs.expo.dev/eas/metadata/config/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/metadata/config/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/metadata/config/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/metadata/config/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/metadata/config/</>)[Guides](https://docs.expo.dev/eas/metadata/config/</guides/overview>)[EAS](https://docs.expo.dev/eas/metadata/config/</eas>)[Reference](https://docs.expo.dev/eas/metadata/config/</versions/latest>)[Learn](https://docs.expo.dev/eas/metadata/config/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/metadata/config/</eas>)[Environment variables](https://docs.expo.dev/eas/metadata/config/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/metadata/config/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/metadata/config/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/metadata/config/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/metadata/config/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/metadata/config/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/metadata/config/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/metadata/config/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/metadata/config/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/config/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/metadata/config/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/metadata/config/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/metadata/config/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/metadata/config/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/metadata/config/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/metadata/config/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/metadata/config/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/metadata/config/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/metadata/config/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/metadata/config/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/metadata/config/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/metadata/config/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/metadata/config/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/metadata/config/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/config/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/metadata/config/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/metadata/config/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/metadata/config/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/metadata/config/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/metadata/config/</eas/metadata>)[Get started](https://docs.expo.dev/eas/metadata/config/</eas/metadata/getting-started>)
Reference
[store.config.json](https://docs.expo.dev/eas/metadata/config/</eas/metadata/config>)[Metadata schema](https://docs.expo.dev/eas/metadata/config/</eas/metadata/schema>)[FAQ](https://docs.expo.dev/eas/metadata/config/</eas/metadata/faq>)
EAS Insights
[Introduction](https://docs.expo.dev/eas/metadata/config/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/metadata/config/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/metadata/config/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/metadata/config/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/metadata/config/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/metadata/config/</eas/json>)[Webhooks](https://docs.expo.dev/eas/metadata/config/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/metadata/config/</archive>)[Expo Snack](https://docs.expo.dev/eas/metadata/config/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/metadata/config/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/metadata/config/<https:/expo.dev/mailing-list/signup>)
# Configuring EAS Metadata
[Edit this page](https://docs.expo.dev/eas/metadata/config/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/config.mdx> "Edit content of this page on GitHub")
Learn about different ways to configure EAS Metadata.
[Edit this page](https://docs.expo.dev/eas/metadata/config/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/config.mdx> "Edit content of this page on GitHub")
> EAS Metadata is in beta and subject to breaking changes.
EAS Metadata is configured by a store.config.json file at the _root of your project_.
You can configure the path or name of the store config file with the eas.json `metadataPath`[](https://docs.expo.dev/eas/metadata/config/</submit/eas-json#metadatapath>) property. Besides the default JSON format, EAS Metadata also supports more dynamic config using JavaScript files.
## Static store config[](https://docs.expo.dev/eas/metadata/config/<#static-store-config>)
The default store config type for EAS Metadata is a simple JSON file. The code snippet below shows an example store config with basic App Store information written in English (U.S.).
You can find all configuration options in the [store config schema](https://docs.expo.dev/eas/metadata/config/</eas/metadata/schema>).
> If you have the [VS Code Expo Tools extension](https://docs.expo.dev/eas/metadata/config/<https:/github.com/expo/vscode-expo#readme>) installed, you get auto-complete, suggestions, and warnings for store.config.json files.
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

## Dynamic store config[](https://docs.expo.dev/eas/metadata/config/<#dynamic-store-config>)
At times, Metadata properties can benefit from dynamic values. For example, the Metadata copyright notice should contain the current year. This can be automated with EAS Metadata.
To generate content dynamically, start by creating a JavaScript config file store.config.js. Then, use the `metadataPath`[](https://docs.expo.dev/eas/metadata/config/</eas/json#metadatapath>) property in the eas.json file to pick the JS config file.
> `eas metadata:pull` can't update dynamic store config files. Instead, it creates a JSON file with the same name as the configured file. You can import the JSON file to reuse the data from `eas metadata:pull`.
store.config.js
Copy
```
// Use the data from `eas metadata:pull`
const config = require('./store.config.json');
const year = new Date().getFullYear();
config.apple.copyright = `${year} Acme, Inc.`;
module.exports = config;

```

eas.json
Copy
```
{
 "submit": {
  "production": {
   "ios": {
    "metadataPath": "./store.config.js"
   }
  }
 }
}

```

## Store config with external content[](https://docs.expo.dev/eas/metadata/config/<#store-config-with-external-content>)
When using external services for localizations, you have to fetch external content. EAS Metadata supports synchronous and asynchronous functions exported from dynamic store config files. The function results are awaited before validating and syncing with the stores.
> The store.config.js function is evaluated in Node.js. If you need special values, like secrets, use environment variables.
store.config.js
Copy
```
// Use the data from `eas metadata:pull`
const config = require('./store.config.json');
module.exports = async () => {
 const year = new Date().getFullYear();
 const info = await fetchLocalizations('...').then(response => response.json());
 config.apple.copyright = `${year} Acme, Inc.`;
 config.apple.info = info;
 return config;
};

```

eas.json
Copy
```
{
 "submit": {
  "production": {
   "ios": {
    "metadataPath": "./store.config.js"
   }
  }
 }
}

```

[Previous (EAS Metadata)Get started](https://docs.expo.dev/eas/metadata/config/</eas/metadata/getting-started>)[Next (EAS Metadata - Reference)Metadata schema](https://docs.expo.dev/eas/metadata/config/</eas/metadata/schema>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/metadata/config/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/metadata/config/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/config.mdx>)
  * Last updated on August 05, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/metadata/config/<https:/expo.dev/privacy>).
On this page
[Static store config](https://docs.expo.dev/eas/metadata/config/</eas/metadata/config/#static-store-config>)[Dynamic store config](https://docs.expo.dev/eas/metadata/config/</eas/metadata/config/#dynamic-store-config>)[Store config with external content](https://docs.expo.dev/eas/metadata/config/</eas/metadata/config/#store-config-with-external-content>)
