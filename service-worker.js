const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/script.js',
  '/images/logo.png',
//   '/font/myfont.woff2',
  // Add all the HTML files
  '/signup-location.html',
  '/signup-plan1.html',
  '/signup-plan2.html',
  '/signup-rewards.html',
  '/signup-verify1.html',
  '/signup-verify2.html',
  '/signup-verify3.html',
  '/signup-verify4.html',
  '/signup1.html',
  '/signup2.html',
  '/splash-screen.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
