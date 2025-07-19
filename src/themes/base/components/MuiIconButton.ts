import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { size: 'small' },
            style: {
              padding: 4,
            },
          },
          {
            props: { size: 'medium' },
            style: {
              padding: 6,
            },
          },
          {
            props: { size: 'large' },
            style: {
              padding: 8,
            },
          },
        ],
      },
    },
  },
}

export default components
