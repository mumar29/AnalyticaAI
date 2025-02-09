[](https://docs.expo.dev/guides/minify/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/minify/</>)
[Blog](https://docs.expo.dev/guides/minify/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/minify/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/minify/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/minify/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/minify/</>)[Guides](https://docs.expo.dev/guides/minify/</guides/overview>)[EAS](https://docs.expo.dev/guides/minify/</eas>)[Reference](https://docs.expo.dev/guides/minify/</versions/latest>)[Learn](https://docs.expo.dev/guides/minify/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/minify/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/minify/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/minify/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/minify/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/minify/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/minify/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/minify/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/minify/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
[Bundle with Metro](https://docs.expo.dev/guides/minify/</guides/customizing-metro>)[Analyzing JavaScript bundles](https://docs.expo.dev/guides/minify/</guides/analyzing-bundles>)[Tree shaking](https://docs.expo.dev/guides/minify/</guides/tree-shaking>)[Minification](https://docs.expo.dev/guides/minify/</guides/minify>)[Why Metro?](https://docs.expo.dev/guides/minify/</guides/why-metro>)
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/minify/</router/introduction>)[Installation](https://docs.expo.dev/guides/minify/</router/installation>)[Create pages](https://docs.expo.dev/guides/minify/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/minify/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/minify/</router/layouts>)[Error handling](https://docs.expo.dev/guides/minify/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/minify/</modules/overview>)[Get started](https://docs.expo.dev/guides/minify/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/minify/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/minify/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/minify/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/minify/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/minify/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/minify/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/minify/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/minify/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/minify/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/minify/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/minify/</archive>)[Expo Snack](https://docs.expo.dev/guides/minify/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/minify/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/minify/<https:/expo.dev/mailing-list/signup>)
# Minifying JavaScript
[Edit this page](https://docs.expo.dev/guides/minify/<https:/github.com/expo/expo/edit/main/docs/pages/guides/minify.mdx> "Edit content of this page on GitHub")
Learn about customizing the JavaScript minification process in Expo CLI with Metro bundler.
[Edit this page](https://docs.expo.dev/guides/minify/<https:/github.com/expo/expo/edit/main/docs/pages/guides/minify.mdx> "Edit content of this page on GitHub")
Minification is an optimization build step. It removes unnecessary characters such as collapses whitespace, removes comments, and shortens static operations, from the source code. This process reduces the final size and improves load times.
## Minification in Expo CLI[](https://docs.expo.dev/guides/minify/<#minification-in-expo-cli>)
In Expo CLI, minification is performed on JavaScript files during the production export (when `npx expo export`, `npx expo export:embed`, `eas build`, and so on, commands run).
For example, consider following code snippet in a project:
Input
Copy
```
// This comment will be stripped
console.log('a' + ' ' + 'long' + ' string' + ' to ' + 'collapse');

```

This will be minified by the Expo CLI:
Output
Copy
```
console.log('a long string to collapse');

```

> Tip: Comments can be preserved by using the `/** @preserve */` directive.
The default minification of Expo CLI is sufficient for most projects. However, you can customize the minifier to optimize for speed or remove additional features like logs.
## Remove console logs[](https://docs.expo.dev/guides/minify/<#remove-console-logs>)
You can remove console logs from your production build. Use the `drop_console` option in the Terser minifier config.
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.transformer.minifierConfig = {
 compress: {
  // The option below removes all console logs statements in production.
  drop_console: true,
 },
};
module.exports = config;

```

You can also pass an array of console types to drop if you want to preserve certain logs. For example: `drop_console: ['log', 'info']` will remove `console.log` and `console.info` but preserve `console.warn` and `console.error`.
## Customizing the minifier[](https://docs.expo.dev/guides/minify/<#customizing-the-minifier>)
Different minifiers have tradeoffs between speed and compression. You can customize the minifier used by Expo CLI by modifying the metro.config.js file in your project.
### Terser[](https://docs.expo.dev/guides/minify/<#terser>)
> `terser`[](https://docs.expo.dev/guides/minify/<https:/github.com/terser/terser>) is the default minifier ([Metro@0.73.0 changelog](https://docs.expo.dev/guides/minify/<https:/github.com/facebook/metro/releases/tag/v0.73.0>)).
1
To install Terser in a project, run the command:
Terminal
Copy
`- ``yarn add --dev metro-minify-terser`
2
Set Terser as a minifier with `transformer.minifierPath`, and pass in `terser`[ options](https://docs.expo.dev/guides/minify/<https:/github.com/terser/terser#compress-options>) to `transformer.minifierConfig`.
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.transformer.minifierPath = 'metro-minify-terser';
config.transformer.minifierConfig = {
 // Terser options...
};
module.exports = config;

```

### Unsafe Terser options[](https://docs.expo.dev/guides/minify/<#unsafe-terser-options>)
For additional compression that may not work in all JavaScript engines, enable the `unsafe`[ `compress` options](https://docs.expo.dev/guides/minify/<https:/terser.org/docs/miscellaneous/#the-unsafe-compress-option>):
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.transformer.minifierPath = 'metro-minify-terser';
config.transformer.minifierConfig = {
 compress: {
  // Enable all unsafe optimizations.
  unsafe: true,
  unsafe_arrows: true,
  unsafe_comps: true,
  unsafe_Function: true,
  unsafe_math: true,
  unsafe_symbols: true,
  unsafe_methods: true,
  unsafe_proto: true,
  unsafe_regexp: true,
  unsafe_undefined: true,
  unused: true,
 },
};
module.exports = config;

Show More

```

### esbuild[](https://docs.expo.dev/guides/minify/<#esbuild>)
`esbuild`[](https://docs.expo.dev/guides/minify/<https:/esbuild.github.io/>) is used to minify exponentially faster than `uglify-es` and `terser`. For more information, see `metro-minify-esbuild`[](https://docs.expo.dev/guides/minify/<https:/github.com/EvanBacon/metro-minify-esbuild#usage>) usage.
### Uglify[](https://docs.expo.dev/guides/minify/<#uglify>)
For projects SDK 48 and above, you can use `uglify-es`[](https://docs.expo.dev/guides/minify/<https:/github.com/mishoo/UglifyJS>) by following the steps below:
1
To install Uglify in a project, run the command:
Terminal
Copy
`- ``yarn add --dev metro-minify-uglify`
> Make sure the version of `metro-minify-uglify` matches the version of `metro` in your project.
2
Set Uglify as a minifier with `transformer.minifierPath`, and pass in [options](https://docs.expo.dev/guides/minify/<https:/github.com/mishoo/UglifyJS#compress-options>) to `transformer.minifierConfig`.
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.transformer.minifierPath = 'metro-minify-uglify';
config.transformer.minifierConfig = {
 // Options: https://github.com/mishoo/UglifyJS#compress-options
};
module.exports = config;

```

[Previous (Development process - Bundling)Tree shaking](https://docs.expo.dev/guides/minify/</guides/tree-shaking>)[Next (Development process - Bundling)Why Metro?](https://docs.expo.dev/guides/minify/</guides/why-metro>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/minify/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/minify/<https:/github.com/expo/expo/edit/main/docs/pages/guides/minify.mdx>)
  * Last updated on June 19, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/minify/<https:/expo.dev/privacy>).
On this page
[Minification in Expo CLI](https://docs.expo.dev/guides/minify/</guides/minify/#minification-in-expo-cli>)[Remove console logs](https://docs.expo.dev/guides/minify/</guides/minify/#remove-console-logs>)[Customizing the minifier](https://docs.expo.dev/guides/minify/</guides/minify/#customizing-the-minifier>)[Terser](https://docs.expo.dev/guides/minify/</guides/minify/#terser>)[Unsafe Terser options](https://docs.expo.dev/guides/minify/</guides/minify/#unsafe-terser-options>)[esbuild](https://docs.expo.dev/guides/minify/</guides/minify/#esbuild>)[Uglify](https://docs.expo.dev/guides/minify/</guides/minify/#uglify>)
