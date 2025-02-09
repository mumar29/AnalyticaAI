[](https://docs.expo.dev/router/reference/api-routes/<https:/expo.dev>)[Docs](https://docs.expo.dev/router/reference/api-routes/</>)
[Blog](https://docs.expo.dev/router/reference/api-routes/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/router/reference/api-routes/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/router/reference/api-routes/<https:/github.com/expo/expo>)[](https://docs.expo.dev/router/reference/api-routes/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/router/reference/api-routes/</>)[Guides](https://docs.expo.dev/router/reference/api-routes/</guides/overview>)[EAS](https://docs.expo.dev/router/reference/api-routes/</eas>)[Reference](https://docs.expo.dev/router/reference/api-routes/</versions/latest>)[Learn](https://docs.expo.dev/router/reference/api-routes/</tutorial/overview>)
[Overview](https://docs.expo.dev/router/reference/api-routes/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/router/reference/api-routes/</workflow/overview>)[Configure with app config](https://docs.expo.dev/router/reference/api-routes/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/router/reference/api-routes/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/router/reference/api-routes/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/router/reference/api-routes/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/router/reference/api-routes/</guides/permissions>)[Environment variables](https://docs.expo.dev/router/reference/api-routes/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/router/reference/api-routes/</router/introduction>)[Installation](https://docs.expo.dev/router/reference/api-routes/</router/installation>)[Create pages](https://docs.expo.dev/router/reference/api-routes/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/router/reference/api-routes/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/router/reference/api-routes/</router/layouts>)[Error handling](https://docs.expo.dev/router/reference/api-routes/</router/error-handling>)
Navigation patterns
Advanced
Reference
[URL parameters](https://docs.expo.dev/router/reference/api-routes/</router/reference/url-parameters>)[Redirects](https://docs.expo.dev/router/reference/api-routes/</router/reference/redirects>)[Static Rendering](https://docs.expo.dev/router/reference/api-routes/</router/reference/static-rendering>)[Async routes](https://docs.expo.dev/router/reference/api-routes/</router/reference/async-routes>)[API Routes](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes>)[Sitemap](https://docs.expo.dev/router/reference/api-routes/</router/reference/sitemap>)[Typed routes](https://docs.expo.dev/router/reference/api-routes/</router/reference/typed-routes>)[Authentication](https://docs.expo.dev/router/reference/api-routes/</router/reference/authentication>)[Not found routes](https://docs.expo.dev/router/reference/api-routes/</router/reference/not-found>)[Screen tracking for analytics](https://docs.expo.dev/router/reference/api-routes/</router/reference/screen-tracking>)[Top-level src directory](https://docs.expo.dev/router/reference/api-routes/</router/reference/src-directory>)[Testing](https://docs.expo.dev/router/reference/api-routes/</router/reference/testing>)[Troubleshooting](https://docs.expo.dev/router/reference/api-routes/</router/reference/troubleshooting>)
Migration
Expo Modules API
[Overview](https://docs.expo.dev/router/reference/api-routes/</modules/overview>)[Get started](https://docs.expo.dev/router/reference/api-routes/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/router/reference/api-routes/</push-notifications/overview>)[About notification types](https://docs.expo.dev/router/reference/api-routes/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/router/reference/api-routes/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/router/reference/api-routes/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/router/reference/api-routes/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/router/reference/api-routes/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/router/reference/api-routes/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/router/reference/api-routes/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/router/reference/api-routes/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/router/reference/api-routes/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/router/reference/api-routes/</archive>)[Expo Snack](https://docs.expo.dev/router/reference/api-routes/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/router/reference/api-routes/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/router/reference/api-routes/<https:/expo.dev/mailing-list/signup>)
# API Routes
[Edit this page](https://docs.expo.dev/router/reference/api-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/api-routes.mdx> "Edit content of this page on GitHub")
Learn how to create server endpoints with Expo Router.
[Edit this page](https://docs.expo.dev/router/reference/api-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/api-routes.mdx> "Edit content of this page on GitHub")
> API Routes is an experimental feature. Available from Expo Router v3.
Expo Router enables you to write server code for all platforms, right in your app directory.
app.json
Copy
```
{
 "web": {
  "bundler": "metro",
  "output": "server"
 }
}

```

Server features require a custom Node.js server. Most hosting providers support Node.js, including [Netlify](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes#netlify>), [Cloudflare](https://docs.expo.dev/router/reference/api-routes/<https:/www.cloudflare.com/>), and [Vercel](https://docs.expo.dev/router/reference/api-routes/<https:/vercel.com>).
## What are API Routes[](https://docs.expo.dev/router/reference/api-routes/<#what-are-api-routes>)
API Routes are functions that are executed when a route is matched. They can be used to handle sensitive data, such as API keys securely, or implement custom server logic. API Routes should be executed in a [WinterCG](https://docs.expo.dev/router/reference/api-routes/<https:/wintercg.org/>)-compliant environment.
API Routes are defined by creating files in the app directory with the `+api.ts` extension. For example, the following route handler is executed when the route `/hello` is matched.
`app`
`index.tsx`
`hello+api.ts``API Route`
## Create an API route[](https://docs.expo.dev/router/reference/api-routes/<#create-an-api-route>)
1
An API route is created in the app directory. For example, add the following route handler. It is executed when the route `/hello` is matched.
app/hello+api.ts
Copy
```
export function GET(request: Request) {
 return Response.json({ hello: 'world' });
}

```

You can export any of the following functions `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS` from a server route. The function executes when the corresponding HTTP method is matched. Unsupported methods will automatically return `405: Method not allowed`.
2
Start the development server with Expo CLI:
Terminal
Copy
`- ``npx expo`
3
You can make a network request to the route to access the data. Run the following command to test the route:
Terminal
Copy
`- ``curl http://localhost:8081/hello`
You can also make a request from the client code:
app/index.tsx
Copy
```
import { Button } from 'react-native';
async function fetchHello() {
 const response = await fetch('/hello');
 const data = await response.json();
 alert('Hello ' + data.hello);
}
export default function App() {
 return <Button onPress={() => fetchHello()} title="Fetch hello" />;
}

```

This won't work by default on native as `/hello` does not provide an origin URL. You can configure the origin URL in the app config file. It can be a mock URL in development. For example:
app.json
Copy
```
{
 "plugins": [
  [
   "expo-router",
   {
    "origin": "https://evanbacon.dev/"
   }
  ]
 ]
}

```

4
Deploy the website and server to a [hosting provider](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes#deployment>) to access the routes in production on both native and web.
> API route filenames cannot have platform-specific extensions. For example, hello+api.web.ts will not work.
## Requests[](https://docs.expo.dev/router/reference/api-routes/<#requests>)
Requests use the global, standard `Request`[](https://docs.expo.dev/router/reference/api-routes/<https:/fetch.spec.whatwg.org/#request>) object.
app/blog/[post]+api.ts
Copy
```
export async function GET(request: Request, { post }: Record<string, string>) {
 // const postId = new URL(request.url).searchParams.get('post')
 // fetch data for 'post'
 return Response.json({ ... });
}

```

### Request body[](https://docs.expo.dev/router/reference/api-routes/<#request-body>)
Use the `request.json()` function to access the request body. It automatically parses the body and returns the result.
app/validate+api.ts
Copy
```
export async function POST(request: Request) {
 const body = await request.json();
 return Response.json({ ... });
}

```

### Request query parameters[](https://docs.expo.dev/router/reference/api-routes/<#request-query-parameters>)
Query parameters can be accessed by parsing the request URL:
app/endpoint+api.ts
Copy
```
export async function GET(request: Request) {
 const url = new URL(request.url);
 const post = url.searchParams.get('post');
 // fetch data for 'post'
 return Response.json({ ... });
}

```

## Response[](https://docs.expo.dev/router/reference/api-routes/<#response>)
Responses use the global, standard `Response`[](https://docs.expo.dev/router/reference/api-routes/<https:/fetch.spec.whatwg.org/#response>) object.
app/demo+api.ts
Copy
```
export function GET() {
 return Response.json({ hello: 'universe' });
}

```

## Errors[](https://docs.expo.dev/router/reference/api-routes/<#errors>)
You can respond to server errors by using the `Response` object.
app/blog/[post].ts
Copy
```
import { Request, Response } from 'expo-router/server';
export async function GET(request: Request, { post }: Record<string, string>) {
 if (!post) {
  return new Response('No post found', {
   status: 404,
   headers: {
    'Content-Type': 'text/plain',
   },
  });
 }
 // fetch data for `post`
 return Response.json({ ... });
}

```

Making requests with an undefined method will automatically return `405: Method not allowed`. If an error is thrown during the request, it will automatically return `500: Internal server error`.
## Bundling[](https://docs.expo.dev/router/reference/api-routes/<#bundling>)
API Routes are bundled with Expo CLI and [Metro bundler](https://docs.expo.dev/router/reference/api-routes/</guides/customizing-metro>). They have access to all of the language features as your client code:
  * [TypeScript](https://docs.expo.dev/router/reference/api-routes/</guides/typescript>) — types and [tsconfig.json paths](https://docs.expo.dev/router/reference/api-routes/</guides/typescript#path-aliases-optional>).
  * [Environment variables](https://docs.expo.dev/router/reference/api-routes/</guides/environment-variables>) — server routes have access to all environment variables, not just the ones prefixed with `EXPO_PUBLIC_`.
  * Node.js standard library — ensure that you are using the correct version of Node.js locally for your server environment.
  * babel.config.js and metro.config.js support — settings work across both client and server code.


## Security[](https://docs.expo.dev/router/reference/api-routes/<#security>)
Route handlers are executed in a sandboxed environment that is isolated from the client code. It means you can safely store sensitive data in the route handlers without exposing it to the client.
  * Client code that imports code with a secret is included in the client bundle. It applies to all files in the app directory even though they are not a route handler file (such as suffixed with +api.ts).
  * If the secret is in a <...>+api.ts file, it is not included in the client bundle. It applies to all files that are imported in the route handler.
  * The secret stripping takes place in `expo/metro-config` and requires it to be used in the metro.config.js.


## Deployment[](https://docs.expo.dev/router/reference/api-routes/<#deployment>)
When you're ready to deploy to production, run `npx expo export --platform web`[](https://docs.expo.dev/router/reference/api-routes/</more/expo-cli#exporting>) to create the server bundle in the dist directory. This server can be tested locally with `npx expo serve` (available in Expo SDK 52 and higher), visit the URL in a web browser or create a native build with the `origin` set to the local server URL. You can deploy the server for production using [EAS Hosting](https://docs.expo.dev/router/reference/api-routes/</eas/hosting/get-started>) or another third-party service.
[Deploy instantly with EASEAS Hosting is the best way to deploy your Expo API routes and servers.](https://docs.expo.dev/router/reference/api-routes/</eas/hosting/get-started>)
## Hosting on third-party services[](https://docs.expo.dev/router/reference/api-routes/<#hosting-on-third-party-services>)
> This is experimental and subject to breaking changes. We have no continuous tests against this configuration.
Every cloud hosting provider needs a custom adapter to support the Expo server runtime. The following third-party providers have unofficial or experimental support from the Expo team.
Before deploying to these providers, it may be good to be familiar with the basics of `npx expo export`[](https://docs.expo.dev/router/reference/api-routes/</more/expo-cli#exporting>) command:
  * dist is the default export directory for Expo CLI.
  * Files in public directory are copied to dist on export.
  * The `@expo/server` package is included with `expo` and delegates requests to the server routes.
  * `@expo/server` does not inflate environment variables from .env files. They are expected to load either by the hosting provider or the user.
  * Metro is not included in the server.


### Express[](https://docs.expo.dev/router/reference/api-routes/<#express>)
1
Install the required dependencies:
Terminal
Copy
`- ``npm i -D express compression morgan`
2
Export the website for production:
Terminal
Copy
`- ``npx expo export -p web`
3
Write a server entry file that serves the static files and delegates requests to the server routes:
server.ts
Copy
```
#!/usr/bin/env node
const path = require('path');
const { createRequestHandler } = require('@expo/server/adapter/express');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const CLIENT_BUILD_DIR = path.join(process.cwd(), 'dist/client');
const SERVER_BUILD_DIR = path.join(process.cwd(), 'dist/server');
const app = express();
app.use(compression());
// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');
process.env.NODE_ENV = 'production';
app.use(
 express.static(CLIENT_BUILD_DIR, {
  maxAge: '1h',
  extensions: ['html'],
 })
);
app.use(morgan('tiny'));
app.all(
 '*',
 createRequestHandler({
  build: SERVER_BUILD_DIR,
 })
);
const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Express server listening on port ${port}`);
});

Show More

```

4
Start the server with `node` command:
Terminal
Copy
`- ``node server.ts`
### Netlify[](https://docs.expo.dev/router/reference/api-routes/<#netlify>)
> This is experimental and subject to breaking changes. We have no continuous tests against this configuration.
1
Create a server entry file. All requests will be delegated through this middleware. The exact file location is important.
netlify/functions/server.ts
Copy
```
const { createRequestHandler } = require('@expo/server/adapter/netlify');
const handler = createRequestHandler({
 build: require('path').join(__dirname, '../../dist/server'),
});
module.exports = { handler };

```

2
Create a Netlify configuration file at the root of your project to redirect all requests to the server function.
netlify.toml
Copy
```
[build]
 command = "expo export -p web"
 functions = "netlify/functions"
 publish = "dist/client"
[[redirects]]
 from = "/*"
 to = "/.netlify/functions/server"
 status = 404
[functions]
 # Include everything to ensure dynamic routes can be used.
 included_files = ["dist/server/**/*"]
[[headers]]
 for = "/dist/server/_expo/functions/*"
 [headers.values]
  # Set to 60 seconds as an example.
  "Cache-Control" = "public, max-age=60, s-maxage=60"

Show More

```

3
After you have created the configuration files, you can build the website and functions with Expo CLI:
Terminal
Copy
`- ``npx expo export -p web`
4
Deploy to Netlify with the [Netlify CLI](https://docs.expo.dev/router/reference/api-routes/<https:/docs.netlify.com/cli/get-started/>).
Terminal
`# Install the Netlify CLI globally if needed.`
`- ``npm install netlify-cli -g`
`# Deploy the website.`
`- ``netlify deploy`
You can now visit your website at the URL provided by Netlify CLI. Running `netlify deploy --prod` will publish to the production URL.
5
If you're using any environment variables or .env files, add them to Netlify. You can do this by going to the Site settings and adding them to the Build & deploy section.
### Vercel[](https://docs.expo.dev/router/reference/api-routes/<#vercel>)
> This is experimental and subject to breaking changes. We have no continuous tests against this configuration.
1
Create a server entry file. All requests will be delegated through this middleware. The exact file location is important.
api/index.ts
Copy
```
const { createRequestHandler } = require('@expo/server/adapter/vercel');
module.exports = createRequestHandler({
 build: require('path').join(__dirname, '../dist/server'),
});

```

2
Create a Vercel configuration file (vercel.json) at the root of your project to redirect all requests to the server function.
vercel.json v3
vercel.json v2
vercel.json
Copy
```
{
 "buildCommand": "expo export -p web",
 "outputDirectory": "dist/client",
 "functions": {
  "api/index.ts": {
   "runtime": "@vercel/node@3.0.11",
   "includeFiles": "dist/server/**"
  }
 },
 "rewrites": [
  {
   "source": "/(.*)",
   "destination": "/api/index"
  }
 ]
}

```

The newer version of the vercel.json does not use `routes` and `builds` configuration options anymore, and serves your public assets from the dist/client output directory automatically.
vercel.json
Copy
```
{
 "version": 2,
 "outputDirectory": "dist",
 "builds": [
  {
   "src": "package.json",
   "use": "@vercel/static-build",
   "config": {
    "distDir": "dist/client"
   }
  },
  {
   "src": "api/index.ts",
   "use": "@vercel/node",
   "config": {
    "includeFiles": ["dist/server/**"]
   }
  }
 ],
 "routes": [
  {
   "handle": "filesystem"
  },
  {
   "src": "/(.*)",
   "dest": "/api/index.ts"
  }
 ]
}

Show More

```

The legacy version of the vercel.json needs a `@vercel/static-build` runtime to serve your assets from the dist/client output directory.
3
> Note: This step only applies to users of the legacy version of the vercel.json. If you're using v3, you can skip this step.
After you have created the configuration files, add a `vercel-build` script to your package.json file and set it to `expo export -p web`.
4
Deploy to Vercel with the [Vercel CLI](https://docs.expo.dev/router/reference/api-routes/<https:/vercel.com/docs/cli>).
Terminal
`# Install the Vercel CLI globally if needed.`
`- ``npm install vercel -g`
`# Deploy the website.`
`- ``vercel deploy`
You can now visit your website at the URL provided by the Vercel CLI.
## Known limitations[](https://docs.expo.dev/router/reference/api-routes/<#known-limitations>)
Several known features are not currently supported in the API Routes beta release.
### No dynamic imports[](https://docs.expo.dev/router/reference/api-routes/<#no-dynamic-imports>)
API Routes currently work by bundling all code (minus the Node.js built-ins) into a single file. This means that you cannot use any external dependencies that are not bundled with the server. For example, a library such as `sharp`, which includes multiple platform binaries, cannot be used. This will be addressed in a future version.
### ESM not supported[](https://docs.expo.dev/router/reference/api-routes/<#esm-not-supported>)
The current bundling implementation opts to be more unified than flexible. This means the limitation of native not supporting ESM is carried over to API Routes. All code will be transpiled down to Common JS (`require`/`module.exports`). However, we recommend you write API Routes using ESM regardless. This will be addressed in a future version.
[Previous (Expo Router - Reference)Async routes](https://docs.expo.dev/router/reference/api-routes/</router/reference/async-routes>)[Next (Expo Router - Reference)Sitemap](https://docs.expo.dev/router/reference/api-routes/</router/reference/sitemap>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/router/reference/api-routes/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/router/reference/api-routes/<https:/github.com/expo/expo/edit/main/docs/pages/router/reference/api-routes.mdx>)
  * Last updated on January 18, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/router/reference/api-routes/<https:/expo.dev/privacy>).
On this page
[What are API Routes](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#what-are-api-routes>)[Create an API route](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#create-an-api-route>)[Requests](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#requests>)[Request body](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#request-body>)[Request query parameters](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#request-query-parameters>)[Response](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#response>)[Errors](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#errors>)[Bundling](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#bundling>)[Security](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#security>)[Deployment](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#deployment>)[Hosting on third-party services](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#hosting-on-third-party-services>)[Express](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#express>)[Netlify](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#netlify>)[Vercel](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#vercel>)[Known limitations](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#known-limitations>)[No dynamic imports](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#no-dynamic-imports>)[ESM not supported](https://docs.expo.dev/router/reference/api-routes/</router/reference/api-routes/#esm-not-supported>)
