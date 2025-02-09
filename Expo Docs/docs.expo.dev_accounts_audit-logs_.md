[](https://docs.expo.dev/accounts/audit-logs/<https:/expo.dev>)[Docs](https://docs.expo.dev/accounts/audit-logs/</>)
[Blog](https://docs.expo.dev/accounts/audit-logs/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/accounts/audit-logs/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/accounts/audit-logs/<https:/github.com/expo/expo>)[](https://docs.expo.dev/accounts/audit-logs/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/accounts/audit-logs/</>)[Guides](https://docs.expo.dev/accounts/audit-logs/</guides/overview>)[EAS](https://docs.expo.dev/accounts/audit-logs/</eas>)[Reference](https://docs.expo.dev/accounts/audit-logs/</versions/latest>)[Learn](https://docs.expo.dev/accounts/audit-logs/</tutorial/overview>)
[Introduction](https://docs.expo.dev/accounts/audit-logs/</eas>)[Environment variables](https://docs.expo.dev/accounts/audit-logs/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/accounts/audit-logs/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/accounts/audit-logs/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/accounts/audit-logs/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/accounts/audit-logs/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/accounts/audit-logs/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/accounts/audit-logs/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/accounts/audit-logs/</build/introduction>)[Create your first build](https://docs.expo.dev/accounts/audit-logs/</build/setup>)[Configure with eas.json](https://docs.expo.dev/accounts/audit-logs/</build/eas-json>)[Internal distribution](https://docs.expo.dev/accounts/audit-logs/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/accounts/audit-logs/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/accounts/audit-logs/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/accounts/audit-logs/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/accounts/audit-logs/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/accounts/audit-logs/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/accounts/audit-logs/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/accounts/audit-logs/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/accounts/audit-logs/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/accounts/audit-logs/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/accounts/audit-logs/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/accounts/audit-logs/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/accounts/audit-logs/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/accounts/audit-logs/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/accounts/audit-logs/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/accounts/audit-logs/</submit/android>)[Submit to Apple](https://docs.expo.dev/accounts/audit-logs/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/accounts/audit-logs/</eas-update/introduction>)[Get started](https://docs.expo.dev/accounts/audit-logs/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/accounts/audit-logs/</eas/metadata>)[Get started](https://docs.expo.dev/accounts/audit-logs/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/accounts/audit-logs/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/accounts/audit-logs/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/accounts/audit-logs/</distribution/app-stores>)[App transfers](https://docs.expo.dev/accounts/audit-logs/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/accounts/audit-logs/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/accounts/audit-logs/</eas/json>)[Webhooks](https://docs.expo.dev/accounts/audit-logs/</eas/webhooks>)
Expo accounts
[Account types](https://docs.expo.dev/accounts/audit-logs/</accounts/account-types>)[Two-factor authentication](https://docs.expo.dev/accounts/audit-logs/</accounts/two-factor>)[Programmatic access](https://docs.expo.dev/accounts/audit-logs/</accounts/programmatic-access>)[Single Sign-On (SSO)](https://docs.expo.dev/accounts/audit-logs/</accounts/sso>)[Audit logs](https://docs.expo.dev/accounts/audit-logs/</accounts/audit-logs>)
Billing
[Archive](https://docs.expo.dev/accounts/audit-logs/</archive>)[Expo Snack](https://docs.expo.dev/accounts/audit-logs/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/accounts/audit-logs/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/accounts/audit-logs/<https:/expo.dev/mailing-list/signup>)
# Audit logs
[Edit this page](https://docs.expo.dev/accounts/audit-logs/<https:/github.com/expo/expo/edit/main/docs/pages/accounts/audit-logs.mdx> "Edit content of this page on GitHub")
Learn how to track and analyze your account's activities by using the audit logs.
[Edit this page](https://docs.expo.dev/accounts/audit-logs/<https:/github.com/expo/expo/edit/main/docs/pages/accounts/audit-logs.mdx> "Edit content of this page on GitHub")
> Audit logs are available for [Enterprise plan](https://docs.expo.dev/accounts/audit-logs/<https:/expo.dev/pricing>) customers.
Audit logs record actions made with Expo Application Services (EAS) by accounts. Recorded data includes information about the affected entities, the type of modification made to them, who performed the action, and when the activity occurred.
## Key points[](https://docs.expo.dev/accounts/audit-logs/<#key-points>)
  * Audit logs can only be created and never modified or deleted, they serve as a source of truth to help monitor events and debug issues occurring within accounts.
  * Audit logs are available to Enterprise plan customers. When subscribed, some of the logs used internally by Expo are immediately available, while other types of logs are starting to be collected after the subscription is activated.
  * Audit logs are stored for 1.5 years. If an account is deleted, its audit logs will be deleted after 90 days.
  * To access them, go to Account settings > [Audit logs](https://docs.expo.dev/accounts/audit-logs/<https:/expo.dev/accounts/%5Baccount%5D/settings/audit-logs>).

![Screenshot showing the audit logs page for an account.](https://docs.expo.dev/static/images/accounts/audit-logs.png)
## Use cases[](https://docs.expo.dev/accounts/audit-logs/<#use-cases>)
### Permission monitoring[](https://docs.expo.dev/accounts/audit-logs/<#permission-monitoring>)
Audit logs can track user invitations and permission changes within your organization. An example security event could include a compromised employee account that invites an attacker into an organization and changes their permission to [Admin](https://docs.expo.dev/accounts/audit-logs/</accounts/account-types#manage-access>).
In this scenario, audit logs would record which employee account invited the attacker and modified permissions. Since audit logs are immutable, the attacker would not be able to delete this recorded history. Other organization members will be able to review the audit logs to determine which account was compromised, take action to revoke the attacker's permissions and secure the employee's account.
### Access history[](https://docs.expo.dev/accounts/audit-logs/<#access-history>)
An Expo organization account can include many projects where development access is controlled by distribution certificates assigned to individual teams. When devices are granted to join these teams, it is important to track when access is granted and removed for historical record keeping. While a device may not currently be included in an Apple team, it may be useful to see who previously had access to the team in the event of an internal security incident.
The Apple devices listed within the Expo team's settings will only show devices that are currently registered to an account, but with the creation of audit logs, historical modifications of Apple teams and devices can be viewed.
## Audit log entities[](https://docs.expo.dev/accounts/audit-logs/<#audit-log-entities>)
While we are working on adding more entities in future, the following entities are already enabled:
  * Accounts
  * Android App Credentials
  * Android Keystore
  * Apple devices
  * Apple Distribution Certificate
  * Apple Provisioning Profile
  * Apple Team
  * App Store Connect API key
  * Google Service Account key
  * iOS App Credentials
  * Project
  * User Invitations
  * User Permissions


### Structure[](https://docs.expo.dev/accounts/audit-logs/<#structure>)
Audit log entries include the following fields:
Field| Description  
---|---  
Actor| The account actor that performed the particular action.  
Entity Type| The object that was modified with one of the modification types: `CREATE`, `UPDATE`, `DELETE`.  
Mutation Type| The type of modification: `CREATE`, `UPDATE`, `DELETE`.  
Created At| When the particular action was performed.  
Additionally, clicking on an Audit log row, you can view the metadata relevant to that log.
![Screenshot showing the details drawer for an audit log.](https://docs.expo.dev/static/images/accounts/audit-logs-details.png)
## Export[](https://docs.expo.dev/accounts/audit-logs/<#export>)
  * Audit logs are available to Enterprise plan customers. When subscribed, some of the logs used internally by Expo are immediately available, while other types of logs will be collected after the subscription is activated.


Export is available with a time range of up to 30 days. The exported file will include all the fields shown on the Audit logs page except for the Message field.
[Previous (Reference - Expo accounts)Single Sign-On (SSO)](https://docs.expo.dev/accounts/audit-logs/</accounts/sso>)[Next (Reference - Billing)Overview](https://docs.expo.dev/accounts/audit-logs/</billing/overview>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/accounts/audit-logs/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/accounts/audit-logs/<https:/github.com/expo/expo/edit/main/docs/pages/accounts/audit-logs.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/accounts/audit-logs/<https:/expo.dev/privacy>).
On this page
[Key points](https://docs.expo.dev/accounts/audit-logs/</accounts/audit-logs/#key-points>)[Use cases](https://docs.expo.dev/accounts/audit-logs/</accounts/audit-logs/#use-cases>)[Permission monitoring](https://docs.expo.dev/accounts/audit-logs/</accounts/audit-logs/#permission-monitoring>)[Access history](https://docs.expo.dev/accounts/audit-logs/</accounts/audit-logs/#access-history>)[Audit log entities](https://docs.expo.dev/accounts/audit-logs/</accounts/audit-logs/#audit-log-entities>)[Structure](https://docs.expo.dev/accounts/audit-logs/</accounts/audit-logs/#structure>)[Export](https://docs.expo.dev/accounts/audit-logs/</accounts/audit-logs/#export>)
