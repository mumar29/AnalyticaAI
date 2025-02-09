[](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/expo.dev>)[Docs](https://docs.expo.dev/debugging/create-devtools-plugins/</>)
[Blog](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/github.com/expo/expo>)[](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/debugging/create-devtools-plugins/</>)[Guides](https://docs.expo.dev/debugging/create-devtools-plugins/</guides/overview>)[EAS](https://docs.expo.dev/debugging/create-devtools-plugins/</eas>)[Reference](https://docs.expo.dev/debugging/create-devtools-plugins/</versions/latest>)[Learn](https://docs.expo.dev/debugging/create-devtools-plugins/</tutorial/overview>)
Get started
[Introduction](https://docs.expo.dev/debugging/create-devtools-plugins/</get-started/introduction>)[Create a project](https://docs.expo.dev/debugging/create-devtools-plugins/</get-started/create-a-project>)[Set up your environment](https://docs.expo.dev/debugging/create-devtools-plugins/</get-started/set-up-your-environment>)[Start developing](https://docs.expo.dev/debugging/create-devtools-plugins/</get-started/start-developing>)[Next steps](https://docs.expo.dev/debugging/create-devtools-plugins/</get-started/next-steps>)
Develop
[Tools for development](https://docs.expo.dev/debugging/create-devtools-plugins/</develop/tools>)
Navigation
User interface
Development builds
Config plugins
Debugging
[Errors and warnings](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/errors-and-warnings>)[Runtime issues](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/runtime-issues>)[Tools](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/tools>)[Dev tools plugins](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/devtools-plugins>)[Create a dev tools plugin](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins>)
[Authentication](https://docs.expo.dev/debugging/create-devtools-plugins/</develop/authentication>)[Unit testing](https://docs.expo.dev/debugging/create-devtools-plugins/</develop/unit-testing>)
Review
[Distributing apps for review](https://docs.expo.dev/debugging/create-devtools-plugins/</review/overview>)[Share previews with your team](https://docs.expo.dev/debugging/create-devtools-plugins/</review/share-previews-with-your-team>)[Open updates with Orbit](https://docs.expo.dev/debugging/create-devtools-plugins/</review/with-orbit>)
Deploy
[Build project for app stores](https://docs.expo.dev/debugging/create-devtools-plugins/</deploy/build-project>)[Submit to app stores](https://docs.expo.dev/debugging/create-devtools-plugins/</deploy/submit-to-app-stores>)[App stores metadata](https://docs.expo.dev/debugging/create-devtools-plugins/</deploy/app-stores-metadata>)[Send over-the-air updates](https://docs.expo.dev/debugging/create-devtools-plugins/</deploy/send-over-the-air-updates>)
Monitor
[Monitoring services](https://docs.expo.dev/debugging/create-devtools-plugins/</monitoring/services>)
More
[Core concepts](https://docs.expo.dev/debugging/create-devtools-plugins/</core-concepts>)[FAQ](https://docs.expo.dev/debugging/create-devtools-plugins/</faq>)
[Archive](https://docs.expo.dev/debugging/create-devtools-plugins/</archive>)[Expo Snack](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/expo.dev/mailing-list/signup>)
# Create a dev tools plugin
[Edit this page](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/github.com/expo/expo/edit/main/docs/pages/debugging/create-devtools-plugins.mdx> "Edit content of this page on GitHub")
Learn how to create a dev tools plugin to enhance your development experience.
[Edit this page](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/github.com/expo/expo/edit/main/docs/pages/debugging/create-devtools-plugins.mdx> "Edit content of this page on GitHub")
> Dev Tools plugins are compatible with SDK 50 and above.
You can create a dev tools plugin, whether that's for inspecting aspects of a common framework or library or something specific to your custom code. This guide will walk you through creating a dev tools plugin.
## What is a dev tools plugin?[](https://docs.expo.dev/debugging/create-devtools-plugins/<#what-is-a-dev-tools-plugin>)
A dev tools plugin runs in your web browser in your local development environment and connects to your Expo app.
A plugin consists of three key elements:
  * An Expo app to display the dev tools web user interface.
  * An expo-module.config.json for Expo CLI recognition.
  * Calls to `expo/devtools` API for the app to communicate back and forth with the dev tool's web interface.


Plugins can be distributed on npm or included inside your app's monorepo. They typically export a single hook that can be used in your app's root component to initiate two-way communication with the web interface when your app is running in debug mode.
1
## Create a plugin[](https://docs.expo.dev/debugging/create-devtools-plugins/<#create-a-plugin>)
### Create a new plugin project[](https://docs.expo.dev/debugging/create-devtools-plugins/<#create-a-new-plugin-project>)
`create-dev-plugin` will set up a new plugin project for you. Run the following command to create a new plugin project:
Terminal
Copy
`- ``npx create-dev-plugin@latest`
`create-dev-plugin` will prompt you for the name of your plugin, a description, and the name of the hook that will be used by consumers of your plugin.
The plugin project will contain the following directories:
  * src - this exports the hook that will be used inside the consuming app to connect it to the plugin.
  * webui - this contains the web user interface for the plugin.


### Customize a plugin's functionality[](https://docs.expo.dev/debugging/create-devtools-plugins/<#customize-a-plugins-functionality>)
The template includes a simple example of sending and receiving messages between the plugin and the app. `useDevToolsPluginClient`, imported from `expo/devtools`, provides functionality for sending and receiving messages between the plugin and the app.
The client object returned by `useDevToolsPluginClient` includes:
### `addMessageListener`[](https://docs.expo.dev/debugging/create-devtools-plugins/<#addmessagelistener>)
Listens for a message matching the typed string and invokes the callback with the message data.
```
const client = useDevToolsPluginClient('my-devtools-plugin');
client.addMessageListener('ping', data => {
 alert(`Received ping from ${data.from}`);
});

```

### `sendMessage`[](https://docs.expo.dev/debugging/create-devtools-plugins/<#sendmessage>)
Listens for a message matching the typed string and invokes the callback with the message data.
```
const client = useDevToolsPluginClient('my-devtools-plugin');
client?.sendMessage('ping', { from: 'web' });

```

Edit the Expo app inside the webui directory to customize the user interface that displays diagnostic information from your app or triggers test scenarios:
webui/App.tsx
Copy
```
import { useDevToolsPluginClient, type EventSubscription } from 'expo/devtools';
import { useEffect } from 'react';
export default function App() {
 const client = useDevToolsPluginClient('my-devtools-plugin');
 useEffect(() => {
  const subscriptions: EventSubscription[] = [];
  subscriptions.push(
   client?.addMessageListener('ping', data => {
    alert(`Received ping from ${data.from}`);
   })
  );
  return () => {
   for (const subscription of subscriptions) {
    subscription?.remove();
   }
  };
 }, [client]);
}

Show More

```

Edit the hook in the src directory to customize what diagnostic information is sent to the plugin or how the app should respond to any messages from the web user interface:
src/useMyDevToolsPlugin.ts
Copy
```
import { useDevToolsPluginClient } from 'expo/devtools';
export function useMyDevToolsPlugin() {
 const client = useDevToolsPluginClient('my-devtools-plugin');
 const sendPing = () => {
  client?.sendMessage('ping', { from: 'app' });
 };
 return {
  sendPing,
 };
}

```

If you update the hook to return functions that will be called by the app, you will also need to update src/index.ts so it exports no-op functions when the app is not running in debug mode:
src/index.ts
Copy
```
if (process.env.NODE_ENV !== 'production') {
 useMyDevToolsPlugin = require('./useMyDevToolsPlugin').useMyDevToolsPlugin;
} else {
 useMyDevToolsPlugin = () => ({
+  sendPing: () => {},
 });
}

```

2
## Test a plugin[](https://docs.expo.dev/debugging/create-devtools-plugins/<#test-a-plugin>)
Since the plugin web UI is an Expo app, you can test it just like you would any other Expo app, with `npx expo start`, except that you will run it in the browser only. The template includes a convenience command to run the plugin in local development mode:
Terminal
Copy
`- ``npm run web:dev`
3
## Build a plugin for distribution[](https://docs.expo.dev/debugging/create-devtools-plugins/<#build-a-plugin-for-distribution>)
To prepare your plugin for distribution or use within your monorepo, you will need to build the plugin with the following command:
Terminal
Copy
`- ``npm run build:all`
This command will build the hook code into the build directory, and the web user interface into the dist directory.
4
## Use the plugin[](https://docs.expo.dev/debugging/create-devtools-plugins/<#use-the-plugin>)
Import the plugin's hook into your app's root component and call it to connect your app to the plugin:
App.js
Copy
```
import { useMyDevToolsPlugin } from 'my-devtools-plugin';
import { Button } from 'react-native';
export default function App() {
 const { sendPing } = useMyDevToolsPlugin();
 return (
  <View style={styles.container}><Button
    title="Ping"
    onPress={() => {
     sendPing();
    }}
   /></View>
 );
}

```

[Previous (Develop - Debugging)Dev tools plugins](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/devtools-plugins>)[Next (Develop)Authentication](https://docs.expo.dev/debugging/create-devtools-plugins/</develop/authentication>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/github.com/expo/expo/edit/main/docs/pages/debugging/create-devtools-plugins.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/debugging/create-devtools-plugins/<https:/expo.dev/privacy>).
On this page
[What is a dev tools plugin?](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins/#what-is-a-dev-tools-plugin>)[Create a plugin](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins/#create-a-plugin>)[Create a new plugin project](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins/#create-a-new-plugin-project>)[Customize a plugin's functionality](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins/#customize-a-plugins-functionality>)`addMessageListener`[](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins/#addmessagelistener>)`sendMessage`[](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins/#sendmessage>)[Test a plugin](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins/#test-a-plugin>)[Build a plugin for distribution](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins/#build-a-plugin-for-distribution>)[Use the plugin](https://docs.expo.dev/debugging/create-devtools-plugins/</debugging/create-devtools-plugins/#use-the-plugin>)
