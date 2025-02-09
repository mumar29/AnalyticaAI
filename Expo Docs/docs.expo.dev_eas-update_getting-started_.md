[](https://docs.expo.dev/eas-update/getting-started/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-update/getting-started/</>)
[Blog](https://docs.expo.dev/eas-update/getting-started/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-update/getting-started/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-update/getting-started/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-update/getting-started/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-update/getting-started/</>)[Guides](https://docs.expo.dev/eas-update/getting-started/</guides/overview>)[EAS](https://docs.expo.dev/eas-update/getting-started/</eas>)[Reference](https://docs.expo.dev/eas-update/getting-started/</versions/latest>)[Learn](https://docs.expo.dev/eas-update/getting-started/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-update/getting-started/</eas>)[Environment variables](https://docs.expo.dev/eas-update/getting-started/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-update/getting-started/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-update/getting-started/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-update/getting-started/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-update/getting-started/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-update/getting-started/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-update/getting-started/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-update/getting-started/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-update/getting-started/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-update/getting-started/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-update/getting-started/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-update/getting-started/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-update/getting-started/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-update/getting-started/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-update/getting-started/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-update/getting-started/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-update/getting-started/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-update/getting-started/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-update/getting-started/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-update/getting-started/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-update/getting-started/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-update/getting-started/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-update/getting-started/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-update/getting-started/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-update/getting-started/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-update/getting-started/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-update/getting-started/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-update/getting-started/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-update/getting-started/</eas/metadata>)[Get started](https://docs.expo.dev/eas-update/getting-started/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-update/getting-started/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-update/getting-started/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-update/getting-started/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-update/getting-started/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-update/getting-started/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-update/getting-started/</eas/json>)[Webhooks](https://docs.expo.dev/eas-update/getting-started/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-update/getting-started/</archive>)[Expo Snack](https://docs.expo.dev/eas-update/getting-started/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-update/getting-started/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-update/getting-started/<https:/expo.dev/mailing-list/signup>)
# Get started with EAS Update
[Edit this page](https://docs.expo.dev/eas-update/getting-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/getting-started.mdx> "Edit content of this page on GitHub")
Learn how to get started with the setup required to configure and use EAS Update in your project.
[Edit this page](https://docs.expo.dev/eas-update/getting-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/getting-started.mdx> "Edit content of this page on GitHub")
Setting up EAS Update allows you to push critical bug fixes and improvements that your users need right away. This guide will walk you through the process of setting up EAS Update in a new or existing project.
> If you plan to use EAS Update with EAS Build, we recommend following the [EAS Build setup guide](https://docs.expo.dev/eas-update/getting-started/</build/setup>) before proceeding here. That said, [you can use EAS Update without any other EAS services](https://docs.expo.dev/eas-update/getting-started/</eas-update/standalone-service>).
## Prerequisites[](https://docs.expo.dev/eas-update/getting-started/<#prerequisites>)
An Expo user account[](https://docs.expo.dev/eas-update/getting-started/<#an-expo-user-account>)
EAS Update is available to anyone with an Expo account, regardless of whether you pay for EAS or use the Free plan. You can sign up at [expo.dev/signup](https://docs.expo.dev/eas-update/getting-started/<https:/expo.dev/signup>).
Paid subscribers can publish updates to more users and use more bandwidth and storage. Learn more about different plans and benefits at [EAS pricing](https://docs.expo.dev/eas-update/getting-started/<https:/expo.dev/pricing>).
A React Native project[](https://docs.expo.dev/eas-update/getting-started/<#a-react-native-project>)
Don't have a project yet? No problem. It's quick and easy to create a "Hello world" app that you can use with this guide.
Run the following command to create a new project:
Terminal
Copy
`- ``npx create-expo-app my-app`
EAS Update also works well with projects created by `npx create-react-native-app`, `npx react-native`, `ignite-cli`, and other project bootstrapping tools.
Your project must use Expo CLI and extend the Expo Metro Config[](https://docs.expo.dev/eas-update/getting-started/<#your-project-must-use-expo-cli-and>)
If you already run your project with `npx expo [command]` (for example, if you created it with `npx create-expo-app`) then you're all set.
If you don't have the `expo` package in your project yet, then install it by running the command below and [opt in to using Expo CLI and Metro Config](https://docs.expo.dev/eas-update/getting-started/</bare/installing-expo-modules#configure-expo-cli-for-bundling-on-android-and-ios>):
Terminal
Copy
`- ``npx install-expo-modules@latest`
If the command fails, refer to the [Installing Expo modules](https://docs.expo.dev/eas-update/getting-started/</bare/installing-expo-modules#manual-installation>) guide.
1
## Install the latest EAS CLI[](https://docs.expo.dev/eas-update/getting-started/<#install-the-latest-eas-cli>)
EAS CLI is the command line app you will use to interact with EAS services from your terminal. To install it, run the command:
Terminal
Copy
`- ``npm install --global eas-cli`
You can also use the above command to check if a new version of EAS CLI is available. We encourage you to always stay up to date with the latest version.
> We recommend using `npm` instead of `yarn` for global package installations. You may alternatively use `npx eas-cli@latest`. Remember to use that instead of `eas` whenever it's called for in the documentation.
2
## Log in to your Expo account[](https://docs.expo.dev/eas-update/getting-started/<#log-in-to-your-expo-account>)
If you are already signed in to an Expo account using Expo CLI, you can skip the steps described in this section. If you are not, run the following command to log in:
Terminal
Copy
`- ``eas login`
You can check whether you are logged in by running `eas whoami`.
3
## Configure your project[](https://docs.expo.dev/eas-update/getting-started/<#configure-your-project>)
Navigate to your project directory in your terminal and run the following command:
Terminal
Copy
`# Initialize your project with EAS Update`
`- ``eas update:configure`
What does this command do?[](https://docs.expo.dev/eas-update/getting-started/<#what-does-this-command-do>)
The `eas update:configure` command will update your app.json file with the `runtimeVersion` and `updates.url` properties, and add the `extra.eas.projectId` field if your project wasn't using any EAS services previously.
When you run `eas update:configure` in a project that doesn't use [CNG](https://docs.expo.dev/eas-update/getting-started/</workflow/continuous-native-generation>), you'll see the following changes to your native projects:
#### Android[](https://docs.expo.dev/eas-update/getting-started/<#android>)
Inside the android/app/src/main/AndroidManifest.xml file, you'll see the following additions:
android/app/src/main/AndroidManifest.xml
Copy
```
<meta-data android:name="expo.modules.updates.EXPO_UPDATE_URL" android:value="https://u.expo.dev/your-project-id"/>
<meta-data android:name="expo.modules.updates.EXPO_RUNTIME_VERSION" android:value="@string/expo_runtime_version"/>

```

The `EXPO_UPDATE_URL` value should contain your project's ID.
Inside android/app/src/main/res/values/strings.xml, you'll see the `expo_runtime_version` string entry in the `resources` object:
android/app/src/main/res/values/strings.xml
1| 1| <resources>  
---|---|---  
2| 2|  <string name="app_name">MyApp</string>  
3|  <string name="expo_runtime_version">1.0.0</string>  
3| 4| </resources>  
#### iOS[](https://docs.expo.dev/eas-update/getting-started/<#ios>)
Inside ios/project-name/Supporting/Expo.plist, you'll see the following additions:
ios/project-name/Supporting/Expo.plist
Copy
```
<key>EXUpdatesRuntimeVersion</key>
<string>1.0.0</string>
<key>EXUpdatesURL</key>
<string>https://u.expo.dev/your-project-id</string>

```

The `EXUpdatesURL` value should contain your project's ID.
4
## Configure the update channel[](https://docs.expo.dev/eas-update/getting-started/<#configure-the-update-channel>)
The channel property on a build allows you to point updates at specific types of builds. For example, it allows you to publish updates to a preview build without impacting your production deployment.
If you are using EAS Build, `eas update:configure` will set the update `channel` property on the `preview` and `production` profiles in eas.json. Set them manually if you use different profile names.
Example channel configuration in eas.json[](https://docs.expo.dev/eas-update/getting-started/<#example-channel-configuration-in-easjson>)
eas.json
Copy
```
{
 "build": {
  "preview": {
   "channel": "preview"
   // ...
  },
  "production": {
   "channel": "production"
   // ...
  }
 }
}

```

If you are not using EAS Build, then you will need to configure the channel in app.json or in your native projects, depending on whether you use [CNG](https://docs.expo.dev/eas-update/getting-started/</workflow/continuous-native-generation>). When you create a build for a different environment, you will need to modify the channel to ensure your build pulls updates from the correct channel. Learn more using [EAS Update as a standalone service](https://docs.expo.dev/eas-update/getting-started/</eas-update/standalone-service>).
Configure update channels in app.json[](https://docs.expo.dev/eas-update/getting-started/<#configure-update-channels-in-appjson>)
If you use Continuous Native Generation (CNG), then you can configure the channel with the `updates.requestHeaders` property in your app.json:
app.json
Copy
```
{
 "expo": {
  %%placeholder-start%%... %%placeholder-end%%
  "updates": {
   %%placeholder-start%%... %%placeholder-end%%
   "requestHeaders": {
    "expo-channel-name": "your-channel-name"
   }
   %%placeholder-start%%... %%placeholder-end%%
  }
  %%placeholder-start%%... %%placeholder-end%%
 }
}

```

The configuration will be applied the next time you run `npx expo prebuild`.
Configure update channels in an Android native project[](https://docs.expo.dev/eas-update/getting-started/<#configure-update-channels-in-an-android-native>)
In AndroidManifest.xml, you will need to add replace `your-channel-name` with the channel that matches your project:
android/app/src/main/AndroidManifest.xml
Copy
```
<meta-data android:name="expo.modules.updates.UPDATES_CONFIGURATION_REQUEST_HEADERS_KEY" android:value="{&quot;expo-channel-name&quot;:&quot;your-channel-name&quot;}"/>

```

Configure update channels in an iOS native project[](https://docs.expo.dev/eas-update/getting-started/<#configure-update-channels-in-an-ios-native>)
In Expo.plist, you'll need to add the following, replacing `your-channel-name` with the channel that matches your project:
ios/project-name/Supporting/Expo.plist
Copy
```
<key>EXUpdatesRequestHeaders</key>
<dict>
 <key>expo-channel-name</key>
 <string>your-channel-name</string>
</dict>

```

5
## Create a build for the project[](https://docs.expo.dev/eas-update/getting-started/<#create-a-build-for-the-project>)
You need to create a build for Android or iOS. We recommend creating a build with the `preview` build profile first. See [Create your first build](https://docs.expo.dev/eas-update/getting-started/</build/setup>) on how to get started and set up [Internal distribution](https://docs.expo.dev/eas-update/getting-started/</build/internal-distribution#setting-up-internal-distribution>) for your device or simulator.
Once you have a build running on your device or a simulator, you are ready to send an update.
6
## Make changes locally[](https://docs.expo.dev/eas-update/getting-started/<#make-changes-locally>)
After creating the build, you are ready to iterate on the project. Start a local development server with the following command:
Terminal
Copy
`- ``npx expo start`
Then, make any desired changes to your project's JavaScript, styling, or image assets.
7
## Publish an update[](https://docs.expo.dev/eas-update/getting-started/<#publish-an-update>)
Publishing an update allows:
  * Fixing bugs and quickly updating non-native parts of a project instead of creating a new build
  * [Sharing a preview version of an app](https://docs.expo.dev/eas-update/getting-started/</review/overview>) using internal distribution


To publish an update with changes from your project, use the `eas update` command, and specify a name for the channel and a `message` to describe the update:
Terminal
Copy
`- ``eas update --channel [channel-name] --message "[message]"`
How does publishing an update work?[](https://docs.expo.dev/eas-update/getting-started/<#how-does-publishing-an-update-work>)
When you publish an update with the `eas update` command, it generates a new update bundle and uploads it to the EAS servers. The channel name is used to locate the correct branch to publish a new update from other update branches. It is similar to how Git commit works, where every commit is on a Git branch.
For example, when an app is set to pull updates from the `preview` channel, you can publish an update for that build with `eas update --channel preview`. This will create a branch (called `preview` by default) on the `preview` channel. Behind the scenes, this command runs `npx expo export` to generate a dist directory and create a local update bundle. This update bundle is uploaded to EAS Update servers.
[In-depth guide on how EAS Update worksDive deep and learn how EAS Update works.](https://docs.expo.dev/eas-update/getting-started/</eas-update/how-it-works>)
8
## Test the update[](https://docs.expo.dev/eas-update/getting-started/<#test-the-update>)
After the update is uploaded to EAS Update, you can use one of the following methods to test the update:
  * Use the Extensions tab in a [development build](https://docs.expo.dev/eas-update/getting-started/</eas-update/expo-dev-client>) to load the update.
  * Use [Expo Orbit](https://docs.expo.dev/eas-update/getting-started/</review/with-orbit>) to install and launch the update in a development build.
  * Implement a custom strategy with [Updates API](https://docs.expo.dev/eas-update/getting-started/</versions/latest/sdk/updates>) and [app config](https://docs.expo.dev/eas-update/getting-started/</versions/latest/config/app#updates>) to load updates in the app programmatically.
  * Manually test the update by force closing and reopening a release build of your app up to two times to download and apply the update. Updates for non-development builds (preview or production) are automatically downloaded to the device in the background when the app starts up and makes a request for any new updates. The update will be applied after it is downloaded and the app is restarted.

Something not working?[](https://docs.expo.dev/eas-update/getting-started/<#something-not-working>)
If your app is not updating as expected, see the [debugging guide](https://docs.expo.dev/eas-update/getting-started/</eas-update/debug>) for techniques to validate your configuration.
## Next steps[](https://docs.expo.dev/eas-update/getting-started/<#next-steps>)
[Previewing updatesLearn how to iterate quickly by sharing updates for QA and testing.](https://docs.expo.dev/eas-update/getting-started/</eas-update/develop-faster>) [Deploying updatesLearn about different deployment patterns for your project when using EAS Update.](https://docs.expo.dev/eas-update/getting-started/</eas-update/deployment>)
[Previous (EAS Update)Introduction](https://docs.expo.dev/eas-update/getting-started/</eas-update/introduction>)[Next (EAS Update - Preview)Preview updates](https://docs.expo.dev/eas-update/getting-started/</eas-update/develop-faster>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-update/getting-started/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-update/getting-started/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/getting-started.mdx>)
  * Last updated on December 13, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-update/getting-started/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#prerequisites>)[Install the latest EAS CLI](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#install-the-latest-eas-cli>)[Log in to your Expo account](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#log-in-to-your-expo-account>)[Configure your project](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#configure-your-project>)[Configure the update channel](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#configure-the-update-channel>)[Create a build for the project](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#create-a-build-for-the-project>)[Make changes locally](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#make-changes-locally>)[Publish an update](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#publish-an-update>)[Test the update](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#test-the-update>)[Next steps](https://docs.expo.dev/eas-update/getting-started/</eas-update/getting-started/#next-steps>)
