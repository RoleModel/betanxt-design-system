import { type ReactNode } from 'react'

import { Box } from '@mui/material'

export function ControlBar({ children }: { children?: ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        px: 2,
        backgroundColor:
          theme.vars.palette.appSwitcher?.background || theme.palette.primary.main,
        minHeight: theme.layout?.appSwitcherHeight || 48,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.palette.common.white,
      })}
    >
      {children}
    </Box>
  )
}
