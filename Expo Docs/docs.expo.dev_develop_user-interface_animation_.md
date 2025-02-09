[](https://docs.expo.dev/develop/user-interface/animation/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/user-interface/animation/</>)
[Blog](https://docs.expo.dev/develop/user-interface/animation/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/user-interface/animation/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/user-interface/animation/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/user-interface/animation/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/user-interface/animation/</>)[Guides](https://docs.expo.dev/develop/user-interface/animation/</guides/overview>)[EAS](https://docs.expo.dev/develop/user-interface/animation/</eas>)[Reference](https://docs.expo.dev/develop/user-interface/animation/</versions/latest>)[Learn](https://docs.expo.dev/develop/user-interface/animation/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/user-interface/animation/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/user-interface/animation/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/user-interface/animation/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/user-interface/animation/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/user-interface/animation/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/user-interface/animation/</develop/tools>)
Navigation
User interface
[Splash screen and app icon](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/splash-screen-and-app-icon>)[Safe areas](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/safe-areas>)[Fonts](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/fonts>)[Assets](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/assets>)[Color themes](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/color-themes>)[Animation](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/animation>)[Store data](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/store-data>)[Next steps](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/next-steps>)
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/user-interface/animation/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/user-interface/animation/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/user-interface/animation/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/user-interface/animation/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/user-interface/animation/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/user-interface/animation/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/user-interface/animation/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/user-interface/animation/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/user-interface/animation/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/user-interface/animation/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/user-interface/animation/</core-concepts>)[FAQ](https://docs.expo.dev/develop/user-interface/animation/</faq>)
[Archive](https://docs.expo.dev/develop/user-interface/animation/</archive>)[Expo Snack](https://docs.expo.dev/develop/user-interface/animation/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/user-interface/animation/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/user-interface/animation/<https:/expo.dev/mailing-list/signup>)
# Animation
[Edit this page](https://docs.expo.dev/develop/user-interface/animation/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/animation.mdx> "Edit content of this page on GitHub")
Learn how to integrate React Native animations and use it in your Expo project.
[Edit this page](https://docs.expo.dev/develop/user-interface/animation/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/animation.mdx> "Edit content of this page on GitHub")
Animations are a great way to enhance and provide a better user experience. In your Expo projects, you can use the [Animated API](https://docs.expo.dev/develop/user-interface/animation/<https:/reactnative.dev/docs/next/animations>) from React Native. However, if you want to use more advanced animations with better performance, you can use the `react-native-reanimated`[](https://docs.expo.dev/develop/user-interface/animation/<https:/docs.swmansion.com/react-native-reanimated/>) library. It provides an API that simplifies the process of creating smooth, powerful, and maintainable animations.
## Installation[](https://docs.expo.dev/develop/user-interface/animation/<#installation>)
You can skip installing `react-native-reanimated` if you have created a project using [the default template](https://docs.expo.dev/develop/user-interface/animation/</get-started/create-a-project>). This library is already installed. Otherwise, install it by running the following command:
Terminal
Copy
`- ``npx expo install react-native-reanimated`
## Usage[](https://docs.expo.dev/develop/user-interface/animation/<#usage>)
### Minimal example[](https://docs.expo.dev/develop/user-interface/animation/<#minimal-example>)
The following example shows how to use the `react-native-reanimated` library to create a simple animation. For more information on the API and advanced usage, see `react-native-reanimated`[ documentation](https://docs.expo.dev/develop/user-interface/animation/<https:/docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation>).
Using react-native-reanimated
Copy
Open in Snack
```
import Animated, {
 useSharedValue,
 withTiming,
 useAnimatedStyle,
 Easing,
} from 'react-native-reanimated';
import { View, Button, StyleSheet } from 'react-native';
export default function AnimatedStyleUpdateExample() {
 const randomWidth = useSharedValue(10);
 const config = {
  duration: 500,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
 };
 const style = useAnimatedStyle(() => {
  return {
   width: withTiming(randomWidth.value, config),
  };
 });
 return (
  <View style={styles.container}><Animated.View style={[styles.box, style]} /><Button
    title="toggle"
    onPress={() => {
     randomWidth.value = Math.random() * 350;
    }}
   /></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
 box: {
  width: 100,
  height: 80,
  backgroundColor: 'black',
  margin: 30,
 },
});

Show More

```

## Other animation libraries[](https://docs.expo.dev/develop/user-interface/animation/<#other-animation-libraries>)
You can use other animation packages such as [Moti](https://docs.expo.dev/develop/user-interface/animation/<https:/moti.fyi/>) in your Expo project. It works on Android, iOS, and web.
[Previous (Develop - User interface)Color themes](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/color-themes>)[Next (Develop - User interface)Store data](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/store-data>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/user-interface/animation/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/user-interface/animation/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/animation.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/user-interface/animation/<https:/expo.dev/privacy>).
On this page
[Installation](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/animation/#installation>)[Usage](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/animation/#usage>)[Minimal example](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/animation/#minimal-example>)[Other animation libraries](https://docs.expo.dev/develop/user-interface/animation/</develop/user-interface/animation/#other-animation-libraries>)
