[](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/expo.dev>)[Docs](https://docs.expo.dev/deploy/send-over-the-air-updates/</>)
[Blog](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/github.com/expo/expo>)[](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/deploy/send-over-the-air-updates/</>)[Guides](https://docs.expo.dev/deploy/send-over-the-air-updates/</guides/overview>)[EAS](https://docs.expo.dev/deploy/send-over-the-air-updates/</eas>)[Reference](https://docs.expo.dev/deploy/send-over-the-air-updates/</versions/latest>)[Learn](https://docs.expo.dev/deploy/send-over-the-air-updates/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/deploy/send-over-the-air-updates/</get-started/introduction>)[Create a project](https://docs.expo.dev/deploy/send-over-the-air-updates/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/deploy/send-over-the-air-updates/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/deploy/send-over-the-air-updates/</get-started/start-developing>)[Next steps](https://docs.expo.dev/deploy/send-over-the-air-updates/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/deploy/send-over-the-air-updates/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/deploy/send-over-the-air-updates/</develop/authentication>)[Unit testing](https://docs.expo.dev/deploy/send-over-the-air-updates/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/deploy/send-over-the-air-updates/</review/overview>)[Share previews with your team](https://docs.expo.dev/deploy/send-over-the-air-updates/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/deploy/send-over-the-air-updates/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/deploy/send-over-the-air-updates/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/deploy/send-over-the-air-updates/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/deploy/send-over-the-air-updates/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/deploy/send-over-the-air-updates/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/deploy/send-over-the-air-updates/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/deploy/send-over-the-air-updates/</core-concepts>)[FAQ](https://docs.expo.dev/deploy/send-over-the-air-updates/</faq>)
[Archive](https://docs.expo.dev/deploy/send-over-the-air-updates/</archive>)[Expo Snack](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/expo.dev/mailing-list/signup>)
# Send over-the-air updates
[Edit this page](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/github.com/expo/expo/edit/main/docs/pages/deploy/send-over-the-air-updates.mdx> "Edit content of this page on GitHub")
Learn how to send over-the-air updates to push critical bug fixes and improvements to your users.
[Edit this page](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/github.com/expo/expo/edit/main/docs/pages/deploy/send-over-the-air-updates.mdx> "Edit content of this page on GitHub")
You can send over-the-air updates containing critical bug fixes and improvements to your users.
## Get started[](https://docs.expo.dev/deploy/send-over-the-air-updates/<#get-started>)
> If you've published [previews](https://docs.expo.dev/deploy/send-over-the-air-updates/</review/share-previews-with-your-team>) or created a [build](https://docs.expo.dev/deploy/send-over-the-air-updates/</deploy/build-project>) before, you may have already set up updates and can skip this section.
To set up updates, run the following [EAS CLI](https://docs.expo.dev/deploy/send-over-the-air-updates/</develop/tools#eas-cli>) command:
Terminal
Copy
`- ``eas update:configure`
After the command completes, you'll need to make new builds before continuing to the next section.
## Send an update[](https://docs.expo.dev/deploy/send-over-the-air-updates/<#send-an-update>)
To send an update, run the following [EAS CLI](https://docs.expo.dev/deploy/send-over-the-air-updates/</develop/tools#eas-cli>) command:
Terminal
Copy
`- ``eas update --channel production`
This command will create an update and make it available to builds of your app that are configured to receive updates on the `production` channel. This channel is defined in [eas.json](https://docs.expo.dev/deploy/send-over-the-air-updates/</eas/json#channel>).
You can verify the update works by force closing the app and reopening it two times. The update should be applied on the second launch.
## Learn more[](https://docs.expo.dev/deploy/send-over-the-air-updates/<#learn-more>)
You can learn how to [rollout an update](https://docs.expo.dev/deploy/send-over-the-air-updates/</eas-update/rollouts>), [optimize assets](https://docs.expo.dev/deploy/send-over-the-air-updates/</eas-update/optimize-assets>), and more with our [update guides](https://docs.expo.dev/deploy/send-over-the-air-updates/</eas-update/introduction>).
[Previous (Deploy)App stores metadata](https://docs.expo.dev/deploy/send-over-the-air-updates/</deploy/app-stores-metadata>)[Next (Monitor)Monitoring services](https://docs.expo.dev/deploy/send-over-the-air-updates/</monitoring/services>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/github.com/expo/expo/edit/main/docs/pages/deploy/send-over-the-air-updates.mdx>)
  * Last updated on October 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/deploy/send-over-the-air-updates/<https:/expo.dev/privacy>).
On this page
[Get started](https://docs.expo.dev/deploy/send-over-the-air-updates/</deploy/send-over-the-air-updates/#get-started>)[Send an update](https://docs.expo.dev/deploy/send-over-the-air-updates/</deploy/send-over-the-air-updates/#send-an-update>)[Learn more](https://docs.expo.dev/deploy/send-over-the-air-updates/</deploy/send-over-the-air-updates/#learn-more>)
