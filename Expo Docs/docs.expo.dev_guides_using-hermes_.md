[](https://docs.expo.dev/guides/using-hermes/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/using-hermes/</>)
[Blog](https://docs.expo.dev/guides/using-hermes/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/using-hermes/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/using-hermes/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/using-hermes/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/using-hermes/</>)[Guides](https://docs.expo.dev/guides/using-hermes/</guides/overview>)[EAS](https://docs.expo.dev/guides/using-hermes/</eas>)[Reference](https://docs.expo.dev/guides/using-hermes/</versions/latest>)[Learn](https://docs.expo.dev/guides/using-hermes/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/using-hermes/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/using-hermes/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/using-hermes/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/using-hermes/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/using-hermes/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/using-hermes/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/using-hermes/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/using-hermes/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/using-hermes/</router/introduction>)[Installation](https://docs.expo.dev/guides/using-hermes/</router/installation>)[Create pages](https://docs.expo.dev/guides/using-hermes/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/using-hermes/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/using-hermes/</router/layouts>)[Error handling](https://docs.expo.dev/guides/using-hermes/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/using-hermes/</modules/overview>)[Get started](https://docs.expo.dev/guides/using-hermes/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/using-hermes/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/using-hermes/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/using-hermes/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/using-hermes/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/using-hermes/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/using-hermes/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/using-hermes/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/using-hermes/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/using-hermes/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/using-hermes/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/using-hermes/</guides/icons>)[Localization](https://docs.expo.dev/guides/using-hermes/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/using-hermes/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/using-hermes/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/using-hermes/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/using-hermes/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/using-hermes/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/using-hermes/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/using-hermes/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/using-hermes/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/using-hermes/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/using-hermes/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/using-hermes/</archive>)[Expo Snack](https://docs.expo.dev/guides/using-hermes/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/using-hermes/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/using-hermes/<https:/expo.dev/mailing-list/signup>)
# Using Hermes Engine
[Edit this page](https://docs.expo.dev/guides/using-hermes/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-hermes.mdx> "Edit content of this page on GitHub")
A guide on configuring Hermes for both Android and iOS in an Expo project.
[Edit this page](https://docs.expo.dev/guides/using-hermes/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-hermes.mdx> "Edit content of this page on GitHub")
[Hermes](https://docs.expo.dev/guides/using-hermes/<https:/hermesengine.dev/>) is a JavaScript engine optimized for React Native. By compiling JavaScript into bytecode ahead of time, Hermes can improve your app start-up time. The binary size of Hermes is also smaller than other JavaScript engines, such as JavaScriptCore (JSC). It also uses less memory at runtime, which is particularly valuable on lower-end Android devices.
## Support[](https://docs.expo.dev/guides/using-hermes/<#support>)
The Hermes engine is the default JavaScript engine used by Expo and it is fully supported across all Expo tooling.
### Switch JavaScript engine on a specific platform[](https://docs.expo.dev/guides/using-hermes/<#switch-javascript-engine-on-a-specific-platform>)
You may want to use Hermes on one platform and JSC on another. One way to do this is to set the `"jsEngine"` to `"hermes"` at the top level in app config and then override it with `"jsc"` under the `"ios"` key. You may alternatively prefer to explicitly set `"hermes"` on just the `"android"` key in this case.
app.json
Copy
```
{
 "expo": {
  "jsEngine": "hermes",
  "ios": {
   "jsEngine": "jsc"
  }
 }
}

```

## Publish updates[](https://docs.expo.dev/guides/using-hermes/<#publish-updates>)
Publishing updates with `eas update` and `npx expo export` will generate Hermes bytecode bundles and their source maps.
Note that the Hermes bytecode format may change between different Hermes versions — an update produced for a specific version of Hermes will not run on a different version of Hermes. Starting from Expo SDK 46 (React Native 0.69), [Hermes is bundled within React Native](https://docs.expo.dev/guides/using-hermes/<https:/reactnative.dev/architecture/bundled-hermes>). Updating React Native version or Hermes version can be thought of in the same way as updating any other native module. So if you update the `react-native` version you should also update the `runtimeVersion` in app.json. If you don't do this, your app may crash on launch because the update may be loaded by an existing binary that uses an older Hermes version that is incompatible with the updated bytecode format. See `runtimeVersion`[](https://docs.expo.dev/guides/using-hermes/</eas-update/runtime-versions>) for more information.
## JavaScript debugger[](https://docs.expo.dev/guides/using-hermes/<#javascript-debugger>)
To debug JavaScript code running with Hermes, you can start your project with `npx expo start` then press `j` to open the debugger in Google Chrome or Microsoft Edge. The developer menu of development builds and Expo Go also have the Open JS Debugger option to do the same.
Alternatively, you can use the JavaScript inspector from the following tools:
  * [Open Google Chrome DevTools manually](https://docs.expo.dev/guides/using-hermes/<https:/reactnative.dev/docs/hermes#debugging-js-on-hermes-using-google-chromes-devtools>)
  * [Experimental new React Native debugger](https://docs.expo.dev/guides/using-hermes/<https:/reactnative.dev/docs/debugging?js-debugger=new-debugger>)


### Troubleshooting[](https://docs.expo.dev/guides/using-hermes/<#troubleshooting>)
> `No compatible apps connected. JavaScript Debugging can only be used with the Hermes engine.` when opening the debugger.
  * Make sure you [set up Hermes in the `jsEngine` field](https://docs.expo.dev/guides/using-hermes/</guides/using-hermes#setup>).
  * If your app is built by `eas build`, `npx expo run:android` or `npx expo run:ios`, make sure it is a debug build.
  * Internally, the app will establish a WebSocket connection, make sure your app is connected to the development server.
    * Try to reload the app by pressing `r` in the Expo CLI Terminal UI.
    * Test debugging availability by running the command: `curl http://127.0.0.1:8081/json/list` (adjust the `127.0.0.1:8081` to match your dev server URL). The HTTP response should be an array, as shown below. If it is an empty response, add either the `--localhost` or `--tunnel` flag to the `npx expo start` command.
```
[
 {
  "id": "0-2",
  "description": "host.exp.Exponent",
  "title": "Hermes ABI47_0_0React Native",
  "faviconUrl": "https://react.dev/favicon.ico",
  "devtoolsFrontendUrl": "devtools://devtools/bundled/js_app.html?experiments=true&v8only=true&ws=%5B%3A%3A1%5D%3A8081%2Finspector%2Fdebug%3Fdevice%3D0%26page%3D2",
  "type": "node",
  "webSocketDebuggerUrl": "ws://[::1]:8081/inspector/debug?device=0&page=2",
  "vm": "Hermes"
 },
 {
  "id": "0--1",
  "description": "host.exp.Exponent",
  "title": "React Native Experimental (Improved Chrome Reloads)",
  "faviconUrl": "https://react.dev/favicon.ico",
  "devtoolsFrontendUrl": "devtools://devtools/bundled/js_app.html?experiments=true&v8only=true&ws=%5B%3A%3A1%5D%3A8081%2Finspector%2Fdebug%3Fdevice%3D0%26page%3D-1",
  "type": "node",
  "webSocketDebuggerUrl": "ws://[::1]:8081/inspector/debug?device=0&page=-1",
  "vm": "don't use"
 }
]

Show More

```



### Can I use Remote Debugging with Hermes?[](https://docs.expo.dev/guides/using-hermes/<#can-i-use-remote-debugging-with-hermes>)
One of the many limitations of [remote debugging](https://docs.expo.dev/guides/using-hermes/</more/glossary-of-terms#remote-debugging>) is that it does not work with modules built on top of [JSI](https://docs.expo.dev/guides/using-hermes/<https:/github.com/react-native-community/discussions-and-proposals/issues/91>), such as `react-native-reanimated`[](https://docs.expo.dev/guides/using-hermes/<https:/github.com/software-mansion/react-native-reanimated>) version 2 or higher.
Hermes supports [Chrome DevTools Protocol](https://docs.expo.dev/guides/using-hermes/<https:/chromedevtools.github.io/devtools-protocol/v8/>) to debug JavaScript in place by connecting to the engine running on the device, as opposed to remote debugging, which executes JavaScript within a desktop Chrome tab. Hermes apps use this debugging technique automatically when you open the debugger in Expo Go or a development build.
[Previous (More - Assorted)Share preview releases](https://docs.expo.dev/guides/using-hermes/</guides/sharing-preview-releases>)[Next (More - Assorted)iOS Developer Mode](https://docs.expo.dev/guides/using-hermes/</guides/ios-developer-mode>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/using-hermes/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/using-hermes/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-hermes.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/using-hermes/<https:/expo.dev/privacy>).
On this page
[Support](https://docs.expo.dev/guides/using-hermes/</guides/using-hermes/#support>)[Switch JavaScript engine on a specific platform](https://docs.expo.dev/guides/using-hermes/</guides/using-hermes/#switch-javascript-engine-on-a-specific-platform>)[Publish updates](https://docs.expo.dev/guides/using-hermes/</guides/using-hermes/#publish-updates>)[JavaScript debugger](https://docs.expo.dev/guides/using-hermes/</guides/using-hermes/#javascript-debugger>)[Troubleshooting](https://docs.expo.dev/guides/using-hermes/</guides/using-hermes/#troubleshooting>)[Can I use Remote Debugging with Hermes?](https://docs.expo.dev/guides/using-hermes/</guides/using-hermes/#can-i-use-remote-debugging-with-hermes>)
