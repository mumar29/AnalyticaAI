[](https://docs.expo.dev/eas-workflows/triggers/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-workflows/triggers/</>)
[Blog](https://docs.expo.dev/eas-workflows/triggers/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-workflows/triggers/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-workflows/triggers/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-workflows/triggers/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-workflows/triggers/</>)[Guides](https://docs.expo.dev/eas-workflows/triggers/</guides/overview>)[EAS](https://docs.expo.dev/eas-workflows/triggers/</eas>)[Reference](https://docs.expo.dev/eas-workflows/triggers/</versions/latest>)[Learn](https://docs.expo.dev/eas-workflows/triggers/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-workflows/triggers/</eas>)[Environment variables](https://docs.expo.dev/eas-workflows/triggers/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-workflows/triggers/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-workflows/triggers/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-workflows/triggers/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/triggers/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-workflows/triggers/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-workflows/triggers/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-workflows/triggers/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-workflows/triggers/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-workflows/triggers/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-workflows/triggers/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-workflows/triggers/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-workflows/triggers/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-workflows/triggers/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-workflows/triggers/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-workflows/triggers/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-workflows/triggers/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-workflows/triggers/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-workflows/triggers/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/triggers/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-workflows/triggers/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-workflows/triggers/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-workflows/triggers/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-workflows/triggers/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-workflows/triggers/</eas/metadata>)[Get started](https://docs.expo.dev/eas-workflows/triggers/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-workflows/triggers/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-workflows/triggers/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-workflows/triggers/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-workflows/triggers/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-workflows/triggers/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-workflows/triggers/</eas/json>)[Webhooks](https://docs.expo.dev/eas-workflows/triggers/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-workflows/triggers/</archive>)[Expo Snack](https://docs.expo.dev/eas-workflows/triggers/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-workflows/triggers/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-workflows/triggers/<https:/expo.dev/mailing-list/signup>)
# Triggers
[Edit this page](https://docs.expo.dev/eas-workflows/triggers/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/triggers.mdx> "Edit content of this page on GitHub")
Learn which triggers are available to work with EAS Workflows.
[Edit this page](https://docs.expo.dev/eas-workflows/triggers/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/triggers.mdx> "Edit content of this page on GitHub")
Triggers define when a workflow should kick off. When its conditions are met, the workflow will start.
## On push[](https://docs.expo.dev/eas-workflows/triggers/<#on-push>)
You can trigger a workflow on a push to a GitHub branch with the `push` trigger.
.eas/workflows/hello-world.yml
Copy
```
name: Hello World
on:
 push:
	 branches:
	  - 'main'
	  - 'feature/**'
	  # other branches names and globs
jobs:
 # ...

```

## On pull request[](https://docs.expo.dev/eas-workflows/triggers/<#on-pull-request>)
You can trigger a workflow on a pull request with the `pull_request` trigger.
.eas/workflows/hello-world.yml
Copy
```
name: Hello World
on:
 pull_request:
	 branches:
		 - 'main'
		 # other branch names and globs
jobs:
 # ...

```

## More[](https://docs.expo.dev/eas-workflows/triggers/<#more>)
EAS Workflows also support triggering on all branches, on both push and pull request events:
.eas/workflows/hello-world.yml
Copy
```
name: Hello World
on:
	push: {} # this will default to `branches: ['*']`, meaning "run on all branches"
	pull_request: {}
jobs:
 # ...

```

[Previous (EAS Workflows)Get started](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/get-started>)[Next (EAS Workflows)Jobs](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/jobs>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-workflows/triggers/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-workflows/triggers/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/triggers.mdx>)
  * Last updated on January 22, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-workflows/triggers/<https:/expo.dev/privacy>).
On this page
[On push](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/triggers/#on-push>)[On pull request](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/triggers/#on-pull-request>)[More](https://docs.expo.dev/eas-workflows/triggers/</eas-workflows/triggers/#more>)
