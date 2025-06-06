import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import PersonIconOutlined from '@mui/icons-material/PersonOutline'
import LogoutIconOutlined from '@mui/icons-material/LogoutOutlined'

import { BNAppSwitcher } from '../components/BNAppSwitcher'
import BNAppBar from '../components/app-bar/BNAppBar'

const meta = {
  title: 'Custom Components/BNAppBar',
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['tabLinkComponent'],
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
  component: BNAppBar,
} satisfies Meta<typeof BNAppBar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'App Title',
    color: 'primary',
    selectedTabValue: 'home',
    avatar: {
      src: 'https://untitledui.com/images/avatars/transparent/loki-bright',
      alt: 'User Avatar',
      children: 'US',
    },
    tabs: [
      {
        label: 'Home',
        value: 'home',
        href: '/',
      },
      {
        label: 'About',
        value: 'about',
        href: '/',
      },
    ],
    menuItems: [
      {
        label: 'Profile',
        onClick: () => { },
        divider: true,
        icon: <PersonIconOutlined />,
      },
      {
        label: 'Logout',
        onClick: () => { },
        icon: <LogoutIconOutlined />,
      },
    ],
  },
}

export const Secondary: Story = {
  args: {
    logoUrl: '/company-logo.svg',
    logoAlt: 'BetaNXT Logo',
    color: 'secondary',
    selectedTabValue: 'home',
    avatar: {
      src: 'https://untitledui.com/images/avatars/transparent/loki-bright',
      alt: 'User Avatar',
      children: 'US',
    },
    tabs: [
      {
        label: 'Home',
        value: 'home',
        href: '/',
      },
      {
        label: 'About',
        value: 'about',
        href: '/',
      },
    ],
    menuItems: [
      {
        label: 'Logout',
        onClick: () => {
          window.alert('Logout')
        },
        icon: <LogoutIconOutlined />,
        dense: true,
      },
    ],
  },
}

export const WithAppSwitcher: Story = {
  args: {
    logoUrl: '/company-logo.svg',
    logoAlt: 'BetaNXT Logo',
    color: 'secondary',
    selectedTabValue: 'home',
    avatar: {
      src: 'https://untitledui.com/images/avatars/transparent/loki-bright',
      alt: 'User Avatar',
      children: 'US',
    },
    tabs: [
      {
        label: 'Home',
        value: 'home',
        href: '/',
      },
      {
        label: 'About',
        value: 'about',
        href: '/',
      },
    ],
    menuItems: [
      {
        label: 'Logout',
        onClick: () => { },
        icon: <LogoutIconOutlined />,
      },
      {
        label: 'Profile',
        onClick: () => { },
        icon: <PersonIconOutlined />,
      },
    ],
    children: (
      <BNAppSwitcher
        apps={[
          { title: 'MIC Ops', url: '#' },
          { title: 'Client Communications', url: '#' },
          { title: 'MIC Wealth Manager', url: '#' },
        ]}
        currentAppTitle="MIC Ops"
        clientName="Client Name"
      />
    ),
  },
}
