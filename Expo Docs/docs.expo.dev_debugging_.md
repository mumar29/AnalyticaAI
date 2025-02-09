[](https://docs.expo.dev/debugging/<https:/expo.dev>)[Docs](https://docs.expo.dev/debugging/</>)
[Blog](https://docs.expo.dev/debugging/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/debugging/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/debugging/<https:/github.com/expo/expo>)[](https://docs.expo.dev/debugging/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/debugging/</>)[Guides](https://docs.expo.dev/debugging/</guides/overview>)[EAS](https://docs.expo.dev/debugging/</eas>)[Reference](https://docs.expo.dev/debugging/</versions/latest>)[Learn](https://docs.expo.dev/debugging/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/debugging/</get-started/introduction>)[Create a project](https://docs.expo.dev/debugging/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/debugging/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/debugging/</get-started/start-developing>)[Next steps](https://docs.expo.dev/debugging/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/debugging/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Errors and warnings](https://docs.expo.dev/debugging/</debugging/errors-and-warnings>)[Runtime issues](https://docs.expo.dev/debugging/</debugging/runtime-issues>)[Tools](https://docs.expo.dev/debugging/</debugging/tools>)[Dev tools plugins](https://docs.expo.dev/debugging/</debugging/devtools-plugins>)[Create a dev tools plugin](https://docs.expo.dev/debugging/</debugging/create-devtools-plugins>)
[Authentication](https://docs.expo.dev/debugging/</develop/authentication>)[Unit testing](https://docs.expo.dev/debugging/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/debugging/</review/overview>)[Share previews with your team](https://docs.expo.dev/debugging/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/debugging/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/debugging/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/debugging/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/debugging/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/debugging/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/debugging/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/debugging/</core-concepts>)[FAQ](https://docs.expo.dev/debugging/</faq>)
[Archive](https://docs.expo.dev/debugging/</archive>)[Expo Snack](https://docs.expo.dev/debugging/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/debugging/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/debugging/<https:/expo.dev/mailing-list/signup>)
# Debugging runtime issues
[Edit this page](https://docs.expo.dev/debugging/<https:/github.com/expo/expo/edit/main/docs/pages/debugging/runtime-issues.mdx> "Edit content of this page on GitHub")
Learn about different techniques available to debug your Expo project.
[Edit this page](https://docs.expo.dev/debugging/<https:/github.com/expo/expo/edit/main/docs/pages/debugging/runtime-issues.mdx> "Edit content of this page on GitHub")
Whether you're developing your app locally, sending it out to select beta testers, or launching your app live to the app stores, you'll always find yourself debugging issues. It's useful to split errors into two categories:
  * Errors you encounter in the development
  * Errors you (or your users) encounter in production


Let's go through recommended practices when dealing with each of the above situations.
## Development errors[](https://docs.expo.dev/debugging/<#development-errors>)
They are common errors that you encounter while developing your app. Delving into them isn't always straightforward. Usually, debugging when running your app with [Expo CLI](https://docs.expo.dev/debugging/</more/expo-cli>) is enough.
One way you can debug these issues is by looking at the [stack trace](https://docs.expo.dev/debugging/</debugging/errors-and-warnings#stack-traces>). However, in some scenarios, looking at the stack trace isn't enough as the error message traced might be a little more cryptic. For such errors, follow the steps below:
  * Search for the error message in Google and [Stack Overflow](https://docs.expo.dev/debugging/<https:/stackoverflow.com/questions>), it's likely you're not the first person to ever run into this.
  * Isolate the code that's throwing the error. This step is _vital_ in fixing obscure errors. To do this: 
    * Revert to a working version of your code. This may even be a completely blank `npx create-expo-app` project.
    * Apply your recent changes piece by piece, until it breaks.
    * If the code you're adding in each "piece" is complex, you may want to simplify what you're doing. For example, if you use a state management library such as Redux, you can try removing that from the equation completely to see if the issue lies in your state management (which is common in React apps).
    * This should narrow down the possible sources of the error, and provide you with more information to search the internet for others who have had the same problem.
  * Use breakpoints (or `console.log`s) to check and make sure a certain piece of code is being run, or that a variable has a certain value. Using `console.log` for debugging isn't considered the best practice, however, it's fast, easy, and oftentimes provides some illuminating information.


Simplifying code as much as possible to track down the source of error is a great way to debug your app and it gets exponentially easier. That's why many open-source repositories require a [minimal reproducible example](https://docs.expo.dev/debugging/<https:/stackoverflow.com/help/minimal-reproducible-example>) when you open an issue. It ensures you have isolated the issue and identified exactly where the problem occurs. If your app is too large and complex to do that, try and extract the functionality you're trying to add in a blank `npx create-expo-app` project, and go from there.
### Native debugging[](https://docs.expo.dev/debugging/<#native-debugging>)
You can perform full native debugging with Android Studio and Xcode by generating source code locally and building from that source.
#### Android Studio[](https://docs.expo.dev/debugging/<#android-studio>)
1
Generate the native code for your project by running the following command:
Terminal
Copy
`- ``npx expo prebuild -p android`
This will add an android directory at the root of your project.
2
Open the project in Android Studio by running the command:
Terminal
Copy
`- ``open -a "/Applications/Android Studio.app" ./android`
3
Build the app from Android Studio and connect the debugger. See [Google's documentation](https://docs.expo.dev/debugging/<https:/developer.android.com/studio/debug#startdebug>) for more information.
> You can delete the android directory when you are done with this process. This ensures that your project remains managed by Expo CLI. Keeping the directory around and manually modifying it outside of `npx expo prebuild` means you'll need to manually upgrade and configure native libraries yourself.
#### Xcode[](https://docs.expo.dev/debugging/<#xcode>)
> This is only available for macOS users and requires Xcode to be installed.
1
Generate the native code for your project by running the following command:
Terminal
Copy
`- ``npx expo prebuild -p ios`
This will add an ios directory at the root of your project.
2
Open the project in Xcode by running the command which is a shortcut to open the `.xcworkspace` file from your project's ios directory in Xcode.
Terminal
Copy
`- ``xed ios`
3
Build the app with `Cmd ⌘` + `r` or by pressing the play button in the upper left corner of Xcode.
4
You can now utilize [Low-level debugger (LLDB)](https://docs.expo.dev/debugging/<https:/developer.apple.com/library/archive/documentation/IDEs/Conceptual/gdb_to_lldb_transition_guide/document/Introduction.html>) and all of the other [Xcode debugging tools](https://docs.expo.dev/debugging/<https:/developer.apple.com/documentation/metal/debugging_tools>) to examine the native runtime.
> You can delete the ios directory when you are done with this process. This ensures that your project remains managed by Expo CLI. Keeping the directory around and manually modifying it outside of `npx expo prebuild` means you'll need to manually upgrade and configure native libraries yourself.
## Production errors[](https://docs.expo.dev/debugging/<#production-errors>)
Errors or bugs in your production app can be much harder to solve, mainly because you have less context around the error (that is, where, how, and why did the error occur?).
The best first step in addressing a production error is to reproduce it locally. Once you reproduce an error locally, you can follow the [development debugging process](https://docs.expo.dev/debugging/</debugging/runtime-issues#development-errors>) to isolate and address the root cause.
> Tip: Sometimes, running your app in production mode locally will show errors that normally wouldn't be thrown. You can run the app locally in production by running `npx expo start --no-dev --minify`. `--no-dev` tells the server not to be run in development mode, and `--minify` is used to minify your code the same way it is for production JavaScript bundles.
### Production app is crashing[](https://docs.expo.dev/debugging/<#production-app-is-crashing>)
It can be a frustrating scenario when a production app crashes. There is very little information to look into when it happens. It's important to reproduce the issue, and even if you can't do that, to find any related crash reports.
Start by reproducing the crash using your production app and then find an associated crash report. For Android, you can use `adb logcat` and for iOS you can use the Console app in Xcode.
[![How to use Logcat & macOS Console to debug](https://i3.ytimg.com/vi/LvCci4Bwmpc/maxresdefault.jpg)How to use Logcat & macOS Console to debugIn this tutorial, you'll learn how to use native device logging features like ADB Logcat and macOS Console to find bugs in your code and quickly fix them.](https://docs.expo.dev/debugging/<https:/www.youtube.com/watch?v=LvCci4Bwmpc>)
#### Crash reports using adb logcat[](https://docs.expo.dev/debugging/<#crash-reports-using-adb-logcat>)
If your Android app is on Google Play, refer to the crashes section of the [Google Play Console](https://docs.expo.dev/debugging/<https:/play.google.com/console/about/>), or connect your Android device to your computer and run the following command:
Terminal
Copy
`- ``adb logcat`
The Android Debug Bridge (`adb`) program is part of the Android SDK and allows you to view streaming logs. An alternative to avoid installing Android SDK is to use [WebADB](https://docs.expo.dev/debugging/<https:/webadb.com/>) in Chrome.
#### Crash reports using Console app[](https://docs.expo.dev/debugging/<#crash-reports-using-console-app>)
If your iOS app is on TestFlight or the App Store, you can use the [Crashes Organizer](https://docs.expo.dev/debugging/<https:/developer.apple.com/news/?id=nra79npr>) in Xcode.
If not, you can use the Console app in Xcode by connecting your device to your Mac. Follow the steps below on how to access the Console app:
1
Open Xcode app, and then open Devices and Simulators window by pressing `Shift` + `Cmd ⌘` + `2`.
2
If you have connected a physical device, select it under Devices. Otherwise, if you are using a simulator, select it under Simulators.
![Devices and Simulators window in Xcode.](https://docs.expo.dev/static/images/debugging/devices-simulators.png)
3
Click on Open Console button shown in the window to open the console app.
![Devices and Simulators window in Xcode.](https://docs.expo.dev/static/images/debugging/open-console.png)
This will open the console app for you to view logs from your device or simulator.
For more information, see Apple's [Diagnosing Issues Using Crash Reports and Device Logs](https://docs.expo.dev/debugging/<https:/developer.apple.com/documentation/xcode/diagnosing-issues-using-crash-reports-and-device-logs>) guide.
### App crashes on certain (older) devices[](https://docs.expo.dev/debugging/<#app-crashes-on-certain-older-devices>)
This might indicate that there is a performance issue. You likely need to run your app through a profiler to get a better idea of what processes are killing the app, and [React Native provides some great documentation for this](https://docs.expo.dev/debugging/<https:/reactnative.dev/docs/profiling>). We also recommend using [React DevTools](https://docs.expo.dev/debugging/<https:/www.npmjs.com/package/react-devtools>) and the included profiler, which makes it super easy to identify performance sinks in your app.
### Using error reporting services[](https://docs.expo.dev/debugging/<#using-error-reporting-services>)
Implementing a crash and bug reporting service in your production app offers several benefits, such as:
  * Real-time insights on production deployments with information to reproduce crashes and bugs.
  * Setting up an alert system to get notified about fatal JavaScript errors or any other event you configure.
  * Using a web dashboard to see details on exceptions such as stack traces, device information, and so on.


With Expo, you can integrate a reporting service like [Sentry](https://docs.expo.dev/debugging/</guides/using-sentry>) or [BugSnag](https://docs.expo.dev/debugging/</guides/using-bugsnag>) to get more insights in real-time.
## Stuck?[](https://docs.expo.dev/debugging/<#stuck>)
The Expo community and the React and React Native communities are great resources for help when you get stuck. There's a good chance someone else has run into the same error as you, so make sure to read the documentation, search the [forums](https://docs.expo.dev/debugging/<https:/chat.expo.dev/>), [GitHub issues](https://docs.expo.dev/debugging/<https:/github.com/expo/expo/issues/>), and [Stack Overflow](https://docs.expo.dev/debugging/<https:/stackoverflow.com/>).
[Previous (Develop - Debugging)Errors and warnings](https://docs.expo.dev/debugging/</debugging/errors-and-warnings>)[Next (Develop - Debugging)Tools](https://docs.expo.dev/debugging/</debugging/tools>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/debugging/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/debugging/<https:/github.com/expo/expo/edit/main/docs/pages/debugging/runtime-issues.mdx>)
  * Last updated on October 11, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/debugging/<https:/expo.dev/privacy>).
On this page
[Development errors](https://docs.expo.dev/debugging/</debugging/runtime-issues/#development-errors>)[Native debugging](https://docs.expo.dev/debugging/</debugging/runtime-issues/#native-debugging>)[Production errors](https://docs.expo.dev/debugging/</debugging/runtime-issues/#production-errors>)[Production app is crashing](https://docs.expo.dev/debugging/</debugging/runtime-issues/#production-app-is-crashing>)[App crashes on certain (older) devices](https://docs.expo.dev/debugging/</debugging/runtime-issues/#app-crashes-on-certain-older-devices>)[Using error reporting services](https://docs.expo.dev/debugging/</debugging/runtime-issues/#using-error-reporting-services>)[Stuck?](https://docs.expo.dev/debugging/</debugging/runtime-issues/#stuck>)
