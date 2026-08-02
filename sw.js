// Service worker mínimo — existe só para o Chrome liberar "Instalar aplicativo".
// Não faz cache de nada: toda requisição vai direto pra rede, então o app
// sempre carrega a versão mais recente publicada no GitHub Pages.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
