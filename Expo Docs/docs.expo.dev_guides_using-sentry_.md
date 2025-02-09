[](https://docs.expo.dev/guides/using-sentry/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/using-sentry/</>)
[Blog](https://docs.expo.dev/guides/using-sentry/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/using-sentry/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/using-sentry/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/using-sentry/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/using-sentry/</>)[Guides](https://docs.expo.dev/guides/using-sentry/</guides/overview>)[EAS](https://docs.expo.dev/guides/using-sentry/</eas>)[Reference](https://docs.expo.dev/guides/using-sentry/</versions/latest>)[Learn](https://docs.expo.dev/guides/using-sentry/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/using-sentry/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/using-sentry/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/using-sentry/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/using-sentry/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/using-sentry/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/using-sentry/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/using-sentry/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/using-sentry/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/using-sentry/</router/introduction>)[Installation](https://docs.expo.dev/guides/using-sentry/</router/installation>)[Create pages](https://docs.expo.dev/guides/using-sentry/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/using-sentry/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/using-sentry/</router/layouts>)[Error handling](https://docs.expo.dev/guides/using-sentry/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/using-sentry/</modules/overview>)[Get started](https://docs.expo.dev/guides/using-sentry/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/using-sentry/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/using-sentry/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/using-sentry/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/using-sentry/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/using-sentry/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/using-sentry/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/using-sentry/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/using-sentry/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/using-sentry/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/using-sentry/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/using-sentry/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/using-sentry/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/using-sentry/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/using-sentry/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/using-sentry/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/using-sentry/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/using-sentry/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/using-sentry/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/using-sentry/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/using-sentry/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/using-sentry/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/using-sentry/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/using-sentry/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/using-sentry/</archive>)[Expo Snack](https://docs.expo.dev/guides/using-sentry/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/using-sentry/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/using-sentry/<https:/expo.dev/mailing-list/signup>)
# Using Sentry
[Edit this page](https://docs.expo.dev/guides/using-sentry/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-sentry.mdx> "Edit content of this page on GitHub")
A guide on installing and configuring Sentry for crash reporting.
[Edit this page](https://docs.expo.dev/guides/using-sentry/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-sentry.mdx> "Edit content of this page on GitHub")
[Sentry](https://docs.expo.dev/guides/using-sentry/<http:/getsentry.com/>) is a crash reporting platform that provides you with real-time insight into production deployments with info to reproduce and fix crashes.
It notifies you of exceptions or errors that your users run into while using your app and organizes them for you on a web dashboard. Reported exceptions include stacktraces, device info, version, and other relevant context automatically. You can also provide additional context that is specific to your application such as the current route and user id.
#### Platform compatibility[](https://docs.expo.dev/guides/using-sentry/<#platform-compatibility>)
Android Device| Android Emulator| iOS Device| iOS Simulator| Web  
---|---|---|---|---  
## Install and configure Sentry[](https://docs.expo.dev/guides/using-sentry/<#install-and-configure-sentry>)
SDK 50 and above
SDK 49 and below
1
### Sign up for a Sentry account and create a project[](https://docs.expo.dev/guides/using-sentry/<#sign-up-for-a-sentry-account-and-create-a-project>)
Before proceeding with installing Sentry, you'll need to make sure you have created a Sentry account and project:
1.1
[Sign up for Sentry](https://docs.expo.dev/guides/using-sentry/<https:/sentry.io/signup/>) (the free tier supports up to 5,000 events per month), and create a project in your Dashboard. Take note of your organization slug, project name, and DSN as you'll need them later:
  * organization slug is available in your Organization settings tab
  * project name is available in your project's Settings > Projects tab (find it in the list)
  * DSN is available in your project's Settings > Projects > Project name > Client Keys (DSN) tab.


1.2
Go to the [Developer Settings > Auth Tokens](https://docs.expo.dev/guides/using-sentry/<https:/sentry.io/settings/auth-tokens/>) page and create a new [Organization Auth Token](https://docs.expo.dev/guides/using-sentry/<https:/docs.sentry.io/account/auth-tokens/#organization-auth-tokens>). The token is automatically scoped for Source Map Upload and Release Creation. Save it.
Once you have each of these: organization slug, project name, DSN, and auth token, you're all set to proceed.
2
### Install @sentry/react-native[](https://docs.expo.dev/guides/using-sentry/<#install-sentryreact-native>)
Run the following command in your project directory to install the official React Native library from the Sentry team:
Terminal
Copy
`- ``npx expo install @sentry/react-native`
3
### App configuration[](https://docs.expo.dev/guides/using-sentry/<#app-configuration>)
Configuring `@sentry/react-native` can be done through the config plugin. Add the plugin to your project's [app config](https://docs.expo.dev/guides/using-sentry/</workflow/configuration>) file:
app.json
Copy
```
{
 "expo": {
  "plugins": [
   [
    "@sentry/react-native/expo",
    {
     "organization": "sentry org slug, or use the `SENTRY_ORG` environment variable",
     "project": "sentry project name, or use the `SENTRY_PROJECT` environment variable",
     // If you are using a self-hosted instance, update the value of the url property
     // to point towards your self-hosted instance. For example, https://self-hosted.example.com/.
     "url": "https://sentry.io/"
    }
   ]
  ]
 }
}

```

Next, in an environment where you want to create releases and upload sourcemaps to Sentry, you will need to set the `SENTRY_AUTH_TOKEN` environment variable to your [Sentry auth token](https://docs.expo.dev/guides/using-sentry/<https:/docs.sentry.io/product/cli/configuration/>). If you are using EAS Build, you can set the environment variable by [creating a secret named SENTRY_AUTH_TOKEN](https://docs.expo.dev/guides/using-sentry/</build-reference/variables#using-secrets-in-environment-variables>).
> The Sentry auth token should be stored securely. Do not commit it to a public repository, and treat it as you would any other sensitive API key.
Are you using this library in a bare React Native app?[](https://docs.expo.dev/guides/using-sentry/<#are-you-using-this-library-in-a>)
If you do not use [Continuous Native Generation (CNG)](https://docs.expo.dev/guides/using-sentry/</workflow/continuous-native-generation>), then you should use the `@sentry/wizard`[](https://docs.expo.dev/guides/using-sentry/<https:/docs.sentry.io/platforms/react-native/#install>).
4
### Update Metro configuration[](https://docs.expo.dev/guides/using-sentry/<#update-metro-configuration>)
Sentry hooks into Metro to inject a "debug ID" into your source maps. This debug ID is used to associate source maps with releases. To enable this, you need to add the following to your metro.config.js (if you don't have the file yet, create it in the root of your project):
metro.config.js
Copy
```
// This replaces `const { getDefaultConfig } = require('expo/metro-config');`
const { getSentryExpoConfig } = require('@sentry/react-native/metro');
// This replaces `const config = getDefaultConfig(__dirname);`
const config = getSentryExpoConfig(__dirname);
module.exports = config;

```

5
### Initialize Sentry[](https://docs.expo.dev/guides/using-sentry/<#initialize-sentry>)
Add the following to your app's main file such as App.js:
```
import * as Sentry from '@sentry/react-native';
Sentry.init({
 dsn: 'YOUR DSN HERE',
 debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

```

Now wrap the root component of your app with Sentry. This may be App.js or index.js depending on your project. If you are using Expo Router, see the example configuration in the [Usage with Expo Router](https://docs.expo.dev/guides/using-sentry/</guides/using-sentry#usage-with-expo-router>) section below.
```
import * as Sentry from '@sentry/react-native';
// Your App component here
export default Sentry.wrap(App);

```

6
### Verify the configuration[](https://docs.expo.dev/guides/using-sentry/<#verify-the-configuration>)
Create a new release build of your app and verify that it uploads source maps correctly. You may want to add a button in your app to test that it is working and sourcemaps are wired up as expected, for example:
```
import { Button } from 'react-native';
// Inside some component
<Button title="Press me" onPress={() => { throw new Error('Hello, again, Sentry!'); }}/>

```

## Usage with Expo Router[](https://docs.expo.dev/guides/using-sentry/<#usage-with-expo-router>)
If your app uses [Expo Router](https://docs.expo.dev/guides/using-sentry/</router/introduction>), then you can configure Sentry to automatically capture the current route and pass it along with your error reports. To set this up, configure Sentry in the [Root Layout route](https://docs.expo.dev/guides/using-sentry/</router/advanced/root-layout>) and add the navigation integration.
Example configuration that instruments Sentry for Expo Router[](https://docs.expo.dev/guides/using-sentry/<#example-configuration-that-instruments-sentry-for-expo>)
app/_layout.tsx
Copy
```
import { Slot, useNavigationContainerRef } from 'expo-router';
import { useEffect } from 'react';
import * as Sentry from '@sentry/react-native';
import { isRunningInExpoGo } from 'expo';
// Construct a new integration instance. This is needed to communicate between the integration and React
const navigationIntegration = Sentry.reactNavigationIntegration({
 enableTimeToInitialDisplay: !isRunningInExpoGo(),
});
Sentry.init({
 dsn: 'YOUR DSN HERE',
 debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
 tracesSampleRate: 1.0, // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing. Adjusting this value in production.
 integrations: [
  // Pass integration
  navigationIntegration,
 ],
 enableNativeFramesTracking: !isRunningInExpoGo(), // Tracks slow and frozen frames in the application
});
function RootLayout() {
 // Capture the NavigationContainer ref and register it with the integration.
 const ref = useNavigationContainerRef();
 useEffect(() => {
  if (ref?.current) {
   navigationIntegration.registerNavigationContainer(ref);
  }
 }, [ref]);
 return <Slot />;
}
// Wrap the Root Layout route component with `Sentry.wrap` to capture gesture info and profiling data.
export default Sentry.wrap(RootLayout);

Show More

```

## Usage with EAS Build[](https://docs.expo.dev/guides/using-sentry/<#usage-with-eas-build>)
Ensure that `SENTRY_AUTH_TOKEN` is set in your build environment, and Sentry will automatically upload source maps for you. If you use environment variables rather than properties in your app config, ensure that those are set as well.
Using the above instructions, no additional work is needed to integrate Sentry into your project when using EAS Build.
## Usage with EAS Update[](https://docs.expo.dev/guides/using-sentry/<#usage-with-eas-update>)
After running `eas update`, upload the source maps to Sentry:
Terminal
Copy
`# Pass in the "dist" directory generated by `eas update` to the upload script`
`- ``npx sentry-expo-upload-sourcemaps dist`
That's it! Errors for your updates will now be properly symbolicated in Sentry.
Do you want to publish an update and the sourcemaps in one command?[](https://docs.expo.dev/guides/using-sentry/<#do-you-want-to-publish-an-update>)
You can chain the commands together with `&&` to publish an update and upload the sourcemaps in one step:
Terminal
Copy
`- ``eas update --branch <branch> && npx sentry-expo-upload-sourcemaps dist`
Do you want to append additional update-related metadata to error reports?[](https://docs.expo.dev/guides/using-sentry/<#do-you-want-to-append-additional-update-related>)
Configuring Sentry to tag your scope with information about your update allows you to see errors happening on certain updates in the Sentry dashboard.
Add the following snippet in the global scope as early as possible in your application's lifecycle.
```
import * as Sentry from '@sentry/react-native';
import * as Updates from 'expo-updates';
const manifest = Updates.manifest;
const metadata = 'metadata' in manifest ? manifest.metadata : undefined;
const extra = 'extra' in manifest ? manifest.extra : undefined;
const updateGroup = metadata && 'updateGroup' in metadata ? metadata.updateGroup : undefined;
Sentry.init({
 // dsn, release, dist, etc...
});
const scope = Sentry.getGlobalScope();
scope.setTag('expo-update-id', Updates.updateId);
scope.setTag('expo-is-embedded-update', Updates.isEmbeddedLaunch);
if (typeof updateGroup === 'string') {
 scope.setTag('expo-update-group-id', updateGroup);
 const owner = extra?.expoClient?.owner ?? '[account]';
 const slug = extra?.expoClient?.slug ?? '[project]';
 scope.setTag(
  'expo-update-debug-url',
  `https://expo.dev/accounts/${owner}/projects/${slug}/updates/${updateGroup}`
 );
} else if (Updates.isEmbeddedLaunch) {
 // This will be `true` if the update is the one embedded in the build, and not one downloaded from the updates server.
 scope.setTag('expo-update-debug-url', 'not applicable for embedded updates');
}

Show More

```

Once configured, information about the associated update will show up in an error's tag section:
![Sentry update tags](https://docs.expo.dev/static/images/guides/sentry-tags.png)
> `sentry-expo` has been merged into `@sentry/react-native` and is now deprecated. We recommend upgrading to SDK 50 to use `@sentry/react-native` for the best experience. If you're already using `sentry-expo`, [learn how to migrate](https://docs.expo.dev/guides/using-sentry/<https:/expo.fyi/sentry-expo-migration>).
1
### Sign up for a Sentry account and create a project[](https://docs.expo.dev/guides/using-sentry/<#sign-up-for-a-sentry-account-and-create-a-project-1>)
Before getting real-time updates on errors and making your app generally incredible, you'll need to make sure you have created a Sentry project. Here's how to do that:
1.1
[Sign up for Sentry](https://docs.expo.dev/guides/using-sentry/<https:/sentry.io/signup/>) (it's free), and create a project in your Dashboard. Take note of your organization slug, project name, and `DSN` as you'll need them later:
  * organization slug is available in your Organization settings tab
  * project name is available in your project's Settings > Projects tab (find it in the list)
  * `DSN` is available in your project's Settings > Projects > Project name > Client Keys (DSN) tab.


1.2
Go to the [Sentry API section](https://docs.expo.dev/guides/using-sentry/<https:/sentry.io/settings/account/api/auth-tokens/>), and create an auth token. The token requires the scopes: `org:read`, `project:releases`, and `project:write`. Save them.
Once you have each of these: organization slug, project name, DSN, and auth token, you're all set!
2
### Installation[](https://docs.expo.dev/guides/using-sentry/<#installation>)
In your project directory, run:
Terminal
Copy
`- ``npx expo install sentry-expo`
`sentry-expo` also requires some additional Expo module packages. To install them, run:
Terminal
Copy
`- ``npx expo install expo-application expo-constants expo-device @sentry/react-native`
3
### Code[](https://docs.expo.dev/guides/using-sentry/<#code>)
#### Initialization[](https://docs.expo.dev/guides/using-sentry/<#initialization>)
Add the following to your app's main file such as App.js:
```
import * as Sentry from 'sentry-expo';
Sentry.init({
 dsn: 'YOUR DSN HERE',
 enableInExpoDevelopment: true,
 debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

```

#### Usage[](https://docs.expo.dev/guides/using-sentry/<#usage>)
Depending on which platform you are on (mobile or web), use the following methods to access any `@sentry/*` methods for instrumentation, performance, capturing exceptions and so on:
  * For React Native, access any `@sentry/react-native` exports with `Sentry.Native.*`
  * For web, access any `@sentry/browser` exports with `Sentry.Browser.*`

```
// Access any @sentry/react-native exports via:
// Sentry.Native.*
// Access any @sentry/browser exports via:
// Sentry.Browser.*
// The following example uses `captureException()` from Sentry.Native.* to capture errors:
try {
 // your code
} catch (error) {
 Sentry.Native.captureException(error);
}

```

4
### App configuration[](https://docs.expo.dev/guides/using-sentry/<#app-configuration-1>)
Configuring `sentry-expo` is done through the config plugin in your [app config](https://docs.expo.dev/guides/using-sentry/</workflow/configuration>).
Are you using this library in a bare React Native app?[](https://docs.expo.dev/guides/using-sentry/<#are-you-using-this-library-in-a-1>)
If you are in a bare React Native app, you should not use the `plugins` property in app config. Instead, run `yarn sentry-wizard -i reactNative -p ios android` to configure your native projects. This `sentry-wizard` command will add an extra import statement and `Sentry.init` to your project's root file (usually App.js) as shown below. Make sure you remove it, however, keep the `sentry-expo` import and original `Sentry.init` call.
```
import * as Sentry from '@sentry/react-native';
Sentry.init({
 dsn: 'YOUR DSN',
});

```

#### Configure a `postPublish` hook[](https://docs.expo.dev/guides/using-sentry/<#configure-a-postpublish-hook>)
Add `expo.hooks` property to your project's app.json or app.config.js file:
app.json
Copy
```
{
 "expo": {
  %%placeholder-start%%...%%placeholder-end%%
  "hooks": {
   "postPublish": [
    {
     "file": "sentry-expo/upload-sourcemaps",
     "config": {
      "organization": "sentry org slug, or use the `SENTRY_ORG` environment variable",
      "project": "sentry project name, or use the `SENTRY_PROJECT` environment variable"
     }
    }
   ]
  }
 }
}

```

To upload the source map to Sentry, you must create a [Sentry auth token](https://docs.expo.dev/guides/using-sentry/<https:/docs.sentry.io/product/cli/configuration/>). After creating your Sentry auth token [in your account's settings here](https://docs.expo.dev/guides/using-sentry/<https:/sentry.io/settings/account/api/>), you can configure this token through the `SENTRY_AUTH_TOKEN` environment variable in [EAS Build](https://docs.expo.dev/guides/using-sentry/</build-reference/variables#using-secrets-in-environment-variables>).
> The Sentry auth token should be stored securely. Do not commit it to a public repository, and treat it as you would any other sensitive API key.
Besides the auth token, you can also configure the following options through environment variables:
  * organization → `SENTRY_ORG`
  * project → `SENTRY_PROJECT`

Additional configuration options[](https://docs.expo.dev/guides/using-sentry/<#additional-configuration-options>)
In addition to the required config fields above, you can also provide these optional fields:
  * `setCommits`: boolean value indicating whether or not to tell Sentry about which commits are associated with a new release. This allows Sentry to pinpoint which commits likely caused an issue.
  * `deployEnv`: string indicating the deploy environment. This will automatically send an email to Sentry users who have committed to the release that is being deployed.
  * `distribution`: The name/value to give your distribution (you can think of this as a sub-release). Expo defaults to using your `version` from app.json. If you provide a custom `distribution`, you must pass the same value to `dist` in your call to `Sentry.init()`, otherwise you will not see stacktraces in your error reports.
  * `release`: The name you'd like to give your release (for example, `release-feature-ABC`). This defaults to a unique `revisionId` of your JS bundle. If you provide a custom `release`, you must pass in the same `release` value to `Sentry.init()`, otherwise you will not see stacktraces in your error reports.
  * `url`: your Sentry URL, only necessary when self-hosting Sentry.


> You can also use environment variables for your config, if you prefer:
>   * setCommits → `SENTRY_SET_COMMITS`
>   * deployEnv → `SENTRY_DEPLOY_ENV`
>   * distribution → `SENTRY_DIST`
>   * release → `SENTRY_RELEASE`
>   * url → `SENTRY_URL`
> 

#### Add the Config Plugin[](https://docs.expo.dev/guides/using-sentry/<#add-the-config-plugin>)
Add the following to your project's app.json or app.config.js file:
app.json
Copy
```
{
 "expo": {
  "plugins": ["sentry-expo"]
  %%placeholder-start%%... %%placeholder-end%%
 }
}

```

## Source maps[](https://docs.expo.dev/guides/using-sentry/<#source-maps>)
With the `postPublish` hook in place, now all you need to do is run `expo-cli publish` and the source maps will be uploaded automatically. We automatically assign a unique release version for Sentry each time you hit publish, based on the version you specify in app.json and a release id on our backend -- this means that if you forget to update the version but hit publish, you will still get a unique Sentry release.
### Uploading source maps at build time[](https://docs.expo.dev/guides/using-sentry/<#uploading-source-maps-at-build-time>)
With `expo-updates`, release builds of both Android and iOS apps will create and embed a new update from your JavaScript source at build-time. This new update will not be published automatically and will exist only in the binary with which it was bundled. Since it isn't published, the source maps aren't uploaded in the usual way like they are when you run `expo-cli publish` (actually, we are relying on Sentry's native scripts to handle that). Because of this you have some extra things to be aware of:
  * Your `release` will automatically be set to Sentry's expected value- `${bundleIdentifier}@${version}+${buildNumber}` (iOS) or `${androidPackage}@${version}+${versionCode}` (Android).
  * Your `dist` will automatically be set to Sentry's expected value: `${buildNumber}` (iOS) or `${versionCode}` (Android).
  * The configuration for build time source maps comes from the android/sentry.properties and ios/sentry.properties files. For more information, see [Sentry's documentation](https://docs.expo.dev/guides/using-sentry/<https:/docs.sentry.io/clients/java/config/#configuration-via-properties-file>). Manual configuration is only required for bare projects, the [sentry-expo config plugin handles it otherwise](https://docs.expo.dev/guides/using-sentry/</guides/using-sentry#add-the-config-plugin>).
  * Configuration for `expo publish` and `npx expo export` for projects is done via app.json, whether using bare workflow or not.


Skipping or misconfiguring either of these can lead to invalid source maps, and you won't see human-readable stacktraces in your errors.
### Uploading source maps for updates[](https://docs.expo.dev/guides/using-sentry/<#uploading-source-maps-for-updates>)
If you're using EAS Update, or if you're self-hosting your updates (this means you run `npx expo export` manually), you need to take the following steps to upload the source maps for your update to Sentry:
  * Run `eas update`. This will generate a dist directory in your project root, which contains your JavaScript bundles and source maps. This command will also output the 'Android update ID' and 'iOS update ID' that we'll need in the next step.
  * Copy or rename the bundle names in the dist/bundles directory to match index.android.bundle (Android) or main.jsbundle (iOS).
  * Next, you can use the Sentry CLI to upload your bundles and source maps: 
    * `release name` should be set to `${bundleIdentifier}@${version}+${buildNumber}` (iOS) or `${androidPackage}@${version}+${versionCode}` (Android), so for example `com.domain.myapp@1.0.0+1`.
    * `dist` should be set to the Update ID that `eas update` generated.


Android
iOS
Terminal
`- ``node_modules/@sentry/cli/bin/sentry-cli releases \`
`  files <release name> \``  upload-sourcemaps \``  --dist <Android Update ID> \``  --rewrite \``  dist/bundles/index.android.bundle dist/bundles/android-<hash>.map`
Terminal
`- ``node_modules/@sentry/cli/bin/sentry-cli releases \`
`  files <release name> \``  upload-sourcemaps \``  --dist <iOS Update ID> \``  --rewrite \``  dist/bundles/main.jsbundle dist/bundles/ios-<hash>.map`
For more information, see Sentry's [instructions for uploading the bundle and source maps](https://docs.expo.dev/guides/using-sentry/<https:/docs.sentry.io/platforms/react-native/sourcemaps/#3-upload-the-bundle-and-source-maps>).
The steps above define a new 'dist' on Sentry, under the same release as your full app build, and associate the source maps with this new dist. If you want to customize this behavior, you can pass in your own values for `release` and `dist` when you initialize Sentry in your code. For example:
```
import * as Sentry from 'sentry-expo';
import * as Updates from 'expo-updates';
Sentry.init({
 dsn: 'YOUR DSN',
 release: 'my release name',
 dist: 'my dist',
});

```

These values should match the values you pass to the `sentry-cli` when uploading your source maps.
### Testing Sentry[](https://docs.expo.dev/guides/using-sentry/<#testing-sentry>)
When building tests for your application, you want to assert that the right flow-tracking or error is being sent to Sentry, but without really sending it to Sentry servers. This way you won't swamp Sentry with false reports during test running and other CI operations.
`sentry-testkit`[](https://docs.expo.dev/guides/using-sentry/<https:/zivl.github.io/sentry-testkit>) enables Sentry to work natively in your application, and by overriding the default Sentry transport mechanism, the report is not really sent but rather logged locally into memory. In this way, the logged reports can be fetched later for your own usage, verification, or any other use you may have in your local developing/testing environment.
For more information on how to get started, see `sentry-testkit`[ documentation](https://docs.expo.dev/guides/using-sentry/<https:/zivl.github.io/sentry-testkit/>).
> If you're using `jest`, make sure to add `@sentry/.*` and `sentry-expo` to your `transformIgnorePatterns`.
## Error reporting semantics[](https://docs.expo.dev/guides/using-sentry/<#error-reporting-semantics>)
To ensure that errors are reported reliably, Sentry defers reporting the data to their backend until the next time you load the app after a fatal error rather than trying to report it upon catching the exception. It saves the stacktrace and other metadata to `AsyncStorage` and sends it immediately when the app starts.
## Disabled by default in dev[](https://docs.expo.dev/guides/using-sentry/<#disabled-by-default-in-dev>)
Unless `enableInExpoDevelopment: true` is set, all your dev/local errors will be ignored and only app releases will report errors to Sentry. You can call methods like `Sentry.Native.captureException(new Error('Oops!'))` but these methods will be no-op.
## Troubleshooting[](https://docs.expo.dev/guides/using-sentry/<#troubleshooting>)
I'm seeing `error: project not found` in my build logs[](https://docs.expo.dev/guides/using-sentry/<#im-seeing-error-project-not-found-in>)
This error is caused by the script that tries to upload source maps during build.
Make sure your `organization`, `project` and `authToken` properties are set correctly.
`expo-dev-client` transactions never finish[](https://docs.expo.dev/guides/using-sentry/<#expo-dev-client-transactions-never-finish>)
This error is caused by the HTTP request tracking, which creates spans for log requests (`Starting 'http.client' span on transaction...`) to the development server. To fix this, stop creating spans by adding the following code snippet:
```
import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';
Sentry.init({
 tracesSampleRate: 1.0,
 integrations: [
  new Sentry.Native.ReactNativeTracing({
   shouldCreateSpanForRequest: url => {
    return !__DEV__ || !url.startsWith(`http://${Constants.expoConfig.hostUri}/logs`);
   },
  }),
 ],
});

```

## Learn more about Sentry[](https://docs.expo.dev/guides/using-sentry/<#learn-more-about-sentry>)
Sentry does more than just catch fatal errors, learn more about how to use Sentry from their [JavaScript usage](https://docs.expo.dev/guides/using-sentry/<https:/docs.sentry.io/platforms/javascript/>) documentation.
[Previous (More - Integrations)Using LogRocket](https://docs.expo.dev/guides/using-sentry/</guides/using-logrocket>)[Next (More - Integrations)Using BugSnag](https://docs.expo.dev/guides/using-sentry/</guides/using-bugsnag>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/using-sentry/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/using-sentry/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-sentry.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/using-sentry/<https:/expo.dev/privacy>).
