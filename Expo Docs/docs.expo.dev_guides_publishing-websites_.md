[](https://docs.expo.dev/guides/publishing-websites/<https:/expo.dev>)[Docs](https://docs.expo.dev/guides/publishing-websites/</>)
[Blog](https://docs.expo.dev/guides/publishing-websites/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/guides/publishing-websites/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/guides/publishing-websites/<https:/github.com/expo/expo>)[](https://docs.expo.dev/guides/publishing-websites/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/guides/publishing-websites/</>)[Guides](https://docs.expo.dev/guides/publishing-websites/</guides/overview>)[EAS](https://docs.expo.dev/guides/publishing-websites/</eas>)[Reference](https://docs.expo.dev/guides/publishing-websites/</versions/latest>)[Learn](https://docs.expo.dev/guides/publishing-websites/</tutorial/overview>)
[Overview](https://docs.expo.dev/guides/publishing-websites/</guides/overview>)
Development process
[Develop an app with Expo](https://docs.expo.dev/guides/publishing-websites/</workflow/overview>)[Configure with app config](https://docs.expo.dev/guides/publishing-websites/</workflow/configuration>)[Continuous Native Generation](https://docs.expo.dev/guides/publishing-websites/</workflow/continuous-native-generation>)[Using libraries](https://docs.expo.dev/guides/publishing-websites/</workflow/using-libraries>)[Privacy manifests](https://docs.expo.dev/guides/publishing-websites/</guides/apple-privacy>)[Permissions](https://docs.expo.dev/guides/publishing-websites/</guides/permissions>)[Environment variables](https://docs.expo.dev/guides/publishing-websites/</guides/environment-variables>)
Linking
Custom native code
Local app
Web
[Develop websites](https://docs.expo.dev/guides/publishing-websites/</workflow/web>)[Publish websites](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites>)[DOM components](https://docs.expo.dev/guides/publishing-websites/</guides/dom-components>)[Progressive web apps](https://docs.expo.dev/guides/publishing-websites/</guides/progressive-web-apps>)[Tailwind CSS](https://docs.expo.dev/guides/publishing-websites/</guides/tailwind>)
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
[Introduction](https://docs.expo.dev/guides/publishing-websites/</router/introduction>)[Installation](https://docs.expo.dev/guides/publishing-websites/</router/installation>)[Create pages](https://docs.expo.dev/guides/publishing-websites/</router/create-pages>)[Navigate between pages](https://docs.expo.dev/guides/publishing-websites/</router/navigating-pages>)[Layout routes](https://docs.expo.dev/guides/publishing-websites/</router/layouts>)[Error handling](https://docs.expo.dev/guides/publishing-websites/</router/error-handling>)
Navigation patterns
Advanced
Reference
Migration
Expo Modules API
[Overview](https://docs.expo.dev/guides/publishing-websites/</modules/overview>)[Get started](https://docs.expo.dev/guides/publishing-websites/</modules/get-started>)
Tutorials
Reference
Push notifications
[Overview](https://docs.expo.dev/guides/publishing-websites/</push-notifications/overview>)[About notification types](https://docs.expo.dev/guides/publishing-websites/</push-notifications/what-you-need-to-know>)[Expo push notifications setup](https://docs.expo.dev/guides/publishing-websites/</push-notifications/push-notifications-setup>)[Send notifications with the Expo Push Service](https://docs.expo.dev/guides/publishing-websites/</push-notifications/sending-notifications>)[Handle incoming notifications](https://docs.expo.dev/guides/publishing-websites/</push-notifications/receiving-notifications>)
Reference
More
[Upgrade Expo SDK](https://docs.expo.dev/guides/publishing-websites/</workflow/upgrading-expo-sdk-walkthrough>)
Assorted
Integrations
Troubleshooting
Regulatory compliance
[Data and Privacy protection](https://docs.expo.dev/guides/publishing-websites/</regulatory-compliance/data-and-privacy-protection>)[GDPR compliance](https://docs.expo.dev/guides/publishing-websites/</regulatory-compliance/gdpr>)[HIPAA compliance](https://docs.expo.dev/guides/publishing-websites/</regulatory-compliance/hipaa>)[Privacy Shield](https://docs.expo.dev/guides/publishing-websites/</regulatory-compliance/privacy-shield>)
[Archive](https://docs.expo.dev/guides/publishing-websites/</archive>)[Expo Snack](https://docs.expo.dev/guides/publishing-websites/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/guides/publishing-websites/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/guides/publishing-websites/<https:/expo.dev/mailing-list/signup>)
# Publish websites
[Edit this page](https://docs.expo.dev/guides/publishing-websites/<https:/github.com/expo/expo/edit/main/docs/pages/guides/publishing-websites.mdx> "Edit content of this page on GitHub")
Learn how to deploy Expo websites for production.
[Edit this page](https://docs.expo.dev/guides/publishing-websites/<https:/github.com/expo/expo/edit/main/docs/pages/guides/publishing-websites.mdx> "Edit content of this page on GitHub")
An Expo web app can be served locally for testing the production behavior, and deployed to a hosting service. We recommend deploying to [EAS Hosting](https://docs.expo.dev/guides/publishing-websites/</eas/hosting>) for the best feature support. You can also self-host or use a third-party service.
[Deploying instantly with EASEAS Hosting is the best way to deploy your web app with support for custom domains, SSL, and more.](https://docs.expo.dev/guides/publishing-websites/</eas/hosting/get-started>)
For SDK 49 and below, you may need the [guide for publishing `webpack` builds](https://docs.expo.dev/guides/publishing-websites/</archive/publishing-websites-webpack>).
## Output targets[](https://docs.expo.dev/guides/publishing-websites/<#output-targets>)
The `web.output`[](https://docs.expo.dev/guides/publishing-websites/</versions/latest/config/app#output>) target can be configured in the [app config](https://docs.expo.dev/guides/publishing-websites/</workflow/configuration>) to set the export method for the web app:
app.json
Copy
```
{
 "expo": {
  "web": {
   "output": "server",
   "bundler": "metro"
  }
 }
}

```

Expo Router supports three output targets for web apps.
Output| Expo Router| API Routes| Description  
---|---|---|---  
`single` (default)| Outputs a Single Page Application (SPA) with a single index.html in the output directory and has no statically indexable HTML.  
`server`| Creates client and server directories. Client files are output as separate HTML files. API routes as separate JavaScript files for hosting with a custom Node.js server.  
`static`| Outputs separate HTML files for every route in the app directory.  
## Create a build[](https://docs.expo.dev/guides/publishing-websites/<#create-a-build>)
Creating a build of the project is the first step to publishing a web app. Whether you want to serve it locally or deploy to a hosting service, you'll need to export all JavaScript and assets of a project. This is known as a static bundle. It can be exported by running the following command:
Run the universal export command to compile the project for web:
Terminal
Copy
`- ``npx expo export -p web`
The resulting project files are located in the dist directory. Any files inside the public directory are also copied to the dist directory.
## Serve locally[](https://docs.expo.dev/guides/publishing-websites/<#serve-locally>)
Use `npx expo serve` to quickly test locally how your website will be hosted in production. Run the following command to serve the static bundle:
Terminal
Copy
`- ``npx expo serve`
Open `http://localhost:8081`[](https://docs.expo.dev/guides/publishing-websites/<http:/localhost:8081>) to see your project in action. This is HTTP only, so permissions, camera, location, and many other secure features may not work as expected.
## Hosting with EAS[](https://docs.expo.dev/guides/publishing-websites/<#hosting-with-eas>)
When you're ready to go to production, you can instantly deploy your website with EAS CLI.
[Deploying instantly with EASEAS Hosting is the best way to deploy your web app with support for custom domains, SSL, and more.](https://docs.expo.dev/guides/publishing-websites/</eas/hosting/get-started>)
## Hosting on third-party services[](https://docs.expo.dev/guides/publishing-websites/<#hosting-on-third-party-services>)
### Netlify[](https://docs.expo.dev/guides/publishing-websites/<#netlify>)
[Netlify](https://docs.expo.dev/guides/publishing-websites/<https:/www.netlify.com/>) is a mostly-unopinionated platform for deploying web apps. This has the highest compatibility with Expo web apps as it makes few assumptions about the framework.
#### Manual deployment with the Netlify CDN[](https://docs.expo.dev/guides/publishing-websites/<#manual-deployment-with-the-netlify-cdn>)
1
Install the Netlify CLI by running the following command:
Terminal
Copy
`- ``npm install -g netlify-cli`
2
Configure redirects for single-page applications.
> If your app uses [static rendering](https://docs.expo.dev/guides/publishing-websites/</router/reference/static-rendering>), then you can skip this step.
`expo.web.output: 'single'` generates a single-page application. It means there's only one dist/index.html file to which all requests must be redirected. This can be done in Netlify by creating a ./public/_redirects file and redirecting all requests to /index.html.
public/_redirects
Copy
```
/*  /index.html  200

```

If you modify this file, you must rebuild your project with `npx expo export -p web` to have it safely copied into the dist directory.
3
Deploy the web build directory by running the following command:
Terminal
Copy
`- ``netlify deploy --dir dist`
You'll see a URL that you can use to view your project online.
#### Continuous delivery[](https://docs.expo.dev/guides/publishing-websites/<#continuous-delivery>)
Netlify can also build and deploy when you push to git or open a new pull request:
  * [Start a new Netlify project](https://docs.expo.dev/guides/publishing-websites/<https:/app.netlify.com/signup>).
  * Pick your Git hosting service and select your repository.
  * Click Build your site.


### Vercel[](https://docs.expo.dev/guides/publishing-websites/<#vercel>)
[Vercel](https://docs.expo.dev/guides/publishing-websites/<https:/vercel.com/>) has a single-command deployment flow.
1
Install the [Vercel CLI](https://docs.expo.dev/guides/publishing-websites/<https:/vercel.com/docs/cli>).
Terminal
Copy
`- ``npm install -g vercel@latest`
2
Configure redirects for single-page applications.
Create a vercel.json file at the root of your app and add the following configuration:
vercel.json
Copy
```
{
 "buildCommand": "expo export -p web",
 "outputDirectory": "dist",
 "devCommand": "expo",
 "cleanUrls": true,
 "framework": null,
 "rewrites": [
  {
   "source": "/:path*",
   "destination": "/"
  }
 ]
}

```

If your app uses [static rendering](https://docs.expo.dev/guides/publishing-websites/</router/reference/static-rendering>), then you may want to add additional [dynamic route configuration](https://docs.expo.dev/guides/publishing-websites/</router/reference/static-rendering#dynamic-routes>).
3
Deploy the website.
Terminal
Copy
`- ``vercel`
You'll now see a URL that you can use to view your project online. Paste that URL into your browser when the build is complete, and you'll see your deployed app.
### AWS Amplify Console[](https://docs.expo.dev/guides/publishing-websites/<#aws-amplify-console>)
The [AWS Amplify Console](https://docs.expo.dev/guides/publishing-websites/<https:/console.amplify.aws>) provides a Git-based workflow for continuously deploying and hosting full-stack serverless web apps. Amplify deploys your PWA from a repository instead of from your computer. In this guide, we'll use a GitHub repository. Before starting, [create a new repo on GitHub](https://docs.expo.dev/guides/publishing-websites/<https:/github.com/new>).
1
Add the [amplify-explicit.yml](https://docs.expo.dev/guides/publishing-websites/<https:/github.com/expo/amplify-demo/blob/master/amplify-explicit.yml>) file to the root of your repository. Ensure you have removed the generated dist directory from the .gitignore file and committed those changes.
2
Push your local Expo project to a GitHub repository. If you haven't pushed to GitHub yet, follow [GitHub's guide to add an existing project to GitHub](https://docs.expo.dev/guides/publishing-websites/<https:/docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github>).
3
Login to the [Amplify Console](https://docs.expo.dev/guides/publishing-websites/<https:/console.aws.amazon.com/amplify/home>) and select an existing app or create a new app. Grant Amplify permission to read from your GitHub account or the organization that owns your repo.
4
Add your repo, select the branch, and select Connecting a monorepo? to enter the path to your app's dist directory and choose Next.
The Amplify Console will detect the amplify.yml file in your project. Select Allow AWS Amplify to automatically deploy all files hosted in your project root directory and choose Next.
5
Review your settings and choose Save and deploy. Your app will now be deployed to a `https://branchname.xxxxxx.amplifyapp.com` URL. You can now visit your web app, deploy another branch, or add a unified backend environment across your Expo mobile and web apps.
Follow the steps in the Learn how to get the most out of Amplify Hosting drop-down to Add a custom domain with a free SSL certificate and more information.
### Firebase hosting[](https://docs.expo.dev/guides/publishing-websites/<#firebase-hosting>)
[Firebase Hosting](https://docs.expo.dev/guides/publishing-websites/<https:/console.firebase.google.com/>) is production-grade web content hosting for web projects.
1
Create a firebase project with the [Firebase Console](https://docs.expo.dev/guides/publishing-websites/<https:/console.firebase.google.com>) and install the Firebase CLI by following these [instructions](https://docs.expo.dev/guides/publishing-websites/<https:/firebase.google.com/docs/hosting>).
2
Using the CLI, login to your Firebase account by running the command:
Terminal
Copy
`- ``firebase login`
3
Then, initialize your firebase project to host by running the command:
Terminal
Copy
`- ``firebase init`
The settings will depend on how you built your Expo website:
  1. When asked about the public path, make sure to specify the dist directory.
  2. When prompted Configure as a single-page app (rewrite all urls to /index.html), only select Yes if you used `web.output: "single"` (default). Otherwise, select No.


4
In the existing `scripts` property of package.json, add `predeploy` and `deploy` properties. Each has the following values:
package.json
Copy
```
"scripts": {
 %%placeholder-start%%... %%placeholder-end%%
 "predeploy": "expo export -p web",
 "deploy-hosting": "npm run predeploy && firebase deploy --only hosting",
}

```

5
To deploy, run the following command:
Terminal
Copy
`- ``npm run deploy-hosting`
Open the URL from the console output to check your deployment, for example: `https://project-name.firebaseapp.com`.
In case you want to change the header for hosting add the following config for `hosting` section in firebase.json:
firebase.json
Copy
```
 "hosting": [
  {
   %%placeholder-start%%... %%placeholder-end%%
   "headers": [
    {
     "source": "/**",
     "headers": [
      {
       "key": "Cache-Control",
       "value": "no-cache, no-store, must-revalidate"
      }
     ]
    },
    {
     "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|js|css|eot|otf|ttf|ttc|woff|woff2|font.css)",
     "headers": [
      {
       "key": "Cache-Control",
       "value": "max-age=604800"
      }
     ]
    }
   ],
  }
 ]

Show More

```

### GitHub Pages[](https://docs.expo.dev/guides/publishing-websites/<#github-pages>)
[GitHub Pages](https://docs.expo.dev/guides/publishing-websites/<https:/pages.github.com/>) allows you to publish a website directly from a GitHub repository.
> GitHub Pages deployment requires Expo SDK 50 or higher, and uses experimental `baseUrl` functionality that may not work as intended.
1
Start by initializing a new git repository in your project and configuring it to push to a GitHub repository. If you are already syncing your changes with a GitHub repository, skip this step.
Create a repository on the GitHub website. Then, run the following commands in your project's root directory:
Terminal
`- ``git init`
`- ``git remote add origin https://github.com/username/expo-gh-pages.git`
The above commands initialize a new Git repository and configure it to push your source code to the specified GitHub repository.
2
Install the `gh-pages` package as a development dependency in your project:
npm
Yarn
Terminal
Copy
`- ``npm install --save-dev gh-pages`
Terminal
Copy
`- ``yarn add -D gh-pages`
3
To deploy the project, configure it to a subdomain with the `baseUrl`[](https://docs.expo.dev/guides/publishing-websites/</versions/latest/config/app#baseurl>) property in [app config](https://docs.expo.dev/guides/publishing-websites/</workflow/configuration>). Set its value to the string `/repo-name`.
For example, if the GitHub repository is `expo-gh-pages`, the following will be the value of the [experimental `baseUrl` property](https://docs.expo.dev/guides/publishing-websites/</more/expo-cli#hosting-with-sub-paths>):
app.json
Copy
```
{
 "expo": {
  "experiments": {
   "baseUrl": "/expo-gh-pages"
  }
 }
}

```

4
Modify the `scripts` in the package.json file by adding `predeploy` and `deploy` scripts. Each has its own value:
package.json
Copy
```
"scripts": {
 %%placeholder-start%%... %%placeholder-end%%
 "deploy": "gh-pages --nojekyll -d dist",
 "predeploy": "expo export -p web"
}

```

Since Expo uses underscores in generated files, you need to disable Jekyll with the `--nojekyll` flag.
5
To generate a production build of the web app and deploy it to GitHub Pages, run the following command:
npm
Yarn
Terminal
Copy
`- ``npm run deploy`
Terminal
Copy
`- ``yarn deploy`
This publishes a build of the web app to the `gh-pages` branch of your GitHub repository. This branch only contains build artifacts from the dist directory, plus the .nojekyll file generated by `gh-pages`. It does not include development source code.
6
Now that the web app is published to the `gh-pages` branch, configure GitHub Pages to serve the app from that branch.
  * Navigate to the Settings tab of the GitHub repository.
  * Scroll down to Pages section.
  * Ensure the Source is set to Deploy from a branch.
  * Under Branch section, select gh-pages and the root directory.
  * Click Save.

![GitHub Pages configuration in repository settings](https://docs.expo.dev/static/images/distribution/publishing-websites-github-pages-config.png)
7
Once the web app is published and the GitHub Pages configuration is set, a GitHub action will deploy your website. You can monitor its progress by navigating to your repository's Actions tab. Upon completion, your web app will be available at the URL `http://username-on-github.github.io/repo-name`.
For subsequent deployments and updates, run the `deploy` command and the GitHub action will start automatically to update your web app.
[Previous (Development process - Web)Develop websites](https://docs.expo.dev/guides/publishing-websites/</workflow/web>)[Next (Development process - Web)DOM components](https://docs.expo.dev/guides/publishing-websites/</guides/dom-components>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/guides/publishing-websites/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/guides/publishing-websites/<https:/github.com/expo/expo/edit/main/docs/pages/guides/publishing-websites.mdx>)
  * Last updated on January 18, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/guides/publishing-websites/<https:/expo.dev/privacy>).
On this page
[Output targets](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#output-targets>)[Create a build](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#create-a-build>)[Serve locally](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#serve-locally>)[Hosting with EAS](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#hosting-with-eas>)[Hosting on third-party services](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#hosting-on-third-party-services>)[Netlify](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#netlify>)[Vercel](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#vercel>)[AWS Amplify Console](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#aws-amplify-console>)[Firebase hosting](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#firebase-hosting>)[GitHub Pages](https://docs.expo.dev/guides/publishing-websites/</guides/publishing-websites/#github-pages>)
