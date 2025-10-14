import React from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {
  ClickAwayListener,
  Divider,
  MenuList,
  AppBar as MuiAppBar,
  MenuItem as MuiMenuItem,
  Paper,
  Popper,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import type {
  MenuListProps,
  MenuItemProps as MuiMenuItemProps,
  PaperProps,
  PopperProps,
  TabProps,
  TabsProps,
} from '@mui/material'

import type { MenuItem as BNMenuItem } from './BNAnimatedMenuIcon'
import { type AvatarProps, BNAnimatedMenuIcon, type MenuItem } from './BNAnimatedMenuIcon'
import { BNAppBarDrawer } from './BNAppBarDrawer'
import type { BNAppBarDrawerMenuItem } from './BNAppBarDrawer'

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
  // When provided, this tab becomes a dropdown trigger and is not directly navigable
  children?: BNMenuItem[]
}

export interface BNAppBarProps {
  title?: string
  color?: 'primary' | 'secondary'
  tabs?: BNAppBarLink[]
  selectedTabValue?: string
  LinkComponent?: React.ElementType
  avatar?: AvatarProps
  menuItems?: MenuItem[]
  menuSubheaderLabel?: string
  includeThemeToggle?: boolean
  'aria-label'?: string
  children?: React.ReactNode
  slots?: {
    logoComponent?: React.ElementType
    logoImg?: React.ElementType
    end?: React.ElementType
    tabsContainer?: React.ComponentType<TabsProps>
    tab?: React.ComponentType<TabProps>
    tabMenuPopper?: React.ComponentType<PopperProps>
    tabMenuPaper?: React.ComponentType<PaperProps>
    tabMenuList?: React.ComponentType<MenuListProps>
    tabMenuItem?: React.ComponentType<MuiMenuItemProps>
  }
  slotProps?: {
    logoComponent?: React.ComponentProps<any>
    logoImg?: React.ImgHTMLAttributes<HTMLImageElement>
    end?: React.ComponentProps<any>
    tabsContainer?: Partial<TabsProps>
    tab?: Partial<TabProps>
    tabMenuPopper?: Partial<PopperProps>
    tabMenuPaper?: Partial<PaperProps>
    tabMenuList?: Partial<MenuListProps>
    tabMenuItem?: Partial<MuiMenuItemProps>
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
  menuSubheaderLabel,
  includeThemeToggle,
  'aria-label': ariaLabel,
  children,
  slots = {},
  slotProps = {},
}: BNAppBarProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  // Dropdown tab state
  const [tabMenuAnchorEl, setTabMenuAnchorEl] = React.useState<HTMLElement | null>(null)
  const [openTabValue, setOpenTabValue] = React.useState<string | null>(null)

  const handleOpenTabMenu = (event: React.MouseEvent<HTMLElement>, value: string) => {
    setTabMenuAnchorEl(event.currentTarget)
    setOpenTabValue((prev) => (prev === value ? null : value))
  }

  const handleCloseTabMenu = () => {
    setOpenTabValue(null)
    setTabMenuAnchorEl(null)
  }

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev)
  }

  // Process menu items to inject theme toggle second-to-last (logout last) when requested
  const processedMenuItems = React.useMemo(() => {
    if (!menuItems || menuItems.length === 0) return menuItems

    const items = [...menuItems]
    if (includeThemeToggle && !items.some((i: any) => i.isThemeToggle)) {
      items.push({ label: 'Theme', isThemeToggle: true } as any)
    }
    const toggleIndex = items.findIndex((i) => (i as any).isThemeToggle === true)
    if (toggleIndex === -1) return items

    const toggleItem = items.splice(toggleIndex, 1)[0]
    if (!toggleItem) return items
    const logoutIndexAfterRemoval = items.findIndex((i) => /logout/i.test(i.label))
    if (logoutIndexAfterRemoval > -1) {
      // If a divider is immediately before Logout, insert before that divider
      const dividerBeforeLogoutIndex = logoutIndexAfterRemoval - 1
      const hasDividerBeforeLogout =
        dividerBeforeLogoutIndex >= 0 &&
        (items[dividerBeforeLogoutIndex] as any)?.divider === true
      const insertAt = hasDividerBeforeLogout
        ? dividerBeforeLogoutIndex
        : logoutIndexAfterRemoval
      items.splice(insertAt, 0, toggleItem)
    } else {
      // No logout present; append at end
      items.push(toggleItem)
    }
    return items
  }, [menuItems, includeThemeToggle])

  const drawerMenuItems: BNAppBarDrawerMenuItem[] | undefined = React.useMemo(() => {
    if (!processedMenuItems) return undefined
    return processedMenuItems.map((item) => {
      if (item.isThemeToggle) {
        return { isThemeToggle: true }
      }
      if (item.divider === true) {
        return { divider: true }
      }
      return {
        label: item.label,
        icon: item.icon,
        disabled: item.disabled,
        onClick: item.onClick,
        to: item.to as any,
      }
    }) as BNAppBarDrawerMenuItem[]
  }, [processedMenuItems])

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
            <>
              {(() => {
                const TabsComponent: React.ComponentType<TabsProps> =
                  slots.tabsContainer ?? Tabs
                const TabComponent: React.ComponentType<TabProps> = slots.tab ?? Tab
                return (
                  <TabsComponent
                    component="nav"
                    value={selectedTabValue}
                    aria-label="Main navigation tabs"
                    {...(slotProps.tabsContainer || {})}
                  >
                    {tabs.map((tab) => {
                      const hasChildren =
                        Array.isArray(tab.children) && tab.children.length > 0
                      if (!hasChildren) {
                        const {
                          children: _dropdownItems,
                          href: _href,
                          to: _to,
                          ...safeTabProps
                        } = tab as any
                        return (
                          <TabComponent
                            key={tab.value}
                            aria-label={`Navigate to ${tab.label}`}
                            tabIndex={0}
                            {...(slotProps.tab || {})}
                            {...safeTabProps}
                          />
                        )
                      }
                      return (
                        <TabComponent
                          key={tab.value}
                          aria-haspopup="menu"
                          aria-expanded={openTabValue === tab.value}
                          aria-controls={
                            openTabValue === tab.value ? `${tab.value}-menu` : undefined
                          }
                          label={tab.label}
                          icon={<ArrowDropDownIcon />}
                          iconPosition="end"
                          onClick={(e: React.MouseEvent<HTMLElement>) =>
                            handleOpenTabMenu(e, tab.value)
                          }
                          {...(slotProps.tab || {})}
                        />
                      )
                    })}
                  </TabsComponent>
                )
              })()}

              {/* Dropdown menu for tabs using Popper */}
              {(() => {
                const PopperComponent: React.ComponentType<PopperProps> =
                  slots.tabMenuPopper ?? Popper
                const PaperComponent: React.ComponentType<PaperProps> =
                  slots.tabMenuPaper ?? Paper
                const MenuListComponent: React.ComponentType<MenuListProps> =
                  slots.tabMenuList ?? MenuList
                const MenuItemComponent: React.ComponentType<MuiMenuItemProps> =
                  slots.tabMenuItem ?? MuiMenuItem
                const current = tabs.find((t) => t.value === openTabValue)
                return (
                  <PopperComponent
                    open={Boolean(openTabValue)}
                    anchorEl={tabMenuAnchorEl}
                    placement="bottom-start"
                    modifiers={[{ name: 'offset', options: { offset: [0, 4] } }]}
                    {...(slotProps.tabMenuPopper || {})}
                  >
                    <PaperComponent
                      elevation={4}
                      id={openTabValue ? `${openTabValue}-menu` : undefined}
                      {...(slotProps.tabMenuPaper || {})}
                    >
                      <ClickAwayListener onClickAway={handleCloseTabMenu}>
                        <MenuListComponent
                          autoFocusItem
                          {...(slotProps.tabMenuList || {})}
                        >
                          {current?.children?.map((item, index) => {
                            const { label, icon, onClick, ...menuItemProps } = item
                            const isDividerOnly =
                              (menuItemProps as any)?.divider === true &&
                              (!label || String(label).trim() === '')
                            if (isDividerOnly) {
                              return <Divider key={`divider-${index}`} component="li" />
                            }
                            return (
                              <MenuItemComponent
                                key={index}
                                onClick={() => {
                                  item.onClick?.()
                                  handleCloseTabMenu()
                                }}
                                LinkComponent={LinkComponent}
                                {...(slotProps.tabMenuItem || {})}
                                {...menuItemProps}
                              >
                                {icon}
                                {label}
                              </MenuItemComponent>
                            )
                          })}
                        </MenuListComponent>
                      </ClickAwayListener>
                    </PaperComponent>
                  </PopperComponent>
                )
              })()}
            </>
          )}
          {avatar && processedMenuItems && (
            <BNAnimatedMenuIcon
              menuItems={processedMenuItems}
              avatar={avatar}
              onDrawerToggle={handleDrawerToggle}
              drawerOpen={drawerOpen}
              LinkComponent={LinkComponent}
              subheaderLabel={menuSubheaderLabel}
              hasAppSwitcher={!!children}
            />
          )}
          {slots.end && React.createElement(slots.end, slotProps.end)}
        </Stack>
      </Toolbar>
      {avatar && processedMenuItems && (
        <BNAppBarDrawer
          tabs={tabs}
          menuItems={drawerMenuItems}
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
