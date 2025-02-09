[](https://docs.expo.dev/develop/user-interface/fonts/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/user-interface/fonts/</>)
[Blog](https://docs.expo.dev/develop/user-interface/fonts/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/user-interface/fonts/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/user-interface/fonts/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/user-interface/fonts/<https:/github.com/expo/expo>)
Search
[Home](https://docs.expo.dev/develop/user-interface/fonts/</>)[Guides](https://docs.expo.dev/develop/user-interface/fonts/</guides/overview>)[EAS](https://docs.expo.dev/develop/user-interface/fonts/</eas>)[Reference](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest>)[Learn](https://docs.expo.dev/develop/user-interface/fonts/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/user-interface/fonts/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/user-interface/fonts/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/user-interface/fonts/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/user-interface/fonts/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/user-interface/fonts/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/user-interface/fonts/</develop/tools>)
Navigation
User interface
[Splash screen and app icon](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/splash-screen-and-app-icon>)[Safe areas](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/safe-areas>)[Fonts](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts>)[Assets](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/assets>)[Color themes](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/color-themes>)[Animation](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/animation>)[Store data](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/store-data>)[Next steps](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/next-steps>)
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/user-interface/fonts/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/user-interface/fonts/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/user-interface/fonts/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/user-interface/fonts/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/user-interface/fonts/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/user-interface/fonts/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/user-interface/fonts/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/user-interface/fonts/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/user-interface/fonts/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/user-interface/fonts/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/user-interface/fonts/</core-concepts>)[FAQ](https://docs.expo.dev/develop/user-interface/fonts/</faq>)
[Archive](https://docs.expo.dev/develop/user-interface/fonts/</archive>)[Expo Snack](https://docs.expo.dev/develop/user-interface/fonts/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/user-interface/fonts/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/user-interface/fonts/<https:/expo.dev/mailing-list/signup>)
# Fonts
[Edit this page](https://docs.expo.dev/develop/user-interface/fonts/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/fonts.mdx> "Edit content of this page on GitHub")
Learn how to integrate custom fonts in your app using local files or Google Font packages
[Edit this page](https://docs.expo.dev/develop/user-interface/fonts/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/fonts.mdx> "Edit content of this page on GitHub")
Android and iOS come with their own set of platform fonts. To provide a consistent user experience and enhance your app's branding, you can use custom fonts.
This guide covers different ways you can add and load a custom font into your project and also provides additional information related to fonts.
## Add a custom font[](https://docs.expo.dev/develop/user-interface/fonts/<#add-a-custom-font>)
There are two ways you can add a custom font into your project:
  * Add a font file into your local assets. For example, a font file in the assets/fonts directory.
  * Install a Google Font package. For example, installing `@expo-google-fonts/inter`[](https://docs.expo.dev/develop/user-interface/fonts/<https:/www.npmjs.com/package/@expo-google-fonts/inter>) package.


### Supported font formats[](https://docs.expo.dev/develop/user-interface/fonts/<#supported-font-formats>)
Expo SDK officially supports OTF and TTF font formats across Android, iOS and web platforms. If your font is in another font format, you have to set up advanced configuration to support that format in your project.
### How to choose between OTF and TTF[](https://docs.expo.dev/develop/user-interface/fonts/<#how-to-choose-between-otf-and-ttf>)
If the font you're using have both OTF and TTF versions, prefer OTF. The .otf files are smaller than .ttf files. Sometimes, OTF also renders slightly better in certain contexts.
## Use a local font file[](https://docs.expo.dev/develop/user-interface/fonts/<#use-a-local-font-file>)
Copy the file into your project's assets/fonts directory.
> assets/fonts directory path is a common convention in React Native apps to put font files. You can place these files elsewhere if you follow a custom convention.
Two ways to use the local font file in your project:
  * Embed the font file with `expo-font`[ config plugin](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/font#configuration-in-appjsonappconfigjs>).
  * Loading the font file with `useFonts`[](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/font#usefontsmap>) hook at runtime asynchronously.


### With `expo-font` config plugin[](https://docs.expo.dev/develop/user-interface/fonts/<#with-expo-font-config-plugin>)
The `expo-font` config plugin allows embedding one or more font files in your project's native code. This is the recommended method for adding fonts to your app due to its benefits:
  * Fonts are available immediately when the app starts on a device.
  * No additional code required to load fonts in a project asynchronously when the app starts.
  * Fonts are consistently available across all devices where the app is installed because they're bundled within the app.


However, this method also has some limitations:
  * Doesn't work with Expo Go since this method requires [creating a development build](https://docs.expo.dev/develop/user-interface/fonts/</develop/development-builds/create-a-build>).
  * Only available for SDK 50 and above.


To embed a font in a project, follow the steps below:
1
After adding a custom font file in your project, install the `expo-font` library.
Terminal
Copy
`- ``npx expo install expo-font`
2
Add the config plugin to your [app config](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/config/app#plugins>) file. The configuration must contain the path to the font file using `fonts`[](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/font#configurable-properties>) property which takes an array of one or more font files. The path to each font file is relative to the project's root. For example, in the following configuration, Inter-Black.otf font file's path is defined.
app.json
Copy
```
{
 "expo": {
  "plugins": [
   [
    "expo-font",
    {
     "fonts": ["./assets/fonts/Inter-Black.otf"]
    }
   ]
  ]
 }
}

```

3
After embedding the font with the config plugin, create a [new development build](https://docs.expo.dev/develop/user-interface/fonts/</develop/development-builds/create-a-build>) and install it on your device or Android Emulator or iOS Simulator.
You can use the font with `<Text>` by specifying the `fontFamily` style prop. See the [next section](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts#how-to-determine-which-font-family-name-to-use>) on how to determine the font family name.
In the example below, the `<Text>` uses the `Inter-Black` as the font family name:
```
<Text style={{ fontFamily: 'Inter-Black' }}>Inter Black.</Text>

```

Using this method in a bare React Native project?[](https://docs.expo.dev/develop/user-interface/fonts/<#using-this-method-in-a-bare-react>)
  * Android: Copy font files to android/app/src/main/assets/fonts.
  * iOS: See [Adding a Custom Font to Your App](https://docs.expo.dev/develop/user-interface/fonts/<https:/developer.apple.com/documentation/uikit/text_display_and_fonts/adding_a_custom_font_to_your_app>) in the Apple Developer documentation.


#### How to determine which font family name to use[](https://docs.expo.dev/develop/user-interface/fonts/<#how-to-determine-which-font-family-name-to-use>)
On Android, the font family name is the same as of the font file (without the extension). On iOS, the font family name is read from the font file itself.
We recommend naming the font file same as its [PostScript name](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts#what-is-postscript-name-of-a-font>) so the font family name is consistent on both platforms.
What is PostScript name of a font file?[](https://docs.expo.dev/develop/user-interface/fonts/<#what-is-postscript-name-of-a-font>)
The PostScript name of a font file is a unique identifier assigned to the font that follows Adobe's PostScript standard. It is used by operating systems and apps to refer to the font. It is not a font's display name.
For example, Inter Black font file's PostScript name is `Inter-Black`.
![](https://docs.expo.dev/static/images/postscript-name.png)
### With `useFonts` hook[](https://docs.expo.dev/develop/user-interface/fonts/<#with-usefonts-hook>)
The `useFonts` hook from `expo-font` library allows loading the font file asynchronously. This hook keeps track of the loading state and loads the font when an app is initialized.
It works with all Expo SDK versions and with Expo Go. To load a font in a project using `useFonts` hook, follow the steps below:
1
After adding a custom font file in your project, install the `expo-font` and `expo-splash-screen` libraries.
Terminal
Copy
`- ``npx expo install expo-font expo-splash-screen`
The `expo-splash-screen`[](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/splash-screen>) library provides `SplashScreen` component that you can use to prevent rendering the app until the font is loaded and ready.
2
Map the font file using the `useFonts` hook in a top level component such as the root layout (app/layout.tsx) file in your project:
app/_layout.tsx
Copy
```
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
 const [loaded, error] = useFonts({
  'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
 });
 useEffect(() => {
  if (loaded || error) {
   SplashScreen.hideAsync();
  }
 }, [loaded, error]);
 if (!loaded && !error) {
  return null;
 }
 return (
  %%placeholder-start%%... %%placeholder-end%%
 )
}

```

3
Use the font on the `<Text>` by using `fontFamily` style prop in a React component:
```
<Text style={{ fontFamily: 'Inter-Black' }}>Inter Black</Text>

```

## Use Google Fonts[](https://docs.expo.dev/develop/user-interface/fonts/<#use-google-fonts>)
Expo has first-class support for all fonts listed in [Google Fonts](https://docs.expo.dev/develop/user-interface/fonts/<https:/fonts.google.com/>). They are available using `@expo-google-fonts`[](https://docs.expo.dev/develop/user-interface/fonts/<https:/github.com/expo/google-fonts>) library. With any of the font package from this library, you can quickly integrate that font and its variants.
Two ways to use a Google Font in your project:
  * Embed the installed font with `expo-font`[ config plugin](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/font#configuration-in-appjsonappconfigjs>).
  * Load the installed font with `useFonts`[](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/font#usefontsmap>) hook at runtime asynchronously.


### With `expo-font` config plugin[](https://docs.expo.dev/develop/user-interface/fonts/<#with-expo-font-config-plugin-1>)
> Note: Embedding a Google Font using `expo-font` config plugin has same benefits and limitations as embedding a custom font on your own. See [using a local font file with `expo-font` config plugin](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts#with-expo-font-config-plugin>) for more information.
1
Install the font package. For example, to use Inter Black font, install the `@expo-google-fonts/inter`[](https://docs.expo.dev/develop/user-interface/fonts/<https:/www.npmjs.com/package/@expo-google-fonts/inter>) package with the command below.
Terminal
Copy
`- ``npx expo install expo-font @expo-google-fonts/inter`
2
Add the config plugin to your [app config](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/config/app#plugins>) file. The configuration must contain the path to the font file using `fonts`[](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/font#configurable-properties>) property which takes an array of one or more font files. The path to the font file is defined from the font package inside the `node_modules` directory. For example, if you have a font package named `@expo-google-fonts/inter`, then the name of the file is Inter_900Black.ttf.
app.json
Copy
```
{
 "plugins": [
  [
   "expo-font",
   {
    "fonts": ["node_modules/@expo-google-fonts/inter/Inter_900Black.ttf"]
   }
  ]
 ]
}

```

3
After embedding the font with the config plugin, create a [new development build](https://docs.expo.dev/develop/user-interface/fonts/</develop/development-builds/create-a-build>) and install it on your device or Android Emulator or iOS Simulator.
On Android, you can use the font file name. For example, `Inter_900Black`. On iOS, use the font and its weight name ([PostScript name](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts#what-is-postscript-name-of-a-font>)). The example below demonstrates how to use `Platform`[](https://docs.expo.dev/develop/user-interface/fonts/<https:/reactnative.dev/docs/platform-specific-code#platform-module>) to select the correct font family name for each platform:
```
import { Platform } from 'react-native';
// Inside a React component:
<Text
 style={{
  fontFamily: Platform.select({
   android: 'Inter_900Black',
   ios: 'Inter-Black',
  }),
 }}>
 Inter Black
</Text>

```

### With `useFonts` hook[](https://docs.expo.dev/develop/user-interface/fonts/<#with-usefonts-hook-1>)
> Note: Loading a Google Font using `useFonts` hook has same benefits and limitations as embedding a custom font on your own. See [using a local font file with `useFonts` hook](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts#with-usefonts-hook>) for more information.
Each google Fonts package provides the `useFonts` hook to load the fonts asynchronously. This hook keeps track of the loading state and loads the font when an app is initialized. The font package also imports the font file so you don't have to explicitly import it.
1
Install the Google Fonts package, `expo-font` and `expo-splash-screen` libraries.
Terminal
Copy
`- ``npx expo install @expo-google-fonts/inter expo-font expo-splash-screen`
The `expo-splash-screen`[](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/splash-screen>) library provides `SplashScreen` component that you can use to prevent rendering the app until the font is loaded and ready.
2
After installing the font package, map the font using the `useFonts` hook in a top level component such as the root layout (app/layout.tsx) file in your project:
app/_layout.tsx
Copy
```
// Rest of the import statements
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
 const [loaded, error] = useFonts({
  Inter_900Black,
 });
 useEffect(() => {
  if (loaded || error) {
   SplashScreen.hideAsync();
  }
 }, [loaded, error]);
 if (!loaded && !error) {
  return null;
 }
 return (
  %%placeholder-start%%... %%placeholder-end%%
 )
}

```

3
Use the font on the `<Text>` by using `fontFamily` style prop in a React component:
```
<Text style={{ fontFamily: 'Inter_900Black' }}>Inter Black</Text>

```

## Additional information[](https://docs.expo.dev/develop/user-interface/fonts/<#additional-information>)
### Minimal example[](https://docs.expo.dev/develop/user-interface/fonts/<#minimal-example>)
[`expo-font` usageSee usage section in Expo Fonts API reference for a minimal example of using a custom font.](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/font#usage>)
### Beyond OTF and TTF[](https://docs.expo.dev/develop/user-interface/fonts/<#beyond-otf-and-ttf>)
If your font is in format other than OTF or TTF, you have to [customize the Metro bundler configuration to include it as an extra asset](https://docs.expo.dev/develop/user-interface/fonts/</guides/customizing-metro#adding-more-file-extensions-to-assetexts>) for it to work. In some cases, rendering a font format that a platform doesn't support may cause your app to crash.
For reference, the following table provides the list formats that work on each native platform:
Format| Android| iOS| Web  
---|---|---|---  
bdf  
dfont  
eot  
fon  
otf  
ps  
svg  
ttc  
ttf  
woff  
woff2  
### Platform built-in fonts[](https://docs.expo.dev/develop/user-interface/fonts/<#platform-built-in-fonts>)
If you don't want to use a custom font by specifying a `fontFamily`, platform's default font will be used. Each platform has a set of built in fonts. On Android, the default font is Roboto. On iOS, it's SF Pro.
A platform's default font is usually easy-to-read. However, don't be surprised when the system default font is changed to use another font that is not easy to read. In this case, use your custom font so you have precise control over what the user will see.
### Handle `@expo/vector-icons` initial load[](https://docs.expo.dev/develop/user-interface/fonts/<#handle-expovector-icons-initial-load>)
When the icons from `@expo/vector-icons` library load for the first time, they appear as invisible icons in your app. Once they load, they're cached for all the app's subsequent usage. To avoid showing invisible icons on your app's first load, preload during the initial loading screen with `useFonts`[](https://docs.expo.dev/develop/user-interface/fonts/</versions/latest/sdk/font#usefontsmap>). For example:
app/_layout.tsx
Copy
```
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function RootLayout() {
 useFonts([require('./assets/fonts/Inter-Black.otf', Ionicons.font)]);
 return (
  %%placeholder-start%%... %%placeholder-end%%
 )
}

```

Now, you can use any icon from the `Ionicons` library in a React component:
```
<Ionicons name="checkmark-circle" size={32} color="green" />

```
[IconsLearn how to use various types of icons in your Expo app, including vector icons, custom icon fonts, icon images, and icon buttons.](https://docs.expo.dev/develop/user-interface/fonts/</guides/icons>)
### Loading a remote font directly from the web[](https://docs.expo.dev/develop/user-interface/fonts/<#loading-a-remote-font-directly-from-the-web>)
> If you're loading remote fonts, make sure they are being served from an origin with CORS properly configured. If you don't do this, your remote font might not load properly on the web platform.
Loading fonts from a local asset is the safest way to load a font in your app. When including fonts as local assets, after you submit your app to the app stores, these fonts are bundled with the app download and will be available immediately. You don't have to worry about CORS or other potential issues.
However, loading a font file directly from web is done by replacing the `require('./assets/fonts/FontName.otf')` with the URL of your font as shown in the example below.
Using a remote font
Copy
Open in Snack
```
import { useFonts } from 'expo-font';
import { Text, View, StyleSheet } from 'react-native';
export default function App() {
 const [loaded, error] = useFonts({
  'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
 });
 if (!loaded || !error) {
  return null;
 }
 return (
  <View style={styles.container}><Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>Inter SemiBoldItalic</Text><Text style={{ fontSize: 30 }}>Platform Default</Text></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
});

```

[Previous (Develop - User interface)Safe areas](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/safe-areas>)[Next (Develop - User interface)Assets](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/assets>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/user-interface/fonts/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/user-interface/fonts/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/fonts.mdx>)
  * Last updated on November 14, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/user-interface/fonts/<https:/expo.dev/privacy>).
On this page
[Add a custom font](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#add-a-custom-font>)[Supported font formats](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#supported-font-formats>)[How to choose between OTF and TTF](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#how-to-choose-between-otf-and-ttf>)[Use a local font file](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#use-a-local-font-file>)[With expo-font config plugin](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#with-expo-font-config-plugin>)[With useFonts hook](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#with-usefonts-hook>)[Use Google Fonts](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#use-google-fonts>)[With expo-font config plugin](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#with-expo-font-config-plugin-1>)[With useFonts hook](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#with-usefonts-hook-1>)[Additional information](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#additional-information>)[Minimal example](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#minimal-example>)[Beyond OTF and TTF](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#beyond-otf-and-ttf>)[Platform built-in fonts](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#platform-built-in-fonts>)[Handle @expo/vector-icons initial load](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#handle-expovector-icons-initial-load>)[Loading a remote font directly from the web](https://docs.expo.dev/develop/user-interface/fonts/</develop/user-interface/fonts/#loading-a-remote-font-directly-from-the-web>)
