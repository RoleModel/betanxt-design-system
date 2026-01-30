import type { Meta, StoryObj } from '@storybook/react-vite'

import LogoutIconOutlined from '@mui/icons-material/LogoutOutlined'
import {
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material'

import { BNAppSwitcher } from '../BNAppSwitcher'
import { BNLogo } from '../BNLogo'
import BNAppHeader from './BNAppHeader'
import { ThemeToggle } from './ThemeToggle'
import { BNAvatarMenu } from './avatar-menu/BNAvatarMenu'
import { BNHamburgerMenu } from './hamburger-menu/BNHamburgerMenu'
import { BNListItem } from './menu/BNListItem'
import { BNListItemWithChildren } from './menu/BNListItemWithChildren'

const meta = {
  title: 'Custom Components/App Header/BNAppHeader',
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
      <BNAppHeader.ControlBar>
        <Typography>Client Name</Typography>
        <BNAppSwitcher currentAppName="Current App">
          <BNAppSwitcher.Item name="MIC Ops" component="a" href="#" />
          <BNAppSwitcher.Item name="Client Communications" component="a" href="#" />
          <BNAppSwitcher.Item name="Wealth Manager" component="a" href="#" />
        </BNAppSwitcher>
      </BNAppHeader.ControlBar>
      <BNAppHeader.Toolbar>
        <BNAppHeader.Section>
          <BNAppHeader.Logo src="/company-logo.png" />
          <BNAppHeader.Title>My App</BNAppHeader.Title>
        </BNAppHeader.Section>
        <BNAppHeader.DesktopOnlySection>
          <BNAppHeader.Section>
            <BNAppHeader.Tabs value="home">
              <BNAppHeader.Tab label="Home" value="home" LinkComponent="a" href="#" />
              <BNAppHeader.TabWithSubMenu label="Jobs" value="Jobs">
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
            <BNAvatarMenu
              src="https://untitledui.com/images/avatars/transparent/loki-bright"
              alt="User Avatar"
            >
              <ThemeToggle />
              <BNAvatarMenu.MenuList>
                <BNAvatarMenu.SubHeader>Account</BNAvatarMenu.SubHeader>
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
              </BNAvatarMenu.MenuList>
            </BNAvatarMenu>
          </BNAppHeader.Section>
        </BNAppHeader.DesktopOnlySection>
        <BNAppHeader.MobileOnlySection>
          <BNHamburgerMenu>
            <List>
              <BNListItem LinkComponent="a" href="#" label="Home" />
              <BNListItemWithChildren label="Jobs">
                <List>
                  <BNListItem label="Proxy" LinkComponent="a" href="#" />
                  <BNListItem label="Bankruptcy" LinkComponent="a" href="#" />
                  <BNListItem label="Reorg" LinkComponent="a" href="#" />
                </List>
              </BNListItemWithChildren>
              <BNListItem label="About" LinkComponent="a" href="#" />
            </List>
            <Divider />
            <List subheader={<ListSubheader>Account</ListSubheader>}>
              <BNListItem label="Profile" LinkComponent="a" href="#" />
              <BNListItem label="Settings" LinkComponent="a" href="#" />
              <BNListItem
                label="Logout"
                LinkComponent="a"
                href="#"
                icon={<LogoutIconOutlined fontSize="small" />}
              />
            </List>
            <Divider />
            <ThemeToggle />
          </BNHamburgerMenu>
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
