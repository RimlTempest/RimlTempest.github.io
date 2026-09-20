export type GamePlatform = 'arcade' | 'mobile'

export type GameAccount = {
  readonly id: string
  readonly title: string
  readonly platform: GamePlatform
  readonly friendCode: string
}

/** フレンドコードは本人が公開している値。交換のために出している。 */
export const gameAccounts: readonly GameAccount[] = [
  { id: 'chunithm', title: 'CHUNITHM', platform: 'arcade', friendCode: '1007302938635' },
  { id: 'maimai', title: 'maimai', platform: 'arcade', friendCode: '1002322731605' },
  { id: 'd4dj', title: 'D4DJ', platform: 'mobile', friendCode: 'qsZQX3iL' },
  { id: 'garupa', title: 'ガルパ', platform: 'mobile', friendCode: '349329' },
  { id: 'proseka', title: 'プロセカ', platform: 'mobile', friendCode: '5178262687051784' },
] as const

export const platformLabel: Readonly<Record<GamePlatform, string>> = {
  arcade: 'アーケード',
  mobile: 'モバイル',
}

export function accountsOf(platform: GamePlatform): readonly GameAccount[] {
  return gameAccounts.filter((account) => account.platform === platform)
}
