[](https://docs.expo.dev/guides/typescript/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/typescript/</>)
[Blog](https://docs.expo.dev/guides/typescript/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/typescript/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/typescript/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/typescript/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/typescript/</>)[Guides](https://docs.expo.dev/guides/typescript/</guides/overview>)[EAS](https://docs.expo.dev/guides/typescript/</eas>)[Reference](https://docs.expo.dev/guides/typescript/</versions/latest>)[Learn](https://docs.expo.dev/guides/typescript/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/typescript/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/typescript/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/typescript/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/typescript/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/typescript/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/typescript/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/typescript/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/typescript/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/typescript/</router/introduction>)[Installation](https://docs.expo.dev/guides/typescript/</router/installation>)[Create pages](https://docs.expo.dev/guides/typescript/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/typescript/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/typescript/</router/layouts>)[Error handling](https://docs.expo.dev/guides/typescript/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/typescript/</modules/overview>)[Get started](https://docs.expo.dev/guides/typescript/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/typescript/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/typescript/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/typescript/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/typescript/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/typescript/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/typescript/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/typescript/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/typescript/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/typescript/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/typescript/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/typescript/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/typescript/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/typescript/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/typescript/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/typescript/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/typescript/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/typescript/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/typescript/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/typescript/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/typescript/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/typescript/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/typescript/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/typescript/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/typescript/</archive>)[Expo Snack](https://docs.expo.dev/guides/typescript/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/typescript/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/typescript/<https:/expo.dev/mailing-list/signup>)
# Using TypeScript
[Edit this page](https://docs.expo.dev/guides/typescript/<https:/github.com/expo/expo/edit/main/docs/pages/guides/typescript.mdx> "Edit content of this page on GitHub")
An in-depth guide on configuring an Expo project with TypeScript.
[Edit this page](https://docs.expo.dev/guides/typescript/<https:/github.com/expo/expo/edit/main/docs/pages/guides/typescript.mdx> "Edit content of this page on GitHub")
Expo has first-class support for [TypeScript](https://docs.expo.dev/guides/typescript/<https:/www.typescriptlang.org/>). The JavaScript interface of Expo SDK is written in TypeScript.
This guide provides a quick way to get started for a new project and also steps to migrate your existing JavaScript based Expo project to use TypeScript.
## Quick start[](https://docs.expo.dev/guides/typescript/<#quick-start>)
To create a new project, use the default template which includes base TypeScript configuration, example code, and basic navigation structure:
Terminal
Copy
`- ``npx create-expo-app@latest`
After you create a new project using the command above, make sure to follow instructions from:
  * [Set up your environment](https://docs.expo.dev/guides/typescript/</get-started/set-up-your-environment>) which provides required steps for setting local development environment.
  * [Start developing](https://docs.expo.dev/guides/typescript/</get-started/start-developing>) which provides information on triggering a development server, file structure, and details about other features.


## Migrating existing JavaScript project[](https://docs.expo.dev/guides/typescript/<#migrating-existing-javascript-project>)
To migrate your existing JavaScript based project to use TypeScript, follow the instructions below:
1
### Rename files to use .tsx or .ts extension[](https://docs.expo.dev/guides/typescript/<#rename-files-to-use-tsx-or-ts-extension>)
Rename files to convert them to TypeScript. For example, start with the root component file such as App.js and rename it to App.tsx:
Terminal
Copy
`- ``mv App.js App.tsx`
> Tip: Use the .tsx extension if the file includes React components (JSX). If the file does not include any JSX, you can use the .ts file extension.
2
### Install required development dependencies[](https://docs.expo.dev/guides/typescript/<#install-required-development-dependencies>)
To install required `devDependencies` such as `typescript` and `@types/react` in package.json:
macOS/Linux
Windows
Terminal
`- ``npx expo install typescript @types/react -- --save-dev`
`# For Bun and Yarn`
`- ``npx expo install typescript @types/react -- --dev`
Terminal
`- ``npx expo install typescript @types/react "--" --save-dev`
`# For Bun and Yarn`
`- ``npx expo install typescript @types/react "--" --dev`
> Alternatively, run `npx expo start` command to install `typescript` and `@types/react` dev dependencies.
Type checking project files with `tsc`[](https://docs.expo.dev/guides/typescript/<#type-checking-project-files-with-tsc>)
To type check your project's files run `tsc` command within the root of your project directory:
Terminal
`# For npm`
`- ``npm run tsc`
`# For yarn`
`- ``yarn tsc`
3
### Add base configuration with tsconfig.json[](https://docs.expo.dev/guides/typescript/<#add-base-configuration-with-tsconfigjson>)
A project's tsconfig.json should extend the `expo/tsconfig.base` by default. You can automatically generate a tsconfig.json file by running the command:
Terminal
Copy
`- ``npx expo customize tsconfig.json`
The default configuration in tsconfig.json is user-friendly and encourages adoption. If you prefer strict type checking and reduce the chances of runtime errors, enable `strict` under `compilerOptions`[](https://docs.expo.dev/guides/typescript/<https:/www.typescriptlang.org/docs/handbook/compiler-options.html>):
tsconfig.json
Copy
```
{
 "compilerOptions": {
  "strict": true
 }
}

```

4
### Path aliases (Optional)[](https://docs.expo.dev/guides/typescript/<#path-aliases-optional>)
Expo CLI supports [path aliases](https://docs.expo.dev/guides/typescript/<https:/www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping>) in tsconfig.json automatically. It allows importing modules with custom aliases instead of relative paths.
For example, to import `Button` component from src/components/Button.tsx using the alias @/components/Button, add the alias `@/*` in tsconfig.json and set it to the src directory:
tsconfig.json
Copy
```
{
 "compilerOptions": {
  "baseUrl": ".",
  "paths": {
   "@/*": ["src/*"]
  }
 }
}

```

Disable path aliases for SDK 50 and above[](https://docs.expo.dev/guides/typescript/<#disable-path-aliases-for-sdk-50-and>)
`tsconfigPaths` is enabled by default which allows you to set path aliases. You can disable it by setting `tsconfigPaths` to `false` in the project's [app config](https://docs.expo.dev/guides/typescript/</workflow/configuration>):
app.json
Copy
```
{
 "expo": {
  "experiments": {
   "tsconfigPaths": false
  }
 }
}

```

#### Considerations[](https://docs.expo.dev/guides/typescript/<#considerations>)
When using path aliases, consider the following:
  * Restart Expo CLI after modifying tsconfig.json to update path aliases. You don't need to clear the Metro cache when the aliases change.
  * If not using TypeScript, jsconfig.json can serve as an alternative to tsconfig.json.
  * Path aliases add additional resolution time when defined.
  * Path aliases are only supported by Metro (including Metro web) and not by the deprecated `@expo/webpack-config`.
  * Bare projects require additional setup for this feature. See the [Metro setup guide](https://docs.expo.dev/guides/typescript/</versions/latest/config/metro#bare-workflow-setup>) for more information.


5
### Absolute imports (Optional)[](https://docs.expo.dev/guides/typescript/<#absolute-imports-optional>)
To enable absolute imports from a project's root directory, define `compilerOptions.baseUrl`[](https://docs.expo.dev/guides/typescript/<https:/www.typescriptlang.org/docs/handbook/module-resolution.html#base-url>) the tsconfig.json file:
tsconfig.json
Copy
```
{
 "compilerOptions": {
  "baseUrl": "./"
 }
}

```

For example, setting the above configuration allows importing `Button` component from the path src/components/Button:
```
import Button from 'src/components/Button';

```

#### Considerations[](https://docs.expo.dev/guides/typescript/<#considerations-1>)
When using absolute imports, consider the following:
  * `compilerOptions.paths` are resolved relative to the `compilerOptions.baseUrl` if it is defined, otherwise they're resolved against the project root directory.
  * `compilerOptions.baseUrl` is resolved before node modules. This means if you have a file named `./path.ts`, it can be imported instead of a node module named `path`.
  * Restarting Expo CLI is necessary to update `compilerOptions.baseUrl`[](https://docs.expo.dev/guides/typescript/<https:/www.typescriptlang.org/docs/handbook/module-resolution.html#base-url>) after modifying the tsconfig.json.
  * If you're not using TypeScript, jsconfig.json can serve as an alternative to tsconfig.json.
  * Absolute imports are only supported by Metro (including Metro web) and not by `@expo/webpack-config`.
  * Bare projects require additional setup for this feature. See the [versioned Metro setup guide](https://docs.expo.dev/guides/typescript/</versions/latest/config/metro#bare-workflow-setup>) for more information.


## Type generation[](https://docs.expo.dev/guides/typescript/<#type-generation>)
Some Expo libraries provide both static types and type generation capabilities. These types are automatically generated when the project builds or by running the `npx expo customize tsconfig.json` command.
## TypeScript for project's config files[](https://docs.expo.dev/guides/typescript/<#typescript-for-projects-config-files>)
Additional setup is required to use TypeScript for configuration files such as metro.config.js or app.config.js. You need to utilize `ts-node`[ require hook](https://docs.expo.dev/guides/typescript/<https:/github.com/TypeStrong/ts-node#programmatic>) to import TypeScript files within your JS config file. This hook allows TypeScript imports while keeping the root file as JavaScript.
macOS/Linux
Windows
Terminal
`- ``npx expo install ts-node -- --save-dev`
`# For Bun and Yarn`
`- ``npx expo install ts-node -- --dev`
Terminal
`- ``npx expo install ts-node "--" --save-dev`
`# For Bun and Yarn`
`- ``npx expo install ts-node "--" --dev`
### metro.config.js[](https://docs.expo.dev/guides/typescript/<#metroconfigjs>)
Update metro.config.js to require metro.config.ts file:
metro.config.js
Copy
```
require('ts-node/register');
module.exports = require('./metro.config.ts');

```

Update metro.config.ts file with your project's metro configuration:
metro.config.ts
Copy
```
import { getDefaultConfig } from 'expo/metro-config';
const config = getDefaultConfig(__dirname);
module.exports = config;

```

Deprecated: webpack.config.js[](https://docs.expo.dev/guides/typescript/<#deprecated-webpackconfigjs>)
Install the `@expo/webpack-config` package.
webpack.config.js
Copy
```
require('ts-node/register');
module.exports = require('./webpack.config.ts');

```

webpack.config.ts
Copy
```
import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';
module.exports = async function (env: Environment, argv: Arguments) {
 const config = await createExpoWebpackConfigAsync(env, argv);
 // Customize the config before returning it.
 return config;
};

```

### app.config.js[](https://docs.expo.dev/guides/typescript/<#appconfigjs>)
app.config.ts is supported by default. However, it doesn't support external TypeScript modules, or tsconfig.json customization. You can use the following approach to get a more comprehensive TypeScript setup:
app.config.ts
Copy
```
import 'ts-node/register'; // Add this to import TypeScript files
import { ExpoConfig } from 'expo/config';
const config: ExpoConfig = {
 name: 'my-app',
 slug: 'my-app',
};
export default config;

```

## Other TypeScript features[](https://docs.expo.dev/guides/typescript/<#other-typescript-features>)
Some language features may require additional configuration. For example, if you want to use decorators you'll need to add the `experimentalDecorators` option. For more information on the available properties see the [TypeScript compiler options](https://docs.expo.dev/guides/typescript/<https:/www.typescriptlang.org/docs/handbook/compiler-options.html>) documentation.
## Learn how to use TypeScript[](https://docs.expo.dev/guides/typescript/<#learn-how-to-use-typescript>)
A good place to start learning TypeScript is the official [TypeScript Handbook](https://docs.expo.dev/guides/typescript/<https:/www.typescriptlang.org/docs/handbook/2/everyday-types.html>).
For TypeScript and React components, we recommend referring to the [React TypeScript CheatSheet](https://docs.expo.dev/guides/typescript/<https:/github.com/typescript-cheatsheets/react>) to learn how to type your React components in a variety of common situations.
[Previous (More - Integrations)Build apps for TV](https://docs.expo.dev/guides/typescript/</guides/building-for-tv>)[Next (More - Integrations)Using In-app purchase](https://docs.expo.dev/guides/typescript/</guides/in-app-purchases>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/typescript/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/typescript/<https:/github.com/expo/expo/edit/main/docs/pages/guides/typescript.mdx>)
  * Last updated on January 15, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/typescript/<https:/expo.dev/privacy>).
On this page
[Quick start](https://docs.expo.dev/guides/typescript/</guides/typescript/#quick-start>)[Migrating existing JavaScript project](https://docs.expo.dev/guides/typescript/</guides/typescript/#migrating-existing-javascript-project>)[Rename files to use .tsx or .ts extension](https://docs.expo.dev/guides/typescript/</guides/typescript/#rename-files-to-use-tsx-or-ts-extension>)[Install required development dependencies](https://docs.expo.dev/guides/typescript/</guides/typescript/#install-required-development-dependencies>)[Add base configuration with tsconfig.json](https://docs.expo.dev/guides/typescript/</guides/typescript/#add-base-configuration-with-tsconfigjson>)[Path aliases (Optional)](https://docs.expo.dev/guides/typescript/</guides/typescript/#path-aliases-optional>)[Absolute imports (Optional)](https://docs.expo.dev/guides/typescript/</guides/typescript/#absolute-imports-optional>)[Type generation](https://docs.expo.dev/guides/typescript/</guides/typescript/#type-generation>)[TypeScript for project's config files](https://docs.expo.dev/guides/typescript/</guides/typescript/#typescript-for-projects-config-files>)[metro.config.js](https://docs.expo.dev/guides/typescript/</guides/typescript/#metroconfigjs>)[app.config.js](https://docs.expo.dev/guides/typescript/</guides/typescript/#appconfigjs>)[Other TypeScript features](https://docs.expo.dev/guides/typescript/</guides/typescript/#other-typescript-features>)[Learn how to use TypeScript](https://docs.expo.dev/guides/typescript/</guides/typescript/#learn-how-to-use-typescript>)
