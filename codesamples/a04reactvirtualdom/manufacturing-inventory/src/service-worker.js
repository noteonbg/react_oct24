// src/service-worker.js

window.self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
  });
  
  window.self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('/production-data')) {
      event.respondWith(
        caches.match('/production-data').then((response) => {
          return response || fetch(event.request);
        })
      );
    }
  });
  