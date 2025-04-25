import type { ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true
  }
}

const components: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
      size: 'large',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        whiteSpace: 'nowrap',
        textTransform: 'none',
        '&.MuiButtonOutlined.MuiButtonColorWarning': theme.vars.palette.warning.dark,
        variants: [
          {
            props: { size: 'large' },
            style: ({ theme }) => ({
              fontSize: theme.typography.button.fontSize,
              height: '2.25rem',
            }),
          },
          {
            props: { size: 'medium' },
            style: ({ theme }) => ({
              fontSize: theme.typography.button.fontSize,
              height: '1.875rem',
            }),
          },
          {
            props: { size: 'small' },
            style: {
              fontSize: '0.8125rem',
              height: '1.5rem',
            },
          },
        ],
      }),
    },
  },
}

export default components
