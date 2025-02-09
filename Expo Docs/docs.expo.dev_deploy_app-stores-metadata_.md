[](https://docs.expo.dev/deploy/app-stores-metadata/<https:/expo.dev>)[Docs](https://docs.expo.dev/deploy/app-stores-metadata/</>)
[Blog](https://docs.expo.dev/deploy/app-stores-metadata/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/deploy/app-stores-metadata/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/deploy/app-stores-metadata/<https:/github.com/expo/expo>)[](https://docs.expo.dev/deploy/app-stores-metadata/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/deploy/app-stores-metadata/</>)[Guides](https://docs.expo.dev/deploy/app-stores-metadata/</guides/overview>)[EAS](https://docs.expo.dev/deploy/app-stores-metadata/</eas>)[Reference](https://docs.expo.dev/deploy/app-stores-metadata/</versions/latest>)[Learn](https://docs.expo.dev/deploy/app-stores-metadata/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/deploy/app-stores-metadata/</get-started/introduction>)[Create a project](https://docs.expo.dev/deploy/app-stores-metadata/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/deploy/app-stores-metadata/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/deploy/app-stores-metadata/</get-started/start-developing>)[Next steps](https://docs.expo.dev/deploy/app-stores-metadata/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/deploy/app-stores-metadata/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Authentication](https://docs.expo.dev/deploy/app-stores-metadata/</develop/authentication>)[Unit testing](https://docs.expo.dev/deploy/app-stores-metadata/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/deploy/app-stores-metadata/</review/overview>)[Share previews with your team](https://docs.expo.dev/deploy/app-stores-metadata/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/deploy/app-stores-metadata/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/deploy/app-stores-metadata/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/deploy/app-stores-metadata/</core-concepts>)[FAQ](https://docs.expo.dev/deploy/app-stores-metadata/</faq>)
[Archive](https://docs.expo.dev/deploy/app-stores-metadata/</archive>)[Expo Snack](https://docs.expo.dev/deploy/app-stores-metadata/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/deploy/app-stores-metadata/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/deploy/app-stores-metadata/<https:/expo.dev/mailing-list/signup>)
# App stores metadata
[Edit this page](https://docs.expo.dev/deploy/app-stores-metadata/<https:/github.com/expo/expo/edit/main/docs/pages/deploy/app-stores-metadata.mdx> "Edit content of this page on GitHub")
A brief overview of how to use EAS Metadata to automate and maintain your app store presence.
[Edit this page](https://docs.expo.dev/deploy/app-stores-metadata/<https:/github.com/expo/expo/edit/main/docs/pages/deploy/app-stores-metadata.mdx> "Edit content of this page on GitHub")
> EAS Metadata is in beta and subject to breaking changes.
When submitting your app to app stores, you need to provide metadata. This process is lengthy and is often about complex topics that don't apply to your app. After the information you provide gets reviewed and if there is any issue with it, you need to restart this process.
EAS Metadata enables you to automate and maintain this information from the command line instead of going through multiple forms in the app store dashboards. It can also instantly identify well-known app store restrictions that could trigger a rejection after a lengthy review queue. This guide shows how to use EAS Metadata to automate and maintain your app store presence.
## Prerequisites[](https://docs.expo.dev/deploy/app-stores-metadata/<#prerequisites>)
EAS Metadata currently only supports the Apple App Store.
> Using VS Code? Install the [Expo Tools extension](https://docs.expo.dev/deploy/app-stores-metadata/<https:/github.com/expo/vscode-expo#readme>) for auto-complete, suggestions, and warnings in your store.config.json files.
## Create a store config[](https://docs.expo.dev/deploy/app-stores-metadata/<#create-a-store-config>)
EAS Metadata uses [store.config.json](https://docs.expo.dev/deploy/app-stores-metadata/</eas/metadata/config>) file to hold all the information you want to upload to the app stores. This file is located at the root of your Expo project.
Create a new store.config.json file at the root of your project directory as shown in the example below:
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "info": {
   "en-US": {
    "title": "Awesome App",
    "subtitle": "Your self-made awesome app",
    "description": "The most awesome app you have ever seen",
    "keywords": ["awesome", "app"],
    "marketingUrl": "https://example.com/en/promo",
    "supportUrl": "https://example.com/en/support",
    "privacyPolicyUrl": "https://example.com/en/privacy"
   }
  }
 }
}

```

The above example file contains JSON schema. Replace the example values with your own. It is usually contains your app's `title`, `subtitle` , `description`, `keywords`, and `marketingUrl` and so on.
An important thing to remember from the above example is the `configVersion` property. It helps with versioning changes that are not backward compatible.
> For more information on properties that can be defined in store.config.json, see [Schema for EAS Metadata](https://docs.expo.dev/deploy/app-stores-metadata/</eas/metadata/schema#config-schema>).
## Upload the store config[](https://docs.expo.dev/deploy/app-stores-metadata/<#upload-the-store-config>)
> Before pushing the store.config.json to the app stores, you must upload a new binary of your app. See [App Store submissions](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/submit-to-app-stores>) for more information. After the binary is submitted and processed, you can continue with the step below.
After you have created the store.config.json file and added the necessary information related to your app, you can push the store config to the app stores by running the command:
Terminal
Copy
`- ``eas metadata:push`
If EAS Metadata runs into any issues with your store config, it will warn you when running this command. When there are no errors, or you confirm to push it with possible issues, it will try to upload as much as possible.
You can also re-use this command when you modify the store.config.json file and want to push the latest changes to the app stores.
## Next steps[](https://docs.expo.dev/deploy/app-stores-metadata/<#next-steps>)
[EAS Metadata schemaA reference of store config in EAS Metadata.](https://docs.expo.dev/deploy/app-stores-metadata/</eas/metadata/schema>) [Static and dynamic configurations with EAS MetadataLearn about different ways to configure EAS Metadata.](https://docs.expo.dev/deploy/app-stores-metadata/</eas/metadata/config>)
[Previous (Deploy)Submit to app stores](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/submit-to-app-stores>)[Next (Deploy)Send over-the-air updates](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/send-over-the-air-updates>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/deploy/app-stores-metadata/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/deploy/app-stores-metadata/<https:/github.com/expo/expo/edit/main/docs/pages/deploy/app-stores-metadata.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/deploy/app-stores-metadata/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/app-stores-metadata/#prerequisites>)[Create a store config](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/app-stores-metadata/#create-a-store-config>)[Upload the store config](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/app-stores-metadata/#upload-the-store-config>)[Next steps](https://docs.expo.dev/deploy/app-stores-metadata/</deploy/app-stores-metadata/#next-steps>)
