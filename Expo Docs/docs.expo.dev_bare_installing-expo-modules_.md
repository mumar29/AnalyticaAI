[](https://docs.expo.dev/bare/installing-expo-modules/<https:/expo.dev>)[Docs](https://docs.expo.dev/bare/installing-expo-modules/</>)
[Blog](https://docs.expo.dev/bare/installing-expo-modules/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/bare/installing-expo-modules/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/bare/installing-expo-modules/<https:/github.com/expo/expo>)[](https://docs.expo.dev/bare/installing-expo-modules/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/bare/installing-expo-modules/</>)[Guides](https://docs.expo.dev/bare/installing-expo-modules/</guides/overview>)[EAS](https://docs.expo.dev/bare/installing-expo-modules/</eas>)[Reference](https://docs.expo.dev/bare/installing-expo-modules/</versions/latest>)[Learn](https://docs.expo.dev/bare/installing-expo-modules/</tutorial/overview>)
[Overview](https://docs.expo.dev/bare/installing-expo-modules/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/bare/installing-expo-modules/</workflow/overview>)[Configure with app config](https://docs.expo.dev/bare/installing-expo-modules/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/bare/installing-expo-modules/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/bare/installing-expo-modules/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/bare/installing-expo-modules/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/bare/installing-expo-modules/</guides/permissions>)[Environment variables](https://docs.expo.dev/bare/installing-expo-modules/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
[Overview](https://docs.expo.dev/bare/installing-expo-modules/</bare/overview>)[Install Expo modules](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules>)[Migrate to Expo CLI](https://docs.expo.dev/bare/installing-expo-modules/</bare/using-expo-cli>)[Install expo-updates](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-updates>)[Install expo-dev-client](https://docs.expo.dev/bare/installing-expo-modules/</bare/install-dev-builds-in-bare>)[Native project upgrade helper](https://docs.expo.dev/bare/installing-expo-modules/</bare/upgrade>)
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/bare/installing-expo-modules/</router/introduction>)[Installation](https://docs.expo.dev/bare/installing-expo-modules/</router/installation>)[Create pages](https://docs.expo.dev/bare/installing-expo-modules/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/bare/installing-expo-modules/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/bare/installing-expo-modules/</router/layouts>)[Error handling](https://docs.expo.dev/bare/installing-expo-modules/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/bare/installing-expo-modules/</modules/overview>)[Get started](https://docs.expo.dev/bare/installing-expo-modules/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/bare/installing-expo-modules/</push-notifications/overview>)[About notification types](https://docs.expo.dev/bare/installing-expo-modules/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/bare/installing-expo-modules/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/bare/installing-expo-modules/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/bare/installing-expo-modules/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/bare/installing-expo-modules/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/bare/installing-expo-modules/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/bare/installing-expo-modules/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/bare/installing-expo-modules/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/bare/installing-expo-modules/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/bare/installing-expo-modules/</archive>)[Expo Snack](https://docs.expo.dev/bare/installing-expo-modules/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/bare/installing-expo-modules/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/bare/installing-expo-modules/<https:/expo.dev/mailing-list/signup>)
# Install Expo modules in an existing React Native project
[Edit this page](https://docs.expo.dev/bare/installing-expo-modules/<https:/github.com/expo/expo/edit/main/docs/pages/bare/installing-expo-modules.mdx> "Edit content of this page on GitHub")
Learn how to prepare your existing React Native project to install and use any Expo module.
[Edit this page](https://docs.expo.dev/bare/installing-expo-modules/<https:/github.com/expo/expo/edit/main/docs/pages/bare/installing-expo-modules.mdx> "Edit content of this page on GitHub")
To use Expo modules in your app, you will need to install and configure the `expo` package.
The `expo` package has a small footprint; it includes only a minimal set of packages that are needed in nearly every app and the module and autolinking infrastructure that other Expo SDK packages are built with. Once the `expo` package is installed and configured in your project, you can use `npx expo install` to add any other Expo module from the SDK.
Depending on how you [initialized the project](https://docs.expo.dev/bare/installing-expo-modules/</bare/overview>), there are two ways you can install the Expo modules: [automatically](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules#automatic-installation>) or [manually](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules#manual-installation>).
## Automatic installation[](https://docs.expo.dev/bare/installing-expo-modules/<#automatic-installation>)
To install and use Expo modules, the easiest way to get up and running is with the `install-expo-modules` command.
Terminal
Copy
`# Install and configure the expo package automatically`
`- ``npx install-expo-modules@latest`
  * When the command succeeds, you will be able to add any Expo module in your app! Proceed to [Usage](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules#usage>) for more information.
  * If the command fails, follow the manual installation instructions. Updating code programmatically can be tricky, and if your project deviates significantly from a default React Native project, then you need to perform manual installation and adapt the instructions here to your codebase.


## Manual installation[](https://docs.expo.dev/bare/installing-expo-modules/<#manual-installation>)
The following instructions apply to installing the latest version of Expo modules in React Native 0.76. For previous versions, check the [native upgrade helper](https://docs.expo.dev/bare/installing-expo-modules/</bare/upgrade>) to see how these files are customized.
Terminal
Copy
`- ``npm install expo`
Once installation is complete, apply the changes from the following diffs to configure Expo modules in your project. This is expected to take about five minutes, and you may need to adapt it slightly depending on how customized your project is.
### Configuration for Android[](https://docs.expo.dev/bare/installing-expo-modules/<#configuration-for-android>)
android/app/src/main/java/com/myapp/MainActivity.kt
1| 1| package com.myapp  
---|---|---  
2| import expo.modules.ReactActivityDelegateWrapper  
2| 3| import com.facebook.react.ReactActivity  
3| 4| import com.facebook.react.ReactActivityDelegate  
4| 5| import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled  
18| 18|  * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]  
19| 19|  */  
20| 20|  override fun createReactActivityDelegate(): ReactActivityDelegate =  
21|  DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)  
21|  ReactActivityDelegateWrapper(this, BuildConfig.IS_NEW_ARCHITECTURE_ENABLED, DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled))  
22| 22| }  
android/app/src/main/java/com/myapp/MainApplication.kt
1| 1| package com.myapp  
---|---|---  
2| import android.content.res.Configuration  
3| import expo.modules.ApplicationLifecycleDispatcher  
4| import expo.modules.ReactNativeHostWrapper  
2| 5| import android.app.Application  
3| 6| import com.facebook.react.PackageList  
4| 7| import com.facebook.react.ReactApplication  
15| 18| class MainApplication : Application(), ReactApplication {  
16| 19|  override val reactNativeHost: ReactNativeHost =  
17|  object : DefaultReactNativeHost(this) {  
18|  override fun getPackages(): List<ReactPackage> =  
19|  PackageList(this).packages.apply {  
20|  // Packages that cannot be autolinked yet can be added manually here, for example:  
21|  // add(MyReactNativePackage())  
22|  }  
20|  ReactNativeHostWrapper(this, object : DefaultReactNativeHost(this) {  
21|  override fun getPackages(): List<ReactPackage> {  
22|  val packages = PackageList(this).packages  
23|  // Packages that cannot be autolinked yet can be added manually here, for example:  
24|  // packages.add(new MyReactNativePackage());  
25|  return packages  
26|  }  
23| 27|  override fun getJSMainModuleName(): String = "index"  
28| 32|  override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED  
29| 33|  override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED  
30|  }  
34|  })  
31| 35|  override val reactHost: ReactHost  
32|  get() = getDefaultReactHost(applicationContext, reactNativeHost)  
36|  get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)  
33| 37|  override fun onCreate() {  
34| 38|  super.onCreate()  
40| 44|  // If you opted-in for the New Architecture, we load the native entry point for this app.  
41| 45|  load()  
42| 46|  }  
47|  ApplicationLifecycleDispatcher.onApplicationCreate(this)  
48|  }  
49  
50|  override fun onConfigurationChanged(newConfig: Configuration) {  
51|  super.onConfigurationChanged(newConfig)  
52|  ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)  
43| 53|  }  
44| 54| }  
android/settings.gradle
4| 4| rootProject.name = 'myapp'  
---|---|---  
5| 5| include ':app'  
6| 6| includeBuild('../node_modules/@react-native/gradle-plugin')  
7  
8| apply from: new File(["node", "--print", "require.resolve('expo/package.json')"].execute(null, rootDir).text.trim(), "../scripts/autolinking.gradle")  
9| useExpoModules()  
### Configuration for iOS[](https://docs.expo.dev/bare/installing-expo-modules/<#configuration-for-ios>)
ios/myapp/AppDelegate.h
1| 1| #import <RCTAppDelegate.h>  
---|---|---  
2| #import <Expo/Expo.h>  
2| 3| #import <UIKit/UIKit.h>  
3| @interface AppDelegate : RCTAppDelegate  
4| @interface AppDelegate : EXAppDelegateWrapper  
4| 5| @end  
ios/Podfile
1| require File.join(File.dirname(`node --print "require.resolve('expo/package.json')"`), "scripts/autolinking")  
---|---  
1| 2| # Resolve react_native_pods.rb with node to allow for hoisting  
2| 3| require Pod::Executable.execute_command('node', ['-p',  
3| 4|  'require.resolve(  
15| 16| end  
16| 17| target 'myapp' do  
18|  use_expo_modules!  
19|  post_integrate do |installer|  
20|  begin  
21|  expo_patch_react_imports!(installer)  
22|  rescue => e  
23|  Pod::UI.warn e  
24|  end  
25|  end  
17| 26|  config = use_native_modules!  
18| 27|  use_react_native!(  
Optionally, you can also add additional delegate methods to your AppDelegate.mm. Some libraries may require them, so unless you have a good reason to leave them out, it is recommended to add them. [See delegate methods in AppDelegate.mm](https://docs.expo.dev/bare/installing-expo-modules/<https:/github.com/expo/expo/blob/sdk-52/templates/expo-template-bare-minimum/ios/HelloWorld/AppDelegate.mm#L33-L60>).
Save all of your changes and update your iOS Deployment Target in Xcode to `iOS 15.1`:
  * Open your-project-name.xcworkspace in Xcode, select your project in the left sidebar.
  * Select Targets > your-project-name > Build Settings > iOS Deployment Target and set it to `iOS 15.1`.


The last step is to install the project's CocoaPods again to pull in Expo modules that are detected by `use_expo_modules!` directive that we added to the Podfile:
Terminal
`# Install pods`
`- ``npx pod-install`
`# Alternatively, the run command will install them for you`
`- ``npx expo run:ios`
### Configure Expo CLI for bundling on Android and iOS[](https://docs.expo.dev/bare/installing-expo-modules/<#configure-expo-cli-for-bundling-on-android-and-ios>)
We recommend using Expo CLI and related tooling configurations to bundle your app JavaScript code and assets. This adds support for using the `"main"` field in package.json to use [Expo Router](https://docs.expo.dev/bare/installing-expo-modules/</router/introduction>) library. Not using Expo CLI for bundling may result in unexpected behavior. [Learn more about Expo CLI](https://docs.expo.dev/bare/installing-expo-modules/</bare/using-expo-cli>).
Use babel-preset-expo in your babel.config.js[](https://docs.expo.dev/bare/installing-expo-modules/<#use-babel-preset-expo-in-your-babelconfigjs>)
babel.config.js
1| 1| module.exports = {  
---|---|---  
2|  presets: ['module:@react-native/babel-preset'],  
2|  presets: ['babel-preset-expo'],  
3| 3| };  
Extend expo/metro-config in your metro.config.js[](https://docs.expo.dev/bare/installing-expo-modules/<#extend-expometro-config-in-your-metroconfigjs>)
metro.config.js
1| const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');  
---|---  
1| const { getDefaultConfig } = require('expo/metro-config');  
2| const { mergeConfig } = require('@react-native/metro-config');  
2| 3| /**  
3| 4|  * Metro configuration  
Configure Android project to bundle with Expo CLI[](https://docs.expo.dev/bare/installing-expo-modules/<#configure-android-project-to-bundle-with-expo>)
android/app/build.gradle
50| 50|  // The list of flags to pass to the Hermes compiler. By default is "-O", "-output-source-map"  
---|---|---  
51| 51|  // hermesFlags = ["-O", "-output-source-map"]  
52|  // Bundle with Expo CLI  
53|  entryFile = file(["node", "-e", "require('expo/scripts/resolveAppEntry')", rootDir.getAbsoluteFile().getParentFile().getAbsolutePath(), "android", "absolute"].execute(null, rootDir).text.trim())  
54|  cliFile = new File(["node", "--print", "require.resolve('@expo/cli')"].execute(null, rootDir).text.trim())  
55|  bundleCommand = "export:embed"  
56  
52| 57|  /* Autolinking */  
53| 58|  autolinkLibrariesWithApp()  
54| 59| }  
Configure iOS project to bundle with Expo CLI[](https://docs.expo.dev/bare/installing-expo-modules/<#configure-ios-project-to-bundle-with-expo>)
Replace the shell script under Build Phases > Bundle React Native code and images in Xcode with the following:
/bin/sh
Copy
```
if [[ -f "$PODS_ROOT/../.xcode.env" ]]; then
 source "$PODS_ROOT/../.xcode.env"
fi
if [[ -f "$PODS_ROOT/../.xcode.env.local" ]]; then
 source "$PODS_ROOT/../.xcode.env.local"
fi
# The project root by default is one level up from the ios directory
export PROJECT_ROOT="$PROJECT_DIR"/..
if [[ "$CONFIGURATION" = *Debug* ]]; then
 export SKIP_BUNDLING=1
fi
if [[ -z "$ENTRY_FILE" ]]; then
 # Set the entry JS file using the bundler's entry resolution.
 export ENTRY_FILE="$("$NODE_BINARY" -e "require('expo/scripts/resolveAppEntry')" "$PROJECT_ROOT" ios relative | tail -n 1)"
fi
if [[ -z "$CLI_PATH" ]]; then
 # Use Expo CLI
 export CLI_PATH="$("$NODE_BINARY" --print "require.resolve('@expo/cli')")"
fi
if [[ -z "$BUNDLE_COMMAND" ]]; then
 # Default Expo CLI command for bundling
 export BUNDLE_COMMAND="export:embed"
fi
`"$NODE_BINARY" --print "require('path').dirname(require.resolve('react-native/package.json')) + '/scripts/react-native-xcode.sh'"`

Show More

```

And add support the `"main"` field in package.json by making the following change to AppDelegate.mm:
AppDelegate.mm
Copy
```
- (NSURL *)getBundleURL
{
#if DEBUG
- return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
+ return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@".expo/.virtual-metro-entry"];
#else
 return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif

```

## Usage[](https://docs.expo.dev/bare/installing-expo-modules/<#usage>)
### Verifying installation[](https://docs.expo.dev/bare/installing-expo-modules/<#verifying-installation>)
You can verify that the installation was successful by logging a value from `expo-constants`[](https://docs.expo.dev/bare/installing-expo-modules/</versions/latest/sdk/constants>).
  * Run `npx expo install expo-constants`
  * Then, run `npx expo run` and modify your app JavaScript code to add the following:

```
import Constants from 'expo-constants';
console.log(Constants.systemFonts);

```

### Using Expo SDK packages[](https://docs.expo.dev/bare/installing-expo-modules/<#using-expo-sdk-packages>)
Once the `expo` package is installed and configured in your project, you can use `npx expo install` to add any other Expo module from the SDK. See [Using Libraries](https://docs.expo.dev/bare/installing-expo-modules/</workflow/using-libraries>) for more information.
### Expo modules included in the `expo` package[](https://docs.expo.dev/bare/installing-expo-modules/<#expo-modules-included-in-the-expo-package>)
The following Expo modules are brought in as dependencies of the `expo` package:
  * `expo-application`[](https://docs.expo.dev/bare/installing-expo-modules/</versions/latest/sdk/application>) - Generates the installation id in remote logging in development. This module is optional and can be safely removed if you do not use `expo-dev-client`.
  * `expo-asset`[](https://docs.expo.dev/bare/installing-expo-modules/</versions/latest/sdk/asset>) - A JavaScript-only package that builds around `expo-file-system` and provides a common foundation for assets across all Expo modules.
  * `expo-constants`[](https://docs.expo.dev/bare/installing-expo-modules/</versions/latest/sdk/constants>) - Provides access to the manifest.
  * `expo-file-system`[](https://docs.expo.dev/bare/installing-expo-modules/</versions/latest/sdk/filesystem>) - Interact with the device file system. Used by `expo-asset` and many other Expo modules. Commonly used directly by developers in application code.
  * `expo-font`[](https://docs.expo.dev/bare/installing-expo-modules/</versions/latest/sdk/font>) - Load fonts at runtime. This module is optional and can be safely removed, however; it is recommended if you use `expo-dev-client` for development and it is required by `@expo/vector-icons`.
  * `expo-keep-awake`[](https://docs.expo.dev/bare/installing-expo-modules/</versions/latest/sdk/keep-awake>) - Prevents your device from going to sleep while developing your app. This module is optional and can be safely removed.


To exclude any of these modules, refer to the following guide on [excluding modules from autolinking](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules#excluding-specific-modules-from-autolinking>).
### Excluding specific modules from autolinking[](https://docs.expo.dev/bare/installing-expo-modules/<#excluding-specific-modules-from-autolinking>)
If you need to exclude native code from Expo modules you are not using, but were installed by other dependencies, you can use the `expo.autolinking.exclude`[](https://docs.expo.dev/bare/installing-expo-modules/</modules/autolinking#exclude>) property in package.json:
package.json
Copy
```
{
 "name": "...",
 "dependencies": {},
 "expo": {
  "autolinking": {
   "exclude": ["expo-keep-awake"]
  }
 }
}

```

[Previous (Development process - Existing React Native apps)Overview](https://docs.expo.dev/bare/installing-expo-modules/</bare/overview>)[Next (Development process - Existing React Native apps)Migrate to Expo CLI](https://docs.expo.dev/bare/installing-expo-modules/</bare/using-expo-cli>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/bare/installing-expo-modules/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/bare/installing-expo-modules/<https:/github.com/expo/expo/edit/main/docs/pages/bare/installing-expo-modules.mdx>)
  * Last updated on January 15, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/bare/installing-expo-modules/<https:/expo.dev/privacy>).
On this page
[Automatic installation](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#automatic-installation>)[Manual installation](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#manual-installation>)[Configuration for Android](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#configuration-for-android>)[Configuration for iOS](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#configuration-for-ios>)[Configure Expo CLI for bundling on Android and iOS](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#configure-expo-cli-for-bundling-on-android-and-ios>)[Usage](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#usage>)[Verifying installation](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#verifying-installation>)[Using Expo SDK packages](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#using-expo-sdk-packages>)[Expo modules included in the expo package](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#expo-modules-included-in-the-expo-package>)[Excluding specific modules from autolinking](https://docs.expo.dev/bare/installing-expo-modules/</bare/installing-expo-modules/#excluding-specific-modules-from-autolinking>)
