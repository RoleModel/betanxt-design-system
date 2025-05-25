import React from 'react'

import MuiAlert, { type AlertProps as MuiAlertProps } from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

export interface CustomAlertProps
  extends Omit<MuiAlertProps, 'variant' | 'title' | 'icon'> {
  variant?: 'outlined' | 'filled' | 'standard'
  title?: React.ReactNode
  showicon?: boolean
  centertext?: boolean
  action?: React.ReactNode
  actionButtonVariant?: 'text' | 'contained' | 'outlined'
  bordertop?: boolean
  icon?: MuiAlertProps['icon']
}

export const Alert: React.FC<CustomAlertProps> = ({
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
}) => {
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
