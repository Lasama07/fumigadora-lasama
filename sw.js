const CACHE_NAME = 'lasama-v1';
const urlsToCache = [
  '/fumigadora-lasama/',
  '/fumigadora-lasama/index.html',
  '/fumigadora-lasama/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
