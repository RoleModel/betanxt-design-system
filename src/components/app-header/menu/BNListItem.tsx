import type { ReactNode } from 'react'

import {
  ListItem,
  ListItemButton,
  type ListItemButtonProps,
  ListItemIcon,
  type ListItemProps,
  ListItemText,
} from '@mui/material'

import { useHamburgerMenu } from '../hamburger-menu/BNHamburgerMenu'

export type BNListItemProps = {
  label: string
  hideMenuOnClick?: boolean
  icon?: ReactNode
} & ListItemButtonProps

export function BNListItem<C extends React.ElementType>(
  props: { label: string; hideMenuOnClick?: boolean } & ListItemButtonProps<
    C,
    { component?: C }
  >
) {
  const { hideMenuOnClick = true, children, label, ...otherProps } = props
  const { closeMenu } = useHamburgerMenu()

  // Allow time for click ripple animation so the user sees feedback their click was registered
  const closeMenuWithDelay = () => {
    if (hideMenuOnClick) {
      setTimeout(() => {
        closeMenu()
      }, 300)
    }
  }

  return (
    <ListItem onClick={closeMenuWithDelay} disablePadding role="menuitem">
      <ListItemButton
        role="button"
        aria-label={`Navigate to ${label}`}
        tabIndex={0}
        {...otherProps}
      >
        {props.icon && <ListItemIcon>{props.icon}</ListItemIcon>}
        <ListItemText primary={label} />
      </ListItemButton>
      {children}
    </ListItem>
  )
}
