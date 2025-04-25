import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiListItemText: {
    defaultProps: {
      primaryTypographyProps: {
        variant: 'body3',
      },
      secondaryTypographyProps: {
        variant: 'body3',
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 40,
      },
    },
  },
}

export default components
