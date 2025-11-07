import type { Meta, StoryObj } from '@storybook/react-vite'

import { Start } from '@mui/icons-material'
import { Divider, Link, MenuItem, Tab, Tabs, Typography } from '@mui/material'

import { BNLogo } from '../BNLogo'
import BNAppHeader from './BNAppHeader'

const meta = {
  title: 'Custom Components/BNAppHeader',
  component: BNAppHeader,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BNAppHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <BNAppHeader>
      <BNAppHeader.Toolbar>
        <BNAppHeader.Section>
          <BNAppHeader.Logo src="/company-logo.png" />
          <BNAppHeader.Title>My App</BNAppHeader.Title>
        </BNAppHeader.Section>
        <BNAppHeader.Section>
          <BNAppHeader.Tabs value="home">
            <BNAppHeader.Tab label="Home" value="home" LinkComponent="a" href="#" />
            <BNAppHeader.Tab label="More" value="more" LinkComponent="a" href="#" />
          </BNAppHeader.Tabs>
        </BNAppHeader.Section>
      </BNAppHeader.Toolbar>
    </BNAppHeader>
  ),
}

export const WithSVGLogo: Story = {
  render: () => (
    <BNAppHeader>
      <BNAppHeader.Toolbar>
        <BNAppHeader.Section>
          <BNAppHeader.Logo src="/company-logo.svg" />
        </BNAppHeader.Section>
      </BNAppHeader.Toolbar>
    </BNAppHeader>
  ),
}

export const WithBNLogo: Story = {
  render: () => (
    <BNAppHeader>
      <BNAppHeader.Toolbar>
        <BNLogo />
      </BNAppHeader.Toolbar>
    </BNAppHeader>
  ),
}

export const WithControlBar: Story = {
  render: () => (
    <BNAppHeader>
      <BNAppHeader.ControlBar>
        <Typography>Client Name</Typography>
      </BNAppHeader.ControlBar>
      <BNAppHeader.Toolbar>
        <BNAppHeader.Section>
          <BNAppHeader.Logo src="/company-logo.png" />
        </BNAppHeader.Section>
      </BNAppHeader.Toolbar>
    </BNAppHeader>
  ),
}
