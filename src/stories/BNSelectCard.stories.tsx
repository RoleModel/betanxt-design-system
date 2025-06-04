import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import { Stack } from '@mui/material'

import { BNSelectCard } from '../components/BNSelectCard'

const meta = {
  title: 'Custom Components/BNSelectCard',
  component: BNSelectCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A card that displays a title and icon with selectable state. When clicked, it applies a data-selected attribute and visual styling.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    selected: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof BNSelectCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Select Card',
    direction: 'row',
    selected: false,
    action: () => {},
    icon: <AssignmentTurnedInOutlinedIcon sx={{ color: 'secondary.main' }} />,
  },
}

export const Interactive: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(false)

    return (
      <BNSelectCard {...args} selected={selected} action={() => setSelected(!selected)} />
    )
  },
  args: {
    text: 'Click to Select',
    direction: 'row',
    selected: false,
    action: () => {},
    icon: <AssignmentTurnedInOutlinedIcon sx={{ color: 'secondary.main' }} />,
  },
}

export const MultipleCards: Story = {
  render: (args) => {
    const [selectedCard, setSelectedCard] = useState<string | null>(null)

    const cards = [
      { id: 'card1', text: 'Option 1' },
      { id: 'card2', text: 'Option 2' },
      { id: 'card3', text: 'Option 3' },
    ]

    return (
      <Stack spacing={2} direction={'row'}>
        {cards.map((card) => (
          <BNSelectCard
            key={card.id}
            text={card.text}
            direction={args.direction}
            icon={args.icon}
            selected={selectedCard === card.id}
            action={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
          />
        ))}
      </Stack>
    )
  },
  args: {
    text: 'Select Card',
    direction: 'row',
    selected: false,
    action: () => {},
    icon: <AssignmentTurnedInOutlinedIcon sx={{ color: 'secondary.main' }} />,
  },
}
