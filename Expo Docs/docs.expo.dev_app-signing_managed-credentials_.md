[](https://docs.expo.dev/app-signing/managed-credentials/<https:/expo.dev>)[Docs](https://docs.expo.dev/app-signing/managed-credentials/</>)
[Blog](https://docs.expo.dev/app-signing/managed-credentials/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/app-signing/managed-credentials/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/app-signing/managed-credentials/<https:/github.com/expo/expo>)[](https://docs.expo.dev/app-signing/managed-credentials/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/app-signing/managed-credentials/</>)[Guides](https://docs.expo.dev/app-signing/managed-credentials/</guides/overview>)[EAS](https://docs.expo.dev/app-signing/managed-credentials/</eas>)[Reference](https://docs.expo.dev/app-signing/managed-credentials/</versions/latest>)[Learn](https://docs.expo.dev/app-signing/managed-credentials/</tutorial/overview>)
[Introduction](https://docs.expo.dev/app-signing/managed-credentials/</eas>)[Environment variables](https://docs.expo.dev/app-signing/managed-credentials/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/app-signing/managed-credentials/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/app-signing/managed-credentials/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/app-signing/managed-credentials/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/app-signing/managed-credentials/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/app-signing/managed-credentials/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/app-signing/managed-credentials/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/app-signing/managed-credentials/</build/introduction>)[Create your first build](https://docs.expo.dev/app-signing/managed-credentials/</build/setup>)[Configure with eas.json](https://docs.expo.dev/app-signing/managed-credentials/</build/eas-json>)[Internal distribution](https://docs.expo.dev/app-signing/managed-credentials/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/app-signing/managed-credentials/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/app-signing/managed-credentials/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/app-signing/managed-credentials/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/app-signing/managed-credentials/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/app-signing/managed-credentials/</build/orbit>)
App Signing
[App credentials](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/app-credentials>)[Automatically managed credentials](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/managed-credentials>)[Local credentials](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/local-credentials>)[Existing credentials](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/existing-credentials>)[Sync credentials between remote and local sources](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/syncing-credentials>)[Security](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/security>)[Apple Developer Program roles and permissions](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/apple-developer-program-roles-and-permissions>)
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/app-signing/managed-credentials/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/app-signing/managed-credentials/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/app-signing/managed-credentials/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/app-signing/managed-credentials/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/app-signing/managed-credentials/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/app-signing/managed-credentials/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/app-signing/managed-credentials/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/app-signing/managed-credentials/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/app-signing/managed-credentials/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/app-signing/managed-credentials/</submit/android>)[Submit to Apple](https://docs.expo.dev/app-signing/managed-credentials/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/app-signing/managed-credentials/</eas-update/introduction>)[Get started](https://docs.expo.dev/app-signing/managed-credentials/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/app-signing/managed-credentials/</eas/metadata>)[Get started](https://docs.expo.dev/app-signing/managed-credentials/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/app-signing/managed-credentials/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/app-signing/managed-credentials/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/app-signing/managed-credentials/</distribution/app-stores>)[App transfers](https://docs.expo.dev/app-signing/managed-credentials/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/app-signing/managed-credentials/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/app-signing/managed-credentials/</eas/json>)[Webhooks](https://docs.expo.dev/app-signing/managed-credentials/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/app-signing/managed-credentials/</archive>)[Expo Snack](https://docs.expo.dev/app-signing/managed-credentials/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/app-signing/managed-credentials/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/app-signing/managed-credentials/<https:/expo.dev/mailing-list/signup>)
# Using automatically managed credentials
[Edit this page](https://docs.expo.dev/app-signing/managed-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/app-signing/managed-credentials.mdx> "Edit content of this page on GitHub")
Learn how to automatically manage your app credentials with EAS.
[Edit this page](https://docs.expo.dev/app-signing/managed-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/app-signing/managed-credentials.mdx> "Edit content of this page on GitHub")
For your app to be distributed in an app store, it needs to be digitally signed with credentials such as a keystore or a distribution certificate. This certifies the source of the app and ensures that it can't be tampered with. Other credentials, such as your FCM API Key and Apple Push Key are needed to send push notifications, but they are not involved in app signing.
That's all that you need to know about any of this to build an app with EAS Build, but if you would like to learn more you can refer to the [App Signing](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/app-credentials>) guide.
Read on to learn how EAS can automatically manage credentials for you and your team.
## Generating app signing credentials[](https://docs.expo.dev/app-signing/managed-credentials/<#generating-app-signing-credentials>)
When you run `eas build`, you will be prompted to generate credentials if you have not done so already. Follow the simple instructions to generate your credentials. Where needed, they will be stored on EAS servers. On subsequent builds of your app, these credentials will be re-used unless you specify otherwise.
Generating your iOS credentials (distribution certificate, provisioning profile, and push key) requires you to sign in with an [Apple Developer Program](https://docs.expo.dev/app-signing/managed-credentials/<https:/developer.apple.com/programs>) membership.
> If you have any security concerns about EAS managing your credentials or about logging in to your Apple Developer account through EAS CLI, see [Security](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/security>) guide. If that does not satisfy your concerns, you can reach out to secure@expo.dev for more information, or use [local credentials](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/local-credentials>) instead.
### Push notification credentials[](https://docs.expo.dev/app-signing/managed-credentials/<#push-notification-credentials>)
#### Android[](https://docs.expo.dev/app-signing/managed-credentials/<#android>)
The Android push notification credentials setup for EAS Build requires configuring your app with FCM. Run `eas credentials`, select `Android`, then `Push Notifications: Manage your FCM Api Key`, and then choose the appropriate option to set up the key.
#### iOS[](https://docs.expo.dev/app-signing/managed-credentials/<#ios>)
If you haven't set up your Push Notifications key yet, EAS CLI will ask you to set it up during the next `eas build` run.
You can also set up the Push Notifications key with the `eas credentials` command. Run it, select `iOS`, then `Push Notifications: Manage your Apple Push Notifications Key`, and then choose the appropriate option to set up the key.
## Sharing credentials with your team[](https://docs.expo.dev/app-signing/managed-credentials/<#sharing-credentials-with-your-team>)
If you collaborate on your project with other developers, it is often useful to give them access to perform builds on their own. [Ensure that your project is configured for collaboration](https://docs.expo.dev/app-signing/managed-credentials/</accounts/account-types#organizations>) and any teammates that you have added through your [Expo dashboard](https://docs.expo.dev/app-signing/managed-credentials/<https:/expo.dev/>) will be able to run `eas build` seamlessly, provided that they have sufficient permissions.
After you have generated your iOS credentials, it's no longer necessary to have access to the Apple Developer team to start a build. This means that your collaborators can start new iOS builds with only their Expo accounts.
## Inspecting credentials configuration[](https://docs.expo.dev/app-signing/managed-credentials/<#inspecting-credentials-configuration>)
You can view your currently configured app signing credentials by running `eas credentials`. This command also lets you remove and modify credentials, should you need to make any changes. Typically this is not necessary, but you may want to use it if you want to [sync your credentials to your local machine to run a build locally](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/syncing-credentials>) or [migrate existing credentials to be automatically managed](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/existing-credentials>).
[Previous (EAS Build - App Signing)App credentials](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/app-credentials>)[Next (EAS Build - App Signing)Local credentials](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/local-credentials>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/app-signing/managed-credentials/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/app-signing/managed-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/app-signing/managed-credentials.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/app-signing/managed-credentials/<https:/expo.dev/privacy>).
On this page
[Generating app signing credentials](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/managed-credentials/#generating-app-signing-credentials>)[Push notification credentials](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/managed-credentials/#push-notification-credentials>)[Sharing credentials with your team](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/managed-credentials/#sharing-credentials-with-your-team>)[Inspecting credentials configuration](https://docs.expo.dev/app-signing/managed-credentials/</app-signing/managed-credentials/#inspecting-credentials-configuration>)
