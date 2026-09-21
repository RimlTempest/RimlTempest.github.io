import { describe, expect, test } from 'bun:test'
import { externalLabel } from './label'

describe('外部リンクの読み上げ名', () => {
  test('見えている文言が名前の先頭に入る（WCAG 2.5.3）', () => {
    expect(externalLabel('ja', 'リポジトリ').startsWith('リポジトリ')).toBe(true)
    expect(externalLabel('en', 'Repository').startsWith('Repository')).toBe(true)
  })

  test('新しいタブで開くことを書く（WCAG 3.2.5）', () => {
    expect(externalLabel('ja', 'X')).toContain('新しいタブ')
    expect(externalLabel('en', 'X')).toContain('new tab')
  })

  test('句読点は言語に合わせる', () => {
    expect(externalLabel('ja', '題名', 'Zenn')).toBe('題名（Zenn・新しいタブ）')
    expect(externalLabel('en', 'Title', 'Zenn')).toBe('Title (Zenn, new tab)')
  })

  test('英語の名前に全角の記号を混ぜない', () => {
    for (const value of [externalLabel('en', 'Title'), externalLabel('en', 'Title', 'Zenn')]) {
      expect(value).not.toMatch(/[（）・]/)
    }
  })
})
