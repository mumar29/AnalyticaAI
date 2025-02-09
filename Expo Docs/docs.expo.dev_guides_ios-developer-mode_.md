[](https://docs.expo.dev/guides/ios-developer-mode/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/ios-developer-mode/</>)
[Blog](https://docs.expo.dev/guides/ios-developer-mode/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/ios-developer-mode/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/ios-developer-mode/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/ios-developer-mode/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/ios-developer-mode/</>)[Guides](https://docs.expo.dev/guides/ios-developer-mode/</guides/overview>)[EAS](https://docs.expo.dev/guides/ios-developer-mode/</eas>)[Reference](https://docs.expo.dev/guides/ios-developer-mode/</versions/latest>)[Learn](https://docs.expo.dev/guides/ios-developer-mode/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/ios-developer-mode/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/ios-developer-mode/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/ios-developer-mode/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/ios-developer-mode/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/ios-developer-mode/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/ios-developer-mode/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/ios-developer-mode/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/ios-developer-mode/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/ios-developer-mode/</router/introduction>)[Installation](https://docs.expo.dev/guides/ios-developer-mode/</router/installation>)[Create pages](https://docs.expo.dev/guides/ios-developer-mode/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/ios-developer-mode/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/ios-developer-mode/</router/layouts>)[Error handling](https://docs.expo.dev/guides/ios-developer-mode/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/ios-developer-mode/</modules/overview>)[Get started](https://docs.expo.dev/guides/ios-developer-mode/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/ios-developer-mode/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/ios-developer-mode/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/ios-developer-mode/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/ios-developer-mode/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/ios-developer-mode/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/ios-developer-mode/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/ios-developer-mode/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/ios-developer-mode/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/ios-developer-mode/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/ios-developer-mode/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/ios-developer-mode/</guides/icons>)[Localization](https://docs.expo.dev/guides/ios-developer-mode/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/ios-developer-mode/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/ios-developer-mode/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/ios-developer-mode/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/ios-developer-mode/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/ios-developer-mode/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/ios-developer-mode/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/ios-developer-mode/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/ios-developer-mode/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/ios-developer-mode/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/ios-developer-mode/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/ios-developer-mode/</archive>)[Expo Snack](https://docs.expo.dev/guides/ios-developer-mode/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/ios-developer-mode/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/ios-developer-mode/<https:/expo.dev/mailing-list/signup>)
# iOS Developer Mode
[Edit this page](https://docs.expo.dev/guides/ios-developer-mode/<https:/github.com/expo/expo/edit/main/docs/pages/guides/ios-developer-mode.mdx> "Edit content of this page on GitHub")
Learn how to enable iOS developer mode on iOS 16 and above to run internal distribution builds and local development builds.
[Edit this page](https://docs.expo.dev/guides/ios-developer-mode/<https:/github.com/expo/expo/edit/main/docs/pages/guides/ios-developer-mode.mdx> "Edit content of this page on GitHub")
> This does not apply to builds signed using enterprise provisioning or to any builds installed on an iOS Simulator.
Devices running iOS 16 and above need to enable OS-level Developer Mode setting before they can run [internal distribution](https://docs.expo.dev/guides/ios-developer-mode/</build/internal-distribution>) builds (including those built with EAS) or local development builds after installing them on the device.
There are two ways you can enable Developer Mode on your device:
  * Directly on an iOS device
  * By connecting an iOS device with a Mac that has Xcode installed


## Prerequisites[](https://docs.expo.dev/guides/ios-developer-mode/<#prerequisites>)
The instructions specified below need to be followed once per device.
## Enable Developer Mode[](https://docs.expo.dev/guides/ios-developer-mode/<#enable-developer-mode>)
### Directly on an iOS device[](https://docs.expo.dev/guides/ios-developer-mode/<#directly-on-an-ios-device>)
To follow the steps below, install your development build on your device before enabling the Developer Mode. When the build is created, follow the instructions on the Expo dashboard to install it on your iOS device.
1
Once the build is installed on your device, press the app icon. This will open an alert asking you to enable Developer Mode. Press OK.
![Navigating to Developer Mode setting](https://docs.expo.dev/static/images/ios-dev-mode/ios-16-developer-mode-0.jpg)
2
Go to the Settings app, and navigate to Privacy & Security > Developer Mode.
![Navigating to Developer Mode setting](https://docs.expo.dev/static/images/ios-dev-mode/ios-16-developer-mode-1.png)
3
Enable the toggle. You will receive a prompt from iOS to restart your device. Press Restart.
![Developer Mode restart prompt](https://docs.expo.dev/static/images/ios-dev-mode/ios-16-developer-mode-2.png)
4
After the device restarts, unlock your device. A system alert should appear. Press Turn On and then, when prompted, enter your device's passcode.
![Alert and passcode prompt](https://docs.expo.dev/static/images/ios-dev-mode/ios-16-developer-mode-3.png)
Developer Mode is now enabled. You can now interact with your internal distribution builds and local development builds.
You can turn off Developer Mode at any time. However, you'll need to repeat this same process to re-enable it.
### Connect an iOS device with a Mac[](https://docs.expo.dev/guides/ios-developer-mode/<#connect-an-ios-device-with-a-mac>)
> Note: Xcode must be installed on the Mac device before following the steps below.
You don't need to install the development build on your iOS device first to enable Developer Mode by connecting it to a Mac. You can:
1
Connect your iOS device to a Mac using a USB cable. Press Trust on your iOS device when Trust This Computer? alert is prompted.
2
Open Xcode, and from the menu bar, navigate to Window > Devices and Simulators.
Under Devices, you'll see a warning "Previous preparation error: Developer Mode disabled" with instructions on enabling Developer Mode on the iOS device.
![Xcode Devices and Simulators window with Developer Mode warning](https://docs.expo.dev/static/images/ios-dev-mode/with-xcode-01.png)
3
On the iOS device, open Settings > Privacy & Security > Developer Mode.
Enable the toggle. You will receive a prompt from iOS to restart your device. Press Restart.
![Developer Mode restart prompt](https://docs.expo.dev/static/images/ios-dev-mode/with-xcode-02.png)
4
After the device restarts, unlock your device. A system alert should appear. Press Turn On, and enter your device's passcode when prompted.
![Developer Mode restart prompt](https://docs.expo.dev/static/images/ios-dev-mode/with-xcode-03.jpg)
Developer Mode is now enabled. You can now interact with your internal distribution builds and local development builds.
You can turn off Developer Mode at any time. However, you'll need to repeat this same process to re-enable it.
[Previous (More - Assorted)Using Hermes](https://docs.expo.dev/guides/ios-developer-mode/</guides/using-hermes>)[Next (More - Assorted)Expo Vector Icons](https://docs.expo.dev/guides/ios-developer-mode/</guides/icons>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/ios-developer-mode/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/ios-developer-mode/<https:/github.com/expo/expo/edit/main/docs/pages/guides/ios-developer-mode.mdx>)
  * Last updated on June 16, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/ios-developer-mode/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/guides/ios-developer-mode/</guides/ios-developer-mode/#prerequisites>)[Enable Developer Mode](https://docs.expo.dev/guides/ios-developer-mode/</guides/ios-developer-mode/#enable-developer-mode>)[Directly on an iOS device](https://docs.expo.dev/guides/ios-developer-mode/</guides/ios-developer-mode/#directly-on-an-ios-device>)[Connect an iOS device with a Mac](https://docs.expo.dev/guides/ios-developer-mode/</guides/ios-developer-mode/#connect-an-ios-device-with-a-mac>)
