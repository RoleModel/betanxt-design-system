import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiAppBar: {
    defaultProps: {
      enableColorOnDark: false,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiToolbar-root': {
          minHeight: theme.layout?.navbarHeight,
        },
        '& .MuiTabs-root': {
          opacity: 1,
          paddingBottom: theme.spacing(0.25),
        },
        '& .MuiTabs-flexContainer': {
          height: theme.layout?.navbarHeight,
        },
        '&.MuiAppBar-root': {
          backgroundColor: theme.vars.palette.appBar.background,
          color: theme.vars.palette.appBar.defaultContrast,
          borderBottom: `1px solid ${theme.vars.palette.appBar.bottomBorder}`,
          backgroundImage: 'none',
          boxShadow: 'none',
          alignItems: 'stretch',
          justifyContent: 'center',
          '& .MuiTabs-indicator': {
            backgroundColor: theme.vars.palette.primary.main,
            height: 4,
          },
          '& .MuiTabs-root .Mui-selected': {
            color: theme.vars.palette.appBar.defaultContrast,
          },
          '& .MuiTab-root ': {
            transition: `all ${theme.transitions.duration.shorter}ms ease-in`,
            color: theme.vars.palette.appBar.defaultContrast,
            '&:hover': {
              color: theme.vars.palette.appBar.hover,
              boxShadow: `inset 0 -4px 0 0 ${theme.vars.palette.appBar.hover}`,
            },
          },
        },
      }),
    },
  },
}

export default components
