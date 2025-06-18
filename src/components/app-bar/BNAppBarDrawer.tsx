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
import type {
  BoxProps,
  DrawerProps,
  ListItemButtonProps,
  ListItemProps,
  ListProps,
  Theme,
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

export interface BNAppBarDrawerSlots {
  root?: React.ElementType
  header?: React.ElementType
  content?: React.ElementType
  section?: React.ElementType
  list?: React.ElementType
  listItem?: React.ElementType
  listItemButton?: React.ElementType
  divider?: React.ElementType
}

export interface BNAppBarDrawerSlotProps {
  root?: Partial<DrawerProps>
  header?: Partial<BoxProps>
  content?: Partial<BoxProps>
  section?: Partial<BoxProps>
  sectionTitle?: Partial<BoxProps>
  list?: Partial<ListProps>
  listItem?: Partial<ListItemProps>
  listItemButton?: Partial<ListItemButtonProps>
  divider?: any
}

export interface BNAppBarDrawerProps {
  open: boolean
  elevation?: number
  onClose: () => void
  anchor?: 'left' | 'right' | 'top' | 'bottom'
  width?: number
  tabs?: BNAppBarDrawerTab[]
  menuItems?: BNAppBarDrawerMenuItem[]
  selectedTabValue?: string | number
  onTabClick?: (value: string | number) => void
  onMenuItemClick?: (label: string) => void
  menuItemLinkComponent?: React.ElementType
  tabLinkComponent?: React.ElementType
  header?: React.ReactNode
  footer?: React.ReactNode
  slots?: BNAppBarDrawerSlots
  slotProps?: BNAppBarDrawerSlotProps
  hasAppSwitcher?: boolean
}

export const BNAppBarDrawer = ({
  open,
  elevation = 0,
  onClose,
  anchor = 'right',
  width = 280,
  tabs = [],
  menuItems = [],
  selectedTabValue,
  onTabClick,
  onMenuItemClick,
  menuItemLinkComponent,
  tabLinkComponent,
  footer,
  slots = {},
  slotProps = {},
  hasAppSwitcher = false,
}: BNAppBarDrawerProps) => {
  const {
    root: RootSlot = Drawer,
    content: ContentSlot = Box,
    section: SectionSlot = Box,
    list: ListSlot = List,
    listItem: ListItemSlot = ListItem,
    listItemButton: ListItemButtonSlot = ListItemButton,
    divider: DividerSlot = Divider,
  } = slots

  const {
    root: rootProps = {},
    content: contentProps = {},
    section: sectionProps = {},
    list: listProps = {},
    listItem: listItemProps = {},
    listItemButton: listItemButtonProps = {},
    divider: dividerProps = {},
  } = slotProps

  return (
    <RootSlot
      anchor={anchor}
      elevation={elevation}
      open={open}
      onClose={onClose}
      transitionDuration={350}
      sx={(theme: Theme) => {
        const navbarHeight = (theme as any).layout?.navbarHeight || 66
        const appSwitcherHeight = hasAppSwitcher
          ? (theme as any).layout?.appSwitcherHeight || 48
          : 0
        const totalTopOffset = navbarHeight + appSwitcherHeight

        return {
          '& .MuiDrawer-paper': {
            width: width,
            top: totalTopOffset,
            height: `calc(100vh - ${totalTopOffset}px)`,
          },
          '& .MuiBackdrop-root.MuiModal-backdrop': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
          ...rootProps.sx,
        }
      }}
      {...rootProps}
    >
      <ContentSlot
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          ...contentProps.sx,
        }}
        {...contentProps}
      >
        {/* Navigation Tabs Section */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          {tabs.length > 0 && (
            <SectionSlot {...sectionProps}>
              <ListSlot {...listProps}>
                {tabs.map((tab) => (
                  <ListItemSlot key={tab.value} disablePadding {...listItemProps}>
                    <ListItemButtonSlot
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
                      {...listItemButtonProps}
                    >
                      <ListItemText primary={tab.label} />
                    </ListItemButtonSlot>
                  </ListItemSlot>
                ))}
              </ListSlot>

              {menuItems.length > 0 && <DividerSlot sx={{ my: 1 }} {...dividerProps} />}
            </SectionSlot>
          )}

          {/* Account Menu Section */}
          {menuItems.length > 0 && (
            <SectionSlot {...sectionProps}>
              <ListSlot {...listProps}>
                {menuItems.map((item, index) => (
                  <ListItemSlot key={index} disablePadding {...listItemProps}>
                    <ListItemButtonSlot
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
                      {...listItemButtonProps}
                    >
                      {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                      <ListItemText primary={item.label} />
                    </ListItemButtonSlot>
                  </ListItemSlot>
                ))}
              </ListSlot>
            </SectionSlot>
          )}
        </Box>

        {/* Footer */}
        {footer && (
          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>{footer}</Box>
        )}
      </ContentSlot>
    </RootSlot>
  )
}

export default BNAppBarDrawer
