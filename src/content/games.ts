import type { Text } from './i18n'

export type GamePlatform = 'arcade' | 'mobile'

export type GameAccount = {
  readonly id: string
  /** 遊ぶ人が探す名前。英語圏で通っている呼び方がある game だけ訳す */
  readonly title: Text
  readonly platform: GamePlatform
  readonly friendCode: string
}

/** フレンドコードは本人が公開している値。交換のために出している。 */
export const gameAccounts: readonly GameAccount[] = [
  {
    id: 'chunithm',
    title: { ja: 'CHUNITHM', en: 'CHUNITHM' },
    platform: 'arcade',
    friendCode: '1007302938635',
  },
  {
    id: 'maimai',
    title: { ja: 'maimai', en: 'maimai' },
    platform: 'arcade',
    friendCode: '1002322731605',
  },
  { id: 'd4dj', title: { ja: 'D4DJ', en: 'D4DJ' }, platform: 'mobile', friendCode: 'qsZQX3iL' },
  {
    id: 'garupa',
    title: { ja: 'ガルパ', en: 'BanG Dream! Girls Band Party!' },
    platform: 'mobile',
    friendCode: '349329',
  },
  {
    id: 'proseka',
    title: { ja: 'プロセカ', en: 'Project SEKAI' },
    platform: 'mobile',
    friendCode: '5178262687051784',
  },
] as const

export const platformLabel: Readonly<Record<GamePlatform, Text>> = {
  arcade: { ja: 'アーケード', en: 'Arcade' },
  mobile: { ja: 'モバイル', en: 'Mobile' },
}

export function accountsOf(platform: GamePlatform): readonly GameAccount[] {
  return gameAccounts.filter((account) => account.platform === platform)
}
