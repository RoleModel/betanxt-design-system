import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiAutocomplete: {
    styleOverrides: {
      paper: ({ theme }) => ({
        boxShadow: theme.vars.shadows[8],
      }),
      option: {
        fontSize: '0.875rem',
      },
    },
  },
}

export default components
