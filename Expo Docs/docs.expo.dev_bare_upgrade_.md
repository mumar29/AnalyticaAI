[](https://docs.expo.dev/bare/upgrade/<https:/expo.dev>)[Docs](https://docs.expo.dev/bare/upgrade/</>)
[Blog](https://docs.expo.dev/bare/upgrade/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/bare/upgrade/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/bare/upgrade/<https:/github.com/expo/expo>)[](https://docs.expo.dev/bare/upgrade/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/bare/upgrade/</>)[Guides](https://docs.expo.dev/bare/upgrade/</guides/overview>)[EAS](https://docs.expo.dev/bare/upgrade/</eas>)[Reference](https://docs.expo.dev/bare/upgrade/</versions/latest>)[Learn](https://docs.expo.dev/bare/upgrade/</tutorial/overview>)
[Overview](https://docs.expo.dev/bare/upgrade/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/bare/upgrade/</workflow/overview>)[Configure with app config](https://docs.expo.dev/bare/upgrade/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/bare/upgrade/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/bare/upgrade/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/bare/upgrade/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/bare/upgrade/</guides/permissions>)[Environment variables](https://docs.expo.dev/bare/upgrade/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
[Overview](https://docs.expo.dev/bare/upgrade/</bare/overview>)[Install Expo modules](https://docs.expo.dev/bare/upgrade/</bare/installing-expo-modules>)[Migrate to Expo CLI](https://docs.expo.dev/bare/upgrade/</bare/using-expo-cli>)[Install expo-updates](https://docs.expo.dev/bare/upgrade/</bare/installing-updates>)[Install expo-dev-client](https://docs.expo.dev/bare/upgrade/</bare/install-dev-builds-in-bare>)[Native project upgrade helper](https://docs.expo.dev/bare/upgrade/</bare/upgrade>)
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/bare/upgrade/</router/introduction>)[Installation](https://docs.expo.dev/bare/upgrade/</router/installation>)[Create pages](https://docs.expo.dev/bare/upgrade/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/bare/upgrade/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/bare/upgrade/</router/layouts>)[Error handling](https://docs.expo.dev/bare/upgrade/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/bare/upgrade/</modules/overview>)[Get started](https://docs.expo.dev/bare/upgrade/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/bare/upgrade/</push-notifications/overview>)[About notification types](https://docs.expo.dev/bare/upgrade/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/bare/upgrade/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/bare/upgrade/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/bare/upgrade/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/bare/upgrade/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/bare/upgrade/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/bare/upgrade/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/bare/upgrade/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/bare/upgrade/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/bare/upgrade/</archive>)[Expo Snack](https://docs.expo.dev/bare/upgrade/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/bare/upgrade/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/bare/upgrade/<https:/expo.dev/mailing-list/signup>)
# Native project upgrade helper
[Edit this page](https://docs.expo.dev/bare/upgrade/<https:/github.com/expo/expo/edit/main/docs/pages/bare/upgrade.mdx> "Edit content of this page on GitHub")
View file-by-file diffs of all the changes you need to make to your native projects to upgrade them to the next Expo SDK version.
[Edit this page](https://docs.expo.dev/bare/upgrade/<https:/github.com/expo/expo/edit/main/docs/pages/bare/upgrade.mdx> "Edit content of this page on GitHub")
If you manage your native projects (previously known as bare workflow), to [upgrade to the latest Expo SDK](https://docs.expo.dev/bare/upgrade/</workflow/upgrading-expo-sdk-walkthrough>), you have to make changes to your native projects. It can be a complex process to find which native file changes and what to update in which file.
The following guide provides diffs to compare native project files between your project's current SDK version and the target SDK version you want to upgrade. You can use them to make changes to your project depending on the `expo` package version your project uses. The tools on this page are similar to [React Native Upgrade Helper](https://docs.expo.dev/bare/upgrade/<https:/react-native-community.github.io/upgrade-helper/>). However, they are oriented around projects that use Expo modules and related tooling.
> Interested in avoiding upgrading native code altogether? See [Continuous Native Generation (CNG)](https://docs.expo.dev/bare/upgrade/</workflow/continuous-native-generation>) to learn how Expo Prebuild can generate your native projects before a build.
## Upgrade native project files[](https://docs.expo.dev/bare/upgrade/<#upgrade-native-project-files>)
Once you have [upgraded your Expo SDK version and related dependencies](https://docs.expo.dev/bare/upgrade/</workflow/upgrading-expo-sdk-walkthrough#how-to-upgrade-to-the-latest-sdk-version>), use the diff tool below to learn about changes you need to make to your native project and bring them up to date with the current Expo SDK version.
Choose your from SDK version and to SDK version to see the generated diff. Then, apply those changes to your native projects by copying and pasting or manually making changes to the project files.
#### From SDK version:
SDK 51
#### To SDK version:
SDK 52
### Native code changes from SDK 51 to 52
[android/app/build.gradleMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidappbuildgradle>)
4| 4  
---|---  
5| 5| def projectRoot = rootDir.getAbsoluteFile().getParentFile().getAbsolutePath()  
6| 6  
7| static def versionToNumber(major, minor, patch) {  
8|  return patch * 100 + minor * 10000 + major * 1000000  
9| }  
10  
11| def getRNVersion() {  
12|  def version = providers.exec {  
13|  workingDir(projectDir)  
14|  commandLine("node", "-e", "console.log(require('react-native/package.json').version);")  
15|  }.standardOutput.asText.get().trim()  
16  
17|  def coreVersion = version.split("-")[0]  
18|  def (major, minor, patch) = coreVersion.tokenize('.').collect { it.toInteger() }  
19  
20|  return versionToNumber(  
21|  major,  
22|  minor,  
23|  patch  
24|  )  
25| }  
26| def rnVersion = getRNVersion()  
27  
28| 7| /**  
29| 8|  * This is the configuration block to customize your React Native Android app.  
30| 9|  * By default you don't need to apply any configuration, just uncomment the lines you need.  
41| 20|  bundleCommand = "export:embed"  
42| 21  
43| 22|  /* Folders */  
44|  // The root of your project, i.e. where "package.json" lives. Default is '..'  
45|  // root = file("../")  
46|  // The folder where the react-native NPM package is. Default is ../node_modules/react-native  
47|  // reactNativeDir = file("../node_modules/react-native")  
48|  // The folder where the react-native Codegen package is. Default is ../node_modules/@react-native/codegen  
49|  // codegenDir = file("../node_modules/@react-native/codegen")  
23|  // The root of your project, i.e. where "package.json" lives. Default is '../..'  
24|  // root = file("../../")  
25|  // The folder where the react-native NPM package is. Default is ../../node_modules/react-native  
26|  // reactNativeDir = file("../../node_modules/react-native")  
27|  // The folder where the react-native Codegen package is. Default is ../../node_modules/@react-native/codegen  
28|  // codegenDir = file("../../node_modules/@react-native/codegen")  
50| 29  
51| 30|  /* Variants */  
52| 31|  // The list of variants to that are debuggable. For those we're going to  
79| 58|  // The list of flags to pass to the Hermes compiler. By default is "-O", "-output-source-map"  
80| 59|  // hermesFlags = ["-O", "-output-source-map"]  
81| 60  
82|  if (rnVersion >= versionToNumber(0, 75, 0)) {  
83|  /* Autolinking */  
84|  autolinkLibrariesWithApp()  
85|  }  
61|  /* Autolinking */  
62|  autolinkLibrariesWithApp()  
86| 63| }  
87| 64  
88| 65| /**  
144| 121|  useLegacyPackaging (findProperty('expo.useLegacyPackaging')?.toBoolean() ?: false)  
145| 122|  }  
146| 123|  }  
124|  androidResources {  
125|  ignoreAssetsPattern '!.svn:!.git:!.ds_store:!*.scc:!CVS:!thumbs.db:!picasa.ini:!*~'  
126|  }  
147| 127| }  
148| 128  
149| 129| // Apply static values from `gradle.properties` to the `android.packagingOptions`  
194| 174|  implementation jscFlavor  
195| 175|  }  
196| 176| }  
197  
198| if (rnVersion < versionToNumber(0, 75, 0)) {  
199|  apply from: new File(["node", "--print", "require.resolve('@react-native-community/cli-platform-android/package.json', { paths: [require.resolve('react-native/package.json')] })"].execute(null, rootDir).text.trim(), "../native_modules.gradle");  
200|  applyNativeModulesAppBuildGradle(project)  
201| }  
[android/app/src/main/AndroidManifest.xmlMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidappsrcmainandroidmanifestxml>)
18| 18|  </intent>  
---|---|---  
19| 19|  </queries>  
20| 20  
21|  <application android:name=".MainApplication" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:roundIcon="@mipmap/ic_launcher_round" android:allowBackup="false" android:theme="@style/AppTheme">  
21|  <application android:name=".MainApplication" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:roundIcon="@mipmap/ic_launcher_round" android:allowBackup="false" android:theme="@style/AppTheme" android:supportsRtl="true">  
22| 22|  <activity android:name=".MainActivity" android:configChanges="keyboard|keyboardHidden|orientation|screenSize|screenLayout|uiMode" android:launchMode="singleTask" android:windowSoftInputMode="adjustResize" android:theme="@style/Theme.App.SplashScreen" android:exported="true">  
23| 23|  <intent-filter>  
24| 24|  <action android:name="android.intent.action.MAIN"/>  
25| 25|  <category android:name="android.intent.category.LAUNCHER"/>  
26| 26|  </intent-filter>  
27| 27|  </activity>  
28|  <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" android:exported="false"/>  
29| 28|  </application>  
30| 29| </manifest>  
[android/app/src/main/java/com/helloworld/MainApplication.ktMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidappsrcmainjavacomhelloworldmainapplicationkt>)
10| 10| import com.facebook.react.ReactHost  
---|---|---  
11| 11| import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load  
12| 12| import com.facebook.react.defaults.DefaultReactNativeHost  
13| import com.facebook.react.soloader.OpenSourceMergedSoMapping  
13| 14| import com.facebook.soloader.SoLoader  
14| 15  
15| 16| import expo.modules.ApplicationLifecycleDispatcher  
21| 22|  this,  
22| 23|  object : DefaultReactNativeHost(this) {  
23| 24|  override fun getPackages(): List<ReactPackage> {  
25|  val packages = PackageList(this).packages  
24| 26|  // Packages that cannot be autolinked yet can be added manually here, for example:  
25| 27|  // packages.add(new MyReactNativePackage());  
26|  return PackageList(this).packages  
28|  return packages  
27| 29|  }  
28| 30  
29| 31|  override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"  
40| 42  
41| 43|  override fun onCreate() {  
42| 44|  super.onCreate()  
43|  SoLoader.init(this, false)  
45|  SoLoader.init(this, OpenSourceMergedSoMapping)  
44| 46|  if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {  
45| 47|  // If you opted-in for the New Architecture, we load the native entry point for this app.  
46| 48|  load()  
[android/app/src/main/res/drawable/ic_launcher_background.xmlMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidappsrcmainresdrawableic_launcher_backgroundxml>)
1| <?xml version="1.0" encoding="UTF-8" standalone="yes"?>  
---|---  
2| 1| <layer-list xmlns:android="http://schemas.android.com/apk/res/android">  
3| 2|  <item android:drawable="@color/splashscreen_background"/>  
3|  <item>  
4|  <bitmap android:gravity="center" android:src="@drawable/splashscreen_logo"/>  
5|  </item>  
4| 6| </layer-list>  
[android/app/src/main/res/values/styles.xmlMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidappsrcmainresvaluesstylesxml>)
10| 10|  <item name="android:textColor">@android:color/black</item>  
---|---|---  
11| 11|  </style>  
12| 12|  <style name="Theme.App.SplashScreen" parent="AppTheme">  
13|  <item name="android:windowBackground">@drawable/splashscreen</item>  
13|  <item name="android:windowBackground">@drawable/splashscreen_logo</item>  
14| 14|  </style>  
15| 15| </resources>  
[android/build.gradleMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidbuildgradle>)
2| 2  
---|---  
3| 3| buildscript {  
4| 4|  ext {  
5|  buildToolsVersion = findProperty('android.buildToolsVersion') ?: '34.0.0'  
6|  minSdkVersion = Integer.parseInt(findProperty('android.minSdkVersion') ?: '23')  
7|  compileSdkVersion = Integer.parseInt(findProperty('android.compileSdkVersion') ?: '34')  
5|  buildToolsVersion = findProperty('android.buildToolsVersion') ?: '35.0.0'  
6|  minSdkVersion = Integer.parseInt(findProperty('android.minSdkVersion') ?: '24')  
7|  compileSdkVersion = Integer.parseInt(findProperty('android.compileSdkVersion') ?: '35')  
8| 8|  targetSdkVersion = Integer.parseInt(findProperty('android.targetSdkVersion') ?: '34')  
9|  kotlinVersion = findProperty('android.kotlinVersion') ?: '1.9.23'  
9|  kotlinVersion = findProperty('android.kotlinVersion') ?: '1.9.24'  
10| 10  
11| 11|  ndkVersion = "26.1.10909125"  
12| 12|  }  
[android/gradle.propertiesMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidgradleproperties>)
22| 22| # https://developer.android.com/topic/libraries/support-library/androidx-rn  
---|---|---  
23| 23| android.useAndroidX=true  
24| 24  
25| # Automatically convert third-party libraries to use AndroidX  
26| android.enableJetifier=true  
27  
28| 25| # Enable AAPT2 PNG crunching  
29| 26| android.enablePngCrunchInReleaseBuilds=true  
30| 27  
[android/gradle/wrapper/gradle-wrapper.propertiesMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidgradlewrappergradle-wrapperproperties>)
1| 1| distributionBase=GRADLE_USER_HOME  
---|---|---  
2| 2| distributionPath=wrapper/dists  
3| distributionUrl=https\://services.gradle.org/distributions/gradle-8.8-all.zip  
3| distributionUrl=https\://services.gradle.org/distributions/gradle-8.10.2-all.zip  
4| 4| networkTimeout=10000  
5| 5| validateDistributionUrl=true  
6| 6| zipStoreBase=GRADLE_USER_HOME  
[android/gradlewMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidgradlew>)
15| 15| # See the License for the specific language governing permissions and  
---|---|---  
16| 16| # limitations under the License.  
17| 17| #  
18| # SPDX-License-Identifier: Apache-2.0  
19| #  
18| 20  
19| 21| ##############################################################################  
20| 22| #  
55| 57| # Darwin, MinGW, and NonStop.  
56| 58| #  
57| 59| # (3) This script is generated from the Groovy template  
58| # https://github.com/gradle/gradle/blob/HEAD/subprojects/plugins/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt  
60| # https://github.com/gradle/gradle/blob/HEAD/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt  
59| 61| # within the Gradle project.  
60| 62| #  
61| 63| # You can find Gradle at https://github.com/gradle/gradle/.  
84| 86| # shellcheck disable=SC2034  
85| 87| APP_BASE_NAME=${0##*/}  
86| 88| # Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)  
87| APP_HOME=$( cd "${APP_HOME:-./}" > /dev/null && pwd -P ) || exit  
89| APP_HOME=$( cd -P "${APP_HOME:-./}" > /dev/null && printf '%s  
90| ' "$PWD" ) || exit  
88| 91  
89| 92| # Use the maximum available, or set MAX_FD != -1 to use that value.  
90| 93| MAX_FD=maximum  
[android/gradlew.batMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidgradlewbat>)
13| 13| @rem See the License for the specific language governing permissions and   
---|---|---  
14| 14| @rem limitations under the License.   
15| 15| @rem   
16| @rem SPDX-License-Identifier: Apache-2.0   
17| @rem   
16| 18  
17| 19| @if "%DEBUG%"=="" @echo off   
18| 20| @rem ##########################################################################   
[android/react-settings-plugin/build.gradle.ktsDELETED](https://docs.expo.dev/bare/upgrade/<#androidreact-settings-pluginbuildgradlekts>)
[android/react-settings-plugin/src/main/kotlin/expo/plugins/ReactSettingsPlugin.ktDELETED](https://docs.expo.dev/bare/upgrade/<#androidreact-settings-pluginsrcmainkotlinexpopluginsreactsettingspluginkt>)
[android/settings.gradleMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#androidsettingsgradle>)
1| 1| pluginManagement {  
---|---|---  
2|  def version = providers.exec {  
3|  commandLine("node", "-e", "console.log(require('react-native/package.json').version);")  
4|  }.standardOutput.asText.get().trim()  
5|  def (_, reactNativeMinor, reactNativePatch) = version.split("-")[0].tokenize('.').collect { it.toInteger() }  
6  
7|  includeBuild(new File(["node", "--print", "require.resolve('@react-native/gradle-plugin/package.json')"].execute(null, rootDir).text.trim()).getParentFile().toString())  
8|  if(reactNativeMinor == 74 && reactNativePatch <= 3){  
9|  includeBuild("react-settings-plugin")  
10|  }  
2|  includeBuild(new File(["node", "--print", "require.resolve('@react-native/gradle-plugin/package.json', { paths: [require.resolve('react-native/package.json')] })"].execute(null, rootDir).text.trim()).getParentFile().toString())  
11| 3| }  
12  
13| 4| plugins { id("com.facebook.react.settings") }  
14| 5  
15| def getRNMinorVersion() {  
16|  def version = providers.exec {  
17|  commandLine("node", "-e", "console.log(require('react-native/package.json').version);")  
18|  }.standardOutput.asText.get().trim()  
19  
20|  def coreVersion = version.split("-")[0]  
21|  def (major, minor, patch) = coreVersion.tokenize('.').collect { it.toInteger() }  
22  
23|  return minor  
24| }  
25  
26| if (getRNMinorVersion() >= 75) {  
27|  extensions.configure(com.facebook.react.ReactSettingsExtension) { ex ->  
28|  if (System.getenv('EXPO_UNSTABLE_CORE_AUTOLINKING') == '1') {  
29|  println('\u001B[32mUsing expo-modules-autolinking as core autolinking source\u001B[0m')  
30|  def command = [  
31|  'node',  
32|  '--no-warnings',  
33|  '--eval',  
34|  'require(require.resolve(\'expo-modules-autolinking\', { paths: [require.resolve(\'expo/package.json\')] }))(process.argv.slice(1))',  
35|  'react-native-config',  
36|  '--json',  
37|  '--platform',  
38|  'android'  
39|  ].toList()  
40|  ex.autolinkLibrariesFromCommand(command)  
41|  } else {  
42|  ex.autolinkLibrariesFromCommand()  
43|  }  
6| extensions.configure(com.facebook.react.ReactSettingsExtension) { ex ->  
7|  if (System.getenv('EXPO_USE_COMMUNITY_AUTOLINKING') == '1') {  
8|  ex.autolinkLibrariesFromCommand()  
9|  } else {  
10|  def command = [  
11|  'node',  
12|  '--no-warnings',  
13|  '--eval',  
14|  'require(require.resolve(\'expo-modules-autolinking\', { paths: [require.resolve(\'expo/package.json\')] }))(process.argv.slice(1))',  
15|  'react-native-config',  
16|  '--json',  
17|  '--platform',  
18|  'android'  
19|  ].toList()  
20|  ex.autolinkLibrariesFromCommand(command)  
44| 21|  }  
45| 22| }  
46| 23  
57| 34| apply from: new File(["node", "--print", "require.resolve('expo/package.json')"].execute(null, rootDir).text.trim(), "../scripts/autolinking.gradle");  
58| 35| useExpoModules()  
59| 36  
60| if (getRNMinorVersion() < 75) {  
61|  apply from: new File(["node", "--print", "require.resolve('@react-native-community/cli-platform-android/package.json', { paths: [require.resolve('react-native/package.json')] })"].execute(null, rootDir).text.trim(), "../native_modules.gradle");  
62|  applyNativeModulesSettingsGradle(settings)  
63| }  
64  
65| 37| include ':app'  
66| 38| includeBuild(new File(["node", "--print", "require.resolve('@react-native/gradle-plugin/package.json', { paths: [require.resolve('react-native/package.json')] })"].execute(null, rootDir).text.trim()).getParentFile())  
[babel.config.jsDELETED](https://docs.expo.dev/bare/upgrade/<#babelconfigjs>)
[gitignoreMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#gitignore>)
7| 7| .expo/  
---|---|---  
8| 8| dist/  
9| 9| web-build/  
10| expo-env.d.ts  
10| 11  
11| 12| # Native  
12| 13| *.orig.*  
[ios/HelloWorld.xcodeproj/project.pbxprojMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#ioshelloworldxcodeprojprojectpbxproj>)
287| 287|  "FB_SONARKIT_ENABLED=1",  
---|---|---  
288| 288|  );  
289| 289|  INFOPLIST_FILE = HelloWorld/Info.plist;  
290|  IPHONEOS_DEPLOYMENT_TARGET = 13.4;  
290|  IPHONEOS_DEPLOYMENT_TARGET = 15.1;  
291| 291|  LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";  
292| 292|  MARKETING_VERSION = 1.0;  
293| 293|  OTHER_LDFLAGS = (  
311| 311|  CLANG_ENABLE_MODULES = YES;  
312| 312|  CURRENT_PROJECT_VERSION = 1;  
313| 313|  INFOPLIST_FILE = HelloWorld/Info.plist;  
314|  IPHONEOS_DEPLOYMENT_TARGET = 13.4;  
314|  IPHONEOS_DEPLOYMENT_TARGET = 15.1;  
315| 315|  LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";  
316| 316|  MARKETING_VERSION = 1.0;  
317| 317|  OTHER_LDFLAGS = (  
373| 373|  GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;  
374| 374|  GCC_WARN_UNUSED_FUNCTION = YES;  
375| 375|  GCC_WARN_UNUSED_VARIABLE = YES;  
376|  IPHONEOS_DEPLOYMENT_TARGET = 13.4;  
376|  IPHONEOS_DEPLOYMENT_TARGET = 15.1;  
377| 377|  LD_RUNPATH_SEARCH_PATHS = "/usr/lib/swift $(inherited)";  
378| 378|  LIBRARY_SEARCH_PATHS = "\"$(inherited)\"";  
379| 379|  MTL_ENABLE_DEBUG_INFO = YES;  
422| 422|  GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;  
423| 423|  GCC_WARN_UNUSED_FUNCTION = YES;  
424| 424|  GCC_WARN_UNUSED_VARIABLE = YES;  
425|  IPHONEOS_DEPLOYMENT_TARGET = 13.4;  
425|  IPHONEOS_DEPLOYMENT_TARGET = 15.1;  
426| 426|  LD_RUNPATH_SEARCH_PATHS = "/usr/lib/swift $(inherited)";  
427| 427|  LIBRARY_SEARCH_PATHS = "\"$(inherited)\"";  
428| 428|  MTL_ENABLE_DEBUG_INFO = NO;  
[ios/HelloWorld/Images.xcassets/SplashScreen.imageset/Contents.jsonDELETED](https://docs.expo.dev/bare/upgrade/<#ioshelloworldimagesxcassetssplashscreenimagesetcontentsjson>)
[ios/HelloWorld/Images.xcassets/SplashScreenBackground.imageset/Contents.jsonDELETED](https://docs.expo.dev/bare/upgrade/<#ioshelloworldimagesxcassetssplashscreenbackgroundimagesetcontentsjson>)
[ios/HelloWorld/Info.plistMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#ioshelloworldinfoplist>)
24| 24|  <string>1</string>  
---|---|---  
25| 25|  <key>LSRequiresIPhoneOS</key>  
26| 26|  <true/>  
27|  <key>LSMinimumSystemVersion</key>  
28|  <string>12.0</string>  
27| 29|  <key>NSAppTransportSecurity</key>  
28| 30|  <dict>  
29| 31|  <key>NSAllowsArbitraryLoads</key>  
[ios/HelloWorld/SplashScreen.storyboardMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#ioshelloworldsplashscreenstoryboard>)
1| 1| <?xml version="1.0" encoding="UTF-8"?>  
---|---|---  
2| <document  
3|  type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB"  
4|  version="3.0"  
5|  toolsVersion="16096"  
6|  targetRuntime="iOS.CocoaTouch"  
7|  propertyAccessControl="none"  
8|  useAutolayout="YES"  
9|  launchScreen="YES"  
10|  useTraitCollections="YES"  
11|  useSafeAreas="YES"  
12|  colorMatched="YES"  
13|  initialViewController="EXPO-VIEWCONTROLLER-1"  
14| >  
15|  <device id="retina5_5" orientation="portrait" appearance="light"/>  
16|  <dependencies>  
17|  <deployment identifier="iOS"/>  
18|  <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="16087"/>  
19|  <capability name="Safe area layout guides" minToolsVersion="9.0"/>  
20|  <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>  
21|  </dependencies>  
22|  <scenes>  
23|  <!--View Controller-->  
24|  <scene sceneID="EXPO-SCENE-1">  
25|  <objects>  
26|  <viewController  
27|  storyboardIdentifier="SplashScreenViewController"  
28|  id="EXPO-VIEWCONTROLLER-1"  
29|  sceneMemberID="viewController"  
30|  >  
31|  <view  
32|  key="view"  
33|  userInteractionEnabled="NO"  
34|  contentMode="scaleToFill"  
35|  insetsLayoutMarginsFromSafeArea="NO"  
36|  id="EXPO-ContainerView"  
37|  userLabel="ContainerView"  
38|  >  
39|  <rect key="frame" x="0.0" y="0.0" width="414" height="736"/>  
40|  <autoresizingMask key="autoresizingMask" flexibleMaxX="YES" flexibleMaxY="YES"/>  
41|  <subviews>  
42|  <imageView  
43|  userInteractionEnabled="NO"  
44|  contentMode="scaleAspectFill"  
45|  horizontalHuggingPriority="251"  
46|  verticalHuggingPriority="251"  
47|  insetsLayoutMarginsFromSafeArea="NO"  
48|  image="SplashScreenBackground"  
49|  translatesAutoresizingMaskIntoConstraints="NO"  
50|  id="EXPO-SplashScreenBackground"  
51|  userLabel="SplashScreenBackground"  
52|  >  
53|  <rect key="frame" x="0.0" y="0.0" width="414" height="736"/>  
54|  </imageView>  
55|  <imageView  
56|  clipsSubviews="YES"  
57|  userInteractionEnabled="NO"  
58|  contentMode="scaleAspectFit"  
59|  horizontalHuggingPriority="251"  
60|  verticalHuggingPriority="251"  
61|  translatesAutoresizingMaskIntoConstraints="NO"  
62|  image="SplashScreen"  
63|  id="EXPO-SplashScreen"  
64|  userLabel="SplashScreen"  
65|  >  
66|  <rect key="frame" x="0.0" y="0.0" width="414" height="736"/>  
67|  </imageView>  
68|  </subviews>  
69|  <constraints>  
70|  <constraint firstItem="EXPO-SplashScreenBackground" firstAttribute="top" secondItem="EXPO-ContainerView" secondAttribute="top" id="1gX-mQ-vu6"/>  
71|  <constraint firstItem="EXPO-SplashScreenBackground" firstAttribute="leading" secondItem="EXPO-ContainerView" secondAttribute="leading" id="6tX-OG-Sck"/>  
72|  <constraint firstItem="EXPO-SplashScreenBackground" firstAttribute="trailing" secondItem="EXPO-ContainerView" secondAttribute="trailing" id="ABX-8g-7v4"/>  
73|  <constraint firstItem="EXPO-SplashScreenBackground" firstAttribute="bottom" secondItem="EXPO-ContainerView" secondAttribute="bottom" id="jkI-2V-eW5"/>  
74|  <constraint firstItem="EXPO-SplashScreen" firstAttribute="top" secondItem="EXPO-ContainerView" secondAttribute="top" id="2VS-Uz-0LU"/>  
75|  <constraint firstItem="EXPO-SplashScreen" firstAttribute="leading" secondItem="EXPO-ContainerView" secondAttribute="leading" id="LhH-Ei-DKo"/>  
76|  <constraint firstItem="EXPO-SplashScreen" firstAttribute="trailing" secondItem="EXPO-ContainerView" secondAttribute="trailing" id="I6l-TP-6fn"/>  
77|  <constraint firstItem="EXPO-SplashScreen" firstAttribute="bottom" secondItem="EXPO-ContainerView" secondAttribute="bottom" id="nbp-HC-eaG"/>  
78|  </constraints>  
79|  <viewLayoutGuide key="safeArea" id="Rmq-lb-GrQ"/>  
80|  </view>  
81|  </viewController>  
82|  <placeholder placeholderIdentifier="IBFirstResponder" id="EXPO-PLACEHOLDER-1" userLabel="First Responder" sceneMemberID="firstResponder"/>  
83|  </objects>  
84|  <point key="canvasLocation" x="140.625" y="129.4921875"/>  
85|  </scene>  
86|  </scenes>  
87|  <resources>  
88|  <image name="SplashScreen" width="414" height="736"/>  
89|  <image name="SplashScreenBackground" width="1" height="1"/>  
90|  </resources>  
2| <document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="32700.99.1234" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" launchScreen="YES" useTraitCollections="YES" useSafeAreas="YES" colorMatched="YES" initialViewController="EXPO-VIEWCONTROLLER-1">  
3|  <device id="retina6_12" orientation="portrait" appearance="light"/>  
4|  <dependencies>  
5|  <deployment identifier="iOS"/>  
6|  <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="22685"/>  
7|  <capability name="Named colors" minToolsVersion="9.0"/>  
8|  <capability name="Safe area layout guides" minToolsVersion="9.0"/>  
9|  <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>  
10|  </dependencies>  
11|  <scenes>  
12|  <!--View Controller-->  
13|  <scene sceneID="EXPO-SCENE-1">  
14|  <objects>  
15|  <viewController storyboardIdentifier="SplashScreenViewController" id="EXPO-VIEWCONTROLLER-1" sceneMemberID="viewController">  
16|  <view key="view" userInteractionEnabled="NO" contentMode="scaleToFill" insetsLayoutMarginsFromSafeArea="NO" id="EXPO-ContainerView" userLabel="ContainerView">  
17|  <rect key="frame" x="0.0" y="0.0" width="393" height="852"/>  
18|  <autoresizingMask key="autoresizingMask" flexibleMaxX="YES" flexibleMaxY="YES"/>  
19|  <subviews>  
20|  <imageView clipsSubviews="YES" userInteractionEnabled="NO" contentMode="scaleAspectFit" horizontalHuggingPriority="251" verticalHuggingPriority="251" image="SplashScreen" translatesAutoresizingMaskIntoConstraints="NO" id="EXPO-SplashScreen" userLabel="SplashScreen">  
21|  <rect key="frame" x="146.66666666666666" y="381" width="100" height="90.333333333333314"/>  
22|  <accessibility key="accessibilityConfiguration">  
23|  <accessibilityTraits key="traits" image="YES" notEnabled="YES"/>  
24|  </accessibility>  
25|  </imageView>  
26|  </subviews>  
27|  <viewLayoutGuide key="safeArea" id="Rmq-lb-GrQ"/>  
28|  <constraints>  
29|  <constraint firstItem="EXPO-SplashScreen" firstAttribute="centerY" secondItem="EXPO-ContainerView" secondAttribute="centerY" id="0VC-Wk-OaO"/>  
30|  <constraint firstItem="EXPO-SplashScreen" firstAttribute="centerX" secondItem="EXPO-ContainerView" secondAttribute="centerX" id="zR4-NK-mVN"/>  
31|  </constraints>  
32|  </view>  
33|  </viewController>  
34|  <placeholder placeholderIdentifier="IBFirstResponder" id="EXPO-PLACEHOLDER-1" userLabel="First Responder" sceneMemberID="firstResponder"/>  
35|  </objects>  
36|  <point key="canvasLocation" x="0.0" y="0.0"/>  
37|  </scene>  
38|  </scenes>  
39|  <resources>  
40|  <image name="SplashScreenLogo" width="100" height="90.333335876464844"/>  
41|  </resources>  
91| 42| </document>  
[ios/PodfileMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#iospodfile>)
7| 7| ENV['RCT_NEW_ARCH_ENABLED'] = podfile_properties['newArchEnabled'] == 'true' ? '1' : '0'  
---|---|---  
8| 8| ENV['EX_DEV_CLIENT_NETWORK_INSPECTOR'] = podfile_properties['EX_DEV_CLIENT_NETWORK_INSPECTOR']  
9| 9  
10| use_autolinking_method_symbol = ('use' + '_native' + '_modules!').to_sym  
11| origin_autolinking_method = self.method(use_autolinking_method_symbol)  
12| self.define_singleton_method(use_autolinking_method_symbol) do |*args|  
13|  if ENV['EXPO_UNSTABLE_CORE_AUTOLINKING'] == '1'  
14|  Pod::UI.puts('Using expo-modules-autolinking as core autolinking source'.green)  
10| platform :ios, podfile_properties['ios.deploymentTarget'] || '15.1'  
11| install! 'cocoapods',  
12|  :deterministic_uuids => false  
13  
14| prepare_react_native_project!  
15  
16| target 'HelloWorld' do  
17|  use_expo_modules!  
18  
19|  if ENV['EXPO_USE_COMMUNITY_AUTOLINKING'] == '1'  
20|  config_command = ['node', '-e', "process.argv=['', '', 'config'];require('@react-native-community/cli').run()"];  
21|  else  
15| 22|  config_command = [  
16| 23|  'node',  
17| 24|  '--no-warnings',  
22| 29|  '--platform',  
23| 30|  'ios'  
24| 31|  ]  
25|  origin_autolinking_method.call(config_command)  
26|  else  
27|  origin_autolinking_method.call()  
28| 32|  end  
29| end  
30| 33  
31| platform :ios, podfile_properties['ios.deploymentTarget'] || '13.4'  
32| install! 'cocoapods',  
33|  :deterministic_uuids => false  
34  
35| prepare_react_native_project!  
36  
37| target 'HelloWorld' do  
38|  use_expo_modules!  
39|  config = use_native_modules!  
34|  config = use_native_modules!(config_command)  
40| 35  
41| 36|  use_frameworks! :linkage => podfile_properties['ios.useFrameworks'].to_sym if podfile_properties['ios.useFrameworks']  
42| 37|  use_frameworks! :linkage => ENV['USE_FRAMEWORKS'].to_sym if ENV['USE_FRAMEWORKS']  
68| 63|  end  
69| 64|  end  
70| 65|  end  
71  
72|  post_integrate do |installer|  
73|  begin  
74|  expo_patch_react_imports!(installer)  
75|  rescue => e  
76|  Pod::UI.warn e  
77|  end  
78|  end  
79| 66| end  
[package.jsonMODIFIEDRaw](https://docs.expo.dev/bare/upgrade/<#packagejson>)
1| 1| {  
---|---|---  
2| 2|  "name": "expo-template-bare-minimum",  
3| 3|  "description": "This bare project template includes a minimal setup for using unimodules with React Native.",  
4|  "version": "51.0.56",  
4|  "license": "0BSD",  
5|  "version": "52.0.56",  
5| 6|  "main": "index.js",  
6| 7|  "scripts": {  
7| 8|  "start": "expo start --dev-client",  
10| 11|  "web": "expo start --web"  
11| 12|  },  
12| 13|  "dependencies": {  
13|  "expo": "~51.0.28",  
14|  "expo-status-bar": "~1.12.1",  
15|  "react": "18.2.0",  
16|  "react-native": "0.74.5"  
14|  "expo": "~52.0.27",  
15|  "expo-status-bar": "~2.0.1",  
16|  "react": "18.3.1",  
17|  "react-native": "0.76.6"  
17| 18|  },  
18| 19|  "devDependencies": {  
19| 20|  "@babel/core": "^7.20.0"  
[Previous (Development process - Existing React Native apps)Install expo-dev-client](https://docs.expo.dev/bare/upgrade/</bare/install-dev-builds-in-bare>)[Next (Development process - Existing native apps)Overview](https://docs.expo.dev/bare/upgrade/</brownfield/overview>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/bare/upgrade/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/bare/upgrade/<https:/github.com/expo/expo/edit/main/docs/pages/bare/upgrade.mdx>)
  * Last updated on June 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/bare/upgrade/<https:/expo.dev/privacy>).
On this page
[Upgrade native project files](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#upgrade-native-project-files>)`android/../build.gradle`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidappbuildgradle>)`android/../AndroidManifest.xml`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidappsrcmainandroidmanifestxml>)`android/../MainApplication.kt`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidappsrcmainjavacomhelloworldmainapplicationkt>)`android/../ic_launcher_background.xml`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidappsrcmainresdrawableic_launcher_backgroundxml>)`android/../styles.xml`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidappsrcmainresvaluesstylesxml>)`android/build.gradle`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidbuildgradle>)`android/gradle.properties`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidgradleproperties>)`android/../gradle-wrapper.properties`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidgradlewrappergradle-wrapperproperties>)`android/gradlew`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidgradlew>)`android/gradlew.bat`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidgradlewbat>)`android/../build.gradle.kts`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidreact-settings-pluginbuildgradlekts>)`android/../ReactSettingsPlugin.kt`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidreact-settings-pluginsrcmainkotlinexpopluginsreactsettingspluginkt>)`android/settings.gradle`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#androidsettingsgradle>)`babel.config.js`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#babelconfigjs>)`gitignore`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#gitignore>)`ios/../project.pbxproj`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#ioshelloworldxcodeprojprojectpbxproj>)`ios/../Contents.json`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#ioshelloworldimagesxcassetssplashscreenimagesetcontentsjson>)`ios/../Contents.json`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#ioshelloworldimagesxcassetssplashscreenbackgroundimagesetcontentsjson>)`ios/../Info.plist`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#ioshelloworldinfoplist>)`ios/../SplashScreen.storyboard`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#ioshelloworldsplashscreenstoryboard>)`ios/Podfile`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#iospodfile>)`package.json`[](https://docs.expo.dev/bare/upgrade/</bare/upgrade/?fromSdk=51&toSdk=52#packagejson>)
Native project upgrade helper - Expo Documentation
