import type { Meta, StoryObj } from '@storybook/react-vite'

import LogoutIconOutlined from '@mui/icons-material/LogoutOutlined'
import PersonIconOutlined from '@mui/icons-material/PersonOutline'

import { BNAppSwitcher } from '../components/BNAppSwitcher'
import { BNLogo } from '../components/BNLogo'
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

const exampleAvatar = {
  src: 'https://untitledui.com/images/avatars/transparent/loki-bright',
  alt: 'User Avatar',
  children: 'US',
}

const exampleTabs = [
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
    tabs: exampleTabs,
    menuItems: [
      {
        label: 'Profile',
        onClick: () => {},
        divider: true,
        icon: <PersonIconOutlined />,
      },
      {
        label: 'Logout',
        onClick: () => {},
        icon: <LogoutIconOutlined />,
      },
    ],
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    tabs: exampleTabs,
    slots: {
      logoComponent: BNLogo,
    },
    slotProps: {
      logoComponent: {
        logoFill: 'var(--mui-palette-logoFill)',
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
    slots: {
      logoComponent: BNLogo,
    },
    slotProps: {
      logoComponent: {
        height: 30,
        href: '/',
        alt: 'Go Home',
        title: 'Home',
      },
    },
    tabs: exampleTabs,
    menuItems: [
      {
        label: 'Profile',
        onClick: () => {},
        divider: true,
        icon: <PersonIconOutlined />,
      },
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
        label: 'Profile',
        onClick: () => {},
        divider: true,
        icon: <PersonIconOutlined />,
      },
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
      {
        label: 'Profile',
        onClick: () => {},
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
