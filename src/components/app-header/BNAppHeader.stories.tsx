import type { Meta, StoryObj } from '@storybook/react-vite'

import { Start } from '@mui/icons-material'
import LogoutIconOutlined from '@mui/icons-material/LogoutOutlined'
import {
  Divider,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material'

import { BNLogo } from '../BNLogo'
import AvatarMenu from './AvatarMenu'
import BNAppHeader from './BNAppHeader'
import { ThemeToggle } from './ThemeToggle'

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
        <BNAppHeader.DesktopOnlySection>
          <BNAppHeader.Section>
            <BNAppHeader.Tabs value="home">
              <BNAppHeader.Tab label="Home" value="home" LinkComponent="a" href="#" />
              <BNAppHeader.TabWithSubMenu label="Jobs">
                <MenuList autoFocusItem>
                  <MenuItem LinkComponent="a" href="#">
                    Proxy
                  </MenuItem>
                  <MenuItem LinkComponent="a" href="#">
                    Bankruptcy
                  </MenuItem>
                  <MenuItem LinkComponent="a" href="#">
                    Reorg
                  </MenuItem>
                </MenuList>
              </BNAppHeader.TabWithSubMenu>
              <BNAppHeader.Tab label="About" value="about" LinkComponent="a" href="#" />
            </BNAppHeader.Tabs>
            <AvatarMenu
              src="https://untitledui.com/images/avatars/transparent/loki-bright"
              alt="User Avatar"
            >
              <ThemeToggle />
              <AvatarMenu.SubHeader>Account</AvatarMenu.SubHeader>
              <MenuList>
                <MenuItem LinkComponent="a" href="#">
                  Profile
                </MenuItem>
                <MenuItem LinkComponent="a" href="#">
                  Settings
                </MenuItem>
                <Divider />
                <MenuItem LinkComponent="a" href="#">
                  <ListItemIcon>
                    <LogoutIconOutlined fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </MenuList>
            </AvatarMenu>
          </BNAppHeader.Section>
        </BNAppHeader.DesktopOnlySection>
        <BNAppHeader.MobileOnlySection>
          <Typography>Mobile Menu</Typography>
        </BNAppHeader.MobileOnlySection>
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
