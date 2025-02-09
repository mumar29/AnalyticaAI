[](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/expo.dev>)[Docs](https://docs.expo.dev/tutorial/eas/configure-development-build/</>)
[Blog](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/github.com/expo/expo>)[](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/tutorial/eas/configure-development-build/</>)[Guides](https://docs.expo.dev/tutorial/eas/configure-development-build/</guides/overview>)[EAS](https://docs.expo.dev/tutorial/eas/configure-development-build/</eas>)[Reference](https://docs.expo.dev/tutorial/eas/configure-development-build/</versions/latest>)[Learn](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/overview>)
[Overview](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/overview>)
Expo tutorial
0 of 9
[Introduction](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/introduction>)[Create your first app](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/create-your-first-app>)[Add navigation](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/add-navigation>)[Build a screen](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/build-a-screen>)[Use an image picker](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/image-picker>)[Create a modal](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/create-a-modal>)[Add gestures](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/gestures>)[Take a screenshot](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/screenshot>)[Handle platform differences](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/platform-differences>)[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/configuration>)[Learning resources](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/follow-up>)
EAS tutorial
0 of 11
[Introduction](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/introduction>)[Configure development build](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build>)[Android development build](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/android-development-build>)[iOS development build for simulators](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/ios-development-build-for-simulators>)[iOS development build for devices](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/ios-development-build-for-devices>)[Multiple app variants](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/multiple-app-variants>)[Internal distribution build](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/internal-distribution-builds>)[Manage app versions](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/manage-app-versions>)[Android production build](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/android-production-build>)[iOS production build](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/ios-production-build>)[Share previews](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/team-development>)[Builds from GitHub](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/using-github>)[Next steps](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/next-steps>)
More
[Additional resources](https://docs.expo.dev/tutorial/eas/configure-development-build/</additional-resources>)
[Archive](https://docs.expo.dev/tutorial/eas/configure-development-build/</archive>)[Expo Snack](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/expo.dev/mailing-list/signup>)
# Configure a development build in cloud
[Edit this page](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/configure-development-build.mdx> "Edit content of this page on GitHub")
Learn how to configure a development build for a project using EAS Build.
[Edit this page](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/configure-development-build.mdx> "Edit content of this page on GitHub")
In this chapter, we'll set up and configure a development build with EAS for our example app.
[![Watch: How to make a development build with EAS Build](https://i3.ytimg.com/vi/LUFHXsBcW6w/maxresdefault.jpg)Watch: How to make a development build with EAS Build](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/www.youtube.com/watch?v=LUFHXsBcW6w>)
## Understanding development builds[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#understanding-development-builds>)
Let's start by learning about what are development builds and why we need them.
A [development build](https://docs.expo.dev/tutorial/eas/configure-development-build/</develop/development-builds/introduction>) is a debug version of our project. It is optimized for quick iterations when creating an app. It contains the `expo-dev-client`[](https://docs.expo.dev/tutorial/eas/configure-development-build/</versions/latest/sdk/dev-client>) library, which offers a robust and complete development environment. This setup allows us to integrate any native library or change code inside the [native directories](https://docs.expo.dev/tutorial/eas/configure-development-build/</workflow/overview#android-and-ios-native-projects>) as required.
### Key highlights[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#key-highlights>)
> Note: If you are familiar with [Expo Go](https://docs.expo.dev/tutorial/eas/configure-development-build/</get-started/expo-go>), think of a development build as a customizable version of Expo Go that is unique to the requirements of a project.
Feature| Development Builds| Expo Go  
---|---|---  
Development phase| Offers web-like iteration speed for mobile app development.| Allows for quick iteration and testing of Expo SDK projects using the client app.  
Collaboration| Facilitates team testing with shared native runtime.| Easy project sharing via QR codes on a device.  
Third-party libraries support| Full support for any [third-party library](https://docs.expo.dev/tutorial/eas/configure-development-build/</workflow/using-libraries#third-party-libraries>), including those that require custom native code.| Limited to libraries within the Expo SDK, not suitable for custom native dependencies.  
Customization| Extensive customization with [config plugins](https://docs.expo.dev/tutorial/eas/configure-development-build/</config-plugins/introduction>) and direct access to native code.| Limited customization with a focus on Expo SDK capabilities without direct native code modification.  
Intended use| Ideal for full-fledged app development aimed at store deployment, offering a complete development environment and tools.| Ideal for learning, prototyping, and experimenting. Not recommended for production apps.  
1
## Install expo-dev-client library[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#install-expo-dev-client-library>)
To initialize our project for a development build, let's `cd`[](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#basic_built-in_terminal_commands>) inside our project directory and run the following command to install the library:
Terminal
Copy
`- ``npx expo install expo-dev-client`
### Start the development server[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#start-the-development-server>)
Run the `npx expo start` to start the [development server](https://docs.expo.dev/tutorial/eas/configure-development-build/</get-started/start-developing#start-a-development-server>):
Terminal
Copy
`- ``npx expo start`
This command starts the metro bundler. In the terminal window, we see the QR code followed by the `Metro waiting on...` and a manifest URL:
![Running development server](https://docs.expo.dev/static/images/tutorial/eas/development-server.png)
Let's notice the changes installing the `expo-dev-client` library:
  * The manifest URL contains `expo-development-client` along with the app scheme
  * The development server now operates for a development build (instead of Expo Go).


Since we do not have a development build installed on one of our devices or an emulator/simulator, we can't run our project yet.
2
## Initialize a development build[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#initialize-a-development-build>)
### Install EAS CLI[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#install-eas-cli>)
We need to install the EAS Command Line Interface (CLI) tool as a global dependency on our local machine. Run the following command:
Terminal
Copy
`- ``npm install -g eas-cli`
### Log in or sign up for an Expo account[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#log-in-or-sign-up-for-an-expo-account>)
> If you have an Expo account and are signed in using Expo CLI, skip this step. If you don't have an Expo account, [sign up here](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/expo.dev/signup>) and proceed with the login command described below.
To log in, run the following command:
Terminal
Copy
`- ``eas login`
This command asks for our Expo account email or username and password to complete the login.
### Initialize and link the project to EAS[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#initialize-and-link-the-project-to-eas>)
For any new project, the first step is to initialize and link it to the EAS servers. Run the following command:
Terminal
Copy
`- ``eas init`
On running, this command:
  * Requests verification of the account owner by entering our Expo account credentials and asks if we want to create a new EAS project:


Terminal
`# Output after running eas init``✔ Which account should own this project? > your-username``✔ Would you like to create a project for @your-username/sticker-smash? … yes``✔ Created @your-username/sticker-smash``✔ Project successfully linked (ID: XXXX-XX-XX-XXXX) (modified app.json)`
  * Creates EAS project and provides a link to that project which we can open in the Expo dashboard:

![New project in Expo dashboard](https://docs.expo.dev/static/images/tutorial/eas/new-project.png)
  * Generates a unique `projectId` and links this EAS project to the example app on our development machine.
  * Modifies app.json to include `extra.eas.projectId`[](https://docs.expo.dev/tutorial/eas/configure-development-build/</versions/latest/sdk/constants#easconfig>) and updates its value with the unique ID created.

What is `projectId` in app.json?[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#what-is-projectid-in-appjson>)
When `eas init` runs, it associates a unique identifier for our project in app.json under `extra.eas.projectId`. The value of this property is used to identify our project on EAS servers.
```
{
 "extra": {
  "eas": {
   "projectId": "0cd3da2d-xxx-xxx-xxx-xxxxxxxxxx"
  }
 }
}

```

3
## Configure project for EAS Build[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#configure-project-for-eas-build>)
To set up our project for EAS Build, run the following command:
Terminal
Copy
`- ``eas build:configure`
On running, this command:
  * Prompts to select a platform: Android, iOS, or All. Since we are creating Android and iOS apps, let's select All.
  * Creates eas.json in the root of our project's directory with the following configuration:


eas.json
Copy
```
{
 "cli": {
  "version": ">= 14.2.0",
  "appVersionSource": "remote"
 },
 "build": {
  "development": {
   "developmentClient": true,
   "distribution": "internal"
  },
  "preview": {
   "distribution": "internal"
  },
  "production": {
   "autoIncrement": true
  }
 },
 "submit": {
  "production": {}
 }
}

Show More

```

This is the default configuration for eas.json in a new project. It does two things:
  * Defines the current EAS CLI version.
  * Adds three [build profiles](https://docs.expo.dev/tutorial/eas/configure-development-build/</build/eas-json#build-profiles>): `development`, `preview`, and `production`.


Explore development profile further[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#explore-development-profile-further>)
eas.json is a collection of different build profiles. Each profile is tailored with distinct configurations to produce specific build types. These profiles can also include platform-specific settings for Android or iOS.
Currently, our focus is on the `development` profile, which includes the following configuration:
  * `developmentClient`[](https://docs.expo.dev/tutorial/eas/configure-development-build/</eas/json#developmentclient>): Enabled (`true`) for creating a debug build. It loads the app using the `expo-dev-client` library, which provides development tools and generates a build artifact for device or emulator/simulator installation and allows using the app for local development as it supports updating the JavaScript on the fly.
  * `distribution`[](https://docs.expo.dev/tutorial/eas/configure-development-build/</eas/json#distribution>): Configured as `internal` to indicate that we want to share the build internally (instead of uploading it on app stores).


> Note: Builds offer extensive customization options, including platform-specific settings and the ability to extend configurations across different build profiles. Learn more about [customizing build profiles](https://docs.expo.dev/tutorial/eas/configure-development-build/</build/eas-json#build-profiles>).
## Summary[](https://docs.expo.dev/tutorial/eas/configure-development-build/<#summary>)
Chapter 1: Configure development build in cloud
We successfully used the EAS CLI to initialize, and configure our project, link it to EAS servers, and prepare a development build.
Mark this chapter as read
In the next chapter, let's create a development build for Android, install it on a device and an emulator, and get it running with the development server.
[Next: Create and run a cloud build for Android](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/android-development-build>)
[Previous (EAS tutorial)Introduction](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/introduction>)[Next (EAS tutorial)Android development build](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/android-development-build>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/github.com/expo/expo/edit/main/docs/pages/tutorial/eas/configure-development-build.mdx>)


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/tutorial/eas/configure-development-build/<https:/expo.dev/privacy>).
On this page
[Understanding development builds](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#understanding-development-builds>)[Key highlights](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#key-highlights>)[Install expo-dev-client library](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#install-expo-dev-client-library>)[Start the development server](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#start-the-development-server>)[Initialize a development build](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#initialize-a-development-build>)[Install EAS CLI](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#install-eas-cli>)[Log in or sign up for an Expo account](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#log-in-or-sign-up-for-an-expo-account>)[Initialize and link the project to EAS](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#initialize-and-link-the-project-to-eas>)[Configure project for EAS Build](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#configure-project-for-eas-build>)[Summary](https://docs.expo.dev/tutorial/eas/configure-development-build/</tutorial/eas/configure-development-build/#summary>)
