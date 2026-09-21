/**
 * 自己紹介の中身。
 *
 * 出どころは本人の公開プロフィール（LAPRAS: https://lapras.com/public/Riml）と
 * GitHub のプロフィール、および登壇スライド・イベントレポート・記事の公開ページ。
 * 推測は書かない。古くなったらここだけ直す。
 *
 * 登壇タイトルと記事タイトルは日本語で公開されているものなので、英語版でもそのまま置く。
 * 翻訳すると「実在しない題名」になってしまうため。
 */
import type { Text, TextList } from './i18n'

export type Highlight = {
  readonly label: Text
  readonly detail: Text
}

export type ProfileSection = {
  readonly id: string
  readonly title: Text
  readonly lead: Text
  readonly highlights: readonly Highlight[]
}

export type Talk = {
  /** 公開されている題名。訳さない */
  readonly title: string
  /** どこで話したか */
  readonly event: Text
  /** YYYY-MM */
  readonly date: string
  /** スライドかレポートの場所。どちらも無いものもある */
  readonly url?: string
  /** リンク先の名前。読み上げ名に入れる */
  readonly source?: Text
}

export type Writing = {
  /** 公開されている題名。訳さない */
  readonly title: string
  readonly where: string
  readonly url: string
  /** YYYY-MM。日まで出すほどの意味がない */
  readonly date: string
}

/** 見出しの下に出る 3 行。長い自己紹介の代わり。 */
export const intro: TextList = {
  ja: [
    'Web のフロントエンドを書いています。',
    '都内の上場企業でシニアエンジニア（マネージャー）として、フロントエンド組織の立ち上げとデザインシステムづくりをしています。',
    '個人でもデザインシステム（riml-ds）と、その上に載るプロダクトを作っています。',
  ],
  en: [
    'I write frontends for the web.',
    'At a listed company in Tokyo I work as a senior engineer and manager, building up a frontend organisation and its design system.',
    'On my own time I build a design system (riml-ds) and the products that sit on it.',
  ],
}

/** いまの立ち位置。名刺に書くくらいのこと */
export const currentRole = {
  organization: { ja: '株式会社オプティム', en: 'OPTiM Corporation' },
  title: {
    ja: 'シニアエンジニア（マネージャー）',
    en: 'Senior engineer (manager)',
  },
  location: { ja: '東京', en: 'Tokyo' },
  /** 仕事でやっていること */
  duties: [
    { ja: 'フロントエンド組織の立ち上げ', en: 'Starting up a frontend organisation' },
    { ja: 'デザインシステムの設計・構築', en: 'Designing and building a design system' },
    { ja: 'フロントエンドアーキテクト', en: 'Frontend architecture' },
    { ja: 'チームマネジメント・メンバー育成', en: 'Team management and mentoring' },
  ],
  /** 声をかけてもらうときの前提 */
  availability: {
    ja: '転職は考えていません。副業を探しています。',
    en: 'Not looking to change jobs. Open to side work.',
  },
} as const

export const profileSections: readonly ProfileSection[] = [
  {
    id: 'likes',
    title: { ja: '好きなもの', en: 'Things I like' },
    lead: { ja: '画面の外のこと。', en: 'Away from the screen.' },
    highlights: [
      {
        label: { ja: 'リズムゲーム', en: 'Rhythm games' },
        detail: {
          ja: 'CHUNITHM と maimai は虹レートまで。第 2 回ガルパ杯は二次予選（仙台）に出ました。BeatTube はプレイヤーランキング最大 5 位。',
          en: 'Rainbow rate in CHUNITHM and maimai. Reached the second qualifier (Sendai) of the 2nd Garupa Cup. Peaked at 5th on the BeatTube player ranking.',
        },
      },
      {
        label: { ja: '動画', en: 'Video' },
        detail: {
          ja: 'VTuber の配信とアニメ。『転生したらスライムだった件』が一番好きです。',
          en: 'VTuber streams and anime. That Time I Got Reincarnated as a Slime is my favourite.',
        },
      },
      {
        label: { ja: 'つくること', en: 'Making things' },
        detail: {
          ja: 'Connect2019 優秀賞、校内ハッカソンで最優秀賞と企業賞をもらいました。',
          en: 'Excellence Award at Connect2019; grand prize and a company prize at a school hackathon.',
        },
      },
    ],
  },
] as const

const speakerDeck: Text = { ja: 'Speaker Deck', en: 'Speaker Deck' }
const eventReport: Text = { ja: 'イベントレポート', en: 'event report' }

/** 話したこと。新しい順 */
export const talks: readonly Talk[] = [
  {
    title: 'React で動画作成を試してみた！',
    event: { ja: 'React Tokyo ミートアップ #17', en: 'React Tokyo Meetup #17' },
    date: '2026-06',
    url: 'https://zenn.dev/react_tokyo/articles/2026-06-19-meetup-17',
    source: eventReport,
  },
  {
    title: 'ポスタートーク',
    event: { ja: 'React Tokyo フェス 2026', en: 'React Tokyo Fes 2026' },
    date: '2026-02',
  },
  {
    title: 'フロントエンド開発者のための「厄払い」（メイントーク）',
    event: { ja: 'React Tokyo ミートアップ #13', en: 'React Tokyo Meetup #13' },
    date: '2026-01',
    url: 'https://zenn.dev/react_tokyo/articles/2026-01-23-meetup-13',
    source: eventReport,
  },
  {
    title:
      'デザインとエンジニアリングの架け橋を目指す OPTiM のデザインシステム「nucleus」の軌跡と広げ方',
    event: { ja: '共同登壇', en: 'Co-presented' },
    date: '2025-10',
    url: 'https://speakerdeck.com/optim/20251024-next-design-shimizu-takahashi',
    source: speakerDeck,
  },
  {
    title: 'Cline に Next.js のプロジェクト改善をお願いしてみた',
    event: { ja: 'React Tokyo ミートアップ #3', en: 'React Tokyo Meetup #3' },
    date: '2025-03',
    url: 'https://speakerdeck.com/optim/20250321-reacttokyo-lt',
    source: speakerDeck,
  },
  {
    title: 'Nuxt3 マイグレーションについて',
    event: { ja: 'Vue Fes Japan 2024 Pre LT Party', en: 'Vue Fes Japan 2024 Pre LT Party' },
    date: '2024-10',
    url: 'https://speakerdeck.com/optim/nuxt-migration',
    source: speakerDeck,
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
