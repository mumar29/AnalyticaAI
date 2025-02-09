[](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/expo.dev>)[Docs](https://docs.expo.dev/develop/development-builds/share-with-your-team/</>)
[Blog](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/github.com/expo/expo>)[](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/develop/development-builds/share-with-your-team/</>)[Guides](https://docs.expo.dev/develop/development-builds/share-with-your-team/</guides/overview>)[EAS](https://docs.expo.dev/develop/development-builds/share-with-your-team/</eas>)[Reference](https://docs.expo.dev/develop/development-builds/share-with-your-team/</versions/latest>)[Learn](https://docs.expo.dev/develop/development-builds/share-with-your-team/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/develop/development-builds/share-with-your-team/</get-started/introduction>)[Create a project](https://docs.expo.dev/develop/development-builds/share-with-your-team/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/develop/development-builds/share-with-your-team/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/develop/development-builds/share-with-your-team/</get-started/start-developing>)[Next steps](https://docs.expo.dev/develop/development-builds/share-with-your-team/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/tools>)
Navigation
User interface
Development builds
[Introduction](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/introduction>)[Create a build](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/create-a-build>)[Use a build](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/use-development-builds>)[Share with your team](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/share-with-your-team>)[Tools, workflows and extensions](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/development-workflows>)[Next steps](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/next-steps>)
Config plugins
Debugging
[Authentication](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/authentication>)[Unit testing](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/develop/development-builds/share-with-your-team/</review/overview>)[Share previews with your team](https://docs.expo.dev/develop/development-builds/share-with-your-team/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/develop/development-builds/share-with-your-team/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/develop/development-builds/share-with-your-team/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/develop/development-builds/share-with-your-team/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/develop/development-builds/share-with-your-team/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/develop/development-builds/share-with-your-team/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/develop/development-builds/share-with-your-team/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/develop/development-builds/share-with-your-team/</core-concepts>)[FAQ](https://docs.expo.dev/develop/development-builds/share-with-your-team/</faq>)
[Archive](https://docs.expo.dev/develop/development-builds/share-with-your-team/</archive>)[Expo Snack](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/expo.dev/mailing-list/signup>)
# Share a development build with your team
[Edit this page](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/share-with-your-team.mdx> "Edit content of this page on GitHub")
Learn how to install and share the development with your team or run it on multiple devices.
[Edit this page](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/share-with-your-team.mdx> "Edit content of this page on GitHub")
Android and iOS both offer ways to install a build of your application directly on devices. This gives you full control of putting specific builds on devices, allowing you to iterate quickly and have multiple builds of your application available for review at the same time. You can also share it with your team or run it on multiple test devices.
## Share the URL[](https://docs.expo.dev/develop/development-builds/share-with-your-team/<#share-the-url>)
When a development build is ready, a shareable URL is generated for your build with instructions on how to get it up and running. You can use this URL with a teammate or send it to your test device to install the build. The URL generated is unique to the build for your project.
![An example of shareable development build URL after the Android internal distribution build is ready.](https://docs.expo.dev/static/images/share-dev-build/shareable-url.png)
> If you register any new iOS devices after creating a development build, you'll need to create a new development build to install it on those devices. For more information, see [internal distribution](https://docs.expo.dev/develop/development-builds/share-with-your-team/</build/internal-distribution>).
### Use the Expo dashboard[](https://docs.expo.dev/develop/development-builds/share-with-your-team/<#use-the-expo-dashboard>)
You can also direct your teammate to the build page in the Expo dashboard. From there, they can download the build artifact directly on their device.
![An example of shareable development build URL from Expo dashboard.](https://docs.expo.dev/static/images/share-dev-build/expo-dashboard.png)
### Use EAS CLI[](https://docs.expo.dev/develop/development-builds/share-with-your-team/<#use-eas-cli>)
Your teammate can also download and install the development build using EAS CLI. They have to make sure that they are signed from the Expo account associated with the development build and then can run the following command:
Terminal
Copy
`- ``eas build:run --profile development`
If the profile name for the development build is different from `development`, use it instead with `--profile`.
### iOS-only instructions[](https://docs.expo.dev/develop/development-builds/share-with-your-team/<#ios-only-instructions>)
> If you're running iOS 16 or above and haven't yet turned on Developer Mode, you'll need to [enable it](https://docs.expo.dev/develop/development-builds/share-with-your-team/</guides/ios-developer-mode>) before you can run your build. (This doesn't apply if you're using enterprise provisioning.)
You can use `eas build:resign` to codesign an existing .ipa for iOS to a new ad hoc provisioning profile. This helps reduce time when distributing with your team. For example, if you want to add a new test device to an existing build, you can use this command to update the provisioning profile to include the device without rebuilding the entire app from scratch. For more information, see [Re-signing new credentials](https://docs.expo.dev/develop/development-builds/share-with-your-team/</app-signing/app-credentials#re-signing-new-credentials>).
## Next steps[](https://docs.expo.dev/develop/development-builds/share-with-your-team/<#next-steps>)
[Install multiple app variants on the same deviceLearn how to install multiple variants (development, preview, production) of an app on the same device side by side by converting `app.json` to `app.config.js` and additional configuration that is required to start the development server for each variant.](https://docs.expo.dev/develop/development-builds/share-with-your-team/</build-reference/variants>) [Sharing pre-release versions of your appLearn more about sharing pre-release versions of your app.](https://docs.expo.dev/develop/development-builds/share-with-your-team/</guides/sharing-preview-releases>)
[Previous (Develop - Development builds)Use a build](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/use-development-builds>)[Next (Develop - Development builds)Tools, workflows and extensions](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/development-workflows>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/github.com/expo/expo/edit/main/docs/pages/develop/development-builds/share-with-your-team.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/develop/development-builds/share-with-your-team/<https:/expo.dev/privacy>).
On this page
[Share the URL](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/share-with-your-team/#share-the-url>)[Use the Expo dashboard](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/share-with-your-team/#use-the-expo-dashboard>)[Use EAS CLI](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/share-with-your-team/#use-eas-cli>)[iOS-only instructions](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/share-with-your-team/#ios-only-instructions>)[Next steps](https://docs.expo.dev/develop/development-builds/share-with-your-team/</develop/development-builds/share-with-your-team/#next-steps>)
