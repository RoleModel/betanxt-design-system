import type { ReactNode } from 'react'

import {
  AlertTitle,
  Alert as MuiAlert,
  type AlertProps as MuiAlertProps,
} from '@mui/material'

export interface CustomAlertProps
  extends Omit<MuiAlertProps, 'variant' | 'title' | 'icon'> {
  variant?: 'outlined' | 'filled' | 'standard'
  title?: ReactNode
  showicon?: boolean
  centertext?: boolean
  action?: ReactNode
  actionButtonVariant?: 'text' | 'contained' | 'outlined'
  bordertop?: boolean
  icon?: MuiAlertProps['icon']
}

export function Alert({
  variant = 'standard',
  title,
  children,
  severity,
  icon: customIcon,
  showicon = true,
  centertext,
  action,
  bordertop,
  ...otherProps
}: CustomAlertProps) {
  const muiAlertIcon = showicon ? customIcon : false

  const allPropsForMuiAlert: any = {
    ...otherProps,
    variant,
    severity,
    icon: muiAlertIcon,
    action,
    showicon: showicon.toString(),
  }

  if (bordertop !== undefined) {
    allPropsForMuiAlert.bordertop = bordertop.toString()
  }
  if (centertext !== undefined) {
    allPropsForMuiAlert.centertext = centertext.toString()
  }

  return (
    <MuiAlert elevation={0} {...allPropsForMuiAlert}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  )
}
