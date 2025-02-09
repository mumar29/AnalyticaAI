[](https://docs.expo.dev/monitoring/services/<https:/expo.dev>)[Docs](https://docs.expo.dev/monitoring/services/</>)
[Blog](https://docs.expo.dev/monitoring/services/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/monitoring/services/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/monitoring/services/<https:/github.com/expo/expo>)[](https://docs.expo.dev/monitoring/services/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/monitoring/services/</>)[Guides](https://docs.expo.dev/monitoring/services/</guides/overview>)[EAS](https://docs.expo.dev/monitoring/services/</eas>)[Reference](https://docs.expo.dev/monitoring/services/</versions/latest>)[Learn](https://docs.expo.dev/monitoring/services/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/monitoring/services/</get-started/introduction>)[Create a project](https://docs.expo.dev/monitoring/services/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/monitoring/services/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/monitoring/services/</get-started/start-developing>)[Next steps](https://docs.expo.dev/monitoring/services/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/monitoring/services/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/monitoring/services/</develop/authentication>)[Unit testing](https://docs.expo.dev/monitoring/services/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/monitoring/services/</review/overview>)[Share previews with your team](https://docs.expo.dev/monitoring/services/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/monitoring/services/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/monitoring/services/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/monitoring/services/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/monitoring/services/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/monitoring/services/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/monitoring/services/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/monitoring/services/</core-concepts>)[FAQ](https://docs.expo.dev/monitoring/services/</faq>)
[Archive](https://docs.expo.dev/monitoring/services/</archive>)[Expo Snack](https://docs.expo.dev/monitoring/services/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/monitoring/services/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/monitoring/services/<https:/expo.dev/mailing-list/signup>)
# Monitoring services
[Edit this page](https://docs.expo.dev/monitoring/services/<https:/github.com/expo/expo/edit/main/docs/pages/monitoring/services.mdx> "Edit content of this page on GitHub")
Learn how to monitor the usage of your Expo and React Native app after its release.
[Edit this page](https://docs.expo.dev/monitoring/services/<https:/github.com/expo/expo/edit/main/docs/pages/monitoring/services.mdx> "Edit content of this page on GitHub")
Once your app is released, you can track anonymized usage data to give you insights on how users use your app. This data includes which updates are in use, when users experience bugs, and more.
## EAS Insights[](https://docs.expo.dev/monitoring/services/<#eas-insights>)
Expo provides the `expo-insights`[](https://docs.expo.dev/monitoring/services/</eas-insights/introduction>) library, which tracks information related to [EAS Update](https://docs.expo.dev/monitoring/services/</deploy/send-over-the-air-updates>). This data includes the app version, platform, OS version, and update adoption. After you install it and release production builds on the app stores, you'll be able to see additional data on your project dashboard:
![Active user insights on the Expo dashboard.](https://docs.expo.dev/static/images/monitoring/monitor-your-app/expo-insights.png)
Get started with the following guide:
[EAS InsightsLearn how to use EAS Insights to monitor your app.](https://docs.expo.dev/monitoring/services/</eas-insights/introduction>)
## LogRocket[](https://docs.expo.dev/monitoring/services/<#logrocket>)
You can get more insights with [LogRocket](https://docs.expo.dev/monitoring/services/<https:/logrocket.com>). LogRocket records user sessions and identifies bugs as your users use your app. You can filter sessions by update IDs and also connect to your LogRocket account on the Expo dashboard to get quick access to your app's session data.
![User sessions on the LogRocket dashboard.](https://docs.expo.dev/static/images/monitoring/monitor-your-app/logrocket.png)
Get started with the following guide:
[Using LogRocketLearn how to use LogRocket to monitor your app.](https://docs.expo.dev/monitoring/services/</guides/using-logrocket>)
## Sentry[](https://docs.expo.dev/monitoring/services/<#sentry>)
[Sentry](https://docs.expo.dev/monitoring/services/<http:/getsentry.com/>) is a crash reporting platform that provides real-time insight into production deployments with information to reproduce and fix crashes.
It notifies you of exceptions or errors that your users run into while using your app and organizes them for you on a web dashboard. Reported exceptions include stacktraces, device info, version, and other relevant context automatically. You can also provide additional context that is specific to your app, such as the current route and user ID.
Get started with the following guide:
[Using SentryLearn how to use Sentry to monitor your app.](https://docs.expo.dev/monitoring/services/</guides/using-sentry>)
## BugSnag[](https://docs.expo.dev/monitoring/services/<#bugsnag>)
[BugSnag](https://docs.expo.dev/monitoring/services/<https:/www.bugsnag.com/>) is a stability monitoring solution that provides rich, end-to-end error reporting and analytics to reproduce and fix errors with speed and precision. BugSnag supports the full stack with open-source libraries for more than 50 platforms, including React Native.
Get started with the following guide:
[Using BugSnagLearn how to use BugSnag to monitor your app.](https://docs.expo.dev/monitoring/services/</guides/using-bugsnag>)
[Previous (Deploy)Send over-the-air updates](https://docs.expo.dev/monitoring/services/</deploy/send-over-the-air-updates>)[Next (More)Core concepts](https://docs.expo.dev/monitoring/services/</core-concepts>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/monitoring/services/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/monitoring/services/<https:/github.com/expo/expo/edit/main/docs/pages/monitoring/services.mdx>)
  * Last updated on January 22, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/monitoring/services/<https:/expo.dev/privacy>).
On this page
[EAS Insights](https://docs.expo.dev/monitoring/services/</monitoring/services/#eas-insights>)[LogRocket](https://docs.expo.dev/monitoring/services/</monitoring/services/#logrocket>)[Sentry](https://docs.expo.dev/monitoring/services/</monitoring/services/#sentry>)[BugSnag](https://docs.expo.dev/monitoring/services/</monitoring/services/#bugsnag>)
