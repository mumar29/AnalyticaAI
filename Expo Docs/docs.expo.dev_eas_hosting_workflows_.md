[](https://docs.expo.dev/eas/hosting/workflows/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/hosting/workflows/</>)
[Blog](https://docs.expo.dev/eas/hosting/workflows/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/hosting/workflows/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/hosting/workflows/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/hosting/workflows/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/hosting/workflows/</>)[Guides](https://docs.expo.dev/eas/hosting/workflows/</guides/overview>)[EAS](https://docs.expo.dev/eas/hosting/workflows/</eas>)[Reference](https://docs.expo.dev/eas/hosting/workflows/</versions/latest>)[Learn](https://docs.expo.dev/eas/hosting/workflows/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/hosting/workflows/</eas>)[Environment variables](https://docs.expo.dev/eas/hosting/workflows/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/hosting/workflows/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/hosting/workflows/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/hosting/workflows/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/hosting/workflows/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/hosting/workflows/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/hosting/workflows/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/hosting/workflows/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/hosting/workflows/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/workflows/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/hosting/workflows/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/hosting/workflows/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/hosting/workflows/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/hosting/workflows/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/hosting/workflows/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/hosting/workflows/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/hosting/workflows/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/workflows/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/hosting/workflows/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/hosting/workflows/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/hosting/workflows/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/hosting/workflows/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/hosting/workflows/</eas/metadata>)[Get started](https://docs.expo.dev/eas/hosting/workflows/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/hosting/workflows/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/hosting/workflows/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/hosting/workflows/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/hosting/workflows/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/hosting/workflows/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/hosting/workflows/</eas/json>)[Webhooks](https://docs.expo.dev/eas/hosting/workflows/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/hosting/workflows/</archive>)[Expo Snack](https://docs.expo.dev/eas/hosting/workflows/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/hosting/workflows/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/hosting/workflows/<https:/expo.dev/mailing-list/signup>)
# Deploy with Workflows
[Edit this page](https://docs.expo.dev/eas/hosting/workflows/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/workflows.mdx> "Edit content of this page on GitHub")
Learn how to automate EAS Hosting deployments with Workflows.
[Edit this page](https://docs.expo.dev/eas/hosting/workflows/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/workflows.mdx> "Edit content of this page on GitHub")
EAS Workflows is a great way to automate the web deployment of your project to EAS Hosting with pull request (PR) previews and production deployments.
## Setup workflows[](https://docs.expo.dev/eas/hosting/workflows/<#setup-workflows>)
To use [EAS workflows](https://docs.expo.dev/eas/hosting/workflows/</eas-workflows/get-started>) to automatically deploy your project, follow the instructions in [Get started with EAS workflows](https://docs.expo.dev/eas/hosting/workflows/</eas-workflows/get-started>) and add the [GitHub integration](https://docs.expo.dev/eas/hosting/workflows/</eas-workflows/get-started#configure-your-project>) for your project.
## Create a deployment workflow[](https://docs.expo.dev/eas/hosting/workflows/<#create-a-deployment-workflow>)
Add the following file to .eas/workflows/deploy.yml. This will use the production environment variables, export the web bundle, deploy your project and promote it to production whenever you push to the `main` branch.
```
name: Deploy
on:
 push:
  branches: ['main']
jobs:
 deploy:
  type: deploy
  name: Deploy
  environment: production
  params:
   prod: true

```

Now, whenever a commit is pushed to `main` or a PR is merged, the workflow will run to deploy your website.
You can also test this workflow by triggering it manually:
Terminal
Copy
`- ``eas workflow:run .eas/workflows/deploy.yml`
[Previous (EAS Hosting)Monitoring API routes](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/api-routes>)[Next (EAS Hosting - Reference)Caching](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/reference/caching>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/hosting/workflows/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/hosting/workflows/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/workflows.mdx>)
  * Last updated on January 15, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/hosting/workflows/<https:/expo.dev/privacy>).
On this page
[Setup workflows](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/workflows/#setup-workflows>)[Create a deployment workflow](https://docs.expo.dev/eas/hosting/workflows/</eas/hosting/workflows/#create-a-deployment-workflow>)
