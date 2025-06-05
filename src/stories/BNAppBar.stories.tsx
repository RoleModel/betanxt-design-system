import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'

import { BNAnimatedMenuIcon } from '../components/app-bar/BNAnimatedMenuIcon'
import BNAppBar from '../components/app-bar/BNAppBar'
import { BNAppBarDrawer } from '../components/app-bar/BNAppBarDrawer'

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
  subcomponents: {
    BNAppBarDrawer: BNAppBarDrawer as any,
    BNAnimatedMenuIcon: BNAnimatedMenuIcon as any,
  },
} satisfies Meta<typeof BNAppBar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'BNAppBar',
    color: 'primary',
    position: 'static',
    selectedTabValue: 'home',
    avatarSrc: 'https://untitledui.com/images/avatars/transparent/loki-bright',
    avatarAlt: 'User Avatar',
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
    position: 'static',
    logoUrl: '/company-logo.svg',
    logoAlt: 'BetaNXT Logo',
    color: 'secondary',
    selectedTabValue: 'home',
    avatarSrc: 'https://untitledui.com/images/avatars/transparent/loki-bright',
    avatarAlt: 'User Avatar',
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
