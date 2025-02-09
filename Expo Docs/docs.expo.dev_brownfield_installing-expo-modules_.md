[](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/expo.dev>)[Docs](https://docs.expo.dev/brownfield/installing-expo-modules/</>)
[Blog](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/github.com/expo/expo>)[](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/brownfield/installing-expo-modules/</>)[Guides](https://docs.expo.dev/brownfield/installing-expo-modules/</guides/overview>)[EAS](https://docs.expo.dev/brownfield/installing-expo-modules/</eas>)[Reference](https://docs.expo.dev/brownfield/installing-expo-modules/</versions/latest>)[Learn](https://docs.expo.dev/brownfield/installing-expo-modules/</tutorial/overview>)
[Overview](https://docs.expo.dev/brownfield/installing-expo-modules/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/brownfield/installing-expo-modules/</workflow/overview>)[Configure with app config](https://docs.expo.dev/brownfield/installing-expo-modules/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/brownfield/installing-expo-modules/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/brownfield/installing-expo-modules/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/brownfield/installing-expo-modules/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/brownfield/installing-expo-modules/</guides/permissions>)[Environment variables](https://docs.expo.dev/brownfield/installing-expo-modules/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
[Overview](https://docs.expo.dev/brownfield/installing-expo-modules/</brownfield/overview>)[Install Expo modules](https://docs.expo.dev/brownfield/installing-expo-modules/</brownfield/installing-expo-modules>)
Reference
Expo Router
[Introduction](https://docs.expo.dev/brownfield/installing-expo-modules/</router/introduction>)[Installation](https://docs.expo.dev/brownfield/installing-expo-modules/</router/installation>)[Create pages](https://docs.expo.dev/brownfield/installing-expo-modules/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/brownfield/installing-expo-modules/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/brownfield/installing-expo-modules/</router/layouts>)[Error handling](https://docs.expo.dev/brownfield/installing-expo-modules/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/brownfield/installing-expo-modules/</modules/overview>)[Get started](https://docs.expo.dev/brownfield/installing-expo-modules/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/brownfield/installing-expo-modules/</push-notifications/overview>)[About notification types](https://docs.expo.dev/brownfield/installing-expo-modules/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/brownfield/installing-expo-modules/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/brownfield/installing-expo-modules/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/brownfield/installing-expo-modules/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/brownfield/installing-expo-modules/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/brownfield/installing-expo-modules/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/brownfield/installing-expo-modules/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/brownfield/installing-expo-modules/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/brownfield/installing-expo-modules/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/brownfield/installing-expo-modules/</archive>)[Expo Snack](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/expo.dev/mailing-list/signup>)
# Install Expo modules in an existing native project
[Edit this page](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/github.com/expo/expo/edit/main/docs/pages/brownfield/installing-expo-modules.mdx> "Edit content of this page on GitHub")
Learn how to prepare your existing native project to install and use Expo modules and the module API.
[Edit this page](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/github.com/expo/expo/edit/main/docs/pages/brownfield/installing-expo-modules.mdx> "Edit content of this page on GitHub")
> If your project is a greenfield React Native app — primarily built with React Native from the start, then see [Install Expo modules in an existing React Native project](https://docs.expo.dev/brownfield/installing-expo-modules/</bare/installing-expo-modules>) instead of this guide.
This guide provides the steps to prepare your existing native project to install and use Expo modules and the module API.
## Prerequisites[](https://docs.expo.dev/brownfield/installing-expo-modules/<#prerequisites>)
> The following instructions may not work for all projects. Support for integrating Expo modules into existing projects is still experimental. If you encounter issues, [create an issue on GitHub](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/github.com/expo/expo/issues>).
You should have a brownfield native project with React Native installed and configured to render a root view. If you don't have this yet, follow the [Integration with Existing Apps](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/reactnative.dev/docs/integration-with-existing-apps>) guide from the React Native documentation and then come back here once you have followed the steps.
## Install the `expo` package[](https://docs.expo.dev/brownfield/installing-expo-modules/<#install-the-expo-package>)
Add the `expo` package to your project. Ensure you are using a version of [the `expo` package that is compatible with the React Native version in your project](https://docs.expo.dev/brownfield/installing-expo-modules/</versions/latest#each-expo-sdk-version-depends-on-a-react-native-version>).
Terminal
Copy
`- ``npm install expo`
## Configuring native apps[](https://docs.expo.dev/brownfield/installing-expo-modules/<#configuring-native-apps>)
### Android app[](https://docs.expo.dev/brownfield/installing-expo-modules/<#android-app>)
1
Add the following to the gradle.properties file in the android directory:
android/gradle.properties
20| newArchEnabled=true  
---|---  
21  
22| hermesEnabled=true  
2
Add the following to the setting.gradle file in the android directory:
android/settings.gradle
1| apply from: new File(["node", "--print", "require.resolve('expo/package.json')"].execute(null, rootDir).text.trim(), "../scripts/autolinking.gradle");  
---|---  
2| useExpoModules()  
3  
3
Inside the android directory, run the following command:
Terminal
Copy
`- ``./gradlew clean`
Once the above command completes, run:
Terminal
Copy
`- ``./gradlew assembleDebug`
4
(Optional) Complete the following steps if you would like to use [lifecycle listeners](https://docs.expo.dev/brownfield/installing-expo-modules/</modules/android-lifecycle-listeners>) in your app. If you do not set up lifecycle listeners, then additional setup will be required for each module that uses them.
4.1
If you already have a class that extends the `Application` class you can move to step 3. If you do not have it, we need to create one. Add a file called MainApplication.kt file to your android/app/src/main/java/com/<your-app-package> directory with the following content:
android/app/src/main/java/com/<my-app-package>/MainApplication.kt
1| package <my.app.package>  
---|---  
2  
3| import android.app.Application  
4| import android.content.res.Configuration  
5| import com.facebook.soloader.SoLoader  
6| import expo.modules.ApplicationLifecycleDispatcher  
7  
8| class MainApplication() : Application() {  
9|  override fun onCreate() {  
10|  super.onCreate()  
11|  ApplicationLifecycleDispatcher.onApplicationCreate(this)  
12|  }  
13  
14|  override fun onConfigurationChanged(newConfig: Configuration) {  
15|  super.onConfigurationChanged(newConfig)  
16|  ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)  
17|  }  
18| }  
4.2
Register the class in the AndroidManifest.xml file.
android/app/src/main/AndroidManifest.xml
7| 7|  <application  
---|---|---  
8| 8|  android:allowBackup="true"  
9|  android:name=".MainApplication"  
9| 10|  android:fullBackupContent="@xml/backup_rules"  
4.3
If you have your own class extending `Application`, you can add the following. It includes calls to `ApplicationLifecycleDispatcher` for handling events at the application startup and during device configuration changes.
android/app/src/main/java/com/<my-app-package>/MainApplication.kt
0| 1|  override fun onCreate() {  
---|---|---  
1| 2|  super.onCreate()  
3|  ApplicationLifecycleDispatcher.onApplicationCreate(this)  
2| 4|  }  
5  
6|  override fun onConfigurationChanged(newConfig: Configuration) {  
7|  super.onConfigurationChanged(newConfig)  
8|  ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)  
9|  }  
Override `onConfigurationChanged` if you have not done so already.
### iOS app[](https://docs.expo.dev/brownfield/installing-expo-modules/<#ios-app>)
1
Add the following to your `Podfile` in the ios directory:
ios/Podfile
1| require File.join(File.dirname(`node --print "require.resolve('expo/package.json')"`), "scripts/autolinking")  
---|---  
1| 2| 'require.resolve(  
2| 3| "react-native/scripts/react_native_pods.rb",  
15| use_expo_modules!  
2
Open your ios directory in Xcode. From the project navigator, select your project and then select your app target under `TARGETS`. In `Build Settings`, using the search bar, search for `ENABLE_USER_SCRIPT_SANDBOXING`. If it is not already, set its value to `No`.
3
Run `pod install` in the ios directory.
Terminal
Copy
`- ``cd ios && pod install`
You will need to do this every time you add a dependency that uses native code.
4
(Optional) Complete the following if you would like to use `AppDelegate`[ subscribers](https://docs.expo.dev/brownfield/installing-expo-modules/</modules/appdelegate-subscribers>). If you do not set up `AppDelegate` subscribers, then additional setup will be required for each module that uses them.
ios/<MyAppProject>/AppDelegate.swift
1| import ExpoModulesCore  
---|---  
1| class AppDelegate: UIResponder, UIApplicationDelegate {  
2| class AppDelegate: ExpoAppDelegate {  
2|  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {  
3| override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {  
3|  return true  
4| super.application(application, didFinishLaunchingWithOptions: launchOptions)  
[Previous (Development process - Existing native apps)Overview](https://docs.expo.dev/brownfield/installing-expo-modules/</brownfield/overview>)[Next (Development process - Reference)Work with monorepos](https://docs.expo.dev/brownfield/installing-expo-modules/</guides/monorepos>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/github.com/expo/expo/edit/main/docs/pages/brownfield/installing-expo-modules.mdx>)
  * Last updated on November 12, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/brownfield/installing-expo-modules/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/brownfield/installing-expo-modules/</brownfield/installing-expo-modules/#prerequisites>)[Install the expo package](https://docs.expo.dev/brownfield/installing-expo-modules/</brownfield/installing-expo-modules/#install-the-expo-package>)[Configuring native apps](https://docs.expo.dev/brownfield/installing-expo-modules/</brownfield/installing-expo-modules/#configuring-native-apps>)[Android app](https://docs.expo.dev/brownfield/installing-expo-modules/</brownfield/installing-expo-modules/#android-app>)[iOS app](https://docs.expo.dev/brownfield/installing-expo-modules/</brownfield/installing-expo-modules/#ios-app>)
