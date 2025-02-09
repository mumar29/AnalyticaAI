[](https://docs.expo.dev/guides/authentication/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/authentication/</>)
[Blog](https://docs.expo.dev/guides/authentication/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/authentication/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/authentication/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/authentication/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/authentication/</>)[Guides](https://docs.expo.dev/guides/authentication/</guides/overview>)[EAS](https://docs.expo.dev/guides/authentication/</eas>)[Reference](https://docs.expo.dev/guides/authentication/</versions/latest>)[Learn](https://docs.expo.dev/guides/authentication/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/authentication/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/authentication/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/authentication/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/authentication/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/authentication/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/authentication/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/authentication/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/authentication/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/authentication/</router/introduction>)[Installation](https://docs.expo.dev/guides/authentication/</router/installation>)[Create pages](https://docs.expo.dev/guides/authentication/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/authentication/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/authentication/</router/layouts>)[Error handling](https://docs.expo.dev/guides/authentication/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/authentication/</modules/overview>)[Get started](https://docs.expo.dev/guides/authentication/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/authentication/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/authentication/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/authentication/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/authentication/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/authentication/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/authentication/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
[Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/authentication/</guides/authentication>)[Share preview releases](https://docs.expo.dev/guides/authentication/</guides/sharing-preview-releases>)[Using Hermes](https://docs.expo.dev/guides/authentication/</guides/using-hermes>)[iOS Developer Mode](https://docs.expo.dev/guides/authentication/</guides/ios-developer-mode>)[Expo Vector Icons](https://docs.expo.dev/guides/authentication/</guides/icons>)[Localization](https://docs.expo.dev/guides/authentication/</guides/localization>)[Configure JS engines](https://docs.expo.dev/guides/authentication/</guides/configuring-js-engines>)[Using Bun](https://docs.expo.dev/guides/authentication/</guides/using-bun>)[Edit rich text](https://docs.expo.dev/guides/authentication/</guides/editing-richtext>)[App store assets](https://docs.expo.dev/guides/authentication/</guides/store-assets>)[Local-first](https://docs.expo.dev/guides/authentication/</guides/local-first>)[Keyboard handling](https://docs.expo.dev/guides/authentication/</guides/keyboard-handling>)
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/authentication/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/authentication/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/authentication/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/authentication/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/authentication/</archive>)[Expo Snack](https://docs.expo.dev/guides/authentication/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/authentication/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/authentication/<https:/expo.dev/mailing-list/signup>)
# Authentication with OAuth or OpenID providers
[Edit this page](https://docs.expo.dev/guides/authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/authentication.mdx> "Edit content of this page on GitHub")
Learn how to utilize the expo-auth-session library to implement authentication with OAuth or OpenID providers.
[Edit this page](https://docs.expo.dev/guides/authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/authentication.mdx> "Edit content of this page on GitHub")
Expo can be used to login to many popular providers on Android, iOS, and web. Most of these guides utilize the pure JS `AuthSession`[ API](https://docs.expo.dev/guides/authentication/</versions/latest/sdk/auth-session>), refer to those docs for more information on the API.
Here are some important rules that apply to all authentication providers:
  * Use `WebBrowser.maybeCompleteAuthSession()` to dismiss the web popup. If you forget to add this then the popup window will not close.
  * Create redirects with `AuthSession.makeRedirectUri()` this does a lot of the heavy lifting involved with universal platform support. Behind the scenes, it uses `expo-linking`.
  * Build requests using `AuthSession.useAuthRequest()`, the hook allows for async setup which means mobile browsers won't block the authentication.
  * Be sure to disable the prompt until `request` is defined.
  * You can only invoke `promptAsync` in user interaction on the web.
  * Expo Go cannot be used for local development and testing of OAuth or OpenID Connect-enabled apps due to the inability to customize your app scheme. You can instead use a [Development Build](https://docs.expo.dev/guides/authentication/</develop/development-builds/introduction>), which enables an Expo Go-like development experience and supports OAuth redirects back to your app after login in a manner that works just like it would in production.


## Obtaining access tokens[](https://docs.expo.dev/guides/authentication/<#obtaining-access-tokens>)
Most providers in this guide use the [OAuth 2](https://docs.expo.dev/guides/authentication/<https:/oauth.net/2/>) standard for secure authentication and authorization. In the authorization code grant, the identity provider returns a one-time code. This code is then exchanged for the user's access token.
Since [your application code is not a secure place to store secrets](https://docs.expo.dev/guides/authentication/<https:/reactnative.dev/docs/security#storing-sensitive-info>), it is necessary to exchange the authorization code in a context (for example, your server). This will allow you to securely store and use a client secret to access the provider's token endpoint.
## Guides[](https://docs.expo.dev/guides/authentication/<#guides>)
AuthSession can be used for any OAuth or OpenID Connect provider, we've assembled guides for using the most requested services! If you'd like to see more, you can [open a PR](https://docs.expo.dev/guides/authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/authentication.mdx>) or [vote on canny](https://docs.expo.dev/guides/authentication/<https:/expo.canny.io/feature-requests>).
[![IdentityServer 4](https://docs.expo.dev/static/images/sdk/auth-session/identity4.png)IdentityServer 4OAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/<#identityserver-4>)[![Asgardeo](https://docs.expo.dev/static/images/sdk/auth-session/asgardeo.png)AsgardeoOAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/<#asgardeo>)[![Azure](https://docs.expo.dev/static/images/sdk/auth-session/azure.png)AzureOAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/<#azure>)[![Apple](https://docs.expo.dev/static/images/sdk/auth-session/apple.png)AppleiOS Only](https://docs.expo.dev/guides/authentication/</versions/latest/sdk/apple-authentication>)[![Beyond Identity](https://docs.expo.dev/static/images/sdk/auth-session/beyondidentity.png)Beyond IdentityOAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/<#beyond-identity>)[![Calendly](https://docs.expo.dev/static/images/sdk/auth-session/calendly.svg)CalendlyOAuth 2](https://docs.expo.dev/guides/authentication/<#calendly>)[![Cognito](https://docs.expo.dev/static/images/sdk/auth-session/cognito.png)CognitoOAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/<#cognito>)[![Coinbase](https://docs.expo.dev/static/images/sdk/auth-session/coinbase.png)CoinbaseOAuth 2](https://docs.expo.dev/guides/authentication/<#coinbase>)[![Descope](https://docs.expo.dev/static/images/sdk/auth-session/descope.png)DescopeOAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/<#descope>)[![Dropbox](https://docs.expo.dev/static/images/sdk/auth-session/dropbox.png)DropboxOAuth 2](https://docs.expo.dev/guides/authentication/<#dropbox>)[![Facebook](https://docs.expo.dev/static/images/sdk/auth-session/facebook.png)FacebookOAuth 2](https://docs.expo.dev/guides/authentication/</guides/facebook-authentication>)[![Fitbit](https://docs.expo.dev/static/images/sdk/auth-session/fitbit.png)FitbitOAuth 2](https://docs.expo.dev/guides/authentication/<#fitbit>)[![Firebase Phone](https://docs.expo.dev/static/images/sdk/auth-session/firebase-phone.png)Firebase PhoneRecaptcha](https://docs.expo.dev/guides/authentication/</versions/latest/sdk/firebase-recaptcha>)[![GitHub](https://docs.expo.dev/static/images/sdk/auth-session/github.png)GitHubOAuth 2](https://docs.expo.dev/guides/authentication/<#github>)[![Google](https://docs.expo.dev/static/images/sdk/auth-session/google.png)GoogleOAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/</guides/google-authentication>)[![Imgur](https://docs.expo.dev/static/images/sdk/auth-session/imgur.png)ImgurOAuth 2](https://docs.expo.dev/guides/authentication/<#imgur>)[![Keycloak](https://docs.expo.dev/static/images/sdk/auth-session/keycloak.png)KeycloakOAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/<#keycloak>)[![Logto](https://docs.expo.dev/static/images/sdk/auth-session/logto.png)LogtoOAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/<#logto>)[![Okta](https://docs.expo.dev/static/images/sdk/auth-session/okta.png)OktaOAuth 2 | OpenID](https://docs.expo.dev/guides/authentication/<#okta>)[![Reddit](https://docs.expo.dev/static/images/sdk/auth-session/reddit.png)RedditOAuth 2](https://docs.expo.dev/guides/authentication/<#reddit>)[![Slack](https://docs.expo.dev/static/images/sdk/auth-session/slack.png)SlackOAuth 2](https://docs.expo.dev/guides/authentication/<#slack>)[![Spotify](https://docs.expo.dev/static/images/sdk/auth-session/spotify.png)SpotifyOAuth 2](https://docs.expo.dev/guides/authentication/<#spotify>)[![Strava](https://docs.expo.dev/static/images/sdk/auth-session/strava.png)StravaOAuth 2](https://docs.expo.dev/guides/authentication/<#strava>)[![Strivacity](https://docs.expo.dev/static/images/sdk/auth-session/strivacity.png)StrivacityOAuth 2](https://docs.expo.dev/guides/authentication/<#strivacity>)[![Twitch](https://docs.expo.dev/static/images/sdk/auth-session/twitch.png)TwitchOAuth 2](https://docs.expo.dev/guides/authentication/<#twitch>)[![Twitter](https://docs.expo.dev/static/images/sdk/auth-session/twitter.png)TwitterOAuth 2](https://docs.expo.dev/guides/authentication/<#twitter>)[![Uber](https://docs.expo.dev/static/images/sdk/auth-session/uber.png)UberOAuth 2](https://docs.expo.dev/guides/authentication/<#uber>)
![IdentityServer 4](https://docs.expo.dev/static/images/sdk/auth-session/identity4.png)
### IdentityServer 4[](https://docs.expo.dev/guides/authentication/<#identityserver-4>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[More Info](https://docs.expo.dev/guides/authentication/<https:/demo.identityserver.io/>)| OpenID| Required| Available  
  * If `offline_access` isn't included then no refresh token will be returned.


IdentityServer 4 Example
Copy
```
import { Button, Text, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
WebBrowser.maybeCompleteAuthSession();
const redirectUri = AuthSession.makeRedirectUri();
export default function App() {
 const discovery = AuthSession.useAutoDiscovery('https://demo.identityserver.io');
 // Create and load an auth request
 const [request, result, promptAsync] = AuthSession.useAuthRequest(
  {
   clientId: 'native.code',
   redirectUri,
   scopes: ['openid', 'profile', 'email', 'offline_access'],
  },
  discovery
 );
 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Button title="Login!" disabled={!request} onPress={() => promptAsync()} />{result && <Text>{JSON.stringify(result, null, 2)}</Text>}</View>
 );
}

Show More

```

![Asgardeo](https://docs.expo.dev/static/images/sdk/auth-session/asgardeo.png)
### Asgardeo[](https://docs.expo.dev/guides/authentication/<#asgardeo>)
[Create Asgardeo App](https://docs.expo.dev/guides/authentication/<https:/wso2.com/asgardeo/docs/guides/#developer-guide>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/console.asgardeo.io/>)| OpenID| Supported| Available  
  * Make sure to check `Public Client` option in the console.
  * Choose the intended grant in the Allowed grant types section.


Asgardeo Auth Example
Copy
```
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import jwtDecode from "jwt-decode";
WebBrowser.maybeCompleteAuthSession();
const redirectUri = AuthSession.makeRedirectUri();
const CLIENT_ID = "YOUR_CLIENT_ID";
export default function App() {
  const discovery = AuthSession.useAutoDiscovery('https://api.asgardeo.io/t/<YOUR_ORG_NAME>/oauth2/token');
  const [tokenResponse, setTokenResponse] = useState({});
  const [decodedIdToken, setDecodedIdToken] = useState({});
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: CLIENT_ID,
      responseType: "code",
      scopes: ["openid", "profile", "email"]
    },
    discovery
  );
  const getAccessToken = () => {
   if (result?.params?.code) {
    fetch(
    "https://api.asgardeo.io/t/iamapptesting/oauth2/token",
     {
      method: "POST",
      headers: {
       "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `grant_type=authorization_code&code=${result?.params?.code}&redirect_uri=${redirectUri}&client_id=${CLIENT_ID}&code_verifier=${request?.codeVerifier}`
     }).then((response) => {
       return response.json();
      }).then((data) => {
       setTokenResponse(data);
       setDecodedIdToken(jwtDecode(data.id_token));
      }).catch((err) => {
       console.log(err);
      });
    }
  }
  useEffect(() => {
   (async function setResult() {
    if (result) {
     if (result.error) {
      Alert.alert(
       "Authentication error",
       result.params.error_description || "something went wrong"
      );
      return;
     }
     if (result.type === "success") {
      getAccessToken();
     }
    }
   })();
  }, [result]);

  return (
   <View style={styles.container}><Button title="Login" disabled={!request} onPress={() => promptAsync()} />{decodedIdToken && <Text>Welcome {decodedIdToken.given_name || ""}!</Text>}{decodedIdToken && <Text>{decodedIdToken.email}</Text>}<View style={styles.accessTokenBlock}>
     decodedToken && <Text>Access Token: {tokenResponse.access_token}</Text></View></View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accessTokenBlock: {
    width: 300,
    height: 500,
    overflow: "scroll"
  }
});

Show More

```

![Azure](https://docs.expo.dev/static/images/sdk/auth-session/azure.png)
### Azure[](https://docs.expo.dev/guides/authentication/<#azure>)
[Create Azure App](https://docs.expo.dev/guides/authentication/<https:/docs.microsoft.com/en-us/azure/active-directory/develop/v2-overview>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/docs.microsoft.com/en-us/azure/active-directory/develop/v2-overview>)| OpenID| Supported| Available  
Azure Example
Copy
```
import { useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import {
 exchangeCodeAsync,
 makeRedirectUri,
 useAuthRequest,
 useAutoDiscovery,
} from 'expo-auth-session';
import { Button, Text, SafeAreaView } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
export default function App() {
 // Endpoint
 const discovery = useAutoDiscovery(
  'https://login.microsoftonline.com/<TENANT_ID>/v2.0',
 );
 const redirectUri = makeRedirectUri({
  scheme: undefined,
  path: 'auth',
 });
 const clientId = '<CLIENT_ID>';
 // We store the JWT in here
 const [token, setToken] = useState<string | null>(null);
 // Request
 const [request, , promptAsync] = useAuthRequest(
  {
   clientId,
   scopes: ['openid', 'profile', 'email', 'offline_access'],
   redirectUri,
  },
  discovery,
 );
 return (
  <SafeAreaView>
   <Button
    disabled={!request}
    title="Login"
    onPress={() => {
     promptAsync().then((codeResponse) => {
      if (request && codeResponse?.type === 'success' && discovery) {
       exchangeCodeAsync(
        {
         clientId,
         code: codeResponse.params.code,
         extraParams: request.codeVerifier
          ? { code_verifier: request.codeVerifier }
          : undefined,
         redirectUri,
        },
        discovery,
       ).then((res) => {
        setToken(res.accessToken);
       });
      }
     });
    }}
   />
   <Text>{token}</Text></SafeAreaView>
 );
}

Show More

```

![Beyond Identity](https://docs.expo.dev/static/images/sdk/auth-session/beyondidentity.png)
### Beyond Identity[](https://docs.expo.dev/guides/authentication/<#beyond-identity>)
[Create Beyond Identity App](https://docs.expo.dev/guides/authentication/<https:/www.beyondidentity.com/developers/signup>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get your config](https://docs.expo.dev/guides/authentication/<https:/www.beyondidentity.com/developers/signup>)| OpenID| Supported| Available  
  * Beyond Identity allows developers to implement strong passwordless authentication based on public-private key pairs called Universal Passkeys. All keys are cryptographically linked to the user and can be centrally managed using the Beyond Identity APIs.
  * You will need a Universal Passkey before you can authenticate. See [Beyond Identity documentation](https://docs.expo.dev/guides/authentication/<https:/developer.beyondidentity.com>).
  * Make sure to [create a development build](https://docs.expo.dev/guides/authentication/</develop/development-builds/create-a-build>) and follow instructions to [install required config plugins](https://docs.expo.dev/guides/authentication/<https:/github.com/gobeyondidentity/bi-sdk-react-native/tree/main#using-expo>).
  * For a complete example app, see [SDK's GitHub repository](https://docs.expo.dev/guides/authentication/<https:/github.com/gobeyondidentity/bi-sdk-react-native>).


Auth Code with automatic invocation
Auth Code with manual invocation
  * Set your Beyond Identity [Authenticator Config's](https://docs.expo.dev/guides/authentication/<https:/developer.beyondidentity.com/docs/v1/platform-overview/authenticator-config>) Invocation Type to Automatic.
  * If Automatic is selected, Beyond Identity will automatically redirect to your application using the Invoke URL (the App Scheme or Universal URL pointing to your application).


Auth Code
Copy
```
import { useEffect } from 'react';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { Button } from 'react-native';
import { Embedded } from '@beyondidentity/bi-sdk-react-native';
export default function App() {
 // Endpoint
 const discovery = useAutoDiscovery(
  `https://auth-${region}.beyondidentity.com/v1/tenants/${tenant_id}/realms/${realm_id}/applications/${application_id}`
 );
 // Request
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: `${client_id}`,
   scopes: ['openid'],
   redirectUri: makeRedirectUri({
    scheme: 'your.app',
   }),
  },
  discovery
 );
 useEffect(() => {
  const authenticate = async url => {
   // Display UI for the user to select a passwordless passkey
   const passkeys = await Embedded.getPasskeys();
   if (await Embedded.isAuthenticateUrl(url)) {
    // Pass url and a selected passkey ID into the Beyond Identity Embedded SDK authenticate function
    const { redirectUrl } = await Embedded.authenticate(url, passkeys[0].id);
   }
  };
  if (response?.url) {
   authenticate(url);
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Passwordless Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

  * Set your Beyond Identity [Authenticator Config's](https://docs.expo.dev/guides/authentication/<https:/developer.beyondidentity.com/docs/v1/platform-overview/authenticator-config>) Invocation Type to Manual.
  * If Manual is selected, an authentication URL is returned as part of a JSON response. No redirects are needed and do not require web service authentication. The result is a completely silent OAuth 2.0 authentication using Passkeys.


Auth Code
Copy
```
import { Button } from 'react-native';
import { Embedded } from '@beyondidentity/bi-sdk-react-native';
export default function App() {
 async function authenticate() {
  const BeyondIdentityAuthUrl = `https://auth-${region}.beyondidentity.com/v1/tenants/${tenant_od}/realms/${realm_id}/applications/${application_id}/authorize?response_type=code&client_id=${client_id}&redirect_uri=${uri_encoded_redirect_uri}&scope=openid&state=${state}&code_challenge_method=S256&code_challenge=${pkce_code_challenge}`;
  let response = await fetch(BeyondIdentityAuthUrl, {
   method: 'GET',
   headers: new Headers({
    'Content-Type': 'application/json',
   }),
  });
  const data = await response.json();
  // Display UI for the user to select a passwordless passkey
  const passkeys = await Embedded.getPasskeys();
  if (await Embedded.isAuthenticateUrl(data.authenticate_url)) {
   // Pass url and selected Passkey ID into the Beyond Identity Embedded SDK authenticate function
   const { redirectUrl } = await Embedded.authenticate(data.authenticate_url, passkeys[0].id);
  }
 }
 return (
  <Button
   title="Passwordless Login"
   onPress={authenticate}
  />
 );
}

Show More

```

![Calendly](https://docs.expo.dev/static/images/sdk/auth-session/calendly.svg)
### Calendly[](https://docs.expo.dev/guides/authentication/<#calendly>)
[Create Calendly App](https://docs.expo.dev/guides/authentication/<https:/developer.calendly.com/getting-started>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/developer.calendly.com/getting-started>)| OAuth 2.0| Supported| Not Available  
  * `redirectUri` requires two slashes (`://`).
  * Example redirectUri: 
    * Standalone / development build: `myapp://*`
    * Web: `https://yourwebsite.com/*`


Calendly Auth Example
Copy
```
import * as WebBrowser from 'expo-web-browser';
import {
 makeRedirectUri,
 useAuthRequest,
 exchangeCodeAsync,
} from "expo-auth-session";
import { useEffect, useState } from "react";
WebBrowser.maybeCompleteAuthSession();
const discovery = {
 authorizationEndpoint: "https://auth.calendly.com/oauth/authorize",
 tokenEndpoint: "https://auth.calendly.com/oauth/token",
};
export default function App() {
 const [authTokens, setAuthTokens] = useState({access_token: "", refresh_token: ""});
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: process.env.EXPO_PUBLIC_Client_ID,
   usePKCE: true,
   redirectUri: makeRedirectUri({
    native: "myapp://",
   }),
  },
  discovery
 );
 useEffect(() => {
  const exchange = async (exchangeTokenReq) => {
   try {
    const exchangeTokenResponse = await exchangeCodeAsync(
     {
      clientId: process.env.EXPO_PUBLIC_Client_ID,
      code: exchangeTokenReq,
      redirectUri: makeRedirectUri({
       native: "myapp://",
      }),
      extraParams: {
       code_verifier: request.codeVerifier,
      },
     },
     discovery
    );
    setAuthTokens(exchangeTokenResponse);
   } catch (error) {
    console.error("error", error);
   }
  };
  if (response) {
   if (response.error) {
    console.error(
     "Authentication error",
     response.params.error_description || "something went wrong"
    );
   }
   if (response.type === "success") {
    exchange( response.params.code);
   }
  }
 }, [discovery, request, response]);
 return (
 <SafeAreaView><View><Text>0Auth2</Text><Button
     title="Connect to Calendly"
     onPress={() => {
      promptAsync();
     }}
    /><Text>AuthTokens: {JSON.stringify(authTokens)}</Text></View></SafeAreaView>
 )
}

Show More

```

![Cognito](https://docs.expo.dev/static/images/sdk/auth-session/cognito.png)
### Cognito[](https://docs.expo.dev/guides/authentication/<#cognito>)
[Create Cognito App](https://docs.expo.dev/guides/authentication/<https:/console.aws.amazon.com/cognito/v2/idp/user-pools>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/console.aws.amazon.com/cognito/v2/idp/user-pools>)| OpenID| Supported| Not Available  
  * Leverages the Hosted UI in Cognito ([API documentation](https://docs.expo.dev/guides/authentication/<https:/docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html>))
  * Requests code after successfully authenticating, followed by exchanging code for the auth tokens (PKCE)
  * The `/token` endpoint requires a `code_verifier` parameter which you can retrieve from the request before calling `exchangeCodeAsync()`:

```
extraParams: {
 code_verifier: request.codeVerifier,
}

```

Cognito Auth Example
Copy
```
import { useState, useMemo, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { useAuthRequest, exchangeCodeAsync, revokeAsync, ResponseType } from 'expo-auth-session';
import { Button, Alert } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
const clientId = '<your-client-id-here>';
const userPoolUrl =
 'https://<your-user-pool-domain>.auth.<your-region>.amazoncognito.com';
const redirectUri = 'your-redirect-uri';
export default function App() {
 const [authTokens, setAuthTokens] = useState(null);
 const discoveryDocument = useMemo(() => ({
  authorizationEndpoint: userPoolUrl + '/oauth2/authorize',
  tokenEndpoint: userPoolUrl + '/oauth2/token',
  revocationEndpoint: userPoolUrl + '/oauth2/revoke',
 }), []);
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId,
   responseType: ResponseType.Code,
   redirectUri,
   usePKCE: true,
  },
  discoveryDocument
 );
 useEffect(() => {
  const exchangeFn = async (exchangeTokenReq) => {
   try {
    const exchangeTokenResponse = await exchangeCodeAsync(
     exchangeTokenReq,
     discoveryDocument
    );
    setAuthTokens(exchangeTokenResponse);
   } catch (error) {
    console.error(error);
   }
  };
  if (response) {
   if (response.error) {
    Alert.alert(
     'Authentication error',
     response.params.error_description || 'something went wrong'
    );
    return;
   }
   if (response.type === 'success') {
    exchangeFn({
     clientId,
     code: response.params.code,
     redirectUri,
     extraParams: {
      code_verifier: request.codeVerifier,
     },
    });
   }
  }
 }, [discoveryDocument, request, response]);
 const logout = async () => {
  if (!authTokens?.refreshToken || !discoveryDocument || !config.clientId) {
   return;
  }
  try {
   const urlParams = new URLSearchParams({
    client_id: config.clientId || '',
    logout_uri: redirectUri,
   });
   // Open the logout page in the browser
   await WebBrowser.openAuthSessionAsync(`${config.webBaseUrl}/logout?${urlParams.toString()}`);
   // Revoke the refresh token
   const revokeResponse = await revokeAsync(
    {
     clientId: config.clientId || '',
     token: authTokens?.refreshToken,
    },
    discoveryDocument
   );
   if (revokeResponse) {
    setAuthTokens(undefined);
   }
  } catch (error) {
   // Log the error but don't throw it since we want to continue with clearing tokens
   console.error('Error during token revocation:', error);
  }
 }
 
 console.log('authTokens: ' + JSON.stringify(authTokens));
 return authTokens ? (
  <Button title="Logout" onPress={() => logout()} />
 ) : (
  <Button disabled={!request} title="Login" onPress={() => promptAsync()} />
 );
}

Show More

```

![Coinbase](https://docs.expo.dev/static/images/sdk/auth-session/coinbase.png)
### Coinbase[](https://docs.expo.dev/guides/authentication/<#coinbase>)
[Create Coinbase App](https://docs.expo.dev/guides/authentication/<https:/www.coinbase.com/oauth/applications/new>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/www.coinbase.com/oauth/applications/new>)| OAuth 2.0| Supported| Not Available  
  * The `redirectUri` requires two slashes (`://`).
  * Scopes must be joined with `:` so just create one long string.
  * Setup redirect URIs: Your Project > Permitted Redirect URIs: (be sure to save after making changes).
Web dev: `https://localhost:19006`
    * Run `expo start --web --https` to run with https, auth won't work otherwise.
    * Adding a slash to the end of the URL doesn't matter.
Standalone / development build: `your-scheme://`
    * Scheme should be specified in app.json `expo.scheme: 'your-scheme'`, then added to the app code with `makeRedirectUri({ native: 'your-scheme://' })`)
Web production: `https://yourwebsite.com`
    * Set this to whatever your deployed website URL is.


Coinbase Auth Example
Copy
```
import {
 exchangeCodeAsync,
 makeRedirectUri,
 TokenResponse,
 useAuthRequest,
} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useMemo, useReducer, useRef } from "react";
import { Button } from "react-native";
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: "https://www.coinbase.com/oauth/authorize",
 tokenEndpoint: "https://api.coinbase.com/oauth/token",
 revocationEndpoint: "https://api.coinbase.com/oauth/revoke",
};
const redirectUri = makeRedirectUri({ scheme: 'your.app'});
const CLIENT_ID = "CLIENT_ID";
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: CLIENT_ID,
   scopes: ["wallet:accounts:read"],
   redirectUri,
  },
  discovery
 );
 const {
  // The token will be auto exchanged after auth completes.
  token,
  exchangeError,
 } = useAutoExchange(
  response?.type === "success" ? response.params.code : null
 );
 useEffect(() => {
  if (token) {
   console.log("My Token:", token.accessToken);
  }
 }, [token]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}
type State = {
 token: TokenResponse | null;
 exchangeError: Error | null;
};
// A hook to automatically exchange the auth token for an access token.
// this should be performed in a server and not here in the application.
// For educational purposes only:
function useAutoExchange(code?: string): State {
 const [state, setState] = useReducer(
  (state: State, action: Partial<State>) => ({ ...state, ...action }),
  { token: null, exchangeError: null }
 );
 const isMounted = useMounted();
 useEffect(() => {
  if (!code) {
   setState({ token: null, exchangeError: null });
   return;
  }
  exchangeCodeAsync(
   {
    clientId: CLIENT_ID,
    clientSecret: "CLIENT_SECRET",
    code,
    redirectUri,
   },
   discovery
  )
   .then((token) => {
    if (isMounted.current) {
     setState({ token, exchangeError: null });
    }
   })
   .catch((exchangeError) => {
    if (isMounted.current) {
     setState({ exchangeError, token: null });
    }
   });
 }, [code]);
 return state;
}
function useMounted() {
 const isMounted = useRef(true);
 useEffect(() => {
  return () => {
   isMounted.current = false;
  };
 }, []);
 return isMounted;
}

Show More

```

![Descope](https://docs.expo.dev/static/images/sdk/auth-session/descope.png)
### Descope[](https://docs.expo.dev/guides/authentication/<#descope>)
[Create Descope App](https://docs.expo.dev/guides/authentication/<https:/www.descope.com/sign-up>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/docs.descope.com/>)| OpenID| Supported| Available  
  * Leverages the Hosted Descope Flow app [Auth-Hosting App](https://docs.expo.dev/guides/authentication/<https:/github.com/descope/auth-hosting>).
  * Requests code after successfully authenticating, followed by exchanging code for the auth tokens (PKCE).


Descope Auth Example
Copy
```
import { useState, useEffect } React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { Button, View } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
const descopeProjectId = '<Descope Project ID>'; // Replace this with your Descope Project ID
const descopeUrl = `https://api.descope.com/${descopeProjectId}`;
const redirectUri = AuthSession.makeRedirectUri();
export default function App() {
 const [authTokens, setAuthTokens] = useState(null);
 const discovery = AuthSession.useAutoDiscovery(descopeUrl);
 const [request, response, promptAsync] = AuthSession.useAuthRequest(
  {
   clientId: descopeProjectId,
   responseType: AuthSession.ResponseType.Code,
   redirectUri,
   usePKCE: true,
   scopes: ['openid', 'profile', 'email'],
  },
  discovery
 );
 useEffect(() => {
  if (response) {
   if (response.error) {
    console.error(
     'Authentication error',
     response.params.error_description || 'something went wrong'
    );
    return;
   }
   if (response.type === 'success') {
    const exchangeFn = async (exchangeTokenReq) => {
     try {
      const exchangeTokenResponse = await AuthSession.exchangeCodeAsync(
       exchangeTokenReq,
       discovery
      );
      setAuthTokens(exchangeTokenResponse);
     } catch (error) {
      console.error(error);
     }
    };
    exchangeFn({
     clientId: descopeProjectId,
     code: response.params.code,
     redirectUri,
     extraParams: {
      code_verifier: request.codeVerifier,
     },
    });
   }
  }
 }, [discovery, request, response]);
 const logout = async () => {
  const revokeResponse = await AuthSession.revokeAsync(
   {
    clientId: descopeProjectId,
    token: authTokens.refreshToken,
   },
   discovery
  );
  if (revokeResponse) {
   setAuthTokens(null);
  }
 };
 return (
  <View>{authTokens ? (
    <Button title="Logout" onPress={logout} />
   ) : (
    <Button
     disabled={!request}
     title="Login"
     onPress={promptAsync}
    />
   )}</View>
 );
}

Show More

```

![Dropbox](https://docs.expo.dev/static/images/sdk/auth-session/dropbox.png)
### Dropbox[](https://docs.expo.dev/guides/authentication/<#dropbox>)
[Create Dropbox App](https://docs.expo.dev/guides/authentication/<https:/www.dropbox.com/developers/apps/create>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/www.dropbox.com/developers/apps/create>)| OAuth 2.0| Not Supported| Not Available  
  * Scopes must be an empty array.


Dropbox Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, Platform } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://www.dropbox.com/oauth2/authorize',
 tokenEndpoint: 'https://www.dropbox.com/oauth2/token',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   // There are no scopes so just pass an empty array
   scopes: [],
   redirectUri: makeRedirectUri({
    scheme: 'your.app',
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Fitbit](https://docs.expo.dev/static/images/sdk/auth-session/fitbit.png)
### Fitbit[](https://docs.expo.dev/guides/authentication/<#fitbit>)
[Create Fitbit App](https://docs.expo.dev/guides/authentication/<https:/dev.fitbit.com/apps/new>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/dev.fitbit.com/apps/new>)| OAuth 2.0| Supported| Not Available  
  * Provider only allows one redirect URI per app. You'll need an individual app for every method you want to use: 
    * Standalone / development build: `com.your.app://*`
    * Web: `https://yourwebsite.com/*`
  * The `redirectUri` requires two slashes (`://`).


Fitbit Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, Platform } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize',
 tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
 revocationEndpoint: 'https://api.fitbit.com/oauth2/revoke',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   scopes: ['activity', 'sleep'],
   redirectUri: makeRedirectUri({
    scheme: 'your.app'
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![GitHub](https://docs.expo.dev/static/images/sdk/auth-session/github.png)
### GitHub[](https://docs.expo.dev/guides/authentication/<#github>)
[Create GitHub App](https://docs.expo.dev/guides/authentication/<https:/github.com/settings/developers>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/github.com/settings/developers>)| OAuth 2.0| Supported| Not Available  
  * Provider only allows one redirect URI per app. You'll need an individual app for every method you want to use: 
    * Standalone / development build: `com.your.app://*`
    * Web: `https://yourwebsite.com/*`
  * The `redirectUri` requires two slashes (`://`).
  * `revocationEndpoint` is dynamic and requires your `config.clientId`.


GitHub Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://github.com/login/oauth/authorize',
 tokenEndpoint: 'https://github.com/login/oauth/access_token',
 revocationEndpoint: 'https://github.com/settings/connections/applications/<CLIENT_ID>',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   scopes: ['identity'],
   redirectUri: makeRedirectUri({
    scheme: 'your.app'
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Imgur](https://docs.expo.dev/static/images/sdk/auth-session/imgur.png)
### Imgur[](https://docs.expo.dev/guides/authentication/<#imgur>)
[Create Imgur App](https://docs.expo.dev/guides/authentication/<https:/api.imgur.com/oauth2/addclient>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/api.imgur.com/oauth2/addclient>)| OAuth 2.0| Supported| Not Available  
  * You will need to create a different provider app for each platform (dynamically choosing your `clientId`).
  * Learn more here: [imgur.com/oauth2](https://docs.expo.dev/guides/authentication/<https:/api.imgur.com/oauth2>)


Imgur Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, Platform } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
const discovery = {
 authorizationEndpoint: 'https://api.imgur.com/oauth2/authorize',
 tokenEndpoint: 'https://api.imgur.com/oauth2/token',
};
export default function App() {
 // Request
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   clientSecret: 'CLIENT_SECRET',
   redirectUri: makeRedirectUri({
    scheme: 'your.app',
   }),
   // imgur requires an empty array
   scopes: [],
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Keycloak](https://docs.expo.dev/static/images/sdk/auth-session/keycloak.png)
### Keycloak[](https://docs.expo.dev/guides/authentication/<#keycloak>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
-| OpenID| Required| Available  
Keycloak Auth Example
Copy
```
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { Button, Text, View } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
export default function App() {
 const discovery = useAutoDiscovery('https://YOUR_KEYCLOAK/realms/YOUR_REALM');
// Create and load an auth request
 const [request, result, promptAsync] = useAuthRequest(
  {
   clientId: 'YOUR_CLIENT_NAME',
   redirectUri: makeRedirectUri({
    scheme: 'YOUR_SCHEME'
   }),
   scopes: ['openid', 'profile'],
  },
  discovery
 );
 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Button title="Login!" disabled={!request} onPress={() => promptAsync()} />{result && <Text>{JSON.stringify(result, null, 2)}</Text>}</View>
 );
}

Show More

```

![Logto](https://docs.expo.dev/static/images/sdk/auth-session/logto.png)
### Logto[](https://docs.expo.dev/guides/authentication/<#logto>)
[Create Logto App](https://docs.expo.dev/guides/authentication/<https:/docs.logto.io/quick-starts/expo/>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/docs.logto.io/quick-starts/expo/>)| OpenID| Supported| Available  
  * For native platforms, a Private-Use native URI scheme is required for `redirectUri`. See [OAuth2 spec](https://docs.expo.dev/guides/authentication/<https:/datatracker.ietf.org/doc/html/rfc8252#section-8.4>) for more details.
  * For web platform, a `http(s)://` scheme is required for `redirectUri`.


Logto Auth Example
Copy
```
import { LogtoProvider, useLogto } from "@logto/rn";
// Use `useLogto()` hook to sign in and sign out
const Content = () => {
 const { signIn, signOut, isAuthenticated } = useLogto();
 return isAuthenticated ? (
  <Button title="Sign Out" onPress={signOut} />
 ) : (
  <Button title="Sign In" onPress={async () => signIn(redirectUri)} />
 );
};
// Wrap your page component with `LogtoProvider`
const App = () => {
 const logtoConfig = {
  appId: "YOUR_APP",
  endpoint: "YOUR_LOGTO_ENDPOINT",
 };
 return (
  <LogtoProvider config={logtoConfig}><Content /></LogtoProvider>
 );
};

Show More

```

![Okta](https://docs.expo.dev/static/images/sdk/auth-session/okta.png)
### Okta[](https://docs.expo.dev/guides/authentication/<#okta>)
[Create Okta App](https://docs.expo.dev/guides/authentication/<https:/developer.okta.com/signup>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Sign-up](https://docs.expo.dev/guides/authentication/<https:/developer.okta.com/signup/>) > Applications| OpenID| Supported| Available  
  * You cannot define a custom `redirectUri`, Okta will provide you with one.


Okta Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { Button, Platform } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
export default function App() {
 // Endpoint
 const discovery = useAutoDiscovery('https://<OKTA_DOMAIN>.com/oauth2/default');
 // Request
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   scopes: ['openid', 'profile'],
   redirectUri: makeRedirectUri({
    native: 'com.okta.<OKTA_DOMAIN>:/callback',
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Reddit](https://docs.expo.dev/static/images/sdk/auth-session/reddit.png)
### Reddit[](https://docs.expo.dev/guides/authentication/<#reddit>)
[Create Reddit App](https://docs.expo.dev/guides/authentication/<https:/www.reddit.com/prefs/apps>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/www.reddit.com/prefs/apps>)| OAuth 2.0| Supported| Not Available  
  * Provider only allows one redirect URI per app. You'll need an individual app for every method you want to use: 
    * Standalone / development build: `com.your.app://*`
    * Web: `https://yourwebsite.com/*`
  * The `redirectUri` requires two slashes (`://`).


Reddit Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
 tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   scopes: ['identity'],
   redirectUri: makeRedirectUri({
    native: 'your.app://redirect',
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Slack](https://docs.expo.dev/static/images/sdk/auth-session/slack.png)
### Slack[](https://docs.expo.dev/guides/authentication/<#slack>)
[Create Slack App](https://docs.expo.dev/guides/authentication/<https:/api.slack.com/apps>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/api.slack.com/apps>)| OAuth 2.0| Supported| Not Available  
  * The `redirectUri` requires two slashes (`://`).
  * `redirectUri` can be defined under the "OAuth & Permissions" section of the website.
  * `clientId` and `clientSecret` can be found in the "App Credentials" section.
  * Scopes must be joined with ':' so just create one long string.
  * Navigate to the "Scopes" section to enable scopes.
  * `revocationEndpoint` is not available.


Slack Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://slack.com/oauth/authorize',
 tokenEndpoint: 'https://slack.com/api/oauth.access',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   scopes: ['emoji:read'],
   redirectUri: makeRedirectUri({
    scheme: 'your.app'
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Spotify](https://docs.expo.dev/static/images/sdk/auth-session/spotify.png)
### Spotify[](https://docs.expo.dev/guides/authentication/<#spotify>)
[Create Spotify App](https://docs.expo.dev/guides/authentication/<https:/developer.spotify.com/dashboard/applications>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/developer.spotify.com/dashboard/applications>)| OAuth 2.0| Supported| Not Available  
  * Setup your redirect URIs: Your project > Edit Settings > Redirect URIs, be sure to save after making changes.
Web dev: `https://localhost:19006`
    * Important: Ensure there's no slash at the end of the URL unless manually changed in the app code with `makeRedirectUri({ path: '/' })`.
    * Run `expo start --web --https` to run with https, auth won't work otherwise.
Standalone / development build: `your-scheme://`
    * Scheme should be specified in app.json `expo.scheme: 'your-scheme'`, then added to the app code with `makeRedirectUri({ native: 'your-scheme://' })`)
Web production: `https://yourwebsite.com`
    * Set this to whatever your deployed website URL is.
  * Learn more about the [Spotify API](https://docs.expo.dev/guides/authentication/<https:/developer.spotify.com/documentation/web-api/>).


Spotify Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://accounts.spotify.com/authorize',
 tokenEndpoint: 'https://accounts.spotify.com/api/token',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   scopes: ['user-read-email', 'playlist-modify-public'],
   // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
   // this must be set to false
   usePKCE: false,
   redirectUri: makeRedirectUri({
    scheme: 'your.app'
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Strava](https://docs.expo.dev/static/images/sdk/auth-session/strava.png)
### Strava[](https://docs.expo.dev/guides/authentication/<#strava>)
[Create Strava App](https://docs.expo.dev/guides/authentication/<https:/www.strava.com/settings/api>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/www.strava.com/settings/api>)| OAuth 2.0| Supported| Not Available  
  * Learn more about the [Strava API](https://docs.expo.dev/guides/authentication/<http:/developers.strava.com/docs/reference/>).
  * The "Authorization Callback Domain" refers to the final path component of your redirect URI. Ex: In the URI `com.bacon.myapp://redirect` the domain would be `redirect`.
  * No Implicit auth flow is provided by Strava.


Strava Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://www.strava.com/oauth/mobile/authorize',
 tokenEndpoint: 'https://www.strava.com/oauth/token',
 revocationEndpoint: 'https://www.strava.com/oauth/deauthorize',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   scopes: ['activity:read_all'],
   redirectUri: makeRedirectUri({
    // the "redirect" must match your "Authorization Callback Domain" in the Strava dev console.
    native: 'your.app://redirect',
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

Strava doesn't provide an implicit auth flow, you should send the code to a server or serverless function to perform the access token exchange. For debugging purposes, you can perform the exchange client-side using the following method:
```
const { accessToken } = await AuthSession.exchangeCodeAsync(
 {
  clientId: request?.clientId,
  redirectUri,
  code: result.params.code,
  extraParams: {
   // You must use the extraParams variation of clientSecret.
   // Never store your client secret on the client.
   client_secret: 'CLIENT_SECRET',
  },
 },
 { tokenEndpoint: 'https://www.strava.com/oauth/token' }
);

```

![Strivacity](https://docs.expo.dev/static/images/sdk/auth-session/strivacity.png)
### Strivacity[](https://docs.expo.dev/guides/authentication/<#strivacity>)
[Create Strivacity App](https://docs.expo.dev/guides/authentication/<https:/www.strivacity.com/learn-support/developer-hub>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/docs.strivacity.com/docs/setting-up-your-instance>)| OpenID| Supported| Available  
Strivacity Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://<instance>.strivacity.com/oauth2/auth',
 tokenEndpoint: 'https://<instance>.strivacity.com/oauth2/token',
 revocationEndpoint: 'https://<instance>.strivacity.com/oauth2/revoke',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   scopes: ['openid', 'profile'],
   redirectUri: makeRedirectUri();
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Twitch](https://docs.expo.dev/static/images/sdk/auth-session/twitch.png)
### Twitch[](https://docs.expo.dev/guides/authentication/<#twitch>)
[Create Twitch App](https://docs.expo.dev/guides/authentication/<https:/dev.twitch.tv/console/apps/create>)
Website| Provider| PKCE| Auto Discovery| Scopes  
---|---|---|---|---  
[Get your Config](https://docs.expo.dev/guides/authentication/<https:/dev.twitch.tv/console/apps/create>)| OAuth| Supported| Not Available| [Info](https://docs.expo.dev/guides/authentication/<https:/dev.twitch.tv/docs/authentication#scopes>)  
  * You will need to enable 2FA on your Twitch account to create an application.


Twitch Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://id.twitch.tv/oauth2/authorize',
 tokenEndpoint: 'https://id.twitch.tv/oauth2/token',
 revocationEndpoint: 'https://id.twitch.tv/oauth2/revoke',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   redirectUri: makeRedirectUri({
    scheme: 'your.app'
   }),
   scopes: ['user:read:email', 'analytics:read:games'],
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Twitter](https://docs.expo.dev/static/images/sdk/auth-session/twitter.png)
### Twitter[](https://docs.expo.dev/guides/authentication/<#twitter>)
[Create Twitter App](https://docs.expo.dev/guides/authentication/<https:/developer.twitter.com/en/portal/projects/new>)
Website| Provider| PKCE| Auto Discovery| Scopes  
---|---|---|---|---  
[Get your Config](https://docs.expo.dev/guides/authentication/<https:/developer.twitter.com/en/portal/projects/new>)| OAuth| Supported| Not Available| [Info](https://docs.expo.dev/guides/authentication/<https:/developer.twitter.com/en/docs/authentication/oauth-2-0/authorization-code>)  
  * You will need to be approved by Twitter support before you can use the Twitter v2 API.
  * Web does not appear to work, the Twitter authentication website appears to block the popup, causing the `response` of `useAuthRequest` to always be `{type: 'dismiss'}`.
  * Example redirects: 
    * Standalone / development build: `com.your.app://`
    * Web (dev `expo start --https`): `https://localhost:19006` (no ending slash)
  * The `redirectUri` requires two slashes (`://`).


Twitter Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, Platform } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: "https://twitter.com/i/oauth2/authorize",
 tokenEndpoint: "https://twitter.com/i/oauth2/token",
 revocationEndpoint: "https://twitter.com/i/oauth2/revoke",
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   redirectUri: makeRedirectUri({
    scheme: 'your.app',
   }),
   usePKCE: true,
   scopes: [
    "tweet.read",
   ],
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

![Uber](https://docs.expo.dev/static/images/sdk/auth-session/uber.png)
### Uber[](https://docs.expo.dev/guides/authentication/<#uber>)
[Create Uber App](https://docs.expo.dev/guides/authentication/<https:/developer.uber.com/docs/riders/guides/authentication/introduction>)
Website| Provider| PKCE| Auto Discovery  
---|---|---|---  
[Get Your Config](https://docs.expo.dev/guides/authentication/<https:/developer.uber.com/docs/riders/guides/authentication/introduction>)| OAuth 2.0| Supported| Not Available  
  * The `redirectUri` requires two slashes (`://`).
  * `scopes` can be difficult to get approved.


Uber Auth Example
Copy
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://login.uber.com/oauth/v2/authorize',
 tokenEndpoint: 'https://login.uber.com/oauth/v2/token',
 revocationEndpoint: 'https://login.uber.com/oauth/v2/revoke',
};
export default function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   clientId: 'CLIENT_ID',
   scopes: ['profile', 'delivery'],
   redirectUri: makeRedirectUri({
    scheme: 'your.app'
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response?.type === 'success') {
   const { code } = response.params;
  }
 }, [response]);
 return (
  <Button
   disabled={!request}
   title="Login"
   onPress={() => {
    promptAsync();
   }}
  />
 );
}

Show More

```

## Redirect URI patterns[](https://docs.expo.dev/guides/authentication/<#redirect-uri-patterns>)
Here are a few examples of some common redirect URI patterns you may end up using.
### Standalone / development build[](https://docs.expo.dev/guides/authentication/<#standalone--development-build>)
> `yourscheme://path`
In some cases there will be anywhere between 1 to 3 slashes (`/`).
  * Environment:
    * Bare workflow 
      * `npx expo prebuild`
    * Standalone builds in the App or Play Store or testing locally 
      * Android: `eas build` or `npx expo run:android`
      * iOS: `eas build` or `npx expo run:ios`
  * Create: Use `AuthSession.makeRedirectUri({ native: '<YOUR_URI>' })` to select native when running in the correct environment.
    * `your.app://redirect` -> `makeRedirectUri({ scheme: 'your.app', path: 'redirect' })`
    * `your.app:///` -> `makeRedirectUri({ scheme: 'your.app', isTripleSlashed: true })`
    * `your.app:/authorize` -> `makeRedirectUri({ native: 'your.app:/authorize' })`
    * `your.app://auth?foo=bar` -> `makeRedirectUri({ scheme: 'your.app', path: 'auth', queryParams: { foo: 'bar' } })`
    * `exp://u.expo.dev/[project-id]?channel-name=[channel-name]&runtime-version=[runtime-version]` -> `makeRedirectUri()`
    * This link can often be created automatically but we recommend you define the `scheme` property at least. The entire URL can be overridden in apps by passing the `native` property. Often this will be used for providers like Google or Okta which require you to use a custom native URI redirect. You can add, list, and open URI schemes using `npx uri-scheme`.
    * If you change the `expo.scheme` after ejecting then you'll need to use the `expo apply` command to apply the changes to your native project, then rebuild them (`yarn ios`, `yarn android`).
  * Usage: `promptAsync({ redirectUri })`


## Improving user experience[](https://docs.expo.dev/guides/authentication/<#improving-user-experience>)
The "login flow" is an important thing to get right, in a lot of cases this is where the user will _commit_ to using your app again. A bad experience can cause users to give up on your app before they've really gotten to use it.
Here are a few tips you can use to make authentication quick, easy, and secure for your users!
### Warming the browser[](https://docs.expo.dev/guides/authentication/<#warming-the-browser>)
On Android you can optionally warm up the web browser before it's used. This allows the browser app to pre-initialize itself in the background. Doing this can significantly speed up prompting the user for authentication.
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
function App() {
 useEffect(() => {
  WebBrowser.warmUpAsync();
  return () => {
   WebBrowser.coolDownAsync();
  };
 }, []);
 // Do authentication ...
}

```

### Implicit login[](https://docs.expo.dev/guides/authentication/<#implicit-login>)
Because there was no secure way to do this to store client secrets in your app bundle, historically, many providers have offered an "Implicit flow" which enables you to request an access token without the client secret. This is no longer recommended due to inherent security risks, including the risk of access token injection. Instead, most providers now support the authorization code with PKCE (Proof Key for Code Exchange) extension to securely exchange an authorization code for an access token within your client app code. Learn more about [transitioning from Implicit flow to authorization code with PKCE](https://docs.expo.dev/guides/authentication/<https:/oauth.net/2/grant-types/implicit/>).
`expo-auth-session` still supports Implicit flow for legacy code purposes. Below is an example implementation of the Implicit flow.
```
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
 authorizationEndpoint: 'https://accounts.spotify.com/authorize',
};
function App() {
 const [request, response, promptAsync] = useAuthRequest(
  {
   responseType: ResponseType.Token,
   clientId: 'CLIENT_ID',
   scopes: ['user-read-email', 'playlist-modify-public'],
   redirectUri: makeRedirectUri({
    scheme: 'your.app'
   }),
  },
  discovery
 );
 useEffect(() => {
  if (response && response.type === 'success') {
   const token = response.params.access_token;
  }
 }, [response]);
 return <Button disabled={!request} onPress={() => promptAsync()} title="Login" />;
}

Show More

```

### Storing data[](https://docs.expo.dev/guides/authentication/<#storing-data>)
On native platforms like iOS, and Android you can secure things like access tokens locally using a package called `expo-secure-store`[](https://docs.expo.dev/guides/authentication/</versions/latest/sdk/securestore>) (This is different to `AsyncStorage` which is not secure). This package provides native access to [keychain services](https://docs.expo.dev/guides/authentication/<https:/developer.apple.com/documentation/security/keychain_services>) on iOS and encrypted `SharedPreferences`[](https://docs.expo.dev/guides/authentication/<https:/developer.android.com/training/basics/data-storage/shared-preferences.html>) on Android. There is no web equivalent to this functionality.
You can store your authentication results and rehydrate them later to avoid having to prompt the user to login again.
```
import * as SecureStore from 'expo-secure-store';
const MY_SECURE_AUTH_STATE_KEY = 'MySecureAuthStateKey';
function App() {
 const [, response] = useAuthRequest({});
 useEffect(() => {
  if (response && response.type === 'success') {
   const auth = response.params;
   const storageValue = JSON.stringify(auth);
   if (Platform.OS !== 'web') {
    // Securely store the auth on your device
    SecureStore.setItemAsync(MY_SECURE_AUTH_STATE_KEY, storageValue);
   }
  }
 }, [response]);
 // More login code...
}

Show More

```

[Previous (More)Upgrade Expo SDK](https://docs.expo.dev/guides/authentication/</workflow/upgrading-expo-sdk-walkthrough>)[Next (More - Assorted)Share preview releases](https://docs.expo.dev/guides/authentication/</guides/sharing-preview-releases>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/authentication/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/authentication/<https:/github.com/expo/expo/edit/main/docs/pages/guides/authentication.mdx>)
  * Last updated on January 23, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/authentication/<https:/expo.dev/privacy>).
On this page
[Obtaining access tokens](https://docs.expo.dev/guides/authentication/</guides/authentication/#obtaining-access-tokens>)[Guides](https://docs.expo.dev/guides/authentication/</guides/authentication/#guides>)[IdentityServer 4](https://docs.expo.dev/guides/authentication/</guides/authentication/#identityserver-4>)[Asgardeo](https://docs.expo.dev/guides/authentication/</guides/authentication/#asgardeo>)[Azure](https://docs.expo.dev/guides/authentication/</guides/authentication/#azure>)[Beyond Identity](https://docs.expo.dev/guides/authentication/</guides/authentication/#beyond-identity>)[Calendly](https://docs.expo.dev/guides/authentication/</guides/authentication/#calendly>)[Cognito](https://docs.expo.dev/guides/authentication/</guides/authentication/#cognito>)[Coinbase](https://docs.expo.dev/guides/authentication/</guides/authentication/#coinbase>)[Descope](https://docs.expo.dev/guides/authentication/</guides/authentication/#descope>)[Dropbox](https://docs.expo.dev/guides/authentication/</guides/authentication/#dropbox>)[Fitbit](https://docs.expo.dev/guides/authentication/</guides/authentication/#fitbit>)[GitHub](https://docs.expo.dev/guides/authentication/</guides/authentication/#github>)[Imgur](https://docs.expo.dev/guides/authentication/</guides/authentication/#imgur>)[Keycloak](https://docs.expo.dev/guides/authentication/</guides/authentication/#keycloak>)[Logto](https://docs.expo.dev/guides/authentication/</guides/authentication/#logto>)[Okta](https://docs.expo.dev/guides/authentication/</guides/authentication/#okta>)[Reddit](https://docs.expo.dev/guides/authentication/</guides/authentication/#reddit>)[Slack](https://docs.expo.dev/guides/authentication/</guides/authentication/#slack>)[Spotify](https://docs.expo.dev/guides/authentication/</guides/authentication/#spotify>)[Strava](https://docs.expo.dev/guides/authentication/</guides/authentication/#strava>)[Strivacity](https://docs.expo.dev/guides/authentication/</guides/authentication/#strivacity>)[Twitch](https://docs.expo.dev/guides/authentication/</guides/authentication/#twitch>)[Twitter](https://docs.expo.dev/guides/authentication/</guides/authentication/#twitter>)[Uber](https://docs.expo.dev/guides/authentication/</guides/authentication/#uber>)[Redirect URI patterns](https://docs.expo.dev/guides/authentication/</guides/authentication/#redirect-uri-patterns>)[Standalone / development build](https://docs.expo.dev/guides/authentication/</guides/authentication/#standalone--development-build>)[Improving user experience](https://docs.expo.dev/guides/authentication/</guides/authentication/#improving-user-experience>)[Warming the browser](https://docs.expo.dev/guides/authentication/</guides/authentication/#warming-the-browser>)[Implicit login](https://docs.expo.dev/guides/authentication/</guides/authentication/#implicit-login>)[Storing data](https://docs.expo.dev/guides/authentication/</guides/authentication/#storing-data>)
