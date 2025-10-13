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
  divider?: boolean
  isThemeToggle?: boolean
}

export interface BNAppBarDrawerProps {
  open: boolean
  onClose: () => void
  tabs?: BNAppBarDrawerTab[]
  menuItems?: BNAppBarDrawerMenuItem[]
  selectedTabValue?: string | number
  onTabClick?: (value: string | number) => void
  onMenuItemClick?: (label: string) => void
  LinkComponent?: React.ElementType
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
  LinkComponent,
  hasAppSwitcher = false,
}: BNAppBarDrawerProps) => {
  const sanitizedMenuItems = React.useMemo(() => {
    // Remove theme toggle items if any slipped through
    const withoutToggles = (menuItems || []).filter((i: any) => i?.isThemeToggle !== true)
    // Collapse consecutive dividers and trim leading/trailing dividers
    const compact: BNAppBarDrawerMenuItem[] = []
    let lastWasDivider = false
    for (const item of withoutToggles) {
      const isDivider = (item as any)?.divider === true
      if (isDivider) {
        if (compact.length === 0 || lastWasDivider) continue
        compact.push({ divider: true, label: '' } as any)
        lastWasDivider = true
      } else {
        compact.push(item)
        lastWasDivider = false
      }
    }
    if (compact.length > 0 && (compact[compact.length - 1] as any)?.divider === true) {
      compact.pop()
    }
    return compact
  }, [menuItems])
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
                    LinkComponent={LinkComponent}
                    onClick={() => {
                      tab.onClick?.()
                      onTabClick?.(tab.value)
                    }}
                    role="button"
                    aria-label={`Navigate to ${tab.label}`}
                    tabIndex={0}
                    {...tab}
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
        {sanitizedMenuItems.length > 0 && (
          <List>
            {sanitizedMenuItems.map((item, index) => {
              if ((item as any)?.divider === true) {
                return <Divider key={`divider-${index}`} sx={{ my: 1 }} />
              }
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    LinkComponent={LinkComponent}
                    disabled={item.disabled}
                    onClick={() => {
                      item.onClick?.()
                      onMenuItemClick?.(item.label)
                    }}
                    role="button"
                    aria-label={item.label}
                    tabIndex={0}
                    {...item}
                  >
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        )}
      </Box>
    </Drawer>
  )
}

export default BNAppBarDrawer
