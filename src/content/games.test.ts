import { describe, expect, test } from 'bun:test'
import { accountsOf, gameAccounts, platformLabel } from './games'

describe('gameAccounts', () => {
  test('id が重複しない', () => {
    const ids = gameAccounts.map((account) => account.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('フレンドコードに空白が混じっていない（コピーしてそのまま使える）', () => {
    for (const account of gameAccounts) {
      expect(account.friendCode).not.toBe('')
      expect(account.friendCode).not.toMatch(/\s/)
    }
  })

  test('accountsOf は全件を過不足なく 2 つに分ける', () => {
    const split = [...accountsOf('arcade'), ...accountsOf('mobile')]
    expect(split).toHaveLength(gameAccounts.length)
  })

  test('どのプラットフォームにもラベルがある', () => {
    for (const account of gameAccounts) {
      expect(platformLabel[account.platform]).toBeTruthy()
    }
  })
})
