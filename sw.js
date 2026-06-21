/* Suomikortit service worker — offline app shell */
const CACHE = "suomikortit-v1";
const SHELL = [
  "./",
  "./index.html",
  "./cards.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const { request } = e;
  if (request.method !== "GET") return;
  e.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(resp => {
        // cache same-origin assets as we go (fonts, etc. stay network)
        if (resp.ok && new URL(request.url).origin === location.origin) {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(request, copy));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
