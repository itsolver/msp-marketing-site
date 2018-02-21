---
layout: null
---
const PRECACHE = 'precache-v4';
const filesToCache = [
  {% for page in site.html_pages %}
  "{{ page.url }}",
  {% endfor %}
  {% for post in site.posts %}
  "{{ post.url }}",
  {% endfor %}
  "/assets/images/customers/statewide-roofing/logo.jpg",
  "/assets/images/qassure.jpg",
  "/assets/images/staff-angus.jpg",
  "/assets/images/gsuite-logo.png",
  "/assets/images/gsuite-product-lockup.png",
  "/assets/stylesheets/main.css",
  "/index.html",
  "/sw.js"
];

self.addEventListener('install', function(e) {
  e.waitUntil(
  caches.open(PRECACHE).then(function(cache) {
  return cache.addAll([filesToCache]);
  })
  );
});


self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
  caches.match(event.request).then(function(response) {
  return response || fetch(event.request);
  })
);
});
