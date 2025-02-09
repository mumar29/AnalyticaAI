[](https://docs.expo.dev/guides/customizing-metro/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/customizing-metro/</>)
[Blog](https://docs.expo.dev/guides/customizing-metro/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/customizing-metro/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/customizing-metro/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/customizing-metro/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/customizing-metro/</>)[Guides](https://docs.expo.dev/guides/customizing-metro/</guides/overview>)[EAS](https://docs.expo.dev/guides/customizing-metro/</eas>)[Reference](https://docs.expo.dev/guides/customizing-metro/</versions/latest>)[Learn](https://docs.expo.dev/guides/customizing-metro/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/customizing-metro/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/customizing-metro/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/customizing-metro/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/customizing-metro/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/customizing-metro/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/customizing-metro/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/customizing-metro/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/customizing-metro/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
[Bundle with Metro](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro>)[Analyzing JavaScript bundles](https://docs.expo.dev/guides/customizing-metro/</guides/analyzing-bundles>)[Tree shaking](https://docs.expo.dev/guides/customizing-metro/</guides/tree-shaking>)[Minification](https://docs.expo.dev/guides/customizing-metro/</guides/minify>)[Why Metro?](https://docs.expo.dev/guides/customizing-metro/</guides/why-metro>)
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/customizing-metro/</router/introduction>)[Installation](https://docs.expo.dev/guides/customizing-metro/</router/installation>)[Create pages](https://docs.expo.dev/guides/customizing-metro/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/customizing-metro/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/customizing-metro/</router/layouts>)[Error handling](https://docs.expo.dev/guides/customizing-metro/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/customizing-metro/</modules/overview>)[Get started](https://docs.expo.dev/guides/customizing-metro/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/customizing-metro/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/customizing-metro/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/customizing-metro/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/customizing-metro/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/customizing-metro/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/customizing-metro/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/customizing-metro/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/customizing-metro/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/customizing-metro/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/customizing-metro/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/customizing-metro/</archive>)[Expo Snack](https://docs.expo.dev/guides/customizing-metro/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/customizing-metro/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/customizing-metro/<https:/expo.dev/mailing-list/signup>)
# Metro bundler
[Edit this page](https://docs.expo.dev/guides/customizing-metro/<https:/github.com/expo/expo/edit/main/docs/pages/guides/customizing-metro.mdx> "Edit content of this page on GitHub")
Learn about different Metro bundler configurations that can be customized.
[Edit this page](https://docs.expo.dev/guides/customizing-metro/<https:/github.com/expo/expo/edit/main/docs/pages/guides/customizing-metro.mdx> "Edit content of this page on GitHub")
Expo CLI uses [Metro](https://docs.expo.dev/guides/customizing-metro/<https:/metrobundler.dev/>) during `npx expo start`[](https://docs.expo.dev/guides/customizing-metro/</more/expo-cli#develop>) and `npx expo export`[](https://docs.expo.dev/guides/customizing-metro/</more/expo-cli#exporting>) to bundle your JavaScript code and assets. Metro is built and optimized for React Native and used for large-scale applications such as Facebook and Instagram.
## Customizing[](https://docs.expo.dev/guides/customizing-metro/<#customizing>)
You can customize the Metro bundler by creating a metro.config.js file at the root of your project. This file should export a [Metro configuration](https://docs.expo.dev/guides/customizing-metro/<https:/metrobundler.dev/docs/configuration/>) that extends `expo/metro-config`[](https://docs.expo.dev/guides/customizing-metro/<https:/github.com/expo/expo/tree/main/packages/@expo/metro-config>). Import `expo/metro-config` instead of `@expo/metro-config` to ensure version consistency.
Run the following command to generate the template file:
Terminal
Copy
`- ``npx expo customize metro.config.js`
The metro.config.js file looks as below:
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
module.exports = config;

```

See [metro.config.js documentation](https://docs.expo.dev/guides/customizing-metro/<https:/metrobundler.dev/docs/configuration/>) for more information.
## Assets[](https://docs.expo.dev/guides/customizing-metro/<#assets>)
Metro resolves files as either source code or assets. Source code is JavaScript, TypeScript, JSON, and other files used by your application. [Assets](https://docs.expo.dev/guides/customizing-metro/</develop/user-interface/assets>) are images, fonts, and other files that should not be transformed by Metro. To accommodate large-scale codebases, Metro requires all extensions for both source code and assets to be explicitly defined before starting the bundler. This is done by adding the `resolver.sourceExts` and `resolver.assetExts` options to the Metro configuration. By default, the following extensions are included:
  * `resolver.assetExts`[](https://docs.expo.dev/guides/customizing-metro/<https:/github.com/facebook/metro/blob/7028b7f51074f9ceef22258a8643d0f90de2388b/packages/metro-config/src/defaults/defaults.js#L15>)
  * `resolver.sourceExts`[](https://docs.expo.dev/guides/customizing-metro/<https:/github.com/facebook/metro/blob/7028b7f51074f9ceef22258a8643d0f90de2388b/packages/metro-config/src/defaults/defaults.js#L53>)


### Adding more file extensions to `assetExts`[](https://docs.expo.dev/guides/customizing-metro/<#adding-more-file-extensions-to-assetexts>)
The most common customization is to include extra asset extensions to Metro.
In the metro.config.js file, add the file extension (without a leading `.`) to `resolver.assetExts` array:
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push(
 // Adds support for `.db` files for SQLite databases
 'db'
);
module.exports = config;

```

## Aliases[](https://docs.expo.dev/guides/customizing-metro/<#aliases>)
Sometimes you want an import to be redirected to another module or file. This is called an alias. Due to the way Metro bundles for multiple platforms simultaneously, we recommend using a custom resolver to handle aliases.
In the following example, we'll add an alias for `old-module` to `new-module`:
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
const ALIASES = {
 'old-module': 'new-module',
};
config.resolver.resolveRequest = (context, moduleName, platform) => {
 // Ensure you call the default resolver.
 return context.resolveRequest(
  context,
  // Use an alias if one exists.
  ALIASES[moduleName] ?? moduleName,
  platform
 );
};
module.exports = config;

Show More

```

If you want to only apply the alias on a certain platform, you can check the `platform` argument:
metro.config.js
Copy
```
config.resolver.resolveRequest = (context, moduleName, platform) => {
 if (platform === 'web') {
  // The alias will only be used when bundling for the web.
  return context.resolveRequest(context, ALIASES[moduleName] ?? moduleName, platform);
 }
 // Ensure you call the default resolver.
 return context.resolveRequest(context, moduleName, platform);
};

```

You will see the changes the next time you restart the dev server. Resolutions are never cached and do not need the `--clear` flag to update. If you use a transform-based system like `babel-plugin-module-resolver`, you will need to clear the cache to see changes applied.
[Customizing Metro resolutionLearn more about advanced Metro resolving in your project.](https://docs.expo.dev/guides/customizing-metro/</versions/latest/config/metro#custom-resolving>)
## Bundle splitting[](https://docs.expo.dev/guides/customizing-metro/<#bundle-splitting>)
From SDK 50, Expo CLI automatically splits bundles based on async imports (web-only).
This technique can be used with Expo Router to automatically split the bundle based on route files in the app directory. It will only load the code required for the current route, and defer loading additional JavaScript until the user navigates to different pages. See [Async Routes](https://docs.expo.dev/guides/customizing-metro/</router/reference/async-routes>) for more information.
## Tree shaking[](https://docs.expo.dev/guides/customizing-metro/<#tree-shaking>)
[Tree shakingLearn about how Expo CLI optimizes production JavaScript bundles.](https://docs.expo.dev/guides/customizing-metro/</guides/tree-shaking>)
## Minification[](https://docs.expo.dev/guides/customizing-metro/<#minification>)
[Minifying JavaScriptLearn about customizing the JavaScript minification process in Expo CLI with Metro bundler.](https://docs.expo.dev/guides/customizing-metro/</guides/minify>)
## Web support[](https://docs.expo.dev/guides/customizing-metro/<#web-support>)
Expo CLI has support for bundling websites using Metro. This is the same bundler used for native apps, and it is designed to be universal across platforms. It is the recommended bundler for web projects in Expo SDK 50 and greater.
### Expo webpack versus Expo Metro[](https://docs.expo.dev/guides/customizing-metro/<#expo-webpack-versus-expo-metro>)
If you previously wrote your website using the deprecated `@expo/webpack-adapter`, see the [migration guide](https://docs.expo.dev/guides/customizing-metro/</router/migrate/from-expo-webpack>) and [comparison chart](https://docs.expo.dev/guides/customizing-metro/</router/migrate/from-expo-webpack#expo-cli>).
### Adding Web support to Metro[](https://docs.expo.dev/guides/customizing-metro/<#adding-web-support-to-metro>)
Modify your [app config](https://docs.expo.dev/guides/customizing-metro/</workflow/configuration>) to enable the feature using the `expo.web.bundler` field:
app.json
Copy
```
{
 "expo": {
  "web": {
   "bundler": "metro"
  }
 }
}

```

#### Development[](https://docs.expo.dev/guides/customizing-metro/<#development>)
To start the development server run the following command:
Terminal
Copy
`- ``npx expo start --web`
Alternatively, press `W` in the Expo CLI terminal UI.
#### Static files[](https://docs.expo.dev/guides/customizing-metro/<#static-files>)
Expo's Metro implementation supports hosting static files from the dev server by putting them in the root public/ directory. It is similar to many other web frameworks.
When exporting with `npx expo export`, the contents of the public directory are copied into the dist/ directory. It means your app can expect to fetch these assets relative to the host URL. The most common example of this is the public/favicon.ico which is used by websites to render the tab icon.
You can overwrite the default index.html in Metro web by creating a public/index.html file in your project.
In the future, this will work universally across platforms with EAS Update hosting. Currently, the feature is web-only based on the static host used for the native app, for example, the legacy Expo service updates do not support this feature.
## TypeScript[](https://docs.expo.dev/guides/customizing-metro/<#typescript>)
Expo's Metro config supports the `compilerOptions.paths` and `compilerOptions.baseUrl` fields in the project's tsconfig.json (or jsconfig.json) file. This enables absolute imports and aliases in the project. See [TypeScript](https://docs.expo.dev/guides/customizing-metro/</guides/typescript>) guide for more information.
This feature requires additional setup in bare projects. See the [Metro setup guide](https://docs.expo.dev/guides/customizing-metro/</versions/latest/config/metro#bare-workflow-setup>) for more information.
## CSS[](https://docs.expo.dev/guides/customizing-metro/<#css>)
[Metro web CSS guideLearn how to use CSS in websites that are bundled with Expo CLI and Metro bundler.](https://docs.expo.dev/guides/customizing-metro/</versions/latest/config/metro#css>)
[Previous (Development process - Web)Tailwind CSS](https://docs.expo.dev/guides/customizing-metro/</guides/tailwind>)[Next (Development process - Bundling)Analyzing JavaScript bundles](https://docs.expo.dev/guides/customizing-metro/</guides/analyzing-bundles>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/customizing-metro/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/customizing-metro/<https:/github.com/expo/expo/edit/main/docs/pages/guides/customizing-metro.mdx>)
  * Last updated on November 13, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/customizing-metro/<https:/expo.dev/privacy>).
On this page
[Customizing](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#customizing>)[Assets](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#assets>)[Adding more file extensions to assetExts](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#adding-more-file-extensions-to-assetexts>)[Aliases](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#aliases>)[Bundle splitting](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#bundle-splitting>)[Tree shaking](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#tree-shaking>)[Minification](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#minification>)[Web support](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#web-support>)[Expo webpack versus Expo Metro](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#expo-webpack-versus-expo-metro>)[Adding Web support to Metro](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#adding-web-support-to-metro>)[Development](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#development>)[Static files](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#static-files>)[TypeScript](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#typescript>)[CSS](https://docs.expo.dev/guides/customizing-metro/</guides/customizing-metro/#css>)
