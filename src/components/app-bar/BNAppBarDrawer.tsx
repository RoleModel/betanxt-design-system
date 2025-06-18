import React from 'react'

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

export interface BNAppBarDrawerTab {
  label: string
  value: string | number
  disabled?: boolean
  selected?: boolean
  onClick?: () => void
  to?: string | { pathname: string; search?: string; hash?: string; state?: any }
}

export interface BNAppBarDrawerMenuItem {
  label: string
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  to?: string | { pathname: string; search?: string; hash?: string; state?: any }
}

export interface BNAppBarDrawerProps {
  open: boolean
  onClose: () => void
  tabs?: BNAppBarDrawerTab[]
  menuItems?: BNAppBarDrawerMenuItem[]
  selectedTabValue?: string | number
  onTabClick?: (value: string | number) => void
  onMenuItemClick?: (label: string) => void
  menuItemLinkComponent?: React.ElementType
  tabLinkComponent?: React.ElementType
  hasAppSwitcher?: boolean
}

export const BNAppBarDrawer = ({
  open,
  onClose,
  tabs = [],
  menuItems = [],
  selectedTabValue,
  onTabClick,
  onMenuItemClick,
  menuItemLinkComponent,
  tabLinkComponent,
  hasAppSwitcher = false,
}: BNAppBarDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      elevation={10}
      open={open}
      onClose={onClose}
      transitionDuration={350}
      id="navigation-drawer"
      aria-label="Navigation drawer"
      sx={(theme) => {
        const navbarHeight = theme.layout?.navbarHeight || 66
        const appSwitcherHeight = hasAppSwitcher
          ? theme.layout?.appSwitcherHeight || 48
          : 0
        const totalTopOffset = navbarHeight + appSwitcherHeight

        return {
          '& .MuiDrawer-paper': {
            width: 280,
            top: totalTopOffset,
            height: `calc(100vh - ${totalTopOffset}px)`,
          },
          '& .MuiBackdrop-root.MuiModal-backdrop': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          flex: 1,
          overflow: 'auto',
        }}
      >
        {/* Navigation Tabs Section */}
        {tabs.length > 0 && (
          <>
            <List>
              {tabs.map((tab) => (
                <ListItem key={tab.value} disablePadding>
                  <ListItemButton
                    selected={tab.selected || selectedTabValue === tab.value}
                    disabled={tab.disabled}
                    onClick={() => {
                      tab.onClick?.()
                      onTabClick?.(tab.value)
                    }}
                    {...(tab.to && tabLinkComponent
                      ? { component: tabLinkComponent, to: tab.to }
                      : {})}
                    role="button"
                    aria-label={`Navigate to ${tab.label}`}
                    tabIndex={0}
                  >
                    <ListItemText primary={tab.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {menuItems.length > 0 && <Divider sx={{ my: 1 }} />}
          </>
        )}

        {/* Account Menu Section */}
        {menuItems.length > 0 && (
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  disabled={item.disabled}
                  onClick={() => {
                    item.onClick?.()
                    onMenuItemClick?.(item.label)
                  }}
                  {...(item.to && menuItemLinkComponent
                    ? { component: menuItemLinkComponent, to: item.to }
                    : {})}
                  role="button"
                  aria-label={item.label}
                  tabIndex={0}
                >
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Drawer>
  )
}

export default BNAppBarDrawer
