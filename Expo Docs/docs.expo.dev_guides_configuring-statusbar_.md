[](https://docs.expo.dev/guides/configuring-statusbar/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/configuring-statusbar/</>)
[Blog](https://docs.expo.dev/guides/configuring-statusbar/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/configuring-statusbar/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/configuring-statusbar/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/configuring-statusbar/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/configuring-statusbar/</>)[Guides](https://docs.expo.dev/guides/configuring-statusbar/</guides/overview>)[EAS](https://docs.expo.dev/guides/configuring-statusbar/</eas>)[Reference](https://docs.expo.dev/guides/configuring-statusbar/</versions/latest>)[Learn](https://docs.expo.dev/guides/configuring-statusbar/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/configuring-statusbar/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/configuring-statusbar/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/configuring-statusbar/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/configuring-statusbar/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/configuring-statusbar/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/configuring-statusbar/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/configuring-statusbar/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/configuring-statusbar/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/configuring-statusbar/</router/introduction>)[Installation](https://docs.expo.dev/guides/configuring-statusbar/</router/installation>)[Create pages](https://docs.expo.dev/guides/configuring-statusbar/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/configuring-statusbar/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/configuring-statusbar/</router/layouts>)[Error handling](https://docs.expo.dev/guides/configuring-statusbar/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/configuring-statusbar/</modules/overview>)[Get started](https://docs.expo.dev/guides/configuring-statusbar/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/configuring-statusbar/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/configuring-statusbar/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/configuring-statusbar/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/configuring-statusbar/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/configuring-statusbar/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/configuring-statusbar/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/configuring-statusbar/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/configuring-statusbar/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/configuring-statusbar/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/configuring-statusbar/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/configuring-statusbar/</archive>)[Expo Snack](https://docs.expo.dev/guides/configuring-statusbar/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/configuring-statusbar/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/configuring-statusbar/<https:/expo.dev/mailing-list/signup>)
# Configuring the status bar
[Edit this page](https://docs.expo.dev/guides/configuring-statusbar/<https:/github.com/expo/expo/edit/main/docs/pages/guides/configuring-statusbar.mdx> "Edit content of this page on GitHub")
Learn how to configure the status bar using expo-status-bar library.
[Edit this page](https://docs.expo.dev/guides/configuring-statusbar/<https:/github.com/expo/expo/edit/main/docs/pages/guides/configuring-statusbar.mdx> "Edit content of this page on GitHub")
The status bar is a small detail that can make a big difference in the overall feel and perceived level of polish of your app by users. When you have a white status bar on the white background, you know something isn't going quite right.
This guide provides the tools to configure the status bar for your Android and iOS apps.
![A comparison of good and bad status bar styling](https://docs.expo.dev/static/images/status-bar-style-comparison.jpg)
> Notice how bad the contrast is between the status bar text and the background in the second image. This is what you want to try to avoid.
## Configure the status bar while app is loading (Android only)[](https://docs.expo.dev/guides/configuring-statusbar/<#configure-the-status-bar-while-app-is-loading-android-only>)
> This type of configuration is currently only available on Android. On iOS, it is impossible in the Expo Go app to customize the status bar before the app has loaded, while the splash screen is presented.
Configuring the status bar while the splash screen is visible on Android is available through the `androidStatusBar` object in the [app config](https://docs.expo.dev/guides/configuring-statusbar/</workflow/configuration>). The options available are similar to those provided by `expo-status-bar`[](https://docs.expo.dev/guides/configuring-statusbar/</versions/latest/sdk/status-bar>).
See the full list of options available to configure the status bar statically on Android[](https://docs.expo.dev/guides/configuring-statusbar/<#see-the-full-list-of-options-available>)
### `androidStatusBar.barStyle`[](https://docs.expo.dev/guides/configuring-statusbar/<#androidstatusbarbarstyle>)
Only for: 
Android
This option can be used to configure whether the status bar content (icons and text in the status bar) is light, or dark. Usually, a status bar with a light background has dark content, and a status bar with a dark background has light content.
The valid values are:
  * `light-content` - The status bar content is light colored (usually white). This is equivalent to `expo-status-bar` `style="light"`.
  * `dark-content` - The status bar content is dark colored (usually dark grey). This is equivalent to `expo-status-bar` `style="dark"`. This is only available on Android 6.0 onwards. It will fall back to `light-content` in older versions. This is the default value.


> If you choose `light-content` and have either a very light image set as the `SplashScreen` or `backgroundColor` set to a light color, the status bar icons may blend in and not be visible. Similarly, for the `dark content` when you have a very dark image set as the `SplashScreen` or `backgroundColor` set to a dark color.
### `androidStatusBar.backgroundColor`[](https://docs.expo.dev/guides/configuring-statusbar/<#androidstatusbarbackgroundcolor>)
Only for: 
Android
This option can be used to specify the background color of the status bar. Defaults to `#00000000` (transparent) for the `dark-content` bar style and `#00000088` (semi-transparent black) for the `light-content` bar style.
The valid value is a 6-character long hexadecimal solid color string with the format `#RRGGBB` (for example, `#C2185B`) or an 8-character long hexadecimal color string with transparency with the format `#RRGGBBAA` (for example, `#23C1B255`).
### `androidStatusBar.translucent`[](https://docs.expo.dev/guides/configuring-statusbar/<#androidstatusbartranslucent>)
Only for: 
Android
Value type - `boolean`.
This option can be used to specify whether the status bar should be translucent. When false, the system status bar pushes the content of your app down (similar to `position: relative`). When true, the status bar floats above the content in your app (similar to `position: absolute`).
Defaults to `true` to match the iOS status bar behavior (which can only float above content). Explicitly setting this property to `true` will add `android:windowTranslucentStatus` to `styles.xml` and may cause unexpected keyboard behavior on Android when using the `softwareKeyboardLayoutMode` set to `resize`. In this case, use `KeyboardAvoidingView`[](https://docs.expo.dev/guides/configuring-statusbar/<https:/reactnative.dev/docs/keyboardavoidingview>) to manage the keyboard layout.
> A translucent status bar makes sense when the `backgroundColor` is using a transparent color (`#RRGGBBAA`). When you use a translucent status bar and a solid `backgroundColor` (`#RRGGBB`) then the upper part of your app will be partially covered by the non-transparent status bar and thus some of your app's content might not be visible to the user.
### `androidStatusBar.hidden`[](https://docs.expo.dev/guides/configuring-statusbar/<#androidstatusbarhidden>)
Only for: 
Android
Value type - `boolean`.
This option instructs the system whether the status bar should be visible or not. Defaults to `false`
When the status bar is not visible it can be presented via the `swipe down` gesture. When set to `true`, the status bar will not respect the `backgroundColor` or `barStyle` settings.
## Update the status bar while app is running[](https://docs.expo.dev/guides/configuring-statusbar/<#update-the-status-bar-while-app-is-running>)
The `StatusBar` component provided by `expo-status-bar`[](https://docs.expo.dev/guides/configuring-statusbar/</versions/latest/sdk/status-bar>) allows you to control the appearance of the status bar while your app is running. `expo-status-bar` also provides imperative methods such as `setStatusBarStyle(style)` to control the style through function calls rather than the `StatusBar` component, if you find that to be helpful for your use case.
To fix the contrast issue from the screenshot at the top of this guide, we could use the following code:
```
import { StatusBar } from 'expo-status-bar';
export default function Playlists() {
 return (
  <>{%%placeholder-start%%...%%placeholder-end%%}{}{/* Use light text instead of dark text in the status bar to provide more contrast with a dark background. */}<StatusBar style="light" /></>
 );
}

```
How is `expo-status-bar` different from the StatusBar component included in React Native?[](https://docs.expo.dev/guides/configuring-statusbar/<#how-is-expo-status-bar-different-from-the-statusbar>)
`expo-status-bar` builds on top of the `StatusBar` component that React Native provides to give you better defaults when you're building an app with Expo tools. For example, the `translucent` property of `expo-status-bar` defaults to `true` or, if you have changed that property in `androidStatusBar`, it will use that value instead. The default in React Native for `translucent` is always `false`, which can be confusing because when a project is created using Expo tools, the default is `true` for consistency with iOS.
## Themes and status bar styles[](https://docs.expo.dev/guides/configuring-statusbar/<#themes-and-status-bar-styles>)
If you use `expo-status-bar` to control your status bar style, the `style="auto"` configuration will automatically pick the appropriate default style depending on the color scheme currently used by the app (this is the default behavior if you leave out the style prop entirely then `auto` will be used). Note that if you provide a way for users to toggle between color schemes rather than using the operating system theme, this will not have the intended behavior, and you should use `style="light"` and `style="dark"` as needed depending on the selected color scheme.
## Render the status bar in with your layout[](https://docs.expo.dev/guides/configuring-statusbar/<#render-the-status-bar-in-with-your-layout>)
When you have a translucent status bar, it's important to remember that content can be rendered underneath it.
Libraries like [React Navigation](https://docs.expo.dev/guides/configuring-statusbar/<https:/reactnavigation.org>) will handle this for you when the UI they provide overlaps with the status bar. You are likely to encounter cases where you will need to manually adjust your layout to prevent some content (such as text) from being rendered underneath it. To do this, it is recommended to use `react-native-safe-area-context`[](https://docs.expo.dev/guides/configuring-statusbar/</versions/latest/sdk/safe-area-context>) to find the safe area insets and add padding or margins to your layout accordingly.
## Work with misbehaving third-party Libraries[](https://docs.expo.dev/guides/configuring-statusbar/<#work-with-misbehaving-third-party-libraries>)
Projects initialized with Expo tools make the status bar `translucent` by default on Android. This is consistent with iOS and more in line with material design. Unfortunately, some libraries don't support `translucent` status bars. This is generally bad practice and those libraries should be fixed. However, if you must use one of them, there are some options available for you to accommodate their limitations:
### Opaque-colored background[](https://docs.expo.dev/guides/configuring-statusbar/<#opaque-colored-background>)
Setting solely `backgroundColor` to an opaque color will disable the `transparency` of the status bar, however, preserve `translucency`. You need to explicitly set `translucent` to `false` if you want your app's status bar to take up space on the device's screen. This is a good option if your status bar color never needs to change, for example:
app.json
Copy
```
{
 "expo": {
  "androidStatusBar": {
   "backgroundColor": "#C2185B",
   "translucent": false
  }
 }
}

```

### Empty `View`[](https://docs.expo.dev/guides/configuring-statusbar/<#empty-view>)
You can place an empty `View` on top of your screen with a background color to act as a status bar or set the top padding. You can get the height of the status bar (and notch, if there is one) by using the top inset value provided by `react-native-safe-area-context`[](https://docs.expo.dev/guides/configuring-statusbar/</versions/latest/sdk/safe-area-context>).
[NextOverview](https://docs.expo.dev/guides/configuring-statusbar/</guides/overview>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/configuring-statusbar/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/configuring-statusbar/<https:/github.com/expo/expo/edit/main/docs/pages/guides/configuring-statusbar.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/configuring-statusbar/<https:/expo.dev/privacy>).
On this page
[Configure the status bar while app is loading (Android only)](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#configure-the-status-bar-while-app-is-loading-android-only>)`barStyle`[](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#androidstatusbarbarstyle>)`backgroundColor`[](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#androidstatusbarbackgroundcolor>)`translucent`[](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#androidstatusbartranslucent>)`hidden`[](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#androidstatusbarhidden>)[Update the status bar while app is running](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#update-the-status-bar-while-app-is-running>)[Themes and status bar styles](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#themes-and-status-bar-styles>)[Render the status bar in with your layout](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#render-the-status-bar-in-with-your-layout>)[Work with misbehaving third-party Libraries](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#work-with-misbehaving-third-party-libraries>)[Opaque-colored background](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#opaque-colored-background>)[Empty View](https://docs.expo.dev/guides/configuring-statusbar/</guides/configuring-statusbar/#empty-view>)
