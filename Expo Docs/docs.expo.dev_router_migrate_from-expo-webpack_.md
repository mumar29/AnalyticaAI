[](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/migrate/from-expo-webpack/</>)
[Blog](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/migrate/from-expo-webpack/</>)[Guides](https://docs.expo.dev/router/migrate/from-expo-webpack/</guides/overview>)[EAS](https://docs.expo.dev/router/migrate/from-expo-webpack/</eas>)[Reference](https://docs.expo.dev/router/migrate/from-expo-webpack/</versions/latest>)[Learn](https://docs.expo.dev/router/migrate/from-expo-webpack/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/migrate/from-expo-webpack/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/migrate/from-expo-webpack/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/migrate/from-expo-webpack/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/migrate/from-expo-webpack/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/migrate/from-expo-webpack/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/migrate/from-expo-webpack/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/migrate/from-expo-webpack/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/migrate/from-expo-webpack/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/introduction>)[Installation](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/installation>)[Create pages](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/layouts>)[Error handling](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
[React Navigation](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-react-navigation>)[Expo Webpack](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack>)
Expo Modules API
[Overview](https://docs.expo.dev/router/migrate/from-expo-webpack/</modules/overview>)[Get started](https://docs.expo.dev/router/migrate/from-expo-webpack/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/migrate/from-expo-webpack/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/migrate/from-expo-webpack/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/migrate/from-expo-webpack/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/migrate/from-expo-webpack/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/migrate/from-expo-webpack/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/migrate/from-expo-webpack/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/migrate/from-expo-webpack/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/migrate/from-expo-webpack/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/migrate/from-expo-webpack/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/migrate/from-expo-webpack/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/migrate/from-expo-webpack/</archive>)[Expo Snack](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/expo.dev/mailing-list/signup>)
# Migrate from Expo Webpack
[Edit this page](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/github.com/expo/expo/edit/main/docs/pages/router/migrate/from-expo-webpack.mdx> "Edit content of this page on GitHub")
Learn how to migrate a website using Expo Webpack to Expo Router.
[Edit this page](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/github.com/expo/expo/edit/main/docs/pages/router/migrate/from-expo-webpack.mdx> "Edit content of this page on GitHub")
The original Expo for web version was based on Webpack 4 and focused primarily on building single-page applications (SPAs). This approach was based on [Create React App](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/create-react-app.dev/>) and enabled building simple web apps with Expo SDK and React Native for web.
Expo Router is the new approach to building powerful universal apps that run on web and native. This guide will help you migrate your existing website to Expo Router.
Both React Navigation and Expo Router are Expo frameworks for routing and navigation. Expo Router is a wrapper around React Navigation and has many shared concepts.
## Pitch[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#pitch>)
> `@expo/webpack-config` is deprecated and not receiving any new feature updates.
Expo Router supports [static rendering on web](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/reference/static-rendering>), which enables search engine optimization (SEO), social media previews, and faster loading times, unlike Expo Webpack. Along with the benefits of React Navigation, it enables automatic deep linking, [type safety](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/reference/typed-routes>), [deferred bundling](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/reference/async-routes>), [modular HTML templates](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/reference/static-rendering#root-html>), [static rendering on web](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/reference/static-rendering>), and more.
Expo Router is also designed to fix the main cross-platform issue with Expo Webpack by sharing navigation between web and native without compromising functionality or performance.
## Anti-pitch[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#anti-pitch>)
Expo Router uses a custom bundler stack based on [Metro](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/metrobundler.dev/>). It is the same bundler used by React Native. This is great for ensuring maximum code reusability and solves many forked behavior issues from using different bundlers across platforms. This also means certain bundling features may not be available in Expo Router yet.
Ultimately as a full universal framework, Expo Router is a substantially more robust solution than `@expo/webpack-config`, which is a bundler integration. It should be used for all new Expo web projects.
## Expo CLI[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#expo-cli>)
Unlike `@expo/webpack-config`, Expo Router uses the same CLI commands and features for web and native. Refer to the table below for more information on the differences between Expo Router and `@expo/webpack-config`.
Feature| Expo Router| `@expo/webpack-config`  
---|---|---  
Start command| `npx expo start`| `npx expo start`  
Bundle command| `npx expo export`| `npx expo export:web`  
Output directory| dist| web-build  
Static directory| public| web  
Config file| metro.config.js| webpack.config.js  
Default config| `@expo/metro-config`| `@expo/webpack-config`  
Bundle Splitting|  (SDK 50 • web)  
Global CSS|  (SDK 50 • web)  
CSS Modules|  (SDK 50 • web)  
Static Font Optimization|  (SDK 50 • web)  
API Routes|  (SDK 50)  
Multi-platform  
Fast Refresh  
Error Overlay  
Lazy bundling  
Static Generation  
Environment Variables  
`tsconfig.json` paths  
Tree Shaking|  ([Partial support](https://docs.expo.dev/router/migrate/from-expo-webpack/</guides/tree-shaking>))  
## HTML template[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#html-template>)
In `@expo/webpack-config` all routes shared a single HTML file. This file was based on the template in `web/index.html` which was then modified by the `@expo/webpack-config` to include the necessary scripts and stylesheets.
In Expo Router, there are two different rendering patterns:
  * Recommended: `web.output: "static"` which outputs a new HTML file for each route in the app. This approach lets you [dynamically generate the entire HTML template using the app/+html.js file](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/reference/static-rendering#root-html>).
  * Not recommended: `web.output: "single"` which outputs a single-page application. This approach lets you use `public/index.html` as the template HTML file.


## Static resources[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#static-resources>)
In `@expo/webpack-config`, you could host static files in the `web` directory, which would be served from the website's root. For example, `web/favicon.ico` was served from `https://example.com/favicon.ico`.
In Expo Router, you can use the public directory to host static files. For example, public/favicon.ico is served from `https://example.com/favicon.ico`. Unlike Webpack, Expo Router's hosting works on native too. Make sure to host the files from a server before using them in production.
## Bundling for production[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#bundling-for-production>)
In `@expo/webpack-config`, you could bundle your website for production using `npx expo export:web`. This would output a bundle to the web-build directory.
In Expo Router, use the `npx expo export --platform web` command to export to the dist directory. You can generate sourcemaps with the `--dump-sourcemap` flag. On build, the contents of the public directory will be copied to the dist directory.
## Babel configuration[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#babel-configuration>)
Like before, the root [babel.config.js](https://docs.expo.dev/router/migrate/from-expo-webpack/</versions/latest/config/babel>) file is used for both web and native. You can change the preset by using the `platform` property in the API caller:
babel.config.js
Copy
```
module.exports = api => {
 // Get the platform from the API caller...
 const platform = api.caller(caller => caller && caller.platform);
 return {
  presets: ['babel-preset-expo'],
  plugins: [
   // Add a web-only plugin...
   platform === 'web' && 'custom-web-only-plugin',
  ].filter(Boolean),
 };
};

```

## Dev server[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#dev-server>)
In Expo Router, all platforms are hosted from the same dev server on the same port. This is convenient for emulating the production behavior of the app. All logs and hot module reloading go through the same port as well.
Due to limitations on native, hosting with fake HTTPS is not currently supported. This feature is less important now than in 2018, as you can test secure features such as camera and location on localhost using a web browser like Chrome.
## Expo constants[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#expo-constants>)
The `expo-constants`[](https://docs.expo.dev/router/migrate/from-expo-webpack/</versions/latest/sdk/constants>) library can be used to access the app.json in-app. Behind the scenes, this is accomplished by setting `process.env.APP_MANIFEST` with the stringified contents of the app.json file.
In Expo Router, this is done using Babel with the `expo-router/babel` in SDK 49 and lower and `babel-preset-expo` in SDK 50 and higher. If you modify the app.json, restart the Babel cache with `npx expo start --clear` to see the updates.
## Base path and subpath hosting[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#base-path-and-subpath-hosting>)
> Experimental functionality. It will be available from SDK 50.
In `@expo/webpack-config`, you could bundle your website to be hosted from a subpath by using the `PUBLIC_URL` environment variable or the `homepage` field in the project's package.json:
package.json
Copy
```
{
 "homepage": "/evanbacon/my-website"
}

```

In Expo Router, you can use the experimental `baseUrl` field in the project's app.json:
app.json
Copy
```
{
 "expo": {
  "experiments": {
   "baseUrl": "/evanbacon/my-website"
  }
 }
}

```

Unlike the previous system, this will also update the routing to account for the base path. For example, if you have a route `/profile` and you set the base path to `/evanbacon/my-website`, then the route will be `/evanbacon/my-website/profile`.
See [hosting with sub-paths](https://docs.expo.dev/router/migrate/from-expo-webpack/</more/expo-cli#hosting-with-sub-paths>) for more information.
## Fast refresh[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#fast-refresh>)
In `@expo/webpack-config` you could install `@pmmmwh/react-refresh-webpack-plugin` and add the following to the webpack.config.js:
webpack.config.js
Copy
```
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = async function (env, argv) {
 const config = await createExpoWebpackConfigAsync(env, argv);
 // Use the React refresh plugin in development mode
 if (env.mode === 'development') {
  config.plugins.push(new ReactRefreshWebpackPlugin({ disableRefreshCheck: true }));
 }
 return config;
};

```

In Expo Router, Fast Refresh is enabled by default using the official Fast Refresh implementation by Meta.
## Favicons[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#favicons>)
Like `@expo/webpack-config`, Expo Router supports generating the favicon.ico file based on the `web.favicon` field in the app.json.
## Service workers[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#service-workers>)
> warning: Be careful adding service workers as they are known to cause unexpected behavior on web. If you accidentally ship a service worker that aggressively caches your website, users cannot request updates easily. For the best offline mobile experience, create a native app with Expo. Unlike websites with service workers, native apps can be updated through the app store to clear the cached experience. This would be similar to resetting the user's native browser (which they may have to do if the service worker is aggressive enough). See [why service workers are suboptimal](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/github.com/facebook/create-react-app/issues/2398>) for more information.
Expo Webpack didn't have built-in service worker support. However, you could add it yourself by using the `workbox-webpack-plugin` and adding it to the webpack.config.js.
Workbox doesn't have a Metro integration, but because Workbox doesn't require one of the core features of a bundler (transformation, resolution, serialization), it can easily be used as a post-build step. Follow the guide for [using Workbox CLI](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/developer.chrome.com/docs/workbox/modules/workbox-cli/>), and wherever it refers to a "build script" use `npx expo export -p web` instead.
For example, here's a possible flow for setting up Workbox. Create a new project with the following command:
Terminal
Copy
`- ``npm create expo -t tabs my-app`
`- ``cd my-app`
Next, create a root HTML file for the app and add the service worker registration script:
app/+html.tsx
Copy
```
import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';
// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: PropsWithChildren) {
 return (
  <html lang="en"><head><meta charSet="utf-8" /><meta httpEquiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />{/* Bootstrap the service worker. */}<script dangerouslySetInnerHTML={{ __html: sw }} />{/*
     Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
     However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
    */}<ScrollViewStyleReset />{/* Add any additional <head> elements that you want globally available on web... */}</head><body>{children}</body></html>
 );
}
const sw = `
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
      console.error('Service Worker registration failed:', error);
    });
  });
}
`;

Show More

```

Now build the app before running the wizard:
Terminal
Copy
`- ``npx expo export -p web`
Run the wizard command, select `dist` as the root of the app, and the defaults for everything else:
Terminal
`- ``npx workbox-cli wizard`
`- ``? What is the root of your web app (that is which directory do you deploy)? dist/`
`- ``? Which file types would you like to precache? js, html, ttf, ico, json`
`- ``? Where would you like your service worker file to be saved? dist/sw.js`
`- ``? Where would you like to save these configuration options? workbox-config.js`
`- ``? Does your web app manifest include search parameter(s) in the 'start_url', other than 'utm_' or 'fbclid' (like '?source=pwa')? No`
Finally, run `npx workbox-cli generateSW workbox-config.js` to generate the service worker config. Going forward, you can add a build script in package.json to run both scripts in the correct order:
package.json
Copy
```
{
 "scripts": {
  "build:web": "expo export -p web && npx workbox-cli generateSW workbox-config.js"
 }
}

```

## PWA manifests[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#pwa-manifests>)
Unlike `@expo/webpack-config`, Expo Router does not automatically attempt to generate the PWA manifest configuration. You can create one in public/manifest.json:
```
{
 "short_name": "Expo App",
 "name": "Expo Router Sample",
 "icons": [
  {
   "src": "favicon.ico",
   "sizes": "64x64 32x32 24x24 16x16",
   "type": "image/x-icon"
  },
  {
   "src": "logo192.png",
   "type": "image/png",
   "sizes": "192x192"
  },
  {
   "src": "logo512.png",
   "type": "image/png",
   "sizes": "512x512"
  }
 ],
 "start_url": ".",
 "display": "standalone",
 "theme_color": "#000000",
 "background_color": "#ffffff"
}

Show More

```

You can link this in your HTML file using the `link` tag:
app/+html.tsx
Copy
```
import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';
// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: PropsWithChildren) {
 return (
  <html lang="en"><head><meta charSet="utf-8" /><meta httpEquiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />{/* Link the PWA manifest file. */}<link rel="manifest" href="/manifest.json" />{/*
     Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
     However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
    */}<ScrollViewStyleReset />{/* Add any additional <head> elements that you want globally available on web... */}</head><body>{children}</body></html>
 );
}

Show More

```

## Bundler plugins[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#bundler-plugins>)
If you were using custom bundler plugins, see [Expo Metro config](https://docs.expo.dev/router/migrate/from-expo-webpack/</versions/latest/config/metro>) for adding custom functionality to your bundler pipeline.
## Navigation[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#navigation>)
If you used React Navigation for navigating between screens in `@expo/webpack-config`, see the [migration guide for React Navigation](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-react-navigation>).
## Deployment[](https://docs.expo.dev/router/migrate/from-expo-webpack/<#deployment>)
See [publishing websites](https://docs.expo.dev/router/migrate/from-expo-webpack/</guides/publishing-websites>) and select "Expo Router" on how to deploy Expo Router websites to various hosting providers.
[Previous (Expo Router - Migration)React Navigation](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-react-navigation>)[Next (Expo Modules API)Overview](https://docs.expo.dev/router/migrate/from-expo-webpack/</modules/overview>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/github.com/expo/expo/edit/main/docs/pages/router/migrate/from-expo-webpack.mdx>)
  * Last updated on January 01, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/migrate/from-expo-webpack/<https:/expo.dev/privacy>).
On this page
[Pitch](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#pitch>)[Anti-pitch](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#anti-pitch>)[Expo CLI](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#expo-cli>)[HTML template](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#html-template>)[Static resources](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#static-resources>)[Bundling for production](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#bundling-for-production>)[Babel configuration](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#babel-configuration>)[Dev server](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#dev-server>)[Expo constants](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#expo-constants>)[Base path and subpath hosting](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#base-path-and-subpath-hosting>)[Fast refresh](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#fast-refresh>)[Favicons](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#favicons>)[Service workers](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#service-workers>)[PWA manifests](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#pwa-manifests>)[Bundler plugins](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#bundler-plugins>)[Navigation](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#navigation>)[Deployment](https://docs.expo.dev/router/migrate/from-expo-webpack/</router/migrate/from-expo-webpack/#deployment>)
