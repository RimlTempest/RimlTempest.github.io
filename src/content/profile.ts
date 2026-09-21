/**
 * 自己紹介の中身。
 *
 * 出どころは本人の公開プロフィール（LAPRAS: https://lapras.com/public/Riml）と
 * GitHub のプロフィール、および登壇スライド・記事の公開ページ。
 * 推測は書かない。古くなったらここだけ直す。
 */

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

export type Talk = {
  readonly title: string
  /** どこで話したか */
  readonly event: string
  /** スライドの場所。公開していないものもある */
  readonly url?: string
}

export type Writing = {
  readonly title: string
  readonly where: string
  readonly url: string
  /** YYYY-MM。日まで出すほどの意味がない */
  readonly date: string
}

/** 見出しの下に出る 3 行。長い自己紹介の代わり。 */
export const intro = [
  'Web のフロントエンドを書いています。',
  '都内の上場企業でシニアエンジニア（マネージャー）として、フロントエンド組織の立ち上げとデザインシステムづくりをしています。',
  '個人でもデザインシステム（riml-ds）と、その上に載るプロダクトを作っています。',
] as const

/** いまの立ち位置。名刺に書くくらいのこと */
export const currentRole = {
  organization: '株式会社オプティム',
  title: 'シニアエンジニア（マネージャー）',
  location: 'Tokyo',
  /** 仕事でやっていること */
  duties: [
    'フロントエンド組織の立ち上げ',
    'デザインシステムの設計・構築',
    'フロントエンドアーキテクト',
    'チームマネジメント・メンバー育成',
  ],
  /** 声をかけてもらうときの前提 */
  availability: '転職は考えていません。副業を探しています。',
} as const

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
        label: 'DotArt',
        detail: 'ブラウザだけでドット絵を描くアプリ。',
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

/** 話したこと。新しい順 */
export const talks: readonly Talk[] = [
  {
    title:
      'デザインとエンジニアリングの架け橋を目指す OPTiM のデザインシステム「nucleus」の軌跡と広げ方',
    event: '2025 年 10 月・共同登壇',
    url: 'https://speakerdeck.com/optim/20251024-next-design-shimizu-takahashi',
  },
  {
    title: 'ポスタートーク',
    event: 'React Tokyo fes',
  },
  {
    title: 'メイントーク',
    event: 'React Tokyo ミートアップ #13',
  },
  {
    title: 'Cline に Next.js のプロジェクト改善をお願いしてみた',
    event: 'React Tokyo ミートアップ #3',
    url: 'https://speakerdeck.com/optim/20250321-reacttokyo-lt',
  },
  {
    title: 'Nuxt3 マイグレーションについて',
    event: 'Vue Fes Japan 2024 Pre LT Party',
    url: 'https://speakerdeck.com/optim/nuxt-migration',
  },
] as const

/** 書いたもの。新しい順 */
export const writings: readonly Writing[] = [
  {
    title: 'オプティムにおける Platform Engineering の現在地',
    where: 'OPTiM TECH BLOG',
    url: 'https://tech-blog.optim.co.jp/entry/2026/02/09/100000',
    date: '2026-02',
  },
  {
    title: 'Next.js でのロールベースアクセス制御の苦難',
    where: 'OPTiM TECH BLOG',
    url: 'https://tech-blog.optim.co.jp/entry/2026/01/28/100000',
    date: '2026-01',
  },
  {
    title: 'エンジニアが「ゆるっと同時視聴会」をやってみた',
    where: 'OPTiM TECH BLOG',
    url: 'https://tech-blog.optim.co.jp/entry/2025/06/17/100000',
    date: '2025-06',
  },
  {
    title: '他のリポジトリから submodule で一部ファイル、一部ディレクトリのみ取ってくる方法！',
    where: 'Zenn',
    url: 'https://zenn.dev/riml/articles/d1d427d35a3695',
    date: '2023-10',
  },
  {
    title: 'pnpm と ni を用いて Playwright で E2E テスト、VRT をする環境を整えよう',
    where: 'Zenn',
    url: 'https://zenn.dev/riml/articles/cfdc83ba3f7b7f',
    date: '2023-04',
  },
  {
    title: 'Next.js / React でスクロールすると現れる Header を実装する',
    where: 'Zenn',
    url: 'https://zenn.dev/riml/articles/31ce684d88f9ad',
    date: '2021-10',
  },
] as const

/** もっと読みたい人の行き先 */
export const profileLinks = [
  { label: 'Zenn', handle: 'zenn.dev/riml', url: 'https://zenn.dev/riml' },
  { label: 'LAPRAS', handle: 'lapras.com/public/Riml', url: 'https://lapras.com/public/Riml' },
  { label: 'connpass', handle: 'connpass.com/user/riml', url: 'https://connpass.com/user/riml' },
] as const
