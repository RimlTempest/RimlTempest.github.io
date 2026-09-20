import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CopyField } from './copy-field'

const meta = {
  title: 'components/CopyField',
  component: CopyField,
  parameters: { layout: 'centered' },
  args: { name: 'CHUNITHM', value: '1007302938635' },
} satisfies Meta<typeof CopyField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ShortCode: Story = {
  args: { name: 'ガルパ', value: '349329' },
}
