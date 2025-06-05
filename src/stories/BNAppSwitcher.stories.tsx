import type { Meta, StoryObj } from '@storybook/react-vite'

import { BNAppSwitcher } from '../components/BNAppSwitcher'

const meta = {
  title: 'Custom Components/BNAppSwitcher',

  component: BNAppSwitcher,
} satisfies Meta<typeof BNAppSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    apps: [
      {
        title: 'MIC Ops',
        url: '#',
      },
      {
        title: 'Client Communications',
        url: '#',
      },
      {
        title: 'MIC Wealth Manager',
        url: '#',
      },
    ],
    currentAppTitle: 'MIC Ops',
    clientName: 'Client Name',
  },
}
