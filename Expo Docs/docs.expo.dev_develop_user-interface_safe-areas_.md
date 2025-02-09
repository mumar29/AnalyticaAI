[](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/user-interface/safe-areas/</>)
[Blog](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/user-interface/safe-areas/</>)[Guides](https://docs.expo.dev/develop/user-interface/safe-areas/</guides/overview>)[EAS](https://docs.expo.dev/develop/user-interface/safe-areas/</eas>)[Reference](https://docs.expo.dev/develop/user-interface/safe-areas/</versions/latest>)[Learn](https://docs.expo.dev/develop/user-interface/safe-areas/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/user-interface/safe-areas/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/user-interface/safe-areas/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/user-interface/safe-areas/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/user-interface/safe-areas/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/user-interface/safe-areas/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/tools>)
Navigation
User interface
[Splash screen and app icon](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/splash-screen-and-app-icon>)[Safe areas](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas>)[Fonts](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/fonts>)[Assets](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/assets>)[Color themes](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/color-themes>)[Animation](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/animation>)[Store data](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/store-data>)[Next steps](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/next-steps>)
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/user-interface/safe-areas/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/user-interface/safe-areas/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/user-interface/safe-areas/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/user-interface/safe-areas/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/user-interface/safe-areas/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/user-interface/safe-areas/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/user-interface/safe-areas/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/user-interface/safe-areas/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/user-interface/safe-areas/</core-concepts>)[FAQ](https://docs.expo.dev/develop/user-interface/safe-areas/</faq>)
[Archive](https://docs.expo.dev/develop/user-interface/safe-areas/</archive>)[Expo Snack](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/expo.dev/mailing-list/signup>)
# Safe areas
[Edit this page](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/safe-areas.mdx> "Edit content of this page on GitHub")
Learn how to add safe areas for screen components inside your Expo project.
[Edit this page](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/safe-areas.mdx> "Edit content of this page on GitHub")
Creating a safe area ensures your app screen's content is positioned correctly. This means it doesn't get overlapped by notches, status bars, home indicators, and other interface elements that are part of the device's physical hardware or are controlled by the operating system. When the content gets overlapped, it gets concealed by these interface elements.
Here's an example of an app screen's content getting concealed by the status bar on Android. On iOS, the same content is concealed by rounded corners, notch, and the status bar.
![Without defining a safe area, the content can be obscured by the device's interface elements.](https://docs.expo.dev/static/images/safe-area/without-safe-area.png)
## Use `react-native-safe-area-context` library[](https://docs.expo.dev/develop/user-interface/safe-areas/<#use-react-native-safe-area-context-library>)
`react-native-safe-area-context`[](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/th3rdwave/react-native-safe-area-context>) provides a flexible API for handling Android and iOS device's safe area insets. It also provides a `SafeAreaView` component that you can use instead of a `<View>`[](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/reactnative.dev/docs/view>) to account for safe areas automatically in your screen components.
Using the library, the result of the previous example changes as it displays the content inside a safe area, as shown below:
![On using react-native-safe-area-context, the content is positioned within the safe area.](https://docs.expo.dev/static/images/safe-area/with-safe-area.png)
### Installation[](https://docs.expo.dev/develop/user-interface/safe-areas/<#installation>)
You can skip installing `react-native-safe-area-context` if you have created a project using [the default template](https://docs.expo.dev/develop/user-interface/safe-areas/</get-started/create-a-project>). This library is installed as peer dependency for Expo Router library. Otherwise, install it by running the following command:
Terminal
Copy
`- ``npx expo install react-native-safe-area-context`
### Usage[](https://docs.expo.dev/develop/user-interface/safe-areas/<#usage>)
You can directly use `SafeAreaView`[](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/th3rdwave/react-native-safe-area-context#safeareaview>) to wrap the content of your screen's component. It is a regular `<View>` with the safe area insets applied as extra padding or margin.
app/index.tsx
Copy
```
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
 return (
  <SafeAreaView style={{ flex: 1 }}><Text>Content is in safe area.</Text></SafeAreaView>
 );
}

```

Using a different Expo template and don't have Expo Router installed?[](https://docs.expo.dev/develop/user-interface/safe-areas/<#using-a-different-expo-template-and-dont>)
Import and add `SafeAreaProvider`[](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/th3rdwave/react-native-safe-area-context#safeareaprovider>) to the root component file (such as App.tsx) before using `SafeAreaView` in your screen component.
App.tsx
Copy
```
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
 return (
  return <SafeAreaProvider>...</SafeAreaProvider>;
 );
}

```

## Alternate: `useSafeAreaInsets` hook[](https://docs.expo.dev/develop/user-interface/safe-areas/<#alternate-usesafeareainsets-hook>)
Alternate to `SafeAreaView`, you can use `useSafeAreaInsets`[](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/th3rdwave/react-native-safe-area-context#usesafeareainsets>) hook in your screen component. It provides direct access to the safe area insets, allowing you to apply padding for each edge of the `<View>` using an inset from this hook.
The example below uses the `useSafeAreaInsets` hook. It applies top padding to a `<View>` using `insets.top`.
app/index.tsx
Copy
```
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function HomeScreen() {
 const insets = useSafeAreaInsets();
 return (
  <View style={{ flex: 1, paddingTop: insets.top }}><Text>Content is in safe area.</Text></View>
 );
}

```

The hook provides the insets in the following object:
```
{
 top: number,
 right: number,
 bottom: number,
 left: number
}

```

## Additional information[](https://docs.expo.dev/develop/user-interface/safe-areas/<#additional-information>)
### Minimal example[](https://docs.expo.dev/develop/user-interface/safe-areas/<#minimal-example>)
Below is a minimal working example that uses the `useSafeAreaInsets` hook to apply top padding to a view.
Using react-native-safe-area-context
Copy
Open in Snack
```
import { Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
function HomeScreen() {
 const insets = useSafeAreaInsets();
 return (
  <View style={{ flex: 1, paddingTop: insets.top }}><Text style={{ fontSize: 28 }}>Content is in safe area.</Text></View>
 );
}
export default function App() {
 return (
  <SafeAreaProvider><HomeScreen /></SafeAreaProvider>
 );
}

Show More

```

### Usage with React Navigation[](https://docs.expo.dev/develop/user-interface/safe-areas/<#usage-with-react-navigation>)
By default, React Navigation supports safe areas and uses `react-native-safe-area-context` as a peer dependency. For more information, see the [React Navigation documentation](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/reactnavigation.org/docs/handling-safe-area/>).
### Usage with web[](https://docs.expo.dev/develop/user-interface/safe-areas/<#usage-with-web>)
If you are targeting the web, set up `SafeAreaProvider` as described in the [usage section](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas#usage>). If you are doing server-side rendering (SSR), see the [Web SSR section](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/th3rdwave/react-native-safe-area-context#web-ssr>) in the library's documentation.
[Previous (Develop - User interface)Splash screen and app icon](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/splash-screen-and-app-icon>)[Next (Develop - User interface)Fonts](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/fonts>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/safe-areas.mdx>)
  * Last updated on July 25, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/user-interface/safe-areas/<https:/expo.dev/privacy>).
On this page
[Use react-native-safe-area-context library](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas/#use-react-native-safe-area-context-library>)[Installation](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas/#installation>)[Usage](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas/#usage>)[Alternate: useSafeAreaInsets hook](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas/#alternate-usesafeareainsets-hook>)[Additional information](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas/#additional-information>)[Minimal example](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas/#minimal-example>)[Usage with React Navigation](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas/#usage-with-react-navigation>)[Usage with web](https://docs.expo.dev/develop/user-interface/safe-areas/</develop/user-interface/safe-areas/#usage-with-web>)
