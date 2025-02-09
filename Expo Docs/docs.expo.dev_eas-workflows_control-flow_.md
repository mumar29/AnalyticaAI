[](https://docs.expo.dev/eas-workflows/control-flow/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-workflows/control-flow/</>)
[Blog](https://docs.expo.dev/eas-workflows/control-flow/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-workflows/control-flow/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-workflows/control-flow/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-workflows/control-flow/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-workflows/control-flow/</>)[Guides](https://docs.expo.dev/eas-workflows/control-flow/</guides/overview>)[EAS](https://docs.expo.dev/eas-workflows/control-flow/</eas>)[Reference](https://docs.expo.dev/eas-workflows/control-flow/</versions/latest>)[Learn](https://docs.expo.dev/eas-workflows/control-flow/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-workflows/control-flow/</eas>)[Environment variables](https://docs.expo.dev/eas-workflows/control-flow/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-workflows/control-flow/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-workflows/control-flow/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-workflows/control-flow/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/control-flow/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-workflows/control-flow/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-workflows/control-flow/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-workflows/control-flow/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-workflows/control-flow/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-workflows/control-flow/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-workflows/control-flow/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-workflows/control-flow/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-workflows/control-flow/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-workflows/control-flow/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-workflows/control-flow/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-workflows/control-flow/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-workflows/control-flow/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-workflows/control-flow/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-workflows/control-flow/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/control-flow/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-workflows/control-flow/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-workflows/control-flow/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-workflows/control-flow/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-workflows/control-flow/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-workflows/control-flow/</eas/metadata>)[Get started](https://docs.expo.dev/eas-workflows/control-flow/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-workflows/control-flow/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-workflows/control-flow/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-workflows/control-flow/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-workflows/control-flow/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-workflows/control-flow/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-workflows/control-flow/</eas/json>)[Webhooks](https://docs.expo.dev/eas-workflows/control-flow/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-workflows/control-flow/</archive>)[Expo Snack](https://docs.expo.dev/eas-workflows/control-flow/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-workflows/control-flow/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-workflows/control-flow/<https:/expo.dev/mailing-list/signup>)
# Control flow
[Edit this page](https://docs.expo.dev/eas-workflows/control-flow/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/control-flow.mdx> "Edit content of this page on GitHub")
Learn how to control the flow of EAS Workflows with conditions that run certain jobs based on the result of previous jobs.
[Edit this page](https://docs.expo.dev/eas-workflows/control-flow/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/control-flow.mdx> "Edit content of this page on GitHub")
You can control the flow of your workflows with conditions that run certain jobs based on the result of previous jobs.
## `needs`[](https://docs.expo.dev/eas-workflows/control-flow/<#needs>)
You can add a list of previous job names using the `needs` keyword on a job. If any job from that list fails, the current job will be failed, and if any job from the list is skipped, the current job will be skipped as well.
.eas/workflows/prerequisite.yml
Copy
```
jobs:
 build:
  type: build
  params:
   platform: ios
   profile: production
 end-to-end-test:
  needs: [build]
  type: maestro
  params:
   build_id: ${{ jobs.build.outputs.build_id }}
   flow_path: ['./e2e/flow.yml']

```

## `after`[](https://docs.expo.dev/eas-workflows/control-flow/<#after>)
You can add a list of previous job names using the `after` keyword on a job. Any job in the list will run after the current job completes, no matter if it succeeded or failed.
.eas/workflows/after.yml
Copy
```
jobs:
 build:
  type: build
  params:
   platform: ios
   profile: production
 send_slack_notification:
  after: [build]
  steps:
   - name: Send Slack notification
    inputs:
     message: 'Build completed.'
     slack_hook_url: ${{ secrets.SLACK_WEBHOOK_URL }}

```

## `if`[](https://docs.expo.dev/eas-workflows/control-flow/<#if>)
You can add a condition to a job with the `if` keyword. If the condition evaluates to `true`, the job will run. Otherwise, it will be skipped.
.eas/workflows/conditional.yml
Copy
```
on:
	push: {} # runs on all branches
jobs:
 update:
  type: update
 build:
  name: Build iOS
  type: build
  if: ${{ github.ref == "refs/heads/main" }} # Will only run if on main.
  params:
   profile: production
   platform: ios

```

## Combining conditions[](https://docs.expo.dev/eas-workflows/control-flow/<#combining-conditions>)
You can use both `needs` and `if` conditions in the same job definition. Note that the job will be run if all jobs on the `needs` list are successful and the `if` condition is true. If any job on the `needs` list has been skipped or the `if` condition is false, the current job will be skipped. If any job on the `needs` list has failed, the current job will be failed.
[Previous (EAS Workflows)Jobs](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/jobs>)[Next (EAS Workflows)Variables](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/variables>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-workflows/control-flow/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-workflows/control-flow/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/control-flow.mdx>)
  * Last updated on January 22, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-workflows/control-flow/<https:/expo.dev/privacy>).
On this page
[needs](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/control-flow/#needs>)[after](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/control-flow/#after>)[if](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/control-flow/#if>)[Combining conditions](https://docs.expo.dev/eas-workflows/control-flow/</eas-workflows/control-flow/#combining-conditions>)
