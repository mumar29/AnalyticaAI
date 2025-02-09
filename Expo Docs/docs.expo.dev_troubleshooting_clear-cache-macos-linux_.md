[](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/expo.dev>)[Docs](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</>)
[Blog](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/github.com/expo/expo>)[](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</>)[Guides](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</guides/overview>)[EAS](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</eas>)[Reference](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</versions/latest>)[Learn](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</tutorial/overview>)
[Overview](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</workflow/overview>)[Configure with app config](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</guides/permissions>)[Environment variables](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</router/introduction>)[Installation](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</router/installation>)[Create pages](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</router/layouts>)[Error handling](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</modules/overview>)[Get started](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</push-notifications/overview>)[About notification types](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
[Overview](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/overview>)["Application has not been registered" error](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/application-has-not-been-registered>)[Clear bundler caches on macOS and Linux](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/clear-cache-macos-linux>)[Clear bundler caches on Windows](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/clear-cache-windows>)["React Native version mismatch" errors](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/react-native-version-mismatch>)[Proxies](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/proxies>)
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</archive>)[Expo Snack](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/expo.dev/mailing-list/signup>)
# Clear bundler caches on macOS and Linux
[Edit this page](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/github.com/expo/expo/edit/main/docs/pages/troubleshooting/clear-cache-macos-linux.mdx> "Edit content of this page on GitHub")
Learn how to clear the bundler cache when using Yarn or npm with Expo CLI or React Native CLI on macOS and Linux.
[Edit this page](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/github.com/expo/expo/edit/main/docs/pages/troubleshooting/clear-cache-macos-linux.mdx> "Edit content of this page on GitHub")
> Need to clear development caches on Windows? [Find the relevant commands here.](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/clear-cache-windows>)
There are a number of different caches associated with your project that can prevent your project from running as intended. Clearing a cache sometimes can help you work around issues related to stale or corrupt data and is often useful when troubleshooting and debugging.
To clear the various caches, run:
## Expo CLI and Yarn[](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<#expo-cli-and-yarn>)
Terminal
`# With Yarn workspaces, you may need to delete node_modules in each workspace`
`- ``rm -rf node_modules`
`- ``yarn cache clean`
`- ``yarn`
`- ``watchman watch-del-all`
`- ``rm -fr $TMPDIR/haste-map-*`
`- ``rm -rf $TMPDIR/metro-cache`
`- ``npx expo start --clear`
## Expo CLI and npm[](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<#expo-cli-and-npm>)
Terminal
`- ``rm -rf node_modules`
`- ``npm cache clean --force`
`- ``npm install`
`- ``watchman watch-del-all`
`- ``rm -fr $TMPDIR/haste-map-*`
`- ``rm -rf $TMPDIR/metro-cache`
`- ``npx expo start --clear`
## React Native CLI and Yarn[](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<#react-native-cli-and-yarn>)
Terminal
`# With Yarn workspaces, you may need to delete node_modules in each workspace`
`- ``rm -rf node_modules`
`- ``yarn cache clean`
`- ``yarn`
`- ``watchman watch-del-all`
`- ``rm -fr $TMPDIR/haste-map-*`
`- ``rm -rf $TMPDIR/metro-cache`
`- ``yarn start -- --reset-cache`
## React Native CLI and npm[](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<#react-native-cli-and-npm>)
Terminal
`- ``rm -rf node_modules`
`- ``npm cache clean --force`
`- ``npm install`
`- ``watchman watch-del-all`
`- ``rm -fr $TMPDIR/haste-map-*`
`- ``rm -rf $TMPDIR/metro-cache`
`- ``npm start -- --reset-cache`
## What these commands are doing[](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<#what-these-commands-are-doing>)
It is a good habit to understand commands you find on the internet before you run them. We explain each command below for Expo CLI, npm, and Yarn, but the corresponding commands React Native CLI have the same behavior.
Command| Description  
---|---  
`rm -rf node_modules`| Clear all of the dependencies of your project  
`yarn cache clean`| Clear the global Yarn cache  
`npm cache clean --force`| Clear the global npm cache  
`yarn`/`npm install`| Reinstall all dependencies  
`watchman watch-del-all`| Reset the `watchman` file watcher  
`rm -rf $TMPDIR/<cache>`| Clear the given packager/bundler cache file or directory  
`npx expo start --clear`| Restart the development server and clear the JavaScript transformation caches  
[Previous (More - Troubleshooting)"Application has not been registered" error](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/application-has-not-been-registered>)[Next (More - Troubleshooting)Clear bundler caches on Windows](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/clear-cache-windows>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/github.com/expo/expo/edit/main/docs/pages/troubleshooting/clear-cache-macos-linux.mdx>)
  * Last updated on August 05, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/<https:/expo.dev/privacy>).
On this page
[Expo CLI and Yarn](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/clear-cache-macos-linux/#expo-cli-and-yarn>)[Expo CLI and npm](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/clear-cache-macos-linux/#expo-cli-and-npm>)[React Native CLI and Yarn](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/clear-cache-macos-linux/#react-native-cli-and-yarn>)[React Native CLI and npm](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/clear-cache-macos-linux/#react-native-cli-and-npm>)[What these commands are doing](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/</troubleshooting/clear-cache-macos-linux/#what-these-commands-are-doing>)
