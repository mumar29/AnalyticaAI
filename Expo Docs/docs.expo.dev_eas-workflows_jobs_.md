[](https://docs.expo.dev/eas-workflows/jobs/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-workflows/jobs/</>)
[Blog](https://docs.expo.dev/eas-workflows/jobs/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-workflows/jobs/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-workflows/jobs/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-workflows/jobs/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-workflows/jobs/</>)[Guides](https://docs.expo.dev/eas-workflows/jobs/</guides/overview>)[EAS](https://docs.expo.dev/eas-workflows/jobs/</eas>)[Reference](https://docs.expo.dev/eas-workflows/jobs/</versions/latest>)[Learn](https://docs.expo.dev/eas-workflows/jobs/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-workflows/jobs/</eas>)[Environment variables](https://docs.expo.dev/eas-workflows/jobs/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-workflows/jobs/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-workflows/jobs/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-workflows/jobs/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/jobs/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-workflows/jobs/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-workflows/jobs/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-workflows/jobs/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-workflows/jobs/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-workflows/jobs/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-workflows/jobs/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-workflows/jobs/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-workflows/jobs/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-workflows/jobs/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-workflows/jobs/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-workflows/jobs/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-workflows/jobs/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-workflows/jobs/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-workflows/jobs/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/jobs/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-workflows/jobs/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-workflows/jobs/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-workflows/jobs/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-workflows/jobs/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-workflows/jobs/</eas/metadata>)[Get started](https://docs.expo.dev/eas-workflows/jobs/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-workflows/jobs/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-workflows/jobs/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-workflows/jobs/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-workflows/jobs/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-workflows/jobs/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-workflows/jobs/</eas/json>)[Webhooks](https://docs.expo.dev/eas-workflows/jobs/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-workflows/jobs/</archive>)[Expo Snack](https://docs.expo.dev/eas-workflows/jobs/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-workflows/jobs/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-workflows/jobs/<https:/expo.dev/mailing-list/signup>)
# Jobs
[Edit this page](https://docs.expo.dev/eas-workflows/jobs/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/jobs.mdx> "Edit content of this page on GitHub")
Learn which pre-packaged and custom jobs you can run with EAS Workflows.
[Edit this page](https://docs.expo.dev/eas-workflows/jobs/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/jobs.mdx> "Edit content of this page on GitHub")
EAS Workflows sequence jobs together to automate your development and release processes. You can run two types of jobs: pre-packaged jobs and custom jobs. Pre-packaged jobs use a `type` property to specify the job type. Custom jobs run custom code that you define in the workflow configuration.
## Job properties[](https://docs.expo.dev/eas-workflows/jobs/<#job-properties>)
All jobs support the following properties:
  * `name` (optional): The name of the job, displayed on the Expo dashboard.
  * `if` (optional): Conditional expression that determines if the job should run. Limited to 250 characters.
  * `needs` (optional): List of job keys that must complete successfully before this job runs
  * `after` (optional): List of job keys that must complete (success or failure) before this job runs


## Build your app[](https://docs.expo.dev/eas-workflows/jobs/<#build-your-app>)
Creates a build from your project:
.eas/workflows/build.yml
Copy
```
jobs:
 build:
  name: Build App
  type: build
  params:
   platform: ios | android # required
   profile: string # optional, default: production

```

## Submit a build to the app stores[](https://docs.expo.dev/eas-workflows/jobs/<#submit-a-build-to-the-app-stores>)
Submits a build to the appropriate app store:
.eas/workflows/submit.yml
Copy
```
jobs:
 submit:
  name: Submit to Store
  type: submit
  params:
   build_id: string # required - usually from another job like ${{ needs.build.outputs.build_id }}
   profile: string # optional, default: production

```

## Publish an update[](https://docs.expo.dev/eas-workflows/jobs/<#publish-an-update>)
Publishes an update:
.eas/workflows/update.yml
Copy
```
jobs:
 update:
  name: Publish Update
  type: update
  params:
   message: string # optional - commit message used if not provided
   platform: android | ios | all # optional
   branch: string # optional - defaults to workflow branch (`github.ref_name`). If triggering from EAS CLI, specify a branch, for example: ${{ github.ref_name || 'testing' }}
   channel: string # optional - provide either branch or channel, not both

```

## End-to-end tests with Maestro[](https://docs.expo.dev/eas-workflows/jobs/<#end-to-end-tests-with-maestro>)
Runs end-to-end tests using Maestro:
.eas/workflows/e2e-test.yml
Copy
```
jobs:
 e2e-test:
  name: Run E2E Tests
  type: maestro
  params:
   build_id: string # required - usually ${{ needs.build.outputs.build_id }}
   flow_path: string | string[] # required - path(s) to Maestro test file(s)

```

## Get a specific build[](https://docs.expo.dev/eas-workflows/jobs/<#get-a-specific-build>)
Gets an existing build based supplied params:
.eas/workflows/get-build.yaml
Copy
```
jobs:
 get-build:
  name: Get Build
  type: get-build
  params:
   platform: ios | android # optional
   profile: string # optional
   app_identifier: string # optional
   app_version: string # optional
   app_build_version: string # optional
   channel: string # optional
   distribution: store | internal | simulator # optional
   fingerprint_hash: string # optional
   git_commit_hash: string # optional
   runtime_version: string # optional
   sdk_version: string # optional
   simulator: boolean # optional

```

## Deploy your app[](https://docs.expo.dev/eas-workflows/jobs/<#deploy-your-app>)
Deploy to EAS Hosting:
.eas/workflows/deploy.yaml
Copy
```
jobs:
 deploy:
  name: Deploy App
  type: deploy
  environment: production | preview | development # optional
  params:
   alias: string # optional - custom alias for the new deployment
   prod: boolean # optional - create a production deployment

```

## Custom jobs[](https://docs.expo.dev/eas-workflows/jobs/<#custom-jobs>)
Run custom code during a workflow:
.eas/workflows/custom-job.yaml
Copy
```
jobs:
 custom-job:
  name: Custom Task
  runs_on: linux-medium | linux-large | macos-medium | macos-large | linux-medium-nested-virtualization | linux-large-nested-virtualization # optional, default: linux-medium
  defaults:
   run:
    working_directory: string # optional - relative to app base directory or absolute from repo root
  outputs:
   key: value # optional - mapping from steps outputs to job outputs, usually ${{ steps.step_id.outputs.output_key }}
  steps:
   # Shell command step
   - name: Run Command # optional
    id: step_id # optional - useful for referencing outputs
    run: echo "Hello World"
    working_directory: string # optional
   # Built-in function step
   - name: Use Function # optional
    id: step_id # optional
    uses: function_name # required - see docs for available functions
    with: # optional - function inputs
     key: value

Show More

```

You can find a list of available functions in the [build in functions](https://docs.expo.dev/eas-workflows/jobs/</custom-builds/schema#built-in-eas-functions>) documentation.
[Previous (EAS Workflows)Triggers](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/triggers>)[Next (EAS Workflows)Control flow](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/control-flow>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-workflows/jobs/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-workflows/jobs/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/jobs.mdx>)
  * Last updated on January 22, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-workflows/jobs/<https:/expo.dev/privacy>).
On this page
[Job properties](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/jobs/#job-properties>)[Build your app](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/jobs/#build-your-app>)[Submit a build to the app stores](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/jobs/#submit-a-build-to-the-app-stores>)[Publish an update](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/jobs/#publish-an-update>)[End-to-end tests with Maestro](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/jobs/#end-to-end-tests-with-maestro>)[Get a specific build](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/jobs/#get-a-specific-build>)[Deploy your app](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/jobs/#deploy-your-app>)[Custom jobs](https://docs.expo.dev/eas-workflows/jobs/</eas-workflows/jobs/#custom-jobs>)
