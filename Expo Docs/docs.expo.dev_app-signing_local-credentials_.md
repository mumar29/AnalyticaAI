[](https://docs.expo.dev/app-signing/local-credentials/<https:/expo.dev>)[Docs](https://docs.expo.dev/app-signing/local-credentials/</>)
[Blog](https://docs.expo.dev/app-signing/local-credentials/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/app-signing/local-credentials/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/app-signing/local-credentials/<https:/github.com/expo/expo>)[](https://docs.expo.dev/app-signing/local-credentials/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/app-signing/local-credentials/</>)[Guides](https://docs.expo.dev/app-signing/local-credentials/</guides/overview>)[EAS](https://docs.expo.dev/app-signing/local-credentials/</eas>)[Reference](https://docs.expo.dev/app-signing/local-credentials/</versions/latest>)[Learn](https://docs.expo.dev/app-signing/local-credentials/</tutorial/overview>)
[Introduction](https://docs.expo.dev/app-signing/local-credentials/</eas>)[Environment variables](https://docs.expo.dev/app-signing/local-credentials/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/app-signing/local-credentials/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/app-signing/local-credentials/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/app-signing/local-credentials/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/app-signing/local-credentials/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/app-signing/local-credentials/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/app-signing/local-credentials/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/app-signing/local-credentials/</build/introduction>)[Create your first build](https://docs.expo.dev/app-signing/local-credentials/</build/setup>)[Configure with eas.json](https://docs.expo.dev/app-signing/local-credentials/</build/eas-json>)[Internal distribution](https://docs.expo.dev/app-signing/local-credentials/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/app-signing/local-credentials/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/app-signing/local-credentials/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/app-signing/local-credentials/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/app-signing/local-credentials/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/app-signing/local-credentials/</build/orbit>)
App Signing
[App credentials](https://docs.expo.dev/app-signing/local-credentials/</app-signing/app-credentials>)[Automatically managed credentials](https://docs.expo.dev/app-signing/local-credentials/</app-signing/managed-credentials>)[Local credentials](https://docs.expo.dev/app-signing/local-credentials/</app-signing/local-credentials>)[Existing credentials](https://docs.expo.dev/app-signing/local-credentials/</app-signing/existing-credentials>)[Sync credentials between remote and local sources](https://docs.expo.dev/app-signing/local-credentials/</app-signing/syncing-credentials>)[Security](https://docs.expo.dev/app-signing/local-credentials/</app-signing/security>)[Apple Developer Program roles and permissions](https://docs.expo.dev/app-signing/local-credentials/</app-signing/apple-developer-program-roles-and-permissions>)
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/app-signing/local-credentials/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/app-signing/local-credentials/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/app-signing/local-credentials/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/app-signing/local-credentials/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/app-signing/local-credentials/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/app-signing/local-credentials/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/app-signing/local-credentials/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/app-signing/local-credentials/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/app-signing/local-credentials/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/app-signing/local-credentials/</submit/android>)[Submit to Apple](https://docs.expo.dev/app-signing/local-credentials/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/app-signing/local-credentials/</eas-update/introduction>)[Get started](https://docs.expo.dev/app-signing/local-credentials/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/app-signing/local-credentials/</eas/metadata>)[Get started](https://docs.expo.dev/app-signing/local-credentials/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/app-signing/local-credentials/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/app-signing/local-credentials/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/app-signing/local-credentials/</distribution/app-stores>)[App transfers](https://docs.expo.dev/app-signing/local-credentials/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/app-signing/local-credentials/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/app-signing/local-credentials/</eas/json>)[Webhooks](https://docs.expo.dev/app-signing/local-credentials/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/app-signing/local-credentials/</archive>)[Expo Snack](https://docs.expo.dev/app-signing/local-credentials/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/app-signing/local-credentials/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/app-signing/local-credentials/<https:/expo.dev/mailing-list/signup>)
# Using local credentials
[Edit this page](https://docs.expo.dev/app-signing/local-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/app-signing/local-credentials.mdx> "Edit content of this page on GitHub")
Learn how to configure and use local credentials when using EAS.
[Edit this page](https://docs.expo.dev/app-signing/local-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/app-signing/local-credentials.mdx> "Edit content of this page on GitHub")
You can usually get away with not being a code signing expert by [letting EAS handle it for you](https://docs.expo.dev/app-signing/local-credentials/</app-signing/managed-credentials>). However, there are cases where some users might want to manage their project keystore, certificates and profiles on their own.
If you would like to manage your own app signing credentials, you can use credentials.json to give EAS Build relative paths to the credentials on your local file system and their associated passwords to use them to sign your builds.
## credentials.json[](https://docs.expo.dev/app-signing/local-credentials/<#credentialsjson>)
If you opt-in to local credentials configuration, you'll need to create a credentials.json file at the root of your project, and it should look something like this:
credentials.json
Copy
```
{
 "android": {
  "keystore": {
   "keystorePath": "android/keystores/release.keystore",
   "keystorePassword": "paofohlooZ9e",
   "keyAlias": "keyalias",
   "keyPassword": "aew1Geuthoev"
  }
 },
 "ios": {
  "provisioningProfilePath": "ios/certs/profile.mobileprovision",
  "distributionCertificate": {
   "path": "ios/certs/dist-cert.p12",
   "password": "iex3shi9Lohl"
  }
 }
}

```

> Remember to add credentials.json and all of your credentials to .gitignore so you don't accidentally commit them to the repository and potentially leak your secrets.
### Android credentials[](https://docs.expo.dev/app-signing/local-credentials/<#android-credentials>)
If you want to build an Android app binary you'll need to have a keystore. If you don't have a release keystore yet, you can generate it on your own using the following command (replace `KEYSTORE_PASSWORD`, `KEY_PASSWORD`, `KEY_ALIAS` and `com.expo.your.android.package` with the values of your choice):
Terminal
Copy
`- ``keytool \`
` -genkey -v \`` -storetype JKS \`` -keyalg RSA \`` -keysize 2048 \`` -validity 10000 \`` -storepass KEYSTORE_PASSWORD \`` -keypass KEY_PASSWORD \`` -alias KEY_ALIAS \`` -keystore release.keystore \`` -dname "CN=com.expo.your.android.package,OU=,O=,L=,S=,C=US"`
Once you have the keystore file on your computer, you should move it to the appropriate directory. We recommend you keep your keystores in the android/keystores directory. Remember to git-ignore all your release keystores! If you have run the above keytool command and placed the keystore at android/keystores/release.keystore, you can ignore that file by adding the following line to .gitignore:
.gitignore
Copy
```
android/keystores/release.keystore

```

Create credentials.json and configure it with the credentials:
credentials.json
Copy
```
{
 "android": {
  "keystore": {
   "keystorePath": "android/keystores/release.keystore",
   "keystorePassword": "KEYSTORE_PASSWORD",
   "keyAlias": "KEY_ALIAS",
   "keyPassword": "KEY_PASSWORD"
  }
 },
 "ios": {
  %%placeholder-start%%... %%placeholder-end%%
 }
}

```

  * `keystorePath` points to where the keystore is located on your computer. Both relative (to the project root) and absolute paths are supported.
  * `keystorePassword` is the keystore password. If you have followed the previous steps it's the value of `KEYSTORE_PASSWORD`.
  * `keyAlias` is the key alias. If you have followed the previous steps it's the value of `KEY_ALIAS`.
  * `keyPassword` is the key password. If you have followed the previous steps it's the value of `KEY_PASSWORD`.


### iOS credentials[](https://docs.expo.dev/app-signing/local-credentials/<#ios-credentials>)
There are a few more prerequisites for building the iOS app binary. You need a paid Apple Developer Account, and then you'll need to generate the Distribution Certificate and Provisioning Profile for your application, which can be done via the [Apple Developer Portal](https://docs.expo.dev/app-signing/local-credentials/<https:/developer.apple.com/account/resources/certificates/list>).
Once you have the Distribution Certificate and Provisioning Profile on your computer, you should move them to the appropriate directory. We recommend you keep them in the `ios/certs` directory. In the rest of this document we assume that they are named dist.p12 and profile.mobileprovision respectively.
> Remember to add directory with your credentials to .gitignore, so you don't accidentally commit them to the repository and potentially leak your secrets.
If you have placed the credentials in the suggested directory, you can ignore those files by adding the following line to .gitignore:
.gitignore
Copy
```
ios/certs/*

```

Create (or edit) credentials.json and configure it with the credentials:
credentials.json
Copy
```
{
 "android": {
  %%placeholder-start%%... %%placeholder-end%%
 },
 "ios": {
  "provisioningProfilePath": "ios/certs/profile.mobileprovision",
  "distributionCertificate": {
   "path": "ios/certs/dist.p12",
   "password": "DISTRIBUTION_CERTIFICATE_PASSWORD"
  }
 }
}

```

  * `provisioningProfilePath` points to where the Provisioning Profile is located on your computer. Both relative (to the project root) and absolute paths are supported.
  * `distributionCertificate.path` points to where the Distribution Certificate is located on your computer. Both relative (to the project root) and absolute paths are supported.
  * `distributionCertificate.password` is the password for the Distribution Certificate located at `distributionCertificate.path`.


#### Multi-target project[](https://docs.expo.dev/app-signing/local-credentials/<#multi-target-project>)
If your iOS app is using [App Extensions](https://docs.expo.dev/app-signing/local-credentials/<https:/developer.apple.com/app-extensions/>) like Share Extension, Widget Extension, and so on, you need to provide credentials for every target of the Xcode project. This is necessary because each extension is identified by an individual bundle identifier.
Let's say that your project consists of a main application target (named `multitarget`) and a Share Extension target (named `shareextension`).
![Xcode multi target configuration](https://docs.expo.dev/static/images/eas-build/multi-target.png)
In this case, your credentials.json should look like below:
credentials.json
Copy
```
{
 "ios": {
  "multitarget": {
   "provisioningProfilePath": "ios/certs/multitarget-profile.mobileprovision",
   "distributionCertificate": {
    "path": "ios/certs/dist.p12",
    "password": "DISTRIBUTION_CERTIFICATE_PASSWORD"
   }
  },
  "shareextension": {
   "provisioningProfilePath": "ios/certs/shareextension-profile.mobileprovision",
   "distributionCertificate": {
    "path": "ios/certs/another-dist.p12",
    "password": "ANOTHER_DISTRIBUTION_CERTIFICATE_PASSWORD"
   }
  }
 }
}

Show More

```

## Setting a credentials source[](https://docs.expo.dev/app-signing/local-credentials/<#setting-a-credentials-source>)
You can tell EAS Build how it should resolve credentials by specifying `"credentialsSource": "local"` or `"credentialsSource:" "remote"` on a build profile.
  * If `"local"` is provided, then credentials.json will be used.
  * If `"remote"` is provided, then credentials will be resolved from EAS servers.


For example, maybe you want to use local credentials when deploying to the Amazon Appstore and remote credentials when deploying to the Google Play Store:
eas.json
Copy
```
{
 "build": {
  "amazon-production": {
   "android": {
    "credentialsSource": "local"
   }
  },
  "google-production": {
   "android": {
    "credentialsSource": "remote"
   }
  }
 }
}

```

If you do not set any option, `"credentialsSource"` will default to `"remote"`.
## Using local credentials on builds triggered from CI[](https://docs.expo.dev/app-signing/local-credentials/<#using-local-credentials-on-builds-triggered-from-ci>)
Before you start setting up your CI job, make sure you have your credentials.json and eas.json files configured [as described above](https://docs.expo.dev/app-signing/local-credentials/</app-signing/local-credentials#credentialsjson>).
Developers tend to provide CI jobs with secrets by using environment variables. One of the challenges with this approach is that the credentials.json file contains a JSON object and it might be difficult to escape it properly, so you could assign it to an environment variable. One possible solution to this problem is to convert the file to a base64-encoded string, set an environment variable to that value, and later decode it and restore the file on the CI.
Consider the following steps:
  * Run the following command in the console to generate Base64 string based on your credentials file: 
Terminal
Copy
`- ``base64 credentials.json`
  * On your CI, set the `CREDENTIALS_JSON_BASE64` environment variable with the output of the above command.
  * In the CI job, restore the file using a simple shell command: 
Terminal
Copy
`- ``echo $CREDENTIALS_JSON_BASE64 | base64 -d > credentials.json`


Similarly, you can encode your keystore, provisioning profile and distribution certificate so you can restore them later on the CI. To successfully trigger your build using local credentials from CI, you'll have to make sure all the credentials exist in the CI instance's file system (at the same locations as defined in credentials.json).
Once the restoring steps are in place, you can use the same process described in the [Triggering builds from CI](https://docs.expo.dev/app-signing/local-credentials/</build/building-on-ci>) guide to trigger the builds.
[Previous (EAS Build - App Signing)Automatically managed credentials](https://docs.expo.dev/app-signing/local-credentials/</app-signing/managed-credentials>)[Next (EAS Build - App Signing)Existing credentials](https://docs.expo.dev/app-signing/local-credentials/</app-signing/existing-credentials>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/app-signing/local-credentials/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/app-signing/local-credentials/<https:/github.com/expo/expo/edit/main/docs/pages/app-signing/local-credentials.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/app-signing/local-credentials/<https:/expo.dev/privacy>).
On this page
[credentials.json](https://docs.expo.dev/app-signing/local-credentials/</app-signing/local-credentials/#credentialsjson>)[Android credentials](https://docs.expo.dev/app-signing/local-credentials/</app-signing/local-credentials/#android-credentials>)[iOS credentials](https://docs.expo.dev/app-signing/local-credentials/</app-signing/local-credentials/#ios-credentials>)[Setting a credentials source](https://docs.expo.dev/app-signing/local-credentials/</app-signing/local-credentials/#setting-a-credentials-source>)[Using local credentials on builds triggered from CI](https://docs.expo.dev/app-signing/local-credentials/</app-signing/local-credentials/#using-local-credentials-on-builds-triggered-from-ci>)
