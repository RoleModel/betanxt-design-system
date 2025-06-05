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
        '&.MuiAppBar-root.MuiAppBar-colorPrimary': {
          backgroundColor: theme.vars.palette.appBarPrimary?.defaultFill,
          color: theme.vars.palette.appBarPrimary?.defaultContrast,
          backgroundImage: 'none',
          boxShadow: 'none',
          alignItems: 'stretch',
          justifyContent: 'center',
          '& .MuiTabs-indicator': {
            backgroundColor: theme.vars.palette.appBarPrimary?.tabIndicator,
            height: 4,
          },
          '& .MuiTabs-root .Mui-selected': {
            color: theme.vars.palette.appBarPrimary?.defaultContrast,
          },
          '& .MuiTab-root ': {
            transition: `all ${theme.transitions.duration.shorter}ms ease-in`,
            color: theme.vars.palette.appBarPrimary?.defaultContrast,
            '&:hover': {
              color: theme.vars.palette.appBarPrimary?.hover,
              boxShadow: `inset 0 -4px 0 0 ${theme.vars.palette.appBarPrimary?.hover}`,
            },
          },
        },
        '&.MuiAppBar-root.MuiAppBar-colorSecondary': {
          backgroundColor: theme.vars.palette.appBarSecondary?.defaultFill,
          backgroundImage: 'none',
          color: theme.vars.palette.appBarSecondary?.defaultContrast,
          borderBottom: `1px solid ${theme.vars.palette.primary.main}`,
          boxShadow: 'none',
          '& .MuiTabs-indicator': {
            backgroundColor: theme.vars.palette.appBarSecondary?.tabIndicator,
            height: 4,
          },
          '& .MuiTab-root ': {
            color: theme.vars.palette.appBarSecondary?.defaultContrast,
            transition: `all ${theme.transitions.duration.shorter}ms ease-in`,
          },
          '& .MuiTab-root:hover ': {
            color: theme.vars.palette.appBarSecondary?.hover,
            boxShadow: `inset 0 -4px 0 0 ${theme.vars.palette.appBarSecondary?.hover}`,
          },
          '& .MuiTabs-root .Mui-selected': {
            color: theme.vars.palette.appBarSecondary?.defaultContrast,
          },
        },
      }),
    },
  },
}

export default components
