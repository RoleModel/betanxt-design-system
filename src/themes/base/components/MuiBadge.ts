import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiBadge: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { color: 'neutral' },
            style: {},
          },
        ],
      },
    },
  },
}

export default components
