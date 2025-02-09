[](https://docs.expo.dev/guides/local-first/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/local-first/</>)
[Blog](https://docs.expo.dev/guides/local-first/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/local-first/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/local-first/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/local-first/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/local-first/</>)[Guides](https://docs.expo.dev/guides/local-first/</guides/overview>)[EAS](https://docs.expo.dev/guides/local-first/</eas>)[Reference](https://docs.expo.dev/guides/local-first/</versions/latest>)[Learn](https://docs.expo.dev/guides/local-first/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/local-first/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/local-first/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/local-first/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/local-first/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/local-first/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/local-first/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/local-first/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/local-first/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/local-first/</router/introduction>)[Installation](https://docs.expo.dev/guides/local-first/</router/installation>)[Create pages](https://docs.expo.dev/guides/local-first/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/local-first/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/local-first/</router/layouts>)[Error handling](https://docs.expo.dev/guides/local-first/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/local-first/</modules/overview>)[Get started](https://docs.expo.dev/guides/local-first/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/local-first/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/local-first/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/local-first/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/local-first/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/local-first/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/local-first/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/local-first/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/local-first/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/local-first/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/local-first/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/local-first/</guides/icons>)[Localization](https://docs.expo.dev/guides/local-first/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/local-first/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/local-first/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/local-first/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/local-first/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/local-first/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/local-first/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/local-first/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/local-first/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/local-first/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/local-first/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/local-first/</archive>)[Expo Snack](https://docs.expo.dev/guides/local-first/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/local-first/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/local-first/<https:/expo.dev/mailing-list/signup>)
# Local-first architecture with Expo
[Edit this page](https://docs.expo.dev/guides/local-first/<https:/github.com/expo/expo/edit/main/docs/pages/guides/local-first.mdx> "Edit content of this page on GitHub")
An introduction to the emerging local-first software movement, including links to relevant learning resources and tools.
[Edit this page](https://docs.expo.dev/guides/local-first/<https:/github.com/expo/expo/edit/main/docs/pages/guides/local-first.mdx> "Edit content of this page on GitHub")
> This guide is a work in progress. If you have any feedback, [open an issue](https://docs.expo.dev/guides/local-first/<https:/github.com/expo/expo/issues/new/choose>) in our GitHub repository.
The term "local-first" was first coined in the paper ["Local-first software"](https://docs.expo.dev/guides/local-first/<https:/www.inkandswitch.com/local-first/>), written by the research lab [Ink & Switch](https://docs.expo.dev/guides/local-first/<https:/www.inkandswitch.com/>), but the ideas behind it have been around for a long time. It's the architecture that powers some of our favorite apps, like [Linear](https://docs.expo.dev/guides/local-first/<https:/linear.app/>), [Superhuman](https://docs.expo.dev/guides/local-first/<https:/superhuman.com/>), [Excalidraw](https://docs.expo.dev/guides/local-first/<https:/excalidraw.com/>), and even [Apple Notes](https://docs.expo.dev/guides/local-first/<https:/en.wikipedia.org/wiki/Notes_\(Apple\)>).
In local-first software, "the availability of another computer should never prevent you from working" ([via Martin Kleppmann](https://docs.expo.dev/guides/local-first/<https:/www.youtube.com/watch?v=NMq0vncHJvU>)). When you are offline, you can still read and write directly from/to a database on your device. You can trust the software to work offline, and you know that when you are connected to the internet, your data will be seamlessly synced and available on any of your devices running the app. When you're online, this architecture is well suited for "multiplayer" apps, [as popularized by Figma](https://docs.expo.dev/guides/local-first/<https:/www.figma.com/blog/how-figmas-multiplayer-technology-works/>).
To dig deeper into what local-first is and how it works, refer to the [additional resources](https://docs.expo.dev/guides/local-first/</guides/local-first#additional-resources>) below.
## Why use local-first architecture?[](https://docs.expo.dev/guides/local-first/<#why-use-local-first-architecture>)
### User experience benefits[](https://docs.expo.dev/guides/local-first/<#user-experience-benefits>)
Local-first software feels fast because interactions are no longer network-bound, you can read and write directly from/to a database on your device.
You can trust the software to work offline, and you know that when you are connected to the internet, your data will be seamlessly synced and available on any of your devices running the app.
Another characteristic of local-first software is that it is collaborative — multiple devices can work on the same data, and changes are synced across all of them. This can happen in real-time when you collaborate on a design in [Figma](https://docs.expo.dev/guides/local-first/<https:/www.figma.com/>) or asynchronously when you create a task while offline in Linear and it is synced when you are online again.
### Developer experience benefits[](https://docs.expo.dev/guides/local-first/<#developer-experience-benefits>)
You no longer have to manage various states of your app for each network request — "loaded", "loading", "error", and so on, with their corresponding UI states and other logic. Write to a local database, and the app will automatically sync the changes to the server. This means that you can focus on building the app, and not worry as much about the networking and offline states.
Your server availability may still be important, but in the event of an outage your users can still access the app and continue working. You may even provide a mechanism to sync the data without going through your server.
## Challenges in building local-first apps[](https://docs.expo.dev/guides/local-first/<#challenges-in-building-local-first-apps>)
The tools available today are still in their early stages, and so you may find yourself solving problems that you would expect to be solved by the tools you are using today. For example, you may need to implement a custom sync layer, or you may have to figure out how to handle permissions for multiple users operating on the same data. As the ecosystem evolves, we expect it to become easier to build local-first apps. If you're not prepared to be an early adopter, and everything that comes with that, you might want to wait for the tools to mature before you start building your app with local-first tools.
## Tools for building local-first apps[](https://docs.expo.dev/guides/local-first/<#tools-for-building-local-first-apps>)
A comprehensive list of tools is available on the ["Local-first software" community website](https://docs.expo.dev/guides/local-first/<https:/localfirstweb.dev/>). The following is a shorter list of tools that we at Expo have had direct experience working with.
One way to think of local-first tools is to group them by the following categories: persistence, state management, and syncing. Some tools will fit into multiple categories if they handle multiple aspects of the problem. Syncing can be further subdivided into syncable data structures and transport layers.
### Legend-State[](https://docs.expo.dev/guides/local-first/<#legend-state>)
[Legend-State](https://docs.expo.dev/guides/local-first/<https:/legendapp.com/open-source/state/v3/>) is a super fast all-in-one state and sync library that lets you write less code to make faster apps. It has the following primary goals:
  * Faster state management for React apps
  * Fine-grained reactivity for minimal renders
  * Powerful sync and persistence (with Supabase support built-in)


It works with Expo and React Native (via `react-native-async-storage`[](https://docs.expo.dev/guides/local-first/<https:/github.com/react-native-async-storage/async-storage?tab=readme-ov-file#react-native-async-storage>)). This makes it a perfect match for building local-first mobile and web apps. Get started by using the [Legend-State Supabase example](https://docs.expo.dev/guides/local-first/<https:/github.com/expo/examples/tree/master/with-legend-state-supabase>):
Terminal
Copy
`- ``npx create-expo-app --example with-legend-state-supabase`
### TinyBase[](https://docs.expo.dev/guides/local-first/<#tinybase>)
[TinyBase](https://docs.expo.dev/guides/local-first/<https:/tinybase.org/>) calls itself "the reactive data store for local-first apps". It is a state management library that plugs in to many of the most popular syncing and persistence layers, such as [Yjs](https://docs.expo.dev/guides/local-first/</guides/local-first#yjs>) and [SQLite](https://docs.expo.dev/guides/local-first/</guides/local-first#sqlite>). It's a great choice for building local-first apps that need to persist and sync data. Get started by using the [TinyBase example](https://docs.expo.dev/guides/local-first/<https:/github.com/expo/examples/tree/master/with-tinybase>):
Terminal
Copy
`- ``npx create-expo-app --example with-tinybase`
TinyBase works seamlessly with Expo Go, allowing you to develop quickly. On Android and iOS, it uses the `expo-sqlite`[](https://docs.expo.dev/guides/local-first/</versions/latest/sdk/sqlite>) library to persist data. On the web, it relies on the `localStorage`[](https://docs.expo.dev/guides/local-first/<https:/developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>) API. [Beto Moedano](https://docs.expo.dev/guides/local-first/<https:/github.com/betomoedano>) demonstrates how to build a [Universal Local-first Shopping List App](https://docs.expo.dev/guides/local-first/<https:/github.com/betomoedano/groceries-shopping-list-app>) in the following video:
[![Watch: Build a Local-First Real-Time Shopping List App with Expo and TinyBase](https://i3.ytimg.com/vi/HqOiB2tDM8Q/maxresdefault.jpg)Watch: Build a Local-First Real-Time Shopping List App with Expo and TinyBase](https://docs.expo.dev/guides/local-first/<https:/www.youtube.com/watch?v=HqOiB2tDM8Q>)
### SQLite[](https://docs.expo.dev/guides/local-first/<#sqlite>)
[Expo SQLite](https://docs.expo.dev/guides/local-first/</versions/latest/sdk/sqlite>) is a SQLite library that is a great choice for persistence for local-first apps. You can use SQLite with different state management and syncing layers in front of it, such as `y-expo-sqlite`[](https://docs.expo.dev/guides/local-first/<https:/github.com/brentvatne/y-expo-sqlite>) to persist [Yjs](https://docs.expo.dev/guides/local-first/</guides/local-first#yjs>) documents, and [TinyBase](https://docs.expo.dev/guides/local-first/</guides/local-first#tinybase>) as a state management layer. Using SQLite is flexible, but you will need to combine it with other tools or build your own tools to get a complete local-first solution. See [Expo SQLite API reference](https://docs.expo.dev/guides/local-first/</versions/latest/sdk/sqlite>) for more information.
### Yjs[](https://docs.expo.dev/guides/local-first/<#yjs>)
[Yjs](https://docs.expo.dev/guides/local-first/<https:/github.com/yjs/yjs>) is a [CRDT implementation](https://docs.expo.dev/guides/local-first/<https:/github.com/yjs/yjs?tab=readme-ov-file#yjs-crdt-algorithm>) that provides data types that can be synced across multiple clients. When building an app with Yjs and working with data that you would like to be able to sync, then you would use `Y.Array` and `Y.Map` to represent your data rather than `Array` and `Object`. You may use a library like [TinyBase](https://docs.expo.dev/guides/local-first/</guides/local-first#tinybase>) for state management on top of Yjs, and persistence can be handled by a variety of tools, from a JSON file on your filesystem to a full-fledged database (such as `y-expo-sqlite`[](https://docs.expo.dev/guides/local-first/<https:/github.com/brentvatne/y-expo-sqlite>)) and everything in between. See [Yjs's GitHub repository](https://docs.expo.dev/guides/local-first/<https:/github.com/yjs/yjs>) for more information.
### Prisma[](https://docs.expo.dev/guides/local-first/<#prisma>)
[Prisma](https://docs.expo.dev/guides/local-first/<https:/prisma.io>) is well known as the most popular ORM for Node.js and TypeScript backends, and it's now available for [Expo and React Native in early access](https://docs.expo.dev/guides/local-first/<https:/www.prisma.io/blog/bringing-prisma-orm-to-react-native-and-expo>). Prisma aims to provide a complete local-first solution, with state management, syncing, and persistence all covered for you. While it's still early, [Beto Moedano](https://docs.expo.dev/guides/local-first/<https:/github.com/betomoedano>) has put together a full walkthrough of using Prisma with Expo to build a local-first Notion clone, [check out the code on GitHub](https://docs.expo.dev/guides/local-first/<https:/github.com/betomoedano/React-Native-Notion-Clone>).
[![Watch: Building a Local-first Notion Clone with React Native Expo and Prisma](https://i3.ytimg.com/vi/uTrPte0sCiw/maxresdefault.jpg)Watch: Building a Local-first Notion Clone with React Native Expo and Prisma](https://docs.expo.dev/guides/local-first/<https:/www.youtube.com/watch?v=uTrPte0sCiw>)
### Jazz[](https://docs.expo.dev/guides/local-first/<#jazz>)
[Jazz.tools](https://docs.expo.dev/guides/local-first/<https:/jazz.tools/docs/react-native>) is a framework for building local-first apps. It is open source, provides first-class support for Expo and you can self-host it or use [Jazz Cloud](https://docs.expo.dev/guides/local-first/<https:/jazz.tools/cloud>) to start quickly. [Jazz](https://docs.expo.dev/guides/local-first/<https:/jazz.tools>). To learn more, check out the [examples](https://docs.expo.dev/guides/local-first/<https:/jazz.tools/examples#react-native>) or see the [Getting Started Guide](https://docs.expo.dev/guides/local-first/<https:/jazz.tools/docs/react-native>) for detailed instructions.
### LiveStore[](https://docs.expo.dev/guides/local-first/<#livestore>)
[LiveStore](https://docs.expo.dev/guides/local-first/<https:/livestore.dev/getting-started/expo/>) is a client-centric local-first data layer for high-performance applications. It provides first-class support for Expo, and it's a great choice for building local-first apps. See the blog post on [LiveStore: SQLite-based data layer for local-first apps](https://docs.expo.dev/guides/local-first/<https:/expo.dev/blog/local-first-application-development-with-livestore>).
[![Watch: How to build local-first native apps with LiveStore and Expo](https://i3.ytimg.com/vi/zQIhJqYU1Qw/maxresdefault.jpg)Watch: How to build local-first native apps with LiveStore and Expo](https://docs.expo.dev/guides/local-first/<https:/www.youtube.com/watch?v=zQIhJqYU1Qw>)
### Other tools[](https://docs.expo.dev/guides/local-first/<#other-tools>)
The following list, far from being comprehensive, provides other tools that have caught our attention and that you may find interesting to explore. For a more thorough list of tools, see ["Local-first software" community website](https://docs.expo.dev/guides/local-first/<https:/localfirstweb.dev/>).
  * [Automerge](https://docs.expo.dev/guides/local-first/<https:/automerge.org/>)
  * [ElectricSQL](https://docs.expo.dev/guides/local-first/<https:/electric-sql.com/>)
  * [Instant](https://docs.expo.dev/guides/local-first/<https:/www.instantdb.com/>)
  * [PowerSync](https://docs.expo.dev/guides/local-first/<https:/www.powersync.com/>)


## Additional resources[](https://docs.expo.dev/guides/local-first/<#additional-resources>)
  * ["The past, present, and future of local-first"](https://docs.expo.dev/guides/local-first/<https:/www.youtube.com/watch?v=NMq0vncHJvU>) by Martin Kleppmann
  * ["Local-first software"](https://docs.expo.dev/guides/local-first/<https:/www.inkandswitch.com/local-first/>) by Ink & Switch
  * ["Local-first software" community website](https://docs.expo.dev/guides/local-first/<https:/localfirstweb.dev/>) and [meetup playlist on YouTube](https://docs.expo.dev/guides/local-first/<https:/www.youtube.com/playlist?list=PLTbD2QA-VMnXFsLbuPGz1H-Najv9MD2-H>)
  * [localfirst.fm podcast](https://docs.expo.dev/guides/local-first/<https:/localfirst.fm/>) by Johannes Schickling


[Previous (More - Assorted)App store assets](https://docs.expo.dev/guides/local-first/</guides/store-assets>)[Next (More - Assorted)Keyboard handling](https://docs.expo.dev/guides/local-first/</guides/keyboard-handling>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/local-first/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/local-first/<https:/github.com/expo/expo/edit/main/docs/pages/guides/local-first.mdx>)
  * Last updated on January 06, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/local-first/<https:/expo.dev/privacy>).
On this page
[Why use local-first architecture?](https://docs.expo.dev/guides/local-first/</guides/local-first/#why-use-local-first-architecture>)[User experience benefits](https://docs.expo.dev/guides/local-first/</guides/local-first/#user-experience-benefits>)[Developer experience benefits](https://docs.expo.dev/guides/local-first/</guides/local-first/#developer-experience-benefits>)[Challenges in building local-first apps](https://docs.expo.dev/guides/local-first/</guides/local-first/#challenges-in-building-local-first-apps>)[Tools for building local-first apps](https://docs.expo.dev/guides/local-first/</guides/local-first/#tools-for-building-local-first-apps>)[Legend-State](https://docs.expo.dev/guides/local-first/</guides/local-first/#legend-state>)[TinyBase](https://docs.expo.dev/guides/local-first/</guides/local-first/#tinybase>)[SQLite](https://docs.expo.dev/guides/local-first/</guides/local-first/#sqlite>)[Yjs](https://docs.expo.dev/guides/local-first/</guides/local-first/#yjs>)[Prisma](https://docs.expo.dev/guides/local-first/</guides/local-first/#prisma>)[Jazz](https://docs.expo.dev/guides/local-first/</guides/local-first/#jazz>)[LiveStore](https://docs.expo.dev/guides/local-first/</guides/local-first/#livestore>)[Other tools](https://docs.expo.dev/guides/local-first/</guides/local-first/#other-tools>)[Additional resources](https://docs.expo.dev/guides/local-first/</guides/local-first/#additional-resources>)
