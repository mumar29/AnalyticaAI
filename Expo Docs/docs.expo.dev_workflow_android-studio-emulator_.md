[](https://docs.expo.dev/workflow/android-studio-emulator/<https:/expo.dev>)[Docs](https://docs.expo.dev/workflow/android-studio-emulator/</>)
[Blog](https://docs.expo.dev/workflow/android-studio-emulator/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/workflow/android-studio-emulator/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/workflow/android-studio-emulator/<https:/github.com/expo/expo>)[](https://docs.expo.dev/workflow/android-studio-emulator/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/workflow/android-studio-emulator/</>)[Guides](https://docs.expo.dev/workflow/android-studio-emulator/</guides/overview>)[EAS](https://docs.expo.dev/workflow/android-studio-emulator/</eas>)[Reference](https://docs.expo.dev/workflow/android-studio-emulator/</versions/latest>)[Learn](https://docs.expo.dev/workflow/android-studio-emulator/</tutorial/overview>)
[Overview](https://docs.expo.dev/workflow/android-studio-emulator/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/overview>)[Configure with app config](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/workflow/android-studio-emulator/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/workflow/android-studio-emulator/</guides/permissions>)[Environment variables](https://docs.expo.dev/workflow/android-studio-emulator/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
[Work with monorepos](https://docs.expo.dev/workflow/android-studio-emulator/</guides/monorepos>)[View logs](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/logging>)[Development and production modes](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/development-mode>)[Common development errors](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/common-development-errors>)[Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/android-studio-emulator>)[iOS Simulator](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/ios-simulator>)[New Architecture](https://docs.expo.dev/workflow/android-studio-emulator/</guides/new-architecture>)[React Compiler](https://docs.expo.dev/workflow/android-studio-emulator/</guides/react-compiler>)
Expo Router
[Introduction](https://docs.expo.dev/workflow/android-studio-emulator/</router/introduction>)[Installation](https://docs.expo.dev/workflow/android-studio-emulator/</router/installation>)[Create pages](https://docs.expo.dev/workflow/android-studio-emulator/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/workflow/android-studio-emulator/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/workflow/android-studio-emulator/</router/layouts>)[Error handling](https://docs.expo.dev/workflow/android-studio-emulator/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/workflow/android-studio-emulator/</modules/overview>)[Get started](https://docs.expo.dev/workflow/android-studio-emulator/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/workflow/android-studio-emulator/</push-notifications/overview>)[About notification types](https://docs.expo.dev/workflow/android-studio-emulator/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/workflow/android-studio-emulator/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/workflow/android-studio-emulator/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/workflow/android-studio-emulator/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/workflow/android-studio-emulator/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/workflow/android-studio-emulator/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/workflow/android-studio-emulator/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/workflow/android-studio-emulator/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/workflow/android-studio-emulator/</archive>)[Expo Snack](https://docs.expo.dev/workflow/android-studio-emulator/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/workflow/android-studio-emulator/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/workflow/android-studio-emulator/<https:/expo.dev/mailing-list/signup>)
# Android Studio Emulator
[Edit this page](https://docs.expo.dev/workflow/android-studio-emulator/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/android-studio-emulator.mdx> "Edit content of this page on GitHub")
Learn how to set up the Android Emulator to test your app on a virtual Android device.
[Edit this page](https://docs.expo.dev/workflow/android-studio-emulator/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/android-studio-emulator.mdx> "Edit content of this page on GitHub")
If you don't have an Android device available to test with, we recommend using the default emulator that comes with Android Studio. If you run into any problems setting it up, follow the steps in this guide.
## Install Watchman and JDK[](https://docs.expo.dev/workflow/android-studio-emulator/<#install-watchman-and-jdk>)
macOS
Windows
Linux
#### Prerequisites[](https://docs.expo.dev/workflow/android-studio-emulator/<#prerequisites>)
Use a package manager such as [Homebrew](https://docs.expo.dev/workflow/android-studio-emulator/<https:/brew.sh/>) to install the following dependency.
#### Install dependencies[](https://docs.expo.dev/workflow/android-studio-emulator/<#install-dependencies>)
1
[Install Watchman](https://docs.expo.dev/workflow/android-studio-emulator/<https:/facebook.github.io/watchman/docs/install#macos>) using a tool such as Homebrew:
Terminal
Copy
`- ``brew install watchman`
2
Install OpenJDK distribution called Azul Zulu using Homebrew. This distribution offers JDKs for both Apple Silicon and Intel Macs.
Run the following commands in a terminal:
Terminal
Copy
`- ``brew install --cask zulu@17`
After you install the JDK, add the `JAVA_HOME` environment variable in ~/.bash_profile (or ~/.zshrc if you use Zsh):
```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home

```

#### Prerequisites[](https://docs.expo.dev/workflow/android-studio-emulator/<#prerequisites-1>)
Use a package manager such as [Chocolatey](https://docs.expo.dev/workflow/android-studio-emulator/<https:/chocolatey.org/>) to install the following dependencies.
#### Install dependencies[](https://docs.expo.dev/workflow/android-studio-emulator/<#install-dependencies-1>)
Install [Java SE Development Kit (JDK)](https://docs.expo.dev/workflow/android-studio-emulator/<https:/openjdk.org/>):
Terminal
Copy
`- ``choco install -y microsoft-openjdk17`
#### Install dependencies[](https://docs.expo.dev/workflow/android-studio-emulator/<#install-dependencies-2>)
1
Follow [instructions from the Watchman documentation](https://docs.expo.dev/workflow/android-studio-emulator/<https:/facebook.github.io/watchman/docs/install#linux>) to compile and install it from the source.
2
Install [Java SE Development Kit (JDK)](https://docs.expo.dev/workflow/android-studio-emulator/<https:/openjdk.org/>):
You can download and install [OpenJDK](https://docs.expo.dev/workflow/android-studio-emulator/<http:/openjdk.java.net/>) from [AdoptOpenJDK](https://docs.expo.dev/workflow/android-studio-emulator/<https:/adoptopenjdk.net/>) or your system packager.
## Set up Android Studio[](https://docs.expo.dev/workflow/android-studio-emulator/<#set-up-android-studio>)
macOS
Windows
1
Download and install [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/<https:/developer.android.com/studio>).
2
Open the Android Studio app, click More Actions and select SDK Manager.
3
Open Android Studio, go to Settings > Languages & Frameworks > Android SDK. From the SDK Platforms tab, select the latest Android version (API level).
![Android SDK Platforms](https://docs.expo.dev/static/images/android-studio/sdk-platforms.png)
Then, click on the SDK Tools tab and make sure you have at least one version of the Android SDK Build-Tools and Android Emulator installed.
![Android SDK build tools.](https://docs.expo.dev/static/images/android-studio/build-tools.png)
4
Copy or remember the path listed in the box that says Android SDK Location.
![Android SDK location.](https://docs.expo.dev/static/images/android-studio/sdk-location.png)
5
Click Apply and OK to install the Android SDK and related build tools.
6
If you are on macOS or Linux, add an [environment variable](https://docs.expo.dev/workflow/android-studio-emulator/<https:/developer.android.com/studio/command-line/variables#envar>) pointing to the Android SDK location in ~/.bash_profile (or ~/.zshrc if you use Zsh). For example: `export ANDROID_HOME=/your/path/here`.
Add the following lines to your /.zprofile or ~/.zshrc (if you are using bash, then ~/.bash_profile or ~/.bashrc) config file:
Terminal
Copy
`- ``export ANDROID_HOME=$HOME/Library/Android/sdk`
`- ``export PATH=$PATH:$ANDROID_HOME/emulator`
`- ``export PATH=$PATH:$ANDROID_HOME/platform-tools`
7
Reload the path environment variables in your current shell:
Terminal
`# for zsh`
`- ``source $HOME/.zshrc`
`# for bash`
`- ``source $HOME/.bashrc`
8
Finally, make sure that you can run `adb` from your terminal.
1
Download [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/<https:/developer.android.com/studio>).
2
Open Android Studio Setup. Under Select components to install, select Android Studio and Android Virtual Device. Then, click Next.
3
In the Android Studio Setup Wizard, under Install Type, select Standard and click Next.
![Android Studio Setup Wizard asks for the type of installation.](https://docs.expo.dev/static/images/android-studio/windows-install-type.png)
4
The Android Studio Setup Wizard will ask you to verify the settings, such as the version of Android SDK, platform-tools, and so on. Click Next after you have verified.
5
In the next window, accept licenses for all available components.
![Android Studio Setup Wizard asks to accept various licenses to install the tools.](https://docs.expo.dev/static/images/android-studio/windows-licenses.png)
6
After the tools installation is complete, configure the `ANDROID_HOME` environment variable. Go to Windows Control Panel > User Accounts > User Accounts (again) > Change my environment variables and click New to create a new `ANDROID_HOME` user variable. The value of this variable will point to the path to your Android SDK:
![Setting up ANDROID_HOME user variable.](https://docs.expo.dev/static/images/android-studio/windows-android-home-variable.png)How to find installed SDK location?[](https://docs.expo.dev/workflow/android-studio-emulator/<#how-to-find-installed-sdk-location>)
By default, the Android SDK is installed at the following location:
```
%LOCALAPPDATA%\Android\Sdk

```

To find the location of the SDK in Android Studio manually, go to Settings > Languages & Frameworks > Android SDK. See the location next to Android SDK Location.
![Android SDK location in Android Studio Settings.](https://docs.expo.dev/static/images/android-studio/windows-android-sdk-location.png)
7
To verify that the new environment variable is loaded, open PowerShell, and copy and paste the following command:
Terminal
Copy
`- ``Get-ChildItem -Path Env:`
The command will output all user environment variables. In this list, see if `ANDROID_HOME` has been added.
8
To add platform-tools to the Path, go to Windows Control Panel > User Accounts > User Accounts (again) > Change my environment variables > Path > Edit > New and add the path to the platform-tools to the list as shown below:
![Setting up platform-tools user variable.](https://docs.expo.dev/static/images/android-studio/windows-platform-tools-path.png)How to find installed platform-tools location[](https://docs.expo.dev/workflow/android-studio-emulator/<#how-to-find-installed-platform-tools-location>)
By default, the platform-tools are installed at the following location:
```
%LOCALAPPDATA%\Android\Sdk\platform-tools

```

9
Finally, make sure that you can run `adb` from the PowerShell. For example, run the `adb --version` to see which version of the `adb` your system is running.
## Set up an emulator[](https://docs.expo.dev/workflow/android-studio-emulator/<#set-up-an-emulator>)
1
On the Android Studio main screen, click More Actions, then Virtual Device Manager in the dropdown.
![Android Studio configure.](https://docs.expo.dev/static/images/android-studio/virtual-device.png)
2
Click the Create device button.
![Android Studio create virtual device.](https://docs.expo.dev/static/images/android-studio/create-device.png)
3
Under Select Hardware, choose the type of hardware you'd like to emulate. We recommend testing against a variety of devices, but if you're unsure where to start, the newest device in the Pixel line could be a good choice.
![Android Studio create virtual device hardware selection.](https://docs.expo.dev/static/images/android-studio/select-hardware.png)
4
Select an OS version to load on the emulator (probably one of the system images in the Recommended tab), and download the image.
![Android Studio create virtual device os selection.](https://docs.expo.dev/static/images/android-studio/select-os.png)
5
Change any other settings you'd like, and press Finish to create the emulator. You can now run this emulator anytime by pressing the Play button in the AVD Manager window.
## Troubleshooting[](https://docs.expo.dev/workflow/android-studio-emulator/<#troubleshooting>)
### Multiple `adb` versions[](https://docs.expo.dev/workflow/android-studio-emulator/<#multiple-adb-versions>)
Having multiple `adb` versions on your system can result in the following error:
Terminal
Copy
`- ``adb server version (xx) doesn't match this client (xx); killing...`
This is because the `adb` version on your system is different from the `adb` version on the Android SDK platform-tools.
1
Open the terminal and check the `adb` version on the system:
Terminal
Copy
`- ``adb version`
2
And from the Android SDK platform-tool directory:
Terminal
Copy
`- ``cd ~/Library/Android/sdk/platform-tools`
`- ``./adb version`
3
Copy `adb` from Android SDK directory to `usr/bin` directory:
Terminal
Copy
`- ``sudo cp ~/Library/Android/sdk/platform-tools/adb /usr/bin`
[Previous (Development process - Reference)Common development errors](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/common-development-errors>)[Next (Development process - Reference)iOS Simulator](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/ios-simulator>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/workflow/android-studio-emulator/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/workflow/android-studio-emulator/<https:/github.com/expo/expo/edit/main/docs/pages/workflow/android-studio-emulator.mdx>)
  * Last updated on July 01, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/workflow/android-studio-emulator/<https:/expo.dev/privacy>).
On this page
[Install Watchman and JDK](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/android-studio-emulator/#install-watchman-and-jdk>)[Set up Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/android-studio-emulator/#set-up-android-studio>)[Set up an emulator](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/android-studio-emulator/#set-up-an-emulator>)[Troubleshooting](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/android-studio-emulator/#troubleshooting>)[Multiple adb versions](https://docs.expo.dev/workflow/android-studio-emulator/</workflow/android-studio-emulator/#multiple-adb-versions>)
