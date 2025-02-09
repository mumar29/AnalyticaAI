[](https://docs.expo.dev/eas-update/debug/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-update/debug/</>)
[Blog](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-update/debug/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-update/debug/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-update/debug/</>)[Guides](https://docs.expo.dev/eas-update/debug/</guides/overview>)[EAS](https://docs.expo.dev/eas-update/debug/</eas>)[Reference](https://docs.expo.dev/eas-update/debug/</versions/latest>)[Learn](https://docs.expo.dev/eas-update/debug/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-update/debug/</eas>)[Environment variables](https://docs.expo.dev/eas-update/debug/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-update/debug/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-update/debug/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-update/debug/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-update/debug/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-update/debug/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-update/debug/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-update/debug/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-update/debug/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-update/debug/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-update/debug/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-update/debug/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-update/debug/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-update/debug/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-update/debug/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-update/debug/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-update/debug/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-update/debug/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-update/debug/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-update/debug/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-update/debug/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-update/debug/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-update/debug/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-update/debug/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-update/debug/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-update/debug/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-update/debug/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-update/debug/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-update/debug/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
[Debugging](https://docs.expo.dev/eas-update/debug/</eas-update/debug>)[Error recovery](https://docs.expo.dev/eas-update/debug/</eas-update/error-recovery>)
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-update/debug/</eas/metadata>)[Get started](https://docs.expo.dev/eas-update/debug/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-update/debug/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-update/debug/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-update/debug/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-update/debug/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-update/debug/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-update/debug/</eas/json>)[Webhooks](https://docs.expo.dev/eas-update/debug/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-update/debug/</archive>)[Expo Snack](https://docs.expo.dev/eas-update/debug/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-update/debug/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/mailing-list/signup>)
# EAS Update Debugging
[Edit this page](https://docs.expo.dev/eas-update/debug/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/debug.mdx> "Edit content of this page on GitHub")
Learn how to use basic debugging techniques to fix an update issue.
[Edit this page](https://docs.expo.dev/eas-update/debug/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/debug.mdx> "Edit content of this page on GitHub")
This guide shows how to verify our configuration so that we can find the source of problems like an app not showing a published update. It's important to tell the current state of our app at any given time, so EAS Update was built with this in mind. Once we know which updates are running on which builds, we can make changes so that our apps are in the state we expect.
[![How to debug EAS Update](https://i3.ytimg.com/vi/m9PLTr3t3S4/maxresdefault.jpg)How to debug EAS UpdateIn this Expo debugging tutorial, you'll learn how to debug a situation where your build isn't getting an update.](https://docs.expo.dev/eas-update/debug/<https:/www.youtube.com/watch?v=m9PLTr3t3S4>)
> If we are not using EAS Build, our Deployments page will be empty. Follow the guide on [debugging configuration without EAS Build](https://docs.expo.dev/eas-update/debug/</eas-update/debug-advanced#configuration-without-eas-build>) instead.
## Go to the Deployments page[](https://docs.expo.dev/eas-update/debug/<#go-to-the-deployments-page>)
The EAS website has a [Deployments page](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/deployments>) that shows the current state of our app. The term _deployment_ refers to a group of builds and their corresponding updates. If we've made builds and updates with EAS, we can see our project's status on the website in the Deployments tab.
![Deployments tab](https://docs.expo.dev/static/images/eas-update/deployments-website-tab.png)
## Common problems[](https://docs.expo.dev/eas-update/debug/<#common-problems>)
The following section describes common problems and how to fix them. Below is a diagram of how EAS Update works and the spots that are useful to inspect when finding the root cause of an issue. In the following sections, we'll inspect and verify these spots and more.
![Map of debugging spots](https://docs.expo.dev/static/images/eas-update/debug-map.png)
### Unexpected channel[](https://docs.expo.dev/eas-update/debug/<#unexpected-channel>)
![Deployment has unexpected channel](https://docs.expo.dev/static/images/eas-update/deployments-wrong-channel.png)
If the deployment channel is unexpected, it means our build was not built with the correct channel. To fix this, [configure our channel](https://docs.expo.dev/eas-update/debug/</eas-update/debug#configure-channel>) and rebuild our app.
### Unexpected runtime version[](https://docs.expo.dev/eas-update/debug/<#unexpected-runtime-version>)
![Deployment has unexpected runtime version](https://docs.expo.dev/static/images/eas-update/deployments-wrong-runtime.png)
If the deployment runtime version is unexpected, it means our build was not built with the correct runtime version. To fix this, [configure our runtime version](https://docs.expo.dev/eas-update/debug/</eas-update/debug#configure-runtime-version>) and rebuild our app.
### Unexpected branch[](https://docs.expo.dev/eas-update/debug/<#unexpected-branch>)
![Deployment has unexpected branch](https://docs.expo.dev/static/images/eas-update/deployments-wrong-branch.png)
If the deployment has an unexpected branch, we need to [map our channel to the correct branch](https://docs.expo.dev/eas-update/debug/</eas-update/debug#map-channel-to-branch>).
### Missing updates[](https://docs.expo.dev/eas-update/debug/<#missing-updates>)
![Deployment has no updates](https://docs.expo.dev/static/images/eas-update/deployments-no-updates.png)
The displayed deployment does not have any updates. To fix this, [publish an update to the branch](https://docs.expo.dev/eas-update/debug/</eas-update/debug#publish-update>). If an update was already published, check the [Updates page](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/updates>) to make sure it matches the runtime version of our build.
### Missing branch[](https://docs.expo.dev/eas-update/debug/<#missing-branch>)
![Deployment has no branch](https://docs.expo.dev/static/images/eas-update/deployments-no-branch.png)
The displayed deployment has the correct channel, but it is not linked to a branch. To fix this, [map the channel to the correct branch](https://docs.expo.dev/eas-update/debug/</eas-update/debug#map-channel-to-branch>).
### Missing deployment[](https://docs.expo.dev/eas-update/debug/<#missing-deployment>)
If our deployment is not displayed, it means our build is not configured properly for EAS Update. To fix this, [configure our channel](https://docs.expo.dev/eas-update/debug/</eas-update/debug#configure-channel>), [configure our runtime version](https://docs.expo.dev/eas-update/debug/</eas-update/debug#configure-runtime-version>) and verify our [general configuration](https://docs.expo.dev/eas-update/debug/</eas-update/debug-advanced#verifying-app-configuration>). We'll need to rebuild our app after making these changes.
### Automatic roll back when an update crashes[](https://docs.expo.dev/eas-update/debug/<#automatic-roll-back-when-an-update-crashes>)
If everything looks correct on the Deployments page, but your app still shows the previous update or the code embedded with the build, your new update's code may be crashing. This can happen when this new update crashes before the root component renders after the app downloads and applies the new update.
EAS Update is designed to automatically roll back to the previous update if it detects that a new update crashed shortly after launch. See [how EAS Update detects crashes and rolls back to a previous working version](https://docs.expo.dev/eas-update/debug/</eas-update/error-recovery#explaining-the-error-recovery-flow>) for more information.
To diagnose the error causing the update crash:
  * See the [Troubleshooting guide on runtime issues](https://docs.expo.dev/eas-update/debug/</debugging/runtime-issues>) to apply a strategy to identify the error.
  * After identifying the error, publish a new update that fixes the crash to resolve the issue.


A common reason a new update does not work but embedded code does is due to a missing environment variable. See [how environment variables work with EAS Update](https://docs.expo.dev/eas-update/debug/</eas-update/environment-variables>) for more information.
## Solutions[](https://docs.expo.dev/eas-update/debug/<#solutions>)
### Configure channel[](https://docs.expo.dev/eas-update/debug/<#configure-channel>)
To verify that a build has a specific channel, make sure our build profile in eas.json has a channel property:
eas.json
Copy
```
{
 "build": {
  "preview": {
   "distribution": "internal",
   "channel": "preview"
  },
  "production": {
   "channel": "production"
  }
 }
}

```

Then, we can run a command like `eas build --profile preview` to create a build with a channel named "preview".
### Configure runtime version[](https://docs.expo.dev/eas-update/debug/<#configure-runtime-version>)
To verify our runtime version, we make sure our app config (app.json/app.config.js) has a `runtimeVersion` property:
app.json
Copy
```
{
 "expo": {
  "runtimeVersion": {
   "policy": "sdkVersion"
  }
 }
}

```

By default, it is `{ "policy": "sdkVersion" }`, but we can change our runtime to [use a different policy or a specific version](https://docs.expo.dev/eas-update/debug/</eas-update/runtime-versions>). Then, we can run a command like `eas build --profile preview` to create a build with the runtime version we expect.
### Map channel to branch[](https://docs.expo.dev/eas-update/debug/<#map-channel-to-branch>)
If the channel is not mapped to the branch we expect, we can change the link with:
Terminal
Copy
`# eas channel:edit [channel-name] --branch [branch-name]``# Example`
`- ``eas channel:edit production --branch release-1.0`
If our branch is not listed, we can create a new branch with `eas branch:create`.
### Publish update[](https://docs.expo.dev/eas-update/debug/<#publish-update>)
To create and publish an update, we can run the following command:
Terminal
Copy
`- ``eas update`
After publishing, the output will display the branch and the runtime version. This information can help us verify that we're creating an update with the configuration we expect.
## General strategies[](https://docs.expo.dev/eas-update/debug/<#general-strategies>)
Try these strategies before using the more specific ones mentioned in this guide.
### Use `expo-dev-client`[](https://docs.expo.dev/eas-update/debug/<#use-expo-dev-client>)
Create a [development version of our build](https://docs.expo.dev/eas-update/debug/</eas-update/expo-dev-client>). It will help us preview published updates inside a problematic build.
### In-app debugging[](https://docs.expo.dev/eas-update/debug/<#in-app-debugging>)
The `expo-updates` library exports a variety of functions to interact with updates once the app is already running. In certain cases, making a call to fetch an update and seeing an error message can help us narrow down the root cause. We can make a simulator build of the project and manually check to see if updates are available or if there are errors when fetching updates.
  * Print the [Update.Constants](https://docs.expo.dev/eas-update/debug/</versions/latest/sdk/updates#constants>) to verify our configuration.
  * [Examine log entries](https://docs.expo.dev/eas-update/debug/</versions/latest/sdk/updates#updatesreadlogentriesasyncmaxage>) surfaced from the native layer.
  * Fetch and [load updates manually](https://docs.expo.dev/eas-update/debug/</versions/latest/sdk/updates#check-for-updates-manually>).


## Configuration issues[](https://docs.expo.dev/eas-update/debug/<#configuration-issues>)
Our app is still not receiving the expected update despite following the [basic guide](https://docs.expo.dev/eas-update/debug/</eas-update/debug>).
### `expo-updates` configuration[](https://docs.expo.dev/eas-update/debug/<#expo-updates-configuration>)
The `expo-updates` library runs inside an end-user's app and makes requests to an update server to get the latest update.
#### Verifying app configuration[](https://docs.expo.dev/eas-update/debug/<#verifying-app-configuration>)
When we set up EAS Update, we likely ran `eas update:configure` to configure expo-updates to work with EAS Update. This command makes changes to our app config (app.json/app.config.js). Here are the fields we'd expect to see:
  * `runtimeVersion` should be set. By default, it is `{ "policy": "sdkVersion" }`. If our project has android and ios directories, we'll have to set the `runtimeVersion` manually.
  * `updates.url` should be a value like `https://u.expo.dev/your-project-id`, where `your-project-id` matches the ID of our project. We can see this ID on [our website](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D>).
  * `updates.enabled` should not be `false`. It's `true` by default if it is not specified.


Finally, make sure that `expo-updates` is included in package.json. If it's not, run:
Terminal
Copy
`- ``npx expo install expo-updates`
#### Inspecting expo-updates configuration after prebuild[](https://docs.expo.dev/eas-update/debug/<#inspecting-expo-updates-configuration-after-prebuild>)
Whenever we run `eas build`, the `npx expo prebuild` command is run on our project on EAS servers to unpack the android and ios directories that contain native files. This makes it so EAS Build can build any project, whether it includes the native files or not.
If our project does not have android or ios directories, we can make commit any existing changes, then run `npx expo prebuild` to inspect the project state that EAS Build will act on. After running this, look for the following files: android/app/src/main/AndroidManifest.xml and ios/your-project-name/Supporting/Expo.plist.
In each, we expect to see configuration for the EAS Update URL and the runtime version. Here are the properties we'd expect to see in each file:
AndroidManifest.xml
Copy
```
%%placeholder-start%%... %%placeholder-end%%
<meta-data android:name="expo.modules.updates.EXPO_RUNTIME_VERSION" android:value="your-runtime-version-here"/>
<meta-data android:name="expo.modules.updates.EXPO_UPDATE_URL" android:value="https://u.expo.dev/your-project-id-here"/>
%%placeholder-start%%... %%placeholder-end%%

```

Expo.plist
Copy
```
%%placeholder-start%%... %%placeholder-end%%
<key>EXUpdatesRuntimeVersion</key>
<string>your-runtime-version-here</string>
<key>EXUpdatesURL</key>
<string>https://u.expo.dev/your-project-id-here</string>
%%placeholder-start%%... %%placeholder-end%%

```

### Configuration without EAS Build[](https://docs.expo.dev/eas-update/debug/<#configuration-without-eas-build>)
If we aren't using EAS Build, this section will walk through debugging the state of EAS Update in our project. We'll need to look at multiple spots in the system. Below is a diagram of how EAS Update works and the spots that are useful to inspect when finding the root cause of an issue. In the sections following, we'll inspect and verify these spots and more.
![Map of debugging spots](https://docs.expo.dev/static/images/eas-update/debug-map.png)
#### Verify build configuration[](https://docs.expo.dev/eas-update/debug/<#verify-build-configuration>)
Follow the [Building Locally guide](https://docs.expo.dev/eas-update/debug/</eas-update/standalone-service>) to configure our app's channel and runtime version. We'll also need to make sure our [general configuration](https://docs.expo.dev/eas-update/debug/</eas-update/debug-advanced#expo-updates-configuration>) is correct.
#### Verify the channel[](https://docs.expo.dev/eas-update/debug/<#verify-the-channel>)
Builds have a property named `channel`, which EAS Update uses to link to a branch. A channel is often given to multiple platform-specific builds. For instance, we might have an Android build and an iOS build, both with a channel named `"production"`.
Once a build has a channel name, we can make sure that EAS servers know about it by checking the [Channels page](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/channels>).
We'd expect the page to display the same channel name that our build has. If it's not there, we can create the channel on EAS servers with:
Terminal
Copy
`# eas channel:create [channel-name]``# Example`
`- ``eas channel:create production`
#### Verify the channel/branch mapping[](https://docs.expo.dev/eas-update/debug/<#verify-the-channelbranch-mapping>)
There is a link that is defined by the developer between a channel and a branch. When a channel and branch are linked, an app with a channel will get the most recent compatible update on the linked branch.
The [Channels page](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/channels>) will display the channel to branch mapping if it exists.
![Linked branches on the Channels page](https://docs.expo.dev/static/images/eas-update/channels-linked-branches.png)
If the channel is not linked to the branch we expect, we can change the link with:
Terminal
Copy
`# eas channel:edit [channel-name] --branch [branch-name]``# Example`
`- ``eas channel:edit production --branch release-1.0`
#### Verify the update[](https://docs.expo.dev/eas-update/debug/<#verify-the-update>)
Every branch contains a list of updates. When a build makes a call for an update, we find the channel of the build, then the branch linked to that channel. Once the branch is found, EAS will return the most recent compatible update on that branch. A build and an update are compatible when they share the same runtime version and platform.
To inspect which updates are on a branch, we can go to the [Branches page](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/branches>) and choose our branch of interest.
The Branch Detail page will show us a list of updates and their runtime versions and platforms. From this list, we should be able to figure out which update should apply to a given build, by matching the build's runtime version and platform to update's runtime version and platform. The most recent update that is compatible will be available for a build to download and execute.
![List of updates on the Branch Detail page](https://docs.expo.dev/static/images/eas-update/branch-update-list.png)
## Debugging EAS Update[](https://docs.expo.dev/eas-update/debug/<#debugging-eas-update>)
After verifying `expo-updates` and EAS Update configurations, we can move on to debugging how our project is interacting with updates.
### In-app debugging[](https://docs.expo.dev/eas-update/debug/<#in-app-debugging-1>)
The `expo-updates` library exports a variety of functions to interact with updates once the app is already running. In certain cases, making a call to fetch an update and seeing an error message can help us narrow down the root cause. We can make a simulator build of the project and manually check to see if updates are available or if there are errors when fetching updates. See the code example to [check for updates manually](https://docs.expo.dev/eas-update/debug/</versions/latest/sdk/updates#use-expo-updates-with-a-custom-server>).
### Inspecting a build manually[](https://docs.expo.dev/eas-update/debug/<#inspecting-a-build-manually>)
When building a project into an app, there can be multiple steps that alter the output of `npx expo prebuild`. After making a build, it is possible to open the build's contents and inspect native files to see its final configuration.
Here are the steps for inspecting an iOS Simulator build on macOS:
  1. Create an iOS Simulator build of the app using EAS Build. This is done by adding `"ios": { "simulator": true }` to a build profile.
  2. Once the build is finished, download the result and unzip it.
  3. Then, right click on the app and select "Show Package Contents".
  4. From there, we can inspect the Expo.plist file.


Inside the Expo.plist file, we expect to see the following configurations:
Expo.plist
Copy
```
%%placeholder-start%%... %%placeholder-end%%
<key>EXUpdatesRequestHeaders</key>
<dict>
 <key>expo-channel-name</key>
 <string>your-channel-name</string>
</dict>
<key>EXUpdatesRuntimeVersion</key>
<string>your-runtime-version</string>
<key>EXUpdatesURL</key>
<string>https://u.expo.dev/your-project-id</string>
%%placeholder-start%%... %%placeholder-end%%

```

### Inspecting manifests manually[](https://docs.expo.dev/eas-update/debug/<#inspecting-manifests-manually>)
When an update is published with EAS Update, we create a manifest that end-user app's request. The manifest has information like which assets and versions are needed for an update to load. We can inspect the manifest by going to a specific URL in a browser or by using `curl`.
Inside our project's app config (app.json/app.config.json), the URL we can GET is under `updates.url`.
This `url` is EAS' "<https://u.expo.dev>" domain, followed by the project's ID on EAS servers. If we go to the URL directly, we'll see an error about missing a header. We can view a manifest by adding three query parameters to the URL: `runtime-version`, `channel-name`, and `platform`. If we published an update with a runtime version of `1.0.0`, a channel of `production` and a platform of `android`, the full URL we could visit would be similar to this:
```
https://u.expo.dev/your-project-id?runtime-version=1.0.0&channel-name=production&platform=android

```

### Viewing network requests[](https://docs.expo.dev/eas-update/debug/<#viewing-network-requests>)
Another way to identify the root cause of an issue is to look at the network requests that the app is making to EAS servers, then viewing the responses. We recommend using a program like [Proxyman](https://docs.expo.dev/eas-update/debug/<https:/proxyman.io/>) or [Charles Proxy](https://docs.expo.dev/eas-update/debug/<https:/www.charlesproxy.com/>) to watch network requests from our app.
With either program, we'll need to follow their instructions for installing an SSL certificate, so that the program can decode HTTPS requests. Once that's set up in a simulator or on an actual device, we can open our app and watch requests.
The requests we're interested in are from <https://u.expo.dev> and <https://assets.eascdn.net>. Responses from <https://u.expo.dev> will contain an update manifest, which specifies which assets the app will need to fetch to run the update. Responses from <https://assets.eascdn.net> will contain assets, like images, font files, and so on, that are required for the update to run.
When inspecting the request to <https://u.expo.dev>, we can look for the following request headers:
  * `Expo-Runtime-Version`: this should make the runtime version we made our build and update with.
  * `expo-channel-name`: this should be the channel name specified in the eas.json build profile.
  * `Expo-Platform`: this should be either "android" or "ios".


As for all requests, we expect to see either `200` response codes, or `304` if nothing has changed.
Below is a screenshot showing the request of a successful update manifest request:
![Successful manifest request](https://docs.expo.dev/static/images/eas-update/network-request.png)
## Runtime issues[](https://docs.expo.dev/eas-update/debug/<#runtime-issues>)
We are able to load the expected update but our project is displaying unexpected behavior.
### Debugging of native code while loading the app through expo-updates[](https://docs.expo.dev/eas-update/debug/<#debugging-of-native-code-while-loading-the-app-through-expo-updates>)
By default, we need to make a release build for `expo-updates` to be enabled and to load updates rather than reading from a development server. This is because debug builds behave like normal React Native project debug builds.
To make it easier to test and debug native code in an environment that is closer to production, follow the steps below to create a debug build of the app with `expo-updates` enabled.
We also provide a [step-by-step guide to try out EAS Update quickly](https://docs.expo.dev/eas-update/debug/</eas-update/standalone-service>) in a local development environment using Android Studio or Xcode, with either release or debug builds of the app.
#### Android local builds[](https://docs.expo.dev/eas-update/debug/<#android-local-builds>)
  * Set the debug environment variable: `export EX_UPDATES_NATIVE_DEBUG=1`
  * [Ensure the desired channel is set in your AndroidManifest.xml](https://docs.expo.dev/eas-update/debug/</eas-update/getting-started#configure-the-update-channel>)
  * Execute a [debug build](https://docs.expo.dev/eas-update/debug/</debugging/runtime-issues#native-debugging>) of the app with Android Studio or from the command line.


#### iOS local builds[](https://docs.expo.dev/eas-update/debug/<#ios-local-builds>)
  * Set the debug environment variable: `export EX_UPDATES_NATIVE_DEBUG=1`
  * Reinstall pods with `npx pod-install`. The `expo-updates` podspec now detects this environment variable, and makes changes so that the debug code that would normally load from the Metro packager is bypassed, and the app is built with the EXUpdates bundle and other dependencies needed to load updates from EAS.
  * [Ensure the desired channel is set in our Expo.plist](https://docs.expo.dev/eas-update/debug/</eas-update/getting-started#configure-the-update-channel>)
  * Modify the application Xcode project file to force bundling of the application JavaScript for both release and debug builds: 
Terminal
Copy
`- ``sed -i '' 's/SKIP_BUNDLING/FORCE_BUNDLING/g;' ios/<project name>.xcodeproj/project.pbxproj`
  * Execute a [debug build](https://docs.expo.dev/eas-update/debug/</debugging/runtime-issues#native-debugging>) of the app with Xcode or from the command line.


#### EAS Build[](https://docs.expo.dev/eas-update/debug/<#eas-build>)
Alternatively, we can use EAS to create a debug build where `expo-updates` is enabled. The environment variable is set in eas.json, as shown in the example below:
eas.json
Copy
```
{
 "build": {
  "preview_debug": {
   "env": {
    "EX_UPDATES_NATIVE_DEBUG": "1"
   },
   "android": {
    "distribution": "internal",
    "withoutCredentials": true,
    "gradleCommand": ":app:assembleDebug"
   },
   "ios": {
    "simulator": true,
    "buildConfiguration": "Debug"
   },
   "channel": "preview_debug"
  }
 }
}

Show More

```

## Publishing issues[](https://docs.expo.dev/eas-update/debug/<#publishing-issues>)
We are not able to publish an update, or parts of our update are not being published as expected.
### Inspecting the latest update locally[](https://docs.expo.dev/eas-update/debug/<#inspecting-the-latest-update-locally>)
When we publish an update with EAS Update, it creates a /dist directory in the root of our project locally, which includes the assets that were uploaded as a part of the update.
![Dist directory](https://docs.expo.dev/static/images/eas-update/dist.png)
### Viewing all assets included in an update[](https://docs.expo.dev/eas-update/debug/<#viewing-all-assets-included-in-an-update>)
It may be helpful to see which assets are included in our update bundle. We can see a list of named assets by running:
Terminal
Copy
`- ``npx expo export`
## Mitigation steps[](https://docs.expo.dev/eas-update/debug/<#mitigation-steps>)
Once we've found the root cause of the issue, there are various mitigation steps we might want to take. One of the most common problems is pushing an update that has a bug inside it. When this happens, we can re-publish a previous update to resolve the issue.
### Re-publishing a previous update[](https://docs.expo.dev/eas-update/debug/<#re-publishing-a-previous-update>)
The fastest way to "undo" a bad publish is to re-publish a known good update. Imagine we have a branch with two updates:
Terminal
`branch: "production"``updates: [`` update 2 (id: xyz2) "fixes typo"   // bad update`` update 1 (id: abc1) "updates color" // good update``]`
If "update 2" turned out to be a bad update, we can re-publish "update 1" with a command like this:
Terminal
`# eas update:republish --group [update-group-id]``# eas update:republish --branch [branch-name]``# Example`
`- ``eas update:republish --group abc1`
`- ``eas update:republish --branch production`
The example command above would result in a branch that now appears like this:
Terminal
`branch: "production"``updates: [`` update 3 (id: def3) "updates color" // re-publish of update 1 (id: abc1)`` update 2 (id: xyz2) "fixes typo"   // bad update`` update 1 (id: abc1) "updates color" // good update``]`
Since "update 3" is now the most recent update on the "production" branch, all users who query for an update in the future will receive "update 3" instead of the bad update, "update 2".
While this will prevent all new users from seeing the bad update, users who've already received the bad update will run it until they can download the latest update. Since mobile networks are not always able to download the most recent update, sometimes users may run a bad update for a long time. When viewing error logs for our app, it's normal to see a lingering long tail of errors as our users' apps get the most recent update or build. We'll know we solved the bug when we see the error rate decline dramatically; however, it likely will not disappear completely if we have a diverse user base across many locations and mobile networks.
[Previous (EAS Update - Concepts)Runtime versions](https://docs.expo.dev/eas-update/debug/</eas-update/runtime-versions>)[Next (EAS Update - Troubleshooting)Error recovery](https://docs.expo.dev/eas-update/debug/</eas-update/error-recovery>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-update/debug/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-update/debug/<https:/github.com/expo/expo/edit/main/docs/pages/eas-update/debug.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-update/debug/<https:/expo.dev/privacy>).
On this page
[Go to the Deployments page](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#go-to-the-deployments-page>)[Common problems](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#common-problems>)[Unexpected channel](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#unexpected-channel>)[Unexpected runtime version](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#unexpected-runtime-version>)[Unexpected branch](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#unexpected-branch>)[Missing updates](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#missing-updates>)[Missing branch](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#missing-branch>)[Missing deployment](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#missing-deployment>)[Automatic roll back when an update crashes](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#automatic-roll-back-when-an-update-crashes>)[Solutions](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#solutions>)[Configure channel](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#configure-channel>)[Configure runtime version](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#configure-runtime-version>)[Map channel to branch](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#map-channel-to-branch>)[Publish update](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#publish-update>)[General strategies](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#general-strategies>)[Use expo-dev-client](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#use-expo-dev-client>)[In-app debugging](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#in-app-debugging>)[Configuration issues](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#configuration-issues>)[expo-updates configuration](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#expo-updates-configuration>)[Configuration without EAS Build](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#configuration-without-eas-build>)[Debugging EAS Update](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#debugging-eas-update>)[In-app debugging](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#in-app-debugging-1>)[Inspecting a build manually](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#inspecting-a-build-manually>)[Inspecting manifests manually](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#inspecting-manifests-manually>)[Viewing network requests](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#viewing-network-requests>)[Runtime issues](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#runtime-issues>)[Debugging of native code while loading the app through expo-updates](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#debugging-of-native-code-while-loading-the-app-through-expo-updates>)[Publishing issues](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#publishing-issues>)[Inspecting the latest update locally](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#inspecting-the-latest-update-locally>)[Viewing all assets included in an update](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#viewing-all-assets-included-in-an-update>)[Mitigation steps](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#mitigation-steps>)[Re-publishing a previous update](https://docs.expo.dev/eas-update/debug/</eas-update/debug/#re-publishing-a-previous-update>)
