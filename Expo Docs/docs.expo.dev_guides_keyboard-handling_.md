[](https://docs.expo.dev/guides/keyboard-handling/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/keyboard-handling/</>)
[Blog](https://docs.expo.dev/guides/keyboard-handling/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/keyboard-handling/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/keyboard-handling/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/keyboard-handling/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/keyboard-handling/</>)[Guides](https://docs.expo.dev/guides/keyboard-handling/</guides/overview>)[EAS](https://docs.expo.dev/guides/keyboard-handling/</eas>)[Reference](https://docs.expo.dev/guides/keyboard-handling/</versions/latest>)[Learn](https://docs.expo.dev/guides/keyboard-handling/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/keyboard-handling/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/keyboard-handling/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/keyboard-handling/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/keyboard-handling/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/keyboard-handling/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/keyboard-handling/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/keyboard-handling/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/keyboard-handling/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/keyboard-handling/</router/introduction>)[Installation](https://docs.expo.dev/guides/keyboard-handling/</router/installation>)[Create pages](https://docs.expo.dev/guides/keyboard-handling/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/keyboard-handling/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/keyboard-handling/</router/layouts>)[Error handling](https://docs.expo.dev/guides/keyboard-handling/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/keyboard-handling/</modules/overview>)[Get started](https://docs.expo.dev/guides/keyboard-handling/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/keyboard-handling/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/keyboard-handling/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/keyboard-handling/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/keyboard-handling/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/keyboard-handling/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/keyboard-handling/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/keyboard-handling/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/keyboard-handling/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/keyboard-handling/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/keyboard-handling/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/keyboard-handling/</guides/icons>)[Localization](https://docs.expo.dev/guides/keyboard-handling/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/keyboard-handling/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/keyboard-handling/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/keyboard-handling/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/keyboard-handling/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/keyboard-handling/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/keyboard-handling/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/keyboard-handling/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/keyboard-handling/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/keyboard-handling/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/keyboard-handling/</archive>)[Expo Snack](https://docs.expo.dev/guides/keyboard-handling/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/keyboard-handling/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/keyboard-handling/<https:/expo.dev/mailing-list/signup>)
# Keyboard handling
[Edit this page](https://docs.expo.dev/guides/keyboard-handling/<https:/github.com/expo/expo/edit/main/docs/pages/guides/keyboard-handling.mdx> "Edit content of this page on GitHub")
A guide for handling common keyboard interactions on an Android or iOS device.
[Edit this page](https://docs.expo.dev/guides/keyboard-handling/<https:/github.com/expo/expo/edit/main/docs/pages/guides/keyboard-handling.mdx> "Edit content of this page on GitHub")
Keyboard handling is crucial for creating an excellent user experience in your Expo app. React Native provides `Keyboard`[](https://docs.expo.dev/guides/keyboard-handling/<https:/reactnative.dev/docs/keyboard>) and `KeyboardAvoidingView`[](https://docs.expo.dev/guides/keyboard-handling/<https:/reactnative.dev/docs/keyboardavoidingview>), which are commonly used to handle keyboard events. For more complex or custom keyboard interactions, you can consider using `react-native-keyboard-controller`[](https://docs.expo.dev/guides/keyboard-handling/<https:/kirillzyusko.github.io/react-native-keyboard-controller>), which is a library that offers advanced keyboard handling capabilities.
This guide covers common keyboard interactions and how to manage them effectively.
[![Keyboard Handling tutorial for React Native apps](https://i3.ytimg.com/vi/Y51mDfAhd4E/maxresdefault.jpg)Keyboard Handling tutorial for React Native appsIn this keyboard handling tutorial for React Native apps, you'll learn how to solve the problem of the keyboard covering your input when you try to type on your app.](https://docs.expo.dev/guides/keyboard-handling/<https:/www.youtube.com/watch?v=Y51mDfAhd4E>)
## Keyboard handling basics[](https://docs.expo.dev/guides/keyboard-handling/<#keyboard-handling-basics>)
The following sections explain how to handle keyboard interactions with common APIs.
### Keyboard avoiding view[](https://docs.expo.dev/guides/keyboard-handling/<#keyboard-avoiding-view>)
The `KeyboardAvoidingView` is a component that automatically adjusts a keyboard's height, position, or bottom padding based on the keyboard height to remain visible while it is displayed.
Android and iOS interact with the `behavior` property differently. On iOS, `padding` is usually what works best, and for Android, just having the `KeyboardAvoidingView` prevents covering the input. This is why the following example uses `undefined` for Android. Playing around with the `behavior` is a good practice since a different option could work best for your app.
HomeScreen.tsx
Copy
```
import { KeyboardAvoidingView, TextInput } from 'react-native';
export default function HomeScreen() {
 return (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}><TextInput placeholder="Type here..." /></KeyboardAvoidingView>;
 );
}

```

In the above example, the height of the `KeyboardAvoidingView` automatically adjusts based on the device's keyboard height, which ensures that the input is always visible.
When using a Bottom Tab navigator on Android, you might notice that focusing on an input field causes the bottom tabs to be pushed above the keyboard. To address this issue, add the `softwareKeyboardLayoutMode` property to your Android configuration in [app confg](https://docs.expo.dev/guides/keyboard-handling/</workflow/configuration>) and set it to `pan`.
app.json
Copy
```
"expo" {
 "android": {
  "softwareKeyboardLayoutMode": "pan"
 }
}

```

After adding this property, restart the development server and reload your app to apply the changes.
It's also possible to hide the bottom tab when the keyboard opens using `tabBarHideOnKeyboard`[](https://docs.expo.dev/guides/keyboard-handling/<https:/reactnavigation.org/docs/bottom-tab-navigator/#tabbarhideonkeyboard>). It is an option with the Bottom Tab Navigator. If set to `true`, it will hide the bar when the keyboard opens.
app/_layout.tsx
Copy
```
import { Tabs } from 'expo-router';
export default function TabLayout() {
 return (
  <Tabs
   screenOptions={{
    tabBarHideOnKeyboard: true,
   }}><Tabs.Screen name="index" /></Tabs>
 );
}

```

### Keyboard events[](https://docs.expo.dev/guides/keyboard-handling/<#keyboard-events>)
The `Keyboard` module from React Native allows you to listen for native events, react to them, and make changes to the keyboard, such as dismissing it.
To listen for keyboard events, use the `Keyboard.addListener` method. This method accepts an event name and a callback function as arguments. When the keyboard is shown or hidden, the callback function is called with the event data.
The following example illustrates a use case for adding a keyboard listener. The state variable `isKeyboardVisible` is toggled each time the keyboard shows or hides. Based on this variable, a button allows the user to dismiss the keyboard only if the keyboard is active. Also, notice that the button uses the `Keyboard.dismiss` method.
HomeScreen.tsx
Copy
```
import { useEffect, useState } from 'react';
import { Keyboard, View, Button, TextInput } from 'react-native';
export default function HomeScreen() {
 const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
 useEffect(() => {
  const showSubscription = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
  const hideSubscription = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);
  return () => {
   showSubscription.remove();
  };
 }, []);
 const handleKeyboardShow = event => {
  setIsKeyboardVisible(true);
 };
 const handleKeyboardHide = event => {
  setIsKeyboardVisible(false);
 };
 return (
  <View>{isKeyboardVisible && <Button title="Dismiss keyboard" onPress={Keyboard.dismiss} />}<TextInput placeholder="Type here..." /></View>
 );
}

Show More

```

## Advanced keyboard handling with Keyboard Controller[](https://docs.expo.dev/guides/keyboard-handling/<#advanced-keyboard-handling-with-keyboard-controller>)
For more complex keyboard interactions, such as larger scrollable entry forms with several text input fields, consider using the `react-native-keyboard-controller`[ (Keyboard Controller)](https://docs.expo.dev/guides/keyboard-handling/<https:/kirillzyusko.github.io/react-native-keyboard-controller>) library. It offers additional functionality beyond the built-in React Native keyboard APIs, providing consistency across Android and iOS with minimal configuration and offering the native feel users expect.
### Prerequisites[](https://docs.expo.dev/guides/keyboard-handling/<#prerequisites>)
The following steps are described using a [development build](https://docs.expo.dev/guides/keyboard-handling/</develop/development-builds/introduction>) since the Keyboard Controller library is not included in Expo Go. See [Create a development build](https://docs.expo.dev/guides/keyboard-handling/</develop/development-builds/create-a-build>) for more information.
[Keyboard Controller](https://docs.expo.dev/guides/keyboard-handling/<https:/kirillzyusko.github.io/react-native-keyboard-controller>) also requires `react-native-reanimated` to work correctly. To install it, follow these [installation instructions](https://docs.expo.dev/guides/keyboard-handling/</versions/latest/sdk/reanimated#installation>).
### Install[](https://docs.expo.dev/guides/keyboard-handling/<#install>)
Start by installing the Keyboard Controller library in your Expo project:
Terminal
Copy
`- ``npx expo install react-native-keyboard-controller`
### Set up provider[](https://docs.expo.dev/guides/keyboard-handling/<#set-up-provider>)
To finalize the setup, add the `KeyboardProvider` to your app.
app/_layout.tsx
Copy
```
import { Stack } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';
export default function RootLayout() {
 return (
  <KeyboardProvider><Stack><Stack.Screen name="home" /><Stack.Screen name="chat" /></Stack></KeyboardProvider>
 );
}

```

### Handling multiple inputs[](https://docs.expo.dev/guides/keyboard-handling/<#handling-multiple-inputs>)
The `KeyboardAvoidingView`[](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling#keyboard-avoiding-view>) component is excellent for prototyping but requires platform-specific configuration and is not very customizable. To achieve the same functionality, you can use `KeyboardAwareScrollView`[](https://docs.expo.dev/guides/keyboard-handling/<https:/kirillzyusko.github.io/react-native-keyboard-controller/docs/api/components/keyboard-aware-scroll-view>), which automatically scrolls to focused `TextInput` and provides a native-like performance, we recommend using `KeyboardAwareScrollView` for simple screens with not many elements.
For screens with multiple inputs, the Keyboard Controller provides `KeyboardAwareScrollView` and `KeyboardToolbar` components. These components handle input navigation and prevent the keyboard from covering the screen without custom configuration:
FormScreen.tsx
Copy
```
import { TextInput, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView, KeyboardToolbar } from 'react-native-keyboard-controller';
export default function FormScreen() {
 return (
  <><KeyboardAwareScrollView bottomOffset={62} contentContainerStyle={styles.container}><View><TextInput placeholder="Type a message..." style={styles.textInput} /><TextInput placeholder="Type a message..." style={styles.textInput} /></View><TextInput placeholder="Type a message..." style={styles.textInput} /><View><TextInput placeholder="Type a message..." style={styles.textInput} /><TextInput placeholder="Type a message..." style={styles.textInput} /><TextInput placeholder="Type a message..." style={styles.textInput} /></View><TextInput placeholder="Type a message..." style={styles.textInput} /></KeyboardAwareScrollView><KeyboardToolbar /></>
 );
}
const styles = StyleSheet.create({
 container: {
  gap: 16,
  padding: 16,
 },
 listStyle: {
  padding: 16,
  gap: 16,
 },
 textInput: {
  width: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  height: 45,
  borderWidth: 1,
  borderRadius: 8,
  borderColor: '#d8d8d8',
  backgroundColor: '#fff',
  padding: 8,
  marginBottom: 8,
 },
});

Show More

```

The above example wraps the inputs with `KeyboardAwareScrollView` to prevent the keyboard from covering them. The `KeyboardToolbar` component displays navigation controls and a dismiss button. While it works without configuration, you can customize the toolbar content if needed.
### Animating views in sync with keyboard height[](https://docs.expo.dev/guides/keyboard-handling/<#animating-views-in-sync-with-keyboard-height>)
For a more advanced and customizable approach, you can use `useKeyboardHandler`[](https://docs.expo.dev/guides/keyboard-handling/<https:/kirillzyusko.github.io/react-native-keyboard-controller/docs/api/hooks/keyboard/use-keyboard-handler>). It provides access to keyboard lifecycle events. It allows us to determine when the keyboard starts animating and its position in every frame of the animation.
Using the `useKeyboardHandler` hook, you can create a custom hook to access the height of the keyboard at each frame. It uses `useSharedValue` from reanimated to return the height, as shown below.
ChatScreen.tsx
Copy
```
import { useKeyboardHandler } from 'react-native-keyboard-controller';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
const useGradualAnimation = () => {
 const height = useSharedValue(0);
 useKeyboardHandler(
  {
   onMove: event => {
    'worklet';
    height.value = Math.max(event.height, 0);
   },
  },
  []
 );
 return { height };
};

```

You can use the `useGradualAnimation` hook to animate a view and give it a smooth animation when the keyboard is active or dismissed, for example, in a chat screen component (shown in the example below). This component gets the keyboard height from the hook. It then creates an animated style called `fakeView` using the `useAnimatedStyle` hook from reanimated. This style only contains one property: `height`, which is set to the keyboard's height.
The `fakeView` animated style is used in an animated view after the `TextInput`. This view's height will animate based on the keyboard's height at each frame, which effectively pushes the content above the keyboard with a smooth animation. It also decreases its height to zero when the keyboard is dismissed.
ChatScreen.tsx
Copy
```
import { StyleSheet, Platform, FlatList, View, StatusBar, TextInput } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useKeyboardHandler } from 'react-native-keyboard-controller';
import MessageItem from '@/components/MessageItem';
import { messages } from '@/messages';
const useGradualAnimation = () => {
 %%placeholder-start%%// Code remains same from previous example %%placeholder-end%%
};
export default function ChatScreen() {
 const { height } = useGradualAnimation();
 const fakeView = useAnimatedStyle(() => {
  return {
   height: Math.abs(height.value),
  };
 }, []);
 return (
  <View style={styles.container}><FlatList
    data={messages}
    renderItem={({ item }) => <MessageItem message={item} />}
    keyExtractor={item => item.createdAt.toString()}
    contentContainerStyle={styles.listStyle}
   /><TextInput placeholder="Type a message..." style={styles.textInput} /><Animated.View style={fakeView} /></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
 },
 listStyle: {
  padding: 16,
  gap: 16,
 },
 textInput: {
  width: '95%',
  height: 45,
  borderWidth: 1,
  borderRadius: 8,
  borderColor: '#d8d8d8',
  backgroundColor: '#fff',
  padding: 8,
  alignSelf: 'center',
  marginBottom: 8,
 },
});

Show More

```

## Additional resources[](https://docs.expo.dev/guides/keyboard-handling/<#additional-resources>)
[ExampleSee the source code for the example project on GitHub.](https://docs.expo.dev/guides/keyboard-handling/<https:/github.com/betomoedano/keyboard-guide>) [`react-native-keyboard-controller`For more details on the Keyboard Controller library, see the documentation.](https://docs.expo.dev/guides/keyboard-handling/<https:/kirillzyusko.github.io/react-native-keyboard-controller>)
[Previous (More - Assorted)Local-first](https://docs.expo.dev/guides/keyboard-handling/</guides/local-first>)[Next (More - Integrations)Using Analytics](https://docs.expo.dev/guides/keyboard-handling/</guides/using-analytics>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/keyboard-handling/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/keyboard-handling/<https:/github.com/expo/expo/edit/main/docs/pages/guides/keyboard-handling.mdx>)
  * Last updated on October 14, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/keyboard-handling/<https:/expo.dev/privacy>).
On this page
[Keyboard handling basics](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#keyboard-handling-basics>)[Keyboard avoiding view](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#keyboard-avoiding-view>)[Keyboard events](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#keyboard-events>)[Advanced keyboard handling with Keyboard Controller](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#advanced-keyboard-handling-with-keyboard-controller>)[Prerequisites](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#prerequisites>)[Install](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#install>)[Set up provider](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#set-up-provider>)[Handling multiple inputs](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#handling-multiple-inputs>)[Animating views in sync with keyboard height](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#animating-views-in-sync-with-keyboard-height>)[Additional resources](https://docs.expo.dev/guides/keyboard-handling/</guides/keyboard-handling/#additional-resources>)
