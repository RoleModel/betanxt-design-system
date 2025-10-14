import { Drawer, type DrawerProps } from '@mui/material'

import { BNDialogTitle, type BNDialogTitleProps } from './BNDialogTitle'

export interface BNDrawerProps extends DrawerProps {
  titleProps?: BNDialogTitleProps
}

export const BNDrawer = ({ titleProps, children, ...drawerProps }: BNDrawerProps) => {
  return (
    <Drawer {...drawerProps}>
      {titleProps && <BNDialogTitle {...titleProps} />}
      {children}
    </Drawer>
  )
}
