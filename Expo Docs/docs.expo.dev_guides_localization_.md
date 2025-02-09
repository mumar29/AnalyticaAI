[](https://docs.expo.dev/guides/localization/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/localization/</>)
[Blog](https://docs.expo.dev/guides/localization/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/localization/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/localization/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/localization/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/localization/</>)[Guides](https://docs.expo.dev/guides/localization/</guides/overview>)[EAS](https://docs.expo.dev/guides/localization/</eas>)[Reference](https://docs.expo.dev/guides/localization/</versions/latest>)[Learn](https://docs.expo.dev/guides/localization/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/localization/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/localization/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/localization/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/localization/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/localization/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/localization/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/localization/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/localization/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/localization/</router/introduction>)[Installation](https://docs.expo.dev/guides/localization/</router/installation>)[Create pages](https://docs.expo.dev/guides/localization/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/localization/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/localization/</router/layouts>)[Error handling](https://docs.expo.dev/guides/localization/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/localization/</modules/overview>)[Get started](https://docs.expo.dev/guides/localization/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/localization/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/localization/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/localization/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/localization/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/localization/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/localization/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/localization/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/localization/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/localization/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/localization/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/localization/</guides/icons>)[Localization](https://docs.expo.dev/guides/localization/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/localization/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/localization/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/localization/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/localization/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/localization/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/localization/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/localization/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/localization/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/localization/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/localization/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/localization/</archive>)[Expo Snack](https://docs.expo.dev/guides/localization/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/localization/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/localization/<https:/expo.dev/mailing-list/signup>)
# Localization
[Edit this page](https://docs.expo.dev/guides/localization/<https:/github.com/expo/expo/edit/main/docs/pages/guides/localization.mdx> "Edit content of this page on GitHub")
Learn about getting started and configuring localization in an Expo project using expo-localization.
[Edit this page](https://docs.expo.dev/guides/localization/<https:/github.com/expo/expo/edit/main/docs/pages/guides/localization.mdx> "Edit content of this page on GitHub")
If you want your app to be easy to use for users who speak different languages or come from different cultures, you should localize it. Localizing an app makes it adapt to the locale of the user's device. The app will show translations and currencies that the user knows and understands. Numbers, lists, and more will be formatted in a way that the user is used to.
This guide uses the `expo-localization` library for accessing user language settings and adding support for multiple languages. It uses `i18n-js` as an example to add multi-language support.
## Getting the user's language[](https://docs.expo.dev/guides/localization/<#getting-the-users-language>)
Use the `expo-localization`[](https://docs.expo.dev/guides/localization/</versions/latest/sdk/localization>) library to get the user's current language. Install the package by running the following command:
Terminal
Copy
`- ``npx expo install expo-localization`
Then, you will be able to access localization methods and data in your app:
```
import { getLocales } from 'expo-localization';
const deviceLanguage = getLocales()[0].languageCode;

```

The `getLocales` method returns the current locale based on the system settings of the device. On newer Android and iOS versions, app language can be set per app, so you usually don't need to build a custom UI to allow users to change the current locale inside of your app.
Sometimes, it makes sense to build a UI to allow the user to set other localization preferences on a per-app basis. As a general rule, you should allow the user to change the following:
  * Localized units if your app makes at least a moderate use of them (such as metric/imperial measurements, currency, temperature, and more)
  * Other preferences if there's no API to get the default value on platforms you want to support (check `expo-localization`[](https://docs.expo.dev/guides/localization/</versions/latest/sdk/localization>) API documentation for details)


## Translating an app[](https://docs.expo.dev/guides/localization/<#translating-an-app>)
Creating and managing translations quickly becomes a large task. You can handle translations manually, but it's best to use a library to handle this for you.
Let's make the app support English and Japanese. To achieve this install the i18n package `i18n-js`:
Terminal
Copy
`- ``npx expo install i18n-js`
Then, configure the languages for your app:
```
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
 en: { welcome: 'Hello' },
 ja: { welcome: 'こんにちは' },
});
// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode;
console.log(i18n.t('welcome'));

```

Now, you can use the `i18n.t` function to translate strings throughout your application.
You can refrain from localizing text for certain things, for example, names. In this case, you can define them _once_ in your default language and reuse them with `i18n.enableFallback = true;`.
On Android, when a user changes the device's language, the app will not reset. You can use the `AppState`[](https://docs.expo.dev/guides/localization/<https:/reactnative.dev/docs/appstate#basic-usage>) API to listen for changes to the app's state and call the `getLocales()` function each time the app's state changes.
On iOS, when a user changes the device's language, the app will reset. This means you can set the language once without updating any of your React components to account for the language changes.
### Complete example[](https://docs.expo.dev/guides/localization/<#complete-example>)
Localization
Copy
Open in Snack
```
import { View, StyleSheet, Text } from 'react-native';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
// Set the key-value pairs for the different languages you want to support.
const translations = {
 en: { welcome: 'Hello', name: 'Charlie' },
 ja: { welcome: 'こんにちは' },
};
const i18n = new I18n(translations);
// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode ?? 'en';
// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
// i18n.locale = 'ja';
export default function App() {
 return (
  <View style={styles.container}><Text style={styles.text}>{i18n.t('welcome')}{i18n.t('name')}</Text><Text>Current locale: {i18n.locale}</Text><Text>Device locale: {getLocales()[0].languageCode}</Text></View>
 );
}
const styles = StyleSheet.create({
 container: {
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
 },
 text: {
  fontSize: 20,
  marginBottom: 16,
 },
});

Show More

```

### Other translation libraries[](https://docs.expo.dev/guides/localization/<#other-translation-libraries>)
This guide uses `i18n-js` as an example. Other libraries can also help you with translations, and each has different features:
  * Creating translations is a huge effort. Consider hiring experts and using translation libraries with management tools for easier edits and automation. Some translation libraries can integrate with translation management tools (essentially, a web service that lets you outsource, auto-generate, or make it easier to create translations).
  * Some libraries allow rearranging component structures based on translation strings. For example, you want to localize a string that includes a `<Pressable>` link, and depending on the translation you want the link to be in a different order from the rest of the text.


Here are some libraries:
  * `React i18next`[](https://docs.expo.dev/guides/localization/<https:/react.i18next.com/>) is a stable, well-maintained library based on `i18next`.
  * `typesafe-i18n`[](https://docs.expo.dev/guides/localization/<https:/github.com/ivanhofer/typesafe-i18n>) compiles translations to save space in the production bundle. It also generates TypeScript types for your translations so that you can use them in your code and get autocomplete and type safety. It requires the `Intl` API for some features, so it's only usable in projects with Hermes enabled.


### Translating app metadata[](https://docs.expo.dev/guides/localization/<#translating-app-metadata>)
If you plan on shipping your app to different countries or regions or want it to support various languages, you can provide [localized](https://docs.expo.dev/guides/localization/</versions/latest/sdk/localization>) strings for things like the display name and system dialogs. This is easily set up [in the app config](https://docs.expo.dev/guides/localization/</workflow/configuration>) file. First, set `ios.infoPlist.CFBundleAllowMixedLocalizations: true`, then provide a list of file paths to `locales`.
app.json
Copy
```
{
 "expo": {
  "ios": {
   "infoPlist": {
    "CFBundleAllowMixedLocalizations": true
   }
  },
  "locales": {
   "ja": "./languages/japanese.json"
  }
 }
}

```

The keys provided to `locales` should be the [language identifier](https://docs.expo.dev/guides/localization/<https:/developer.apple.com/documentation/xcode/choosing-localization-regions-and-scripts>), made up of a [2-letter language code](https://docs.expo.dev/guides/localization/<https:/www.loc.gov/standards/iso639-2/php/code_list.php>) of your desired language, with an optional region code (for example, `en-US` or `en-GB`), and the value should point to a JSON file that looks something like below:
japanese.json
Copy
```
{
 "CFBundleDisplayName": "こんにちは",
 "NSContactsUsageDescription": "日本語のこれらの言葉"
}

```

Now, iOS knows to set the display name of your app to `こんにちは` whenever it's installed on a device with the language set to Japanese.
## Enabling RTL support[](https://docs.expo.dev/guides/localization/<#enabling-rtl-support>)
Several regions around the world write text from right to left. If you want to localize your app, so it looks as expected in RTL languages, you need to make sure your app handles these layout and text direction changes accordingly.
To enable RTL support, use the `expo-localization`[](https://docs.expo.dev/guides/localization/</versions/latest/sdk/localization#installation>) config plugin and enable `extra.supportsRTL` property in app config:
app.json
Copy
```
{
 "expo": {
  "extra": {
   "supportsRTL": true
  },
  "plugins": ["expo-localization"]
 }
}

```

This enables RTL when your app is loaded in Expo Go, in Expo dev Client, and in applications built using EAS Build or `npx expo prebuild`.
When an application starts, Expo checks if the current device locale should render in RTL layout to look correctly. For example, an app marked to support RTL in the app config file will render in RTL mode in Hebrew or Arabic locale.
### Forcing RTL layout[](https://docs.expo.dev/guides/localization/<#forcing-rtl-layout>)
You can also force the RTL layout for testing or for applications that are only localized for RTL locales by enabling `extra.forcesRTL` property in the app config:
app.json
Copy
```
{
 "expo": {
  "extra": {
   "supportsRTL": true,
   "forcesRTL": true
  },
  "plugins": ["expo-localization"]
 }
}

```

Dynamically overriding RTL settings[](https://docs.expo.dev/guides/localization/<#dynamically-overriding-rtl-settings>)
If you want to override the default RTL detection from your application code dynamically, you cannot use the static configuration in app config. Instead, apply these changes dynamically from your application code.
This does not work in Expo Go, as Expo Go resets RTL preferences when opening the launcher or individual projects.
Overriding RTL settings
Copy
Open in Snack
```
import { Text, View, StyleSheet, I18nManager, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
export default function App() {
 const shouldBeRTL = true;
 if (shouldBeRTL !== I18nManager.isRTL && Platform.OS !== 'web') {
  I18nManager.allowRTL(shouldBeRTL);
  I18nManager.forceRTL(shouldBeRTL);
  Updates.reloadAsync();
 }
 return (
  <View style={styles.container}><Text style={styles.paragraph}>{I18nManager.isRTL ? ' RTL' : ' LTR'}</Text></View>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  paddingTop: Constants.statusBarHeight,
  padding: 8,
 },
 paragraph: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'left',
  width: '50%',
  backgroundColor: 'pink',
 },
});

Show More

```

## Making an app behave correctly on RTL locales[](https://docs.expo.dev/guides/localization/<#making-an-app-behave-correctly-on-rtl-locales>)
### Layouts and views[](https://docs.expo.dev/guides/localization/<#layouts-and-views>)
You don't need to manually adjust `<View>` styling properties based on locale. You can use properties like `justifyContent`, `alignItems`, and others. Their property values change behavior as required.
  * On LTR locales, `start` and `end` are the same as `left` and `right`.
  * On RTL locales, `start` and `end` are the same as `right` and `left`.


> For more details on how RTL works in React Native check out the React Native [blog article](https://docs.expo.dev/guides/localization/<https:/reactnative.dev/blog/2016/08/19/right-to-left-support-for-react-native-apps>) introducing RTL support.
#### Web support[](https://docs.expo.dev/guides/localization/<#web-support>)
Web support for RTL layouts requires no app config changes.
Expo uses `react-native-web` for running Expo projects in the browser. To make `react-native-web` automatically adapt to locale direction, add a `dir` property to your root `<View>` component.
App.tsx
Copy
```
import { View } from 'react-native';
import { getLocales } from 'expo-localization';
// ...
return <View dir={getLocales()[0].textDirection || 'ltr'}>//...</View>;

```

> `textDirection` is not available on Firefox and older browser versions. [Detect it manually](https://docs.expo.dev/guides/localization/<https:/stackoverflow.com/a/15726039>) if needed.
### Text alignment[](https://docs.expo.dev/guides/localization/<#text-alignment>)
The React Native's `textDirection` property does not accept `start` or `end` values that you can use in flex properties. Instead, `left` effectively works as `start` (aligns to the left on LTR and the right on RTL), and `right` works as `end`.
However, the default unset value of `textDirection` property signifies the actual left (aligns to the left both on LTR and RTL). This means each `<Text>` tag should have the `textDirection: left` or `textDirection: right` style set if you want it to be aligned correctly.
It's best to define this style in your custom reusable `<Text>` component that you can then import everywhere you need to render text strings.
MobileText.tsx
Copy
```
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
const MobileText = (props: RNTextProps) => {
 return <RNText style={{ textAlign: 'left', ...props.style }} {...props} />;
};
export default MobileText;

```

#### Web support[](https://docs.expo.dev/guides/localization/<#web-support-1>)
For each text tag, you need to add the `lang` property with the current locale identifier. It's best to define this style in a custom reusable component.
WebText.tsx
Copy
```
import { getLocales } from 'expo-localization';
const deviceLanguage = getLocales()[0].languageCode;
const WebText = (props: RNTextProps) => {
 return <RNText lang={deviceLanguage} {...props} />;
};
export default WebText;

```

You can then pick either the mobile or web Text component based on the current platform.
Text.tsx
Copy
```
const Text = Platform.OS === 'web' ? WebText : MobileText;
export default Text;

```

### Selecting assets based on locale direction[](https://docs.expo.dev/guides/localization/<#selecting-assets-based-on-locale-direction>)
If you need to use different icons for LTR/RTL or change styles based on this setting, you can use `I18nManager.isRTL` to get the current layout direction.
## Locale settings and units[](https://docs.expo.dev/guides/localization/<#locale-settings-and-units>)
Expo provides the `expo-localization` library to allow you to read the user's locale and other preferences. You can use synchronous `getLocales()` and `getCalendars()` methods to get the current locale settings of the user device:
  * `getLocales()` returns a list of locales based on the order in which the user prefers them. There will always be at least one locale in the list.
  * `getCalendars()` returns a list of calendars based on the order in which the user prefers them. There will always be at least one calendar on the list.

```
import { getLocales, getCalendars } from 'expo-localization';
const {
 languageTag,
 languageCode,
 textDirection,
 digitGroupingSeparator,
 decimalSeparator,
 measurementSystem,
 currencyCode,
 currencySymbol,
 regionCode,
} = getLocales()[0];
const { calendar, timeZone, uses24hourClock, firstWeekday } = getCalendars()[0];

```
Limitations[](https://docs.expo.dev/guides/localization/<#limitations>)
There are a few limitations to keep in mind when relying on auto-detected locale preferences from `expo-localization`.
  * There is yet to be a way to read temperature units from user preferences. On Android, you can use a lookup table based on locale. However, on iOS, the user can change it in device preferences.
  * Some properties can be null when they are unavailable on the current platform.


## Intl API[](https://docs.expo.dev/guides/localization/<#intl-api>)
If you're using Hermes in your app, you can use the `Intl`[](https://docs.expo.dev/guides/localization/<https:/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl>) API on all platforms.
It provides a set of utilities you can use to format lists, dates, numbers, monetary amounts, units, plural forms, and more.
If you pass `default` as the locale string, the `Intl` API will use the device's locale, so you don't need to rely on `expo-localization` to get the current locale (such as `"en-US"`).
```
new Intl.NumberFormat('default', { style: 'currency', currency: 'EUR' }).format(5.0);

```

> You can use `Intl` APIs to format strings and values once you know what the user expects to see.
> `Intl` APIs do not provide information about the device or current locale, so you can't use the `Intl` APIs to get current locale units, currencies, or measurement systems.
> For this you need to use `expo-localization`, JS code on the web, or third-party or custom native code on Android and iOS.
[Previous (More - Assorted)Expo Vector Icons](https://docs.expo.dev/guides/localization/</guides/icons>)[Next (More - Assorted)Configure JS engines](https://docs.expo.dev/guides/localization/</guides/configuring-js-engines>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/localization/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/localization/<https:/github.com/expo/expo/edit/main/docs/pages/guides/localization.mdx>)
  * Last updated on October 16, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/localization/<https:/expo.dev/privacy>).
On this page
[Getting the user's language](https://docs.expo.dev/guides/localization/</guides/localization/#getting-the-users-language>)[Translating an app](https://docs.expo.dev/guides/localization/</guides/localization/#translating-an-app>)[Complete example](https://docs.expo.dev/guides/localization/</guides/localization/#complete-example>)[Other translation libraries](https://docs.expo.dev/guides/localization/</guides/localization/#other-translation-libraries>)[Translating app metadata](https://docs.expo.dev/guides/localization/</guides/localization/#translating-app-metadata>)[Enabling RTL support](https://docs.expo.dev/guides/localization/</guides/localization/#enabling-rtl-support>)[Forcing RTL layout](https://docs.expo.dev/guides/localization/</guides/localization/#forcing-rtl-layout>)[Making an app behave correctly on RTL locales](https://docs.expo.dev/guides/localization/</guides/localization/#making-an-app-behave-correctly-on-rtl-locales>)[Layouts and views](https://docs.expo.dev/guides/localization/</guides/localization/#layouts-and-views>)[Text alignment](https://docs.expo.dev/guides/localization/</guides/localization/#text-alignment>)[Selecting assets based on locale direction](https://docs.expo.dev/guides/localization/</guides/localization/#selecting-assets-based-on-locale-direction>)[Locale settings and units](https://docs.expo.dev/guides/localization/</guides/localization/#locale-settings-and-units>)[Intl API](https://docs.expo.dev/guides/localization/</guides/localization/#intl-api>)
