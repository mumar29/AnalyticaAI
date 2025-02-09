[](https://docs.expo.dev/troubleshooting/proxies/<https:/expo.dev>)[Docs](https://docs.expo.dev/troubleshooting/proxies/</>)
[Blog](https://docs.expo.dev/troubleshooting/proxies/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/troubleshooting/proxies/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/troubleshooting/proxies/<https:/github.com/expo/expo>)[](https://docs.expo.dev/troubleshooting/proxies/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/troubleshooting/proxies/</>)[Guides](https://docs.expo.dev/troubleshooting/proxies/</guides/overview>)[EAS](https://docs.expo.dev/troubleshooting/proxies/</eas>)[Reference](https://docs.expo.dev/troubleshooting/proxies/</versions/latest>)[Learn](https://docs.expo.dev/troubleshooting/proxies/</tutorial/overview>)
[Overview](https://docs.expo.dev/troubleshooting/proxies/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/troubleshooting/proxies/</workflow/overview>)[Configure with app config](https://docs.expo.dev/troubleshooting/proxies/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/troubleshooting/proxies/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/troubleshooting/proxies/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/troubleshooting/proxies/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/troubleshooting/proxies/</guides/permissions>)[Environment variables](https://docs.expo.dev/troubleshooting/proxies/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/troubleshooting/proxies/</router/introduction>)[Installation](https://docs.expo.dev/troubleshooting/proxies/</router/installation>)[Create pages](https://docs.expo.dev/troubleshooting/proxies/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/troubleshooting/proxies/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/troubleshooting/proxies/</router/layouts>)[Error handling](https://docs.expo.dev/troubleshooting/proxies/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/troubleshooting/proxies/</modules/overview>)[Get started](https://docs.expo.dev/troubleshooting/proxies/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/troubleshooting/proxies/</push-notifications/overview>)[About notification types](https://docs.expo.dev/troubleshooting/proxies/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/troubleshooting/proxies/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/troubleshooting/proxies/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/troubleshooting/proxies/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/troubleshooting/proxies/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
[Overview](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/overview>)["Application has not been registered" error](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/application-has-not-been-registered>)[Clear bundler caches on macOS and Linux](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/clear-cache-macos-linux>)[Clear bundler caches on Windows](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/clear-cache-windows>)["React Native version mismatch" errors](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/react-native-version-mismatch>)[Proxies](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/proxies>)
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/troubleshooting/proxies/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/troubleshooting/proxies/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/troubleshooting/proxies/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/troubleshooting/proxies/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/troubleshooting/proxies/</archive>)[Expo Snack](https://docs.expo.dev/troubleshooting/proxies/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/troubleshooting/proxies/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/troubleshooting/proxies/<https:/expo.dev/mailing-list/signup>)
# Troubleshooting Proxies
[Edit this page](https://docs.expo.dev/troubleshooting/proxies/<https:/github.com/expo/expo/edit/main/docs/pages/troubleshooting/proxies.mdx> "Edit content of this page on GitHub")
Learn about troubleshooting proxies with a set of recommended tools.
[Edit this page](https://docs.expo.dev/troubleshooting/proxies/<https:/github.com/expo/expo/edit/main/docs/pages/troubleshooting/proxies.mdx> "Edit content of this page on GitHub")
## macOS proxy configuration (Sierra)[](https://docs.expo.dev/troubleshooting/proxies/<#macos-proxy-configuration-sierra>)
> If anything goes wrong, you can revert to the "Automatic Proxy settings" in System Network Preferences using Automatic Proxy Configuration `your-corporate-proxy-uri:port-number/proxy.pac`.
### Overview[](https://docs.expo.dev/troubleshooting/proxies/<#overview>)
To run this in the local iOS Simulator while on your corporate Wi-Fi network, a local proxy manager is required. You can use a local proxy application such as [Charles](https://docs.expo.dev/troubleshooting/proxies/<http:/charlesproxy.com>).
#### Open macOS network preferences[](https://docs.expo.dev/troubleshooting/proxies/<#open-macos-network-preferences>)
  1. Open `System Preferences` for your Mac (Apple Menu > System Preferences).
  2. Go to Network.
  3. Be sure your `Location` is set to your proxy network, and not "Automatic".
  4. With Wi-Fi selected on the left and/or ethernet connection, click `Advanced...` on the bottom right side of the window.


#### Configure proxy address[](https://docs.expo.dev/troubleshooting/proxies/<#configure-proxy-address>)
  1. Disable/uncheck "Automatic Proxy Configuration" if it is set.
  2. Check "Web Proxy (HTTP)" and set "Web Proxy Server" to 127.0.0.1 : 8888
  3. Check "Secure Web Proxy (HTTPS)" and set "Secure Web Proxy Server" to 127.0.0.1 : 8888


### Configure `Charles`[](https://docs.expo.dev/troubleshooting/proxies/<#configure-charles>)
  1. Open Charles
  2. If it asks, don't allow it to manage your macOS Network Configuration, the previous steps do that. (If you change Charles port, update the previous step to the correct port instead of default 8888)
  3. In the menu of Charles go to `Proxy > External Proxy Settings`, check `Use external proxy servers`
  4. Check `Web Proxy (HTTP)`, and enter `your-corporate-proxy-uri:port-number`
  5. Check `Proxy server requires a password`
  6. Domain: YOUR DOMAIN, Username: YOUR USERNAME Password: YOUR PASSWORD
  7. Same for Secure Web Proxy (HTTPS). _Be sure to fill in the same proxy, username, and password address_ fields.
  8. In the text area for `Bypass external proxies for the following hosts:` enter:
```
localhost
*.local

```

You may need to include your mail server or other corporate network addresses.
  9. Check "Always bypass external proxies for localhost"


### iOS Simulator configuration[](https://docs.expo.dev/troubleshooting/proxies/<#ios-simulator-configuration>)
If you have an existing iOS Simulator custom setup going that is not working, "Simulator > Reset Content and Settings" from the menu.
If you have the Simulator open still, quit it.
Now, in Charles under the "Help" menu > Install Charles Root Certificate, and then again for Install Charles Root Certificate in iOS Simulators
> Technical note: This whole process is required because the iOS Simulator is served a bum proxy certificate instead of the actual certificate, and doesn't allow it, for <https://exp.host/> which is required to run Expo. Also note: Configure applications that need internet access, such as Spotify, to use <http://localhost:8888> as your proxy. Some apps, such as Chrome and Firefox, you can configure in the settings to use your "System Network Preferences" which will use Charles : 8888, or no proxy, depending on how you have your "Location" set in the Apple menu/network preferences. If you are set to "Automatic" no proxy is used, if it is set to "your proxy network" the proxy is used and Charles will need to be running.
## Command line application proxy configuration[](https://docs.expo.dev/troubleshooting/proxies/<#command-line-application-proxy-configuration>)
npm, git, Brew, Curl, and any other command line applications need proxy access too.
#### For npm[](https://docs.expo.dev/troubleshooting/proxies/<#for-npm>)
Open `~/.npmrc` and set:
.npmrc
Copy
```
http_proxy=http://localhost:8888
https_proxy=http://localhost:8888

```

### For git[](https://docs.expo.dev/troubleshooting/proxies/<#for-git>)
Open `~/.gitconfig` and set
.gitconfig
Copy
```
[http]
 proxy = http://localhost:8888
[https]
 proxy = http://localhost:8888

```

### For command line applications[](https://docs.expo.dev/troubleshooting/proxies/<#for-command-line-applications>)
Depending on your shell, and config, Open `~/.bashrc`, `~/.bash_profile`, or `~/.zshrc` or wherever you set your shell variables and set:
```
export HTTP_PROXY="http://localhost:8888"
export http_proxy="http://localhost:8888"
export ALL_PROXY="http://localhost:8888"
export all_proxy="http://localhost:8888"
export HTTPS_PROXY="http://localhost:8888"
export https_proxy="http://localhost:8888"

```

> If you switch your network location back to "Automatic" to use npm or git, you will need to comment these lines out using a `#` before the line you wish to disable. You could alternatively use a command-line proxy manager if you prefer.
[Previous (More - Troubleshooting)"React Native version mismatch" errors](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/react-native-version-mismatch>)[Next (Regulatory compliance)Data and Privacy protection](https://docs.expo.dev/troubleshooting/proxies/</regulatory-compliance/data-and-privacy-protection>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/troubleshooting/proxies/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/troubleshooting/proxies/<https:/github.com/expo/expo/edit/main/docs/pages/troubleshooting/proxies.mdx>)
  * Last updated on July 04, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/troubleshooting/proxies/<https:/expo.dev/privacy>).
On this page
[macOS proxy configuration (Sierra)](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/proxies/#macos-proxy-configuration-sierra>)[Overview](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/proxies/#overview>)[Configure Charles](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/proxies/#configure-charles>)[iOS Simulator configuration](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/proxies/#ios-simulator-configuration>)[Command line application proxy configuration](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/proxies/#command-line-application-proxy-configuration>)[For git](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/proxies/#for-git>)[For command line applications](https://docs.expo.dev/troubleshooting/proxies/</troubleshooting/proxies/#for-command-line-applications>)
