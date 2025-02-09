[](https://docs.expo.dev/router/layouts/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/layouts/</>)
[Blog](https://docs.expo.dev/router/layouts/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/layouts/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/layouts/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/layouts/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/layouts/</>)[Guides](https://docs.expo.dev/router/layouts/</guides/overview>)[EAS](https://docs.expo.dev/router/layouts/</eas>)[Reference](https://docs.expo.dev/router/layouts/</versions/latest>)[Learn](https://docs.expo.dev/router/layouts/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/layouts/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/layouts/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/layouts/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/layouts/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/layouts/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/layouts/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/layouts/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/layouts/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/layouts/</router/introduction>)[Installation](https://docs.expo.dev/router/layouts/</router/installation>)[Create pages](https://docs.expo.dev/router/layouts/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/layouts/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/layouts/</router/layouts>)[Error handling](https://docs.expo.dev/router/layouts/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/layouts/</modules/overview>)[Get started](https://docs.expo.dev/router/layouts/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/layouts/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/layouts/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/layouts/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/layouts/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/layouts/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/layouts/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/layouts/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/layouts/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/layouts/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/layouts/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/layouts/</archive>)[Expo Snack](https://docs.expo.dev/router/layouts/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/layouts/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/layouts/<https:/expo.dev/mailing-list/signup>)
# Layout routes
[Edit this page](https://docs.expo.dev/router/layouts/<https:/github.com/expo/expo/edit/main/docs/pages/router/layouts.mdx> "Edit content of this page on GitHub")
Learn how to define shared UI elements such as tab bars and headers.
[Edit this page](https://docs.expo.dev/router/layouts/<https:/github.com/expo/expo/edit/main/docs/pages/router/layouts.mdx> "Edit content of this page on GitHub")
By default, routes fill the entire screen. Moving between them is a full-page transition with no animation. In native apps, users expect shared elements like headers and tab bars to persist between pages. These are created using layout routes.
## Create a layout route[](https://docs.expo.dev/router/layouts/<#create-a-layout-route>)
To create a layout route for a directory, create a file named _layout.tsx in the directory, and export a React component as `default`.
app/home/_layout.tsx
Copy
```
import { Slot } from 'expo-router';
export default function HomeLayout() {
 return <Slot />;
}

```

From the above example, Slot will render the current child route, think of this like the `children` prop in React. This component can be wrapped with other components to create a layout.
app/home/_layout.tsx
Copy
```
import { Slot } from 'expo-router';
export default function HomeLayout() {
 return (
  <><Header /><Slot /><Footer /></>
 );
}

```

Expo Router supports adding a single layout route for a given directory. If you want to use multiple layout routes, add multiple directories:
`app`
`_layout.tsx`
`home`
`_layout.tsx`
`index.tsx`
app/_layout.tsx
Copy
```
import { Tabs } from 'expo-router';
export default function Layout() {
 return <Tabs />;
}

```

app/home/_layout.tsx
Copy
```
import { Stack } from 'expo-router';
export default function Layout() {
 return <Stack />;
}

```

If you want multiple layout routes without modifying the URL, you can use [groups](https://docs.expo.dev/router/layouts/</router/layouts#groups>).
## Groups[](https://docs.expo.dev/router/layouts/<#groups>)
You can prevent a segment from showing in the URL by using the group syntax `()`.
  * app/root/home.tsx matches `/root/home`
  * app/(root)/home.tsx matches `/home`


This is useful for adding layouts without adding additional segments to the URL. You can add as many groups as you want.
Groups are also good for organizing sections of the app. In the following example, we have app/(app) which is where the main app lives, and app/(aux) which is where auxiliary pages live. This is useful for adding pages which you want to link to externally, but don't need to be part of the main app.
`app`
`(app)`
`index.tsx`
`user.tsx`
`(aux)`
`terms-of-service.tsx`
`privacy-policy.tsx`
## Native layouts[](https://docs.expo.dev/router/layouts/<#native-layouts>)
One of the best advantages to React Native is being able to use native UI components. Expo Router provides a few drop-in native layouts that you can use to easily achieve familiar native behavior. To change between truly-native layouts on certain platforms and custom layouts on others, see [Platform-specific modules](https://docs.expo.dev/router/layouts/</router/advanced/platform-specific-modules>).
app/home/_layout.tsx
Copy
```
import { Stack } from 'expo-router';
export default function HomeLayout() {
 return (
  <Stack screenOptions={{ ... }} />
 );
}

```

Learn more about the built-in layouts:
[Stack navigationRender a stack of screens like a deck of cards with a header on top. This is a native stack navigator that uses native animations and gestures.](https://docs.expo.dev/router/layouts/</router/advanced/stack>) [Tab navigationRender screens with a tab bar below them.](https://docs.expo.dev/router/layouts/</router/advanced/tabs>) [DrawersAdd a drawer which can be pulled over the current context.](https://docs.expo.dev/router/layouts/</router/advanced/drawer>) [ModalsImplement native modals which float over the current context.](https://docs.expo.dev/router/layouts/</router/advanced/modals>)
## Advanced[](https://docs.expo.dev/router/layouts/<#advanced>)
Expo Router supports additional conventions and systems to build complex UIs that native app users expect. These are not required to use Expo Router but are available if you need them.
[Nesting navigatorsAdd multiple layouts to a route.](https://docs.expo.dev/router/layouts/</router/advanced/nesting-navigators>) [Shared RoutesCreate routes which appear in multiple places simultaneously, while using the same URL.](https://docs.expo.dev/router/layouts/</router/advanced/shared-routes>)
[Previous (Expo Router)Navigate between pages](https://docs.expo.dev/router/layouts/</router/navigating-pages>)[Next (Expo Router)Error handling](https://docs.expo.dev/router/layouts/</router/error-handling>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/layouts/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/layouts/<https:/github.com/expo/expo/edit/main/docs/pages/router/layouts.mdx>)
  * Last updated on July 10, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/layouts/<https:/expo.dev/privacy>).
On this page
[Create a layout route](https://docs.expo.dev/router/layouts/</router/layouts/#create-a-layout-route>)[Groups](https://docs.expo.dev/router/layouts/</router/layouts/#groups>)[Native layouts](https://docs.expo.dev/router/layouts/</router/layouts/#native-layouts>)[Advanced](https://docs.expo.dev/router/layouts/</router/layouts/#advanced>)
