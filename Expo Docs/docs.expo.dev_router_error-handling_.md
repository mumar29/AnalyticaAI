[](https://docs.expo.dev/router/error-handling/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/error-handling/</>)
[Blog](https://docs.expo.dev/router/error-handling/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/error-handling/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/error-handling/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/error-handling/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/error-handling/</>)[Guides](https://docs.expo.dev/router/error-handling/</guides/overview>)[EAS](https://docs.expo.dev/router/error-handling/</eas>)[Reference](https://docs.expo.dev/router/error-handling/</versions/latest>)[Learn](https://docs.expo.dev/router/error-handling/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/error-handling/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/error-handling/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/error-handling/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/error-handling/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/error-handling/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/error-handling/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/error-handling/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/error-handling/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/error-handling/</router/introduction>)[Installation](https://docs.expo.dev/router/error-handling/</router/installation>)[Create pages](https://docs.expo.dev/router/error-handling/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/error-handling/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/error-handling/</router/layouts>)[Error handling](https://docs.expo.dev/router/error-handling/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/error-handling/</modules/overview>)[Get started](https://docs.expo.dev/router/error-handling/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/error-handling/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/error-handling/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/error-handling/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/error-handling/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/error-handling/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/error-handling/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/error-handling/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/error-handling/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/error-handling/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/error-handling/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/error-handling/</archive>)[Expo Snack](https://docs.expo.dev/router/error-handling/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/error-handling/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/error-handling/<https:/expo.dev/mailing-list/signup>)
# Error handling
[Edit this page](https://docs.expo.dev/router/error-handling/<https:/github.com/expo/expo/edit/main/docs/pages/router/error-handling.mdx> "Edit content of this page on GitHub")
Learn how to handle unmatched routes and errors in your app when using Expo Router.
[Edit this page](https://docs.expo.dev/router/error-handling/<https:/github.com/expo/expo/edit/main/docs/pages/router/error-handling.mdx> "Edit content of this page on GitHub")
This guide specifies how to handle unmatched routes and errors in your app when using Expo Router.
## Unmatched routes[](https://docs.expo.dev/router/error-handling/<#unmatched-routes>)
![An example of unmatched routes displayed on all platforms.](https://docs.expo.dev/static/images/expo-router/unmatched.png)
Native apps don't have a server so there are technically no 404s. However, if you're implementing a router universally, then it makes sense to handle missing routes. This is done automatically for each app, but you can also customize it.
app/+not-found.tsx
Copy
```
import { Unmatched } from 'expo-router';
export default Unmatched;

```

This will render the default `Unmatched`. You can export any component you want to render instead. We recommend having a link to `/` so users can navigate back to the home screen.
## Error handling[](https://docs.expo.dev/router/error-handling/<#error-handling>)
Expo Router enables fine-tuned error handling to enable a more opinionated data-loading strategy in the future.
![Using ErrorBoundary in Expo Router to catch errors in a route component.](https://docs.expo.dev/static/images/expo-router/error-boundaries.png)
You can export a nested `ErrorBoundary`[](https://docs.expo.dev/router/error-handling/</versions/latest/sdk/router#errorboundary>) component from any route to intercept and format component-level errors using [React Error Boundaries](https://docs.expo.dev/router/error-handling/<https:/react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary>):
app/home.tsx
Copy
```
import { View, Text } from 'react-native';
import { type ErrorBoundaryProps } from 'expo-router';
export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
 return (
  <View style={{ flex: 1, backgroundColor: "red" }}><Text>{error.message}</Text><Text onPress={retry}>Try Again?</Text></View>
 );
}
export default function Page() { ... }

```

When you export an `ErrorBoundary` the route will be wrapped with a React Error Boundary effectively:
Virtual
Copy
```
function Route({ ErrorBoundary, Component }) {
 return (
  <Try catch={ErrorBoundary}><Component /></Try>
 );
}

```

When `ErrorBoundary` is not present, the error will be thrown to the nearest parent's `ErrorBoundary` and accepts `error`[](https://docs.expo.dev/router/error-handling/</versions/latest/sdk/router#error>) and `retry`[](https://docs.expo.dev/router/error-handling/</versions/latest/sdk/router#retry>) props.
### Work in progress[](https://docs.expo.dev/router/error-handling/<#work-in-progress>)
React Native LogBox needs to be presented less aggressively to develop with errors. Currently, it shows for `console.error` and `console.warn`. However, it should ideally only show for uncaught errors.
[Previous (Expo Router)Layout routes](https://docs.expo.dev/router/error-handling/</router/layouts>)[Next (Expo Router - Navigation patterns)Root layout](https://docs.expo.dev/router/error-handling/</router/advanced/root-layout>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/error-handling/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/error-handling/<https:/github.com/expo/expo/edit/main/docs/pages/router/error-handling.mdx>)
  * Last updated on November 25, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/error-handling/<https:/expo.dev/privacy>).
On this page
[Unmatched routes](https://docs.expo.dev/router/error-handling/</router/error-handling/#unmatched-routes>)[Error handling](https://docs.expo.dev/router/error-handling/</router/error-handling/#error-handling>)[Work in progress](https://docs.expo.dev/router/error-handling/</router/error-handling/#work-in-progress>)
