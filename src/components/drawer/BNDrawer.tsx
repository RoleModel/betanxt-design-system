import { Drawer, type DrawerProps, Typography } from '@mui/material'

import { BNDialogTitle, type BNDialogTitleProps } from './BNDialogTitle'

export interface BNDrawerProps extends DrawerProps {
  titleProps?: BNDialogTitleProps
  heading?: string
}

export const BNDrawer = ({
  titleProps,
  children,
  heading,
  ...drawerProps
}: BNDrawerProps) => {
  return (
    <Drawer {...drawerProps}>
      {titleProps && (
        <BNDialogTitle {...titleProps}>
          <Typography variant="h4">{heading}</Typography>
        </BNDialogTitle>
      )}
      {children}
    </Drawer>
  )
}
