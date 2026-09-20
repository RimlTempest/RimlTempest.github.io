import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FacePicker } from './face-picker'

const meta = {
  title: 'components/FacePicker',
  component: FacePicker,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof FacePicker>

export default meta
type Story = StoryObj<typeof meta>

/** 既定。JavaScript を切っても矢印キーとクリックで切り替わる */
export const Default: Story = {}
