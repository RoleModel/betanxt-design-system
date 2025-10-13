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
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'

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
  const ThemeToggleItem = () => {
    const { mode, setMode } = useColorScheme()
    const handleChange = (
      _event: React.MouseEvent<HTMLElement>,
      nextMode: 'light' | 'dark' | 'system' | null
    ) => {
      if (nextMode) setMode(nextMode)
    }
    return (
      <Box sx={{ px: 2, py: 1.5 }}>
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
  }
  const sanitizedMenuItems = React.useMemo(() => {
    // Keep theme toggle in drawer; just sanitize dividers
    const withoutToggles = (menuItems || [])
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
            width: 320,
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
              {tabs.map((tab) => {
                const children = (tab as any)?.children
                const hasChildren = Array.isArray(children) && children.length > 0
                if (!hasChildren) {
                  return (
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
                  )
                }
                // Non-clickable parent label and clickable child entries
                return (
                  <React.Fragment key={tab.value}>
                    <ListItem disableGutters sx={{ px: 2, py: 0.5 }}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography variant="body3" fontWeight={400} color="text.secondary">
                            {tab.label}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {children.map((item: any, idx: number) => {
                      if (item?.divider === true && (!item.label || String(item.label).trim() === '')) {
                        return <Divider key={`tab-divider-${tab.value}-${idx}`} sx={{ my: 0.5 }} />
                      }
                      return (
                        <ListItem key={`tab-child-${tab.value}-${idx}`} disablePadding>
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
                            sx={{ pl: 3 }}
                            {...item}
                          >
                            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        </ListItem>
                      )
                    })}
                  </React.Fragment>
                )
              })}
            </List>
            {sanitizedMenuItems.length > 0 && <Divider sx={{ my: 1 }} />}
          </>
        )}

        {/* Account Menu Section */}
        {sanitizedMenuItems.length > 0 && (
          <List>
            {sanitizedMenuItems.map((item, index) => {
              if ((item as any)?.divider === true) {
                return <Divider key={`divider-${index}`} sx={{ my: 1 }} />
              }
              if ((item as any)?.isThemeToggle === true) {
                return <ThemeToggleItem key={`theme-${index}`} />
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
