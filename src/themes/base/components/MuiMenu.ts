import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiMenu: {
    defaultProps: {
      MenuListProps: {
        dense: true,
      },
    },
  },
  MuiMenuItem: {
    defaultProps: {
      dense: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '&.MuiMenuItem-dense': {
          fontSize: theme.typography.body3.fontSize,
          '& .MuiStack-root': {
            alignItems: 'center',
          },
        },
      }),
    },
  },
}

export default components
