import { describe, expect, test } from 'bun:test'
import { socialLinks } from './links'
import { site } from './site'

describe('site', () => {
  test('URL は https で末尾にスラッシュを付けない', () => {
    expect(site.url.startsWith('https://')).toBe(true)
    expect(site.url.endsWith('/')).toBe(false)
  })

  test('OGP 画像が public/ に存在する', async () => {
    const path = new URL(`../../public${site.ogImage}`, import.meta.url)
    expect(await Bun.file(path).exists()).toBe(true)
  })
})

describe('socialLinks', () => {
  test('id が重複しない', () => {
    const ids = socialLinks.map((link) => link.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('すべて https', () => {
    for (const link of socialLinks) {
      expect(link.href.startsWith('https://')).toBe(true)
    }
  })

  test('アイコンは 24×24 の塗りパスで、空でない', () => {
    for (const link of socialLinks) {
      expect(link.path.length).toBeGreaterThan(10)
      expect(link.path).toMatch(/^[Mm]/)
    }
  })
})
