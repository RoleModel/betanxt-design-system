import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { Notifications } from '@mui/icons-material'
import LogoutIconOutlined from '@mui/icons-material/LogoutOutlined'
import { IconButton } from '@mui/material'
import { Badge } from '@mui/material'

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
      <BNAppSwitcher currentAppName="MIC Ops">
        <>
          <BNAppSwitcher.Item key="MIC Ops" name="MIC Ops" component="a" href="#" />
          <BNAppSwitcher.Item
            key="Client Communications"
            name="Client Communications"
            component="a"
            href="#"
          />
          <BNAppSwitcher.Item
            key="MIC Wealth Manager"
            name="MIC Wealth Manager"
            component="button"
            onClick={() => console.log('MIC Wealth Manager button clicked')}
          />
        </>
      </BNAppSwitcher>
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
