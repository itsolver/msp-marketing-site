---
layout: null
---

const staticCacheName = "itsolver-msp-v4";

console.log("installing service worker");

const filesToCache = [
  "/",
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

self.addEventListener("install", function(e){
  self.skipWaiting();

  e.waitUntil(
    caches.open(staticCacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(
        cacheNames.filter(function(cacheName){
          return cacheName.startsWith("itsolver-msp-")
            && cacheName != staticCacheName;
        }).map(function(cacheName){
          return caches.delete(cacheName);
        })
      )
    })
  )
});

self.addEventListener("fetch", function(e){
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  )
});
