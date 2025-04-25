import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiCard: {
    defaultProps: {
      elevation: 5,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.vars.shape.borderRadius,
        height: '100%',
      }),
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: 'h3',
      },
      subheaderTypographyProps: {
        variant: 'subtitle1',
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.MuiCardContent-root:last-child': {
          paddingBottom: theme.spacing(2),
        },
      }),
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.MuiCardActions-root': {
          justifyContent: 'flex-end',
          padding: theme.spacing(1),
        },
      }),
    },
  },
}

export default components
