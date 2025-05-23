import type { Theme, ThemeOptions } from '@mui/material/styles'
import type { AlertProps } from '@mui/material/Alert'

import { bnblue, orangered, persimmon, seagrass } from '../palette-tokens/brand-tokens'

interface AlertOwnerState {
  variant?: AlertProps['variant']
  severity?: AlertProps['severity']
  bordertop?: string
  centertext?: string
  showicon?: string
}

const components: ThemeOptions['components'] = {
  MuiAlert: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        variants: [
          ...(['error', 'warning', 'info', 'success'] as const).map((severity) => ({
            props: {
              bordertop: 'true',
              variant: 'filled' as AlertProps['variant'],
              severity,
            },
            style: ({ theme }: { theme: Theme }) => ({
              borderRadius: 8,
              borderTop: `10px solid ${theme.palette.mode === 'dark' ? theme.vars.palette[severity]?.main : theme.vars.palette[severity]?.light}`,
            }),
          })),
          ...(['error', 'warning', 'info', 'success'] as const).map((severity) => ({
            props: {
              bordertop: 'true',
              variant: 'standard' as AlertProps['variant'],
              severity,
            },
            style: ({ theme }: { theme: Theme }) => ({
              borderRadius: 8,
              borderTop: `10px solid ${theme.palette.mode === 'dark' ? theme.vars.palette[severity]?.dark : theme.vars.palette[severity]?.main}`,
            }),
          })),
          ...(['error', 'warning', 'info', 'success'] as const).map((severity) => ({
            props: {
              bordertop: 'true',
              variant: 'outlined' as AlertProps['variant'],
              severity,
            },
            style: {
              borderRadius: 8,
              borderWidth: '10px 1px 1px 1px !important',
            },
          })),
          {
            props: { centertext: 'true' },
            style: {
              textAlign: 'center',
              '& .MuiAlert-message': {
                textAlign: 'center',
              },
            },
          },
          {
            props: { showicon: 'false' },
            style: {
              '& .MuiAlert-icon': {
                display: 'none !important',
              },
            },
          },
          ...(['error', 'warning', 'info', 'success'] as const).map((severity) => ({
            props: { variant: 'filled' as AlertProps['variant'], severity },
            style: ({ theme }: { theme: Theme }) => ({
              '& .MuiButton-contained': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: theme.vars.palette[severity]?.dark,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              },
            }),
          })),
        ],
      },
      outlinedSuccess: ({ theme }: { theme: Theme }) => ({
        '--mui-palette-Alert-successColor': seagrass[700],
        '--mui-palette-Alert-successIconColor': 'inherit',
        border: `1px solid ${theme.vars.palette.success.main}`,
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-successColor': seagrass[200],
        }),
      }),
      outlinedError: ({ theme }) => ({
        '--mui-palette-Alert-errorColor': orangered[700],
        '--mui-palette-Alert-errorIconColor': 'inherit',
        border: `1px solid ${theme.vars.palette.error.main}`,
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-errorColor': orangered[200],
        }),
      }),
      outlinedWarning: ({ theme }: { theme: Theme }) => ({
        border: `1px solid ${theme.vars.palette.warning.main}`,
        '--mui-palette-Alert-warningColor': persimmon[700],
        '--mui-palette-Alert-warningIconColor': 'inherit',
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-warningColor': persimmon[200],
        }),
      }),
      outlinedInfo: ({ theme }: { theme: Theme }) => ({
        border: `1px solid ${theme.vars.palette.info.main}`,
        '--mui-palette-Alert-infoColor': bnblue[600],
        '--mui-palette-Alert-infoIconColor': 'inherit',
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-infoColor': bnblue[200],
        }),
      }),
      standardSuccess: ({ theme }: { theme: Theme }) => ({
        '--mui-palette-Alert-successStandardBg': seagrass[100],
        '--mui-palette-Alert-successColor': seagrass[600],
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-successStandardBg': seagrass[800],
          '--mui-palette-Alert-successColor': seagrass[200],
        }),
      }),
      standardError: ({ theme }: { theme: Theme }) => ({
        '--mui-palette-Alert-errorStandardBg': orangered[100],
        '--mui-palette-Alert-errorColor': orangered[700],
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-errorStandardBg': orangered[900],
          '--mui-palette-Alert-errorColor': orangered[200],
        }),
      }),
      standardWarning: ({ theme }: { theme: Theme }) => ({
        '--mui-palette-Alert-warningStandardBg': persimmon[100],
        '--mui-palette-Alert-warningColor': persimmon[800],
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-warningStandardBg': persimmon[800],
          '--mui-palette-Alert-warningColor': persimmon[200],
        }),
      }),
      standardInfo: ({ theme }: { theme: Theme }) => ({
        '--mui-palette-Alert-infoStandardBg': bnblue[100],
        '--mui-palette-Alert-infoColor': bnblue[600],
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-infoStandardBg': bnblue[900],
          '--mui-palette-Alert-infoColor': bnblue[200],
        }),
      }),
      filledSuccess: ({ theme }: { theme: Theme }) => ({
        '--mui-palette-Alert-successFilledBg': theme.vars.palette.success.main,
        '--mui-palette-Alert-successFilledColor': theme.vars.palette.success.contrastText,
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-successFilledBg': theme.vars.palette.success.dark,
          '--mui-palette-Alert-successFilledColor': theme.vars.palette.common.white,
        }),
      }),
      filledError: ({ theme }: { theme: Theme }) => ({
        '--mui-palette-Alert-errorFilledBg': theme.vars.palette.error.main,
        '--mui-palette-Alert-errorFilledColor': theme.vars.palette.error.contrastText,
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-errorFilledBg': theme.vars.palette.error.dark,
          '--mui-palette-Alert-errorFilledColor': theme.vars.palette.error.contrastText,
        }),
      }),
      filledWarning: ({ theme }: { theme: Theme }) => ({
        '--mui-palette-Alert-warningFilledBg': theme.vars.palette.warning.main,
        '--mui-palette-Alert-warningFilledColor': theme.vars.palette.warning.contrastText,
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-warningFilledBg': theme.vars.palette.warning.dark,
          '--mui-palette-Alert-warningFilledColor':
            theme.vars.palette.warning.contrastText,
        }),
      }),
      filledInfo: ({ theme }: { theme: Theme }) => ({
        '--mui-palette-Alert-infoFilledBg': theme.vars.palette.info.main,
        '--mui-palette-Alert-infoFilledColor': theme.vars.palette.info.contrastText,
        ...theme.applyStyles('dark', {
          '--mui-palette-Alert-infoFilledBg': theme.vars.palette.info.dark,
          '--mui-palette-Alert-infoFilledColor': theme.vars.palette.common.white,
        }),
      }),
    },
  },
}

export default components
