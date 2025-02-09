[](https://docs.expo.dev/guides/using-eslint/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/using-eslint/</>)
[Blog](https://docs.expo.dev/guides/using-eslint/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/using-eslint/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/using-eslint/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/using-eslint/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/using-eslint/</>)[Guides](https://docs.expo.dev/guides/using-eslint/</guides/overview>)[EAS](https://docs.expo.dev/guides/using-eslint/</eas>)[Reference](https://docs.expo.dev/guides/using-eslint/</versions/latest>)[Learn](https://docs.expo.dev/guides/using-eslint/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/using-eslint/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/using-eslint/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/using-eslint/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/using-eslint/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/using-eslint/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/using-eslint/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/using-eslint/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/using-eslint/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/using-eslint/</router/introduction>)[Installation](https://docs.expo.dev/guides/using-eslint/</router/installation>)[Create pages](https://docs.expo.dev/guides/using-eslint/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/using-eslint/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/using-eslint/</router/layouts>)[Error handling](https://docs.expo.dev/guides/using-eslint/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/using-eslint/</modules/overview>)[Get started](https://docs.expo.dev/guides/using-eslint/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/using-eslint/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/using-eslint/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/using-eslint/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/using-eslint/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/using-eslint/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/using-eslint/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/using-eslint/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/using-eslint/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/using-eslint/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/using-eslint/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/using-eslint/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/using-eslint/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/using-eslint/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/using-eslint/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/using-eslint/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/using-eslint/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/using-eslint/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/using-eslint/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/using-eslint/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/using-eslint/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/using-eslint/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/using-eslint/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/using-eslint/</archive>)[Expo Snack](https://docs.expo.dev/guides/using-eslint/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/using-eslint/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/using-eslint/<https:/expo.dev/mailing-list/signup>)
# Using ESLint and Prettier
[Edit this page](https://docs.expo.dev/guides/using-eslint/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-eslint.mdx> "Edit content of this page on GitHub")
A guide on configuring ESLint and Prettier to format Expo apps.
[Edit this page](https://docs.expo.dev/guides/using-eslint/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-eslint.mdx> "Edit content of this page on GitHub")
[ESLint](https://docs.expo.dev/guides/using-eslint/<https:/eslint.org/>) is a JavaScript linter that helps you find and fix errors in your code. It's a great tool to help you write better code and catch mistakes before they make it to production. In conjunction, you can use [Prettier](https://docs.expo.dev/guides/using-eslint/<https:/prettier.io/docs/en/>), a code formatter that ensures all the code files follow a consistent styling.
This guide provides steps to set up and configure ESLint and Prettier.
## ESLint[](https://docs.expo.dev/guides/using-eslint/<#eslint>)
### Setup[](https://docs.expo.dev/guides/using-eslint/<#setup>)
To set up ESLint in your Expo project, you can use the Expo CLI to install the necessary dependencies. Running this command also creates a .eslintrc.js file at the root of your project which extends configuration from `eslint-config-expo`[](https://docs.expo.dev/guides/using-eslint/<https:/github.com/expo/expo/tree/main/packages/eslint-config-expo>).
Terminal
Copy
`# Install and configure ESLint`
`- ``npx expo lint`
Setup instructions for SDK 50 and below[](https://docs.expo.dev/guides/using-eslint/<#setup-instructions-for-sdk-50-and-below>)
1
Install ESLint, and `eslint-config-expo`[](https://docs.expo.dev/guides/using-eslint/<https:/github.com/expo/expo/tree/main/packages/eslint-config-expo>) in your project.
macOS/Linux
Windows
Terminal
`- ``npx expo install eslint@8 eslint-config-expo -- --save-dev`
`# For Bun and Yarn`
`- ``npx expo install eslint@8 eslint-config-expo -- --dev`
Terminal
`- ``npx expo install eslint@8 eslint-config-expo "--" --save-dev`
`# For Bun and Yarn`
`- ``npx expo install eslint@8 eslint-config-expo "--" --dev`
2
Create an ESLint configuration file called .eslintrc.js at the root of your project. The configuration in .eslintrc.js extends `eslint-config-expo`[](https://docs.expo.dev/guides/using-eslint/<https:/github.com/expo/expo/tree/main/packages/eslint-config-expo>).
.eslintrc.js
Copy
```
module.exports = {
 extends: 'expo',
};

```

3
Add a `script` to your package.json to run ESLint.
package.json
Copy
```
{
 "scripts": {
  "lint": "eslint ."
 }
}

```

You can replace the `.` with specific directories or files to lint. For example, if you use Expo Router, you can use the `eslint app` command to lint only your routes inside the app directory.
### Usage[](https://docs.expo.dev/guides/using-eslint/<#usage>)
> Recommended: If you're using VS Code, install the [ESLint extension](https://docs.expo.dev/guides/using-eslint/<https:/marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>) to lint your code as you type.
You can lint your code manually from the command line with the `expo lint` script:
For SDK 51 and above
For SDK 50 and below
Terminal
Copy
`# After ESLint has been configured, run the command again to lint your code.`
`- ``npx expo lint`
Running the above command will run the `lint` script from package.json.
Terminal
`# Example output for npx expo lint command`
`- ``npm run eslint .`
`/app/node_modules/.bin/eslint .``/app/components/HelloWave.tsx`` 22:6 warning React Hook useEffect has a missing dependency: "rotateAnimation".``    Either include it or remove the dependency array react-hooks/exhaustive-deps``✖ 1 problem (0 errors, 1 warning)`
Terminal
Copy
`- ``npm run lint`
### Environment configuration[](https://docs.expo.dev/guides/using-eslint/<#environment-configuration>)
ESLint is generally configured for a single environment. However, the source code is written in JavaScript in an Expo app that runs in multiple different environments. For example, the app.config.js, metro.config.js, babel.config.js, and app/+html.tsx files are run in a Node.js environment. It means they have access to the global `__dirname` variable and can use Node.js modules such as `path`. Standard Expo project files like app/index.js can be run in Hermes, Node.js, or the web browser.
You can add the `eslint-env` comment directive to the top of a file to tell ESLint which environment the file is running in. For example, to tell ESLint that a file is run in Node.js, add the following comment to the top of the file:
metro.config.js
Copy
```
/* eslint-env node */
const { getDefaultConfig } = require('expo/metro-config');
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(
 __dirname
);
module.exports = config;

```

## Prettier[](https://docs.expo.dev/guides/using-eslint/<#prettier>)
### Installation[](https://docs.expo.dev/guides/using-eslint/<#installation>)
To install Prettier in your project:
macOS/Linux
Windows
Terminal
`- ``npx expo install prettier eslint-config-prettier eslint-plugin-prettier -- --save-dev`
`# For Bun and Yarn`
`- ``npx expo install prettier eslint-config-prettier eslint-plugin-prettier -- --dev`
Terminal
`- ``npx expo install prettier eslint-config-prettier eslint-plugin-prettier "--" --save-dev`
`# For Bun and Yarn`
`- ``npx expo install prettier eslint-config-prettier eslint-plugin-prettier "--" --dev`
### Setup[](https://docs.expo.dev/guides/using-eslint/<#setup-1>)
To integrate Prettier with ESlint, update your .eslintrc.js:
.eslintrc.js
Copy
```
module.exports = {
 extends: ['expo', 'prettier'],
 plugins: ['prettier'],
 rules: {
  'prettier/prettier': 'error',
 },
};

```

Now, when you run `npx expo lint`, anything that is not aligned with Prettier formatting will be caught as an error.
> Note: In the above configuration, you can use `"prettier/prettier": "warn"` if you prefer these formatting issues as warnings instead of errors.
To customize Prettier settings, create a .prettierrc file at the root of your project and add your configuration.
[Custom Prettier configurationLearn more about customizing Prettier configuration.](https://docs.expo.dev/guides/using-eslint/<https:/github.com/expo/expo/tree/main/packages/eslint-config-universe#customizing-prettier>)
## Troubleshooting[](https://docs.expo.dev/guides/using-eslint/<#troubleshooting>)
### ESLint is not updating in VS Code[](https://docs.expo.dev/guides/using-eslint/<#eslint-is-not-updating-in-vs-code>)
If you're using VS Code, install the [ESLint extension](https://docs.expo.dev/guides/using-eslint/<https:/marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>) to lint your code as you type. You can try restarting the ESLint server by running the command `ESLint: Restart ESLint Server` from the [command palette](https://docs.expo.dev/guides/using-eslint/<https:/code.visualstudio.com/docs/getstarted/userinterface#_command-palette>).
### ESLint is slow[](https://docs.expo.dev/guides/using-eslint/<#eslint-is-slow>)
ESLint can be slow to run on large projects. The easiest way to speed up the process is to lint fewer files. Add a .eslintignore file to your project root to ignore certain files and directories such as:
.eslintignore
Copy
```
/.expo
node_modules

```

## Migration to `eslint-config-expo`[](https://docs.expo.dev/guides/using-eslint/<#migration-to-eslint-config-expo>)
If you're migrating from an older version of Expo SDK that has `eslint-config-universe` installed, install `eslint-config-expo` library and update your ESLint configuration to extend it from the new library.
1
Remove the `eslint-config-universe` library and install the `eslint-config-expo` manually:
macOS/Linux
Windows
Terminal
`- ``npx expo install eslint-config-expo -- --save-dev`
`# For Bun and Yarn`
`- ``npx expo install eslint-config-expo -- --dev`
Terminal
`- ``npx expo install eslint-config-expo "--" --save-dev`
`# For Bun and Yarn`
`- ``npx expo install eslint-config-expo "--" --dev`
2
Update your ESLint configuration to extend the `eslint-config-expo`:
.eslintrc.js
Copy
```
module.exports = {
 extends: 'expo',
 %%placeholder-start%%...%%placeholder-end%%
};

```

You can continue using your existing ESLint configuration with the new library and the `lint` script in your package.json. If your project uses SDK 51 and above, you can switch to using `npx expo lint` by following the next step.
3
To use `npx expo lint` command to lint your code, update the `lint` script in your package.json:
package.json
Copy
```
{
 "scripts": {
  "lint": "expo lint"
 }
}

```

> Note: The above configuration will work only for SDK 51 and above.
Now you can run `npx expo lint` to lint your code.
[Previous (More - Integrations)Using Google authentication](https://docs.expo.dev/guides/using-eslint/</guides/google-authentication>)[Next (More - Integrations)Using Next.js](https://docs.expo.dev/guides/using-eslint/</guides/using-nextjs>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/using-eslint/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/using-eslint/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-eslint.mdx>)
  * Last updated on January 15, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/using-eslint/<https:/expo.dev/privacy>).
On this page
[ESLint](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#eslint>)[Setup](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#setup>)[Usage](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#usage>)[Environment configuration](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#environment-configuration>)[Prettier](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#prettier>)[Installation](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#installation>)[Setup](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#setup-1>)[Troubleshooting](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#troubleshooting>)[ESLint is not updating in VS Code](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#eslint-is-not-updating-in-vs-code>)[ESLint is slow](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#eslint-is-slow>)[Migration to eslint-config-expo](https://docs.expo.dev/guides/using-eslint/</guides/using-eslint/#migration-to-eslint-config-expo>)
