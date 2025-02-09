[](https://docs.expo.dev/tutorial/eas/team-development/<https:/expo.dev>)[Docs](https://docs.expo.dev/tutorial/eas/team-development/</>)
[Blog](https://docs.expo.dev/tutorial/eas/team-development/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/tutorial/eas/team-development/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/tutorial/eas/team-development/<https:/github.com/expo/expo>)[](https://docs.expo.dev/tutorial/eas/team-development/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/tutorial/eas/team-development/</>)[Guides](https://docs.expo.dev/tutorial/eas/team-development/</guides/overview>)[EAS](https://docs.expo.dev/tutorial/eas/team-development/</eas>)[Reference](https://docs.expo.dev/tutorial/eas/team-development/</versions/latest>)[Learn](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/overview>)
[Overview](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/overview>)
Expo tutorial
0 of 9
[Introduction](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/introduction>)[Create your first app](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/create-your-first-app>)[Add navigation](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/add-navigation>)[Build a screen](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/build-a-screen>)[Use an image picker](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/image-picker>)[Create a modal](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/create-a-modal>)[Add gestures](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/gestures>)[Take a screenshot](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/screenshot>)[Handle platform differences](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/platform-differences>)[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/configuration>)[Learning resources](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/follow-up>)
EAS tutorial
0 of 11
[Introduction](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/introduction>)[Configure development build](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/configure-development-build>)[Android development build](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/android-development-build>)[iOS development build for simulators](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/ios-development-build-for-simulators>)[iOS development build for devices](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/ios-development-build-for-devices>)[Multiple app variants](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/multiple-app-variants>)[Internal distribution build](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/internal-distribution-builds>)[Manage app versions](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/manage-app-versions>)[Android production build](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/android-production-build>)[iOS production build](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/ios-production-build>)[Share previews](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/team-development>)[Builds from GitHub](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/using-github>)[Next steps](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/next-steps>)
More
[Additional resources](https://docs.expo.dev/tutorial/eas/team-development/</additional-resources>)
[Archive](https://docs.expo.dev/tutorial/eas/team-development/</archive>)[Expo Snack](https://docs.expo.dev/tutorial/eas/team-development/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/tutorial/eas/team-development/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/tutorial/eas/team-development/<https:/expo.dev/mailing-list/signup>)
# Share previews with your team
[Edit this page](https://docs.expo.dev/tutorial/eas/team-development/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/team-development.mdx> "Edit content of this page on GitHub")
Learn how to use the EAS Update to send OTA updates and share previews with a team.
[Edit this page](https://docs.expo.dev/tutorial/eas/team-development/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/team-development.mdx> "Edit content of this page on GitHub")
Updates generally fix small bugs and push small changes in between app store releases. They allow updating the non-native parts of our example app, such as JavaScript code, styling, and images.
In this chapter, we'll use [EAS Update](https://docs.expo.dev/tutorial/eas/team-development/</eas-update/introduction>) to share changes with our team. This will help [us and our team quickly share previews](https://docs.expo.dev/tutorial/eas/team-development/</review/overview>) of the change.
1
## Install expo-updates library[](https://docs.expo.dev/tutorial/eas/team-development/<#install-expo-updates-library>)
To initialize our project and send an update, we need to use the `expo-updates`[](https://docs.expo.dev/tutorial/eas/team-development/</versions/latest/sdk/updates>) library. Run the following command to install it:
Terminal
Copy
`- ``npx expo install expo-updates`
2
## Configure EAS Update[](https://docs.expo.dev/tutorial/eas/team-development/<#configure-eas-update>)
To initialize our project with EAS Update, we need to follow these steps:
  * Since we are using dynamic app.config.js for our app's configuration, adding `updates`[](https://docs.expo.dev/tutorial/eas/team-development/</versions/latest/config/app#updates>) and `runtimeVersion`[](https://docs.expo.dev/tutorial/eas/team-development/</eas-update/runtime-versions#setting-runtimeversion>) properties are required to make our project compatible with EAS Update. Run the following command to obtain these properties and their values from EAS and manually copy them to app.config.js:


Terminal
Copy
`- ``eas update:configure`
What about non-dynamic (app.json) projects?[](https://docs.expo.dev/tutorial/eas/team-development/<#what-about-non-dynamic-appjson-projects>)
If a project doesn't use dynamic app config (uses app.json instead of app.config.js), the above command will configure our app to be compatible with EAS Update and add the right properties to app.json and eas.json.
  * Re-run `eas update:configure` to continue with the setup process. A `channel`[](https://docs.expo.dev/tutorial/eas/team-development/</eas/json#channel>) should be added to every build profile in eas.json:


eas.json
Copy
```
{
 "build": {
  "development": {
   %%placeholder-start%%... %%placeholder-end%%
   "channel": "development"
  },
  "ios-simulator": {
   %%placeholder-start%%... %%placeholder-end%%
  },
  "preview": {
   %%placeholder-start%%... %%placeholder-end%%
   "channel": "preview"
  },
  "production": {
   %%placeholder-start%%... %%placeholder-end%%
   "channel": "production"
  }
 }
 %%placeholder-start%%... %%placeholder-end%%
}

Show More

```

> Notice that the `eas update:configure` command adds the `channel` to every build profile in eas.json. However, our `ios-simulator` profile extends the `development` profile and having a separate `channel` doesn't make sense. We can safely remove `ios-simulator.channel` from the above configuration.
What is a channel?[](https://docs.expo.dev/tutorial/eas/team-development/<#what-is-a-channel>)
[Channels](https://docs.expo.dev/tutorial/eas/team-development/</eas-update/how-it-works#conceptual-overview>) are used to group builds together. If we have an Android and iOS build, both on the app store, we can give them both a channel of production. Later, we can tell EAS Update to target the production channel, so our update will affect all builds with a production channel.
3
## Create a development build[](https://docs.expo.dev/tutorial/eas/team-development/<#create-a-development-build>)
We need to create a new development build since our last build doesn't contain the `expo-updates` library. Run the following command:
Terminal
Copy
`- ``eas build --platform android --profile development`
> We are using a development build for Android devices to demonstrate updates. However, we can use `--platform all` or `--platform ios` to create a build for both platforms or just for iOS.
After the new version of the development build is created, make sure to install it on a device.
4
## Modify the JavaScript code of the app[](https://docs.expo.dev/tutorial/eas/team-development/<#modify-the-javascript-code-of-the-app>)
Let's modify our example app's JavaScript code. If you are not using [Sticker Smash app](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/introduction#prerequisites>), you can modify any piece of your code to see the changes in the app.
We'll modify the text of the first button in our example app that says Choose a photo to Select a photo.
App.js
Copy
```
<Button theme="primary" label="Select a photo" onPress={pickImageAsync} />

```

5
## Publish an update[](https://docs.expo.dev/tutorial/eas/team-development/<#publish-an-update>)
Instead of creating a new build to share this change with our team for testing, let's publish an update:
Terminal
Copy
`- ``eas update --branch development --message "Change first button label"`
In the command above, we used the `development` branch. Every update is associated with an [update branch](https://docs.expo.dev/tutorial/eas/team-development/</eas-update/how-it-works#publishing-an-update>). It is similar to every commit that we make with git, which is associated with a git branch.
By default, EAS will map branches and channels with the same name, if no other mapping has been specified. So, by using the channel `development` in our build profile and then publishing an update on the development branch, we're asking EAS to deliver this update to builds with the `development` channel. When we make an EAS Update branch, we can map it to a channel.
After the update is published, the CLI will prompt us with information about it.
![EAS Update published successfully with CLI prompt](https://docs.expo.dev/static/images/tutorial/eas/update-01.png)
Click on the Website link to see the Update on the Expo dashboard under Updates:
![Expo dashboard shows the latest published update for the development build](https://docs.expo.dev/static/images/tutorial/eas/update-02.png)
6
## Preview the update live in a development build[](https://docs.expo.dev/tutorial/eas/team-development/<#preview-the-update-live-in-a-development-build>)
To preview the live update in a development build:
  * Log in to your Expo account within the development build.
  * Open the Extensions tab.
  * Look for Branch: development listed under EAS Update.
  * Tap on Open to access the update.


7
## Sharing changes with preview or production builds[](https://docs.expo.dev/tutorial/eas/team-development/<#sharing-changes-with-preview-or-production-builds>)
Updates for non-development builds (preview or production) are automatically downloaded to the device when the app starts up and makes a request for any new updates.
Any team member running the preview or production build will receive the update with the changes we push to those specific branches.
For example, for a `preview` build, we can run:
Terminal
Copy
`- ``eas update --branch preview --message "Change first button label"`
Here is an example where we've published an update for the `preview` build. To test the update, force close and reopen the app twice to download and view the changes:
## Summary[](https://docs.expo.dev/tutorial/eas/team-development/<#summary>)
Chapter 10: Share previews with your team
We successfully configured EAS Update to manage and publish over-the-air updates across platforms, and explored methods to fetch updates to review.
Mark this chapter as read
In the next chapter, learn about the process of triggering builds from a GitHub repository.
[Next: Trigger builds from a GitHub repository](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/using-github>)
[Previous (EAS tutorial)iOS production build](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/ios-production-build>)[Next (EAS tutorial)Builds from GitHub](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/using-github>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/tutorial/eas/team-development/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/tutorial/eas/team-development/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/team-development.mdx>)


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/tutorial/eas/team-development/<https:/expo.dev/privacy>).
On this page
[Install expo-updates library](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/team-development/#install-expo-updates-library>)[Configure EAS Update](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/team-development/#configure-eas-update>)[Create a development build](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/team-development/#create-a-development-build>)[Modify the JavaScript code of the app](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/team-development/#modify-the-javascript-code-of-the-app>)[Publish an update](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/team-development/#publish-an-update>)[Preview the update live in a development build](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/team-development/#preview-the-update-live-in-a-development-build>)[Sharing changes with preview or production builds](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/team-development/#sharing-changes-with-preview-or-production-builds>)[Summary](https://docs.expo.dev/tutorial/eas/team-development/</tutorial/eas/team-development/#summary>)
