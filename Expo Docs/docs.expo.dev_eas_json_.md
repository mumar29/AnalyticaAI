[](https://docs.expo.dev/eas/json/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/json/</>)
[Blog](https://docs.expo.dev/eas/json/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/json/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/json/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/json/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/json/</>)[Guides](https://docs.expo.dev/eas/json/</guides/overview>)[EAS](https://docs.expo.dev/eas/json/</eas>)[Reference](https://docs.expo.dev/eas/json/</versions/latest>)[Learn](https://docs.expo.dev/eas/json/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/json/</eas>)[Environment variables](https://docs.expo.dev/eas/json/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/json/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/json/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/json/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/json/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/json/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/json/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/json/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/json/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/json/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/json/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/json/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/json/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/json/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/json/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/json/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/json/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/json/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/json/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/json/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/json/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/json/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/json/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/json/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/json/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/json/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/json/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/json/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/json/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/json/</eas/metadata>)[Get started](https://docs.expo.dev/eas/json/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/json/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/json/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/json/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/json/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/json/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/json/</eas/json>)[Webhooks](https://docs.expo.dev/eas/json/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/json/</archive>)[Expo Snack](https://docs.expo.dev/eas/json/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/json/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/json/<https:/expo.dev/mailing-list/signup>)
# eas.json
[Edit this page](https://docs.expo.dev/eas/json/<https:/github.com/expo/expo/edit/main/docs/pages/eas/json.mdx> "Edit content of this page on GitHub")
Learn about available properties for EAS Build and EAS Submit to configure and override their default behavior from within your project.
[Edit this page](https://docs.expo.dev/eas/json/<https:/github.com/expo/expo/edit/main/docs/pages/eas/json.mdx> "Edit content of this page on GitHub")
eas.json is the configuration file for EAS CLI and services. You can find the complete reference of all available schema properties for [EAS Build](https://docs.expo.dev/eas/json/</build/introduction>) and [EAS Submit](https://docs.expo.dev/eas/json/</submit/introduction>) on this page.
> To learn more about how a project using EAS services is configured with eas.json, see [Configure EAS Build with eas.json](https://docs.expo.dev/eas/json/</build/eas-json>) and [Configure EAS Submit with eas.json](https://docs.expo.dev/eas/json/</submit/eas-json>).
## EAS Build[](https://docs.expo.dev/eas/json/<#eas-build>)
The following properties are available in the schema for the `build` key in eas.json.
Example schema of multiple build profiles[](https://docs.expo.dev/eas/json/<#example-schema-of-multiple-build-profiles>)
eas.json
Copy
```
{
 "build": {
  "base": {
   "node": "12.13.0",
   "yarn": "1.22.5",
   "env": {
    "EXAMPLE_ENV": "example value"
   },
   "android": {
    "image": "default",
    "env": {
     "PLATFORM": "android"
    }
   },
   "ios": {
    "image": "latest",
    "env": {
     "PLATFORM": "ios"
    }
   }
  },
  "development": {
   "extends": "base",
   "developmentClient": true,
   "env": {
    "ENVIRONMENT": "development"
   },
   "android": {
    "distribution": "internal",
    "withoutCredentials": true
   },
   "ios": {
    "simulator": true
   }
  },
  "staging": {
   "extends": "base",
   "env": {
    "ENVIRONMENT": "staging"
   },
   "distribution": "internal",
   "android": {
    "buildType": "apk"
   }
  },
  "production": {
   "extends": "base",
   "env": {
    "ENVIRONMENT": "production"
   }
  }
 }
}

Show More

```

### Common properties for native platforms[](https://docs.expo.dev/eas/json/<#common-properties-for-native-platforms>)
Property| Description  
---|---  
`withoutCredentials`[](https://docs.expo.dev/eas/json/<#withoutcredentials>)| (boolean) - When set to `true`, EAS CLI won't require you to configure credentials when building the app. This comes in handy when using EAS Build [custom builds](https://docs.expo.dev/eas/json/</custom-builds/get-started>). Defaults to `false`.  
`extends`[](https://docs.expo.dev/eas/json/<#extends>)| (string) - The name of the build profile that the current one should inherit values from. This value can't be specified per platform.  
`credentialsSource`[](https://docs.expo.dev/eas/json/<#credentialssource>)| (enum: local, remote) - The source of credentials used to sign the application archive.
  * `local` - if you want to provide your own [credentials.json](https://docs.expo.dev/eas/json/</app-signing/local-credentials>).
  * `remote` - if you want to use the credentials managed by EAS (default option).

  
`releaseChannel`[](https://docs.expo.dev/eas/json/<#releasechannel>)| (string) - Deprecated: Name of the release channel for the Classic Updates service, which is only supported in SDK 49 and lower. If you do not specify a channel, your binary will pull releases from the `default` channel. EAS Update uses the [channel](https://docs.expo.dev/eas/json/<#channel>) field, so you can remove `releaseChannel`[](https://docs.expo.dev/eas/json/<#releasechannel>) after [migrating to EAS Update](https://docs.expo.dev/eas/json/</eas-update/migrate-from-classic-updates>).  
`channel`[](https://docs.expo.dev/eas/json/<#channel>)| (string) - The EAS Update channel where this build will look for updates. [Learn more](https://docs.expo.dev/eas/json/</eas-update/how-it-works>). Standalone builds will check for and download updates matching platform, native runtime, and channel. This field has no effect when `developmentClient`[](https://docs.expo.dev/eas/json/<#developmentclient>) is set to `true`, as development builds can run updates from any channel. If you have not yet migrated from Classic Updates to EAS Update, then continue to use the `releaseChannel`[](https://docs.expo.dev/eas/json/<#releasechannel>) field instead.  
`distribution`[](https://docs.expo.dev/eas/json/<#distribution>)| (enum: store, internal) - The method of distributing your app.
  * `internal` - with this option you'll be able to share your build URLs with anyone, and they will be able to install the builds to their devices straight from the Expo website. When using `internal`, make sure the build produces a .apk or ipa file. Otherwise, the shareable URL will be not work. See [internal distribution](https://docs.expo.dev/eas/json/</build/internal-distribution>) for more information.
  * `store` - produces builds for store uploads, your build URLs won't be shareable.

  
`developmentClient`[](https://docs.expo.dev/eas/json/<#developmentclient>)| (boolean) - If set to `true` (defaults to `false`), this field will produce a [development build](https://docs.expo.dev/eas/json/</workflow/overview#development-builds>). For the build to be successful, the project must have `expo-dev-client`[](https://docs.expo.dev/eas/json/</versions/latest/sdk/dev-client>) installed and configured. Note: this field is for setting the `gradleCommand` to `:app:assembleDebug` for Android and `buildConfiguration` to `Debug` for iOS . If these fields are provided for the same build profile, will take precedence over `developmentClient`.  
`resourceClass`[](https://docs.expo.dev/eas/json/<#resourceclass>)| (enum: default, medium, large) - The resource class that will be used to run this build. To see mapping for each platform, see [Android-specific resource class field](https://docs.expo.dev/eas/json/<#resourceclass-1>) and [iOS-specific resource class field](https://docs.expo.dev/eas/json/<#resourceclass-2>). The `large` resource class is not available on the free plan.  
`prebuildCommand`[](https://docs.expo.dev/eas/json/<#prebuildcommand>)| (string) - Optional override of the [prebuild](https://docs.expo.dev/eas/json/</more/expo-cli#prebuild>) command used by EAS. For example, you can specify `prebuild --template example-template` to use a custom template. Note: `--platform` and `--non-interactive` will be added automatically by the build engine, so you do not need to specify them manually.  
`buildArtifactPaths`[](https://docs.expo.dev/eas/json/<#buildartifactpaths>)| (string[]) - List of paths (or patterns) where EAS Build is going to look for the build artifacts. Use `applicationArchivePath` for specifying the path for uploading the application archive. Build artifacts are uploaded even if the build fails. EAS Build uses the `fast-glob` npm library for [pattern matching](https://docs.expo.dev/eas/json/<https:/github.com/mrmlnc/fast-glob#pattern-syntax>).  
`node`[](https://docs.expo.dev/eas/json/<#node>)| (string) - Version of Node.js used for build.  
`yarn`[](https://docs.expo.dev/eas/json/<#yarn>)| (string) - Version of Yarn used for build.  
`pnpm`[](https://docs.expo.dev/eas/json/<#pnpm>)| (string) - Version of pnpm used for build.  
`bun`[](https://docs.expo.dev/eas/json/<#bun>)| (string) - Version of Bun used for build. You can also use a specific version. Learn [how to configure the exact version in eas.json](https://docs.expo.dev/eas/json/</guides/using-bun#customize-bun-version-on-eas>).  
`expoCli`[](https://docs.expo.dev/eas/json/<#expocli>)| (string) - Deprecated: Version of `expo-cli`[](https://docs.expo.dev/eas/json/<https:/www.npmjs.com/package/expo-cli>) used to [prebuild](https://docs.expo.dev/eas/json/</more/expo-cli#prebuild>) your app. It only affects managed projects on Expo SDK 45 and lower. For newer SDKs, EAS Build will use the versioned [Expo CLI](https://docs.expo.dev/eas/json/</more/expo-cli>). It is included with `expo` library. You can opt out of using the versioned Expo CLI by setting the `EXPO_USE_LOCAL_CLI=0` environment variable in the build profile.  
`env`[](https://docs.expo.dev/eas/json/<#env>)| (object) - [Environment variables](https://docs.expo.dev/eas/json/</guides/environment-variables>) that should be set during the build process. It should only be used for values that you would commit to your git repository and not for passwords or [secrets](https://docs.expo.dev/eas/json/</build-reference/variables>).  
`autoIncrement`[](https://docs.expo.dev/eas/json/<#autoincrement>)| (boolean) - Controls how EAS CLI bumps your application build version. Defaults to `false`. When enabled, for Android, bumps `expo.android.versionCode` (for example, `3`to `4`). For iOS, bumps the last component of `expo.ios.buildNumber` (for example, `1.2.3.39` to `1.2.3.40`).  
`cache`[](https://docs.expo.dev/eas/json/<#cache>)| (object) - Cache configuration. This feature is intended for caching values that require a lot of computation. For example, compilation results (both final binaries and any intermediate files). However, it doesn't work well for node_modules because the cache is not local to the machine, so the download speed is similar to downloading from the npm registry.  
`disabled`[](https://docs.expo.dev/eas/json/<#disabled>)| (boolean) - Disables caching. Defaults to `false`.  
`key`[](https://docs.expo.dev/eas/json/<#key>)| (string) - Cache key. You can invalidate the cache by changing this value.  
`paths`[](https://docs.expo.dev/eas/json/<#paths>)| (array) - List of the paths that will be saved after a successful build and restored at the beginning of the next one. Both absolute and relative paths are supported, where relative paths are resolved from the directory with eas.json.  
`config`[](https://docs.expo.dev/eas/json/<#config>)| (string) - Custom workflow file name that will be used to run this build. You can also specify this property on platform level for platform-specific workflows. [Learn more](https://docs.expo.dev/eas/json/</custom-builds/get-started>). Example: `"config": "production.yml"` will use workflow from `.eas/build/production.yml`.  
`environment`[](https://docs.expo.dev/eas/json/<#environment>)| (enum: development, preview, production) - The environment used to apply environment variables for the build process. [Learn more](https://docs.expo.dev/eas/json/</eas/environment-variables>).  
### Android-specific options[](https://docs.expo.dev/eas/json/<#android-specific-options>)
Property| Description  
---|---  
`withoutCredentials`[](https://docs.expo.dev/eas/json/<#withoutcredentials-1>)| (boolean) - When set to `true`, EAS CLI won't require you to configure credentials when building the app. This comes in handy when you want to build debug binaries and the debug keystore is checked in to the repository. Defaults to `false`.  
`image`[](https://docs.expo.dev/eas/json/<#image>)| (string) - [Image with build environment](https://docs.expo.dev/eas/json/</build-reference/infrastructure>).  
`resourceClass`[](https://docs.expo.dev/eas/json/<#resourceclass-1>)| (enum: default, medium, large) - The Android-specific resource class that will be used to run this build. Defaults to `medium`. For information on available build resources for each resource class, see [Android build server configurations](https://docs.expo.dev/eas/json/</build-reference/infrastructure#android-build-server-configurations>). The `large` resource class is not available on the free plan.  
`ndk`[](https://docs.expo.dev/eas/json/<#ndk>)| (string) - Version of Android NDK.  
`autoIncrement`[](https://docs.expo.dev/eas/json/<#autoincrement-1>)| (boolean | "version" | "versionCode") - Controls how EAS CLI bumps your application build version. Defaults to `false`. Allowed values:
  * `"version"` - bumps the patch of `expo.version` (for example, `1.2.3` to `1.2.4`).
  * `"versionCode"` (or `true`) - bumps `expo.android.versionCode` (for example, `3` to `4`).
  * `false` - versions won't be bumped automatically (default).

Based on the value of `cli.appVersionSource`[ in eas.json](https://docs.expo.dev/eas/json/</build-reference/app-versions>), the values will be updated locally in your project or on EAS servers.  
`buildType`[](https://docs.expo.dev/eas/json/<#buildtype>)| (enum: app-bundle, apk) - Type of the artifact you want to build. It controls which Gradle task will be used to build the project. It can be overridden by `gradleCommand` or `developmentClient: true` option.
  * `app-bundle` - `:app:bundleRelease` (creates .aab artifact)
  * `apk` - `:app:assembleRelease` (creates .apk artifact)

  
`gradleCommand`[](https://docs.expo.dev/eas/json/<#gradlecommand>)| (string) - Gradle task that will be used to build your project. For example, `:app:assembleDebug` to build a debug binary. It's not recommended unless you need to run a task that `buildType` does not support, it takes priority over `buildType`[](https://docs.expo.dev/eas/json/<#buildtype>) and `developmentClient`[](https://docs.expo.dev/eas/json/<#developmentclient>).  
`applicationArchivePath`[](https://docs.expo.dev/eas/json/<#applicationarchivepath>)| (string) - Path (or pattern) where EAS Build is going to look for the application archive. EAS Build uses the `fast-glob` npm library for [pattern matching](https://docs.expo.dev/eas/json/<https:/github.com/mrmlnc/fast-glob#pattern-syntax>). The default value is `android/app/build/outputs/**/*.{apk,aab}`.  
`config`[](https://docs.expo.dev/eas/json/<#config-1>)| (string) - Custom workflow file name that will be used to run this Android build. You can also specify this property on profile level for platform-agnostic workflows. [Learn more](https://docs.expo.dev/eas/json/</custom-builds/get-started>). Example: `"config": "production-android.yml"` will use workflow from `.eas/build/production-android.yml`.  
### iOS-specific options[](https://docs.expo.dev/eas/json/<#ios-specific-options>)
Property| Description  
---|---  
`withoutCredentials`[](https://docs.expo.dev/eas/json/<#withoutcredentials-2>)| (boolean) - When set to `true`, EAS CLI won't require you to configure credentials when building the app. This comes in handy when using EAS Build [custom builds](https://docs.expo.dev/eas/json/</custom-builds/get-started>). Defaults to `false`.  
`simulator`[](https://docs.expo.dev/eas/json/<#simulator>)| (boolean) - If set to true, creates build for iOS Simulator. Defaults to `false`.  
`enterpriseProvisioning`[](https://docs.expo.dev/eas/json/<#enterpriseprovisioning>)| (enum: universal, adhoc) - Provisioning method used for `"distribution": "internal"` when you have an Apple account with Apple Developer Enterprise Program membership. You can choose if you want to use `adhoc` or `universal` provisioning. The latter is recommended as it does not require you to register each individual device. If you don't provide this option and you still authenticate with an enterprise team, you'll be prompted which provisioning method to use.  
`autoIncrement`[](https://docs.expo.dev/eas/json/<#autoincrement-2>)| (boolean | "version" | "buildNumber") - Controls how EAS CLI bumps your application build version. Defaults to `false`. Allowed values:
  * `"version"` - bumps the patch of `expo.version` (for example, `1.2.3` to `1.2.4`).
  * `"buildNumber"` (or `true`) - bumps the last component of `expo.ios.buildNumber` (for example, `1.2.3.39` to `1.2.3.40`).
  * `false` - versions won't be bumped automatically (default)

Based on the value of `cli.appVersionSource`[ in eas.json](https://docs.expo.dev/eas/json/</build-reference/app-versions>), the values will be updated locally in your project or on EAS servers.  
`image`[](https://docs.expo.dev/eas/json/<#image-1>)| (string) - [Image with build environment](https://docs.expo.dev/eas/json/</build-reference/infrastructure>).  
`resourceClass`[](https://docs.expo.dev/eas/json/<#resourceclass-2>)| (enum: default, medium, large) - The iOS-specific resource class that will be used to run this build. Defaults to `medium`. For information on available build resources for each resource class, see [iOS build server configurations](https://docs.expo.dev/eas/json/</build-reference/infrastructure#ios-build-server-configurations>). The `large` resource class is not available on the free plan.  
`bundler`[](https://docs.expo.dev/eas/json/<#bundler>)| (string) - Version of [bundler](https://docs.expo.dev/eas/json/<https:/bundler.io/>).  
`fastlane`[](https://docs.expo.dev/eas/json/<#fastlane>)| (string) - Version of fastlane.  
`cocoapods`[](https://docs.expo.dev/eas/json/<#cocoapods>)| (string) - Version of CocoaPods.  
`scheme`[](https://docs.expo.dev/eas/json/<#scheme>)| (string) - Xcode project's scheme. If a project:
  * Has multiple schemes, you should set this value.
  * Has only one scheme, it will be detected automatically.
  * Have multiple schemes schemes and if this value is not set, EAS CLI will prompt you to select one of them.

  
`buildConfiguration`[](https://docs.expo.dev/eas/json/<#buildconfiguration>)| (string) - Xcode project's Build Configuration.
  * For an Expo project, the value is `"Release"` or `"Debug"`. Defaults to `"Release"`.
  * For a [bare React Native](https://docs.expo.dev/eas/json/</bare/overview>) project, defaults to the value specified in the scheme.

It takes priority over `developmentClient`[](https://docs.expo.dev/eas/json/<#developmentclient>).  
`applicationArchivePath`[](https://docs.expo.dev/eas/json/<#applicationarchivepath-1>)| (string) - Path (or pattern) where EAS Build is going to look for the application archive. EAS Build uses the `fast-glob` npm package for [pattern matching](https://docs.expo.dev/eas/json/<https:/github.com/mrmlnc/fast-glob#pattern-syntax>). You should modify that path only if you are using a custom Gymfile. The default is `ios/build/Build/Products/*-iphonesimulator/*.app` when building for simulator and `ios/build/*.ipa` in other cases.  
`config`[](https://docs.expo.dev/eas/json/<#config-2>)| (string) - Custom workflow file name that will be used to run this iOS build. You can also specify this property on profile level for platform-agnostic workflows. [Learn more](https://docs.expo.dev/eas/json/</custom-builds/get-started>). Example: `"config": "production-ios.yml"` will use workflow from `.eas/build/production-ios.yml`.  
## EAS Submit[](https://docs.expo.dev/eas/json/<#eas-submit>)
The following properties are available in the schema for the `submit` key in eas.json.
Example schema of with production profile[](https://docs.expo.dev/eas/json/<#example-schema-of-with-production-profile>)
eas.json
Copy
```
{
 "cli": {
  "version": ">= 0.34.0"
 },
 "submit": {
  "production": {
   "android": {
    "serviceAccountKeyPath": "../path/to/api-xxx-yyy-zzz.json",
    "track": "internal"
   },
   "ios": {
    "appleId": "john@turtle.com",
    "ascAppId": "1234567890",
    "appleTeamId": "AB12XYZ34S"
   }
  }
 }
}

Show More

```

### Android-specific options[](https://docs.expo.dev/eas/json/<#android-specific-options-1>)
Property| Description  
---|---  
`serviceAccountKeyPath`[](https://docs.expo.dev/eas/json/<#serviceaccountkeypath>)| (string) - Path to the JSON file with [Google Service Account Key](https://docs.expo.dev/eas/json/<https:/expo.fyi/creating-google-service-account>) used to authenticate with Google Play.  
`track`[](https://docs.expo.dev/eas/json/<#track>)| (enum: production, beta, alpha, internal) - The track of the application to use.  
`releaseStatus`[](https://docs.expo.dev/eas/json/<#releasestatus>)| (enum: completed, draft, halted, inProgress) - The [status of a release](https://docs.expo.dev/eas/json/<https:/developers.google.com/android-publisher/api-ref/rest/v3/edits.tracks#status>).  
`rollout`[](https://docs.expo.dev/eas/json/<#rollout>)| (number) - The initial fraction of users who are eligible to receive the release. Should be a value from 0 (no users) to 1 (all users). Works only with `inProgress` [release status](https://docs.expo.dev/eas/json/<https:/developers.google.com/android-publisher/api-ref/rest/v3/edits.tracks#status>).  
`changesNotSentForReview`[](https://docs.expo.dev/eas/json/<#changesnotsentforreview>)| (boolean) - Indicates that the changes sent with this submission will not be reviewed until they are explicitly sent for review from the Google Play Console UI. Defaults to `false`.  
`applicationId`[](https://docs.expo.dev/eas/json/<#applicationid>)| (string) - The application ID that is used when accessing Service Account Key managed by Expo. It does not have any effect if you are using local credentials. In most cases this value will be autodetected. However, if you have multiple product flavors, this value might be necessary.  
### iOS-specific options[](https://docs.expo.dev/eas/json/<#ios-specific-options-1>)
Property| Description  
---|---  
`appleId`[](https://docs.expo.dev/eas/json/<#appleid>)| (string) - Your Apple ID username (you can also set the `EXPO_APPLE_ID` env variable).  
`ascAppId`[](https://docs.expo.dev/eas/json/<#ascappid>)| (string) - [App Store Connect unique application Apple ID number](https://docs.expo.dev/eas/json/<https:/expo.fyi/asc-app-id>). When set, results in skipping the app creation step.  
`appleTeamId`[](https://docs.expo.dev/eas/json/<#appleteamid>)| (string) - Your Apple Developer Team ID.  
`sku`[](https://docs.expo.dev/eas/json/<#sku>)| (string) - An unique ID for your app that is not visible on the App Store, will be generated unless provided.  
`language`[](https://docs.expo.dev/eas/json/<#language>)| (string) - Primary language. Defaults to "en-US".  
`companyName`[](https://docs.expo.dev/eas/json/<#companyname>)| (string) - The name of your company, needed only for the first submission of any app to the App Store.  
`appName`[](https://docs.expo.dev/eas/json/<#appname>)| (string) - The name of your app as it will appear on the App Store. Defaults to `expo.name` from the [app config](https://docs.expo.dev/eas/json/</workflow/configuration>).  
`ascApiKeyPath`[](https://docs.expo.dev/eas/json/<#ascapikeypath>)| (string) - The path to your [App Store Connect Api Key .p8 file](https://docs.expo.dev/eas/json/<https:/expo.fyi/creating-asc-api-key>).  
`ascApiKeyIssuerId`[](https://docs.expo.dev/eas/json/<#ascapikeyissuerid>)| (string) - The Issuer ID of your [App Store Connect Api Key](https://docs.expo.dev/eas/json/<https:/expo.fyi/creating-asc-api-key>).  
`ascApiKeyId`[](https://docs.expo.dev/eas/json/<#ascapikeyid>)| (string) - The Key ID of your [App Store Connect Api Key](https://docs.expo.dev/eas/json/<https:/expo.fyi/creating-asc-api-key>).  
`bundleIdentifier`[](https://docs.expo.dev/eas/json/<#bundleidentifier>)| (string) - The bundle identifier that will be used when accessing submit credentials managed by Expo. It does not have any effect if you are using local credentials. In most cases, this value will be autodetected. However, if you have multiple Xcode schemes and targets, this value might be necessary.  
`metadataPath`[](https://docs.expo.dev/eas/json/<#metadatapath>)| (string) - The path to your [store configuration file](https://docs.expo.dev/eas/json/</eas/metadata>).  
[Previous (Distribution)Understanding app size](https://docs.expo.dev/eas/json/</distribution/app-size>)[Next (Reference)Webhooks](https://docs.expo.dev/eas/json/</eas/webhooks>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/json/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/json/<https:/github.com/expo/expo/edit/main/docs/pages/eas/json.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/json/<https:/expo.dev/privacy>).
On this page
[EAS Build](https://docs.expo.dev/eas/json/</eas/json/#eas-build>)[Common properties for native platforms](https://docs.expo.dev/eas/json/</eas/json/#common-properties-for-native-platforms>)`withoutCredentials`[](https://docs.expo.dev/eas/json/</eas/json/#withoutcredentials>)`extends`[](https://docs.expo.dev/eas/json/</eas/json/#extends>)`credentialsSource`[](https://docs.expo.dev/eas/json/</eas/json/#credentialssource>)`releaseChannel`[](https://docs.expo.dev/eas/json/</eas/json/#releasechannel>)`channel`[](https://docs.expo.dev/eas/json/</eas/json/#channel>)`distribution`[](https://docs.expo.dev/eas/json/</eas/json/#distribution>)`developmentClient`[](https://docs.expo.dev/eas/json/</eas/json/#developmentclient>)`resourceClass`[](https://docs.expo.dev/eas/json/</eas/json/#resourceclass>)`prebuildCommand`[](https://docs.expo.dev/eas/json/</eas/json/#prebuildcommand>)`buildArtifactPaths`[](https://docs.expo.dev/eas/json/</eas/json/#buildartifactpaths>)`node`[](https://docs.expo.dev/eas/json/</eas/json/#node>)`yarn`[](https://docs.expo.dev/eas/json/</eas/json/#yarn>)`pnpm`[](https://docs.expo.dev/eas/json/</eas/json/#pnpm>)`bun`[](https://docs.expo.dev/eas/json/</eas/json/#bun>)`expoCli`[](https://docs.expo.dev/eas/json/</eas/json/#expocli>)`env`[](https://docs.expo.dev/eas/json/</eas/json/#env>)`autoIncrement`[](https://docs.expo.dev/eas/json/</eas/json/#autoincrement>)`cache`[](https://docs.expo.dev/eas/json/</eas/json/#cache>)`disabled`[](https://docs.expo.dev/eas/json/</eas/json/#disabled>)`key`[](https://docs.expo.dev/eas/json/</eas/json/#key>)`paths`[](https://docs.expo.dev/eas/json/</eas/json/#paths>)`config`[](https://docs.expo.dev/eas/json/</eas/json/#config>)`environment`[](https://docs.expo.dev/eas/json/</eas/json/#environment>)[Android-specific options](https://docs.expo.dev/eas/json/</eas/json/#android-specific-options>)`withoutCredentials`[](https://docs.expo.dev/eas/json/</eas/json/#withoutcredentials-1>)`image`[](https://docs.expo.dev/eas/json/</eas/json/#image>)`resourceClass`[](https://docs.expo.dev/eas/json/</eas/json/#resourceclass-1>)`ndk`[](https://docs.expo.dev/eas/json/</eas/json/#ndk>)`autoIncrement`[](https://docs.expo.dev/eas/json/</eas/json/#autoincrement-1>)`buildType`[](https://docs.expo.dev/eas/json/</eas/json/#buildtype>)`gradleCommand`[](https://docs.expo.dev/eas/json/</eas/json/#gradlecommand>)`applicationArchivePath`[](https://docs.expo.dev/eas/json/</eas/json/#applicationarchivepath>)`config`[](https://docs.expo.dev/eas/json/</eas/json/#config-1>)[iOS-specific options](https://docs.expo.dev/eas/json/</eas/json/#ios-specific-options>)`withoutCredentials`[](https://docs.expo.dev/eas/json/</eas/json/#withoutcredentials-2>)`simulator`[](https://docs.expo.dev/eas/json/</eas/json/#simulator>)`enterpriseProvisioning`[](https://docs.expo.dev/eas/json/</eas/json/#enterpriseprovisioning>)`autoIncrement`[](https://docs.expo.dev/eas/json/</eas/json/#autoincrement-2>)`image`[](https://docs.expo.dev/eas/json/</eas/json/#image-1>)`resourceClass`[](https://docs.expo.dev/eas/json/</eas/json/#resourceclass-2>)`bundler`[](https://docs.expo.dev/eas/json/</eas/json/#bundler>)`fastlane`[](https://docs.expo.dev/eas/json/</eas/json/#fastlane>)`cocoapods`[](https://docs.expo.dev/eas/json/</eas/json/#cocoapods>)`scheme`[](https://docs.expo.dev/eas/json/</eas/json/#scheme>)`buildConfiguration`[](https://docs.expo.dev/eas/json/</eas/json/#buildconfiguration>)`applicationArchivePath`[](https://docs.expo.dev/eas/json/</eas/json/#applicationarchivepath-1>)`config`[](https://docs.expo.dev/eas/json/</eas/json/#config-2>)[EAS Submit](https://docs.expo.dev/eas/json/</eas/json/#eas-submit>)[Android-specific options](https://docs.expo.dev/eas/json/</eas/json/#android-specific-options-1>)`serviceAccountKeyPath`[](https://docs.expo.dev/eas/json/</eas/json/#serviceaccountkeypath>)`track`[](https://docs.expo.dev/eas/json/</eas/json/#track>)`releaseStatus`[](https://docs.expo.dev/eas/json/</eas/json/#releasestatus>)`rollout`[](https://docs.expo.dev/eas/json/</eas/json/#rollout>)`changesNotSentForReview`[](https://docs.expo.dev/eas/json/</eas/json/#changesnotsentforreview>)`applicationId`[](https://docs.expo.dev/eas/json/</eas/json/#applicationid>)[iOS-specific options](https://docs.expo.dev/eas/json/</eas/json/#ios-specific-options-1>)`appleId`[](https://docs.expo.dev/eas/json/</eas/json/#appleid>)`ascAppId`[](https://docs.expo.dev/eas/json/</eas/json/#ascappid>)`appleTeamId`[](https://docs.expo.dev/eas/json/</eas/json/#appleteamid>)`sku`[](https://docs.expo.dev/eas/json/</eas/json/#sku>)`language`[](https://docs.expo.dev/eas/json/</eas/json/#language>)`companyName`[](https://docs.expo.dev/eas/json/</eas/json/#companyname>)`appName`[](https://docs.expo.dev/eas/json/</eas/json/#appname>)`ascApiKeyPath`[](https://docs.expo.dev/eas/json/</eas/json/#ascapikeypath>)`ascApiKeyIssuerId`[](https://docs.expo.dev/eas/json/</eas/json/#ascapikeyissuerid>)`ascApiKeyId`[](https://docs.expo.dev/eas/json/</eas/json/#ascapikeyid>)`bundleIdentifier`[](https://docs.expo.dev/eas/json/</eas/json/#bundleidentifier>)`metadataPath`[](https://docs.expo.dev/eas/json/</eas/json/#metadatapath>)
