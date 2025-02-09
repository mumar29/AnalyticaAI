[](https://docs.expo.dev/guides/tree-shaking/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/tree-shaking/</>)
[Blog](https://docs.expo.dev/guides/tree-shaking/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/tree-shaking/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/tree-shaking/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/tree-shaking/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/tree-shaking/</>)[Guides](https://docs.expo.dev/guides/tree-shaking/</guides/overview>)[EAS](https://docs.expo.dev/guides/tree-shaking/</eas>)[Reference](https://docs.expo.dev/guides/tree-shaking/</versions/latest>)[Learn](https://docs.expo.dev/guides/tree-shaking/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/tree-shaking/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/tree-shaking/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/tree-shaking/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/tree-shaking/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/tree-shaking/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/tree-shaking/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/tree-shaking/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/tree-shaking/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
[Bundle with Metro](https://docs.expo.dev/guides/tree-shaking/</guides/customizing-metro>)[Analyzing JavaScript bundles](https://docs.expo.dev/guides/tree-shaking/</guides/analyzing-bundles>)[Tree shaking](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking>)[Minification](https://docs.expo.dev/guides/tree-shaking/</guides/minify>)[Why Metro?](https://docs.expo.dev/guides/tree-shaking/</guides/why-metro>)
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/tree-shaking/</router/introduction>)[Installation](https://docs.expo.dev/guides/tree-shaking/</router/installation>)[Create pages](https://docs.expo.dev/guides/tree-shaking/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/tree-shaking/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/tree-shaking/</router/layouts>)[Error handling](https://docs.expo.dev/guides/tree-shaking/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/tree-shaking/</modules/overview>)[Get started](https://docs.expo.dev/guides/tree-shaking/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/tree-shaking/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/tree-shaking/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/tree-shaking/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/tree-shaking/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/tree-shaking/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/tree-shaking/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/tree-shaking/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/tree-shaking/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/tree-shaking/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/tree-shaking/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/tree-shaking/</archive>)[Expo Snack](https://docs.expo.dev/guides/tree-shaking/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/tree-shaking/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/tree-shaking/<https:/expo.dev/mailing-list/signup>)
# Tree shaking and code removal
[Edit this page](https://docs.expo.dev/guides/tree-shaking/<https:/github.com/expo/expo/edit/main/docs/pages/guides/tree-shaking.mdx> "Edit content of this page on GitHub")
Learn about how Expo CLI optimizes production JavaScript bundles.
[Edit this page](https://docs.expo.dev/guides/tree-shaking/<https:/github.com/expo/expo/edit/main/docs/pages/guides/tree-shaking.mdx> "Edit content of this page on GitHub")
Android
iOS
tvOS
Web
Tree shaking (also referred to as _dead code removal_) is a technique to remove unused code from the production bundle. Expo CLI employs different techniques, including [minification](https://docs.expo.dev/guides/tree-shaking/</guides/minify>), to improve startup time by removing unused code.
## Platform shaking[](https://docs.expo.dev/guides/tree-shaking/<#platform-shaking>)
Expo CLI employs a process known as platform shaking for app bundling, where it creates separate bundles for each platform (Android, iOS, web). It ensures that the code is only used on one platform and is removed from other platforms.
Any code that is used conditionally based on the `Platform` module from `react-native` is removed from the other platforms. However, this exclusion specifically applies to instances where `Platform.select` and `Platform.OS` are directly imported from react-native in each file. If these are re-exported through a different module, they will not be removed during the bundling process for different platforms.
For example, consider the following transformation input:
Input
Copy
```
import { Platform } from 'react-native';
if (Platform.OS === 'ios') {
 console.log('Hello on iOS');
}

```

The production bundle will remove the conditional based on the platform:
Output (Android)
Copy
```
%%placeholder-start%%Empty on Android %%placeholder-end%%
```

Output (iOS)
Copy
```
console.log('Hello on iOS');

```

This optimization is production only and runs on a per-file basis. If you re-export `Platform.OS` from a different module, it will not be removed from the production bundle.
Starting in SDK 51, `process.env.EXPO_OS` can be used to detect the platform that the JavaScript was bundled for (cannot change at runtime). This value does not support platform shaking imports due to how Metro minifies code after dependency resolution.
## Remove development-only code[](https://docs.expo.dev/guides/tree-shaking/<#remove-development-only-code>)
In your project, there might be code designed to help with the development process. It should be excluded from the production bundle. To handle these scenarios, use the `process.env.NODE_ENV `environment variable or the non-standard `__DEV__` global boolean.
1
For example, the following code snippet will be removed from the production bundle:
Input
Copy
```
if (process.env.NODE_ENV === 'development') {
 console.log('Hello in development');
}
if (__DEV__) {
 console.log('Another development-only conditional...');
}

```

2
After _constants folding_ takes place, the conditions can be evaluated statically:
Post constants folding
Copy
```
if ('production' === 'development') {
 console.log('Hello in development');
}
if (false) {
 console.log('Another development-only conditional...');
}

```

3
The unreachable conditions are removed during [minification](https://docs.expo.dev/guides/tree-shaking/</guides/minify>):
Output (production)
Copy
```
%%placeholder-start%%Empty file %%placeholder-end%%
```

To improve speed, Expo CLI only performs code elimination in production builds. Conditionals from the above code snippet are kept in development builds.
## Custom code removal[](https://docs.expo.dev/guides/tree-shaking/<#custom-code-removal>)
With Expo SDK 50, `EXPO_PUBLIC_` environment variables are inlined before the minification process. This means they can be used to remove code from the production bundle. For example:
1
.env
Copy
```
EXPO_PUBLIC_DISABLE_FEATURE=true;

```

Input
Copy
```
if (!process.env.EXPO_PUBLIC_DISABLE_FEATURE) {
 console.log('Hello from the feature!');
}

```

2
The above input code snippet is transformed to the following after `babel-preset-expo`:
Post babel-preset-expo
Copy
```
if (!'true') {
 console.log('Hello from the feature!');
}

```

3
The above code snippet is then minified, which removes the unused conditional:
Post minifier
Copy
```
// Empty file

```

  * This system does not apply to server code as environment variables are not inlined in server bundles.
  * Library authors should not use `EXPO_PUBLIC_` environment variables as they only run in application code for security reasons.


## Removing server code[](https://docs.expo.dev/guides/tree-shaking/<#removing-server-code>)
> SDK 51 and greater
It's common to use `typeof window === 'undefined'` to conditionally enable or disable code for server and client environments.
`babel-preset-expo` automatically transforms `typeof window === 'undefined'` to `true` when bundling for server environments and `false` when bundling for websites. The check remains unchanged when bundling for native client environments to support apps that polyfill `window`. This transform runs in both development and production but only removes conditional requires in production.
You can configure `babel-preset-expo` to skip the transform by passing `{ preserveTypeofWindow: false }`.
1
Input
Copy
```
if (typeof window === 'undefined') {
 console.log('Hello on the server!');
}

```

2
The input code from the previous step is transformed to the following code snippet after `babel-preset-expo` when bundling for server environments (API routes, server rendering):
Post babel-preset-expo (bundling for server)
Copy
```
if (true) {
 console.log('Hello on the server!');
}

```

Bundling client code for web browsers will change `typeof window` to `false`:
Post babel-preset-expo
Copy
```
if (false) {
 console.log('Hello on the server!');
}

```

Bundling client code for native apps will leave `typeof window` in place:
Post babel-preset-expo
Copy
```
if (typeof window === 'undefined') {
 console.log('Hello on the server!');
}

```

3
The above code snippet is then minified, which removes the unused conditional:
Post minifier (server)
Copy
```
console.log('Hello on the server!');

```

Post minifier (client websites)
Copy
```
// Empty file

```

## React Native web imports[](https://docs.expo.dev/guides/tree-shaking/<#react-native-web-imports>)
`babel-preset-expo` provides a built-in optimization for the `react-native-web` barrel file. If you import `react-native` directly using ESM, then the barrel file will be removed from the production bundle.
ESM
CJS
If you import `react-native` using the static `import` syntax, the barrel file will be removed.
Input
Copy
```
import { View, Image } from 'react-native';

```

Output (web)
Copy
```
import View from 'react-native-web/dist/exports/View';
import Image from 'react-native-web/dist/exports/Image';

```

If you import `react-native` using `require()`, the barrel file will be left as-is in the production bundle.
Input
Copy
```
const { View, Image } = require('react-native');

```

Output (web)
Copy
```
const { View, Image } = require('react-native-web');

```

## Remove unused imports and exports[](https://docs.expo.dev/guides/tree-shaking/<#remove-unused-imports-and-exports>)
> Experimentally available in SDK 52 and above.
You can experimentally enable support for automatically removing unused imports and exports across modules. This is useful for speeding up native OTA downloads and optimizing web performance where JavaScript must be parsed and executed using a standard JavaScript engine.
Consider the following example code:
index.js
Copy
```
import { ArrowUp } from './icons';
export default function Home() {
 return <ArrowUp />;
}

```

icons.js
Copy
```
export function ArrowUp() {
 /* ... */
}
export function ArrowDown() {
 /* ... */
}
export function ArrowRight() {
 /* ... */
}
export function ArrowLeft() {
 /* ... */
}

```

Since only `ArrowUp` is used in `index.js`, the production bundle will remove all other components from `icons.js`.
icons.js (Output)
Copy
```
export function ArrowUp() {
 /* ... */
}

```

This system scales up to automatically optimize all `import` and `export` syntax in your app, across all platforms. While this results in smaller bundles, processing JS still requires time and computer memory so avoid importing millions of modules.
  * Tree-shaking only runs in production bundles and can only run on modules that use `import` and `export` syntax. Files that use `module.exports` and `require` will not be tree-shaken.
  * Avoid adding Babel plugins such as `@babel/plugin-transform-modules-commonjs` which convert `import`/`export` syntax to CJS. This will break tree-shaking across your project.
  * Modules that are marked as side-effects will not be removed from the graph.
  * `export * from "..."` will be expanded and optimized unless the export uses `module.exports` or `exports`.
  * All modules in the Expo SDK are shipped as ESM and can be exhaustively tree-shaken.


## Enabling tree shaking[](https://docs.expo.dev/guides/tree-shaking/<#enabling-tree-shaking>)
> Experimentally available in SDK 52 and above.
1
Enable `experimentalImportSupport` and ensure your app builds and runs as expected. You may experience issues with require cycles or mixing CommonJS and ESM imports.
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.transformer.getTransformOptions = async () => ({
 transform: {
  experimentalImportSupport: true,
 },
});
module.exports = config;

```

Experimental import support uses Metro's version of the `@babel/plugin-transform-modules-commonjs` plugin. This drastically reduces the number of resolutions and simplifies your output bundle. This feature can be used with `inlineRequires` to further optimize your bundle experimentally.
2
Toggle on the environment variable `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1` to keep modules around until the entire graph is created. Ensure your app builds and runs as expected in production with this feature enabled before continuing.
.env
Copy
```
EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1

```

This will only be used in production mode.
3
Toggle on the environment variable `EXPO_UNSTABLE_TREE_SHAKING=1` to enable the feature.
.env
Copy
```
EXPO_UNSTABLE_TREE_SHAKING=1

```

This will only be used in production mode.
4
Bundle your app in production mode to see the effects of tree shaking.
Terminal
Copy
`- ``npx expo export`
This feature is very experimental because it changes the fundamental structure of how Metro bundles code. By default, Metro bundles everything on-demand and lazily to ensure the fastest possible development times. In contrast, tree shaking requires some transformation to be delayed until after the entire bundle has been created. This means less code can be cached, which is generally fine because tree shaking is a production-only feature and production bundles often don't use transform caches.
## Barrel files[](https://docs.expo.dev/guides/tree-shaking/<#barrel-files>)
> Experimentally available in SDK 52 and above.
With Expo tree shaking, star exports will automatically be expanded and shaken based on usage. For example, consider the following code snippet:
Input
Copy
```
export * from './icons';

```

The optimization pass will crawl `./icons` and add the exports to the current module. If the exports are unused, they will be removed from the production bundle.
Expanded
Copy
```
export { ArrowRight, ArrowLeft } from './icons';

```

This will be shaken according to standard tree shaking rules. If you only import `ArrowRight`, then `ArrowLeft` will be removed from the production bundle.
If the star export pulls in ambiguous exports such as `module.exports.ArrowUp` or `exports.ArrowDown`, then the optimization pass will not expand the star export and no exports will be removed from the barrel file. You can use [Expo Atlas](https://docs.expo.dev/guides/tree-shaking/</guides/analyzing-bundles#analyzing-bundle-size-with-atlas>) to inspect the expanded exports.
You can use this strategy with libraries like `lucide-react` to remove all icons that are not used in your app.
## Recursive optimizations[](https://docs.expo.dev/guides/tree-shaking/<#recursive-optimizations>)
> Experimentally available in SDK 52 and above.
Expo optimizes a module by recursing through the graph exhaustively to find unused imports. Consider the following code snippet:
Input
Copy
```
export function foo() {
 // Because bar is used here, it cannot be removed.
 bar();
}
export function bar() {}

```

In this case, `bar` is used in `foo`, so it cannot be removed. However, if `foo` is not used anywhere in the app, then `foo` will be removed and the module will be scanned again to see if `bar` can be removed. This process recurses 5 times for a given module before bailing out due to performance reasons.
## Side-effects[](https://docs.expo.dev/guides/tree-shaking/<#side-effects>)
Expo CLI respects module side-effects according to the [Webpack system](https://docs.expo.dev/guides/tree-shaking/<https:/webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free>). Side-effects are generally used for defining global variables (`console.log`) or modifying prototypes (avoid doing this).
You can mark if your module has side-effects in the package.json:
package.json
Copy
```
{
 "name": "library",
 "sideEffects": ["./src/*.js"]
}

```

Side-effects will prevent the removal of unused modules and disable module inlining to ensure JS code runs in the expected order. Side-effects will be removed if they're empty or contain only comments and directives (`"use strict"`, `"use client"`, and so on).
When Expo tree shaking is enabled, you can safely enable `inlineRequires` in your metro.config.js for production bundles. This will lazily load modules when they're evaluated, leading to faster startup time. Avoid using this feature without Expo tree shaking as it will move modules around in ways that can change the execution order of side-effects.
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.transformer.getTransformOptions = async () => ({
 transform: {
  experimentalImportSupport: true,
  inlineRequires: true,
 },
});
module.exports = config;

```

## Optimizing for tree shaking[](https://docs.expo.dev/guides/tree-shaking/<#optimizing-for-tree-shaking>)
Before Expo tree shaking, React Native libraries would remove imports by wrapping them in conditional blocks such as:
```
if (process.env.NODE_ENV === 'development') {
 require('./dev-only').doSomething();
}

```

This is problematic because you don't have accurate TypeScript support and it makes the graph ambiguous since you cannot statically analyze the code. With Expo tree shaking enabled, you can restructure this code to use ESM imports:
Input
Copy
```
import { doSomething } from './dev-only';
if (process.env.NODE_ENV === 'development') {
 doSomething();
}

```

In both cases, the entire module will be empty in production bundles.
[Previous (Development process - Bundling)Analyzing JavaScript bundles](https://docs.expo.dev/guides/tree-shaking/</guides/analyzing-bundles>)[Next (Development process - Bundling)Minification](https://docs.expo.dev/guides/tree-shaking/</guides/minify>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/tree-shaking/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/tree-shaking/<https:/github.com/expo/expo/edit/main/docs/pages/guides/tree-shaking.mdx>)
  * Last updated on January 01, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/tree-shaking/<https:/expo.dev/privacy>).
On this page
[Platform shaking](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#platform-shaking>)[Remove development-only code](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#remove-development-only-code>)[Custom code removal](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#custom-code-removal>)[Removing server code](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#removing-server-code>)[React Native web imports](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#react-native-web-imports>)[Remove unused imports and exports](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#remove-unused-imports-and-exports>)[Enabling tree shaking](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#enabling-tree-shaking>)[Barrel files](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#barrel-files>)[Recursive optimizations](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#recursive-optimizations>)[Side-effects](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#side-effects>)[Optimizing for tree shaking](https://docs.expo.dev/guides/tree-shaking/</guides/tree-shaking/#optimizing-for-tree-shaking>)
