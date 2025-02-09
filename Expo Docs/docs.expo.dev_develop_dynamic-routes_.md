[](https://docs.expo.dev/develop/dynamic-routes/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/dynamic-routes/</>)
[Blog](https://docs.expo.dev/develop/dynamic-routes/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/dynamic-routes/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/dynamic-routes/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/dynamic-routes/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/dynamic-routes/</>)[Guides](https://docs.expo.dev/develop/dynamic-routes/</guides/overview>)[EAS](https://docs.expo.dev/develop/dynamic-routes/</eas>)[Reference](https://docs.expo.dev/develop/dynamic-routes/</versions/latest>)[Learn](https://docs.expo.dev/develop/dynamic-routes/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/dynamic-routes/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/dynamic-routes/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/dynamic-routes/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/dynamic-routes/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/dynamic-routes/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/dynamic-routes/</develop/tools>)
Navigation
[File-based routing](https://docs.expo.dev/develop/dynamic-routes/</develop/file-based-routing>)[Dynamic routes](https://docs.expo.dev/develop/dynamic-routes/</develop/dynamic-routes>)[Next steps](https://docs.expo.dev/develop/dynamic-routes/</develop/next-steps>)
User interface
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/dynamic-routes/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/dynamic-routes/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/dynamic-routes/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/dynamic-routes/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/dynamic-routes/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/dynamic-routes/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/dynamic-routes/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/dynamic-routes/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/dynamic-routes/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/dynamic-routes/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/dynamic-routes/</core-concepts>)[FAQ](https://docs.expo.dev/develop/dynamic-routes/</faq>)
[Archive](https://docs.expo.dev/develop/dynamic-routes/</archive>)[Expo Snack](https://docs.expo.dev/develop/dynamic-routes/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/dynamic-routes/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/dynamic-routes/<https:/expo.dev/mailing-list/signup>)
# Dynamic routes
[Edit this page](https://docs.expo.dev/develop/dynamic-routes/<https:/github.com/expo/expo/edit/main/docs/pages/develop/dynamic-routes.mdx> "Edit content of this page on GitHub")
Learn about dynamic routes and how you can create them using Expo Router library.
[Edit this page](https://docs.expo.dev/develop/dynamic-routes/<https:/github.com/expo/expo/edit/main/docs/pages/develop/dynamic-routes.mdx> "Edit content of this page on GitHub")
A dynamic route allows matching one or multiple paths based on a dynamic segment embedded in the URL. This segment is in the form of a variable, such as a unique identifier, and your app doesn't know the exact segment ahead of time.
This guide explains how to handle dynamic routes with Expo Router.
> This guide continues to build on top of the example and the app directory structure used in the previous [File-based routing](https://docs.expo.dev/develop/dynamic-routes/</develop/file-based-routing>).
## Dynamic route convention[](https://docs.expo.dev/develop/dynamic-routes/<#dynamic-route-convention>)
A dynamic segment of a route is created by wrapping a file's name in square brackets. For example, [id].tsx.
> What is a dynamic segment? Any segment of a path in a URL that is dynamic. For example, in an app screen where it displays a users list, you might have a path such as `/details/[id]` where the `[id]` is the dynamic segment and displays details based on the `id` of the user.
## Create a dynamic route[](https://docs.expo.dev/develop/dynamic-routes/<#create-a-dynamic-route>)
Let's consider the following app directory structure:
`app`
`_layout.tsx``Root layout`
`(tabs)`
`_layout.tsx``Tab layout`
`settings.tsx``matches '/settings'`
`(home)`
`_layout.tsx``Home layout`
`index.tsx``matches '/'`
`details`
`[id].tsx``matches '/details/1'`
In the above file structure, the `[id]` is used to display information for the route details/[id].tsx. The same route will display unique information based on the value of the `id`:
Route| Matched URL  
---|---  
details/[id].tsx| `/details/1`  
details/[id].tsx| `/details/2`  
This dynamic segment convention makes sure that when an app user navigates from the home screen to the details screen, they view the correct information for the dynamic segment of the route.
## Use `Link` to navigate to a dynamic route[](https://docs.expo.dev/develop/dynamic-routes/<#use-link-to-navigate-to-a-dynamic-route>)
Navigating from one route to a dynamic route is done by providing query parameters to the `Link` component either statically or using the `href` object.
For example, the following code allows you to navigate to the dynamic route statically using query parameters:
app/(home)/index.tsx
Copy
```
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
export default function HomeScreen() {
 return (
  <View style={styles.container}><Text>Home</Text><Link href="/details/1">View first user details</Link><Link href="/details/2">View second user details</Link></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
});

Show More

```

You can also use the `href` object to provide a `pathname` which takes the value of the dynamic route and passes `params`:
app/(home)/index.tsx
Copy
```
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
export default function HomeScreen() {
 return (
  <View style={styles.container}><Text>Home</Text><Link
    href={{
     pathname: '/details/[id]',
     params: { id: 'bacon' },
    }}>
    View user details
   </Link></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
});

Show More

```

## Access parameters from dynamic segments[](https://docs.expo.dev/develop/dynamic-routes/<#access-parameters-from-dynamic-segments>)
Dynamic segments of a URL are accessible with a [route parameter](https://docs.expo.dev/develop/dynamic-routes/</router/reference/url-parameters>) in the route component. For example, you can use the `useLocalSearchParams`[](https://docs.expo.dev/develop/dynamic-routes/</router/reference/hooks#uselocalsearchparams>) hook which returns the URL parameters for the selected route.
app/(home)/details/[id].tsx
Copy
```
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
export default function DetailsScreen() {
 const { id } = useLocalSearchParams();
 return (
  <View style={styles.container}><Text>Details of user {id}</Text></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
});

Show More

```

When `/` pushes `/details/1`, the `useLocalSearchParams` returns `{ id: '1' }` because `/details/1` is the selected route.
[Previous (Develop - Navigation)File-based routing](https://docs.expo.dev/develop/dynamic-routes/</develop/file-based-routing>)[Next (Develop - Navigation)Next steps](https://docs.expo.dev/develop/dynamic-routes/</develop/next-steps>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/dynamic-routes/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/dynamic-routes/<https:/github.com/expo/expo/edit/main/docs/pages/develop/dynamic-routes.mdx>)
  * Last updated on July 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/dynamic-routes/<https:/expo.dev/privacy>).
On this page
[Dynamic route convention](https://docs.expo.dev/develop/dynamic-routes/</develop/dynamic-routes/#dynamic-route-convention>)[Create a dynamic route](https://docs.expo.dev/develop/dynamic-routes/</develop/dynamic-routes/#create-a-dynamic-route>)[Use Link to navigate to a dynamic route](https://docs.expo.dev/develop/dynamic-routes/</develop/dynamic-routes/#use-link-to-navigate-to-a-dynamic-route>)[Access parameters from dynamic segments](https://docs.expo.dev/develop/dynamic-routes/</develop/dynamic-routes/#access-parameters-from-dynamic-segments>)
