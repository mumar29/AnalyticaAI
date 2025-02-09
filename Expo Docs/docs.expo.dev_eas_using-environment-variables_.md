[](https://docs.expo.dev/eas/using-environment-variables/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/using-environment-variables/</>)
[Blog](https://docs.expo.dev/eas/using-environment-variables/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/using-environment-variables/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/using-environment-variables/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/using-environment-variables/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/using-environment-variables/</>)[Guides](https://docs.expo.dev/eas/using-environment-variables/</guides/overview>)[EAS](https://docs.expo.dev/eas/using-environment-variables/</eas>)[Reference](https://docs.expo.dev/eas/using-environment-variables/</versions/latest>)[Learn](https://docs.expo.dev/eas/using-environment-variables/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/using-environment-variables/</eas>)[Environment variables](https://docs.expo.dev/eas/using-environment-variables/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/using-environment-variables/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/using-environment-variables/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/using-environment-variables/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/using-environment-variables/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/using-environment-variables/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/using-environment-variables/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/using-environment-variables/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/using-environment-variables/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/using-environment-variables/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/using-environment-variables/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/using-environment-variables/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/using-environment-variables/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/using-environment-variables/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/using-environment-variables/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/using-environment-variables/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/using-environment-variables/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/using-environment-variables/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/using-environment-variables/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/using-environment-variables/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/using-environment-variables/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/using-environment-variables/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/using-environment-variables/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/using-environment-variables/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/using-environment-variables/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/using-environment-variables/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/using-environment-variables/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/using-environment-variables/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/using-environment-variables/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/using-environment-variables/</eas/metadata>)[Get started](https://docs.expo.dev/eas/using-environment-variables/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/using-environment-variables/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/using-environment-variables/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/using-environment-variables/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/using-environment-variables/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/using-environment-variables/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/using-environment-variables/</eas/json>)[Webhooks](https://docs.expo.dev/eas/using-environment-variables/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/using-environment-variables/</archive>)[Expo Snack](https://docs.expo.dev/eas/using-environment-variables/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/using-environment-variables/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/using-environment-variables/<https:/expo.dev/mailing-list/signup>)
# Using EAS environment variables
[Edit this page](https://docs.expo.dev/eas/using-environment-variables/<https:/github.com/expo/expo/edit/main/docs/pages/eas/using-environment-variables.mdx> "Edit content of this page on GitHub")
Learn how to use environment variables in EAS with examples.
[Edit this page](https://docs.expo.dev/eas/using-environment-variables/<https:/github.com/expo/expo/edit/main/docs/pages/eas/using-environment-variables.mdx> "Edit content of this page on GitHub")
[Environment variables in EAS](https://docs.expo.dev/eas/using-environment-variables/</eas/environment-variables>) describes concepts related to using environment variables in EAS and differences in handling them with Expo CLI and EAS CLI. In this guide, you will learn how to use environment variables in EAS with practical examples.
The example used in this guide is a simple project that uses common environment variables during the build process and for configuration purposes:
  * `EXPO_PUBLIC_API_URL`: a plain text `EXPO_PUBLIC_`[](https://docs.expo.dev/eas/using-environment-variables/</guides/environment-variables>) variable that holds the URL of the API server
  * `APP_VARIANT`: a plain text variable to select an [app variant](https://docs.expo.dev/eas/using-environment-variables/</tutorial/eas/multiple-app-variants>)
  * `GOOGLE_SERVICES_JSON`: a secret file variable to supply your git ignored google-services.json file to the build job
  * `SENTRY_AUTH_TOKEN`: a sensitive variable that holds the authentication token for Sentry used to upload source maps after builds and updates


## Use environment variables in your code[](https://docs.expo.dev/eas/using-environment-variables/<#use-environment-variables-in-your-code>)
The environment variables with the `EXPO_PUBLIC_`[](https://docs.expo.dev/eas/using-environment-variables/</guides/environment-variables>) prefix are available as `process.env` variables in your app's code. This means you can use them to dynamically configure your app behavior based on the values from environment variables.
```
import { Button } from 'react-native';
function Post() {
 const apiUrl = process.env.EXPO_PUBLIC_API_URL;
 async function onPress() {
  await fetch(apiUrl, { ... })
 }
 return <Button onPress={onPress} title="Post" />;
}

```

In above example, `EXPO_PUBLIC_API_URL` is used to dynamically set the API URL for the fetch request.
> Do not store sensitive information in `EXPO_PUBLIC_` variables, such as private keys. These variables will be visible in plain-text in your compiled app.
Other variables, without the `EXPO_PUBLIC_` prefix, can be used during app config resolution. An example of this is the `APP_VARIANT` variable used to determine the app name and package name or bundle identifier based on the selected app variant.
app.config.js
Copy
```
const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';
const getUniqueIdentifier = () => {
 if (IS_DEV) {
  return 'com.yourname.stickersmash.dev';
 }
 if (IS_PREVIEW) {
  return 'com.yourname.stickersmash.preview';
 }
 return 'com.yourname.stickersmash';
};
const getAppName = () => {
 if (IS_DEV) {
  return 'StickerSmash (Dev)';
 }
 if (IS_PREVIEW) {
  return 'StickerSmash (Preview)';
 }
 return 'StickerSmash: Emoji Stickers';
};
export default {
 name: getAppName(),
 %%placeholder-start%%... %%placeholder-end%%
 ios: {
  bundleIdentifier: getUniqueIdentifier(),
  %%placeholder-start%%... %%placeholder-end%%
 },
 android: {
  package: getUniqueIdentifier(),
  %%placeholder-start%%... %%placeholder-end%%
 },
};

Show More

```

The `GOOGLE_SERVICES_JSON` is a secret file variable in that is not readable outside of EAS servers and is used to provide the git ignored google-services.json file to the build job. To use it in the app config, you can use the `process.env` variable and provide a fallback value in case the variable is not set (for local development when you usually have it inside your project's repository).
app.config.js
Copy
```
export default {
 %%placeholder-start%%...%%placeholder-end%%
 android: {
  googleServicesFile: process.env.GOOGLE_SERVICES_JSON ?? '/local/path/to/google-services.json',
  %%placeholder-start%%...%%placeholder-end%%
 },
};

```

## Create environment variables[](https://docs.expo.dev/eas/using-environment-variables/<#create-environment-variables>)
To create environment variables on EAS servers, you can use the [environment variables creation form](https://docs.expo.dev/eas/using-environment-variables/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/environment-variables/new>) page or `eas env:create` command.
In the form, you can specify the name, value, environment(s) and visibility for the variable.
![Create an environment variable form](https://docs.expo.dev/static/images/env-vars/add.png)
Created environment variables will be available in the list on the [Environment Variables](https://docs.expo.dev/eas/using-environment-variables/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/environment-variables>) page on the Expo website.
Based on the environment variables in this example, the list will look like this:
![List of successfully created environment variables](https://docs.expo.dev/static/images/env-vars/list.png)
In above example, the `SENTRY_AUTH_TOKEN` can be treated as a sensitive environment variable. It is used to authenticate Sentry to upload source maps after builds and updates, so it has to be accessible outside of EAS servers.
## Pull environment variables for your local development[](https://docs.expo.dev/eas/using-environment-variables/<#pull-environment-variables-for-your-local-development>)
The easiest way to use the EAS environment variables for local development is to pull them into a .env file using the `eas env:pull --environment environment` command. You can also use the Export option on the [Expo website](https://docs.expo.dev/eas/using-environment-variables/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/environment-variables>) to download the file and store it inside your project.
Run the following command to create a .env file in the root of your project:
Terminal
Copy
`- ``eas env:pull --environment development`
The created .env file will look like this:
.env.local
Copy
```
# Environment: development
APP_VARIANT=development
EXPO_PUBLIC_API_URL=https://staging.my-api-url.mycompany.com
# GOOGLE_SERVICES_JSON=***** (secret variables are not available for reading)
SENTRY_AUTH_TOKEN=token

```

The downloaded `EXPO_PUBLIC_` variables are available for local development when using the `npx expo start` command. The `GOOGLE_SERVICES_JSON` variable is not available to be pulled to the local environment since it is a secret variable.
> It is best to add all of the .env files to .gitignore to avoid committing them to your repository and exposing sensitive information. Committing a .env file may additionally lead to environment variables resolution conflicts.
## Use environment variables with EAS Build[](https://docs.expo.dev/eas/using-environment-variables/<#use-environment-variables-with-eas-build>)
To have a full control over the environments used for your builds, you can specify the `environment`[](https://docs.expo.dev/eas/using-environment-variables/</eas/json#environment>) field in the build profiles settings in the eas.json file.
eas.json
Copy
```
{
 "build": {
  "development": {
   "environment": "development"
   %%placeholder-start%%... %%placeholder-end%%
  },
  "preview": {
   "environment": "preview"
   %%placeholder-start%%... %%placeholder-end%%
  },
  "production": {
   "environment": "production"
   %%placeholder-start%%... %%placeholder-end%%
  },
  "my-profile": {
   "environment": "production"
   %%placeholder-start%%... %%placeholder-end%%
  }
 }
}

Show More

```

All of the environment variables from the selected environment will be used during the build process. Plain text and sensitive variables will be available when resolving build configuration based on the dynamic app config in EAS CLI as well.
> The environment variables of secret type are not available during build configuration resolution in EAS CLI as they are not readable outside of the EAS servers.
In this example app, all of the environment variables except `GOOGLE_SERVICES_JSON` (which is secret) will be available during build configuration resolution in EAS CLI.
It's especially important in this context to have the correct visibility set for the `APP_VARIANT` variable so that the variable available in EAS CLI and is able to generate credentials for the correct package name and bundle identifier.
## Use environment variables with EAS Update[](https://docs.expo.dev/eas/using-environment-variables/<#use-environment-variables-with-eas-update>)
The most convenient way to use EAS environment variables with EAS Update is to run the `eas update` command with the `--environment` flag specified:
Terminal
Copy
`- ``eas update --environment production`
When the `--environment` flag is used, only the environment variables from the specified EAS environment will be used during the update process. This flag allows you to use the same environment variables while creating updates as with creating builds.
> The secret variables will not be available during the update process as they are not readable outside of EAS servers.
> The default behavior of the `eas update` command is to use .env files if the `--environment` flag is not specified.
## Use environment variables for other commands[](https://docs.expo.dev/eas/using-environment-variables/<#use-environment-variables-for-other-commands>)
One way to supply non-secret EAS environment variables to other EAS commands is to use the `eas env:exec` command.
Terminal
Copy
`- ``eas env:exec --environment production 'echo $APP_VARIANT'`
For example, it can be useful when uploading source maps to Sentry using a `SENTRY_AUTH_TOKEN`[](https://docs.expo.dev/eas/using-environment-variables/</guides/using-sentry>) variable after an update bundle is created.
Terminal
Copy
`- ``eas env:exec --environment production 'npx sentry-expo-upload-sourcemaps dist'`
[PreviousEnvironment variables](https://docs.expo.dev/eas/using-environment-variables/</eas/environment-variables>)[Next (EAS Workflows)Get started](https://docs.expo.dev/eas/using-environment-variables/</eas-workflows/get-started>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/using-environment-variables/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/using-environment-variables/<https:/github.com/expo/expo/edit/main/docs/pages/eas/using-environment-variables.mdx>)
  * Last updated on December 04, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/using-environment-variables/<https:/expo.dev/privacy>).
On this page
[Use environment variables in your code](https://docs.expo.dev/eas/using-environment-variables/</eas/using-environment-variables/#use-environment-variables-in-your-code>)[Create environment variables](https://docs.expo.dev/eas/using-environment-variables/</eas/using-environment-variables/#create-environment-variables>)[Pull environment variables for your local development](https://docs.expo.dev/eas/using-environment-variables/</eas/using-environment-variables/#pull-environment-variables-for-your-local-development>)[Use environment variables with EAS Build](https://docs.expo.dev/eas/using-environment-variables/</eas/using-environment-variables/#use-environment-variables-with-eas-build>)[Use environment variables with EAS Update](https://docs.expo.dev/eas/using-environment-variables/</eas/using-environment-variables/#use-environment-variables-with-eas-update>)[Use environment variables for other commands](https://docs.expo.dev/eas/using-environment-variables/</eas/using-environment-variables/#use-environment-variables-for-other-commands>)
