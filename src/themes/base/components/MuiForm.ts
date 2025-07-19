import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        textAlign: 'center',
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginTop: 0,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        marginRight: 16,
        gap: 2,
      },
      label: ({ theme }) => ({
        fontSize: theme.typography.body3.fontSize,
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.body3.fontSize,
      }),
    },
  },
  MuiCheckbox: {
    defaultProps: {
      size: 'small',
    },
    variants: [
      {
        props: { size: 'small' },
        style: {
          padding: 6,
        },
      },
    ],
  },
  MuiRadio: {
    defaultProps: {
      size: 'small',
    },
    variants: [
      {
        props: { size: 'small' },
        style: {
          padding: 6,
        },
      },
    ],
  },
}

export default components
