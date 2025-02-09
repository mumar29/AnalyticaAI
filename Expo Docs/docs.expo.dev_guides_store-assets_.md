[](https://docs.expo.dev/guides/store-assets/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/store-assets/</>)
[Blog](https://docs.expo.dev/guides/store-assets/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/store-assets/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/store-assets/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/store-assets/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/store-assets/</>)[Guides](https://docs.expo.dev/guides/store-assets/</guides/overview>)[EAS](https://docs.expo.dev/guides/store-assets/</eas>)[Reference](https://docs.expo.dev/guides/store-assets/</versions/latest>)[Learn](https://docs.expo.dev/guides/store-assets/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/store-assets/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/store-assets/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/store-assets/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/store-assets/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/store-assets/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/store-assets/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/store-assets/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/store-assets/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/store-assets/</router/introduction>)[Installation](https://docs.expo.dev/guides/store-assets/</router/installation>)[Create pages](https://docs.expo.dev/guides/store-assets/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/store-assets/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/store-assets/</router/layouts>)[Error handling](https://docs.expo.dev/guides/store-assets/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/store-assets/</modules/overview>)[Get started](https://docs.expo.dev/guides/store-assets/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/store-assets/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/store-assets/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/store-assets/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/store-assets/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/store-assets/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/store-assets/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/store-assets/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/store-assets/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/store-assets/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/store-assets/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/store-assets/</guides/icons>)[Localization](https://docs.expo.dev/guides/store-assets/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/store-assets/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/store-assets/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/store-assets/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/store-assets/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/store-assets/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/store-assets/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/store-assets/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/store-assets/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/store-assets/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/store-assets/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/store-assets/</archive>)[Expo Snack](https://docs.expo.dev/guides/store-assets/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/store-assets/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/store-assets/<https:/expo.dev/mailing-list/signup>)
# Create app store assets
[Edit this page](https://docs.expo.dev/guides/store-assets/<https:/github.com/expo/expo/edit/main/docs/pages/guides/store-assets.mdx> "Edit content of this page on GitHub")
Learn how to create screenshots and previews for your app's store pages.
[Edit this page](https://docs.expo.dev/guides/store-assets/<https:/github.com/expo/expo/edit/main/docs/pages/guides/store-assets.mdx> "Edit content of this page on GitHub")
Before submitting your app to the Google Play Store and Apple App Store, you need to provide some assets for your store listing page. The goal of these images and videos is to give your prospective users an idea of what your app experience is going to be like.
You will need to upload app screenshots for both app stores. Even though they are called "app screenshots" on both stores, they _do_ have to include accurate visuals of your app. There is no rule citing that these images have to be screenshots taken on specific devices.
Both app stores have requirements on image format and size. However, within these restrictions, you can be creative. For example, a common approach is to design the assets using a design tool such as Figma and incorporate actual app screenshots (or designs) with supplementary messaging.
## Different approaches for creating "screenshots"[](https://docs.expo.dev/guides/store-assets/<#different-approaches-for-creating-screenshots>)
There are three commonly used approaches to creating your store screenshots. You can choose whichever approach works best for your app's needs and resources.
### Option 1: actual screenshots[](https://docs.expo.dev/guides/store-assets/<#option-1-actual-screenshots>)
The most straightforward option — open up your app on a real device and take screenshots.
Pros: Straightforward to do. Most accurate representation of your app.
Cons: Need to load the app on different devices for a full range of screenshots.
![Screenshots of the Expo Go Apple App Store Listing Page](https://docs.expo.dev/static/images/guides/expo-go-screenshots.png)Screenshots of the Expo Go Apple App Store Listing Page.
### Option 2: screenshots within a design[](https://docs.expo.dev/guides/store-assets/<#option-2-screenshots-within-a-design>)
The majority of apps use this approach. It involves taking screenshots of the app (or in some cases, using existing designs instead of actual screenshots) and embedding them in the store assets along with appropriate messaging.
Pros: Allows to convey additional messaging within the assets.
Cons: The assets need to be created using a design program.
![Screenshots of the Brex Apple App Store Listing Page](https://docs.expo.dev/static/images/guides/brex-screenshots.png)Screenshots of the Brex Apple App Store Listing Page.
### Option 3: make it fancy[](https://docs.expo.dev/guides/store-assets/<#option-3-make-it-fancy>)
In this option, on the app store pages, you can incorporate elements of your app design and creative messaging to highlight your product.
Pros: You can make your store page creative and fun.
Cons: Need an experienced designer to create and maintain the assets.
![Screenshots of the MS Office Apple Store Listing Page](https://docs.expo.dev/static/images/guides/office-screenshots.png)Screenshots of the MS Office Apple Store Listing Page.
## Google Play Store Asset Requirements[](https://docs.expo.dev/guides/store-assets/<#google-play-store-asset-requirements>)
Google has specific requirements for the store asset format and dimensions, which are different from Apple's. For the most up-to-date specifications, see [official documentation](https://docs.expo.dev/guides/store-assets/<https:/support.google.com/googleplay/android-developer/answer/9866151>) for detailed requirements for your Google Play Store assets.
[Store assets Figma templateSee our template for a summary of the minimum asset requirements.](https://docs.expo.dev/guides/store-assets/<https:/www.figma.com/community/file/1352686667495694112>)
### App icon[](https://docs.expo.dev/guides/store-assets/<#app-icon>)
Unlike on the Apple App Store, where the app icon is always taken automatically from the app bundle, on the Google Play Store, you must also upload a separate App Icon for your store listing.
### Feature graphic[](https://docs.expo.dev/guides/store-assets/<#feature-graphic>)
A feature graphic must be provided to publish your Store Listing. It is a banner that is displayed at the top of your store listing page.
### Screenshots[](https://docs.expo.dev/guides/store-assets/<#screenshots>)
You need to upload at least four screenshots to publish your app.
### Video (optional)[](https://docs.expo.dev/guides/store-assets/<#video-optional>)
You can add one preview video to your Store Listing. The video needs to be uploaded to YouTube, and you can add it by entering a YouTube URL in the preview video field.
## iOS App Store Asset Requirements[](https://docs.expo.dev/guides/store-assets/<#ios-app-store-asset-requirements>)
For the iOS App Store, you can upload screenshots (images) and previews (videos). For each, Apple requires specific widths and heights. Make sure to reference the [Screenshot specifications from Apple](https://docs.expo.dev/guides/store-assets/<https:/developer.apple.com/help/app-store-connect/reference/screenshot-specifications/>) for the exact sizing. Even a single pixel-off will mean you cannot submit the images.
[Store assets Figma templateSee our template for a summary of the minimum asset requirements.](https://docs.expo.dev/guides/store-assets/<https:/www.figma.com/community/file/1352686667495694112>)
### Screenshots[](https://docs.expo.dev/guides/store-assets/<#screenshots-1>)
At a minimum, Apple requires you to upload screenshots for iPhone with the dynamic island (6.9 inch). You can optionally upload additional screenshots for other screen sizes. If specific screenshots are not provided, scaled down screenshots from the closest uploaded size will be used instead.
If your app runs on iPad, you must also provide one set of iPad screenshots (13 inch).
You can upload up to ten screenshots per localization. If your app is available in multiple languages and your screenshots include text, you should upload screenshots with the appropriate language for each localization.
Screenshots can be portrait or landscape.
### Preview (optional)[](https://docs.expo.dev/guides/store-assets/<#preview-optional>)
You can include An app preview video to demonstrate how your app works. You can add up to three app previews for each screen size.
See [App Preview Specifications](https://docs.expo.dev/guides/store-assets/<https:/developer.apple.com/help/app-store-connect/reference/app-preview-specifications/>) from Apple documentation for a summary of video size and format.
## Bare minimum[](https://docs.expo.dev/guides/store-assets/<#bare-minimum>)
Below is the bare minimum needed to publish your apps.
### Play Store - Android[](https://docs.expo.dev/guides/store-assets/<#play-store---android>)
Type| Amount| Dimensions| Requirements  
---|---|---|---  
App Icon| 1| 512 × 512| 32-bit PNG (with alpha); Maximum file size: 1024 KB  
Feature Graphic| 1| 1024 × 500| JPEG or 24-bit PNG (no alpha)  
Screenshots| 4-10| minimum: 1024 × 500maximum width: 3840px9:16 aspect ratio| JPEG or 24-bit PNG (no alpha)  
### App Store - iPhone[](https://docs.expo.dev/guides/store-assets/<#app-store---iphone>)
Type| Amount| Dimensions (coose one)| Requirements  
---|---|---|---  
Screenshots (iPhone with the dynamic island)| 2-10| 1320 × 28681290 × 2796| JPG or PNG (no alpha)  
### App Store - iPad[](https://docs.expo.dev/guides/store-assets/<#app-store---ipad>)
If your app also runs on an iPad, you need to supply additional screenshots.
Type| Amount| Dimensions (choose one)| Requirements  
---|---|---|---  
Screenshots| 2-10| 2064 × 27522048 × 2732| JPG or PNG (no alpha)  
[Previous (More - Assorted)Edit rich text](https://docs.expo.dev/guides/store-assets/</guides/editing-richtext>)[Next (More - Assorted)Local-first](https://docs.expo.dev/guides/store-assets/</guides/local-first>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/store-assets/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/store-assets/<https:/github.com/expo/expo/edit/main/docs/pages/guides/store-assets.mdx>)
  * Last updated on November 14, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/store-assets/<https:/expo.dev/privacy>).
On this page
[Different approaches for creating "screenshots"](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#different-approaches-for-creating-screenshots>)[Option 1: actual screenshots](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#option-1-actual-screenshots>)[Option 2: screenshots within a design](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#option-2-screenshots-within-a-design>)[Option 3: make it fancy](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#option-3-make-it-fancy>)[Google Play Store Asset Requirements](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#google-play-store-asset-requirements>)[App icon](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#app-icon>)[Feature graphic](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#feature-graphic>)[Screenshots](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#screenshots>)[Video (optional)](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#video-optional>)[iOS App Store Asset Requirements](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#ios-app-store-asset-requirements>)[Screenshots](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#screenshots-1>)[Preview (optional)](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#preview-optional>)[Bare minimum](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#bare-minimum>)[Play Store - Android](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#play-store---android>)[App Store - iPhone](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#app-store---iphone>)[App Store - iPad](https://docs.expo.dev/guides/store-assets/</guides/store-assets/#app-store---ipad>)
