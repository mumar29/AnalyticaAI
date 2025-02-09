[](https://docs.expo.dev/guides/environment-variables/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/environment-variables/</>)
[Blog](https://docs.expo.dev/guides/environment-variables/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/environment-variables/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/environment-variables/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/environment-variables/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/environment-variables/</>)[Guides](https://docs.expo.dev/guides/environment-variables/</guides/overview>)[EAS](https://docs.expo.dev/guides/environment-variables/</eas>)[Reference](https://docs.expo.dev/guides/environment-variables/</versions/latest>)[Learn](https://docs.expo.dev/guides/environment-variables/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/environment-variables/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/environment-variables/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/environment-variables/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/environment-variables/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/environment-variables/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/environment-variables/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/environment-variables/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/environment-variables/</router/introduction>)[Installation](https://docs.expo.dev/guides/environment-variables/</router/installation>)[Create pages](https://docs.expo.dev/guides/environment-variables/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/environment-variables/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/environment-variables/</router/layouts>)[Error handling](https://docs.expo.dev/guides/environment-variables/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/environment-variables/</modules/overview>)[Get started](https://docs.expo.dev/guides/environment-variables/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/environment-variables/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/environment-variables/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/environment-variables/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/environment-variables/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/environment-variables/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/environment-variables/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/environment-variables/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/environment-variables/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/environment-variables/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/environment-variables/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/environment-variables/</archive>)[Expo Snack](https://docs.expo.dev/guides/environment-variables/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/environment-variables/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/environment-variables/<https:/expo.dev/mailing-list/signup>)
# Environment variables in Expo
[Edit this page](https://docs.expo.dev/guides/environment-variables/<https:/github.com/expo/expo/edit/main/docs/pages/guides/environment-variables.mdx> "Edit content of this page on GitHub")
Learn how to use environment variables in an Expo project.
[Edit this page](https://docs.expo.dev/guides/environment-variables/<https:/github.com/expo/expo/edit/main/docs/pages/guides/environment-variables.mdx> "Edit content of this page on GitHub")
Environment variables are key-value pairs configured outside your source code that allow your app to behave differently depending on the environment. For example, you can enable or disable certain features when building a test version of your app, or switch to a different API endpoint when building for production.
The Expo CLI will automatically load environment variables with an `EXPO_PUBLIC_` prefix from .env files for use within your JavaScript code whenever you use the Expo CLI, such as when running `npx expo start` to start your app in local development mode.
## Reading environment variables from .env files[](https://docs.expo.dev/guides/environment-variables/<#reading-environment-variables-from-env-files>)
Create a .env file in the root of your project directory and add environment-specific variables on new lines in the form of `EXPO_PUBLIC_[NAME]=VALUE`:
.env
Copy
```
EXPO_PUBLIC_API_URL=https://staging.example.com
EXPO_PUBLIC_API_KEY=abc123

```

Now you can use environment variables directly in your source code:
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

When you run `npx expo start`, `process.env.EXPO_PUBLIC_API_URL` will be replaced with `https://staging.example.com` in your app bundle. Variables can be updated as you edit your code without restarting the Expo CLI or clearing the cache. You will need to perform a full reload (for example, shake gesture and then Reload in Expo Go or your development build) to see the updated value.
> Do not store sensitive info, such as private keys, in `EXPO_PUBLIC_` variables. These variables will be visible in plain-text in your compiled application.
### How variables are loaded[](https://docs.expo.dev/guides/environment-variables/<#how-variables-are-loaded>)
Expo CLI loads .env files according to the [standard .env file resolution](https://docs.expo.dev/guides/environment-variables/<https:/github.com/bkeepers/dotenv/blob/c6e583a/README.md#what-other-env-files-can-i-use>) and then replaces all references in your code to `process.env.EXPO_PUBLIC_[VARNAME]` with the corresponding value set in the .env files. Code inside node_modules is not affected for security purposes.
### How to read from environment variables[](https://docs.expo.dev/guides/environment-variables/<#how-to-read-from-environment-variables>)
  * Every environment variable must be statically referenced as a property of `process.env` using JavaScript's dot notation for it to be inlined. For example, the expression `process.env.EXPO_PUBLIC_KEY` is valid and will be inlined.
  * Alternative versions of the expression are not supported. For example, `process.env['EXPO_PUBLIC_KEY']` or `const {EXPO_PUBLIC_X} = process.env` is invalid and will not be inlined.


### Using multiple .env files to define separate environments[](https://docs.expo.dev/guides/environment-variables/<#using-multiple-env-files-to-define-separate-environments>)
You can define any of the [standard .env files](https://docs.expo.dev/guides/environment-variables/<https:/github.com/bkeepers/dotenv/blob/c6e583a/README.md#what-other-env-files-can-i-use>), so it is possible to have separate .env, .env.local, .env.production and so on, files and they will load according to the standard priority.
You may choose to commit the default .env file or other standard configurations to version control, but generally .env.local files should be added to your .gitignore:
.gitignore
Copy
```
.env*.local

```

If you create an environment-specific file, like .env.test, you can load it by setting `NODE_ENV` when running the Expo CLI:
Terminal
Copy
`- ``NODE_ENV=test npx expo start`
### Disabling environment variables[](https://docs.expo.dev/guides/environment-variables/<#disabling-environment-variables>)
Environment variables in Expo CLI have two parts and both can be disabled:
  1. Expo CLI automatically loads the .env files into the global process. To disable this behavior, set the environment variable `EXPO_NO_DOTENV` to `1` before running any Expo CLI command: `EXPO_NO_DOTENV=1`.
  2. Expo's Metro config includes the inline serialization of environment variables in the client JavaScript bundle. To disable this behavior, you can use `EXPO_NO_CLIENT_ENV_VARS=1`.


If you're experiencing issues with environment variables, you can try disabling one or both of these features.
## Environment variables in Expo Application Services[](https://docs.expo.dev/guides/environment-variables/<#environment-variables-in-expo-application-services>)
### EAS Build[](https://docs.expo.dev/guides/environment-variables/<#eas-build>)
[EAS Build](https://docs.expo.dev/guides/environment-variables/</build/introduction>) uses Metro Bundler to build the JavaScript bundle embedded within your app binary, so it will use .env files uploaded with your build job to inline `EXPO_PUBLIC_` variables into your code. EAS Build also lets you define environment variables within build profiles in eas.json and via EAS Secrets. Check out the EAS Build documentation on [environment variables and build secrets](https://docs.expo.dev/guides/environment-variables/</build-reference/variables>) for more information.
### EAS Update[](https://docs.expo.dev/guides/environment-variables/<#eas-update>)
[EAS Update](https://docs.expo.dev/guides/environment-variables/</eas-update/introduction>) uses Metro Bundler in your local environment or CI to build your app bundle, so it will use available .env files to inline `EXPO_PUBLIC_` variables into your code. Check out the EAS Update documentation on [environment variables](https://docs.expo.dev/guides/environment-variables/</eas-update/environment-variables>) for more information.
## Migrating to Expo environment variables[](https://docs.expo.dev/guides/environment-variables/<#migrating-to-expo-environment-variables>)
### From react-native-config[](https://docs.expo.dev/guides/environment-variables/<#from-react-native-config>)
Update your .env files to prefix any variables used within your JavaScript code with `EXPO_PUBLIC_`:
.env
Copy
```
- API_URL=https://myapi.com
+ EXPO_PUBLIC_API_URL=https://myapi.com

```

> If you have any non-standard .env files (for example, .env.staging), you will need to migrate those to one of the [standard .env files](https://docs.expo.dev/guides/environment-variables/<https:/github.com/bkeepers/dotenv/blob/c6e583a/README.md#what-other-env-files-can-i-use>).
Then update your code to use `process.env.EXPO_PUBLIC_[VARNAME]`:
```
- import Config from "react-native-config";

- const apiUrl = Config.API_URL;
+ const apiUrl = process.env.EXPO_PUBLIC_API_URL;

```

### From babel-plugin-transform-inline-environment-variables[](https://docs.expo.dev/guides/environment-variables/<#from-babel-plugin-transform-inline-environment-variables>)
Using a Babel plugin to transform your environment variable references in your code is similar to how Expo environment variables work. Set your variables inside a .env file and update your variable names to use the `EXPO_PUBLIC_` prefix:
```
- const apiUrl = process.env.API_URL;
+ const apiUrl = process.env.EXPO_PUBLIC_API_URL;

```

Then you can remove the plugin from your [Babel config](https://docs.expo.dev/guides/environment-variables/</versions/latest/config/babel>):
babel.config.js
Copy
```
module.exports = function (api) {
 api.cache(true);
 return {
  presets: ['babel-preset-expo'],
--  plugins: ['transform-inline-environment-variables'],
 };
};

```

After updating your Babel config file, be sure to clear your cache with `npx expo start --clear`.
### From direnv[](https://docs.expo.dev/guides/environment-variables/<#from-direnv>)
Move any environment variables used in your JavaScript from their .envrc file to a .env file and prefix it with `EXPO_PUBLIC_`.
Previously with `direnv`, you would need to use a [dynamic app config](https://docs.expo.dev/guides/environment-variables/</versions/latest/config/app#app-config>) that reads from `process.env`[](https://docs.expo.dev/guides/environment-variables/<https:/nodejs.org/dist/latest/docs/api/process.html#process_process_env>) to set environment variables on the `extra` field so they can be used in your JavaScript code via `expo-constants`[](https://docs.expo.dev/guides/environment-variables/</versions/latest/sdk/constants>). Move those references directly into your code, adding the `EXPO_PUBLIC_` prefix:
```
- import Constants from 'expo-constants';

- const apiUrl = Constants.expoConfig.extra.apiUrl;
+ const apiUrl = process.env.EXPO_PUBLIC_API_URL;

```

> `direnv`[](https://docs.expo.dev/guides/environment-variables/<https:/direnv.net/>) automatically loads and unloads environment variables in your shell depending on your current directory, meaning it can affect the environment for any process running in that directly, not just the Expo CLI. You will likely want to continue using `direnv` for other environment variables that are not used in your JavaScript code.
## Security considerations[](https://docs.expo.dev/guides/environment-variables/<#security-considerations>)
Never store sensitive secrets in environment variables that are prefixed with `EXPO_PUBLIC_`. When an end-user runs your app, they have access to all of the code and embedded environment variables in your app. Read more about [storing sensitive info](https://docs.expo.dev/guides/environment-variables/<https:/reactnative.dev/docs/security#storing-sensitive-info>).
[Previous (Development process)Permissions](https://docs.expo.dev/guides/environment-variables/</guides/permissions>)[Next (Development process - Linking)Overview](https://docs.expo.dev/guides/environment-variables/</linking/overview>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/environment-variables/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/environment-variables/<https:/github.com/expo/expo/edit/main/docs/pages/guides/environment-variables.mdx>)
  * Last updated on January 01, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/environment-variables/<https:/expo.dev/privacy>).
On this page
[Reading environment variables from .env files](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#reading-environment-variables-from-env-files>)[How variables are loaded](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#how-variables-are-loaded>)[How to read from environment variables](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#how-to-read-from-environment-variables>)[Using multiple .env files to define separate environments](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#using-multiple-env-files-to-define-separate-environments>)[Disabling environment variables](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#disabling-environment-variables>)[Environment variables in Expo Application Services](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#environment-variables-in-expo-application-services>)[EAS Build](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#eas-build>)[EAS Update](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#eas-update>)[Migrating to Expo environment variables](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#migrating-to-expo-environment-variables>)[From react-native-config](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#from-react-native-config>)[From babel-plugin-transform-inline-environment-variables](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#from-babel-plugin-transform-inline-environment-variables>)[From direnv](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#from-direnv>)[Security considerations](https://docs.expo.dev/guides/environment-variables/</guides/environment-variables/#security-considerations>)
