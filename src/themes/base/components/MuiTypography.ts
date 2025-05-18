import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        body1: 'p',
        body2: 'p',
        body3: 'p',
        pageTitle: 'h1',
        tableTitle: 'h2',
        appTitle: 'h1',
        condensed: 'p',
        hero: 'div',
        subtitle1: 'p',
        subtitle2: 'p',
        dataCell: 'div',
        dataHeader: 'div',
        caption: 'p',
      },
    },
  },
}

export default components
