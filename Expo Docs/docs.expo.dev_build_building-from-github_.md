[](https://docs.expo.dev/build/building-from-github/<https:/expo.dev>)[Docs](https://docs.expo.dev/build/building-from-github/</>)
[Blog](https://docs.expo.dev/build/building-from-github/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/build/building-from-github/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/build/building-from-github/<https:/github.com/expo/expo>)[](https://docs.expo.dev/build/building-from-github/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/build/building-from-github/</>)[Guides](https://docs.expo.dev/build/building-from-github/</guides/overview>)[EAS](https://docs.expo.dev/build/building-from-github/</eas>)[Reference](https://docs.expo.dev/build/building-from-github/</versions/latest>)[Learn](https://docs.expo.dev/build/building-from-github/</tutorial/overview>)
[Introduction](https://docs.expo.dev/build/building-from-github/</eas>)[Environment variables](https://docs.expo.dev/build/building-from-github/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/build/building-from-github/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/build/building-from-github/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/build/building-from-github/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/build/building-from-github/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/build/building-from-github/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/build/building-from-github/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/build/building-from-github/</build/introduction>)[Create your first build](https://docs.expo.dev/build/building-from-github/</build/setup>)[Configure with eas.json](https://docs.expo.dev/build/building-from-github/</build/eas-json>)[Internal distribution](https://docs.expo.dev/build/building-from-github/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/build/building-from-github/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/build/building-from-github/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/build/building-from-github/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/build/building-from-github/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/build/building-from-github/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/build/building-from-github/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/build/building-from-github/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/build/building-from-github/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/build/building-from-github/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/build/building-from-github/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/build/building-from-github/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/build/building-from-github/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/build/building-from-github/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/build/building-from-github/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/build/building-from-github/</submit/android>)[Submit to Apple](https://docs.expo.dev/build/building-from-github/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/build/building-from-github/</eas-update/introduction>)[Get started](https://docs.expo.dev/build/building-from-github/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/build/building-from-github/</eas/metadata>)[Get started](https://docs.expo.dev/build/building-from-github/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/build/building-from-github/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/build/building-from-github/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/build/building-from-github/</distribution/app-stores>)[App transfers](https://docs.expo.dev/build/building-from-github/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/build/building-from-github/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/build/building-from-github/</eas/json>)[Webhooks](https://docs.expo.dev/build/building-from-github/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/build/building-from-github/</archive>)[Expo Snack](https://docs.expo.dev/build/building-from-github/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/build/building-from-github/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/build/building-from-github/<https:/expo.dev/mailing-list/signup>)
# Trigger builds from the Expo GitHub App
[Edit this page](https://docs.expo.dev/build/building-from-github/<https:/github.com/expo/expo/edit/main/docs/pages/build/building-from-github.mdx> "Edit content of this page on GitHub")
Learn how to trigger builds on EAS for your app using the Expo GitHub App.
[Edit this page](https://docs.expo.dev/build/building-from-github/<https:/github.com/expo/expo/edit/main/docs/pages/build/building-from-github.mdx> "Edit content of this page on GitHub")
This guide explains how to trigger builds directly from your GitHub repository using the Expo GitHub App.
## Prerequisites[](https://docs.expo.dev/build/building-from-github/<#prerequisites>)
### Set the `image` field in your eas.json[](https://docs.expo.dev/build/building-from-github/<#set-the-image-field-in-your-easjson>)
For the build profiles you want to use with GitHub, specify an `image`[](https://docs.expo.dev/build/building-from-github/</eas/json#image>) to use for the native platform in eas.json.
Use the `latest` image if your project's configuration does not rely on a specific [build image](https://docs.expo.dev/build/building-from-github/</build-reference/infrastructure>). For example:
eas.json
Copy
```
{
 %%placeholder-start%%... %%placeholder-end%%
 "build": {
  "production": {
   "android": {
    "image": "latest"
   },
   "ios": {
    "image": "latest"
   }
  }
 }
}

```

### Run a successful build from your local machine[](https://docs.expo.dev/build/building-from-github/<#run-a-successful-build-from-your-local-machine>)
To trigger EAS builds from a GitHub repo, you'll need to configure your project for EAS Build and successfully run a build from your computer for each platform that you'd like to support on GitHub.
If you haven't successfully run `eas build -p [all|ios|android]` yet, see [Create your first build](https://docs.expo.dev/build/building-from-github/</build/setup>) for more information. Once you have, continue with the steps in this guide.
The following must also be true:
  * An Expo user in the organization must have a linked GitHub user with access to the target repository. Check [User settings > Connections](https://docs.expo.dev/build/building-from-github/<https:/expo.dev/settings#connections>) and verify that your GitHub user account is linked.
  * You must accept the permissions requested by the [Expo GitHub app](https://docs.expo.dev/build/building-from-github/<https:/github.com/settings/installations>).


## Configure your app for GitHub[](https://docs.expo.dev/build/building-from-github/<#configure-your-app-for-github>)
### Link your GitHub repository to your Expo project[](https://docs.expo.dev/build/building-from-github/<#link-your-github-repository-to-your-expo-project>)
Visit your project's [GitHub settings](https://docs.expo.dev/build/building-from-github/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5BprojectName%5D/github>).
![The project GitHub settings page](https://docs.expo.dev/static/images/eas-build/build-from-github/project-github-page.png)
Install the Expo GitHub App on your GitHub account.
> Note: You must have [Owner or Admin access](https://docs.expo.dev/build/building-from-github/</accounts/account-types#manage-access>) of the Expo account to install the app.
![The GitHub app installation UI](https://docs.expo.dev/static/images/eas-build/build-from-github/install-github-app.png)
Then, link the GitHub repository to your Expo project.
> Note: You can only link [GitHub organization repositories](https://docs.expo.dev/build/building-from-github/<https:/docs.github.com/en/organizations>) to Expo organizations.
![The repository selector on the Expo project GitHub settings page](https://docs.expo.dev/static/images/eas-build/build-from-github/connect-a-repository.png)
To add a repository from a different GitHub account, click the Add new account option in the account selector dropdown.
![The account selector on the Expo project GitHub settings page](https://docs.expo.dev/static/images/eas-build/build-from-github/add-new-account.png)
### Configure your repository settings[](https://docs.expo.dev/build/building-from-github/<#configure-your-repository-settings>)
Before you run a build, the Expo GitHub App needs to know where to find the source code for your project. If your Expo project source code is in the root of your repository, then you don't need to do anything. If your Expo project source code is in a subdirectory, then you'll need to configure "Base directory" settings for your repository on your project's [GitHub settings page](https://docs.expo.dev/build/building-from-github/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5BprojectName%5D/github>).
![The base directory input on the Expo project GitHub settings page](https://docs.expo.dev/static/images/eas-build/build-from-github/specify-base-directory.png)
## Trigger a build from GitHub[](https://docs.expo.dev/build/building-from-github/<#trigger-a-build-from-github>)
Once you have configured your app for GitHub, you can trigger a build from GitHub by using the UI on your project's build list page or by labels on your GitHub PRs.
### Build using the Expo website[](https://docs.expo.dev/build/building-from-github/<#build-using-the-expo-website>)
Visit your project's [build list page](https://docs.expo.dev/build/building-from-github/<https:/expo.dev/accounts/%5Baccount%5D/projects/%5BprojectName%5D/builds>) and click the "Build from GitHub" button. You'll be prompted to select a Git ref (branch/commit/tag), a platform to build for, and the build profile to apply to it.
You can also specify a base directory for this specific build. That will not change the global settings for this project.
![The build from GitHub UI on the Expo project builds list page](https://docs.expo.dev/static/images/eas-build/build-from-github/github-build-ui.png)
### Build using GitHub PR labels[](https://docs.expo.dev/build/building-from-github/<#build-using-github-pr-labels>)
You can trigger a build from a GitHub PR by adding a label to the PR. The label must be in the form of `eas-build-[platform]:[profile]` where `[platform]` is either `android`, `ios`, or `all` and `[profile]` is the name of a build profile specified in your eas.json file. If you don't specify a build platform, it will default to `all`. If you don't specify a build profile, it will default to `production`.
For example, if you want to trigger a production build for Android, add the label `eas-build-android` to the PR.
![A PR with the eas-build label and live status checks](https://docs.expo.dev/static/images/eas-build/build-from-github/eas-build-label.png)
The build will be triggered for the latest commit on the PR's base branch. You can view the status of the build in the PR's checks. A link to the build will be available in the check's details.
![EAS Build check details on a GitHub PR](https://docs.expo.dev/static/images/eas-build/build-from-github/gh-check-details.png)
### Build automatically when code is pushed to repository[](https://docs.expo.dev/build/building-from-github/<#build-automatically-when-code-is-pushed-to-repository>)
You can take your build automation further by automatically building your Expo project when you push code to GitHub.
#### Set up build triggers[](https://docs.expo.dev/build/building-from-github/<#set-up-build-triggers>)
You can set up build triggers to configure when EAS builds your app from GitHub. We allow you to build when pushing to a branch, pull request, and Git tag.
Open your Expo project in the dashboard. To create a build trigger, scroll down to the Build triggers section of the project GitHub settings page and click New Build Trigger.
![The build triggers section on the Expo project GitHub settings page](https://docs.expo.dev/static/images/eas-build/build-from-github/empty-build-triggers-table.png)
When you click New Build Trigger, you will be presented with a form to configure how this build should run.
These patterns can include wildcards represented by asterisks (`*`), which can match any character and number of characters inside the pattern. For example, `releases/*` can match `releases/`, `release/1234`, `release/genesis`, and so on. If you specify the pattern as a sole asterisk (`*`), all branches/tags will be matched.
![The default state of the new build trigger form](https://docs.expo.dev/static/images/eas-build/build-from-github/empty-build-trigger-form.png)
You can also configure triggers for specific platforms and build profiles. If you select multiple platforms, a separate trigger will be made for each.
![A filled-out version of the new build trigger form](https://docs.expo.dev/static/images/eas-build/build-from-github/filled-build-trigger-form.png) ![The build triggers section on the Expo project GitHub settings page filled with build triggers](https://docs.expo.dev/static/images/eas-build/build-from-github/filled-build-triggers-table.png)
When you push to a branch or tag, you can find the builds by looking at a commit's Checks section.
![The GitHub checks section on a branch commit](https://docs.expo.dev/static/images/eas-build/build-from-github/builds-executed-automatically-on-branch.png) ![The GitHub checks section on a tag commit](https://docs.expo.dev/static/images/eas-build/build-from-github/tag-triggered-build.png)
For pull requests, you can configure a target branch pattern. This is the destination branch of the pull request you want to build. The same rules apply for wildcards here as well.
![The build trigger form for pull request](https://docs.expo.dev/static/images/eas-build/build-from-github/pull-request-trigger-form.png)
When you push to a pull request with a source and target branch matching this trigger, you'll find these builds in the checks section of the pull request:
![The GitHub checks section on a pull request](https://docs.expo.dev/static/images/eas-build/build-from-github/pull-request-triggered-build.png)
> Note: To trigger builds from a pull request, the pull request's author must be a collaborator on the GitHub repository. If you want to build pull requests from external contributors, [apply a PR Label](https://docs.expo.dev/build/building-from-github/</build/building-from-github#build-using-github-pr-labels>).
#### Manage build triggers[](https://docs.expo.dev/build/building-from-github/<#manage-build-triggers>)
On your project's GitHub settings page in the Expo dashboard, you can click the options button to the right of a build trigger row to disable, edit, or delete the trigger.
![The options button on the build trigger row](https://docs.expo.dev/static/images/eas-build/build-from-github/edit-trigger-option.png)
You can also run a GitHub build with the parameters from the trigger manually. This will not count towards your automatic build trigger record.
#### Automatic app stores submission with EAS Submit[](https://docs.expo.dev/build/building-from-github/<#automatic-app-stores-submission-with-eas-submit>)
Once your build completes, you can automatically submit your app to the app stores using EAS Submit. This feature streamlines the process, reducing the manual steps required to publish your app.
To enable automatic submission, you need to configure your build triggers to include submission as part of the build process. Here's how you can set it up:
  * Navigate to your project's GitHub settings page on the Expo dashboard.
  * Find the build trigger you want to modify, and click the options button.
  * Select Edit trigger and in the dialog that appears, check the option Submit to store after build.

![The EAS Submit form fields on the trigger edit form](https://docs.expo.dev/static/images/eas-build/build-from-github/eas-submit-form-fields.png)
  * Save your changes.

![An enabled build trigger with automatic submission enabled](https://docs.expo.dev/static/images/eas-build/build-from-github/auto-submit-trigger-column.png)
Once enabled, every time a build is triggered from this configuration, it will automatically be submitted to the app stores you have configured in your eas.json under the `submit` field.
> Note: Ensure that your eas.json is properly configured for submission, including specifying the correct app store's credentials and submission profile. For more information, see the [EAS Submit](https://docs.expo.dev/build/building-from-github/</submit/eas-json>).
### Troubleshooting[](https://docs.expo.dev/build/building-from-github/<#troubleshooting>)
  * When things go wrong, we will comment on the commit we attempted to build with some error information. We also show the latest result in the build triggers UI, which includes error information when you hover the Error tag.

![Status UI on the build trigger UI](https://docs.expo.dev/static/images/eas-build/build-from-github/trigger-troubleshooting-status.png)
  * Double check everything in the [Prerequisites](https://docs.expo.dev/build/building-from-github/</build/building-from-github#prerequisites>) section is true when trying to build.
  * Confirm that your base directory is accurate if you're using a monorepo setup.
  * Is your build profile correct? If a matching profile can't be found in eas.json, the build will not dispatch.


[Previous (EAS Build)Trigger builds from CI](https://docs.expo.dev/build/building-from-github/</build/building-on-ci>)[Next (EAS Build)Expo Orbit](https://docs.expo.dev/build/building-from-github/</build/orbit>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/build/building-from-github/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/build/building-from-github/<https:/github.com/expo/expo/edit/main/docs/pages/build/building-from-github.mdx>)
  * Last updated on September 23, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/build/building-from-github/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#prerequisites>)[Set the image field in your eas.json](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#set-the-image-field-in-your-easjson>)[Run a successful build from your local machine](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#run-a-successful-build-from-your-local-machine>)[Configure your app for GitHub](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#configure-your-app-for-github>)[Link your GitHub repository to your Expo project](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#link-your-github-repository-to-your-expo-project>)[Configure your repository settings](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#configure-your-repository-settings>)[Trigger a build from GitHub](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#trigger-a-build-from-github>)[Build using the Expo website](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#build-using-the-expo-website>)[Build using GitHub PR labels](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#build-using-github-pr-labels>)[Build automatically when code is pushed to repository](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#build-automatically-when-code-is-pushed-to-repository>)[Troubleshooting](https://docs.expo.dev/build/building-from-github/</build/building-from-github/#troubleshooting>)
