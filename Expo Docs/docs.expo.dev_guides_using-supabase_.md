[](https://docs.expo.dev/guides/using-supabase/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/using-supabase/</>)
[Blog](https://docs.expo.dev/guides/using-supabase/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/using-supabase/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/using-supabase/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/using-supabase/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/using-supabase/</>)[Guides](https://docs.expo.dev/guides/using-supabase/</guides/overview>)[EAS](https://docs.expo.dev/guides/using-supabase/</eas>)[Reference](https://docs.expo.dev/guides/using-supabase/</versions/latest>)[Learn](https://docs.expo.dev/guides/using-supabase/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/using-supabase/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/using-supabase/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/using-supabase/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/using-supabase/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/using-supabase/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/using-supabase/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/using-supabase/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/using-supabase/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/using-supabase/</router/introduction>)[Installation](https://docs.expo.dev/guides/using-supabase/</router/installation>)[Create pages](https://docs.expo.dev/guides/using-supabase/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/using-supabase/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/using-supabase/</router/layouts>)[Error handling](https://docs.expo.dev/guides/using-supabase/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/using-supabase/</modules/overview>)[Get started](https://docs.expo.dev/guides/using-supabase/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/using-supabase/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/using-supabase/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/using-supabase/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/using-supabase/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/using-supabase/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/using-supabase/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
[Using Analytics](https://docs.expo.dev/guides/using-supabase/</guides/using-analytics>)[Using Facebook authentication](https://docs.expo.dev/guides/using-supabase/</guides/facebook-authentication>)[Using Supabase](https://docs.expo.dev/guides/using-supabase/</guides/using-supabase>)[Using Firebase](https://docs.expo.dev/guides/using-supabase/</guides/using-firebase>)[Using Google authentication](https://docs.expo.dev/guides/using-supabase/</guides/google-authentication>)[Using ESLint and Prettier](https://docs.expo.dev/guides/using-supabase/</guides/using-eslint>)[Using Next.js](https://docs.expo.dev/guides/using-supabase/</guides/using-nextjs>)[Using LogRocket](https://docs.expo.dev/guides/using-supabase/</guides/using-logrocket>)[Using Sentry](https://docs.expo.dev/guides/using-supabase/</guides/using-sentry>)[Using BugSnag](https://docs.expo.dev/guides/using-supabase/</guides/using-bugsnag>)[Build apps for TV](https://docs.expo.dev/guides/using-supabase/</guides/building-for-tv>)[Using TypeScript](https://docs.expo.dev/guides/using-supabase/</guides/typescript>)[Using In-app purchase](https://docs.expo.dev/guides/using-supabase/</guides/in-app-purchases>)
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/using-supabase/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/using-supabase/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/using-supabase/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/using-supabase/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/using-supabase/</archive>)[Expo Snack](https://docs.expo.dev/guides/using-supabase/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/using-supabase/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/using-supabase/<https:/expo.dev/mailing-list/signup>)
# Using Supabase
[Edit this page](https://docs.expo.dev/guides/using-supabase/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-supabase.mdx> "Edit content of this page on GitHub")
Add a Postgres Database and user authentication to your React Native app with Supabase.
[Edit this page](https://docs.expo.dev/guides/using-supabase/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-supabase.mdx> "Edit content of this page on GitHub")
[Supabase](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a Postgres database, user authentication, file storage, edge functions, realtime syncing, and a vector and AI toolkit. It's an open-source alternative to Google's Firebase.
Supabase automatically [generates a REST API](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/guides/api?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) from your database and employs a concept called [row level security (RLS)](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/guides/auth/row-level-security?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) to secure your data, making it possible to directly interact with your database from your React Native application without needing to go through a server!
Supabase provides a TypeScript client library called `supabase-js`[](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/reference/javascript/introduction?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) to interact with the REST API. Alternatively, Supabase also exposes a [GraphQL API](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/guides/database/extensions/pg_graphql?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) allowing you to use your favorite GraphQL client (for example, [Apollo Client](https://docs.expo.dev/guides/using-supabase/<https:/supabase.github.io/pg_graphql/usage_with_apollo/>)) should you wish to.
## Prerequisites[](https://docs.expo.dev/guides/using-supabase/<#prerequisites>)
Head over to [database.new](https://docs.expo.dev/guides/using-supabase/<https:/database.new?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) to create a new Supabase project.
### Get the API Keys[](https://docs.expo.dev/guides/using-supabase/<#get-the-api-keys>)
Get the Project URL and `anon` key from the API settings.
  1. Go to the [API Settings](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/dashboard/project/_/settings/api>) page in the Dashboard.
  2. Find your Project `URL`, `anon`, and `service_role` keys on this page.


## Using the Supabase TypeScript SDK[](https://docs.expo.dev/guides/using-supabase/<#using-the-supabase-typescript-sdk>)
Using `supabase-js`[](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/reference/javascript/introduction?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) is the most convenient way of leveraging the full power of the Supabase stack as it conveniently combines all the different services (database, auth, realtime, storage, edge functions) together.
### Install and initialize the Supabase TypeScript SDK[](https://docs.expo.dev/guides/using-supabase/<#install-and-initialize-the-supabase-typescript-sdk>)
1
After you have created your [Expo project](https://docs.expo.dev/guides/using-supabase/</get-started/create-a-project>), install `@supabase/supabase-js` and the required dependencies using the following command:
Terminal
Copy
`- ``npx expo install @supabase/supabase-js @react-native-async-storage/async-storage react-native-url-polyfill`
2
Create a helper file to initialize the Supabase client (`@supabase/supabase-js`). You need the API URL and the `anon` key copied [earlier](https://docs.expo.dev/guides/using-supabase/</guides/using-supabase#get-the-api-keys>). These variables are safe to expose in your Expo app since Supabase has [Row Level Security](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/guides/auth/row-level-security?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) enabled in the Database.
utils/supabase.ts
Copy
```
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = YOUR_REACT_NATIVE_SUPABASE_URL;
const supabaseAnonKey = YOUR_REACT_NATIVE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
 auth: {
  storage: AsyncStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
 },
});

```

Now you can `import { supabase } from '/utils/supabase'` throughout your application to leverage the full power of Supabase!
## Next steps[](https://docs.expo.dev/guides/using-supabase/<#next-steps>)
[Build a User Management AppLearn how to combine Supabase Auth and Database in this quickstart guide.](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) [Sign in with AppleSupabase Auth supports using Sign in with Apple on the web and in native apps for iOS, macOS, watchOS or tvOS.](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/guides/auth/social-login/auth-apple?platform=react-native&utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) [Sign in with GoogleSupabase Auth supports Sign in with Google on the web, native Android applications, and Chrome extensions.](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/guides/auth/social-login/auth-google?platform=react-native&utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) [Deep Linking for OAuth and Magic LinksWhen performing OAuth or sending magic link emails from native mobile applications, learn how to configure deep linking for Android and iOS applications.](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/docs/guides/auth/native-mobile-deep-linking?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) [Offline-first React Native Apps with WatermelonDBLearn how to store your data locally and sync it with Postgres using WatermelonDB.](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/blog/react-native-offline-first-watermelon-db?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>) [React Native file upload with Supabase StorageLearn how to implement authentication and file upload in a React Native app.](https://docs.expo.dev/guides/using-supabase/<https:/supabase.com/blog/react-native-storage?utm_source=expo&utm_medium=referral&utm_term=expo-react-native>)
[Previous (More - Integrations)Using Facebook authentication](https://docs.expo.dev/guides/using-supabase/</guides/facebook-authentication>)[Next (More - Integrations)Using Firebase](https://docs.expo.dev/guides/using-supabase/</guides/using-firebase>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/using-supabase/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/using-supabase/<https:/github.com/expo/expo/edit/main/docs/pages/guides/using-supabase.mdx>)
  * Last updated on December 18, 2024


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/using-supabase/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/guides/using-supabase/</guides/using-supabase/#prerequisites>)[Get the API Keys](https://docs.expo.dev/guides/using-supabase/</guides/using-supabase/#get-the-api-keys>)[Using the Supabase TypeScript SDK](https://docs.expo.dev/guides/using-supabase/</guides/using-supabase/#using-the-supabase-typescript-sdk>)[Install and initialize the Supabase TypeScript SDK](https://docs.expo.dev/guides/using-supabase/</guides/using-supabase/#install-and-initialize-the-supabase-typescript-sdk>)[Next steps](https://docs.expo.dev/guides/using-supabase/</guides/using-supabase/#next-steps>)
