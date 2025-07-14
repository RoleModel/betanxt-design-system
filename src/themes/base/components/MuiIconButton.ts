import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { size: 'small' },
            style: {
              padding: 2,
            },
          },
          {
            props: { size: 'medium' },
            style: {
              padding: 4,
            },
          },
          {
            props: { size: 'large' },
            style: {
              padding: 6,
            },
          },
        ],
      },
    },
  },
}

export default components
