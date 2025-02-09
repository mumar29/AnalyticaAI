[](https://docs.expo.dev/eas/hosting/custom-domain/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas/hosting/custom-domain/</>)
[Blog](https://docs.expo.dev/eas/hosting/custom-domain/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas/hosting/custom-domain/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas/hosting/custom-domain/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas/hosting/custom-domain/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas/hosting/custom-domain/</>)[Guides](https://docs.expo.dev/eas/hosting/custom-domain/</guides/overview>)[EAS](https://docs.expo.dev/eas/hosting/custom-domain/</eas>)[Reference](https://docs.expo.dev/eas/hosting/custom-domain/</versions/latest>)[Learn](https://docs.expo.dev/eas/hosting/custom-domain/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas/hosting/custom-domain/</eas>)[Environment variables](https://docs.expo.dev/eas/hosting/custom-domain/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas/hosting/custom-domain/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas/hosting/custom-domain/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas/hosting/custom-domain/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas/hosting/custom-domain/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas/hosting/custom-domain/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas/hosting/custom-domain/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas/hosting/custom-domain/</build/introduction>)[Create your first build](https://docs.expo.dev/eas/hosting/custom-domain/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/custom-domain/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas/hosting/custom-domain/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas/hosting/custom-domain/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas/hosting/custom-domain/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas/hosting/custom-domain/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas/hosting/custom-domain/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas/hosting/custom-domain/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas/hosting/custom-domain/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas/hosting/custom-domain/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas/hosting/custom-domain/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas/hosting/custom-domain/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas/hosting/custom-domain/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas/hosting/custom-domain/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas/hosting/custom-domain/</eas/metadata>)[Get started](https://docs.expo.dev/eas/hosting/custom-domain/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas/hosting/custom-domain/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas/hosting/custom-domain/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas/hosting/custom-domain/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas/hosting/custom-domain/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas/hosting/custom-domain/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas/hosting/custom-domain/</eas/json>)[Webhooks](https://docs.expo.dev/eas/hosting/custom-domain/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas/hosting/custom-domain/</archive>)[Expo Snack](https://docs.expo.dev/eas/hosting/custom-domain/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas/hosting/custom-domain/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas/hosting/custom-domain/<https:/expo.dev/mailing-list/signup>)
# Custom domain
[Edit this page](https://docs.expo.dev/eas/hosting/custom-domain/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/custom-domain.mdx> "Edit content of this page on GitHub")
Set up a custom domain for your production deployment.
[Edit this page](https://docs.expo.dev/eas/hosting/custom-domain/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/custom-domain.mdx> "Edit content of this page on GitHub")
By default, your production deployment on EAS Hosting will look like this: `my-app.expo.app` , where `my-app` is your chosen preview subdomain name. If you own a domain, you may assign it as a custom domain to the production deployment.
Each project can have exactly one custom domain, which is assigned to the production deployment.
> Note: Setting up a custom domain is a premium feature and isn't available on the free plan. Learn more about different plans and benefits at [EAS pricing](https://docs.expo.dev/eas/hosting/custom-domain/<https:/expo.dev/pricing>).
## Prerequisites[](https://docs.expo.dev/eas/hosting/custom-domain/<#prerequisites>)
An EAS Hosting project with a production deployment[](https://docs.expo.dev/eas/hosting/custom-domain/<#an-eas-hosting-project-with-a-production>)
The custom domain will always load the production deployment. Therefore, to add a custom domain to your project, you will need a deployment that's been promoted to production first.
A domain name[](https://docs.expo.dev/eas/hosting/custom-domain/<#a-domain-name>)
You will need to own a domain name you want to use.
## Assigning a custom domain[](https://docs.expo.dev/eas/hosting/custom-domain/<#assigning-a-custom-domain>)
  1. In your project's dashboard, navigate to [Hosting settings](https://docs.expo.dev/eas/hosting/custom-domain/<https:/expo.dev/accounts/%5BaccountName%5D/projects/%5BprojectName%5D/hosting/settings>).
  2. If you do not have a production deployment, you'll be prompted to assign one first.
  3. Under Custom domain, enter the custom domain you'd like to set up. Both apex domains and subdomains are supported. If you own `example.com`, you can select:
     * `example.com`: apex domain
     * `anything.example.com`: a subdomain
  4. Next, you'll be prompted to fill out some DNS records with your DNS provider:
     * Verification: to prove you own the domain
     * SSL: to set up SSL certificates
     * CNAME (subdomains) or A record (apex domains): to point the domain at your production deployment
  5. Press the refresh button until all checks pass. Depending on your DNS provider, this step usually only takes a couple of minutes.


> If you require for the domain name switchover to be zero downtime, it's important to fill out these records one by one in the order they are presented in the table. That is, add the TXT record for verification, press the refresh button until the UI says verification is successful, then proceed to the next one. If downtime isn't important or relevant, you may add all three DNS records at once.
After assigning a custom domain to your app, the custom domain will route to your production deployment.
[Previous (EAS Hosting)Environment variables](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/environment-variables>)[Next (EAS Hosting)Monitoring API routes](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/api-routes>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas/hosting/custom-domain/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas/hosting/custom-domain/<https:/github.com/expo/expo/edit/main/docs/pages/eas/hosting/custom-domain.mdx>)
  * Last updated on January 14, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas/hosting/custom-domain/<https:/expo.dev/privacy>).
On this page
[Prerequisites](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/custom-domain/#prerequisites>)[Assigning a custom domain](https://docs.expo.dev/eas/hosting/custom-domain/</eas/hosting/custom-domain/#assigning-a-custom-domain>)
