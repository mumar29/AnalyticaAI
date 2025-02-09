[](https://docs.expo.dev/develop/user-interface/store-data/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/user-interface/store-data/</>)
[Blog](https://docs.expo.dev/develop/user-interface/store-data/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/user-interface/store-data/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/user-interface/store-data/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/user-interface/store-data/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/user-interface/store-data/</>)[Guides](https://docs.expo.dev/develop/user-interface/store-data/</guides/overview>)[EAS](https://docs.expo.dev/develop/user-interface/store-data/</eas>)[Reference](https://docs.expo.dev/develop/user-interface/store-data/</versions/latest>)[Learn](https://docs.expo.dev/develop/user-interface/store-data/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/user-interface/store-data/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/user-interface/store-data/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/user-interface/store-data/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/user-interface/store-data/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/user-interface/store-data/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/user-interface/store-data/</develop/tools>)
Navigation
User interface
[Splash screen and app icon](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/splash-screen-and-app-icon>)[Safe areas](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/safe-areas>)[Fonts](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/fonts>)[Assets](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/assets>)[Color themes](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/color-themes>)[Animation](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/animation>)[Store data](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/store-data>)[Next steps](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/next-steps>)
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/user-interface/store-data/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/user-interface/store-data/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/user-interface/store-data/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/user-interface/store-data/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/user-interface/store-data/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/user-interface/store-data/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/user-interface/store-data/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/user-interface/store-data/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/user-interface/store-data/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/user-interface/store-data/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/user-interface/store-data/</core-concepts>)[FAQ](https://docs.expo.dev/develop/user-interface/store-data/</faq>)
[Archive](https://docs.expo.dev/develop/user-interface/store-data/</archive>)[Expo Snack](https://docs.expo.dev/develop/user-interface/store-data/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/user-interface/store-data/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/user-interface/store-data/<https:/expo.dev/mailing-list/signup>)
# Store data
[Edit this page](https://docs.expo.dev/develop/user-interface/store-data/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/store-data.mdx> "Edit content of this page on GitHub")
Learn about different libraries available to store data in your Expo project.
[Edit this page](https://docs.expo.dev/develop/user-interface/store-data/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/store-data.mdx> "Edit content of this page on GitHub")
Storing data can be essential to the features implemented in your mobile app. There are different ways to save data in your Expo project depending on the type of data you want to store and the security requirements of your app. This page lists a variety of libraries to help you decide which solution is best for your project.
## Expo SecureStore[](https://docs.expo.dev/develop/user-interface/store-data/<#expo-securestore>)
`expo-secure-store` provides a way to encrypt and securely store key-value pairs locally on the device.
[![Icon](https://docs.expo.dev/static/images/packages/expo-secure-store.png)Expo SecureStore API referenceFor more information on how to install and use expo-secure-store, see its API documentation.](https://docs.expo.dev/develop/user-interface/store-data/</versions/latest/sdk/securestore>)
## Expo FileSystem[](https://docs.expo.dev/develop/user-interface/store-data/<#expo-filesystem>)
`expo-file-system` provides access to a file system stored locally on the device. Within Expo Go, each project has a separate file system and no access to other Expo projects' files. However, it can save content shared by other projects to the local filesystem and share local files with other projects. It is also capable of uploading and downloading files from network URLs.
[![Icon](https://docs.expo.dev/static/images/packages/expo-file-system.png)Expo FileSystem API referenceFor more information on how to install and use expo-file-system, see its API documentation.](https://docs.expo.dev/develop/user-interface/store-data/</versions/latest/sdk/filesystem>)
## Expo SQLite[](https://docs.expo.dev/develop/user-interface/store-data/<#expo-sqlite>)
`expo-sqlite` package gives your app access to a database that can be queried through a WebSQL-like API. The database is persisted across restarts of your app. You can use it for importing an existing database, opening databases, creating tables, inserting items, querying and displaying results, and using prepared statements.
[![Icon](https://docs.expo.dev/static/images/packages/expo-sqlite.png)Expo SQLite API referenceFor more information on how to install and use expo-sqlite, see its API documentation.](https://docs.expo.dev/develop/user-interface/store-data/</versions/latest/sdk/sqlite>)
## Async Storage[](https://docs.expo.dev/develop/user-interface/store-data/<#async-storage>)
[Async Storage](https://docs.expo.dev/develop/user-interface/store-data/<https:/react-native-async-storage.github.io/async-storage/>) is an asynchronous, unencrypted, persistent key-value storage for React Native apps. It has a simple API and is a good choice for storing small amounts of data. It is also a good choice for storing data that does not need encryption, such as user preferences or app state.
[![Icon](https://react-native-async-storage.github.io/async-storage/img/logo.svg)Async Storage documentationFor more information on how to install and use Async Storage, see its documentation.](https://docs.expo.dev/develop/user-interface/store-data/<https:/react-native-async-storage.github.io/async-storage/docs/usage>)
## Other libraries[](https://docs.expo.dev/develop/user-interface/store-data/<#other-libraries>)
There are other libraries available for storing data for different purposes. For example, you might not need encryption in your project or are looking for a faster solution similar to Async Storage.
We recommend checking out [React Native for a list of libraries](https://docs.expo.dev/develop/user-interface/store-data/<https:/reactnative.directory/?search=storage>) to help you store your project's data.
[Previous (Develop - User interface)Animation](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/animation>)[Next (Develop - User interface)Next steps](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/next-steps>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/user-interface/store-data/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/user-interface/store-data/<https:/github.com/expo/expo/edit/main/docs/pages/develop/user-interface/store-data.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/user-interface/store-data/<https:/expo.dev/privacy>).
On this page
[Expo SecureStore](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/store-data/#expo-securestore>)[Expo FileSystem](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/store-data/#expo-filesystem>)[Expo SQLite](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/store-data/#expo-sqlite>)[Async Storage](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/store-data/#async-storage>)[Other libraries](https://docs.expo.dev/develop/user-interface/store-data/</develop/user-interface/store-data/#other-libraries>)
