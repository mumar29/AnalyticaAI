[](https://docs.expo.dev/eas-update/deployment/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-update/deployment/</>)
[Blog](https://docs.expo.dev/eas-update/deployment/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-update/deployment/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-update/deployment/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-update/deployment/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-update/deployment/</>)[Guides](https://docs.expo.dev/eas-update/deployment/</guides/overview>)[EAS](https://docs.expo.dev/eas-update/deployment/</eas>)[Reference](https://docs.expo.dev/eas-update/deployment/</versions/latest>)[Learn](https://docs.expo.dev/eas-update/deployment/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-update/deployment/</eas>)[Environment variables](https://docs.expo.dev/eas-update/deployment/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-update/deployment/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-update/deployment/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-update/deployment/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-update/deployment/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-update/deployment/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-update/deployment/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-update/deployment/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-update/deployment/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-update/deployment/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-update/deployment/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-update/deployment/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-update/deployment/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-update/deployment/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-update/deployment/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-update/deployment/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-update/deployment/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-update/deployment/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-update/deployment/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-update/deployment/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-update/deployment/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-update/deployment/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-update/deployment/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-update/deployment/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-update/deployment/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-update/deployment/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-update/deployment/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-update/deployment/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-update/deployment/</eas-update/getting-started>)
Preview
Deployment
[Deploy updates](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment>)[Rollouts](https://docs.expo.dev/eas-update/deployment/</eas-update/rollouts>)[Rollbacks](https://docs.expo.dev/eas-update/deployment/</eas-update/rollbacks>)[Optimize assets](https://docs.expo.dev/eas-update/deployment/</eas-update/optimize-assets>)[Continuous deployment](https://docs.expo.dev/eas-update/deployment/</eas-update/continuous-deployment>)[Alternative deployment patterns](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment-patterns>)
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-update/deployment/</eas/metadata>)[Get started](https://docs.expo.dev/eas-update/deployment/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-update/deployment/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-update/deployment/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-update/deployment/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-update/deployment/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-update/deployment/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-update/deployment/</eas/json>)[Webhooks](https://docs.expo.dev/eas-update/deployment/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-update/deployment/</archive>)[Expo Snack](https://docs.expo.dev/eas-update/deployment/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-update/deployment/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-update/deployment/<https:/expo.dev/mailing-list/signup>)
# Deploy updates
[Edit this page](https://docs.expo.dev/eas-update/deployment/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/deployment.mdx> "Edit content of this page on GitHub")
Learn a simple but powerful process for safely deploying updates to your users.
[Edit this page](https://docs.expo.dev/eas-update/deployment/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/deployment.mdx> "Edit content of this page on GitHub")
When you have an app with multiple binary versions in production (this is common — users do not always stay up to date with your latest store release), it's important to understand what code is running on which versions and to be able to specifically target a particular version with a hotfix.
EAS Update provides "channels", "branches", and "runtime versions" to help you determine which app version to target, to help you with bookkeeping to understand the state of your deployments, and to support a variety of [deployment patterns](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment-patterns>).
What if my preferred release process isn't supported by EAS Update?[](https://docs.expo.dev/eas-update/deployment/<#what-if-my-preferred-release-process-isnt>)
Release management is a large topic in software engineering, and everyone has a slightly different take on how they would like to do it. EAS Update is designed to support [a variety of different workflows](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment-patterns>), but this guide will focus on the simplest workflow that works for most apps. That said, there are some other workflows that may not work within the constraints of the EAS Update service. For example, each binary version must always point to a single channel, and you cannot dynamically update the channel.
As an escape hatch, you can host your own update service that is compatible with the [Expo Updates Protocol](https://docs.expo.dev/eas-update/deployment/</technical-specs/expo-updates-1>) and point your `expo-updates` configuration to that service instead. The only concepts relevant to update selection that exist on the protocol level are "Runtime Version" and "Platform", and you are free to create your own concepts on top of those in the same way we built channels and branches. [Learn more about creating a custom expo-updates server](https://docs.expo.dev/eas-update/deployment/<https:/github.com/expo/custom-expo-updates-server>).
## A simple release process[](https://docs.expo.dev/eas-update/deployment/<#a-simple-release-process>)
In this guide, we'll describe a simple but powerful release process that uses channels and runtime versions, and mostly ignores _branches_. This gives most of the benefits of EAS Update with a minimal amount of conceptual overhead. You can evolve this process to suit your needs as they arise, or move to [other deployment patterns](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment-patterns>).
Why ignore branches in this release process?[](https://docs.expo.dev/eas-update/deployment/<#why-ignore-branches-in-this-release-process>)
The most simple way to use EAS Update is to ignore the concept of "branches" and focus on "channels". Branches will still exist, but you will not have to interact with them directly to manage deployments. You can keep your channels pointed at a branch with the same name as the channel and think of them as a singular concept.
EAS Update branches were meant to map to Git branches and enable teams to publish changes from a Git branch directly to an EAS Update branch of the same name. This can be helpful for [previewing updates](https://docs.expo.dev/eas-update/deployment/</eas-update/develop-faster>), but for many apps, this level of integration with Git is not required. Often, developers are only interested in being able to release hotfixes to a staging or production version of their app manually, and can run `eas update --channel staging` or `eas update --channel production`, when needed rather than managing branches to accomplish the same result.
## Configuring your project[](https://docs.expo.dev/eas-update/deployment/<#configuring-your-project>)
Channels will indicate which environment the update targets (such as "production" or "staging"), and runtime versions will indicate the app version that the update will target (such as "1.0.0" or "1.0.1").
### Channel configuration[](https://docs.expo.dev/eas-update/deployment/<#channel-configuration>)
Run `eas update:configure` in your project if you haven't already.
If you use EAS Build, the default configuration that will be applied by the configure command, which is almost what we want to use here: each profile will point to a channel of the same name, so our production release of our app will point to the "production" channel. We only need to add a "staging" profile that points to the "staging" channel.
Example eas.json configuration[](https://docs.expo.dev/eas-update/deployment/<#example-easjson-configuration>)
The following configuration is approximately what `eas update:configure` will generate for you if you haven't already configured your project.
```
{
 "build": {
  "production": {
   "channel": "production"
  },
  "staging": {
   "channel": "staging"
  },
  "preview": {
   "channel": "preview",
   "distribution": "internal"
  }
 }
}

```

If you do not use EAS Build, you will need to modify the channel used in your [native project configuration](https://docs.expo.dev/eas-update/deployment/</eas-update/getting-started#configure-the-update-channel>). When you release to production, ensure you update the channel name in native config to "production", and when you release to staging, ensure you update the channel name in native config to "preview". It's worth noting that using EAS Build with EAS Update helps you get the best out of the product, but it is not required.
### Runtime version configuration[](https://docs.expo.dev/eas-update/deployment/<#runtime-version-configuration>)
By default, `eas update:configure` will set `"runtimeVersion": { "policy": "appVersion" }` in your app config. This is the recommended configuration, it will ensure that the runtime version of your app is always the same as the app version, and you have a unique runtime version to target for every release of your app. In this case, the app version refers to the native version of your app that users will see on the app store, and it does not include the build number or version code. For example: `"1.0.0"` will be used as the runtime version, and not `"1.0.0(1)"` (where `1` is the build number or version code).
Example app.json configuration[](https://docs.expo.dev/eas-update/deployment/<#example-appjson-configuration>)
```
{
 "expo": {
  "runtimeVersion": {
   "policy": "appVersion"
  }
 }
}

```

What about the fingerprint runtime version policy?[](https://docs.expo.dev/eas-update/deployment/<#what-about-the-fingerprint-runtime-version-policy>)
We hope that this will be the future of runtime version policies, but for now, we recommend using the `"appVersion"` policy. The `"fingerprint"` policy is experimental and not yet widely recommended.
## Deploying previews[](https://docs.expo.dev/eas-update/deployment/<#deploying-previews>)
You can preview updates in your internal distribution release builds or in development builds. Using internal distribution instead of deploying to a store beta track reduces the friction of distributing the app to internal testers, and is suitable for cases where you want to, for example, share a build on every pull request or an early concept that you're working on.
### Internal distribution release builds[](https://docs.expo.dev/eas-update/deployment/<#internal-distribution-release-builds>)
As explained above, preview builds will point to the "preview" channel. If you want multiple versions of the preview app distributed internally at any given time, you can change the channel name based on the feature name. For example, you might set your channel on your build to "preview-feature-a" when working on feature A, and then set it to "preview-feature-b" when working on feature B.
### Preview in development builds[](https://docs.expo.dev/eas-update/deployment/<#preview-in-development-builds>)
Development builds can load updates from any channel, provided the runtime version is compatible. Learn more about this in [Previewing updates](https://docs.expo.dev/eas-update/deployment/</eas-update/develop-faster>).
## Deploying to staging[](https://docs.expo.dev/eas-update/deployment/<#deploying-to-staging>)
Run `eas update --channel staging` to publish an update to staging. This will make your hotfix immediately available to users of staging builds with the targeted runtime version.
Your staging environment will be Google Play Beta or TestFlight — the "beta track" on respective app stores. You may alternatively use internal distribution, but deploying to a store beta track is generally recommended when you are staging code for a production release since users are able to access it without any knowledge of internal processes for distributing the app (while using internal distribution would require users to download the app from an expo.dev URL).
A common practice for creating staging builds is to always create one whenever you upload a production build to a store. This allows you to have a staging build with an identical runtime to the production build, which you can use to test your updates before rolling them out to production. With EAS Build, this means running `eas build --profile staging --auto-submit` every time you run `eas build --profile production --auto-submit`.
## Deploying to production[](https://docs.expo.dev/eas-update/deployment/<#deploying-to-production>)
Run `eas update --channel production` to bundle and push a new update to production. This will make your hotfix immediately available to production build users with the same runtime version.
If you have already published the fix to staging and verified it there, ensure that you are republishing from the same commit.
For this release process we recommend using identical environment variables and code signing configuration on staging as on production, to ensure that updates verified in staging work exactly the same in production. If do this, then you can `eas update:republish --destination-channel production` to promote the update rather than generating a new one. This will ensure the exact same bundle that you tested in staging is used in production.
Run `eas update --channel production` to publish an update to production. This will make your hotfix immediately available to users of production builds with the same runtime version.
### Runtime versions[](https://docs.expo.dev/eas-update/deployment/<#runtime-versions>)
When creating a new production build, we recommend incrementing your [app version](https://docs.expo.dev/eas-update/deployment/</build-reference/app-versions#app-versions>) to ensure it has a unique runtime version for each release of your app.
### Gradually rolling out updates[](https://docs.expo.dev/eas-update/deployment/<#gradually-rolling-out-updates>)
Rollouts that leverage multiple branches can't be used with this workflow. We're working on a solution for this, but in the meantime, you will need to use a process similar to the [branch promotion flow](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment-patterns#branch-promotion-flow>) to incrementally roll out updates.
Learn more in [Rollouts](https://docs.expo.dev/eas-update/deployment/</eas-update/rollouts>).
### Rolling back to a previous update version[](https://docs.expo.dev/eas-update/deployment/<#rolling-back-to-a-previous-update-version>)
If you've mistakenly published an update to any of your environments, you can run `eas update:rollback` initiate a rollback to a previous update.
Learn more in [Rollbacks](https://docs.expo.dev/eas-update/deployment/</eas-update/rollbacks>).
## Next steps[](https://docs.expo.dev/eas-update/deployment/<#next-steps>)
  * [Learn more about the Persistent staging release process](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment-patterns#persistent-staging-flow>), which is very similar to what is described here.
  * [Explore using preview updates in development builds](https://docs.expo.dev/eas-update/deployment/</eas-update/develop-faster>).


[Previous (EAS Update - Preview)Github PR previews](https://docs.expo.dev/eas-update/deployment/</eas-update/github-actions>)[Next (EAS Update - Deployment)Rollouts](https://docs.expo.dev/eas-update/deployment/</eas-update/rollouts>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-update/deployment/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-update/deployment/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/deployment.mdx>)
  * Last updated on November 14, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-update/deployment/<https:/expo.dev/privacy>).
On this page
[A simple release process](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#a-simple-release-process>)[Configuring your project](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#configuring-your-project>)[Channel configuration](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#channel-configuration>)[Runtime version configuration](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#runtime-version-configuration>)[Deploying previews](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#deploying-previews>)[Internal distribution release builds](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#internal-distribution-release-builds>)[Preview in development builds](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#preview-in-development-builds>)[Deploying to staging](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#deploying-to-staging>)[Deploying to production](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#deploying-to-production>)[Runtime versions](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#runtime-versions>)[Gradually rolling out updates](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#gradually-rolling-out-updates>)[Rolling back to a previous update version](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#rolling-back-to-a-previous-update-version>)[Next steps](https://docs.expo.dev/eas-update/deployment/</eas-update/deployment/#next-steps>)
