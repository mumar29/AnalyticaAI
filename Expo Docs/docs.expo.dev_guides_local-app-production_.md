[](https://docs.expo.dev/guides/local-app-production/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/local-app-production/</>)
[Blog](https://docs.expo.dev/guides/local-app-production/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/local-app-production/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/local-app-production/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/local-app-production/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/local-app-production/</>)[Guides](https://docs.expo.dev/guides/local-app-production/</guides/overview>)[EAS](https://docs.expo.dev/guides/local-app-production/</eas>)[Reference](https://docs.expo.dev/guides/local-app-production/</versions/latest>)[Learn](https://docs.expo.dev/guides/local-app-production/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/local-app-production/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/local-app-production/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/local-app-production/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/local-app-production/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/local-app-production/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/local-app-production/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/local-app-production/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/local-app-production/</guides/environment-variables>)
Linking
Custom native code
Local app
[Development](https://docs.expo.dev/guides/local-app-production/</guides/local-app-development>)[Production](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production>)
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/local-app-production/</router/introduction>)[Installation](https://docs.expo.dev/guides/local-app-production/</router/installation>)[Create pages](https://docs.expo.dev/guides/local-app-production/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/local-app-production/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/local-app-production/</router/layouts>)[Error handling](https://docs.expo.dev/guides/local-app-production/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/local-app-production/</modules/overview>)[Get started](https://docs.expo.dev/guides/local-app-production/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/local-app-production/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/local-app-production/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/local-app-production/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/local-app-production/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/local-app-production/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/local-app-production/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/local-app-production/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/local-app-production/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/local-app-production/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/local-app-production/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/local-app-production/</archive>)[Expo Snack](https://docs.expo.dev/guides/local-app-production/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/local-app-production/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/local-app-production/<https:/expo.dev/mailing-list/signup>)
# Create a production build locally
[Edit this page](https://docs.expo.dev/guides/local-app-production/<https:/github.com/expo/expo/edit/main/docs/pages/guides/local-app-production.mdx> "Edit content of this page on GitHub")
Learn how to create a production build for your Expo app locally.
[Edit this page](https://docs.expo.dev/guides/local-app-production/<https:/github.com/expo/expo/edit/main/docs/pages/guides/local-app-production.mdx> "Edit content of this page on GitHub")
To create your app's production build (also known as release build) locally, you need to follow separate steps on your computer and use the tools required to create any native app. This guide provides the necessary steps for Android and iOS.
## Android[](https://docs.expo.dev/guides/local-app-production/<#android>)
Creating a production build locally for Android requires signing it with an [upload key](https://docs.expo.dev/guides/local-app-production/<https:/developer.android.com/studio/publish/app-signing#certificates-keystores>) and generating an Android Application Bundle (.aab). Follow the steps below:
### Prerequisites[](https://docs.expo.dev/guides/local-app-production/<#prerequisites>)
  * [OpenJDK distribution](https://docs.expo.dev/guides/local-app-production/</get-started/set-up-your-environment?mode=development-build&buildEnv=local#install-watchman-and-jdk>) installed to access the `keytool` command
  * android directory generated. If you are using [CNG](https://docs.expo.dev/guides/local-app-production/</workflow/continuous-native-generation>), then run `npx expo prebuild` to generate it.


1
### Create an upload key[](https://docs.expo.dev/guides/local-app-production/<#create-an-upload-key>)
Already created a build with EAS Build? Download your credentials and skip to the next step.[](https://docs.expo.dev/guides/local-app-production/<#already-created-a-build-with-eas-build>)
If you've already created a build with EAS Build, follow the steps below to download the credentials, which contains the upload key and its password, key alias, and key password:
  1. In your terminal, run `eas credentials -p android` and select the build profile.
  2. Select credentials.json > Download credentials from EAS to credentials.json.
  3. Move the downloaded keystore.jks file to the android/app directory.
  4. Copy the values for the upload keystore password, key alias, and key password from the credentials.json as you will need them in the next step.


Inside your Expo project directory, run the following `keytool` command to create an upload key:
Terminal
Copy
`- ``sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
After running this command, you will be prompted to enter a password for the keystore. This password will protect the upload key. Remember the password you enter here, as you'll need it in the next step.
This command also generates the keystore file named my-upload-key.keystore in your project directory. Move it to the android/app directory.
> If you commit the android directory to a version control system like Git, don't commit this keystore file. It contains your upload key and should be kept private.
2
### Update gradle variables[](https://docs.expo.dev/guides/local-app-production/<#update-gradle-variables>)
Open android/gradle.properties file and add the following gradle variables at the end of the file. Replace the `*****` with the correct keystore and key password that you provided in the previous step.
These variables contain information about your upload key:
android/gradle.properties
Copy
```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****

```

> If you commit the android directory to a version control system like Git, don't commit the above information. Instead, create a ~/.gradle/gradle.properties file on your computer and add the above variables to this file.
3
### Add signing config to build.gradle[](https://docs.expo.dev/guides/local-app-production/<#add-signing-config-to-buildgradle>)
Open android/app/build.gradle file and add the following configuration:
android/app/build.gradle
101| 101|  keyAlias 'androiddebugkey'  
---|---|---  
102| 102|  keyPassword 'android'  
103| 103|  }  
104|  release {  
105|  if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {  
106|  storeFile file(MYAPP_UPLOAD_STORE_FILE)  
107|  storePassword MYAPP_UPLOAD_STORE_PASSWORD  
108|  keyAlias MYAPP_UPLOAD_KEY_ALIAS  
109|  keyPassword MYAPP_UPLOAD_KEY_PASSWORD  
110|  }  
111|  }  
104| 112|  }  
105| 113|  buildTypes {  
106| 114|  debug {  
110| 118|  // Caution! In production, you need to generate your own keystore file.  
111| 119|  // see https://reactnative.dev/docs/signed-apk-android.  
112| 120|  signingConfig signingConfigs.debug  
121|  signingConfig signingConfigs.release  
113| 122|  shrinkResources (findProperty('android.enableShrinkResourcesInReleaseBuilds')?.toBoolean() ?: false)  
114| 123|  minifyEnabled enableProguardInReleaseBuilds  
115| 124|  proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"  
4
### Generate release Android Application Bundle (aab)[](https://docs.expo.dev/guides/local-app-production/<#generate-release-android-application-bundle-aab>)
Navigate inside the android directory and create a production build in .aab format by running Gradle's `bundleRelease` command:
Terminal
Copy
`- ``cd android`
`- ``./gradlew app:bundleRelease`
This command will generate app-release.aab inside the android/app/build/outputs/bundle/release directory.
5
### Manual app submission to Google Play Console[](https://docs.expo.dev/guides/local-app-production/<#manual-app-submission-to-google-play-console>)
Google Play Store requires manual app submission when submitting the .aab file for the first time.
[Manual submission of an Android appFollow the steps from the FYI guide on manually submitting your app to Google Play Store for the first time.](https://docs.expo.dev/guides/local-app-production/<https:/expo.fyi/first-android-submission>)
## iOS[](https://docs.expo.dev/guides/local-app-production/<#ios>)
To create an iOS production build locally for Apple App Store, you need to use Xcode which handles the signing and submission process via App Store Connect.
### Prerequisites[](https://docs.expo.dev/guides/local-app-production/<#prerequisites-1>)
  * Paid Apple Developer membership
  * [Xcode installed](https://docs.expo.dev/guides/local-app-production/</get-started/set-up-your-environment?platform=ios&device=physical&mode=development-build&buildEnv=local#set-up-xcode-and-watchman>) on your computer
  * ios directory generated. If you are using [CNG](https://docs.expo.dev/guides/local-app-production/</workflow/continuous-native-generation>), then run `npx expo prebuild` to generate it.


1
### Open iOS workspace in Xcode[](https://docs.expo.dev/guides/local-app-production/<#open-ios-workspace-in-xcode>)
Inside your Expo project directory, run the following command to open `your-project.xcworkspace` in Xcode:
Terminal
Copy
`- ``xed ios`
After opening the iOS project in Xcode:
  1. From the sidebar on the left, select your app's workspace.
  2. Go to Signing & Capabilities and select All or Release.
  3. Under Signing > Team, ensure your Apple Developer team is selected. Xcode will generate an automatically managed Provisioning Profile and Signing Certificate.


2
### Configure a release scheme[](https://docs.expo.dev/guides/local-app-production/<#configure-a-release-scheme>)
To configure your app's release scheme:
  1. From the menu bar, open Product > Scheme > Edit Scheme.
  2. Select Run from the sidebar, then set the Build configuration to Release using the dropdown.


3
### Build app for release[](https://docs.expo.dev/guides/local-app-production/<#build-app-for-release>)
To build your app for release, From the menu bar, open Product > Build. This step will build your app binary for release.
4
### App submission using App Store Connect[](https://docs.expo.dev/guides/local-app-production/<#app-submission-using-app-store-connect>)
Once the build is complete, you can distribute your app to TestFlight or submit it to the App Store using App Store Connect:
  1. From the menu bar, open Product > Archive.
  2. Under Archives, click Distribute App from the right sidebar.
  3. Click App Store Connect and follow the prompts shown in the window. This step will create an app store record and upload your app to the App Store.
  4. Now you can go to your App Store Connect account, select your app under Apps, and submit it for testing using TestFlight or prepare it for final release by following the steps in the App Store Connect dashboard.


[Previous (Development process - Local app)Development](https://docs.expo.dev/guides/local-app-production/</guides/local-app-development>)[Next (Development process - Web)Develop websites](https://docs.expo.dev/guides/local-app-production/</workflow/web>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/local-app-production/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/local-app-production/<https:/github.com/expo/expo/edit/main/docs/pages/guides/local-app-production.mdx>)
  * Last updated on December 12, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/local-app-production/<https:/expo.dev/privacy>).
On this page
[Android](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#android>)[Prerequisites](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#prerequisites>)[Create an upload key](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#create-an-upload-key>)[Update gradle variables](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#update-gradle-variables>)[Add signing config to build.gradle](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#add-signing-config-to-buildgradle>)[Generate release Android Application Bundle (aab)](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#generate-release-android-application-bundle-aab>)[Manual app submission to Google Play Console](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#manual-app-submission-to-google-play-console>)[iOS](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#ios>)[Prerequisites](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#prerequisites-1>)[Open iOS workspace in Xcode](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#open-ios-workspace-in-xcode>)[Configure a release scheme](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#configure-a-release-scheme>)[Build app for release](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#build-app-for-release>)[App submission using App Store Connect](https://docs.expo.dev/guides/local-app-production/</guides/local-app-production/#app-submission-using-app-store-connect>)
