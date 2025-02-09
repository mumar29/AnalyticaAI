[](https://docs.expo.dev/guides/why-metro/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/why-metro/</>)
[Blog](https://docs.expo.dev/guides/why-metro/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/why-metro/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/why-metro/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/why-metro/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/why-metro/</>)[Guides](https://docs.expo.dev/guides/why-metro/</guides/overview>)[EAS](https://docs.expo.dev/guides/why-metro/</eas>)[Reference](https://docs.expo.dev/guides/why-metro/</versions/latest>)[Learn](https://docs.expo.dev/guides/why-metro/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/why-metro/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/why-metro/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/why-metro/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/why-metro/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/why-metro/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/why-metro/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/why-metro/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/why-metro/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
[Bundle with Metro](https://docs.expo.dev/guides/why-metro/</guides/customizing-metro>)[Analyzing JavaScript bundles](https://docs.expo.dev/guides/why-metro/</guides/analyzing-bundles>)[Tree shaking](https://docs.expo.dev/guides/why-metro/</guides/tree-shaking>)[Minification](https://docs.expo.dev/guides/why-metro/</guides/minify>)[Why Metro?](https://docs.expo.dev/guides/why-metro/</guides/why-metro>)
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/why-metro/</router/introduction>)[Installation](https://docs.expo.dev/guides/why-metro/</router/installation>)[Create pages](https://docs.expo.dev/guides/why-metro/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/why-metro/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/why-metro/</router/layouts>)[Error handling](https://docs.expo.dev/guides/why-metro/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/why-metro/</modules/overview>)[Get started](https://docs.expo.dev/guides/why-metro/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/why-metro/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/why-metro/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/why-metro/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/why-metro/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/why-metro/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/why-metro/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/why-metro/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/why-metro/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/why-metro/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/why-metro/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/why-metro/</archive>)[Expo Snack](https://docs.expo.dev/guides/why-metro/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/why-metro/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/why-metro/<https:/expo.dev/mailing-list/signup>)
# Why Metro?
[Edit this page](https://docs.expo.dev/guides/why-metro/<https:/github.com/expo/expo/edit/main/docs/pages/guides/why-metro.mdx> "Edit content of this page on GitHub")
Learn why Metro is the future of universal bundling in React Native and how it benefits developers.
[Edit this page](https://docs.expo.dev/guides/why-metro/<https:/github.com/expo/expo/edit/main/docs/pages/guides/why-metro.mdx> "Edit content of this page on GitHub")
[Metro](https://docs.expo.dev/guides/why-metro/<https:/metrobundler.dev/>) is the official bundler for Expo and React Native. It's a central build tool in the Expo framework. Bundlers comprise thousands of opinions and trade-offs. This document outlines the key reasons why Expo is developed around Metro and how it benefits developers.
## Official Meta bundler[](https://docs.expo.dev/guides/why-metro/<#official-meta-bundler>)
Metro is maintained by Meta, the maintainers of React, React Native, Yoga, and Hermes. It's used for developing some of the world's largest apps, ranging across all categories in the app stores.
Meta engineers actively develop Metro with the express requirement of bundling all their apps, across 400k+ source files, while remaining fast and reliable.
By having first-class Metro support, we ensure Expo developers have continuity across Meta's tools and get instant access to emerging features. This includes:
  * React Fast Refresh was [first introduced](https://docs.expo.dev/guides/why-metro/<https:/reactnative.dev/blog/2019/09/18/version-0.61>) as a Metro feature in 2019. The React web community adopted it the following year via Webpack.
  * Transforming JavaScript to Hermes bytecode for instant native startup.
  * React Native DevTools, including first-class support for [network and JS debugging](https://docs.expo.dev/guides/why-metro/</debugging/tools#debugging-with-chrome-devtools>), is exclusively available with Metro and Hermes.
  * React Compiler was initially rolled out as a Metro-compatible Babel plugin.


New and upcoming features that are planned to come to Metro include:
  * Compiling Flow code to native machine code with Static Hermes. Learn more in the [Static Hermes](https://docs.expo.dev/guides/why-metro/<https:/www.youtube.com/watch?v=GUM64b-gAGg>) talk by Tzvetan Mikov.
  * Data fetching, streaming, React Suspense, server rendering, and build-time static rendering with universal React Server Components for all platforms. Learn more in the [Universal React Server Components](https://docs.expo.dev/guides/why-metro/<https:/www.youtube.com/watch?v=djhEgxQf3Kw>) talk at React Conf 2024.


The Expo team collaborates with Meta to develop Metro for Expo Router, adding features like [file-based routing](https://docs.expo.dev/guides/why-metro/</develop/file-based-routing>), [web support](https://docs.expo.dev/guides/why-metro/</guides/customizing-metro#web-support>), [bundle splitting](https://docs.expo.dev/guides/why-metro/</guides/customizing-metro#bundle-splitting>), [tree shaking](https://docs.expo.dev/guides/why-metro/</guides/tree-shaking>), [CSS](https://docs.expo.dev/guides/why-metro/</versions/latest/config/metro#css>), [DOM components](https://docs.expo.dev/guides/why-metro/</guides/dom-components>), server components, and [API routes](https://docs.expo.dev/guides/why-metro/</router/reference/api-routes>).
## Battle-tested at scale[](https://docs.expo.dev/guides/why-metro/<#battle-tested-at-scale>)
Nearly every React Native app in the world uses Metro, making it a battle-tested solution optimized for large-scale projects. This makes it suitable for developers of all sizes, from hobbyists to large companies. Metro is designed specifically to handle large-scale Meta apps, which is why it has features such as native file watching with Watchman and [shared remote caches](https://docs.expo.dev/guides/why-metro/<https:/metrobundler.dev/docs/caching>).
## On-demand processing[](https://docs.expo.dev/guides/why-metro/<#on-demand-processing>)
In development, Metro doesn't perform any platform-specific work until requested. This allows developers to work on large projects without paying a performance cost for the number of platforms they support. In conjunction with aggressive caching and [async routes](https://docs.expo.dev/guides/why-metro/</router/reference/async-routes>), developers can incrementally bundle only the parts of the app that they're actively working on.
## Multi-dimensional[](https://docs.expo.dev/guides/why-metro/<#multi-dimensional>)
Unlike traditional bundlers, which create multiple instances to bundle server and client code, Metro maximizes resource reuse across platforms and environments (server, client, DOM components). This architecture is ideal for multiplatform and server development.
## Reusable transform memoization[](https://docs.expo.dev/guides/why-metro/<#reusable-transform-memoization>)
Metro is incremental and can create cached transform artifacts that can be used across machines. This enables large teams to reuse work from remote builders, a technique used at Meta for all large projects.
## Optimized for custom runtimes[](https://docs.expo.dev/guides/why-metro/<#optimized-for-custom-runtimes>)
While other bundlers are designed around the static specification of web browsers, Metro is optimized for the flexibility of React Native. This enables features like generating the specific set of supported language features required for Hermes bytecode compilation which enables faster app startup in production. This will also extend to Static Hermes, which will compile static type information into machine code for native apps.
## Cross-technology support[](https://docs.expo.dev/guides/why-metro/<#cross-technology-support>)
Expo leverages Metro's technology to create novel functionality like [DOM components](https://docs.expo.dev/guides/why-metro/</guides/dom-components>). This allows a React component in a native app to be dynamically bundled as an entire website with all the same defaults as the parent app, on-demand.
## Native asset exports[](https://docs.expo.dev/guides/why-metro/<#native-asset-exports>)
Unlike traditional bundlers, where the end result is a fully hosted app, Metro's configuration options support exporting bundles to embed as native artifacts in standalone app binaries. This leverages OS-specific optimizations such as `xcassets` on Apple platforms.
## Concurrent processing[](https://docs.expo.dev/guides/why-metro/<#concurrent-processing>)
All AST transformation in Metro is performed concurrently across all available threads, maximizing the use of hardware.
## Comparison with other approaches[](https://docs.expo.dev/guides/why-metro/<#comparison-with-other-approaches>)
While Metro is designed for universal app development, it's often compared to other web-only bundlers. Here are some key differences:
### Browser ESM versus bundling[](https://docs.expo.dev/guides/why-metro/<#browser-esm-versus-bundling>)
While bundlers like Vite leverage built-in ESM support in the browser, this approach can lead to slower practical development times at medium to large scales due to thousands of cascading network requests. Metro performs bundling in local development, which aligns the development results much closer to the production results and is better suited for React Native's larger module count.
### JavaScript versus native languages[](https://docs.expo.dev/guides/why-metro/<#javascript-versus-native-languages>)
Several bundlers are opting to write their core in Rust for performance reasons, but this comes with some trade-offs, such as more challenging contributions, patches, and development. Metro uses a mix of technologies based on the operation:
  * The core bundler and utilities are written in JS/Flow.
  * File watching is written in C++ via Watchman, with a JS fallback. Watchman is then used across projects on your computer.
  * AST is parsed with Hermes parser (WebAssembly) to a Babel-compatible format.
  * AST transformation is done with Babel. This maximizes developer customization.
  * Minification uses Hermes on native platforms and Terser (with optional ESBuild support) for web.
  * CSS parsing and minification is performed with [LightningCSS](https://docs.expo.dev/guides/why-metro/<https:/lightningcss.dev/>) (Rust).


This approach aligns with Meta and community tools while allowing easier debugging, profiling, and patching for developers.
[Previous (Development process - Bundling)Minification](https://docs.expo.dev/guides/why-metro/</guides/minify>)[Next (Development process - Existing React Native apps)Overview](https://docs.expo.dev/guides/why-metro/</bare/overview>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/why-metro/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/why-metro/<https:/github.com/expo/expo/edit/main/docs/pages/guides/why-metro.mdx>)
  * Last updated on October 25, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/why-metro/<https:/expo.dev/privacy>).
On this page
[Official Meta bundler](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#official-meta-bundler>)[Battle-tested at scale](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#battle-tested-at-scale>)[On-demand processing](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#on-demand-processing>)[Multi-dimensional](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#multi-dimensional>)[Reusable transform memoization](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#reusable-transform-memoization>)[Optimized for custom runtimes](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#optimized-for-custom-runtimes>)[Cross-technology support](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#cross-technology-support>)[Native asset exports](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#native-asset-exports>)[Concurrent processing](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#concurrent-processing>)[Comparison with other approaches](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#comparison-with-other-approaches>)[Browser ESM versus bundling](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#browser-esm-versus-bundling>)[JavaScript versus native languages](https://docs.expo.dev/guides/why-metro/</guides/why-metro/#javascript-versus-native-languages>)
