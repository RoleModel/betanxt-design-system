import { type MouseEvent, type ReactNode, useState } from 'react'

import {
  Avatar,
  ClickAwayListener,
  IconButton,
  ListSubheader,
  Paper,
  Popper,
  styled,
} from '@mui/material'

export interface AvatarProps {
  src: string
  alt: string
  children?: ReactNode
}

function AvatarMenu(props: AvatarProps) {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchorEl(null)
  }

  // TODO: Dummy implementation for now
  const hasAppSwitcher = false
  const appSwitcherTopOffset = 0
  const subheaderLabel = 'User Menu'

  return (
    <>
      <IconButton
        id="menu-icon"
        aria-controls={menuAnchorEl ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuAnchorEl ? 'true' : undefined}
        aria-label="Open Menu"
        color="inherit"
        onClick={handleMenuClick}
        sx={{ position: 'relative' }}
      >
        <Avatar
          src={props.src}
          alt={props.alt}
          sx={{ width: 40, height: 40, backgroundColor: 'primary.main' }}
        >
          {props.children}
        </Avatar>
      </IconButton>
      <Popper
        id="menu"
        role="navigation"
        open={Boolean(menuAnchorEl)}
        anchorEl={menuAnchorEl}
        placement="bottom-end"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [
                0,
                (hasAppSwitcher
                  ? Math.max(0, (appSwitcherTopOffset as number) - 8)
                  : 0) as number,
              ],
            },
          },
        ]}
      >
        <Paper role="menu" sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <ClickAwayListener onClickAway={handleMenuClose}>
            <div>{props.children}</div>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  )
}

AvatarMenu.SubHeader = (props: { children: ReactNode }) => {
  return (
    <ListSubheader sx={{ lineHeight: '2.5rem' }} role="menuitem">
      {props.children}
    </ListSubheader>
  )
}

export default AvatarMenu
