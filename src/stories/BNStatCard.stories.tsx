import type { Meta, StoryObj } from '@storybook/react-vite'

import { BNStatCard } from '../components/BNStatCard'

const meta = {
  title: 'Custom Components/BNStatCard',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A card that displays a title, total, and link. Use this card draw attention to a specific metric or statistic.',
      },
    },
  },
  argTypes: {
    direction: {
      description:
        'The direction of the card. Use `row` for a horizontal card and `column` for a vertical card.',
      control: 'select',
      options: ['row', 'column'],
    },
  },
  component: BNStatCard,
} satisfies Meta<typeof BNStatCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'BNStatCard Title',
    total: 50,
    link: 'link',
    direction: 'row',
    linkText: 'Click to another location',
    secondaryColor: false,
  },
}
