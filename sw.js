// Guarda o app no aparelho para abrir rápido e funcionar sem internet.
const CACHE="minhas-financas-v3";
const ARQUIVOS=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARQUIVOS)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);
  // página do app: tenta a versão nova da internet, cai para a guardada se estiver offline
  if(req.mode==="navigate"){e.respondWith(fetch(req).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put("./index.html",c));return r}).catch(()=>caches.match("./index.html")));return}
  // fontes e ícones: usa o guardado e atualiza por trás
  if(url.origin===location.origin||url.host.endsWith("fonts.googleapis.com")||url.host.endsWith("fonts.gstatic.com")){
    e.respondWith(caches.match(req).then(hit=>{const net=fetch(req).then(r=>{if(r.ok||r.type==="opaque"){const c=r.clone();caches.open(CACHE).then(x=>x.put(req,c))}return r}).catch(()=>hit);return hit||net}));
  }
});
