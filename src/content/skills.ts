export type SkillGroup = {
  readonly id: string
  readonly title: string
  readonly note: string
  readonly items: readonly string[]
}

/**
 * 「学習率 ◯ %」をやめて、実際の使い方で 3 つに分けた。
 * 数字はどこにも根拠が無く、更新もされないので置かない。
 */
export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'daily',
    title: '毎日さわる',
    note: '仕事でも個人でも、まずこれを開く。',
    items: ['TypeScript', 'React', 'Next.js', 'CSS', 'HTML'],
  },
  {
    id: 'often',
    title: 'よく書く',
    note: '必要になったら手が動く範囲。',
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
    title: 'ためした',
    note: '動くところまでは作った、というくらい。',
    items: ['Rust', 'Go', 'Python', 'Swift', 'C#', 'Dart / Flutter', 'Laravel / PHP', 'Nix'],
  },
] as const
