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
export const bust = plate('bust', 'riml', 888, 900)
export const bustHappy = plate('bust-happy', 'riml（笑顔）', 909, 900)

/** 全身 4 方向 */
export const bodyViews: readonly Plate[] = [
  plate('body-front', '正面', 213, 572),
  plate('body-side', '横', 172, 565),
  plate('body-back', '背面', 186, 568),
  plate('body-back45', '斜め後ろ', 169, 556),
] as const

/** 表情と小物 */
export const faces: readonly Plate[] = [
  plate('acc-plain', 'ふつう', 336, 346),
  plate('acc-wink', 'にっこり', 308, 340),
  plate('acc-surprise', 'おどろき', 310, 348),
  plate('acc-smile', 'ねこ耳', 316, 344),
  plate('acc-cap', 'ぼうし', 368, 328),
  plate('acc-ribbon', 'りぼん', 354, 342),
] as const

/** 設定資料シートそのもの */
export const fullSheet = plate('sheet', 'デザインシート全体', 1254, 1254)

export type Swatch = {
  readonly hex: string
  readonly name: string
}

export type PaletteRow = {
  readonly id: string
  readonly label: string
  readonly swatches: readonly Swatch[]
}

/**
 * デザインシートから読み取った色。
 * riml-ds の `--rd-*` は、この青・赤・クリームを AAA が成り立つ明度へ
 * 移し替えたもの（`vendor/riml-ds/docs/brand.md`）。
 */
export const palette: readonly PaletteRow[] = [
  {
    id: 'hair',
    label: '髪',
    swatches: [
      { hex: '#7ea3cb', name: '基調' },
      { hex: '#6080b4', name: '影' },
      { hex: '#5c7cb0', name: '濃い影' },
    ],
  },
  {
    id: 'skin',
    label: '肌',
    swatches: [
      { hex: '#fcf6f0', name: '基調' },
      { hex: '#fdd9da', name: 'ほっぺ' },
    ],
  },
  {
    id: 'eye',
    label: '瞳',
    swatches: [{ hex: '#e67f7e', name: '赤' }],
  },
  {
    id: 'outfit',
    label: '衣装',
    swatches: [
      { hex: '#fefefe', name: '上着の白' },
      { hex: '#505366', name: '紺' },
      { hex: '#d77578', name: 'ネクタイの赤' },
    ],
  },
] as const
