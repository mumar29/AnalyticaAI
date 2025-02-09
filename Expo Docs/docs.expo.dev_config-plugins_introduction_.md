[](https://docs.expo.dev/config-plugins/introduction/<https:/expo.dev>)[Docs](https://docs.expo.dev/config-plugins/introduction/</>)
[Blog](https://docs.expo.dev/config-plugins/introduction/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/config-plugins/introduction/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/config-plugins/introduction/<https:/github.com/expo/expo>)[](https://docs.expo.dev/config-plugins/introduction/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/config-plugins/introduction/</>)[Guides](https://docs.expo.dev/config-plugins/introduction/</guides/overview>)[EAS](https://docs.expo.dev/config-plugins/introduction/</eas>)[Reference](https://docs.expo.dev/config-plugins/introduction/</versions/latest>)[Learn](https://docs.expo.dev/config-plugins/introduction/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/config-plugins/introduction/</get-started/introduction>)[Create a project](https://docs.expo.dev/config-plugins/introduction/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/config-plugins/introduction/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/config-plugins/introduction/</get-started/start-developing>)[Next steps](https://docs.expo.dev/config-plugins/introduction/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/config-plugins/introduction/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
[Introduction](https://docs.expo.dev/config-plugins/introduction/</config-plugins/introduction>)[Plugins and mods](https://docs.expo.dev/config-plugins/introduction/</config-plugins/plugins-and-mods>)[Development and debugging](https://docs.expo.dev/config-plugins/introduction/</config-plugins/development-and-debugging>)
Debugging
[Authentication](https://docs.expo.dev/config-plugins/introduction/</develop/authentication>)[Unit testing](https://docs.expo.dev/config-plugins/introduction/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/config-plugins/introduction/</review/overview>)[Share previews with your team](https://docs.expo.dev/config-plugins/introduction/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/config-plugins/introduction/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/config-plugins/introduction/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/config-plugins/introduction/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/config-plugins/introduction/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/config-plugins/introduction/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/config-plugins/introduction/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/config-plugins/introduction/</core-concepts>)[FAQ](https://docs.expo.dev/config-plugins/introduction/</faq>)
[Archive](https://docs.expo.dev/config-plugins/introduction/</archive>)[Expo Snack](https://docs.expo.dev/config-plugins/introduction/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/config-plugins/introduction/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/config-plugins/introduction/<https:/expo.dev/mailing-list/signup>)
# Config plugins: Introduction
[Edit this page](https://docs.expo.dev/config-plugins/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/config-plugins/introduction.mdx> "Edit content of this page on GitHub")
An introduction to config plugins for the Expo project.
[Edit this page](https://docs.expo.dev/config-plugins/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/config-plugins/introduction.mdx> "Edit content of this page on GitHub")
An automatic setup for adding a native module to your project is possible. Sometimes, a module requires a more complex setup. A config plugin can be used to automatically configure your native project for a module and reduce the complexity by avoiding interaction with the native project.
## What is a config plugin[](https://docs.expo.dev/config-plugins/introduction/<#what-is-a-config-plugin>)
Config plugin is a system for extending the [app config](https://docs.expo.dev/config-plugins/introduction/</workflow/configuration>) and customizing the prebuild process for your app. They can be used to add native modules that aren't included, by default, or to add any native code that needs to be configured further.
Internally Expo CLI uses config plugins to generate and configure all the native code for a managed project. Plugins do things such as generate app icons, set the app name, and configure the AndroidManifest.xml, Info.plist, and so on.
You can think of plugins like a bundler for native projects, and running `npx expo prebuild` as a way to bundle the projects by evaluating all the project plugins. Doing so will generate android and ios directories. These directories can be modified manually after being generated, but then they can no longer be safely regenerated without potentially overwriting manual modifications.
## Use a config plugin[](https://docs.expo.dev/config-plugins/introduction/<#use-a-config-plugin>)
Expo config plugins mostly come from Node.js modules. You can install them just like other packages in your project.
For example, `expo-camera` has a plugin that adds camera permissions to the AndroidManifest.xml and Info.plist. To install it in your project, run the following command:
Terminal
Copy
`- ``npx expo install expo-camera`
In your [app's config](https://docs.expo.dev/config-plugins/introduction/</versions/latest/config/app>), you can add `expo-camera` to the list of plugins:
app.json
Copy
```
{
 "expo": {
  "plugins": ["expo-camera"]
 }
}

```

Some config plugins offer flexibility by allowing you to pass options to customize their configuration. To do this, you can pass an array with the Expo library name as the first argument, and an object containing the options as the second argument. For example, the `expo-camera` plugin allows you to customize the camera permission message:
app.json
Copy
```
{
 "expo": {
  "plugins": [
   [
    "expo-camera",
    {
     "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera."
    }
   ]
  ]
 }
}

```

> Tip: For every Expo library that has a config plugin, you'll find more information about that in the library's API reference. For example, the `expo-camera`[ library has a config plugin section](https://docs.expo.dev/config-plugins/introduction/</versions/latest/sdk/camera#configuration-in-appjsonappconfigjs>).
On running the `npx expo prebuild`, the `mods`[](https://docs.expo.dev/config-plugins/introduction/</config-plugins/plugins-and-mods#how-mods-work>) are compiled, and the native files change.
The changes don't take effect until you rebuild the native project, for example, with Xcode. If you're using config plugins in a managed app, they will be applied during the prebuild phase on `eas build`.
[Previous (Develop - Development builds)Next steps](https://docs.expo.dev/config-plugins/introduction/</develop/development-builds/next-steps>)[Next (Develop - Config plugins)Plugins and mods](https://docs.expo.dev/config-plugins/introduction/</config-plugins/plugins-and-mods>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/config-plugins/introduction/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/config-plugins/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/config-plugins/introduction.mdx>)
  * Last updated on April 03, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/config-plugins/introduction/<https:/expo.dev/privacy>).
On this page
[What is a config plugin](https://docs.expo.dev/config-plugins/introduction/</config-plugins/introduction/#what-is-a-config-plugin>)[Use a config plugin](https://docs.expo.dev/config-plugins/introduction/</config-plugins/introduction/#use-a-config-plugin>)
