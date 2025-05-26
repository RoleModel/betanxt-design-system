import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.vars.palette.link,
        fontWeight: 500,
      }),
    },
  },
}

export default components
