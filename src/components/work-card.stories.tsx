import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { Work } from '@/content/works'
import { WorkCard } from './work-card'

/** story は実データに引きずられないよう、ここで固定の見本を持つ */
const sample: Work = {
  slug: 'sample',
  name: 'sample-app',
  summary: {
    ja: 'カードの見た目を確かめるための見本です。',
    en: 'A sample for checking how the card looks.',
  },
  body: { ja: ['詳細ページ用の本文。'], en: ['Body text for the detail page.'] },
  status: 'live',
  stack: ['TypeScript', 'Next.js'],
  siteUrl: 'https://example.com',
  repoUrl: 'https://github.com/example/sample',
}

const meta = {
  title: 'components/WorkCard',
  component: WorkCard,
  parameters: { layout: 'centered' },
  args: { work: sample, locale: 'ja' },
} satisfies Meta<typeof WorkCard>

export default meta
type Story = StoryObj<typeof meta>

export const Live: Story = {}

export const English: Story = {
  args: { locale: 'en' },
}

export const Building: Story = {
  args: { work: { ...sample, status: 'building' } },
}

export const Archived: Story = {
  args: { work: { ...sample, status: 'archived' } },
}

/** 公開先もリポジトリも無い場合。「くわしく」だけが残る */
export const Private: Story = {
  args: {
    work: {
      slug: sample.slug,
      name: sample.name,
      summary: sample.summary,
      body: sample.body,
      status: 'private',
      stack: sample.stack,
    },
  },
}

/** 長い要約と多いスタックでも高さが揃う */
export const Dense: Story = {
  args: {
    work: {
      ...sample,
      summary: {
        ja: '要約が長いときの折り返しを見るための文です。カードの高さは grid-template-rows で揃うので、並べたときに下端がずれません。',
        en: 'A long summary, to see how it wraps. The cards line up along the bottom because their height comes from grid-template-rows.',
      },
      stack: ['TypeScript', 'Next.js', 'React', 'CSS Modules', 'Bun', 'Storybook'],
    },
  },
}
