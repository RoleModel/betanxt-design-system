import React from 'react'

import { Box, AppBar as MuiAppBar, Toolbar } from '@mui/material'
import type {
  BoxProps,
  AppBarProps as MuiAppBarProps,
  Theme,
  ToolbarProps,
} from '@mui/material'

export interface BNAppBarSlots {
  root?: React.ElementType
  toolbar?: React.ElementType
  logo?: React.ElementType
  centerContent?: React.ElementType
  endContent?: React.ElementType
  drawer?: React.ElementType
}

export interface BNAppBarSlotProps {
  root?: MuiAppBarProps
  toolbar?: ToolbarProps
  logo?: BoxProps
  centerContent?: BoxProps
  endContent?: BoxProps
  drawer?: any
}

export interface BNAppBarProps extends Omit<MuiAppBarProps, 'children'> {
  slots?: BNAppBarSlots
  slotProps?: BNAppBarSlotProps
  logo?: React.ReactNode
  centerContent?: React.ReactNode
  endContent?: React.ReactNode
  drawer?: React.ReactNode
  children?: React.ReactNode
}

export const BNAppBar = ({
  slots = {},
  slotProps = {},
  logo,
  centerContent,
  endContent,
  drawer,
  children,
  ...appBarProps
}: BNAppBarProps) => {
  const {
    root: RootSlot = MuiAppBar,
    toolbar: ToolbarSlot = Toolbar,
    logo: LogoSlot = Box,
    centerContent: CenterContentSlot = Box,
    endContent: EndContentSlot = Box,
    drawer: DrawerSlot = React.Fragment,
  } = slots

  const {
    root: rootProps = {},
    toolbar: toolbarProps = {},
    logo: logoProps = {},
    centerContent: centerContentProps = {},
    endContent: endContentProps = {},
    drawer: drawerProps = {},
  } = slotProps

  return (
    <>
      <RootSlot {...appBarProps} {...rootProps}>
        <ToolbarSlot
          sx={(theme: Theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: theme.layout?.navbarHeight,
            gap: 2,
            ...toolbarProps.sx,
          })}
          {...toolbarProps}
        >
          {LogoSlot && (
            <LogoSlot
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: 1,
                ...logoProps.sx,
              }}
              {...logoProps}
            >
              {logo}
            </LogoSlot>
          )}

          {centerContent && (
            <CenterContentSlot
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
                flex: 1,
                ...centerContentProps.sx,
              }}
              {...centerContentProps}
            >
              {centerContent}
            </CenterContentSlot>
          )}

          {endContent && (
            <EndContentSlot
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                ...endContentProps.sx,
              }}
              {...endContentProps}
            >
              {endContent}
            </EndContentSlot>
          )}

          {children}
        </ToolbarSlot>
      </RootSlot>

      {drawer && <DrawerSlot {...drawerProps}>{drawer}</DrawerSlot>}
    </>
  )
}
