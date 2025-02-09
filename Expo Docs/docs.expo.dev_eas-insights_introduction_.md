[](https://docs.expo.dev/eas-insights/introduction/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-insights/introduction/</>)
[Blog](https://docs.expo.dev/eas-insights/introduction/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-insights/introduction/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-insights/introduction/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-insights/introduction/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-insights/introduction/</>)[Guides](https://docs.expo.dev/eas-insights/introduction/</guides/overview>)[EAS](https://docs.expo.dev/eas-insights/introduction/</eas>)[Reference](https://docs.expo.dev/eas-insights/introduction/</versions/latest>)[Learn](https://docs.expo.dev/eas-insights/introduction/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-insights/introduction/</eas>)[Environment variables](https://docs.expo.dev/eas-insights/introduction/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-insights/introduction/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-insights/introduction/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-insights/introduction/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-insights/introduction/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-insights/introduction/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-insights/introduction/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-insights/introduction/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-insights/introduction/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-insights/introduction/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-insights/introduction/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-insights/introduction/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-insights/introduction/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-insights/introduction/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-insights/introduction/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-insights/introduction/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-insights/introduction/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-insights/introduction/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-insights/introduction/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-insights/introduction/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-insights/introduction/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-insights/introduction/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-insights/introduction/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-insights/introduction/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-insights/introduction/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-insights/introduction/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-insights/introduction/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-insights/introduction/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-insights/introduction/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-insights/introduction/</eas/metadata>)[Get started](https://docs.expo.dev/eas-insights/introduction/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-insights/introduction/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-insights/introduction/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-insights/introduction/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-insights/introduction/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-insights/introduction/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-insights/introduction/</eas/json>)[Webhooks](https://docs.expo.dev/eas-insights/introduction/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-insights/introduction/</archive>)[Expo Snack](https://docs.expo.dev/eas-insights/introduction/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-insights/introduction/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-insights/introduction/<https:/expo.dev/mailing-list/signup>)
# EAS Insights
[Edit this page](https://docs.expo.dev/eas-insights/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/eas-insights/introduction.mdx> "Edit content of this page on GitHub")
An introduction to EAS Insights which is a preview service for projects using the expo-insights library.
[Edit this page](https://docs.expo.dev/eas-insights/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/eas-insights/introduction.mdx> "Edit content of this page on GitHub")
> EAS Insights is in preview and subject to breaking changes. While in preview, it is free to use.
EAS Insights is a service that will offer a view into a project's performance, usage, and reach. We are currently offering a preview of Insights that is available to all developers, and we will continue to roll out new features and functionality based on user feedback and suggestions.
EAS Insights makes it easy to see the state of your app, providing information about usage across platforms, app store versions, and timeframes.
## Integration with EAS Update[](https://docs.expo.dev/eas-insights/introduction/<#integration-with-eas-update>)
If you're already using [EAS Update](https://docs.expo.dev/eas-insights/introduction/</eas-update/introduction>), we provide certain high-level usage insights without any additional client-side changes. This is possible because by aggregating data from client requests to check for an update into a limited Insights view that shows usage over time, as well as usage broken down by platform.
## Use the `expo-insights` library[](https://docs.expo.dev/eas-insights/introduction/<#use-the-expo-insights-library>)
Developers can add the `expo-insights` library to their projects and gain more precise usage metrics (than those provided by just aggregating update requests) and additional breakdowns by app store version. Currently, the library is limited to sending client events only pertaining to cold starts of the app, but in the future we will expand `expo-insights` to offer new types of events and payloads, to support more advanced functionality.
### Installation[](https://docs.expo.dev/eas-insights/introduction/<#installation>)
To use the `expo-insights`, make sure your app is linked to your EAS project in app.json / app.config.js by running `eas init`, then install the library.
Terminal
`# Install EAS CLI if you have not already`
`- ``npm i -g eas-cli`
`# Initialize your project EAS if you have not already `
`- ``eas init`
`# Install the library`
`- ``npx expo install expo-insights`
After installing the library, create a build either with [EAS](https://docs.expo.dev/eas-insights/introduction/</build/setup>) or [locally](https://docs.expo.dev/eas-insights/introduction/</guides/local-app-development>). The library will automatically send events to EAS Insights when the app is launched.
### View insights[](https://docs.expo.dev/eas-insights/introduction/<#view-insights>)
To view insights data of your app, in the Expo dashboard, go to projects list, select your project and then select Insights from the navigation menu.
[Previous (EAS Metadata - Reference)FAQ](https://docs.expo.dev/eas-insights/introduction/</eas/metadata/faq>)[Next (Distribution)Overview](https://docs.expo.dev/eas-insights/introduction/</distribution/introduction>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-insights/introduction/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-insights/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/eas-insights/introduction.mdx>)
  * Last updated on January 17, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-insights/introduction/<https:/expo.dev/privacy>).
On this page
[Integration with EAS Update](https://docs.expo.dev/eas-insights/introduction/</eas-insights/introduction/#integration-with-eas-update>)[Use the expo-insights library](https://docs.expo.dev/eas-insights/introduction/</eas-insights/introduction/#use-the-expo-insights-library>)[Installation](https://docs.expo.dev/eas-insights/introduction/</eas-insights/introduction/#installation>)[View insights](https://docs.expo.dev/eas-insights/introduction/</eas-insights/introduction/#view-insights>)
