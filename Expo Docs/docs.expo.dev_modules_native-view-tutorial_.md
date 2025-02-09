[](https://docs.expo.dev/modules/native-view-tutorial/<https:/expo.dev>)[Docs](https://docs.expo.dev/modules/native-view-tutorial/</>)
[Blog](https://docs.expo.dev/modules/native-view-tutorial/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/modules/native-view-tutorial/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/modules/native-view-tutorial/<https:/github.com/expo/expo>)[](https://docs.expo.dev/modules/native-view-tutorial/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/modules/native-view-tutorial/</>)[Guides](https://docs.expo.dev/modules/native-view-tutorial/</guides/overview>)[EAS](https://docs.expo.dev/modules/native-view-tutorial/</eas>)[Reference](https://docs.expo.dev/modules/native-view-tutorial/</versions/latest>)[Learn](https://docs.expo.dev/modules/native-view-tutorial/</tutorial/overview>)
[Overview](https://docs.expo.dev/modules/native-view-tutorial/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/modules/native-view-tutorial/</workflow/overview>)[Configure with app config](https://docs.expo.dev/modules/native-view-tutorial/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/modules/native-view-tutorial/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/modules/native-view-tutorial/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/modules/native-view-tutorial/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/modules/native-view-tutorial/</guides/permissions>)[Environment variables](https://docs.expo.dev/modules/native-view-tutorial/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/modules/native-view-tutorial/</router/introduction>)[Installation](https://docs.expo.dev/modules/native-view-tutorial/</router/installation>)[Create pages](https://docs.expo.dev/modules/native-view-tutorial/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/modules/native-view-tutorial/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/modules/native-view-tutorial/</router/layouts>)[Error handling](https://docs.expo.dev/modules/native-view-tutorial/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/modules/native-view-tutorial/</modules/overview>)[Get started](https://docs.expo.dev/modules/native-view-tutorial/</modules/get-started>)
Tutorials
[Create a native module](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-module-tutorial>)[Create a native view](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial>)[Create a module with a config plugin](https://docs.expo.dev/modules/native-view-tutorial/</modules/config-plugin-and-native-module-tutorial>)[How to use a standalone Expo module](https://docs.expo.dev/modules/native-view-tutorial/</modules/use-standalone-expo-module-in-your-project>)[Wrap third-party native libraries](https://docs.expo.dev/modules/native-view-tutorial/</modules/third-party-library>)[Integrate in an existing library](https://docs.expo.dev/modules/native-view-tutorial/</modules/existing-library>)[Additional platform support](https://docs.expo.dev/modules/native-view-tutorial/</modules/additional-platform-support>)
Reference
Push notifications
[Overview](https://docs.expo.dev/modules/native-view-tutorial/</push-notifications/overview>)[About notification types](https://docs.expo.dev/modules/native-view-tutorial/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/modules/native-view-tutorial/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/modules/native-view-tutorial/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/modules/native-view-tutorial/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/modules/native-view-tutorial/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/modules/native-view-tutorial/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/modules/native-view-tutorial/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/modules/native-view-tutorial/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/modules/native-view-tutorial/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/modules/native-view-tutorial/</archive>)[Expo Snack](https://docs.expo.dev/modules/native-view-tutorial/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/modules/native-view-tutorial/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/modules/native-view-tutorial/<https:/expo.dev/mailing-list/signup>)
# Tutorial: Creating a native view
[Edit this page](https://docs.expo.dev/modules/native-view-tutorial/<https:/github.com/expo/expo/edit/main/docs/pages/modules/native-view-tutorial.mdx> "Edit content of this page on GitHub")
A tutorial on creating a native view that renders a WebView with Expo Modules API.
[Edit this page](https://docs.expo.dev/modules/native-view-tutorial/<https:/github.com/expo/expo/edit/main/docs/pages/modules/native-view-tutorial.mdx> "Edit content of this page on GitHub")
In this tutorial, you'll build an example module with a native view that renders a WebView. For Android, you'll use the `WebView`[](https://docs.expo.dev/modules/native-view-tutorial/<https:/developer.android.com/reference/android/webkit/WebView>) component, and for iOS, `WKWebView`[](https://docs.expo.dev/modules/native-view-tutorial/<https:/developer.apple.com/documentation/webkit/wkwebview>). Web support can be implemented using an `iframe`[](https://docs.expo.dev/modules/native-view-tutorial/<https:/developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe>) and is left as an exercise for you.
1
## Initialize a new module[](https://docs.expo.dev/modules/native-view-tutorial/<#initialize-a-new-module>)
Create a new module by running the following command and name the example module `expo-web-view`:
Terminal
Copy
`- ``npx create-expo-module expo-web-view`
> Since this is an example library and won't be published, press `return` for all prompts to accept the default values.
2
## Set up workspace[](https://docs.expo.dev/modules/native-view-tutorial/<#set-up-workspace>)
Clean up the default module to start with a clean slate by deleting the following files:
Terminal
Copy
`- ``cd expo-web-view`
`- ``rm src/ExpoWebView.types.ts src/ExpoWebViewModule.ts`
`- ``rm src/ExpoWebView.web.tsx src/ExpoWebViewModule.web.ts`
Locate the following files and replace them with the provided minimal boilerplate:
android/src/main/java/expo/modules/webview/ExpoWebViewModule.kt
Copy
```
package expo.modules.webview
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
class ExpoWebViewModule : Module() {
 override fun definition() = ModuleDefinition {
  Name("ExpoWebView")
  View(ExpoWebView::class) {}
 }
}

```

ios/ExpoWebViewModule.swift
Copy
```
import ExpoModulesCore
public class ExpoWebViewModule: Module {
 public func definition() -> ModuleDefinition {
  Name("ExpoWebView")
  View(ExpoWebView.self) {}
 }
}

```

src/ExpoWebView.tsx
Copy
```
import { ViewProps } from 'react-native';
import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
export type Props = ViewProps;
const NativeView: React.ComponentType<Props> = requireNativeViewManager('ExpoWebView');
export default function ExpoWebView(props: Props) {
 return <NativeView {...props} />;
}

```

src/index.ts
Copy
```
export { default as WebView, Props as WebViewProps } from './ExpoWebView';

```

example/App.tsx
Copy
```
import { WebView } from 'expo-web-view';
export default function App() {
 return <WebView style={{ flex: 1, backgroundColor: 'purple' }} />;
}

```

3
## Run the example project[](https://docs.expo.dev/modules/native-view-tutorial/<#run-the-example-project>)
To ensure everything is working, start the TypeScript compiler to watch for changes and rebuild the module's JavaScript:
Terminal
Copy
`# Run this in the root of the project to start the TypeScript compiler`
`- ``npm run build`
Terminal
`# Navigate to the example directory`
`- ``cd example`
`# Run the example app on Android`
`- ``npx expo run:android`
`# Run the example app on iOS`
`- ``npx expo run:ios`
You should now see a blank purple screen. While it's not very exciting, it's a good start. Next, turn it into a WebView.
4
## Add the system WebView as a subview[](https://docs.expo.dev/modules/native-view-tutorial/<#add-the-system-webview-as-a-subview>)
Add the system `WebView` with a hardcoded URL as a subview of `ExpoWebView`. The `ExpoWebView` class extends `ExpoView`, which extends `RCTView` from React Native, and eventually extends `View` on Android and `UIView` on iOS.
Ensure that the `WebView` subview uses the same layout as `ExpoWebView`, whose layout is calculated by React Native's layout engine.
### Android view[](https://docs.expo.dev/modules/native-view-tutorial/<#android-view>)
On Android, use `LayoutParams` to set the WebView's layout to match the `ExpoWebView` layout. You can do this when you instantiate the WebView.
android/src/main/java/expo/modules/webview/ExpoWebView.kt
Copy
```
package expo.modules.webview
import android.content.Context
import android.webkit.WebView
import android.webkit.WebViewClient
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView
class ExpoWebView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
 internal val webView = WebView(context).also {
  it.layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
  it.webViewClient = object : WebViewClient() {}
  addView(it)
  it.loadUrl("https://docs.expo.dev/modules/")
 }
}

```

### iOS view[](https://docs.expo.dev/modules/native-view-tutorial/<#ios-view>)
On iOS, set `clipsToBounds` to `true` and ensure the WebView's `frame` matches the bounds of `ExpoWebView` in `layoutSubviews`. The `init` method is called when the view is created, and `layoutSubviews` is called when the layout changes.
ios/ExpoWebView.swift
Copy
```
import ExpoModulesCore
import WebKit
class ExpoWebView: ExpoView {
 let webView = WKWebView()
 required init(appContext: AppContext? = nil) {
  super.init(appContext: appContext)
  clipsToBounds = true
  addSubview(webView)
  let url = URL(string:"https://docs.expo.dev/modules/")!
  let urlRequest = URLRequest(url:url)
  webView.load(urlRequest)
 }
 override func layoutSubviews() {
  webView.frame = bounds
 }
}

Show More

```

### Example app[](https://docs.expo.dev/modules/native-view-tutorial/<#example-app>)
No changes are required. Rebuild and run the app using the following commands:
Terminal
`# Prebuild the example app with the --clean flag to ensure a clean build`
`- ``npx expo prebuild --clean`
`# Run the example app on Android`
`- ``npx expo run:android`
`# Run the example app on iOS`
`- ``npx expo run:ios`
After that, you'll see the [Expo Modules API overview page](https://docs.expo.dev/modules/native-view-tutorial/</modules/overview>) rendered. If the changes aren't reflected, try reinstalling the app.
5
## Add a prop to set the URL[](https://docs.expo.dev/modules/native-view-tutorial/<#add-a-prop-to-set-the-url>)
To set a prop on the view, define the prop name and setter inside `ExpoWebViewModule`. In this case, you can access the `webView` property directly for convenience. However, in real-world scenarios, keep the logic inside the `ExpoWebView` class to minimize how much `ExpoWebViewModule` knows about its internals.
Use the [Prop definition component](https://docs.expo.dev/modules/native-view-tutorial/</modules/module-api#prop>) to define the prop. In the prop setter block, you can access both the view and the prop. Specify that the URL is of type `URL` — the Expo modules API will convert strings to the native `URL` type.
### Android module[](https://docs.expo.dev/modules/native-view-tutorial/<#android-module>)
android/src/main/java/expo/modules/webview/ExpoWebViewModule.kt
Copy
```
package expo.modules.webview
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL
class ExpoWebViewModule : Module() {
 override fun definition() = ModuleDefinition {
  Name("ExpoWebView")
  View(ExpoWebView::class) {
   Prop("url") { view: ExpoWebView, url: URL? ->
    view.webView.loadUrl(url.toString())
   }
  }
 }
}

```

### iOS module[](https://docs.expo.dev/modules/native-view-tutorial/<#ios-module>)
ios/ExpoWebViewModule.swift
Copy
```
import ExpoModulesCore
public class ExpoWebViewModule: Module {
 public func definition() -> ModuleDefinition {
  Name("ExpoWebView")
  View(ExpoWebView.self) {
   Prop("url") { (view, url: URL) in
    if view.webView.url != url {
     let urlRequest = URLRequest(url: url)
     view.webView.load(urlRequest)
    }
   }
  }
 }
}

```

### TypeScript module[](https://docs.expo.dev/modules/native-view-tutorial/<#typescript-module>)
Next, add the `url` prop to the `Props` type.
src/ExpoWebView.tsx
Copy
```
import { ViewProps } from 'react-native';
import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
export type Props = {
 url?: string;
} & ViewProps;
const NativeView: React.ComponentType<Props> = requireNativeViewManager('ExpoWebView');
export default function ExpoWebView(props: Props) {
 return <NativeView {...props} />;
}

```

### Example app[](https://docs.expo.dev/modules/native-view-tutorial/<#example-app-1>)
Finally, pass a `URL` to your `WebView` component in the example app.
example/App.tsx
Copy
```
import { WebView } from 'expo-web-view';
export default function App() {
 return <WebView style={{ flex: 1 }} url="https://expo.dev" />;
}

```

Rebuild the example app:
Terminal
`- ``npx expo prebuild --clean`
`# Run the example app on Android`
`- ``npx expo run:android`
`# Run the example app on iOS`
`- ``npx expo run:ios`
After that, you'll see the [Expo homepage](https://docs.expo.dev/modules/native-view-tutorial/<https:/expo.dev>) in the WebView.
6
## Add an event to notify when the page has loaded[](https://docs.expo.dev/modules/native-view-tutorial/<#add-an-event-to-notify-when-the-page-has-loaded>)
[View callbacks](https://docs.expo.dev/modules/native-view-tutorial/</modules/module-api#view-callbacks>) allow developers to listen for events on components. They are typically registered through props on the component, for example: `<Image onLoad={...} />`. Use the [Events definition component](https://docs.expo.dev/modules/native-view-tutorial/</modules/module-api#events>) to define an event for your WebView. Call it `onLoad`.
### Android view and module[](https://docs.expo.dev/modules/native-view-tutorial/<#android-view-and-module>)
On Android, override the `onPageFinished` function. Then, call the `onLoad` event handler that you defined in the module.
android/src/main/java/expo/modules/webview/ExpoWebView.kt
Copy
```
package expo.modules.webview
import android.content.Context
import android.webkit.WebView
import android.webkit.WebViewClient
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.viewevent.EventDispatcher
import expo.modules.kotlin.views.ExpoView
class ExpoWebView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
 private val onLoad by EventDispatcher()
 internal val webView = WebView(context).also {
  it.layoutParams = LayoutParams(
   LayoutParams.MATCH_PARENT,
   LayoutParams.MATCH_PARENT
  )
  it.webViewClient = object : WebViewClient() {
   override fun onPageFinished(view: WebView, url: String) {
    onLoad(mapOf("url" to url))
   }
  }
  addView(it)
 }
}

Show More

```

Indicate in `ExpoWebViewModule` that the `View` has an `onLoad` event.
android/src/main/java/expo/modules/webview/ExpoWebViewModule.kt
Copy
```
package expo.modules.webview
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL
class ExpoWebViewModule : Module() {
 override fun definition() = ModuleDefinition {
  Name("ExpoWebView")
  View(ExpoWebView::class) {
   Events("onLoad")
   Prop("url") { view: ExpoWebView, url: URL? ->
    view.webView.loadUrl(url.toString())
   }
  }
 }
}

Show More

```

### iOS view and module[](https://docs.expo.dev/modules/native-view-tutorial/<#ios-view-and-module>)
On iOS, implement `webView(_:didFinish:)` and make `ExpoWebView` extend `WKNavigationDelegate`. Then, call `onLoad` from that delegate method.
ios/ExpoWebView.swift
Copy
```
import ExpoModulesCore
import WebKit
class ExpoWebView: ExpoView, WKNavigationDelegate {
 let webView = WKWebView()
 let onLoad = EventDispatcher()
 required init(appContext: AppContext? = nil) {
  super.init(appContext: appContext)
  clipsToBounds = true
  webView.navigationDelegate = self
  addSubview(webView)
 }
 override func layoutSubviews() {
  webView.frame = bounds
 }
 func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
  if let url = webView.url {
   onLoad([
    "url": url.absoluteString
   ])
  }
 }
}

Show More

```

Indicate in `ExpoWebViewModule` that the `View` has an `onLoad` event.
ios/ExpoWebViewModule.swift
Copy
```
import ExpoModulesCore
public class ExpoWebViewModule: Module {
 public func definition() -> ModuleDefinition {
  Name("ExpoWebView")
  View(ExpoWebView.self) {
   Events("onLoad")
   Prop("url") { (view, url: URL) in
    if view.webView.url != url {
     let urlRequest = URLRequest(url: url)
     view.webView.load(urlRequest)
    }
   }
  }
 }
}

Show More

```

### TypeScript module[](https://docs.expo.dev/modules/native-view-tutorial/<#typescript-module-1>)
Event payloads are included within the `nativeEvent` property of the event. To access the `url` from the `onLoad` event, read `event.nativeEvent.url`.
src/ExpoWebView.tsx
Copy
```
import { ViewProps } from 'react-native';
import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
export type OnLoadEvent = {
 url: string;
};
export type Props = {
 url?: string;
 onLoad?: (event: { nativeEvent: OnLoadEvent }) => void;
} & ViewProps;
const NativeView: React.ComponentType<Props> = requireNativeViewManager('ExpoWebView');
export default function ExpoWebView(props: Props) {
 return <NativeView {...props} />;
}

Show More

```

### Example app[](https://docs.expo.dev/modules/native-view-tutorial/<#example-app-2>)
Update the example app to show an alert when the page has loaded. Copy the following code, then rebuild and run your app, and you'll see the alert!
example/App.tsx
Copy
```
import { WebView } from 'expo-web-view';
export default function App() {
 return (
  <WebView
   style={{ flex: 1 }}
   url="https://expo.dev"
   onLoad={event => alert(`loaded ${event.nativeEvent.url}`)}
  />
 );
}

```

7
## Bonus: Build a web browser UI around it[](https://docs.expo.dev/modules/native-view-tutorial/<#bonus-build-a-web-browser-ui-around-it>)
Now that you have a WebView, build a web browser UI around it. Try rebuilding a browser UI, and feel free to add new native capabilities as needed (for example, support for back or reload buttons). If you need inspiration, see the example below.
example/App.tsx[](https://docs.expo.dev/modules/native-view-tutorial/<#exampleapptsx>)
App.tsx
Copy
```
import { useState } from 'react';
import { ActivityIndicator, Platform, Text, TextInput, View } from 'react-native';
import { WebView } from 'expo-web-view';
export default function App() {
 const [inputUrl, setInputUrl] = useState('https://docs.expo.dev/modules/');
 const [url, setUrl] = useState(inputUrl);
 const [isLoading, setIsLoading] = useState(true);
 return (
  <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 80 : 30 }}><TextInput
    value={inputUrl}
    onChangeText={setInputUrl}
    returnKeyType="go"
    autoCapitalize="none"
    onSubmitEditing={() => {
     if (inputUrl !== url) {
      setUrl(inputUrl);
      setIsLoading(true);
     }
    }}
    keyboardType="url"
    style={{
     color: '#fff',
     backgroundColor: '#000',
     borderRadius: 10,
     marginHorizontal: 10,
     paddingHorizontal: 20,
     height: 60,
    }}
   /><WebView
    url={url.startsWith('https://') || url.startsWith('http://') ? url : `https://${url}`}
    onLoad={() => setIsLoading(false)}
    style={{ flex: 1, marginTop: 20 }}
   /><LoadingView isLoading={isLoading} /></View>
 );
}
function LoadingView({ isLoading }: { isLoading: boolean }) {
 if (!isLoading) {
  return null;
 }
 return (
  <View
   style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
   }}><ActivityIndicator animating={isLoading} color="#fff" style={{ marginRight: 10 }} /><Text style={{ color: '#fff' }}>Loading...</Text></View>
 );
}

Show More

```

![A simple web browser UI built around our WebView](https://docs.expo.dev/static/images/modules/native-view-tutorial/web-browser.png)
Congratulations! You've created your first Expo module with a native view for Android and iOS.
## Next steps[](https://docs.expo.dev/modules/native-view-tutorial/<#next-steps>)
[Expo Modules API ReferenceCreate native modules using Kotlin and Swift.](https://docs.expo.dev/modules/native-view-tutorial/</modules/module-api>) [Tutorial: Creating a native moduleA tutorial on creating a native module that persists settings with Expo Modules API.](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-module-tutorial>)
[Previous (Expo Modules API - Tutorials)Create a native module](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-module-tutorial>)[Next (Expo Modules API - Tutorials)Create a module with a config plugin](https://docs.expo.dev/modules/native-view-tutorial/</modules/config-plugin-and-native-module-tutorial>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/modules/native-view-tutorial/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/modules/native-view-tutorial/<https:/github.com/expo/expo/edit/main/docs/pages/modules/native-view-tutorial.mdx>)
  * Last updated on November 02, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/modules/native-view-tutorial/<https:/expo.dev/privacy>).
On this page
[Initialize a new module](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#initialize-a-new-module>)[Set up workspace](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#set-up-workspace>)[Run the example project](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#run-the-example-project>)[Add the system WebView as a subview](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#add-the-system-webview-as-a-subview>)[Android view](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#android-view>)[iOS view](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#ios-view>)[Example app](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#example-app>)[Add a prop to set the URL](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#add-a-prop-to-set-the-url>)[Android module](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#android-module>)[iOS module](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#ios-module>)[TypeScript module](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#typescript-module>)[Example app](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#example-app-1>)[Add an event to notify when the page has loaded](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#add-an-event-to-notify-when-the-page-has-loaded>)[Android view and module](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#android-view-and-module>)[iOS view and module](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#ios-view-and-module>)[TypeScript module](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#typescript-module-1>)[Example app](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#example-app-2>)[Bonus: Build a web browser UI around it](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#bonus-build-a-web-browser-ui-around-it>)[Next steps](https://docs.expo.dev/modules/native-view-tutorial/</modules/native-view-tutorial/#next-steps>)
