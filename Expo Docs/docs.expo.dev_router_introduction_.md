[](https://docs.expo.dev/router/introduction/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/introduction/</>)
[Blog](https://docs.expo.dev/router/introduction/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/introduction/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/introduction/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/introduction/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/introduction/</>)[Guides](https://docs.expo.dev/router/introduction/</guides/overview>)[EAS](https://docs.expo.dev/router/introduction/</eas>)[Reference](https://docs.expo.dev/router/introduction/</versions/latest>)[Learn](https://docs.expo.dev/router/introduction/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/introduction/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/introduction/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/introduction/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/introduction/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/introduction/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/introduction/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/introduction/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/introduction/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/introduction/</router/introduction>)[Installation](https://docs.expo.dev/router/introduction/</router/installation>)[Create pages](https://docs.expo.dev/router/introduction/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/introduction/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/introduction/</router/layouts>)[Error handling](https://docs.expo.dev/router/introduction/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/introduction/</modules/overview>)[Get started](https://docs.expo.dev/router/introduction/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/introduction/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/introduction/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/introduction/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/introduction/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/introduction/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/introduction/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/introduction/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/introduction/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/introduction/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/introduction/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/introduction/</archive>)[Expo Snack](https://docs.expo.dev/router/introduction/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/introduction/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/introduction/<https:/expo.dev/mailing-list/signup>)
# Introduction to Expo Router
[Edit this page](https://docs.expo.dev/router/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/router/introduction.mdx> "Edit content of this page on GitHub")
Expo Router is an open-source routing library for Universal React Native applications built with Expo.
[Edit this page](https://docs.expo.dev/router/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/router/introduction.mdx> "Edit content of this page on GitHub")
Expo Router is a file-based router for React Native and web applications. It allows you to manage navigation between screens in your app, allowing users to move seamlessly between different parts of your app's UI, using the same components on multiple platforms (Android, iOS, and web).
It brings the best file-system routing concepts from the web to a universal application — allowing your routing to work across every platform. When a file is added to the app directory, the file automatically becomes a route in your navigation.
## Features[](https://docs.expo.dev/router/introduction/<#features>)
  * Native: Built on top of our powerful [React Navigation suite](https://docs.expo.dev/router/introduction/<https:/reactnavigation.org/>), Expo Router navigation is truly native and platform-optimized by default.
  * Shareable: Every screen in your app is automatically deep linkable. Making any route in your app shareable with links.
  * Offline-first: Apps are cached and run offline-first, with automatic updates when you publish a new version. Handles all incoming native URLs without a network connection or server.
  * Optimized: Routes are automatically optimized with lazy-evaluation in production, and deferred bundling in development.
  * Iteration: Universal Fast Refresh across Android, iOS, and web, along with artifact memoization in the bundler to keep you moving fast at scale.
  * Universal: Android, iOS, and web share a unified navigation structure, with the ability to drop-down to platform-specific APIs at the route level.
  * Discoverable: Expo Router enables build-time static rendering on web, and universal linking to native. Meaning your app content can be indexed by search engines.


### Using a different navigation library[](https://docs.expo.dev/router/introduction/<#using-a-different-navigation-library>)
You can use any other navigation library, like [React Navigation](https://docs.expo.dev/router/introduction/<https:/reactnavigation.org/docs/getting-started#installation>), in your Expo project. However, if you are building a new app, we recommend using Expo Router for all the features described above. With other navigation libraries, you might have to implement your own strategies for some of these features, such as shareable links or handling web and native navigation in the same project.
If you are looking to use [React Native Navigation by Wix](https://docs.expo.dev/router/introduction/<https:/github.com/wix/react-native-navigation>), it is not available in Expo Go and is not yet compatible with `expo-dev-client`. We recommend using `createNativeStackNavigator`[](https://docs.expo.dev/router/introduction/<https:/reactnavigation.org/docs/native-stack-navigator>) from React Navigation to use Android and iOS native navigation APIs.
## Common questions[](https://docs.expo.dev/router/introduction/<#common-questions>)
Expo Router versus Expo versus React Native CLI[](https://docs.expo.dev/router/introduction/<#expo-router-versus-expo-versus-react-native>)
Historically, React Native has been non prescriptive about how apps should be built which is similar to using React without a modern web framework. Expo Router is an opinionated framework for React Native, similar to how Remix and Next.js are opinionated frameworks for web-only React.
Expo Router is designed to bring the best architectural patterns to everyone, to ensure React Native is leveraged to its fullest. For example, Expo Router's [Async Routes](https://docs.expo.dev/router/introduction/</router/reference/async-routes>) feature enables lazy bundling for everyone. Previously, lazy bundling was only used at Meta to build the Facebook app.
Can I use Expo Router in my existing React Native app?[](https://docs.expo.dev/router/introduction/<#can-i-use-expo-router-in-my>)
Yes, Expo Router is the framework for universal React Native apps. Due to the deep connection between the router and the bundler, Expo Router is only available in Expo CLI projects with Metro. Luckily, you can [use Expo CLI in any React Native project](https://docs.expo.dev/router/introduction/</bare/using-expo-cli>) too!
What are the benefits of file-based routing?[](https://docs.expo.dev/router/introduction/<#what-are-the-benefits-of-file-based-routing>)
  * The file system is a well-known and well-understood concept. The simpler mental model makes it easier to educate new team members and scale your application.
  * The fastest way to onboard new users is by having them open a universal link that opens the app or website to the correct screen depending on if they have the app installed or not. This technique is so advanced that it's usually only available to large companies that can afford to make and maintain the parity between platforms. But with Expo's file-based routing, you can have this feature out of the box!
  * Refactoring is easier to do because you can move files around without having to update any imports or routing components.
  * Expo Router has the ability to statically type routes automatically. This ensures you can only link to valid routes and that you can't link to a route that doesn't exist. Typed Routes also improve refactoring as you'll get type errors if links are broken.
  * Async Routes (bundle splitting) improve development speed, especially in larger projects. They also make upgrades easier as errors are isolated to a single route, meaning you can incrementally update or refactor your app page-by-page rather than all at once (traditional React Native).
  * Deep links always work, for every page. This makes it possible to share links to any content in the app, which is great for promoting your app, collecting bug reports, E2E testing, automating screenshots, and so on.
  * Expo Head uses automatic links to enable deep-native integration. Features like Quick Notes, Handoff, Siri context, and universal links only require configuration setup, no code changes. This enables perfect vertical integration with the entire ecosystem of smart devices that a user has, leading to the types of user experiences that are only possible with universal apps (web ⇄ native).
  * Expo Router has the ability to statically render each page automatically on the web, enabling real SEO and full discoverability of your app's content. This is only possible because of the file-based convention.
  * Expo CLI can infer a lot of information about your application when it follows a known convention. For example, we could implement automatic bundle splitting per route, or automatically generate a sitemap for your website. This is impossible when your app only has a single entry point.
  * Re-engagement features like notifications and home screen widgets are easier to integrate as you can simply intercept the launch and deep link, with query parameters, anywhere in the app.
  * Like on the web, analytics and error reporting can easily be configured to automatically include the route name, which is useful for debugging and understanding user behavior.


Why should I use Expo Router over React Navigation?[](https://docs.expo.dev/router/introduction/<#why-should-i-use-expo-router-over>)
Expo Router and React Navigation are both libraries from the Expo team. We built Expo Router on top of React Navigation to enable the benefits of file-based routing. Expo Router is a superset of React Navigation, meaning you can use any React Navigation components and APIs with Expo Router.
If file-based routing isn't right for your project, you can drop down to React Navigation and set up routes, types, and links manually.
How do I server-render my Expo Router website?[](https://docs.expo.dev/router/introduction/<#how-do-i-server-render-my-expo-router>)
Basic static rendering (SSG) is supported in Expo Router. Server-side rendering currently requires custom infrastructure to set up.
## Next steps[](https://docs.expo.dev/router/introduction/<#next-steps>)
[Quick startLearn how to quickly get started using Expo Router.](https://docs.expo.dev/router/introduction/</router/installation#quick-start>) [Manual installationDetailed instructions on how to get started and add Expo Router to your existing app.](https://docs.expo.dev/router/introduction/</router/installation#manual-installation>) [Example appSee the source code for the example app on GitHub.](https://docs.expo.dev/router/introduction/<https:/github.com/expo/expo/tree/main/templates/expo-template-tabs>)
[Previous (Development process - Reference)React Compiler](https://docs.expo.dev/router/introduction/</guides/react-compiler>)[Next (Expo Router)Installation](https://docs.expo.dev/router/introduction/</router/installation>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/introduction/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/introduction/<https:/github.com/expo/expo/edit/main/docs/pages/router/introduction.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/introduction/<https:/expo.dev/privacy>).
