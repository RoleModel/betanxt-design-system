import AlertTitle from '@mui/material/AlertTitle'
import MuiAlert from '@mui/material/Alert'
import type { AlertProps as MuiAlertProps } from '@mui/material/Alert'
import React from 'react'
import { styled } from '@mui/material/styles'


const CustomAlert = styled(MuiAlert, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<{
  ownerState?: {
    severity?: MuiAlertProps['severity']
    showTopBorder?: boolean
    showIcon?: boolean
    centerText?: boolean
    variant?: 'outlined' | 'filled' | 'standard'
  }
}>(({ theme, ownerState }) => ({
  ...(ownerState?.showTopBorder === true && {
    borderRadius: 8,
    borderTop: ownerState.severity
      ? `10px solid ${theme.vars.palette[ownerState.severity]?.main}`
      : `10px solid ${theme.vars.palette.primary.main}`,
  }),
  ...(ownerState?.showTopBorder === true &&
    ownerState?.variant === 'filled' && {
    borderTop: ownerState.severity
      ? `10px solid ${theme.vars.palette[ownerState.severity]?.light}`
      : `10px solid ${theme.vars.palette.primary.light}`,
  }),
  ...(ownerState?.centerText === true && {
    textAlign: 'center',
    '& .MuiAlert-message': {
      width: '100%',
      textAlign: 'center',
    },
  }),
  ...(ownerState?.showIcon === false && {
    '& .MuiAlert-icon': {
      display: 'none !important',
    },
  }),
  ...(ownerState?.variant === 'filled' &&
    ownerState?.severity && {
    '& .MuiButton-contained': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: theme.vars.palette[ownerState.severity]?.main,
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      },
    },
    '& .MuiButton-text': {
      color: 'inherit',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    },
    '& .MuiButton-outlined': {
      color: 'inherit',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
      },
    },
  }),
}))

interface CustomAlertProps extends Omit<MuiAlertProps, 'variant'> {
  variant?: 'outlined' | 'filled' | 'standard'
  title?: string
  showTopBorder?: boolean
  showIcon?: boolean
  centerText?: boolean
  action?: React.ReactNode
  actionButtonVariant?: 'text' | 'contained' | 'outlined'
}

export type { CustomAlertProps }

export const Alert: React.FC<CustomAlertProps> = ({
  variant = 'outlined',
  title,
  children,
  severity,
  icon,
  actionButtonVariant = 'text',
  showTopBorder = false,
  showIcon = true,
  centerText = false,
  action,
  ...other
}) => {
  const ownerState = {
    severity,
    showTopBorder,
    showIcon,
    centerText,
    variant,
  }

  return (
    <CustomAlert
      ownerState={ownerState}
      variant={variant}
      severity={severity}
      icon={showIcon ? icon : null}
      action={action}
      {...other}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </CustomAlert>
  )
}
