import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiDialogTitle-root': {
          fontSize: theme.typography.body1.fontSize,
          padding: theme.spacing(2),
        },
      }),
    },
  },
  MuiDialogTitle: {
    defaultProps: {
      variant: 'h6',
    },
  },
}

export default components
