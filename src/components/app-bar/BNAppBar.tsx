import React from 'react'

import {
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

const getLogoImgStyles = (theme: any, src?: string): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  height: 44,
  ...(src &&
    !src?.endsWith('.svg') && {
      backgroundColor: theme.vars.palette.common.white,
      padding: theme.spacing(0.5),
      borderRadius: 4,
    }),
})

export interface BNAppBarProps {
  title?: string
  color?: 'primary' | 'secondary'
  tabs?: {
    label: string
    value: string
    href?: string
    to?: unknown
  }[]
  selectedTabValue?: string
  tabLinkComponent?: React.ElementType
  menuItemLinkComponent?: React.ElementType
  avatar?: AvatarProps
  menuItems?: MenuItem[]
  'aria-label'?: string
  children?: React.ReactNode
  slots?: {
    logoComponent?: React.ElementType
    logoImg?: React.ElementType
  }
  slotProps?: {
    logoComponent?: React.ComponentProps<any>
    logoImg?: React.ImgHTMLAttributes<HTMLImageElement>
  }
}

export function BNAppBar({
  title,
  color = 'primary',
  tabs,
  selectedTabValue,
  tabLinkComponent = 'a',
  menuItemLinkComponent,
  menuItems,
  avatar,
  'aria-label': ariaLabel,
  children,
  slots = {},
  slotProps = {},
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
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1} useFlexGap alignItems="center">
          {slots.logoComponent
            ? React.createElement(slots.logoComponent, slotProps.logoComponent)
            : slots.logoImg
              ? React.createElement(slots.logoImg, {
                  alt: 'Logo',
                  style: getLogoImgStyles(theme, slotProps.logoImg?.src),
                  ...slotProps.logoImg,
                })
              : null}
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
                  key={tab.value}
                  aria-label={`Navigate to ${tab.label}`}
                  tabIndex={0}
                  {...tab}
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
              menuItemLinkComponent={menuItemLinkComponent}
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
          menuItemLinkComponent={menuItemLinkComponent}
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
