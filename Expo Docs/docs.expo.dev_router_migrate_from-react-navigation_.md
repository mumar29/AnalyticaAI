[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/migrate/from-react-navigation/</>)
[Blog](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/migrate/from-react-navigation/</>)[Guides](https://docs.expo.dev/router/migrate/from-react-navigation/</guides/overview>)[EAS](https://docs.expo.dev/router/migrate/from-react-navigation/</eas>)[Reference](https://docs.expo.dev/router/migrate/from-react-navigation/</versions/latest>)[Learn](https://docs.expo.dev/router/migrate/from-react-navigation/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/migrate/from-react-navigation/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/migrate/from-react-navigation/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/migrate/from-react-navigation/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/migrate/from-react-navigation/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/migrate/from-react-navigation/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/migrate/from-react-navigation/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/migrate/from-react-navigation/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/migrate/from-react-navigation/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/migrate/from-react-navigation/</router/introduction>)[Installation](https://docs.expo.dev/router/migrate/from-react-navigation/</router/installation>)[Create pages](https://docs.expo.dev/router/migrate/from-react-navigation/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/migrate/from-react-navigation/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/migrate/from-react-navigation/</router/layouts>)[Error handling](https://docs.expo.dev/router/migrate/from-react-navigation/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
[React Navigation](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation>)[Expo Webpack](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-expo-webpack>)
Expo Modules API
[Overview](https://docs.expo.dev/router/migrate/from-react-navigation/</modules/overview>)[Get started](https://docs.expo.dev/router/migrate/from-react-navigation/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/migrate/from-react-navigation/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/migrate/from-react-navigation/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/migrate/from-react-navigation/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/migrate/from-react-navigation/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/migrate/from-react-navigation/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/migrate/from-react-navigation/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/migrate/from-react-navigation/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/migrate/from-react-navigation/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/migrate/from-react-navigation/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/migrate/from-react-navigation/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/migrate/from-react-navigation/</archive>)[Expo Snack](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/expo.dev/mailing-list/signup>)
# Migrate from React Navigation
[Edit this page](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/github.com/expo/expo/edit/main/docs/pages/router/migrate/from-react-navigation.mdx> "Edit content of this page on GitHub")
Learn how to migrate a project using React Navigation to Expo Router.
[Edit this page](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/github.com/expo/expo/edit/main/docs/pages/router/migrate/from-react-navigation.mdx> "Edit content of this page on GitHub")
Both React Navigation and Expo Router are Expo frameworks for routing and navigation. Expo Router is a wrapper around React Navigation and many of the concepts are the same.
## Pitch[](https://docs.expo.dev/router/migrate/from-react-navigation/<#pitch>)
Along with all the benefits of React Navigation, Expo Router enables automatic deep linking, [type safety](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/typed-routes>), [deferred bundling](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/async-routes>), [static rendering on web](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/static-rendering>), and more.
## Anti-pitch[](https://docs.expo.dev/router/migrate/from-react-navigation/<#anti-pitch>)
If your app uses a custom `getPathFromState` or `getStateFromPath` component, it may not be a good fit for Expo Router. If you're using these functions to support [shared routes](https://docs.expo.dev/router/migrate/from-react-navigation/</router/advanced/shared-routes>) then you should be fine as Expo Router has built-in support for this.
## Recommendations[](https://docs.expo.dev/router/migrate/from-react-navigation/<#recommendations>)
We recommend making the following modifications to your codebase before beginning the migration:
  * Split React Navigation screen components into individual files. For example, if you have `<Stack.Screen component={HomeScreen} />`, then ensure the `HomeScreen` class is in its own file.
  * Convert the project to [TypeScript](https://docs.expo.dev/router/migrate/from-react-navigation/</guides/typescript#migrating-existing-javascript-project>). This will make it easier to spot errors that may occur during the migration.
  * Convert relative imports to [typed aliases](https://docs.expo.dev/router/migrate/from-react-navigation/</guides/typescript#path-aliases-optional>). For example, `../../components/button.tsx` to `@/components/button` before starting the migration. This makes it easier to move screens around the filesystem without having to update the relative paths.
  * Migrate away from `resetRoot`. This is used to "restart" the app while running. This is generally considered bad practice, and you should restructure your app's navigation so this never needs to happen.
  * Rename the initial route to `index`. Expo Router considers the route that is opened on launch to match `/`, React Navigation users will generally use something such as "Home" for the initial route.


### Refactor search parameters[](https://docs.expo.dev/router/migrate/from-react-navigation/<#refactor-search-parameters>)
Refactor screens to [use serializable top-level query parameters](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/params/#what-should-be-in-params>). We recommend this in React Navigation as well.
In Expo Router, search parameters can only serialize top-level values such as `number`, `boolean`, and `string`. React Navigation doesn't have the same restrictions, so users can sometimes pass invalid parameters like Functions, Objects, Maps, and so on.
If your code has something similar to the below:
```
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();
navigation.push('Followers', {
 onPress: profile => {
  navigation.push('User', { profile });
 },
});

```

Consider restructuring so the function can be accessed from the "followers" screen. In this case, you can access the router and push directly from the "followers" screen.
### Eagerly load UI[](https://docs.expo.dev/router/migrate/from-react-navigation/<#eagerly-load-ui>)
It's common in React Native apps to `return null` from the root component while assets and fonts are loading. This is bad practice and generally unsupported in Expo Router. If you absolutely must defer rendering, then ensure you don't attempt to navigate to any screens.
Historically this pattern exists because React Native will throw errors if you use custom fonts that haven't loaded yet. We changed this upstream in React Native 0.72 (SDK 49) so the default behavior is to swap the default font when the custom font loads. If you'd like to hide individual text elements until a font has finished loading, write a wrapper `<Text>`, which returns null until the font has loaded.
On web, returning `null` from the root will cause [static rendering](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/static-rendering>) to skip all of the children, resulting in no searchable content. This can be tested by using "View Page Source" in Chrome, or by disabling JavaScript and reloading the page.
## Migration[](https://docs.expo.dev/router/migrate/from-react-navigation/<#migration>)
### Delete unused or managed code[](https://docs.expo.dev/router/migrate/from-react-navigation/<#delete-unused-or-managed-code>)
Expo Router automatically adds `react-native-safe-area-context` support.
```
- import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
 return (
-  <SafeAreaProvider>
   <MyApp />
-  </SafeAreaProvider>
 )
}

```

Expo Router does not add `react-native-gesture-handler` (as of v3), so you'll have to add this yourself if you are using Gesture Handler or `<Drawer />` layout. Avoid using this package on web since it adds a lot of JavaScript that is often unused.
### Copy screens to the app directory[](https://docs.expo.dev/router/migrate/from-react-navigation/<#copy-screens-to-the-app-directory>)
Create an app directory at the root of your repo, or in a root src directory.
Layout the structure of your app by creating files according to the [creating pages guide](https://docs.expo.dev/router/migrate/from-react-navigation/</router/create-pages>). Kebab-case and lowercase letters are considered best practice for route filenames.
Replace navigators with directories, for example:
React Navigation
Copy
```
function HomeTabs() {
 return (
  <Tab.Navigator><Tab.Screen name="Home" component={Home} /><Tab.Screen name="Feed" component={Feed} /></Tab.Navigator>
 );
}
function App() {
 return (
  // NavigationContainer is managed by Expo Router.
  <NavigationContainer
   linking={
    {
     // ...linking configuration
    }
   }
  ><Stack.Navigator>
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen
     name="Home"
     component={HomeTabs}
     options={{
      title: 'Home Screen',
     }}
    />
   </Stack.Navigator></NavigationContainer>
 );
}

Show More

```

Expo Router:
  * Rename the "main" route from Home to index to ensure it matches the `/` path.
  * Convert names to lowercase.
  * Move all the screens to the appropriate file locations inside the app directory. This may take some experimenting.


`app`
`_layout.js`
`(home)`
`_layout.js`
`index.js`
`feed.js`
`profile.js`
`settings.js`
app/_layout.js
Copy
```
import { Stack } from 'expo-router';
export default function RootLayout() {
 return (
  <Stack><Stack.Screen
    name="(home)"
    options={
     {
      title: 'Home Screen',
     }
    }
   /></Stack>
 );
}

```

The tab navigator will be moved to a subdirectory.
app/(home)/_layout.js
Copy
```
import { Tabs } from 'expo-router';
export default function HomeLayout() {
 return <Tabs />;
}

```

### Use Expo Router hooks[](https://docs.expo.dev/router/migrate/from-react-navigation/<#use-expo-router-hooks>)
React Navigation v6 and lower will pass the props `{ navigation, route }` to every screen. This pattern is going away in React Navigation, and we never introduced it to the Expo Router.
Instead, migrate `navigation` to the `useRouter` hook.
```
+ import { useRouter } from 'expo-router';

export default function Page({
- navigation
}) {
- navigation.push('User', { user: 'bacon' });

+ const router = useRouter();
+ router.push('/users/bacon');
}

```

Similarly, migrate from the `route` prop to the `useLocalSearchParams`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#uselocalsearchparams>) hook.
```
+ import { useLocalSearchParams } from 'expo-router';

export default function Page({
- route
}) {
- const user = route?.params?.user;

+ const { user } = useLocalSearchParams();
}

```

To access the `navigation.navigate`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-object/#navigate>), import the `navigation` prop from `useNavigation`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usenavigation>) hook.
```
+ import { useNavigation } from 'expo-router';

export default function Page({
+ const navigation = useNavigation();

 return (
  <Button onPress={navigation.navigate('screenName')}>
 )
})

```

### Migrate the Link component[](https://docs.expo.dev/router/migrate/from-react-navigation/<#migrate-the-link-component>)
React Navigation and Expo Router both provide Link components. However, Expo's Link component uses `href` instead of `to`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/use-link-props/#to>).
```
// React Navigation
<Link to="Settings" />
// Expo Router
<Link href="/settings" />

```

React Navigation users will often create a custom Link component with the `useLinkProps` hook to control the child component. This isn't necessary in Expo Router, instead, use the `asChild` prop.
### Share screens across navigators[](https://docs.expo.dev/router/migrate/from-react-navigation/<#share-screens-across-navigators>)
It's common for React Navigation apps to reuse a set of routes across multiple navigators. This is generally used with tabs to ensure each tab can push any screen.
In Expo Router, you can either migrate to [shared routes](https://docs.expo.dev/router/migrate/from-react-navigation/</router/advanced/shared-routes>) or create multiple files and re-export the same component from them.
When you use groups or shared routes, you can navigate to specific tabs by using the fully qualified route name, for example, `/(home)/settings` instead of `/settings`.
### Migrate screen tracking events[](https://docs.expo.dev/router/migrate/from-react-navigation/<#migrate-screen-tracking-events>)
You may have your screen tracking setup according to our [React Navigation screen tracking guide](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/screen-tracking/>), update it according to the [Expo Router screen tracking guide](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/screen-tracking>).
### Use platform-specific components for screens[](https://docs.expo.dev/router/migrate/from-react-navigation/<#use-platform-specific-components-for-screens>)
Refer to the [platform-specific modules](https://docs.expo.dev/router/migrate/from-react-navigation/</router/advanced/platform-specific-modules>) guide for info on switching UI based on the platform.
### Replace the `NavigationContainer`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#replace-the-navigationcontainer>)
The global React Navigation `<NavigationContainer />`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-container/>) is completely managed in Expo Router. Expo Router provides systems for achieving the same functionality as the `NavigationContainer` without needing to use it directly.
API substitutions[](https://docs.expo.dev/router/migrate/from-react-navigation/<#api-substitutions>)
### Ref[](https://docs.expo.dev/router/migrate/from-react-navigation/<#ref>)
The `NavigationContainer` ref should not be accessed directly. Use the following methods instead.
#### `resetRoot​`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#resetroot>)
Navigate to the initial route of the application. For example, if your app starts at `/` (recommended), then you can replace the current route with `/` using this method.
```
import { useRouter } from 'expo-router';
function Example() {
 const router = useRouter();
 return (
  <Text
   onPress={() => {
    // Go to the initial route of the application.
    router.replace('/');
   }}>
   Reset App
  </Text>
 );
}

```

#### `getRootState`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#getrootstate>)
Use `useRootNavigationState()`.
#### `getCurrentRoute`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#getcurrentroute>)
Unlike React Navigation, Expo Router can reliably represent any route with a string. Use the `usePathname()`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usepathname>) or `useSegments()`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usesegments>) hooks to identify the current route.
#### `getCurrentOptions`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#getcurrentoptions>)
Use the `useLocalSearchParams()`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#uselocalsearchparams>) hook to get the current route's query parameters.
#### `addListener`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#addlistener>)
The following events can be migrated:
#### `state`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#state>)
Use the `usePathname()`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usepathname>) or `useSegments()`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usesegments>) hooks to identify the current route. Use in conjunction with `useEffect(() => {}, [...])` to observe changes.
#### `options`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#options>)
Use the `useLocalSearchParams()`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#uselocalsearchparams>) hook to get the current route's query parameters. Use in conjunction with `useEffect(() => {}, [...])` to observe changes.
### props[](https://docs.expo.dev/router/migrate/from-react-navigation/<#props>)
Migrate the following `<NavigationContainer />` props:
#### `initialState`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#initialstate>)
In Expo Router, you can rehydrate your application state from a route string (for example, `/user/evanbacon`). Use [redirects](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/redirects>) to handle initial states. See [shared routes](https://docs.expo.dev/router/migrate/from-react-navigation/</router/advanced/shared-routes>) for advanced redirects.
Avoid using this pattern in favor of deep linking (for example, a user opens your app to `/profile` rather than from the home screen) as it is most analogous to the web. If an app crashes due to a particular screen, it's best to avoid automatically navigating back to that exact screen when the app starts as it may require reinstalling the app to fix.
#### `onStateChange`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#onstatechange>)
Use the `usePathname()`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usepathname>), `useSegments()`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usesegments>), and `useGlobalSearchParams()`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#useglobalsearchparams>) hooks to identify the current route state. Use in conjunction with `useEffect(() => {}, [...])` to observe changes.
  * If you're attempting to track screen changes, follow the [Screen Tracking guide](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/screen-tracking>).
  * React Navigation recommends avoiding `onStateChange`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-container/#onstatechange>).


#### `onReady`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#onready>)
In React Navigation, `onReady`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-container/#onready>) is most often used to determine when the splash screen should hide or when to track screens using analytics. Expo Router has special handling for both of these use cases. Assume the navigation is always ready for navigation events in the Expo Router.
  * See the [Screen Tracking guide](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/screen-tracking>) for info on migrating analytics from React Navigation.
  * See the [Splash Screen feature](https://docs.expo.dev/router/migrate/from-react-navigation/</develop/user-interface/splash-screen-and-app-icon>) for info on handling the splash screen.


#### `onUnhandledAction`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#onunhandledaction>)
Actions are always handled in Expo Router. Use [dynamic routes](https://docs.expo.dev/router/migrate/from-react-navigation/</router/create-pages#dynamic-routes>) and [404 screens](https://docs.expo.dev/router/migrate/from-react-navigation/</router/error-handling#unmatched-routes>) in favor of `onUnhandledAction`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-container/#onunhandledaction>).
#### `linking`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#linking>)
The `linking`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-container/#linking>) prop is automatically constructed based on the files to the app directory.
#### `fallback`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#fallback>)
The `fallback`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-container/#fallback>) prop is automatically handled by Expo Router. Learn more in the [Splash Screen](https://docs.expo.dev/router/migrate/from-react-navigation/</versions/latest/sdk/splash-screen>) reference.
#### `theme`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#theme>)
In React Navigation, you set the theme for the entire app using the `<NavigationContainer />`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-container/#theme>) component. Expo Router manages the root container for you, so instead you should set the theme using the `ThemeProvider` directly.
app/_layout.tsx
Copy
```
import { ThemeProvider, DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';
import { Slot } from 'expo-router';
export default function RootLayout() {
 return (
  <ThemeProvider value={DarkTheme}>
   <Slot /></ThemeProvider>
 );
}

```

You can use this technique at any layer of the app to set the theme for a specific layout. The current theme can be accessed with the `useTheme` hook from `@react-navigation/native`.
#### `children`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#children>)
The `children` prop is automatically populated based on the files in the app directory and the currently open URL.
#### `independent`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#independent>)
Expo Router does not support `independent`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-container/#independent>) containers. This is because the router is responsible for managing the single `<NavigationContainer />`. Any additional containers will not be automatically managed by Expo Router.
#### `documentTitle`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#documenttitle>)
Use the [Head component](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/static-rendering#meta-tags>) to set the webpage title.
#### `ref`[](https://docs.expo.dev/router/migrate/from-react-navigation/<#ref-1>)
Use the `useNavigationContainerRef()` hook instead.
### Rewrite custom navigators[](https://docs.expo.dev/router/migrate/from-react-navigation/<#rewrite-custom-navigators>)
If your project has a custom navigator, you can rewrite this or port it to Expo Router.
To port, simply use the `withLayoutContext` function:
```
import { createCustomNavigator } from './my-navigator';
export const CustomNavigator = withLayoutContext(createCustomNavigator().Navigator);

```

To rewrite, use the `Navigator` component, which wraps the `useNavigationBuilder`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/custom-navigators#usenavigationbuilder>) hook from React Navigation.
The return value of `useNavigationBuilder` can be accessed with the `Navigator.useContext()` hook from inside the `<Navigator />` component. Properties can be passed to `useNavigationBuilder` using the props of the `<Navigator />` component, this includes `initialRouteName`, `screenOptions`, `router`.
All of the `children` of a `<Navigator />` component will be rendered as-is.
  * `Navigator.useContext`: Access the React Navigation `state`, `navigation`, `descriptors`, and `router` for the custom navigator.
  * `Navigator.Slot`: A React component used to render the currently selected route. This component can only be rendered inside a `<Navigator />` component.


#### Example[](https://docs.expo.dev/router/migrate/from-react-navigation/<#example>)
Custom layouts have an internal context that is ignored when using the `<Slot />` component without a `<Navigator />` component wrapping it.
```
import { View } from 'react-native';
import { TabRouter } from '@react-navigation/native';
import { Navigator, usePathname, Slot, Link } from 'expo-router';
export default function App() {
 return (
  <Navigator router={TabRouter}>
   <Header /><Slot /></Navigator>
 );
}
function Header() {;
 const pathname = usePathname();
 return (
  <View><Link href="/">Home</Link><Link
    href="/profile"
    style={[pathname === '/profile' && { color: 'blue' }]}>
    Profile
   </Link><Link href="/settings">Settings</Link></View>
 );
}

Show More

```

### Use Expo Router's Splash Screen wrapper[](https://docs.expo.dev/router/migrate/from-react-navigation/<#use-expo-routers-splash-screen-wrapper>)
Expo Router wraps `expo-splash-screen` and adds special handling to ensure it's hidden after the navigation mounts, and whenever an unexpected error is caught. Simply migrate from importing `expo-splash-screen` to importing `SplashScreen` from `expo-router`.
### Navigation state observation[](https://docs.expo.dev/router/migrate/from-react-navigation/<#navigation-state-observation>)
If you're observing the navigation state directly, migrate to the `usePathname`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usepathname>), `useSegments`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usesegments>), and `useGlobalSearchParams`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#useglobalsearchparams>) hooks.
### Pass params to nested screens[](https://docs.expo.dev/router/migrate/from-react-navigation/<#pass-params-to-nested-screens>)
Instead of using the [nested screen navigation events](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/params/#passing-params-to-nested-navigators>), use a qualified href:
```
// React Navigation
navigation.navigate('Account', {
 screen: 'Settings',
 params: { user: 'jane' },
});
// Expo Router
router.push({ pathname: '/account/settings', params: { user: 'jane' } });

```

### Set initial routes for deep linking and server navigation[](https://docs.expo.dev/router/migrate/from-react-navigation/<#set-initial-routes-for-deep-linking-and-server-navigation>)
In React Navigation, you can use the `initialRouteName` property of the linking configuration. In Expo Router, use [layout settings](https://docs.expo.dev/router/migrate/from-react-navigation/</router/advanced/router-settings>).
### Reset navigation state[](https://docs.expo.dev/router/migrate/from-react-navigation/<#reset-navigation-state>)
You can use the `reset`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/navigation-actions/#reset>) action from the React Navigation library to reset the navigation state. It is dispatched using the `useNavigation`[](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/hooks#usenavigation>) hook from Expo Router to access the `navigation` prop.
In the below example, the `navigation` prop is accessible from the `useNavigation` hook and the `CommonActions.reset` action from `@react-navigation/native`. The object specified in the `reset` action replaces the existing navigation state with the new one.
app/screen.js
Copy
```
import { useNavigation } from 'expo-router'
import { CommonActions } from '@react-navigation/native'
export default function Screen() {
 const navigation = useNavigation();
 const handleResetAction = () => {
  navigation.dispatch(CommonActions.reset({
   routes: [{key: "(tabs)", name: "(tabs)"}]
  }))
 }
 return (
  <>{/* ...rest of the code */}<Button title='Reset' onPress={handleResetAction} /></>
 );
}

Show More

```

### Migrate TypeScript types[](https://docs.expo.dev/router/migrate/from-react-navigation/<#migrate-typescript-types>)
Expo Router can automatically generate [statically typed routes](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/typed-routes>), this will ensure you can only navigate to valid routes.
## Additional information[](https://docs.expo.dev/router/migrate/from-react-navigation/<#additional-information>)
### React Navigation themes[](https://docs.expo.dev/router/migrate/from-react-navigation/<#react-navigation-themes>)
React Navigation navigators `<Stack>`, `<Drawer>`, and `<Tabs>` use a shared appearance provider. In React Navigation, you set the theme for the entire app using the `<NavigationContainer />` component. Expo Router manages the root container so that you can set the theme using the `ThemeProvider` directly.
app/_layout.tsx
Copy
```
import { ThemeProvider, DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';
import { Slot } from 'expo-router';
export default function RootLayout() {
 return (
  <ThemeProvider value={DarkTheme}>
   <Slot /></ThemeProvider>
 );
}

```

You can use this technique at any layer of the app to set the theme for a specific layout. The current theme can be accessed via `useTheme` hook from `@react-navigation/native`.
### React Navigation Elements[](https://docs.expo.dev/router/migrate/from-react-navigation/<#react-navigation-elements>)
The `@react-navigation/elements`[](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/elements/>) library provides a set of UI elements and helpers that can be used to build a navigation UI. These components are designed to be composable and customizable. You can reuse the default functionality from the library or build your navigator's UI on top of it.
To use it with Expo Router, you need to install the library:
npm
Yarn
Terminal
Copy
`- ``npm install @react-navigation/elements`
Terminal
Copy
`- ``yarn add @react-navigation/elements`
To learn more about the components and utilities the library provides, see [Elements library](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/reactnavigation.org/docs/elements/>) documentation.
[Previous (Expo Router - Reference)Troubleshooting](https://docs.expo.dev/router/migrate/from-react-navigation/</router/reference/troubleshooting>)[Next (Expo Router - Migration)Expo Webpack](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-expo-webpack>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/github.com/expo/expo/edit/main/docs/pages/router/migrate/from-react-navigation.mdx>)
  * Last updated on December 04, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/migrate/from-react-navigation/<https:/expo.dev/privacy>).
On this page
[Pitch](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#pitch>)[Anti-pitch](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#anti-pitch>)[Recommendations](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#recommendations>)[Refactor search parameters](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#refactor-search-parameters>)[Eagerly load UI](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#eagerly-load-ui>)[Migration](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#migration>)[Delete unused or managed code](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#delete-unused-or-managed-code>)[Copy screens to the app directory](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#copy-screens-to-the-app-directory>)[Use Expo Router hooks](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#use-expo-router-hooks>)[Migrate the Link component](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#migrate-the-link-component>)[Share screens across navigators](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#share-screens-across-navigators>)[Migrate screen tracking events](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#migrate-screen-tracking-events>)[Use platform-specific components for screens](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#use-platform-specific-components-for-screens>)[Replace the NavigationContainer](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#replace-the-navigationcontainer>)[Ref](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#ref>)[props](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#props>)[Rewrite custom navigators](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#rewrite-custom-navigators>)[Use Expo Router's Splash Screen wrapper](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#use-expo-routers-splash-screen-wrapper>)[Navigation state observation](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#navigation-state-observation>)[Pass params to nested screens](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#pass-params-to-nested-screens>)[Set initial routes for deep linking and server navigation](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#set-initial-routes-for-deep-linking-and-server-navigation>)[Reset navigation state](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#reset-navigation-state>)[Migrate TypeScript types](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#migrate-typescript-types>)[Additional information](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#additional-information>)[React Navigation themes](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#react-navigation-themes>)[React Navigation Elements](https://docs.expo.dev/router/migrate/from-react-navigation/</router/migrate/from-react-navigation/#react-navigation-elements>)
