## next-pwa & amplify issues - 28/01/2022
https://github.com/aws-amplify/amplify-console/issues/2110

error:
  workbox bad-precaching-response amplifyapp _next static _buildManifest.js 403

full error:
workbox-1846d813.js:1 Uncaught (in promise) bad-precaching-response: bad-precaching-response ::
[{"url":"https://last-working-point.d2nztxbm9f61l.amplifyapp.com/_next/static/3NVRxUjBPArBnkTE6jhrl/_buildManifest.js","status":403}]
    at Y.j (https://last-working-point.d2nztxbm9f61l.amplifyapp.com/workbox-1846d813.js:1:16757)
    at async Y.D (https://last-working-point.d2nztxbm9f61l.amplifyapp.com/workbox-1846d813.js:1:16355)
    at async Y.v (https://last-working-point.d2nztxbm9f61l.amplifyapp.com/workbox-1846d813.js:1:7597)

when not committing in public:
A bad HTTP response code (404) was received when fetching the script.
last-working-point.d…l.amplifyapp.com/:1 Uncaught (in promise) TypeError:
Failed to register a ServiceWorker for scope ('https://last-working-point.d2nztxbm9f61l.amplifyapp.com/')
with script ('https://last-working-point.d2nztxbm9f61l.amplifyapp.com/sw.js'):
A bad HTTP response code (404) was received when fetching the script.

## aws-amplify-build-failure - 01.01.2022
error next@12.0.7: The engine "node" is incompatible with this module. Expected version ">=12.22.0". Got "12.21.0"
2022-01-01T13:18:35.962Z [WARNING]: error Found incompatible module.

Go To: Build Settings At the bottom is Edit Build image settings Click Add Package Overide
https://stackoverflow.com/questions/70330950/nextjs-deployment-on-aws-amplify-issue-frontend-incompatible-module
