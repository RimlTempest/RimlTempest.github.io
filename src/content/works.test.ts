import { describe, expect, test } from 'bun:test'
import { locales } from './i18n'
import { findWork, statusLabel, works } from './works'

describe('works', () => {
  test('slug が重複しない（静的エクスポートの URL がぶつからない）', () => {
    const slugs = works.map((work) => work.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  test('slug に URL で困る文字を含まない', () => {
    for (const work of works) {
      expect(work.slug).toMatch(/^[\w-]+$/)
    }
  })

  test('要約と本文が、どの言語でも空でない', () => {
    for (const work of works) {
      for (const locale of locales) {
        expect(work.summary[locale].length).toBeGreaterThan(0)
        expect(work.body[locale].length).toBeGreaterThan(0)
      }
    }
  })

  test('状態にはどの言語でもラベルがある', () => {
    for (const work of works) {
      for (const locale of locales) {
        expect(statusLabel[work.status][locale].length).toBeGreaterThan(0)
      }
    }
  })

  test('非公開のものに公開リンクを出さない', () => {
    for (const work of works.filter((w) => w.status === 'private')) {
      expect(work.siteUrl).toBeUndefined()
      expect(work.repoUrl).toBeUndefined()
    }
  })

  test('リンクは https', () => {
    for (const work of works) {
      for (const url of [work.siteUrl, work.repoUrl]) {
        if (url !== undefined) expect(url.startsWith('https://')).toBe(true)
      }
    }
  })
})

describe('findWork', () => {
  test('ある slug は見つかる', () => {
    expect(findWork('QRCC')?.name).toBe('qrcc')
  })

  test('無い slug は undefined（404 にする）', () => {
    expect(findWork('not-a-work')).toBeUndefined()
  })
})
