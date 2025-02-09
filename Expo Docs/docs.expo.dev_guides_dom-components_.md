[](https://docs.expo.dev/guides/dom-components/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/dom-components/</>)
[Blog](https://docs.expo.dev/guides/dom-components/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/dom-components/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/dom-components/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/dom-components/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/dom-components/</>)[Guides](https://docs.expo.dev/guides/dom-components/</guides/overview>)[EAS](https://docs.expo.dev/guides/dom-components/</eas>)[Reference](https://docs.expo.dev/guides/dom-components/</versions/latest>)[Learn](https://docs.expo.dev/guides/dom-components/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/dom-components/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/dom-components/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/dom-components/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/dom-components/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/dom-components/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/dom-components/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/dom-components/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/dom-components/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
[Develop websites](https://docs.expo.dev/guides/dom-components/</workflow/web>)[Publish websites](https://docs.expo.dev/guides/dom-components/</guides/publishing-websites>)[DOM components](https://docs.expo.dev/guides/dom-components/</guides/dom-components>)[Progressive web apps](https://docs.expo.dev/guides/dom-components/</guides/progressive-web-apps>)[Tailwind CSS](https://docs.expo.dev/guides/dom-components/</guides/tailwind>)
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/dom-components/</router/introduction>)[Installation](https://docs.expo.dev/guides/dom-components/</router/installation>)[Create pages](https://docs.expo.dev/guides/dom-components/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/dom-components/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/dom-components/</router/layouts>)[Error handling](https://docs.expo.dev/guides/dom-components/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/dom-components/</modules/overview>)[Get started](https://docs.expo.dev/guides/dom-components/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/dom-components/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/dom-components/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/dom-components/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/dom-components/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/dom-components/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/dom-components/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/dom-components/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/dom-components/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/dom-components/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/dom-components/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/dom-components/</archive>)[Expo Snack](https://docs.expo.dev/guides/dom-components/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/dom-components/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/dom-components/<https:/expo.dev/mailing-list/signup>)
# Using React DOM in Expo native apps
[Edit this page](https://docs.expo.dev/guides/dom-components/<https:/github.com/expo/expo/edit/main/docs/pages/guides/dom-components.mdx> "Edit content of this page on GitHub")
Learn about rendering React DOM components in Expo native apps using the 'use dom' directive.
[Edit this page](https://docs.expo.dev/guides/dom-components/<https:/github.com/expo/expo/edit/main/docs/pages/guides/dom-components.mdx> "Edit content of this page on GitHub")
> Available in SDK 52 and above.
Expo offers a novel approach to work with modern web code directly in a native app via the `'use dom'` directive. This enables incremental migration for an entire website to a universal app by moving on a per-component basis.
While the Expo native runtime generally does not support elements like `<div>` or `<img>`, there may be instances where you need to quickly incorporate web components. In such cases, DOM components provide a useful solution.
## Prerequisites[](https://docs.expo.dev/guides/dom-components/<#prerequisites>)
Your project must use Expo CLI and extend the Expo Metro Config[](https://docs.expo.dev/guides/dom-components/<#your-project-must-use-expo-cli-and>)
If you already run your project with `npx expo [command]` (for example, if you created it with `npx create-expo-app`), then you're all set, and you can skip this step.
If you don't have the `expo` package in your project yet, then install it by running the command below and [opt in to using Expo CLI and Metro Config](https://docs.expo.dev/guides/dom-components/</bare/installing-expo-modules#configure-expo-cli-for-bundling-on-android-and-ios>):
Terminal
Copy
`- ``npx install-expo-modules@latest`
If the command fails, refer to the [Installing Expo modules](https://docs.expo.dev/guides/dom-components/</bare/installing-expo-modules#manual-installation>) guide.
Expo Metro Runtime, React DOM, and React Native Web[](https://docs.expo.dev/guides/dom-components/<#expo-metro-runtime-react-dom-and-react>)
If you are using Expo Router and Expo Web, you can skip this step. Otherwise, install the following packages:
Terminal
Copy
`- ``npx expo install @expo/metro-runtime react-dom react-native-web`
## Usage[](https://docs.expo.dev/guides/dom-components/<#usage>)
Install `react-native-webview` in your project:
Terminal
Copy
`- ``npx expo install react-native-webview`
To render a React component to the DOM, add the `'use dom'` directive to the top of the web component file:
my-component.tsx (web)
Copy
```
'use dom';
export default function DOMComponent({ name }: { name: string }) {
 return (
  <div><h1>Hello, {name}</h1></div>
 );
}

```

Inside the native component file, import the web component to use it:
App.tsx (native)
Copy
```
import DOMComponent from './my-component.tsx';
export default function App() {
 return (
  // This is a DOM component. It re-exports a wrapped `react-native-webview` behind the scenes.
  <DOMComponent name="Europa" />
 );
}

```

## Features[](https://docs.expo.dev/guides/dom-components/<#features>)
  * Shared bundler config across web, native, and DOM components.
  * React, TypeScript, CSS, and all other Metro features are enabled in DOM components.
  * Logging in the terminal and Safari/Chrome debugging.
  * Fast Refresh and HMR.
  * Embedded exports for offline support.
  * Assets are unified across web and native.
  * DOM component bundles can be introspected in [Expo Atlas](https://docs.expo.dev/guides/dom-components/</guides/analyzing-bundles#analyzing-bundle-size-with-atlas>) for debugging.
  * Access to all web functionality without needing a native rebuild.
  * Runtime error overlay in development.
  * Supports Expo Go.


## WebView props[](https://docs.expo.dev/guides/dom-components/<#webview-props>)
To pass props to the underlying native WebView, use the `dom` prop on the component. This prop is built into every DOM component and accepts an object with any `WebView`[ props](https://docs.expo.dev/guides/dom-components/<https:/github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md>) that you would like to change.
App.tsx (native)
Copy
```
import DOMComponent from './my-component';
export default function App() {
 return (
  <DOMComponent
   dom={{
    scrollEnabled: false,
   }}
  />
 );
}

```

On your DOM component, add the `dom` prop so it is recognized in TypeScript:
my-component.tsx (web)
Copy
```
'use dom';
export default function DOMComponent({}: { dom: import('expo/dom').DOMProps }) {
 return (
  <div><h1>Hello, world!</h1></div>
 );
}

```

## Marshalled props[](https://docs.expo.dev/guides/dom-components/<#marshalled-props>)
You can send data to the DOM component through serializable props (`number`, `string`, `boolean`, `null`, `undefined`, `Array`, `Object`). For example, inside a native component file, you can pass a prop to the DOM component:
App.tsx (native)
Copy
```
import DOMComponent from './my-component';
export default function App() {
 return <DOMComponent hello={'world'} />;
}

```

Inside the web component file, you can receive the prop as shown in the example below:
my-component.tsx (web)
Copy
```
'use dom';
export default function DOMComponent({ hello }: { hello: string }) {
 return <p>Hello, {hello}</p>;
}

```

Props are sent over an asynchronous bridge so they are not updated synchronously. They are passed as props to the React root component, which means they re-render the entire React tree.
## Native actions[](https://docs.expo.dev/guides/dom-components/<#native-actions>)
You can send type-safe native functions to DOM components by passing asynchronous functions as top-level props to the DOM component:
App.tsx (native)
Copy
```
import DomComponent from './my-component';
export default function App() {
 return (
  <DomComponent
   hello={(data: string) => {
    console.log('Hello', data);
   }}
  />
 );
}

```

my-component.tsx (web)
Copy
```
'use dom';
export default function MyComponent({ hello }: { hello: (data: string) => Promise<void> }) {
 return <p onClick={() => hello('world')}>Click me</p>;
}

```

> You cannot pass functions as nested props to DOM components. They must be top-level props.
Native actions are always asynchronous and accept only serializable arguments (meaning no functions) because the data is sent over a bridge to the DOM component's JavaScript engine.
Native actions can return serializable data to the DOM component, which is useful for getting data back from the native side.
```
getDeviceName(): Promise<string> {
 return DeviceInfo.getDeviceName();
}

```

Think of these functions like React Server Functions, but instead of residing on the server, they live locally in the native app and communicate with the DOM component. This approach provides a powerful way to add truly native functionality to your DOM components.
## Passing refs[](https://docs.expo.dev/guides/dom-components/<#passing-refs>)
> Warning: This is experimental and may change in the future.
You can use the `useDOMImperativeHandle` hook inside a DOM component to accept ref calls from the native side. This hook is similar to React's `useImperativeHandle`[](https://docs.expo.dev/guides/dom-components/<https:/react.dev/reference/react/useImperativeHandle>) hook, but it does not need a ref object to be passed to it.
App.tsx (native)
Copy
```
import { useRef } from 'react';
import { Button, View } from 'react-native';
import MyComponent, { type MyRef } from './my-component';
export default function App() {
 const ref = useRef<MyRef>(null);
 return (
  <View style={{ flex: 1 }}><MyComponent ref={ref} /><Button
    title="focus"
    onPress={() => {
     ref.current?.focus();
    }}
   /></View>
 );
}

Show More

```

my-component.tsx (web)
Copy
```
'use dom';
import { useDOMImperativeHandle, type DOMImperativeFactory } from 'expo/dom';
import { forwardRef, useRef } from 'react';
export interface MyRef extends DOMImperativeFactory {
 focus: () => void;
}
export default forwardRef<MyRef, object>(function MyComponent(props, ref) {
 const inputRef = useRef<HTMLInputElement>(null);
 useDOMImperativeHandle(
  ref,
  () => ({
   focus: () => {
    inputRef.current?.focus();
   },
  }),
  []
 );
 return <input ref={inputRef} />;
});

Show More

```

React is meant to have a unilateral data flow, so the concept of using callbacks to go back up the tree is not idiomatic. Expect the behavior to be flakey and possibly phased out in the future with newer versions of React. The preferred way to send data back up the tree is to use native actions, which update the state and then pass it back to the DOM component.
## Feature detection[](https://docs.expo.dev/guides/dom-components/<#feature-detection>)
Since DOM components are used to run websites, you might need extra qualifiers to better support certain libraries. You can detect if a component is running in a DOM component with the following code:
```
const IS_DOM = typeof ReactNativeWebView !== 'undefined';

```

## Public assets[](https://docs.expo.dev/guides/dom-components/<#public-assets>)
> Warning: This is experimental and may change in the future. Public assets are not supported in EAS Update. Use `require()` to load local assets instead.
The contents of the root public directory are copied to the native app's binary to support the use of public assets in DOM components. Since these public assets will be served from the local filesystem, use the `process.env.EXPO_BASE_URL` prefix to reference the correct path. For example:
```
<img src={`${process.env.EXPO_BASE_URL}img.png`} />

```

## Debugging[](https://docs.expo.dev/guides/dom-components/<#debugging>)
By default, all `console.log` methods are extended in WebViews to forward logs to the terminal. This makes it fast and easy to see what's happening in your DOM components.
Expo also enables WebView inspection and debugging when bundling in development mode. You can open Safari > Develop > Simulator > MyComponent.tsx to see the WebView's console and inspect elements.
## Manual WebViews[](https://docs.expo.dev/guides/dom-components/<#manual-webviews>)
You can create a manual WebView using the `WebView` component from `react-native-webview`. This can be useful for rendering websites from a remote server.
App.tsx (native)
Copy
```
import { WebView } from 'react-native-webview';
export default function App() {
 return <WebView source={{ html: '<h1>Hello, world!</h1>' }} />;
}

```

## Routing[](https://docs.expo.dev/guides/dom-components/<#routing>)
Expo Router APIs such as `<Link />`, and `useRouter` can be used in DOM components to navigate between routes.
my-component.tsx (web)
Copy
```
'use dom';
import Link from 'expo-router/link';
export default function DOMComponent() {
 return (
  <div><h1>Hello, world!</h1><Link href="/about">About</Link></div>
 );
}

```

APIs that synchronously return routing info such as `useLocalSearchParams()`, `useGlobalSearchParams()`, `usePathname()`, `useSegments()`, `useRootNavigation()`, and `useRootNavigationState()` are not automatically supported. Instead, read these values outside of DOM components and supply them as props.
App.tsx (native)
Copy
```
import DOMComponent from './my-component';
import { usePathname } from 'expo-router';
export default function App() {
 const pathname = usePathname();
 return <DOMComponent pathname={pathname} />;
}

```

The `router.canGoBack()` and `router.canDismiss()` functions are also unsupported and require manual marshalling, this ensures no extraneous render cycles are triggered.
Avoid using standard web `<a />` anchor elements for navigation as these will change the DOM component origin in a way that users may not be able to navigate back from. Prefer launching `WebBrowser`s if you want to present external websites.
Since DOM components cannot render native children, layout routes (`_layout`) can never be DOM components. You can render DOM components from layout routes to create headers, backgrounds, and more, but the layout route itself should always be native.
## Measuring DOM components[](https://docs.expo.dev/guides/dom-components/<#measuring-dom-components>)
You may want to measure the size of a DOM component and report it back to the native side (for example, native scrolling). This can be done using a `matchContents` prop or a manual native action:
### Automatically with `matchContents` prop[](https://docs.expo.dev/guides/dom-components/<#automatically-with-matchcontents-prop>)
You can use the `dom={{ matchContents: true }}` prop to measure the size of the DOM component automatically and resize the native view. This is particularly useful for certain layouts where the DOM component must have an intrinsic size in order to be displayed, such as when the component is centered within a parent view:
App.tsx (native)
Copy
```
import DOMComponent from './my-component';
export default function Route() {
 return <DOMComponent dom={{ matchContents: true }} />;
}

```

### Manually by specifying a size[](https://docs.expo.dev/guides/dom-components/<#manually-by-specifying-a-size>)
You can also manually provide a size by passing it to the `WebView` `style` prop via the `dom` prop:
App.tsx (native)
Copy
```
import DOMComponent from './my-component';
export default function Route() {
 return (
  <DOMComponent
   dom={{
    style: { width, height },
   }}
  />
 );
}

```

### Observing changes in size[](https://docs.expo.dev/guides/dom-components/<#observing-changes-in-size>)
If you would like to report changes in the size of the DOM component back to the native side, you can add a native action to your DOM component that is called whenever the size is changed:
my-component.tsx (web)
Copy
```
'use dom';
import { useEffect } from 'react';
function useSize(callback: (size: { width: number; height: number }) => void) {
 useEffect(() => {
  // Observe window size changes
  const observer = new ResizeObserver(entries => {
   for (const entry of entries) {
    const { width, height } = entry.contentRect;
    callback({ width, height });
   }
  });
  observer.observe(document.body);
  callback({
   width: document.body.clientWidth,
   height: document.body.clientHeight,
  });
  return () => {
   observer.disconnect();
  };
 }, [callback]);
}
export default function DOMComponent({
 onDOMLayout,
}: {
 dom?: import('expo/dom').DOMProps;
 onDOMLayout: (size: { width: number; height: number }) => void;
}) {
 useSize(onDOMLayout);
 return <div style={{ width: 500, height: 500, background: 'blue' }} />;
}

Show More

```

Then update your native code to set the size in state whenever the DOM component reports a change in size:
App.tsx (native)
Copy
```
import DOMComponent from '@/components/my-component';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
export default function App() {
 const [containerSize, setContainerSize] = useState<{
  width: number;
  height: number;
 } | null>(null);
 return (
  <View style={{ flex: 1 }}><ScrollView>
    <DOMComponent
     onDOMLayout={async ({ width, height }) => {
      if (containerSize?.width !== width || containerSize?.height !== height) {
       setContainerSize({ width, height });
      }
     }}
     dom={{
      containerStyle:
       containerSize != null
        ? { width: containerSize.width, height: containerSize.height }
        : null,
     }}
    />
   </ScrollView></View>
 );
}

Show More

```

## Architecture[](https://docs.expo.dev/guides/dom-components/<#architecture>)
Built-in DOM support only renders websites as single-page applications (no SSR or SSG). This is because search engine optimization and indexing are unnecessary for embedded JS code.
When a module is marked with `'use dom'`, it is replaced with a proxy reference imported at runtime. This feature is primarily achieved through a series of bundler and CLI techniques.
If desired, you can still use a WebView with the standard approach by passing raw HTML to a `WebView` component.
DOM components rendered within websites or other DOM components will behave as regular components, and the `dom` prop will be ignored. This is because web content is passed directly through and not wrapped in an `iframe`.
Overall, this system shares many similarities with Expo's React Server Components implementation.
## Considerations[](https://docs.expo.dev/guides/dom-components/<#considerations>)
We recommend building truly native apps using universal primitives such as `View`, `Image`, and `Text`. DOM components only support standard JavaScript, which is slower to parse and start up than optimized Hermes bytecode.
Data can be sent between DOM components and native components only through an asynchronous JSON transport system. Avoid relying on data across JS engines and deep linking to nested URLs in DOM components, as they do not currently support full reconciliation with Expo Router.
While DOM components are not exclusive to Expo Router, they are developed and tested against Expo Router apps to provide the best experience when used with Expo Router.
If you have a global state for sharing data, it will not be accessible across JS engines.
While native modules in the Expo SDK can be optimized to support DOM components, this optimization has not been implemented yet. Use native actions and props to share native functionality with DOM components.
DOM components and websites in general are less optimal than native views but there are some reasonable uses for them. For example, the web is conceptually the best way to render rich-text and markdown. The web also has very good WebGL support, with the caveat that devices in low-power mode will often throttle web frame rates to preserve battery.
Many large apps also use some web content for auxiliary routes such as blog posts, rich-text (for example, long-form posts on X), settings pages, help pages, and other less frequently visited parts of the app.
## Server Components[](https://docs.expo.dev/guides/dom-components/<#server-components>)
DOM components currently only render as single-page applications and don't support static rendering or React Server Components (RSC). When the project uses React Server Components, `'use dom'` will work the same as `'use client'` regardless of the platform. RSC Payloads can be passed as properties to DOM components. However, they cannot be hydrated correctly on native platforms as they'll be rendered for a native runtime.
## Limitations[](https://docs.expo.dev/guides/dom-components/<#limitations>)
  * Unlike server components, you cannot pass `children` to DOM components.
  * DOM components are standalone and do not automatically share data between different instances.
  * You cannot add native views to DOM components. While you can attempt to float native views over DOM components, this approach results in a suboptimal user experience.
  * Function props cannot return values synchronously. They must be asynchronous.
  * DOM components can currently only be embedded and do not support OTA updates. This functionality may be added in the future as part of React Server Components.


Ultimately, universal architecture is the most exciting kind. Expo CLI's extensive universal tooling is the only reason we can even offer a feature as intricate and valuable as this one.
While DOM components help with migration and moving quickly, we recommend using truly native views whenever possible.
[Previous (Development process - Web)Publish websites](https://docs.expo.dev/guides/dom-components/</guides/publishing-websites>)[Next (Development process - Web)Progressive web apps](https://docs.expo.dev/guides/dom-components/</guides/progressive-web-apps>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/dom-components/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/dom-components/<https:/github.com/expo/expo/edit/main/docs/pages/guides/dom-components.mdx>)
  * Last updated on January 24, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/dom-components/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#prerequisites>)[Usage](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#usage>)[Features](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#features>)[WebView props](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#webview-props>)[Marshalled props](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#marshalled-props>)[Native actions](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#native-actions>)[Passing refs](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#passing-refs>)[Feature detection](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#feature-detection>)[Public assets](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#public-assets>)[Debugging](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#debugging>)[Manual WebViews](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#manual-webviews>)[Routing](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#routing>)[Measuring DOM components](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#measuring-dom-components>)[Automatically with matchContents prop](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#automatically-with-matchcontents-prop>)[Manually by specifying a size](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#manually-by-specifying-a-size>)[Observing changes in size](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#observing-changes-in-size>)[Architecture](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#architecture>)[Considerations](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#considerations>)[Server Components](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#server-components>)[Limitations](https://docs.expo.dev/guides/dom-components/</guides/dom-components/#limitations>)
