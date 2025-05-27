import type { Meta, StoryObj } from '@storybook/react'

import StatCard from '../components/StatCard'

const meta = {
  title: 'Custom Components/StatCard',
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
  component: StatCard,
} satisfies Meta<typeof StatCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'StatCard Title',
    total: 50,
    link: 'link',
    direction: 'row',
    linkText: 'Click to another location',
    secondaryColor: false,
  },
}
