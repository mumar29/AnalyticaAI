[](https://docs.expo.dev/eas-update/rollouts/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-update/rollouts/</>)
[Blog](https://docs.expo.dev/eas-update/rollouts/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-update/rollouts/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-update/rollouts/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-update/rollouts/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-update/rollouts/</>)[Guides](https://docs.expo.dev/eas-update/rollouts/</guides/overview>)[EAS](https://docs.expo.dev/eas-update/rollouts/</eas>)[Reference](https://docs.expo.dev/eas-update/rollouts/</versions/latest>)[Learn](https://docs.expo.dev/eas-update/rollouts/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-update/rollouts/</eas>)[Environment variables](https://docs.expo.dev/eas-update/rollouts/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-update/rollouts/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-update/rollouts/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-update/rollouts/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-update/rollouts/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-update/rollouts/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-update/rollouts/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-update/rollouts/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-update/rollouts/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-update/rollouts/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-update/rollouts/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-update/rollouts/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-update/rollouts/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-update/rollouts/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-update/rollouts/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-update/rollouts/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-update/rollouts/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-update/rollouts/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-update/rollouts/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-update/rollouts/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-update/rollouts/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-update/rollouts/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-update/rollouts/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-update/rollouts/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-update/rollouts/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-update/rollouts/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-update/rollouts/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-update/rollouts/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-update/rollouts/</eas-update/getting-started>)
Preview
Deployment
[Deploy updates](https://docs.expo.dev/eas-update/rollouts/</eas-update/deployment>)[Rollouts](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts>)[Rollbacks](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollbacks>)[Optimize assets](https://docs.expo.dev/eas-update/rollouts/</eas-update/optimize-assets>)[Continuous deployment](https://docs.expo.dev/eas-update/rollouts/</eas-update/continuous-deployment>)[Alternative deployment patterns](https://docs.expo.dev/eas-update/rollouts/</eas-update/deployment-patterns>)
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-update/rollouts/</eas/metadata>)[Get started](https://docs.expo.dev/eas-update/rollouts/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-update/rollouts/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-update/rollouts/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-update/rollouts/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-update/rollouts/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-update/rollouts/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-update/rollouts/</eas/json>)[Webhooks](https://docs.expo.dev/eas-update/rollouts/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-update/rollouts/</archive>)[Expo Snack](https://docs.expo.dev/eas-update/rollouts/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-update/rollouts/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-update/rollouts/<https:/expo.dev/mailing-list/signup>)
# Rollouts
[Edit this page](https://docs.expo.dev/eas-update/rollouts/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/rollouts.mdx> "Edit content of this page on GitHub")
Learn how to incrementally deploy updates to your users by using a rollout mechanism.
[Edit this page](https://docs.expo.dev/eas-update/rollouts/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/rollouts.mdx> "Edit content of this page on GitHub")
A rollout allows you to roll out a change to a portion of your users to catch bugs or other issues before releasing that change to all your users.
EAS provides per-update and branch-based rollout mechanisms depending on your use case.
## Per-update rollouts[](https://docs.expo.dev/eas-update/rollouts/<#per-update-rollouts>)
This rollout mechanism allows you to specify a percentage of users that should receive a new update when you publish it, and then increase that percentage gradually afterwards.
### Starting a rollout[](https://docs.expo.dev/eas-update/rollouts/<#starting-a-rollout>)
To start an update-based rollout, add the `--rollout-percentage` flag to your normal `eas update` command:
Terminal
Copy
`- ``eas update --rollout-percentage=10`
In this example, when published, the update will only be available to 10% of your end users.
### Progressing a rollout[](https://docs.expo.dev/eas-update/rollouts/<#progressing-a-rollout>)
To edit the percentage of an update-based rollout:
Terminal
Copy
`- ``eas update:edit`
You will be guided through the process of selecting the update to edit and asked for the new percentage.
### Ending a rollout[](https://docs.expo.dev/eas-update/rollouts/<#ending-a-rollout>)
When ending an update-based rollout, you have two options:
  * Roll out fully: To accomplish this end state, progress the rollout as detailed above and set the percentage to 100.
  * Revert: To accomplish this end state, republish the previous update by using the `eas update:republish` command.


### Working with rollouts[](https://docs.expo.dev/eas-update/rollouts/<#working-with-rollouts>)
  * Only one update can be rolled out on a branch at one time.
  * To see the state of the rollout, use the `eas update:list` or `eas update:view` commands.


## Branch-based rollouts[](https://docs.expo.dev/eas-update/rollouts/<#branch-based-rollouts>)
This rollout mechanism allows you to incrementally roll out a set of updates on a new branch to a percentage of end users and leave the remaining percentage of users on the current branch.
### Starting a rollout[](https://docs.expo.dev/eas-update/rollouts/<#starting-a-rollout-1>)
To start a branch-based rollout, run the following EAS CLI command:
Terminal
Copy
`- ``eas channel:rollout`
In the terminal, an interactive guide will assist you in selecting a channel, choosing a branch for the rollout, and setting the percentage of users for the rollout. To increase or decrease the rollout amount, run the command again and choose the `Edit` option to adjust the rollout percentage.
### Ending a rollout[](https://docs.expo.dev/eas-update/rollouts/<#ending-a-rollout-1>)
Two methods are available to end a rollout when you choose the `End` option in the interactive guide:
  * Republish and revert: Use this option when you are confident with the state of the new branch. This will republish the latest update from the new branch to the old branch, and all users will be pointed to the old branch.
  * Revert: Choose to disregard the updates on the new branch and return users to the old branch.


### Working with rollouts[](https://docs.expo.dev/eas-update/rollouts/<#working-with-rollouts-1>)
  * Only one branch can be rolled out on a channel at a single time.
  * To see the state of the rollout, use the `eas channel:rollout` command.
  * When a rollout is in progress, you can publish updates to both rolled out and current branches by running `eas update --branch [branch]`, for example.
  * `eas update --channel [channel]` cannot be used when a rollout is in progress since it cannot know which branch in the rollout to associate the update with.


[Previous (EAS Update - Deployment)Deploy updates](https://docs.expo.dev/eas-update/rollouts/</eas-update/deployment>)[Next (EAS Update - Deployment)Rollbacks](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollbacks>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-update/rollouts/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-update/rollouts/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/rollouts.mdx>)
  * Last updated on November 26, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-update/rollouts/<https:/expo.dev/privacy>).
On this page
[Per-update rollouts](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts/#per-update-rollouts>)[Starting a rollout](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts/#starting-a-rollout>)[Progressing a rollout](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts/#progressing-a-rollout>)[Ending a rollout](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts/#ending-a-rollout>)[Working with rollouts](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts/#working-with-rollouts>)[Branch-based rollouts](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts/#branch-based-rollouts>)[Starting a rollout](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts/#starting-a-rollout-1>)[Ending a rollout](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts/#ending-a-rollout-1>)[Working with rollouts](https://docs.expo.dev/eas-update/rollouts/</eas-update/rollouts/#working-with-rollouts-1>)
