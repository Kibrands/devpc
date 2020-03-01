// Nombre de la caché
const CACHE_NAME = "devpc-v1";

// Archivos necesarios para el funcionamiento offline
const CACHE_ASSETS = [
    "/",
    "/index.html",
    "/global.css",
    "/build/bundle.css",
    "/build/bundle.js",
    "/build/bundle.css.map",
    "/build/bundle.js.map",
    "/img/icons/icon-512x512.png",
    "/img/logo-transparente.png",
    "/img/movil.jpg",
    "/img/ordenador.jpg",
    "/img/reloj.jpg",
    "/js/legalAdvice.js",
    "/css/style.css",
    "/vendors/bootstrap-4.4.0-dist/css/bootstrap.min.css",
    "/vendors/fontawesome-free-5.11.2-web/css/all.css",
    "/vendors/fontawesome-free-5.11.2-web/js/all.js",
    "/vendors/bootstrap-4.4.0-dist/js/jquery-3.4.1.min.js",
    "/vendors/bootstrap-4.4.0-dist/js/popper.min.js",
    "/vendors/bootstrap-4.4.0-dist/js/bootstrap.min.js"
];

// INSTALL
// Realizamos el cacheo de la APP SHELL
self.addEventListener("install", function(e) {
    console.log("[Service Worker] * Instalado.");

    e.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(function(cache) {
            console.log("[Service Worker] Cacheando app shell");
            return cache.addAll(CACHE_ASSETS);
        })
        .then(function() {
            console.log("[Service Worker] Todos los recursos han sido cacheados");
            return self.skipWaiting();
        })
    );
});
// ACTIVATE
// Eliminamos cachés antiguas.
self.addEventListener("activate", function(e) {
    console.log("[Service Worker] * Activado.");

    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log("[Service Worker] Borrando caché antigua: ", cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// FETCH
// Hacemos peticiones a recursos.
self.addEventListener("fetch", function(e) {
    console.log("[Service Worker] * Fetch.");

    // if (e.request.mode !== 'navigate') {
    //   // Not a page navigation, bail.
    //   return;
    // }
    if (
        e.request.url.indexOf("/auth/") !== -1 ||
        e.request.url.indexOf("/perfil") !== -1
    ) {
        return false;
    }

    e.respondWith(
        fetch(e.request).catch(() => {
            return caches.open(CACHE_NAME).then(cache => {
                return cache.match("/offline.html");
            });
        })
    );
});

// PUSH
self.addEventListener("push", function(e) {
    // Mantener el service worker a la espera hasta que la notificación sea creada.
    e.waitUntil(
        // Mostrar una notification con título 'Notificación importante' y cuerpo 'Alea iacta est'.
        self.registration.showNotification("Notificación importante", {
            body: "Alea iacta est"
        })
    );
});