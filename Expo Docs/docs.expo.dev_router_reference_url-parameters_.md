[](https://docs.expo.dev/router/reference/url-parameters/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/url-parameters/</>)
[Blog](https://docs.expo.dev/router/reference/url-parameters/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/url-parameters/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/url-parameters/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/url-parameters/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/url-parameters/</>)[Guides](https://docs.expo.dev/router/reference/url-parameters/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/url-parameters/</eas>)[Reference](https://docs.expo.dev/router/reference/url-parameters/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/url-parameters/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/url-parameters/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/url-parameters/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/url-parameters/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/url-parameters/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/url-parameters/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/url-parameters/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/url-parameters/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/url-parameters/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/url-parameters/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/url-parameters/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/url-parameters/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/url-parameters/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/url-parameters/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/url-parameters/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/url-parameters/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/url-parameters/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/url-parameters/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/url-parameters/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/url-parameters/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/url-parameters/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/url-parameters/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/url-parameters/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/url-parameters/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/url-parameters/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/url-parameters/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/url-parameters/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/url-parameters/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/url-parameters/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/url-parameters/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/url-parameters/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/url-parameters/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/url-parameters/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/url-parameters/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/url-parameters/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/url-parameters/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/url-parameters/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/url-parameters/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/url-parameters/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/url-parameters/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/url-parameters/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/url-parameters/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/url-parameters/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/url-parameters/<https:/expo.dev/mailing-list/signup>)
# Using URL parameters
[Edit this page](https://docs.expo.dev/router/reference/url-parameters/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/url-parameters.mdx> "Edit content of this page on GitHub")
Learn how to access and modify route and search parameters in your app.
[Edit this page](https://docs.expo.dev/router/reference/url-parameters/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/url-parameters.mdx> "Edit content of this page on GitHub")
URL parameters include both route parameters and search parameters. Expo Router provides hooks for accessing and modifying these parameters.
## Difference between route and search parameters[](https://docs.expo.dev/router/reference/url-parameters/<#difference-between-route-and-search-parameters>)
Route parameters are dynamic segments defined in a URL path, such as `/profile/[user]`, where `user` is a route parameter. They are used to match a route.
Search parameters (also known as query params) are serializable fields that can be appended to a URL, such as `/profile?extra=info`, where `extra` is a search parameter. They are commonly used to pass data between pages.
## Local versus global URL parameters[](https://docs.expo.dev/router/reference/url-parameters/<#local-versus-global-url-parameters>)
In nested apps, you'll often have multiple pages mounted at the same time. For example, a stack has the previous page and current page in memory when a new route is pushed. Because of this, Expo Router provides two different hooks for accessing URL parameters:
  * useLocalSearchParams: Returns the URL parameters for the current component. It only updates when the global URL conforms to the route.
  * useGlobalSearchParams: Returns the global URL regardless of the component. It updates on every URL param change and might cause components to update extraneously in the background.


The hooks `useGlobalSearchParams` and `useLocalSearchParams` allow you to access these parameters within your components, enabling you to retrieve and utilize both types of URL parameters.
Both hooks are typed and accessed the same way. However, the only difference is how frequently they update.
The example below demonstrates the difference between `useLocalSearchParams` and `useGlobalSearchParams`. It uses the following app directory structure:
`app`
`_layout.tsx`
`index.tsx`
`[user].tsx`
1
The Root Layout is a stack navigator:
app/_layout.tsx
Copy
```
import { Stack } from 'expo-router';
export default function Layout() {
 return <Stack />;
}

```

2
The initial route redirects to the dynamic route app/[user].tsx, with user=evanbacon:
app/index.tsx
Copy
```
import { Redirect } from 'expo-router';
export default function Route() {
 return <Redirect href="/evanbacon" />;
}

```

3
The dynamic route app/[user] prints out the global and local URL parameters (route parameters, in this case). It also allows for pushing new instances of the same route with different route parameters:
app/[user].tsx
Copy
```
import { Text, View } from 'react-native';
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
const friends = ['charlie', 'james']
export default function Route() {
 const glob = useGlobalSearchParams();
 const local = useLocalSearchParams();
 console.log("Local:", local.user, "Global:", glob.user);
 return (
  <View><Text>User: {local.user}</Text>{friends.map(friend => (
    <Link key={friend} href={`/${friend}`}>
     Visit {friend}</Link>
   ))}</View>
 );
}

Show More

```

4
When the app starts, the following log is printed:
Terminal
Copy
`Local: evanbacon Global: evanbacon`
Pressing "Visit charlie" pushes a new instance of `/[user]` with user=charlie, and logs the following:
Terminal
`# This log came from the new screen``Local: charlie Global: charlie``# This log came from the first screen``Local: evanbacon Global: charlie`
Pressing "Visit james" has a similar effect:
Terminal
`# This log came from the new, "/james" screen``Local: james Global: james``# This log came from the "/evanbacon" screen``Local: evanbacon Global: james``# This log came from the "/charlie" screen``Local: charlie Global: james`
Results:
  * `useGlobalSearchParams` made the background screens re-render when the URL route parameters changed. It can cause performance issues if overused.
  * Global re-renders are executed in order of the stack, so the first screen is re-rendered first, then the user=charlie screen is re-rendered after.
  * `useLocalSearchParams` remained the same, even when the global URL route parameters changed. You can leverage this behavior for data fetching to ensure the previous screen's data is still available when you navigate back.


## Statically-typed URL parameters[](https://docs.expo.dev/router/reference/url-parameters/<#statically-typed-url-parameters>)
Both the `useLocalSearchParams` and `useGlobalSearchParams` can be statically typed using a generic. The following is an example for the `user` route parameter:
app/[user].tsx
Copy
```
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function Route() {
 const { user } = useLocalSearchParams<{ user: string }>();
 return <Text>User: {user}</Text>;
}
// Given the URL: `/evanbacon`
// The following is returned: { user: "evanbacon" }

```

Any search parameters (for example, `?query=...`) can be typed optionally:
app/[user].tsx
Copy
```
const { user, query } = useLocalSearchParams<{ user: string; query?: string }>();
// Given the URL: `/evanbacon?query=hello`
// The following is returned: { user: "evanbacon", query: "hello" }

```

When used with the rest syntax (`...`), route parameters are returned as a string array:
app/[...everything].tsx
Copy
```
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function Route() {
 const { everything } = useLocalSearchParams<{
  everything: string[];
 }>();
 const user = everything[0];
 return <Text>User: {user}</Text>;
}
// Given the URL: `/evanbacon/123`
// The following is returned: { everything: ["evanbacon", "123"] }

```

Any search parameters will continue to be returned as individual strings:
app/[...everything].tsx
Copy
```
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function Route() {
 const { everything } = useLocalSearchParams<{
  everything: string[];
  query?: string;
  query2?: string;
 }>();
 const user = everything[0];
 return <Text>User: {user}</Text>;
}
// Given the URL: `/evanbacon/123?query=hello&query2=world`
// The following is returned: { everything: ["evanbacon", "123"], query: "hello", query2: "world" }

```

## Updating URL parameters[](https://docs.expo.dev/router/reference/url-parameters/<#updating-url-parameters>)
URL parameters can be updated using the router.setParams function from the imperative API. Updating a URL parameter will not push anything new to the history stack.
The following example uses a `<TextInput>` to update the search parameter q:
app/search.tsx
Copy
```
import { useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
export default function Page() {
 const params = useLocalSearchParams<{ query?: string }>();
 const [search, setSearch] = useState(params.query);
 return (
  <TextInput
   value={search}
   onChangeText={search => {
    setSearch(search);
    router.setParams({ query: search });
   }}
   placeholderTextColor="#A0A0A0"
   placeholder="Search"
   style={{
    borderRadius: 12,
    backgroundColor: '#fff',
    fontSize: 24,
    color: '#000',
    margin: 12,
    padding: 16,
   }}
  />
 );
}

Show More

```

Here is an example using an `onPress` event to update the route parameter user:
app/[user].tsx
Copy
```
import { useLocalSearchParams, router } from 'expo-router';
import { Text } from 'react-native';
export default function User() {
 const params = useLocalSearchParams<{ user: string }>();
 return (
  <><Text>User: {params.user}</Text><Text onPress={() => router.setParams({ user: 'evan' })}>Go to Evan</Text></>
 );
}

```

## Route parameters versus search parameters[](https://docs.expo.dev/router/reference/url-parameters/<#route-parameters-versus-search-parameters>)
Route parameters are used to match a route, while search parameters are used to pass data between routes. Consider the following structure, where a route parameter is used to match the _user_ route:
`app`
`index.tsx`
`[user].tsx```user` is a **route parameter**`
When the `app/[user]` route is matched, the `user` parameter is passed to the component and never a nullish value. Both search and route parameters can be used together and are accessible with the `useLocalSearchParams` and `useGlobalSearchParams` hooks:
app/[user].tsx
Copy
```
import { useLocalSearchParams } from 'expo-router';
export default function User() {
 const {
  // The route parameter
  user,
  // An optional search parameter.
  tab,
 } = useLocalSearchParams<{ user: string; tab?: string }>();
 console.log({ user, tab });
 // Given the URL: `/bacon?tab=projects`, the following is printed:
 // { user: 'bacon', tab: 'projects' }
 // Given the URL: `/expo`, the following is printed:
 // { user: 'expo', tab: undefined }
}

Show More

```

Whenever a route parameter is changed, the component will re-mount.
app/[user].tsx
Copy
```
import { Text } from 'react-native';
import { router, useLocalSearchParams, Link } from 'expo-router';
export default function User() {
 // All three of these will change the route parameter `user`, and add a new user page.
 return (
  <><Text onPress={() => router.setParams({ user: 'evan' })}>Go to Evan</Text><Text onPress={() => router.push('/mark')}>Go to Mark</Text><Link href="/charlie">Go to Charlie</Link></>
 );
}

```

## Hash support[](https://docs.expo.dev/router/reference/url-parameters/<#hash-support>)
The URL [hash](https://docs.expo.dev/router/reference/url-parameters/<https:/developer.mozilla.org/en-US/docs/Web/API/URL/hash>) is a string that follows the `#` symbol in a URL. It is commonly used on websites to link to a specific section of a page, but it can also be used to store data. Expo Router treats the hash as a special search parameter using the name `#`. It can be accessed and modified using the same hooks and APIs from [search parameters](https://docs.expo.dev/router/reference/url-parameters/</router/reference/url-parameters#local-versus-global-search-parameters>).
app/hash.tsx
Copy
```
import { Text } from 'react-native';
import { router, useLocalSearchParams, Link } from 'expo-router';
export default function User() {
 // Access the hash
 const { '#': hash } = useLocalSearchParams<{ '#': string }>();
 return (
  <><Text onPress={() => router.setParams({ '#': 'my-hash' })}>Set a new hash</Text>
   <Text onPress={() => router.push('/#my-hash')}>Push with a new hash</Text>
   <Link href="/#my-hash">Link with a hash</Link></>
 );
}

```

[Previous (Expo Router - Advanced)Apple Handoff](https://docs.expo.dev/router/reference/url-parameters/</router/advanced/apple-handoff>)[Next (Expo Router - Reference)Redirects](https://docs.expo.dev/router/reference/url-parameters/</router/reference/redirects>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/url-parameters/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/url-parameters/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/url-parameters.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/url-parameters/<https:/expo.dev/privacy>).
On this page
[Difference between route and search parameters](https://docs.expo.dev/router/reference/url-parameters/</router/reference/url-parameters/#difference-between-route-and-search-parameters>)[Local versus global URL parameters](https://docs.expo.dev/router/reference/url-parameters/</router/reference/url-parameters/#local-versus-global-url-parameters>)[Statically-typed URL parameters](https://docs.expo.dev/router/reference/url-parameters/</router/reference/url-parameters/#statically-typed-url-parameters>)[Updating URL parameters](https://docs.expo.dev/router/reference/url-parameters/</router/reference/url-parameters/#updating-url-parameters>)[Route parameters versus search parameters](https://docs.expo.dev/router/reference/url-parameters/</router/reference/url-parameters/#route-parameters-versus-search-parameters>)[Hash support](https://docs.expo.dev/router/reference/url-parameters/</router/reference/url-parameters/#hash-support>)
