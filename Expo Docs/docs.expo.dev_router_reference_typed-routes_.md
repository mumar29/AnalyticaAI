[](https://docs.expo.dev/router/reference/typed-routes/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/typed-routes/</>)
[Blog](https://docs.expo.dev/router/reference/typed-routes/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/typed-routes/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/typed-routes/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/typed-routes/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/typed-routes/</>)[Guides](https://docs.expo.dev/router/reference/typed-routes/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/typed-routes/</eas>)[Reference](https://docs.expo.dev/router/reference/typed-routes/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/typed-routes/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/typed-routes/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/typed-routes/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/typed-routes/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/typed-routes/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/typed-routes/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/typed-routes/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/typed-routes/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/typed-routes/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/typed-routes/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/typed-routes/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/typed-routes/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/typed-routes/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/typed-routes/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/typed-routes/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/typed-routes/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/typed-routes/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/typed-routes/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/typed-routes/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/typed-routes/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/typed-routes/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/typed-routes/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/typed-routes/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/typed-routes/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/typed-routes/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/typed-routes/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/typed-routes/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/typed-routes/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/typed-routes/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/typed-routes/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/typed-routes/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/typed-routes/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/typed-routes/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/typed-routes/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/typed-routes/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/typed-routes/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/typed-routes/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/typed-routes/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/typed-routes/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/typed-routes/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/typed-routes/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/typed-routes/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/typed-routes/<https:/expo.dev/mailing-list/signup>)
# Typed routes
[Edit this page](https://docs.expo.dev/router/reference/typed-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/typed-routes.mdx> "Edit content of this page on GitHub")
Learn how to use statically typed links and routes in Expo Router.
[Edit this page](https://docs.expo.dev/router/reference/typed-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/typed-routes.mdx> "Edit content of this page on GitHub")
> Available when using TypeScript in your project. Expo Router supports standard TypeScript out of the box. See the [TypeScript](https://docs.expo.dev/router/reference/typed-routes/</guides/typescript>) guide for more information on how to set it up.
Expo Router supports generating TypeScript types automatically with Expo CLI. This enables `<Link>`, and the [hooks API](https://docs.expo.dev/router/reference/typed-routes/</router/reference/hooks>) to be statically typed. This feature is currently in beta and is not enabled by default.
## Get started[](https://docs.expo.dev/router/reference/typed-routes/<#get-started>)
### Quick start[](https://docs.expo.dev/router/reference/typed-routes/<#quick-start>)
If you created your project using the [Expo Router quick start guide](https://docs.expo.dev/router/reference/typed-routes/</router/installation#quick-start>) then your project is already configured to use typed routes. The Expo CLI will generate the required type file the first time you run `npx expo start`. Then, you can use autocomplete for `href` props whenever you use an Expo Router `<Link>` component in a .tsx file.
### Manual configuration[](https://docs.expo.dev/router/reference/typed-routes/<#manual-configuration>)
While the feature is in beta, you can enable it by setting `experiments.typedRoutes` to `true` in your app.json:
app.json
Copy
```
{
 "expo": {
  "experiments": {
   "typedRoutes": true
  }
 }
}

```

Run `npx expo customize tsconfig.json` to configure your tsconfig.json to add the required `includes` fields.
Then, start the development server by running `npx expo start`. You can now use autocomplete in the Expo Router `<Link>` component's `href` prop.
## Type generation[](https://docs.expo.dev/router/reference/typed-routes/<#type-generation>)
Typed routes in Expo Router are automatically generated when the development server starts. By default, these generated types are configured to be untracked by Git and will be added to the local .gitignore file. This ensures that autogenerated files do not clutter your version control system.
If you find yourself in a situation where you need to generate these types without initiating the development server, such as during type checking on a Continuous Integration (CI) server. To do this, run the command `npx expo customize tsconfig.json` on the CI.
## Statically typed routes[](https://docs.expo.dev/router/reference/typed-routes/<#statically-typed-routes>)
Components and functions that use `Href<T>` will now be statically typed and have a much stricter definition. For example:
```
✅ <Link href="/about" />
✅ <Link href="/user/1" />
✅ <Link href={`/user/${id}`} />
✅ <Link href={("/user" + id) as Href} />
// TypeScript errors if href is not a valid route
❌ <Link href="/usser/1" />

```

For dynamic routes, Href's need to be objects and their parameters are strictly typed:
```
✅ <Link href={{ pathname: "/user/[id]", params: { id: 1 }}} />
// TypeScript errors as href is valid, but it should be a HrefObject with params
❌ <Link href="/user/[id]" />
// TypeScript errors as params contain invalid keys
❌ <Link href={{ pathname: "/user/[id]", params: { _id: 1 }}} />
// TypeScript errors as params contain unknown keys
❌ <Link href={{ pathname: "/user/[id]", params: { id: 1, id2: 2 }}} />

```

### Relative paths[](https://docs.expo.dev/router/reference/typed-routes/<#relative-paths>)
Statically typed routes do not support relative paths. You'll need to use absolute paths for all routes:
```
✅ <Link href="/about" />
// Relative paths are not supported
❌ <Link href="./about" />

```

You can leverage the `useSegments()` hooks from `expo-router` to create complex relative paths. Consider the following structure:
`app`
`(feed)`
`_layout.tsx`
`feed.tsx`
`search.tsx`
`profile.tsx`
`(search)`
`profile.tsx`
`components`
`button.tsx`
You can ensure that you push to the same tab by using the `useSegments()` hook to get the first segment of the current route.
button.tsx
Copy
```
import { Link, useSegments } from 'expo-router';
export function Button() {
 const [
  // This will be either `(feed)` or `(search)` depending on the current tab.
  first,
 ] = useSegments();
 return <Link href={`/${first}/profile`}>Push profile</Link>;
}

```

Now, you can leverage `<Button />` from both app/(feed)/feed.tsx and app/(search)/search.tsx to push `./profile` while preserving the current tab.
If you require the segments for a specific your, you can pass the full route to `useSegments`
button.tsx
Copy
```
import { Link, useSegments } from 'expo-router';
export function useMySegments() {
 const segments = useSegments<'app/(search)/profile.tsx'>();
 //  ^? segments = ['app', '(search)', 'profile']
 return segments;
}

```

## Imperative navigation[](https://docs.expo.dev/router/reference/typed-routes/<#imperative-navigation>)
You can use the typed `router` object to navigate imperatively:
```
import { router } from 'expo-router';
router.push('/about');

```

Or with the typed `useRouter()` hook:
```
import { useRouter } from 'expo-router';
function Page() {
 const router = useRouter();
 router.push('/about');
 // ...
}

```

## Route parameters[](https://docs.expo.dev/router/reference/typed-routes/<#route-parameters>)
For strongly typed route parameters you can pass a full href to the `useLocalSearchParams` and `useGlobalSearchParams` hooks
app/search.tsx
Copy
```
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function Page() {
 const {
  profile, // string
  search, // string[]
 } = useLocalSearchParams<'app/(search)/[profile]/[...search].tsx'>();
 return (
  <><Text>Profile: {profile}</Text><Text>Search: {search.join(',')}</Text></>
 );
}

```

## Query parameters[](https://docs.expo.dev/router/reference/typed-routes/<#query-parameters>)
Most query parameters will not be represented in the file system and therefore cannot be typed automatically. You can type query parameters manually by passing a generic to the `useLocalSearchParams` and `useGlobalSearchParams` hooks. For example:
app/search.tsx
Copy
```
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function Page() {
 const { query } = useLocalSearchParams<{ query?: string }>();
 return <Text>Search: {query ?? 'unset'}</Text>;
}

```

If you need a combination of route and query parameters, pass the route as the first generic and then the query parameters
app/search.tsx
Copy
```
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function Page() {
 const { query, profile, search } = useLocalSearchParams<
  '/[profile]/[...search]',
  { query?: string }
 >();
 return <Text>Search: {query ?? 'unset'}</Text>;
}

```

## Changes made to the environment[](https://docs.expo.dev/router/reference/typed-routes/<#changes-made-to-the-environment>)
When typed routes is enabled, Expo CLI will generate a git ignored expo-env.d.ts file in your project's root directory, update the .gitignore to ignore the new root expo-env.d.ts file, and modify the tsconfig.json to include the new expo-env.d.ts file.
The `includes` field in your tsconfig.json gets updated to include expo-env.d.ts and a hidden .expo directory. These entries are required and should not be removed from the file.
The generated expo-env.d.ts should not be removed or changed at any time. It should not be committed and should be ignored by version control.
### Global types[](https://docs.expo.dev/router/reference/typed-routes/<#global-types>)
Expo CLI will add the following global types to your project when typed routes is enabled:
  * Sets `process.env.NODE_ENV = "development" | "production" | "test"`
  * Allows the importing of `.[css|sass|scss]` files
  * Sets the exports of `*.module.[css|sass|scss]` to be `Record<string, string>`
  * Add types for Metro's `require.context`. This is enabled by `expo/metro-config` and used for static route generation.


### React Native Web[](https://docs.expo.dev/router/reference/typed-routes/<#react-native-web>)
With typed routes enabled, Expo CLI also augments the `react-native` types to support React Native Web. The following changes are made:
  * Add additional web-only styles for `ViewStyle`, `TextStyle`, `ImageStyle`
  * Add `tabIndex`, `aria-level`, `lang` to `TextProps`
  * Add `hovered` to Pressable's `children` and `style` state callback function
  * Add `className` elements


[Previous (Expo Router - Reference)Sitemap](https://docs.expo.dev/router/reference/typed-routes/</router/reference/sitemap>)[Next (Expo Router - Reference)Authentication](https://docs.expo.dev/router/reference/typed-routes/</router/reference/authentication>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/typed-routes/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/typed-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/typed-routes.mdx>)
  * Last updated on November 05, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/typed-routes/<https:/expo.dev/privacy>).
On this page
[Get started](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#get-started>)[Quick start](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#quick-start>)[Manual configuration](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#manual-configuration>)[Type generation](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#type-generation>)[Statically typed routes](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#statically-typed-routes>)[Relative paths](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#relative-paths>)[Imperative navigation](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#imperative-navigation>)[Route parameters](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#route-parameters>)[Query parameters](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#query-parameters>)[Changes made to the environment](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#changes-made-to-the-environment>)[Global types](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#global-types>)[React Native Web](https://docs.expo.dev/router/reference/typed-routes/</router/reference/typed-routes/#react-native-web>)
