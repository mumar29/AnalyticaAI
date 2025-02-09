[](https://docs.expo.dev/tutorial/introduction/<https:/expo.dev>)[Docs](https://docs.expo.dev/tutorial/introduction/</>)
[Blog](https://docs.expo.dev/tutorial/introduction/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/tutorial/introduction/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/tutorial/introduction/<https:/github.com/expo/expo>)[](https://docs.expo.dev/tutorial/introduction/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/tutorial/introduction/</>)[Guides](https://docs.expo.dev/tutorial/introduction/</guides/overview>)[EAS](https://docs.expo.dev/tutorial/introduction/</eas>)[Reference](https://docs.expo.dev/tutorial/introduction/</versions/latest>)[Learn](https://docs.expo.dev/tutorial/introduction/</tutorial/overview>)
[Overview](https://docs.expo.dev/tutorial/introduction/</tutorial/overview>)
Expo tutorial
0 of 9
[Introduction](https://docs.expo.dev/tutorial/introduction/</tutorial/introduction>)[Create your first app](https://docs.expo.dev/tutorial/introduction/</tutorial/create-your-first-app>)[Add navigation](https://docs.expo.dev/tutorial/introduction/</tutorial/add-navigation>)[Build a screen](https://docs.expo.dev/tutorial/introduction/</tutorial/build-a-screen>)[Use an image picker](https://docs.expo.dev/tutorial/introduction/</tutorial/image-picker>)[Create a modal](https://docs.expo.dev/tutorial/introduction/</tutorial/create-a-modal>)[Add gestures](https://docs.expo.dev/tutorial/introduction/</tutorial/gestures>)[Take a screenshot](https://docs.expo.dev/tutorial/introduction/</tutorial/screenshot>)[Handle platform differences](https://docs.expo.dev/tutorial/introduction/</tutorial/platform-differences>)[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/introduction/</tutorial/configuration>)[Learning resources](https://docs.expo.dev/tutorial/introduction/</tutorial/follow-up>)
EAS tutorial
0 of 11
[Introduction](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/introduction>)[Configure development build](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/configure-development-build>)[Android development build](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/android-development-build>)[iOS development build for simulators](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/ios-development-build-for-simulators>)[iOS development build for devices](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/ios-development-build-for-devices>)[Multiple app variants](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/multiple-app-variants>)[Internal distribution build](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/internal-distribution-builds>)[Manage app versions](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/manage-app-versions>)[Android production build](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/android-production-build>)[iOS production build](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/ios-production-build>)[Share previews](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/team-development>)[Builds from GitHub](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/using-github>)[Next steps](https://docs.expo.dev/tutorial/introduction/</tutorial/eas/next-steps>)
More
[Additional resources](https://docs.expo.dev/tutorial/introduction/</additional-resources>)
[Archive](https://docs.expo.dev/tutorial/introduction/</archive>)[Expo Snack](https://docs.expo.dev/tutorial/introduction/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/tutorial/introduction/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/tutorial/introduction/<https:/expo.dev/mailing-list/signup>)
# Tutorial: Using React Native and Expo
[Edit this page](https://docs.expo.dev/tutorial/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/introduction.mdx> "Edit content of this page on GitHub")
An introduction to a React Native tutorial on how to build a universal app that runs on Android, iOS and the web using Expo.
[Edit this page](https://docs.expo.dev/tutorial/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/introduction.mdx> "Edit content of this page on GitHub")
We're about to embark on a journey of building universal apps. In this tutorial, we'll create an Expo app that runs on Android, iOS, and web; all with a single codebase. Let's get started!
## About React Native and Expo tutorial[](https://docs.expo.dev/tutorial/introduction/<#about-react-native-and-expo-tutorial>)
The objective of this tutorial is to get started with Expo and become familiar with the Expo SDK. It'll cover the following topics:
  * Create an app using the default template with TypeScript enabled
  * Implement a two-screen bottom tabs layout with Expo Router
  * Break down the app layout and implement it with flexbox
  * Use each platform's system UI to select an image from the media library
  * Create a sticker modal using the `<Modal>` and `<FlatList>` components from React Native
  * Add touch gestures to interact with a sticker
  * Use third-party libraries to capture a screenshot and save it to the disk
  * Handle platform differences between Android, iOS, and web
  * Finally, go through the process of configuring a status bar, a splash screen, and an icon to complete the app


These topics provide a foundation to learn the fundamentals of building an Expo app. The tutorial is self-paced and can take up to two hours to complete.
To keep it beginner friendly, we divided the tutorial into nine chapters so that you can follow along or put it down and come back to it later. Each chapter contains the necessary code snippets to complete the steps, so you can follow along by creating an app from scratch or copy and paste it.
Before we get started, take a look at what we'll build. It's an app named StickerSmash that runs on Android, iOS, and the web:
> The complete source code for this tutorial is available on [GitHub](https://docs.expo.dev/tutorial/introduction/<https:/github.com/expo/examples/tree/master/stickersmash>).
## How to use this tutorial[](https://docs.expo.dev/tutorial/introduction/<#how-to-use-this-tutorial>)
We believe in [learning by doing](https://docs.expo.dev/tutorial/introduction/<https:/en.wikipedia.org/wiki/Learning-by-doing>), so this tutorial emphasizes doing over explaining. You can follow along the journey of building an app by creating the app from scratch.
Throughout the tutorial, any important code or code that has changed between examples will be highlighted in green. You can hover over the highlights (on desktop) or tap them (on mobile) to learn more about the change. For example, the code highlighted in the snippet below explains what it does:
Hello World
Copy
```
import { StyleSheet, Text, View } from 'react-native';
export default function Index() {
 return (
  <View style={styles.container}>
   <Text>Hello world!</Text>
  </View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});

Show More

```

## Next step[](https://docs.expo.dev/tutorial/introduction/<#next-step>)
We're ready to start building our app.
[StartLet's start by creating a new Expo app.](https://docs.expo.dev/tutorial/introduction/</tutorial/create-your-first-app>)
[PreviousOverview](https://docs.expo.dev/tutorial/introduction/</tutorial/overview>)[Next (Expo tutorial)Create your first app](https://docs.expo.dev/tutorial/introduction/</tutorial/create-your-first-app>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/tutorial/introduction/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/tutorial/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/introduction.mdx>)


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/tutorial/introduction/<https:/expo.dev/privacy>).
On this page
[About React Native and Expo tutorial](https://docs.expo.dev/tutorial/introduction/</tutorial/introduction/#about-react-native-and-expo-tutorial>)[How to use this tutorial](https://docs.expo.dev/tutorial/introduction/</tutorial/introduction/#how-to-use-this-tutorial>)[Next step](https://docs.expo.dev/tutorial/introduction/</tutorial/introduction/#next-step>)
