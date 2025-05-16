import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiToggleButtonGroup: {
    styleOverrides: {
      grouped: ({ theme }) => ({
        borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.8)`,
        color: theme.vars.palette.primary.main,
        '&.Mui-selected': {
          backgroundColor: theme.vars.palette.primary.main,
          color: theme.palette.common.white,
        },
      }),
    },
  },
  MuiToggleButton: {
    defaultProps: {
      size: 'large',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: 'none',
        transition: `all ${theme.transitions.duration.shortest}ms ease-in`,
        fontSize: theme.typography.button.fontSize,
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
          },
        },
        '&:hover': {
          backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.14)`,
          color: theme.vars.palette.primary.dark,
        },
        '&.MuiToggleButton-sizeLarge': {
          padding: '0.45rem',
        },
        variants: [
          {
            props: { variant: 'report' },
            style: {
              '&.MuiButtonBase-root': {
                backgroundColor: theme.vars.palette.background.paper,
                borderColor: theme.vars.palette.divider,
                padding: theme.spacing(2),
                '&:hover': {
                  backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`,
                  borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`,
                },
              },
              '&.Mui-selected': {
                backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.14)`,
                borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.8)`,
              },
            },
          },
          {
            props: { variant: 'tall' },
            style: {
              '& .MuiButtonBase-root': {
                lineHeight: 24 / 14,
              },
            },
          },
        ],
      }),
    },
  },
}

export default components
