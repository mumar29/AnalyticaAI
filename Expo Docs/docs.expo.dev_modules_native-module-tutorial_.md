[](https://docs.expo.dev/modules/native-module-tutorial/<https:/expo.dev>)[Docs](https://docs.expo.dev/modules/native-module-tutorial/</>)
[Blog](https://docs.expo.dev/modules/native-module-tutorial/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/modules/native-module-tutorial/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/modules/native-module-tutorial/<https:/github.com/expo/expo>)[](https://docs.expo.dev/modules/native-module-tutorial/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/modules/native-module-tutorial/</>)[Guides](https://docs.expo.dev/modules/native-module-tutorial/</guides/overview>)[EAS](https://docs.expo.dev/modules/native-module-tutorial/</eas>)[Reference](https://docs.expo.dev/modules/native-module-tutorial/</versions/latest>)[Learn](https://docs.expo.dev/modules/native-module-tutorial/</tutorial/overview>)
[Overview](https://docs.expo.dev/modules/native-module-tutorial/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/modules/native-module-tutorial/</workflow/overview>)[Configure with app config](https://docs.expo.dev/modules/native-module-tutorial/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/modules/native-module-tutorial/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/modules/native-module-tutorial/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/modules/native-module-tutorial/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/modules/native-module-tutorial/</guides/permissions>)[Environment variables](https://docs.expo.dev/modules/native-module-tutorial/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/modules/native-module-tutorial/</router/introduction>)[Installation](https://docs.expo.dev/modules/native-module-tutorial/</router/installation>)[Create pages](https://docs.expo.dev/modules/native-module-tutorial/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/modules/native-module-tutorial/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/modules/native-module-tutorial/</router/layouts>)[Error handling](https://docs.expo.dev/modules/native-module-tutorial/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/modules/native-module-tutorial/</modules/overview>)[Get started](https://docs.expo.dev/modules/native-module-tutorial/</modules/get-started>)
Tutorials
[Create a native module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial>)[Create a native view](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-view-tutorial>)[Create a module with a config plugin](https://docs.expo.dev/modules/native-module-tutorial/</modules/config-plugin-and-native-module-tutorial>)[How to use a standalone Expo module](https://docs.expo.dev/modules/native-module-tutorial/</modules/use-standalone-expo-module-in-your-project>)[Wrap third-party native libraries](https://docs.expo.dev/modules/native-module-tutorial/</modules/third-party-library>)[Integrate in an existing library](https://docs.expo.dev/modules/native-module-tutorial/</modules/existing-library>)[Additional platform support](https://docs.expo.dev/modules/native-module-tutorial/</modules/additional-platform-support>)
Reference
Push notifications
[Overview](https://docs.expo.dev/modules/native-module-tutorial/</push-notifications/overview>)[About notification types](https://docs.expo.dev/modules/native-module-tutorial/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/modules/native-module-tutorial/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/modules/native-module-tutorial/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/modules/native-module-tutorial/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/modules/native-module-tutorial/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/modules/native-module-tutorial/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/modules/native-module-tutorial/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/modules/native-module-tutorial/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/modules/native-module-tutorial/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/modules/native-module-tutorial/</archive>)[Expo Snack](https://docs.expo.dev/modules/native-module-tutorial/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/modules/native-module-tutorial/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/modules/native-module-tutorial/<https:/expo.dev/mailing-list/signup>)
# Tutorial: Creating a native module
[Edit this page](https://docs.expo.dev/modules/native-module-tutorial/<https:/github.com/expo/expo/edit/main/docs/pages/modules/native-module-tutorial.mdx> "Edit content of this page on GitHub")
A tutorial on creating a native module that persists settings with Expo Modules API.
[Edit this page](https://docs.expo.dev/modules/native-module-tutorial/<https:/github.com/expo/expo/edit/main/docs/pages/modules/native-module-tutorial.mdx> "Edit content of this page on GitHub")
In this tutorial, you build a module that stores the user's preferred app theme: dark, light, or system. On Android, use `SharedPreferences`[](https://docs.expo.dev/modules/native-module-tutorial/<https:/developer.android.com/reference/android/content/SharedPreferences>), and on iOS, use `UserDefaults`[](https://docs.expo.dev/modules/native-module-tutorial/<https:/developer.apple.com/documentation/foundation/userdefaults>). You can implement web support with `localStorage`[](https://docs.expo.dev/modules/native-module-tutorial/<https:/developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>), but this tutorial does not cover that.
[![Watch: How to create a native module with the Expo Modules API](https://i3.ytimg.com/vi/CdaQSlyGik8/maxresdefault.jpg)Watch: How to create a native module with the Expo Modules API](https://docs.expo.dev/modules/native-module-tutorial/<https:/www.youtube.com/watch?v=CdaQSlyGik8>)
1
## Initialize a new module[](https://docs.expo.dev/modules/native-module-tutorial/<#initialize-a-new-module>)
First, create a new module. For this tutorial, the module is named `expo-settings` or `ExpoSettings`. You can choose a different name, but adjust the instructions to match your choice.
Terminal
Copy
`- ``npx create-expo-module expo-settings`
> Since you aren't going to actually ship this library, you can hit `return` for all the prompts to accept the default values.
2
## Set up workspace[](https://docs.expo.dev/modules/native-module-tutorial/<#set-up-workspace>)
Clean up the default module to start with a clean slate. Delete the view module since this guide does not use it.
Terminal
Copy
`- ``cd expo-settings`
`- ``rm ios/ExpoSettingsView.swift`
`- ``rm android/src/main/java/expo/modules/settings/ExpoSettingsView.kt`
`- ``rm src/ExpoSettingsView.tsx src/ExpoSettings.types.ts`
`- ``rm src/ExpoSettingsView.web.tsx src/ExpoSettingsModule.web.ts`
Locate the following files and replace their contents with the provided minimal boilerplate:
ios/ExpoSettingsModule.swift
Copy
```
import ExpoModulesCore
public class ExpoSettingsModule: Module {
 public func definition() -> ModuleDefinition {
  Name("ExpoSettings")
  Function("getTheme") { () -> String in
   "system"
  }
 }
}

```

android/src/main/java/expo/modules/settings/ExpoSettingsModule.kt
Copy
```
package expo.modules.settings
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
class ExpoSettingsModule : Module() {
 override fun definition() = ModuleDefinition {
  Name("ExpoSettings")
  Function("getTheme") {
   return@Function "system"
  }
 }
}

```

src/index.ts
Copy
```
import ExpoSettingsModule from './ExpoSettingsModule';
export function getTheme(): string {
 return ExpoSettingsModule.getTheme();
}

```

example/App.tsx
Copy
```
import * as Settings from 'expo-settings';
import { Text, View } from 'react-native';
export default function App() {
 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Theme: {Settings.getTheme()}</Text></View>
 );
}

```

3
## Run the example project[](https://docs.expo.dev/modules/native-module-tutorial/<#run-the-example-project>)
Start the TypeScript compiler to watch for changes.
Terminal
Copy
`# Run this in the root of the project to start the TypeScript compiler`
`- ``npm run build`
In a separate terminal window, run the example app.
Terminal
Copy
`- ``cd example`
`# Run the example app on iOS`
`- ``npx expo run:ios`
`# Run the example app on Android`
`- ``npx expo run:android`
You should see the text "Theme: system" in the center of the screen when you launch the example app. The value `"system"` comes from synchronously calling the `getTheme()` function in the native module. You will change this value in the next step.
4
## Get, set, and persist the theme preference value[](https://docs.expo.dev/modules/native-module-tutorial/<#get-set-and-persist-the-theme-preference-value>)
### Android native module[](https://docs.expo.dev/modules/native-module-tutorial/<#android-native-module>)
To read the value, look for a `SharedPreferences` string under the key `"theme"`. If the key does not exist, default to `"system"`. Use the `reactContext` (a React Native [ContextWrapper](https://docs.expo.dev/modules/native-module-tutorial/<https:/developer.android.com/reference/android/content/ContextWrapper>)) to access the `SharedPreferences` instance with `getSharedPreferences()`.
To set the value, use the `edit()` method of `SharedPreferences` to get an `Editor` instance. Then, use `putString()` to set the value. Ensure the `setTheme` function accepts a value of type `String`.
android/src/main/java/expo/modules/settings/ExpoSettingsModule.kt
Copy
```
package expo.modules.settings
import android.content.Context
import android.content.SharedPreferences
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
class ExpoSettingsModule : Module() {
 override fun definition() = ModuleDefinition {
  Name("ExpoSettings")
  Function("setTheme") { theme: String ->
   getPreferences().edit().putString("theme", theme).commit()
  }
  Function("getTheme") {
   return@Function getPreferences().getString("theme", "system")
  }
 }
 private val context
 get() = requireNotNull(appContext.reactContext)
 private fun getPreferences(): SharedPreferences {
  return context.getSharedPreferences(context.packageName + ".settings", Context.MODE_PRIVATE)
 }
}

Show More

```

### iOS native module[](https://docs.expo.dev/modules/native-module-tutorial/<#ios-native-module>)
To read the value on iOS, look for a `UserDefaults` string under the key `"theme"`. If the key does not exist, default to `"system"`.
To set the value, use the `set(_:forKey:)` method of `UserDefaults`. Ensure the `setTheme` function accepts a value of type `String`.
ios/ExpoSettingsModule.swift
Copy
```
import ExpoModulesCore
public class ExpoSettingsModule: Module {
 public func definition() -> ModuleDefinition {
  Name("ExpoSettings")
  Function("setTheme") { (theme: String) -> Void in
   UserDefaults.standard.set(theme, forKey:"theme")
  }
  Function("getTheme") { () -> String in
   UserDefaults.standard.string(forKey: "theme") ?? "system"
  }
 }
}

```

### TypeScript module[](https://docs.expo.dev/modules/native-module-tutorial/<#typescript-module>)
Now, call your native modules from TypeScript.
src/index.ts
Copy
```
import ExpoSettingsModule from './ExpoSettingsModule';
export function getTheme(): string {
 return ExpoSettingsModule.getTheme();
}
export function setTheme(theme: string): void {
 return ExpoSettingsModule.setTheme(theme);
}

```

### Example app[](https://docs.expo.dev/modules/native-module-tutorial/<#example-app>)
You can now use the Settings API in your example app.
example/App.tsx
Copy
```
import * as Settings from 'expo-settings';
import { Button, Text, View } from 'react-native';
export default function App() {
 const theme = Settings.getTheme();
 // Toggle between dark and light theme
 const nextTheme = theme === 'dark' ? 'light' : 'dark';
 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Theme: {Settings.getTheme()}</Text><Button title={`Set theme to ${nextTheme}`} onPress={() => Settings.setTheme(nextTheme)} /></View>
 );
}

```

When you rebuild and run the app, the "system" theme is still set. Pressing the button does nothing, but when you reload the app, the theme changes. This happens because the app does not fetch the new theme value or re-render. You will fix this in the next step.
5
## Emit change events for the theme value[](https://docs.expo.dev/modules/native-module-tutorial/<#emit-change-events-for-the-theme-value>)
Ensure developers using your API can react to theme value changes by emitting a change event whenever the value updates. Use the [Events](https://docs.expo.dev/modules/native-module-tutorial/</modules/module-api#events>) definition component to describe the events your module emits, `sendEvent` to emit the event from native code, and the [EventEmitter](https://docs.expo.dev/modules/native-module-tutorial/</modules/module-api#sending-events>) API to subscribe to events in JavaScript. The event payload is `{ theme: string }`.
### Android native module[](https://docs.expo.dev/modules/native-module-tutorial/<#android-native-module-1>)
Events payloads are represented as `Bundle`[](https://docs.expo.dev/modules/native-module-tutorial/<https:/developer.android.com/reference/android/os/Bundle.html>) instances on Android, which you can create using the `bundleOf`[](https://docs.expo.dev/modules/native-module-tutorial/<https:/developer.android.com/reference/kotlin/androidx/core/os/package-summary#bundleOf\(kotlin.Array\)>) function.
android/src/main/java/expo/modules/settings/ExpoSettingsModule.kt
Copy
```
package expo.modules.settings
import android.content.Context
import android.content.SharedPreferences
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
class ExpoSettingsModule : Module() {
 override fun definition() = ModuleDefinition {
  Name("ExpoSettings")
  Events("onChangeTheme")
  Function("setTheme") { theme: String ->
   getPreferences().edit().putString("theme", theme).commit()
   this@ExpoSettingsModule.sendEvent("onChangeTheme", bundleOf("theme" to theme))
  }
  Function("getTheme") {
   return@Function getPreferences().getString("theme", "system")
  }
 }
 private val context
 get() = requireNotNull(appContext.reactContext)
 private fun getPreferences(): SharedPreferences {
  return context.getSharedPreferences(context.packageName + ".settings", Context.MODE_PRIVATE)
 }
}

Show More

```

### iOS native module[](https://docs.expo.dev/modules/native-module-tutorial/<#ios-native-module-1>)
ios/ExpoSettingsModule.swift
Copy
```
import ExpoModulesCore
public class ExpoSettingsModule: Module {
 public func definition() -> ModuleDefinition {
  Name("ExpoSettings")
  Events("onChangeTheme")
  Function("setTheme") { (theme: String) -> Void in
   UserDefaults.standard.set(theme, forKey:"theme")
   sendEvent("onChangeTheme", [
    "theme": theme
   ])
  }
  Function("getTheme") { () -> String in
   UserDefaults.standard.string(forKey: "theme") ?? "system"
  }
 }
}

Show More

```

### TypeScript module[](https://docs.expo.dev/modules/native-module-tutorial/<#typescript-module-1>)
src/index.ts
Copy
```
import { EventSubscription } from 'expo-modules-core';
import ExpoSettingsModule from './ExpoSettingsModule';
export type ThemeChangeEvent = {
 theme: string;
};
export function addThemeListener(listener: (event: ThemeChangeEvent) => void): EventSubscription {
 return ExpoSettingsModule.addListener('onChangeTheme', listener);
}
export function getTheme(): string {
 return ExpoSettingsModule.getTheme();
}
export function setTheme(theme: string): void {
 return ExpoSettingsModule.setTheme(theme);
}

Show More

```

### Example app[](https://docs.expo.dev/modules/native-module-tutorial/<#example-app-1>)
example/App.tsx
Copy
```
import * as Settings from 'expo-settings';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
export default function App() {
 const [theme, setTheme] = useState<string>(Settings.getTheme());
 useEffect(() => {
  const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
   setTheme(newTheme);
  });
  return () => subscription.remove();
 }, [setTheme]);
 // Toggle between dark and light theme
 const nextTheme = theme === 'dark' ? 'light' : 'dark';
 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Theme: {Settings.getTheme()}</Text><Button title={`Set theme to ${nextTheme}`} onPress={() => Settings.setTheme(nextTheme)} /></View>
 );
}

Show More

```

6
## Improve type safety with Enums[](https://docs.expo.dev/modules/native-module-tutorial/<#improve-type-safety-with-enums>)
It's easy to make mistakes when using the `Settings.setTheme()` API in its current form, as it allows any string value. Improve the type safety of this API by using an enum to restrict the possible values to `system`, `light`, and `dark`.
### Android native module[](https://docs.expo.dev/modules/native-module-tutorial/<#android-native-module-2>)
android/src/main/java/expo/modules/settings/ExpoSettingsModule.kt
Copy
```
package expo.modules.settings
import android.content.Context
import android.content.SharedPreferences
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.types.Enumerable
class ExpoSettingsModule : Module() {
 override fun definition() = ModuleDefinition {
  Name("ExpoSettings")
  Events("onChangeTheme")
  Function("setTheme") { theme: Theme ->
   getPreferences().edit().putString("theme", theme.value).commit()
   this@ExpoSettingsModule.sendEvent("onChangeTheme", bundleOf("theme" to theme.value))
  }
  Function("getTheme") {
   return@Function getPreferences().getString("theme", Theme.SYSTEM.value)
  }
 }
 private val context
 get() = requireNotNull(appContext.reactContext)
 private fun getPreferences(): SharedPreferences {
  return context.getSharedPreferences(context.packageName + ".settings", Context.MODE_PRIVATE)
 }
}
enum class Theme(val value: String) : Enumerable {
 LIGHT("light"),
 DARK("dark"),
 SYSTEM("system")
}

Show More

```

### iOS native module[](https://docs.expo.dev/modules/native-module-tutorial/<#ios-native-module-2>)
ios/ExpoSettingsModule.swift
Copy
```
import ExpoModulesCore
public class ExpoSettingsModule: Module {
 public func definition() -> ModuleDefinition {
  Name("ExpoSettings")
  Events("onChangeTheme")
  Function("setTheme") { (theme: Theme) -> Void in
   UserDefaults.standard.set(theme.rawValue, forKey:"theme")
   sendEvent("onChangeTheme", [
    "theme": theme.rawValue
   ])
  }
  Function("getTheme") { () -> String in
   UserDefaults.standard.string(forKey: "theme") ?? Theme.system.rawValue
  }
 }
 enum Theme: String, Enumerable {
  case light
  case dark
  case system
 }
}

Show More

```

### TypeScript module[](https://docs.expo.dev/modules/native-module-tutorial/<#typescript-module-2>)
src/index.ts
Copy
```
import { EventSubscription } from 'expo-modules-core';
import ExpoSettingsModule from './ExpoSettingsModule';
export type Theme = 'light' | 'dark' | 'system';
export type ThemeChangeEvent = {
 theme: Theme;
};
export function addThemeListener(listener: (event: ThemeChangeEvent) => void): EventSubscription {
 return ExpoSettingsModule.addListener('onChangeTheme', listener);
}
export function getTheme(): Theme {
 return ExpoSettingsModule.getTheme();
}
export function setTheme(theme: Theme): void {
 return ExpoSettingsModule.setTheme(theme);
}

Show More

```

### Example app[](https://docs.expo.dev/modules/native-module-tutorial/<#example-app-2>)
If you change `Settings.setTheme(nextTheme)` to `Settings.setTheme("not-a-real-theme")`, TypeScript will raise an error. If you ignore the error and press the button, you will see the following runtime error:
```
 ERROR Error: FunctionCallException: Calling the 'setTheme' function has failed (at ExpoModulesCore/SyncFunctionComponent.swift:76)
→ Caused by: ArgumentCastException: Argument at index '0' couldn't be cast to type Enum<Theme> (at ExpoModulesCore/JavaScriptUtils.swift:41)
→ Caused by: EnumNoSuchValueException: 'not-a-real-theme' is not present in Theme enum, it must be one of: 'light', 'dark', 'system' (at ExpoModulesCore/Enumerable.swift:37)

```

The last line of the error message shows that `not-a-real-theme` is not a valid value for the `Theme` enum. The only valid values are `light`, `dark`, and `system`.
Congratulations! You have created your first Expo Module for Android and iOS.
## Next steps[](https://docs.expo.dev/modules/native-module-tutorial/<#next-steps>)
[Expo Modules API ReferenceCreate native modules using Kotlin and Swift.](https://docs.expo.dev/modules/native-module-tutorial/</modules/module-api>) [Tutorial: Creating a native viewA tutorial on creating a native view with Expo Modules API.](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-view-tutorial>)
[Previous (Expo Modules API)Get started](https://docs.expo.dev/modules/native-module-tutorial/</modules/get-started>)[Next (Expo Modules API - Tutorials)Create a native view](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-view-tutorial>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/modules/native-module-tutorial/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/modules/native-module-tutorial/<https:/github.com/expo/expo/edit/main/docs/pages/modules/native-module-tutorial.mdx>)
  * Last updated on November 21, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/modules/native-module-tutorial/<https:/expo.dev/privacy>).
On this page
[Initialize a new module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#initialize-a-new-module>)[Set up workspace](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#set-up-workspace>)[Run the example project](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#run-the-example-project>)[Get, set, and persist the theme preference value](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#get-set-and-persist-the-theme-preference-value>)[Android native module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#android-native-module>)[iOS native module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#ios-native-module>)[TypeScript module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#typescript-module>)[Example app](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#example-app>)[Emit change events for the theme value](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#emit-change-events-for-the-theme-value>)[Android native module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#android-native-module-1>)[iOS native module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#ios-native-module-1>)[TypeScript module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#typescript-module-1>)[Example app](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#example-app-1>)[Improve type safety with Enums](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#improve-type-safety-with-enums>)[Android native module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#android-native-module-2>)[iOS native module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#ios-native-module-2>)[TypeScript module](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#typescript-module-2>)[Example app](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#example-app-2>)[Next steps](https://docs.expo.dev/modules/native-module-tutorial/</modules/native-module-tutorial/#next-steps>)
