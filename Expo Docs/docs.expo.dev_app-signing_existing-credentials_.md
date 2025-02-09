[](https://docs.expo.dev/app-signing/existing-credentials/<https:/expo.dev>)[Docs](https://docs.expo.dev/app-signing/existing-credentials/</>)
[Blog](https://docs.expo.dev/app-signing/existing-credentials/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/app-signing/existing-credentials/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/app-signing/existing-credentials/<https:/github.com/expo/expo>)[](https://docs.expo.dev/app-signing/existing-credentials/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/app-signing/existing-credentials/</>)[Guides](https://docs.expo.dev/app-signing/existing-credentials/</guides/overview>)[EAS](https://docs.expo.dev/app-signing/existing-credentials/</eas>)[Reference](https://docs.expo.dev/app-signing/existing-credentials/</versions/latest>)[Learn](https://docs.expo.dev/app-signing/existing-credentials/</tutorial/overview>)
[Introduction](https://docs.expo.dev/app-signing/existing-credentials/</eas>)[Environment variables](https://docs.expo.dev/app-signing/existing-credentials/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/app-signing/existing-credentials/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/app-signing/existing-credentials/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/app-signing/existing-credentials/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/app-signing/existing-credentials/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/app-signing/existing-credentials/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/app-signing/existing-credentials/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/app-signing/existing-credentials/</build/introduction>)[Create your first build](https://docs.expo.dev/app-signing/existing-credentials/</build/setup>)[Configure with eas.json](https://docs.expo.dev/app-signing/existing-credentials/</build/eas-json>)[Internal distribution](https://docs.expo.dev/app-signing/existing-credentials/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/app-signing/existing-credentials/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/app-signing/existing-credentials/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/app-signing/existing-credentials/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/app-signing/existing-credentials/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/app-signing/existing-credentials/</build/orbit>)
App Signing
[App credentials](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/app-credentials>)[Automatically managed credentials](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/managed-credentials>)[Local credentials](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/local-credentials>)[Existing credentials](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/existing-credentials>)[Sync credentials between remote and local sources](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/syncing-credentials>)[Security](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/security>)[Apple Developer Program roles and permissions](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/apple-developer-program-roles-and-permissions>)
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/app-signing/existing-credentials/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/app-signing/existing-credentials/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/app-signing/existing-credentials/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/app-signing/existing-credentials/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/app-signing/existing-credentials/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/app-signing/existing-credentials/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/app-signing/existing-credentials/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/app-signing/existing-credentials/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/app-signing/existing-credentials/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/app-signing/existing-credentials/</submit/android>)[Submit to Apple](https://docs.expo.dev/app-signing/existing-credentials/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/app-signing/existing-credentials/</eas-update/introduction>)[Get started](https://docs.expo.dev/app-signing/existing-credentials/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/app-signing/existing-credentials/</eas/metadata>)[Get started](https://docs.expo.dev/app-signing/existing-credentials/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/app-signing/existing-credentials/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/app-signing/existing-credentials/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/app-signing/existing-credentials/</distribution/app-stores>)[App transfers](https://docs.expo.dev/app-signing/existing-credentials/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/app-signing/existing-credentials/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/app-signing/existing-credentials/</eas/json>)[Webhooks](https://docs.expo.dev/app-signing/existing-credentials/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/app-signing/existing-credentials/</archive>)[Expo Snack](https://docs.expo.dev/app-signing/existing-credentials/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/app-signing/existing-credentials/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/app-signing/existing-credentials/<https:/expo.dev/mailing-list/signup>)
# Using existing credentials
[Edit this page](https://docs.expo.dev/app-signing/existing-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/app-signing/existing-credentials.mdx> "Edit content of this page on GitHub")
Learn about different options for supplying your app signing credentials to EAS Build.
[Edit this page](https://docs.expo.dev/app-signing/existing-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/app-signing/existing-credentials.mdx> "Edit content of this page on GitHub")
EAS Build gives you two options for how you can supply your build jobs with app signing credentials:
  1. [Automatically managed credentials](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/managed-credentials>): EAS can host your app signing credentials and take care of sharing them with teammates that have the necessary permissions.
  2. [Local credentials](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/local-credentials>): You create a credentials.json file in your project that points to your keystore (Android) and/or provisioning profile and distribution certificate (iOS), along with associated passwords. This is uploaded from your local machine at the time any given build job is run, and disposed of once that build job has completed.


Regardless of which option you choose, your first step for using your existing set of credentials is to set them up as local credentials in credentials.json. Refer to the [credentials.json section of the local credentials guide](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/local-credentials#credentialsjson>) for more information on how to do this.
Once your credentials.json file is configured, you can run `eas credentials`, choose a platform, and then select `"Update credentials on Expo servers with values from credentials.json"` to upload them to be hosted and managed by EAS, if you would like. [Read more about syncing credentials](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/syncing-credentials>).
[Previous (EAS Build - App Signing)Local credentials](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/local-credentials>)[Next (EAS Build - App Signing)Sync credentials between remote and local sources](https://docs.expo.dev/app-signing/existing-credentials/</app-signing/syncing-credentials>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/app-signing/existing-credentials/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/app-signing/existing-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/app-signing/existing-credentials.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/app-signing/existing-credentials/<https:/expo.dev/privacy>).
