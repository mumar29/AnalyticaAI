[](https://docs.expo.dev/eas-update/rollbacks/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-update/rollbacks/</>)
[Blog](https://docs.expo.dev/eas-update/rollbacks/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-update/rollbacks/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-update/rollbacks/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-update/rollbacks/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-update/rollbacks/</>)[Guides](https://docs.expo.dev/eas-update/rollbacks/</guides/overview>)[EAS](https://docs.expo.dev/eas-update/rollbacks/</eas>)[Reference](https://docs.expo.dev/eas-update/rollbacks/</versions/latest>)[Learn](https://docs.expo.dev/eas-update/rollbacks/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-update/rollbacks/</eas>)[Environment variables](https://docs.expo.dev/eas-update/rollbacks/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-update/rollbacks/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-update/rollbacks/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-update/rollbacks/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-update/rollbacks/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-update/rollbacks/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-update/rollbacks/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-update/rollbacks/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-update/rollbacks/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-update/rollbacks/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-update/rollbacks/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-update/rollbacks/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-update/rollbacks/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-update/rollbacks/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-update/rollbacks/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-update/rollbacks/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-update/rollbacks/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-update/rollbacks/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-update/rollbacks/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-update/rollbacks/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-update/rollbacks/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-update/rollbacks/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-update/rollbacks/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-update/rollbacks/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-update/rollbacks/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-update/rollbacks/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-update/rollbacks/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-update/rollbacks/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-update/rollbacks/</eas-update/getting-started>)
Preview
Deployment
[Deploy updates](https://docs.expo.dev/eas-update/rollbacks/</eas-update/deployment>)[Rollouts](https://docs.expo.dev/eas-update/rollbacks/</eas-update/rollouts>)[Rollbacks](https://docs.expo.dev/eas-update/rollbacks/</eas-update/rollbacks>)[Optimize assets](https://docs.expo.dev/eas-update/rollbacks/</eas-update/optimize-assets>)[Continuous deployment](https://docs.expo.dev/eas-update/rollbacks/</eas-update/continuous-deployment>)[Alternative deployment patterns](https://docs.expo.dev/eas-update/rollbacks/</eas-update/deployment-patterns>)
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-update/rollbacks/</eas/metadata>)[Get started](https://docs.expo.dev/eas-update/rollbacks/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-update/rollbacks/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-update/rollbacks/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-update/rollbacks/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-update/rollbacks/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-update/rollbacks/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-update/rollbacks/</eas/json>)[Webhooks](https://docs.expo.dev/eas-update/rollbacks/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-update/rollbacks/</archive>)[Expo Snack](https://docs.expo.dev/eas-update/rollbacks/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-update/rollbacks/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-update/rollbacks/<https:/expo.dev/mailing-list/signup>)
# Rollbacks
[Edit this page](https://docs.expo.dev/eas-update/rollbacks/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/rollbacks.mdx> "Edit content of this page on GitHub")
Rollback a branch to a previous update or the embedded update.
[Edit this page](https://docs.expo.dev/eas-update/rollbacks/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/rollbacks.mdx> "Edit content of this page on GitHub")
> Available from SDK 50 using `expo-updates`[](https://docs.expo.dev/eas-update/rollbacks/</versions/latest/sdk/updates>) 0.23.0 or above.
There are two types of rollbacks supported by EAS Update:
  * Roll back to a previously-published update.
  * Roll back to the update embedded in the build.


## Start a rollback[](https://docs.expo.dev/eas-update/rollbacks/<#start-a-rollback>)
To start a rollback, ensure you have EAS CLI version `5.9.0` or above installed. Then, run the following command:
Terminal
Copy
`- ``eas update:rollback`
In the terminal, an interactive guide will assist you in selecting the type of rollback and doing the rollback.
## Rolling back to a previously-published update[](https://docs.expo.dev/eas-update/rollbacks/<#rolling-back-to-a-previously-published-update>)
The above command re-publishes a previously-published update to functionally roll back clients to that update.
## Rolling back to the update embedded in the build[](https://docs.expo.dev/eas-update/rollbacks/<#rolling-back-to-the-update-embedded-in-the-build>)
The above command instructs the client to run the update embedded in the build.
## Publishing after the rollback[](https://docs.expo.dev/eas-update/rollbacks/<#publishing-after-the-rollback>)
Upon publishing again after a rollback, all clients will receive the new update.
[Previous (EAS Update - Deployment)Rollouts](https://docs.expo.dev/eas-update/rollbacks/</eas-update/rollouts>)[Next (EAS Update - Deployment)Optimize assets](https://docs.expo.dev/eas-update/rollbacks/</eas-update/optimize-assets>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-update/rollbacks/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-update/rollbacks/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/rollbacks.mdx>)
  * Last updated on October 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-update/rollbacks/<https:/expo.dev/privacy>).
On this page
[Start a rollback](https://docs.expo.dev/eas-update/rollbacks/</eas-update/rollbacks/#start-a-rollback>)[Rolling back to a previously-published update](https://docs.expo.dev/eas-update/rollbacks/</eas-update/rollbacks/#rolling-back-to-a-previously-published-update>)[Rolling back to the update embedded in the build](https://docs.expo.dev/eas-update/rollbacks/</eas-update/rollbacks/#rolling-back-to-the-update-embedded-in-the-build>)[Publishing after the rollback](https://docs.expo.dev/eas-update/rollbacks/</eas-update/rollbacks/#publishing-after-the-rollback>)
