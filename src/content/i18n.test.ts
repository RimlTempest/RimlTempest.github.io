import { describe, expect, test } from 'bun:test'
import { localeFromPathname, locales, pathForLocale } from './i18n'

describe('言語', () => {
  test('パスから言語を読む', () => {
    expect(localeFromPathname('/')).toBe('ja')
    expect(localeFromPathname('/about/')).toBe('ja')
    expect(localeFromPathname('/en')).toBe('en')
    expect(localeFromPathname('/en/')).toBe('en')
    expect(localeFromPathname('/en/about/')).toBe('en')
  })

  test('/english のような紛らわしいパスを英語にしない', () => {
    expect(localeFromPathname('/english/')).toBe('ja')
  })

  test('別の言語のパスを作る', () => {
    expect(pathForLocale('/', 'en')).toBe('/en/')
    expect(pathForLocale('/about/', 'en')).toBe('/en/about/')
    expect(pathForLocale('/work/riml-ds/', 'en')).toBe('/en/work/riml-ds/')
    expect(pathForLocale('/en/', 'ja')).toBe('/')
    expect(pathForLocale('/en/about/', 'ja')).toBe('/about/')
    expect(pathForLocale('/en', 'ja')).toBe('/')
  })

  test('同じ言語を指すと元に戻る', () => {
    for (const path of ['/', '/about/', '/work/riml-ds/']) {
      expect(pathForLocale(path, 'ja')).toBe(path)
    }
    for (const path of ['/en/', '/en/about/']) {
      expect(pathForLocale(path, 'en')).toBe(path)
    }
  })

  test('言語は 2 つ', () => {
    expect([...locales]).toEqual(['ja', 'en'])
  })
})
