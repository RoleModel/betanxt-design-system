import type { ThemeOptions } from '@mui/material/styles'

import { bnblue, orangered, persimmon, seagrass } from '../palette-tokens/brand-tokens'

const components: ThemeOptions['components'] = {
  MuiAlert: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
      standardSuccess: ({ theme }) => ({
        backgroundColor: seagrass[100],
        color: seagrass[600],
        backgroundImage: 'none',
        ...theme.applyStyles('dark', {
          backgroundColor: seagrass[900],
          color: seagrass[200],
        }),
      }),
      filledSuccess: ({ theme }) => ({
        backgroundColor: theme.vars.palette.success.main,
        color: theme.vars.palette.success.contrastText,
        ...theme.applyStyles('dark', {
          backgroundColor: theme.vars.palette.success.dark,
          color: theme.vars.palette.common.white,
        }),
      }),
      outlinedSuccess: ({ theme }) => ({
        border: `1px solid ${theme.vars.palette.success.main}`,
      }),
      standardError: ({ theme }) => ({
        backgroundColor: orangered[100],
        color: orangered[700],
        backgroundImage: 'none',
        ...theme.applyStyles('dark', {
          backgroundColor: orangered[900],
          color: orangered[200],
        }),
      }),
      outlinedError: ({ theme }) => ({
        border: `1px solid ${theme.vars.palette.error.main}`,
      }),
      filledError: ({ theme }) => ({
        backgroundColor: theme.vars.palette.error.main,
        color: theme.vars.palette.error.contrastText,
        ...theme.applyStyles('dark', {
          backgroundColor: theme.vars.palette.error.dark,
          color: theme.vars.palette.error.contrastText,
        }),
      }),
      standardWarning: ({ theme }) => ({
        backgroundColor: persimmon[100], //
        color: persimmon[800],
        backgroundImage: 'none',
        ...theme.applyStyles('dark', {
          backgroundColor: persimmon[800], //
          color: persimmon[200],
        }),
      }),
      outlinedWarning: ({ theme }) => ({
        border: `1px solid ${theme.vars.palette.warning.main}`,
      }),
      filledWarning: ({ theme }) => ({
        backgroundColor: theme.vars.palette.warning.main,
        color: theme.vars.palette.warning.contrastText,
        ...theme.applyStyles('dark', {
          backgroundColor: theme.vars.palette.warning.dark,
          color: theme.vars.palette.warning.contrastText,
        }),
      }),
      standardInfo: ({ theme }) => ({
        backgroundColor: bnblue[100],
        color: bnblue[600],
        backgroundImage: 'none',
        ...theme.applyStyles('dark', {
          backgroundColor: bnblue[900],
          color: bnblue[200],
        }),
      }),
      filledInfo: ({ theme }) => ({
        backgroundColor: theme.vars.palette.info.main,
        color: theme.vars.palette.info.contrastText,
        ...theme.applyStyles('dark', {
          backgroundColor: theme.vars.palette.info.dark,
          color: theme.vars.palette.common.white,
        }),
      }),
      outlinedInfo: ({ theme }) => ({
        border: `1px solid ${theme.vars.palette.info.main}`,
      }),
    },
  },
}

export default components
