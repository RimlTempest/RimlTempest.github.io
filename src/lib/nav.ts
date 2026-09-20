export type NavHref = '/' | '/about' | '/work' | '/contact'

export type NavItem = {
  readonly href: NavHref
  readonly label: string
}

export const navItems: readonly NavItem[] = [
  { href: '/', label: 'トップ' },
  { href: '/about', label: '私について' },
  { href: '/work', label: '作ったもの' },
  { href: '/contact', label: '連絡先' },
]

/**
 * ナビゲーションの現在地判定。
 * trailingSlash: true なので pathname は必ず `/` で終わる。
 * /work/DotArt/ のような下の階層でも /work を現在地として扱う。
 */
export function isCurrent(pathname: string, href: NavHref): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}
