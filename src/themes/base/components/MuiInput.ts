import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0px 100px ${theme.vars.palette.inputOutlinedEnabledFill} inset`,
            WebkitTextFillColor: theme.vars.palette.text.primary,
            caretColor: theme.vars.palette.text.primary,
          },
          '.dark &:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0px 100px ${theme.vars.palette.inputOutlinedEnabledFill} inset`,
            WebkitTextFillColor: theme.vars.palette.text.primary,
            caretColor: theme.vars.palette.text.primary,
          },
        },
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.vars.palette.inputOutlinedEnabledFill,
        fontSize: theme.typography.body3.fontSize,
      }),
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.body3.fontSize,
        color: theme.vars.palette.text.secondary,
      }),
    },
  },
}

export default components
