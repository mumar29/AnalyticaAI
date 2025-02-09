[](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/expo.dev>)[Docs](https://docs.expo.dev/troubleshooting/clear-cache-windows/</>)
[Blog](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/github.com/expo/expo>)[](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/troubleshooting/clear-cache-windows/</>)[Guides](https://docs.expo.dev/troubleshooting/clear-cache-windows/</guides/overview>)[EAS](https://docs.expo.dev/troubleshooting/clear-cache-windows/</eas>)[Reference](https://docs.expo.dev/troubleshooting/clear-cache-windows/</versions/latest>)[Learn](https://docs.expo.dev/troubleshooting/clear-cache-windows/</tutorial/overview>)
[Overview](https://docs.expo.dev/troubleshooting/clear-cache-windows/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/troubleshooting/clear-cache-windows/</workflow/overview>)[Configure with app config](https://docs.expo.dev/troubleshooting/clear-cache-windows/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/troubleshooting/clear-cache-windows/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/troubleshooting/clear-cache-windows/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/troubleshooting/clear-cache-windows/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/troubleshooting/clear-cache-windows/</guides/permissions>)[Environment variables](https://docs.expo.dev/troubleshooting/clear-cache-windows/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/troubleshooting/clear-cache-windows/</router/introduction>)[Installation](https://docs.expo.dev/troubleshooting/clear-cache-windows/</router/installation>)[Create pages](https://docs.expo.dev/troubleshooting/clear-cache-windows/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/troubleshooting/clear-cache-windows/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/troubleshooting/clear-cache-windows/</router/layouts>)[Error handling](https://docs.expo.dev/troubleshooting/clear-cache-windows/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/troubleshooting/clear-cache-windows/</modules/overview>)[Get started](https://docs.expo.dev/troubleshooting/clear-cache-windows/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/troubleshooting/clear-cache-windows/</push-notifications/overview>)[About notification types](https://docs.expo.dev/troubleshooting/clear-cache-windows/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/troubleshooting/clear-cache-windows/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/troubleshooting/clear-cache-windows/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/troubleshooting/clear-cache-windows/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/troubleshooting/clear-cache-windows/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
[Overview](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/overview>)["Application has not been registered" error](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/application-has-not-been-registered>)[Clear bundler caches on macOS and Linux](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/clear-cache-macos-linux>)[Clear bundler caches on Windows](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/clear-cache-windows>)["React Native version mismatch" errors](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/react-native-version-mismatch>)[Proxies](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/proxies>)
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/troubleshooting/clear-cache-windows/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/troubleshooting/clear-cache-windows/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/troubleshooting/clear-cache-windows/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/troubleshooting/clear-cache-windows/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/troubleshooting/clear-cache-windows/</archive>)[Expo Snack](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/expo.dev/mailing-list/signup>)
# Clear bundler caches on Windows
[Edit this page](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/github.com/expo/expo/edit/main/docs/pages/troubleshooting/clear-cache-windows.mdx> "Edit content of this page on GitHub")
Learn how to clear the bundler cache when using Yarn or npm with Expo CLI or React Native CLI on Windows.
[Edit this page](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/github.com/expo/expo/edit/main/docs/pages/troubleshooting/clear-cache-windows.mdx> "Edit content of this page on GitHub")
> Need to clear development caches on macOS or Linux? [Find the relevant commands here.](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/clear-cache-macos-linux>)
There are a number of different caches associated with your project that can prevent your project from running as intended. Clearing a cache sometimes can help you work around issues related to stale or corrupt data and is often useful when troubleshooting and debugging.
## Expo CLI and Yarn[](https://docs.expo.dev/troubleshooting/clear-cache-windows/<#expo-cli-and-yarn>)
Terminal
`# With Yarn workspaces, you may need to delete node_modules in each workspace`
`- ``rm -rf node_modules`
`- ``yarn cache clean`
`- ``yarn`
`- ``watchman watch-del-all`
`- ``del %localappdata%Temphaste-map-*`
`- ``del %localappdata%Tempmetro-cache`
`- ``npx expo start --clear`
## Expo CLI and npm[](https://docs.expo.dev/troubleshooting/clear-cache-windows/<#expo-cli-and-npm>)
Terminal
`- ``rm -rf node_modules`
`- ``npm cache clean --force`
`- ``npm install`
`- ``watchman watch-del-all`
`- ``del %localappdata%Temphaste-map-*`
`- ``del %localappdata%Tempmetro-cache`
`- ``npx expo start --clear`
## React Native CLI and Yarn[](https://docs.expo.dev/troubleshooting/clear-cache-windows/<#react-native-cli-and-yarn>)
Terminal
`# With Yarn workspaces, you may need to delete node_modules in each workspace`
`- ``rm -rf node_modules`
`- ``yarn cache clean`
`- ``yarn`
`- ``watchman watch-del-all`
`- ``del %localappdata%Temphaste-map-*`
`- ``del %localappdata%Tempmetro-cache`
`- ``yarn start -- --reset-cache`
## React Native CLI and npm[](https://docs.expo.dev/troubleshooting/clear-cache-windows/<#react-native-cli-and-npm>)
Terminal
`- ``rm -rf node_modules`
`- ``npm cache clean --force`
`- ``npm install`
`- ``watchman watch-del-all`
`- ``del %localappdata%Temphaste-map-*`
`- ``del %localappdata%Tempmetro-cache`
`- ``npm start -- --reset-cache`
## What these commands are doing[](https://docs.expo.dev/troubleshooting/clear-cache-windows/<#what-these-commands-are-doing>)
It is a good habit to understand commands you find on the internet before you run them. We explain each command below for Expo CLI, npm, and Yarn, but the corresponding commands React Native CLI have the same behavior.
Command| Description  
---|---  
`del node_modules`| Clear all of the dependencies of your project  
`yarn cache clean`| Clear the global Yarn cache  
`npm cache clean --force`| Clear the global npm cache  
`yarn`/`npm install`| Reinstall all dependencies  
`watchman watch-del-all`| Reset the `watchman` file watcher  
`del %localappdata%\Temp/<cache>`| Clear the given packager/bundler cache file or directory  
`npx expo start --clear`| Restart the development server and clear the JavaScript transformation caches  
[Previous (More - Troubleshooting)Clear bundler caches on macOS and Linux](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/clear-cache-macos-linux>)[Next (More - Troubleshooting)"React Native version mismatch" errors](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/react-native-version-mismatch>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/github.com/expo/expo/edit/main/docs/pages/troubleshooting/clear-cache-windows.mdx>)
  * Last updated on August 05, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/troubleshooting/clear-cache-windows/<https:/expo.dev/privacy>).
On this page
[Expo CLI and Yarn](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/clear-cache-windows/#expo-cli-and-yarn>)[Expo CLI and npm](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/clear-cache-windows/#expo-cli-and-npm>)[React Native CLI and Yarn](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/clear-cache-windows/#react-native-cli-and-yarn>)[React Native CLI and npm](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/clear-cache-windows/#react-native-cli-and-npm>)[What these commands are doing](https://docs.expo.dev/troubleshooting/clear-cache-windows/</troubleshooting/clear-cache-windows/#what-these-commands-are-doing>)
