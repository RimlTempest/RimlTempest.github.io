export type Highlight = {
  readonly label: string
  readonly detail: string
}

export type ProfileSection = {
  readonly id: string
  readonly title: string
  readonly lead: string
  readonly highlights: readonly Highlight[]
}

/** 見出しの下に出る 3 行。長い自己紹介の代わり。 */
export const intro = [
  'Web のフロントエンドを書いています。',
  '最近はデザインシステム（riml-ds）と、その上に載るプロダクトを作っています。',
  'リズムゲームと、絵と、細かい UI の話が好きです。',
] as const

export const profileSections: readonly ProfileSection[] = [
  {
    id: 'making',
    title: 'いま作っているもの',
    lead: 'ひとつの見た目の基準を決めて、その上にプロダクトを並べていく、ということをしています。',
    highlights: [
      {
        label: 'riml-ds',
        detail:
          'トークン（W3C DTCG）と Lit の Web Components でできたデザインシステム。React / Vue / Svelte / Astro 向けのラッパーは Custom Elements Manifest から生成します。',
      },
      {
        label: 'qrcc',
        detail:
          'QR・バーコードの生成と読み取り、管理、印刷。TanStack Start と Rust（workers-rs）を Cloudflare Workers に載せています。',
      },
      {
        label: 'noter',
        detail: '簡易ノートアプリ。riml-ds の部品を最初に試す場所になっています。',
      },
    ],
  },
  {
    id: 'likes',
    title: '好きなもの',
    lead: '画面の外のこと。',
    highlights: [
      {
        label: 'リズムゲーム',
        detail:
          'CHUNITHM と maimai は虹レートまで。第 2 回ガルパ杯は二次予選（仙台）に出ました。BeatTube はプレイヤーランキング最大 5 位。',
      },
      {
        label: '動画',
        detail: 'VTuber の配信とアニメ。『転生したらスライムだった件』が一番好きです。',
      },
      {
        label: 'つくること',
        detail: 'Connect2019 優秀賞、校内ハッカソンで最優秀賞と企業賞をもらいました。',
      },
    ],
  },
] as const
