[](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/expo.dev>)[Docs](https://docs.expo.dev/bare/install-dev-builds-in-bare/</>)
[Blog](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/github.com/expo/expo>)[](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/bare/install-dev-builds-in-bare/</>)[Guides](https://docs.expo.dev/bare/install-dev-builds-in-bare/</guides/overview>)[EAS](https://docs.expo.dev/bare/install-dev-builds-in-bare/</eas>)[Reference](https://docs.expo.dev/bare/install-dev-builds-in-bare/</versions/latest>)[Learn](https://docs.expo.dev/bare/install-dev-builds-in-bare/</tutorial/overview>)
[Overview](https://docs.expo.dev/bare/install-dev-builds-in-bare/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/bare/install-dev-builds-in-bare/</workflow/overview>)[Configure with app config](https://docs.expo.dev/bare/install-dev-builds-in-bare/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/bare/install-dev-builds-in-bare/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/bare/install-dev-builds-in-bare/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/bare/install-dev-builds-in-bare/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/bare/install-dev-builds-in-bare/</guides/permissions>)[Environment variables](https://docs.expo.dev/bare/install-dev-builds-in-bare/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
[Overview](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/overview>)[Install Expo modules](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/installing-expo-modules>)[Migrate to Expo CLI](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/using-expo-cli>)[Install expo-updates](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/installing-updates>)[Install expo-dev-client](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/install-dev-builds-in-bare>)[Native project upgrade helper](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/upgrade>)
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/bare/install-dev-builds-in-bare/</router/introduction>)[Installation](https://docs.expo.dev/bare/install-dev-builds-in-bare/</router/installation>)[Create pages](https://docs.expo.dev/bare/install-dev-builds-in-bare/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/bare/install-dev-builds-in-bare/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/bare/install-dev-builds-in-bare/</router/layouts>)[Error handling](https://docs.expo.dev/bare/install-dev-builds-in-bare/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/bare/install-dev-builds-in-bare/</modules/overview>)[Get started](https://docs.expo.dev/bare/install-dev-builds-in-bare/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/bare/install-dev-builds-in-bare/</push-notifications/overview>)[About notification types](https://docs.expo.dev/bare/install-dev-builds-in-bare/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/bare/install-dev-builds-in-bare/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/bare/install-dev-builds-in-bare/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/bare/install-dev-builds-in-bare/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/bare/install-dev-builds-in-bare/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/bare/install-dev-builds-in-bare/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/bare/install-dev-builds-in-bare/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/bare/install-dev-builds-in-bare/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/bare/install-dev-builds-in-bare/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/bare/install-dev-builds-in-bare/</archive>)[Expo Snack](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/expo.dev/mailing-list/signup>)
# Install expo-dev-client in an existing React Native project
[Edit this page](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/github.com/expo/expo/edit/main/docs/pages/bare/install-dev-builds-in-bare.mdx> "Edit content of this page on GitHub")
Learn how to install and configure expo-dev-client in your existing React Native project.
[Edit this page](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/github.com/expo/expo/edit/main/docs/pages/bare/install-dev-builds-in-bare.mdx> "Edit content of this page on GitHub")
The following guide explains how to install and configure `expo-dev-client` in an existing React Native project.
Do you need to create a new project?[](https://docs.expo.dev/bare/install-dev-builds-in-bare/<#do-you-need-to-create-a-new>)
If you're starting with a new project, create it using the `with-dev-client` template:
Terminal
Copy
`- ``npx create-expo-app -e with-dev-client`
Do you use Continuous Native Generation (CNG) in your project?[](https://docs.expo.dev/bare/install-dev-builds-in-bare/<#do-you-use-continuous-native-generation-cng>)
To use `expo-dev-client` in a project that uses [CNG](https://docs.expo.dev/bare/install-dev-builds-in-bare/</workflow/continuous-native-generation>), see [Create a development build](https://docs.expo.dev/bare/install-dev-builds-in-bare/</develop/development-builds/create-a-build>).
## Prerequisites[](https://docs.expo.dev/bare/install-dev-builds-in-bare/<#prerequisites>)
The `expo` package must be installed and configured. If you created your project with `npx @react-native-community/cli@latest init` and do not have any other Expo libraries installed, you will need to [install Expo modules](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/installing-expo-modules>) before proceeding.
1
## Install expo-dev-client[](https://docs.expo.dev/bare/install-dev-builds-in-bare/<#install-expo-dev-client>)
Add the `expo-dev-client` library to your package.json:
Terminal
Copy
`- ``npx expo install expo-dev-client`
If your project has an ios directory on disk, run the following command to fully install the native code for `expo-dev-client`:
Terminal
Copy
`- ``npx pod-install`
If your project doesn't have an ios directory, you can skip this step.
2
## Configure deep links[](https://docs.expo.dev/bare/install-dev-builds-in-bare/<#configure-deep-links>)
Expo CLI uses a deep link to launch your project, and it's also useful if you use plan to [use `expo-dev-client` for launching preview updates](https://docs.expo.dev/bare/install-dev-builds-in-bare/</eas-update/getting-started>) if you have added a custom deep link scheme to your project.
If you haven't configured a `scheme` for your app yet to support deep linking, then use `uri-scheme` library to do this for you.
Terminal
`# List your project's schemes`
`- ``npx uri-scheme list`
`# Add a scheme to your project`
`- ``npx uri-scheme add your-scheme`
For more information, see the `uri-scheme`[ library](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/www.npmjs.com/package/uri-scheme>).
3
## Add additional optional configuration[](https://docs.expo.dev/bare/install-dev-builds-in-bare/<#add-additional-optional-configuration>)
For certain types of errors, you can obtain more helpful error messages when using `expo-dev-client`. To turn this on, import `expo-dev-client` in the project's index file. Make sure that the import statement is executed early, before your application's JS code is imported (place the import above `import App from './App'`).
```
import 'expo-dev-client';
%%placeholder-start%%... %%placeholder-end%%
import App from './App';

```

For more information, see [Error handling](https://docs.expo.dev/bare/install-dev-builds-in-bare/</develop/development-builds/use-development-builds#add-error-handling>).
4
## Build and install the app[](https://docs.expo.dev/bare/install-dev-builds-in-bare/<#build-and-install-the-app>)
Create a debug build of your app using the tools of your choice. For example, you can do this [locally with Expo CLI](https://docs.expo.dev/bare/install-dev-builds-in-bare/</guides/local-app-development>) or [in the cloud with EAS Build](https://docs.expo.dev/bare/install-dev-builds-in-bare/</develop/development-builds/create-a-build>).
[Previous (Development process - Existing React Native apps)Install expo-updates](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/installing-updates>)[Next (Development process - Existing React Native apps)Native project upgrade helper](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/upgrade>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/github.com/expo/expo/edit/main/docs/pages/bare/install-dev-builds-in-bare.mdx>)
  * Last updated on November 06, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/bare/install-dev-builds-in-bare/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/install-dev-builds-in-bare/#prerequisites>)[Install expo-dev-client](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/install-dev-builds-in-bare/#install-expo-dev-client>)[Configure deep links](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/install-dev-builds-in-bare/#configure-deep-links>)[Add additional optional configuration](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/install-dev-builds-in-bare/#add-additional-optional-configuration>)[Build and install the app](https://docs.expo.dev/bare/install-dev-builds-in-bare/</bare/install-dev-builds-in-bare/#build-and-install-the-app>)
