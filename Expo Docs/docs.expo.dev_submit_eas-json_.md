[](https://docs.expo.dev/submit/eas-json/<https:/expo.dev>)[Docs](https://docs.expo.dev/submit/eas-json/</>)
[Blog](https://docs.expo.dev/submit/eas-json/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/submit/eas-json/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/submit/eas-json/<https:/github.com/expo/expo>)[](https://docs.expo.dev/submit/eas-json/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/submit/eas-json/</>)[Guides](https://docs.expo.dev/submit/eas-json/</guides/overview>)[EAS](https://docs.expo.dev/submit/eas-json/</eas>)[Reference](https://docs.expo.dev/submit/eas-json/</versions/latest>)[Learn](https://docs.expo.dev/submit/eas-json/</tutorial/overview>)
[Introduction](https://docs.expo.dev/submit/eas-json/</eas>)[Environment variables](https://docs.expo.dev/submit/eas-json/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/submit/eas-json/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/submit/eas-json/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/submit/eas-json/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/submit/eas-json/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/submit/eas-json/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/submit/eas-json/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/submit/eas-json/</build/introduction>)[Create your first build](https://docs.expo.dev/submit/eas-json/</build/setup>)[Configure with eas.json](https://docs.expo.dev/submit/eas-json/</build/eas-json>)[Internal distribution](https://docs.expo.dev/submit/eas-json/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/submit/eas-json/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/submit/eas-json/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/submit/eas-json/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/submit/eas-json/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/submit/eas-json/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/submit/eas-json/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/submit/eas-json/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/submit/eas-json/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/submit/eas-json/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/submit/eas-json/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/submit/eas-json/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/submit/eas-json/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/submit/eas-json/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/submit/eas-json/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/submit/eas-json/</submit/android>)[Submit to Apple](https://docs.expo.dev/submit/eas-json/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/submit/eas-json/</eas-update/introduction>)[Get started](https://docs.expo.dev/submit/eas-json/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/submit/eas-json/</eas/metadata>)[Get started](https://docs.expo.dev/submit/eas-json/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/submit/eas-json/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/submit/eas-json/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/submit/eas-json/</distribution/app-stores>)[App transfers](https://docs.expo.dev/submit/eas-json/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/submit/eas-json/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/submit/eas-json/</eas/json>)[Webhooks](https://docs.expo.dev/submit/eas-json/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/submit/eas-json/</archive>)[Expo Snack](https://docs.expo.dev/submit/eas-json/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/submit/eas-json/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/submit/eas-json/<https:/expo.dev/mailing-list/signup>)
# Configure EAS Submit with eas.json
[Edit this page](https://docs.expo.dev/submit/eas-json/<https:/github.com/expo/expo/edit/main/docs/pages/submit/eas-json.mdx> "Edit content of this page on GitHub")
Learn how to configure your project for EAS Submit with eas.json.
[Edit this page](https://docs.expo.dev/submit/eas-json/<https:/github.com/expo/expo/edit/main/docs/pages/submit/eas-json.mdx> "Edit content of this page on GitHub")
eas.json is the configuration file for EAS CLI and services. It is generated when the `eas build:configure`[ command](https://docs.expo.dev/submit/eas-json/</build/setup#configure-the-project>) runs for the first time in your project and is located next to package.json at the root of your project. Even though eas.json is not mandatory for using EAS Submit, it makes your life easier if you need to switch between different configurations.
## Production profile[](https://docs.expo.dev/submit/eas-json/<#production-profile>)
Running `eas submit` without specifying a profile name will use the `production` profile if it is already defined in eas.json to configure the submission.
An example eas.json with `production` is shown below:
eas.json
Copy
```
{
 "cli": {
  "version": ">= 0.34.0"
 },
 "submit": {
  "production": {
   "android": {
    "serviceAccountKeyPath": "../path/to/api-xxx-yyy-zzz.json",
    "track": "internal"
   },
   "ios": {
    "appleId": "john@turtle.com",
    "ascAppId": "1234567890",
    "appleTeamId": "AB12XYZ34S"
   }
  }
 }
}

Show More

```

## Multiple profiles[](https://docs.expo.dev/submit/eas-json/<#multiple-profiles>)
The JSON object under `submit` can contain multiple submit profiles. Each profile under `submit` can have an arbitrary name as shown in the example below:
eas.json
Copy
```
{
 "cli": {
  "version": "SEMVER_RANGE",
  "requireCommit": boolean
 },
 "build": {
  // EAS Build configuration
  %%placeholder-start%%... %%placeholder-end%%
 }
 "submit": {
  "SUBMIT_PROFILE_NAME_1": {
   "android": {
    ...ANDROID_OPTIONS
   },
   "ios": {
    ...IOS_OPTIONS
   }
  },
  "SUBMIT_PROFILE_NAME_2": {
   "extends": "SUBMIT_PROFILE_NAME_1",
   "android": {
    ...ANDROID_OPTIONS
   }
  },
  %%placeholder-start%%... %%placeholder-end%%
 }
}

Show More

```

When you select a build for submission, it chooses the profile that is used for the selected build. If the profile does not exist, it selects the default `production` profile.
You can also use EAS CLI to pick up another `submit` profile by specifying it with a parameter. For example, `eas submit --platform ios --profile submit-profile-name`.
## Share configuration between `submit` profiles[](https://docs.expo.dev/submit/eas-json/<#share-configuration-between-submit-profiles>)
A `submit` profile can extend another profile using the `extends` key.
For example, in the `preview` profile you may have `"extends": "production"`. This makes the `preview` profile inherit the configuration of the `production` profile.
You can keep chaining profile extensions up to the depth of 5 as long as you avoid making circular dependencies.
## Next step[](https://docs.expo.dev/submit/eas-json/<#next-step>)
[EAS Submit schema referenceLearn about available properties for EAS Submit to configure and override their default behavior from within your project.](https://docs.expo.dev/submit/eas-json/</eas/json#eas-submit>)
[Previous (EAS Submit)Introduction](https://docs.expo.dev/submit/eas-json/</submit/introduction>)[Next (EAS Submit)Submit to Google](https://docs.expo.dev/submit/eas-json/</submit/android>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/submit/eas-json/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/submit/eas-json/<https:/github.com/expo/expo/edit/main/docs/pages/submit/eas-json.mdx>)
  * Last updated on January 22, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/submit/eas-json/<https:/expo.dev/privacy>).
On this page
[Production profile](https://docs.expo.dev/submit/eas-json/</submit/eas-json/#production-profile>)[Multiple profiles](https://docs.expo.dev/submit/eas-json/</submit/eas-json/#multiple-profiles>)[Share configuration between submit profiles](https://docs.expo.dev/submit/eas-json/</submit/eas-json/#share-configuration-between-submit-profiles>)[Next step](https://docs.expo.dev/submit/eas-json/</submit/eas-json/#next-step>)
