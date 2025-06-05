import React from 'react'

import { Box, Tab, Tabs } from '@mui/material'
import type { BoxProps, TabProps, TabsProps, Theme } from '@mui/material'

export interface BNAppBarTabItem {
  label: string
  value: string | number
  href?: string
  disabled?: boolean
  component?: React.ElementType
  [key: string]: any // Allow additional props for routing
}

export interface BNAppBarTabsSlots {
  root?: React.ElementType
  tab?: React.ElementType
}

export interface BNAppBarTabsSlotProps {
  root?: Partial<TabsProps>
  tab?: Partial<TabProps>
}

export interface BNAppBarTabsProps extends Omit<TabsProps, 'children' | 'slotProps'> {
  slots?: BNAppBarTabsSlots
  slotProps?: BNAppBarTabsSlotProps
  tabs: BNAppBarTabItem[]
  value?: string | number | false
  onChange?: (event: React.SyntheticEvent, newValue: string | number) => void
  component?: React.ElementType
  LinkComponent?: React.ElementType
  containerProps?: BoxProps
}

export const BNAppBarTabs = ({
  slots = {},
  slotProps = {},
  tabs,
  value,
  onChange,
  component,
  LinkComponent,
  containerProps,
  ...tabsProps
}: BNAppBarTabsProps) => {
  const { root: RootSlot = Tabs, tab: TabSlot = Tab } = slots

  const { root: rootProps = {}, tab: tabProps = {} } = slotProps

  return (
    <Box
      sx={(theme: Theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        paddingBottom: theme.spacing(0.25),
        height: theme.layout?.navbarHeight,
        '& .MuiTabs-flexContainer': {
          height: theme.layout?.navbarHeight,
        },
      })}
    >
      <RootSlot
        value={value}
        onChange={onChange}
        sx={{
          flexGrow: 1,
          display: 'flex',
          ...containerProps?.sx,
          ...rootProps.sx,
        }}
        {...tabsProps}
        {...rootProps}
      >
        {tabs.map((tab) => {
          const {
            label,
            value: tabValue,
            href,
            component: tabComponent,
            disabled,
            ...otherTabProps
          } = tab

          // Determine the component to use for the tab
          let finalComponent = tabComponent || component || LinkComponent

          // If href is provided but no component is specified, use default anchor
          if (href && !finalComponent) {
            finalComponent = 'a'
          }

          const tabComponentProps: any = {
            label,
            value: tabValue,
            disabled,
            ...tabProps,
            ...otherTabProps,
          }

          // Add href if provided
          if (href) {
            tabComponentProps.href = href
          }

          // Add component if specified
          if (finalComponent) {
            tabComponentProps.component = finalComponent
          }

          return <TabSlot key={tabValue} {...tabComponentProps} />
        })}
      </RootSlot>
    </Box>
  )
}

// Common routing integrations

// React Router Link adapter
export const createRouterTabsAdapter = (RouterLink: React.ElementType) => {
  const RouterTabsAdapter = React.forwardRef<HTMLAnchorElement, any>((props, ref) => {
    const { href, to, ...other } = props
    // Map href (Material UI) -> to (react-router)
    return <RouterLink ref={ref} to={href || to} {...other} />
  })

  RouterTabsAdapter.displayName = 'RouterTabsAdapter'
  return RouterTabsAdapter
}

// Next.js Link adapter
export const createNextTabsAdapter = (NextLink: React.ElementType) => {
  const NextTabsAdapter = React.forwardRef<HTMLAnchorElement, any>((props, ref) => {
    const { href, ...other } = props
    return (
      <NextLink href={href} passHref legacyBehavior>
        <a ref={ref} {...other} />
      </NextLink>
    )
  })

  NextTabsAdapter.displayName = 'NextTabsAdapter'
  return NextTabsAdapter
}

export default BNAppBarTabs
