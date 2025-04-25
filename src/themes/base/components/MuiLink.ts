import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.vars.palette.link,
        fontWeight: 500,
        textDecoration: 'none',
      }),
    },
  },
}

export default components
