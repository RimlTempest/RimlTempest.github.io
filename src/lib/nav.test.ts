import { describe, expect, test } from 'bun:test'
import { isCurrent, navItems } from './nav'

describe('isCurrent', () => {
  test('トップは完全一致のときだけ現在地', () => {
    expect(isCurrent('/', '/')).toBe(true)
    expect(isCurrent('/about/', '/')).toBe(false)
  })

  test('末尾スラッシュの有無どちらでも一致する', () => {
    expect(isCurrent('/about/', '/about')).toBe(true)
    expect(isCurrent('/about', '/about')).toBe(true)
  })

  test('下の階層も親を現在地にする', () => {
    expect(isCurrent('/work/DotArt/', '/work')).toBe(true)
  })

  test('前方一致だけで誤判定しない', () => {
    expect(isCurrent('/workshop/', '/work')).toBe(false)
    expect(isCurrent('/contact/', '/work')).toBe(false)
  })
})

describe('navItems', () => {
  test('リンク先が重複しない', () => {
    const hrefs = navItems.map((item) => item.href)
    expect(new Set(hrefs).size).toBe(hrefs.length)
  })

  test('どのページでも現在地はちょうど 1 つ', () => {
    for (const pathname of ['/', '/about/', '/work/', '/work/DotArt/', '/contact/']) {
      const matches = navItems.filter((item) => isCurrent(pathname, item.href))
      expect(matches).toHaveLength(1)
    }
  })
})
