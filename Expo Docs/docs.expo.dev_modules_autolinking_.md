[](https://docs.expo.dev/modules/autolinking/<https:/expo.dev>)[Docs](https://docs.expo.dev/modules/autolinking/</>)
[Blog](https://docs.expo.dev/modules/autolinking/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/modules/autolinking/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/modules/autolinking/<https:/github.com/expo/expo>)[](https://docs.expo.dev/modules/autolinking/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/modules/autolinking/</>)[Guides](https://docs.expo.dev/modules/autolinking/</guides/overview>)[EAS](https://docs.expo.dev/modules/autolinking/</eas>)[Reference](https://docs.expo.dev/modules/autolinking/</versions/latest>)[Learn](https://docs.expo.dev/modules/autolinking/</tutorial/overview>)
[Overview](https://docs.expo.dev/modules/autolinking/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/modules/autolinking/</workflow/overview>)[Configure with app config](https://docs.expo.dev/modules/autolinking/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/modules/autolinking/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/modules/autolinking/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/modules/autolinking/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/modules/autolinking/</guides/permissions>)[Environment variables](https://docs.expo.dev/modules/autolinking/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/modules/autolinking/</router/introduction>)[Installation](https://docs.expo.dev/modules/autolinking/</router/installation>)[Create pages](https://docs.expo.dev/modules/autolinking/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/modules/autolinking/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/modules/autolinking/</router/layouts>)[Error handling](https://docs.expo.dev/modules/autolinking/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/modules/autolinking/</modules/overview>)[Get started](https://docs.expo.dev/modules/autolinking/</modules/get-started>)
Tutorials
Reference
[Module API](https://docs.expo.dev/modules/autolinking/</modules/module-api>)[Android lifecycle listeners](https://docs.expo.dev/modules/autolinking/</modules/android-lifecycle-listeners>)[iOS AppDelegate subscribers](https://docs.expo.dev/modules/autolinking/</modules/appdelegate-subscribers>)[Autolinking](https://docs.expo.dev/modules/autolinking/</modules/autolinking>)[expo-module.config.json](https://docs.expo.dev/modules/autolinking/</modules/module-config>)[Mocking native calls](https://docs.expo.dev/modules/autolinking/</modules/mocking>)[Design considerations](https://docs.expo.dev/modules/autolinking/</modules/design>)
Push notifications
[Overview](https://docs.expo.dev/modules/autolinking/</push-notifications/overview>)[About notification types](https://docs.expo.dev/modules/autolinking/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/modules/autolinking/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/modules/autolinking/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/modules/autolinking/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/modules/autolinking/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/modules/autolinking/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/modules/autolinking/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/modules/autolinking/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/modules/autolinking/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/modules/autolinking/</archive>)[Expo Snack](https://docs.expo.dev/modules/autolinking/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/modules/autolinking/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/modules/autolinking/<https:/expo.dev/mailing-list/signup>)
# Autolinking
[Edit this page](https://docs.expo.dev/modules/autolinking/<https:/github.com/expo/expo/edit/main/docs/pages/modules/autolinking.mdx> "Edit content of this page on GitHub")
Learn how to use Expo Autolinking to automatically link native dependencies in your Expo project.
[Edit this page](https://docs.expo.dev/modules/autolinking/<https:/github.com/expo/expo/edit/main/docs/pages/modules/autolinking.mdx> "Edit content of this page on GitHub")
Usually, when you're developing a native mobile app and want to install a third-party library, you're asked to add the dependency to the manifest files of your package managers (build.gradle on Android, Podfile for CocoaPods on iOS, Package.swift for SwiftPM on iOS). In Expo and React Native, you already do that with your package.json file by installing the package from the [npm](https://docs.expo.dev/modules/autolinking/<https:/www.npmjs.com>) registry. Since most of the React Native libraries come with some native (platform-specific) code, installing a library will require configuring even up to three different package managers!
Expo Autolinking is a mechanism that automates this process and reduces the library installation process to the minimum — usually just installing the package from `npm` and re-running `pod install`. The core implementation can be found in the `expo-modules-autolinking`[](https://docs.expo.dev/modules/autolinking/<https:/github.com/expo/expo/tree/main/packages/expo-modules-autolinking>) package and is divided into three parts:
  1. common JavaScript CLI tool with the module resolution algorithm
  2. code that integrates with the Gradle build system for Android platform
  3. Ruby script that integrates with CocoaPods for iOS platform


## CLI commands[](https://docs.expo.dev/modules/autolinking/<#cli-commands>)
### `search`[](https://docs.expo.dev/modules/autolinking/<#search>)
Searching is the first phase of resolving the Expo modules installed in a project. Its implementation is shared between all platforms. It finds all modules marked as Expo modules and determines which version is of the highest precedence (in case of duplicates).
Terminal
Copy
`- ``npx expo-modules-autolinking search`
The above command returns an object in JSON format with modules that have been found as dependencies:
```
{
 "expo-random": {
  "path": "/absolute/path/to/node_modules/expo-random",
  "version": "13.0.0",
  "config": {
   // Contents of `expo-module.config.json`
   "platforms": ["ios", "android"],
   "ios": { "modules": ["RandomModule"] },
   "android": { "modules": ["expo.modules.random.RandomModule"] }
  },
  "duplicates": [] // An array of other revisions (with lower precedence) of the same module
 }
 // more modules...
}

```

### `resolve`[](https://docs.expo.dev/modules/autolinking/<#resolve>)
Resolving is the second phase based on the results from the `search` command. It resolves each search result to an object with more (platform-specific) details, such as the path to the podspec or build.gradle files and module classes to link.
Terminal
Copy
`- ``npx expo-modules-autolinking resolve --platform <apple|android>`
For example, with the `--platform apple` option it returns an object in JSON format with an array of modules and resolved details for the platform:
```
{
 "modules": [
  {
   "packageName": "expo-random",
   "packageVersion": "13.0.0",
   "pods": [
    {
     "podName": "ExpoRandom",
     "podspecDir": "/absolute/path/to/node_modules/expo-random/ios"
    }
   ],
   "swiftModuleNames": ["ExpoRandom"],
   "modules": ["RandomModule"],
   "appDelegateSubscribers": [],
   "reactDelegateHandlers": [],
   "debugOnly": false
  }
  // more modules...
 ]
}

Show More

```

### `verify`[](https://docs.expo.dev/modules/autolinking/<#verify>)
Verifies the search results by checking whether there are no duplicate packages, otherwise an appropriate warning is shown.
Terminal
Copy
`- ``npx expo-modules-autolinking verify`
## Configuration[](https://docs.expo.dev/modules/autolinking/<#configuration>)
The behavior of the module resolution can be customized using some configuration options. These options can be defined in three different places, from the lowest to the highest precedence:
  * `expo.autolinking` config object in application's package.json
  * per platform overrides with `expo.autolinking.ios` and `expo.autolinking.android` objects
  * options provided to the CLI command, the `use_expo_modules!` method in the Podfile or `useExpoModules` function in the settings.gradle


### `searchPaths`[](https://docs.expo.dev/modules/autolinking/<#searchpaths>)
A list of paths relative to the app's root directory where the autolinking script should search for Expo modules. It defaults to a list of all node_modules directories found when traversing up through a monorepo, starting from the app's root directory. Useful when your project has a custom structure or you want to link local packages from directories different than node_modules.
package.json
Copy
```
{
 "expo": {
  "autolinking": {
   "searchPaths": ["../../packages"]
  }
 }
}

```

When used with the CLI, you can pass the search paths as command arguments like this:
Terminal
Copy
`- ``npx expo-modules-autolinking search ../../packages`
### `exclude`[](https://docs.expo.dev/modules/autolinking/<#exclude>)
A list of package names to exclude from autolinking. These packages will not be autolinked even if they are found in the search paths. For example, you may want not to link some packages that you don't use on the specific platform to reduce the binary size. The following config in package.json will exclude `expo-random` from autolinking on Android:
package.json
Copy
```
{
 "expo": {
  "autolinking": {
   "android": {
    "exclude": ["expo-random"]
   }
  }
 }
}

```

Note that the `exclude` option is for excluding the autolinking of Expo packages. To exclude the autolinking for any other packages, create react-native.config.js at the root directory of your project and apply the configuration as shown in the example below:
react-native.config.js
Copy
```
module.exports = {
 dependencies: {
  'library-name': {
   platforms: {
    android: null,
   },
  },
 },
};

```

Only for: 
iOS
### `flags`[](https://docs.expo.dev/modules/autolinking/<#flags>)
CocoaPods flags to pass to each autolinked pod. `inhibit_warnings` is likely the only flag most developers want to use, to inhibit Xcode warnings produced when compiling the autolinked modules. You can refer to the [CocoaPods Podfile documentation](https://docs.expo.dev/modules/autolinking/<https:/guides.cocoapods.org/syntax/podfile.html#pod>) for available flags.
Podfile
Copy
```
use_expo_modules!({
 flags: {
  :inhibit_warnings => false
 }
})

```

package.json
Copy
```
{
 "expo": {
  "autolinking": {
   "ios": {
    "flags": {
     "inhibit_warnings": true
    }
   }
  }
 }
}

```

## Common questions[](https://docs.expo.dev/modules/autolinking/<#common-questions>)
### How to set up the autolinking in my app?[](https://docs.expo.dev/modules/autolinking/<#how-to-set-up-the-autolinking-in-my-app>)
All projects created with the `npx create-expo-app` command are already configured to use Expo Autolinking. If your project was created using a different tool, see [Installing Expo modules](https://docs.expo.dev/modules/autolinking/</bare/installing-expo-modules>) to make sure your project includes all necessary changes.
### What do I need to have in my module to make it autolinkable?[](https://docs.expo.dev/modules/autolinking/<#what-do-i-need-to-have-in-my-module-to-make-it-autolinkable>)
The module resolution algorithm searches only for packages that contain the [Expo module config](https://docs.expo.dev/modules/autolinking/</modules/module-config>) file (expo-module.config.json) at the root directory, next to the package.json file. It's also necessary to include supported platforms in the `platforms` array — if the platform for which the autolinking algorithm is run is not present in this array, it's just skipped in the search results.
### How is it different from React Native community CLI autolinking?[](https://docs.expo.dev/modules/autolinking/<#how-is-it-different-from-react-native-community-cli-autolinking>)
  * Expo Autolinking comes in with built-in support for monorepos, Yarn workspaces and transitive dependencies.
  * It's also significantly faster, even though the module resolution algorithm is more complex to be more reliable and match the Node's module resolution.
  * Expo module resolution is also capable of detecting the duplicates which is a common issue in monorepos.
  * Last but not least, it integrates well with all the features offered by Expo Modules APIs.


### Opting out of Expo Autolinking[](https://docs.expo.dev/modules/autolinking/<#opting-out-of-expo-autolinking>)
Starting from SDK 52, Expo Autolinking comes enabled by default, if you would like to use the React Native community CLI autolinking instead, set `EXPO_USE_COMMUNITY_AUTOLINKING=1` and add `@react-native-community/cli` as a dev dependency to your project.
[Previous (Expo Modules API - Reference)iOS AppDelegate subscribers](https://docs.expo.dev/modules/autolinking/</modules/appdelegate-subscribers>)[Next (Expo Modules API - Reference)expo-module.config.json](https://docs.expo.dev/modules/autolinking/</modules/module-config>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/modules/autolinking/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/modules/autolinking/<https:/github.com/expo/expo/edit/main/docs/pages/modules/autolinking.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/modules/autolinking/<https:/expo.dev/privacy>).
On this page
[CLI commands](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#cli-commands>)[search](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#search>)[resolve](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#resolve>)[verify](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#verify>)[Configuration](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#configuration>)[searchPaths](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#searchpaths>)[exclude](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#exclude>)[flags](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#flags>)[Common questions](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#common-questions>)[How to set up the autolinking in my app?](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#how-to-set-up-the-autolinking-in-my-app>)[What do I need to have in my module to make it autolinkable?](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#what-do-i-need-to-have-in-my-module-to-make-it-autolinkable>)[How is it different from React Native community CLI autolinking?](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#how-is-it-different-from-react-native-community-cli-autolinking>)[Opting out of Expo Autolinking](https://docs.expo.dev/modules/autolinking/</modules/autolinking/#opting-out-of-expo-autolinking>)
