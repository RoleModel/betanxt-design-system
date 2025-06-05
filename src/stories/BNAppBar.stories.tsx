import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'

import BNAppBar from '../components/app-bar/BNAppBar'
import { BNAppSwitcher } from '../components/BNAppSwitcher'

const meta = {
  title: 'Custom Components/BNAppBar',
  parameters: {
    layout: 'fullscreen',
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
        label: 'Logout',
        onClick: () => {},
        icon: <LogoutIcon />,
      },
      {
        label: 'Profile',
        onClick: () => {},
        icon: <PersonIcon />,
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
        onClick: () => {},
        icon: <LogoutIcon />,
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
        onClick: () => {},
        icon: <LogoutIcon />,
      },
    ],
    children: <BNAppSwitcher apps={[{title: 'MIC Ops', url: '#'}, {title: 'Client Communications', url: '#'}, {title: 'MIC Wealth Manager', url: '#'}]} currentAppTitle="MIC Ops" clientName="Client Name" />,
  },
}
