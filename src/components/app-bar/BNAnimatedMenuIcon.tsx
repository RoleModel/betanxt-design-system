'use client'

import { type MouseEvent, type ReactNode, useState } from 'react'

import {
  Avatar,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem as MuiMenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import type { MenuItemProps } from '@mui/material'
import { type CSSObject, keyframes, styled } from '@mui/material/styles'

// Define Keyframes
const bottombarOpen = keyframes`
  0% { top: 19px; }
  50% { top: 12px; transform: rotate(0deg); }
  100% { top: 12px; transform: rotate(-45deg); }
`

const bottombarClose = keyframes`
  0% { top: 12px; transform: rotate(-45deg); }
  50% { top: 12px; transform: rotate(0deg); }
  100% { top: 19px;}
`

const topbarOpen = keyframes`
  0% { top: 9px; }
  50% { top: 12px; transform: rotate(0deg); }
  100% { top: 12px; transform: rotate(45deg); }
`

const topbarClose = keyframes`
  0% { top: 12px; transform: rotate(45deg); }
  50% { top: 12px; transform: rotate(0deg); }
  100% { top: 9px; }
`

export interface MenuItem extends Omit<MenuItemProps, 'onClick'> {
  label: string
  icon?: ReactNode
  onClick?: () => void
  to?: string | { pathname: string; search?: string; hash?: string; state?: any }
  href?: string
  ariaLabel?: string
  hasSubeader?: boolean
  subeaderLabel?: string
}

export interface AvatarProps {
  src?: string
  alt?: string
  children?: ReactNode
}

export interface BNAnimatedMenuIconProps {
  menuItems: MenuItem[]
  onDrawerToggle?: () => void
  drawerOpen?: boolean
  avatar: AvatarProps
  useAnimatedIconOnly?: boolean
  LinkComponent?: React.ElementType
  subheaderLabel?: string
}


export const BNAnimatedMenuIcon = ({
  subheaderLabel,
  menuItems,
  onDrawerToggle,
  drawerOpen: _drawerOpen = false,
  avatar,
  useAnimatedIconOnly = false,
  LinkComponent,
}: BNAnimatedMenuIconProps) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    if ((isMobile || useAnimatedIconOnly) && onDrawerToggle) {
      onDrawerToggle()
    } else {
      setMenuAnchorEl(event.currentTarget)
    }
  }

  const handleMenuClose = () => {
    setMenuAnchorEl(null)
  }

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.()
    handleMenuClose()
  }

  const StyledListHeader = styled(ListSubheader)({
    backgroundImage: 'var(--Paper-overlay)',
    lineHeight: "2.5rem",
  });

  // Default desktop behavior with avatar
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
          src={avatar.src}
          alt={avatar.alt}
          sx={{ width: 40, height: 40, backgroundColor: 'primary.main' }}
        >
          {avatar.children}
        </Avatar>
      </IconButton>
      <Menu
        id="menu"
        component="nav"
        role="navigation"
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        marginThreshold={0}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{
          paper: {
            role: 'menu',
            style: { maxHeight: '100vh', overflowY: 'auto' },
          },
          list: {
            'aria-labelledby': 'menu-icon',
          },
        }}
      >
        {typeof subheaderLabel === 'string' && subheaderLabel.trim().length > 0 && (
          <StyledListHeader tabIndex={0} role="menuitem">{subheaderLabel}</StyledListHeader>
        )}
        {menuItems.map((item, index) => {
          const { label, icon, onClick: _onClick, ...menuItemProps } = item
          return (
            <MuiMenuItem
              key={index}
              aria-label={item.ariaLabel}
              LinkComponent={LinkComponent}
              onClick={() => handleMenuItemClick(item)}
              {...menuItemProps}
            >
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={label} />
            </MuiMenuItem>
          )
        })}
      </Menu>
    </>
  )
}
