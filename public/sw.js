// Lumen Fidei Radio — Service Worker
// Handles scheduled notifications via Cache API storage.
// Works when the browser is open even if the tab is closed.

const CACHE_NAME = 'lumen-notifs-v1';
const NOTIF_URL  = '/sw-notifications-store';

// ── Storage helpers (Cache API as KV) ────────────────────────────────────────

async function getScheduled() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const res   = await cache.match(NOTIF_URL);
    if (!res) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function saveScheduled(items) {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(
    NOTIF_URL,
    new Response(JSON.stringify(items), {
      headers: { 'Content-Type': 'application/json' },
    })
  );
}

// ── Core: check and fire due notifications ────────────────────────────────────

async function checkAndFire() {
  const now       = Date.now();
  const scheduled = await getScheduled();
  const pending   = [];

  for (const notif of scheduled) {
    if (notif.targetMs <= now) {
      await self.registration.showNotification(
        `🔔 ${notif.title} — Lumen Fidei Radio`,
        {
          body   : `¡${notif.title} está comenzando ahora! (${notif.time} hs)`,
          icon   : '/logo.png',
          badge  : '/logo.png',
          tag    : notif.key,
          renotify: true,
          data   : { url: '/#programacion' },
        }
      );
    } else {
      pending.push(notif);
    }
  }

  await saveScheduled(pending);
}

// ── Lifecycle ─────────────────────────────────────────────────────────────────

self.addEventListener('install', (e) => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    Promise.all([self.clients.claim(), checkAndFire()])
  );
});

// ── Message handler (page → SW) ───────────────────────────────────────────────

self.addEventListener('message', async (e) => {
  const { type, notification, key } = e.data ?? {};

  if (type === 'SCHEDULE') {
    const list     = await getScheduled();
    const filtered = list.filter((n) => n.key !== notification.key);
    filtered.push(notification);
    await saveScheduled(filtered);
    // Confirm back to page
    e.source?.postMessage({ type: 'SCHEDULED', key: notification.key });
  }

  if (type === 'CANCEL') {
    const list = await getScheduled();
    await saveScheduled(list.filter((n) => n.key !== key));
    e.source?.postMessage({ type: 'CANCELLED', key });
  }

  if (type === 'GET_ALL') {
    const list = await getScheduled();
    e.source?.postMessage({ type: 'ALL', data: list });
  }

  // Keepalive ping from page — also checks for due notifications
  if (type === 'PING') {
    await checkAndFire();
    e.source?.postMessage({ type: 'PONG' });
  }
});

// ── Fetch: intercept keepalive route ─────────────────────────────────────────

self.addEventListener('fetch', (e) => {
  if (new URL(e.request.url).pathname === '/sw-ping') {
    e.respondWith(
      checkAndFire().then(() => new Response('ok', { status: 200 }))
    );
    return;
  }
  // Let everything else pass through (no caching strategy needed for this app)
});

// ── Notification click ────────────────────────────────────────────────────────

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const targetUrl = e.notification.data?.url ?? '/';

  e.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((list) => {
        const existing = list.find((c) => c.url.includes(self.location.origin));
        if (existing) {
          existing.focus();
          existing.postMessage({ type: 'NAVIGATE', url: targetUrl });
        } else {
          self.clients.openWindow(targetUrl);
        }
      })
  );
});
