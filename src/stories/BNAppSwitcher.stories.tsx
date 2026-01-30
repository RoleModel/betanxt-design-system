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
    currentAppName: 'MIC Ops',
    children: (
      <>
        <BNAppSwitcher.Item key="MIC Ops" name="MIC Ops" component="a" href="#" />
        <BNAppSwitcher.Item
          key="MIC ReOrg"
          name="MIC ReOrg"
          component="button"
          onClick={() => console.log('MIC ReOrg button clicked')}
        />
      </>
    ),
  },
}
