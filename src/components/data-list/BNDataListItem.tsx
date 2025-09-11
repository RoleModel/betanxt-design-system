import React from 'react'

import { ListItem, type ListItemProps } from '@mui/material'

import { BNTypographyPair } from '../BNTypographyPair'
import type { BNTypographyPairProps } from '../BNTypographyPair'

import { ListItemButton, type ListItemButtonProps } from '@mui/material'

interface BNDataListItemProps extends Omit<ListItemProps, 'children'> {
  /**
   * Primary text content and styling options
   * Required when children is not provided
   */
  primary?: BNTypographyPairProps['primary']
  /**
   * Secondary text content and styling options (optional)
   */
  secondary?: BNTypographyPairProps['secondary']
  /**
   * Custom children to override the default BNTypographyPair
   * When provided, primary and secondary props are ignored
   */
  children?: React.ReactNode
  /**
   * Additional props to pass to the BNTypographyPair component
   */
  typographyPairProps?: Partial<BNTypographyPairProps>
  /**
   * If true, renders ListItemButton inside ListItem for button styling
   */
  button?: boolean
  /**
   * Props to pass to ListItemButton (sx, className, etc)
   */
  listItemButtonProps?: ListItemButtonProps
}

const BNDataListItemClasses = {
  root: 'BNDataListItem',
}

export function BNDataListItem({
  primary,
  secondary,
  children,
  typographyPairProps,
  button = false,
  listItemButtonProps,
  ...listItemProps
}: BNDataListItemProps) {
  const content = children || (
    primary && (
      <BNTypographyPair
        primary={primary}
        secondary={secondary}
        split
        fullWidth
        direction="row"
        {...typographyPairProps}
      />
    )
  )

  if (button) {
    return (
      <ListItem
        className={BNDataListItemClasses.root}
        disablePadding
        disableGutters
        sx={{ padding: 0 }}
        {...listItemProps}
      >
        <ListItemButton
          sx={{
            cursor: 'pointer',
          }}
          {...listItemButtonProps}
        >
          {content}
        </ListItemButton>
      </ListItem>
    )
  }

  return (
    <ListItem
      className={BNDataListItemClasses.root}
      {...listItemProps}
    >
      {content}
    </ListItem>
  )
}

export type { BNDataListItemProps }
