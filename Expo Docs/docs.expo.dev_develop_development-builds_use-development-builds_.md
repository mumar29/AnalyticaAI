[](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/development-builds/use-development-builds/</>)
[Blog](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/development-builds/use-development-builds/</>)[Guides](https://docs.expo.dev/develop/development-builds/use-development-builds/</guides/overview>)[EAS](https://docs.expo.dev/develop/development-builds/use-development-builds/</eas>)[Reference](https://docs.expo.dev/develop/development-builds/use-development-builds/</versions/latest>)[Learn](https://docs.expo.dev/develop/development-builds/use-development-builds/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/development-builds/use-development-builds/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/development-builds/use-development-builds/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/development-builds/use-development-builds/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/development-builds/use-development-builds/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/development-builds/use-development-builds/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/tools>)
Navigation
User interface
Development builds
[Introduction](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/introduction>)[Create a build](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/create-a-build>)[Use a build](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/use-development-builds>)[Share with your team](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/share-with-your-team>)[Tools, workflows and extensions](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/development-workflows>)[Next steps](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/next-steps>)
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/development-builds/use-development-builds/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/development-builds/use-development-builds/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/development-builds/use-development-builds/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/development-builds/use-development-builds/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/development-builds/use-development-builds/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/development-builds/use-development-builds/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/development-builds/use-development-builds/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/development-builds/use-development-builds/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/development-builds/use-development-builds/</core-concepts>)[FAQ](https://docs.expo.dev/develop/development-builds/use-development-builds/</faq>)
[Archive](https://docs.expo.dev/develop/development-builds/use-development-builds/</archive>)[Expo Snack](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/expo.dev/mailing-list/signup>)
# Use a development build
[Edit this page](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/use-development-builds.mdx> "Edit content of this page on GitHub")
Learn how to use development builds for a project.
[Edit this page](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/use-development-builds.mdx> "Edit content of this page on GitHub")
Usually, creating a new native build from scratch takes long enough that you'll be tempted to switch tasks and lose your focus. However, with the development build installed on your device or an emulator/simulator, you won't have to wait for the native build process until you [change the underlying native code](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/use-development-builds#rebuild-a-development-build>) that powers your app.
## Add error handling[](https://docs.expo.dev/develop/development-builds/use-development-builds/<#add-error-handling>)
Certain types of errors can provide more helpful error messages than the ones that ship by default with React Native. To turn this feature on, you need to import `expo-dev-client` at the top of the App.{js|tsx} or [app/_layout.tsx](https://docs.expo.dev/develop/development-builds/use-development-builds/</router/advanced/root-layout>).
App.js
Copy
```
import 'expo-dev-client';

```

> This will only affect the application in which you make this change. If you want to load multiple projects from a single development app, you'll need to add this import statement to each project.
## Start the development server[](https://docs.expo.dev/develop/development-builds/use-development-builds/<#start-the-development-server>)
To start developing, run the following command to start the development server:
Terminal
Copy
`- ``npx expo start`
To open the project inside your development client:
  * Press `a` or `i` keys to open your project on an Android Emulator or an iOS Simulator.
  * On a physical device, scan the QR code from your system's camera or a QR code reader to open the project on your device.


## The launcher screen[](https://docs.expo.dev/develop/development-builds/use-development-builds/<#the-launcher-screen>)
If you launch the development build from your device's Home screen, you will see your launcher screen, which looks similar to the following:
![The launcher screen of a development build](https://docs.expo.dev/static/images/dev-client/launcher-screen.png)
If a bundler is detected on your local network, or if you have signed in to an Expo account in both Expo CLI and your development build, you can connect to it directly from this screen. Otherwise, you can connect by scanning the QR code displayed by the Expo CLI.
## Rebuild a development build[](https://docs.expo.dev/develop/development-builds/use-development-builds/<#rebuild-a-development-build>)
If you add a library to your project that contains native code APIs, for example, `expo-secure-store`[](https://docs.expo.dev/develop/development-builds/use-development-builds/</versions/latest/sdk/securestore>), you will have to rebuild the development client. This is because the native code of the library is not included in the development client automatically when installing the library as a dependency on your project.
## Debug a development build[](https://docs.expo.dev/develop/development-builds/use-development-builds/<#debug-a-development-build>)
When you need to, you can access the menu by pressing `Cmd ⌘` + `d` or `Ctrl` + `d` in Expo CLI or by shaking your phone or tablet. Here you'll be able to access all of the functions of your development build, any debugging functionality you need, or switch to a different version of your app.
See [Debugging](https://docs.expo.dev/develop/development-builds/use-development-builds/</debugging/runtime-issues>) guide for more information.
[Previous (Develop - Development builds)Create a build](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/create-a-build>)[Next (Develop - Development builds)Share with your team](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/share-with-your-team>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/use-development-builds.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/development-builds/use-development-builds/<https:/expo.dev/privacy>).
On this page
[Add error handling](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/use-development-builds/#add-error-handling>)[Start the development server](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/use-development-builds/#start-the-development-server>)[The launcher screen](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/use-development-builds/#the-launcher-screen>)[Rebuild a development build](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/use-development-builds/#rebuild-a-development-build>)[Debug a development build](https://docs.expo.dev/develop/development-builds/use-development-builds/</develop/development-builds/use-development-builds/#debug-a-development-build>)
