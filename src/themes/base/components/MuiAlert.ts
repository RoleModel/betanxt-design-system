import type { AlertProps } from '@mui/material/Alert'
import type { Theme, ThemeOptions } from '@mui/material/styles'

import { bnblue, orangered, persimmon, seagrass } from '../palette-tokens/brand-tokens'

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
                width: '100%',
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
        color: seagrass[700],
        border: `1px solid ${theme.vars.palette.success.main}`,
        ...theme.applyStyles('dark', {
          color: seagrass[200],
        }),
      }),
      outlinedError: ({ theme }) => ({
        color: orangered[700],
        border: `1px solid ${theme.vars.palette.error.main}`,
        ...theme.applyStyles('dark', {
          color: orangered[200],
        }),
      }),
      outlinedWarning: ({ theme }: { theme: Theme }) => ({
        border: `1px solid ${theme.vars.palette.warning.main}`,
        color: persimmon[700],
        ...theme.applyStyles('dark', {
          color: persimmon[200],
        }),
      }),
      outlinedInfo: ({ theme }: { theme: Theme }) => ({
        border: `1px solid ${theme.vars.palette.info.main}`,
        color: bnblue[600],
        ...theme.applyStyles('dark', {
          color: bnblue[200],
        }),
      }),
      standardSuccess: ({ theme }: { theme: Theme }) => ({
        backgroundColor: seagrass[100],
        color: seagrass[600],
        ...theme.applyStyles('dark', {
          backgroundColor: seagrass[800],
          color: seagrass[200],
        }),
      }),
      standardError: ({ theme }: { theme: Theme }) => ({
        backgroundColor: orangered[100],
        color: orangered[700],
        ...theme.applyStyles('dark', {
          backgroundColor: orangered[900],
          color: orangered[200],
        }),
      }),
      standardWarning: ({ theme }: { theme: Theme }) => ({
        backgroundColor: persimmon[100],
        color: persimmon[800],
        ...theme.applyStyles('dark', {
          backgroundColor: persimmon[800],
          color: persimmon[200],
        }),
      }),
      standardInfo: ({ theme }: { theme: Theme }) => ({
        backgroundColor: bnblue[100],
        color: bnblue[600],
        ...theme.applyStyles('dark', {
          backgroundColor: bnblue[900],
          color: bnblue[200],
        }),
      }),
    },
  },
}

export default components
