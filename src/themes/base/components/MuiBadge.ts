import type { ThemeOptions } from '@mui/material/styles'

// This is needed because MUI doesn't have a background color for default badge and setting a background color
// on the root element overrides the semantic colors background. We need to create a new color prop.
declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    neutral: true
  }
}

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
