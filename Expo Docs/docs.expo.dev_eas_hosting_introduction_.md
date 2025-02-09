[](https://docs.expo.dev/eas/hosting/introduction/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/hosting/introduction/</>)
[Blog](https://docs.expo.dev/eas/hosting/introduction/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/hosting/introduction/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/hosting/introduction/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/hosting/introduction/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/hosting/introduction/</>)[Guides](https://docs.expo.dev/eas/hosting/introduction/</guides/overview>)[EAS](https://docs.expo.dev/eas/hosting/introduction/</eas>)[Reference](https://docs.expo.dev/eas/hosting/introduction/</versions/latest>)[Learn](https://docs.expo.dev/eas/hosting/introduction/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/hosting/introduction/</eas>)[Environment variables](https://docs.expo.dev/eas/hosting/introduction/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/hosting/introduction/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/hosting/introduction/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/hosting/introduction/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/hosting/introduction/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/hosting/introduction/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/hosting/introduction/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/hosting/introduction/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/hosting/introduction/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/introduction/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/hosting/introduction/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/hosting/introduction/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/hosting/introduction/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/hosting/introduction/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/hosting/introduction/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/hosting/introduction/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/hosting/introduction/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/introduction/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/hosting/introduction/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/hosting/introduction/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/hosting/introduction/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/hosting/introduction/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/hosting/introduction/</eas/metadata>)[Get started](https://docs.expo.dev/eas/hosting/introduction/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/hosting/introduction/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/hosting/introduction/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/hosting/introduction/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/hosting/introduction/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/hosting/introduction/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/hosting/introduction/</eas/json>)[Webhooks](https://docs.expo.dev/eas/hosting/introduction/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/hosting/introduction/</archive>)[Expo Snack](https://docs.expo.dev/eas/hosting/introduction/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/hosting/introduction/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/hosting/introduction/<https:/expo.dev/mailing-list/signup>)
# EAS Hosting
[Edit this page](https://docs.expo.dev/eas/hosting/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/introduction.mdx> "Edit content of this page on GitHub")
EAS Hosting is a service for quickly deploying the web projects built using the Expo Router library and React Native web.
[Edit this page](https://docs.expo.dev/eas/hosting/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/introduction.mdx> "Edit content of this page on GitHub")
> EAS Hosting is currently in preview. If you have any issues or feedback, post to our [Discord](https://docs.expo.dev/eas/hosting/introduction/<https:/chat.expo.dev/>) channel or send us an email at hosting@expo.dev.
EAS Hosting is a service for quickly deploying your web projects built using [Expo Router](https://docs.expo.dev/eas/hosting/introduction/</router/introduction>) and React Native web. It seamlessly integrates with the Expo CLI, allowing you to automate the deployment of API routes, server functions, and server-side assets.
Hosting supports both [static](https://docs.expo.dev/eas/hosting/introduction/</router/reference/static-rendering>) and [server mode](https://docs.expo.dev/eas/hosting/introduction/</router/reference/api-routes>) web projects and offers the fastest path from `npx create-expo-app` to a fully deployed web app with API routes.
### Get started[](https://docs.expo.dev/eas/hosting/introduction/<#get-started>)
[Create your first deploymentFrom a new app to a deployed website in under a minute.](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/get-started>) [Assign deployment aliasesCreate aliases and promote deployments to production.](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/deployments-and-aliases>) [Configure environment variablesUse environment variables in your web and server code.](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/environment-variables>) [Custom domainSet up a custom domain for your production deployment.](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/custom-domain>) [API RoutesInspect requests from API routes on the EAS Hosting Dashboard.](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/api-routes>) [Deploy with EAS WorkflowsAutomate deployments with EAS workflows.](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/workflows>)
[Previous (EAS Build - Reference)Limitations](https://docs.expo.dev/eas/hosting/introduction/</build-reference/limitations>)[Next (EAS Hosting)Get started](https://docs.expo.dev/eas/hosting/introduction/</eas/hosting/get-started>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/hosting/introduction/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/hosting/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/introduction.mdx>)
  * Last updated on January 21, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/hosting/introduction/<https:/expo.dev/privacy>).
