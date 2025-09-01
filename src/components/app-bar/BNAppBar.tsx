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

import {
  type AvatarProps,
  BNAnimatedMenuIcon,
  type MenuItem,
} from './BNAnimatedMenuIcon.js'
import { BNAppBarDrawer } from './BNAppBarDrawer.js'

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

type BNAppBarLink = {
  label: string
  value: string
  disabled?: boolean
  href?: string
  to?: string | { pathname: string; search?: string; hash?: string; state?: any }
}

export interface BNAppBarProps {
  title?: string
  color?: 'primary' | 'secondary'
  tabs?: BNAppBarLink[]
  selectedTabValue?: string
  LinkComponent?: React.ElementType
  avatar?: AvatarProps
  menuItems?: MenuItem[]
  'aria-label'?: string
  children?: React.ReactNode
  slots?: {
    logoComponent?: React.ElementType
    logoImg?: React.ElementType
    end?: React.ElementType
  }
  slotProps?: {
    logoComponent?: React.ComponentProps<any>
    logoImg?: React.ImgHTMLAttributes<HTMLImageElement>
    end?: React.ComponentProps<any>
  }
}

export function BNAppBar({
  title,
  color = 'primary',
  tabs,
  selectedTabValue,
  LinkComponent = 'a',
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
            >
              {tabs.map((tab) => (
                <Tab
                  LinkComponent={LinkComponent}
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
              LinkComponent={LinkComponent}
            />
          )}
          {slots.end && React.createElement(slots.end, slotProps.end)}
        </Stack>
      </Toolbar>
      {avatar && menuItems && (
        <BNAppBarDrawer
          tabs={tabs}
          menuItems={menuItems}
          selectedTabValue={selectedTabValue}
          hasAppSwitcher={!!children}
          LinkComponent={LinkComponent}
          onTabClick={() => {
            setDrawerOpen(false)
          }}
          onMenuItemClick={() => {
            setDrawerOpen(false)
          }}
          open={drawerOpen}
          onClose={handleDrawerToggle}
        />
      )}
    </MuiAppBar>
  )
}

export default BNAppBar
