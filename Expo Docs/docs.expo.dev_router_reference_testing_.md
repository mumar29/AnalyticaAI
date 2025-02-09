[](https://docs.expo.dev/router/reference/testing/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/testing/</>)
[Blog](https://docs.expo.dev/router/reference/testing/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/testing/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/testing/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/testing/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/testing/</>)[Guides](https://docs.expo.dev/router/reference/testing/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/testing/</eas>)[Reference](https://docs.expo.dev/router/reference/testing/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/testing/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/testing/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/testing/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/testing/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/testing/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/testing/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/testing/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/testing/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/testing/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/testing/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/testing/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/testing/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/testing/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/testing/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/testing/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/testing/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/testing/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/testing/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/testing/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/testing/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/testing/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/testing/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/testing/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/testing/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/testing/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/testing/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/testing/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/testing/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/testing/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/testing/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/testing/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/testing/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/testing/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/testing/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/testing/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/testing/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/testing/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/testing/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/testing/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/testing/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/testing/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/testing/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/testing/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/testing/<https:/expo.dev/mailing-list/signup>)
# Testing configuration for Expo Router
[Edit this page](https://docs.expo.dev/router/reference/testing/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/testing.mdx> "Edit content of this page on GitHub")
Learn how to create integration tests for your app when using Expo Router.
[Edit this page](https://docs.expo.dev/router/reference/testing/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/testing.mdx> "Edit content of this page on GitHub")
Expo Router relies on your file system, which can present challenges when setting up mocks for integration tests. Expo Router's submodule, `expo-router/testing-library`, is a set of testing utilities built on top of the popular `@testing-library/react-native`[](https://docs.expo.dev/router/reference/testing/<https:/callstack.github.io/react-native-testing-library/>) and allows you to quickly create in-memory Expo Router apps that are pre-configured for testing.
## Configuration[](https://docs.expo.dev/router/reference/testing/<#configuration>)
Before you proceed, ensure you have set up `jest-expo` according to the [Unit testing with Jest](https://docs.expo.dev/router/reference/testing/</develop/unit-testing>) and `@testing-library/react-native`[](https://docs.expo.dev/router/reference/testing/<https:/callstack.github.io/react-native-testing-library/docs/start/quick-start>) in your project.
> Note: When using Expo Router, do not put your test files inside the app directory. All files inside your app directory must be either routes or layout files. Instead, use the __tests__ directory or a separate directory. This approach is explained in [Unit testing with Jest](https://docs.expo.dev/router/reference/testing/</develop/unit-testing#structure-your-tests>).
### Jest Native Matchers (optional)[](https://docs.expo.dev/router/reference/testing/<#jest-native-matchers-optional>)
`@testing-library/jest-native`[](https://docs.expo.dev/router/reference/testing/<https:/testing-library.com/docs/ecosystem-jest-native/>) provides custom Jest matchers that can be used to extend the functionality of `@testing-library/react-native`. If installed, Expo Router will automatically perform the `@testing-library/jest-native` setup.
## `renderRouter`[](https://docs.expo.dev/router/reference/testing/<#renderrouter>)
`renderRouter` extends the functionality of `render`[](https://docs.expo.dev/router/reference/testing/<https:/callstack.github.io/react-native-testing-library/docs/api#render>) to simplify testing with Expo Router. It returns the same query object as `render`[](https://docs.expo.dev/router/reference/testing/<https:/callstack.github.io/react-native-testing-library/docs/api#render>), and is compatible with `screen`[](https://docs.expo.dev/router/reference/testing/<https:/callstack.github.io/react-native-testing-library/docs/api#screen>), allowing you to use the standard [query API](https://docs.expo.dev/router/reference/testing/<https:/callstack.github.io/react-native-testing-library/docs/api/queries>) to locate components.
`renderRouter` accepts the same [options](https://docs.expo.dev/router/reference/testing/<https:/callstack.github.io/react-native-testing-library/docs/api#render-options>) as `render` and introduces an additional option `initialUrl`, which sets an initial route for simulating deep-linking.
### `Inline file system`[](https://docs.expo.dev/router/reference/testing/<#inline-file-system>)
`renderRouter(mock: Record<string, ReactComponent>, options: RenderOptions)`
`renderRouter` can provide inline-mocking of a file system by passing an object to this function as the first parameter. The keys of the object are the mock filesystem paths. Do not use leading relative (`./`) or absolute (`/`) notation when defining these paths and exclude file extension.
app.test.tsx
Copy
```
import { renderRouter, screen } from 'expo-router/testing-library';
it('my-test', async () => {
 const MockComponent = jest.fn(() => <View />);
 renderRouter(
  {
   index: MockComponent,
   'directory/a': MockComponent,
   '(group)/b': MockComponent,
  },
  {
   initialUrl: '/directory/a',
  }
 );
 expect(screen).toHavePathname('/directory/a');
});

Show More

```

### `Inline file system with `null` components`[](https://docs.expo.dev/router/reference/testing/<#inline-file-system-with-null-components>)
`renderRouter(mock: string[], options: RenderOptions)`
Providing an array of strings to `renderRouter` will create an inline mock filesystem with `null` components (`{ default: () => null }`). This is useful for testing scenarios where you do not need to test the output of a route.
app.test.tsx
Copy
```
import { renderRouter, screen } from 'expo-router/testing-library';
it('my-test', async () => {
 renderRouter(['index', 'directory/a', '(group)/b'], {
  initialUrl: '/directory/a',
 });
 expect(screen).toHavePathname('/directory/a');
});

```

### `Path to fixture`[](https://docs.expo.dev/router/reference/testing/<#path-to-fixture>)
`renderRouter(fixturePath: string, options: RenderOptions)`
`renderRouter` can accept a directory path to mock an existing fixture. Ensure that the provided path is relative to the current test file.
app.test.js
Copy
```
it('my-test', async () => {
 const MockComponent = jest.fn(() => <View />);
 renderRouter('./my-test-fixture');
});

```

### `Path to the fixture with overrides`[](https://docs.expo.dev/router/reference/testing/<#path-to-the-fixture-with-overrides>)
`renderRouter({ appDir: string, overrides: Record<string, ReactComponent>}, options: RenderOptions)`
For more intricate testing scenarios, `renderRouter` can leverage both directory path and inline-mocking methods simultaneously. The `appDir` parameter takes a string representing a pathname to a directory. The overrides parameter is an inline mock that can be used to override specific paths within the `appDir`. This combination allows for fine-tuned control over the mock environment.
app.test.js
Copy
```
it('my-test', async () => {
 const MockAuthLayout = jest.fn(() => <View />);
 renderRouter({
  appDir: './my-test-fixture',
  overrides: {
   'directory/(auth)/_layout': MockAuthLayout,
  },
 });
});

```

## Jest matchers[](https://docs.expo.dev/router/reference/testing/<#jest-matchers>)
The following matches have been added to `expect` and can be used to assert values on `screen`.
### `toHavePathname()`[](https://docs.expo.dev/router/reference/testing/<#tohavepathname>)
Assert the current pathname against a given string. The matcher uses the value of the `usePathname`[](https://docs.expo.dev/router/reference/testing/</router/reference/hooks#usepathname>) hook on the current `screen`.
app.test.ts
Copy
```
expect(screen).toHavePathname('/my-router');

```

### `toHavePathnameWithParams()`[](https://docs.expo.dev/router/reference/testing/<#tohavepathnamewithparams>)
Assert the current pathname, including URL parameters, against a given string. This is useful to assert the appearance of URL in a web browser.
app.test.ts
Copy
```
expect(screen).toHavePathnameWithParams('/my-router?hello=world');

```

### `toHaveSegments()`[](https://docs.expo.dev/router/reference/testing/<#tohavesegments>)
Assert the current segments against an array of strings. The matcher uses the value of the `useSegments`[](https://docs.expo.dev/router/reference/testing/</router/reference/hooks#usesegments>) hook on the current `screen`.
app.test.ts
Copy
```
expect(screen).toHaveSegments(['[id]']);

```

### `useLocalSearchParams()`[](https://docs.expo.dev/router/reference/testing/<#uselocalsearchparams>)
Assert the current local URL parameters against an object. The matcher uses the value of the `useLocalSearchParams`[](https://docs.expo.dev/router/reference/testing/</router/reference/hooks#uselocalsearchparams>) hook on the current `screen`.
app.test.ts
Copy
```
expect(screen).useLocalSearchParams({ first: 'abc' });

```

### `useGlobalSearchParams()`[](https://docs.expo.dev/router/reference/testing/<#useglobalsearchparams>)
Assert the current screen's pathname that matches a value. Compares using the value of `useGlobalSearchParams`[](https://docs.expo.dev/router/reference/testing/</router/reference/hooks#useglobalsearchparams>) hook.
Assert the current global URL parameters against an object. The matcher uses the value of the `useGlobalSearchParams`[](https://docs.expo.dev/router/reference/testing/</router/reference/hooks#useglobalsearchparams>) hook on the current `screen`.
app.test.ts
Copy
```
expect(screen).useGlobalSearchParams({ first: 'abc' });

```

### `toHaveRouterState()`[](https://docs.expo.dev/router/reference/testing/<#tohaverouterstate>)
An advanced matcher that asserts the current router state against an object.
app.test.ts
Copy
```
expect(screen).toHaveRouterState({
 routes: [{ name: 'index', path: '/' }],
});

```

[Previous (Expo Router - Reference)Top-level src directory](https://docs.expo.dev/router/reference/testing/</router/reference/src-directory>)[Next (Expo Router - Reference)Troubleshooting](https://docs.expo.dev/router/reference/testing/</router/reference/troubleshooting>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/testing/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/testing/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/testing.mdx>)
  * Last updated on December 30, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/testing/<https:/expo.dev/privacy>).
On this page
[Configuration](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#configuration>)[Jest Native Matchers (optional)](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#jest-native-matchers-optional>)[renderRouter](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#renderrouter>)`Inline file system`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#inline-file-system>)`Inline file system with `null` components`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#inline-file-system-with-null-components>)`Path to fixture`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#path-to-fixture>)`Path to the fixture with overrides`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#path-to-the-fixture-with-overrides>)[Jest matchers](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#jest-matchers>)`toHavePathname()`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#tohavepathname>)`toHavePathnameWithParams()`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#tohavepathnamewithparams>)`toHaveSegments()`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#tohavesegments>)`useLocalSearchParams()`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#uselocalsearchparams>)`useGlobalSearchParams()`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#useglobalsearchparams>)`toHaveRouterState()`[](https://docs.expo.dev/router/reference/testing/</router/reference/testing/#tohaverouterstate>)
