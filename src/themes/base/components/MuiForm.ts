import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        textAlign: 'center',
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginTop: 0,
      },
    },
  },
}

export default components
