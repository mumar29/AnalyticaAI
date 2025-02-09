[](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/expo.dev>)[Docs](https://docs.expo.dev/modules/appdelegate-subscribers/</>)
[Blog](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/github.com/expo/expo>)[](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/modules/appdelegate-subscribers/</>)[Guides](https://docs.expo.dev/modules/appdelegate-subscribers/</guides/overview>)[EAS](https://docs.expo.dev/modules/appdelegate-subscribers/</eas>)[Reference](https://docs.expo.dev/modules/appdelegate-subscribers/</versions/latest>)[Learn](https://docs.expo.dev/modules/appdelegate-subscribers/</tutorial/overview>)
[Overview](https://docs.expo.dev/modules/appdelegate-subscribers/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/modules/appdelegate-subscribers/</workflow/overview>)[Configure with app config](https://docs.expo.dev/modules/appdelegate-subscribers/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/modules/appdelegate-subscribers/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/modules/appdelegate-subscribers/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/modules/appdelegate-subscribers/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/modules/appdelegate-subscribers/</guides/permissions>)[Environment variables](https://docs.expo.dev/modules/appdelegate-subscribers/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/modules/appdelegate-subscribers/</router/introduction>)[Installation](https://docs.expo.dev/modules/appdelegate-subscribers/</router/installation>)[Create pages](https://docs.expo.dev/modules/appdelegate-subscribers/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/modules/appdelegate-subscribers/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/modules/appdelegate-subscribers/</router/layouts>)[Error handling](https://docs.expo.dev/modules/appdelegate-subscribers/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/overview>)[Get started](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/get-started>)
Tutorials
Reference
[Module API](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/module-api>)[Android lifecycle listeners](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/android-lifecycle-listeners>)[iOS AppDelegate subscribers](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/appdelegate-subscribers>)[Autolinking](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/autolinking>)[expo-module.config.json](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/module-config>)[Mocking native calls](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/mocking>)[Design considerations](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/design>)
Push notifications
[Overview](https://docs.expo.dev/modules/appdelegate-subscribers/</push-notifications/overview>)[About notification types](https://docs.expo.dev/modules/appdelegate-subscribers/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/modules/appdelegate-subscribers/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/modules/appdelegate-subscribers/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/modules/appdelegate-subscribers/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/modules/appdelegate-subscribers/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/modules/appdelegate-subscribers/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/modules/appdelegate-subscribers/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/modules/appdelegate-subscribers/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/modules/appdelegate-subscribers/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/modules/appdelegate-subscribers/</archive>)[Expo Snack](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/expo.dev/mailing-list/signup>)
# iOS AppDelegate subscribers
[Edit this page](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/github.com/expo/expo/edit/main/docs/pages/modules/appdelegate-subscribers.mdx> "Edit content of this page on GitHub")
Learn how to subscribe to iOS system events relevant to an app, such as inbound links and notifications using Expo modules API.
[Edit this page](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/github.com/expo/expo/edit/main/docs/pages/modules/appdelegate-subscribers.mdx> "Edit content of this page on GitHub")
To respond to certain iOS system events relevant to an app, such as inbound links and notifications, it is necessary to handle the corresponding methods in the `AppDelegate`.
The React Native module API does not provide any mechanism to hook into these methods, and so setup instructions for React Native libraries often include a step to copy code into the `AppDelegate` file. To simplify and automate setup and maintenance, the Expo Modules API provides a mechanism that allows your library to subscribe to calls to `AppDelegate` functions. For this to work, the app `AppDelegate` must inherit from `ExpoAppDelegate`, and this is a requirement for using Expo Modules.
`ExpoAppDelegate` implements most functions from `UIApplicationDelegate`[](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/developer.apple.com/documentation/uikit/uiapplicationdelegate>) protocol and forwards their calls to all the subscribers.
## Get started[](https://docs.expo.dev/modules/appdelegate-subscribers/<#get-started>)
First, you need to have created an Expo module or integrated the Expo modules API in library using the React Native module API. [Learn more](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/overview#setup>).
Create a new public Swift class that extends `ExpoAppDelegateSubscriber` from `ExpoModulesCore` and add its name to the `ios.appDelegateSubscribers` array in the [module config](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/module-config>). Run `pod install`, and the subscriber will be generated in the ExpoModulesProvider.swift file within the application project.
Now you can subscribe to events by adding delegate functions to your subscriber class. For the full list of functions that you can subscribe to, see the functions that are overridden in `ExpoAppDelegate.swift`[](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/github.com/expo/expo/tree/main/packages/expo-modules-core/ios/AppDelegates/ExpoAppDelegate.swift>). App delegate functions that may cause side effects when provided are not supported yet (for example, `application(_:viewControllerWithRestorationIdentifierPath:coder:)`[](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/developer.apple.com/documentation/uikit/uiapplicationdelegate/1623062-application>)).
> Objective-C classes are not supported.
## Result values[](https://docs.expo.dev/modules/appdelegate-subscribers/<#result-values>)
Delegate functions that need to return a value have some additional logic to reconcile responses from multiple subscribers and try to satisfy all of them. There are two good examples of such edge cases:
#### `application(_:didFinishLaunchingWithOptions:) -> Bool`[](https://docs.expo.dev/modules/appdelegate-subscribers/<#application_didfinishlaunchingwithoptions---bool>)
According to the [Apple documentation](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/developer.apple.com/documentation/uikit/uiapplicationdelegate/1622921-application>), you should return `false` if the app cannot handle the URL resource or continue a user activity, otherwise `true` should be returned. The return value is ignored if the app is launched because of a remote notification. In such situations, if at least one of the subscribers returns `true`, the `ExpoAppDelegate` will return `true` as well.
#### `application(_:didReceiveRemoteNotification:fetchCompletionHandler:)`[](https://docs.expo.dev/modules/appdelegate-subscribers/<#application_didreceiveremotenotificationfetchcompletionhandler>)
This method tells the app delegate that a remote notification arrived and gives the app the opportunity to fetch new data. It receives a completion block to execute when the fetch operation is completed. This block should be called with the fetch result value that best describes the results of your fetch request. Possible values are: `UIBackgroundFetchResult.newData`, `UIBackgroundFetchResult.noData` or `UIBackgroundFetchResult.failed`. In this scenario, `ExpoAppDelegate` passes a new completion block to each subscriber, waits until all are completed and collects the results before calling the original completion block. The final result depends on the results collected from the subscribers, as follows in the following order:
  * If at least one subscriber called the completion block with `failed` result, the delegate returns `failed` as well.
  * If there is at least one `newData` result, the delegate returns `newData`.
  * Otherwise `noData` is returned.


> To check out how other functions process the result of your subscriber, we recommend reading the code directly: `ExpoAppDelegate.swift`[](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/github.com/expo/expo/tree/main/packages/expo-modules-core/ios/AppDelegates/ExpoAppDelegate.swift>).
## Example[](https://docs.expo.dev/modules/appdelegate-subscribers/<#example>)
AppLifecycleDelegate.swift
Copy
```
import ExpoModulesCore
public class AppLifecycleDelegate: ExpoAppDelegateSubscriber {
 public func applicationDidBecomeActive(_ application: UIApplication) {
  // The app has become active.
 }
 public func applicationWillResignActive(_ application: UIApplication) {
  // The app is about to become inactive.
 }
 public func applicationDidEnterBackground(_ application: UIApplication) {
  // The app is now in the background.
 }
 public func applicationWillEnterForeground(_ application: UIApplication) {
  // The app is about to enter the foreground.
 }
 public func applicationWillTerminate(_ application: UIApplication) {
  // The app is about to terminate.
 }
}

Show More

```

expo-module.config.json
Copy
```
{
 "ios": {
  "appDelegateSubscribers": ["AppLifecycleDelegate"]
 }
}

```

[Previous (Expo Modules API - Reference)Android lifecycle listeners](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/android-lifecycle-listeners>)[Next (Expo Modules API - Reference)Autolinking](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/autolinking>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/github.com/expo/expo/edit/main/docs/pages/modules/appdelegate-subscribers.mdx>)
  * Last updated on July 04, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/modules/appdelegate-subscribers/<https:/expo.dev/privacy>).
On this page
[Get started](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/appdelegate-subscribers/#get-started>)[Result values](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/appdelegate-subscribers/#result-values>)[Example](https://docs.expo.dev/modules/appdelegate-subscribers/</modules/appdelegate-subscribers/#example>)
