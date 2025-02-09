[](https://docs.expo.dev/tutorial/configuration/<https:/expo.dev>)[Docs](https://docs.expo.dev/tutorial/configuration/</>)
[Blog](https://docs.expo.dev/tutorial/configuration/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/tutorial/configuration/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/tutorial/configuration/<https:/github.com/expo/expo>)[](https://docs.expo.dev/tutorial/configuration/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/tutorial/configuration/</>)[Guides](https://docs.expo.dev/tutorial/configuration/</guides/overview>)[EAS](https://docs.expo.dev/tutorial/configuration/</eas>)[Reference](https://docs.expo.dev/tutorial/configuration/</versions/latest>)[Learn](https://docs.expo.dev/tutorial/configuration/</tutorial/overview>)
[Overview](https://docs.expo.dev/tutorial/configuration/</tutorial/overview>)
Expo tutorial
0 of 9
[Introduction](https://docs.expo.dev/tutorial/configuration/</tutorial/introduction>)[Create your first app](https://docs.expo.dev/tutorial/configuration/</tutorial/create-your-first-app>)[Add navigation](https://docs.expo.dev/tutorial/configuration/</tutorial/add-navigation>)[Build a screen](https://docs.expo.dev/tutorial/configuration/</tutorial/build-a-screen>)[Use an image picker](https://docs.expo.dev/tutorial/configuration/</tutorial/image-picker>)[Create a modal](https://docs.expo.dev/tutorial/configuration/</tutorial/create-a-modal>)[Add gestures](https://docs.expo.dev/tutorial/configuration/</tutorial/gestures>)[Take a screenshot](https://docs.expo.dev/tutorial/configuration/</tutorial/screenshot>)[Handle platform differences](https://docs.expo.dev/tutorial/configuration/</tutorial/platform-differences>)[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/configuration/</tutorial/configuration>)[Learning resources](https://docs.expo.dev/tutorial/configuration/</tutorial/follow-up>)
EAS tutorial
0 of 11
[Introduction](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/introduction>)[Configure development build](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/configure-development-build>)[Android development build](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/android-development-build>)[iOS development build for simulators](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/ios-development-build-for-simulators>)[iOS development build for devices](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/ios-development-build-for-devices>)[Multiple app variants](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/multiple-app-variants>)[Internal distribution build](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/internal-distribution-builds>)[Manage app versions](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/manage-app-versions>)[Android production build](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/android-production-build>)[iOS production build](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/ios-production-build>)[Share previews](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/team-development>)[Builds from GitHub](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/using-github>)[Next steps](https://docs.expo.dev/tutorial/configuration/</tutorial/eas/next-steps>)
More
[Additional resources](https://docs.expo.dev/tutorial/configuration/</additional-resources>)
[Archive](https://docs.expo.dev/tutorial/configuration/</archive>)[Expo Snack](https://docs.expo.dev/tutorial/configuration/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/tutorial/configuration/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/tutorial/configuration/<https:/expo.dev/mailing-list/signup>)
# Configure status bar, splash screen and app icon
[Edit this page](https://docs.expo.dev/tutorial/configuration/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/configuration.mdx> "Edit content of this page on GitHub")
In this tutorial, learn the basics of how to configure a status bar, app icon, and splash screen.
[Edit this page](https://docs.expo.dev/tutorial/configuration/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/configuration.mdx> "Edit content of this page on GitHub")
In this chapter, we'll address some app details before deploying our app to an app store, such as theming the status bar, customizing the app icon, and splash screen.
[![Watch: Adding the finishing touches to your universal Expo app](https://i3.ytimg.com/vi/OgGCYdElcZo/maxresdefault.jpg)Watch: Adding the finishing touches to your universal Expo app](https://docs.expo.dev/tutorial/configuration/<https:/www.youtube.com/watch?v=OgGCYdElcZo>)
1
## Configure the status bar[](https://docs.expo.dev/tutorial/configuration/<#configure-the-status-bar>)
`expo-status-bar`[](https://docs.expo.dev/tutorial/configuration/</versions/latest/sdk/status-bar>) library comes pre-installed in every project created using `create-expo-app`. This library provides a `StatusBar` component to configure the app's status bar style.
Inside app/_layout.tsx:
  1. Import `StatusBar` from `expo-status-bar`.
  2. Group the `StatusBar` and existing `Stack` components with [React's Fragment component](https://docs.expo.dev/tutorial/configuration/<https:/react.dev/reference/react/Fragment>).


app/_layout.tsx
Copy
```
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
 return (
  <>
   <Stack><Stack.Screen name="(tabs)" options={{ headerShown: false }} /><Stack.Screen name="+not-found" /></Stack>
   <StatusBar style="light" /></>
 );
}

```

Let's take a look at our app now on Android, and iOS:
![StatusBar with light style shown on both Android and iOS.](https://docs.expo.dev/static/images/tutorial/statusbar-example.png)
2
## App icon[](https://docs.expo.dev/tutorial/configuration/<#app-icon>)
Inside the project, there's an icon.png file inside the assets/images directory. This is our app icon. It's a 1024px by 1024px image and looks as shown below:
![](https://docs.expo.dev/static/images/tutorial/icon.png)
Like the splash screen image, the `"icon"` property in the app.json file configures the app icon's path. By default, a new Expo project defines the correct path to `"./assets/images/icon.png"`. We don't have to change anything.
> Eventually, when you'll build your app for the app stores, [Expo Application Services (EAS)](https://docs.expo.dev/tutorial/configuration/</eas>) will take this image and create optimized icon for every device.
You can see the icon in various places in Expo Go. Here is an example of the app icon displayed in the developer menu of Expo Go:
![Splash screen on Developer Menu in Expo Go app.](https://docs.expo.dev/static/images/tutorial/app-icon-visible.png)
3
## Splash screen[](https://docs.expo.dev/tutorial/configuration/<#splash-screen>)
A splash screen is visible before the app's content is loaded. It uses a smaller image, such as an app's icon, which is centered. It hides once the app's content is ready to be displayed.
The `expo-splash-screen`[](https://docs.expo.dev/tutorial/configuration/</versions/latest/sdk/splash-screen>) plugin already comes pre-installed in every project created using `create-expo-app`. This library provides a config plugin to configure the splash screen.
In app.json, the `expo-splash-screen` plugin is already configured to use the app's icon as the splash screen image with the following snippet so we don't have to change anything. Let's take a look at our app now on Android and iOS:
Is the app loading too quickly for you to get a good look at the splash screen?[](https://docs.expo.dev/tutorial/configuration/<#is-the-app-loading-too-quickly-for>)
You can display the splash screen for longer intervals by using `preventAutoHideAsync()` method from `expo-splash-screen` library. This method delays hiding the splash screen until you call `hideAsync()`.
Add the following code in app/_layout.tsx to delay hiding the splash screen for five seconds.
app/_layout.tsx
Copy
```
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

```

Don't forget to remove this code when you are done testing your splash screen.
## Summary[](https://docs.expo.dev/tutorial/configuration/<#summary>)
Chapter 9: Configure status bar, splash screen and app icon
Well done! We built an app that runs on Android, iOS, and the web from the same codebase.
Mark this chapter as read
The next section of the tutorial will guide you toward resources to learn more about concepts we've covered here and others we have mentioned briefly.
[Next: Learning resources](https://docs.expo.dev/tutorial/configuration/</tutorial/follow-up>)
[Previous (Expo tutorial)Handle platform differences](https://docs.expo.dev/tutorial/configuration/</tutorial/platform-differences>)[Next (Expo tutorial)Learning resources](https://docs.expo.dev/tutorial/configuration/</tutorial/follow-up>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/tutorial/configuration/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/tutorial/configuration/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/configuration.mdx>)


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/tutorial/configuration/<https:/expo.dev/privacy>).
On this page
[Configure the status bar](https://docs.expo.dev/tutorial/configuration/</tutorial/configuration/#configure-the-status-bar>)[App icon](https://docs.expo.dev/tutorial/configuration/</tutorial/configuration/#app-icon>)[Splash screen](https://docs.expo.dev/tutorial/configuration/</tutorial/configuration/#splash-screen>)[Summary](https://docs.expo.dev/tutorial/configuration/</tutorial/configuration/#summary>)
