import type { Text, TextList } from './i18n'

export type WorkStatus = 'live' | 'building' | 'archived' | 'private'

export type Work = {
  /** URL に出る識別子。旧サイトの /work/<slug> を引き継ぐ */
  readonly slug: string
  /** 製品名は訳さない */
  readonly name: string
  readonly summary: Text
  readonly body: TextList
  readonly status: WorkStatus
  /** 技術の名前は訳さない */
  readonly stack: readonly string[]
  readonly siteUrl?: string
  readonly repoUrl?: string
  /** public/ からの相対パス。無ければ頭文字のプレースホルダを描く */
  readonly image?: string
}

export const works: readonly Work[] = [
  {
    slug: 'riml-ds',
    name: 'riml-ds',
    summary: {
      ja: 'qrcc と noter が共有するデザインシステムとコンポーネントライブラリ。',
      en: 'The design system and component library that qrcc and noter share.',
    },
    body: {
      ja: [
        '色・寸法・時間を W3C DTCG のトークンで定義し、そこから CSS 変数と TypeScript の定数を生成します。見た目の正はコードで、Figma は使いません。',
        '部品は Lit の Web Components が唯一のソース。React / Vue / Svelte / Astro 向けのラッパーは Custom Elements Manifest から生成するので、手で書いたラッパーがずれることがありません。',
        'WCAG 2.2 の AAA を既定にしていて、コントラスト 7:1 とターゲット 44×44 は機械で検査しています。',
      ],
      en: [
        'Color, size and duration are defined as W3C DTCG tokens, and the CSS variables and TypeScript constants are generated from them. Code is the source of truth for how things look — there is no Figma file.',
        'Lit Web Components are the single source for the components themselves. The React, Vue, Svelte and Astro wrappers are generated from the Custom Elements Manifest, so no hand-written wrapper can drift out of step.',
        'WCAG 2.2 AAA is the default, and the 7:1 contrast and 44×44 target rules are checked by machine.',
      ],
    },
    status: 'building',
    stack: ['TypeScript', 'Lit', 'Terrazzo', 'Bun', 'Storybook'],
    repoUrl: 'https://github.com/RimlTempest/riml-ds',
  },
  {
    slug: 'QRCC',
    name: 'qrcc',
    summary: {
      ja: 'QR コードとバーコードの生成・読み取り・管理・印刷。',
      en: 'Generate, read, manage and print QR codes and barcodes.',
    },
    body: {
      ja: [
        'QR コードを手早く作って読むための道具です。最初は Gatsby の学習として作り、いまは TanStack Start（RSC）と Rust（workers-rs）で書き直しています。',
        'Cloudflare Workers の無料枠で動かしきることを条件にしています。',
      ],
      en: [
        'A tool for making and reading QR codes quickly. It started as a way to learn Gatsby; it is now being rewritten on TanStack Start (RSC) and Rust (workers-rs).',
        'The rule I set myself: it has to run entirely inside the Cloudflare Workers free tier.',
      ],
    },
    status: 'live',
    stack: ['TanStack Start', 'Rust / workers-rs', 'Cloudflare Workers'],
    siteUrl: 'https://qrcc.riml.work',
    repoUrl: 'https://github.com/RimlTempest/qrcc2',
  },
  {
    slug: 'DotArt',
    name: 'DotArt',
    summary: {
      ja: 'ブラウザだけでドット絵を描くアプリ。',
      en: 'Draw pixel art with nothing but a browser.',
    },
    body: {
      ja: [
        'インストールも登録もなしに、開いたらすぐ描けるドット絵エディタです。',
        'パレットとキャンバスの操作をどこまで小さくできるかを試した場所でもあります。',
      ],
      en: [
        'A pixel art editor you can draw in the moment it opens. No install, no sign-up.',
        'It was also where I found out how small the palette and canvas controls could get.',
      ],
    },
    status: 'live',
    stack: ['Nuxt.js', 'TypeScript', 'Canvas'],
    siteUrl: 'https://dotart.riml.work',
    repoUrl: 'https://github.com/RimlTempest/dotart',
  },
  {
    slug: 'Noter',
    name: 'noter',
    summary: {
      ja: '書き捨てから清書までを 1 枚で扱う簡易ノートアプリ。',
      en: 'A small notes app that takes a page from scribble to fair copy.',
    },
    body: {
      ja: [
        '思いついたことを置いておく場所が欲しくて作りました。',
        'riml-ds の部品を最初に載せる相手でもあります。',
      ],
      en: [
        'I wanted somewhere to put things down as I thought of them.',
        'It is also the first place riml-ds components get used for real.',
      ],
    },
    status: 'building',
    stack: ['TypeScript', 'riml-ds'],
    repoUrl: 'https://github.com/RimlTempest/Noter',
  },
  {
    slug: 'Nextx',
    name: 'Nextx',
    summary: {
      ja: 'Next.js を始める人のためのテンプレート。',
      en: 'A starting template for people new to Next.js.',
    },
    body: {
      ja: [
        'Next.js と TypeScript の構成を、はじめて触る人が読んで分かる形で置いたテンプレートです。',
        '設定をただ並べるのではなく、なぜその設定なのかを書き残すことを目指しました。',
      ],
      en: [
        'A Next.js and TypeScript setup laid out so that someone meeting it for the first time can read it.',
        'The aim was to record why each setting is there, not just list them.',
      ],
    },
    status: 'archived',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/RimlTempest/nextx',
  },
  {
    slug: 'StampApp',
    name: 'StampApp',
    summary: {
      ja: 'Dart / Flutter で作ったスタンプアプリのひな形。',
      en: 'A stamp-card app skeleton built with Dart and Flutter.',
    },
    body: {
      ja: [
        'スタンプカードのアプリを、テンプレートとして使い回せる形にしたものです。',
        '現在リポジトリは非公開にしています。',
      ],
      en: [
        'A stamp-card app shaped so it can be reused as a template.',
        'The repository is private at the moment.',
      ],
    },
    status: 'private',
    stack: ['Dart', 'Flutter'],
  },
] as const

export const statusLabel: Readonly<Record<WorkStatus, Text>> = {
  live: { ja: '公開中', en: 'Live' },
  building: { ja: '制作中', en: 'Building' },
  archived: { ja: '更新停止', en: 'Archived' },
  private: { ja: '非公開', en: 'Private' },
}

export function findWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug)
}
