[](https://docs.expo.dev/eas/hosting/get-started/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/hosting/get-started/</>)
[Blog](https://docs.expo.dev/eas/hosting/get-started/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/hosting/get-started/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/hosting/get-started/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/hosting/get-started/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/hosting/get-started/</>)[Guides](https://docs.expo.dev/eas/hosting/get-started/</guides/overview>)[EAS](https://docs.expo.dev/eas/hosting/get-started/</eas>)[Reference](https://docs.expo.dev/eas/hosting/get-started/</versions/latest>)[Learn](https://docs.expo.dev/eas/hosting/get-started/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/hosting/get-started/</eas>)[Environment variables](https://docs.expo.dev/eas/hosting/get-started/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/hosting/get-started/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/hosting/get-started/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/hosting/get-started/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/hosting/get-started/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/hosting/get-started/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/hosting/get-started/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/hosting/get-started/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/hosting/get-started/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/get-started/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/hosting/get-started/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/hosting/get-started/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/hosting/get-started/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/hosting/get-started/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/hosting/get-started/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/hosting/get-started/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/hosting/get-started/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/get-started/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/hosting/get-started/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/hosting/get-started/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/hosting/get-started/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/hosting/get-started/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/hosting/get-started/</eas/metadata>)[Get started](https://docs.expo.dev/eas/hosting/get-started/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/hosting/get-started/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/hosting/get-started/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/hosting/get-started/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/hosting/get-started/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/hosting/get-started/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/hosting/get-started/</eas/json>)[Webhooks](https://docs.expo.dev/eas/hosting/get-started/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/hosting/get-started/</archive>)[Expo Snack](https://docs.expo.dev/eas/hosting/get-started/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/hosting/get-started/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/hosting/get-started/<https:/expo.dev/mailing-list/signup>)
# Deploy your first Expo Router and React Native web app
[Edit this page](https://docs.expo.dev/eas/hosting/get-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/get-started.mdx> "Edit content of this page on GitHub")
Learn how to deploy your Expo Router and React Native web apps to EAS Hosting.
[Edit this page](https://docs.expo.dev/eas/hosting/get-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/get-started.mdx> "Edit content of this page on GitHub")
EAS Hosting allows you to deploy an exported Expo web build to a preview or production URL.
This guide will walk you through the process of creating your first web deployment.
[![Watch: Deploy your Expo Router web project](https://i3.ytimg.com/vi/NaKsfWciJLo/maxresdefault.jpg)Watch: Deploy your Expo Router web project](https://docs.expo.dev/eas/hosting/get-started/<https:/www.youtube.com/watch?v=NaKsfWciJLo>)
## Prerequisites[](https://docs.expo.dev/eas/hosting/get-started/<#prerequisites>)
An Expo user account[](https://docs.expo.dev/eas/hosting/get-started/<#an-expo-user-account>)
EAS Hosting is available to anyone with an Expo account, regardless of whether you pay for EAS or use the Free plan. You can sign up at [expo.dev/signup](https://docs.expo.dev/eas/hosting/get-started/<https:/expo.dev/signup>).
Paid subscribers can create more deployments, have more bandwidth, storage, requests, and may set up a custom domain. Learn more about different plans and benefits at [EAS pricing](https://docs.expo.dev/eas/hosting/get-started/<https:/expo.dev/pricing#host>).
An Expo Router web project[](https://docs.expo.dev/eas/hosting/get-started/<#an-expo-router-web-project>)
If using an existing project, ensure that in your project's app config, the web output (`expo.web.output`[](https://docs.expo.dev/eas/hosting/get-started/</versions/latest/config/app#output>)) is set to either `static` or `server` (single page apps are not supported on EAS Hosting).
Don't have a project yet? No problem. It's quick and easy to create a "Hello world" app that you can use with this guide.
Run the following command to create a new project:
Terminal
Copy
`- ``npx create-expo-app@latest my-app`
1
## Install the latest EAS CLI[](https://docs.expo.dev/eas/hosting/get-started/<#install-the-latest-eas-cli>)
EAS CLI is the command line app you will use to interact with EAS services from your terminal. To install it, run the command:
Terminal
Copy
`- ``npm install --global eas-cli`
You can also use the above command to check if a new version of EAS CLI is available. We encourage you to always stay up to date with the latest version.
> We recommend using `npm` instead of `yarn` for global package installations. You may alternatively use `npx eas-cli@latest`. Remember to use that instead of `eas` whenever it's called for in the documentation.
2
## Log in to your Expo account[](https://docs.expo.dev/eas/hosting/get-started/<#log-in-to-your-expo-account>)
If you are already signed in to an Expo account using Expo CLI, you can skip the steps described in this section. If you are not, run the following command to log in:
Terminal
Copy
`- ``eas login`
You can check whether you are logged in by running `eas whoami`.
3
## Prepare your project[](https://docs.expo.dev/eas/hosting/get-started/<#prepare-your-project>)
In your app config file set `expo.web.output`[](https://docs.expo.dev/eas/hosting/get-started/</versions/latest/config/app#output>) to either `static` or `server`.
  * `static`: Exports your Expo app to a [statically generated web app](https://docs.expo.dev/eas/hosting/get-started/</router/reference/static-rendering>)
  * `server`: Supports [server functions](https://docs.expo.dev/eas/hosting/get-started/</guides/server-components#react-server-functions>) and [API routes](https://docs.expo.dev/eas/hosting/get-started/</router/reference/api-routes>) as well as the static pages for your website


> Don't worry if you're not sure which output mode you need, you can always change this value later and re-deploy.
4
### Export your app[](https://docs.expo.dev/eas/hosting/get-started/<#export-your-app>)
You need to export your web project into a dist directory. To do this, run:
Terminal
Copy
`- ``npx expo export --platform web`
> Remember to re-run this command every time before deploying.
5
### Deploy your app[](https://docs.expo.dev/eas/hosting/get-started/<#deploy-your-app>)
Now publish your website to EAS Hosting:
Terminal
Copy
`- ``eas deploy`
The first time you run this command, it will:
  1. Prompt you to connect an EAS project if you haven't done so yet
  2. Ask you to choose a preview subdomain name


> A preview subdomain name is a prefix used for the preview URL of your app. For example, if you choose `my-app` as your preview subdomain name, your preview URL would look something like this: `https://my-app--or1170q9ix.expo.app/`, and your production URL would be: `https://my-app.expo.app/`.
Once your deployment is complete, the CLI will output a preview URL for where your deployed app is accessible, as well as a link to the deployment details on the EAS Dashboard.
[Previous (EAS Hosting)Introduction](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/introduction>)[Next (EAS Hosting)Deployments and aliases](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/deployments-and-aliases>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/hosting/get-started/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/hosting/get-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/get-started.mdx>)
  * Last updated on January 24, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/hosting/get-started/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/get-started/#prerequisites>)[Install the latest EAS CLI](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/get-started/#install-the-latest-eas-cli>)[Log in to your Expo account](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/get-started/#log-in-to-your-expo-account>)[Prepare your project](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/get-started/#prepare-your-project>)[Export your app](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/get-started/#export-your-app>)[Deploy your app](https://docs.expo.dev/eas/hosting/get-started/</eas/hosting/get-started/#deploy-your-app>)
