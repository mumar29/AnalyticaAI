[](https://docs.expo.dev/router/installation/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/installation/</>)
[Blog](https://docs.expo.dev/router/installation/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/installation/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/installation/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/installation/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/installation/</>)[Guides](https://docs.expo.dev/router/installation/</guides/overview>)[EAS](https://docs.expo.dev/router/installation/</eas>)[Reference](https://docs.expo.dev/router/installation/</versions/latest>)[Learn](https://docs.expo.dev/router/installation/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/installation/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/installation/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/installation/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/installation/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/installation/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/installation/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/installation/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/installation/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/installation/</router/introduction>)[Installation](https://docs.expo.dev/router/installation/</router/installation>)[Create pages](https://docs.expo.dev/router/installation/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/installation/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/installation/</router/layouts>)[Error handling](https://docs.expo.dev/router/installation/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/installation/</modules/overview>)[Get started](https://docs.expo.dev/router/installation/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/installation/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/installation/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/installation/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/installation/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/installation/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/installation/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/installation/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/installation/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/installation/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/installation/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/installation/</archive>)[Expo Snack](https://docs.expo.dev/router/installation/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/installation/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/installation/<https:/expo.dev/mailing-list/signup>)
# Install Expo Router
[Edit this page](https://docs.expo.dev/router/installation/<https:/github.com/expo/expo/edit/main/docs/pages/router/installation.mdx> "Edit content of this page on GitHub")
Learn how to quickly get started by creating a new project with Expo Router or adding the library to an existing project.
[Edit this page](https://docs.expo.dev/router/installation/<https:/github.com/expo/expo/edit/main/docs/pages/router/installation.mdx> "Edit content of this page on GitHub")
Find the steps below to create a new project with Expo Router library or add it to your existing project.
## Quick start[](https://docs.expo.dev/router/installation/<#quick-start>)
1
We recommend creating a new Expo app using `create-expo-app` to create a project with Expo Router library already installed and configured:
Terminal
Copy
`- ``npx create-expo-app@latest`
2
Now, you can start your project by running:
Terminal
Copy
`- ``npx expo start`
  * To view your app on a mobile device, we recommend starting with [Expo Go](https://docs.expo.dev/router/installation/</get-started/set-up-your-environment#how-would-you-like-to-develop>). As your application grows in complexity and you need more control, you can create a [development build](https://docs.expo.dev/router/installation/</develop/development-builds/introduction>).
  * Open the project in a web browser by pressing `w` in the Terminal UI. Press `a` for Android (Android Studio is required), or `i` for iOS (macOS with Xcode is required).


## Manual installation[](https://docs.expo.dev/router/installation/<#manual-installation>)
Follow the steps below if you have a project that was previously created with Expo but does not have Expo Router library installed.
### Prerequisites[](https://docs.expo.dev/router/installation/<#prerequisites>)
Make sure your computer is [set up for running an Expo app](https://docs.expo.dev/router/installation/</get-started/create-a-project>).
1
### Install dependencies[](https://docs.expo.dev/router/installation/<#install-dependencies>)
You'll need to install the following dependencies:
SDK 50 and above
SDK 49 and below
Terminal
Copy
`- ``npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`
The above command will install versions of these libraries that are compatible with the Expo SDK version your project is using.
Terminal
Copy
`- ``npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler`
The above command will install versions of these libraries that are compatible with the Expo SDK version your project is using.
2
### Setup entry point[](https://docs.expo.dev/router/installation/<#setup-entry-point>)
For the property `main`, use the `expo-router/entry` as its value in the package.json. The initial client file is [app/_layout.js](https://docs.expo.dev/router/installation/</router/advanced/root-layout>).
package.json
Copy
```
{
 "main": "expo-router/entry"
}

```

3
### Modify project configuration[](https://docs.expo.dev/router/installation/<#modify-project-configuration>)
Add a deep linking `scheme` in your [app config](https://docs.expo.dev/router/installation/</workflow/configuration>):
app.json
Copy
```
{
 "scheme": "your-app-scheme"
}

```

If you are developing your app for web, install the following dependencies:
Terminal
Copy
`- ``npx expo install react-native-web react-dom`
Then, enable [Metro web](https://docs.expo.dev/router/installation/</guides/customizing-metro#adding-web-support-to-metro>) support by adding the following to your [app config](https://docs.expo.dev/router/installation/</workflow/configuration>):
app.json
Copy
```
{
 "web": {
  "bundler": "metro"
 }
}

```

4
### Modify babel.config.js[](https://docs.expo.dev/router/installation/<#modify-babelconfigjs>)
SDK 50 and above
SDK 49 and below
Ensure you use `babel-preset-expo` as the `preset`, in the babel.config.js file or delete the file:
babel.config.js
Copy
```
module.exports = function (api) {
 api.cache(true);
 return {
  presets: ['babel-preset-expo'],
 };
};

```

If you're upgrading from a version of Expo Router that is older than v3, remove the `plugins: ['expo-router/babel']`. `expo-router/babel` was merged in `babel-preset-expo` in SDK 50 (Expo Router v3).
Add `expo-router/babel` plugin as the last item in the `plugins` array to your project's babel.config.js:
babel.config.js
Copy
```
module.exports = function (api) {
 api.cache(true);
 return {
  presets: ['babel-preset-expo'],
  plugins: ['expo-router/babel'],
 };
};

```

> Note: If your project doesn't have babel.config.js, run `npx expo customize babel.config.js` to create one.
5
### Clear bundler cache[](https://docs.expo.dev/router/installation/<#clear-bundler-cache>)
After updating the Babel config file, run the following command to clear the bundler cache:
Terminal
Copy
`- ``npx expo start --clear`
6
### Update resolutions[](https://docs.expo.dev/router/installation/<#update-resolutions>)
SDK 50 and above
SDK 49
If you're upgrading from an older version of Expo Router, ensure you remove all outdated Yarn resolutions or npm overrides in your package.json. Specifically, remove `metro`, `metro-resolver`, `react-refresh` resolutions from your package.json.
Expo Router requires at least `react-refresh@0.14.0`. React Native hasn't upgraded as of SDK 49 and Expo Router v2, so you need to force upgrade your `react-refresh` version by setting a Yarn resolution or npm override.
Yarn
npm
package.json
Copy
```
{
 %%placeholder-start%%... %%placeholder-end%%
 "resolutions": {
  "react-refresh": "~0.14.0"
 }
}

```

package.json
Copy
```
{
 %%placeholder-start%%... %%placeholder-end%%
 "overrides": {
  "react-refresh": "~0.14.0"
 }
}

```

[Previous (Expo Router)Introduction](https://docs.expo.dev/router/installation/</router/introduction>)[Next (Expo Router)Create pages](https://docs.expo.dev/router/installation/</router/create-pages>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/installation/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/installation/<https:/github.com/expo/expo/edit/main/docs/pages/router/installation.mdx>)
  * Last updated on January 01, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/installation/<https:/expo.dev/privacy>).
On this page
[Quick start](https://docs.expo.dev/router/installation/</router/installation/#quick-start>)[Manual installation](https://docs.expo.dev/router/installation/</router/installation/#manual-installation>)[Prerequisites](https://docs.expo.dev/router/installation/</router/installation/#prerequisites>)[Install dependencies](https://docs.expo.dev/router/installation/</router/installation/#install-dependencies>)[Setup entry point](https://docs.expo.dev/router/installation/</router/installation/#setup-entry-point>)[Modify project configuration](https://docs.expo.dev/router/installation/</router/installation/#modify-project-configuration>)[Modify babel.config.js](https://docs.expo.dev/router/installation/</router/installation/#modify-babelconfigjs>)[Clear bundler cache](https://docs.expo.dev/router/installation/</router/installation/#clear-bundler-cache>)[Update resolutions](https://docs.expo.dev/router/installation/</router/installation/#update-resolutions>)
