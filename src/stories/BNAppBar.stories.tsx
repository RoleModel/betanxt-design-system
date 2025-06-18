import type { Meta, StoryObj } from '@storybook/react-vite'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

import LogoutIconOutlined from '@mui/icons-material/LogoutOutlined'

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
    to: '/',
  },
  {
    label: 'About',
    value: 'about',
    href: '/',
    to: '/',
  },
]

// Mock Link component for React Router demonstration
const MockLinkComponent = ({ to, children, ...props }: any) => (
  <a
    {...props}
    href={to}
    onClick={(e) => {
      e.preventDefault()
      console.log('Navigate to:', to)
      // In Storybook with the addon, this would actually navigate
      window.history.pushState({}, '', to)
    }}
  >
    {children}
  </a>
)

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'App Title',
    color: 'primary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    tabLinkComponent: MockLinkComponent,
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

export const Secondary: Story = {
  args: {
    color: 'secondary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    tabLinkComponent: MockLinkComponent,
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
    tabLinkComponent: MockLinkComponent,
    slots: {
      logoComponent: BNLogo,
    },
    slotProps: {
      logoComponent: {
        height: 32,
        href: '/',
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

export const WithLogoImg: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    color: 'primary',
    selectedTabValue: 'home',
    avatar: exampleAvatar,
    tabLinkComponent: MockLinkComponent,
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
    tabLinkComponent: MockLinkComponent,
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
 * The storybook-addon-remix-react-router provides the React Router context.
 */
export const WithReactRouterLinkComponent: Story = {
  parameters: {
    layout: 'fullscreen',
    reactRouter: reactRouterParameters({
      routing: { path: '/profile' },
    }),
  },
  decorators: [withRouter],
  args: {
    color: 'primary',
    selectedTabValue: 'profile',
    avatar: exampleAvatar,
    tabLinkComponent: MockLinkComponent,
    menuItemLinkComponent: MockLinkComponent,
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
        height: 32,
        href: '/',
        alt: 'Go Home',
        title: 'Home',
      },
    },
  },
}
