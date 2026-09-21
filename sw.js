/*
 * サービスワーカー。オフラインでも読めるようにするためだけに置く。
 *
 * 方針は「オンラインなら必ず最新を出す」。キャッシュ優先にするのは
 * 中身のハッシュがファイル名に入っている /_next/static/ だけで、
 * 画面（HTML）も画像も毎回ネットワークを先に見る。
 * 画像を差し替えたのに古いまま出る、という事故を起こさないため。
 */

const CACHE = 'riml-v3'

/** 取りこぼしても致命的でない、最初に温めておくもの */
const SHELL = [
  '/',
  '/about/',
  '/work/',
  '/contact/',
  '/en/',
  '/en/about/',
  '/en/work/',
  '/en/contact/',
  '/404.html',
  '/manifest.json',
  // 最初の描画より前に走るので、オフラインでも取れる必要がある
  '/before-paint.js',
]

/** 中身が変わればファイル名も変わるもの。キャッシュ優先にしてよい */
const IMMUTABLE = /^\/_next\/static\//

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      // 1 つでも失敗すると install ごと落ちるので、1 つずつ入れて失敗は捨てる
      .then((cache) => Promise.all(SHELL.map((url) => cache.add(url).catch(() => undefined))))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

/*
 * 照合では Vary を無視する。GitHub Pages も `bunx serve` も `Vary: Accept-Encoding`
 * を返すが、画面遷移の要求とサービスワーカーからの取得では Accept-Encoding の並びが
 * 揃わないことがあり、そのままだと保存済みでも「見つからない」になる。
 */
const MATCH = { ignoreVary: true }

/** 取れたら保存して返す。取れなければキャッシュ、それも無ければ 404 の画面 */
async function networkFirst(request) {
  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(CACHE)
      await cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    const cached = await caches.match(request, MATCH)
    if (cached !== undefined) return cached
    if (request.mode === 'navigate') {
      const offline = await caches.match('/404.html', MATCH)
      if (offline !== undefined) return offline
    }
    throw error
  }
}

/** キャッシュにあればそれを返す。無ければ取ってきて保存する */
async function cacheFirst(request) {
  const cached = await caches.match(request, MATCH)
  if (cached !== undefined) return cached
  const response = await fetch(request)
  if (response.ok) {
    const cache = await caches.open(CACHE)
    await cache.put(request, response.clone())
  }
  return response
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  // 別オリジン（CDN・外部リンク）には触らない
  if (url.origin !== self.location.origin) return

  event.respondWith(IMMUTABLE.test(url.pathname) ? cacheFirst(request) : networkFirst(request))
})
