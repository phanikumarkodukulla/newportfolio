const CACHE_NAME = "kp-portfolio-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/my-profile.jpg"
    // Add more resources if needed
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
