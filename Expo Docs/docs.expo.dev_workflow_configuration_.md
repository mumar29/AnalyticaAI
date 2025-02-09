[](https://docs.expo.dev/workflow/configuration/<https:/expo.dev>)[Docs](https://docs.expo.dev/workflow/configuration/</>)
[Blog](https://docs.expo.dev/workflow/configuration/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/workflow/configuration/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/workflow/configuration/<https:/github.com/expo/expo>)[](https://docs.expo.dev/workflow/configuration/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/workflow/configuration/</>)[Guides](https://docs.expo.dev/workflow/configuration/</guides/overview>)[EAS](https://docs.expo.dev/workflow/configuration/</eas>)[Reference](https://docs.expo.dev/workflow/configuration/</versions/latest>)[Learn](https://docs.expo.dev/workflow/configuration/</tutorial/overview>)
[Overview](https://docs.expo.dev/workflow/configuration/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/workflow/configuration/</workflow/overview>)[Configure with app config](https://docs.expo.dev/workflow/configuration/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/workflow/configuration/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/workflow/configuration/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/workflow/configuration/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/workflow/configuration/</guides/permissions>)[Environment variables](https://docs.expo.dev/workflow/configuration/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/workflow/configuration/</router/introduction>)[Installation](https://docs.expo.dev/workflow/configuration/</router/installation>)[Create pages](https://docs.expo.dev/workflow/configuration/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/workflow/configuration/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/workflow/configuration/</router/layouts>)[Error handling](https://docs.expo.dev/workflow/configuration/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/workflow/configuration/</modules/overview>)[Get started](https://docs.expo.dev/workflow/configuration/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/workflow/configuration/</push-notifications/overview>)[About notification types](https://docs.expo.dev/workflow/configuration/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/workflow/configuration/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/workflow/configuration/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/workflow/configuration/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/workflow/configuration/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/workflow/configuration/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/workflow/configuration/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/workflow/configuration/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/workflow/configuration/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/workflow/configuration/</archive>)[Expo Snack](https://docs.expo.dev/workflow/configuration/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/workflow/configuration/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/workflow/configuration/<https:/expo.dev/mailing-list/signup>)
# Configure with app config
[Edit this page](https://docs.expo.dev/workflow/configuration/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/configuration.mdx> "Edit content of this page on GitHub")
Learn about what app.json/app.config.js/app.config.ts files are and how you can customize and use them dynamically.
[Edit this page](https://docs.expo.dev/workflow/configuration/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/configuration.mdx> "Edit content of this page on GitHub")
The app config (app.json, app.config.js, app.config.ts) is used for configuring [Expo Prebuild](https://docs.expo.dev/workflow/configuration/</workflow/prebuild>) generation, how a project loads in [Expo Go](https://docs.expo.dev/workflow/configuration/</get-started/expo-go>), and the OTA update manifest.
It must be located at the root of your project, next to the package.json. Here is a minimal example:
app.json
Copy
```
{
 "name": "My app",
 "slug": "my-app"
}

```

If your Expo config has a top-level `expo: {}` object, then this will be used in place of the root object and all other keys will be ignored.
[App config schema referenceExplore the full schema of the app config (app.json/app.config.js).](https://docs.expo.dev/workflow/configuration/</versions/latest/config/app>)
## Properties[](https://docs.expo.dev/workflow/configuration/<#properties>)
The app config configures many things such as app name, icon, splash screen, deep linking scheme, API keys to use for some services and so on. For a complete list of available properties, see [app.json/app.config.js/app.config.ts reference](https://docs.expo.dev/workflow/configuration/</versions/latest/config/app>).
> Do you use Visual Studio Code? If so, we recommend that you install the [Expo Tools](https://docs.expo.dev/workflow/configuration/<https:/marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools>) extension to get auto-completion of properties in app.json files.
## Reading configuration values in your app[](https://docs.expo.dev/workflow/configuration/<#reading-configuration-values-in-your-app>)
Most configuration in the app config is accessible at runtime from your JavaScript code, using `Constants.expoConfig`[](https://docs.expo.dev/workflow/configuration/</versions/latest/sdk/constants#nativeconstants--properties>). You should not include any sensitive information in the app config (with a few exceptions for fields that are filtered out, as outlined below).
You can verify which configuration will be embedded in your builds/updates and available at runtime by running `npx expo config --type public`.
Which fields are filtered out of the public app config?[](https://docs.expo.dev/workflow/configuration/<#which-fields-are-filtered-out-of-the>)
The following fields are filtered out of the public app config (and not accessible through the `Constants.expoConfig` object):
  * `hooks`[](https://docs.expo.dev/workflow/configuration/</versions/latest/config/app#hooks>)
  * `ios.config`[](https://docs.expo.dev/workflow/configuration/</versions/latest/config/app#config>)
  * `android.config`[](https://docs.expo.dev/workflow/configuration/</versions/latest/config/app#config-1>)
  * `updates.codeSigningCertificate`[](https://docs.expo.dev/workflow/configuration/</versions/latest/config/app#codesigningcertificate>)
  * `updates.codeSigningMetadata`[](https://docs.expo.dev/workflow/configuration/</versions/latest/config/app#codesigningmetadata>)


> You should also avoid importing app.json or app.config.js directly in your JavaScript code, because this will import the entire file rather than a processed version of it. Instead, use `Constants.expoConfig`[](https://docs.expo.dev/workflow/configuration/</versions/latest/sdk/constants#nativeconstants--properties>) to access the configuration.
## Extending configuration[](https://docs.expo.dev/workflow/configuration/<#extending-configuration>)
Library authors can extend the app config by using [Expo Config plugins](https://docs.expo.dev/workflow/configuration/</config-plugins/introduction>).
> Config plugins are mostly used to configure the `npx expo prebuild`[](https://docs.expo.dev/workflow/configuration/</workflow/prebuild>) command.
## Dynamic configuration[](https://docs.expo.dev/workflow/configuration/<#dynamic-configuration>)
For more customization, you can use the JavaScript (app.config.js) or [TypeScript](https://docs.expo.dev/workflow/configuration/</workflow/configuration#using-typescript-for-configuration-appconfigts-instead-of>) (app.config.ts). These configs have the following properties:
  * Comments, variables, and single quotes.
  * ESM import syntax (the `import` keyword) is not supported, except when using [TypeScript with `ts-node`](https://docs.expo.dev/workflow/configuration/</guides/typescript#appconfigjs>). JS files that are compatible with your current version of Node.js can be imported with `require()`.
  * TypeScript support with nullish coalescing and optional chaining.
  * Updated whenever Metro bundler reloads.
  * Provide environment information to your app.
  * Does not support Promises.


For example, you can export an object to define your custom config:
app.config.js
Copy
```
const myValue = 'My App';
module.exports = {
 name: myValue,
 version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
 // All values in extra will be passed to your app.
 extra: {
  fact: 'kittens are cool',
 },
};

```

The `"extra"` key allows passing arbitrary configuration data to your app. The value of this key is accessed using `expo-constants`[](https://docs.expo.dev/workflow/configuration/</versions/latest/sdk/constants>):
App.js
Copy
```
import Constants from 'expo-constants';
Constants.expoConfig.extra.fact === 'kittens are cool';

```

You can access and modify incoming config values by exporting a function that returns an object. This is useful if your project also has an app.json. By default, Expo CLI will read the app.json first and send the normalized results to the app.config.js.
For example, your app.json could look like this:
app.json
Copy
```
{
 "name": "My App"
}

```

And in your app.config.js, you are provided with that configuration in the arguments to the exported function:
app.config.js
Copy
```
module.exports = ({ config }) => {
 console.log(config.name); // prints 'My App'
 return {
  ...config,
 };
};

```

### Switching configuration based on the environment[](https://docs.expo.dev/workflow/configuration/<#switching-configuration-based-on-the-environment>)
It's common to have some different configuration in development, staging, and production environments, or to swap out configuration entirely to white label an app. To accomplish this, you can use app.config.js along with environment variables.
app.config.js
Copy
```
module.exports = () => {
 if (process.env.MY_ENVIRONMENT === 'production') {
  return {
   /* your production config */
  };
 } else {
  return {
   /* your development config */
  };
 }
};

```

To use this configuration with Expo CLI commands, set the environment variable either for specific commands or in your shell profile. To set environment variables for specific commands, prefix the command with the variables and values as shown in the example:
Terminal
Copy
`- ``MY_ENVIRONMENT=production eas update`
This is not anything unique to Expo CLI. On Windows you can approximate the above command with:
Terminal
Copy
`- ``npx cross-env MY_ENVIRONMENT=production eas update`
Or you can use any other mechanism that you are comfortable with for environment variables.
### Using TypeScript for configuration: app.config.ts instead of app.config.js[](https://docs.expo.dev/workflow/configuration/<#using-typescript-for-configuration-appconfigts-instead-of-appconfigjs>)
You can use autocomplete and doc-blocks with an Expo config in TypeScript. Create an app.config.ts with the following contents:
app.config.ts
Copy
```
import { ExpoConfig, ConfigContext } from 'expo/config';
export default ({ config }: ConfigContext): ExpoConfig => ({
 ...config,
 slug: 'my-app',
 name: 'My App',
});

```

To import other TypeScript files into app.config.ts or customize the language features, we recommend using `ts-node`[](https://docs.expo.dev/workflow/configuration/</guides/typescript#appconfigjs>). `ts-node` also enables using `import` syntax in any file imported by app.config.ts. This means you can write local [config plugins](https://docs.expo.dev/workflow/configuration/</config-plugins/introduction>) in TypeScript with full language features.
### Configuration resolution rules[](https://docs.expo.dev/workflow/configuration/<#configuration-resolution-rules>)
There are two different types of configs: static (app.config.json, app.json), and dynamic (app.config.js, app.config.ts). Static configs can be automatically updated with CLI tools, whereas dynamic configs must be manually updated by the developer.
  1. The static config is read if app.config.json exists (falls back to app.json). If no static config exists, then default values are inferred from the package.json and your dependencies.
  2. The dynamic config is read if either app.config.ts or app.config.js exist. If both exist, then the TypeScript config is used.
  3. If the dynamic config returns a function, then the static config is passed to the function with `({ config }) => ({})`. This function can then mutate the static config values. Think of this like middleware for the static config.
  4. The return value from the dynamic config is used as the final config. It cannot have any promises.
  5. All functions in the config are evaluated and serialized before any tool in the Expo ecosystem uses it. The config must be a JSON manifest when it is hosted.
  6. If the final config object has a top-level `expo: {}` object, then this will be used in place of the root object and all other keys will be ignored.


Running `npx expo config` will display the final configuration that will be used in Expo CLI after resolution has occurred.
[Previous (Development process)Develop an app with Expo](https://docs.expo.dev/workflow/configuration/</workflow/overview>)[Next (Development process)Continuous Native Generation](https://docs.expo.dev/workflow/configuration/</workflow/continuous-native-generation>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/workflow/configuration/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/workflow/configuration/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/configuration.mdx>)
  * Last updated on October 09, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/workflow/configuration/<https:/expo.dev/privacy>).
On this page
[Properties](https://docs.expo.dev/workflow/configuration/</workflow/configuration/#properties>)[Reading configuration values in your app](https://docs.expo.dev/workflow/configuration/</workflow/configuration/#reading-configuration-values-in-your-app>)[Extending configuration](https://docs.expo.dev/workflow/configuration/</workflow/configuration/#extending-configuration>)[Dynamic configuration](https://docs.expo.dev/workflow/configuration/</workflow/configuration/#dynamic-configuration>)[Switching configuration based on the environment](https://docs.expo.dev/workflow/configuration/</workflow/configuration/#switching-configuration-based-on-the-environment>)[Using TypeScript for configuration: app.config.ts instead of app.config.js](https://docs.expo.dev/workflow/configuration/</workflow/configuration/#using-typescript-for-configuration-appconfigts-instead-of-appconfigjs>)[Configuration resolution rules](https://docs.expo.dev/workflow/configuration/</workflow/configuration/#configuration-resolution-rules>)
