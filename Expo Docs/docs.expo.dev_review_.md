[](https://docs.expo.dev/review/<https:/expo.dev>)[Docs](https://docs.expo.dev/review/</>)
[Blog](https://docs.expo.dev/review/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/review/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/review/<https:/github.com/expo/expo>)[](https://docs.expo.dev/review/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/review/</>)[Guides](https://docs.expo.dev/review/</guides/overview>)[EAS](https://docs.expo.dev/review/</eas>)[Reference](https://docs.expo.dev/review/</versions/latest>)[Learn](https://docs.expo.dev/review/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/review/</get-started/introduction>)[Create a project](https://docs.expo.dev/review/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/review/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/review/</get-started/start-developing>)[Next steps](https://docs.expo.dev/review/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/review/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/review/</develop/authentication>)[Unit testing](https://docs.expo.dev/review/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/review/</review/overview>)[Share previews with your team](https://docs.expo.dev/review/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/review/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/review/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/review/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/review/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/review/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/review/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/review/</core-concepts>)[FAQ](https://docs.expo.dev/review/</faq>)
[Archive](https://docs.expo.dev/review/</archive>)[Expo Snack](https://docs.expo.dev/review/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/review/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/review/<https:/expo.dev/mailing-list/signup>)
# Overview of distributing apps for review
[Edit this page](https://docs.expo.dev/review/<https:/github.com/expo/expo/edit/main/docs/pages/review/overview.mdx> "Edit content of this page on GitHub")
Learn about how to distribute your app for review using app stores, internal distribution, and EAS Update.
[Edit this page](https://docs.expo.dev/review/<https:/github.com/expo/expo/edit/main/docs/pages/review/overview.mdx> "Edit content of this page on GitHub")
This page outlines three approaches to sharing a preview version of your app with your team for QA and review: app store testing tracks, internal distribution, and development builds with EAS Update.
Can I use Expo Go for reviewing releases?[](https://docs.expo.dev/review/<#can-i-use-expo-go-for-reviewing>)
Even though Expo Go is an open-source sandbox that can be good for previewing isolated prototypes on Android and iOS, it is not intended for production apps. It should be avoided during the preview process of your app.
## App store testing tracks[](https://docs.expo.dev/review/<#app-store-testing-tracks>)
When distributing apps through app store testing tracks, you can only use release builds. You cannot use this method to distribute development builds. An alternative approach is to use ["Internal distribution"](https://docs.expo.dev/review/</review/overview#internal-distribution-with-eas-build>), which works with both release and development builds.
Android: Google Play beta provides both closed and open tracks for Android apps. You can invite specific users to test your app in the closed beta. In the open beta, you can make your app available to anyone participating in the beta program.
iOS: Apple provides TestFlight for iOS apps, which allows you to share your app with up to 100 internal testers, or up to 10,000 external testers.
[EAS SubmitLearn how to upload your app to app store testing and release tracks.](https://docs.expo.dev/review/</submit/introduction>)
## Internal distribution with EAS Build[](https://docs.expo.dev/review/<#internal-distribution-with-eas-build>)
[Internal distribution](https://docs.expo.dev/review/</build/internal-distribution>) is a feature provided by EAS that allows developers to create builds and easily share them with a URL. The URL can be opened on a device to install the app. The app is provided as an installable APK for Android or an ad hoc provisioned app for iOS.
As soon as an internal distribution build is created, it is available for download and installation — no need to fill out any forms or wait for approval/processing. You can use internal distribution to share both release and development builds.
[How to set up an internal distribution buildLearn how EAS Build provides shareable URLs for your builds with your team for internal distribution.](https://docs.expo.dev/review/</build/internal-distribution>)
## Development builds and EAS Update[](https://docs.expo.dev/review/<#development-builds-and-eas-update>)
You can use [development builds](https://docs.expo.dev/review/</develop/development-builds/introduction>) to load previews of your app during the review stage by publishing an update with [EAS Update](https://docs.expo.dev/review/</eas-update/introduction>). After sharing a development build through internal distribution and installing it, you can launch any update that you published with EAS Update, as long as it is compatible with the installed build. Learn more about [Runtime versions and updates](https://docs.expo.dev/review/</eas-update/runtime-versions>).
You can use the Expo dashboard to launch updates and share a link to a specific update.[](https://docs.expo.dev/review/<#you-can-use-the-expo-dashboard-to>)
You can explore and launch updates directly from a development build.[](https://docs.expo.dev/review/<#you-can-explore-and-launch-updates-directly>)
You can configure GitHub actions to automatically publish updates on PRs and commits.[](https://docs.expo.dev/review/<#you-can-configure-github-actions-to-automatically>)
This approach is uniquely powerful because it allows you to respond to feedback as quickly as you can run `eas update`. It can take seconds to share a new version of your app with your team, and you can do so without needing to rebuild the app or upload it to a store test track.
[Get started with EAS UpdateLearn how to get started using `expo-updates` library and use EAS Update in your project.](https://docs.expo.dev/review/</eas-update/getting-started>) [Use GitHub ActionsLearn how to use GitHub Actions to automate the process of publishing updates with EAS Update. It also makes deploying updates consistent and fast, leaving you more time to develop your app.](https://docs.expo.dev/review/</eas-update/github-actions>) [Use `expo-dev-client` with EAS UpdateLearn how to use `expo-dev-client` in your project to launch different app versions and preview a published update inside a development build.](https://docs.expo.dev/review/</eas-update/expo-dev-client>)
[Previous (Develop)Unit testing](https://docs.expo.dev/review/</develop/unit-testing>)[Next (Review)Share previews with your team](https://docs.expo.dev/review/</review/share-previews-with-your-team>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/review/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/review/<https:/github.com/expo/expo/edit/main/docs/pages/review/overview.mdx>)
  * Last updated on August 05, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/review/<https:/expo.dev/privacy>).
On this page
[App store testing tracks](https://docs.expo.dev/review/</review/overview/#app-store-testing-tracks>)[Internal distribution with EAS Build](https://docs.expo.dev/review/</review/overview/#internal-distribution-with-eas-build>)[Development builds and EAS Update](https://docs.expo.dev/review/</review/overview/#development-builds-and-eas-update>)
