[](https://docs.expo.dev/build/automate-submissions/<https:/expo.dev>)[Docs](https://docs.expo.dev/build/automate-submissions/</>)
[Blog](https://docs.expo.dev/build/automate-submissions/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/build/automate-submissions/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/build/automate-submissions/<https:/github.com/expo/expo>)[](https://docs.expo.dev/build/automate-submissions/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/build/automate-submissions/</>)[Guides](https://docs.expo.dev/build/automate-submissions/</guides/overview>)[EAS](https://docs.expo.dev/build/automate-submissions/</eas>)[Reference](https://docs.expo.dev/build/automate-submissions/</versions/latest>)[Learn](https://docs.expo.dev/build/automate-submissions/</tutorial/overview>)
[Introduction](https://docs.expo.dev/build/automate-submissions/</eas>)[Environment variables](https://docs.expo.dev/build/automate-submissions/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/build/automate-submissions/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/build/automate-submissions/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/build/automate-submissions/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/build/automate-submissions/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/build/automate-submissions/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/build/automate-submissions/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/build/automate-submissions/</build/introduction>)[Create your first build](https://docs.expo.dev/build/automate-submissions/</build/setup>)[Configure with eas.json](https://docs.expo.dev/build/automate-submissions/</build/eas-json>)[Internal distribution](https://docs.expo.dev/build/automate-submissions/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/build/automate-submissions/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/build/automate-submissions/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/build/automate-submissions/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/build/automate-submissions/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/build/automate-submissions/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/build/automate-submissions/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/build/automate-submissions/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/build/automate-submissions/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/build/automate-submissions/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/build/automate-submissions/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/build/automate-submissions/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/build/automate-submissions/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/build/automate-submissions/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/build/automate-submissions/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/build/automate-submissions/</submit/android>)[Submit to Apple](https://docs.expo.dev/build/automate-submissions/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/build/automate-submissions/</eas-update/introduction>)[Get started](https://docs.expo.dev/build/automate-submissions/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/build/automate-submissions/</eas/metadata>)[Get started](https://docs.expo.dev/build/automate-submissions/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/build/automate-submissions/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/build/automate-submissions/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/build/automate-submissions/</distribution/app-stores>)[App transfers](https://docs.expo.dev/build/automate-submissions/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/build/automate-submissions/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/build/automate-submissions/</eas/json>)[Webhooks](https://docs.expo.dev/build/automate-submissions/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/build/automate-submissions/</archive>)[Expo Snack](https://docs.expo.dev/build/automate-submissions/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/build/automate-submissions/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/build/automate-submissions/<https:/expo.dev/mailing-list/signup>)
# Automate submissions
[Edit this page](https://docs.expo.dev/build/automate-submissions/<https:/github.com/expo/expo/edit/main/docs/pages/build/automate-submissions.mdx> "Edit content of this page on GitHub")
Learn how to enable automatic submissions with EAS Build.
[Edit this page](https://docs.expo.dev/build/automate-submissions/<https:/github.com/expo/expo/edit/main/docs/pages/build/automate-submissions.mdx> "Edit content of this page on GitHub")
Many mobile deployment processes eventually evolve to the point where the app is automatically submitted to the respective store once an appropriate build is completed. This saves developers from having to wait around for the build to complete, avoids a bit of manual work, and eliminates the need to coordinate providing app store credentials to the team.
EAS Build gives you automatic submissions out of the box with the `--auto-submit` flag. This flag tells EAS Build to pass the build along to EAS Submit with the appropriate submission profile upon completion. Refer to the [EAS Submit documentation](https://docs.expo.dev/build/automate-submissions/</submit/introduction>) for more information on how to set up and configure submissions.
When you run `eas build --auto-submit` you will be provided with a link to a submission details page, where you can track the progress of the submission. You can also find this page at any time on the [submissions dashboard for your project](https://docs.expo.dev/build/automate-submissions/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/submissions>), and it is linked from your build details page.
### Selecting a submission profile[](https://docs.expo.dev/build/automate-submissions/<#selecting-a-submission-profile>)
By default, `--auto-submit` will try to use a submission profile with the same name as the selected build profile. If this does not exist, or if you prefer to use a different profile, you can use `--auto-submit-with-profile=<profile-name>` instead.
### Build profile environment variables and submissions[](https://docs.expo.dev/build/automate-submissions/<#build-profile-environment-variables-and-submissions>)
When running `eas build --profile <profile-name> --auto-submit`, the project's app.config.js will be evaluated using any environment variables associated with the build profile `<profile-name>`. For example, suppose we ran `eas build -p ios --profile production --auto-submit` with the following configuration:
eas.json
Copy
```
{
 "build": {
  "production": {
   "env": {
    "APP_ENV": "production"
   }
  },
  "development": {
   "env": {
    "APP_ENV": "development"
   }
  }
 }
}

```

app.config.js
Copy
```
export default () => {
 return {
  name: process.env.APP_ENV === 'production' ? 'My App' : 'My App (DEV)',
  ios: {
   bundleIdentifier: process.env.APP_ENV === 'production' ? 'com.my.app' : 'com.my.app-dev',
  },
  // ... other config here
 };
};

```

The `APP_ENV` variable from the `production` profile will be used when evaluating app.config.js for the submission, and therefore the name will be 'My App' and the bundle identifier will be 'com.my.app'.
[Previous (EAS Build)Internal distribution](https://docs.expo.dev/build/automate-submissions/</build/internal-distribution>)[Next (EAS Build)Using EAS Update](https://docs.expo.dev/build/automate-submissions/</build/updates>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/build/automate-submissions/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/build/automate-submissions/<https:/github.com/expo/expo/edit/main/docs/pages/build/automate-submissions.mdx>)
  * Last updated on July 13, 2023


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/build/automate-submissions/<https:/expo.dev/privacy>).
On this page
[Selecting a submission profile](https://docs.expo.dev/build/automate-submissions/</build/automate-submissions/#selecting-a-submission-profile>)[Build profile environment variables and submissions](https://docs.expo.dev/build/automate-submissions/</build/automate-submissions/#build-profile-environment-variables-and-submissions>)
