import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiTabs: {
    styleOverrides: {
      root: {
        '& .MuiTab-root': {
          lineHeight: 1,
          textTransform: 'none',
        },
      },
    },
  },
}

export default components
