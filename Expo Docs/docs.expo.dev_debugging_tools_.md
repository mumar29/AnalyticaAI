[](https://docs.expo.dev/debugging/tools/<https:/expo.dev>)[Docs](https://docs.expo.dev/debugging/tools/</>)
[Blog](https://docs.expo.dev/debugging/tools/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/debugging/tools/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/debugging/tools/<https:/github.com/expo/expo>)[](https://docs.expo.dev/debugging/tools/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/debugging/tools/</>)[Guides](https://docs.expo.dev/debugging/tools/</guides/overview>)[EAS](https://docs.expo.dev/debugging/tools/</eas>)[Reference](https://docs.expo.dev/debugging/tools/</versions/latest>)[Learn](https://docs.expo.dev/debugging/tools/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/debugging/tools/</get-started/introduction>)[Create a project](https://docs.expo.dev/debugging/tools/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/debugging/tools/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/debugging/tools/</get-started/start-developing>)[Next steps](https://docs.expo.dev/debugging/tools/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/debugging/tools/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Errors and warnings](https://docs.expo.dev/debugging/tools/</debugging/errors-and-warnings>)[Runtime issues](https://docs.expo.dev/debugging/tools/</debugging/runtime-issues>)[Tools](https://docs.expo.dev/debugging/tools/</debugging/tools>)[Dev tools plugins](https://docs.expo.dev/debugging/tools/</debugging/devtools-plugins>)[Create a dev tools plugin](https://docs.expo.dev/debugging/tools/</debugging/create-devtools-plugins>)
[Authentication](https://docs.expo.dev/debugging/tools/</develop/authentication>)[Unit testing](https://docs.expo.dev/debugging/tools/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/debugging/tools/</review/overview>)[Share previews with your team](https://docs.expo.dev/debugging/tools/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/debugging/tools/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/debugging/tools/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/debugging/tools/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/debugging/tools/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/debugging/tools/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/debugging/tools/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/debugging/tools/</core-concepts>)[FAQ](https://docs.expo.dev/debugging/tools/</faq>)
[Archive](https://docs.expo.dev/debugging/tools/</archive>)[Expo Snack](https://docs.expo.dev/debugging/tools/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/debugging/tools/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/debugging/tools/<https:/expo.dev/mailing-list/signup>)
# Debugging and profiling tools
[Edit this page](https://docs.expo.dev/debugging/tools/<https:/github.com/expo/expo/edit/main/docs/pages/debugging/tools.mdx> "Edit content of this page on GitHub")
Learn about different tools available to inspect your Expo project at runtime.
[Edit this page](https://docs.expo.dev/debugging/tools/<https:/github.com/expo/expo/edit/main/docs/pages/debugging/tools.mdx> "Edit content of this page on GitHub")
React Native consists of both JavaScript and native code. Making this distinction is very important when it comes to debugging. If an error is thrown from the JavaScript code, you might not find it using debugging tools for native code. This page lists a few tools to help you debug your Expo project.
## Developer menu[](https://docs.expo.dev/debugging/tools/<#developer-menu>)
The Developer menu provides access to useful debugging functions. It is built into dev clients and Expo Go. If you are using an emulator, simulator, or have a device connected via USB, you can open this menu by pressing `m` in the terminal where Expo CLI has started the development server.
Alternative options to open the Developer menu[](https://docs.expo.dev/debugging/tools/<#alternative-options-to-open-the-developer-menu>)
  * Android device (without USB): Shake the device vertically.
  * Android Emulator or device (with USB):
    * Press `Cmd ⌘` + `m` or `Ctrl` + `m`.
    * Run the following command in the terminal to simulate pressing the menu button: 
Terminal
Copy
`- ``adb shell input keyevent 82`
  * iOS device (without USB):
    * Shake the device.
    * Touch three fingers to the screen.
  * iOS Simulator or device (with USB):
    * Press `Ctrl` + `Cmd ⌘` + `z` or `Cmd ⌘` + `d`


Once the Developer menu is open, it will appear as below:
![The Expo Go Developer Menu, showing the menu options available.](https://docs.expo.dev/static/images/debugging/developer-menu.png)
The Developer menu provides the following options:
  * Copy link: To copy the dev server address in dev client or `exp://`[](https://docs.expo.dev/debugging/tools/</linking/into-your-app#test-a-link-using-expo-go>) link in Expo of your app.
  * Reload: To reload you app. Usually, not necessary since Fast Refresh is enabled by default.
  * Go Home: To leave your app and navigate back to the dev client's or Expo Go app's Home screen.
  * Toggle performance monitor: To view the performance information about your app.
  * Toggle element inspector: To enable or disable the element inspector overlay.
  * Open JS debugger: To open Chrome DevTools which provides access to Console, Source, and Network tabs for apps using Hermes. For more information, see the [Debugging with Chrome DevTools](https://docs.expo.dev/debugging/tools/</debugging/tools#debugging-with-chrome-devtools>) section.
  * Fast Refresh: To toggle automatic refreshing of the JS bundle whenever you make changes to files in your project using a text editor.


Now, let's explore some of these options in details.
### Toggle performance monitor[](https://docs.expo.dev/debugging/tools/<#toggle-performance-monitor>)
Opens up a small overlay that provides the following performance information about your app:
  * RAM usage of a project.
  * JavaScript heap (this is an easy way to know of any memory leaks in your application).
  * Two Views. The top indicates the number of views for the screen and the bottom indicates the number of views in the component.
  * Frames Per Second for the UI and JS threads. The UI thread is used for native Android or iOS UI rendering. The JS thread is where most of your logic runs, including API calls, touch events, and so on.


### Toggle element inspector[](https://docs.expo.dev/debugging/tools/<#toggle-element-inspector>)
Opens up the element inspector overlay:
![The element inspector overlay which shows details about an element after inspecting it.](https://docs.expo.dev/static/images/debugging/element-inspector.png)
This overlay has capabilities to:
  * Inspect: Inspect elements
  * Perf: Show Performance overlay
  * Network: Show network details
  * Touchables: Highlight touchable elements


## Debugging with Chrome DevTools[](https://docs.expo.dev/debugging/tools/<#debugging-with-chrome-devtools>)
As with websites, you can use Chrome DevTools to gain insights into the JavaScript code of your app. With this tool, you can access the [Console](https://docs.expo.dev/debugging/tools/</debugging/tools#interacting-with-the-console>), [Source](https://docs.expo.dev/debugging/tools/</debugging/tools#pausing-on-breakpoints>), and [Network](https://docs.expo.dev/debugging/tools/</debugging/tools#inspecting-network-requests>) tab when using [dev clients](https://docs.expo.dev/debugging/tools/</more/glossary-of-terms#dev-clients>) or Expo Go.
You can use the Chrome DevTools on any app using Hermes. To open it, start your app and press `j` in the terminal where Expo was started. Once you have opened the Chrome DevTools, it will appear as below:
![The Chrome DevTools, showing one of the files under the source tab.](https://docs.expo.dev/static/images/debugging/inspector-source-tab.png)
### Pausing on breakpoints[](https://docs.expo.dev/debugging/tools/<#pausing-on-breakpoints>)
You can pause your app on specific parts of your code. To do this, set the breakpoint under the Sources tab by clicking the line number, or add the `debugger` statement in your code.
Once your app is executing code that has a breakpoint, it will entirely pause your app. This allows you to inspect all variables and functions in that scope. You can also execute code in the [Console](https://docs.expo.dev/debugging/tools/</debugging/tools#interacting-with-the-console>) tab as part of your app.
![The Chrome DevTools, showing one of the files under the source tab.](https://docs.expo.dev/static/images/debugging/inspector-breakpoint.png)
> Breakpoints set through the Chrome DevTools depend heavily on source maps. Unfortunately, these source maps are not always 100% accurate. In some cases, you might have to use a `debugger` statement instead of a breakpoint.
### Pausing on exceptions[](https://docs.expo.dev/debugging/tools/<#pausing-on-exceptions>)
If your app throws unexpected errors, it can be hard to find the source of the error. You can use Chrome DevTools to pause your app and inspect the stack trace and variables the moment it throws an error.
![Enable Pause on exceptions in the right panel of the sources tab](https://docs.expo.dev/static/images/debugging/inspector-pause-exception.png)
> Some errors might be caught by other components in your app, such as Expo Router. In these cases, you can turn on Pause on caught exceptions. It will enable you to inspect any thrown error, even when handled properly.
### Interacting with the console[](https://docs.expo.dev/debugging/tools/<#interacting-with-the-console>)
The Console tab gives you access to an interactive terminal, connected directly to your app. You can write any JavaScript inside this terminal to execute snippets of code as if it were part of your app. The code is executed in the global scope by default. But, when using breakpoints from the [Source](https://docs.expo.dev/debugging/tools/</debugging/tools#pausing-on-breakpoints>) tab, it executes in the scope of the reached breakpoint. This allows you to invoke methods and access variables throughout your app.
![Use the console with breakpoints to inspect variables and invoke code through your app](https://docs.expo.dev/static/images/debugging/inspector-breakpoint-console.png)
### Inspecting network requests[](https://docs.expo.dev/debugging/tools/<#inspecting-network-requests>)
The Network tab gives you insights into the network requests made by your app. You can inspect each request and response by clicking on them. This includes `fetch` requests, external loaded media, and in some cases, even requests made by native modules.
![Gain insights in the network requests from your app](https://docs.expo.dev/static/images/debugging/inspector-network-post.png)
> See the [Inspecting network traffic](https://docs.expo.dev/debugging/tools/</debugging/tools#inspecting-network-traffic>) for alternative ways to inspect network requests.
## Profiling JavaScript performance[](https://docs.expo.dev/debugging/tools/<#profiling-javascript-performance>)
> Profiles are not yet symbolicated with sourcemaps, and [can only be used in debug builds](https://docs.expo.dev/debugging/tools/<https:/github.com/facebook/hermes/issues/760>). These limitations will be addressed in upcoming releases.
You can enable the JavaScript Profiler tab within Chrome DevTools to record and analyze the performance of your app JavaScript. The Performance tab is not currently supported. To profile the native runtime, use the tools included in Android Studio or Xcode.
### Enable the JavaScript Profiler within Chrome DevTools[](https://docs.expo.dev/debugging/tools/<#enable-the-javascript-profiler-within-chrome-devtools>)
  * Press `⌘ cmd` + `shift` + `p` (Mac) or `ctrl` + `shift` + `p` (Windows, Linux) to open the command palette.
  * Type javascript and select Show JavaScript Profiler.

Screenshot of the Chrome DevTools command palette[](https://docs.expo.dev/debugging/tools/<#screenshot-of-the-chrome-devtools-command-palette>)
![Chrome DevTools showing the command palette.](https://docs.expo.dev/static/images/debugging/profiling-enable.png)
### Record and read profiles from the JavaScript Profiler tab[](https://docs.expo.dev/debugging/tools/<#record-and-read-profiles-from-the-javascript-profiler-tab>)
  * Press Start.
  * Interact with your app.
  * Press Stop to finish recording.
  * Analyze the profile.

Screenshot of the Chrome DevTools with the JavaScript Profiler tab open[](https://docs.expo.dev/debugging/tools/<#screenshot-of-the-chrome-devtools-with-the>)
![JavaScript Profiler tab opened in the Chrome DevTools.](https://docs.expo.dev/static/images/debugging/profiling-start.png)
## Debugging with VS Code[](https://docs.expo.dev/debugging/tools/<#debugging-with-vs-code>)
> VS Code debugger integration is experimental. For the most stable debugging experience, [use the Chrome DevTools built into Expo CLI](https://docs.expo.dev/debugging/tools/</debugging/tools#debugging-with-chrome-devtools>).
VS Code is a popular code editor, which has a built-in debugger. This debugger uses the same system as the Chrome DevTools — the inspector protocol.
You can use this debugger with the [Expo Tools](https://docs.expo.dev/debugging/tools/<https:/github.com/expo/vscode-expo#readme>) VS Code extension. This debugger allows you to set breakpoints, inspect variables, and execute code through the debug console.
![Debug your code while you write it](https://docs.expo.dev/static/images/debugging/vscode-expo.png)
To start debugging:
  * Connect your app
  * Open VS Code command palette (based on your computer, it's either `Ctrl` + `Shift` + `p` or `Cmd ⌘` + `Shift` + `p`)
  * Run the Expo: Debug ... VS Code command.


This will attach VS Code to your running app.
## Debugging with React DevTools[](https://docs.expo.dev/debugging/tools/<#debugging-with-react-devtools>)
React DevTools is a great way to look at your components' props and state. You can open it by pressing `Shift` + `m` in the terminal where Expo was started. Once it's open, it will appear as below:
![Inspect your components using the React DevTools](https://docs.expo.dev/static/images/debugging/react-devtools.png)
React DevTools can also be paired with the [element inspector](https://docs.expo.dev/debugging/tools/</debugging/tools#showhide-element-inspector>), allowing you to inspect props, state, and instance properties by tapping components inside your app.
Pressing the `shift` + `m` shortcut will also show installed [dev tools plugins](https://docs.expo.dev/debugging/tools/</debugging/devtools-plugins>) to provide additional ways to inspect your app.
## React Native Debugger[](https://docs.expo.dev/debugging/tools/<#react-native-debugger>)
> The React Native Debugger requires Remote JS debugging, which has been deprecated since [React Native 0.73](https://docs.expo.dev/debugging/tools/<https:/reactnative.dev/docs/other-debugging-methods#remote-javascript-debugging-deprecated>).
The React Native Debugger is a standalone app that wraps the React DevTools, Redux DevTools, and the Chrome DevTools. Unfortunately, it requires the [deprecated Remote JS debugging workflow](https://docs.expo.dev/debugging/tools/<https:/github.com/jhen0409/react-native-debugger/discussions/774>) and is incompatible with Hermes.
If you are using Expo SDK 50 or above, you can use the [Expo dev tools plugins](https://docs.expo.dev/debugging/tools/</debugging/devtools-plugins>) equivalents to the React Native Debugger:
  * [React DevTools](https://docs.expo.dev/debugging/tools/</debugging/tools#debugging-with-react-devtools>)
  * [Redux DevTools](https://docs.expo.dev/debugging/tools/</debugging/devtools-plugins#redux>)
  * [Chrome DevTools](https://docs.expo.dev/debugging/tools/</debugging/tools#debugging-with-chrome-devtools>)


If you are using Expo SDK 49 or below, you can use the React Native Debugger. This section provides quick get started instructions. For in-depth information, check its [documentation](https://docs.expo.dev/debugging/tools/<https:/github.com/jhen0409/react-native-debugger#documentation>).
You can install it via the [release page](https://docs.expo.dev/debugging/tools/<https:/github.com/jhen0409/react-native-debugger/releases>), or if you're on macOS you can run:
Terminal
Copy
`- ``brew install react-native-debugger`
### Startup[](https://docs.expo.dev/debugging/tools/<#startup>)
After firing up React Native Debugger, you'll need to specify the port (shortcuts: `Cmd ⌘` + `t` on macOS, `Ctrl` + `t` on Linux/Windows) to `8081`. After that, run your project with `npx expo start`, and select `Debug remote JS` from the Developer Menu. The debugger should automatically connect.
In the debugger console, you can see the Element tree, as well as the props, state, and children of whatever element you select. You also have the Chrome console on the right, and if you type `$r` in the console, you will see the breakdown of your selected element.
If you right-click anywhere in the React Native Debugger, you'll get some handy shortcuts to reload your JS, enable/disable the element inspector, network inspector, and to log and clear your `AsyncStorage` content.
### Inspecting network traffic[](https://docs.expo.dev/debugging/tools/<#inspecting-network-traffic>)
It's easy to use the React Native Debugger to debug your network request: right-click anywhere in the React Native Debugger and select `Enable Network Inspect`. This will enable the Network tab and allow you to inspect requests of `fetch` and `XMLHttpRequest`.
There are however [some limitations](https://docs.expo.dev/debugging/tools/<https:/github.com/jhen0409/react-native-debugger/blob/master/docs/network-inspect-of-chrome-devtools.md#limitations>), so there are a few other alternatives, all of which require using a proxy:
  * [Charles Proxy](https://docs.expo.dev/debugging/tools/<https:/www.charlesproxy.com/documentation/configuration/browser-and-system-configuration/>) (~$50 USD, our preferred tool)
  * [Proxyman](https://docs.expo.dev/debugging/tools/<https:/proxyman.io>) (Free version available or $49 to $59 USD)
  * [mitmproxy](https://docs.expo.dev/debugging/tools/<https:/medium.com/@rotxed/how-to-debug-http-s-traffic-on-android-7fbe5d2a34#.hnhanhyoz>)
  * [Fiddler](https://docs.expo.dev/debugging/tools/<http:/www.telerik.com/fiddler>)


## Debugging production apps[](https://docs.expo.dev/debugging/tools/<#debugging-production-apps>)
In reality, apps often ship with bugs. Implementing a crash and bug reporting system can help you get real-time insights of your production apps. See [Using error reporting services](https://docs.expo.dev/debugging/tools/</debugging/runtime-issues#using-error-reporting-services>) for more details.
[Previous (Develop - Debugging)Runtime issues](https://docs.expo.dev/debugging/tools/</debugging/runtime-issues>)[Next (Develop - Debugging)Dev tools plugins](https://docs.expo.dev/debugging/tools/</debugging/devtools-plugins>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/debugging/tools/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/debugging/tools/<https:/github.com/expo/expo/edit/main/docs/pages/debugging/tools.mdx>)
  * Last updated on October 07, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/debugging/tools/<https:/expo.dev/privacy>).
On this page
[Developer menu](https://docs.expo.dev/debugging/tools/</debugging/tools/#developer-menu>)[Toggle performance monitor](https://docs.expo.dev/debugging/tools/</debugging/tools/#toggle-performance-monitor>)[Toggle element inspector](https://docs.expo.dev/debugging/tools/</debugging/tools/#toggle-element-inspector>)[Debugging with Chrome DevTools](https://docs.expo.dev/debugging/tools/</debugging/tools/#debugging-with-chrome-devtools>)[Pausing on breakpoints](https://docs.expo.dev/debugging/tools/</debugging/tools/#pausing-on-breakpoints>)[Pausing on exceptions](https://docs.expo.dev/debugging/tools/</debugging/tools/#pausing-on-exceptions>)[Interacting with the console](https://docs.expo.dev/debugging/tools/</debugging/tools/#interacting-with-the-console>)[Inspecting network requests](https://docs.expo.dev/debugging/tools/</debugging/tools/#inspecting-network-requests>)[Profiling JavaScript performance](https://docs.expo.dev/debugging/tools/</debugging/tools/#profiling-javascript-performance>)[Enable the JavaScript Profiler within Chrome DevTools](https://docs.expo.dev/debugging/tools/</debugging/tools/#enable-the-javascript-profiler-within-chrome-devtools>)[Record and read profiles from the JavaScript Profiler tab](https://docs.expo.dev/debugging/tools/</debugging/tools/#record-and-read-profiles-from-the-javascript-profiler-tab>)[Debugging with VS Code](https://docs.expo.dev/debugging/tools/</debugging/tools/#debugging-with-vs-code>)[Debugging with React DevTools](https://docs.expo.dev/debugging/tools/</debugging/tools/#debugging-with-react-devtools>)[React Native Debugger](https://docs.expo.dev/debugging/tools/</debugging/tools/#react-native-debugger>)[Startup](https://docs.expo.dev/debugging/tools/</debugging/tools/#startup>)[Inspecting network traffic](https://docs.expo.dev/debugging/tools/</debugging/tools/#inspecting-network-traffic>)[Debugging production apps](https://docs.expo.dev/debugging/tools/</debugging/tools/#debugging-production-apps>)
