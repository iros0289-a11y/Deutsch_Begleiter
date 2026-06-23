const CACHE_NAME = "deutsch-b1-begleiter-20260623-dtz-neu-klein";
const CORE_ASSETS = [
  "./",
  "./?app=deutsch-b1-begleiter-20260623-dtz-neu-klein",
  "./index.html",
  "./styles.css?v=20260623dtz-neu-klein",
  "./app.js?v=20260623dtz-neu-klein",
  "./manifest.webmanifest?v=20260623dtz-neu-klein",
  "./service-worker.js",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./assets/photos/photo-01.jpg",
  "./assets/photos/photo-02.jpg",
  "./assets/photos/photo-03.jpg",
  "./assets/photos/photo-04.jpg",
  "./assets/photos/photo-05.jpg",
  "./assets/photos/photo-06.jpg",
  "./assets/photos/photo-07.jpg",
  "./assets/photos/photo-08.jpg",
  "./assets/photos/photo-09.jpg",
  "./assets/photos/photo-10.jpg",
  "./assets/photos/photo-11.jpg",
  "./assets/photos/photo-12.jpg",
  "./assets/photos/photo-13.jpg",
  "./assets/photos/photo-14.jpg",
  "./assets/photos/photo-15.jpg",
  "./assets/photos/photo-16.jpg",
  "./assets/photos/photo-17.jpg",
  "./assets/photos/photo-18.jpg",
  "./assets/photos/photo-19.jpg",
  "./assets/photos/photo-20.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
