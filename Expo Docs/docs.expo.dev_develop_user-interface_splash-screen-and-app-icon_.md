[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</>)
[Blog](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</>)[Guides](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</guides/overview>)[EAS](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</eas>)[Reference](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest>)[Learn](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/tools>)
Navigation
User interface
[Splash screen and app icon](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon>)[Safe areas](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/safe-areas>)[Fonts](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/fonts>)[Assets](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/assets>)[Color themes](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/color-themes>)[Animation](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/animation>)[Store data](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/store-data>)[Next steps](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/next-steps>)
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</core-concepts>)[FAQ](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</faq>)
[Archive](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</archive>)[Expo Snack](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/expo.dev/mailing-list/signup>)
# Splash screen and app icon
[Edit this page](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/splash-screen-and-app-icon.mdx> "Edit content of this page on GitHub")
Learn how to add a splash screen and app icon to your Expo project.
[Edit this page](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/splash-screen-and-app-icon.mdx> "Edit content of this page on GitHub")
A splash screen and an app icon are fundamental elements of a mobile app. They play an important role in the user experience and branding of the app. This guide provides steps on how to create and add them to your app.
[![Create an App Icon and Splash Screen](https://i3.ytimg.com/vi/QSNkU7v0MPc/maxresdefault.jpg)Create an App Icon and Splash ScreenSee a detailed walkthrough on how to create an app icon and splash screen for an Expo project.](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/www.youtube.com/watch?v=QSNkU7v0MPc>)
## Splash screen[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#splash-screen>)
> This section uses the `splash` property from the app config. Starting SDK 52, using `expo-splash-screen` config plugin is recommended because using a full screen splash image on Android 12+ will not work so the following information for Android is outdated. See `expo-splash-screen`[ reference](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/sdk/splash-screen#configuration>) on how to use the config plugin and for up-to-date information.
A splash screen, also known as a launch screen, is the first screen a user sees when they open your app. It stays visible while the app is loading. You can also control the behavior of when a splash screen disappears by using the native [SplashScreen API](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/sdk/splash-screen>).
The default splash screen in an Expo project is a blank white screen. It can be customized using the `splash`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#splash>) property in the project's [app config](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</workflow/configuration>) using the steps below.
1
### Create a splash screen[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#create-a-splash-screen>)
To create a splash image, you can use this [Figma template](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/www.figma.com/community/file/1155362909441341285>). It provides a bare minimum design for an icon and splash images for Android and iOS.
Dealing with various screen sizes for Android and iOS[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#dealing-with-various-screen-sizes-for-android>)
#### Android[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#android>)
Android screen sizes vary greatly with the massive variety of devices. See [Material Design blog post](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/material.io/blog/device-metrics>) for more information on how to find the right device metrics for any screen.
#### iOS[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#ios>)
Expo's Splash Screen API will resize the image for your app depending on the size of the device's screen. You can specify the strategy used to resize the image with `splash.resizeMode`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#resizemode>). See the [Device screens and sizes specifications](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/developer.apple.com/design/human-interface-guidelines/layout#Specifications>) from the iOS Human Interface Guidelines for an up-to-date list of screen sizes.
2
### Export the splash image as a .png[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#export-the-splash-image-as-a-png>)
After creating a splash screen, export it as a .png and save it in the assets/images directory. By default, Expo uses splash.png as the file name. If you decide to change the name of your splash screen file, make sure to use that in the next step.
> Note: Currently, only .png images are supported to use as a splash screen in an Expo project. If you use another image format, making a production build of your app will fail.
3
### Add the splash screen in app config[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#add-the-splash-screen-in-app-config>)
Open the app config and add the local path as the value of `splash.image`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#image>) property to point to your new splash image.
app.json
Copy
```
{
 "splash": {
  "image": "./assets/images/splash.png"
 }
}

```

You can test your new splash image by starting the development server with `npx expo start` and using a development build or Expo Go to preview it.
> Note: In development mode, when you test your new splash screen, you will notice an information bar at the bottom of the screen. It displays the information about how much of the JavaScript code is downloaded on the device when preparing your app. It doesn't appear in production apps.
4
### Change the background color[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#change-the-background-color>)
If you set a background color other than white for your splash image, you may see a white border around it. This is due to the `splash.backgroundColor`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#backgroundcolor-3>) property that has a default value of `#ffffff`.
You can update this property's value to match your splash image's background color. For example:
app.json
Copy
```
{
 "splash": {
  "image": "./assets/images/splash.png",
  "backgroundColor": "#FEF9B0"
 }
}

```

![Splash screen with background color](https://docs.expo.dev/static/images/splash-screen/backgroundColor-noodles.png)
5
### Resize a splash screen (optional)[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#resize-a-splash-screen-optional>)
Any splash image you provide gets resized to maintain its aspect ratio and fit the resolution of the user's device.
You can use two properties for resizing: `contain` (default) and `cover`. These properties work similar to the `resizeMode`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/reactnative.dev/docs/image/#resizemode>) in React Native `<Image>`, as demonstrated below:
![Splash screen resize mode](https://docs.expo.dev/static/images/splash-screen/resizeMode.png)
Applying this to an example:
app.json
Copy
```
{
 "splash": {
  "image": "./assets/images/splash.png",
  "resizeMode": "cover"
  "backgroundColor": "#FFFFFF"
 }
}

```

![Splash screen resize mode with logo](https://docs.expo.dev/static/images/splash-screen/resizeMode-noodles.png)
In the above example, the image is stretched to fill the entire width while maintaining the aspect ratio. This is why the logo on the splash image is larger when `resizeMode` is set to `contain`.
> To learn more about the difference between `contain` and `cover`, see [this blog post](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<http:/blog.vjeux.com/2013/image/css-container-and-cover.html>).
Configuring `splash` properties separately for Android and iOS[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#configuring-splash-properties-separately-for-android-and>)
You can configure any `splash` properties for a native platform using `splash.android`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#splash-2>) and `splash.ios`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#splash-1>) to use a platform-specific option:
  * On Android, you can set splash images for [different device DPIs](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#mdpi>) from `mdpi` to `xxxhdpi`.
  * On iOS, you can set `ios.splash.tabletImage`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#tabletimage>) to have a different splash image on iPads.


Not using prebuild?[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#not-using-prebuild>)
If your app does not use [Expo Prebuild](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</workflow/prebuild>) (formerly the _managed workflow_) to generate the native android and iOS directories, then changes in the app config will have no effect. For more information, see [how you can customize the configuration manually](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/github.com/expo/expo/tree/main/packages/expo-splash-screen#-installation-in-bare-react-native-projects>).
Splash screen API limitations on Android[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#splash-screen-api-limitations-on-android>)
On Android, the splash screen behaves in most cases the same as on iOS. However, there is a slight difference. In this scenario, extra attention should be paid to `android.splash`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#splash-2>) section configuration inside app.json.
Depending on the `resizeMode` you will get the following behavior on Android:
  * contain: The splash screen API is unable to stretch or scale the splash image. As a result, the `contain` mode will initially display only the background color, and when the initial view hierarchy is mounted then `splash.image` will be displayed.
  * cover: This mode has the same limitations as contain.
  * native: In this mode, your app will be leveraging Android's ability to present a static bitmap while the app is starting up. Android (unlike iOS) does not support stretching the provided image, so the app will present the given image centered on the screen. By default `splash.image` will be used as the `xxxdpi` resource. It's up to you to provide graphics that meet your expectations and fit the screen dimension. To achieve this, use different resolutions for [different device DPIs](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#mdpi>) such as from `mdpi` to `xxxhdpi`.


Troubleshooting: New splash screen not appearing on iOS[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#troubleshooting-new-splash-screen-not-appearing-on>)
In iOS development builds, launch screens can sometimes remain cached between builds, making it harder to test new images. Apple recommends clearing the _derived data_ directory before rebuilding, this can be done with Expo CLI by running:
Terminal
Copy
`- ``npx expo run:ios --no-build-cache`
See [Apple's guide on testing launch screens](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/developer.apple.com/documentation/technotes/tn3118-debugging-your-apps-launch-screen>) for more information.
## App icon[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#app-icon>)
An app's icon is what your app users see on their device's home screen and app stores. Android and iOS have different and strict requirements.
1
### Create an app icon[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#create-an-app-icon>)
To create an app icon, you can use this [Figma template](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/www.figma.com/community/file/1155362909441341285>). It provides a bare minimum design for an icon and splash images for Android and iOS.
2
### Export the icon image as a .png[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#export-the-icon-image-as-a-png>)
After creating an app icon, export it as .png and save it in the assets/images directory. By default, Expo uses icon.png as the file name. If you decide to use its file name, make sure to use that in the next step.
3
### Add the icon in app config[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#add-the-icon-in-app-config>)
Open the app config and add the local path as the value of `icon`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#icon>) property to point it to your new app icon:
app.json
Copy
```
{
 "icon": "./assets/images/icon.png"
}

```

Custom configuration tips for Android and iOS[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#custom-configuration-tips-for-android-and-ios>)
#### Android[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#android-1>)
Further customization of the Android icon is possible using the `android.adaptiveIcon`[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</versions/latest/config/app#adaptiveicon>) property, which will override both of the previously mentioned settings.
The Android Adaptive Icon is formed from two separate layers — a foreground image and a background color or image. This allows the OS to mask the icon into different shapes and also supports visual effects. For Android 13 and later, the OS supports a themed app icon that uses a wallpaper and theme to determine the color set by the device's theme.
The design you provide should follow the [Android Adaptive Icon Guidelines](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/developer.android.com/develop/ui/views/launch/icon_design_adaptive>) for launcher icons. You should also:
  * Use .png files.
  * Use the `android.adaptiveIcon.foregroundImage` property to specify the path to your foreground image.
  * Use the `android.adaptiveIcon.monochromeImage` property to specify the path to your monochrome image.
  * The default background color is white; to specify a different background color, use the `android.adaptiveIcon.backgroundColor` property. You can instead specify a background image using the `android.adaptiveIcon.backgroundImage` property. Make sure that it has the same dimensions as your foreground image.


You may also want to provide a separate icon for older Android devices that do not support Adaptive Icons. You can do so with the `android.icon` property. This single icon would be a combination of your foreground and background layers.
> See [Apple best practices](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/developer.apple.com/design/human-interface-guidelines/app-icons/#Best-practices>) to ensure your icon looks professional, such as testing your icon on different wallpapers and avoiding text beside your product's wordmark. Provide an icon that's at least 512x512 pixels.
#### iOS[](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<#ios-1>)
For iOS, your app's icon should follow the [Apple Human Interface Guidelines](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/developer.apple.com/design/human-interface-guidelines/app-icons/>). You should also:
  * Use a .png file.
  * 1024x1024 is a good size. If you have an Expo project created using `npx create-expo-app`, [EAS Build](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</build/setup>) will generate the other sizes for you. In case of a bare React Native project, generate the icons on your own. The largest size EAS Build generates is 1024x1024.
  * The icon must be exactly square. For example, a 1023x1024 icon is not valid.
  * Make sure the icon fills the whole square, with no rounded corners or other transparent pixels. The operating system will mask your icon when appropriate.


[Previous (Develop - Navigation)Next steps](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/next-steps>)[Next (Develop - User interface)Safe areas](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/safe-areas>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/splash-screen-and-app-icon.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/<https:/expo.dev/privacy>).
On this page
[Splash screen](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#splash-screen>)[Create a splash screen](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#create-a-splash-screen>)[Export the splash image as a .png](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#export-the-splash-image-as-a-png>)[Add the splash screen in app config](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#add-the-splash-screen-in-app-config>)[Change the background color](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#change-the-background-color>)[Resize a splash screen (optional)](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#resize-a-splash-screen-optional>)[App icon](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#app-icon>)[Create an app icon](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#create-an-app-icon>)[Export the icon image as a .png](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#export-the-icon-image-as-a-png>)[Add the icon in app config](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/</develop/user-interface/splash-screen-and-app-icon/#add-the-icon-in-app-config>)
