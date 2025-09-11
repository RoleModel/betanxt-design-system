import React from 'react'

import { List, type ListProps } from '@mui/material'

interface BNDataListProps extends ListProps {
  /**
   * The content of the component, typically BNDataListItem components
   */
  children?: React.ReactNode
}

const BNDataListClasses = {
  root: 'BNDataList',
}

export function BNDataList({ children, className, ...listProps }: BNDataListProps) {
  return (
    <List className={`${BNDataListClasses.root} ${className || ''}`} {...listProps}>
      {children}
    </List>
  )
}

export type { BNDataListProps }
