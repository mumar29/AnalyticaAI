[](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/expo.dev>)[Docs](https://docs.expo.dev/modules/android-lifecycle-listeners/</>)
[Blog](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/github.com/expo/expo>)[](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/modules/android-lifecycle-listeners/</>)[Guides](https://docs.expo.dev/modules/android-lifecycle-listeners/</guides/overview>)[EAS](https://docs.expo.dev/modules/android-lifecycle-listeners/</eas>)[Reference](https://docs.expo.dev/modules/android-lifecycle-listeners/</versions/latest>)[Learn](https://docs.expo.dev/modules/android-lifecycle-listeners/</tutorial/overview>)
[Overview](https://docs.expo.dev/modules/android-lifecycle-listeners/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/modules/android-lifecycle-listeners/</workflow/overview>)[Configure with app config](https://docs.expo.dev/modules/android-lifecycle-listeners/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/modules/android-lifecycle-listeners/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/modules/android-lifecycle-listeners/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/modules/android-lifecycle-listeners/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/modules/android-lifecycle-listeners/</guides/permissions>)[Environment variables](https://docs.expo.dev/modules/android-lifecycle-listeners/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/modules/android-lifecycle-listeners/</router/introduction>)[Installation](https://docs.expo.dev/modules/android-lifecycle-listeners/</router/installation>)[Create pages](https://docs.expo.dev/modules/android-lifecycle-listeners/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/modules/android-lifecycle-listeners/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/modules/android-lifecycle-listeners/</router/layouts>)[Error handling](https://docs.expo.dev/modules/android-lifecycle-listeners/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/overview>)[Get started](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/get-started>)
Tutorials
Reference
[Module API](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/module-api>)[Android lifecycle listeners](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/android-lifecycle-listeners>)[iOS AppDelegate subscribers](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/appdelegate-subscribers>)[Autolinking](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/autolinking>)[expo-module.config.json](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/module-config>)[Mocking native calls](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/mocking>)[Design considerations](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/design>)
Push notifications
[Overview](https://docs.expo.dev/modules/android-lifecycle-listeners/</push-notifications/overview>)[About notification types](https://docs.expo.dev/modules/android-lifecycle-listeners/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/modules/android-lifecycle-listeners/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/modules/android-lifecycle-listeners/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/modules/android-lifecycle-listeners/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/modules/android-lifecycle-listeners/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/modules/android-lifecycle-listeners/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/modules/android-lifecycle-listeners/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/modules/android-lifecycle-listeners/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/modules/android-lifecycle-listeners/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/modules/android-lifecycle-listeners/</archive>)[Expo Snack](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/expo.dev/mailing-list/signup>)
# Android lifecycle listeners
[Edit this page](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/github.com/expo/expo/edit/main/docs/pages/modules/android-lifecycle-listeners.mdx> "Edit content of this page on GitHub")
Learn about the mechanism that allows your library to hook into Android Activity and Application functions using Expo modules API.
[Edit this page](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/github.com/expo/expo/edit/main/docs/pages/modules/android-lifecycle-listeners.mdx> "Edit content of this page on GitHub")
To respond to certain Android system events relevant to an app, such as inbound links and configuration changes, it is necessary to override the corresponding lifecycle callbacks in MainActivity.java and/or MainApplication.java.
The React Native module API does not provide any mechanism to hook into these, and so setup instructions for React Native libraries often include steps to copy code into these files. To simplify and automate setup and maintenance, the Expo Modules API provides a mechanism that allows your library to hook into `Activity` or `Application` functions.
## Get started[](https://docs.expo.dev/modules/android-lifecycle-listeners/<#get-started>)
First, you need to have created an Expo module or integrated the Expo modules API in the library using the React Native module API. [Learn more](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/overview#setup>).
Inside your module, create a concrete class that implements the `Package`[](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/github.com/expo/expo/tree/main/packages/expo-modules-core/android/src/main/java/expo/modules/core/interfaces/Package.java>) interface. For most cases, you only need to implement the `createReactActivityLifecycleListeners` or `createApplicationLifecycleListeners` methods.
## `Activity` lifecycle listeners[](https://docs.expo.dev/modules/android-lifecycle-listeners/<#activity-lifecycle-listeners>)
You can hook into the `Activity` lifecycle using `ReactActivityLifecycleListener`. `ReactActivityLifecycleListener` hooks into React Native's `ReactActivity` lifecycle using its `ReactActivityDelegate` and provides a similar experience to the Android `Activity` lifecycle.
The following `Activity` lifecycle callbacks are currently supported:
  * `onCreate`
  * `onResume`
  * `onPause`
  * `onDestroy`
  * `onNewIntent`
  * `onBackPressed`


To create a `ReactActivityLifecycleListener`, you should implement `createReactActivityLifecycleListeners` in your derived `Package` class. For example, `MyLibPackage`.
Kotlin
Java
```
// android/src/main/java/expo/modules/mylib/MyLibPackage.kt
package expo.modules.mylib
import android.content.Context
import expo.modules.core.interfaces.Package
import expo.modules.core.interfaces.ReactActivityLifecycleListener
class MyLibPackage : Package {
 override fun createReactActivityLifecycleListeners(activityContext: Context): List<ReactActivityLifecycleListener> {
  return listOf(MyLibReactActivityLifecycleListener())
 }
}

```

```
// android/src/main/java/expo/modules/mylib/MyLibPackage.java
package expo.modules.mylib;
import android.content.Context;
import expo.modules.core.interfaces.Package;
import expo.modules.core.interfaces.ReactActivityLifecycleListener;
import java.util.Collections;
import java.util.List;
public class MyLibPackage implements Package {
 @Override
 public List<? extends ReactActivityLifecycleListener> createReactActivityLifecycleListeners(Context activityContext) {
  return Collections.singletonList(new MyLibReactActivityLifecycleListener());
 }
}

```

`MyLibReactActivityLifecycleListener` is a `ReactActivityLifecycleListener` derived class that you can hook into the lifecycles. You can only override the methods you need.
Kotlin
Java
```
// android/src/main/java/expo/modules/mylib/MyLibReactActivityLifecycleListener.kt
package expo.modules.mylib
import android.app.Activity
import android.os.Bundle
import expo.modules.core.interfaces.ReactActivityLifecycleListener
class MyLibReactActivityLifecycleListener : ReactActivityLifecycleListener {
 override fun onCreate(activity: Activity, savedInstanceState: Bundle?) {
  // Your setup code in `Activity.onCreate`.
  doSomeSetupInActivityOnCreate(activity)
 }
}

```

```
// android/src/main/java/expo/modules/mylib/MyLibReactActivityLifecycleListener.java
package expo.modules.mylib;
import android.app.Activity;
import android.os.Bundle;
import expo.modules.core.interfaces.ReactActivityLifecycleListener;
public class MyLibReactActivityLifecycleListener implements ReactActivityLifecycleListener {
 @Override
 public void onCreate(Activity activity, Bundle savedInstanceState) {
  // Your setup code in `Activity.onCreate`.
  doSomeSetupInActivityOnCreate(activity);
 }
}

```

## `Application` lifecycle listeners[](https://docs.expo.dev/modules/android-lifecycle-listeners/<#application-lifecycle-listeners>)
You can hook into the `Application` lifecycle using `ApplicationLifecycleListener`.
The following `Application` lifecycle callbacks are currently supported:
  * `onCreate`
  * `onConfigurationChanged`


To create an `ApplicationLifecycleListener`, you should implement `createApplicationLifecycleListeners` in your derived `Package` class. For example, `MyLibPackage`.
Kotlin
Java
```
// android/src/main/java/expo/modules/mylib/MyLibPackage.kt
package expo.modules.mylib
import android.content.Context
import expo.modules.core.interfaces.ApplicationLifecycleListener
import expo.modules.core.interfaces.Package
class MyLibPackage : Package {
 override fun createApplicationLifecycleListeners(context: Context): List<ApplicationLifecycleListener> {
  return listOf(MyLibApplicationLifecycleListener())
 }
}

```

```
// android/src/main/java/expo/modules/mylib/MyLibPackage.java
import android.content.Context;
import java.util.Collections;
import java.util.List;
import expo.modules.core.interfaces.ApplicationLifecycleListener;
import expo.modules.core.interfaces.Package;
public class MyLibPackage implements Package {
 @Override
 public List<? extends ApplicationLifecycleListener> createApplicationLifecycleListeners(Context context) {
  return Collections.singletonList(new MyLibApplicationLifecycleListener());
 }
}

```

`MyLibApplicationLifecycleListener` is an `ApplicationLifecycleListener` derived class that can hook into the `Application` lifecycle callbacks. You should only override the methods you need ([due to possible maintenance costs](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/android-lifecycle-listeners#interface-stability>)).
Kotlin
Java
```
// android/src/main/java/expo/modules/mylib/MyLibApplicationLifecycleListener.kt
package expo.modules.mylib
import android.app.Application
import expo.modules.core.interfaces.ApplicationLifecycleListener
class MyLibApplicationLifecycleListener : ApplicationLifecycleListener {
 override fun onCreate(application: Application) {
  // Your setup code in `Application.onCreate`.
  doSomeSetupInApplicationOnCreate(application)
 }
}

```

```
// android/src/main/java/expo/modules/mylib/MyLibApplicationLifecycleListener.java
package expo.modules.mylib;
import android.app.Application;
import expo.modules.core.interfaces.ApplicationLifecycleListener;
public class MyLibApplicationLifecycleListener implements ApplicationLifecycleListener {
 @Override
 public void onCreate(Application application) {
  // Your setup code in `Application.onCreate`.
  doSomeSetupInApplicationOnCreate(application);
 }
}

```

## Known issues[](https://docs.expo.dev/modules/android-lifecycle-listeners/<#known-issues>)
### Why there are no `onStart` and `onStop` Activity listeners[](https://docs.expo.dev/modules/android-lifecycle-listeners/<#why-there-are-no-onstart-and-onstop-activity-listeners>)
In the current implementation, we do not set up the hooks from `MainActivity` but from `ReactActivityDelegate`[](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/github.com/facebook/react-native/blob/400902093aa3ccfc05712a996c592a86f342253a/ReactAndroid/src/main/java/com/facebook/react/ReactActivityDelegate.java>). There are some slight differences between `MainActivity` and `ReactActivityDelegate`. Since `ReactActivityDelegate` does not have `onStart` and `onStop`, we don't yet support them here.
### Interface stability[](https://docs.expo.dev/modules/android-lifecycle-listeners/<#interface-stability>)
The listener interfaces may change from time to time between Expo SDK releases. Our strategy for backward compatibility is always to add new interfaces and add `@Deprecated` annotation for interfaces we plan to remove. Our interfaces are all based on Java 8 interface default method; you don't have to and should not implement all methods. Doing this will benefit your module's maintenance cost between Expo SDKs.
[Previous (Expo Modules API - Reference)Module API](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/module-api>)[Next (Expo Modules API - Reference)iOS AppDelegate subscribers](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/appdelegate-subscribers>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/github.com/expo/expo/edit/main/docs/pages/modules/android-lifecycle-listeners.mdx>)
  * Last updated on January 19, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/modules/android-lifecycle-listeners/<https:/expo.dev/privacy>).
On this page
[Get started](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/android-lifecycle-listeners/#get-started>)[Activity lifecycle listeners](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/android-lifecycle-listeners/#activity-lifecycle-listeners>)[Application lifecycle listeners](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/android-lifecycle-listeners/#application-lifecycle-listeners>)[Known issues](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/android-lifecycle-listeners/#known-issues>)[Why there are no onStart and onStop Activity listeners](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/android-lifecycle-listeners/#why-there-are-no-onstart-and-onstop-activity-listeners>)[Interface stability](https://docs.expo.dev/modules/android-lifecycle-listeners/</modules/android-lifecycle-listeners/#interface-stability>)
