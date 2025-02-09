[](https://docs.expo.dev/router/navigating-pages/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/navigating-pages/</>)
[Blog](https://docs.expo.dev/router/navigating-pages/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/navigating-pages/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/navigating-pages/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/navigating-pages/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/navigating-pages/</>)[Guides](https://docs.expo.dev/router/navigating-pages/</guides/overview>)[EAS](https://docs.expo.dev/router/navigating-pages/</eas>)[Reference](https://docs.expo.dev/router/navigating-pages/</versions/latest>)[Learn](https://docs.expo.dev/router/navigating-pages/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/navigating-pages/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/navigating-pages/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/navigating-pages/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/navigating-pages/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/navigating-pages/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/navigating-pages/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/navigating-pages/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/navigating-pages/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/navigating-pages/</router/introduction>)[Installation](https://docs.expo.dev/router/navigating-pages/</router/installation>)[Create pages](https://docs.expo.dev/router/navigating-pages/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/navigating-pages/</router/layouts>)[Error handling](https://docs.expo.dev/router/navigating-pages/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/navigating-pages/</modules/overview>)[Get started](https://docs.expo.dev/router/navigating-pages/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/navigating-pages/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/navigating-pages/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/navigating-pages/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/navigating-pages/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/navigating-pages/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/navigating-pages/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/navigating-pages/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/navigating-pages/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/navigating-pages/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/navigating-pages/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/navigating-pages/</archive>)[Expo Snack](https://docs.expo.dev/router/navigating-pages/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/navigating-pages/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/navigating-pages/<https:/expo.dev/mailing-list/signup>)
# Navigate between pages
[Edit this page](https://docs.expo.dev/router/navigating-pages/<https:/github.com/expo/expo/edit/main/docs/pages/router/navigating-pages.mdx> "Edit content of this page on GitHub")
Learn how to create links to move between pages.
[Edit this page](https://docs.expo.dev/router/navigating-pages/<https:/github.com/expo/expo/edit/main/docs/pages/router/navigating-pages.mdx> "Edit content of this page on GitHub")
Expo Router uses "links" to move between pages in the app. This is conceptually similar to how the web works with `<a>` tags and the `href` attribute.
`app`
`index.tsx`
`about.tsx`
`user`
`[id].tsx`
In the following example, there are two `Link`[](https://docs.expo.dev/router/navigating-pages/</versions/latest/sdk/router#link>) components which navigate to different routes.
app/index.tsx
Copy
```
import { View } from 'react-native';
import { Link } from 'expo-router';
export default function Page() {
 return (
  <View>
   <Link href="/about">About</Link>
   {/* ...other links */}
   <Link href="/user/bacon">View user</Link>
  </View>
 );
}

```

## Buttons[](https://docs.expo.dev/router/navigating-pages/<#buttons>)
The Link component wraps the children in a `<Text>` component by default, this is useful for accessibility but not always desired. You can customize the component by passing the `asChild`[ prop](https://docs.expo.dev/router/navigating-pages/</versions/latest/sdk/router#aschild>), which will forward all props to the first child of the `Link` component. The child component must support the `onPress` and `onClick` props, `href` and `role` will also be passed down.
```
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
export default function Page() {
 return (
  <Link href="/other" asChild>
   <Pressable><Text>Home</Text></Pressable></Link>
 );
}

```

## Understanding native navigation[](https://docs.expo.dev/router/navigating-pages/<#understanding-native-navigation>)
> Expo Router v4 changed `navigate` to be an alias for `push`. To retain the old behavior, use `dismissTo`[](https://docs.expo.dev/router/navigating-pages/</versions/latest/sdk/router#dismissTo>).
Expo Router uses a stack-based navigation model, where each new route you navigate to is added to a stack.
For example, navigating from the `/feed` route to the `/profile` route results in the stack being `['/feed', '/profile']`. If you then navigate to `/settings`, the stack becomes `['/feed', '/profile', '/settings']`. While this may resemble traditional web navigation, a key distinction is that screens can have multiple child stacks, each independently controlled. This is known as parallel routing.
`app`
`_layout.tsx``<Tabs />`
`(fruit)`
`_layout.tsx``<Stack />`
`apple.tsx`
`orange.tsx`
`(vegetable)`
`_layout.tsx``<Stack />`
`carrot.tsx`
`potato.tsx`
In the example above, app/_layout introduces a `<Tabs />` navigator, while the other two layout files render a `<Stack />`. Navigating through each page would result in a history like `[['/apple', '/orange'], ['/carrot', '/potato']]`. Notice that instead of a single stack, there's a parent stack containing two child stacks.
While advancing in a stack is straightforward, moving backward can be more complex due to the non-linear history.
Consider a common mobile experience: when you open an app from a link and press back, you might see unfamiliar screens before exiting the app. This demonstrates how stacks maintain their own history using anchor routes (also called initial routes). This is why `back()` is sometimes called a "pop" (the reverse of "push") or "unwinding the stack".
To handle backwards navigation, Expo Router offers multiple functions: `back`[](https://docs.expo.dev/router/navigating-pages/</versions/latest/sdk/router#router>) moves you backward in the stack's history. At the same time, `dismiss`[](https://docs.expo.dev/router/navigating-pages/</versions/latest/sdk/router#dismiss>) only goes back within the current stack.
The `dismissTo`[](https://docs.expo.dev/router/navigating-pages/</versions/latest/sdk/router#dismissto>) function is unique—it can move you forward or backward. Calling `dismissTo` for a previously visited route will dismiss screens until that route is reached. If the route isn't in the history, it will push forward to that route.
Additionally, the `replace`[](https://docs.expo.dev/router/navigating-pages/</versions/latest/sdk/router#replace>) method allows you to replace the current route in the stack with a new one, without adding to the stack.
To navigate, you can provide a full path (`/profile/settings`), a relative path (`../settings`), or by passing an object (`{ pathname: 'profile', params: { id: '123' } }`).
## Relative navigation[](https://docs.expo.dev/router/navigating-pages/<#relative-navigation>)
A relative URL is a URL prefix with `./`, such as `./article`, or `./article/`. Relative URLs are resolved relative to the current rendered screen.
The URL of the current screen is a document URL (a URL without a trailing slash), so relative URLs will be resolved relative to the directory. This can be confusing when the current screen is rendered by an `index` file as the relative URL is resolved from the URL's directory, not the file system. By using the `relativeToDirectory` option, Expo Router will instead treat the current URL as a directory URL.
Href| Current URL| `relativeToDirectory`| Result  
---|---|---|---  
`./article`| `/route/v1`| `/route/article`  
`./article`| `/route/v1`| `true`| `/route/v1/article`  
`../article`| `/route/v1`| `/article`  
`../article`| `/route/v1`| `true`| `/route/article`  
```
// Using `relativeToDirectory` with Link
<Link href="./article" relativeToDirectory>Go to article</Link>
// Using `relativeToDirectory` with the imperative API
router.push("./article", { relativeToDirectory: true })
router.navigate("./article", { relativeToDirectory: true })
router.replace("./article", { relativeToDirectory: true })

```

> Relative URLs without a `./` prefix, such as `article`, are not supported.
## Linking to dynamic routes[](https://docs.expo.dev/router/navigating-pages/<#linking-to-dynamic-routes>)
Dynamic routes and query parameters can be provided statically or with the convenience Href object.
app/index.tsx
Copy
```
import { Link } from 'expo-router';
import { View } from 'react-native';
export default function Page() {
 return (
  <View><Link
    href={{
     pathname: '/user/[id]',
     params: { id: 'bacon' }
    }}>
     View user
    </Link></View>
 );
}

```

## Pushing screens[](https://docs.expo.dev/router/navigating-pages/<#pushing-screens>)
By default, links `navigate` to the nearest route in the navigation stack, either by pushing a new route or unwinding to an existing route. You can use the `push` prop to always push the route onto the stack.
app/index.tsx
Copy
```
import { Link } from 'expo-router';
export default function Page() {
 return (
  <View>
   <Link push href="/feed">Login</Link>
  </View>
 );
}

```

## Replacing screens[](https://docs.expo.dev/router/navigating-pages/<#replacing-screens>)
By default, links "push" routes onto the navigation stack. It follows the same rules as `navigation.navigate()`[](https://docs.expo.dev/router/navigating-pages/<https:/reactnavigation.org/docs/navigating/#navigate-to-a-route-multiple-times>). This means that the previous screen will be available when the user navigates back. You can use the `replace` prop to replace the current screen instead of pushing a new one.
app/index.tsx
Copy
```
import { Link } from 'expo-router';
export default function Page() {
 return (
  <View>
   <Link replace href="/feed">Login</Link>
  </View>
 );
}

```

Use `router.replace()` to replace the current screen imperatively.
Native navigation does not always support `replace`. For example on X, you wouldn't be able to "replace" directly from a profile to a tweet, this is because the UI requires a back button to return to the feed or other top-level tab screen. In this case, replace would switch to the feed tab, and push the tweet route on top of it, or if you were on a different tweet inside the feed tab, it would replace the current tweet with the new tweet. This exact behavior can be obtained in Expo Router by using `unstable_settings`[](https://docs.expo.dev/router/navigating-pages/</router/advanced/router-settings>).
## Imperative navigation[](https://docs.expo.dev/router/navigating-pages/<#imperative-navigation>)
You can also navigate imperatively using the `router` object. This is useful when you need to perform a navigation action outside a React component, such as in an event handler or a utility function.
```
import { router } from 'expo-router';
export function logout() {
 router.replace('/login');
}

```

The `router` object is immutable and contains multiple methods to navigate. See `Router`[](https://docs.expo.dev/router/navigating-pages/</versions/latest/sdk/router#router>) for more information about the available methods.
## Autocomplete[](https://docs.expo.dev/router/navigating-pages/<#autocomplete>)
Expo Router can automatically generate static TypeScript types for all routes in your app. This allows you to use autocomplete for `href`s and get warnings when invalid links are used. See [Statically Typed Routes](https://docs.expo.dev/router/navigating-pages/</router/reference/typed-routes>) for more information.
## Web behavior[](https://docs.expo.dev/router/navigating-pages/<#web-behavior>)
Expo Router supports the standard `<a>` element when running on web, however this will perform a full-page server-navigation. This is slower and doesn't take full advantage of React. Instead, the Expo Router `Link` component will perform client-side navigation, which will preserve the state of the website and navigate faster.
The web-only attributes `target`, `rel`, and `download` are also supported. These will be passed to the `<a>` element when running on web.
Client-side navigation works with both single-page apps, and [static rendering](https://docs.expo.dev/router/navigating-pages/</router/reference/static-rendering>).
## Usage in simulators[](https://docs.expo.dev/router/navigating-pages/<#usage-in-simulators>)
See [Test the deep link](https://docs.expo.dev/router/navigating-pages/</linking/into-your-app#test-the-deep-link>) to learn how to emulate deep links in Android Emulators and iOS Simulators.
[Previous (Expo Router)Create pages](https://docs.expo.dev/router/navigating-pages/</router/create-pages>)[Next (Expo Router)Layout routes](https://docs.expo.dev/router/navigating-pages/</router/layouts>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/navigating-pages/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/navigating-pages/<https:/github.com/expo/expo/edit/main/docs/pages/router/navigating-pages.mdx>)
  * Last updated on December 06, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/navigating-pages/<https:/expo.dev/privacy>).
On this page
[Buttons](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#buttons>)[Understanding native navigation](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#understanding-native-navigation>)[Relative navigation](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#relative-navigation>)[Linking to dynamic routes](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#linking-to-dynamic-routes>)[Pushing screens](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#pushing-screens>)[Replacing screens](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#replacing-screens>)[Imperative navigation](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#imperative-navigation>)[Autocomplete](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#autocomplete>)[Web behavior](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#web-behavior>)[Usage in simulators](https://docs.expo.dev/router/navigating-pages/</router/navigating-pages/#usage-in-simulators>)
