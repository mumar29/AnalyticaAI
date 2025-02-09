[](https://docs.expo.dev/develop/user-interface/assets/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/user-interface/assets/</>)
[Blog](https://docs.expo.dev/develop/user-interface/assets/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/user-interface/assets/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/user-interface/assets/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/user-interface/assets/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/user-interface/assets/</>)[Guides](https://docs.expo.dev/develop/user-interface/assets/</guides/overview>)[EAS](https://docs.expo.dev/develop/user-interface/assets/</eas>)[Reference](https://docs.expo.dev/develop/user-interface/assets/</versions/latest>)[Learn](https://docs.expo.dev/develop/user-interface/assets/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/user-interface/assets/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/user-interface/assets/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/user-interface/assets/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/user-interface/assets/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/user-interface/assets/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/user-interface/assets/</develop/tools>)
Navigation
User interface
[Splash screen and app icon](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/splash-screen-and-app-icon>)[Safe areas](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/safe-areas>)[Fonts](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/fonts>)[Assets](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets>)[Color themes](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/color-themes>)[Animation](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/animation>)[Store data](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/store-data>)[Next steps](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/next-steps>)
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/user-interface/assets/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/user-interface/assets/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/user-interface/assets/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/user-interface/assets/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/user-interface/assets/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/user-interface/assets/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/user-interface/assets/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/user-interface/assets/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/user-interface/assets/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/user-interface/assets/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/user-interface/assets/</core-concepts>)[FAQ](https://docs.expo.dev/develop/user-interface/assets/</faq>)
[Archive](https://docs.expo.dev/develop/user-interface/assets/</archive>)[Expo Snack](https://docs.expo.dev/develop/user-interface/assets/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/user-interface/assets/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/user-interface/assets/<https:/expo.dev/mailing-list/signup>)
# Assets
[Edit this page](https://docs.expo.dev/develop/user-interface/assets/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/assets.mdx> "Edit content of this page on GitHub")
Learn about using static assets in your project, including images, videos, sounds, database files, and fonts.
[Edit this page](https://docs.expo.dev/develop/user-interface/assets/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/assets.mdx> "Edit content of this page on GitHub")
A static asset is a file that is bundled with your app's binary (native binary). This file type is not part of your app's JavaScript bundle which contain your app's code. Common types of static assets include images, videos, sounds, database files for SQLite, and fonts. These assets can be served locally from your project or remotely over the network.
This guide covers different ways you can load and use static assets in your project and also provides additional information on how to optimize and minify assets.
## Serve an asset locally[](https://docs.expo.dev/develop/user-interface/assets/<#serve-an-asset-locally>)
When an asset is stored in your project's file system, it can be embedded in your app binary at build time or loaded at runtime. You can import it like a JavaScript module using `require` or `import` statements.
For example, to render an image called example.png in App.js, you can use `require` to import the image from the project's assets/images directory and pass it to the `<Image>` component:
app/index.tsx
Copy
```
<Image source={require('./assets/images/example.png')} />

```

In the above example, the bundler reads the imported image's metadata and automatically provides the width and height. For more information, see [Static Image Resources](https://docs.expo.dev/develop/user-interface/assets/<https:/reactnative.dev/docs/images#static-image-resources>).
Libraries such as `expo-image` and `expo-file-system` work similarly to the `<Image>` component with local assets.
### How are assets served locally[](https://docs.expo.dev/develop/user-interface/assets/<#how-are-assets-served-locally>)
Locally stored assets are served over HTTP in development. They are automatically bundled into your app binary at the build time for production apps and served from disk on a device.
### Load an asset at build time with `expo-asset` config plugin[](https://docs.expo.dev/develop/user-interface/assets/<#load-an-asset-at-build-time-with-expo-asset-config-plugin>)
> Note: The `expo-asset` config plugin is only available for SDK 51 and above. If you are using an older SDK, you can load a [using the `useAssets` hook](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets#load-an-asset-at-runtime-with-useassets-hook>).
To load an asset at build time, you can use the [config plugin](https://docs.expo.dev/develop/user-interface/assets/</versions/latest/sdk/asset#example-appjson-with-config-plugin>) from the `expo-asset` library. This plugin will embed the asset file in your native project.
1
Install the `expo-asset` library.
Terminal
Copy
`- ``npx expo install expo-asset`
2
Add the config plugin to your project's [app config](https://docs.expo.dev/develop/user-interface/assets/</versions/latest/config/app#plugins>) file. The configuration must contain the path to the asset file using `assets`[](https://docs.expo.dev/develop/user-interface/assets/</versions/latest/sdk/asset#configurable-properties>) property which takes an array of one or more files or directories to link to the native project.
The path to each asset file must be relative to your project's root since the app config file is located in the project's root directory.
app.json
Copy
```
{
 "expo": {
  "plugins": [
   [
    "expo-asset",
    {
     "assets": ["./assets/images/example.png"]
    }
   ]
  ]
 }
}

```

3
After embedding the asset with the config plugin, [create a new development build](https://docs.expo.dev/develop/user-interface/assets/</develop/development-builds/create-a-build>). Now, you can import and use the asset in your project without using a `require` or an `import` statement.
For example, the example.png is linked by the above config plugin. You can directly import it into your component and use its resource name.
app/index.tsx
Copy
```
import { Image } from 'expo-image';
%%placeholder-start%%... %%placeholder-end%%
export default function HomeScreen() {
 return <Image source="example" />;
}

```

The above example is quite concise. However, when a native API expects a specific file and its resource name, this method makes it convenient to integrate with that API and use the resource name directly.
> Different file formats are supported with the `expo-asset` config plugin. For more information on these formats, see [Assets API reference](https://docs.expo.dev/develop/user-interface/assets/</versions/latest/sdk/asset#configurable-properties>). If you don't see a file format supported by the config plugin, you can use the `useAssets`[](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets#load-an-asset-at-runtime-with-useassets-hook>) hook to load the asset at runtime.
### Load an asset at runtime with `useAssets` hook[](https://docs.expo.dev/develop/user-interface/assets/<#load-an-asset-at-runtime-with-useassets-hook>)
The `useAssets` hook from `expo-asset` library allows loading assets asynchronously. This hook downloads and stores an asset locally and after the asset is loaded, it returns a list of that asset's instances.
1
Install the `expo-asset` library.
Terminal
Copy
`- ``npx expo install expo-asset`
2
Import the `useAssets`[](https://docs.expo.dev/develop/user-interface/assets/</versions/latest/sdk/asset#useassetsmoduleids>) hook from the `expo-asset` library in your screen component:
app/index.tsx
Copy
```
import { useAssets } from 'expo-asset';
export default function HomeScreen() {
 const [assets, error] = useAssets([
  require('path/to/example-1.jpg'),
  require('path/to/example-2.png'),
 ]);
 return assets ? <Image source={assets[0]} /> : null;
}

```

## Serve an asset remotely[](https://docs.expo.dev/develop/user-interface/assets/<#serve-an-asset-remotely>)
When an asset is served remotely, it is not bundled into the app binary at build time. You can use the URL of the asset resource in your project if it is hosted remotely. For example, pass the URL to the `<Image>` component to render a remote image:
App.js
Copy
```
import { Image } from 'expo-image';
%%placeholder-start%%... %%placeholder-end%%
function App() {
 return (
  <Image source={{ uri: 'https://example.com/logo.png' }} style={{ width: 50, height: 50 }} />
 );
}

```

There is no guarantee about the availability of images served remotely using a web URL because an internet connection may not be available, or the asset might be removed.
Additionally, loading assets remotely also requires you to provide an asset's metadata. In the above example, since the bundler cannot retrieve the image's width and height, those values are passed explicitly to the `<Image>` component. If you don't, the image will default to 0px by 0px.
## Additional information[](https://docs.expo.dev/develop/user-interface/assets/<#additional-information>)
### Manual optimization methods[](https://docs.expo.dev/develop/user-interface/assets/<#manual-optimization-methods>)
#### Images[](https://docs.expo.dev/develop/user-interface/assets/<#images>)
You can compress images using the following:
  * `guetzli`[](https://docs.expo.dev/develop/user-interface/assets/<https:/github.com/google/guetzli>)
  * `pngcrush`[](https://docs.expo.dev/develop/user-interface/assets/<https:/pmt.sourceforge.io/pngcrush/>)
  * `optipng`[](https://docs.expo.dev/develop/user-interface/assets/<http:/optipng.sourceforge.net/>)


Some image optimizers are lossless. They re-encode your image to be smaller without any change or loss in the pixels displayed. When you need each pixel to be untouched from the original image, a lossless optimizer and a lossless image format like PNG are a good choice.
Other image optimizers are lossy. The optimized image differs from the original image. Often, lossy optimizers are more efficient because they discard visual information that reduces file size while making the image look nearly identical to humans. Tools like `imagemagick` can use comparison algorithms like [SSIM](https://docs.expo.dev/develop/user-interface/assets/<https:/en.wikipedia.org/wiki/Structural_similarity>) to show how similar two images look. It's quite common for an optimized image that is over 95% similar to the original image to be far less than 95% of the original file size.
#### Other assets[](https://docs.expo.dev/develop/user-interface/assets/<#other-assets>)
For assets like GIFs or videos, or non-code and non-image assets, it's up to you to optimize and minify those assets.
> Note: GIFs are a very inefficient format. Modern video codecs can produce significantly smaller file sizes with better quality.
### Fonts[](https://docs.expo.dev/develop/user-interface/assets/<#fonts>)
See [Add a custom font](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/fonts#add-a-custom-font>) for more information on how to add a custom font to your app.
[Previous (Develop - User interface)Fonts](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/fonts>)[Next (Develop - User interface)Color themes](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/color-themes>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/user-interface/assets/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/user-interface/assets/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/assets.mdx>)
  * Last updated on August 26, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/user-interface/assets/<https:/expo.dev/privacy>).
On this page
[Serve an asset locally](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets/#serve-an-asset-locally>)[How are assets served locally](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets/#how-are-assets-served-locally>)[Load an asset at build time with expo-asset config plugin](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets/#load-an-asset-at-build-time-with-expo-asset-config-plugin>)[Load an asset at runtime with useAssets hook](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets/#load-an-asset-at-runtime-with-useassets-hook>)[Serve an asset remotely](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets/#serve-an-asset-remotely>)[Additional information](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets/#additional-information>)[Manual optimization methods](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets/#manual-optimization-methods>)[Fonts](https://docs.expo.dev/develop/user-interface/assets/</develop/user-interface/assets/#fonts>)
