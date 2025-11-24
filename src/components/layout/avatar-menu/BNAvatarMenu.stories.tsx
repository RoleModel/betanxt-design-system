import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

import LogoutIconOutlined from '@mui/icons-material/LogoutOutlined'
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'

import { ThemeToggle } from '../../app-header/ThemeToggle'
import { BNAvatarMenu } from './BNAvatarMenu'

const meta = {
  title: 'Custom Components/Layout/BNAvatarMenu',
  component: BNAvatarMenu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BNAvatarMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
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
  ),
  play: async ({ canvas, userEvent, step }) => {
    await step('Open avatar menu', async () => {
      const menuIcon = canvas.getByRole('button', { name: 'Open Menu' })
      await userEvent.click(menuIcon)
      await expect(menuIcon).toHaveAttribute('aria-expanded', 'true')

      const popper = await within(document.body).findByRole('navigation')
      await expect(popper).toBeVisible()
      await expect(popper).toHaveTextContent('Account')
      await expect(popper).toHaveTextContent('Profile')
      await expect(popper).toHaveTextContent('Settings')
      await expect(popper).toHaveTextContent('Logout')
    })

    await step('Close menu by clicking anywhere on the page (click away)', async () => {
      const popper = await within(document.body).findByRole('navigation')
      await userEvent.click(document.body)
      await expect(popper).not.toBeVisible()
    })
  },
}

export const WithNoImage: Story = {
  render: () => (
    <BNAvatarMenu alt="John Doe">
      <ThemeToggle />
    </BNAvatarMenu>
  ),
}
