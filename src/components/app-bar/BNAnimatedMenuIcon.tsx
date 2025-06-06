'use client'

import { type MouseEvent, type ReactNode, useState } from 'react'

import {
  Avatar,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem as MuiMenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import type { MenuItemProps } from '@mui/material'
import { type CSSObject, keyframes, styled } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'

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
  onClick: () => void
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
  sx?: SxProps<Theme>
  className?: string
}

const StyledMenuIcon = styled('button', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(
  ({ open }): CSSObject => ({
    border: 'none',
    margin: 0,
    padding: 0,
    overflow: 'visible',
    background: 'transparent',
    color: 'inherit',
    font: 'inherit',
    lineHeight: 'normal',
    appearance: 'none',
    outline: 'none',
    cursor: 'pointer',
    position: 'relative',
    width: '28px',
    height: '28px',
    display: 'inline-block',
    verticalAlign: 'middle',
    borderRadius: '50%',
    top: 0,
    '&:focus': {
      outline: '2px solid currentColor',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      outline: 'none',
    },
    '& div': {
      display: 'block',
      position: 'absolute',
      height: 2,
      width: '100%',
      background: 'currentColor',
      opacity: 1,
      left: 0,
      transformOrigin: 'center center',
    },
    '& div:nth-of-type(1)': {
      animation: `${open ? topbarOpen : topbarClose} 0.65s ease forwards`,
    },
    '& div:nth-of-type(2)': {
      animation: `${open ? bottombarOpen : bottombarClose} 0.65s ease forwards`,
    },
  })
)

export const BNAnimatedMenuIcon = ({
  menuItems,
  onDrawerToggle,
  drawerOpen = false,
  avatar,
  useAnimatedIconOnly = false,
  sx,
  className,
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
    item.onClick()
    handleMenuClose()
  }

  // Use animated icon for mobile OR when useAnimatedIconOnly is true
  if (isMobile || useAnimatedIconOnly) {
    return (
      <>
        <StyledMenuIcon
          open={drawerOpen}
          onClick={handleMenuClick}
          sx={sx}
          className={className}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          type="button"
        >
          <div />
          <div />
        </StyledMenuIcon>
        {/* Show dropdown menu when using animated icon only on desktop */}
        {useAnimatedIconOnly && !isMobile && (
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {menuItems.map((item, index) => {
              const { label, icon, onClick, ...menuItemProps } = item
              return (
                <MuiMenuItem key={index} onClick={() => handleMenuItemClick(item)} {...menuItemProps}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={label} />
                </MuiMenuItem>
              )
            })}
          </Menu>
        )}
      </>
    )
  }

  // Default desktop behavior with avatar
  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleMenuClick}
        sx={{ position: 'relative', ...sx }}
        className={className}
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
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuItems.map((item, index) => {
          const { label, icon, onClick, ...menuItemProps } = item
          return (
            <MuiMenuItem key={index} onClick={() => handleMenuItemClick(item)} {...menuItemProps}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={label} />
            </MuiMenuItem>
          )
        })}
      </Menu>
    </>
  )
}
