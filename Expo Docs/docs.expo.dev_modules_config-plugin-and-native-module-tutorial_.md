[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/expo.dev>)[Docs](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</>)
[Blog](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/github.com/expo/expo>)[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</>)[Guides](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</guides/overview>)[EAS](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</eas>)[Reference](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</versions/latest>)[Learn](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</tutorial/overview>)
[Overview](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</workflow/overview>)[Configure with app config](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</guides/permissions>)[Environment variables](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</router/introduction>)[Installation](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</router/installation>)[Create pages](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</router/layouts>)[Error handling](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/overview>)[Get started](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/get-started>)
Tutorials
[Create a native module](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/native-module-tutorial>)[Create a native view](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/native-view-tutorial>)[Create a module with a config plugin](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial>)[How to use a standalone Expo module](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/use-standalone-expo-module-in-your-project>)[Wrap third-party native libraries](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/third-party-library>)[Integrate in an existing library](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/existing-library>)[Additional platform support](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/additional-platform-support>)
Reference
Push notifications
[Overview](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</push-notifications/overview>)[About notification types](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</archive>)[Expo Snack](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/expo.dev/mailing-list/signup>)
# Tutorial: Create a module with a config plugin
[Edit this page](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/github.com/expo/expo/edit/main/docs/pages/modules/config-plugin-and-native-module-tutorial.mdx> "Edit content of this page on GitHub")
A tutorial on creating a native module with a config plugin using Expo modules API.
[Edit this page](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/github.com/expo/expo/edit/main/docs/pages/modules/config-plugin-and-native-module-tutorial.mdx> "Edit content of this page on GitHub")
Config plugins let you customize native Android and iOS projects generated with `npx expo prebuild`. You can use them to add properties to native config files, copy assets to native projects, or apply advanced configurations, such as adding an [app extension target](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</build-reference/app-extensions>).
As an app developer, config plugins help you apply customizations not exposed in the default [app config](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</workflow/configuration>). As a library author, they enable you to configure native projects automatically for developers using your library.
This tutorial explains how to create a new config plugin from scratch and read custom values that your plugin injects into AndroidManifest.xml and Info.plist from an Expo module.
1
## Initialize a module[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#initialize-a-module>)
Start by initializing a new Expo module project with `create-expo-module`. This sets up scaffolding for Android, iOS, and TypeScript and includes an example project to test the module within an app. Run the following command to get started:
Terminal
Copy
`- ``npx create-expo-module expo-native-configuration`
This guide uses the name `expo-native-configuration`/`ExpoNativeConfiguration` for the project. However, you can choose any name you prefer.
2
## Set up workspace[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#set-up-workspace>)
In this example, you don't need the view module included by `create-expo-module`. Clean up the default module with the following command:
Terminal
Copy
`- ``cd expo-native-configuration`
`- ``rm android/src/main/java/expo/modules/nativeconfiguration/ExpoNativeConfigurationView.kt`
`- ``rm ios/ExpoNativeConfigurationView.swift`
`- ``rm src/ExpoNativeConfigurationView.tsx src/ExpoNativeConfiguration.types.ts`
`- ``rm src/ExpoNativeConfigurationView.web.tsx src/ExpoNativeConfigurationModule.web.ts`
Locate the following files and replace them with the provided minimal boilerplate:
  * android/src/main/java/expo/modules/nativeconfiguration/ExpoNativeConfigurationModule.kt
  * ios/ExpoNativeConfigurationModule.swift
  * src/ExpoNativeConfigurationModule.ts
  * src/index.ts
  * example/App.tsx


android/src/main/java/expo/modules/nativeconfiguration/ExpoNativeConfigurationModule.kt
Copy
```
package expo.modules.nativeconfiguration
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
class ExpoNativeConfigurationModule : Module() {
 override fun definition() = ModuleDefinition {
  Name("ExpoNativeConfiguration")
  Function("getApiKey") {
   return@Function "api-key"
  }
 }
}

```

ios/ExpoNativeConfigurationModule.swift
Copy
```
import ExpoModulesCore
public class ExpoNativeConfigurationModule: Module {
 public func definition() -> ModuleDefinition {
  Name("ExpoNativeConfiguration")
  Function("getApiKey") { () -> String in
   "api-key"
  }
 }
}

```

src/ExpoNativeConfigurationModule.ts
Copy
```
import { NativeModule, requireNativeModule } from 'expo';
declare class ExpoNativeConfigurationModule extends NativeModule {
 getApiKey(): string;
}
// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoNativeConfigurationModule>('ExpoNativeConfiguration');

```

src/index.ts
Copy
```
import ExpoNativeConfigurationModule from './ExpoNativeConfigurationModule';
export function getApiKey(): string {
 return ExpoNativeConfigurationModule.getApiKey();
}

```

example/App.tsx
Copy
```
import * as ExpoNativeConfiguration from 'expo-native-configuration';
import { Text, View } from 'react-native';
export default function App() {
 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>API key: {ExpoNativeConfiguration.getApiKey()}</Text></View>
 );
}

```

3
## Run the example project[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#run-the-example-project>)
In the root of your project, run the TypeScript compiler to watch for changes and rebuild the module's JavaScript:
Terminal
Copy
`# Run this in the root of the project to start the TypeScript compiler`
`- ``npm run build`
In another terminal window, compile and run the example app:
Terminal
Copy
`# Navigate to the example project`
`- ``cd example`
`# Run the example app on iOS`
`- ``npx expo run:ios`
`# Run the example app on Android`
`- ``npx expo run:android`
You should see a screen with the text "API key: api-key".
4
## Create a new config plugin[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#create-a-new-config-plugin>)
Plugins are synchronous functions that accept an `ExpoConfig` and return a modified `ExpoConfig`. By convention, these functions are prefixed with the word `with`. Name your plugin `withMyApiKey` or use a different name, as long as it follows this convention.
Here is an example of a basic config plugin function:
```
const withMyApiKey = config => {
 return config;
};

```

You can also use `mods`, which are async functions that modify files in native projects, such as source code or configuration files (plist, xml). The `mods` object is different from the rest of the app config because it doesn't serialize after the initial reading. This allows you to perform actions _during_ code generation.
When writing config plugins, follow these considerations:
  * Plugins must be synchronous, and their return value must be serializable, except for any `mods` that are added.
  * `plugins` are invoked whenever the `getConfig` method from `expo/config` reads the configuration. In contrast, `mods` are invoked only during the "syncing" phase of `npx expo prebuild`.


> Although optional, use `expo-module-scripts`[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/www.npmjs.com/package/expo-module-scripts>) to simplify plugin development. It provides a recommended default configuration for TypeScript and Jest. For more information, see the [config plugins guide](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/github.com/expo/expo/tree/main/packages/expo-module-scripts#-config-plugin>).
Start creating your plugin with this minimal boilerplate. Create a plugin directory for writing the plugin in TypeScript and add an app.plugin.js file in the project root, which will be the plugin's entry point.
### Create a plugin/tsconfig.json file[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#create-a-plugintsconfigjson-file>)
plugin/tsconfig.json
Copy
```
{
 "extends": "expo-module-scripts/tsconfig.plugin",
 "compilerOptions": {
  "outDir": "build",
  "rootDir": "src"
 },
 "include": ["./src"],
 "exclude": ["**/__mocks__/*", "**/__tests__/*"]
}

```

### Create a plugin/src/index.ts file for your plugin[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#create-a-pluginsrcindexts-file-for-your-plugin>)
plugin/src/index.ts
Copy
```
import { ConfigPlugin } from 'expo/config-plugins';
const withMyApiKey: ConfigPlugin = config => {
 console.log('my custom plugin');
 return config;
};
export default withMyApiKey;

```

### Create an app.plugin.js file in the root directory[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#create-an-apppluginjs-file-in-the-root-directory>)
app.plugin.js
Copy
```
// This file configures the entry file for your plugin.
module.exports = require('./plugin/build');

```

At the root of your project, run `npm run build plugin` to start the TypeScript compiler in watch mode. Next, configure your example project to use your plugin by adding the following line to the example/app.json file:
example/app.json
Copy
```
{
 "expo": {
  ...
  "plugins": ["../app.plugin.js"]
 }
}

```

When you run the `npx expo prebuild` command inside your example directory, the terminal logs "my custom plugin" through a console statement.
Terminal
`- ``cd example`
`- ``npx expo prebuild --clean`
To inject your custom API keys into AndroidManifest.xml and Info.plist, use helper `mods`[ provided by `expo/config-plugins`](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</config-plugins/plugins-and-mods#what-are-mods>). These make it easy to modify native files. For this example, use `withAndroidManifest` and `withInfoPlist`.
As the name suggests, `withAndroidManifest` allows you to read and modify the AndroidManifest.xml file. Use `AndroidConfig` helpers to add a metadata item to the main application, as shown below:
```
const withMyApiKey: ConfigPlugin<{ apiKey: string }> = (config, { apiKey }) => {
 config = withAndroidManifest(config, config => {
  const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(config.modResults);
  AndroidConfig.Manifest.addMetaDataItemToMainApplication(
   mainApplication,
   'MY_CUSTOM_API_KEY',
   apiKey
  );
  return config;
 });
 return config;
};

```

Similarly, you can use `withInfoPlist` to modify the Info.plist values. Using the `modResults` property, you can add custom values as shown in the code snippet below:
```
const withMyApiKey: ConfigPlugin<{ apiKey: string }> = (config, { apiKey }) => {
 config = withInfoPlist(config, config => {
  config.modResults['MY_CUSTOM_API_KEY'] = apiKey;
  return config;
 });
 return config;
};

```

You can create a custom plugin by merging everything into a single function:
plugin/src/index.ts
Copy
```
import {
 withInfoPlist,
 withAndroidManifest,
 AndroidConfig,
 ConfigPlugin,
} from 'expo/config-plugins';
const withMyApiKey: ConfigPlugin<{ apiKey: string }> = (config, { apiKey }) => {
 config = withInfoPlist(config, config => {
  config.modResults['MY_CUSTOM_API_KEY'] = apiKey;
  return config;
 });
 config = withAndroidManifest(config, config => {
  const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(config.modResults);
  AndroidConfig.Manifest.addMetaDataItemToMainApplication(
   mainApplication,
   'MY_CUSTOM_API_KEY',
   apiKey
  );
  return config;
 });
 return config;
};
export default withMyApiKey;

Show More

```

With the plugin ready to use, update the example app to pass your API key to the plugin as a configuration option. Modify the `plugins` field in example/app.json as shown below:
example/app.json
Copy
```
{
 "expo": {
  ...
  "plugins": [["../app.plugin.js", { "apiKey": "custom_secret_api" }]]
 }
}

```

After making this change, test that the plugin works correctly by running `npx expo prebuild --clean` inside the example directory. This command executes your plugin and updates native files, injecting `"MY_CUSTOM_API_KEY"` into AndroidManifest.xml and Info.plist. You can verify this by checking the contents of example/android/app/src/main/AndroidManifest.xml.
5
## Read native values from the module[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#read-native-values-from-the-module>)
Now, make your native module read the fields added to AndroidManifest.xml and Info.plist by using platform-specific methods to access their contents.
On Android, access metadata information from the AndroidManifest.xml file using the `packageManager` class. To read the `"MY_CUSTOM_API_KEY"` value, update the android/src/main/java/expo/modules/nativeconfiguration/ExpoNativeConfigurationModule.kt file:
android/src/main/java/expo/modules/nativeconfiguration/ExpoNativeConfigurationModule.kt
Copy
```
package expo.modules.nativeconfiguration
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.content.pm.PackageManager
class ExpoNativeConfigurationModule() : Module() {
 override fun definition() = ModuleDefinition {
  Name("ExpoNativeConfiguration")
  Function("getApiKey") {
   val applicationInfo = appContext?.reactContext?.packageManager?.getApplicationInfo(appContext?.reactContext?.packageName.toString(), PackageManager.GET_META_DATA)
   return@Function applicationInfo?.metaData?.getString("MY_CUSTOM_API_KEY")
  }
 }
}

```

On iOS, you can read the content of an Info.plist property using the `Bundle.main.object(forInfoDictionaryKey: "")` method. To access the `"MY_CUSTOM_API_KEY"` value added earlier, update the ios/ExpoNativeConfigurationModule.swift file as shown:
ios/ExpoNativeConfigurationModule.swift
Copy
```
import ExpoModulesCore
public class ExpoNativeConfigurationModule: Module {
 public func definition() -> ModuleDefinition {
  Name("ExpoNativeConfiguration")
  Function("getApiKey") {
   return Bundle.main.object(forInfoDictionaryKey: "MY_CUSTOM_API_KEY") as? String
  }
 }
}

```

6
## Run your module[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#run-your-module>)
With your native modules reading the fields added to the native files, you can now run the example app and access your custom API key using the `ExamplePlugin.getApiKey()` function.
Terminal
Copy
`- ``cd example`
`# execute our plugin and update native files`
`- ``npx expo prebuild`
`# Run the example app on Android`
`- ``npx expo run:android`
`# Run the example app on iOS`
`- ``npx expo run:ios`
## Next steps[](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<#next-steps>)
Congratulations, you have created a config plugin that interacts with an Expo module for Android and iOS!
If you want to challenge yourself and make the plugin more versatile, this exercise is open for you. Modify the plugin to allow any arbitrary set of config keys and values to be passed in, and add functionality to read arbitrary keys from the module.
[Expo Modules API ReferenceA reference to create native modules using Kotlin and Swift.](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/module-api>) [Additional platform supportLearn how to add support for macOS and tvOS platforms.](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/additional-platform-support>)
[Previous (Expo Modules API - Tutorials)Create a native view](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/native-view-tutorial>)[Next (Expo Modules API - Tutorials)How to use a standalone Expo module](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/use-standalone-expo-module-in-your-project>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/github.com/expo/expo/edit/main/docs/pages/modules/config-plugin-and-native-module-tutorial.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/<https:/expo.dev/privacy>).
On this page
[Initialize a module](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#initialize-a-module>)[Set up workspace](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#set-up-workspace>)[Run the example project](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#run-the-example-project>)[Create a new config plugin](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#create-a-new-config-plugin>)[Create a plugin/tsconfig.json file](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#create-a-plugintsconfigjson-file>)[Create a plugin/src/index.ts file for your plugin](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#create-a-pluginsrcindexts-file-for-your-plugin>)[Create an app.plugin.js file in the root directory](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#create-an-apppluginjs-file-in-the-root-directory>)[Read native values from the module](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#read-native-values-from-the-module>)[Run your module](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#run-your-module>)[Next steps](https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/</modules/config-plugin-and-native-module-tutorial/#next-steps>)
