import type { NextConfig } from 'next'

/**
 * GitHub Pages（gh-pages ブランチ）に出すので静的エクスポート。
 * Server Components はビルド時に実行され、結果が HTML と RSC ペイロードになる。
 *
 * cacheComponents は有効にできない：Next.js 16 は `output: 'export'` と併用すると
 * `Invariant: PPR cannot be enabled in export mode` でビルドを落とす。
 * このサイトのデータはすべてビルド時に確定するので、RSC のプリレンダだけで足りる。
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  // 静的エクスポートでは next/image の既定ローダー（サーバー最適化）が使えない
  images: { unoptimized: true },
  typedRoutes: true,
  experimental: {
    optimizeCss: false,
  },
}

export default nextConfig
