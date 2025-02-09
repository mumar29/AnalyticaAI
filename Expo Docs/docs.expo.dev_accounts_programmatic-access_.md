[](https://docs.expo.dev/accounts/programmatic-access/<https:/expo.dev>)[Docs](https://docs.expo.dev/accounts/programmatic-access/</>)
[Blog](https://docs.expo.dev/accounts/programmatic-access/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/accounts/programmatic-access/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/accounts/programmatic-access/<https:/github.com/expo/expo>)[](https://docs.expo.dev/accounts/programmatic-access/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/accounts/programmatic-access/</>)[Guides](https://docs.expo.dev/accounts/programmatic-access/</guides/overview>)[EAS](https://docs.expo.dev/accounts/programmatic-access/</eas>)[Reference](https://docs.expo.dev/accounts/programmatic-access/</versions/latest>)[Learn](https://docs.expo.dev/accounts/programmatic-access/</tutorial/overview>)
[Introduction](https://docs.expo.dev/accounts/programmatic-access/</eas>)[Environment variables](https://docs.expo.dev/accounts/programmatic-access/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/accounts/programmatic-access/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/accounts/programmatic-access/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/accounts/programmatic-access/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/accounts/programmatic-access/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/accounts/programmatic-access/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/accounts/programmatic-access/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/accounts/programmatic-access/</build/introduction>)[Create your first build](https://docs.expo.dev/accounts/programmatic-access/</build/setup>)[Configure with eas.json](https://docs.expo.dev/accounts/programmatic-access/</build/eas-json>)[Internal distribution](https://docs.expo.dev/accounts/programmatic-access/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/accounts/programmatic-access/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/accounts/programmatic-access/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/accounts/programmatic-access/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/accounts/programmatic-access/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/accounts/programmatic-access/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/accounts/programmatic-access/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/accounts/programmatic-access/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/accounts/programmatic-access/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/accounts/programmatic-access/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/accounts/programmatic-access/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/accounts/programmatic-access/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/accounts/programmatic-access/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/accounts/programmatic-access/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/accounts/programmatic-access/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/accounts/programmatic-access/</submit/android>)[Submit to Apple](https://docs.expo.dev/accounts/programmatic-access/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/accounts/programmatic-access/</eas-update/introduction>)[Get started](https://docs.expo.dev/accounts/programmatic-access/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/accounts/programmatic-access/</eas/metadata>)[Get started](https://docs.expo.dev/accounts/programmatic-access/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/accounts/programmatic-access/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/accounts/programmatic-access/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/accounts/programmatic-access/</distribution/app-stores>)[App transfers](https://docs.expo.dev/accounts/programmatic-access/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/accounts/programmatic-access/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/accounts/programmatic-access/</eas/json>)[Webhooks](https://docs.expo.dev/accounts/programmatic-access/</eas/webhooks>)
Expo accounts
[Account types](https://docs.expo.dev/accounts/programmatic-access/</accounts/account-types>)[Two-factor authentication](https://docs.expo.dev/accounts/programmatic-access/</accounts/two-factor>)[Programmatic access](https://docs.expo.dev/accounts/programmatic-access/</accounts/programmatic-access>)[Single Sign-On (SSO)](https://docs.expo.dev/accounts/programmatic-access/</accounts/sso>)[Audit logs](https://docs.expo.dev/accounts/programmatic-access/</accounts/audit-logs>)
Billing
[Archive](https://docs.expo.dev/accounts/programmatic-access/</archive>)[Expo Snack](https://docs.expo.dev/accounts/programmatic-access/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/accounts/programmatic-access/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/accounts/programmatic-access/<https:/expo.dev/mailing-list/signup>)
# Programmatic access
[Edit this page](https://docs.expo.dev/accounts/programmatic-access/<https:/github.com/expo/expo/edit/main/docs/pages/accounts/programmatic-access.mdx> "Edit content of this page on GitHub")
Learn about types of access tokens and how to use them.
[Edit this page](https://docs.expo.dev/accounts/programmatic-access/<https:/github.com/expo/expo/edit/main/docs/pages/accounts/programmatic-access.mdx> "Edit content of this page on GitHub")
When setting up CI or writing a script to help manage your projects, we recommend avoiding using your username and password to authenticate. With these credentials, anyone will be able to log in and use your account.
Instead of providing credentials, you can generate tokens that will allow you to manage each integration point separately. Anyone who has access to these tokens will be able to perform actions against your account. Treat them with the same care as a user password. In case something is leaked, you can revoke these tokens to block access.
## Personal access tokens[](https://docs.expo.dev/accounts/programmatic-access/<#personal-access-tokens>)
You can create Personal access tokens from the [Access tokens](https://docs.expo.dev/accounts/programmatic-access/<https:/expo.dev/settings/access-tokens>) on your dashboard. Anyone with this token can perform actions on your behalf. That applies to all content on your Personal Account, as well as any Personal Accounts or Organizations that you have been granted access to.
## Robot users and access tokens[](https://docs.expo.dev/accounts/programmatic-access/<#robot-users-and-access-tokens>)
Accounts can create Robot users to take actions on resources owned by the Account. Bot Users can be assigned [a role](https://docs.expo.dev/accounts/programmatic-access/</accounts/account-types#manage-access>) to limit the actions they are authorized to perform. Bot users cannot sign in to any Expo products, cannot own any projects themselves, and can only authenticate via an access token.
## Access tokens usage[](https://docs.expo.dev/accounts/programmatic-access/<#access-tokens-usage>)
You can use any tokens you have created to perform actions with the EAS CLI. To use tokens, you need to define an environment variable, like `EXPO_TOKEN="token"`, before running commands.
Once you set the `EXPO_TOKEN` environment variable, you can run any EAS CLI command authenticated with the token without running the `eas login` command. The `eas login` command is only used for username and password authentication. The `EXPO_TOKEN` auth method takes precedence over the username and password if both are configured.
For example, once you obtain a token, you can run the following EAS CLI command to trigger a build:
Terminal
Copy
`EXPO_TOKEN=my_token eas build`
If you are using GitHub Actions, [you can configure the `token` property](https://docs.expo.dev/accounts/programmatic-access/<https:/github.com/expo/expo-github-action#configuration-options>) to include this environment variable in all the job steps.
Common situations where access tokens are useful:
  * Publish or build from CI without providing your Expo username and password
  * Renew a token to keep it as secure as possible; no need to reset your password and sign out of all sessions
  * Give someone (or a script) one-time access to your project with limited permissions


## Revoke access tokens[](https://docs.expo.dev/accounts/programmatic-access/<#revoke-access-tokens>)
In case a token is accidentally leaked, you can revoke it without changing your username and password. When you revoke the access token, you block all access to your account using this token. To do this, go to the [Access Token page](https://docs.expo.dev/accounts/programmatic-access/<https:/expo.dev/settings/access-tokens>) on your dashboard and delete the token you want to revoke.
[Previous (Reference - Expo accounts)Two-factor authentication](https://docs.expo.dev/accounts/programmatic-access/</accounts/two-factor>)[Next (Reference - Expo accounts)Single Sign-On (SSO)](https://docs.expo.dev/accounts/programmatic-access/</accounts/sso>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/accounts/programmatic-access/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/accounts/programmatic-access/<https:/github.com/expo/expo/edit/main/docs/pages/accounts/programmatic-access.mdx>)
  * Last updated on December 27, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/accounts/programmatic-access/<https:/expo.dev/privacy>).
On this page
[Personal access tokens](https://docs.expo.dev/accounts/programmatic-access/</accounts/programmatic-access/#personal-access-tokens>)[Robot users and access tokens](https://docs.expo.dev/accounts/programmatic-access/</accounts/programmatic-access/#robot-users-and-access-tokens>)[Access tokens usage](https://docs.expo.dev/accounts/programmatic-access/</accounts/programmatic-access/#access-tokens-usage>)[Revoke access tokens](https://docs.expo.dev/accounts/programmatic-access/</accounts/programmatic-access/#revoke-access-tokens>)
