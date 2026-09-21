/*
 * 最初の描画より前に走らせる。<head> で同期に読み込むので、ここで入れた値は
 * 本文が描かれる前に効く。
 *
 * - 配色: 保存された設定を <html data-color-scheme> に戻す。ここでやらないと、
 *   OS の配色で一瞬描いてから切り替わる。
 * - 言語: /en の下なら <html lang> を差し替える。静的書き出しなので、
 *   サーバー側ではどちらのページかが分からない。
 *
 * 型も import も無いのは、バンドラを通さずそのまま配るファイルだから。
 */
try {
  const root = document.documentElement
  const scheme = localStorage.getItem('riml-color-scheme')
  if (scheme === 'light' || scheme === 'dark') root.dataset.colorScheme = scheme
  const path = location.pathname
  root.lang = path === '/en' || path.indexOf('/en/') === 0 ? 'en' : 'ja'
} catch {
  // localStorage を読めない環境（プライベートウィンドウなど）では何もしない
}
