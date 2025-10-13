'use client'

import { type MouseEvent, type ReactNode, useState, memo } from 'react'

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import {
  Avatar,
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuList,
  MenuItem as MuiMenuItem,
  Paper,
  Popper,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import type { MenuItemProps } from '@mui/material'
import { type CSSObject, keyframes, styled, useColorScheme } from '@mui/material/styles'

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
  /** Optional custom content to render inside the menu list */
  render?: React.ReactNode
  /** Marker used by BNAppBar to request theme toggle injection */
  isThemeToggle?: boolean
}

export interface AvatarProps {
  src?: string
  alt?: string
  children?: ReactNode
}

export interface BNAnimatedMenuIconProps {
  open?: boolean
  menuItems: MenuItem[]
  onDrawerToggle?: () => void
  drawerOpen?: boolean
  avatar: AvatarProps
  useAnimatedIconOnly?: boolean
  LinkComponent?: React.ElementType
  subheaderLabel?: string
  hasAppSwitcher?: boolean
  slots?: {
    popper?: React.ElementType
    paper?: React.ElementType
    menuList?: React.ElementType
    menuItem?: React.ElementType
    iconButton?: React.ElementType
    avatar?: React.ElementType
  }
  slotProps?: {
    popper?: React.ComponentProps<any>
    paper?: React.ComponentProps<any>
    menuList?: React.ComponentProps<any>
    menuItem?: React.ComponentProps<any>
    iconButton?: React.ComponentProps<any>
    avatar?: React.ComponentProps<any>
  }
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

// Extracted to avoid re-creating the component on each BNAnimatedMenuIcon render
const ThemeToggleItem = memo(() => {
  const { mode, setMode } = useColorScheme()
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    nextMode: 'light' | 'dark' | 'system' | null
  ) => {
    if (nextMode) setMode(nextMode)
  }
  return (
    <Box sx={{ p: 1.5 }}>
      <ToggleButtonGroup
        size="small"
        exclusive
        fullWidth
        value={mode}
        onChange={handleChange}
        aria-label="Theme mode"
      >
        <ToggleButton value="light" aria-label="Light mode" sx={{ flex: 1, px: 2 }}>
          <LightModeRoundedIcon fontSize="small" sx={{ mr: 1 }} />
          Light
        </ToggleButton>
        <ToggleButton value="system" aria-label="System mode" sx={{ flex: 1, px: 2 }}>
          <SettingsRoundedIcon fontSize="small" sx={{ mr: 1 }} />
          System
        </ToggleButton>
        <ToggleButton value="dark" aria-label="Dark mode" sx={{ flex: 1, px: 2 }}>
          <DarkModeRoundedIcon fontSize="small" sx={{ mr: 1 }} />
          Dark
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
})

export const BNAnimatedMenuIcon = ({
  open,
  subheaderLabel,
  menuItems,
  onDrawerToggle,
  drawerOpen = false,
  avatar,
  useAnimatedIconOnly = false,
  LinkComponent,
  hasAppSwitcher,
  slots = {},
  slotProps = {},
}: BNAnimatedMenuIconProps) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const appSwitcherTopOffset = (() => {
    const anyTheme = theme as unknown as { layout?: { appSwitcher?: { top?: number } } }
    const top = anyTheme.layout?.appSwitcher?.top
    return typeof top === 'number' ? top : 0
  })()

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
    lineHeight: '2.5rem',
  })



  // Use animated icon for mobile OR when useAnimatedIconOnly is true
  if (isMobile || useAnimatedIconOnly) {
    return (
      <>
        <StyledMenuIcon
          open={drawerOpen}
          onClick={handleMenuClick}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          type="button"
        >
          <div />
          <div />
        </StyledMenuIcon>
        {/* Show dropdown menu when using animated icon only on desktop */}
        {useAnimatedIconOnly &&
          !isMobile &&
          (() => {
            const PopperComp = slots.popper ?? Popper
            const PaperComp = slots.paper ?? Paper
            const MenuListComp = slots.menuList ?? MenuList
            const MenuItemComp = slots.menuItem ?? MuiMenuItem
            return (
              <PopperComp
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
                          ? Math.max(0, (appSwitcherTopOffset as number) - 4)
                          : 4) as number,
                      ],
                    },
                  },
                ]}
                {...(slotProps.popper || {})}
              >
                <PaperComp elevation={18} {...(slotProps.paper || {})}>
                  <ClickAwayListener onClickAway={handleMenuClose}>
                    <MenuListComp {...(slotProps.menuList || {})}>
                      {menuItems.map((item, index) => {
                        const { label, icon, onClick, ...menuItemProps } = item
                        const isDividerOnly =
                          (menuItemProps as any)?.divider === true &&
                          (!label || String(label).trim() === '')
                        if (isDividerOnly) {
                          return <Divider key={`divider-${index}`} component="li" />
                        }
                        return (
                          <MenuItemComp
                            key={index}
                            LinkComponent={LinkComponent}
                            onClick={() => handleMenuItemClick(item)}
                            {...(slotProps.menuItem || {})}
                            {...menuItemProps}
                          >
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={label} />
                          </MenuItemComp>
                        )
                      })}
                    </MenuListComp>
                  </ClickAwayListener>
                </PaperComp>
              </PopperComp>
            )
          })()}
      </>
    )
  }

  // Default desktop behavior with avatar
  return (
    <>
      {(() => {
        const IconButtonComp = slots.iconButton ?? IconButton
        const AvatarComp = slots.avatar ?? Avatar
        return (
          <IconButtonComp
            id="menu-icon"
            aria-controls={menuAnchorEl ? 'menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuAnchorEl ? 'true' : undefined}
            aria-label="Open Menu"
            color="inherit"
            onClick={handleMenuClick}
            sx={{ position: 'relative' }}
            {...(slotProps.iconButton || {})}
          >
            <AvatarComp
              src={avatar.src}
              alt={avatar.alt}
              sx={{ width: 40, height: 40, backgroundColor: 'primary.main' }}
              {...(slotProps.avatar || {})}
            >
              {avatar.children}
            </AvatarComp>
          </IconButtonComp>
        )
      })()}
      {(() => {
        const PopperComp = slots.popper ?? Popper
        const PaperComp = slots.paper ?? Paper
        const MenuListComp = slots.menuList ?? MenuList
        const MenuItemComp = slots.menuItem ?? MuiMenuItem
        return (
          <PopperComp
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
            {...(slotProps.popper || {})}
          >
            <PaperComp
              role="menu"
              sx={{ maxHeight: '100vh', overflowY: 'auto' }}
              {...(slotProps.paper || {})}
            >
              <>
                {typeof subheaderLabel === 'string' &&
                  subheaderLabel.trim().length > 0 && (
                    <StyledListHeader role="menuitem">{subheaderLabel}</StyledListHeader>
                  )}
                <ClickAwayListener onClickAway={handleMenuClose}>
                  <MenuListComp
                    aria-labelledby="menu-icon"
                    {...(slotProps.menuList || {})}
                  >
                    {menuItems.map((item, index) => {
                      const { label, icon, onClick: _onClick, ...menuItemProps } = item
                      const isDividerOnly =
                        (menuItemProps as any)?.divider === true &&
                        (!label || String(label).trim() === '')
                      if (isDividerOnly) {
                        return <Divider key={`divider-${index}`} component="li" />
                      }
                      if ((item as any).isThemeToggle) {
                        return <ThemeToggleItem key={`theme-${index}`} />
                      }
                      return (
                        <MenuItemComp
                          key={index}
                          aria-label={item.ariaLabel}
                          LinkComponent={LinkComponent}
                          onClick={() => handleMenuItemClick(item)}
                          {...(slotProps.menuItem || {})}
                          {...menuItemProps}
                        >
                          {icon && <ListItemIcon>{icon}</ListItemIcon>}
                          <ListItemText primary={label} />
                        </MenuItemComp>
                      )
                    })}
                  </MenuListComp>
                </ClickAwayListener>
              </>
            </PaperComp>
          </PopperComp>
        )
      })()}
    </>
  )
}
