[](https://docs.expo.dev/guides/using-nextjs/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/using-nextjs/</>)
[Blog](https://docs.expo.dev/guides/using-nextjs/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/using-nextjs/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/using-nextjs/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/using-nextjs/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/using-nextjs/</>)[Guides](https://docs.expo.dev/guides/using-nextjs/</guides/overview>)[EAS](https://docs.expo.dev/guides/using-nextjs/</eas>)[Reference](https://docs.expo.dev/guides/using-nextjs/</versions/latest>)[Learn](https://docs.expo.dev/guides/using-nextjs/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/using-nextjs/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/using-nextjs/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/using-nextjs/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/using-nextjs/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/using-nextjs/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/using-nextjs/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/using-nextjs/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/using-nextjs/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/using-nextjs/</router/introduction>)[Installation](https://docs.expo.dev/guides/using-nextjs/</router/installation>)[Create pages](https://docs.expo.dev/guides/using-nextjs/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/using-nextjs/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/using-nextjs/</router/layouts>)[Error handling](https://docs.expo.dev/guides/using-nextjs/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/using-nextjs/</modules/overview>)[Get started](https://docs.expo.dev/guides/using-nextjs/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/using-nextjs/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/using-nextjs/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/using-nextjs/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/using-nextjs/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/using-nextjs/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/using-nextjs/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/using-nextjs/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/using-nextjs/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/using-nextjs/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/using-nextjs/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/using-nextjs/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/using-nextjs/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/using-nextjs/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/using-nextjs/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/using-nextjs/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/using-nextjs/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/using-nextjs/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/using-nextjs/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/using-nextjs/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/using-nextjs/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/using-nextjs/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/using-nextjs/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/using-nextjs/</archive>)[Expo Snack](https://docs.expo.dev/guides/using-nextjs/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/using-nextjs/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/using-nextjs/<https:/expo.dev/mailing-list/signup>)
# Using Next.js with Expo for Web
[Edit this page](https://docs.expo.dev/guides/using-nextjs/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-nextjs.mdx> "Edit content of this page on GitHub")
A guide for integrating Next.js with Expo for the web.
[Edit this page](https://docs.expo.dev/guides/using-nextjs/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-nextjs.mdx> "Edit content of this page on GitHub")
> Using Next.js is not an official part of Expo's universal app development workflow.
[Next.js](https://docs.expo.dev/guides/using-nextjs/<https:/nextjs.org/>) is a React framework that provides simple page-based routing as well as server-side rendering. To use Next.js with the Expo SDK, we recommend using `@expo/next-adapter`[](https://docs.expo.dev/guides/using-nextjs/<https:/github.com/expo/expo-cli/tree/main/packages/next-adapter>) library to handle the configuration.
Using Expo with Next.js means you can share some of your existing components and APIs across your mobile and web app. Next.js has its own CLI that you'll need to use when developing for the web platform, so you'll need to start your web projects with the Next.js CLI and not with `npx expo start`.
> Next.js can only be used with Expo for web as there is no support for Server-Side Rendering (SSR) for native apps.
## Automatic setup[](https://docs.expo.dev/guides/using-nextjs/<#automatic-setup>)
To quickly get started, create a new project using [with-nextjs](https://docs.expo.dev/guides/using-nextjs/<https:/github.com/expo/examples/tree/master/with-nextjs>) template:
Terminal
Copy
`- ``npx create-expo-app -e with-nextjs`
  * Native: `npx expo start` — start the Expo project
  * Web: `npx next dev` — start the Next.js project


## Manual setup[](https://docs.expo.dev/guides/using-nextjs/<#manual-setup>)
### Install dependencies[](https://docs.expo.dev/guides/using-nextjs/<#install-dependencies>)
Ensure you have `expo`, `next`, `@expo/next-adapter` installed in your project:
Terminal
Copy
`- ``yarn add expo next @expo/next-adapter`
### Transpilation[](https://docs.expo.dev/guides/using-nextjs/<#transpilation>)
Configure Next.js to transform language features:
Next.js with swc. (Recommended)[](https://docs.expo.dev/guides/using-nextjs/<#nextjs-with-swc-recommended>)
Using Next.js with SWC is recommended. You can configure the [babel.config.js](https://docs.expo.dev/guides/using-nextjs/</versions/latest/config/babel>) to only account for native:
babel.config.js
Copy
```
module.exports = function (api) {
 api.cache(true);
 return {
  presets: ['babel-preset-expo'],
 };
};

```

You will also have to [force Next.js to use SWC](https://docs.expo.dev/guides/using-nextjs/<https:/nextjs.org/docs/messages/swc-disabled>) by adding the following to your next.config.js:
next.config.js
Copy
```
module.exports = {
 experimental: {
  forceSwcTransforms: true,
 },
};

```

Next.js with Babel. (Not recommended)[](https://docs.expo.dev/guides/using-nextjs/<#nextjs-with-babel-not-recommended>)
Adjust your babel.config.js to conditionally add `next/babel` when bundling with webpack for web:
babel.config.js
Copy
```
module.exports = function (api) {
 // Detect web usage (this may change in the future if Next.js changes the loader)
 const isWeb = api.caller(
  caller =>
   caller && (caller.name === 'babel-loader' || caller.name === 'next-babel-turbo-loader')
 );
 return {
  presets: [
   // Only use next in the browser, it'll break your native project
   isWeb && require('next/babel'),
   'babel-preset-expo',
  ].filter(Boolean),
 };
};

```

### Next.js configuration[](https://docs.expo.dev/guides/using-nextjs/<#nextjs-configuration>)
Add the following to your next.config.js:
next.config.js
Copy
```
const { withExpo } = require('@expo/next-adapter');
module.exports = withExpo({
 // transpilePackages is a Next.js +13.1 feature.
 // older versions can use next-transpile-modules
 transpilePackages: [
  'react-native',
  'react-native-web',
  'expo',
  // Add more React Native/Expo packages here...
 ],
});

```

The fully qualified Next.js config may look like:
next.config.js
Copy
```
const { withExpo } = require('@expo/next-adapter');
/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
 reactStrictMode: true,
 swcMinify: true,
 transpilePackages: [
  'react-native',
  'react-native-web',
  'expo',
  // Add more React Native/Expo packages here...
 ],
 experimental: {
  forceSwcTransforms: true,
 },
});
module.exports = nextConfig;

Show More

```

### React Native Web styling[](https://docs.expo.dev/guides/using-nextjs/<#react-native-web-styling>)
The package `react-native-web` builds on the assumption of reset CSS styles. Here's how you reset styles in Next.js using the pages directory.
pages/_document.js
Copy
```
import { Children } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native';
// Follows the setup for react-native-web:
// https://necolas.github.io/react-native-web/docs/setup/#root-element
// Plus additional React Native scroll and text parity styles for various
// browsers.
// Force Next-generated DOM elements to fill their parent's height
const style = `
html, body, #__next {
 -webkit-overflow-scrolling: touch;
}
#__next {
 display: flex;
 flex-direction: column;
 height: 100%;
}
html {
 scroll-behavior: smooth;
 -webkit-text-size-adjust: 100%;
}
body {
 /* Allows you to scroll below the viewport; default value is visible */
 overflow-y: auto;
 overscroll-behavior-y: none;
 text-rendering: optimizeLegibility;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 -ms-overflow-style: scrollbar;
}
`;
export default class MyDocument extends Document {
 static async getInitialProps({ renderPage }) {
  AppRegistry.registerComponent('main', () => Main);
  const { getStyleElement } = AppRegistry.getApplication('main');
  const page = await renderPage();
  const styles = [
   <style key="react-native-style" dangerouslySetInnerHTML={{ __html: style }} />,
   getStyleElement(),
  ];
  return { ...page, styles: Children.toArray(styles) };
 }
 render() {
  return (
   <Html style={{ height: '100%' }}><Head /><body style={{ height: '100%', overflow: 'hidden' }}><Main /><NextScript /></body></Html>
  );
 }
}

Show More

```

pages/_app.js
Copy
```
import Head from 'next/head';
export default function App({ Component, pageProps }) {
 return (
  <><Head><meta name="viewport" content="width=device-width, initial-scale=1" /></Head><Component {...pageProps} /></>
 );
}

```

## Transpiling modules[](https://docs.expo.dev/guides/using-nextjs/<#transpiling-modules>)
By default, modules in the React Native ecosystem are not transpiled to run in web browsers. React Native relies on advanced caching in Metro to reload quickly. Next.js uses webpack, which does not have the same level of caching, so no node modules are transpiled by default. You will have to manually mark every module you want to transpile with the `transpilePackages` option in next.config.js:
next.config.js
Copy
```
const { withExpo } = require('@expo/next-adapter');
module.exports = withExpo({
 experimental: {
  transpilePackages: [
   // NOTE: Even though `react-native` is never used in Next.js,
   // you need to list `react-native` because `react-native-web`
   // is aliased to `react-native`.
   'react-native',
   'react-native-web',
   'expo',
   // Add more React Native/Expo packages here...
  ],
 },
});

```

## Deploy to Vercel[](https://docs.expo.dev/guides/using-nextjs/<#deploy-to-vercel>)
This is Vercel's preferred method for deploying Next.js projects to production.
1
Add a `build` script to your package.json:
package.json
Copy
```
{
 "scripts": {
  "build": "next build"
 }
}

```

2
Install the Vercel CLI:
Terminal
Copy
`- ``npm i -g vercel`
3
Deploy to Vercel:
Terminal
Copy
`- ``vercel`
## Limitations or differences compared to the default Expo for Web[](https://docs.expo.dev/guides/using-nextjs/<#limitations-or-differences-compared-to-the-default-expo-for-web>)
Using Next.js for the web means you will be bundling with the Next.js webpack config. This will lead to some core differences in how you develop your app vs your website.
  * Expo Next.js adapter does not support the experimental app directory.
  * For file-based routing on native, we recommend using [Expo Router](https://docs.expo.dev/guides/using-nextjs/<https:/github.com/expo/router>).


## Contributing[](https://docs.expo.dev/guides/using-nextjs/<#contributing>)
If you would like to help make Next.js support in Expo better, feel free to open a PR or submit an issue:
  * [@expo/next-adapter](https://docs.expo.dev/guides/using-nextjs/<https:/github.com/expo/expo-cli/tree/main/packages/next-adapter>)


## Troubleshooting[](https://docs.expo.dev/guides/using-nextjs/<#troubleshooting>)
### Cannot use import statement outside a module[](https://docs.expo.dev/guides/using-nextjs/<#cannot-use-import-statement-outside-a-module>)
Figure out which module has the import statement and add it to the `transpilePackages` option in next.config.js:
next.config.js
Copy
```
const { withExpo } = require('@expo/next-adapter');
module.exports = withExpo({
 experimental: {
  transpilePackages: [
   'react-native',
   'react-native-web',
   'expo',
   // Add the failing package here, and restart the server...
  ],
 },
});

```

[Previous (More - Integrations)Using ESLint and Prettier](https://docs.expo.dev/guides/using-nextjs/</guides/using-eslint>)[Next (More - Integrations)Using LogRocket](https://docs.expo.dev/guides/using-nextjs/</guides/using-logrocket>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/using-nextjs/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/using-nextjs/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-nextjs.mdx>)
  * Last updated on January 01, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/using-nextjs/<https:/expo.dev/privacy>).
On this page
[Automatic setup](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#automatic-setup>)[Manual setup](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#manual-setup>)[Install dependencies](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#install-dependencies>)[Transpilation](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#transpilation>)[Next.js configuration](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#nextjs-configuration>)[React Native Web styling](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#react-native-web-styling>)[Transpiling modules](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#transpiling-modules>)[Deploy to Vercel](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#deploy-to-vercel>)[Limitations or differences compared to the default Expo for Web](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#limitations-or-differences-compared-to-the-default-expo-for-web>)[Contributing](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#contributing>)[Troubleshooting](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#troubleshooting>)[Cannot use import statement outside a module](https://docs.expo.dev/guides/using-nextjs/</guides/using-nextjs/#cannot-use-import-statement-outside-a-module>)
