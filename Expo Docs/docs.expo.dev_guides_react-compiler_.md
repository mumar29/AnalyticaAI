[](https://docs.expo.dev/guides/react-compiler/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/react-compiler/</>)
[Blog](https://docs.expo.dev/guides/react-compiler/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/react-compiler/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/react-compiler/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/react-compiler/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/react-compiler/</>)[Guides](https://docs.expo.dev/guides/react-compiler/</guides/overview>)[EAS](https://docs.expo.dev/guides/react-compiler/</eas>)[Reference](https://docs.expo.dev/guides/react-compiler/</versions/latest>)[Learn](https://docs.expo.dev/guides/react-compiler/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/react-compiler/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/react-compiler/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/react-compiler/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/react-compiler/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/react-compiler/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/react-compiler/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/react-compiler/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/react-compiler/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
[Work with monorepos](https://docs.expo.dev/guides/react-compiler/</guides/monorepos>)[View logs](https://docs.expo.dev/guides/react-compiler/</workflow/logging>)[Development and production modes](https://docs.expo.dev/guides/react-compiler/</workflow/development-mode>)[Common development errors](https://docs.expo.dev/guides/react-compiler/</workflow/common-development-errors>)[Android Studio Emulator](https://docs.expo.dev/guides/react-compiler/</workflow/android-studio-emulator>)[iOS Simulator](https://docs.expo.dev/guides/react-compiler/</workflow/ios-simulator>)[New Architecture](https://docs.expo.dev/guides/react-compiler/</guides/new-architecture>)[React Compiler](https://docs.expo.dev/guides/react-compiler/</guides/react-compiler>)
Expo Router
[Introduction](https://docs.expo.dev/guides/react-compiler/</router/introduction>)[Installation](https://docs.expo.dev/guides/react-compiler/</router/installation>)[Create pages](https://docs.expo.dev/guides/react-compiler/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/react-compiler/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/react-compiler/</router/layouts>)[Error handling](https://docs.expo.dev/guides/react-compiler/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/react-compiler/</modules/overview>)[Get started](https://docs.expo.dev/guides/react-compiler/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/react-compiler/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/react-compiler/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/react-compiler/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/react-compiler/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/react-compiler/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/react-compiler/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/react-compiler/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/react-compiler/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/react-compiler/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/react-compiler/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/react-compiler/</archive>)[Expo Snack](https://docs.expo.dev/guides/react-compiler/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/react-compiler/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/react-compiler/<https:/expo.dev/mailing-list/signup>)
# React Compiler
[Edit this page](https://docs.expo.dev/guides/react-compiler/<https:/github.com/expo/expo/edit/main/docs/pages/guides/react-compiler.mdx> "Edit content of this page on GitHub")
Learn how to enable and use the React Compiler in Expo apps.
[Edit this page](https://docs.expo.dev/guides/react-compiler/<https:/github.com/expo/expo/edit/main/docs/pages/guides/react-compiler.mdx> "Edit content of this page on GitHub")
> Warning: React Compiler is experimental. Currently, it is on hold and we'll soon provide more updates on its usage.
The new [React Compiler](https://docs.expo.dev/guides/react-compiler/<https:/react.dev/learn/react-compiler>) automatically memoizes components and hooks to enable fine-grained reactivity. This can lead to significant performance improvements in your app. The React Compiler is currently experimental and is not enabled by default. You can enable it in your app by following the instructions below.
## Enabling React Compiler[](https://docs.expo.dev/guides/react-compiler/<#enabling-react-compiler>)
1
[Check how compatible](https://docs.expo.dev/guides/react-compiler/<https:/react.dev/learn/react-compiler#checking-compatibility>) your project is with the React Compiler.
Terminal
Copy
`- ``npx react-compiler-healthcheck@latest`
This will generally verify if your app is following the [rules of React](https://docs.expo.dev/guides/react-compiler/<https:/react.dev/reference/rules>).
2
Install `babel-plugin-react-compiler` in your project:
Terminal
Copy
`- ``npx expo install babel-plugin-react-compiler`
3
Toggle on the React Compiler experiment in your app config file:
app.json
Copy
```
{
 "experiments": {
  "reactCompiler": true
 }
}

```

4
Install the React compiler runtime module:
Terminal
Copy
`- ``npx expo install react-compiler-runtime@beta`
### Enabling the linter[](https://docs.expo.dev/guides/react-compiler/<#enabling-the-linter>)
> In the future, all of the following steps below will be automated by Expo CLI.
Additionally, you should use the ESLint plugin to continuously enforce the rules of React in your project.
1
Run `npx expo lint`[](https://docs.expo.dev/guides/react-compiler/</guides/using-eslint#eslint>) to ensure ESLint is setup in your app, then install the ESLint plugin for React Compiler:
Terminal
Copy
`- ``npx expo install eslint-plugin-react-compiler`
2
Update your ESLint configuration to include the plugin:
.eslintrc.js
Copy
```
// https://docs.expo.dev/guides/using-eslint/
module.exports = {
 extends: 'expo',
 plugins: ['eslint-plugin-react-compiler'],
 rules: {
  'react-compiler/react-compiler': 'error',
 },
};

```

## Incremental adoption[](https://docs.expo.dev/guides/react-compiler/<#incremental-adoption>)
You can incrementally adopt the React Compiler in your app using a few strategies:
1
Configure the Babel plugin to only run on specific files or components. To do this:
  1. If your project doesn't have [babel.config.js](https://docs.expo.dev/guides/react-compiler/</versions/latest/config/babel>), create one by running `npx expo customize babel.config.js`.
  2. Add the following configuration to babel.config.js:


babel.config.js
Copy
```
module.exports = function (api) {
 api.cache(true);
 return {
  presets: [
   [
    'babel-preset-expo',
    {
     'react-compiler': {
      sources: filename => {
       // Match file names to include in the React Compiler.
       return filename.includes('src/path/to/dir');
      },
     },
    },
   ],
  ],
 };
};

Show More

```

Whenever you change your babel.config.js file, you need to restart the Metro bundler to apply the changes:
Terminal
Copy
`- ``npx expo start --clear`
2
Use the `"use no memo"` directive to opt out of the React Compiler for specific components or files.
```
function MyComponent() {
 'use no memo';
 return <Text>Will not be optimized</Text>;
}

```

## Usage[](https://docs.expo.dev/guides/react-compiler/<#usage>)
> To better understand how React Compiler works, check out the [React Playground](https://docs.expo.dev/guides/react-compiler/<https:/playground.react.dev/>).
Improvements are primarily automatic. You can remove instances of `useCallback`, `useMemo`, and `React.memo` in favor of the automatic memoization. Class components will not be optimized. Instead, migrate to function components.
Expo's implementation of the React Compiler will only run on application code (no node modules), and only when bundling for the client (disabled in server rendering).
## Configuration[](https://docs.expo.dev/guides/react-compiler/<#configuration>)
You can pass additional settings to the React Compiler Babel plugin by using the `react-compiler` object in the Babel configuration:
babel.config.js
Copy
```
module.exports = function (api) {
 api.cache(true);
 return {
  presets: [
   [
    'babel-preset-expo',
    {
     'react-compiler': {
      // Passed directly to the React Compiler Babel plugin.
      compilationMode: 'strict',
      panicThreshold: 'all_errors',
     },
     web: {
      'react-compiler': {
       // Web-only settings...
      },
     },
    },
   ],
  ],
 };
};

Show More

```

[Previous (Development process - Reference)New Architecture](https://docs.expo.dev/guides/react-compiler/</guides/new-architecture>)[Next (Expo Router)Introduction](https://docs.expo.dev/guides/react-compiler/</router/introduction>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/react-compiler/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/react-compiler/<https:/github.com/expo/expo/edit/main/docs/pages/guides/react-compiler.mdx>)
  * Last updated on January 01, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/react-compiler/<https:/expo.dev/privacy>).
On this page
[Enabling React Compiler](https://docs.expo.dev/guides/react-compiler/</guides/react-compiler/#enabling-react-compiler>)[Enabling the linter](https://docs.expo.dev/guides/react-compiler/</guides/react-compiler/#enabling-the-linter>)[Incremental adoption](https://docs.expo.dev/guides/react-compiler/</guides/react-compiler/#incremental-adoption>)[Usage](https://docs.expo.dev/guides/react-compiler/</guides/react-compiler/#usage>)[Configuration](https://docs.expo.dev/guides/react-compiler/</guides/react-compiler/#configuration>)
