import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiTimelineSeparator: {
    styleOverrides: {
      root: {
        margin: '0 0 -0.75rem 0',
      },
    },
  },
  MuiTimelineDot: {
    styleOverrides: {
      root: {
        margin: '0.625rem 0 0 0',
      },
    },
  },
  MuiTimelineContent: {
    styleOverrides: {
      root: {
        '&.MuiTimelineContent-positionRight': {
          paddingLeft: '.5rem',
        },
      },
    },
  },
}

export default components
