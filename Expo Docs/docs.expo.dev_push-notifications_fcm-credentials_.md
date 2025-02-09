[](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/expo.dev>)[Docs](https://docs.expo.dev/push-notifications/fcm-credentials/</>)
[Blog](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/github.com/expo/expo>)[](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/push-notifications/fcm-credentials/</>)[Guides](https://docs.expo.dev/push-notifications/fcm-credentials/</guides/overview>)[EAS](https://docs.expo.dev/push-notifications/fcm-credentials/</eas>)[Reference](https://docs.expo.dev/push-notifications/fcm-credentials/</versions/latest>)[Learn](https://docs.expo.dev/push-notifications/fcm-credentials/</tutorial/overview>)
[Overview](https://docs.expo.dev/push-notifications/fcm-credentials/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/push-notifications/fcm-credentials/</workflow/overview>)[Configure with app config](https://docs.expo.dev/push-notifications/fcm-credentials/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/push-notifications/fcm-credentials/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/push-notifications/fcm-credentials/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/push-notifications/fcm-credentials/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/push-notifications/fcm-credentials/</guides/permissions>)[Environment variables](https://docs.expo.dev/push-notifications/fcm-credentials/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/push-notifications/fcm-credentials/</router/introduction>)[Installation](https://docs.expo.dev/push-notifications/fcm-credentials/</router/installation>)[Create pages](https://docs.expo.dev/push-notifications/fcm-credentials/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/push-notifications/fcm-credentials/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/push-notifications/fcm-credentials/</router/layouts>)[Error handling](https://docs.expo.dev/push-notifications/fcm-credentials/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/push-notifications/fcm-credentials/</modules/overview>)[Get started](https://docs.expo.dev/push-notifications/fcm-credentials/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/overview>)[About notification types](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/receiving-notifications>)
Reference
[Add Android FCM V1 credentials](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/fcm-credentials>)[Send notifications with FCM and APNs](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/sending-notifications-custom>)[Troubleshooting and FAQ](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/faq>)
More
[Upgrade Expo SDK](https://docs.expo.dev/push-notifications/fcm-credentials/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/push-notifications/fcm-credentials/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/push-notifications/fcm-credentials/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/push-notifications/fcm-credentials/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/push-notifications/fcm-credentials/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/push-notifications/fcm-credentials/</archive>)[Expo Snack](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/expo.dev/mailing-list/signup>)
# Obtain Google Service Account Keys using FCM V1
[Edit this page](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/fcm-credentials.mdx> "Edit content of this page on GitHub")
Learn how to create or use a Google Service Account Key for sending Android Notifications using FCM.
[Edit this page](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/fcm-credentials.mdx> "Edit content of this page on GitHub")
## Create a new Google Service Account Key[](https://docs.expo.dev/push-notifications/fcm-credentials/<#create-a-new-google-service-account-key>)
Here are the steps to configure a new Google Service Account Key in EAS for sending Android Notifications using FCM V1.
1
Create a new Firebase project for your app in the [Firebase Console](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/console.firebase.google.com>). If you already have a Firebase project for your app, continue to the next step.
![Create a project in the Firebase Console](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/01-new-firebase-project.png)
2
In the Firebase console, open Project settings > [Service accounts](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk>) for your project.
![Service accounts settings tab in Firebase console](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/02-manage-service-accounts.png)
3
Click Generate New Private Key, then confirm by clicking Generate Key. Securely store the JSON file containing the private key.
![Generate a new private key in the Firebase Console](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/03-generate-key.png)
4
Upload the JSON file to EAS and configure it for sending Android notifications. This can be done using EAS CLI or in [Expo dashboard](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/expo.dev>).
EAS CLI
expo.dev
  * Run `eas credentials`
  * Select `Android` > `production` > `Google Service Account`
  * Select `Manage your Google Service Account Key for Push Notifications (FCM V1)`
  * Select `Set up a Google Service Account Key for Push Notifications (FCM V1)` > `Upload a new service account key`
  * If you've previously stored the JSON file in your project directory, the EAS CLI automatically detects the file and prompts you to select it. Press `Y` to continue.


> Note: Add the JSON file to your version source control's ignore file (for example, .gitignore) to avoid committing it to your repository since it contains sensitive data.
  * Under Project > Configuration, click [Credentials](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/credentials>) in the navigation menu
  * For Android, click Add Application Identifier or select an existing Application identifier
  * Under Service Credentials > FCM V1 service account key, click Add a service account key

![Project credentials page on expo.dev](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/04-upload-credential-1.png)
  * Under Upload new key, upload your JSON credential and click Save

![Save the service account key file to the project](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/04-upload-credential-2.png)
5
Configure the google-services.json file in your project. Download it from the Firebase Console and place it at the root of your project directory.
Note: You can skip this step if google-services.json has already been set up.
![Download google-services.json from Firebase Cloud Console](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/05-setup-google-services-json.png)
In app.json, add `expo.android.googleServicesFile`[](https://docs.expo.dev/push-notifications/fcm-credentials/</versions/latest/config/app#googleservicesfile>) with its value as the path of the google-services.json.
app.json
Copy
```
{
 "expo": {
 %%placeholder-start%%...%%placeholder-end%%
 "android": {
  %%placeholder-start%%...%%placeholder-end%%
  "googleServicesFile": "./path/to/google-services.json"
 }
}

```

6
You're all set! You can now send notifications to Android devices via Expo Push Notifications using the FCM V1 protocol.
![Service account key successfully uploaded](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/06-upload-credential-complete.png)
## Use an existing Google Service Account Key[](https://docs.expo.dev/push-notifications/fcm-credentials/<#use-an-existing-google-service-account-key>)
1
Open the [IAM Admin page](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/console.cloud.google.com/iam-admin/iam?authuser=0>) in Google Cloud Console. In the Permissions tab, locate the Principal you intend to modify and click the pencil icon for Edit Principal.
![Edit Principal in IAM Admin page in Google Cloud Console](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/existing-service-account/01-iam-admin-page.png)
2
Click Add Role and select the Firebase Messaging API Admin role from the dropdown. Click Save.
![Assign roles](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/existing-service-account/02-add-role-1.png)![Select the Firebase Messaging API Admin role](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/existing-service-account/02-add-role-2.png)![Save the role assignment](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/existing-service-account/02-add-role-3.png)
3
You have to specify to EAS which JSON credential file to use for sending FCM V1 notifications, using EAS CLI or in [Expo dashboard](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/expo.dev>). You can upload a new JSON file or select a previously uploaded file.
EAS CLI
expo.dev
  * Run `eas credentials`
  * Select `Android` > `production` > `Google Service Account`
  * Select `Manage your Google Service Account Key for Push Notifications (FCM V1)`
  * Select `Set up a Google Service Account Key for Push Notifications (FCM V1)` > `Upload a new service account key`
  * The EAS CLI automatically detects the file on your local machine and prompts you to select it. Press `Y` to continue.


> Note: Add the JSON file to your version source control's ignore file (for example, .gitignore) to avoid committing it to your repository since it contains sensitive data.
  * Under Project > Configuration, click [Credentials](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/credentials>) in the navigation menu
  * For Android, click Add Application Identifier or select an existing Application identifier
  * Under Service Credentials > FCM V1 service account key, click Add a service account key

![Project credentials page on expo.dev](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/04-upload-credential-1.png)
  * Under Upload new key, upload your JSON credential and click Save

![Save the service account key file to the project](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/04-upload-credential-2.png)
4
Configure the google-services.json file in your project. Download it from the Firebase Console and place it at the root of your project directory. If you're using version control, add it to your ignore file (for example, .gitignore) as it contains sensitive data.
Note: You can skip this step if google-services.json has already been set up.
![Download google-services.json from Firebase Cloud Console](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/existing-service-account/04-setup-google-services-json.png)
In app.json, add `expo.android.googleServicesFile`[](https://docs.expo.dev/push-notifications/fcm-credentials/</versions/latest/config/app#googleservicesfile>) with its value as the path of the google-services.json.
app.json
Copy
```
{
 "expo": {
  %%placeholder-start%%...%%placeholder-end%%
  "android": {
   %%placeholder-start%%...%%placeholder-end%% "googleServicesFile": "./path/to/google-services.json"
  }
 }
}

```

5
You're all set! You can now send notifications to Android devices via Expo Push Notifications using the FCM V1 protocol.
![Service account key successfully uploaded](https://docs.expo.dev/static/images/creating-google-service-account/fcm-v1/new-service-account/06-upload-credential-complete.png)
[Previous (Push notifications)Handle incoming notifications](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/receiving-notifications>)[Next (Push notifications - Reference)Send notifications with FCM and APNs](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/sending-notifications-custom>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/push-notifications/fcm-credentials.mdx>)
  * Last updated on January 11, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/push-notifications/fcm-credentials/<https:/expo.dev/privacy>).
On this page
[Create a new Google Service Account Key](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/fcm-credentials/#create-a-new-google-service-account-key>)[Use an existing Google Service Account Key](https://docs.expo.dev/push-notifications/fcm-credentials/</push-notifications/fcm-credentials/#use-an-existing-google-service-account-key>)
