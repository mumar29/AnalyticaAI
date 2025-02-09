[](https://docs.expo.dev/router/advanced/modals/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/advanced/modals/</>)
[Blog](https://docs.expo.dev/router/advanced/modals/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/advanced/modals/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/advanced/modals/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/advanced/modals/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/advanced/modals/</>)[Guides](https://docs.expo.dev/router/advanced/modals/</guides/overview>)[EAS](https://docs.expo.dev/router/advanced/modals/</eas>)[Reference](https://docs.expo.dev/router/advanced/modals/</versions/latest>)[Learn](https://docs.expo.dev/router/advanced/modals/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/advanced/modals/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/advanced/modals/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/advanced/modals/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/advanced/modals/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/advanced/modals/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/advanced/modals/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/advanced/modals/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/advanced/modals/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/advanced/modals/</router/introduction>)[Installation](https://docs.expo.dev/router/advanced/modals/</router/installation>)[Create pages](https://docs.expo.dev/router/advanced/modals/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/advanced/modals/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/advanced/modals/</router/layouts>)[Error handling](https://docs.expo.dev/router/advanced/modals/</router/error-handling>)
Navigation patterns
[Root layout](https://docs.expo.dev/router/advanced/modals/</router/advanced/root-layout>)[Stack](https://docs.expo.dev/router/advanced/modals/</router/advanced/stack>)[Tabs](https://docs.expo.dev/router/advanced/modals/</router/advanced/tabs>)[Drawer](https://docs.expo.dev/router/advanced/modals/</router/advanced/drawer>)[Nesting navigators](https://docs.expo.dev/router/advanced/modals/</router/advanced/nesting-navigators>)[Modals](https://docs.expo.dev/router/advanced/modals/</router/advanced/modals>)[Shared routes](https://docs.expo.dev/router/advanced/modals/</router/advanced/shared-routes>)[Custom tabs](https://docs.expo.dev/router/advanced/modals/</router/advanced/custom-tabs>)
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/advanced/modals/</modules/overview>)[Get started](https://docs.expo.dev/router/advanced/modals/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/advanced/modals/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/advanced/modals/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/advanced/modals/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/advanced/modals/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/advanced/modals/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/advanced/modals/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/advanced/modals/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/advanced/modals/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/advanced/modals/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/advanced/modals/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/advanced/modals/</archive>)[Expo Snack](https://docs.expo.dev/router/advanced/modals/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/advanced/modals/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/advanced/modals/<https:/expo.dev/mailing-list/signup>)
# Modals
[Edit this page](https://docs.expo.dev/router/advanced/modals/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/modals.mdx> "Edit content of this page on GitHub")
Learn how to use modals in Expo Router.
[Edit this page](https://docs.expo.dev/router/advanced/modals/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/modals.mdx> "Edit content of this page on GitHub")
Modals are a common user interface pattern in mobile apps. They are used to present content on top of the existing screen and is used for different purposes, such as displaying confirmation alerts or standalone forms. You can create modals in your app using the following methods:
  * Use React Native's `Modal`[](https://docs.expo.dev/router/advanced/modals/<https:/reactnative.dev/docs/modal>) component.
  * Use Expo Router's special file-based syntax to create a modal screen within the app's navigation system.


Each approach has its specific use case. Understanding when to use each method is important for creating a positive user experience.
## React Native's Modal component[](https://docs.expo.dev/router/advanced/modals/<#react-natives-modal-component>)
The `Modal` component is part of React Native's core API. Common use cases include:
  * Standalone interactions, such as self-contained tasks that don't need to be part of the navigation system.
  * Temporary alerts or confirmation dialogs that are ideal for quick interactions.


Below is an example of a custom `Modal` component that overlays the current screen on different platforms:
For most use cases, you can use the `Modal` component and customize it according to your app's user interface requirements. For details on how to use the `Modal` component and its props, see the [React Native documentation](https://docs.expo.dev/router/advanced/modals/<https:/reactnative.dev/docs/modal>).
## Modal screen using Expo Router[](https://docs.expo.dev/router/advanced/modals/<#modal-screen-using-expo-router>)
A modal screen is a file created inside the app directory and is used as a route within the existing stack. It is used for complex interactions that need to be part of the navigation system, such as multi-step forms where you can link to a specific screen after the process completes.
Below is an example of how a modal screen works on different platforms:
### Usage[](https://docs.expo.dev/router/advanced/modals/<#usage>)
To implement a modal route, create a screen called modal.tsx inside the app directory. Here's an example file structure:
`app`
`_layout.tsx`
`index.tsx`
`modal.tsx`
The above file structure produces a layout where the `index` is the first route in the stack. Inside the root layout file (app/_layout.tsx), you can add the `modal` route in the stack. To present it as a modal, set the `presentation` option to `modal` on the route.
app/_layout.tsx
Copy
```
import { Stack } from 'expo-router';
export default function Layout() {
 return (
  <Stack><Stack.Screen name="index" /><Stack.Screen
    name="modal"
    options={{
     presentation: 'modal',
    }}
   /></Stack>
 );
}

```

You can use the `Link` component to navigate to the modal screen from the index.tsx file.
app/index.tsx
Copy
```
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
export default function Home() {
 return (
  <View style={styles.container}><Text>Home screen</Text>
   <Link href="/modal" style={styles.link}>
    Open modal
   </Link>
  </View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
 link: {
  paddingTop: 20,
  fontSize: 20,
 },
});

Show More

```

The modal.tsx presents the contents of the modal.
app/modal.tsx
Copy
```
import { StyleSheet, Text, View } from 'react-native';
export default function Modal() {
 return (
  <View style={styles.container}><Text>Modal screen</Text></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
});

Show More

```

### Modal presentation and dismiss behavior[](https://docs.expo.dev/router/advanced/modals/<#modal-presentation-and-dismiss-behavior>)
A modal loses its previous context when it is the current screen in the navigator and is presented as a standalone screen. Its presentation and dismissal behavior are different on each platform:
  * On Android, the modal slides on top of the current screen. To dismiss it, use the back button to navigate back to the previous screen.
  * On iOS, the modal slides from the bottom of the current screen. To dismiss it, swipe it down from the top.
  * On web, the modal is presented as a separate route, and the dismiss behavior has to be provided manually using `router.canGoBack()`[](https://docs.expo.dev/router/advanced/modals/</router/navigating-pages#imperative-navigation>). Here's an example of how to dismiss the modal:


app/modal.tsx
Copy
```
import { Link, router} from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
export default function Modal() {
 const isPresented = router.canGoBack();
 return (
  <View style={styles.container}><Text>Modal screen</Text>
   {isPresented && <Link href="../">Dismiss modal</Link>}
  </View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
});

Show More

```

### Change status bar appearance on iOS[](https://docs.expo.dev/router/advanced/modals/<#change-status-bar-appearance-on-ios>)
By default on iOS, the modal has a dark background which hides the status bar. To change the status bar appearance, you can use the `Platform` API to check if the current platform is iOS and then use the `StatusBar`[](https://docs.expo.dev/router/advanced/modals/</versions/latest/sdk/status-bar>) component to change the appearance inside the modal.tsx file.
app/modal.tsx
Copy
```
import { StyleSheet, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function Modal() {
 return (
  <View style={styles.container}><Text>Modal screen</Text>
   <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
  </View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
});

Show More

```

## Web modals implementation[](https://docs.expo.dev/router/advanced/modals/<#web-modals-implementation>)
The video above demonstrates a modal window that appears over the main content of the web page. The background dims to draw focus to the modal, which contains information for the user. This is typical behavior for web modals, where users can interact with the modal or close it to return to the main page.
You can achieve the above web modal behavior by using the `transparentModal`[](https://docs.expo.dev/router/advanced/modals/<https:/reactnavigation.org/docs/stack-navigator/#transparent-modals>) presentation mode, styling the overlay and modal content, and utilizing `react-native-reanimated`[](https://docs.expo.dev/router/advanced/modals/</versions/latest/sdk/reanimated#installation>) to animate the modal's presentation.
Modify your project's root layout (app/_layout.tsx) to add an `options` object to the modal route:
app/_layout.tsx
Copy
```
import { Stack } from 'expo-router';
export const unstable_settings = {
 initialRouteName: 'index',
};
export default function Layout() {
 return (
  <Stack><Stack.Screen name="index" /><Stack.Screen
    name="modal"
    options={{
     presentation: 'transparentModal',
     animation: 'fade',
     headerShown: false,
    }}
   /></Stack>
 );
}

Show More

```

> `unstable_settings` currently works only with `Stack` navigators.
The above example sets the `index` screen as the `initialRouteName`[](https://docs.expo.dev/router/advanced/modals/</router/advanced/router-settings#initialroutename>) using `unstable_settings`[](https://docs.expo.dev/router/advanced/modals/</router/advanced/router-settings>). This ensures that the transparent modal is always rendered on top of the current screen, even when users navigate to the modal screen via a direct link.
Style the overlay and modal content in modal.tsx as shown below:
app/modal.tsx
Copy
```
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
export default function Modal() {
 return (
  <Animated.View
   entering={FadeIn}
   style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000040',
   }}
  >
   {/* Dismiss modal when pressing outside */}
   <Link href={'/'} asChild><Pressable style={StyleSheet.absoluteFill} /></Link>
   <Animated.View
    entering={SlideInDown}
    style={{
     width: '90%',
     height: '80%',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'white',
    }}
   >
    <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Modal Screen</Text>
    <Link href="/"><Text>← Go back</Text></Link>
   </Animated.View>
  </Animated.View>
 );
}

Show More

```

Feel free to customize the modal animations and styles to your liking.
## Additional information[](https://docs.expo.dev/router/advanced/modals/<#additional-information>)
### Presentation options[](https://docs.expo.dev/router/advanced/modals/<#presentation-options>)
There are different options to present a modal screen using the `presentation` option on Android and iOS.
Option| Description  
---|---  
`card`| The new screen will be pushed onto a stack. The default animation on Android will vary depending on the OS version and theme. On iOS, it will slide from the side.  
`modal`| The new screen will be presented modally, allowing for a nested stack to be rendered inside the screen.  
`transparentModal`| The new screen will be presented modally, with the previous screen remaining visible. This allows the content below to still be seen if the screen has a translucent background.  
`containedModal`| On Android, fallbacks to `modal`. On iOS, uses `UIModalPresentationCurrentContext`[](https://docs.expo.dev/router/advanced/modals/<https:/developer.apple.com/documentation/uikit/uimodalpresentationstyle/uimodalpresentationcurrentcontext>) modal style.  
`containedTransparentModal`| On Android, fallbacks to `transparentModal`. On iOS, uses `UIModalPresentationOverCurrentContext`[](https://docs.expo.dev/router/advanced/modals/<https:/developer.apple.com/documentation/uikit/uimodalpresentationstyle/uimodalpresentationovercurrentcontext>) modal style.  
`fullScreenModal`| On Android, fallbacks to `modal`. On iOS, uses `UIModalPresentationFullScreen`[](https://docs.expo.dev/router/advanced/modals/<https:/developer.apple.com/documentation/uikit/uimodalpresentationstyle/uimodalpresentationfullscreen>) modal style.  
`formSheet`| On Android, fallbacks to `modal`. On iOS, uses `UIModalPresentationFormSheet`[](https://docs.expo.dev/router/advanced/modals/<https:/developer.apple.com/documentation/uikit/uimodalpresentationstyle/uimodalpresentationformsheet>) modal style.  
[Previous (Expo Router - Navigation patterns)Nesting navigators](https://docs.expo.dev/router/advanced/modals/</router/advanced/nesting-navigators>)[Next (Expo Router - Navigation patterns)Shared routes](https://docs.expo.dev/router/advanced/modals/</router/advanced/shared-routes>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/advanced/modals/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/advanced/modals/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/modals.mdx>)
  * Last updated on January 24, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/advanced/modals/<https:/expo.dev/privacy>).
On this page
[React Native's Modal component](https://docs.expo.dev/router/advanced/modals/</router/advanced/modals/#react-natives-modal-component>)[Modal screen using Expo Router](https://docs.expo.dev/router/advanced/modals/</router/advanced/modals/#modal-screen-using-expo-router>)[Usage](https://docs.expo.dev/router/advanced/modals/</router/advanced/modals/#usage>)[Modal presentation and dismiss behavior](https://docs.expo.dev/router/advanced/modals/</router/advanced/modals/#modal-presentation-and-dismiss-behavior>)[Change status bar appearance on iOS](https://docs.expo.dev/router/advanced/modals/</router/advanced/modals/#change-status-bar-appearance-on-ios>)[Web modals implementation](https://docs.expo.dev/router/advanced/modals/</router/advanced/modals/#web-modals-implementation>)[Additional information](https://docs.expo.dev/router/advanced/modals/</router/advanced/modals/#additional-information>)[Presentation options](https://docs.expo.dev/router/advanced/modals/</router/advanced/modals/#presentation-options>)
