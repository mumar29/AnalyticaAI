[](https://docs.expo.dev/guides/tailwind/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/tailwind/</>)
[Blog](https://docs.expo.dev/guides/tailwind/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/tailwind/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/tailwind/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/tailwind/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/tailwind/</>)[Guides](https://docs.expo.dev/guides/tailwind/</guides/overview>)[EAS](https://docs.expo.dev/guides/tailwind/</eas>)[Reference](https://docs.expo.dev/guides/tailwind/</versions/latest>)[Learn](https://docs.expo.dev/guides/tailwind/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/tailwind/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/tailwind/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/tailwind/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/tailwind/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/tailwind/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/tailwind/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/tailwind/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/tailwind/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
[Develop websites](https://docs.expo.dev/guides/tailwind/</workflow/web>)[Publish websites](https://docs.expo.dev/guides/tailwind/</guides/publishing-websites>)[DOM components](https://docs.expo.dev/guides/tailwind/</guides/dom-components>)[Progressive web apps](https://docs.expo.dev/guides/tailwind/</guides/progressive-web-apps>)[Tailwind CSS](https://docs.expo.dev/guides/tailwind/</guides/tailwind>)
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/tailwind/</router/introduction>)[Installation](https://docs.expo.dev/guides/tailwind/</router/installation>)[Create pages](https://docs.expo.dev/guides/tailwind/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/tailwind/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/tailwind/</router/layouts>)[Error handling](https://docs.expo.dev/guides/tailwind/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/tailwind/</modules/overview>)[Get started](https://docs.expo.dev/guides/tailwind/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/tailwind/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/tailwind/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/tailwind/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/tailwind/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/tailwind/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/tailwind/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/tailwind/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/tailwind/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/tailwind/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/tailwind/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/tailwind/</archive>)[Expo Snack](https://docs.expo.dev/guides/tailwind/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/tailwind/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/tailwind/<https:/expo.dev/mailing-list/signup>)
# Tailwind CSS
[Edit this page](https://docs.expo.dev/guides/tailwind/<https:/github.com/expo/expo/edit/main/docs/pages/guides/tailwind.mdx> "Edit content of this page on GitHub")
Learn how to configure and use Tailwind CSS in your Expo project.
[Edit this page](https://docs.expo.dev/guides/tailwind/<https:/github.com/expo/expo/edit/main/docs/pages/guides/tailwind.mdx> "Edit content of this page on GitHub")
> Standard Tailwind CSS supports only web platform. For universal support, use a library such as [NativeWind](https://docs.expo.dev/guides/tailwind/<https:/www.nativewind.dev/>), which allows creating styled React Native components with Tailwind CSS.
[Tailwind CSS](https://docs.expo.dev/guides/tailwind/<https:/tailwindcss.com/>) is a utility-first CSS framework and can be used with Metro for web projects. This guide explains how to configure your Expo project to use the framework.
## Prerequisites[](https://docs.expo.dev/guides/tailwind/<#prerequisites>)
The following files will be modified to set the Tailwind CSS configuration:
`app.json`
`package.json`
`global.css`
`tailwind.config.js`
`index.js`
Ensure that your project is using Metro for web. You can verify this by checking the `web.bundler` field which is set to `metro` in the app.json file.
app.json
Copy
```
{
 "expo": {
  "web": {
   "bundler": "metro"
  }
 }
}

```

## Configuration[](https://docs.expo.dev/guides/tailwind/<#configuration>)
Configure Tailwind CSS in your Expo project according to the [Tailwind PostCSS documentation](https://docs.expo.dev/guides/tailwind/<https:/tailwindcss.com/docs/installation/using-postcss>).]
1
Install `tailwindcss` and its required peer dependencies. Then, the run initialization command to create tailwind.config.js and post.config.js files in the root of your project.
Terminal
`# Install Tailwind and its peer dependencies`
`- ``npx expo add tailwindcss postcss autoprefixer -- --dev`
`# Create a Tailwind config file`
`- ``npx tailwindcss init -p`
2
Add paths to all of your template files inside tailwind.config.js.
tailwind.config.js
Copy
```
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  // Ensure this points to your source code
  './app/**/*.{js,tsx,ts,jsx}',
  // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
  // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
 ],
 theme: {
  extend: {},
 },
 plugins: [],
};

```

> If you are using Expo Router, consider using a root src directory to simplify this step. Learn more about [top-level src directory](https://docs.expo.dev/guides/tailwind/</router/reference/src-directory>).
3
Create a global.css file in the root of your project and directives for each of Tailwind's layers:
global.css
Copy
```
/* This file adds the requisite utility classes for Tailwind to work. */
@tailwind base;
@tailwind components;
@tailwind utilities;

```

4
Import the global.css file in your app/_layout.tsx (if using Expo Router) or index.js file:
app/_layout.tsx
Copy
```
import '../global.css';

```

index.js
Copy
```
// Import the global.css file in the index.js file:
import './global.css';

```

> If you are using [DOM components](https://docs.expo.dev/guides/tailwind/</guides/dom-components>), add this file import to each module using the `"use dom"` directive since they don't share globals.
5
You now start your project and use Tailwind CSS classes in your components.
Terminal
Copy
`- ``npx expo start`
## Usage[](https://docs.expo.dev/guides/tailwind/<#usage>)
You can use Tailwind with React DOM elements as-is:
app/index.tsx
Copy
```
export default function Index() {
 return (
  <div className="bg-slate-100 rounded-xl"><p className="text-lg font-medium">Welcome to Tailwind</p></div>
 );
}

```

You can use the `{ $$css: true }` syntax to use Tailwind with React Native web elements:
app/index.tsx
Copy
```
import { View, Text } from 'react-native';
export default function Index() {
 return (
  <View style={{ $$css: true, _: 'bg-slate-100 rounded-xl' }}><Text style={{ $$css: true, _: 'text-lg font-medium' }}>Welcome to Tailwind</Text></View>
 );
}

```

## Tailwind for Android and iOS[](https://docs.expo.dev/guides/tailwind/<#tailwind-for-android-and-ios>)
Tailwind does not support Android and iOS platforms. You can use a compatibility library such as [NativeWind](https://docs.expo.dev/guides/tailwind/<https:/www.nativewind.dev/>) for universal support.
## Alternative for Android and iOS[](https://docs.expo.dev/guides/tailwind/<#alternative-for-android-and-ios>)
Alternatively, you can use [DOM components](https://docs.expo.dev/guides/tailwind/</guides/dom-components>) to render your Tailwind web code in a `WebView` on native.
app/index.tsx
Copy
```
'use dom';
// Remember to import the global.css file in each DOM component.
import '../global.css';
export default function Page() {
 return (
  <div className="bg-slate-100 rounded-xl"><p className="text-lg font-medium">Welcome to Tailwind</p></div>
 );
}

```

## Troubleshooting[](https://docs.expo.dev/guides/tailwind/<#troubleshooting>)
If you have a custom `config.cacheStores` in your metro.config.js, you need to extend the Expo superclass of `FileStore`:
metro.config.js
Copy
```
// Import the Expo superclass which has support for PostCSS.
const { FileStore } = require('@expo/metro-config/file-store');
config.cacheStores = [
 new FileStore({
  root: '/path/to/custom/cache',
 }),
];
module.exports = config;

```

Ensure you don't have CSS disabled in your metro.config.js:
metro.config.js
Copy
```
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
 // Do not disable CSS support when using Tailwind.
 isCSSEnabled: true,
});

```

[Previous (Development process - Web)Progressive web apps](https://docs.expo.dev/guides/tailwind/</guides/progressive-web-apps>)[Next (Development process - Bundling)Bundle with Metro](https://docs.expo.dev/guides/tailwind/</guides/customizing-metro>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/tailwind/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/tailwind/<https:/github.com/expo/expo/edit/main/docs/pages/guides/tailwind.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/tailwind/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/guides/tailwind/</guides/tailwind/#prerequisites>)[Configuration](https://docs.expo.dev/guides/tailwind/</guides/tailwind/#configuration>)[Usage](https://docs.expo.dev/guides/tailwind/</guides/tailwind/#usage>)[Tailwind for Android and iOS](https://docs.expo.dev/guides/tailwind/</guides/tailwind/#tailwind-for-android-and-ios>)[Alternative for Android and iOS](https://docs.expo.dev/guides/tailwind/</guides/tailwind/#alternative-for-android-and-ios>)[Troubleshooting](https://docs.expo.dev/guides/tailwind/</guides/tailwind/#troubleshooting>)
