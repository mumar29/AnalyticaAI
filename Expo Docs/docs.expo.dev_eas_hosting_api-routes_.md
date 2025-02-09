[](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/hosting/api-routes/</>)
[Blog](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/hosting/api-routes/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/hosting/api-routes/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/hosting/api-routes/</>)[Guides](https://docs.expo.dev/eas/hosting/api-routes/</guides/overview>)[EAS](https://docs.expo.dev/eas/hosting/api-routes/</eas>)[Reference](https://docs.expo.dev/eas/hosting/api-routes/</versions/latest>)[Learn](https://docs.expo.dev/eas/hosting/api-routes/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/hosting/api-routes/</eas>)[Environment variables](https://docs.expo.dev/eas/hosting/api-routes/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/hosting/api-routes/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/hosting/api-routes/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/hosting/api-routes/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/hosting/api-routes/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/hosting/api-routes/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/hosting/api-routes/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/hosting/api-routes/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/hosting/api-routes/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/api-routes/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/hosting/api-routes/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/hosting/api-routes/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/hosting/api-routes/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/hosting/api-routes/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/hosting/api-routes/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/hosting/api-routes/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/hosting/api-routes/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/api-routes/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/hosting/api-routes/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/hosting/api-routes/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/hosting/api-routes/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/hosting/api-routes/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/hosting/api-routes/</eas/metadata>)[Get started](https://docs.expo.dev/eas/hosting/api-routes/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/hosting/api-routes/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/hosting/api-routes/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/hosting/api-routes/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/hosting/api-routes/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/hosting/api-routes/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/hosting/api-routes/</eas/json>)[Webhooks](https://docs.expo.dev/eas/hosting/api-routes/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/hosting/api-routes/</archive>)[Expo Snack](https://docs.expo.dev/eas/hosting/api-routes/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/hosting/api-routes/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev/mailing-list/signup>)
# API Routes
[Edit this page](https://docs.expo.dev/eas/hosting/api-routes/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/api-routes.mdx> "Edit content of this page on GitHub")
Learn how to inspect requests from API routes on the EAS Hosting dashboard.
[Edit this page](https://docs.expo.dev/eas/hosting/api-routes/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/api-routes.mdx> "Edit content of this page on GitHub")
> This page is for EAS Hosting specific details about API routes. For general documentation about the topic, see the [API routes](https://docs.expo.dev/eas/hosting/api-routes/</router/reference/api-routes>) documentation under Expo Router.
Crashes, logs, and requests that occur in API routes can be inspected on the EAS Hosting dashboard.
### Crashes[](https://docs.expo.dev/eas/hosting/api-routes/<#crashes>)
A crash is any uncaught error that is thrown while a request was handled, which prevented a response from being returned, for example, `throw new Error("An error!")`. Crashes may be viewed on the [Hosting crashes](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev/accounts/%5BaccountName%5D/projects/%5BprojectName%5D/hosting/crashes>) page.
Crashes are grouped. If similar crashes are detected, you will see just one line item for them. The crash details will show the stack trace and metadata for the first and last known occurrence of the crash.
![EAS dashboard showing a list of crashes](https://docs.expo.dev/static/images/eas-hosting/crashes.png)
### Logs[](https://docs.expo.dev/eas/hosting/api-routes/<#logs>)
All logs from API routes and server functions (`console.log`, `console.info`, `console.error`, and so on) are recorded on the deployment level logs page. Go to [Hosting deployments](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev/accounts/%5BaccountName%5D/projects/%5BprojectName%5D/hosting/deployments>) > _select a deployment_ > Logs.
![EAS dashboard showing a list of logs](https://docs.expo.dev/static/images/eas-hosting/logs.png)
### Requests[](https://docs.expo.dev/eas/hosting/api-routes/<#requests>)
Requests can be viewed on the project level at [Hosting requests](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev/accounts/%5BaccountName%5D/projects/%5BprojectName%5D/hosting/requests>) and deployment level [Hosting Deployments](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev/accounts/%5BaccountName%5D/projects/%5BprojectName%5D/hosting/deployments>) > _select a deployment_ > Requests.
This will show a list of requests against your service, with metadata (status, browser, region, duration, and more) per request. These include all requests to the service, including requests to API routes.
![EAS dashboard showing a list of requests](https://docs.expo.dev/static/images/eas-hosting/requests.png)
### Looking up a request by ID[](https://docs.expo.dev/eas/hosting/api-routes/<#looking-up-a-request-by-id>)
All response headers include a `Cf-Ray` header that looks like `8ffb63895cf6779b-LHR`. The first part of this is the request ID and you may look up the request on the EAS dashboard via this ID using the filters in [Hosting Requests](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev/accounts/%5BaccountName%5D/projects/%5BprojectName%5D/hosting/requests>).
This request ID is also displayed on any service-level error pages.
### Sampling[](https://docs.expo.dev/eas/hosting/api-routes/<#sampling>)
If a deployment receives a high amount of traffic, data that EAS Hosting records will be [downsampled](https://docs.expo.dev/eas/hosting/api-routes/<https:/developers.cloudflare.com/analytics/graphql-api/sampling/>). This means as your deployments receive more requests, fewer data points will be recorded, and you may not see individual requests, logs, and crashes be listed one by one. However, statistical counts, such as number of requests or crashes, will be estimated to still reflect all requests proportionally.
[Previous (EAS Hosting)Custom domain](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/custom-domain>)[Next (EAS Hosting)Workflows](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/workflows>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/hosting/api-routes/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/hosting/api-routes/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/api-routes.mdx>)
  * Last updated on January 14, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/hosting/api-routes/<https:/expo.dev/privacy>).
On this page
[Crashes](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/api-routes/#crashes>)[Logs](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/api-routes/#logs>)[Requests](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/api-routes/#requests>)[Looking up a request by ID](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/api-routes/#looking-up-a-request-by-id>)[Sampling](https://docs.expo.dev/eas/hosting/api-routes/</eas/hosting/api-routes/#sampling>)
