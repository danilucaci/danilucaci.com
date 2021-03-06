/**
 * @see https://github.com/GoogleChrome/workbox/issues/1663#issuecomment-448755945
 * @see https://developers.google.com/web/tools/workbox/guides/advanced-recipes#cached-av
 *
 * Fix for videos not loading in Safari due to workbox sw
 *
 * In your service worker:
 * It's up to you to either precache or explicitly call cache.add('movie.mp4')
 * to populate the cache.
 *
 * This route will go against the network if there isn't a cache match,
 * but it won't populate the cache at runtime.
 * If there is a cache match, then it will properly serve partial responses.
 */
/* eslint-disable no-undef */
workbox.routing.registerRoute(
  /.*\.mp4/,
  workbox.strategies.cacheFirst({
    cacheName: "gatsby-plugin-offline-videos-cache",
    plugins: [
      new workbox.cacheableResponse.Plugin({ statuses: [200] }),
      new workbox.rangeRequests.Plugin(),
    ],
  }),
);
