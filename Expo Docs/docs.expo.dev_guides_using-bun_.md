[](https://docs.expo.dev/guides/using-bun/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/using-bun/</>)
[Blog](https://docs.expo.dev/guides/using-bun/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/using-bun/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/using-bun/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/using-bun/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/using-bun/</>)[Guides](https://docs.expo.dev/guides/using-bun/</guides/overview>)[EAS](https://docs.expo.dev/guides/using-bun/</eas>)[Reference](https://docs.expo.dev/guides/using-bun/</versions/latest>)[Learn](https://docs.expo.dev/guides/using-bun/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/using-bun/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/using-bun/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/using-bun/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/using-bun/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/using-bun/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/using-bun/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/using-bun/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/using-bun/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/using-bun/</router/introduction>)[Installation](https://docs.expo.dev/guides/using-bun/</router/installation>)[Create pages](https://docs.expo.dev/guides/using-bun/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/using-bun/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/using-bun/</router/layouts>)[Error handling](https://docs.expo.dev/guides/using-bun/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/using-bun/</modules/overview>)[Get started](https://docs.expo.dev/guides/using-bun/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/using-bun/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/using-bun/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/using-bun/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/using-bun/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/using-bun/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/using-bun/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/using-bun/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/using-bun/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/using-bun/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/using-bun/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/using-bun/</guides/icons>)[Localization](https://docs.expo.dev/guides/using-bun/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/using-bun/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/using-bun/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/using-bun/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/using-bun/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/using-bun/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/using-bun/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/using-bun/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/using-bun/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/using-bun/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/using-bun/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/using-bun/</archive>)[Expo Snack](https://docs.expo.dev/guides/using-bun/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/using-bun/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/using-bun/<https:/expo.dev/mailing-list/signup>)
# Using Bun
[Edit this page](https://docs.expo.dev/guides/using-bun/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-bun.mdx> "Edit content of this page on GitHub")
A guide on using Bun with Expo and EAS.
[Edit this page](https://docs.expo.dev/guides/using-bun/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-bun.mdx> "Edit content of this page on GitHub")
[Bun](https://docs.expo.dev/guides/using-bun/<https:/bun.sh/>) is a JavaScript runtime and a drop-in alternative for [Node.js](https://docs.expo.dev/guides/using-bun/<https:/nodejs.org/en>). In Expo projects, Bun can be used to install npm packages and run Node.js scripts. The benefits of using Bun are faster package installation than npm, pnpm, or Yarn and [at least 4x faster startup time compared to Node.js](https://docs.expo.dev/guides/using-bun/<https:/bun.sh/docs#design-goals>), which gives a huge boost to your local development experience.
## Prerequisites[](https://docs.expo.dev/guides/using-bun/<#prerequisites>)
To create a new app using Bun, [install Bun on your local machine](https://docs.expo.dev/guides/using-bun/<https:/bun.sh/docs/installation#installing>).
## Start a new Expo project with Bun[](https://docs.expo.dev/guides/using-bun/<#start-a-new-expo-project-with-bun>)
To create a new project, run the command:
Terminal
Copy
`- ``bun create expo my-app`
You can also run any package.json script with `bun run`:
Terminal
Copy
`- ``bun run ios`
To install any Expo library, you can use `bun expo install`:
Terminal
Copy
`- ``bun expo install expo-av`
## Use Bun for EAS builds[](https://docs.expo.dev/guides/using-bun/<#use-bun-for-eas-builds>)
EAS decides which package manager to use based on the lockfile in your codebase. If you want EAS to use Bun, run `bun install` in your codebase which will create a bun.lockb (the Bun lockfile). As long as this lockfile is in your codebase, Bun will be used as the package manager for your builds. Make sure to delete any lockfiles generated by other package managers.
### Customize Bun version on EAS[](https://docs.expo.dev/guides/using-bun/<#customize-bun-version-on-eas>)
Bun is installed by default when using EAS. See the [Android server images](https://docs.expo.dev/guides/using-bun/</build-reference/infrastructure#android-server-images>) and [iOS server images](https://docs.expo.dev/guides/using-bun/</build-reference/infrastructure#ios-server-images>) to learn which version of Bun is used by your build's image.
To use an [exact version of Bun](https://docs.expo.dev/guides/using-bun/</eas/json#bun>) with EAS, add the version number in eas.json under the build profile's configuration. For example, the configuration below specifies Bun version `1.0.0` for the `development` build profile:
eas.json
Copy
```
{
 "build": {
  "development": {
   "bun": "1.0.0"
   %%placeholder-start%%... %%placeholder-end%%
  }
  %%placeholder-start%%... %%placeholder-end%%
 }
}

```

## Trusted dependencies[](https://docs.expo.dev/guides/using-bun/<#trusted-dependencies>)
Unlike other package managers, Bun does not automatically execute lifecycle scripts from installed libraries, as this is considered a security risk. However, if a package you are installing has a `postinstall` script that you want to run, you have to explicitly state that by including that library in your `trustedDependencies`[](https://docs.expo.dev/guides/using-bun/<https:/bun.sh/guides/install/trusted>) array in your package.json.
For example, if you install `packageA`, which has a dependency on `packageB` and `packageB` has a `postinstall` script, you must add `packageB` in your `trustedDependencies`.
To add a trusted dependency in your package.json, add:
package.json
Copy
```
"trustedDependencies": ["your-dependency"]

```

Then, remove your lockfile and re-install the dependencies:
Terminal
`- ``rm -rf node_modules`
`- ``rm bun.lockb`
`- ``bun install`
## Common errors[](https://docs.expo.dev/guides/using-bun/<#common-errors>)
### EAS Build fails when using Sentry and Bun[](https://docs.expo.dev/guides/using-bun/<#eas-build-fails-when-using-sentry-and-bun>)
If you're using `sentry-expo` or `@sentry/react-native`, these depend on `@sentry/cli`, which updates source maps to Sentry during your build. The `@sentry/cli` package has a `postinstall` script which needs to run for the "upload source maps" script to become available.
To fix this, add `@sentry/cli` to your [trusted dependencies](https://docs.expo.dev/guides/using-bun/</guides/using-bun#trusted-dependencies>) array in package.json:
package.json
Copy
```
"trustedDependencies": ["@sentry/cli"]

```

[Previous (More - Assorted)Configure JS engines](https://docs.expo.dev/guides/using-bun/</guides/configuring-js-engines>)[Next (More - Assorted)Edit rich text](https://docs.expo.dev/guides/using-bun/</guides/editing-richtext>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/using-bun/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/using-bun/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-bun.mdx>)
  * Last updated on January 15, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/using-bun/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/guides/using-bun/</guides/using-bun/#prerequisites>)[Start a new Expo project with Bun](https://docs.expo.dev/guides/using-bun/</guides/using-bun/#start-a-new-expo-project-with-bun>)[Use Bun for EAS builds](https://docs.expo.dev/guides/using-bun/</guides/using-bun/#use-bun-for-eas-builds>)[Customize Bun version on EAS](https://docs.expo.dev/guides/using-bun/</guides/using-bun/#customize-bun-version-on-eas>)[Trusted dependencies](https://docs.expo.dev/guides/using-bun/</guides/using-bun/#trusted-dependencies>)[Common errors](https://docs.expo.dev/guides/using-bun/</guides/using-bun/#common-errors>)[EAS Build fails when using Sentry and Bun](https://docs.expo.dev/guides/using-bun/</guides/using-bun/#eas-build-fails-when-using-sentry-and-bun>)
