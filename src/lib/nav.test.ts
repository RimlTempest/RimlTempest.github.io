import { describe, expect, test } from 'bun:test'
import { isCurrent, navLabels, navOrder, routes } from './nav'
import { locales } from '@/content/i18n'

describe('ナビゲーション', () => {
  test('トップは完全一致のときだけ現在地', () => {
    expect(isCurrent('/', 'ja', 'home')).toBe(true)
    expect(isCurrent('/about/', 'ja', 'home')).toBe(false)
    expect(isCurrent('/en', 'en', 'home')).toBe(true)
    expect(isCurrent('/en/', 'en', 'home')).toBe(true)
    expect(isCurrent('/en/about/', 'en', 'home')).toBe(false)
  })

  test('下の階層も親を現在地として扱う', () => {
    expect(isCurrent('/work/', 'ja', 'work')).toBe(true)
    expect(isCurrent('/work/DotArt/', 'ja', 'work')).toBe(true)
    expect(isCurrent('/en/work/DotArt/', 'en', 'work')).toBe(true)
  })

  test('別の項目を現在地にしない', () => {
    expect(isCurrent('/work/', 'ja', 'about')).toBe(false)
    expect(isCurrent('/en/work/', 'en', 'about')).toBe(false)
  })

  test('どの言語でも同じ数の項目がある', () => {
    for (const locale of locales) {
      expect(Object.keys(routes[locale]).length).toBe(navOrder.length)
    }
  })

  test('どの項目も両方の言語のラベルを持つ', () => {
    for (const key of navOrder) {
      for (const locale of locales) {
        expect(navLabels[key][locale].length).toBeGreaterThan(0)
      }
    }
  })

  test('英語のパスは /en で始まる', () => {
    for (const key of navOrder) {
      expect(routes.en[key].startsWith('/en')).toBe(true)
      expect(routes.ja[key].startsWith('/en')).toBe(false)
    }
  })
})
