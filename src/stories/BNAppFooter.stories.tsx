import type { Meta, StoryObj } from '@storybook/react-vite'

import { BNAppFooter as BNAppFooterComponent } from '../components/BNAppFooter.js'

const meta: Meta<typeof BNAppFooterComponent> = {
  title: 'Custom Components/BNAppFooter',
  component: BNAppFooterComponent,
}

export default meta

type Story = StoryObj<typeof BNAppFooterComponent>

export const BNAppFooter: Story = {
  args: {
    logoEnabled: true,
    privacyPolicyLink: 'https://www.betanxt.com/privacy-policy',
    links: [
      {
        label: 'Link',
        href: '#',
      },
    ],
  },
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11768-144879&t=0OIY7acmhHOGDYU8-4',
    },
  },
}
export const BNAppFooterWithAdditionalCopyright: Story = {
  args: {
    logoEnabled: true,
    privacyPolicyLink: 'https://www.betanxt.com/privacy-policy',
    additionalCopyright: 'Additional Copyright',
    links: [
      {
        label: 'Link',
        href: '#',
      },
    ],
  },
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11768-144879&t=0OIY7acmhHOGDYU8-4',
    },
  },
}
