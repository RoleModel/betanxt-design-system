import React from 'react'

import { ListItem, type ListItemProps } from '@mui/material'

import { BNTypographyPair } from '../BNTypographyPair'
import type { BNTypographyPairProps } from '../BNTypographyPair'

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
}

const BNDataListItemClasses = {
  root: 'BNDataListItem',
}

export function BNDataListItem({
  primary,
  secondary,
  children,
  typographyPairProps,
  ...listItemProps
}: BNDataListItemProps) {
  return (
    <ListItem className={BNDataListItemClasses.root} {...listItemProps}>
      {children ||
        (primary && (
          <BNTypographyPair
            primary={primary}
            secondary={secondary}
            split
            fullWidth
            direction="row"
            {...typographyPairProps}
          />
        ))}
    </ListItem>
  )
}

export type { BNDataListItemProps }
