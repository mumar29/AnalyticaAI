[](https://docs.expo.dev/tutorial/eas/using-github/<https:/expo.dev>)[Docs](https://docs.expo.dev/tutorial/eas/using-github/</>)
[Blog](https://docs.expo.dev/tutorial/eas/using-github/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/tutorial/eas/using-github/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/tutorial/eas/using-github/<https:/github.com/expo/expo>)[](https://docs.expo.dev/tutorial/eas/using-github/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/tutorial/eas/using-github/</>)[Guides](https://docs.expo.dev/tutorial/eas/using-github/</guides/overview>)[EAS](https://docs.expo.dev/tutorial/eas/using-github/</eas>)[Reference](https://docs.expo.dev/tutorial/eas/using-github/</versions/latest>)[Learn](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/overview>)
[Overview](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/overview>)
Expo tutorial
0 of 9
[Introduction](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/introduction>)[Create your first app](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/create-your-first-app>)[Add navigation](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/add-navigation>)[Build a screen](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/build-a-screen>)[Use an image picker](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/image-picker>)[Create a modal](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/create-a-modal>)[Add gestures](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/gestures>)[Take a screenshot](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/screenshot>)[Handle platform differences](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/platform-differences>)[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/configuration>)[Learning resources](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/follow-up>)
EAS tutorial
0 of 11
[Introduction](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/introduction>)[Configure development build](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/configure-development-build>)[Android development build](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/android-development-build>)[iOS development build for simulators](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/ios-development-build-for-simulators>)[iOS development build for devices](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/ios-development-build-for-devices>)[Multiple app variants](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/multiple-app-variants>)[Internal distribution build](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/internal-distribution-builds>)[Manage app versions](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/manage-app-versions>)[Android production build](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/android-production-build>)[iOS production build](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/ios-production-build>)[Share previews](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/team-development>)[Builds from GitHub](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/using-github>)[Next steps](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/next-steps>)
More
[Additional resources](https://docs.expo.dev/tutorial/eas/using-github/</additional-resources>)
[Archive](https://docs.expo.dev/tutorial/eas/using-github/</archive>)[Expo Snack](https://docs.expo.dev/tutorial/eas/using-github/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/tutorial/eas/using-github/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/tutorial/eas/using-github/<https:/expo.dev/mailing-list/signup>)
# Trigger builds from a GitHub repository
[Edit this page](https://docs.expo.dev/tutorial/eas/using-github/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/using-github.mdx> "Edit content of this page on GitHub")
Learn about the process of triggering builds from a GitHub repository.
[Edit this page](https://docs.expo.dev/tutorial/eas/using-github/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/using-github.mdx> "Edit content of this page on GitHub")
[Expo GitHub App](https://docs.expo.dev/tutorial/eas/using-github/</build/building-from-github>) automatically triggers builds from our GitHub projects with EAS. We can trigger builds for any build profile based on our development team's preferences. It also allows triggering builds for `git` push committed directly to a repository or a pull request.
In this chapter, we'll configure this functionality. We already have a GitHub repository for our example app to demonstrate this.
1
## Configure Expo GitHub app[](https://docs.expo.dev/tutorial/eas/using-github/<#configure-expo-github-app>)
To use this functionality, we need to connect our GitHub account:
  * In the Expo dashboard, go to [expo.dev/settings](https://docs.expo.dev/tutorial/eas/using-github/<https:/expo.dev/settings#connections>), and under Connections > GitHub, click Connect. This opens the Connect GitHub accounts page.
  * Click the Get started button which opens a popup to authorize the Expo GitHub app. Click Install and Authorize.
  * Once the app is installed on our GitHub account, we need to link it to our Expo account. In the next popup, click Link installation.
  * Once the account is linked, it will show under GitHub.

![Linked GitHub account shows in Expo dashboard](https://docs.expo.dev/static/images/tutorial/eas/github-01.png)
2
## Connect the GitHub repository[](https://docs.expo.dev/tutorial/eas/using-github/<#connect-the-github-repository>)
To enable triggering builds from a GitHub repository, we need to connect it to our project in the Expo dashboard:
  * In Expo dashboard, go to Project > Configuration > GitHub.
  * Under Connect a GitHub repository, we'll see a list of our GitHub repos. We need to connect the right one. In the example, we're searching for our repo sticker-smash.
  * Click Connect for the project repository.

![List of GitHub repositories to connect to the project in Expo dashboard](https://docs.expo.dev/static/images/tutorial/eas/github-02.png)
3
## Use default repository settings[](https://docs.expo.dev/tutorial/eas/using-github/<#use-default-repository-settings>)
The Expo GitHub app needs to know where to find the source code of our project. By default, it selects the root directory using `/`. In our example project, the source code is also available in the root repository. We can leave this to default in the Expo dashboard.
4
## Trigger a build using a GitHub PR label[](https://docs.expo.dev/tutorial/eas/using-github/<#trigger-a-build-using-a-github-pr-label>)
The Expo GitHub app provides us [multiple options](https://docs.expo.dev/tutorial/eas/using-github/</build/building-from-github#trigger-a-build-from-github>) to trigger a build, such as:
  * Manually from the Builds page for a specific platform
  * Automatically when new code is pushed to the repository
  * Automatically using GitHub PR labels


To automatically trigger a build using a GitHub PR label, we're going to utilize the third option from the list above:
  * We need to specify the build image that we will be using. Open eas.json, and under the `development` profile, add `android.image`[](https://docs.expo.dev/tutorial/eas/using-github/</eas/json#image>) and `ios.image`[](https://docs.expo.dev/tutorial/eas/using-github/</eas/json#image-1>) properties and set their value to `latest`[](https://docs.expo.dev/tutorial/eas/using-github/</build-reference/infrastructure#configuring-build-environment>).
eas.json
Copy
```
{
 "build": {
  "development": {
   %%placeholder-start%%... %%placeholder-end%%
   "android": {
    "image": "latest"
   },
   "ios": {
    "image": "latest"
   }
  }
 }
 %%placeholder-start%%... %%placeholder-end%%
}

```

  * Next, let's create a new branch called `dev`, and make a change in our app's JavaScript code. Then, commit the change, push the branch, and create a PR from that branch.
  * In the PR link, under Labels, create a label called `eas-build-all:development`.

![Creating a label in a GitHub PR](https://docs.expo.dev/static/images/tutorial/eas/github-04.png)
  * Click Create pull request button to create the PR. The Expo GitHub app will start the process of creating a development build.
  * In the Expo dashboard, on the Builds page, we can verify that the builds for both Android and iOS are triggered.

![Builds triggered in the Expo dashboard for Android and iOS platforms](https://docs.expo.dev/static/images/tutorial/eas/github-06.png)
  * If we check the details of an individual build, we can see under Created by that the build is created by the GitHub app.

![Individual build details in the Expo dashboard](https://docs.expo.dev/static/images/tutorial/eas/github-07.png)
## Summary[](https://docs.expo.dev/tutorial/eas/using-github/<#summary>)
Chapter 11: Trigger builds from a GitHub repository
We successfully linked our GitHub account with Expo, connected our repository to our EAS project, and learned about automated development build creation using GitHub PR labels.
Mark this chapter as read
Learn about the next steps to use EAS.
[Next: Next steps in your journey with EAS](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/next-steps>)
[Previous (EAS tutorial)Share previews](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/team-development>)[Next (EAS tutorial)Next steps](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/next-steps>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/tutorial/eas/using-github/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/tutorial/eas/using-github/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/using-github.mdx>)


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/tutorial/eas/using-github/<https:/expo.dev/privacy>).
On this page
[Configure Expo GitHub app](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/using-github/#configure-expo-github-app>)[Connect the GitHub repository](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/using-github/#connect-the-github-repository>)[Use default repository settings](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/using-github/#use-default-repository-settings>)[Trigger a build using a GitHub PR label](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/using-github/#trigger-a-build-using-a-github-pr-label>)[Summary](https://docs.expo.dev/tutorial/eas/using-github/</tutorial/eas/using-github/#summary>)
