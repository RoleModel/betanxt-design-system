import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { Notifications } from '@mui/icons-material'
import LogoutIconOutlined from '@mui/icons-material/LogoutOutlined'
import { IconButton } from '@mui/material'
import { Badge } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

import { BNAppSwitcher } from '../components/BNAppSwitcher'
import { BNLogo } from '../components/BNLogo'
import BNAppBar from '../components/app-bar/BNAppBar'
import { MockLinkComponent } from './utils/MockLinkComponent'

const meta = {
  title: 'Custom Components/BNAppBar',
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['LinkComponent'],
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'secondary'],
    },
  },
  component: BNAppBar,
} satisfies Meta<typeof BNAppBar>

export default meta

type Story = StoryObj<typeof meta>

const exampleAvatar = {
  src: 'https://untitledui.com/images/avatars/transparent/loki-bright',
  alt: 'User Avatar',
  children: 'US',
}

const exampleTabs = [
  {
    label: 'Home',
    value: 'home',
    to: '/',
  },
  {
    label: 'About',
    value: 'about',
    to: '/about',
  },
]

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'App Title',
    color: 'primary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    slotProps: {
      logoComponent: {
        color: 'default',
        height: 32,
        href: '/',
      },
    },
    tabs: exampleTabs,
    menuItems: [
      {
        label: 'Logout',
        onClick: () => {},
        icon: <LogoutIconOutlined />,
      },
    ],
  },
}

const endSlot = () => {
  return (
    <IconButton>
      <Badge badgeContent={4} color="primary">
        <Notifications />
      </Badge>
    </IconButton>
  )
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    tabs: exampleTabs,
    slots: {
      logoComponent: BNLogo,
      end: endSlot,
    },
    slotProps: {
      logoComponent: {
        color: 'default', // Uses theme.vars.palette.logoFill
        height: 32,
        href: '/',
      },
    },
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

export const WithLogoComponent: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    color: 'primary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    slots: {
      logoComponent: BNLogo,
    },
    slotProps: {
      logoComponent: {
        color: 'white',
        height: 32,
        href: '/',
        alt: 'Go Home',
        title: 'Home',
      },
    },
    tabs: exampleTabs,
    menuSubheaderLabel: 'User Menu',
    menuItems: [
      {
        label: 'Logout',
        onClick: () => {},
        icon: <LogoutIconOutlined />,
      },
    ],
  },
}

export const WithLogoImg: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    color: 'primary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    slots: {
      logoImg: 'img',
    },
    slotProps: {
      logoImg: {
        src: '/company-logo.png',
        height: 44,
        alt: 'Go Home',
        title: 'Home',
      },
    },
    tabs: exampleTabs,
    menuItems: [
      {
        label: 'Logout',
        onClick: () => {},
        icon: <LogoutIconOutlined />,
      },
    ],
  },
}

export const WithAppSwitcher: Story = {
  args: {
    color: 'secondary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    tabs: exampleTabs,
    slots: {
      logoImg: 'img',
    },
    slotProps: {
      logoImg: {
        src: '/company-logo.svg',
        alt: 'BetaNXT Logo',
        crossOrigin: 'anonymous',
      },
    },
    menuItems: [
      {
        label: 'Logout',
        onClick: () => {},
        icon: <LogoutIconOutlined />,
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

/**
 * This story demonstrates React Router integration using the Link component.
 */
export const WithLinkComponent: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    color: 'primary',
    selectedTabValue: 'profile',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    tabs: [
      {
        label: 'Dashboard',
        value: 'dashboard',
        to: '/dashboard',
      },
      {
        label: 'Profile',
        value: 'profile',
        to: '/profile',
      },
      {
        label: 'Settings',
        value: 'settings',
        to: '/settings',
      },
    ],
    menuItems: [
      {
        label: 'Edit Profile',
        to: '/profile/edit',
      },
      {
        label: 'Account Settings',
        to: '/settings/account',
      },
      {
        label: 'Privacy Settings',
        to: '/settings/privacy',
        divider: true,
      },
      {
        label: 'Sign Out',
        onClick: () => {
          console.log('Sign out clicked')
          alert('Signing out...')
        },
        icon: <LogoutIconOutlined />,
      },
    ],
    slots: {
      logoComponent: BNLogo,
    },
    slotProps: {
      logoComponent: {
        color: 'white',
        height: 32,
        href: '/',
        alt: 'Go Home',
        title: 'Home',
      },
    },
  },
}

export const WithMenuSubheaderAndLongMenu: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'App Title',
    color: 'primary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    menuSubheaderLabel: 'User Menu',
    tabs: exampleTabs,
    menuItems: Array.from({ length: 10 })
      .map((_, i) => ({
        label: `Menu Item ${i + 1}`,
        onClick: () => {},
        dense: true,
      }))
      .concat([
        { divider: true } as any,
        { label: 'Sign Out', icon: <LogoutIconOutlined />, onClick: () => {} },
      ]),
  },
}

export const WithAppSwitcherAndMenuOffset: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    color: 'secondary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    tabs: exampleTabs,
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
    menuSubheaderLabel: 'User Menu',
    menuItems: [
      { label: 'Profile', to: '/profile' },
      { label: 'Settings', to: '/settings' },
      { divider: true } as any,
      { label: 'Sign Out', icon: <LogoutIconOutlined />, onClick: () => {} },
    ],
  },
}

export const WithThemeToggleInMenu: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'App Title',
    color: 'primary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    tabs: exampleTabs,
    includeThemeToggle: true,
    menuItems: [
      { label: 'Profile', to: '/profile' },
      { label: 'Settings', to: '/settings' },
      { divider: true } as any,
      { label: 'Logout', onClick: () => {}, icon: <LogoutIconOutlined /> },
    ],
  },
}

export const WithTabDropdownMenu: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'App Title',
    color: 'primary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    LinkComponent: MockLinkComponent,
    tabs: [
      ...exampleTabs,
      {
        label: 'Jobs',
        value: 'jobs',
        children: [
          { label: 'Proxy', to: '/proxy' },
          { label: 'Post Sale', to: '/post-sale' },
          { label: 'Regulatory', to: '/regulatory' },
          { label: 'Corporate Actions', to: '/corporate-actions' },
          { label: 'Bankruptcy', to: '/bankruptcy' },
        ],
      },
    ],
    menuItems: [
      { label: 'Account', to: '/account' },
      { divider: true } as any,
      { label: 'Logout', onClick: () => {}, icon: <LogoutIconOutlined /> },
    ],
  },
}
