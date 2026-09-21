import type { Text } from './i18n'

export type SkillGroup = {
  readonly id: string
  readonly title: Text
  readonly note: Text
  /** 道具の名前は訳さない（固有名詞） */
  readonly items: readonly string[]
}

/**
 * 「学習率 ◯ %」をやめて、実際の使い方で 3 つに分けた。
 * 数字はどこにも根拠が無く、更新もされないので置かない。
 */
export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'daily',
    title: { ja: '毎日さわる', en: 'Every day' },
    note: {
      ja: '仕事でも個人でも、まずこれを開く。',
      en: 'The first thing I open, at work and at home.',
    },
    items: ['TypeScript', 'React', 'Next.js', 'CSS', 'HTML'],
  },
  {
    id: 'often',
    title: { ja: 'よく書く', en: 'Often' },
    note: {
      ja: '必要になったら手が動く範囲。',
      en: 'My hands know these when the job calls for them.',
    },
    items: [
      'Lit / Web Components',
      'Vue.js / Nuxt',
      'Astro',
      'TanStack Start',
      'Bun',
      'Node.js',
      'Cloudflare Workers / D1',
      'Storybook',
      'Playwright',
      'GitHub Actions',
    ],
  },
  {
    id: 'touched',
    title: { ja: 'ためした', en: 'Tried' },
    note: {
      ja: '動くところまでは作った、というくらい。',
      en: 'Far enough to get something running.',
    },
    items: ['Rust', 'Go', 'Python', 'Swift', 'C#', 'Dart / Flutter', 'Laravel / PHP', 'Nix'],
  },
] as const
