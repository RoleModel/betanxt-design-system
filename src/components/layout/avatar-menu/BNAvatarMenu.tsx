import { type MouseEvent, type ReactNode, useState } from 'react'

import {
  Avatar,
  type AvatarProps,
  ClickAwayListener,
  IconButton,
  ListSubheader,
  MenuList,
  Paper,
  Popper,
} from '@mui/material'

export type BNAvatarMenuProps = Pick<AvatarProps, 'src' | 'srcSet' | 'alt'> & {
  children?: ReactNode
}

export function BNAvatarMenu(props: BNAvatarMenuProps) {
  const { children, ...avatarProps } = props
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget)
  }

  const closeMenu = () => {
    setMenuAnchorEl(null)
  }

  const menuIsOpen = Boolean(menuAnchorEl)

  return (
    <>
      <IconButton
        id="menu-icon"
        aria-haspopup="menu"
        aria-controls={menuIsOpen ? 'avatar-menu' : undefined}
        aria-expanded={menuIsOpen ? 'true' : 'false'}
        aria-label="Open Menu"
        color="inherit"
        onClick={openMenu}
        sx={{ position: 'relative' }}
      >
        <Avatar
          {...avatarProps}
          sx={{ width: 40, height: 40, backgroundColor: 'primary.main' }}
        />
      </IconButton>
      <Popper
        role="navigation"
        id="avatar-menu"
        open={menuIsOpen}
        anchorEl={menuAnchorEl}
        placement="bottom-end"
        sx={{ zIndex: (theme) => theme.zIndex.appBar + 1 }}
        modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
      >
        <Paper sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <ClickAwayListener onClickAway={closeMenu}>
            <div>{children}</div>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  )
}

BNAvatarMenu.MenuList = (props: { children: ReactNode }) => {
  return <MenuList autoFocusItem>{props.children}</MenuList>
}

BNAvatarMenu.SubHeader = (props: { children: ReactNode }) => {
  return (
    <ListSubheader sx={{ lineHeight: '2.5rem' }} role="menuitem">
      {props.children}
    </ListSubheader>
  )
}
