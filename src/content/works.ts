export type WorkStatus = 'live' | 'building' | 'archived' | 'private'

export type Work = {
  /** URL に出る識別子。旧サイトの /work/<slug> を引き継ぐ */
  readonly slug: string
  readonly name: string
  readonly summary: string
  readonly body: readonly string[]
  readonly status: WorkStatus
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
    summary: 'qrcc と noter が共有するデザインシステムとコンポーネントライブラリ。',
    body: [
      '色・寸法・時間を W3C DTCG のトークンで定義し、そこから CSS 変数と TypeScript の定数を生成します。見た目の正はコードで、Figma は使いません。',
      '部品は Lit の Web Components が唯一のソース。React / Vue / Svelte / Astro 向けのラッパーは Custom Elements Manifest から生成するので、手で書いたラッパーがずれることがありません。',
      'WCAG 2.2 の AAA を既定にしていて、コントラスト 7:1 とターゲット 44×44 は機械で検査しています。',
    ],
    status: 'building',
    stack: ['TypeScript', 'Lit', 'Terrazzo', 'Bun', 'Storybook'],
    repoUrl: 'https://github.com/RimlTempest/riml-ds',
  },
  {
    slug: 'QRCC',
    name: 'qrcc',
    summary: 'QR コードとバーコードの生成・読み取り・管理・印刷。',
    body: [
      'QR コードを手早く作って読むための道具です。最初は Gatsby の学習として作り、いまは TanStack Start（RSC）と Rust（workers-rs）で書き直しています。',
      'Cloudflare Workers の無料枠で動かしきることを条件にしています。',
    ],
    status: 'live',
    stack: ['TanStack Start', 'Rust / workers-rs', 'Cloudflare Workers'],
    siteUrl: 'https://qrcc.riml.work',
    repoUrl: 'https://github.com/RimlTempest/qrcc2',
  },
  {
    slug: 'DotArt',
    name: 'DotArt',
    summary: 'ブラウザだけでドット絵を描くアプリ。',
    body: [
      'インストールも登録もなしに、開いたらすぐ描けるドット絵エディタです。',
      'パレットとキャンバスの操作をどこまで小さくできるかを試した場所でもあります。',
    ],
    status: 'live',
    stack: ['Nuxt.js', 'TypeScript', 'Canvas'],
    siteUrl: 'https://dotart.riml.work',
    repoUrl: 'https://github.com/RimlTempest/dotart',
  },
  {
    slug: 'Noter',
    name: 'noter',
    summary: '書き捨てから清書までを 1 枚で扱う簡易ノートアプリ。',
    body: [
      '思いついたことを置いておく場所が欲しくて作りました。',
      'riml-ds の部品を最初に載せる相手でもあります。',
    ],
    status: 'building',
    stack: ['TypeScript', 'riml-ds'],
    repoUrl: 'https://github.com/RimlTempest/Noter',
  },
  {
    slug: 'Nextx',
    name: 'Nextx',
    summary: 'Next.js を始める人のためのテンプレート。',
    body: [
      'Next.js と TypeScript の構成を、はじめて触る人が読んで分かる形で置いたテンプレートです。',
      '設定をただ並べるのではなく、なぜその設定なのかを書き残すことを目指しました。',
    ],
    status: 'archived',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/RimlTempest/nextx',
  },
  {
    slug: 'StampApp',
    name: 'StampApp',
    summary: 'Dart / Flutter で作ったスタンプアプリのひな形。',
    body: [
      'スタンプカードのアプリを、テンプレートとして使い回せる形にしたものです。',
      '現在リポジトリは非公開にしています。',
    ],
    status: 'private',
    stack: ['Dart', 'Flutter'],
  },
] as const

export const statusLabel: Readonly<Record<WorkStatus, string>> = {
  live: '公開中',
  building: '制作中',
  archived: '更新停止',
  private: '非公開',
}

export function findWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug)
}
