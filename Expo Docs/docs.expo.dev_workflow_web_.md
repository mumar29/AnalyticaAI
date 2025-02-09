[](https://docs.expo.dev/workflow/web/<https:/expo.dev>)[Docs](https://docs.expo.dev/workflow/web/</>)
[Blog](https://docs.expo.dev/workflow/web/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/workflow/web/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/workflow/web/<https:/github.com/expo/expo>)[](https://docs.expo.dev/workflow/web/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/workflow/web/</>)[Guides](https://docs.expo.dev/workflow/web/</guides/overview>)[EAS](https://docs.expo.dev/workflow/web/</eas>)[Reference](https://docs.expo.dev/workflow/web/</versions/latest>)[Learn](https://docs.expo.dev/workflow/web/</tutorial/overview>)
[Overview](https://docs.expo.dev/workflow/web/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/workflow/web/</workflow/overview>)[Configure with app config](https://docs.expo.dev/workflow/web/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/workflow/web/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/workflow/web/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/workflow/web/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/workflow/web/</guides/permissions>)[Environment variables](https://docs.expo.dev/workflow/web/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
[Develop websites](https://docs.expo.dev/workflow/web/</workflow/web>)[Publish websites](https://docs.expo.dev/workflow/web/</guides/publishing-websites>)[DOM components](https://docs.expo.dev/workflow/web/</guides/dom-components>)[Progressive web apps](https://docs.expo.dev/workflow/web/</guides/progressive-web-apps>)[Tailwind CSS](https://docs.expo.dev/workflow/web/</guides/tailwind>)
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/workflow/web/</router/introduction>)[Installation](https://docs.expo.dev/workflow/web/</router/installation>)[Create pages](https://docs.expo.dev/workflow/web/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/workflow/web/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/workflow/web/</router/layouts>)[Error handling](https://docs.expo.dev/workflow/web/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/workflow/web/</modules/overview>)[Get started](https://docs.expo.dev/workflow/web/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/workflow/web/</push-notifications/overview>)[About notification types](https://docs.expo.dev/workflow/web/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/workflow/web/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/workflow/web/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/workflow/web/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/workflow/web/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/workflow/web/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/workflow/web/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/workflow/web/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/workflow/web/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/workflow/web/</archive>)[Expo Snack](https://docs.expo.dev/workflow/web/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/workflow/web/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/workflow/web/<https:/expo.dev/mailing-list/signup>)
# Develop websites with Expo
[Edit this page](https://docs.expo.dev/workflow/web/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/web.mdx> "Edit content of this page on GitHub")
Learn how to develop your app for the web so you can build a universal app.
[Edit this page](https://docs.expo.dev/workflow/web/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/web.mdx> "Edit content of this page on GitHub")
Expo has first-class support for building full-stack websites with React. Expo websites can be [statically rendered](https://docs.expo.dev/workflow/web/</router/reference/static-rendering>) for SEO and performance, or client-rendered for a more app-like experience in the browser.
Universal
Web-only
Render text on any platform with the `<Text>` component from [React Native for web](https://docs.expo.dev/workflow/web/<https:/github.com/necolas/react-native-web>).
app/index.js
Copy
```
import { Text } from 'react-native';
export default function Page() {
 return <Text>Home page</Text>;
}

```

React Native for web (RNW) is a set of component libraries such as `<View>`, and `<Text>`, that wrap `react-dom` primitives such as `<div>`, `<p>`, and `<img>`. RNW is optional when developing for web since you can use React DOM directly, but we often recommended it when building across platforms as it maximizes code reuse.
> React Native for web is used to power the entire [X](https://docs.expo.dev/workflow/web/<https:/x.com/>) website.
Alternatively, you can write web-only React DOM components such as `<div>`, `<p>`, and so on, however, these components won't render on native platforms.
app/index.js
Copy
```
export default function Page() {
 return <p>Home page</p>;
}

```

Building web-only components is fully supported by Expo, however, you may want to organize your code to better support building for both web and native platforms simultaneously. Learn more in [platform-specific modules](https://docs.expo.dev/workflow/web/</router/advanced/platform-specific-modules>).
All of the libraries in the Expo SDK are built to support both browser and server rendering environments (when applicable). Libraries are also optimized for the individual platforms they target.
Development features like Fast Refresh, debugging, environment variables, and [bundling](https://docs.expo.dev/workflow/web/</guides/customizing-metro>) are also fully universal, enabling a unified developer experience. Expo CLI automatically optimizes code for individual platforms when you build for production, using techniques like [platform shaking](https://docs.expo.dev/workflow/web/</guides/tree-shaking#platform-shaking>).
## Getting started[](https://docs.expo.dev/workflow/web/<#getting-started>)
### Install web dependencies[](https://docs.expo.dev/workflow/web/<#install-web-dependencies>)
Terminal
Copy
`- ``npx expo install react-dom react-native-web @expo/metro-runtime`
Not using the `expo` package in your app yet?[](https://docs.expo.dev/workflow/web/<#not-using-the-expo-package-in-your>)
If you haven't added Expo to your React Native app yet, you can either [install Expo modules](https://docs.expo.dev/workflow/web/</bare/installing-expo-modules>) (recommended) or just install the `expo` package and configure the app entry file. This will allow you to target web, but it will not include support for the Expo SDK.
  1. Install [Expo CLI](https://docs.expo.dev/workflow/web/</more/expo-cli>) in your project:


Terminal
Copy
`- ``npm install expo`
  1. Modify the entry file to use `registerRootComponent`[](https://docs.expo.dev/workflow/web/</versions/latest/sdk/register-root-component#registerrootcomponentcomponent>) instead of `AppRegistry.registerComponent`:

```
+ import {registerRootComponent} from 'expo';

import App from './App';
- import {AppRegistry} from 'react-native';
- import {name as appName} from './app.json';

- AppRegistry.registerComponent(appName, () => App);
+ registerRootComponent(App);

```

### Start the dev server[](https://docs.expo.dev/workflow/web/<#start-the-dev-server>)
You can now start the dev server and develop in the browser with:
Terminal
Copy
`- ``npx expo start --web`
The app can be exported as a production website with:
Terminal
Copy
`- ``npx expo export --platform web`
## Next[](https://docs.expo.dev/workflow/web/<#next>)
[File-based routingBuild routes and navigation with Expo Router.](https://docs.expo.dev/workflow/web/</router/introduction>) [Static rendering and SEORender your website as static HTML with Expo Router to improve SEO and performance.](https://docs.expo.dev/workflow/web/</router/reference/static-rendering>) [Deploy instantly with EAS HostingEAS Hosting is the best way to deploy your Expo Router and React Native web apps with support for custom domains, SSL, and more.](https://docs.expo.dev/workflow/web/</eas/hosting/get-started>) [Customizing the JavaScript bundlerCustomize Metro bundler for your project.](https://docs.expo.dev/workflow/web/</guides/customizing-metro>)
[Previous (Development process - Local app)Production](https://docs.expo.dev/workflow/web/</guides/local-app-production>)[Next (Development process - Web)Publish websites](https://docs.expo.dev/workflow/web/</guides/publishing-websites>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/workflow/web/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/workflow/web/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/web.mdx>)
  * Last updated on January 21, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/workflow/web/<https:/expo.dev/privacy>).
