[](https://docs.expo.dev/guides/using-bugsnag/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/using-bugsnag/</>)
[Blog](https://docs.expo.dev/guides/using-bugsnag/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/using-bugsnag/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/using-bugsnag/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/using-bugsnag/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/using-bugsnag/</>)[Guides](https://docs.expo.dev/guides/using-bugsnag/</guides/overview>)[EAS](https://docs.expo.dev/guides/using-bugsnag/</eas>)[Reference](https://docs.expo.dev/guides/using-bugsnag/</versions/latest>)[Learn](https://docs.expo.dev/guides/using-bugsnag/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/using-bugsnag/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/using-bugsnag/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/using-bugsnag/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/using-bugsnag/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/using-bugsnag/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/using-bugsnag/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/using-bugsnag/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/using-bugsnag/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/using-bugsnag/</router/introduction>)[Installation](https://docs.expo.dev/guides/using-bugsnag/</router/installation>)[Create pages](https://docs.expo.dev/guides/using-bugsnag/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/using-bugsnag/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/using-bugsnag/</router/layouts>)[Error handling](https://docs.expo.dev/guides/using-bugsnag/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/using-bugsnag/</modules/overview>)[Get started](https://docs.expo.dev/guides/using-bugsnag/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/using-bugsnag/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/using-bugsnag/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/using-bugsnag/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/using-bugsnag/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/using-bugsnag/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/using-bugsnag/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/using-bugsnag/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/using-bugsnag/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/using-bugsnag/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/using-bugsnag/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/using-bugsnag/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/using-bugsnag/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/using-bugsnag/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/using-bugsnag/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/using-bugsnag/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/using-bugsnag/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/using-bugsnag/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/using-bugsnag/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/using-bugsnag/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/using-bugsnag/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/using-bugsnag/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/using-bugsnag/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/using-bugsnag/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/using-bugsnag/</archive>)[Expo Snack](https://docs.expo.dev/guides/using-bugsnag/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/using-bugsnag/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/using-bugsnag/<https:/expo.dev/mailing-list/signup>)
# Using BugSnag
[Edit this page](https://docs.expo.dev/guides/using-bugsnag/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-bugsnag.mdx> "Edit content of this page on GitHub")
A guide on installing and configuring BugSnag for end-to-end error reporting and analytics.
[Edit this page](https://docs.expo.dev/guides/using-bugsnag/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-bugsnag.mdx> "Edit content of this page on GitHub")
[BugSnag](https://docs.expo.dev/guides/using-bugsnag/<https:/www.bugsnag.com>) is a stability monitoring solution that provides rich, end-to-end error reporting and analytics to reproduce and fix errors with speed and precision. BugSnag supports the full stack with open-source libraries for more than [50 platforms](https://docs.expo.dev/guides/using-bugsnag/<https:/www.bugsnag.com/platforms>), including [React Native](https://docs.expo.dev/guides/using-bugsnag/<https:/docs.bugsnag.com/platforms/react-native/react-native/>).
With BugSnag, developers and engineering organizations can:
  * Stabilize: Innovate faster by knowing when to build new features versus fix bugs. Use the release health dashboard, stability scores and targets, and built-in alerts via email, Slack, PagerDuty, and more.
  * Prioritize: Improve customer experience by identifying and prioritizing bugs that have the greatest impact on app stability. Analyze issues grouped by root cause and sorted by business impact, customer segmentation, A/B testing and experiment results.
  * Fix: Increase productivity by spending less time on reproducing and fixing bugs. Utilize powerful diagnostic data, full stacktraces and automatic breadcrumbs.


## Integration[](https://docs.expo.dev/guides/using-bugsnag/<#integration>)
See the integration guide below for instructions on adding BugSnag to your Expo apps to report JavaScript errors. It also includes instructions for uploading source maps for updates published with [EAS Update](https://docs.expo.dev/guides/using-bugsnag/</eas-update/introduction>).
If you're new to BugSnag, you can [create an account](https://docs.expo.dev/guides/using-bugsnag/<https:/app.bugsnag.com/user/new/>) or [request a demo](https://docs.expo.dev/guides/using-bugsnag/<https:/www.bugsnag.com/demo-request>).
[Expo BugSnag integrationSee the official guide on how to integrate BugSnag with an Expo app.](https://docs.expo.dev/guides/using-bugsnag/<https:/docs.bugsnag.com/platforms/react-native/expo/>)
[Previous (More - Integrations)Using Sentry](https://docs.expo.dev/guides/using-bugsnag/</guides/using-sentry>)[Next (More - Integrations)Build apps for TV](https://docs.expo.dev/guides/using-bugsnag/</guides/building-for-tv>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/using-bugsnag/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/using-bugsnag/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-bugsnag.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/using-bugsnag/<https:/expo.dev/privacy>).
