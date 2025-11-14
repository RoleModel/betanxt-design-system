import type { Meta, StoryObj } from '@storybook/react-vite'

import LogoutIconOutlined from '@mui/icons-material/LogoutOutlined'
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material'

import { BNLogo } from '../BNLogo'
import AppSwitcher from './AppSwitcher'
import BNAppHeader from './BNAppHeader'
import { BNAvatarMenu } from './BNAvatarMenu'
import DrawerMenu from './DrawerMenu'
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
      <BNAppHeader.ControlBar>
        <Typography>Client Name</Typography>
        <AppSwitcher currentAppTitle="Current App">
          <MenuItem>MIC Ops</MenuItem>
          <MenuItem>Client Communications</MenuItem>
          <MenuItem>Wealth Manager</MenuItem>
        </AppSwitcher>
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
            <BNAvatarMenu
              src="https://untitledui.com/images/avatars/transparent/loki-bright"
              alt="User Avatar"
            >
              <ThemeToggle />
              <BNAvatarMenu.SubHeader>Account</BNAvatarMenu.SubHeader>
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
            </BNAvatarMenu>
          </BNAppHeader.Section>
        </BNAppHeader.DesktopOnlySection>
        <BNAppHeader.MobileOnlySection>
          <DrawerMenu hasAppSwitcher>
            <List>
              <DrawerMenu.ListItem>
                <ListItemButton
                  LinkComponent="a"
                  href="#"
                  role="button"
                  aria-label="Navigate to Home"
                  tabIndex={0}
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
              </DrawerMenu.ListItem>
              <DrawerMenu.ListItemWithChildren label="Jobs">
                <List>
                  <DrawerMenu.ListItem>
                    <ListItemButton
                      LinkComponent="a"
                      href="#"
                      role="button"
                      aria-label="Navigate to Proxy"
                      tabIndex={0}
                    >
                      <ListItemText primary="Proxy" />
                    </ListItemButton>
                  </DrawerMenu.ListItem>
                  <DrawerMenu.ListItem>
                    <ListItemButton
                      LinkComponent="a"
                      href="#"
                      role="button"
                      aria-label="Navigate to Bankruptcy"
                      tabIndex={0}
                    >
                      <ListItemText primary="Bankruptcy" />
                    </ListItemButton>
                  </DrawerMenu.ListItem>
                  <DrawerMenu.ListItem>
                    <ListItemButton
                      LinkComponent="a"
                      href="#"
                      role="button"
                      aria-label="Navigate to Reorg"
                      tabIndex={0}
                    >
                      <ListItemText primary="Reorg" />
                    </ListItemButton>
                  </DrawerMenu.ListItem>
                </List>
              </DrawerMenu.ListItemWithChildren>
              <DrawerMenu.ListItem>
                <ListItemButton
                  LinkComponent="a"
                  href="#"
                  role="button"
                  aria-label="Navigate to About"
                  tabIndex={0}
                >
                  <ListItemText primary="About" />
                </ListItemButton>
              </DrawerMenu.ListItem>
            </List>
            <Divider />
            <List subheader={<ListSubheader>Account</ListSubheader>}>
              <DrawerMenu.ListItem>
                <ListItemButton
                  LinkComponent="a"
                  href="#"
                  role="button"
                  aria-label="Navigate to Profile"
                  tabIndex={0}
                >
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </DrawerMenu.ListItem>
              <DrawerMenu.ListItem>
                <ListItemButton
                  LinkComponent="a"
                  href="#"
                  role="button"
                  aria-label="Navigate to Settings"
                  tabIndex={0}
                >
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </DrawerMenu.ListItem>
              <DrawerMenu.ListItem>
                <ListItemButton
                  LinkComponent="a"
                  href="#"
                  role="button"
                  aria-label="Logout"
                  tabIndex={0}
                >
                  <ListItemIcon>
                    <LogoutIconOutlined fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </DrawerMenu.ListItem>
            </List>
            <Divider />
            <ThemeToggle />
          </DrawerMenu>
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
