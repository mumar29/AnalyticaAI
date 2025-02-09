[](https://docs.expo.dev/eas-workflows/variables/<https:/expo.dev>)[Docs](https://docs.expo.dev/eas-workflows/variables/</>)
[Blog](https://docs.expo.dev/eas-workflows/variables/<https:/expo.dev/blog>)[Changelog](https://docs.expo.dev/eas-workflows/variables/<https:/expo.dev/changelog>)[Star Us on GitHub](https://docs.expo.dev/eas-workflows/variables/<https:/github.com/expo/expo>)[](https://docs.expo.dev/eas-workflows/variables/<https:/github.com/expo/expo>)
Auto
Search
`Ctrl` `K`
[Home](https://docs.expo.dev/eas-workflows/variables/</>)[Guides](https://docs.expo.dev/eas-workflows/variables/</guides/overview>)[EAS](https://docs.expo.dev/eas-workflows/variables/</eas>)[Reference](https://docs.expo.dev/eas-workflows/variables/</versions/latest>)[Learn](https://docs.expo.dev/eas-workflows/variables/</tutorial/overview>)
[Introduction](https://docs.expo.dev/eas-workflows/variables/</eas>)[Environment variables](https://docs.expo.dev/eas-workflows/variables/</eas/environment-variables>)[Environment variables usage](https://docs.expo.dev/eas-workflows/variables/</eas/using-environment-variables>)
EAS Workflows
[Get started](https://docs.expo.dev/eas-workflows/variables/</eas-workflows/get-started>)[Triggers](https://docs.expo.dev/eas-workflows/variables/</eas-workflows/triggers>)[Jobs](https://docs.expo.dev/eas-workflows/variables/</eas-workflows/jobs>)[Control flow](https://docs.expo.dev/eas-workflows/variables/</eas-workflows/control-flow>)[Variables](https://docs.expo.dev/eas-workflows/variables/</eas-workflows/variables>)
EAS Build
[Introduction](https://docs.expo.dev/eas-workflows/variables/</build/introduction>)[Create your first build](https://docs.expo.dev/eas-workflows/variables/</build/setup>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/variables/</build/eas-json>)[Internal distribution](https://docs.expo.dev/eas-workflows/variables/</build/internal-distribution>)[Automate submissions](https://docs.expo.dev/eas-workflows/variables/</build/automate-submissions>)[Using EAS Update](https://docs.expo.dev/eas-workflows/variables/</build/updates>)[Trigger builds from CI](https://docs.expo.dev/eas-workflows/variables/</build/building-on-ci>)[Trigger builds from GitHub App](https://docs.expo.dev/eas-workflows/variables/</build/building-from-github>)[Expo Orbit](https://docs.expo.dev/eas-workflows/variables/</build/orbit>)
App Signing
Custom builds
Reference
EAS Hosting
[Introduction](https://docs.expo.dev/eas-workflows/variables/</eas/hosting/introduction>)[Get started](https://docs.expo.dev/eas-workflows/variables/</eas/hosting/get-started>)[Deployments and aliases](https://docs.expo.dev/eas-workflows/variables/</eas/hosting/deployments-and-aliases>)[Environment variables](https://docs.expo.dev/eas-workflows/variables/</eas/hosting/environment-variables>)[Custom domain](https://docs.expo.dev/eas-workflows/variables/</eas/hosting/custom-domain>)[Monitoring API routes](https://docs.expo.dev/eas-workflows/variables/</eas/hosting/api-routes>)[Workflows](https://docs.expo.dev/eas-workflows/variables/</eas/hosting/workflows>)
Reference
EAS Submit
[Introduction](https://docs.expo.dev/eas-workflows/variables/</submit/introduction>)[Configure with eas.json](https://docs.expo.dev/eas-workflows/variables/</submit/eas-json>)[Submit to Google](https://docs.expo.dev/eas-workflows/variables/</submit/android>)[Submit to Apple](https://docs.expo.dev/eas-workflows/variables/</submit/ios>)
EAS Update
[Introduction](https://docs.expo.dev/eas-workflows/variables/</eas-update/introduction>)[Get started](https://docs.expo.dev/eas-workflows/variables/</eas-update/getting-started>)
Preview
Deployment
Concepts
Troubleshooting
Reference
EAS Metadata
[Introduction](https://docs.expo.dev/eas-workflows/variables/</eas/metadata>)[Get started](https://docs.expo.dev/eas-workflows/variables/</eas/metadata/getting-started>)
Reference
EAS Insights
[Introduction](https://docs.expo.dev/eas-workflows/variables/</eas-insights/introduction>)
Distribution
[Overview](https://docs.expo.dev/eas-workflows/variables/</distribution/introduction>)[App stores best practices](https://docs.expo.dev/eas-workflows/variables/</distribution/app-stores>)[App transfers](https://docs.expo.dev/eas-workflows/variables/</distribution/app-transfers>)[Understanding app size](https://docs.expo.dev/eas-workflows/variables/</distribution/app-size>)
Reference
[eas.json](https://docs.expo.dev/eas-workflows/variables/</eas/json>)[Webhooks](https://docs.expo.dev/eas-workflows/variables/</eas/webhooks>)
Expo accounts
Billing
[Archive](https://docs.expo.dev/eas-workflows/variables/</archive>)[Expo Snack](https://docs.expo.dev/eas-workflows/variables/<https:/snack.expo.dev>)[Discord and Forums](https://docs.expo.dev/eas-workflows/variables/<https:/chat.expo.dev>)[Newsletter](https://docs.expo.dev/eas-workflows/variables/<https:/expo.dev/mailing-list/signup>)
# Variables
[Edit this page](https://docs.expo.dev/eas-workflows/variables/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/variables.mdx> "Edit content of this page on GitHub")
Learn how to pass data between jobs or steps or set conditionals using variables in EAS Workflows.
[Edit this page](https://docs.expo.dev/eas-workflows/variables/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/variables.mdx> "Edit content of this page on GitHub")
Variables can be used in workflows to pass data between jobs or steps. They are useful for conditionals on subsequent jobs or affecting the output of a workflow.
You can set variables in the workflow file with the `set-output` function:
.eas/workflows/variables.yml
Copy
```
jobs:
 fingerprint:
  outputs:
   fingerprint: ${{ steps.fingerprint_hash_step.outputs.fingerprint_hash }}
  steps:
   - uses: eas/checkout
   - uses: eas/install_node_modules
   - name: Install additional tools
    run: sudo apt-get update -y && sudo apt-get install -y jq
   - name: Set fingerprint variables
    id: fingerprint_hash_step
    run: |
     FINGERPRINT=$(npx expo-updates fingerprint:generate --platform ios)
     FINGERPRINT_HASH=$(echo $FINGERPRINT | jq -r '.hash')
     echo "Fingerprint hash: $FINGERPRINT_HASH"
     set-output fingerprint_hash $FINGERPRINT_HASH
   - name: Print fingerprint hash
    run: |
     echo "Fingerprint hash: ${{ steps.fingerprint_hash_step.outputs.fingerprint_hash }}"
 existing_build:
  needs: [fingerprint]
  type: get-build
  params:
   fingerprint_hash: ${{ needs.fingerprint.outputs.fingerprint_hash }}
 decide:
  needs: [existing_build]
  steps:
   - name: decide
    run: |
     BUILD_ID="${{ needs.existing_build.outputs.build_id || '' }}"
     echo $BUILD_ID
     if [ -z "${BUILD_ID}" ] ; then
      echo "No build found. Should build."
      exit 0
     fi
     echo "Found build: https://expo.dev/uuid/$BUILD_ID"
     echo "More about build: ${{ toJSON(needs.existing_build.outputs) }}"

Show More

```

In the example above, two things are happening:
  * The `set-output` function sets the `fingerprint_hash_for_steps` and `fingerprint_hash` variables.
  * The `outputs` keyword on the `fingerprint_hash` job specifies that the whole workflow will have access to a variable called `fingerprint_hash_for_workflow`. That variable is later used in the `existing_build` job to check if there are any existing builds with the same fingerprint.


[Previous (EAS Workflows)Control flow](https://docs.expo.dev/eas-workflows/variables/</eas-workflows/control-flow>)[Next (EAS Build)Introduction](https://docs.expo.dev/eas-workflows/variables/</build/introduction>)
Was this doc helpful?
  * Share your feedback
  * [Ask a question on the forums](https://docs.expo.dev/eas-workflows/variables/<https:/chat.expo.dev/>)
  * [Edit this page](https://docs.expo.dev/eas-workflows/variables/<https:/github.com/expo/expo/edit/main/docs/pages/eas-workflows/variables.mdx>)
  * Last updated on January 24, 2025


Sign up for the Expo Newsletter
Sign Up
Unsubscribe at any time. Read our [privacy policy](https://docs.expo.dev/eas-workflows/variables/<https:/expo.dev/privacy>).
