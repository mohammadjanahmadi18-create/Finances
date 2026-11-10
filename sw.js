/* Offline shell: precache only paths that exist; runtime cache remains network-first. */
const CACHE='finances-budget-v20';
const ASSETS=['./','./index.html','./gold.html','./atelier.css?v=11','./atelier.css?v=12','./crystal.css?v=18','./sunrise.css?v=19','./budget-ladder.css?v=20','./manifest.webmanifest?v=18','./manifest-gold.webmanifest?v=18','./icons/icon.svg?v=11','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(
  caches.open(CACHE).then(cache=>Promise.all(ASSETS.map(url=>cache.add(url).catch(()=>{})))).then(()=>self.skipWaiting())
));
self.addEventListener('activate',event=>event.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())
));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{});}
    return response;
  }).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html'))));
});
