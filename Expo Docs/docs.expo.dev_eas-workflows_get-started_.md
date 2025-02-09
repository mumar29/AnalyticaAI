[](https://docs.expo.dev/eas-workflows/get-started/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-workflows/get-started/</>)
[Blog](https://docs.expo.dev/eas-workflows/get-started/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-workflows/get-started/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-workflows/get-started/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-workflows/get-started/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-workflows/get-started/</>)[Guides](https://docs.expo.dev/eas-workflows/get-started/</guides/overview>)[EAS](https://docs.expo.dev/eas-workflows/get-started/</eas>)[Reference](https://docs.expo.dev/eas-workflows/get-started/</versions/latest>)[Learn](https://docs.expo.dev/eas-workflows/get-started/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-workflows/get-started/</eas>)[Environment variables](https://docs.expo.dev/eas-workflows/get-started/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-workflows/get-started/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-workflows/get-started/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-workflows/get-started/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/get-started/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-workflows/get-started/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-workflows/get-started/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-workflows/get-started/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-workflows/get-started/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-workflows/get-started/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-workflows/get-started/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-workflows/get-started/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-workflows/get-started/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-workflows/get-started/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-workflows/get-started/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-workflows/get-started/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-workflows/get-started/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-workflows/get-started/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-workflows/get-started/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/get-started/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-workflows/get-started/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-workflows/get-started/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-workflows/get-started/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-workflows/get-started/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-workflows/get-started/</eas/metadata>)[Get started](https://docs.expo.dev/eas-workflows/get-started/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-workflows/get-started/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-workflows/get-started/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-workflows/get-started/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-workflows/get-started/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-workflows/get-started/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-workflows/get-started/</eas/json>)[Webhooks](https://docs.expo.dev/eas-workflows/get-started/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-workflows/get-started/</archive>)[Expo Snack](https://docs.expo.dev/eas-workflows/get-started/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-workflows/get-started/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-workflows/get-started/<https:/expo.dev/mailing-list/signup>)
# Get started with EAS Workflows
[Edit this page](https://docs.expo.dev/eas-workflows/get-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/get-started.mdx> "Edit content of this page on GitHub")
Learn how to use EAS Workflows to automate your development and release processes.
[Edit this page](https://docs.expo.dev/eas-workflows/get-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/get-started.mdx> "Edit content of this page on GitHub")
> EAS Workflows are currently in preview. We may introduce breaking changes in the coming weeks. Got feedback? Send us an email at workflows@expo.dev.
Builds, submissions, updates, and more are all a part of delivering your app to users. EAS Workflows consist of a sequence of jobs, which help you and your team get things done. With workflows, you can build your project, run end-to-end tests, submit that build to the app stores, and then run custom scripts after the submission is complete. Since each job can have prerequisites and conditionals, you can automate your and your team's release process.
How do workflows compare to other CI services?[](https://docs.expo.dev/eas-workflows/get-started/<#how-do-workflows-compare-to-other-ci>)
EAS Workflows are designed to help you and your team release your app. It comes preconfigured with pre-packaged job types that can build, submit, update, run Maestro tests, and more. All job types run on EAS, so you'll only have to manage one set of YAML files, and all the artifacts from your job runs will appear on [expo.dev](https://docs.expo.dev/eas-workflows/get-started/<https:/expo.dev/>).
Other CI services, like CircleCI and GitHub Actions, are more generalized and have the ability to do more than workflows. However, those services also require you to understand more about the implementation of each job. While that is necessary in some cases, workflows help you get common tasks done quickly by pre-packaging the most essential types of jobs for app developers. In addition, workflows are designed to provide you with the fastest possible cloud machine for the task at hand, and we're constantly updating those for you.
EAS Workflows are great for operations related to your Expo apps, while other CICD services will provide a better experience for other types of workflows.
## Set up your project[](https://docs.expo.dev/eas-workflows/get-started/<#set-up-your-project>)
If you haven't already, you'll need to create a project and sync it with EAS:
Create a project and sync it with EAS[](https://docs.expo.dev/eas-workflows/get-started/<#create-a-project-and-sync-it-with>)
You can create a new project with the following command:
Terminal
Copy
`- ``npx create-expo-app@latest`
Once you've created the project, login with your account:
Terminal
Copy
`- ``npx eas-cli@latest login`
Finally, link the project you have locally with EAS:
Terminal
Copy
`- ``npx eas-cli@latest init`
Then, create a directory named .eas/workflows at the root of your project with a YAML file inside of it. For example: .eas/workflows/hello-world.yml.
## Write a workflow[](https://docs.expo.dev/eas-workflows/get-started/<#write-a-workflow>)
Each workflow consists of three top-level elements:
  * `name`: defines the name of the workflow. For example: "Hello World"
  * `on`: defines when this workflow should be triggered. For example, when pushing a new commit to a GitHub branch.
  * `jobs`: a sequence of jobs which can depend on and pass data between each other. For example: a job that runs a unit test followed by a job that builds your project into an app.


Here's an example of a workflow that prints "Hello, world":
.eas/workflows/hello-world.yml
Copy
```
name: Hello World
on:
 push:
  branches: ['*']
jobs:
 Hello World:
  steps:
   - run: echo "Hello, World"

```

Here's another example that creates and submits an iOS build of a project on every push to every branch. This is similar to running `eas build --platform ios --profile production --auto-submit`:
.eas/workflows/ios-build-and-submit.yml
Copy
```
name: Release iOS app
on:
 push:
  branches: ['*']
jobs:
 build:
  type: build
  params:
   platform: ios
   profile: production
 submit:
  needs: [build]
  type: submit
  params:
   build_id: ${{ needs.build.outputs.build_id }}

```

## Configure your project[](https://docs.expo.dev/eas-workflows/get-started/<#configure-your-project>)
To enable workflows to run on events from GitHub, you'll need to install Expo's GitHub app and connect it to your project:
  * Navigate to your project's [GitHub settings](https://docs.expo.dev/eas-workflows/get-started/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5BprojectName%5D/github>)
  * Follow the UI to install the GitHub app. Then search for the GitHub repository that matches the Expo project and connect it.


## Run your workflow[](https://docs.expo.dev/eas-workflows/get-started/<#run-your-workflow>)
Once you have a workflow file and your project is connected to Expo's GitHub app, you can trigger your workflow by pushing a commit to your GitHub repository. For the workflow to run, you'll need to make sure the trigger (defined with `on`) you defined in your workflow is met.
Alternatively, you can trigger a workflow manually by running the following command:
Terminal
Copy
`- ``npx eas-cli@latest workflow:run .eas/workflows/<your-workflow-file>.yml`
Once you do, you can see your workflow running on your project's [workflows page](https://docs.expo.dev/eas-workflows/get-started/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5BprojectName%5D/workflows>).
## Building blocks[](https://docs.expo.dev/eas-workflows/get-started/<#building-blocks>)
Learn more about the building blocks of workflows:
[TriggersLearn how to trigger workflows.](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/triggers>) [JobsLearn which pre-packaged and custom jobs you can run with EAS Workflows.](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/jobs>) [Control flowLearn how to control the flow of your workflows with conditions that run certain jobs based on the result of previous jobs.](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/control-flow>) [VariablesLearn how to use variables in your workflows.](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/variables>)
[PreviousEnvironment variables usage](https://docs.expo.dev/eas-workflows/get-started/</eas/using-environment-variables>)[Next (EAS Workflows)Triggers](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/triggers>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-workflows/get-started/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-workflows/get-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/get-started.mdx>)
  * Last updated on January 22, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-workflows/get-started/<https:/expo.dev/privacy>).
On this page
[Set up your project](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/get-started/#set-up-your-project>)[Write a workflow](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/get-started/#write-a-workflow>)[Configure your project](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/get-started/#configure-your-project>)[Run your workflow](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/get-started/#run-your-workflow>)[Building blocks](https://docs.expo.dev/eas-workflows/get-started/</eas-workflows/get-started/#building-blocks>)
