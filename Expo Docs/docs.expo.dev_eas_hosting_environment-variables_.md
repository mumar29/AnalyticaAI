[](https://docs.expo.dev/eas/hosting/environment-variables/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/hosting/environment-variables/</>)
[Blog](https://docs.expo.dev/eas/hosting/environment-variables/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/hosting/environment-variables/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/hosting/environment-variables/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/hosting/environment-variables/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/hosting/environment-variables/</>)[Guides](https://docs.expo.dev/eas/hosting/environment-variables/</guides/overview>)[EAS](https://docs.expo.dev/eas/hosting/environment-variables/</eas>)[Reference](https://docs.expo.dev/eas/hosting/environment-variables/</versions/latest>)[Learn](https://docs.expo.dev/eas/hosting/environment-variables/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/hosting/environment-variables/</eas>)[Environment variables](https://docs.expo.dev/eas/hosting/environment-variables/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/hosting/environment-variables/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/hosting/environment-variables/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/hosting/environment-variables/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/hosting/environment-variables/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/hosting/environment-variables/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/hosting/environment-variables/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/hosting/environment-variables/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/hosting/environment-variables/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/environment-variables/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/hosting/environment-variables/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/hosting/environment-variables/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/hosting/environment-variables/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/hosting/environment-variables/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/hosting/environment-variables/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/hosting/environment-variables/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/hosting/environment-variables/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/environment-variables/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/hosting/environment-variables/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/hosting/environment-variables/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/hosting/environment-variables/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/hosting/environment-variables/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/hosting/environment-variables/</eas/metadata>)[Get started](https://docs.expo.dev/eas/hosting/environment-variables/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/hosting/environment-variables/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/hosting/environment-variables/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/hosting/environment-variables/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/hosting/environment-variables/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/hosting/environment-variables/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/hosting/environment-variables/</eas/json>)[Webhooks](https://docs.expo.dev/eas/hosting/environment-variables/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/hosting/environment-variables/</archive>)[Expo Snack](https://docs.expo.dev/eas/hosting/environment-variables/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/hosting/environment-variables/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/hosting/environment-variables/<https:/expo.dev/mailing-list/signup>)
# Environment variables
[Edit this page](https://docs.expo.dev/eas/hosting/environment-variables/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/environment-variables.mdx> "Edit content of this page on GitHub")
Learn how to use environment variables in your project.
[Edit this page](https://docs.expo.dev/eas/hosting/environment-variables/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/environment-variables.mdx> "Edit content of this page on GitHub")
An Expo Router web project may include client-side and server-side environment variables. The client-side environment variables are embedded in the app and inlined in the JavaScript bundle when you run `npx expo export`. The server-side environment variables are kept securely on the server and are deployed with the API routes code when you run `eas deploy`.
> With EAS environment variables, only plain text and sensitive [environment variables](https://docs.expo.dev/eas/hosting/environment-variables/</eas/environment-variables#visibility>) can be used. Secrets cannot be deployed with EAS Hosting.
## Client-side environment variables[](https://docs.expo.dev/eas/hosting/environment-variables/<#client-side-environment-variables>)
All the code that runs in the browser is client-side. In an Expo Router project, this includes all code that is _not_ an API Route or server function.
The environment variables in your client-side code are inlined at build time. You should never put any sensitive information in your client-side code, which is why all client-side environment variables must be prefixed with `EXPO_PUBLIC_`[](https://docs.expo.dev/eas/hosting/environment-variables/</guides/environment-variables>).
Then, when you run `npx expo export`, all instances of `process.env.EXPO_PUBLIC_*` environment variables will be replaced with values from the environment.
## Server-side environment variables[](https://docs.expo.dev/eas/hosting/environment-variables/<#server-side-environment-variables>)
All the code in your API routes (that is, files that end with +api.ts) runs on the server.
Since the code running on the server is never visible to the app user, the server-side code can safely use sensitive environment variables such as API keys and tokens.
Unlike client-side environment variables, server-side environment variables are not inlined in the code, they are uploaded with the deployment when you run the `eas deploy` command.
## Environment variables for local development[](https://docs.expo.dev/eas/hosting/environment-variables/<#environment-variables-for-local-development>)
For local development, both server- and client-side environment variables are loaded from a [local .env file](https://docs.expo.dev/eas/hosting/environment-variables/</guides/environment-variables>), which should be gitignored. If you're using EAS environment variables, use `eas env:pull`[](https://docs.expo.dev/eas/hosting/environment-variables/</eas/environment-variables#sync-the-environment-variables-for-local-development-using-eas-envpull>) to retrieve the environment variables for `development`, `preview`, or `production`.
## Storing environment variables[](https://docs.expo.dev/eas/hosting/environment-variables/<#storing-environment-variables>)
The two primary ways of handling environment variables are via EAS environment variables or .env files.
### Using EAS environment variables[](https://docs.expo.dev/eas/hosting/environment-variables/<#using-eas-environment-variables>)
With [EAS environment variables](https://docs.expo.dev/eas/hosting/environment-variables/</eas/environment-variables>), you store all variables in EAS using the EAS CLI or the web UI and pull them down locally as and when necessary.
When using the EAS environment variables, use the `eas env:pull`[](https://docs.expo.dev/eas/hosting/environment-variables/</eas/environment-variables#sync-the-environment-variables-for-local-development-using-eas-envpull>) command to pull down the environment you want to develop against.
For deploying a project with environment variables, note that the environment variables for the client- and server-side code are included at different steps:
  * Running `npx expo export --platform web` will inline the `EXPO_PUBLIC_` variables in the frontend code. So ensure that your .env or .env.local file includes the correct environment variables before running the export command.
  * `eas deploy --environment production` will include all variables for the given environment (in this case, `production`) in the API routes. EAS Environment variables loaded with the `--environment` flag will take precedence over ones defined in .env and .env.local files.


> Environment variables are per deployment, and deployments are immutable. This means that after changing an environment variable, you will need to re-export your project, and re-deploy in order for them to be updated.
[Previous (EAS Hosting)Deployments and aliases](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/deployments-and-aliases>)[Next (EAS Hosting)Custom domain](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/custom-domain>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/hosting/environment-variables/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/hosting/environment-variables/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/environment-variables.mdx>)
  * Last updated on January 14, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/hosting/environment-variables/<https:/expo.dev/privacy>).
On this page
[Client-side environment variables](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/environment-variables/#client-side-environment-variables>)[Server-side environment variables](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/environment-variables/#server-side-environment-variables>)[Environment variables for local development](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/environment-variables/#environment-variables-for-local-development>)[Storing environment variables](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/environment-variables/#storing-environment-variables>)[Using EAS environment variables](https://docs.expo.dev/eas/hosting/environment-variables/</eas/hosting/environment-variables/#using-eas-environment-variables>)
