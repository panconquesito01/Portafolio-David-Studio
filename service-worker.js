// Service Worker básico para PWA
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('portfolio-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/projects.html',
        '/contact.html',
        '/404.html',
        '/assets/css/style.css',
        '/assets/js/main.js'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
