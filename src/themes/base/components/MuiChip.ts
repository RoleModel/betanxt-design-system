import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiChip: {
    styleOverrides: {
      root: {
        '&.MuiChip-outlined': {
          backgroundColor: 'transparent',
        },
        '&.MuiChip-sizeSmall': {
          lineHeight: '1.5rem',
        },
      },
    },
  },
}

export default components
