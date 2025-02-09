[](https://docs.expo.dev/custom-builds/get-started/<https:/expo.dev>)[Docs](https://docs.expo.dev/custom-builds/get-started/</>)
[Blog](https://docs.expo.dev/custom-builds/get-started/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/custom-builds/get-started/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/custom-builds/get-started/<https:/github.com/expo/expo>)[](https://docs.expo.dev/custom-builds/get-started/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/custom-builds/get-started/</>)[Guides](https://docs.expo.dev/custom-builds/get-started/</guides/overview>)[EAS](https://docs.expo.dev/custom-builds/get-started/</eas>)[Reference](https://docs.expo.dev/custom-builds/get-started/</versions/latest>)[Learn](https://docs.expo.dev/custom-builds/get-started/</tutorial/overview>)
[Introduction](https://docs.expo.dev/custom-builds/get-started/</eas>)[Environment variables](https://docs.expo.dev/custom-builds/get-started/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/custom-builds/get-started/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/custom-builds/get-started/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/custom-builds/get-started/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/custom-builds/get-started/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/custom-builds/get-started/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/custom-builds/get-started/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/custom-builds/get-started/</build/introduction>)[Create your first build](https://docs.expo.dev/custom-builds/get-started/</build/setup>)[Configure with eas.json](https://docs.expo.dev/custom-builds/get-started/</build/eas-json>)[Internal distribution](https://docs.expo.dev/custom-builds/get-started/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/custom-builds/get-started/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/custom-builds/get-started/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/custom-builds/get-started/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/custom-builds/get-started/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/custom-builds/get-started/</build/orbit>)
App Signing
Custom builds
[Get started](https://docs.expo.dev/custom-builds/get-started/</custom-builds/get-started>)[Config schema](https://docs.expo.dev/custom-builds/get-started/</custom-builds/schema>)[TypeScript functions](https://docs.expo.dev/custom-builds/get-started/</custom-builds/functions>)
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/custom-builds/get-started/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/custom-builds/get-started/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/custom-builds/get-started/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/custom-builds/get-started/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/custom-builds/get-started/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/custom-builds/get-started/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/custom-builds/get-started/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/custom-builds/get-started/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/custom-builds/get-started/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/custom-builds/get-started/</submit/android>)[Submit to Apple](https://docs.expo.dev/custom-builds/get-started/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/custom-builds/get-started/</eas-update/introduction>)[Get started](https://docs.expo.dev/custom-builds/get-started/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/custom-builds/get-started/</eas/metadata>)[Get started](https://docs.expo.dev/custom-builds/get-started/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/custom-builds/get-started/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/custom-builds/get-started/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/custom-builds/get-started/</distribution/app-stores>)[App transfers](https://docs.expo.dev/custom-builds/get-started/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/custom-builds/get-started/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/custom-builds/get-started/</eas/json>)[Webhooks](https://docs.expo.dev/custom-builds/get-started/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/custom-builds/get-started/</archive>)[Expo Snack](https://docs.expo.dev/custom-builds/get-started/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/custom-builds/get-started/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/custom-builds/get-started/<https:/expo.dev/mailing-list/signup>)
# Get started with custom builds
[Edit this page](https://docs.expo.dev/custom-builds/get-started/<https:/github.com/expo/expo/edit/main/docs/pages/custom-builds/get-started.mdx> "Edit content of this page on GitHub")
Learn how to extend EAS Build with custom build workflows.
[Edit this page](https://docs.expo.dev/custom-builds/get-started/<https:/github.com/expo/expo/edit/main/docs/pages/custom-builds/get-started.mdx> "Edit content of this page on GitHub")
Custom builds allow running tests on the cloud, adding instructions for native platforms, resigning a build to share with your team or multiple test devices, and so on. With EAS Build, you can create build configs to customize the process so that you're not limited to generating Android and iOS applications. You can also do anything that you might want to do in a CI environment.
This guide shows how to create and use a custom build config with EAS. It follows a scenario where you create a custom workflow to run tests on EAS Build. You can also use the defined steps in other scenarios.
1
## Add a test to the project[](https://docs.expo.dev/custom-builds/get-started/<#add-a-test-to-the-project>)
To create a build config that runs tests, you have to prepare your project by installing `jest-expo` and `jest` as dependencies. Run the following command:
Terminal
Copy
`- ``npx expo install -- --save-dev jest-expo jest react-test-renderer`
Next, add a `test` script in package.json:
package.json
Copy
```
{
 "scripts": {
  %%placeholder-start%%... %%placeholder-end%%
  "test": "jest"
 },
 "jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
   "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ]
 }
}

```

For brevity, let's create an App.test.js at the root of your project and then add the following snippet:
App.test.js
Copy
```
import renderer from 'react-test-renderer';
import App from './App';
describe('<App />', () => {
 it('has 1 child', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree.children.length).toBe(1);
 });
});

```

> See [Unit testing with Jest](https://docs.expo.dev/custom-builds/get-started/</develop/unit-testing>) for more information about configuring the `jest-expo` package and additional configuration options such as `transformIgnorePatterns`.
2
## Create a workflow[](https://docs.expo.dev/custom-builds/get-started/<#create-a-workflow>)
You must add a build config file in your project to create a workflow. Create a directory path .eas/build at the same level as eas.json. For example, if the eas.json file is at the root of your project, create the directory at that level. Both path and name of both directories are important for EAS Build to identify that a project contains a custom build config.
Inside it, you can create a new file called test.yml. This file contains the workflow config that you want to run. The filename is unimportant; you can name it whatever you want. The only requirement is that the file extension uses .yml.
This file will contain steps to run tests on the EAS Build service. It'll install all the required dependencies from the package.json file of your project and execute the `npm test` script.
Add the following workflow steps in the file:
.eas/build/test.yml
Copy
```
build:
 name: Run tests
 steps:
  - eas/checkout
  - run:
    name: Install dependencies
    command: npm install
  - run:
    name: Run tests
    command: |
     echo "Running tests..."
     npm test

```

3
## Add `config` property in eas.json[](https://docs.expo.dev/custom-builds/get-started/<#add-config-property-in-easjson>)
To use the custom build config, you must add the `config` property in eas.json. It contains the build config filename as the value you want to run on the EAS.
Let's create a new [build profile](https://docs.expo.dev/custom-builds/get-started/</build/eas-json#build-profiles>) called `test` under `build` to run the custom config from the test.yml file:
eas.json
Copy
```
{
 "build": {
  %%placeholder-start%%... %%placeholder-end%%
  "test": {
   "config": "test.yml",
   "withoutCredentials": true
  },
}

```

Use the `withoutCredentials` option to skip the credentials setup on the CLI side, as they are not needed for running tests.
If you wish to use separate configs for each platform, you can create separate YAML config files for Android and iOS. For example:
eas.json
Copy
```
{
 "build": {
  %%placeholder-start%%... %%placeholder-end%%
  "test": {
   "ios": {
    "config": "test-ios.yml",
   },
   "android": {
    "config": "test-android.yml",
   },
   "withoutCredentials": true
  },
}

```

4
## Run build to test the workflow[](https://docs.expo.dev/custom-builds/get-started/<#run-build-to-test-the-workflow>)
To test the workflow, run the following command:
Terminal
Copy
`- ``eas build -p android -e test`
After the build is complete, you can verify that the `npm test` script was executed by checking the logs on the build details page.
![Example of a build config running tests on EAS Build.](https://docs.expo.dev/static/images/eas-build/custom-build.png)
## Summary[](https://docs.expo.dev/custom-builds/get-started/<#summary>)
  * Build configs are customizable by adding steps you want to run on the EAS service as an extension to your existing regular builds.
  * You can configure the credentials for custom builds the same way as for regular builds. If you want to run a custom build that doesn't require credentials, you can use the `withoutCredentials` option as shown above. See [App credentials docs](https://docs.expo.dev/custom-builds/get-started/</app-signing/app-credentials>) for more information.
  * If your regular builds have [EAS Secrets](https://docs.expo.dev/custom-builds/get-started/</build-reference/variables#adding-secrets-with-eas-cli>), they are also available for custom builds.


Check out the example repository for more detailed examples:
[Custom build example repositoryA custom EAS Build example that includes examples for workflows such as setting up functions, using environment variables, uploading artifacts, and more.](https://docs.expo.dev/custom-builds/get-started/<https:/github.com/expo/eas-custom-builds-example/tree/main>)
[Previous (EAS Build - App Signing)Apple Developer Program roles and permissions](https://docs.expo.dev/custom-builds/get-started/</app-signing/apple-developer-program-roles-and-permissions>)[Next (EAS Build - Custom builds)Config schema](https://docs.expo.dev/custom-builds/get-started/</custom-builds/schema>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/custom-builds/get-started/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/custom-builds/get-started/<https:/github.com/expo/expo/edit/main/docs/pages/custom-builds/get-started.mdx>)
  * Last updated on August 22, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/custom-builds/get-started/<https:/expo.dev/privacy>).
On this page
[Add a test to the project](https://docs.expo.dev/custom-builds/get-started/</custom-builds/get-started/#add-a-test-to-the-project>)[Create a workflow](https://docs.expo.dev/custom-builds/get-started/</custom-builds/get-started/#create-a-workflow>)[Add config property in eas.json](https://docs.expo.dev/custom-builds/get-started/</custom-builds/get-started/#add-config-property-in-easjson>)[Run build to test the workflow](https://docs.expo.dev/custom-builds/get-started/</custom-builds/get-started/#run-build-to-test-the-workflow>)[Summary](https://docs.expo.dev/custom-builds/get-started/</custom-builds/get-started/#summary>)
