[](https://docs.expo.dev/router/reference/static-rendering/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/static-rendering/</>)
[Blog](https://docs.expo.dev/router/reference/static-rendering/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/static-rendering/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/static-rendering/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/static-rendering/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/static-rendering/</>)[Guides](https://docs.expo.dev/router/reference/static-rendering/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/static-rendering/</eas>)[Reference](https://docs.expo.dev/router/reference/static-rendering/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/static-rendering/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/static-rendering/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/static-rendering/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/static-rendering/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/static-rendering/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/static-rendering/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/static-rendering/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/static-rendering/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/static-rendering/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/static-rendering/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/static-rendering/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/static-rendering/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/static-rendering/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/static-rendering/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/static-rendering/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/static-rendering/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/static-rendering/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/static-rendering/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/static-rendering/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/static-rendering/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/static-rendering/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/static-rendering/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/static-rendering/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/static-rendering/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/static-rendering/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/static-rendering/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/static-rendering/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/static-rendering/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/static-rendering/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/static-rendering/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/static-rendering/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/static-rendering/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/static-rendering/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/static-rendering/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/static-rendering/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/static-rendering/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/static-rendering/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/static-rendering/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/static-rendering/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/static-rendering/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/static-rendering/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/static-rendering/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/static-rendering/<https:/expo.dev/mailing-list/signup>)
# Static Rendering
[Edit this page](https://docs.expo.dev/router/reference/static-rendering/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/static-rendering.mdx> "Edit content of this page on GitHub")
Learn how to render routes to static HTML and CSS files with Expo Router.
[Edit this page](https://docs.expo.dev/router/reference/static-rendering/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/static-rendering.mdx> "Edit content of this page on GitHub")
To enable Search Engine Optimization (SEO) on the web you must statically render your app. This guide will walk you through the process of statically rendering your Expo Router app.
## Setup[](https://docs.expo.dev/router/reference/static-rendering/<#setup>)
1
Enable metro bundler and static rendering in the project's [app config](https://docs.expo.dev/router/reference/static-rendering/</versions/latest/config/app>):
app.json
Copy
```
{
 "expo": {
  %%placeholder-start%%... %%placeholder-end%%
  "web": {
   "bundler": "metro",
   "output": "static"
  }
 }
}

```

2
If you have a metro.config.js file in your project, ensure it extends expo/metro-config as shown below:
metro.config.js
Copy
```
const { getDefaultConfig } = require('expo/metro-config');
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
 // Additional features...
});
module.exports = config;

```

You can also learn more about [customizing Metro](https://docs.expo.dev/router/reference/static-rendering/</guides/customizing-metro>) .
3
Ensure Fast Refresh is configured.
Expo Router v3
Expo Router v2
Expo Router requires at least `react-refresh@0.14.0`. This is available in SDK 50 and above. Ensure you do not have any overrides or resolutions for `react-refresh` in your package.json.
Expo Router requires at least `react-refresh@0.14.0`. React Native hasn't upgraded as of SDK 49 and Expo Router v2, so you need to force upgrade your `react-refresh` version by setting a Yarn resolution or npm override.
npm
Yarn
package.json
Copy
```
{
 %%placeholder-start%%... %%placeholder-end%%
 "overrides": {
  "react-refresh": "~0.14.0"
 }
}

```

package.json
Copy
```
{
 %%placeholder-start%%... %%placeholder-end%%
 "resolutions": {
  "react-refresh": "~0.14.0"
 }
}

```

4
Start the development server:
Terminal
Copy
`- ``npx expo start`
## Production[](https://docs.expo.dev/router/reference/static-rendering/<#production>)
To bundle your static website for production, run the universal export command:
Terminal
Copy
`- ``npx expo export --platform web`
This will create a dist directory with your statically rendered website. If you have files in a local public directory, these will be copied over as well. You can test the production build locally by running the following command and opening the linked URL in your browser:
Terminal
Copy
`- ``npx serve dist`
This project can be deployed to almost every hosting service. Note that this is not a single-page application, nor does it contain a custom server API. This means dynamic routes (app/[id].tsx) will not arbitrarily work. You may need to build a serverless function to handle dynamic routes.
## Dynamic Routes[](https://docs.expo.dev/router/reference/static-rendering/<#dynamic-routes>)
The `static` output will generate HTML files for each route. This means dynamic routes (app/[id].tsx) will not work out of the box. You can generate known routes ahead of time using the `generateStaticParams` function.
app/blog/[id].tsx
Copy
```
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export async function generateStaticParams(): Promise<Record<string, string>[]> {
 const posts = await getPosts();
 // Return an array of params to generate static HTML files for.
 // Each entry in the array will be a new page.
 return posts.map(post => ({ id: post.id }));
}
export default function Page() {
 const { id } = useLocalSearchParams();
 return <Text>Post {id}</Text>;
}

```

This will output a file for each post in the dist directory. For example, if the `generateStaticParams` method returned `[{ id: "alpha" }, { id: "beta" }]`, the following files would be generated:
`dist`
`blog`
`alpha.html`
`beta.html`
### `generateStaticParams`[](https://docs.expo.dev/router/reference/static-rendering/<#generatestaticparams>)
A server-only function evaluated at build-time in a Node.js environment by Expo CLI. This means it has access to `__dirname`, `process.cwd()`, `process.env`, and more. It also has access to every environment variable that's available in the process. However, the values prefixed with `EXPO_PUBLIC_.generateStaticParams` do not run in a browser environment, so it cannot access browser APIs such as `localStorage` or `document`. It also cannot access native Expo APIs such as `expo-camera` or `expo-location`.
app/[id].tsx
Copy
```
export async function generateStaticParams(): Promise<Record<string, string>[]> {
 console.log(process.cwd());
 return [];
}

```

`generateStaticParams` cascades from nested parents down to children. The cascading parameters are passed to every dynamic child route that exports generateStaticParams.
app/[id]/_layout.tsx
Copy
```
export async function generateStaticParams(): Promise<Record<string, string>[]> {
 return [{ id: 'one' }, { id: 'two' }];
}

```

Now the dynamic child routes will be invoked twice, once with `{ id: 'one' }` and once with `{ id: 'two' }`. All variations must be accounted for.
app/[id]/[comment].tsx
Copy
```
export async function generateStaticParams(params: {
 id: 'one' | 'two';
}): Promise<Record<string, string>[]> {
 const comments = await getComments(params.id);
 return comments.map(comment => ({
  ...params,
  comment: comment.id,
 }));
}

```

### Read files using `process.cwd()`[](https://docs.expo.dev/router/reference/static-rendering/<#read-files-using-processcwd>)
Since Expo Router compiles your code into a separate directory you cannot use `__dirname` to form a path as its value will be different than expected.
Instead, use `process.cwd()`, which gives you the directory where the project is being compiled.
app/[category].tsx
Copy
```
import fs from 'fs/promises';
import path from 'path';
export async function generateStaticParams(params: {
 id: string;
}): Promise<Record<string, string>[]> {
 const directory = await fs.readdir(path.join(process.cwd(), './posts/', category));
 const posts = directory.filter(fileOrSubDirectory => return path.extname(fileOrSubDirectory) === '.md')
 return {
  id,
  posts,
 };
}

```

## Root HTML[](https://docs.expo.dev/router/reference/static-rendering/<#root-html>)
By default, every page is wrapped with some small HTML boilerplate, this is known as the root HTML.
You can customize the root HTML file by creating an app/+html.tsx file in your project. This file exports a React component that only ever runs in Node.js, which means global CSS cannot be imported inside of it. The component will wrap all routes in the app directory. This is useful for adding global `<head>` elements or disabling body scrolling.
> Note: Global context providers should go in the [Root Layout](https://docs.expo.dev/router/reference/static-rendering/</router/advanced/root-layout>) component, not the Root HTML component.
app/+html.tsx
Copy
```
import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';
// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: PropsWithChildren) {
 return (
  <html lang="en"><head><meta charSet="utf-8" /><meta httpEquiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />{/*
     Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
     However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
    */}<ScrollViewStyleReset />{/* Add any additional <head> elements that you want globally available on web... */}</head><body>{children}</body></html>
 );
}

Show More

```

  * The `children` prop comes with the root `<div id="root" />` tag included inside.
  * The JavaScript scripts are appended after the static render.
  * React Native web styles are statically injected automatically.
  * Global CSS should not be imported into this file. Instead, use the [Root Layout](https://docs.expo.dev/router/reference/static-rendering/</router/advanced/root-layout>) component.
  * Browser APIs like `window.location` are unavailable in this component as it only runs in Node.js during static rendering.


### `expo-router/html`[](https://docs.expo.dev/router/reference/static-rendering/<#expo-routerhtml>)
The exports from `expo-router/html` are related to the Root HTML component.
  * `ScrollViewStyleReset`: Root style-reset for full-screen [React Native web apps](https://docs.expo.dev/router/reference/static-rendering/<https:/necolas.github.io/react-native-web/docs/setup/#root-element>) with a root `<ScrollView />` should use the following styles to ensure native parity.


## Meta tags[](https://docs.expo.dev/router/reference/static-rendering/<#meta-tags>)
You can add meta tags to your pages with the `<Head />` module from `expo-router`:
app/about.tsx
Copy
```
import Head from 'expo-router/head';
import { Text } from 'react-native';
export default function Page() {
 return (
  <><Head><title>My Blog Website</title><meta name="description" content="This is my blog." /></Head><Text>About my blog</Text></>
 );
}

```

The head elements can be updated dynamically using the same API. However, it's useful for SEO to have static head elements rendered ahead of time.
## Static Files[](https://docs.expo.dev/router/reference/static-rendering/<#static-files>)
Expo CLI supports a root public directory that gets copied to the dist directory during static rendering. This is useful for adding static files like images, fonts, and other assets.
`public`
`favicon.ico`
`logo.png`
`.well-known`
`apple-app-site-association`
These files will be copied to the dist directory during static rendering:
`dist`
`index.html`
`favicon.ico`
`logo.png`
`.well-known`
`apple-app-site-association`
`_expo`
`static`
`js`
`index-xxx.js`
`css`
`index-xxx.css`
> Web only: Static assets can be accessed in runtime code using relative paths. For example, the logo.png can be accessed at `/logo.png`:
app/index.tsx
Copy
```
import { Image } from 'react-native';
export default function Page() {
 return <Image source={{ uri: '/logo.png' }} />;
}

```

## Fonts[](https://docs.expo.dev/router/reference/static-rendering/<#fonts>)
> Font optimization is available in SDK 50 and above.
Expo Font has automatic static optimization for font loading in Expo Router. When you load a font with `expo-font`, Expo CLI will automatically extract the font resource and embed it in the page's HTML, enabling preloading, faster hydration, and reduced layout shift.
The following snippet will load Inter into the namespace and statically optimize on web:
app/home.tsx
Copy
```
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
export default function App() {
 const [isLoaded] = useFonts({
  inter: require('@/assets/inter.ttf'),
 });
 if (!isLoaded) {
  return null;
 }
 return <Text style={{ fontFamily: 'inter' }}>Hello Universe</Text>;
}

```

This generates the following static HTML:
dist/home.html
Copy
```
/* @info preload the font before the JavaScript loads. */
<link rel="preload" href="/assets/inter.ttf" as="font" crossorigin />
/* @end */
<style id="expo-generated-fonts" type="text/css">
 @font-face {
  font-family: inter;
  src: url(/assets/inter.ttf);
  font-display: auto;
 }
</style>

```

  * Static font optimization requires the font to be loaded synchronously. If the font isn't statically optimized, it could be because it was loaded inside a `useEffect`, deferred component, or async function.
  * Static optimization is only supported with `Font.loadAsync` and `Font.useFonts` from `expo-font`. Wrapper functions are supported as long as the wrappers are synchronous.


## FAQ[](https://docs.expo.dev/router/reference/static-rendering/<#faq>)
### How do I add a custom server?[](https://docs.expo.dev/router/reference/static-rendering/<#how-do-i-add-a-custom-server>)
There is no prescriptive way to add a custom server. You can use any server you want. However, you will need to handle dynamic routes yourself. You can use the `generateStaticParams` function to generate static HTML files for known routes.
In the future, there will be a server API, and a new `web.output` mode which will generate a project that will (amongst other things) support dynamic routes.
## Server-side Rendering[](https://docs.expo.dev/router/reference/static-rendering/<#server-side-rendering>)
Rendering at request-time (SSR) is not supported in `web.output: 'static'`. This will likely be added in a future version of Expo Router.
### Where can I deploy statically rendered websites?[](https://docs.expo.dev/router/reference/static-rendering/<#where-can-i-deploy-statically-rendered-websites>)
You can deploy your statically rendered website to any static hosting service. Here are some popular options:
  * [Netlify](https://docs.expo.dev/router/reference/static-rendering/<https:/www.netlify.com/>)
  * [Cloudflare Pages](https://docs.expo.dev/router/reference/static-rendering/<https:/pages.cloudflare.com/>)
  * [AWS Amplify](https://docs.expo.dev/router/reference/static-rendering/<https:/aws.amazon.com/amplify/>)
  * [Vercel](https://docs.expo.dev/router/reference/static-rendering/<https:/vercel.com/>)
  * [GitHub Pages](https://docs.expo.dev/router/reference/static-rendering/<https:/pages.github.com/>)
  * [Render](https://docs.expo.dev/router/reference/static-rendering/<https:/render.com/>)
  * [Surge](https://docs.expo.dev/router/reference/static-rendering/<https:/surge.sh/>)


> Note: You don't need to add Single-Page Application styled redirects to your static hosting service. The static website is not a single-page application. It is a collection of static HTML files.
[Previous (Expo Router - Reference)Redirects](https://docs.expo.dev/router/reference/static-rendering/</router/reference/redirects>)[Next (Expo Router - Reference)Async routes](https://docs.expo.dev/router/reference/static-rendering/</router/reference/async-routes>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/static-rendering/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/static-rendering/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/static-rendering.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/static-rendering/<https:/expo.dev/privacy>).
On this page
[Setup](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#setup>)[Production](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#production>)[Dynamic Routes](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#dynamic-routes>)`generateStaticParams`[](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#generatestaticparams>)[Read files using process.cwd()](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#read-files-using-processcwd>)[Root HTML](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#root-html>)[expo-router/html](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#expo-routerhtml>)[Meta tags](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#meta-tags>)[Static Files](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#static-files>)[Fonts](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#fonts>)[FAQ](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#faq>)[How do I add a custom server?](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#how-do-i-add-a-custom-server>)[Server-side Rendering](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#server-side-rendering>)[Where can I deploy statically rendered websites?](https://docs.expo.dev/router/reference/static-rendering/</router/reference/static-rendering/#where-can-i-deploy-statically-rendered-websites>)
