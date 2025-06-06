import React from 'react'

import {
  Box,
  AppBar as MuiAppBar,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { type AvatarProps, BNAnimatedMenuIcon, type MenuItem } from './BNAnimatedMenuIcon'
import { BNAppBarDrawer } from './BNAppBarDrawer'

export interface BNAppBarProps {
  title?: string
  color?: 'primary' | 'secondary'
  logoUrl?: string
  logoAlt?: string
  tabs?: {
    label: string
    value: string
    href: string
  }[]
  selectedTabValue?: string
  tabLinkComponent?: React.ElementType
  avatar?: AvatarProps
  menuItems?: MenuItem[]
  'aria-label'?: string
  children?: React.ReactNode
}

export function BNAppBar({
  title,
  logoUrl,
  logoAlt,
  color = 'primary',
  tabs,
  selectedTabValue,
  tabLinkComponent = 'a',
  menuItems,
  avatar,
  'aria-label': ariaLabel,
  children,
}: BNAppBarProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <MuiAppBar
      color={color}
      position="static"
      role="banner"
      aria-label={ariaLabel || 'Main navigation'}
    >
      {children}
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Stack direction="row" spacing={1} useFlexGap alignItems="center">
          {logoUrl && (
            <Box
              component="img"
              src={logoUrl}
              alt={logoAlt || 'Company logo'}
              height={44}
              sx={{
                display: 'block',
                padding: 0.5,
                backgroundColor: 'common.white',
                borderRadius: 1,
              }}
            />
          )}

          {title && (
            <Typography variant="appTitle" aria-level={1}>
              {title}
            </Typography>
          )}
        </Stack>
        <Stack direction="row" spacing={1} useFlexGap alignItems="center">
          {tabs && isDesktop && (
            <Tabs
              component="nav"
              value={selectedTabValue}
              aria-label="Main navigation tabs"
              role="navigation"
            >
              {tabs.map((tab) => (
                <Tab
                  LinkComponent={tabLinkComponent}
                  href={tab.href}
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                  aria-label={`Navigate to ${tab.label}`}
                  tabIndex={0}
                />
              ))}
            </Tabs>
          )}
          {avatar && menuItems && (
            <BNAnimatedMenuIcon
              menuItems={menuItems}
              avatar={avatar}
              onDrawerToggle={handleDrawerToggle}
              drawerOpen={drawerOpen}
            />
          )}
        </Stack>
      </Toolbar>
      {avatar && menuItems && (
        <BNAppBarDrawer
          tabs={tabs}
          elevation={10}
          menuItems={menuItems}
          selectedTabValue={selectedTabValue}
          hasAppSwitcher={!!children}
          onTabClick={() => {
            setDrawerOpen(false)
          }}
          onMenuItemClick={() => {
            setDrawerOpen(false)
          }}
          open={drawerOpen}
          onClose={handleDrawerToggle}
          slotProps={{
            root: {
              id: 'navigation-drawer',
              'aria-label': 'Navigation drawer',
            },
          }}
        />
      )}
    </MuiAppBar>
  )
}

export default BNAppBar
