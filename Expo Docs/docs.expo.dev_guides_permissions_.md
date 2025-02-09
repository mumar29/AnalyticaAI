[](https://docs.expo.dev/guides/permissions/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/permissions/</>)
[Blog](https://docs.expo.dev/guides/permissions/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/permissions/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/permissions/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/permissions/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/permissions/</>)[Guides](https://docs.expo.dev/guides/permissions/</guides/overview>)[EAS](https://docs.expo.dev/guides/permissions/</eas>)[Reference](https://docs.expo.dev/guides/permissions/</versions/latest>)[Learn](https://docs.expo.dev/guides/permissions/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/permissions/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/permissions/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/permissions/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/permissions/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/permissions/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/permissions/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/permissions/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/permissions/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/permissions/</router/introduction>)[Installation](https://docs.expo.dev/guides/permissions/</router/installation>)[Create pages](https://docs.expo.dev/guides/permissions/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/permissions/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/permissions/</router/layouts>)[Error handling](https://docs.expo.dev/guides/permissions/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/permissions/</modules/overview>)[Get started](https://docs.expo.dev/guides/permissions/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/permissions/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/permissions/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/permissions/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/permissions/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/permissions/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/permissions/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/permissions/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/permissions/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/permissions/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/permissions/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/permissions/</archive>)[Expo Snack](https://docs.expo.dev/guides/permissions/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/permissions/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/permissions/<https:/expo.dev/mailing-list/signup>)
# Permissions
[Edit this page](https://docs.expo.dev/guides/permissions/<https:/github.com/expo/expo/edit/main/docs/pages/guides/permissions.mdx> "Edit content of this page on GitHub")
Learn about configuring and adding permissions in an app config file.
[Edit this page](https://docs.expo.dev/guides/permissions/<https:/github.com/expo/expo/edit/main/docs/pages/guides/permissions.mdx> "Edit content of this page on GitHub")
When developing a native app that requires access to potentially sensitive information on a user's device, such as their location or contacts, the app must request the user's permission first. For example, to access the user's media library, the app will need to run `MediaLibrary.requestPermissionsAsync()`[](https://docs.expo.dev/guides/permissions/</versions/latest/sdk/media-library#medialibraryrequestpermissionsasync>).
Permissions in standalone and [development builds](https://docs.expo.dev/guides/permissions/</develop/development-builds/introduction>) require native build-time configuration before they can be requested using runtime JavaScript code. This is not required when testing projects in the [Expo Go](https://docs.expo.dev/guides/permissions/<https:/expo.dev/go>) app.
> If you don't configure or explain the native permissions properly it may result in your app getting rejected or pulled from the stores.
## Android[](https://docs.expo.dev/guides/permissions/<#android>)
Permissions are configured with the `android.permissions`[](https://docs.expo.dev/guides/permissions/</versions/latest/config/app#permissions>) and `android.blockedPermissions`[](https://docs.expo.dev/guides/permissions/</versions/latest/config/app#blockedpermissions>) keys in your [app config](https://docs.expo.dev/guides/permissions/</workflow/configuration>).
Most permissions are added automatically by libraries that you use in your app either with [config plugins](https://docs.expo.dev/guides/permissions/</config-plugins/plugins-and-mods#create-a-plugin>) or with a package-level AndroidManifest.xml. You only need to use `android.permissions` to add additional permissions that are not included by default in a library.
app.json
Copy
```
{
 "android": {
  "permissions": ["android.permission.SCHEDULE_EXACT_ALARM"]
 }
}

```

The only way to remove permissions that are added by package-level AndroidManifest.xml files is to block them with the `android.blockedPermissions`[](https://docs.expo.dev/guides/permissions/</versions/latest/config/app#blockedpermissions>) property. To do this, specify the full permission name. For example, if you want to remove the audio recording permissions added by `expo-av`:
app.json
Copy
```
{
 "android": {
  "blockedPermissions": ["android.permission.RECORD_AUDIO"]
 }
}

```

  * See `android.permissions`[](https://docs.expo.dev/guides/permissions/</versions/latest/config/app#permissions>) to learn about which permissions are included in the default [prebuild template](https://docs.expo.dev/guides/permissions/</workflow/prebuild#templates>).
  * Apps using _dangerous_ or _signature_ permissions without valid reasons may be rejected by Google. Ensure you follow the [Android permissions best practices](https://docs.expo.dev/guides/permissions/<https:/developer.android.com/training/permissions/usage-notes>) when submitting your app.
  * [All available Android `Manifest.permissions`](https://docs.expo.dev/guides/permissions/<https:/developer.android.com/reference/android/Manifest.permission>).

Are you using this library in a bare React Native app?[](https://docs.expo.dev/guides/permissions/<#are-you-using-this-library-in-a>)
Modify AndroidManifest.xml to exclude specific permissions: add the `tools:node="remove"` attribute to a `<use-permission>` tag to ensure it is removed, even if it's included in a library AndroidManifest.xml.
```
<manifest xmlns:tools="http://schemas.android.com/tools">
 <uses-permission tools:node="remove" android:name="android.permission.ACCESS_FINE_LOCATION" />
</manifest>

```

> You have to define the `xmlns:tools` attribute on `<manifest>` before you can use the `tools:node` attribute on permissions.
## iOS[](https://docs.expo.dev/guides/permissions/<#ios>)
Your iOS app can ask for system permissions from the user. For example, to use the device's camera or access photos, Apple requires an explanation for how your app makes use of that data. Most packages will automatically provide a boilerplate reason for a given permission with [config plugins](https://docs.expo.dev/guides/permissions/</config-plugins/introduction>). These default messages will most likely need to be tailored to your specific use case for your app to be accepted by the App Store.
To set permission messages, use the `ios.infoPlist`[](https://docs.expo.dev/guides/permissions/</versions/latest/config/app#infoplist>) key in your [app config](https://docs.expo.dev/guides/permissions/</workflow/configuration>), for example:
app.json
Copy
```
{
 "ios": {
  "infoPlist": {
   "NSCameraUsageDescription": "This app uses the camera to scan barcodes on event tickets."
  }
 }
}

```

Many of these properties are also directly configurable using the [config plugin](https://docs.expo.dev/guides/permissions/</config-plugins/introduction>) properties associated with the library that adds them. For example, with `expo-media-library`[](https://docs.expo.dev/guides/permissions/</versions/latest/sdk/media-library>) you can configure photo permission messages like this:
app.json
Copy
```
{
 "plugins": [
  [
   "expo-media-library",
   {
    "photosPermission": "Allow $(PRODUCT_NAME) to access your photos.",
    "savePhotosPermission": "Allow $(PRODUCT_NAME) to save photos."
   }
  ]
 ]
}

```

  * Changes to the Info.plist cannot be updated over-the-air, they will only be deployed when you submit a new native binary. For example, with `eas build`[](https://docs.expo.dev/guides/permissions/</build/introduction>).
  * Apple's official [permission message recommendations](https://docs.expo.dev/guides/permissions/<https:/developer.apple.com/design/human-interface-guidelines/privacy#Requesting-permission>).
  * [All available Info.plist properties](https://docs.expo.dev/guides/permissions/<https:/developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html>).

Are you using this library in a bare React Native app?[](https://docs.expo.dev/guides/permissions/<#are-you-using-this-library-in-a-1>)
Add and modify the permission message values in Info.plist file directly. We recommend doing this directly in Xcode for autocompletion.
## Web[](https://docs.expo.dev/guides/permissions/<#web>)
On the web, permissions like the `Camera` and `Location` can only be requested from a [secure context](https://docs.expo.dev/guides/permissions/<https:/developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#When_is_a_context_considered_secure>). For example, using `https://` or `http://localhost`. This limitation is similar to Android's manifest permissions and iOS's Info.plist usage messages and is enforced to increase privacy.
## Resetting permissions[](https://docs.expo.dev/guides/permissions/<#resetting-permissions>)
Often you want to be able to test what happens when a user rejects permissions, to ensure your app reacts gracefully. An operating-system level restriction on both Android and iOS prohibits an app from asking for the same permission more than once (you can imagine how this could be annoying for the user to be repeatedly prompted for permissions after rejecting them). To test different flows involving permissions in development, you may need to uninstall and reinstall the native app.
When testing in [Expo Go](https://docs.expo.dev/guides/permissions/<https:/expo.dev/go>), you can delete the app and reinstall it by running `npx expo start` and pressing `i` or `a` in the [Expo CLI](https://docs.expo.dev/guides/permissions/</more/expo-cli>) Terminal UI.
[Previous (Development process)Privacy manifests](https://docs.expo.dev/guides/permissions/</guides/apple-privacy>)[Next (Development process)Environment variables](https://docs.expo.dev/guides/permissions/</guides/environment-variables>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/permissions/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/permissions/<https:/github.com/expo/expo/edit/main/docs/pages/guides/permissions.mdx>)
  * Last updated on August 28, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/permissions/<https:/expo.dev/privacy>).
On this page
[Android](https://docs.expo.dev/guides/permissions/</guides/permissions/#android>)[iOS](https://docs.expo.dev/guides/permissions/</guides/permissions/#ios>)[Web](https://docs.expo.dev/guides/permissions/</guides/permissions/#web>)[Resetting permissions](https://docs.expo.dev/guides/permissions/</guides/permissions/#resetting-permissions>)
