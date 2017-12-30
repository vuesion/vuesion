/* tslint:disable:no-console */

const DEBUG = false;
const { assets } = ((global as any) as any).serviceWorkerOption;
const CACHE_NAME = new Date().toISOString();

let assetsToCache = [...assets.map((path: string) => '/client' + path), '../', '../manifest.json'];

assetsToCache = assetsToCache.map(path => {
  return new URL(path, ((global as any) as any).location).toString();
});

// When the service worker is first added to a computer.
self.addEventListener('install', (event: any) => {
  // Perform install steps.
  if (DEBUG) {
    console.log('[SW] Install event');
  }

  // Add core website files to cache during serviceworker installation.
  event.waitUntil(
    (global as any).caches
      .open(CACHE_NAME)
      .then((cache: any) => {
        return cache.addAll(assetsToCache);
      })
      .then(() => {
        if (DEBUG) {
          console.log('Cached assets: main', assetsToCache);
        }
      })
      .catch((error: any) => {
        console.error(error);
        throw error;
      }),
  );
});

// After the install event.
self.addEventListener('activate', (event: any) => {
  if (DEBUG) {
    console.log('[SW] Activate event');
  }

  // Clean the caches
  event.waitUntil(
    (global as any).caches.keys().then((cacheNames: any) => {
      return Promise.all(
        cacheNames.map((cacheName: any) => {
          // Delete the caches that are not the current one.
          if (cacheName.indexOf(CACHE_NAME) === 0) {
            return null;
          }

          return (global as any).caches.delete(cacheName);
        }),
      );
    }),
  );
});

self.addEventListener('message', (event: any) => {
  switch (event.data.action) {
    case 'skipWaiting':
      if ((self as any).skipWaiting) {
        (self as any).skipWaiting();
        (self as any).clients.claim();
      }
      break;
    default:
      break;
  }
});

self.addEventListener('fetch', (event: any) => {
  const request = event.request;

  // Ignore not GET request.
  if (request.method !== 'GET') {
    if (DEBUG) {
      console.log(`[SW] Ignore non GET request ${request.method}`);
    }
    return;
  }

  const requestUrl = new URL(request.url);

  // Ignore difference origin.
  if (requestUrl.origin !== location.origin) {
    if (DEBUG) {
      console.log(`[SW] Ignore difference origin ${requestUrl.origin}`);
    }
    return;
  }

  const resource = (global as any).caches.match(request)
    .then((response: any) => {
      if (response) {
        if (DEBUG) {
          console.log(`[SW] fetch URL ${requestUrl.href} from cache`);
        }

        return response;
      }

      // Load and cache known assets.
      return fetch(request)
        .then((responseNetwork) => {
          if (!responseNetwork || !responseNetwork.ok) {
            if (DEBUG) {
              console.log(`[SW] URL [${requestUrl.toString()}] wrong responseNetwork: ${responseNetwork.status} ${responseNetwork.type}`);
            }

            return responseNetwork;
          }

          if (DEBUG) {
            console.log(`[SW] URL ${requestUrl.href} fetched`);
          }

          const responseCache = responseNetwork.clone();

          (global as any).caches
            .open(CACHE_NAME)
            .then((cache: any) => {
              return cache.put(request, responseCache);
            })
            .then(() => {
              if (DEBUG) {
                console.log(`[SW] Cache asset: ${requestUrl.href}`);
              }
            });

          return responseNetwork;
        })
        .catch(() => {
          // User is landing on our page.
          if (event.request.mode === 'navigate') {
            return (global as any).caches.match('./');
          }

          return null;
        });
    });

  event.respondWith(resource);
});
