console.log('Hello from serviceWorker.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

workbox.core.setCacheNameDetails({
    prefix: 'my-app',
    suffix: 'v1',
    precache: 'precache-cache',
    runtime: 'runtime-cache'
  });

workbox.routing.registerRoute(
    new RegExp('pagina1\.(html|js)'),
    new workbox.strategies.CacheFirst({
        cacheName: workbox.core.cacheNames.precache,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 24 * 3600
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('pagina2\.(html|js)'),
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('pagina3\.(html|js)'),
    new workbox.strategies.NetworkOnly()
);
