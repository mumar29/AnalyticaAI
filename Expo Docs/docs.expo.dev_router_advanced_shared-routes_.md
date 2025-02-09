[](https://docs.expo.dev/router/advanced/shared-routes/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/advanced/shared-routes/</>)
[Blog](https://docs.expo.dev/router/advanced/shared-routes/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/advanced/shared-routes/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/advanced/shared-routes/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/advanced/shared-routes/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/advanced/shared-routes/</>)[Guides](https://docs.expo.dev/router/advanced/shared-routes/</guides/overview>)[EAS](https://docs.expo.dev/router/advanced/shared-routes/</eas>)[Reference](https://docs.expo.dev/router/advanced/shared-routes/</versions/latest>)[Learn](https://docs.expo.dev/router/advanced/shared-routes/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/advanced/shared-routes/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/advanced/shared-routes/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/advanced/shared-routes/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/advanced/shared-routes/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/advanced/shared-routes/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/advanced/shared-routes/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/advanced/shared-routes/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/advanced/shared-routes/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/advanced/shared-routes/</router/introduction>)[Installation](https://docs.expo.dev/router/advanced/shared-routes/</router/installation>)[Create pages](https://docs.expo.dev/router/advanced/shared-routes/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/advanced/shared-routes/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/advanced/shared-routes/</router/layouts>)[Error handling](https://docs.expo.dev/router/advanced/shared-routes/</router/error-handling>)
Navigation patterns
[Root layout](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/root-layout>)[Stack](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/stack>)[Tabs](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/tabs>)[Drawer](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/drawer>)[Nesting navigators](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/nesting-navigators>)[Modals](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/modals>)[Shared routes](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/shared-routes>)[Custom tabs](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/custom-tabs>)
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/advanced/shared-routes/</modules/overview>)[Get started](https://docs.expo.dev/router/advanced/shared-routes/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/advanced/shared-routes/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/advanced/shared-routes/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/advanced/shared-routes/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/advanced/shared-routes/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/advanced/shared-routes/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/advanced/shared-routes/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/advanced/shared-routes/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/advanced/shared-routes/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/advanced/shared-routes/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/advanced/shared-routes/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/advanced/shared-routes/</archive>)[Expo Snack](https://docs.expo.dev/router/advanced/shared-routes/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/advanced/shared-routes/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/advanced/shared-routes/<https:/expo.dev/mailing-list/signup>)
# Shared routes
[Edit this page](https://docs.expo.dev/router/advanced/shared-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/shared-routes.mdx> "Edit content of this page on GitHub")
Learn how to define shared routes or use arrays to use the same route multiple times with different layouts using Expo Router.
[Edit this page](https://docs.expo.dev/router/advanced/shared-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/shared-routes.mdx> "Edit content of this page on GitHub")
To match the same URL with different layouts, use [groups](https://docs.expo.dev/router/advanced/shared-routes/</router/layouts#groups>) with overlapping child routes. This pattern is very common in native apps. For example, in the X app, a profile can be viewed in every tab (such as home, search, and profile). However, there is only one URL that is required to access this route.
In the example below, app/_layout.tsx is the tab bar and each route has its own header. The app/(profile)/[user].tsx route is shared between each tab.
`app`
`_layout.tsx`
`(home)`
`_layout.tsx`
`[user].tsx`
`(search)`
`_layout.tsx`
`[user].tsx`
`(profile)`
`_layout.tsx`
`[user].tsx`
> When reloading the page, the first alphabetical match is rendered.
Shared routes can be navigated directly by including the group name in the route. For example, `/(search)/baconbrix` navigates to `/baconbrix` in the "search" layout.
## Arrays[](https://docs.expo.dev/router/advanced/shared-routes/<#arrays>)
> Array syntax is an advanced concept that is unique to native app development.
Instead of defining the same route multiple times with different layouts, use the array syntax `(,)` to duplicate the children of a group. For example, `app/(home,search)/[user].tsx` — creates `app/(home)/[user].tsx` and `app/(search)/[user].tsx` in memory.
To distinguish between the two routes use a layout's `segment` prop:
app/(home,search)/_layout.tsx
Copy
```
export default function DynamicLayout({ segment }) {
 if (segment === '(search)') {
  return <SearchStack />;
 }
 return <Stack />;
}

```

To enable the array syntax, specify the `initialRouteName`[](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/router-settings#initialroutename>) for each group using `unstable_settings` object in the dynamic layout:
app/(home,search)/_layout.tsx
Copy
```
export const unstable_settings = {
 initialRouteName: 'home',
 search: {
  initialRouteName: 'search',
 },
};
export default function DynamicLayout({ segment }) {
 %%placeholder-start%% ... %%placeholder-end%%
}

```

In the above example, the `home` route is the default route for the `home` group and the app. The `search` route is the default route for the `search` group.
## Key points[](https://docs.expo.dev/router/advanced/shared-routes/<#key-points>)
  * You can only provide groups for the current navigator.
  * When using the array syntax, if there are two groups (for example, `(one)/(two)`), only the last group's segment is used for matching the route.
  * If there are at least two group `initialRouteNames`, but a default `initialRouteName` is not provided, the first group's `initialRouteName` is used.


[Previous (Expo Router - Navigation patterns)Modals](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/modals>)[Next (Expo Router - Navigation patterns)Custom tabs](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/custom-tabs>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/advanced/shared-routes/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/advanced/shared-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/shared-routes.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/advanced/shared-routes/<https:/expo.dev/privacy>).
On this page
[Arrays](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/shared-routes/#arrays>)[Key points](https://docs.expo.dev/router/advanced/shared-routes/</router/advanced/shared-routes/#key-points>)
