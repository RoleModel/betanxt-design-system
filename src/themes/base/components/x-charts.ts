import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiAreaElement: {
    styleOverrides: {
      root: {
        opacity: 0.2,
      },
    },
  },
  MuiChartsTooltip: {
    styleOverrides: {
      cell: ({ theme }) => ({
        fontSize: theme.typography.body3.fontSize,
        '.MuiTypography-root': {
          fontSize: theme.typography.body3.fontSize,
        },
      }),
    },
  },
}

export default components
