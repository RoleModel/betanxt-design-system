import { type ReactNode, useState } from 'react'

import {
  AppBar,
  Box,
  type BoxProps,
  Stack,
  type TabProps,
  type TabsProps,
  Toolbar,
  type ToolbarProps,
  Typography,
  type TypographyProps,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { Tab, TabWithSubMenu, Tabs } from './header-tabs'

function BNAppHeader({ children }: { children?: React.ReactNode }) {
  return (
    <AppBar color="primary" position="static">
      {children}
    </AppBar>
  )
}

BNAppHeader.Toolbar = (props: ToolbarProps) => {
  return (
    <Toolbar sx={{ justifyContent: 'space-between' }} {...props}>
      {props.children}
    </Toolbar>
  )
}

BNAppHeader.Title = (props: TypographyProps) => {
  return (
    <Typography variant="appTitle" aria-level={1} {...props}>
      {props.children}
    </Typography>
  )
}

BNAppHeader.Logo = (props: BoxProps<'img'>) => {
  const { src } = props
  return (
    <Box
      {...props}
      component="img"
      src={src}
      alt="Logo"
      sx={(theme) => ({
        display: 'inline-flex',
        alignItems: 'center',
        height: 44,
        ...(src &&
          !src.endsWith('.svg') && {
            backgroundColor: theme.vars.palette.common.white,
            padding: theme.spacing(0.5),
            borderRadius: 1,
          }),
      })}
    />
  )
}

BNAppHeader.Section = ({ children }: { children?: ReactNode }) => {
  return (
    <Stack direction="row" spacing={1} useFlexGap alignItems="center">
      {children}
    </Stack>
  )
}

BNAppHeader.DesktopOnlySection = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  return isDesktop ? children : null
}

BNAppHeader.MobileOnlySection = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return isMobile ? children : null
}

BNAppHeader.ControlBar = ({ children }: { children?: ReactNode }) => {
  return (
    <Box
      sx={(theme) => ({
        px: 2,
        backgroundColor:
          theme.vars.palette.appSwitcher?.background || theme.palette.primary.main,
        minHeight: theme.layout?.appSwitcherHeight || 48,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.palette.common.white,
      })}
    >
      {children}
    </Box>
  )
}

BNAppHeader.Tabs = Tabs
BNAppHeader.Tab = Tab
BNAppHeader.TabWithSubMenu = TabWithSubMenu

export default BNAppHeader
