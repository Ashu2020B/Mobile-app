var CACHE_NAME = 'awesome-quotes';
var urlsToCache = [
  './',
  './style.css',
  './index.html',
  './quotes.html',
  './life.html',
  './love.html',
  './inspiration.html',
  './frame 5.png',
  './frame 6.png',
  './x-3.png',
  './x-4.png',
  './x-10.png',
  './x-11.png',
  './x-7.png',
  './x-8.png',
  './x-9.png'
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