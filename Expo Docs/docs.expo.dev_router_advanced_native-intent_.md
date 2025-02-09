[](https://docs.expo.dev/router/advanced/native-intent/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/advanced/native-intent/</>)
[Blog](https://docs.expo.dev/router/advanced/native-intent/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/advanced/native-intent/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/advanced/native-intent/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/advanced/native-intent/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/advanced/native-intent/</>)[Guides](https://docs.expo.dev/router/advanced/native-intent/</guides/overview>)[EAS](https://docs.expo.dev/router/advanced/native-intent/</eas>)[Reference](https://docs.expo.dev/router/advanced/native-intent/</versions/latest>)[Learn](https://docs.expo.dev/router/advanced/native-intent/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/advanced/native-intent/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/advanced/native-intent/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/advanced/native-intent/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/advanced/native-intent/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/advanced/native-intent/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/advanced/native-intent/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/advanced/native-intent/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/advanced/native-intent/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/advanced/native-intent/</router/introduction>)[Installation](https://docs.expo.dev/router/advanced/native-intent/</router/installation>)[Create pages](https://docs.expo.dev/router/advanced/native-intent/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/advanced/native-intent/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/advanced/native-intent/</router/layouts>)[Error handling](https://docs.expo.dev/router/advanced/native-intent/</router/error-handling>)
Navigation patterns
Advanced
[Platform-specific Modules](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/platform-specific-modules>)[Customizing links](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent>)[Settings](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/router-settings>)[Apple Handoff](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/apple-handoff>)
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/advanced/native-intent/</modules/overview>)[Get started](https://docs.expo.dev/router/advanced/native-intent/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/advanced/native-intent/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/advanced/native-intent/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/advanced/native-intent/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/advanced/native-intent/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/advanced/native-intent/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/advanced/native-intent/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/advanced/native-intent/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/advanced/native-intent/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/advanced/native-intent/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/advanced/native-intent/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/advanced/native-intent/</archive>)[Expo Snack](https://docs.expo.dev/router/advanced/native-intent/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/advanced/native-intent/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/advanced/native-intent/<https:/expo.dev/mailing-list/signup>)
# Customizing links
[Edit this page](https://docs.expo.dev/router/advanced/native-intent/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/native-intent.mdx> "Edit content of this page on GitHub")
Learn how to perform link redirection and utilize third-party deep links with +native-intent when using Expo Router.
[Edit this page](https://docs.expo.dev/router/advanced/native-intent/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/native-intent.mdx> "Edit content of this page on GitHub")
Expo Router uses an extended version of web standards to navigate through an app. However, native apps do not always conform to server-based routing. This can lead to misalignment when integrating any third-party service. For example, apps can be launched with arbitrary strings or intent objects instead of URLs. There are two common scenarios where you may need to customize a link:
  * App Closed: When the app is not open, incoming deep-link URLs may require rewriting to ensure seamless navigation.
  * App Open: When the app is already open, URL customization may be necessary based on specific business logic or user interactions. This logic can be global for the entire app, or localized to a set of routes.


## Setup linking[](https://docs.expo.dev/router/advanced/native-intent/<#setup-linking>)
See the [Linking into your app](https://docs.expo.dev/router/advanced/native-intent/</linking/into-your-app>) guide for instructions on how to set up and test linking in your app.
## Rewrite incoming native deep links[](https://docs.expo.dev/router/advanced/native-intent/<#rewrite-incoming-native-deep-links>)
Expo Router will always evaluate a URL with the assumption that the URL targets a specific page within the app. However, in practice, these URLs can vary in nature:
  * Unique/Referred URLs from third-party providers: These URLs often follow a specific schema, such as `<my-scheme>://<provider-hostname>/<uuid>`, and are generated by external sources to navigate users to designated content within the app.
  * Stale URLs from previous versions: App users might encounter URLs from older versions of the app, which could lead to outdated or non-existent content. It's crucial to handle such scenarios gracefully to ensure a smooth user experience.


In such scenarios, the URL needs to be rewritten to correctly target a route.
To facilitate this, create a special file called +native-intent.tsx at the top level of your project's app directory. This file exports a special `redirectSystemPath`[](https://docs.expo.dev/router/advanced/native-intent/</versions/latest/sdk/router#nativeintent>) method designed to handle URL/path processing. When invoked, it receives an `options` object with two attributes: `path` and `initial`.
`app`
`+native-intent.tsx`
Here's an example the applies practices on how `redirectSystemPath` is used inside +native-intent.tsx file. Following this example, you can ensure the stability and reliability of your app's URL processing functionality and mitigate the risk of unexpected errors and crashes.
app/+native-intent.tsx
Copy
```
import ThirdPartyService from 'third-party-sdk';
export function redirectSystemPath({ path, initial }) {
 try {
  if (initial) {
   // While the parameter is called `path` there is no guarantee that this is a path or a valid URL
   const url = new URL(path, 'myapp://app.home');
   // Detection of third-party URLs will change based on the provider
   if (url.hostname === '<third-party-provider-hostname>') {
    return ThirdPartyService.processReferringUrl(url).catch(() => {
     // Something went wrong
     return '/unexpected-error';
    });
   }
   return path;
  }
  return path;
 } catch {
  // Do not crash inside this function! Instead you should redirect users
  // to a custom route to handle unexpected errors, where they are able to report the incident
  return '/unexpected-error';
 }
}

Show More

```

## Rewrite incoming web deep-links[](https://docs.expo.dev/router/advanced/native-intent/<#rewrite-incoming-web-deep-links>)
Handling deep links on the web differs from native platforms, as the initial routing process occurs differently. Expo Router cannot provide a direct counterpart to `+native-intent` for web, as web routing is resolved before the website's JavaScript is executed and will differ based upon deployment output and your chosen provider.
As a result, you should implement one of the following patterns that best suits your requirements:
  * Server Redirect: Since all websites, including static pages, are hosted on a server, consider leveraging server-side redirection or middleware options provided by your deployment provider. This approach is well-suited for deployments targeting server or static outputs.
  * Client Redirect: Alternatively, you can manage URL redirects within your app's root `_layout`. This approach is ideal for projects with a single output format targeting client-side rendering.


Choose the pattern that aligns with your deployment strategy and technical requirements to ensure seamless handling of incoming deep links on the web platform.
## Rewrite URLs[](https://docs.expo.dev/router/advanced/native-intent/<#rewrite-urls>)
While your app is open, you can react to URL changes within your `_layout` files using the `usePathname()` hook. The location of the `_layout` dictates the scope of the subscription.
  * global: Add the logic to your root `_layout` file
  * localized: Add a `_layout` file to an existing directory (or create a new [group directory](https://docs.expo.dev/router/advanced/native-intent/</router/layouts#groups>))


app/_layout.tsx
Copy
```
import { Slot, Redirect } from 'expo-router';
export default function RootLayout() {
 const pathname = usePathname();
 if (pathname && !isUserAllowed(pathname)) {
  return <Redirect href="/home" />;
 }
 return <Slot />;
}

```

### Using `redirectSystemPath`[](https://docs.expo.dev/router/advanced/native-intent/<#using-redirectsystempath>)
In native apps, an alternative way to rewrite a URL is to handle it within the `redirectSystemPath`[](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent#redirectsystempath>) method. This approach can be simpler for some use cases but comes with certain drawbacks:
  * Native-only: This method will not work on the web, as `+native-intent` is only available in native apps.
  * Lacks context: `+native-intent` is processed outside the context of your app. This means you won't have access to additional logic, such as user authentication status or the current route's state.


## Sending navigation events to third-party services[](https://docs.expo.dev/router/advanced/native-intent/<#sending-navigation-events-to-third-party-services>)
Below is a basic example of how to send navigation events to an external service, such as an analytics or logging service. Consult with your provider for specific instructions.
app/_layout.tsx
Copy
```
import ThirdPartyService from 'third-party-sdk';
import { Slot, usePathname } from 'expo-router';
const thirdParty = new ThirdPartyService();
export default function RootLayout() {
 const pathname = usePathname();
 // Perform the service initiation logic
 useEffect(() => {
  thirdParty.register();
  return () => {
   thirdParty.deregister();
  };
 }, [thirdParty]);
 // Send pathname changes to the third party
 useEffect(() => {
  thirdParty.sendEvent({ pathname });
 }, [pathname]);
 return <Slot />;
}

Show More

```

## Universal Links and multiple domains[](https://docs.expo.dev/router/advanced/native-intent/<#universal-links-and-multiple-domains>)
Expo Router does not require additional configuration for Universal Links and multiple domains. All URLs provided to your App will be evaluated. To customize the URL scheme(s) for your app, your should [customize the `scheme` value in your app config](https://docs.expo.dev/router/advanced/native-intent/</versions/latest/config/app#scheme>).
## Forcing web links[](https://docs.expo.dev/router/advanced/native-intent/<#forcing-web-links>)
If you want a URL to be initially evaluated by the user's browser, write the address as a Fully Qualified URL (FQDN) with an `http`/`https` scheme. Using a complete URL ensures that the link is interpreted as a web URL and opened in the user's browser by default.
This approach is effective for directing users to external websites or Universal Links for other apps.
```
<Link href="https://my-website.com/router/introduction" />

```

## `legacy_subscribe`[](https://docs.expo.dev/router/advanced/native-intent/<#legacy_subscribe>)
> `legacy_subscribe` is experimentally available in SDK 52.
If you're using a third-party provider that doesn't support Expo Router but does support React Navigation via the `Linking.subscribe` function for existing projects, you can use `legacy_subscribe` as an alternative API.
Using this API is not recommended for new projects or integrations. Its usage is incompatible with Server Side Routing and [Static Rendering](https://docs.expo.dev/router/advanced/native-intent/</router/reference/static-rendering>), and can be challenging to manage while offline or in a low network connectivity environment.
[Previous (Expo Router - Advanced)Platform-specific Modules](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/platform-specific-modules>)[Next (Expo Router - Advanced)Settings](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/router-settings>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/advanced/native-intent/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/advanced/native-intent/<https:/github.com/expo/expo/edit/main/docs/pages/router/advanced/native-intent.mdx>)
  * Last updated on November 25, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/advanced/native-intent/<https:/expo.dev/privacy>).
On this page
[Setup linking](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent/#setup-linking>)[Rewrite incoming native deep links](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent/#rewrite-incoming-native-deep-links>)[Rewrite incoming web deep-links](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent/#rewrite-incoming-web-deep-links>)[Rewrite URLs](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent/#rewrite-urls>)[Using redirectSystemPath](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent/#using-redirectsystempath>)[Sending navigation events to third-party services](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent/#sending-navigation-events-to-third-party-services>)[Universal Links and multiple domains](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent/#universal-links-and-multiple-domains>)[Forcing web links](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent/#forcing-web-links>)[legacy_subscribe](https://docs.expo.dev/router/advanced/native-intent/</router/advanced/native-intent/#legacy_subscribe>)
