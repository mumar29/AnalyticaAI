[](https://docs.expo.dev/guides/testing-rsc/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/testing-rsc/</>)
[Blog](https://docs.expo.dev/guides/testing-rsc/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/testing-rsc/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/testing-rsc/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/testing-rsc/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/testing-rsc/</>)[Guides](https://docs.expo.dev/guides/testing-rsc/</guides/overview>)[EAS](https://docs.expo.dev/guides/testing-rsc/</eas>)[Reference](https://docs.expo.dev/guides/testing-rsc/</versions/latest>)[Learn](https://docs.expo.dev/guides/testing-rsc/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/testing-rsc/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/testing-rsc/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/testing-rsc/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/testing-rsc/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/testing-rsc/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/testing-rsc/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/testing-rsc/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/testing-rsc/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/testing-rsc/</router/introduction>)[Installation](https://docs.expo.dev/guides/testing-rsc/</router/installation>)[Create pages](https://docs.expo.dev/guides/testing-rsc/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/testing-rsc/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/testing-rsc/</router/layouts>)[Error handling](https://docs.expo.dev/guides/testing-rsc/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/testing-rsc/</modules/overview>)[Get started](https://docs.expo.dev/guides/testing-rsc/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/testing-rsc/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/testing-rsc/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/testing-rsc/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/testing-rsc/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/testing-rsc/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/testing-rsc/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/testing-rsc/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/testing-rsc/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/testing-rsc/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/testing-rsc/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/testing-rsc/</archive>)[Expo Snack](https://docs.expo.dev/guides/testing-rsc/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/testing-rsc/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/testing-rsc/<https:/expo.dev/mailing-list/signup>)
# Testing React Server Components
[Edit this page](https://docs.expo.dev/guides/testing-rsc/<https:/github.com/expo/expo/edit/main/docs/pages/guides/testing-rsc.mdx> "Edit content of this page on GitHub")
Learn about writing unit tests for React Server Components in Expo.
[Edit this page](https://docs.expo.dev/guides/testing-rsc/<https:/github.com/expo/expo/edit/main/docs/pages/guides/testing-rsc.mdx> "Edit content of this page on GitHub")
Android
iOS
Web
> This guide refers to the experimental feature React Server Components which is still in development.
React Server Components (RSC) is a new feature in React that allows you to build components that render on the server and can be hydrated on the client. This guide provides details on how to write unit tests for RSC in your project.
## Jest testing[](https://docs.expo.dev/guides/testing-rsc/<#jest-testing>)
React Server Components run on Node.js. This means Jest on its own can closely emulate the server-side rendering environment, in contrast with client-based tests that require a Jest preset to communicate between Node.js and a web browser.
### Setup[](https://docs.expo.dev/guides/testing-rsc/<#setup>)
While standard server rendering is web-only, Expo's universal RSC bundles custom server renderers for each platform. This means platform-specific file extensions are supported. For example, when writing Server Components for an iOS app, platform-specific extensions such as *.ios.js and *.native.ts will be resolved.
`jest-expo` provides a couple different presets for testing Server Components:
Runner| Description  
---|---  
`jest-expo/rsc/android`| An Android-only runner for RSC. Uses *.android.js, *.native.js, and *.js files.  
`jest-expo/rsc/ios`| An iOS-only runner for RSC. Uses *.ios.js, *.native.js, and *.js files.  
`jest-expo/rsc/web`| A web-only runner for RSC. Uses *.web.js and *.js files.  
`jest-expo/rsc`| A multi-runner that combines the above runners.  
To configure Jest for RSC, create a jest-rsc.config.js file in your project's root:
jest-rsc.config.js
Copy
```
module.exports = require('jest-expo/rsc/jest-preset');

```

Then, you can add a script such as `test:rsc` to your package.json:
package.json
Copy
```
{
 "scripts": {
  "test:rsc": "jest --config jest-rsc.config.js"
 }
}

```

### Writing tests[](https://docs.expo.dev/guides/testing-rsc/<#writing-tests>)
Tests should be written in a __rsc_tests__ directory to prevent Jest from running your client tests on the server.
__rsc_tests__/my-component.test.ts
Copy
```
/// <reference types="jest-expo/rsc/expect" />
import { LinearGradient } from 'expo-linear-gradient';
it(`renders to RSC`, async () => {
 const jsx = (
  <LinearGradient
   colors={['cyan', '#ff00ff', 'rgba(0,0,0,0)', 'rgba(0,255,255,0.5)']}
   testID="gradient"
  />
 );
 await expect(jsx).toMatchFlight(`1:I["src/LinearGradient.tsx",[],"LinearGradient"]
0:["$","$L1",null,{"colors":["cyan","#ff00ff","rgba(0,0,0,0)","rgba(0,255,255,0.5)"],"testID":"gradient"},null]`);
});

```

Any code you import in your test files will run in the server environment. You can import server-only modules like `react-server` and `server-only`. This is useful for determining if a library is compatible with RSC.
### Custom expect matchers[](https://docs.expo.dev/guides/testing-rsc/<#custom-expect-matchers>)
`jest-expo` for RSC adds a couple of custom matchers to Jest's `expect`:
  * `toMatchFlight`: Render a JSX element using a pseudo-implementation of the render in Expo CLI and compare to a flight string.
  * `toMatchFlightSnapshot`: Same as `toMatchFlight` but saves the flight string to a snapshot file.


Behind the scenes, these methods handle a part of the framework operation needed to render RSC. The component's render stream is buffered to a string and compared all at once. You can alternatively stream it manually to observe the rendering progress.
If a component fails to render, the matcher will throw an error to fail the test. In practice, the server renderer will generate an `E:` line, which will sent to the client to be thrown locally for the user.
### Running tests[](https://docs.expo.dev/guides/testing-rsc/<#running-tests>)
You can run your tests with the `test:rsc` script:
Terminal
Copy
`- ``yarn test:rsc --watch`
If you're using the multi-runner, you can select a specific project using the `--selectProjects` flag. The following example only runs the web platform:
Terminal
Copy
`- ``yarn test:rsc --watch --selectProjects rsc/web`
### Environments[](https://docs.expo.dev/guides/testing-rsc/<#environments>)
In an RSC bundling environment, you can import files like
## Tips[](https://docs.expo.dev/guides/testing-rsc/<#tips>)
Use the `server-only` and `client-only` modules to assert that a module should not be imported on the client or server:
my-module.js
Copy
```
import 'server-only';

```

RSC supports package exports by default. You can use the `react-server` condition to change what file is imported from a module:
package.json
Copy
```
{
 "exports": {
  ".": {
   "react-server": "./index.react-server.js",
   "default": "./index.js"
  }
 }
}

```

When bundling for RSC, all modules are bundled in React Server mode and you can opt out with the `"use client"` directive. When `"use client"` is found, the module becomes an async reference to the client module.
`"use server"` is not the opposite of `"use client"`. It is instead used to define a React Server Functions file.
[NextOverview](https://docs.expo.dev/guides/testing-rsc/</guides/overview>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/testing-rsc/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/testing-rsc/<https:/github.com/expo/expo/edit/main/docs/pages/guides/testing-rsc.mdx>)
  * Last updated on November 11, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/testing-rsc/<https:/expo.dev/privacy>).
On this page
[Jest testing](https://docs.expo.dev/guides/testing-rsc/</guides/testing-rsc/#jest-testing>)[Setup](https://docs.expo.dev/guides/testing-rsc/</guides/testing-rsc/#setup>)[Writing tests](https://docs.expo.dev/guides/testing-rsc/</guides/testing-rsc/#writing-tests>)[Custom expect matchers](https://docs.expo.dev/guides/testing-rsc/</guides/testing-rsc/#custom-expect-matchers>)[Running tests](https://docs.expo.dev/guides/testing-rsc/</guides/testing-rsc/#running-tests>)[Environments](https://docs.expo.dev/guides/testing-rsc/</guides/testing-rsc/#environments>)[Tips](https://docs.expo.dev/guides/testing-rsc/</guides/testing-rsc/#tips>)
