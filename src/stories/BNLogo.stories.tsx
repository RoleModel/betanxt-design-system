import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { BNLogo } from '../components/BNLogo'

const meta: Meta<typeof BNLogo> = {
  title: 'Custom Components/BNLogo',
  component: BNLogo,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=6557-38545&t=3M0Qvar3GoQ4zIgG-4',
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'white'],
    },
  },
  args: {
    color: 'default',
    height: 40,
    alt: 'BetaNXT',
    title: 'BetaNXT',
    href: 'https://betanxt.com',
    role: 'img',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'default',
    height: 44,
    role: '',
    showPoweredBy: false,
    decorative: true,
    tabIndex: 0,
  },
  render: (args) => <BNLogo {...args} />,
}
