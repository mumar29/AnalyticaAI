[](https://docs.expo.dev/bare/installing-updates/<https:/expo.dev>)[Docs](https://docs.expo.dev/bare/installing-updates/</>)
[Blog](https://docs.expo.dev/bare/installing-updates/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/bare/installing-updates/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/bare/installing-updates/<https:/github.com/expo/expo>)[](https://docs.expo.dev/bare/installing-updates/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/bare/installing-updates/</>)[Guides](https://docs.expo.dev/bare/installing-updates/</guides/overview>)[EAS](https://docs.expo.dev/bare/installing-updates/</eas>)[Reference](https://docs.expo.dev/bare/installing-updates/</versions/latest>)[Learn](https://docs.expo.dev/bare/installing-updates/</tutorial/overview>)
[Overview](https://docs.expo.dev/bare/installing-updates/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/bare/installing-updates/</workflow/overview>)[Configure with app config](https://docs.expo.dev/bare/installing-updates/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/bare/installing-updates/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/bare/installing-updates/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/bare/installing-updates/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/bare/installing-updates/</guides/permissions>)[Environment variables](https://docs.expo.dev/bare/installing-updates/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
[Overview](https://docs.expo.dev/bare/installing-updates/</bare/overview>)[Install Expo modules](https://docs.expo.dev/bare/installing-updates/</bare/installing-expo-modules>)[Migrate to Expo CLI](https://docs.expo.dev/bare/installing-updates/</bare/using-expo-cli>)[Install expo-updates](https://docs.expo.dev/bare/installing-updates/</bare/installing-updates>)[Install expo-dev-client](https://docs.expo.dev/bare/installing-updates/</bare/install-dev-builds-in-bare>)[Native project upgrade helper](https://docs.expo.dev/bare/installing-updates/</bare/upgrade>)
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/bare/installing-updates/</router/introduction>)[Installation](https://docs.expo.dev/bare/installing-updates/</router/installation>)[Create pages](https://docs.expo.dev/bare/installing-updates/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/bare/installing-updates/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/bare/installing-updates/</router/layouts>)[Error handling](https://docs.expo.dev/bare/installing-updates/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/bare/installing-updates/</modules/overview>)[Get started](https://docs.expo.dev/bare/installing-updates/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/bare/installing-updates/</push-notifications/overview>)[About notification types](https://docs.expo.dev/bare/installing-updates/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/bare/installing-updates/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/bare/installing-updates/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/bare/installing-updates/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/bare/installing-updates/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/bare/installing-updates/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/bare/installing-updates/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/bare/installing-updates/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/bare/installing-updates/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/bare/installing-updates/</archive>)[Expo Snack](https://docs.expo.dev/bare/installing-updates/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/bare/installing-updates/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/bare/installing-updates/<https:/expo.dev/mailing-list/signup>)
# Install expo-updates in an existing React Native project
[Edit this page](https://docs.expo.dev/bare/installing-updates/<https:/github.com/expo/expo/edit/main/docs/pages/bare/installing-updates.mdx> "Edit content of this page on GitHub")
Learn how to install and configure expo-updates in your existing React Native project.
[Edit this page](https://docs.expo.dev/bare/installing-updates/<https:/github.com/expo/expo/edit/main/docs/pages/bare/installing-updates.mdx> "Edit content of this page on GitHub")
`expo-updates` is a library that enables your app to manage remote updates to your application code. It communicates with the configured remote update service to get information about available updates. This guide explains how to set up a bare React Native project for use with [EAS Update](https://docs.expo.dev/bare/installing-updates/</eas-update/introduction>), a hosted remote update service that includes tools to simplify installation and configuration of the `expo-updates` library.
Do you use Continuous Native Generation (CNG) in your project?[](https://docs.expo.dev/bare/installing-updates/<#do-you-use-continuous-native-generation-cng>)
You may be reading the wrong guide. To use `expo-updates` in a project that uses [CNG](https://docs.expo.dev/bare/installing-updates/</workflow/continuous-native-generation>), see [EAS Update "Get started"](https://docs.expo.dev/bare/installing-updates/</eas-update/getting-started>).
## Prerequisites[](https://docs.expo.dev/bare/installing-updates/<#prerequisites>)
The `expo` package must be installed and configured. If you created your project with `npx @react-native-community/cli@latest init` and do not have any other Expo libraries installed, you will need to [install Expo modules](https://docs.expo.dev/bare/installing-updates/</bare/installing-expo-modules>) before proceeding.
## Installation[](https://docs.expo.dev/bare/installing-updates/<#installation>)
To get started, install `expo-updates`:
Terminal
Copy
`- ``npx expo install expo-updates`
Then, install pods for iOS:
Terminal
Copy
`- ``npx pod-install`
## Configuring expo-updates library[](https://docs.expo.dev/bare/installing-updates/<#configuring-expo-updates-library>)
Apply the changes from the diffs from the following sections to configure `expo-updates` in your project.
### JavaScript and JSON[](https://docs.expo.dev/bare/installing-updates/<#javascript-and-json>)
Run `eas update:configure` to set the `updates` URL and `projectId` in app.json.
Terminal
Copy
`- ``eas update:configure`
Modify the `expo` section of app.json. If you created your project using `npx @react-native-community/cli@latest init`, you will need to add the following changes including the `updates`[ URL](https://docs.expo.dev/bare/installing-updates/</versions/latest/config/app#url>).
> The example `updates` URL and `projectId` shown below are used with EAS Update. The EAS CLI sets this URL correctly for the EAS Update service when running `eas update:configure`.
app.json
1| 1| {  
---|---|---  
2| 2|  "displayName": "MyApp",  
3|  "expo": {  
4|  "name": "MyApp",  
5|  "slug": "MyApp",  
6|  "ios": {  
7|  "bundleIdentifier": "com.MyApp"  
8|  },  
9|  "android": {  
10|  "package": "com.MyApp"  
11|  },  
12|  "runtimeVersion": "1.0.0",  
13|  "updates": {  
14|  "url": "https://u.expo.dev/[your-project-id]"  
15|  },  
16|  "extra": {  
17|  "eas": {  
18|  "projectId": "[your-project-id]"  
19|  }  
20|  }  
21|  }  
3| 22| }  
If you want to set up a [custom `expo-updates` server](https://docs.expo.dev/bare/installing-updates/<https:/github.com/expo/custom-expo-updates-server>) instead, add your URL to `updates.url` in app.json.
app.json
Copy
```
{
 "name": "MyApp",
 "displayName": "MyApp",
 "expo": {
  "name": "MyApp",
   ...
  "updates": {
-   "url": "https://u.expo.dev/[your-project-id]"
+   "url": "http://localhost:3000/api/manifest"
  }
 }
}

```

### Android[](https://docs.expo.dev/bare/installing-updates/<#android>)
Modify android/app/build.gradle to check for the JS engine configuration (JSC or Hermes) in Expo files:
android/app/build.gradle
49| 49|  //  
---|---|---  
50| 50|  // The list of flags to pass to the Hermes compiler. By default is "-O", "-output-source-map"  
51| 51|  // hermesFlags = ["-O", "-output-source-map"]  
52|  // Override `hermesEnabled` by `expo.jsEngine`  
53|  ext {  
54|  hermesEnabled = (findProperty('expo.jsEngine') ?: "hermes") == "hermes"  
55|  }  
56  
52| 57|  entryFile = file(["node", "-e", "require('expo/scripts/resolveAppEntry')", rootDir.getAbsoluteFile().getParentFile().getAbsolutePath(), "android", "absolute"].execute(null, rootDir).text.trim())  
53| 58|  cliFile = new File(["node", "--print", "require.resolve('@expo/cli')"].execute(null, rootDir).text.trim())  
54| 59|  bundleCommand = "export:embed"  
Modify android/app/src/main/AndroidManifest.xml to add the `expo-updates` configuration XML so that it matches the contents of app.json:
android/app/src/main/AndroidManifest.xml
13| 13|  <data android:scheme="myapp"/>  
---|---|---  
14| 14|  </intent-filter>  
15| 15|  </activity>  
16|  <meta-data android:name="expo.modules.updates.ENABLED" android:value="true"/>  
17|  <meta-data android:name="expo.modules.updates.EXPO_UPDATES_CHECK_ON_LAUNCH" android:value="ALWAYS"/>  
18|  <meta-data android:name="expo.modules.updates.EXPO_UPDATES_LAUNCH_WAIT_MS" android:value="0"/>  
19|  <meta-data android:name="expo.modules.updates.EXPO_UPDATE_URL" android:value="https://u.expo.dev/[your-project-id]"/>  
20|  <meta-data android:name="expo.modules.updates.EXPO_RUNTIME_VERSION" android:value="@string/expo_runtime_version"/>  
16| 21|  </application>  
17| 22| </manifest>  
If using the updates server URL (a custom non-HTTPS update server running on the same machine), you will need to modify android/app/src/main/AndroidManifest.xml to add the update server URL and enable `usesCleartextTraffic`:
android/app/src/main/AndroidManifest.xml
Copy
```
<application
 android:name=".MainApplication"
 android:label="@string/app_name"
 android:icon="@mipmap/ic_launcher"
 android:roundIcon="@mipmap/ic_launcher_round"
 android:allowBackup="false"
 android:theme="@style/AppTheme"
+ android:usesCleartextTraffic="true"
>

- <meta-data android:name="expo.modules.updates.EXPO_UPDATE_URL" android:value="https://u.expo.dev/[your-project-id]"/>
+ <meta-data android:name="expo.modules.updates.EXPO_UPDATE_URL" android:value="http://localhost:3000/api/manifest"/>
</application>

```

Add the Expo runtime version string key to android/app/src/main/res/values/strings.xml:
android/app/src/main/res/values/strings.xml
1| 1| <resources>  
---|---|---  
2| 2|  <string name="app_name">MyApp</string>  
3|  <string name="expo_runtime_version">1.0.0</string>  
3| 4| </resources>  
### iOS[](https://docs.expo.dev/bare/installing-updates/<#ios>)
Add the file Podfile.properties.json to the ios directory:
ios/Podfile.properties.json
Copy
```
{
 "expo.jsEngine": "hermes"
}

```

Modify ios/Podfile to check for the JS engine configuration (JSC or Hermes) in Expo files:
ios/Podfile
6| 6|  {paths: [process.argv[1]]},  
---|---|---  
7| 7|  )', __dir__]).strip  
8| require 'json'  
9| podfile_properties = JSON.parse(File.read(File.join(__dir__, 'Podfile.properties.json'))) rescue {}  
10  
8| 11| platform :ios, min_ios_version_supported  
9| 12| prepare_react_native_project!  
28| 31|  use_react_native!(  
29| 32|  :path => config[:reactNativePath],  
33|  :hermes_enabled => podfile_properties['expo.jsEngine'] == nil || podfile_properties['expo.jsEngine'] == 'hermes',  
30| 34|  # An absolute path to your application root.  
31| 35|  :app_path => "#{Pod::Config.instance.installation_root}/.."  
32| 36|  )  
Add Expo.plist file to ios/your-project/Supporting directory using Xcode with the following content to match the contents of app.json:
Expo.plist
Copy
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
 <dict>
  <key>EXUpdatesCheckOnLaunch</key>
  <string>ALWAYS</string>
  <key>EXUpdatesEnabled</key>
  <true/>
  <key>EXUpdatesLaunchWaitMs</key>
  <integer>0</integer>
  <key>EXUpdatesRuntimeVersion</key>
  <string>1.0.0</string>
  <key>EXUpdatesURL</key>
  <string>http://localhost:3000/api/manifest</string>
 </dict>
</plist>

```

## Next steps[](https://docs.expo.dev/bare/installing-updates/<#next-steps>)
  * To start using EAS Update with EAS Build, see the EAS Update [Get started](https://docs.expo.dev/bare/installing-updates/</eas-update/getting-started>).
  * See `expo-updates`[ API reference](https://docs.expo.dev/bare/installing-updates/</versions/latest/sdk/updates>) for more information on how to use the library.
  * See how to use [EAS Update with a local build directly](https://docs.expo.dev/bare/installing-updates/</eas-update/standalone-service>).
  * It is also possible to use `expo-updates` with a custom server that implements the [Expo Updates protocol](https://docs.expo.dev/bare/installing-updates/</technical-specs/expo-updates-1>). See `custom-expo-updates-server`[ README](https://docs.expo.dev/bare/installing-updates/<https:/github.com/expo/custom-expo-updates-server#readme>).


[Previous (Development process - Existing React Native apps)Migrate to Expo CLI](https://docs.expo.dev/bare/installing-updates/</bare/using-expo-cli>)[Next (Development process - Existing React Native apps)Install expo-dev-client](https://docs.expo.dev/bare/installing-updates/</bare/install-dev-builds-in-bare>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/bare/installing-updates/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/bare/installing-updates/<https:/github.com/expo/expo/edit/main/docs/pages/bare/installing-updates.mdx>)
  * Last updated on November 14, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/bare/installing-updates/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/bare/installing-updates/</bare/installing-updates/#prerequisites>)[Installation](https://docs.expo.dev/bare/installing-updates/</bare/installing-updates/#installation>)[Configuring expo-updates library](https://docs.expo.dev/bare/installing-updates/</bare/installing-updates/#configuring-expo-updates-library>)[JavaScript and JSON](https://docs.expo.dev/bare/installing-updates/</bare/installing-updates/#javascript-and-json>)[Android](https://docs.expo.dev/bare/installing-updates/</bare/installing-updates/#android>)[iOS](https://docs.expo.dev/bare/installing-updates/</bare/installing-updates/#ios>)[Next steps](https://docs.expo.dev/bare/installing-updates/</bare/installing-updates/#next-steps>)
