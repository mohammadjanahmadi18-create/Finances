const CACHE_NAME = 'finances-v5';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(x => x !== CACHE_NAME).map(x => caches.delete(x)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {if(e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return; e.respondWith(fetch(e.request).then(response => {if(response.ok){const clone=response.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));}return response;}).catch(()=>caches.match(e.request).then(cached=>cached||caches.match('./index.html'))));});
