import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { WindowPanel } from './window-panel'

const meta = {
  title: 'components/WindowPanel',
  component: WindowPanel,
  parameters: { layout: 'centered' },
  args: {
    title: 'まど',
    children: <p>帯と本体でできた器。riml-ds の .rd-window をそのまま使う。</p>,
  },
} satisfies Meta<typeof WindowPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLead: Story = {
  args: { lead: '帯の下に 1 行だけ補足を置ける。' },
}

/** 帯は 1 行で省略される。長い見出しを付けない指標にする */
export const LongTitle: Story = {
  args: { title: 'とても長い見出しは帯のなかで省略される' },
}
