[](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/expo.dev>)[Docs](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</>)
[Blog](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/github.com/expo/expo>)[](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</>)[Guides](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</guides/overview>)[EAS](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</eas>)[Reference](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</versions/latest>)[Learn](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/overview>)
[Overview](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/overview>)
Expo tutorial
0 of 9
[Introduction](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/introduction>)[Create your first app](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/create-your-first-app>)[Add navigation](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/add-navigation>)[Build a screen](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/build-a-screen>)[Use an image picker](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/image-picker>)[Create a modal](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/create-a-modal>)[Add gestures](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/gestures>)[Take a screenshot](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/screenshot>)[Handle platform differences](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/platform-differences>)[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/configuration>)[Learning resources](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/follow-up>)
EAS tutorial
0 of 11
[Introduction](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/introduction>)[Configure development build](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/configure-development-build>)[Android development build](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/android-development-build>)[iOS development build for simulators](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/ios-development-build-for-simulators>)[iOS development build for devices](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/ios-development-build-for-devices>)[Multiple app variants](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/multiple-app-variants>)[Internal distribution build](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/internal-distribution-builds>)[Manage app versions](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/manage-app-versions>)[Android production build](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/android-production-build>)[iOS production build](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/ios-production-build>)[Share previews](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/team-development>)[Builds from GitHub](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/using-github>)[Next steps](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/next-steps>)
More
[Additional resources](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</additional-resources>)
[Archive](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</archive>)[Expo Snack](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/expo.dev/mailing-list/signup>)
# Configure multiple app variants
[Edit this page](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/multiple-app-variants.mdx> "Edit content of this page on GitHub")
Learn how to configure app config to install multiple app variants on a single device.
[Edit this page](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/multiple-app-variants.mdx> "Edit content of this page on GitHub")
In this chapter, we'll configure our project to run multiple build types (development, preview, production) on a single device simultaneously. This setup will allow us to test various stages of our app development without the need to uninstall and reinstall different versions.
Each variant requires a unique Android Application ID and iOS Bundle Identifier to enable simultaneous installations on one device. Here's how the IDs are set up in our app.json file:
app.json
Copy
```
{
 "ios": {
  "bundleIdentifier": "com.yourname.stickersmash"
  %%placeholder-start%%... %%placeholder-end%%
 },
 "android": {
  "package": "com.yourname.stickersmash"
  %%placeholder-start%%... %%placeholder-end%%
 }
}

```

1
## Convert app.json to app.config.js for dynamic configuration[](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<#convert-appjson-to-appconfigjs-for-dynamic-configuration>)
app.json contains app-related configuration in a JSON file. It's static and isn't ideal if we want to use [dynamic values for certain properties](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</workflow/configuration#dynamic-configuration>). We're going to add different Android Application IDs and iOS Bundle Identifiers for all build profiles based on [environment variables](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</workflow/configuration#switching-configuration-based-on-the-environment>).
  * In the code editor, rename app.json to app.config.js.
  * In app.config.js, add environment variables called `IS_DEV` and`IS_PREVIEW` for `development` and `preview` build profiles:


app.config.js
Copy
```
const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

```

  * Add two functions that dynamically change the app name, Android Application ID and iOS Bundle Identifier:


app.config.js
Copy
```
const getUniqueIdentifier = () => {
 if (IS_DEV) {
  return 'com.yourname.stickersmash.dev';
 }
 if (IS_PREVIEW) {
  return 'com.yourname.stickersmash.preview';
 }
 return 'com.yourname.stickersmash';
};
const getAppName = () => {
 if (IS_DEV) {
  return 'StickerSmash (Dev)';
 }
 if (IS_PREVIEW) {
  return 'StickerSmash (Preview)';
 }
 return 'StickerSmash: Emoji Stickers';
};

Show More

```

  * We'll use `getAppName()` to assign varying `name` values for the app and `getUniqueIdentifier()` to differentiate `android.package` and `ios.bundleIdentifier` for development and preview builds:


app.config.js
Copy
```
export default {
 name: getAppName(),
 %%placeholder-start%%... %%placeholder-end%%
 ios: {
  bundleIdentifier: getUniqueIdentifier(),
  %%placeholder-start%%... %%placeholder-end%%
 },
 android: {
  package: getUniqueIdentifier(),
  %%placeholder-start%%... %%placeholder-end%%
 },
};

```

2
## Configure eas.json[](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<#configure-easjson>)
In eas.json, add the `APP_VARIANT` environment variable:
eas.json
Copy
```
{
 "build": {
  "development": {
   "developmentClient": true,
   "distribution": "internal",
   "env": {
    "APP_VARIANT": "development"
   }
  },
  "preview": {
   "distribution": "internal",
   "env": {
    "APP_VARIANT": "preview"
   }
  }
  %%placeholder-start%%... %%placeholder-end%%
 }
}

```

Running `eas build --profile development` will now set `APP_VARIANT` to `development`.
> Note: Since we changed the Android Application ID and iOS Bundle Identifier, the EAS CLI will prompt us to generate a new Keystore for Android and a new provisioning profile for iOS. To learn more about what these steps include, see the previous chapter for more information.
Since our `ios-simulator` build profile extends `development`, this configuration is automatically applied for iOS Simulators.
3
## Run development server[](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<#run-development-server>)
> After builds are complete, follow the same procedure from previous chapters to install them on a device or emulator/simulator.
Since we're identifying our development build with the `APP_VARIANT` environment variable, we need to pass it to the command when starting the development server. To do this, add a `dev` script in the `"scripts"`[](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/docs.npmjs.com/cli/v10/using-npm/scripts>) field of our project's package.json:
package.json
Copy
```
{
 "scripts": {
  "dev": "APP_VARIANT=development npx expo start"
 }
}

```

Run the `npm run dev` command to start the development server:
Terminal
Copy
`- ``npm run dev`
This script will evaluate app.config.js locally and load the environment variable for the `development` profile.
Now, our development build will run on both Android and iOS, displaying the modified app name from app.config.js. For example, the below development build is running on an iOS Simulator. See that the app name is StickerSmash (Dev):
![Development variant running on Android device.](https://docs.expo.dev/static/images/tutorial/eas/ios-dev-variant.png)
## Summary[](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<#summary>)
Chapter 5: Configure multiple app variants
We successfully switched to app.config.js for dynamic settings, added environment variables in eas.json to configure specific build profile, and learned how to start the development server with a custom package.json script.
Mark this chapter as read
In the next chapter, learn about what are internal distribution builds, why we need them, and how to create them.
[Next: Create and share internal distribution build](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/internal-distribution-builds>)
[Previous (EAS tutorial)iOS development build for devices](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/ios-development-build-for-devices>)[Next (EAS tutorial)Internal distribution build](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/internal-distribution-builds>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/multiple-app-variants.mdx>)


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/tutorial/eas/multiple-app-variants/<https:/expo.dev/privacy>).
On this page
[Convert app.json to app.config.js for dynamic configuration](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/multiple-app-variants/#convert-appjson-to-appconfigjs-for-dynamic-configuration>)[Configure eas.json](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/multiple-app-variants/#configure-easjson>)[Run development server](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/multiple-app-variants/#run-development-server>)[Summary](https://docs.expo.dev/tutorial/eas/multiple-app-variants/</tutorial/eas/multiple-app-variants/#summary>)
