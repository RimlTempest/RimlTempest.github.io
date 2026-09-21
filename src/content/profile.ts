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
  /** YYYY-MM */
  readonly date: string
  /** スライドかレポートの場所。どちらも無いものもある */
  readonly url?: string
  /** リンク先の名前。読み上げ名に入れる */
  readonly source?: string
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
    title: 'React で動画作成を試してみた！',
    event: 'React Tokyo ミートアップ #17',
    date: '2026-06',
    url: 'https://zenn.dev/react_tokyo/articles/2026-06-19-meetup-17',
    source: 'イベントレポート',
  },
  {
    title: 'ポスタートーク',
    event: 'React Tokyo フェス 2026',
    date: '2026-02',
  },
  {
    title: 'フロントエンド開発者のための「厄払い」（メイントーク）',
    event: 'React Tokyo ミートアップ #13',
    date: '2026-01',
    url: 'https://zenn.dev/react_tokyo/articles/2026-01-23-meetup-13',
    source: 'イベントレポート',
  },
  {
    title:
      'デザインとエンジニアリングの架け橋を目指す OPTiM のデザインシステム「nucleus」の軌跡と広げ方',
    event: '共同登壇',
    date: '2025-10',
    url: 'https://speakerdeck.com/optim/20251024-next-design-shimizu-takahashi',
    source: 'Speaker Deck',
  },
  {
    title: 'Cline に Next.js のプロジェクト改善をお願いしてみた',
    event: 'React Tokyo ミートアップ #3',
    date: '2025-03',
    url: 'https://speakerdeck.com/optim/20250321-reacttokyo-lt',
    source: 'Speaker Deck',
  },
  {
    title: 'Nuxt3 マイグレーションについて',
    event: 'Vue Fes Japan 2024 Pre LT Party',
    date: '2024-10',
    url: 'https://speakerdeck.com/optim/nuxt-migration',
    source: 'Speaker Deck',
  },
] as const

/**
 * 書いたもの。新しい順。
 *
 * 本人が書いた記事だけを置く。会社のブログには同僚が本人の登壇を紹介した記事も
 * あるが、それは「書いたもの」ではないので入れない。
 */
export const writings: readonly Writing[] = [
  {
    title: 'Next.js でのロールベースアクセス制御の苦難',
    where: 'OPTiM TECH BLOG',
    url: 'https://tech-blog.optim.co.jp/entry/2026/01/28/100000',
    date: '2026-01',
  },
  {
    title:
      'エンジニアが全社横断のイベント「一人一言でゲームを作る！？AI体験会」を企画から運営までやってみた',
    where: 'OPTiM TECH BLOG',
    url: 'https://tech-blog.optim.co.jp/entry/2025/07/22/100000',
    date: '2025-07',
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
