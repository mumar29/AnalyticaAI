[](https://docs.expo.dev/eas-update/eas-cli/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-update/eas-cli/</>)
[Blog](https://docs.expo.dev/eas-update/eas-cli/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-update/eas-cli/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-update/eas-cli/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-update/eas-cli/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-update/eas-cli/</>)[Guides](https://docs.expo.dev/eas-update/eas-cli/</guides/overview>)[EAS](https://docs.expo.dev/eas-update/eas-cli/</eas>)[Reference](https://docs.expo.dev/eas-update/eas-cli/</versions/latest>)[Learn](https://docs.expo.dev/eas-update/eas-cli/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-update/eas-cli/</eas>)[Environment variables](https://docs.expo.dev/eas-update/eas-cli/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-update/eas-cli/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-update/eas-cli/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-update/eas-cli/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-update/eas-cli/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-update/eas-cli/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-update/eas-cli/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-update/eas-cli/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-update/eas-cli/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-update/eas-cli/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-update/eas-cli/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-update/eas-cli/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-update/eas-cli/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-update/eas-cli/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-update/eas-cli/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-update/eas-cli/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-update/eas-cli/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-update/eas-cli/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-update/eas-cli/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-update/eas-cli/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-update/eas-cli/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-update/eas-cli/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-update/eas-cli/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-update/eas-cli/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-update/eas-cli/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-update/eas-cli/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-update/eas-cli/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-update/eas-cli/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-update/eas-cli/</eas-update/getting-started>)
Preview
Deployment
Concepts
[How it works](https://docs.expo.dev/eas-update/eas-cli/</eas-update/how-it-works>)[Manage branches and channels](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli>)[Runtime versions](https://docs.expo.dev/eas-update/eas-cli/</eas-update/runtime-versions>)
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-update/eas-cli/</eas/metadata>)[Get started](https://docs.expo.dev/eas-update/eas-cli/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-update/eas-cli/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-update/eas-cli/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-update/eas-cli/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-update/eas-cli/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-update/eas-cli/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-update/eas-cli/</eas/json>)[Webhooks](https://docs.expo.dev/eas-update/eas-cli/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-update/eas-cli/</archive>)[Expo Snack](https://docs.expo.dev/eas-update/eas-cli/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-update/eas-cli/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-update/eas-cli/<https:/expo.dev/mailing-list/signup>)
# Manage branches and channels with EAS CLI
[Edit this page](https://docs.expo.dev/eas-update/eas-cli/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/eas-cli.mdx> "Edit content of this page on GitHub")
Learn how to link a branch to a channel and publish updates with EAS CLI.
[Edit this page](https://docs.expo.dev/eas-update/eas-cli/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/eas-cli.mdx> "Edit content of this page on GitHub")
EAS Update works by linking _branches_ to _channels_. Channels are specified at build time and exist inside a build's native code. Branches are an ordered list of updates, similar to a Git branch, which is an ordered list of commits. With EAS Update, we can link any channel to any branch, allowing us to make different updates available to different builds.
![Channel "production" linked to branch "version-1.0"](https://docs.expo.dev/static/images/eas-update/channel-branch-link.png)
The diagram above visualizes this link. Here, we have the builds with the "production" channel linked to the branch named "version-1.0". When we're ready, we can adjust the channel–branch pointer. Imagine we have more fixes tested and ready on a branch named "version-2.0". We could update this link to make the "version-2.0" branch available to all builds with the "production" channel.
![Channel "production" linked to branch "version-2.0"](https://docs.expo.dev/static/images/eas-update/channel-branch-link-2.png)
## Inspecting the state of your project's updates[](https://docs.expo.dev/eas-update/eas-cli/<#inspecting-the-state-of-your-projects-updates>)
### Inspect channels[](https://docs.expo.dev/eas-update/eas-cli/<#inspect-channels>)
View all channels:
Terminal
Copy
`- ``eas channel:list`
View a specific channel:
Terminal
Copy
`- ``eas channel:view [channel-name]`
`# Example`
`- ``eas channel:view production`
Create a channel:
Terminal
Copy
`- ``eas channel:create [channel-name]`
`# Example`
`- ``eas channel:create production`
### Inspect branches[](https://docs.expo.dev/eas-update/eas-cli/<#inspect-branches>)
See all branches:
Terminal
Copy
`- ``eas branch:list`
See a specific branch and a list of its updates:
Terminal
Copy
`- ``eas branch:view [branch-name]`
`# Example`
`- ``eas branch:view version-1.0`
### Inspect updates[](https://docs.expo.dev/eas-update/eas-cli/<#inspect-updates>)
View a specific update:
Terminal
Copy
`- ``eas update:view [update-group-id]`
`# Example`
`- ``eas update:view dbfd479f-d981-44ce-8774-f2fbcc386aa`
## Changing the state of your project's updates[](https://docs.expo.dev/eas-update/eas-cli/<#changing-the-state-of-your-projects-updates>)
### Create a new update and publish it[](https://docs.expo.dev/eas-update/eas-cli/<#create-a-new-update-and-publish-it>)
Terminal
Copy
`- ``eas update --branch [branch-name] --message "..."`
`# Example`
`- ``eas update --branch version-1.0 --message "Fixes typo"`
If you're using Git, we can use the `--auto` flag to auto-fill the branch name and the message. This flag will use the current Git branch as the branch name and the latest Git commit message as the message.
Terminal
Copy
`- ``eas update --auto`
### Delete a branch[](https://docs.expo.dev/eas-update/eas-cli/<#delete-a-branch>)
Terminal
Copy
`- ``eas branch:delete [branch-name]`
`# Example`
`- ``eas branch:delete version-1.0`
### Rename a branch[](https://docs.expo.dev/eas-update/eas-cli/<#rename-a-branch>)
Renaming branches do not disconnect any channel–branch links. If you had a channel named "production" linked to a branch named "version-1.0", and then you renamed the branch named "version-1.0" to "version-1.0-new", the "production" channel would be linked to the now-renamed branch "version-1.0-new".
Terminal
Copy
`- ``eas branch:rename --from [branch-name] --to [branch-name]`
`# Example`
`- ``eas branch:rename --from version-1.0 --to version-1.0-new`
### Republish a previous update within a branch[](https://docs.expo.dev/eas-update/eas-cli/<#republish-a-previous-update-within-a-branch>)
We can make a previous update immediately available to all users. This command takes the previous update and publishes it again so that it becomes the most current update on the branch. As your users re-open their apps, the apps will see the newly re-published update and will download it.
> Republish is similar to a Git reversion, where the correct commit is placed on top of the Git history.
Terminal
`- ``eas update:republish --group [update-group-id]`
`- ``eas update:republish --branch [branch-name]`
`# Example`
`- ``eas update:republish --group dbfd479f-d981-44ce-8774-f2fbcc386aa`
`- ``eas update:republish --branch version-1.0`
> If you don't know the exact update group ID, you can use the `--branch` flag. This shows a list of the recent updates on the branch and allows you to select the update group to republish.
[Previous (EAS Update - Concepts)How it works](https://docs.expo.dev/eas-update/eas-cli/</eas-update/how-it-works>)[Next (EAS Update - Concepts)Runtime versions](https://docs.expo.dev/eas-update/eas-cli/</eas-update/runtime-versions>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-update/eas-cli/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-update/eas-cli/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/eas-cli.mdx>)
  * Last updated on June 16, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-update/eas-cli/<https:/expo.dev/privacy>).
On this page
[Inspecting the state of your project's updates](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli/#inspecting-the-state-of-your-projects-updates>)[Inspect channels](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli/#inspect-channels>)[Inspect branches](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli/#inspect-branches>)[Inspect updates](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli/#inspect-updates>)[Changing the state of your project's updates](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli/#changing-the-state-of-your-projects-updates>)[Create a new update and publish it](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli/#create-a-new-update-and-publish-it>)[Delete a branch](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli/#delete-a-branch>)[Rename a branch](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli/#rename-a-branch>)[Republish a previous update within a branch](https://docs.expo.dev/eas-update/eas-cli/</eas-update/eas-cli/#republish-a-previous-update-within-a-branch>)
