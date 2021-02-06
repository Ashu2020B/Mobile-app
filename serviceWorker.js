var CACHE_NAME = 'awesome-quotes';
var urlsToCache = [
  '/',
  '/style.css',
  '/index.html',
  '/quotes.html',
  '/life.html',
  '/love.html',
  '/inspiration.html',
  '/frame 5.png',
  '/frame 6.png',
  '/X - 3.png',
  '/X - 4.png',
  '/X - 10.png',
  '/X - 11.png',
  '/X - 7.png',
  '/X - 8.png',
  '/X - 9.png'
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