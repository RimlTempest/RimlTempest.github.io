/**
 * キャラクター設定資料。1 枚のデザインシートから切り出した図版と、その説明。
 * 画像は public/riml/sheet/ に置き、実寸（書き出したときの画素数）を一緒に持つ。
 * next/image の最適化を切っているので、実寸を書かないとレイアウトがずれる。
 */
export type Plate = {
  readonly key: string
  readonly label: string
  readonly src: string
  readonly width: number
  readonly height: number
  /** 背景が透明（切り抜き済み）か、紙のカードに載せる図版か */
  readonly kind: 'cutout' | 'plate'
  readonly note?: string
}

const sheet = (
  key: string,
  label: string,
  width: number,
  height: number,
  kind: Plate['kind'],
  note?: string,
): Plate => ({
  key,
  label,
  src: `/riml/sheet/${key}.webp`,
  width,
  height,
  kind,
  ...(note === undefined ? {} : { note }),
})

/** 全身 5 方向 */
export const bodyViews: readonly Plate[] = [
  sheet('body-front', '正面', 272, 846, 'cutout'),
  sheet('body-side', '横', 172, 836, 'cutout'),
  sheet('body-back', '背面', 242, 840, 'cutout'),
  sheet('body-front45', '斜め前', 248, 842, 'cutout'),
  sheet('body-back45', '斜め後ろ', 230, 838, 'cutout'),
] as const

/** 顔のアップ */
export const faceViews: readonly Plate[] = [
  sheet('face-front', '正面', 264, 384, 'plate'),
  sheet('face-side', '横顔', 268, 384, 'plate'),
  sheet('face-45', '斜め 45 度', 272, 384, 'plate'),
] as const

/** 表情 6 種 */
export const expressions: readonly Plate[] = [
  sheet('expr-normal', '通常', 152, 304, 'plate'),
  sheet('expr-smile', '微笑み', 152, 304, 'plate'),
  sheet('expr-joy', '喜び', 146, 304, 'plate'),
  sheet('expr-serious', '真剣', 152, 316, 'plate'),
  sheet('expr-surprise', '驚き', 152, 316, 'plate'),
  sheet('expr-trouble', '困り顔', 152, 332, 'plate'),
] as const

/** 髪型の詳細 */
export const hairPlates: readonly Plate[] = [
  sheet('hair-front', '前髪', 280, 212, 'cutout'),
  sheet('hair-side', '横髪（左側）', 240, 212, 'cutout'),
  sheet('hair-back', '後ろ髪', 230, 272, 'cutout'),
  sheet('hair-ornament', '髪飾り', 216, 194, 'cutout', '後ろの襟元に「×」の飾りがある'),
] as const

/** 衣装・小物 */
export const wearPlates: readonly Plate[] = [
  sheet('wear-jacket-front', '上着（前面）', 360, 354, 'cutout', 'セーラージャケット'),
  sheet('wear-jacket-back', '上着（背面）', 238, 346, 'cutout', '襟の背面に「×」'),
  sheet('wear-inner', 'インナー', 224, 324, 'cutout', 'ノースリーブのハイネック'),
  sheet('wear-bottoms', 'ボトムス', 318, 276, 'cutout', 'スカート + ショートパンツ'),
  sheet('wear-socks', 'ソックス・ガーター', 218, 337, 'plate', '右太ももにガーター'),
  sheet('wear-shoes', 'シューズ', 386, 184, 'cutout', '厚底のスニーカー'),
  sheet('wear-tie', 'ネクタイ', 124, 188, 'cutout', 'セーラーのリボン'),
  sheet('wear-tags', '装飾・タグ', 122, 188, 'cutout', 'サイドのストラップとタグ'),
  sheet('wear-extras', 'その他の装飾', 384, 192, 'cutout', '腕のポケットとベルト'),
] as const

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
 * デザインシートのカラーパレットから読み取った値。
 * riml-ds の `--rd-*` はこの 5 系統（髪の青・赤い目・クリームの肌・紺と白の衣装）から
 * AAA が成り立つ明度へ移し替えたもの。
 */
export const palette: readonly PaletteRow[] = [
  {
    id: 'hair',
    label: '髪',
    swatches: [
      { hex: '#6789b9', name: '基調' },
      { hex: '#6a8dbb', name: '中間' },
      { hex: '#b7c7dd', name: 'ハイライト' },
      { hex: '#dde1e8', name: '照り返し' },
    ],
  },
  {
    id: 'eye',
    label: '瞳',
    swatches: [
      { hex: '#e0434a', name: '虹彩' },
      { hex: '#5c4d61', name: '影' },
      { hex: '#5a5a68', name: '瞳孔まわり' },
      { hex: '#484753', name: 'まつげ' },
    ],
  },
  {
    id: 'skin',
    label: '肌',
    swatches: [
      { hex: '#f9e1d4', name: '基調' },
      { hex: '#e3cec6', name: '影' },
      { hex: '#efe3dd', name: '中間' },
      { hex: '#f9e6dc', name: 'ハイライト' },
    ],
  },
  {
    id: 'outfit',
    label: '衣装',
    swatches: [
      { hex: '#fbf2ea', name: '生成りの白' },
      { hex: '#4d5f87', name: '紺' },
      { hex: '#53525e', name: '黒' },
      { hex: '#e0464b', name: '赤' },
    ],
  },
  {
    id: 'gear',
    label: '小物',
    swatches: [
      { hex: '#657b9f', name: '青' },
      { hex: '#434961', name: '濃紺' },
      { hex: '#d3d6dc', name: '灰' },
      { hex: '#e0464b', name: '赤' },
    ],
  },
] as const

/** 設定資料シートそのもの */
export const fullSheet = sheet('full', 'デザインシート全体', 1536, 1024, 'plate')
