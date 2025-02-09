[](https://docs.expo.dev/eas/metadata/schema/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/metadata/schema/</>)
[Blog](https://docs.expo.dev/eas/metadata/schema/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/metadata/schema/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/metadata/schema/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/metadata/schema/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/metadata/schema/</>)[Guides](https://docs.expo.dev/eas/metadata/schema/</guides/overview>)[EAS](https://docs.expo.dev/eas/metadata/schema/</eas>)[Reference](https://docs.expo.dev/eas/metadata/schema/</versions/latest>)[Learn](https://docs.expo.dev/eas/metadata/schema/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/metadata/schema/</eas>)[Environment variables](https://docs.expo.dev/eas/metadata/schema/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/metadata/schema/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/metadata/schema/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/metadata/schema/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/metadata/schema/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/metadata/schema/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/metadata/schema/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/metadata/schema/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/metadata/schema/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/schema/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/metadata/schema/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/metadata/schema/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/metadata/schema/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/metadata/schema/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/metadata/schema/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/metadata/schema/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/metadata/schema/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/metadata/schema/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/metadata/schema/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/metadata/schema/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/metadata/schema/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/metadata/schema/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/metadata/schema/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/metadata/schema/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/metadata/schema/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/metadata/schema/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/metadata/schema/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/metadata/schema/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/metadata/schema/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/metadata/schema/</eas/metadata>)[Get started](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/getting-started>)
Reference
[store.config.json](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/config>)[Metadata schema](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema>)[FAQ](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/faq>)
EAS Insights
[Introduction](https://docs.expo.dev/eas/metadata/schema/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/metadata/schema/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/metadata/schema/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/metadata/schema/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/metadata/schema/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/metadata/schema/</eas/json>)[Webhooks](https://docs.expo.dev/eas/metadata/schema/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/metadata/schema/</archive>)[Expo Snack](https://docs.expo.dev/eas/metadata/schema/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/metadata/schema/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/metadata/schema/<https:/expo.dev/mailing-list/signup>)
# Schema for EAS Metadata
[Edit this page](https://docs.expo.dev/eas/metadata/schema/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/schema.mdx> "Edit content of this page on GitHub")
A reference of store config in EAS Metadata.
[Edit this page](https://docs.expo.dev/eas/metadata/schema/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/schema.mdx> "Edit content of this page on GitHub")
> EAS Metadata is in beta and subject to breaking changes.
The store config in EAS Metadata contains information that otherwise would be provided manually through the app store dashboards. This document outlines the structure of the object in your store config.
> If you use the [VS Code Expo Tools extension](https://docs.expo.dev/eas/metadata/schema/<https:/github.com/expo/vscode-expo#readme>), you get all this information through auto-complete, suggestions, and warnings in your editor.
## Config schema[](https://docs.expo.dev/eas/metadata/schema/<#config-schema>)
An essential property in the store config object is the `configVersion` property. App stores might require more or change existing information structures to publish your app. This property helps versioning changes that are not backward compatible.
EAS Metadata _currently_ only supports the Apple App Store.
Property| Type| Description  
---|---|---  
`configVersion`| `number`enum: 0| The EAS Metadata store configuration schema version.  
`apple`| `object`| All configurable properties for the App Store.  
`version`| `string`| The app version to use when syncing all metadata defined in the store config.EAS Metadata selects the latest available version in the app stores by default.  
`copyright`| `string`| The name of the person or entity that owns the exclusive rights to the app, preceded by the year the rights were obtained. (for example, "2008 Acme Inc.")  
`advisory`| `AppleAdvisory[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory>)`| The App Store questionnaire to determine the app's age rating.  
`categories`| `AppleCategories[](https://docs.expo.dev/eas/metadata/schema/<#apple-categories>)`| App Store categories for the app. You can add primary, secondary, and possible subcategories.  
`info`| `Map<AppleLanguage[](https://docs.expo.dev/eas/metadata/schema/<#apple-info>), AppleInfo[](https://docs.expo.dev/eas/metadata/schema/<#apple-info>)>`| The localized App Store presence of your app.  
`release`| `AppleRelease[](https://docs.expo.dev/eas/metadata/schema/<#apple-release>)`| The app release strategy for the selected version.  
`review`| `AppleReview[](https://docs.expo.dev/eas/metadata/schema/<#apple-review>)`| All required information to review the app for the App Store review team, including contact info and credentials. (if applicable)  
### Apple advisory[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory>)
Apple uses a complex questionnaire to determine the app's [age rating](https://docs.expo.dev/eas/metadata/schema/<https:/help.apple.com/app-store-connect/#/dev599d50efb>). Parental controls on the App Store use this calculated age rating. EAS Metadata uses the least restrictive answer for each of these questions by default.
Complete advisory with the least restrictive answers[](https://docs.expo.dev/eas/metadata/schema/<#complete-advisory-with-the-least-restrictive-answers>)
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "advisory": {
   "alcoholTobaccoOrDrugUseOrReferences": "NONE",
   "contests": "NONE",
   "gamblingSimulated": "NONE",
   "horrorOrFearThemes": "NONE",
   "matureOrSuggestiveThemes": "NONE",
   "medicalOrTreatmentInformation": "NONE",
   "profanityOrCrudeHumor": "NONE",
   "sexualContentGraphicAndNudity": "NONE",
   "sexualContentOrNudity": "NONE",
   "violenceCartoonOrFantasy": "NONE",
   "violenceRealistic": "NONE",
   "violenceRealisticProlongedGraphicOrSadistic": "NONE",
   "gambling": false,
   "unrestrictedWebAccess": false,
   "kidsAgeBand": null,
   "seventeenPlus": false
  }
 }
}

Show More

```

Property| Type| Description  
---|---|---  
`alcoholTobaccoOrDrugUseOrReferences`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain alcohol, tobacco, or drug use or references?  
`contests`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain contests?  
`gambling`| `boolean`| Does your app contain gambling?  
`gamblingSimulated`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain simulated gambling?  
`horrorOrFearThemes`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain horror or fear themes?  
`kidsAgeBand`| `AppleKidsAge[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-kids-age>)`| When parents visit the Kids category on the App Store, they expect the apps they find will protect their children's data, provide only age-appropriate content, and require a parental gate to link out of the app, request permissions, or present purchasing opportunities.It's critical that no personally identifiable information or device information be transmitted to third parties, and that advertisements are human-reviewed for age appropriateness to be displayed.[Learn more](https://docs.expo.dev/eas/metadata/schema/<https:/developer.apple.com/news/?id=091202019a>)  
`matureOrSuggestiveThemes`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain mature or suggestive themes?  
`medicalOrTreatmentInformation`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain medical or treatment information?  
`profanityOrCrudeHumor`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain profanity or crude humor?  
`seventeenPlus`| `boolean`| If your app rates 12+ or lower, and you believe its content may not be suitable for children under 17, you can manually set the age rating to 17+.[Learn more](https://docs.expo.dev/eas/metadata/schema/<https:/help.apple.com/app-store-connect/#/dev599d50efb>)  
`sexualContentGraphicAndNudity`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain graphic sexual content and nudity?  
`sexualContentOrNudity`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain sexual content or nudity?  
`unrestrictedWebAccess`| `boolean`| Does your app contain unrestricted web access, such as with an embedded browser?  
`violenceCartoonOrFantasy`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain cartoon or fantasy violence?  
`violenceRealistic`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain realistic violence?  
`violenceRealisticProlongedGraphicOrSadistic`| `AppleAgeRating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)`| Does the app contain prolonged graphic or sadistic realistic violence?  
#### Apple advisory age rating[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-age-rating>)
Name| Description  
---|---  
`NONE`| For apps that do not use the subject whatsoever.  
`INFREQUENT_OR_MILD`| For apps mentioning the subject or using the subject as a non-primary feature.  
`FREQUENT_OR_INTENSE`| For apps using the subject as a primary feature.  
#### Apple advisory kids age[](https://docs.expo.dev/eas/metadata/schema/<#apple-advisory-kids-age>)
Name| Description  
---|---  
`FIVE_AND_UNDER`| For kids of 5 years old and below.  
`SIX_TO_EIGHT`| For kids between the age of 6 to 8 years.  
`NINE_TO_ELEVEN`| For kids between the age of 9 to 11 years.  
### Apple categories[](https://docs.expo.dev/eas/metadata/schema/<#apple-categories>)
The App Store helps users discover new apps by [categorizing apps into categories](https://docs.expo.dev/eas/metadata/schema/<https:/developer.apple.com/app-store/categories/>), using primary, secondary, and possible subcategories.
Primary and secondary category[](https://docs.expo.dev/eas/metadata/schema/<#primary-and-secondary-category>)
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "categories": ["FINANCE", "NEWS"]
 }
}

```

Primary, subcategories, and secondary category[](https://docs.expo.dev/eas/metadata/schema/<#primary-subcategories-and-secondary-category>)
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "categories": [["GAMES", "GAMES_CARD", "GAMES_BOARD"], "ENTERTAINMENT"]
 }
}

```

Name| Description  
---|---  
`BOOKS`| Apps with content that is traditionally offered in printed form and which provide additional interactivity.  
`BUSINESS`| Apps that assist with running a business or provide a means to collaborate, edit, or share business-related content.  
`DEVELOPER_TOOLS`| Apps that assist users with developing, maintaining, or sharing software.  
`EDUCATION`| Apps that provide an interactive learning experience on specific skills or subjects.  
`ENTERTAINMENT`| Interactive apps designed to entertain the user with audio, visual, or other content.  
`FINANCE`| Apps that provide financial services or information to assist users with business or personal finances.  
`FOOD_AND_DRINK`| Apps that provide recommendations, instruction, or reviews related to preparing, consuming, or reviewing food or beverages.  
`GAMES`| Apps that provide single or multiplayer interactive experiences for entertainment purposes.This category can have up to 2 subcategories.`GAMES_ACTION` `GAMES_ADVENTURE` `GAMES_BOARD` `GAMES_CARD` `GAMES_CASINO` `GAMES_CASUAL` `GAMES_FAMILY` `GAMES_MUSIC` `GAMES_PUZZLE` `GAMES_RACING` `GAMES_ROLE_PLAYING` `GAMES_SIMULATION` `GAMES_SPORTS` `GAMES_STRATEGY` `GAMES_TRIVIA` `GAMES_WORD`  
`GRAPHICS_AND_DESIGN`| Apps that provide tools or tips for creating, editing, or sharing visual content.  
`HEALTH_AND_FITNESS`| Apps related to healthy living, including stress management, fitness, and recreational activities.  
`LIFESTYLE`| Apps related to a general-interest subject matter or service.  
`MAGAZINES_AND_NEWSPAPERS`| Apps with journalistic content that is traditionally offered in printed form and which provide additional interactivity.  
`MEDICAL`| Apps focused on medical education, information, or health reference for patients or healthcare professionals.  
`MUSIC`| Apps that are for discovering, listening, recording, performing, or composing music.  
`NAVIGATION`| Apps that provide information to help a user get to a physical location.  
`NEWS`| Apps that provide information about current events and/or developments in areas of interest such as politics, entertainment, business, science, technology, and other areas.  
`PHOTO_AND_VIDEO`| Apps that assist in capturing, editing, managing, storing, or sharing photos and videos.  
`PRODUCTIVITY`| Apps that make a specific process or task more organized or efficient.  
`REFERENCE`| Apps that assist the user in accessing or retrieving general information.  
`SHOPPING`| Apps that provide a means to purchase goods or services.  
`SOCIAL_NETWORKING`| Apps that connect people through text, voice, photo, or video.  
`SPORTS`| Apps related to professional, amateur, collegiate, or recreational sporting activities.  
`STICKERS`| Apps that provide extended visual functionality to messaging apps.This category can have up to 2 subcategories.`STICKERS_ANIMALS` `STICKERS_ART` `STICKERS_CELEBRATIONS` `STICKERS_CELEBRITIES` `STICKERS_CHARACTERS` `STICKERS_EATING_AND_DRINKING` `STICKERS_EMOJI_AND_EXPRESSIONS` `STICKERS_FASHION` `STICKERS_GAMING` `STICKERS_KIDS_AND_FAMILY` `STICKERS_MOVIES_AND_TV` `STICKERS_MUSIC` `STICKERS_PEOPLE` `STICKERS_PLACES_AND_OBJECTS` `STICKERS_SPORTS_AND_ACTIVITIES`  
`TRAVEL`| Apps that assist the user with any aspect of travel, such as planning, purchasing, or tracking.  
`UTILITIES`| Apps that enable the user to solve a problem or complete a specific task.  
`WEATHER`| Apps with specific weather-related information.  
### Apple info[](https://docs.expo.dev/eas/metadata/schema/<#apple-info>)
The App Store is a global service used by many people in different languages. You can localize your App Store presence in [multiple languages](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema#apple-info-languages>).
Minimal localized info in English (U.S.)[](https://docs.expo.dev/eas/metadata/schema/<#minimal-localized-info-in-english-us>)
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "info": {
   "en-US": {
    "title": "Awesome app",
    "privacyPolicyUrl": "https://example.com/en/privacy"
   }
  }
 }
}

```

Complete localized info written in English (U.S.)[](https://docs.expo.dev/eas/metadata/schema/<#complete-localized-info-written-in-english-us>)
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "info": {
   "en-US": {
    "title": "App title",
    "subtitle": "Subtitle for your app",
    "description": "A longer description of what your app does",
    "keywords": ["keyword", "other-keyword"],
    "releaseNotes": "Bug fixes and improved stability",
    "promoText": "Short tagline for your app",
    "marketingUrl": "https://example.com/en",
    "supportUrl": "https://example.com/en/help",
    "privacyPolicyUrl": "https://example.com/en/privacy",
    "privacyChoicesUrl": "https://example.com/en/privacy/choices"
   }
  }
 }
}

Show More

```

Property| Type| Description  
---|---|---  
`title`| `string`length: 2..30| Name of the app in the store. This name should be similar to the installed app name.The name will be reviewed before it is made available on the App Store.  
`subtitle`| `string`length: 30| Subtext for the app in the store. For example, "A Fun Game For Friends".The subtitle will be reviewed before it is made available on the App Store.  
`description`| `string`length: 10..4000| The main description of what the app does  
`keywords`| `string[]`unique itemsmax length item: 100| List of keywords to help users find the app in the App Store  
`releaseNotes`| `string`max length: 4000| Changes since the last public version  
`promoText`| `string`max length: 170| The short tagline for the app  
`marketingUrl`| `string`max length: 255| URL to the app marketing page  
`supportUrl`| `string`max length: 255| URL to the app support page  
`privacyPolicyText`| `string`| Privacy policy for Apple TV  
`privacyPolicyUrl`| `string`max length: 255| URL that links to your privacy policy.A privacy policy is required for all apps.  
`privacyChoicesUrl`| `string`max length: 255| URL where users can modify and delete the data collected from the app or decide how their data is used and shared.  
#### Apple info languages[](https://docs.expo.dev/eas/metadata/schema/<#apple-info-languages>)
Language| Language Code  
---|---  
Arabic| `ar-SA`  
Catalan| `ca`  
Chinese| `zh-Hans` (Simplified)`zh-Hant` (Traditional)  
Croatian| `hr`  
Czech| `cs`  
Danish| `da`  
Dutch| `nl-NL`  
English| `en-AU` (Australia)`en-CA` (Canada)`en-GB` (U.K.)`en-US` (U.S.)  
Finnish| `fi`  
French| `fr-CA` (Canada)`fr-FR` (France)  
German| `de-DE`  
Greek| `el`  
Hebrew| `he`  
Hindi| `hi`  
Hungarian| `hu`  
Indonesian| `id`  
Italian| `it`  
Japanese| `ja`  
Korean| `ko`  
Malay| `ms`  
Norwegian| `no`  
Polish| `pl`  
Portuguese| `pt-BR` (Brazil)`pt-PT` (Portugal)  
Romanian| `ro`  
Russian| `ru`  
Slovak| `sk`  
Spanish| `es-MX` (Mexico)`es-ES` (Spain)  
Swedish| `sv`  
Thai| `th`  
Turkish| `tr`  
Ukrainian| `uk`  
Vietnamese| `vi`  
### Apple release[](https://docs.expo.dev/eas/metadata/schema/<#apple-release>)
There are multiple strategies to put the app in the hands of your users. You can release the app automatically after store approval or gradually release an update to your users.
Automatic release after 25th of December, 2022 (UTC)[](https://docs.expo.dev/eas/metadata/schema/<#automatic-release-after-25th-of-december-2022>)
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "release": {
   "automaticRelease": "2022-12-25T00:00:00+00:00"
  }
 }
}

```

Property| Type| Description  
---|---|---  
`automaticRelease`| `boolean|Date`| If and how the app should automatically be released after approval from the App Store.
  * `false` - Manually release the app after store approval. (default behavior)
  * `true` - Automatically release after store approval.
  * `Date` - Automatically schedule release on this date after store approval (using the [RFC 3339](https://docs.expo.dev/eas/metadata/schema/<https:/www.rfc-editor.org/rfc/rfc3339>) format).

Apple does not guarantee that your app is available at the chosen scheduled release date.  
`phasedRelease`| `boolean`| Phased release for automatic updates lets you gradually release this update over a 7-day period to users who have turned on automatic updates.Keep in mind that this version will still be available to all users as a manual update from the App Store.You can pause the phased release for up to 30 days or release this update to all users at any time.[Learn more](https://docs.expo.dev/eas/metadata/schema/<https:/help.apple.com/app-store-connect/#/dev3d65fcee1>)  
### Apple review[](https://docs.expo.dev/eas/metadata/schema/<#apple-review>)
Before publishing the app on the App Store, store approval is required. The App Store review team must have all the information to test your app, or you risk an app rejection.
Minimal review information[](https://docs.expo.dev/eas/metadata/schema/<#minimal-review-information>)
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "review": {
   "firstName": "John",
   "lastName": "Doe",
   "email": "john@example.com",
   "phone": "+1 123 456 7890"
  }
 }
}

```

Complete review information[](https://docs.expo.dev/eas/metadata/schema/<#complete-review-information>)
store.config.json
Copy
```
{
 "configVersion": 0,
 "apple": {
  "review": {
   "firstName": "John",
   "lastName": "Doe",
   "email": "john@example.com",
   "phone": "+1 123 456 7890",
   "demoUsername": "john",
   "demoPassword": "applereview",
   "demoRequired": false,
   "notes": "This is an example app primarily used for educational purposes."
  }
 }
}

```

Property| Type| Description  
---|---|---  
`firstName`| `string`min length: 1| The app contact's first name in case communication is needed with the App Store review team is needed.  
`lastName`| `string`min length: 1| The app contact's last name in case communication is needed with the App Store review team is needed.  
`email`| `string`email| Email contact address in case communication is needed with the App Store review team.  
`phone`| `string`| Contact phone number in case communication is needed with the App Store review team.Preface the phone number with "+" followed by the country code. (for example, +44 844 209 0611)  
`demoUsername`| `string`| The user name to sign in to your app to review its features.  
`demoPassword`| `string`| The password to sign in to your app to review its features.  
`demoRequired`| `boolean`| A Boolean value indicates if sign-in information is required to review your app's features.If users sign in using social media, provide information for an account for review.Credentials must be valid and active for the duration of the review.  
`notes`| `string`length: 2..4000| Additional information about your app that can help during the review process.Do not include demo account details in the notes. Use the `demoUsername` and `demoPassword` properties instead.  
[Previous (EAS Metadata - Reference)store.config.json](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/config>)[Next (EAS Metadata - Reference)FAQ](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/faq>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/metadata/schema/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/metadata/schema/<https:/github.com/expo/expo/edit/main/docs/pages/eas/metadata/schema.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/metadata/schema/<https:/expo.dev/privacy>).
On this page
[Config schema](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema/#config-schema>)[Apple advisory](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema/#apple-advisory>)[Apple advisory age rating](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema/#apple-advisory-age-rating>)[Apple advisory kids age](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema/#apple-advisory-kids-age>)[Apple categories](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema/#apple-categories>)[Apple info](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema/#apple-info>)[Apple info languages](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema/#apple-info-languages>)[Apple release](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema/#apple-release>)[Apple review](https://docs.expo.dev/eas/metadata/schema/</eas/metadata/schema/#apple-review>)
