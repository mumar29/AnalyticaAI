[](https://docs.expo.dev/router/reference/async-routes/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/async-routes/</>)
[Blog](https://docs.expo.dev/router/reference/async-routes/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/async-routes/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/async-routes/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/async-routes/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/async-routes/</>)[Guides](https://docs.expo.dev/router/reference/async-routes/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/async-routes/</eas>)[Reference](https://docs.expo.dev/router/reference/async-routes/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/async-routes/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/async-routes/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/async-routes/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/async-routes/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/async-routes/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/async-routes/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/async-routes/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/async-routes/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/async-routes/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/async-routes/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/async-routes/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/async-routes/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/async-routes/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/async-routes/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/async-routes/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/async-routes/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/async-routes/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/async-routes/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/async-routes/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/async-routes/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/async-routes/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/async-routes/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/async-routes/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/async-routes/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/async-routes/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/async-routes/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/async-routes/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/async-routes/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/async-routes/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/async-routes/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/async-routes/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/async-routes/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/async-routes/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/async-routes/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/async-routes/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/async-routes/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/async-routes/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/async-routes/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/async-routes/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/async-routes/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/async-routes/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/async-routes/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/async-routes/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/async-routes/<https:/expo.dev/mailing-list/signup>)
# Async routes
[Edit this page](https://docs.expo.dev/router/reference/async-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/async-routes.mdx> "Edit content of this page on GitHub")
Learn how to speed up development with async bundling in Expo Router.
[Edit this page](https://docs.expo.dev/router/reference/async-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/async-routes.mdx> "Edit content of this page on GitHub")
> Async routes is an experimental feature.
Expo Router can automatically split your JavaScript bundle based on the route files using [React Suspense](https://docs.expo.dev/router/reference/async-routes/<https:/react.dev/reference/react/Suspense>). This enables faster development as only the routes you navigate to will be bundled or loaded into memory. This can also be useful for reducing the initial bundle size for your application.
Apps using the Hermes Engine will not benefit as much from bundle splitting as the bytecode is already memory mapped ahead of time. However, it will improve your over-the-air updates, React Server Components, and web support.
> When bundling for production on native platforms, all suspense boundaries will be disabled and there will be no loading states.
## How it works[](https://docs.expo.dev/router/reference/async-routes/<#how-it-works>)
All Routes are wrapped inside a suspense boundary and are loaded asynchronously. This means that the first time you navigate to a route, it will take a little longer to load. However, once it is loaded, it will be cached and subsequent visits will be instant.
Loading errors are handled in the parent route, via the `ErrorBoundary`[](https://docs.expo.dev/router/reference/async-routes/</router/error-handling#errorboundary>) export.
Async routes cannot be statically analyzed during development, so all files will be treated as routes even if they don't export a default component. After the component is bundled and loaded, any invalid route will use a fallback warning screen.
For those familiar with advanced bundling techniques, the async routes feature is composed of [React Suspense](https://docs.expo.dev/router/reference/async-routes/<https:/react.dev/docs/concurrent-mode-suspense>), [route-based bundle splitting](https://docs.expo.dev/router/reference/async-routes/<https:/legacy.reactjs.org/docs/code-splitting.html#route-based-code-splitting>) and [lazy bundling](https://docs.expo.dev/router/reference/async-routes/<https:/github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0605-lazy-bundling.md>) (in development).
## Setup[](https://docs.expo.dev/router/reference/async-routes/<#setup>)
Enable the feature by setting the `asyncRoutes` option in the Expo Router config plugin of your [app config](https://docs.expo.dev/router/reference/async-routes/</versions/latest/config/app>):
SDK 50 and above
SDK 49
> SDK 50 and above supports production bundle splitting. Set `asyncRoutes` to `true` to enable it.
app.json
Copy
```
{
 "expo": {
  "plugins": [
   [
    "expo-router",
    {
     "origin": "https://acme.com",
     "asyncRoutes": {
      "web": true,
      "default": "development"
     }
    }
   ]
  ]
 }
}

```

app.json
Copy
```
{
 "expo": {
  "plugins": [
   [
    "expo-router",
    {
     "origin": "https://acme.com",
     "asyncRoutes": "development"
    }
   ]
  ]
 }
}

```

You can set platform-specific settings (`default`, `android`, `ios` or `web`) for `asyncRoutes` using an object:
app.json
Copy
```
{
 "expo": {
  "plugins": [
   [
    "expo-router",
    {
     "origin": "https://acme.com",
     "asyncRoutes": {
      "web": true,
      "android": false,
      "default": "development"
     }
    }
   ]
  ]
 }
}

```

Then, when you are about to start your project, you can use the `--clear` flag to clear the Metro cache. This will ensure that the routes are loaded asynchronously:
Terminal
`- ``npx expo start --clear`
`# Or when exporting`
`- ``npx expo export --clear`
## Static rendering[](https://docs.expo.dev/router/reference/async-routes/<#static-rendering>)
> Bundle splitting with static rendering is only supported in SDK 50 and above.
Static rendering is supported in production web apps by rendering all Suspense boundaries synchronously in Node.js, then linking all of async chunks together in the HTML based on all the selected routes for a given HTML file. This ensures you don't encounter a waterfall of loading states on server navigations. Subsequent navigations will recursively load any missing chunks.
To ensure a consistent first render, all layout routes leading up to the leaf route for a URL will be included in the initial server response.
All initial routes, defined with `unstable_settings = { initialRouteName: '...' }` will be included in the initial HTML file as they are required for the first render. For example, if the server request is for a modal, the screen rendered under the modal will also be included to ensure the modal is rendered correctly.
## Caveats[](https://docs.expo.dev/router/reference/async-routes/<#caveats>)
Async Routes represents an early preview of how we plan to support [React Server Components](https://docs.expo.dev/router/reference/async-routes/<https:/react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components>) in the future. As such, there are some caveats to be aware of:
  * Async Routes do not support native production apps yet.
  * In development, the runtime JavaScript is lazily bundled so you may encounter cases where the HTML doesn't match the available JavaScript.
  * The loading state cannot be customized at this time.


[Previous (Expo Router - Reference)Static Rendering](https://docs.expo.dev/router/reference/async-routes/</router/reference/static-rendering>)[Next (Expo Router - Reference)API Routes](https://docs.expo.dev/router/reference/async-routes/</router/reference/api-routes>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/async-routes/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/async-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/async-routes.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/async-routes/<https:/expo.dev/privacy>).
On this page
[How it works](https://docs.expo.dev/router/reference/async-routes/</router/reference/async-routes/#how-it-works>)[Setup](https://docs.expo.dev/router/reference/async-routes/</router/reference/async-routes/#setup>)[Static rendering](https://docs.expo.dev/router/reference/async-routes/</router/reference/async-routes/#static-rendering>)[Caveats](https://docs.expo.dev/router/reference/async-routes/</router/reference/async-routes/#caveats>)
