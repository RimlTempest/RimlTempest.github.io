import type { Preview } from '@storybook/nextjs-vite'
import '../src/styles/generated/riml-ds.css'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    // DESIGN.md の既定は AAA。story の段階で落とす
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast-enhanced', enabled: true },
          { id: 'target-size', enabled: true },
        ],
      },
    },
    backgrounds: { disable: true },
  },
  globalTypes: {
    scheme: {
      description: '配色',
      defaultValue: 'light',
      toolbar: {
        title: '配色',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'ライト' },
          { value: 'dark', title: 'ダーク' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        style={{
          colorScheme: context.globals['scheme'] === 'dark' ? 'dark' : 'light',
          background: 'var(--rd-color-surface-default)',
          color: 'var(--rd-color-text-default)',
          padding: 'var(--rd-space-6)',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
