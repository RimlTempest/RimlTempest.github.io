/**
 * キャラクター設定資料。1 枚のちびキャラのデザインシートから切り出した図版。
 * 画像は public/riml/chibi/ に置き、実寸（書き出したときの画素数）を一緒に持つ。
 * next/image の最適化を切っているので、実寸を書かないとレイアウトがずれる。
 */
export type Plate = {
  readonly key: string
  readonly label: string
  readonly src: string
  readonly width: number
  readonly height: number
  readonly note?: string
}

const plate = (
  key: string,
  label: string,
  width: number,
  height: number,
  note?: string,
): Plate => ({
  key,
  label,
  src: `/riml/chibi/${key}.webp`,
  width,
  height,
  ...(note === undefined ? {} : { note }),
})

/** 主役の立ち絵。ふだんは正面、触ると笑顔になる */
export const bust = plate('bust', 'riml', 900, 876)
export const bustHappy = plate('bust-happy', 'riml（笑顔）', 900, 876)

/** 全身。縦に長いので、置き場所では高さで大きさを決める */
export const standing = plate('standing', 'riml（全身）', 431, 1100)

/** 表情と小物 */
export const faces: readonly Plate[] = [
  plate('acc-plain', 'ふつう', 336, 346),
  plate('acc-wink', 'にっこり', 308, 340),
  plate('acc-surprise', 'おどろき', 310, 348),
  plate('acc-smile', 'ねこ耳', 316, 344),
  plate('acc-cap', 'ぼうし', 368, 328),
  plate('acc-ribbon', 'りぼん', 354, 342),
] as const
