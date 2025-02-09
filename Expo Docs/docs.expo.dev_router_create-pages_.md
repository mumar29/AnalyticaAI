[](https://docs.expo.dev/router/create-pages/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/create-pages/</>)
[Blog](https://docs.expo.dev/router/create-pages/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/create-pages/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/create-pages/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/create-pages/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/create-pages/</>)[Guides](https://docs.expo.dev/router/create-pages/</guides/overview>)[EAS](https://docs.expo.dev/router/create-pages/</eas>)[Reference](https://docs.expo.dev/router/create-pages/</versions/latest>)[Learn](https://docs.expo.dev/router/create-pages/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/create-pages/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/create-pages/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/create-pages/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/create-pages/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/create-pages/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/create-pages/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/create-pages/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/create-pages/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/create-pages/</router/introduction>)[Installation](https://docs.expo.dev/router/create-pages/</router/installation>)[Create pages](https://docs.expo.dev/router/create-pages/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/create-pages/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/create-pages/</router/layouts>)[Error handling](https://docs.expo.dev/router/create-pages/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/create-pages/</modules/overview>)[Get started](https://docs.expo.dev/router/create-pages/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/create-pages/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/create-pages/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/create-pages/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/create-pages/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/create-pages/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/create-pages/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/create-pages/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/create-pages/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/create-pages/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/create-pages/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/create-pages/</archive>)[Expo Snack](https://docs.expo.dev/router/create-pages/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/create-pages/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/create-pages/<https:/expo.dev/mailing-list/signup>)
# Create pages with Expo Router
[Edit this page](https://docs.expo.dev/router/create-pages/<https:/github.com/expo/expo/edit/main/docs/pages/router/create-pages.mdx> "Edit content of this page on GitHub")
Learn about the file-based routing convention used by Expo Router.
[Edit this page](https://docs.expo.dev/router/create-pages/<https:/github.com/expo/expo/edit/main/docs/pages/router/create-pages.mdx> "Edit content of this page on GitHub")
When a file is created in the app directory, it automatically becomes a route in the app. For example, the following files will create the following routes:
`app`
`index.tsx``matches '/'`
`home.tsx``matches '/home'`
`[user].tsx``matches dynamic paths like '/expo' or '/evanbacon'`
`settings`
`index.tsx``matches '/settings'`
## Pages[](https://docs.expo.dev/router/create-pages/<#pages>)
Pages are defined by exporting a React component as the default value from a file in the app directory. The file they are exported from must use one of the `.js`, `.jsx`, `.tsx`, `.ts` extensions.
For example, create the app directory in your project and then create a file index.tsx inside it. Then, add the following snippet:
Universal
Web-only
Render text on any platform with the `<Text>` component from React Native.
app/index.tsx
Copy
```
import { Text } from 'react-native';
export default function Page() {
 return <Text>Top-level page</Text>;
}

```

Alternatively, you can write web-only React components such as `<div>`, `<p>`, and so on. However, these won't render on native platforms.
app/index.tsx
Copy
```
export default function Page() {
 return <p>Top-level page</p>;
}

```

The above example matches the `/` route in the app and the browser. Files named index match the parent directory and do not add a path segment. For example, app/settings/index.tsx matches `/settings` in the app.
## Platform specific extensions[](https://docs.expo.dev/router/create-pages/<#platform-specific-extensions>)
> Platform-specific extensions were added in Expo Router `3.5.x`. If you are using an older version of the library, follow instructions from [Platform-specific modules](https://docs.expo.dev/router/create-pages/</router/advanced/platform-specific-modules>).
Metro bundler's platform-specific extensions (for example, .ios.tsx or .native.tsx) are supported in the app directory only if a non-platform version also exists. This ensures that routes are universal across platforms for deep linking.
Consider the following project structure:
`app`
`_layout.tsx`
`_layout.web.tsx`
`index.tsx`
`about.tsx`
`about.web.tsx`
In the above file structure:
  * _layout.web.tsx file is used as a layout on the web and _layout.tsx is used on all other platforms.
  * index.tsx file is used as the home page for all platforms.
  * about.web.tsx file is used as the about page for the web, and the about.tsx file is used on all other platforms.


> Providing a route file without a platform-specific extension is required to ensure every platform has a default implementation.
## Dynamic routes[](https://docs.expo.dev/router/create-pages/<#dynamic-routes>)
Dynamic routes match any unmatched path at a given segment level.
Route| Matched URL  
---|---  
app/blog/[slug].tsx| `/blog/123`  
app/blog/[...rest].tsx| `/blog/123/settings`  
Routes with higher specificity will be matched before a dynamic route. For example, `/blog/bacon` will match blog/bacon.tsx before blog/[id].tsx.
Multiple slugs can be matched in a single route by using the rest syntax (`...`). For example, app/blog/[...id].tsx matches `/blog/123/settings`.
Dynamic segments are accessible as [route parameters](https://docs.expo.dev/router/create-pages/</router/reference/url-parameters>) in the page component.
app/blog/[slug].tsx
Copy
```
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
export default function Page() {
 const { slug } = useLocalSearchParams();
 return <Text>Blog post: {slug}</Text>;
}

```

## Non-route files[](https://docs.expo.dev/router/create-pages/<#non-route-files>)
Every file and sub-directory inside the app directory is either a `_layout` file or a route in your app. Other files, such as components, hooks, utilities, and so on, cannot be placed in the app directory because they are neither screens nor layout files.
`app`
`(home)`
`_layout.tsx`
`profile.tsx``/profile`
`(modal)`
`_layout.tsx`
`profile.tsx``/profile`
The above example uses [shared routes](https://docs.expo.dev/router/create-pages/</router/advanced/shared-routes>) for the `/profile` route inside two sub-directories. If you want to create a non-route file (for example, ProfileImageComponent.tsx), finding the correct sub-directory to place this file creates a dilemma since there are two route directories. This is "why" Expo Router does not allow non-route files to exist with route files inside the app directory because it leads to an unstructured project.
### Recommended structure[](https://docs.expo.dev/router/create-pages/<#recommended-structure>)
Expo Router recommends sorting components and hooks by "feature" and routes by "navigation pattern". While the two concepts can overlap, there are enough differences to structure them differently. Additionally, routes will inevitably change. However, components generally stay within the same feature set. Keeping routes separate will simplify your refactors.
`app`
`sign-in`
`sign-out`
`profile`
`tasks`
`components`
`authentication`
`tasks`
`overview`
`profile`
`[user]`
In the above example, both `/sign-in` and `/sign-out` are authentication routes and share components from the components/authentication file. However, the `/profile/[user]` route is complex and renders components that belong to the authentication, profile, and task features. If you place your components within the app directory, it's not obvious where these components belong. By separating components from routes, you create an organized hierarchy with the philosophy that a route is a collection of reusable components, and a component does not belong to an individual route.
Another project optimization is to utilize [path aliases](https://docs.expo.dev/router/create-pages/</guides/typescript#path-aliases-optional>). They keep your routes project structure agnostic, as imports within your routes no longer depend on the app directory structure. This avoids large `import` statement changes when adding new directories (such as new groups) and prevents lengthy `import` paths.
### Reserved keywords[](https://docs.expo.dev/router/create-pages/<#reserved-keywords>)
Expo Router is built on top of [React Navigation](https://docs.expo.dev/router/create-pages/<https:/reactnavigation.org/>), which imposes certain restrictions on the naming of screen parameters. As a result, the following words cannot be used as dynamic route parameters in Expo Router:
  * `screen`
  * `params`
  * `key`


[Previous (Expo Router)Installation](https://docs.expo.dev/router/create-pages/</router/installation>)[Next (Expo Router)Navigate between pages](https://docs.expo.dev/router/create-pages/</router/navigating-pages>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/create-pages/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/create-pages/<https:/github.com/expo/expo/edit/main/docs/pages/router/create-pages.mdx>)
  * Last updated on December 20, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/create-pages/<https:/expo.dev/privacy>).
On this page
[Pages](https://docs.expo.dev/router/create-pages/</router/create-pages/#pages>)[Platform specific extensions](https://docs.expo.dev/router/create-pages/</router/create-pages/#platform-specific-extensions>)[Dynamic routes](https://docs.expo.dev/router/create-pages/</router/create-pages/#dynamic-routes>)[Non-route files](https://docs.expo.dev/router/create-pages/</router/create-pages/#non-route-files>)[Recommended structure](https://docs.expo.dev/router/create-pages/</router/create-pages/#recommended-structure>)[Reserved keywords](https://docs.expo.dev/router/create-pages/</router/create-pages/#reserved-keywords>)
