const CACHE_NAME = 'winter-cup-v16';
const ASSETS = ['./', './index.html', './manifest.json', './manifest-genitori.json', './icon-192.png', './icon-512.png', './genitori.html'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first: online prende sempre l'ultima versione, offline usa la cache.
// Solo file dello stesso sito: i dati del database non vengono mai messi in cache.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html')))
  );
});

// ----- Notifiche push -----
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = {title: 'Avviso', body: e.data ? e.data.text() : ''}; }
  e.waitUntil(self.registration.showNotification(d.title || 'Avviso', {
    body: d.body || '',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: d.tag || undefined,
    renotify: !!d.tag,
    data: {url: d.url || './'},
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './';
  const base = url.split('#')[0];
  e.waitUntil(self.clients.matchAll({type: 'window', includeUncontrolled: true}).then(async (list) => {
    for (const c of list) {
      if (c.url.split('#')[0] === base && 'focus' in c) {
        await c.focus();
        try { await c.navigate(url); } catch (_) {}
        return;
      }
    }
    return self.clients.openWindow(url);
  }));
});
