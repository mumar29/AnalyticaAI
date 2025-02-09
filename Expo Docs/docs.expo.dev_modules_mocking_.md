[](https://docs.expo.dev/modules/mocking/<https:/expo.dev>)[Docs](https://docs.expo.dev/modules/mocking/</>)
[Blog](https://docs.expo.dev/modules/mocking/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/modules/mocking/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/modules/mocking/<https:/github.com/expo/expo>)[](https://docs.expo.dev/modules/mocking/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/modules/mocking/</>)[Guides](https://docs.expo.dev/modules/mocking/</guides/overview>)[EAS](https://docs.expo.dev/modules/mocking/</eas>)[Reference](https://docs.expo.dev/modules/mocking/</versions/latest>)[Learn](https://docs.expo.dev/modules/mocking/</tutorial/overview>)
[Overview](https://docs.expo.dev/modules/mocking/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/modules/mocking/</workflow/overview>)[Configure with app config](https://docs.expo.dev/modules/mocking/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/modules/mocking/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/modules/mocking/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/modules/mocking/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/modules/mocking/</guides/permissions>)[Environment variables](https://docs.expo.dev/modules/mocking/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/modules/mocking/</router/introduction>)[Installation](https://docs.expo.dev/modules/mocking/</router/installation>)[Create pages](https://docs.expo.dev/modules/mocking/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/modules/mocking/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/modules/mocking/</router/layouts>)[Error handling](https://docs.expo.dev/modules/mocking/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/modules/mocking/</modules/overview>)[Get started](https://docs.expo.dev/modules/mocking/</modules/get-started>)
Tutorials
Reference
[Module API](https://docs.expo.dev/modules/mocking/</modules/module-api>)[Android lifecycle listeners](https://docs.expo.dev/modules/mocking/</modules/android-lifecycle-listeners>)[iOS AppDelegate subscribers](https://docs.expo.dev/modules/mocking/</modules/appdelegate-subscribers>)[Autolinking](https://docs.expo.dev/modules/mocking/</modules/autolinking>)[expo-module.config.json](https://docs.expo.dev/modules/mocking/</modules/module-config>)[Mocking native calls](https://docs.expo.dev/modules/mocking/</modules/mocking>)[Design considerations](https://docs.expo.dev/modules/mocking/</modules/design>)
Push notifications
[Overview](https://docs.expo.dev/modules/mocking/</push-notifications/overview>)[About notification types](https://docs.expo.dev/modules/mocking/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/modules/mocking/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/modules/mocking/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/modules/mocking/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/modules/mocking/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/modules/mocking/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/modules/mocking/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/modules/mocking/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/modules/mocking/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/modules/mocking/</archive>)[Expo Snack](https://docs.expo.dev/modules/mocking/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/modules/mocking/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/modules/mocking/<https:/expo.dev/mailing-list/signup>)
# Mocking native calls in Expo modules
[Edit this page](https://docs.expo.dev/modules/mocking/<https:/github.com/expo/expo/edit/main/docs/pages/modules/mocking.mdx> "Edit content of this page on GitHub")
Learn about mocking native calls in Expo modules.
[Edit this page](https://docs.expo.dev/modules/mocking/<https:/github.com/expo/expo/edit/main/docs/pages/modules/mocking.mdx> "Edit content of this page on GitHub")
The recommended way to write unit tests for an Expo project is to use [Jest](https://docs.expo.dev/modules/mocking/<https:/jestjs.io/>) and the `jest-expo` preset.
To write a unit test for an app that uses native code, you need to mock native calls. The term Mocking means to replace the actual implementation of a function with a fake version that does not perform any actions. This approach is useful for running unit tests on a local computer as it involves bypassing the need for native code which is only available on a device, and any code that calls native functions on a local machine will not work.
Expo SDK includes a set of default mocks for each of our community packages. You can also mock any JS code yourself using built-in Jest APIs such as [mock functions](https://docs.expo.dev/modules/mocking/<https:/jestjs.io/docs/mock-functions>).
However, to provide default mocks in your Expo Module, we offer a method to bundle them. This ensures that when your module user runs unit tests, they will automatically use a mocked implementation.
## Providing mocks for a module[](https://docs.expo.dev/modules/mocking/<#providing-mocks-for-a-module>)
Create a file with the same name as the native module you want to mock and place it in your module's mocks directory. Make sure to export the mock implementation from this file. The `jest-expo` preset will automatically return the exported functions because of a `requireNativeModule` call when running during a unit test.
For example, the `expo-clipboard` library has a native module called `ExpoClipboard`. You will create a ExpoClipboard.ts in the mocks directory to mock it.
ExpoClipboard.ts
Copy
```
export async function hasStringAsync(): Promise<boolean> {
 return false;
}

```

Now, in a unit test, calling `ExpoClipboard.hasStringAsync()` returns `false`.
## Automatic generation of mocks[](https://docs.expo.dev/modules/mocking/<#automatic-generation-of-mocks>)
Maintaining mocks for native modules can be a lot of work if the native module has multiple methods. To make this easier, we provide a script that automatically generates mocks for all native functions in a module. It works for generating mocks in TypeScript and JavaScript based on the Swift implementation in your module.
To use this script, you have to install [SourceKitten](https://docs.expo.dev/modules/mocking/<https:/github.com/jpsim/SourceKitten>) framework. Then, navigate to the module directory (where your module's expo-module.config.json is located) and run the `generate-ts-mocks` command.
Terminal
Copy
`- ``brew install sourcekitten`
`- ``npx expo-modules-test-core generate-ts-mocks`
The command above generates ExpoModuleName.ts in the mocks directory of your module. It contains a mock implementation for each native method and view in your module.
> Tip: You can also run `generate-js-mocks` to generate mocks in JavaScript.
## More[](https://docs.expo.dev/modules/mocking/<#more>)
[Unit testing with JestLearn how to set up and configure the jest-expo package to write unit and snapshot tests for a project.](https://docs.expo.dev/modules/mocking/</develop/unit-testing>)
[Previous (Expo Modules API - Reference)expo-module.config.json](https://docs.expo.dev/modules/mocking/</modules/module-config>)[Next (Expo Modules API - Reference)Design considerations](https://docs.expo.dev/modules/mocking/</modules/design>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/modules/mocking/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/modules/mocking/<https:/github.com/expo/expo/edit/main/docs/pages/modules/mocking.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/modules/mocking/<https:/expo.dev/privacy>).
On this page
[Providing mocks for a module](https://docs.expo.dev/modules/mocking/</modules/mocking/#providing-mocks-for-a-module>)[Automatic generation of mocks](https://docs.expo.dev/modules/mocking/</modules/mocking/#automatic-generation-of-mocks>)[More](https://docs.expo.dev/modules/mocking/</modules/mocking/#more>)
